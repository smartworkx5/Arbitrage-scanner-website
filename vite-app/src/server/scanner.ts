import { EXCHANGES, ExchangeDefinition, computeOrderDepth, fetchL2OrderBookTopLevel, inferSupportedChains, calculateWithdrawalFees } from './exchanges';
import { evaluateContractMatch, getVerifiedTokenInfo } from './tokenRegistry';
import { cexDexScannerEngine, TRACKED_DEX_TOKENS } from './dexScanner';
import {
  ArbitrageOpportunity,
  ExchangeMeta,
  ExchangePrices,
  CurrencyStatus,
  ScanResultSummary,
  FilterOptions,
  SymbolDetailPrice,
  ExchangeTokenSpread,
  ExchangeSpreadStats,
  ExchangeSpreadOverview,
  ExchangeSpreadFilterOptions,
} from './types';

export function normalizeExchangeId(rawId: string = ''): string {
  const clean = (rawId || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  if (clean === 'mexc' || clean === 'mex') return 'mexc';
  if (clean === 'gateio' || clean === 'gate') return 'gateio';
  if (clean === 'kucoin') return 'kucoin';
  if (clean === 'bybit') return 'bybit';
  if (clean === 'okx' || clean === 'okex') return 'okx';
  if (clean === 'bitget') return 'bitget';
  if (clean === 'lbank') return 'lbank';
  if (clean === 'htx' || clean === 'huobi') return 'htx';
  if (clean === 'bitmart') return 'bitmart';
  if (clean === 'xt' || clean === 'xtcom') return 'xt';
  if (clean === 'bitrue') return 'bitrue';
  if (clean === 'cex' || clean === 'cexio') return 'cex';
  if (clean === 'coinstore') return 'coinstore';
  if (clean === 'coinex') return 'coinex';
  if (clean === 'binance') return 'binance';
  return clean || 'mexc';
}

class ArbitrageScannerEngine {
  private exchangeMetaMap = new Map<string, ExchangeMeta>();
  private priceCache = new Map<string, ExchangePrices>(); // exId -> ExchangePrices
  private statusCache = new Map<string, Record<string, CurrencyStatus>>(); // exId -> CurrencyStatus map
  private opportunities: ArbitrageOpportunity[] = [];
  
  private lastScanTimestamp = 0;
  private scanDurationMs = 0;
  private isScanning = false;
  private autoScanTimer: NodeJS.Timeout | null = null;
  private currentScanPromise: Promise<ArbitrageOpportunity[]> | null = null;

  constructor() {
    // Initialize Exchange Metadata
    for (const ex of EXCHANGES) {
      this.exchangeMetaMap.set(ex.id, {
        id: ex.id,
        name: ex.name,
        url: ex.url,
        logo: ex.logo,
        status: 'online',
        pairCount: 0,
        lastScanMs: 0,
        latencyMs: 0,
        hasStatusApi: ex.hasStatusApi,
      });
    }
  }

  public getExchangeMetas(): ExchangeMeta[] {
    return Array.from(this.exchangeMetaMap.values());
  }

  public getSummary(): ScanResultSummary {
    const metas = this.getExchangeMetas();
    const activeExchanges = metas.filter((m) => m.status === 'online' && m.pairCount > 0).length;
    
    // Calculate unique coins and small/micro tokens
    const allSymbols = new Set<string>();
    const smallCoins = new Set<string>();
    for (const prices of this.priceCache.values()) {
      for (const sym of Object.keys(prices)) {
        allSymbols.add(sym);
        const base = sym.replace(/USDT$|USDC$/, '');
        const tracked = TRACKED_DEX_TOKENS.find((t) => t.symbol.toUpperCase() === base.toUpperCase());
        const reg = getVerifiedTokenInfo(base);
        if (tracked?.tier === 'micro' || tracked?.tier === 'small' || reg?.tier === 'micro' || reg?.tier === 'small') {
          smallCoins.add(base);
        }
      }
    }

    // Also include tracked DEX tokens
    for (const token of TRACKED_DEX_TOKENS) {
      if (token.tier === 'micro' || token.tier === 'small') {
        smallCoins.add(token.symbol.toUpperCase());
      }
    }

    const totalPairsScanned = Array.from(this.priceCache.values()).reduce(
      (acc, prices) => acc + Object.keys(prices).length,
      0
    );

    const maxSpread = this.opportunities.length > 0
      ? Math.max(...this.opportunities.map((o) => o.grossSpreadPercent))
      : 0;

    return {
      timestamp: this.lastScanTimestamp,
      totalExchanges: EXCHANGES.length,
      activeExchanges,
      totalPairsScanned,
      uniqueCoinsScanned: allSymbols.size,
      smallCoinsCount: smallCoins.size,
      opportunitiesCount: this.opportunities.length,
      maxSpreadPercent: Math.round(maxSpread * 100) / 100,
      scanDurationMs: this.scanDurationMs,
      isScanning: this.isScanning,
    };
  }

  public async waitForReady(maxWaitMs = 1200): Promise<void> {
    if (this.priceCache.size > 0) {
      return;
    }
    if (this.currentScanPromise) {
      await Promise.race([
        this.currentScanPromise,
        new Promise((resolve) => setTimeout(resolve, maxWaitMs)),
      ]);
      return;
    }
    await Promise.race([
      this.scanAllExchanges(),
      new Promise((resolve) => setTimeout(resolve, maxWaitMs)),
    ]);
  }

  public async scanAllExchanges(): Promise<ArbitrageOpportunity[]> {
    if (this.currentScanPromise) {
      return this.currentScanPromise;
    }

    const runScan = async (): Promise<ArbitrageOpportunity[]> => {
      this.isScanning = true;
      const startTime = Date.now();

      try {
        // 1. Fetch Prices and Statuses from all exchanges in parallel
        const pricePromises = EXCHANGES.map(async (ex) => {
          const exStartTime = Date.now();
          const meta = this.exchangeMetaMap.get(ex.id)!;
          try {
            const prices = await ex.fetchPrices();
            const latency = Date.now() - exStartTime;
            const pairCount = Object.keys(prices).length;

            this.priceCache.set(ex.id, prices);
            meta.latencyMs = latency;
            meta.pairCount = pairCount;
            meta.lastScanMs = Date.now();
            meta.status = pairCount > 0 ? 'online' : 'degraded';
            meta.errorMessage = undefined;
          } catch (err: any) {
            meta.status = 'offline';
            meta.errorMessage = err?.message || 'Connection failed';
            meta.pairCount = 0;
            meta.latencyMs = Date.now() - exStartTime;
          }
        });

        // 2. Fetch Statuses (deposit/withdraw/contracts) if available and stale
        const statusPromises = EXCHANGES.map(async (ex) => {
          if (ex.fetchStatus) {
            try {
              const statusMap = await ex.fetchStatus();
              if (Object.keys(statusMap).length > 0) {
                this.statusCache.set(ex.id, statusMap);
              }
            } catch {
              // Keep prior status cache if request fails
            }
          }
        });

        await Promise.allSettled([...pricePromises, ...statusPromises]);

        // 3. Compute Arbitrage Opportunities across all pairs and exchange pairs
        this.opportunities = this.computeArbitrageOpportunities();

        // 4. Fetch DEX prices & compute CEX vs DEX Arbitrage Opportunities
        try {
          await cexDexScannerEngine.fetchAllDexPrices();
          const exchangeNames: Record<string, string> = {};
          for (const ex of EXCHANGES) {
            exchangeNames[ex.id] = ex.name;
          }
          cexDexScannerEngine.computeOpportunities(this.priceCache, this.statusCache, exchangeNames);
        } catch (dexErr) {
          console.warn('CEX vs DEX scan step notice:', dexErr);
        }

        this.scanDurationMs = Date.now() - startTime;
        this.lastScanTimestamp = Date.now();
        return this.opportunities;
      } finally {
        this.isScanning = false;
        this.currentScanPromise = null;
      }
    };

    this.currentScanPromise = runScan();
    return this.currentScanPromise;
  }

  private computeArbitrageOpportunities(): ArbitrageOpportunity[] {
    const opps: ArbitrageOpportunity[] = [];

    // Collect all symbol pairs across all exchanges
    const symbolExchangeMap = new Map<string, Array<{ exId: string; bid: number; ask: number; volume?: number }>>();

    for (const [exId, prices] of this.priceCache.entries()) {
      for (const [symbol, ticker] of Object.entries(prices)) {
        if (!ticker.bid || !ticker.ask || ticker.bid <= 0 || ticker.ask <= 0) continue;
        
        // Filter out extreme anomaly prices where bid/ask ratio is wildly off or ask < bid on same ex
        if (ticker.ask < ticker.bid * 0.5) continue; // corrupted ticker filter

        if (!symbolExchangeMap.has(symbol)) {
          symbolExchangeMap.set(symbol, []);
        }
        symbolExchangeMap.get(symbol)!.push({
          exId,
          bid: ticker.bid,
          ask: ticker.ask,
          volume: ticker.volume24h,
        });
      }
    }

    // Compare prices between every pair of exchanges for each symbol
    for (const [symbol, exList] of symbolExchangeMap.entries()) {
      if (exList.length < 2) continue;

      const baseSymbol = symbol.endsWith('USDT') ? symbol.slice(0, -4) : symbol;

      for (let i = 0; i < exList.length; i++) {
        for (let j = 0; j < exList.length; j++) {
          if (i === j) continue;

          const buyEx = exList[i];  // Ex where we BUY at ask
          const sellEx = exList[j]; // Ex where we SELL at bid

          const buyPrice = buyEx.ask;
          const sellPrice = sellEx.bid;

          // Only consider when Sell Price > Buy Price
          if (sellPrice > buyPrice) {
            const grossSpreadPercent = ((sellPrice - buyPrice) / buyPrice) * 100;

            // Ignore absurdly high erroneous spreads (> 500% usually indicates wrong decimal place or dead market)
            if (grossSpreadPercent > 500 || grossSpreadPercent < 0.1) continue;

            const estimatedFeePercent = 0.2; // 0.1% buy + 0.1% sell
            const netProfitPercent = Math.round((grossSpreadPercent - estimatedFeePercent) * 100) / 100;
            const profitPer100USDT = Math.round((netProfitPercent / 100) * 100 * 100) / 100;
            const profitPer1000USDT = Math.round((netProfitPercent / 100) * 1000 * 100) / 100;

            // Deposit and Withdraw Status lookup
            const buyStatusMap = this.statusCache.get(buyEx.exId);
            const sellStatusMap = this.statusCache.get(sellEx.exId);

            const buyBaseStatus = buyStatusMap ? buyStatusMap[baseSymbol] : undefined;
            const sellBaseStatus = sellStatusMap ? sellStatusMap[baseSymbol] : undefined;

            // Deposit and Withdraw status:
            // If explicitly set to false, it is closed/suspended.
            // If explicitly true or exchange is online with active trading, it is open.
            let buyWithdrawOpen: boolean | null = true;
            if (buyBaseStatus) {
              buyWithdrawOpen = buyBaseStatus.withdraw !== false;
            }

            let sellDepositOpen: boolean | null = true;
            if (sellBaseStatus) {
              sellDepositOpen = sellBaseStatus.deposit !== false;
            }

            // Contract Address Match Check & Multi-Chain Registry Verification
            const buyContracts = buyBaseStatus?.contracts
              ? (Array.isArray(buyBaseStatus.contracts) ? buyBaseStatus.contracts : Array.from(buyBaseStatus.contracts))
              : [];
            const sellContracts = sellBaseStatus?.contracts
              ? (Array.isArray(sellBaseStatus.contracts) ? sellBaseStatus.contracts : Array.from(sellBaseStatus.contracts))
              : [];

            const contractEval = evaluateContractMatch(baseSymbol, buyContracts, sellContracts);
            const contractMatch = contractEval.contractMatch;

            const buyMeta = this.exchangeMetaMap.get(buyEx.exId);
            const sellMeta = this.exchangeMetaMap.get(sellEx.exId);

            // Calculate Order Depth & Liquidity at top bid/ask price levels
            const buyDepth = computeOrderDepth(
              buyEx.bid,
              buyEx.ask,
              (buyEx as any).bidTokenVolume,
              (buyEx as any).askTokenVolume
            );
            const sellDepth = computeOrderDepth(
              sellEx.bid,
              sellEx.ask,
              (sellEx as any).bidTokenVolume,
              (sellEx as any).askTokenVolume
            );

            // Supported Chains Resolution
            const buyInferred = inferSupportedChains(baseSymbol, buyContracts);
            const sellInferred = inferSupportedChains(baseSymbol, sellContracts);

            const buyWithdrawChains = buyBaseStatus?.withdrawChains && buyBaseStatus.withdrawChains.length > 0
              ? buyBaseStatus.withdrawChains
              : (contractEval.verifiedChains.length > 0 ? contractEval.verifiedChains : buyInferred.withdrawChains);

            const sellDepositChains = sellBaseStatus?.depositChains && sellBaseStatus.depositChains.length > 0
              ? sellBaseStatus.depositChains
              : (contractEval.verifiedChains.length > 0 ? contractEval.verifiedChains : sellInferred.depositChains);

            const buyWithdrawalFees = calculateWithdrawalFees(
              baseSymbol,
              buyPrice,
              buyWithdrawChains,
              buyWithdrawOpen,
              buyEx.exId
            );

            const sellWithdrawalFees = calculateWithdrawalFees(
              baseSymbol,
              sellPrice,
              sellDepositChains,
              sellDepositOpen,
              sellEx.exId
            );

            // Determine token tier & category
            const regEntry = getVerifiedTokenInfo(baseSymbol);
            const dexTracked = TRACKED_DEX_TOKENS.find(
              (t) => t.symbol.toUpperCase() === baseSymbol.toUpperCase()
            );

            let tokenTier: 'micro' | 'small' | 'major' = 'major';
            let tokenCategory: string | undefined = undefined;

            if (dexTracked) {
              tokenTier = dexTracked.tier;
              tokenCategory = dexTracked.category;
            } else if (regEntry?.tier) {
              tokenTier = regEntry.tier;
              tokenCategory = regEntry.category;
            } else if (buyPrice < 0.05 || (contractEval && !contractEval.isNative && baseSymbol.length >= 4)) {
              tokenTier = 'small';
            }

            opps.push({
              id: `${symbol}-${buyEx.exId}-${sellEx.exId}`,
              symbol,
              baseSymbol,
              quoteSymbol: 'USDT',
              buyExchange: buyEx.exId,
              buyExchangeName: buyMeta?.name || buyEx.exId,
              buyPrice,
              buyWithdrawOpen,
              buyWithdrawChains,
              buyWithdrawalFees,
              buyAskUsdtVolume: buyDepth.askUsdtVolume,
              buyAskTokenVolume: buyDepth.askTokenVolume,
              sellExchange: sellEx.exId,
              sellExchangeName: sellMeta?.name || sellEx.exId,
              sellPrice,
              sellDepositOpen,
              sellDepositChains,
              sellWithdrawalFees,
              sellBidUsdtVolume: sellDepth.bidUsdtVolume,
              sellBidTokenVolume: sellDepth.bidTokenVolume,
              grossSpreadPercent: Math.round(grossSpreadPercent * 100) / 100,
              estimatedFeePercent,
              netProfitPercent,
              profitPer100USDT,
              profitPer1000USDT,
              contractMatch,
              contractMatchType: contractEval.matchType,
              verifiedChains: contractEval.verifiedChains,
              matchedContracts: contractEval.matchedContracts,
              primaryChain: contractEval.primaryChain,
              isNative: contractEval.isNative,
              tokenName: contractEval.tokenName,
              contractMatchSummary: contractEval.comparisonSummary,
              buyContracts: contractEval.resolvedBuyContracts,
              sellContracts: contractEval.resolvedSellContracts,
              tokenTier,
              tokenCategory,
              timestamp: Date.now(),
            });
          }
        }
      }
    }

    // Sort by gross spread descending
    opps.sort((a, b) => b.grossSpreadPercent - a.grossSpreadPercent);
    return opps;
  }

  public getFilteredOpportunities(options: FilterOptions = {}): ArbitrageOpportunity[] {
    let result = [...this.opportunities];

    // Search filter
    if (options.search && options.search.trim().length > 0) {
      const query = options.search.trim().toUpperCase();
      result = result.filter(
        (o) =>
          o.symbol.includes(query) ||
          o.baseSymbol.includes(query) ||
          o.buyExchangeName.toUpperCase().includes(query) ||
          o.sellExchangeName.toUpperCase().includes(query)
      );
    }

    // Min Spread
    if (options.minSpread !== undefined && !isNaN(options.minSpread)) {
      result = result.filter((o) => o.grossSpreadPercent >= options.minSpread!);
    }

    // Max Spread
    if (options.maxSpread !== undefined && !isNaN(options.maxSpread)) {
      result = result.filter((o) => o.grossSpreadPercent <= options.maxSpread!);
    }

    // Open Status Only (Withdraw buy = open & Deposit sell = open)
    if (options.openStatusOnly) {
      result = result.filter((o) => o.buyWithdrawOpen === true && o.sellDepositOpen === true);
    }

    // Contract Verified Only
    if (options.contractVerifiedOnly) {
      result = result.filter((o) => o.contractMatch === true && o.contractMatchType !== 'mismatch' && o.contractMatchType !== 'unverified');
    }

    // Buy Exchange Filter
    if (options.buyExchanges && options.buyExchanges.length > 0) {
      const buySet = new Set(options.buyExchanges);
      result = result.filter((o) => buySet.has(o.buyExchange));
    }

    // Sell Exchange Filter
    if (options.sellExchanges && options.sellExchanges.length > 0) {
      const sellSet = new Set(options.sellExchanges);
      result = result.filter((o) => sellSet.has(o.sellExchange));
    }

    // Token Tier Filter (ALL | SMALL_MICRO | MAJOR)
    if (options.tokenTier && options.tokenTier !== 'ALL') {
      if (options.tokenTier === 'SMALL_MICRO') {
        result = result.filter((o) => o.tokenTier === 'small' || o.tokenTier === 'micro');
      } else if (options.tokenTier === 'MAJOR') {
        result = result.filter((o) => o.tokenTier === 'major' || !o.tokenTier);
      }
    }

    // Sorting
    const sortBy = options.sortBy || 'spread';
    const sortOrder = options.sortOrder || 'desc';

    result.sort((a, b) => {
      let valA = 0;
      let valB = 0;

      if (sortBy === 'spread') {
        valA = a.grossSpreadPercent;
        valB = b.grossSpreadPercent;
      } else if (sortBy === 'profit') {
        valA = a.profitPer1000USDT;
        valB = b.profitPer1000USDT;
      } else if (sortBy === 'symbol') {
        return sortOrder === 'asc'
          ? a.symbol.localeCompare(b.symbol)
          : b.symbol.localeCompare(a.symbol);
      } else if (sortBy === 'buyPrice') {
        valA = a.buyPrice;
        valB = b.buyPrice;
      }

      return sortOrder === 'asc' ? valA - valB : valB - valA;
    });

    // DEDUPLICATION: Only 1 Top/Best card per unique coin on main view
    // Group all alternative routes under the primary card
    const tokenGroups = new Map<string, { topOpp: ArbitrageOpportunity; routesCount: number }>();
    for (const opp of result) {
      const key = opp.symbol;
      if (!tokenGroups.has(key)) {
        tokenGroups.set(key, { topOpp: { ...opp }, routesCount: 1 });
      } else {
        const group = tokenGroups.get(key)!;
        group.routesCount++;
      }
    }

    const deduplicatedResult: ArbitrageOpportunity[] = [];
    for (const group of tokenGroups.values()) {
      group.topOpp.routesCount = group.routesCount;
      deduplicatedResult.push(group.topOpp);
    }

    return deduplicatedResult;
  }

  public getSymbolDetail(symbol: string) {
    const cleanSymbol = symbol.toUpperCase().endsWith('USDT')
      ? symbol.toUpperCase()
      : `${symbol.toUpperCase()}USDT`;
    const baseSymbol = cleanSymbol.slice(0, -4);

    const pricesByExchange: SymbolDetailPrice[] = [];

    for (const ex of EXCHANGES) {
      const pricesMap = this.priceCache.get(ex.id);
      const ticker = pricesMap ? pricesMap[cleanSymbol] : undefined;
      const statusMap = this.statusCache.get(ex.id);
      const baseStatus = statusMap ? statusMap[baseSymbol] : undefined;

      if (ticker) {
        const depth = computeOrderDepth(
          ticker.bid,
          ticker.ask,
          ticker.bidTokenVolume,
          ticker.askTokenVolume
        );

        const rawContracts = baseStatus?.contracts
          ? (Array.isArray(baseStatus.contracts) ? baseStatus.contracts : Array.from(baseStatus.contracts))
          : [];

        const contractEval = evaluateContractMatch(baseSymbol, rawContracts, []);
        const contracts = rawContracts.length > 0 ? rawContracts : contractEval.matchedContracts;

        const inferred = inferSupportedChains(baseSymbol, contracts);

        const depositChains = baseStatus?.depositChains && baseStatus.depositChains.length > 0
          ? baseStatus.depositChains
          : (contractEval.verifiedChains.length > 0 ? contractEval.verifiedChains : inferred.depositChains);

        const withdrawChains = baseStatus?.withdrawChains && baseStatus.withdrawChains.length > 0
          ? baseStatus.withdrawChains
          : (contractEval.verifiedChains.length > 0 ? contractEval.verifiedChains : inferred.withdrawChains);

        const withdrawOpen = baseStatus ? baseStatus.withdraw !== false : true;
        const depositOpen = baseStatus ? baseStatus.deposit !== false : true;
        const withdrawalFees = calculateWithdrawalFees(
          baseSymbol,
          ticker.ask,
          withdrawChains,
          withdrawOpen,
          ex.id
        );

        pricesByExchange.push({
          exchangeId: ex.id,
          exchangeName: ex.name,
          bid: ticker.bid,
          ask: ticker.ask,
          last: ticker.last,
          volume24h: ticker.volume24h,
          bidUsdtVolume: depth.bidUsdtVolume,
          bidTokenVolume: depth.bidTokenVolume,
          askUsdtVolume: depth.askUsdtVolume,
          askTokenVolume: depth.askTokenVolume,
          depositOpen,
          withdrawOpen,
          depositChains,
          withdrawChains,
          withdrawalFees,
          contracts,
        });
      }
    }

    // Find all arbitrage opportunities for this specific symbol
    const symbolOpps = this.opportunities.filter((o) => o.symbol === cleanSymbol);

    return {
      symbol: cleanSymbol,
      baseSymbol,
      quoteSymbol: 'USDT',
      exchangesCount: pricesByExchange.length,
      pricesByExchange,
      opportunities: symbolOpps,
    };
  }


  public getExchangeMovers(exchangeId: string, limit: number = 20) {
    const cleanId = normalizeExchangeId(exchangeId);
    if (!this.priceCache.has(cleanId)) {
      return { gainers: [], losers: [] };
    }
    const prices = this.priceCache.get(cleanId)!;
    
    interface Mover {
      symbol: string;
      price: number;
      change24h: number;
      opp?: ArbitrageOpportunity;
    }
    
    const allMovers: Mover[] = [];
    for (const [symbol, ticker] of Object.entries(prices)) {
      const price = ticker.last || (ticker.bid + ticker.ask) / 2;
      if (price <= 0) continue;

      let change24h = ticker.change24h;
      if (change24h === undefined || isNaN(change24h)) {
        if (ticker.ask > 0 && ticker.bid > 0) {
          change24h = ((ticker.ask - ticker.bid) / ticker.bid) * 100;
        } else {
          change24h = 0;
        }
      }

      allMovers.push({
        symbol,
        price,
        change24h,
      });
    }
    
    allMovers.sort((a, b) => b.change24h - a.change24h);
    
    const gainers = allMovers.slice(0, limit);
    const losers = allMovers.slice(-limit).reverse();
    
    // Find best opportunity for each gainer (where we sell on this exchange)
    const allOpps = this.opportunities;
    
    for (const g of gainers) {
      // Find an opp where sellExchange === cleanId and symbol === g.symbol
      const bestOpp = allOpps.find((o) => o.symbol === g.symbol && o.sellExchange === cleanId);
      if (bestOpp) g.opp = bestOpp;
    }
    
    for (const l of losers) {
      // Find an opp where buyExchange === cleanId and symbol === l.symbol
      const bestOpp = allOpps.find((o) => o.symbol === l.symbol && o.buyExchange === cleanId);
      if (bestOpp) l.opp = bestOpp;
    }
    
    return { gainers, losers };
  }

  public async fetchExchangeMoversOnDemand(exchangeId: string, limit: number = 20): Promise<{ gainers: any[]; losers: any[] }> {
    const cleanId = normalizeExchangeId(exchangeId);
    
    // If already in cache with pairs, return immediately
    const cached = this.getExchangeMovers(cleanId, limit);
    if (cached.gainers.length > 0 || cached.losers.length > 0) {
      return cached;
    }

    // Wait up to 3s if background scan is currently running
    if (this.isScanning && this.currentScanPromise) {
      await Promise.race([
        this.currentScanPromise,
        new Promise((resolve) => setTimeout(resolve, 3000)),
      ]);
      const afterWait = this.getExchangeMovers(cleanId, limit);
      if (afterWait.gainers.length > 0 || afterWait.losers.length > 0) {
        return afterWait;
      }
    }

    // Fetch this exchange's tickers directly on-demand
    const exDef = EXCHANGES.find((e) => e.id === cleanId);
    if (exDef) {
      try {
        const t0 = Date.now();
        const prices = await exDef.fetchPrices();
        const latency = Date.now() - t0;
        const pairCount = Object.keys(prices).length;
        if (pairCount > 0) {
          this.priceCache.set(cleanId, prices);
          const meta = this.exchangeMetaMap.get(cleanId);
          if (meta) {
            meta.pairCount = pairCount;
            meta.status = 'online';
            meta.latencyMs = latency;
            meta.lastScanMs = Date.now();
          }
          return this.getExchangeMovers(cleanId, limit);
        }
      } catch (err: any) {
        console.warn(`[fetchExchangeMoversOnDemand] On-demand fetch failed for ${cleanId}:`, err?.message);
      }
    }

    return { gainers: [], losers: [] };
  }


  public getExchangeSpreads(options: ExchangeSpreadFilterOptions = {}): ExchangeSpreadOverview {
    // 1. Build available exchanges list with their current pair counts & average spread
    const availableExchanges: Array<{
      id: string;
      name: string;
      logo: string;
      pairCount: number;
      avgSpreadPercent: number;
      status: string;
      latencyMs: number;
    }> = [];

    for (const ex of EXCHANGES) {
      const meta = this.exchangeMetaMap.get(ex.id);
      const prices = this.priceCache.get(ex.id) || {};
      const pairs = Object.entries(prices);
      
      let sumSpread = 0;
      let validPairCount = 0;
      for (const [, ticker] of pairs) {
        if (ticker.bid > 0 && ticker.ask > 0 && ticker.ask >= ticker.bid) {
          const spr = ((ticker.ask - ticker.bid) / ticker.bid) * 100;
          if (spr >= 0 && spr <= 100) {
            sumSpread += spr;
            validPairCount++;
          }
        }
      }

      const avgSpreadPercent = validPairCount > 0 ? Math.round((sumSpread / validPairCount) * 100) / 100 : 0;

      availableExchanges.push({
        id: ex.id,
        name: ex.name,
        logo: ex.logo,
        pairCount: pairs.length,
        avgSpreadPercent,
        status: meta?.status || 'offline',
        latencyMs: meta?.latencyMs || 0,
      });
    }

    // 2. Select target exchange: requested, or first one with pairs, or binance
    let targetExId = options.exchangeId?.toLowerCase();
    if (!targetExId || !EXCHANGES.some((e) => e.id === targetExId)) {
      const firstActive = availableExchanges.find((e) => e.pairCount > 0);
      targetExId = firstActive ? firstActive.id : (EXCHANGES[0]?.id || 'binance');
    }

    const selectedEx = EXCHANGES.find((e) => e.id === targetExId) || EXCHANGES[0];
    const selectedMeta = this.exchangeMetaMap.get(selectedEx.id);
    const selectedPrices = this.priceCache.get(selectedEx.id) || {};
    const selectedStatuses = this.statusCache.get(selectedEx.id) || {};

    // 3. Process each token pair on this exchange
    const rawTokens: ExchangeTokenSpread[] = [];
    let totalExchangeVolume = 0;

    for (const [symbol, ticker] of Object.entries(selectedPrices)) {
      if (!ticker.bid || !ticker.ask || ticker.bid <= 0 || ticker.ask <= 0) continue;

      const baseSymbol = symbol.endsWith('USDT')
        ? symbol.slice(0, -4)
        : symbol.endsWith('USDC')
        ? symbol.slice(0, -4)
        : symbol;
      const quoteSymbol = symbol.endsWith('USDC') ? 'USDC' : 'USDT';

      const spreadUsd = Math.max(0, ticker.ask - ticker.bid);
      const spreadPercent = Math.round(((ticker.ask - ticker.bid) / ticker.bid) * 10000) / 100;

      const regEntry = getVerifiedTokenInfo(baseSymbol);
      const dexTracked = TRACKED_DEX_TOKENS.find(
        (t) => t.symbol.toUpperCase() === baseSymbol.toUpperCase()
      );

      let tokenTier: 'micro' | 'small' | 'major' = 'major';
      let tokenCategory: string | undefined = undefined;
      let tokenName: string = baseSymbol;

      if (dexTracked) {
        tokenTier = dexTracked.tier;
        tokenCategory = dexTracked.category;
        tokenName = dexTracked.name;
      } else if (regEntry?.tier) {
        tokenTier = regEntry.tier;
        tokenCategory = regEntry.category;
        tokenName = regEntry.name;
      } else if (regEntry) {
        tokenName = regEntry.name;
        if (ticker.bid < 0.05 || baseSymbol.length >= 5) {
          tokenTier = 'small';
        }
      } else if (ticker.bid < 0.01) {
        tokenTier = 'micro';
      } else if (ticker.bid < 0.1) {
        tokenTier = 'small';
      }

      // Order book depth
      const depth = computeOrderDepth(
        ticker.bid,
        ticker.ask,
        ticker.bidTokenVolume,
        ticker.askTokenVolume
      );

      // Status info
      const baseStatus = selectedStatuses[baseSymbol];
      const depositOpen = baseStatus ? baseStatus.deposit !== false : true;
      const withdrawOpen = baseStatus ? baseStatus.withdraw !== false : true;
      const withdrawChains = baseStatus?.withdrawChains;
      const depositChains = baseStatus?.depositChains;

      // Cross-exchange arbitrage lookup
      const matchingOpp = this.opportunities.find(
        (o) => o.symbol === symbol && (o.buyExchange === selectedEx.id || o.sellExchange === selectedEx.id)
      );

      const hasArbitrage = !!matchingOpp;
      const arbitrageBestSpread = matchingOpp?.grossSpreadPercent;
      const arbitrageTargetExchange = matchingOpp
        ? (matchingOpp.buyExchange === selectedEx.id ? matchingOpp.sellExchangeName : matchingOpp.buyExchangeName)
        : undefined;

      let vol = ticker.volume24h || 0;
      if (vol <= 0 && depth.bidUsdtVolume && depth.askUsdtVolume) {
        vol = Math.round((depth.bidUsdtVolume + depth.askUsdtVolume) * 20);
      }
      vol = Math.round(vol * 100) / 100;
      totalExchangeVolume += vol;

      rawTokens.push({
        symbol,
        baseSymbol,
        quoteSymbol,
        name: tokenName,
        bid: ticker.bid,
        ask: ticker.ask,
        spreadUsd: Math.round(spreadUsd * 1000000) / 1000000,
        spreadPercent,
        last: ticker.last,
        volume24h: vol,
        bidUsdtVolume: depth.bidUsdtVolume,
        bidTokenVolume: depth.bidTokenVolume,
        askUsdtVolume: depth.askUsdtVolume,
        askTokenVolume: depth.askTokenVolume,
        tokenTier,
        tokenCategory,
        depositOpen,
        withdrawOpen,
        withdrawChains,
        depositChains,
        tradeUrl: getExchangeTradeUrl(selectedEx.id, baseSymbol, quoteSymbol),
        hasArbitrage,
        arbitrageBestSpread,
        arbitrageTargetExchange,
      });
    }

    // 4. Compute overall statistics for this exchange before filtering
    let tightSpreadsCount = 0;
    let moderateSpreadsCount = 0;
    let wideSpreadsCount = 0;
    let highSpreadsCount = 0;
    let sumSpread = 0;
    let minSpread = rawTokens.length > 0 ? Infinity : 0;
    let maxSpread = 0;

    const spreadValues: number[] = [];

    for (const t of rawTokens) {
      spreadValues.push(t.spreadPercent);
      sumSpread += t.spreadPercent;
      if (t.spreadPercent < minSpread) minSpread = t.spreadPercent;
      if (t.spreadPercent > maxSpread) maxSpread = t.spreadPercent;

      if (t.spreadPercent < 0.1) {
        tightSpreadsCount++;
      } else if (t.spreadPercent <= 0.5) {
        moderateSpreadsCount++;
      } else if (t.spreadPercent <= 1.0) {
        wideSpreadsCount++;
      } else {
        highSpreadsCount++;
      }
    }

    spreadValues.sort((a, b) => a - b);
    const medianSpreadPercent = spreadValues.length > 0
      ? (spreadValues.length % 2 === 0
          ? (spreadValues[spreadValues.length / 2 - 1] + spreadValues[spreadValues.length / 2]) / 2
          : spreadValues[Math.floor(spreadValues.length / 2)])
      : 0;

    const avgSpreadPercent = rawTokens.length > 0 ? Math.round((sumSpread / rawTokens.length) * 100) / 100 : 0;

    const stats: ExchangeSpreadStats = {
      totalTokens: rawTokens.length,
      avgSpreadPercent,
      medianSpreadPercent: Math.round(medianSpreadPercent * 100) / 100,
      maxSpreadPercent: Math.round(maxSpread * 100) / 100,
      minSpreadPercent: minSpread === Infinity ? 0 : Math.round(minSpread * 1000) / 1000,
      tightSpreadsCount,
      moderateSpreadsCount,
      wideSpreadsCount,
      highSpreadsCount,
      totalVolume24h: Math.round(totalExchangeVolume),
    };

    // 5. Apply filters
    let filteredTokens = rawTokens;

    // Search query filter
    if (options.search && options.search.trim()) {
      const q = options.search.trim().toLowerCase();
      filteredTokens = filteredTokens.filter(
        (t) =>
          t.symbol.toLowerCase().includes(q) ||
          t.baseSymbol.toLowerCase().includes(q) ||
          (t.name && t.name.toLowerCase().includes(q)) ||
          (t.tokenCategory && t.tokenCategory.toLowerCase().includes(q))
      );
    }

    // Token Tier filter
    if (options.tokenTier && options.tokenTier !== 'ALL') {
      if (options.tokenTier === 'SMALL_MICRO') {
        filteredTokens = filteredTokens.filter((t) => t.tokenTier === 'small' || t.tokenTier === 'micro');
      } else if (options.tokenTier === 'MAJOR') {
        filteredTokens = filteredTokens.filter((t) => t.tokenTier === 'major' || !t.tokenTier);
      }
    }

    // Spread category filter
    if (options.spreadCategory && options.spreadCategory !== 'ALL') {
      if (options.spreadCategory === 'TIGHT') {
        filteredTokens = filteredTokens.filter((t) => t.spreadPercent < 0.1);
      } else if (options.spreadCategory === 'MODERATE') {
        filteredTokens = filteredTokens.filter((t) => t.spreadPercent >= 0.1 && t.spreadPercent <= 0.5);
      } else if (options.spreadCategory === 'WIDE') {
        filteredTokens = filteredTokens.filter((t) => t.spreadPercent > 0.5 && t.spreadPercent <= 1.0);
      } else if (options.spreadCategory === 'HIGH') {
        filteredTokens = filteredTokens.filter((t) => t.spreadPercent > 1.0);
      }
    }

    // Open status only
    if (options.openStatusOnly) {
      filteredTokens = filteredTokens.filter((t) => t.depositOpen !== false && t.withdrawOpen !== false);
    }

    // Min / Max Spread
    if (options.minSpread !== undefined && options.minSpread > 0) {
      filteredTokens = filteredTokens.filter((t) => t.spreadPercent >= options.minSpread!);
    }
    if (options.maxSpread !== undefined && options.maxSpread > 0) {
      filteredTokens = filteredTokens.filter((t) => t.spreadPercent <= options.maxSpread!);
    }

    // 6. Sorting
    const sortBy = options.sortBy || 'spread';
    const sortOrder = options.sortOrder || 'desc';

    filteredTokens.sort((a, b) => {
      let valA = 0;
      let valB = 0;

      if (sortBy === 'spread') {
        valA = a.spreadPercent;
        valB = b.spreadPercent;
      } else if (sortBy === 'spreadUsd') {
        valA = a.spreadUsd;
        valB = b.spreadUsd;
      } else if (sortBy === 'volume') {
        valA = a.volume24h || 0;
        valB = b.volume24h || 0;
      } else if (sortBy === 'bid') {
        valA = a.bid;
        valB = b.bid;
      } else if (sortBy === 'ask') {
        valA = a.ask;
        valB = b.ask;
      } else if (sortBy === 'depth') {
        valA = (a.bidUsdtVolume || 0) + (a.askUsdtVolume || 0);
        valB = (b.bidUsdtVolume || 0) + (b.askUsdtVolume || 0);
      } else if (sortBy === 'symbol') {
        return sortOrder === 'asc'
          ? a.symbol.localeCompare(b.symbol)
          : b.symbol.localeCompare(a.symbol);
      }

      return sortOrder === 'asc' ? valA - valB : valB - valA;
    });

    return {
      exchange: {
        id: selectedEx.id,
        name: selectedEx.name,
        url: selectedEx.url,
        logo: selectedEx.logo,
        status: selectedMeta?.status || 'offline',
        latencyMs: selectedMeta?.latencyMs || 0,
        pairCount: rawTokens.length,
      },
      stats,
      availableExchanges,
      tokens: filteredTokens,
    };
  }

  public startAutoScan(intervalMs = 15000) {
    if (this.autoScanTimer) clearInterval(this.autoScanTimer);
    
    // Initial scan
    this.scanAllExchanges().catch((err) => console.error('Initial scan error:', err));

    // Periodic interval scan
    this.autoScanTimer = setInterval(() => {
      this.scanAllExchanges().catch((err) => console.error('Auto scan error:', err));
    }, intervalMs);
  }

  public stopAutoScan() {
    if (this.autoScanTimer) {
      clearInterval(this.autoScanTimer);
      this.autoScanTimer = null;
    }
  }
}

export function getExchangeTradeUrl(exchangeId: string, baseSymbol: string, quoteSymbol: string = 'USDT'): string {
  const base = baseSymbol.toUpperCase();
  const quote = quoteSymbol.toUpperCase();
  switch (exchangeId.toLowerCase()) {
    case 'binance':
      return `https://www.binance.com/en/trade/${base}_${quote}`;
    case 'gateio':
    case 'gate':
      return `https://www.gate.io/trade/${base}_${quote}`;
    case 'kucoin':
      return `https://www.kucoin.com/trade/${base}-${quote}`;
    case 'mexc':
      return `https://www.mexc.com/exchange/${base}_${quote}`;
    case 'bybit':
      return `https://www.bybit.com/trade/spot/${base}/${quote}`;
    case 'okx':
      return `https://www.okx.com/trade-spot/${base.toLowerCase()}-${quote.toLowerCase()}`;
    case 'bitget':
      return `https://www.bitget.com/spot/${base}${quote}`;
    case 'htx':
    case 'huobi':
      return `https://www.htx.com/trade/${base.toLowerCase()}_${quote.toLowerCase()}`;
    case 'bitmart':
      return `https://www.bitmart.com/trade/en-US?symbol=${base}_${quote}`;
    case 'lbank':
      return `https://www.lbank.com/trade/${base.toLowerCase()}_${quote.toLowerCase()}`;
    case 'xt':
      return `https://www.xt.com/en/trade/${base.toLowerCase()}_${quote.toLowerCase()}`;
    case 'bitrue':
      return `https://www.bitrue.com/trade/${base.toLowerCase()}_${quote.toLowerCase()}`;
    case 'coinstore':
      return `https://www.coinstore.com/spot/${base}${quote}`;
    case 'cex':
      return `https://cex.io/trade/${base}-${quote}`;
    default:
      return `https://www.binance.com/en/trade/${base}_${quote}`;
  }
}

export const scannerEngine = new ArbitrageScannerEngine();
