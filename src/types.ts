export interface ChainWithdrawalFee {
  chain: string;
  feeToken: number;
  feeUsdt: number;
  isOpen: boolean;
  isFree: boolean;
}

export interface ArbitrageOpportunity {
  id: string;
  symbol: string;
  baseSymbol: string;
  quoteSymbol: string;
  buyExchange: string;
  buyExchangeName: string;
  buyPrice: number;
  buyWithdrawOpen: boolean | null;
  buyWithdrawChains?: string[];
  buyWithdrawalFees?: ChainWithdrawalFee[];
  buyAskUsdtVolume?: number;
  buyAskTokenVolume?: number;
  sellExchange: string;
  sellExchangeName: string;
  sellPrice: number;
  sellDepositOpen: boolean | null;
  sellDepositChains?: string[];
  sellWithdrawalFees?: ChainWithdrawalFee[];
  sellBidUsdtVolume?: number;
  sellBidTokenVolume?: number;
  grossSpreadPercent: number;
  estimatedFeePercent: number;
  netProfitPercent: number;
  profitPer100USDT: number;
  profitPer1000USDT: number;
  contractMatch: boolean | null;
  contractMatchType?: 'native' | 'contract_match' | 'registry_verified' | 'mismatch' | 'unverified';
  verifiedChains?: string[];
  matchedContracts?: string[];
  primaryChain?: string;
  isNative?: boolean;
  tokenName?: string;
  contractMatchSummary?: string;
  buyContracts: string[];
  sellContracts: string[];
  tokenTier?: 'micro' | 'small' | 'major';
  tokenCategory?: string;
  timestamp: number;
  routesCount?: number;
}

export interface ExchangeMeta {
  id: string;
  name: string;
  url: string;
  logo: string;
  status: 'online' | 'degraded' | 'offline';
  pairCount: number;
  lastScanMs: number;
  latencyMs: number;
  errorMessage?: string;
  hasStatusApi: boolean;
}

export interface ScanResultSummary {
  timestamp: number;
  totalExchanges: number;
  activeExchanges: number;
  totalPairsScanned: number;
  uniqueCoinsScanned: number;
  smallCoinsCount?: number;
  opportunitiesCount: number;
  maxSpreadPercent: number;
  scanDurationMs: number;
  isScanning: boolean;
}

export interface FilterState {
  search: string;
  minSpread: number;
  maxSpread: number;
  openStatusOnly: boolean;
  contractVerifiedOnly: boolean;
  tokenTier?: 'ALL' | 'SMALL_MICRO' | 'MAJOR';
  buyExchanges: string[];
  sellExchanges: string[];
  sortBy: 'spread' | 'profit' | 'symbol' | 'buyPrice';
  sortOrder: 'asc' | 'desc';
}

export interface SymbolDetailPrice {
  exchangeId: string;
  exchangeName: string;
  bid: number;
  ask: number;
  last?: number;
  volume24h?: number;
  bidUsdtVolume?: number;
  bidTokenVolume?: number;
  askUsdtVolume?: number;
  askTokenVolume?: number;
  depositOpen: boolean | null;
  withdrawOpen: boolean | null;
  depositChains?: string[];
  withdrawChains?: string[];
  withdrawalFees?: ChainWithdrawalFee[];
  contracts: string[];
}

export interface SymbolDetail {
  symbol: string;
  baseSymbol: string;
  quoteSymbol: string;
  exchangesCount: number;
  pricesByExchange: SymbolDetailPrice[];
  opportunities: ArbitrageOpportunity[];
}

export interface CexDexArbitrageOpportunity {
  id: string;
  symbol: string;
  baseSymbol: string;
  quoteSymbol: string;
  tokenName: string;
  
  // Direction: CEX ➔ DEX (Buy on CEX, Sell on DEX) or DEX ➔ CEX (Buy on DEX, Sell on CEX)
  direction: 'CEX_TO_DEX' | 'DEX_TO_CEX';
  
  // CEX Details
  cexId: string;
  cexName: string;
  cexPrice: number;
  cexBuyPrice: number; // Ask price on CEX
  cexSellPrice: number; // Bid price on CEX
  cexDepositOpen: boolean | null;
  cexWithdrawOpen: boolean | null;
  cexVolume24h?: number;
  
  // DEX Details
  dexId: string;
  dexName: string;
  dexChain: string;
  dexPrice: number;
  dexLiquidityUsd: number;
  dexVolume24h?: number;
  dexPairAddress: string;
  dexPairUrl: string;
  dexTradeUrl: string;
  
  // Token & Contract Verification
  contractAddress: string;
  explorerUrl: string;
  isContractVerified: boolean;
  tokenTier?: 'micro' | 'small' | 'major';
  tokenCategory?: string;
  
  // Spread & Profit Metrics
  grossSpreadPercent: number;
  estimatedGasFeeUsd: number;
  estimatedTotalFeePercent: number;
  netProfitPercent: number;
  netProfitPer100USDT: number;
  netProfitPer1000USDT: number;
  
  timestamp: number;
}

export interface CexDexFilterState {
  search: string;
  direction: 'ALL' | 'CEX_TO_DEX' | 'DEX_TO_CEX';
  chain: string; // 'ALL' or specific chain
  dex: string;   // 'ALL' or specific dex
  cex: string;   // 'ALL' or specific cex
  tokenTier?: 'ALL' | 'SMALL_MICRO' | 'MAJOR';
  minSpread: number;
  minDexLiquidity: number;
  verifiedOnly: boolean;
  sortBy: 'spread' | 'profit' | 'liquidity' | 'dexVolume' | 'symbol';
  sortOrder: 'asc' | 'desc';
}

export interface CexDexSummary {
  timestamp: number;
  totalCexDexPairs: number;
  cexToDexCount: number;
  dexToCexCount: number;
  smallTokensCount?: number;
  maxSpreadPercent: number;
  totalDexLiquidityUsd: number;
  chainsCount: number;
  dexCount: number;
  isScanning: boolean;
}

export interface ExchangeTokenSpread {
  symbol: string;
  baseSymbol: string;
  quoteSymbol: string;
  name?: string;
  bid: number;
  ask: number;
  spreadUsd: number;
  spreadPercent: number;
  last?: number;
  volume24h?: number;
  bidUsdtVolume?: number;
  bidTokenVolume?: number;
  askUsdtVolume?: number;
  askTokenVolume?: number;
  tokenTier?: 'micro' | 'small' | 'major';
  tokenCategory?: string;
  depositOpen?: boolean | null;
  withdrawOpen?: boolean | null;
  withdrawChains?: string[];
  depositChains?: string[];
  tradeUrl: string;
  hasArbitrage?: boolean;
  arbitrageBestSpread?: number;
  arbitrageTargetExchange?: string;
}

export interface ExchangeSpreadStats {
  totalTokens: number;
  avgSpreadPercent: number;
  medianSpreadPercent: number;
  maxSpreadPercent: number;
  minSpreadPercent: number;
  tightSpreadsCount: number;    // < 0.1%
  moderateSpreadsCount: number; // 0.1% - 0.5%
  wideSpreadsCount: number;     // 0.5% - 1.0%
  highSpreadsCount: number;     // > 1.0%
  totalVolume24h: number;
}

export interface ExchangeSpreadOverview {
  exchange: {
    id: string;
    name: string;
    url: string;
    logo: string;
    status: 'online' | 'degraded' | 'offline';
    latencyMs: number;
    pairCount: number;
  };
  stats: ExchangeSpreadStats;
  availableExchanges: Array<{
    id: string;
    name: string;
    logo: string;
    pairCount: number;
    avgSpreadPercent: number;
    status: string;
    latencyMs: number;
  }>;
  tokens: ExchangeTokenSpread[];
}

export interface ExchangeSpreadFilterState {
  selectedExchange: string;
  search: string;
  tokenTier: 'ALL' | 'SMALL_MICRO' | 'MAJOR';
  spreadCategory: 'ALL' | 'TIGHT' | 'MODERATE' | 'WIDE' | 'HIGH';
  openStatusOnly: boolean;
  sortBy: 'spread' | 'spreadUsd' | 'volume' | 'symbol' | 'bid' | 'ask' | 'depth';
  sortOrder: 'asc' | 'desc';
}

// ---------------------------------------------------------------------------
// Triangular Arbitrage Types (Single-Exchange, Zero-Transfer Delay)
// ---------------------------------------------------------------------------

export interface TriangularOpportunity {
  id: string;
  exchangeId: string;
  exchangeName: string;
  exchangeLogo: string;
  baseQuote: string; // e.g., 'USDT'
  tokenA: string;    // e.g., 'BTC'
  tokenB: string;    // e.g., 'ETH'
  pair1: string;     // e.g., 'BTC/USDT'
  pair2: string;     // e.g., 'ETH/BTC'
  pair3: string;     // e.g., 'ETH/USDT'
  routeDescription: string;
  leg1: {
    pair: string;
    action: 'BUY' | 'SELL';
    fromToken: string;
    toToken: string;
    price: number;
    amountOut: number;
  };
  leg2: {
    pair: string;
    action: 'BUY' | 'SELL';
    fromToken: string;
    toToken: string;
    price: number;
    amountOut: number;
  };
  leg3: {
    pair: string;
    action: 'BUY' | 'SELL';
    fromToken: string;
    toToken: string;
    price: number;
    amountOut: number;
  };
  grossProfitPercent: number;
  estimatedFeesPercent: number; // 3 legs * taker fee (~0.24% - 0.3%)
  netProfitPercent: number;
  profitPer1000Usdt: number;
  executionSpeedMs: number;
  liquidityUsd: number;
  tokenTier?: 'micro' | 'small' | 'major';
  tradeUrl: string;
  timestamp: number;
}

// ---------------------------------------------------------------------------
// Funding Rate & Basis Arbitrage Types (Cash and Carry Delta-Neutral Yield)
// ---------------------------------------------------------------------------

export interface FundingRateOpportunity {
  id: string;
  symbol: string;
  tokenName: string;
  exchangeId: string;
  exchangeName: string;
  exchangeLogo: string;
  spotPrice: number;
  perpPrice: number;
  basisSpreadPercent: number;
  fundingRate8h: number;     // e.g., 0.028% per 8h
  predictedRate8h: number;   // e.g., 0.032% next
  annualizedApy: number;     // (fundingRate8h * 3 * 365) + basis roll
  nextFundingTime: number;   // timestamp in ms
  openInterestUsd: number;
  volume24h: number;
  strategy: 'LONG_SPOT_SHORT_PERP' | 'SHORT_SPOT_LONG_PERP';
  riskLevel: 'Ultra Low (Delta-Neutral)' | 'Low' | 'Moderate';
  tradeUrl: string;
}

// ---------------------------------------------------------------------------
// Paper Trading & Arbitrage Auto-Snipe Bot Types
// ---------------------------------------------------------------------------

export interface PaperBotTrade {
  id: string;
  timestamp: number;
  strategy: 'CROSS_CEX' | 'CEX_DEX' | 'TRIANGULAR' | 'FUNDING_RATE';
  symbol: string;
  description: string;
  sizeUsdt: number;
  grossProfitUsd: number;
  feesUsd: number;
  netProfitUsd: number;
  returnPercent: number;
  status: 'FILLED' | 'SETTLED';
  executionVenue: string;
  executionSpeedMs: number;
}

export interface PaperBotState {
  initialBalance: number;
  balance: number;
  totalProfitUsd: number;
  totalProfitPercent: number;
  winRatePercent: number;
  totalTradesCount: number;
  winningTradesCount: number;
  losingTradesCount: number;
  autoSnipeActive: boolean;
  minProfitThreshold: number;
  tradeSizeUsdt: number;
  selectedStrategies: string[];
  recentTrades: PaperBotTrade[];
}


