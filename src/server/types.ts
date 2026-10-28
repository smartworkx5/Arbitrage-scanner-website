export interface TickerData {
  bid: number;
  ask: number;
  last?: number;
  volume24h?: number;
  change24h?: number; // 24h change percentage (e.g. 5.5 for +5.5%)
  bidUsdtVolume?: number;
  bidTokenVolume?: number;
  askUsdtVolume?: number;
  askTokenVolume?: number;
}

export type ExchangePrices = Record<string, TickerData>; // Symbol -> { bid, ask, ... }

export interface CurrencyStatus {
  deposit: boolean | null;  // true: open, false: closed, null: unknown
  withdraw: boolean | null; // true: open, false: closed, null: unknown
  depositChains?: string[]; // e.g., ["ERC20", "BEP20", "TRC20"]
  withdrawChains?: string[]; // e.g., ["ERC20", "BEP20", "SOL"]
  contracts?: Set<string> | string[]; // lowercased contract addresses
}

export interface ChainWithdrawalFee {
  chain: string;
  feeToken: number;
  feeUsdt: number;
  isOpen: boolean; // false if suspended / unsupported
  isFree: boolean;  // true if fee is 0
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

export type ExchangeStatusData = Record<string, CurrencyStatus>; // Base Currency -> Status

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

export interface ArbitrageOpportunity {
  id: string;
  symbol: string;             // e.g., "BTCUSDT"
  baseSymbol: string;         // e.g., "BTC"
  quoteSymbol: string;        // "USDT"
  
  // Buy Exchange
  buyExchange: string;
  buyExchangeName: string;
  buyPrice: number;           // ask price (price we buy at)
  buyWithdrawOpen: boolean | null;
  buyWithdrawChains?: string[];
  buyWithdrawalFees?: ChainWithdrawalFee[];
  buyAskUsdtVolume?: number;
  buyAskTokenVolume?: number;
  
  // Sell Exchange
  sellExchange: string;
  sellExchangeName: string;
  sellPrice: number;          // bid price (price we sell at)
  sellDepositOpen: boolean | null;
  sellDepositChains?: string[];
  sellWithdrawalFees?: ChainWithdrawalFee[];
  sellBidUsdtVolume?: number;
  sellBidTokenVolume?: number;
  
  // Arbitrage metrics
  grossSpreadPercent: number; // ((sellPrice - buyPrice) / buyPrice) * 100
  estimatedFeePercent: number; // e.g. 0.2% total trading fee
  netProfitPercent: number;   // grossSpreadPercent - estimatedFeePercent
  profitPer100USDT: number;   // (netProfitPercent / 100) * 100
  profitPer1000USDT: number;  // (netProfitPercent / 100) * 1000
  
  // Safety checks
  contractMatch: boolean | null; // true: matching contract, false: mismatch warning, null: unknown
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

export interface FilterOptions {
  search?: string;
  minSpread?: number;
  maxSpread?: number;
  openStatusOnly?: boolean; // withdraw buy & deposit sell open
  buyExchanges?: string[];
  sellExchanges?: string[];
  contractVerifiedOnly?: boolean;
  tokenTier?: 'ALL' | 'SMALL_MICRO' | 'MAJOR';
  sortBy?: 'spread' | 'profit' | 'symbol' | 'buyPrice';
  sortOrder?: 'asc' | 'desc';
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
  cexVolumeUsd?: number;
  cexVolumeToken?: number;
  
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

export interface CexDexFilterOptions {
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

export interface ExchangeSpreadFilterOptions {
  exchangeId?: string;
  search?: string;
  tokenTier?: 'ALL' | 'SMALL_MICRO' | 'MAJOR';
  spreadCategory?: 'ALL' | 'TIGHT' | 'MODERATE' | 'WIDE' | 'HIGH';
  openStatusOnly?: boolean;
  minSpread?: number;
  maxSpread?: number;
  sortBy?: 'spread' | 'spreadUsd' | 'volume' | 'symbol' | 'bid' | 'ask' | 'depth';
  sortOrder?: 'asc' | 'desc';
}

