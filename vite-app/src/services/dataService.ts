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

/**
 * Universal Data Service
 * Seamlessly bridges Backend Express API & In-Browser Client Engine.
 * 
 * Guarantees 100% data availability on:
 * - Vercel (Static / Serverless)
 * - Cloud Run / Docker
 * - Google AI Studio
 * - Netlify / GitHub Pages
 */
export const dataService = {
  /**
   * Fetch Arbitrage Opportunities
   * Tries backend first; if on Vercel/Static hosting, runs in-browser engine directly.
   */
  async getArbitrageOpportunities(filter: FilterState): Promise<{
    summary: ScanResultSummary;
    count: number;
    opportunities: ArbitrageOpportunity[];
    source: 'server' | 'client';
  }> {
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
        return {
          summary: serverData.summary,
          count: serverData.count ?? serverData.opportunities.length,
          opportunities: serverData.opportunities,
          source: 'server',
        };
      }
    } catch {
      // Server API unreachable or returning static HTML on Vercel
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

    return {
      summary: scannerEngine.getSummary(),
      count: filtered.length,
      opportunities: filtered,
      source: 'client',
    };
  },

  /**
   * Fetch Exchange Metadata & Latencies
   */
  async getExchanges(): Promise<ExchangeMeta[]> {
    try {
      const serverMetas = await safeApiFetch<ExchangeMeta[]>('/api/exchanges', { retries: 1 });
      if (Array.isArray(serverMetas) && serverMetas.length > 0) {
        return serverMetas;
      }
    } catch {}

    return scannerEngine.getExchangeMetas();
  },

  /**
   * Fetch CEX vs DEX Arbitrage Opportunities
   */
  async getCexDexOpportunities(params: {
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
  } = {}): Promise<{
    summary: CexDexSummary;
    count: number;
    opportunities: CexDexArbitrageOpportunity[];
  }> {
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
        return serverData;
      }
    } catch {}

    // In-browser fallback
    const opps = cexDexScannerEngine.getFilteredOpportunities(params);
    return {
      summary: cexDexScannerEngine.getSummary(),
      count: opps.length,
      opportunities: opps,
    };
  },

  /**
   * Trigger Immediate Rescan
   * Forces fresh data retrieval from all 15+ spot exchanges and DEX pools,
   * updates live prices, recalculates all spreads, and returns the fresh summary.
   */
  async triggerScanNow(): Promise<ScanResultSummary> {
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
   * Fetch Single Exchange Spread Analysis
   */
  async getExchangeSpreads(params: {
    exchange?: string;
    search?: string;
    tokenTier?: 'ALL' | 'SMALL_MICRO' | 'MAJOR';
    spreadCategory?: 'ALL' | 'TIGHT' | 'MODERATE' | 'WIDE' | 'HIGH';
    openStatusOnly?: boolean;
    minSpread?: number;
    maxSpread?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  } = {}): Promise<any> {
    const cleanExchange = params.exchange || 'mexc';
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

      const serverData = await safeApiFetch<any>(`/api/exchange-spreads?${query.toString()}`, { retries: 2, baseDelay: 400 });
      if (serverData && Array.isArray(serverData.tokens) && serverData.tokens.length > 0) return serverData;
    } catch {}

    return scannerEngine.getExchangeSpreads({
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
  },

  /**
   * Fetch 24h Top Gainers & Losers with Arbitrage Sourcing
   */
  async getExchangeMovers(exchangeId: string = 'mexc', limit: number = 20): Promise<{ gainers: any[]; losers: any[] }> {
    const cleanId = (exchangeId || 'mexc').toLowerCase().trim();
    try {
      const serverData = await safeApiFetch<any>(`/api/movers?exchange=${encodeURIComponent(cleanId)}&limit=${limit}`, { retries: 2, baseDelay: 400 });
      if (serverData && (Array.isArray(serverData.gainers) && serverData.gainers.length > 0 || Array.isArray(serverData.losers) && serverData.losers.length > 0)) {
        return serverData;
      }
    } catch {}

    // In-browser fallback: check on-demand fetch
    try {
      const clientMovers = await scannerEngine.fetchExchangeMoversOnDemand(cleanId, limit);
      if (clientMovers.gainers.length > 0 || clientMovers.losers.length > 0) {
        return clientMovers;
      }
    } catch {}

    return scannerEngine.getExchangeMovers(cleanId, limit);
  },

  /**
   * Fetch Deep Details for a Specific Symbol
   */
  async getSymbolDetail(symbol: string): Promise<any> {
    try {
      const serverData = await safeApiFetch<any>(`/api/symbol/${encodeURIComponent(symbol)}`, { retries: 1 });
      if (serverData && serverData.symbol) return serverData;
    } catch {}

    return scannerEngine.getSymbolDetail(symbol);
  },
};
