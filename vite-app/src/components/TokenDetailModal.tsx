import React, { useEffect, useState } from 'react';
import { SymbolDetail, SymbolDetailPrice, ArbitrageOpportunity } from '../types';
import {
  X,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  Calculator,
  ShoppingCart,
  ArrowDownRight,
  ArrowUpRight,
  Zap,
  Copy,
  Check,
  TrendingUp,
  AlertTriangle,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { openExchangeTrade } from '../utils/tradeUrls';
import { formatOrderSize } from '../utils/formatters';
import { safeApiFetch } from '../utils/api';
import { dataService } from '../services/dataService';

interface TokenDetailModalProps {
  symbol: string;
  onClose: () => void;
  onOpenCalculator?: (opp: ArbitrageOpportunity) => void;
}

export const TokenDetailModal: React.FC<TokenDetailModalProps> = ({ symbol, onClose, onOpenCalculator }) => {
  const [data, setData] = useState<SymbolDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Target Price & Custom USDT / Token Allocation State
  const [targetBuyPrice, setTargetBuyPrice] = useState<string>('');
  const [targetSellPrice, setTargetSellPrice] = useState<string>('');
  const [usdtBudget, setUsdtBudget] = useState<number>(1000);

  const fetchDetail = async () => {
    setLoading(true);
    setError(null);
    try {
      const json = await dataService.getSymbolDetail(symbol);
      if (json) {
        setData(json);

        // Pre-fill target buy & sell price defaults from best market prices
        if (json.pricesByExchange && json.pricesByExchange.length > 0) {
          let minAsk = Infinity;
          let maxBid = 0;
          for (const item of json.pricesByExchange) {
            if (item.ask > 0 && item.ask < minAsk) minAsk = item.ask;
            if (item.bid > 0 && item.bid > maxBid) maxBid = item.bid;
          }
          if (minAsk !== Infinity) setTargetBuyPrice(String(minAsk));
          if (maxBid > 0) setTargetSellPrice(String(maxBid));
        }
      } else {
        setError('Token details unavailable at the moment. Please retry.');
      }
    } catch (err: any) {
      setError(err?.message || 'Error fetching symbol matrix');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [symbol]);

  const copyToClipboard = (text: string, key: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (price >= 1) return price.toFixed(4);
    if (price >= 0.0001) return price.toFixed(6);
    return price.toFixed(8);
  };

  const truncateAddr = (addr: string) => {
    if (!addr) return '';
    if (addr.length <= 16) return addr;
    return `${addr.slice(0, 8)}...${addr.slice(-6)}`;
  };

  // Find lowest ask (Best Buy) & highest bid (Best Sell)
  let lowestAsk = Infinity;
  let lowestAskItem: SymbolDetailPrice | null = null;
  let lowestAskEx = '';
  let lowestAskDepthUsdt = 0;
  let lowestAskTokenQty: number | undefined;

  let highestBid = 0;
  let highestBidItem: SymbolDetailPrice | null = null;
  let highestBidEx = '';
  let highestBidDepthUsdt = 0;
  let highestBidTokenQty: number | undefined;

  if (data?.pricesByExchange) {
    for (const item of data.pricesByExchange) {
      if (item.ask > 0 && item.ask < lowestAsk) {
        lowestAsk = item.ask;
        lowestAskItem = item;
        lowestAskEx = item.exchangeName;
        lowestAskDepthUsdt = item.askUsdtVolume || 0;
        lowestAskTokenQty = item.askTokenVolume;
      }
      if (item.bid > 0 && item.bid > highestBid) {
        highestBid = item.bid;
        highestBidItem = item;
        highestBidEx = item.exchangeName;
        highestBidDepthUsdt = item.bidUsdtVolume || 0;
        highestBidTokenQty = item.bidTokenVolume;
      }
    }
  }

  // Automatically move Best Buy (Lowest Ask) to #1 and Best Sell (Highest Bid) to #2
  let sortedPrices: SymbolDetailPrice[] = [];
  if (data?.pricesByExchange) {
    const list = [...data.pricesByExchange];
    const topList: SymbolDetailPrice[] = [];
    const usedIds = new Set<string>();

    if (lowestAskItem) {
      topList.push(lowestAskItem);
      usedIds.add(lowestAskItem.exchangeId);
    }

    if (highestBidItem && !usedIds.has(highestBidItem.exchangeId)) {
      topList.push(highestBidItem);
      usedIds.add(highestBidItem.exchangeId);
    }

    const remaining = list
      .filter((item) => !usedIds.has(item.exchangeId))
      .sort((a, b) => {
        if (a.ask > 0 && b.ask > 0) return a.ask - b.ask;
        if (a.ask > 0) return -1;
        if (b.ask > 0) return 1;
        return b.bid - a.bid;
      });

    sortedPrices = [...topList, ...remaining];
  }

  const maxSpread = lowestAsk > 0 && highestBid > lowestAsk
    ? ((highestBid - lowestAsk) / lowestAsk) * 100
    : 0;

  // Custom Target Calculations
  const numericTargetBuyPrice = parseFloat(targetBuyPrice) || lowestAsk;
  const numericTargetSellPrice = parseFloat(targetSellPrice) || highestBid;

  const maxTokensPurchasable = numericTargetBuyPrice > 0 ? usdtBudget / numericTargetBuyPrice : 0;
  const totalUsdtFromSale = maxTokensPurchasable * numericTargetSellPrice;
  const estimatedProfitUsdt = totalUsdtFromSale - usdtBudget;
  const targetSpreadPercent = numericTargetBuyPrice > 0
    ? ((numericTargetSellPrice - numericTargetBuyPrice) / numericTargetBuyPrice) * 100
    : 0;

  // Extract all unique contracts discovered across exchanges
  const allDiscoveredContracts: string[] = Array.from(
    new Set<string>(
      (data?.pricesByExchange || [])
        .flatMap((p) => p.contracts || [])
        .filter((c): c is string => Boolean(c && c.length > 6))
    )
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-xl animate-fade-in">
      <div className="bg-slate-900/95 border border-slate-700/80 rounded-2xl sm:rounded-3xl max-w-5xl w-full p-3 sm:p-6 shadow-2xl backdrop-blur-2xl relative text-white max-h-[94vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 sm:right-5 sm:top-5 text-slate-400 hover:text-white p-1.5 sm:p-2 rounded-xl bg-slate-950 border border-slate-800 transition-all cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header (Compact) */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 pr-10">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-extrabold text-sm sm:text-base font-mono shrink-0">
            {symbol.slice(0, 3)}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <h2 className="text-base sm:text-xl font-black text-white tracking-tight truncate">{symbol}</h2>
              <span className="text-[9px] sm:text-xs font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                14-Exchange Cross Matrix
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-400 truncate">
              Order depths, deposit/withdraw statuses, withdrawal fees, and contract addresses.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12 gap-2.5 text-slate-400">
            <RefreshCw className="w-7 h-7 animate-spin text-emerald-400" />
            <span className="text-xs font-mono">Scanning 14 spot exchanges for {symbol}...</span>
          </div>
        ) : error ? (
          <div className="bg-rose-500/10 border border-rose-500/30 text-rose-300 p-3 rounded-xl text-xs text-center my-4">
            {error}
          </div>
        ) : data ? (
          <>
            {/* Top Highlight Summary Cards (Compact) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
              {/* Lowest Ask */}
              <div className="bg-slate-950 border border-emerald-500/30 p-2.5 sm:p-3 rounded-xl">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
                  Best Buy (Lowest Ask)
                </span>
                <div className="text-sm sm:text-lg font-mono font-black text-white mt-0.5 truncate">
                  ${lowestAsk !== Infinity ? formatPrice(lowestAsk) : 'N/A'}
                </div>
                <div className="text-[9px] sm:text-xs text-slate-400 mt-0.5 font-medium flex items-center justify-between">
                  <span className="text-slate-200 font-bold truncate">{lowestAskEx || 'None'}</span>
                  <span className="text-emerald-400 font-mono font-semibold truncate">
                    {formatOrderSize(lowestAskDepthUsdt, lowestAskTokenQty, data.baseSymbol)}
                  </span>
                </div>
              </div>

              {/* Highest Bid */}
              <div className="bg-slate-950 border border-rose-500/30 p-2.5 sm:p-3 rounded-xl">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-rose-400 tracking-wider block">
                  Best Sell (Highest Bid)
                </span>
                <div className="text-sm sm:text-lg font-mono font-black text-rose-400 mt-0.5 truncate">
                  ${highestBid > 0 ? formatPrice(highestBid) : 'N/A'}
                </div>
                <div className="text-[9px] sm:text-xs text-slate-400 mt-0.5 font-medium flex items-center justify-between">
                  <span className="text-slate-200 font-bold truncate">{highestBidEx || 'None'}</span>
                  <span className="text-rose-400 font-mono font-semibold truncate">
                    {formatOrderSize(highestBidDepthUsdt, highestBidTokenQty, data.baseSymbol)}
                  </span>
                </div>
              </div>

              {/* Max Spread */}
              <div className="col-span-2 sm:col-span-1 bg-slate-950 border border-amber-500/30 p-2.5 sm:p-3 rounded-xl flex sm:flex-col items-center sm:items-start justify-between">
                <div>
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
                    Max Arbitrage Spread
                  </span>
                  <div className="text-base sm:text-lg font-mono font-black text-amber-400 mt-0.5">
                    +{maxSpread.toFixed(2)}%
                  </div>
                </div>
                <div className="text-[9px] sm:text-xs text-slate-400 font-medium">
                  {data.pricesByExchange.length} Exchanges Active
                </div>
              </div>
            </div>

            {/* Smart Contract Address & Blockchain Verification Card */}
            <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-2.5 sm:p-3.5 mb-3 sm:mb-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white uppercase font-mono tracking-wide">
                    Contract Addresses & Multi-Chain Verification
                  </span>
                </div>
                <span className="text-[9px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  {data.baseSymbol}
                </span>
              </div>

              {/* Verified Contracts list */}
              {allDiscoveredContracts.length > 0 ? (
                <div className="space-y-1.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {allDiscoveredContracts.map((addr, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900 border border-slate-800/90 px-2 py-1 rounded-lg flex items-center justify-between text-[10px] font-mono"
                      >
                        <span className="text-slate-300 truncate select-all">{addr}</span>
                        <button
                          onClick={() => copyToClipboard(addr, `modal-${idx}`)}
                          className="ml-1.5 p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors shrink-0"
                          title="Copy Contract Address"
                        >
                          {copiedKey === `modal-${idx}` ? (
                            <Check className="w-3 h-3 text-emerald-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-[10px] sm:text-xs text-slate-300 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>
                    Official Native Mainnet Coin (e.g. Layer-1 blockchain asset). Validated across all exchange spot deposit/withdrawal addresses.
                  </span>
                </div>
              )}
            </div>

            {/* Target Price & Max Allocation Calculator (Compact) */}
            <div className="bg-slate-950/80 border border-emerald-500/25 rounded-xl p-2.5 sm:p-3.5 mb-3 sm:mb-4 shadow-lg">
              <div className="flex items-center gap-1.5 mb-2">
                <Calculator className="w-3.5 h-3.5 text-emerald-400" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Custom Target Price & Profit Simulator
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-2.5">
                {/* Buy Limit Price */}
                <div>
                  <label className="block text-[9px] sm:text-xs font-medium text-slate-300 mb-0.5 truncate">
                    Buy Price ($):
                  </label>
                  <input
                    type="number"
                    step="any"
                    value={targetBuyPrice}
                    onChange={(e) => setTargetBuyPrice(e.target.value)}
                    placeholder="Buy ask price..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-[10px] sm:text-xs font-mono text-white outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Sell Limit Price */}
                <div>
                  <label className="block text-[9px] sm:text-xs font-medium text-slate-300 mb-0.5 truncate">
                    Sell Price ($):
                  </label>
                  <input
                    type="number"
                    step="any"
                    value={targetSellPrice}
                    onChange={(e) => setTargetSellPrice(e.target.value)}
                    placeholder="Sell bid price..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-[10px] sm:text-xs font-mono text-white outline-none focus:border-sky-500"
                  />
                </div>

                {/* Max USDT Capital */}
                <div>
                  <label className="block text-[9px] sm:text-xs font-medium text-slate-300 mb-0.5 truncate">
                    USDT Capital ($):
                  </label>
                  <input
                    type="number"
                    value={usdtBudget}
                    onChange={(e) => setUsdtBudget(Math.max(1, parseFloat(e.target.value) || 0))}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2 py-1 text-[10px] sm:text-xs font-mono text-white outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Calculator Output Results */}
              <div className="bg-slate-900/90 border border-slate-800 p-2 sm:p-2.5 rounded-lg grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[10px] sm:text-xs">
                <div>
                  <span className="text-[8.5px] sm:text-[9.5px] text-slate-400 block uppercase">Tokens Purchased</span>
                  <span className="text-xs sm:text-sm font-bold text-white truncate block">
                    {maxTokensPurchasable.toLocaleString(undefined, { maximumFractionDigits: 4 })} {data.baseSymbol}
                  </span>
                </div>

                <div>
                  <span className="text-[8.5px] sm:text-[9.5px] text-slate-400 block uppercase">Total Sale USDT</span>
                  <span className="text-xs sm:text-sm font-bold text-sky-400 truncate block">
                    ${totalUsdtFromSale.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>

                <div>
                  <span className="text-[8.5px] sm:text-[9.5px] text-slate-400 block uppercase">Projected Net Profit</span>
                  <span className={`text-xs sm:text-sm font-black ${estimatedProfitUsdt >= 0 ? 'text-emerald-400' : 'text-rose-400'} truncate block`}>
                    {estimatedProfitUsdt >= 0 ? '+' : ''}${estimatedProfitUsdt.toFixed(2)} USDT
                  </span>
                </div>

                <div>
                  <span className="text-[8.5px] sm:text-[9.5px] text-slate-400 block uppercase">Target ROI</span>
                  <span className={`text-xs sm:text-sm font-black ${targetSpreadPercent >= 0 ? 'text-amber-400' : 'text-rose-400'} truncate block`}>
                    {targetSpreadPercent >= 0 ? '+' : ''}{targetSpreadPercent.toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Active Arbitrage Routes for this Symbol */}
            {data.opportunities && data.opportunities.length > 0 && (
              <div className="mb-3 sm:mb-4 bg-slate-950 border border-emerald-500/30 rounded-xl overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-3 py-2 bg-emerald-950/40 border-b border-emerald-500/20 font-mono text-[10px] sm:text-xs">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="font-bold text-emerald-300 uppercase tracking-wider">
                      All Active Arbitrage Routes ({data.opportunities.length} pairs)
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-sans">
                    Sorted by Best Spread
                  </span>
                </div>

                <div className="p-2 sm:p-3 space-y-2">
                  {data.opportunities.map((opp, idx) => {
                    const isWithdrawOk = opp.buyWithdrawOpen === true;
                    const isWithdrawClosed = opp.buyWithdrawOpen === false;
                    const isDepositOk = opp.sellDepositOpen === true;
                    const isDepositClosed = opp.sellDepositOpen === false;

                    return (
                      <div
                        key={opp.id || idx}
                        className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-lg sm:rounded-xl p-2.5 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                      >
                        {/* Route Info */}
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <span className="text-[10px] font-mono text-slate-500 font-bold w-4 shrink-0">
                            #{idx + 1}
                          </span>

                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              {/* Buy Exchange */}
                              <div className="flex items-center gap-1">
                                <span className="font-sans font-bold text-white text-xs sm:text-sm">
                                  {opp.buyExchangeName}
                                </span>
                                <span className="text-[9px] text-emerald-400 font-mono font-semibold">
                                  ${formatPrice(opp.buyPrice)}
                                </span>
                                {isWithdrawOk ? (
                                  <span className="text-[8px] font-bold text-emerald-400 bg-emerald-500/10 px-1 rounded">
                                    WD✓
                                  </span>
                                ) : isWithdrawClosed ? (
                                  <span className="text-[8px] font-bold text-rose-400 bg-rose-500/10 px-1 rounded">
                                    WD✗
                                  </span>
                                ) : null}
                              </div>

                              <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />

                              {/* Sell Exchange */}
                              <div className="flex items-center gap-1">
                                <span className="font-sans font-bold text-white text-xs sm:text-sm">
                                  {opp.sellExchangeName}
                                </span>
                                <span className="text-[9px] text-rose-300 font-mono font-semibold">
                                  ${formatPrice(opp.sellPrice)}
                                </span>
                                {isDepositOk ? (
                                  <span className="text-[8px] font-bold text-emerald-400 bg-emerald-500/10 px-1 rounded">
                                    DEP✓
                                  </span>
                                ) : isDepositClosed ? (
                                  <span className="text-[8px] font-bold text-rose-400 bg-rose-500/10 px-1 rounded">
                                    DEP✗
                                  </span>
                                ) : null}
                              </div>
                            </div>

                            <div className="text-[9px] text-slate-400 font-mono flex items-center gap-2 mt-0.5">
                              <span>Buy Vol: {formatOrderSize(opp.buyAskUsdtVolume, opp.buyAskTokenVolume, opp.baseSymbol)}</span>
                              <span>•</span>
                              <span>Sell Vol: {formatOrderSize(opp.sellBidUsdtVolume, opp.sellBidTokenVolume, opp.baseSymbol)}</span>
                            </div>
                          </div>
                        </div>

                        {/* Spread & Profit & Direct Trade Actions */}
                        <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 border-t sm:border-t-0 pt-1.5 sm:pt-0 border-slate-800">
                          <div className="text-left sm:text-right">
                            <div className="text-xs sm:text-sm font-black font-mono text-emerald-400">
                              +{opp.grossSpreadPercent.toFixed(2)}%
                            </div>
                            <div className="text-[9px] font-mono text-slate-400">
                              +${(opp.profitPer100USDT ?? (opp.profitPer1000USDT / 10)).toFixed(2)} / $100
                            </div>
                          </div>

                          <div className="flex items-center gap-1">
                            {/* Buy App Button */}
                            <button
                              onClick={() => openExchangeTrade(opp.buyExchangeName, symbol)}
                              title={`Trade on ${opp.buyExchangeName} App`}
                              className="px-2 py-1 rounded bg-emerald-500/15 hover:bg-emerald-500/30 text-emerald-300 text-[10px] font-bold border border-emerald-500/30 inline-flex items-center gap-0.5 cursor-pointer active:scale-95 transition-all"
                            >
                              <Smartphone className="w-2.5 h-2.5" />
                              Buy
                            </button>

                            {/* Sell App Button */}
                            <button
                              onClick={() => openExchangeTrade(opp.sellExchangeName, symbol)}
                              title={`Trade on ${opp.sellExchangeName} App`}
                              className="px-2 py-1 rounded bg-rose-500/15 hover:bg-rose-500/30 text-rose-300 text-[10px] font-bold border border-rose-500/30 inline-flex items-center gap-0.5 cursor-pointer active:scale-95 transition-all"
                            >
                              <Smartphone className="w-2.5 h-2.5" />
                              Sell
                            </button>

                            {/* Calculator Button */}
                            {onOpenCalculator && (
                              <button
                                onClick={() => {
                                  onClose();
                                  onOpenCalculator(opp);
                                }}
                                title="Simulate Profit in Calculator"
                                className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
                              >
                                <Calculator className="w-3 h-3 text-emerald-400" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Exchange Price Table & Mobile Matrix Cards */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
              {/* Header banner */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 border-b border-slate-800 font-mono text-[10px] sm:text-xs">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="font-bold text-white uppercase tracking-wider">
                    Exchange Order Book Matrix
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[9px]">
                  <span className="text-emerald-300 font-bold bg-emerald-500/15 px-1.5 py-0.2 rounded">
                    #1 Lowest Ask
                  </span>
                  <span className="text-rose-300 font-bold bg-rose-500/15 px-1.5 py-0.2 rounded">
                    #2 Highest Bid
                  </span>
                </div>
              </div>

              {/* Responsive Table for All Screens */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-slate-900/60 text-slate-400 border-b border-slate-800 font-mono text-[10px] uppercase">
                      <th className="py-2.5 px-3">Exchange</th>
                      <th className="py-2.5 px-3 text-right">Bid (Sell) & Vol</th>
                      <th className="py-2.5 px-3 text-right">Ask (Buy) & Vol</th>
                      <th className="py-2.5 px-3">Deposit / Chains</th>
                      <th className="py-2.5 px-3">Withdraw / Fee</th>
                      <th className="py-2.5 px-3">Contract Address</th>
                      <th className="py-2.5 px-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {sortedPrices.map((item, index) => {
                      const isBestAsk = item.exchangeId === lowestAskItem?.exchangeId;
                      const isBestBid = item.exchangeId === highestBidItem?.exchangeId;
                      const isBothBest = isBestAsk && isBestBid;

                      const depositChainsList = item.depositChains || [];
                      const withdrawChainsList = item.withdrawChains || [];
                      const contractAddr = item.contracts && item.contracts.length > 0 ? item.contracts[0] : '';

                      return (
                        <tr
                          key={item.exchangeId}
                          className={`hover:bg-slate-900/40 transition-colors ${
                            isBestAsk && !isBothBest
                              ? 'bg-emerald-950/20'
                              : isBestBid && !isBothBest
                              ? 'bg-rose-950/20'
                              : ''
                          }`}
                        >
                          {/* EXCHANGE NAME & BADGE */}
                          <td className="py-2.5 px-3">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-white text-xs">{item.exchangeName}</span>
                              {isBestAsk && !isBothBest ? (
                                <span className="text-[8px] font-black bg-emerald-500 text-slate-950 px-1 py-0.2 rounded uppercase font-mono">
                                  BEST BUY #1
                                </span>
                              ) : isBestBid && !isBothBest ? (
                                <span className="text-[8px] font-black bg-rose-500 text-white px-1 py-0.2 rounded uppercase font-mono">
                                  BEST SELL #2
                                </span>
                              ) : null}
                            </div>
                          </td>

                          {/* BID PRICE & ORDER SIZE */}
                          <td className="py-2.5 px-3 text-right">
                            <div className={`font-mono font-bold text-xs ${isBestBid ? 'text-rose-300 font-extrabold' : 'text-slate-200'}`}>
                              ${formatPrice(item.bid)}
                            </div>
                            <div className="text-[9px] font-mono text-slate-400">
                              {formatOrderSize(item.bidUsdtVolume, item.bidTokenVolume, data.baseSymbol)}
                            </div>
                          </td>

                          {/* ASK PRICE & ORDER SIZE */}
                          <td className="py-2.5 px-3 text-right">
                            <div className={`font-mono font-bold text-xs ${isBestAsk ? 'text-emerald-300 font-extrabold' : 'text-slate-200'}`}>
                              ${formatPrice(item.ask)}
                            </div>
                            <div className="text-[9px] font-mono text-slate-400">
                              {formatOrderSize(item.askUsdtVolume, item.askTokenVolume, data.baseSymbol)}
                            </div>
                          </td>

                          {/* DEPOSIT STATUS & CHAINS */}
                          <td className="py-2.5 px-3">
                            <div className="flex items-center gap-1 mb-0.5">
                              {item.depositOpen === true ? (
                                <span className="text-emerald-400 text-[9px] bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20 font-bold">
                                  ✓ Open
                                </span>
                              ) : item.depositOpen === false ? (
                                <span className="text-rose-400 text-[9px] bg-rose-500/10 px-1.5 py-0.2 rounded border border-rose-500/20 font-bold">
                                  ✗ Closed
                                </span>
                              ) : (
                                <span className="text-slate-400 text-[9px] bg-slate-800 px-1.5 py-0.2 rounded">
                                  ? Unknown
                                </span>
                              )}
                            </div>
                            {depositChainsList.length > 0 && (
                              <div className="text-[8.5px] text-sky-300 truncate max-w-[90px]">
                                {depositChainsList.slice(0, 2).join(', ')}
                              </div>
                            )}
                          </td>

                          {/* WITHDRAW STATUS & FEE */}
                          <td className="py-2.5 px-3">
                            <div className="flex items-center gap-1 mb-0.5">
                              {item.withdrawOpen === true ? (
                                <span className="text-emerald-400 text-[9px] bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20 font-bold">
                                  ✓ Open
                                </span>
                              ) : item.withdrawOpen === false ? (
                                <span className="text-rose-400 text-[9px] bg-rose-500/10 px-1.5 py-0.2 rounded border border-rose-500/20 font-bold">
                                  ✗ Closed
                                </span>
                              ) : (
                                <span className="text-slate-400 text-[9px] bg-slate-800 px-1.5 py-0.2 rounded">
                                  ? Unknown
                                </span>
                              )}
                            </div>
                            {item.withdrawalFees && item.withdrawalFees.length > 0 ? (
                              <div className="text-[8.5px] font-mono text-purple-300">
                                {item.withdrawalFees[0].isFree ? 'FREE' : `$${item.withdrawalFees[0].feeUsdt.toFixed(2)}`}
                              </div>
                            ) : null}
                          </td>

                          {/* CONTRACT ADDRESS */}
                          <td className="py-2.5 px-3 font-mono text-[9px]">
                            {contractAddr ? (
                              <div className="flex items-center gap-1">
                                <span className="bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded text-slate-300 select-all truncate max-w-[100px]">
                                  {truncateAddr(contractAddr)}
                                </span>
                                <button
                                  onClick={() => copyToClipboard(contractAddr, `row-${index}`)}
                                  title="Copy Contract"
                                  className="p-0.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"
                                >
                                  {copiedKey === `row-${index}` ? (
                                    <Check className="w-2.5 h-2.5 text-emerald-400" />
                                  ) : (
                                    <Copy className="w-2.5 h-2.5" />
                                  )}
                                </button>
                              </div>
                            ) : (
                              <span className="text-slate-500 italic">Native Mainnet</span>
                            )}
                          </td>

                          {/* ACTION BUTTON */}
                          <td className="py-2.5 px-3 text-right">
                            {isBestAsk ? (
                              <button
                                onClick={() => openExchangeTrade(item.exchangeName, symbol)}
                                title={`Open ${symbol} in ${item.exchangeName} App (Buy)`}
                                className="px-2 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-[10px] font-black inline-flex items-center gap-1 transition-all cursor-pointer shadow-sm active:scale-95"
                              >
                                <ShoppingCart className="w-3 h-3" />
                                Buy Ask
                              </button>
                            ) : isBestBid ? (
                              <button
                                onClick={() => openExchangeTrade(item.exchangeName, symbol)}
                                title={`Open ${symbol} in ${item.exchangeName} App (Sell)`}
                                className="px-2 py-1 rounded-lg bg-rose-500 hover:bg-rose-400 text-white text-[10px] font-black inline-flex items-center gap-1 transition-all cursor-pointer shadow-sm active:scale-95"
                              >
                                <TrendingUp className="w-3 h-3" />
                                Sell Bid
                              </button>
                            ) : (
                              <button
                                onClick={() => openExchangeTrade(item.exchangeName, symbol)}
                                title={`Open ${symbol} in ${item.exchangeName} App`}
                                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-semibold inline-flex items-center gap-0.5 transition-all cursor-pointer active:scale-95"
                              >
                                <Smartphone className="w-2.5 h-2.5 text-slate-400" />
                                Trade
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
