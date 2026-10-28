import React, { useState } from 'react';
import { ArbitrageOpportunity } from '../types';
import {
  Calculator,
  Eye,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
  Star,
  Smartphone,
  Copy,
  Check,
  Zap,
} from 'lucide-react';
import { openExchangeTrade } from '../utils/tradeUrls';
import { formatOrderSize } from '../utils/formatters';

interface OpportunityTableProps {
  opportunities: ArbitrageOpportunity[];
  onOpenCalculator: (opp: ArbitrageOpportunity) => void;
  onOpenDetail: (symbol: string) => void;
  savedIds: Set<string>;
  onToggleSave: (id: string) => void;
}

export const OpportunityTable: React.FC<OpportunityTableProps> = ({
  opportunities,
  onOpenCalculator,
  onOpenDetail,
  savedIds,
  onToggleSave,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const formatPrice = (price: number) => {
    if (price >= 1000) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (price >= 1) return price.toFixed(4);
    if (price >= 0.0001) return price.toFixed(6);
    return price.toFixed(8);
  };

  const copyToClipboard = (text: string, key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const truncateAddr = (addr: string) => {
    if (!addr) return '';
    if (addr.length <= 14) return addr;
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div className="bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mb-6 relative z-10">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse min-w-[850px]">
          <thead>
            <tr className="bg-slate-900/90 text-slate-400 border-b border-slate-800 font-mono text-[10px] uppercase tracking-wider">
              <th className="py-2 px-2.5 text-center">★</th>
              <th className="py-2 px-3">Symbol</th>
              <th className="py-2 px-3">Buy (Ask)</th>
              <th className="py-2 px-3">WD</th>
              <th className="py-2 px-3">Sell (Bid)</th>
              <th className="py-2 px-3">DEP</th>
              <th className="py-2 px-3 text-right">Spread %</th>
              <th className="py-2 px-3 text-right">Profit / $100</th>
              <th className="py-2 px-3">Contract Comparison (Buy vs Sell)</th>
              <th className="py-2 px-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-mono text-xs">
            {opportunities.map((opp) => {
              const isSaved = savedIds.has(opp.id);
              const isWithdrawOk = opp.buyWithdrawOpen === true;
              const isWithdrawClosed = opp.buyWithdrawOpen === false;
              const isDepositOk = opp.sellDepositOpen === true;
              const isDepositClosed = opp.sellDepositOpen === false;

              const resolvedMatched = (opp.matchedContracts && opp.matchedContracts.length > 0) ? opp.matchedContracts[0] : '';
              const buyAddr = (opp.buyContracts && opp.buyContracts.length > 0) ? opp.buyContracts[0] : resolvedMatched;
              const sellAddr = (opp.sellContracts && opp.sellContracts.length > 0) ? opp.sellContracts[0] : resolvedMatched;
              const isSameContract = opp.contractMatch === true && opp.contractMatchType !== 'mismatch';

              return (
                <tr
                  key={opp.id}
                  className="hover:bg-slate-900/60 transition-colors"
                >
                  {/* Star */}
                  <td className="py-2 px-2.5 text-center">
                    <button
                      onClick={() => onToggleSave(opp.id)}
                      className="text-slate-500 hover:text-amber-400 cursor-pointer p-0.5"
                    >
                      <Star
                        className={`w-3.5 h-3.5 ${
                          isSaved ? 'fill-amber-400 text-amber-400' : ''
                        }`}
                      />
                    </button>
                  </td>

                  {/* Symbol */}
                  <td className="py-2 px-3 font-extrabold text-white">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onOpenDetail(opp.symbol)}
                        className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1"
                      >
                        <span className="text-white hover:text-emerald-400 font-black">{opp.symbol}</span>
                      </button>
                      {opp.tokenTier === 'micro' && (
                        <span className="text-[8px] px-1 py-0.2 rounded bg-fuchsia-500/15 text-fuchsia-300 font-semibold border border-fuchsia-500/25">
                          Micro
                        </span>
                      )}
                      {opp.tokenTier === 'small' && (
                        <span className="text-[8px] px-1 py-0.2 rounded bg-amber-500/15 text-amber-300 font-semibold border border-amber-500/25">
                          Small
                        </span>
                      )}
                      {opp.routesCount && opp.routesCount > 1 ? (
                        <button
                          onClick={() => onOpenDetail(opp.symbol)}
                          className="text-[8.5px] px-1 py-0.2 rounded bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 font-sans border border-sky-500/25 cursor-pointer transition-colors"
                          title={`${opp.routesCount} exchange routes available. Click to view all in Cross-Ex Matrix`}
                        >
                          +{opp.routesCount - 1} routes
                        </button>
                      ) : null}
                    </div>
                  </td>

                  {/* Buy Exchange */}
                  <td className="py-2 px-3">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-sans font-semibold text-slate-200 text-xs">
                        {opp.buyExchangeName}
                      </span>
                      <button
                        onClick={() => openExchangeTrade(opp.buyExchangeName, opp.symbol)}
                        title={`Open ${opp.symbol} directly in ${opp.buyExchangeName} App`}
                        className="text-[9px] text-sky-400 hover:text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 px-1 py-0.2 rounded border border-sky-500/20 transition-all cursor-pointer inline-flex items-center gap-0.5"
                      >
                        <Smartphone className="w-2 h-2" />
                        Trade
                      </button>
                    </div>
                    <div className="text-white font-bold text-xs mt-0.5">
                      ${formatPrice(opp.buyPrice)}
                    </div>
                    <div className="text-[9px] text-emerald-400 font-mono">
                      Vol: {formatOrderSize(opp.buyAskUsdtVolume, opp.buyAskTokenVolume, opp.baseSymbol)}
                    </div>
                  </td>

                  {/* Buy WD Status */}
                  <td className="py-2 px-3">
                    <div className="mb-0.5">
                      {isWithdrawOk ? (
                        <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                          ✓ Open
                        </span>
                      ) : isWithdrawClosed ? (
                        <span className="text-[9px] font-semibold text-rose-400 bg-rose-500/10 px-1.5 py-0.2 rounded border border-rose-500/20">
                          ✗ Closed
                        </span>
                      ) : (
                        <span className="text-[9px] text-slate-400 bg-slate-800 px-1.5 py-0.2 rounded">
                          ?
                        </span>
                      )}
                    </div>
                    {opp.buyWithdrawChains && opp.buyWithdrawChains.length > 0 && (
                      <div className="text-[8.5px] text-purple-300 font-sans truncate max-w-[80px]" title={opp.buyWithdrawChains.join(', ')}>
                        {opp.buyWithdrawChains[0]}
                      </div>
                    )}
                  </td>

                  {/* Sell Exchange */}
                  <td className="py-2 px-3">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-sans font-semibold text-slate-200 text-xs">
                        {opp.sellExchangeName}
                      </span>
                      <button
                        onClick={() => openExchangeTrade(opp.sellExchangeName, opp.symbol)}
                        title={`Open ${opp.symbol} directly in ${opp.sellExchangeName} App`}
                        className="text-[9px] text-rose-300 hover:text-white bg-rose-500/15 hover:bg-rose-500/25 px-1 py-0.2 rounded border border-rose-500/25 transition-all cursor-pointer inline-flex items-center gap-0.5"
                      >
                        <Smartphone className="w-2 h-2 text-rose-400" />
                        Trade
                      </button>
                    </div>
                    <div className="text-rose-300 text-xs font-bold mt-0.5">
                      ${formatPrice(opp.sellPrice)}
                    </div>
                    <div className="text-[9px] text-rose-400 font-mono">
                      Vol: {formatOrderSize(opp.sellBidUsdtVolume, opp.sellBidTokenVolume, opp.baseSymbol)}
                    </div>
                  </td>

                  {/* Sell DEP Status */}
                  <td className="py-2 px-3">
                    <div className="mb-0.5">
                      {isDepositOk ? (
                        <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                          ✓ Open
                        </span>
                      ) : isDepositClosed ? (
                        <span className="text-[9px] font-semibold text-rose-400 bg-rose-500/10 px-1.5 py-0.2 rounded border border-rose-500/20">
                          ✗ Closed
                        </span>
                      ) : (
                        <span className="text-[9px] text-slate-400 bg-slate-800 px-1.5 py-0.2 rounded">
                          ?
                        </span>
                      )}
                    </div>
                    {opp.sellDepositChains && opp.sellDepositChains.length > 0 && (
                      <div className="text-[8.5px] text-sky-300 font-sans truncate max-w-[80px]" title={opp.sellDepositChains.join(', ')}>
                        {opp.sellDepositChains[0]}
                      </div>
                    )}
                  </td>

                  {/* Spread % */}
                  <td className="py-2 px-3 text-right font-extrabold text-amber-400 text-xs">
                    +{opp.grossSpreadPercent.toFixed(2)}%
                  </td>

                  {/* Net Profit */}
                  <td className="py-2 px-3 text-right font-bold text-emerald-400 text-xs">
                    +${(opp.profitPer100USDT ?? (opp.profitPer1000USDT / 10)).toFixed(2)}
                  </td>

                  {/* Contract Match & Buy vs Sell Addresses */}
                  <td className="py-2 px-3">
                    <div className="flex flex-col gap-0.5 text-[9px] max-w-[190px]">
                      {/* Match Status Badge */}
                      <div className="flex items-center gap-1">
                        {opp.isNative ? (
                          <span className="text-amber-400 font-bold inline-flex items-center gap-0.5 text-[8.5px]">
                            <Zap className="w-2.5 h-2.5" /> Native {opp.primaryChain || 'L1'}
                          </span>
                        ) : isSameContract ? (
                          <span className="text-emerald-400 font-bold inline-flex items-center gap-0.5 text-[8.5px]">
                            <ShieldCheck className="w-2.5 h-2.5" /> Same Contract ✓
                          </span>
                        ) : opp.contractMatch === false ? (
                          <span className="text-rose-400 font-bold inline-flex items-center gap-0.5 text-[8.5px]">
                            <AlertTriangle className="w-2.5 h-2.5" /> Mismatch Warning
                          </span>
                        ) : (
                          <span className="text-slate-400 inline-flex items-center gap-0.5 text-[8.5px]">
                            <HelpCircle className="w-2.5 h-2.5" /> Verified
                          </span>
                        )}
                      </div>

                      {/* Buy & Sell Addresses */}
                      {buyAddr && (
                        <div className="flex items-center justify-between text-slate-300 bg-slate-900/90 px-1 py-0.2 rounded border border-slate-800 font-mono text-[8.5px]">
                          <span className="text-slate-500 font-sans text-[7.5px]">{opp.buyExchangeName.slice(0, 4)}:</span>
                          <span className="truncate text-emerald-300">{truncateAddr(buyAddr)}</span>
                          <button
                            onClick={(e) => copyToClipboard(buyAddr, `tbl-buy-${opp.id}`, e)}
                            className="text-slate-400 hover:text-white p-0.2 ml-0.5"
                            title={`Copy ${opp.buyExchangeName} Contract`}
                          >
                            {copiedKey === `tbl-buy-${opp.id}` ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
                          </button>
                        </div>
                      )}
                      {sellAddr && (
                        <div className="flex items-center justify-between text-slate-300 bg-slate-900/90 px-1 py-0.2 rounded border border-slate-800 font-mono text-[8.5px]">
                          <span className="text-slate-500 font-sans text-[7.5px]">{opp.sellExchangeName.slice(0, 4)}:</span>
                          <span className="truncate text-rose-300">{truncateAddr(sellAddr)}</span>
                          <button
                            onClick={(e) => copyToClipboard(sellAddr, `tbl-sell-${opp.id}`, e)}
                            className="text-slate-400 hover:text-white p-0.2 ml-0.5"
                            title={`Copy ${opp.sellExchangeName} Contract`}
                          >
                            {copiedKey === `tbl-sell-${opp.id}` ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
                          </button>
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="py-2 px-3 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={() => onOpenCalculator(opp)}
                        title="Simulate Arbitrage Profit"
                        className="p-1 rounded bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 transition-all cursor-pointer"
                      >
                        <Calculator className="w-3 h-3" />
                      </button>

                      <button
                        onClick={() => onOpenDetail(opp.symbol)}
                        title="View Cross-Exchange Matrix"
                        className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer"
                      >
                        <Eye className="w-3 h-3" />
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
