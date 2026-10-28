import React, { useState } from 'react';
import { CexDexArbitrageOpportunity } from '../types';
import {
  ExternalLink,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Calculator,
  Copy,
  Check,
  Fuel,
  DollarSign,
  Layers,
  Droplets,
  Bookmark,
  BookmarkCheck,
  Flame,
} from 'lucide-react';
import { getTradeUrl } from '../utils/tradeUrls';
import { formatOrderSize } from '../utils/formatters';

interface CexDexCardProps {
  opp: CexDexArbitrageOpportunity;
  onOpenCalculator: (opp: CexDexArbitrageOpportunity) => void;
  isSaved?: boolean;
  onToggleSave?: (id: string) => void;
}

export const CexDexCard: React.FC<CexDexCardProps> = ({
  opp,
  onOpenCalculator,
  isSaved = false,
  onToggleSave,
}) => {
  const [copied, setCopied] = useState(false);

  const copyContract = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(opp.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isCexToDex = opp.direction === 'CEX_TO_DEX';

  const formatPrice = (p: number) => {
    if (p >= 1000) return p.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (p >= 1) return p.toFixed(4);
    if (p >= 0.0001) return p.toFixed(6);
    return p.toFixed(8);
  };

  const formatUsd = (val?: number) => {
    if (!val) return '$0';
    if (val >= 1_000_000) return `$${(val / 1_000_000).toFixed(2)}M`;
    if (val >= 1_000) return `$${(val / 1_000).toFixed(1)}k`;
    return `$${val.toFixed(0)}`;
  };

  // CEX direct trade link
  const cexTradeData = getTradeUrl(opp.cexId, opp.baseSymbol, 'USDT');

  return (
    <div className="group relative bg-slate-900/80 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700/80 rounded-xl p-3.5 transition-all duration-200 shadow-md hover:shadow-xl flex flex-col justify-between">
      {/* Top Header: Token & Direction Badge */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500/20 to-emerald-500/20 border border-white/10 flex items-center justify-center font-bold text-xs text-white shadow-inner">
              {opp.baseSymbol.slice(0, 3)}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm text-white">{opp.baseSymbol}</span>
                <span className="text-[10px] text-slate-400 font-medium">/{opp.quoteSymbol}</span>
                {opp.isContractVerified && (
                  <span title="Verified Smart Contract" className="text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5 inline" />
                  </span>
                )}
                {opp.tokenTier === 'micro' && (
                  <span className="px-1.5 py-0.2 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30 text-[9px] font-bold flex items-center gap-0.5">
                    <Flame className="w-2.5 h-2.5 text-pink-400" />
                    <span>Micro</span>
                  </span>
                )}
                {opp.tokenTier === 'small' && (
                  <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[9px] font-bold flex items-center gap-0.5">
                    <Flame className="w-2.5 h-2.5 text-amber-400" />
                    <span>Small</span>
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <p className="text-[10.5px] text-slate-400 truncate max-w-[110px] sm:max-w-[140px]" title={opp.tokenName}>
                  {opp.tokenName}
                </p>
                {opp.tokenCategory && (
                  <span className="px-1 py-0.2 rounded bg-slate-800/80 text-slate-300 text-[8.5px] font-medium border border-white/5">
                    {opp.tokenCategory}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Direction Badge */}
            <span
              className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border flex items-center gap-1 ${
                isCexToDex
                  ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30 shadow-sm shadow-emerald-500/10'
                  : 'bg-purple-500/15 text-purple-300 border-purple-500/30 shadow-sm shadow-purple-500/10'
              }`}
            >
              {isCexToDex ? 'CEX ➔ DEX' : 'DEX ➔ CEX'}
            </span>

            {/* Bookmark button */}
            {onToggleSave && (
              <button
                onClick={() => onToggleSave(opp.id)}
                className={`p-1 rounded-md transition-colors ${
                  isSaved
                    ? 'text-amber-400 bg-amber-400/10'
                    : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                }`}
                title={isSaved ? 'Remove from Watchlist' : 'Save to Watchlist'}
              >
                {isSaved ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>
        </div>

        {/* Chain, DEX & Contract Row */}
        <div className="bg-slate-950/60 rounded-lg p-2 border border-white/5 mb-3 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-1.5 py-0.2 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20 font-medium text-[10px]">
              {opp.dexChain}
            </span>
            <span className="px-1.5 py-0.2 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium text-[10px]">
              {opp.dexName}
            </span>
          </div>

          {/* Contract Address copy */}
          <div className="flex items-center gap-1">
            <button
              onClick={copyContract}
              className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-slate-200 bg-slate-900 px-1.5 py-0.5 rounded border border-white/10 transition-colors"
              title={`Copy Contract: ${opp.contractAddress}`}
            >
              <span className="font-mono">{opp.contractAddress.slice(0, 4)}...{opp.contractAddress.slice(-4)}</span>
              {copied ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
            </button>
            <a
              href={opp.explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-300 p-0.5"
              title="Open Block Explorer"
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Buy Side vs Sell Side Comparison Grid */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {/* BUY SIDE */}
          <div className={`p-2.5 rounded-lg border ${
            isCexToDex ? 'bg-emerald-950/20 border-emerald-500/20' : 'bg-purple-950/20 border-purple-500/20'
          }`}>
            <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
              <span className="font-semibold text-slate-300">
                1. BUY ({isCexToDex ? opp.cexName : opp.dexName})
              </span>
              <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                {isCexToDex ? 'CEX Ask' : 'DEX Pool'}
              </span>
            </div>
            <div className="text-sm font-extrabold text-white font-mono">
              ${formatPrice(isCexToDex ? opp.cexBuyPrice : opp.dexPrice)}
            </div>

            {/* Order size in USDT */}
            <div className="text-[8.5px] sm:text-[10px] font-mono mt-0.5 flex items-center justify-between">
              <span className="text-slate-400">Vol:</span>
              <span className="font-bold truncate text-slate-300">
                {isCexToDex 
                  ? formatOrderSize(opp.cexVolumeUsd, opp.cexVolumeToken, opp.baseSymbol)
                  : formatOrderSize(opp.cexVolumeUsd, opp.cexVolumeToken, opp.baseSymbol)
                }
              </span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-between">
              {isCexToDex ? (
                <>
                  <span>Withdraw:</span>
                  <span className={`font-semibold ${opp.cexWithdrawOpen !== false ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {opp.cexWithdrawOpen !== false ? 'Open' : 'Suspended'}
                  </span>
                </>
              ) : (
                <>
                  <span className="flex items-center gap-0.5"><Droplets className="w-2.5 h-2.5 text-sky-400" /> Liq:</span>
                  <span className="text-slate-200 font-mono font-medium">{formatUsd(opp.dexLiquidityUsd)}</span>
                </>
              )}
            </div>
          </div>

          {/* SELL SIDE */}
          <div className={`p-2.5 rounded-lg border ${
            !isCexToDex ? 'bg-emerald-950/20 border-emerald-500/20' : 'bg-purple-950/20 border-purple-500/20'
          }`}>
            <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
              <span className="font-semibold text-slate-300">
                2. SELL ({isCexToDex ? opp.dexName : opp.cexName})
              </span>
              <span className="text-[9px] px-1 py-0.2 rounded bg-purple-500/20 text-purple-300 font-mono">
                {isCexToDex ? 'DEX Pool' : 'CEX Bid'}
              </span>
            </div>
            <div className="text-sm font-extrabold text-white font-mono">
              ${formatPrice(isCexToDex ? opp.dexPrice : opp.cexSellPrice)}
            </div>
            <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-between">
              {isCexToDex ? (
                <>
                  <span className="flex items-center gap-0.5"><Droplets className="w-2.5 h-2.5 text-sky-400" /> Liq:</span>
                  <span className="text-slate-200 font-mono font-medium">{formatUsd(opp.dexLiquidityUsd)}</span>
                </>
              ) : (
                <>
                  <span>Deposit:</span>
                  <span className={`font-semibold ${opp.cexDepositOpen !== false ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {opp.cexDepositOpen !== false ? 'Open' : 'Suspended'}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Spread & Profit Summary Pill */}
        <div className="bg-slate-950/80 rounded-xl p-2.5 border border-white/10 mb-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                Gross Spread
              </span>
              <div className="text-lg font-black text-emerald-400 font-mono flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                +{opp.grossSpreadPercent.toFixed(2)}%
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                Net Profit ($1,000 USDT)
              </span>
              <div className="text-sm font-extrabold text-teal-300 font-mono">
                +${opp.netProfitPer1000USDT.toFixed(2)}
              </div>
              <div className="text-[9.5px] text-slate-400 flex items-center justify-end gap-1 font-mono">
                <Fuel className="w-2.5 h-2.5 text-amber-400" /> Gas: ~${opp.estimatedGasFeeUsd.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="grid grid-cols-3 gap-1.5 pt-1 border-t border-white/5">
        {/* CEX Button */}
        <a
          href={cexTradeData.webUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-semibold border border-white/10 transition-colors"
          title={`Trade ${opp.baseSymbol} on ${opp.cexName}`}
        >
          <span>{opp.cexName}</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-70" />
        </a>

        {/* DEX Swap Button */}
        <a
          href={opp.dexTradeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 text-[11px] font-semibold border border-indigo-500/30 transition-colors"
          title={`Swap ${opp.baseSymbol} on ${opp.dexName}`}
        >
          <span>{opp.dexName.split(' ')[0]}</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-70" />
        </a>

        {/* Calculator Button */}
        <button
          onClick={() => onOpenCalculator(opp)}
          className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-semibold shadow-sm transition-all active:scale-95"
          title="Calculate exact net profit with fees"
        >
          <Calculator className="w-3 h-3" />
          <span>Calc</span>
        </button>
      </div>
    </div>
  );
};
