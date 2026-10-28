import {
  ArbitrageOpportunity,
  ExchangeMeta,
  FilterState,
  ScanResultSummary,
  CexDexArbitrageOpportunity,
  CexDexSummary,
} from '../types';
import { safeApiFetch } from '../utils/api';
import { scannerEngine } from '../server/scanner';
import { cexDexScannerEngine } from '../server/dexScanner';
import { EXCHANGES } from '../server/exchanges';

let isClientScanning = false;
let lastClientScanTime = 0;

// -----------------------------------------------------------------------------
// In-Memory Caching & Request Coalescing (De-duplication) Layer
// -----------------------------------------------------------------------------

interface CacheEntry<T> {
  data: T;
  expiresAt: number;
}

const memoryCache = new Map<string, CacheEntry<any>>();
const inflightRequests = new Map<string, Promise<any>>();

// Cache TTL configurations (in milliseconds)
const TTL_BATCH = 15_000;         // 15 seconds for initial multi-feed batch
const TTL_ARBITRAGE = 15_000;     // 15 seconds for arbitrage query
const TTL_EXCHANGES = 60_000;     // 60 seconds for exchange metadata & latencies
const TTL_CEX_DEX = 15_000;       // 15 seconds for CEX vs DEX arbitrage
const TTL_SPREADS = 20_000;       // 20 seconds for exchange spread breakdown
const TTL_MOVERS = 25_000;        // 25 seconds for 24h top movers
const TTL_SYMBOL = 30_000;        // 30 seconds for deep symbol details

/**
 * Retrieve an item from the cache if not expired.
 */
function getFromCache<T>(key: string): T | null {
  const entry = memoryCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    memoryCache.delete(key);
    return null;
  }
  return entry.data as T;
}

/**
 * Save an item to the cache with an explicit TTL.
 */
function saveToCache<T>(key: string, data: T, ttlMs: number): void {
  if (data === null || data === undefined) return;
  memoryCache.set(key, {
    data,
    expiresAt: Date.now() + ttlMs,
  });
}

/**
 * Request Coalescing (Thundering Herd Protection):
 * Shares a single pending in-flight Promise among all identical concurrent requests.
 */
function coalesce<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
  if (inflightRequests.has(key)) {
    return inflightRequests.get(key) as Promise<T>;
  }
  const promise = fetcher().finally(() => {
    inflightRequests.delete(key);
  });
  inflightRequests.set(key, promise);
  return promise;
}

/**
 * Helper to build stable cache keys from filter objects.
 */
function buildFilterKey(prefix: string, obj: Record<string, any>): string {
  const sorted = Object.keys(obj)
    .sort()
    .filter((k) => obj[k] !== undefined && obj[k] !== '')
    .map((k) => {
      const val = Array.isArray(obj[k]) ? obj[k].join(',') : String(obj[k]);
      return `${k}=${val}`;
    })
    .join('&');
  return `${prefix}:${sorted}`;
}

/**
 * Universal Data Service with Batching & In-Memory Multi-Tier Caching
 * Seamlessly bridges Backend Express API & In-Browser Client Engine.
 */
export const dataService = {
  /**
   * High-Performance Initial Load Batching
   * Fetches Arbitrage Opportunities, Exchange Metadata, and CEX-DEX Opportunities
   * in a SINGLE HTTP roundtrip to maximize initial load performance.
   *
   * Also populates individual query caches so subsequent page interactions are instantaneous.
   */
  async getInitialBatch(
    filter: FilterState,
    forceRefresh = false
  ): Promise<{
    oppsResult: {
      summary: ScanResultSummary;
      count: number;
      opportunities: ArbitrageOpportunity[];
      source: 'server' | 'client';
    };
    exData: ExchangeMeta[];
    cexDexResult: {
      summary: CexDexSummary;
      count: number;
      opportunities: CexDexArbitrageOpportunity[];
    };
  }> {
    const batchKey = buildFilterKey('batch', filter);

    if (!forceRefresh) {
      const cached = getFromCache<{
        oppsResult: {
          summary: ScanResultSummary;
          count: number;
          opportunities: ArbitrageOpportunity[];
          source: 'server' | 'client';
        };
        exData: ExchangeMeta[];
        cexDexResult: {
          summary: CexDexSummary;
          count: number;
          opportunities: CexDexArbitrageOpportunity[];
        };
      }>(batchKey);
      if (cached) {
        return cached;
      }
    }

    return coalesce(batchKey, async () => {
      const params = new URLSearchParams();
      if (filter.search) params.set('search', filter.search);
      if (filter.minSpread !== undefined) params.set('minSpread', String(filter.minSpread));
      if (filter.maxSpread !== undefined && filter.maxSpread > 0) params.set('maxSpread', String(filter.maxSpread));
      if (filter.openStatusOnly) params.set('openStatusOnly', 'true');
      if (filter.contractVerifiedOnly) params.set('contractVerifiedOnly', 'true');
      if (filter.tokenTier && filter.tokenTier !== 'ALL') params.set('tokenTier', filter.tokenTier);
      if (filter.buyExchanges && filter.buyExchanges.length > 0) {
        params.set('buyExchanges', filter.buyExchanges.join(','));
      }
      if (filter.sellExchanges && filter.sellExchanges.length > 0) {
        params.set('sellExchanges', filter.sellExchanges.join(','));
      }
      if (filter.sortBy) params.set('sortBy', filter.sortBy);
      if (filter.sortOrder) params.set('sortOrder', filter.sortOrder);

      // 1. Attempt single batched HTTP endpoint
      try {
        const batchServerData = await safeApiFetch<{
          arbitrage: {
            summary: ScanResultSummary;
            count: number;
            opportunities: ArbitrageOpportunity[];
          };
          exchanges: ExchangeMeta[];
          cexDex: {
            summary: CexDexSummary;
            count: number;
            opportunities: CexDexArbitrageOpportunity[];
          };
        }>(`/api/batch?${params.toString()}`, { retries: 1, baseDelay: 300 });

        if (batchServerData?.arbitrage && Array.isArray(batchServerData.arbitrage.opportunities)) {
          const result = {
            oppsResult: {
              summary: batchServerData.arbitrage.summary,
              count: batchServerData.arbitrage.count ?? batchServerData.arbitrage.opportunities.length,
              opportunities: batchServerData.arbitrage.opportunities,
              source: 'server' as const,
            },
            exData: batchServerData.exchanges || [],
            cexDexResult: batchServerData.cexDex || {
              summary: cexDexScannerEngine.getSummary(),
              count: 0,
              opportunities: [],
            },
          };

          // Cache the batched result
          saveToCache(batchKey, result, TTL_BATCH);

          // Warm individual caches so child components hit 0ms cache
          const arbKey = buildFilterKey('arbitrage', filter);
          saveToCache(arbKey, result.oppsResult, TTL_ARBITRAGE);
          saveToCache('exchanges:all', result.exData, TTL_EXCHANGES);
          saveToCache(
            buildFilterKey('cexdex', { search: filter.search, tokenTier: filter.tokenTier }),
            result.cexDexResult,
            TTL_CEX_DEX
          );

          return result;
        }
      } catch {
        // Fall back to parallel individual endpoints or client scanner
      }

      // 2. Fallback: Fetch in parallel using individual cached methods
      const [oppsResult, exData, cexDexResult] = await Promise.all([
        dataService.getArbitrageOpportunities(filter, forceRefresh),
        dataService.getExchanges(forceRefresh),
        dataService.getCexDexOpportunities(
          {
            search: filter.search,
            tokenTier: filter.tokenTier,
          },
          forceRefresh
        ),
      ]);

      const combined = { oppsResult, exData, cexDexResult };
      saveToCache(batchKey, combined, TTL_BATCH);
      return combined;
    });
  },

  /**
   * Fetch Arbitrage Opportunities with Caching & De-duplication
   */
  async getArbitrageOpportunities(
    filter: FilterState,
    forceRefresh = false
  ): Promise<{
    summary: ScanResultSummary;
    count: number;
    opportunities: ArbitrageOpportunity[];
    source: 'server' | 'client';
  }> {
    const cacheKey = buildFilterKey('arbitrage', filter);

    if (!forceRefresh) {
      const cached = getFromCache<{
        summary: ScanResultSummary;
        count: number;
        opportunities: ArbitrageOpportunity[];
        source: 'server' | 'client';
      }>(cacheKey);
      if (cached) return cached;
    }

    return coalesce(cacheKey, async () => {
      const params = new URLSearchParams();
      if (filter.search) params.set('search', filter.search);
      if (filter.minSpread !== undefined) params.set('minSpread', String(filter.minSpread));
      if (filter.maxSpread !== undefined && filter.maxSpread > 0) params.set('maxSpread', String(filter.maxSpread));
      if (filter.openStatusOnly) params.set('openStatusOnly', 'true');
      if (filter.contractVerifiedOnly) params.set('contractVerifiedOnly', 'true');
      if (filter.tokenTier && filter.tokenTier !== 'ALL') params.set('tokenTier', filter.tokenTier);
      if (filter.buyExchanges && filter.buyExchanges.length > 0) {
        params.set('buyExchanges', filter.buyExchanges.join(','));
      }
      if (filter.sellExchanges && filter.sellExchanges.length > 0) {
        params.set('sellExchanges', filter.sellExchanges.join(','));
      }
      if (filter.sortBy) params.set('sortBy', filter.sortBy);
      if (filter.sortOrder) params.set('sortOrder', filter.sortOrder);

      // 1. Attempt Server API
      try {
        const serverData = await safeApiFetch<{
          summary: ScanResultSummary;
          count: number;
          opportunities: ArbitrageOpportunity[];
        }>(`/api/arbitrage?${params.toString()}`, { retries: 1, baseDelay: 300 });

        if (serverData && Array.isArray(serverData.opportunities) && serverData.summary) {
          const res = {
            summary: serverData.summary,
            count: serverData.count ?? serverData.opportunities.length,
            opportunities: serverData.opportunities,
            source: 'server' as const,
          };
          saveToCache(cacheKey, res, TTL_ARBITRAGE);
          return res;
        }
      } catch {
        // Fallback to client
      }

      // 2. Fallback to Direct In-Browser Scanning Engine (e.g. on Vercel Static)
      if (Date.now() - lastClientScanTime > 12000 && !isClientScanning) {
        isClientScanning = true;
        try {
          await scannerEngine.scanAllExchanges();
          lastClientScanTime = Date.now();
        } catch (err) {
          console.warn('In-browser scan cycle notice:', err);
        } finally {
          isClientScanning = false;
        }
      }

      const filtered = scannerEngine.getFilteredOpportunities({
        search: filter.search,
        minSpread: filter.minSpread,
        maxSpread: filter.maxSpread,
        openStatusOnly: filter.openStatusOnly,
        contractVerifiedOnly: filter.contractVerifiedOnly,
        tokenTier: filter.tokenTier,
        buyExchanges: filter.buyExchanges,
        sellExchanges: filter.sellExchanges,
        sortBy: filter.sortBy,
        sortOrder: filter.sortOrder,
      });

      const res = {
        summary: scannerEngine.getSummary(),
        count: filtered.length,
        opportunities: filtered,
        source: 'client' as const,
      };
      saveToCache(cacheKey, res, TTL_ARBITRAGE);
      return res;
    });
  },

  /**
   * Fetch Exchange Metadata & Latencies with 60s Cache
   */
  async getExchanges(forceRefresh = false): Promise<ExchangeMeta[]> {
    const cacheKey = 'exchanges:all';

    if (!forceRefresh) {
      const cached = getFromCache<ExchangeMeta[]>(cacheKey);
      if (cached && cached.length > 0) return cached;
    }

    return coalesce(cacheKey, async () => {
      try {
        const serverMetas = await safeApiFetch<ExchangeMeta[]>('/api/exchanges', { retries: 1 });
        if (Array.isArray(serverMetas) && serverMetas.length > 0) {
          saveToCache(cacheKey, serverMetas, TTL_EXCHANGES);
          return serverMetas;
        }
      } catch {}

      const localMetas = scannerEngine.getExchangeMetas();
      saveToCache(cacheKey, localMetas, TTL_EXCHANGES);
      return localMetas;
    });
  },

  /**
   * Fetch CEX vs DEX Arbitrage Opportunities with Caching
   */
  async getCexDexOpportunities(
    params: {
      search?: string;
      direction?: 'ALL' | 'CEX_TO_DEX' | 'DEX_TO_CEX';
      chain?: string;
      dex?: string;
      cex?: string;
      tokenTier?: 'ALL' | 'SMALL_MICRO' | 'MAJOR';
      minSpread?: number;
      minDexLiquidity?: number;
      verifiedOnly?: boolean;
      sortBy?: 'spread' | 'profit' | 'liquidity' | 'dexVolume' | 'symbol';
      sortOrder?: 'asc' | 'desc';
    } = {},
    forceRefresh = false
  ): Promise<{
    summary: CexDexSummary;
    count: number;
    opportunities: CexDexArbitrageOpportunity[];
  }> {
    const cacheKey = buildFilterKey('cexdex', params);

    if (!forceRefresh) {
      const cached = getFromCache<{
        summary: CexDexSummary;
        count: number;
        opportunities: CexDexArbitrageOpportunity[];
      }>(cacheKey);
      if (cached) return cached;
    }

    return coalesce(cacheKey, async () => {
      try {
        const query = new URLSearchParams();
        if (params.search) query.set('search', params.search);
        if (params.direction) query.set('direction', params.direction);
        if (params.chain) query.set('chain', params.chain);
        if (params.dex) query.set('dex', params.dex);
        if (params.cex) query.set('cex', params.cex);
        if (params.tokenTier) query.set('tokenTier', params.tokenTier);
        if (params.minSpread !== undefined) query.set('minSpread', String(params.minSpread));
        if (params.minDexLiquidity !== undefined) query.set('minDexLiquidity', String(params.minDexLiquidity));
        if (params.verifiedOnly) query.set('verifiedOnly', 'true');
        if (params.sortBy) query.set('sortBy', params.sortBy);
        if (params.sortOrder) query.set('sortOrder', params.sortOrder);

        const serverData = await safeApiFetch<{
          summary: CexDexSummary;
          count: number;
          opportunities: CexDexArbitrageOpportunity[];
        }>(`/api/cex-dex-arbitrage?${query.toString()}`, { retries: 1 });

        if (serverData && Array.isArray(serverData.opportunities) && serverData.summary) {
          saveToCache(cacheKey, serverData, TTL_CEX_DEX);
          return serverData;
        }
      } catch {}

      // In-browser fallback
      const opps = cexDexScannerEngine.getFilteredOpportunities(params);
      const res = {
        summary: cexDexScannerEngine.getSummary(),
        count: opps.length,
        opportunities: opps,
      };
      saveToCache(cacheKey, res, TTL_CEX_DEX);
      return res;
    });
  },

  /**
   * Trigger Immediate Rescan
   * Clears the cache, forces fresh data retrieval from all 15+ spot exchanges and DEX pools,
   * updates live prices, recalculates all spreads, and returns the fresh summary.
   */
  async triggerScanNow(): Promise<ScanResultSummary> {
    // Invalidate all caches on explicit user rescan
    dataService.clearCache();

    isClientScanning = true;
    try {
      // 1. Trigger backend scan if server is available
      const serverPromise = safeApiFetch<{ success: boolean; summary: ScanResultSummary }>('/api/scan', {
        method: 'POST',
        retries: 1,
      }).catch(() => null);

      // 2. Concurrently execute client-side scan across all exchanges
      const clientScanPromise = (async () => {
        try {
          await scannerEngine.scanAllExchanges();
          await cexDexScannerEngine.fetchAllDexPrices();
          const exchangeNames: Record<string, string> = {};
          for (const ex of EXCHANGES) {
            exchangeNames[ex.id] = ex.name;
          }
          cexDexScannerEngine.computeOpportunities(
            (scannerEngine as any).priceCache,
            (scannerEngine as any).statusCache,
            exchangeNames
          );
        } catch (e) {
          console.warn('Scan trigger notice:', e);
        }
      })();

      const [serverRes] = await Promise.all([serverPromise, clientScanPromise]);
      lastClientScanTime = Date.now();

      if (serverRes?.summary) {
        return serverRes.summary;
      }
      return scannerEngine.getSummary();
    } finally {
      isClientScanning = false;
    }
  },

  /**
   * Fetch Single Exchange Spread Analysis with Caching
   */
  async getExchangeSpreads(
    params: {
      exchange?: string;
      search?: string;
      tokenTier?: 'ALL' | 'SMALL_MICRO' | 'MAJOR';
      spreadCategory?: 'ALL' | 'TIGHT' | 'MODERATE' | 'WIDE' | 'HIGH';
      openStatusOnly?: boolean;
      minSpread?: number;
      maxSpread?: number;
      sortBy?: string;
      sortOrder?: 'asc' | 'desc';
    } = {},
    forceRefresh = false
  ): Promise<any> {
    const cleanExchange = params.exchange || 'mexc';
    const cacheKey = buildFilterKey(`spreads:${cleanExchange}`, params);

    if (!forceRefresh) {
      const cached = getFromCache<any>(cacheKey);
      if (cached) return cached;
    }

    return coalesce(cacheKey, async () => {
      try {
        const query = new URLSearchParams();
        query.set('exchange', cleanExchange);
        if (params.search) query.set('search', params.search);
        if (params.tokenTier && params.tokenTier !== 'ALL') query.set('tokenTier', params.tokenTier);
        if (params.spreadCategory && params.spreadCategory !== 'ALL') query.set('spreadCategory', params.spreadCategory);
        if (params.openStatusOnly) query.set('openStatusOnly', 'true');
        if (params.minSpread !== undefined) query.set('minSpread', String(params.minSpread));
        if (params.maxSpread !== undefined) query.set('maxSpread', String(params.maxSpread));
        if (params.sortBy) query.set('sortBy', params.sortBy);
        if (params.sortOrder) query.set('sortOrder', params.sortOrder);

        const serverData = await safeApiFetch<any>(`/api/exchange-spreads?${query.toString()}`, {
          retries: 2,
          baseDelay: 400,
        });
        if (serverData && Array.isArray(serverData.tokens) && serverData.tokens.length > 0) {
          saveToCache(cacheKey, serverData, TTL_SPREADS);
          return serverData;
        }
      } catch {}

      const localSpreads = scannerEngine.getExchangeSpreads({
        exchangeId: cleanExchange,
        search: params.search,
        tokenTier: params.tokenTier,
        spreadCategory: params.spreadCategory,
        openStatusOnly: params.openStatusOnly,
        minSpread: params.minSpread,
        maxSpread: params.maxSpread,
        sortBy: params.sortBy as any,
        sortOrder: params.sortOrder,
      });

      saveToCache(cacheKey, localSpreads, TTL_SPREADS);
      return localSpreads;
    });
  },

  /**
   * Fetch 24h Top Gainers & Losers with Arbitrage Sourcing & Caching
   */
  async getExchangeMovers(
    exchangeId: string = 'mexc',
    limit: number = 20,
    forceRefresh = false
  ): Promise<{ gainers: any[]; losers: any[] }> {
    const cleanId = (exchangeId || 'mexc').toLowerCase().trim();
    const cacheKey = `movers:${cleanId}:${limit}`;

    if (!forceRefresh) {
      const cached = getFromCache<{ gainers: any[]; losers: any[] }>(cacheKey);
      if (cached && (cached.gainers.length > 0 || cached.losers.length > 0)) {
        return cached;
      }
    }

    return coalesce(cacheKey, async () => {
      try {
        const serverData = await safeApiFetch<any>(
          `/api/movers?exchange=${encodeURIComponent(cleanId)}&limit=${limit}`,
          { retries: 2, baseDelay: 400 }
        );
        if (
          serverData &&
          ((Array.isArray(serverData.gainers) && serverData.gainers.length > 0) ||
            (Array.isArray(serverData.losers) && serverData.losers.length > 0))
        ) {
          saveToCache(cacheKey, serverData, TTL_MOVERS);
          return serverData;
        }
      } catch {}

      // In-browser fallback: check on-demand fetch
      try {
        const clientMovers = await scannerEngine.fetchExchangeMoversOnDemand(cleanId, limit);
        if (clientMovers.gainers.length > 0 || clientMovers.losers.length > 0) {
          saveToCache(cacheKey, clientMovers, TTL_MOVERS);
          return clientMovers;
        }
      } catch {}

      const fallback = scannerEngine.getExchangeMovers(cleanId, limit);
      if (fallback.gainers.length > 0 || fallback.losers.length > 0) {
        saveToCache(cacheKey, fallback, TTL_MOVERS);
      }
      return fallback;
    });
  },

  /**
   * Fetch Deep Details for a Specific Symbol with 30s Caching
   */
  async getSymbolDetail(symbol: string, forceRefresh = false): Promise<any> {
    const cleanSymbol = symbol.toUpperCase().trim();
    const cacheKey = `symbol:${cleanSymbol}`;

    if (!forceRefresh) {
      const cached = getFromCache<any>(cacheKey);
      if (cached) return cached;
    }

    return coalesce(cacheKey, async () => {
      try {
        const serverData = await safeApiFetch<any>(`/api/symbol/${encodeURIComponent(cleanSymbol)}`, { retries: 1 });
        if (serverData && serverData.symbol) {
          saveToCache(cacheKey, serverData, TTL_SYMBOL);
          return serverData;
        }
      } catch {}

      const localDetail = scannerEngine.getSymbolDetail(cleanSymbol);
      if (localDetail) {
        saveToCache(cacheKey, localDetail, TTL_SYMBOL);
      }
      return localDetail;
    });
  },

  /**
   * Manually Clear Entire Cache
   */
  clearCache(): void {
    memoryCache.clear();
    inflightRequests.clear();
  },

  /**
   * Inspect Cache Diagnostics
   */
  getCacheStats(): {
    entriesCount: number;
    inflightCount: number;
    keys: string[];
  } {
    return {
      entriesCount: memoryCache.size,
      inflightCount: inflightRequests.size,
      keys: Array.from(memoryCache.keys()),
    };
  },
};
