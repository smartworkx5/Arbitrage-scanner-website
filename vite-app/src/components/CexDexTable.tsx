import React, { useState } from 'react';
import { CexDexArbitrageOpportunity } from '../types';
import {
  ExternalLink,
  TrendingUp,
  ShieldCheck,
  Calculator,
  Copy,
  Check,
  Fuel,
  Droplets,
  Bookmark,
  BookmarkCheck,
  Flame,
} from 'lucide-react';
import { getTradeUrl } from '../utils/tradeUrls';

interface CexDexTableProps {
  opportunities: CexDexArbitrageOpportunity[];
  onOpenCalculator: (opp: CexDexArbitrageOpportunity) => void;
  savedIds?: Set<string>;
  onToggleSave?: (id: string) => void;
}

export const CexDexTable: React.FC<CexDexTableProps> = ({
  opportunities,
  onOpenCalculator,
  savedIds = new Set(),
  onToggleSave,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyContract = (id: string, addr: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(addr);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden shadow-xl mb-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-200">
          <thead className="bg-slate-950/80 text-[11px] text-slate-400 uppercase tracking-wider font-semibold border-b border-white/10">
            <tr>
              <th className="py-3 px-3">Token & Chain</th>
              <th className="py-3 px-3">Direction</th>
              <th className="py-3 px-3">1. Buy Side</th>
              <th className="py-3 px-3">2. Sell Side</th>
              <th className="py-3 px-3 text-right">DEX Liquidity</th>
              <th className="py-3 px-3 text-right">Spread</th>
              <th className="py-3 px-3 text-right">Net Profit ($1k)</th>
              <th className="py-3 px-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-mono">
            {opportunities.map((opp) => {
              const isCexToDex = opp.direction === 'CEX_TO_DEX';
              const isSaved = savedIds.has(opp.id);
              const cexTradeData = getTradeUrl(opp.cexId, opp.baseSymbol, 'USDT');

              return (
                <tr
                  key={opp.id}
                  className="hover:bg-slate-800/50 transition-colors group"
                >
                  {/* Token & Chain & Contract */}
                  <td className="py-2.5 px-3 font-sans">
                    <div className="flex items-center gap-2">
                      {onToggleSave && (
                        <button
                          onClick={() => onToggleSave(opp.id)}
                          className={`p-1 rounded transition-colors ${
                            isSaved ? 'text-amber-400' : 'text-slate-600 hover:text-slate-400'
                          }`}
                          title={isSaved ? 'Remove from Watchlist' : 'Save to Watchlist'}
                        >
                          {isSaved ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                        </button>
                      )}
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-white text-xs">{opp.baseSymbol}</span>
                          <span className="text-[10px] text-slate-400">/{opp.quoteSymbol}</span>
                          {opp.isContractVerified && (
                            <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          )}
                          {opp.tokenTier === 'micro' && (
                            <span className="px-1 py-0.2 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30 text-[8.5px] font-bold flex items-center gap-0.5">
                              <Flame className="w-2.5 h-2.5 text-pink-400" />
                              <span>Micro</span>
                            </span>
                          )}
                          {opp.tokenTier === 'small' && (
                            <span className="px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[8.5px] font-bold flex items-center gap-0.5">
                              <Flame className="w-2.5 h-2.5 text-amber-400" />
                              <span>Small</span>
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
                          <span className="px-1 py-0.2 rounded bg-sky-500/15 text-sky-300 font-medium">
                            {opp.dexChain}
                          </span>
                          {opp.tokenCategory && (
                            <span className="px-1 py-0.2 rounded bg-slate-800 text-slate-300 text-[8.5px] font-medium border border-white/5">
                              {opp.tokenCategory}
                            </span>
                          )}
                          <button
                            onClick={(e) => copyContract(opp.id, opp.contractAddress, e)}
                            className="hover:text-slate-200 transition-colors flex items-center gap-0.5 font-mono"
                            title="Copy Contract"
                          >
                            <span>{opp.contractAddress.slice(0, 4)}...{opp.contractAddress.slice(-3)}</span>
                            {copiedId === opp.id ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Direction */}
                  <td className="py-2.5 px-3">
                    <span
                      className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border font-sans inline-block ${
                        isCexToDex
                          ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                          : 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                      }`}
                    >
                      {isCexToDex ? 'CEX ➔ DEX' : 'DEX ➔ CEX'}
                    </span>
                  </td>

                  {/* Buy Side */}
                  <td className="py-2.5 px-3">
                    <div className="text-white font-bold">
                      ${formatPrice(isCexToDex ? opp.cexBuyPrice : opp.dexPrice)}
                    </div>
                    <div className="text-[10px] text-slate-400 font-sans flex items-center gap-1">
                      <span>{isCexToDex ? opp.cexName : opp.dexName}</span>
                      {isCexToDex && opp.cexWithdrawOpen === false && (
                        <span className="text-rose-400 text-[9px] font-bold">Withdraw Closed</span>
                      )}
                    </div>
                  </td>

                  {/* Sell Side */}
                  <td className="py-2.5 px-3">
                    <div className="text-white font-bold">
                      ${formatPrice(isCexToDex ? opp.dexPrice : opp.cexSellPrice)}
                    </div>
                    <div className="text-[10px] text-slate-400 font-sans flex items-center gap-1">
                      <span>{isCexToDex ? opp.dexName : opp.cexName}</span>
                      {!isCexToDex && opp.cexDepositOpen === false && (
                        <span className="text-rose-400 text-[9px] font-bold">Deposit Closed</span>
                      )}
                    </div>
                  </td>

                  {/* DEX Liquidity */}
                  <td className="py-2.5 px-3 text-right">
                    <div className="text-slate-200 font-medium">
                      {formatUsd(opp.dexLiquidityUsd)}
                    </div>
                    <div className="text-[10px] text-slate-400 font-sans">
                      {opp.dexName}
                    </div>
                  </td>

                  {/* Gross Spread */}
                  <td className="py-2.5 px-3 text-right">
                    <div className="text-emerald-400 font-extrabold text-sm flex items-center justify-end gap-0.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      +{opp.grossSpreadPercent.toFixed(2)}%
                    </div>
                    <div className="text-[9.5px] text-slate-400 font-sans flex items-center justify-end gap-1">
                      <Fuel className="w-2.5 h-2.5 text-amber-400" /> Gas: ~${opp.estimatedGasFeeUsd.toFixed(2)}
                    </div>
                  </td>

                  {/* Net Profit ($1000) */}
                  <td className="py-2.5 px-3 text-right font-bold text-teal-300 text-xs">
                    +${opp.netProfitPer1000USDT.toFixed(2)}
                  </td>

                  {/* Action Buttons */}
                  <td className="py-2.5 px-3 text-center">
                    <div className="flex items-center justify-center gap-1 font-sans">
                      <a
                        href={cexTradeData.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white text-[10px] font-semibold border border-white/10 transition-colors flex items-center gap-0.5"
                        title={`Trade on ${opp.cexName}`}
                      >
                        <span>{opp.cexName.slice(0, 5)}</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                      </a>

                      <a
                        href={opp.dexTradeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 rounded bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 text-[10px] font-semibold border border-indigo-500/30 transition-colors flex items-center gap-0.5"
                        title={`Swap on ${opp.dexName}`}
                      >
                        <span>DEX</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                      </a>

                      <button
                        onClick={() => onOpenCalculator(opp)}
                        className="p-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] transition-colors"
                        title="Calculate Net Arbitrage Profit"
                      >
                        <Calculator className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
