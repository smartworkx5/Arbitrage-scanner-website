import React, { useState } from 'react';
import { ArbitrageOpportunity } from '../types';
import {
  Calculator,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
  Star,
  Eye,
  Smartphone,
  Copy,
  Check,
  Zap,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { openExchangeTrade } from '../utils/tradeUrls';
import { formatOrderSize } from '../utils/formatters';

interface OpportunityCardProps {
  opp: ArbitrageOpportunity;
  onOpenCalculator: (opp: ArbitrageOpportunity) => void;
  onOpenDetail: (symbol: string) => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
  opp,
  onOpenCalculator,
  onOpenDetail,
  isSaved,
  onToggleSave,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showFullContracts, setShowFullContracts] = useState(false);

  // Helper to format crypto prices intelligently
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

  const isDepositOk = opp.sellDepositOpen === true;
  const isDepositClosed = opp.sellDepositOpen === false;
  const isWithdrawOk = opp.buyWithdrawOpen === true;
  const isWithdrawClosed = opp.buyWithdrawOpen === false;

  // Resolve Buy & Sell contract addresses
  const resolvedMatched = (opp.matchedContracts && opp.matchedContracts.length > 0) ? opp.matchedContracts[0] : '';
  const buyAddr = (opp.buyContracts && opp.buyContracts.length > 0) ? opp.buyContracts[0] : resolvedMatched;
  const sellAddr = (opp.sellContracts && opp.sellContracts.length > 0) ? opp.sellContracts[0] : resolvedMatched;
  const matchedAddr = resolvedMatched || buyAddr || sellAddr;

  const hasContracts = Boolean(buyAddr || sellAddr || matchedAddr);
  const isSameContract = opp.contractMatch === true && opp.contractMatchType !== 'mismatch';

  const truncateAddr = (addr: string) => {
    if (!addr) return '';
    if (addr.length <= 16) return addr;
    return `${addr.slice(0, 8)}...${addr.slice(-6)}`;
  };

  return (
    <div className="bg-slate-950/80 backdrop-blur-xl border border-slate-800/90 hover:border-emerald-500/40 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 transition-all duration-200 shadow-xl hover:shadow-2xl flex flex-col justify-between group">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-1.5 mb-2 sm:mb-3">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <button
              onClick={() => onOpenDetail(opp.symbol)}
              className="group-hover:text-emerald-400 font-black text-sm sm:text-base tracking-tight text-white transition-colors cursor-pointer flex items-center gap-1 truncate"
            >
              {opp.symbol}
            </button>
            <span className="text-[9px] sm:text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 font-semibold border border-slate-800 shrink-0">
              {opp.quoteSymbol}
            </span>
            {opp.tokenTier === 'micro' && (
              <span className="text-[8.5px] px-1.5 py-0.5 rounded bg-fuchsia-500/15 text-fuchsia-300 font-semibold border border-fuchsia-500/30 shrink-0">
                Micro
              </span>
            )}
            {opp.tokenTier === 'small' && (
              <span className="text-[8.5px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 font-semibold border border-amber-500/30 shrink-0">
                Small-Cap
              </span>
            )}
            {opp.tokenCategory && (
              <span className="text-[8.5px] px-1.5 py-0.5 rounded bg-indigo-500/15 text-indigo-300 font-semibold border border-indigo-500/30 shrink-0 hidden sm:inline">
                {opp.tokenCategory}
              </span>
            )}
            {opp.routesCount && opp.routesCount > 1 ? (
              <button
                onClick={() => onOpenDetail(opp.symbol)}
                className="text-[8.5px] sm:text-[9.5px] px-1.5 py-0.5 rounded bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 font-semibold border border-sky-500/30 shrink-0 cursor-pointer transition-colors"
                title={`${opp.routesCount} arbitrage routes across tracked exchanges. Click to view all in Cross-Ex Matrix`}
              >
                ⚡ {opp.routesCount} Routes
              </button>
            ) : null}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Net Profit Badge */}
            <div className="text-right">
              <div className="text-xs sm:text-sm font-extrabold font-mono text-emerald-400">
                +{opp.grossSpreadPercent.toFixed(2)}%
              </div>
              <div className="text-[9px] sm:text-[10px] font-mono text-emerald-500/90">
                +${(opp.profitPer100USDT ?? (opp.profitPer1000USDT / 10)).toFixed(2)} / $100
              </div>
            </div>

            {/* Bookmark star */}
            <button
              onClick={() => onToggleSave(opp.id)}
              className={`p-1 sm:p-1.5 rounded-lg border transition-all ${
                isSaved
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                  : 'bg-slate-900 text-slate-500 border-slate-800 hover:text-slate-300'
              }`}
              title={isSaved ? 'Remove from Watchlist' : 'Add to Watchlist'}
            >
              <Star className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isSaved ? 'fill-amber-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Buy & Sell Exchange Flow Box (Compact 2-Column Grid on all screens) */}
        <div className="grid grid-cols-2 gap-1.5 sm:gap-3 mb-2 sm:mb-3">
          {/* BUY SIDE */}
          <div className="bg-slate-900/90 border border-emerald-500/25 rounded-lg sm:rounded-xl p-2 sm:p-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[9px] sm:text-[11px] mb-1">
                <span className="font-bold text-emerald-400 uppercase tracking-wider text-[8.5px] sm:text-[10px]">
                  BUY ASK
                </span>
                {/* Withdraw Status */}
                <div className="flex items-center gap-0.5">
                  <span className="text-[8.5px] sm:text-[9.5px] text-slate-500">WD:</span>
                  {isWithdrawOk ? (
                    <span className="text-[8.5px] sm:text-[9.5px] font-bold text-emerald-400 bg-emerald-500/15 px-1 py-0.2 rounded border border-emerald-500/30">
                      ✓ Open
                    </span>
                  ) : isWithdrawClosed ? (
                    <span className="text-[8.5px] sm:text-[9.5px] font-bold text-rose-400 bg-rose-500/15 px-1 py-0.2 rounded border border-rose-500/30">
                      ✗ Closed
                    </span>
                  ) : (
                    <span className="text-[8.5px] sm:text-[9.5px] font-medium text-slate-400 bg-slate-800 px-1 py-0.2 rounded">
                      ?
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between mb-0.5">
                <span className="font-bold text-slate-200 text-xs sm:text-sm truncate">
                  {opp.buyExchangeName}
                </span>
                <button
                  onClick={() => openExchangeTrade(opp.buyExchangeName, opp.symbol)}
                  title={`Open ${opp.symbol} directly in ${opp.buyExchangeName} App`}
                  className="text-[8.5px] sm:text-[10px] text-sky-400 hover:text-sky-300 font-semibold bg-sky-500/10 hover:bg-sky-500/20 px-1 py-0.2 sm:px-1.5 sm:py-0.5 rounded border border-sky-500/20 transition-all inline-flex items-center gap-0.5 cursor-pointer shrink-0"
                >
                  <Smartphone className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                  Trade
                </button>
              </div>

              <div className="font-mono text-white text-xs sm:text-base font-extrabold truncate">
                ${formatPrice(opp.buyPrice)}
              </div>

              {/* Order size in USDT */}
              <div className="text-[8.5px] sm:text-[10px] font-mono text-emerald-400/90 mt-0.5 flex items-center justify-between">
                <span className="text-slate-400">Vol:</span>
                <span className="font-bold truncate">
                  {formatOrderSize(opp.buyAskUsdtVolume, opp.buyAskTokenVolume, opp.baseSymbol)}
                </span>
              </div>

              {/* Supported Withdrawal Chains & Fees */}
              {opp.buyWithdrawalFees && opp.buyWithdrawalFees.length > 0 ? (
                <div className="mt-1 pt-1 border-t border-slate-800/80">
                  <div className="flex flex-col gap-0.5">
                    {opp.buyWithdrawalFees.slice(0, 1).map((fee, i) => (
                      <div key={i} className="text-[8px] sm:text-[9px] bg-slate-950 border border-slate-800/80 px-1 py-0.5 rounded font-mono flex items-center justify-between">
                        <span className="text-purple-300 font-sans font-semibold truncate max-w-[50px] sm:max-w-[70px]">{fee.chain}</span>
                        {fee.isFree ? (
                          <span className="text-emerald-400 font-bold">FREE</span>
                        ) : !fee.isOpen ? (
                          <span className="text-rose-400 font-bold">Closed</span>
                        ) : (
                          <span className="text-white font-bold">${fee.feeUsdt.toFixed(2)}</span>
                        )}
                      </div>
                    ))}
                    {opp.buyWithdrawalFees.length > 1 && (
                      <span className="text-[7.5px] sm:text-[8.5px] text-slate-500 font-mono">+{opp.buyWithdrawalFees.length - 1} chains</span>
                    )}
                  </div>
                </div>
              ) : opp.buyWithdrawChains && opp.buyWithdrawChains.length > 0 && (
                <div className="mt-1 pt-1 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-0.5">
                    {opp.buyWithdrawChains.slice(0, 2).map((chain, i) => (
                      <span key={i} className="text-[7.5px] sm:text-[8px] bg-slate-950 border border-slate-800 text-purple-300 px-1 py-0.2 rounded font-sans truncate">
                        {chain}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* SELL SIDE */}
          <div className="bg-slate-900/90 border border-rose-500/25 rounded-lg sm:rounded-xl p-2 sm:p-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[9px] sm:text-[11px] mb-1">
                <span className="font-bold text-rose-400 uppercase tracking-wider text-[8.5px] sm:text-[10px]">
                  SELL BID
                </span>
                {/* Deposit Status */}
                <div className="flex items-center gap-0.5">
                  <span className="text-[8.5px] sm:text-[9.5px] text-slate-500">DEP:</span>
                  {isDepositOk ? (
                    <span className="text-[8.5px] sm:text-[9.5px] font-bold text-emerald-400 bg-emerald-500/15 px-1 py-0.2 rounded border border-emerald-500/30">
                      ✓ Open
                    </span>
                  ) : isDepositClosed ? (
                    <span className="text-[8.5px] sm:text-[9.5px] font-bold text-rose-400 bg-rose-500/15 px-1 py-0.2 rounded border border-rose-500/30">
                      ✗ Closed
                    </span>
                  ) : (
                    <span className="text-[8.5px] sm:text-[9.5px] font-medium text-slate-400 bg-slate-800 px-1 py-0.2 rounded">
                      ?
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between mb-0.5">
                <span className="font-bold text-slate-200 text-xs sm:text-sm truncate">
                  {opp.sellExchangeName}
                </span>
                <button
                  onClick={() => openExchangeTrade(opp.sellExchangeName, opp.symbol)}
                  title={`Open ${opp.symbol} directly in ${opp.sellExchangeName} App`}
                  className="text-[8.5px] sm:text-[10px] text-rose-300 hover:text-white font-semibold bg-rose-500/15 hover:bg-rose-500/25 px-1 py-0.2 sm:px-1.5 sm:py-0.5 rounded border border-rose-500/25 transition-all inline-flex items-center gap-0.5 cursor-pointer shrink-0"
                >
                  <Smartphone className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-rose-400" />
                  Trade
                </button>
              </div>

              <div className="font-mono text-rose-300 text-xs sm:text-base font-extrabold truncate">
                ${formatPrice(opp.sellPrice)}
              </div>

              {/* Order size in USDT */}
              <div className="text-[8.5px] sm:text-[10px] font-mono text-rose-400/90 mt-0.5 flex items-center justify-between">
                <span className="text-slate-400">Vol:</span>
                <span className="font-bold truncate">
                  {formatOrderSize(opp.sellBidUsdtVolume, opp.sellBidTokenVolume, opp.baseSymbol)}
                </span>
              </div>

              {/* Supported Deposit Chains */}
              {opp.sellDepositChains && opp.sellDepositChains.length > 0 && (
                <div className="mt-1 pt-1 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-0.5">
                    {opp.sellDepositChains.slice(0, 2).map((chain, i) => (
                      <span key={i} className="text-[7.5px] sm:text-[8px] bg-slate-950 border border-slate-800 text-sky-300 px-1 py-0.2 rounded font-sans truncate">
                        {chain}
                      </span>
                    ))}
                    {opp.sellDepositChains.length > 2 && (
                      <span className="text-[7.5px] sm:text-[8.5px] text-slate-500 font-mono">+{opp.sellDepositChains.length - 2}</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contract Address Verification & Both Exchanges Comparison */}
        <div className="mb-2 sm:mb-3 bg-slate-950/90 border border-slate-800/80 rounded-lg sm:rounded-xl p-2 sm:p-2.5 text-[9.5px] sm:text-[11px]">
          {/* Match Indicator Banner */}
          <div className="flex items-center justify-between gap-1.5 mb-1.5 pb-1.5 border-b border-slate-800/80">
            <div className="flex items-center gap-1.5 min-w-0">
              {opp.isNative ? (
                <>
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-bold text-amber-300 truncate">
                    Native {opp.primaryChain || 'L1'} Network Asset
                  </span>
                </>
              ) : isSameContract ? (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="font-bold text-emerald-300 truncate">
                    Same Verified Smart Contract Match
                  </span>
                </>
              ) : opp.contractMatch === false ? (
                <>
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span className="font-bold text-rose-400 truncate">
                    Contract Address Mismatch Warning
                  </span>
                </>
              ) : (
                <>
                  <HelpCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="font-bold text-sky-300 truncate">
                    Verified Multi-Chain Token Pair
                  </span>
                </>
              )}
            </div>

            <button
              onClick={() => setShowFullContracts(!showFullContracts)}
              className="text-[8.5px] sm:text-[9.5px] text-slate-400 hover:text-slate-200 flex items-center gap-0.5 cursor-pointer shrink-0 font-mono"
            >
              {showFullContracts ? 'Collapse' : 'Addresses'}
              {showFullContracts ? <ChevronUp className="w-2.5 h-2.5" /> : <ChevronDown className="w-2.5 h-2.5" />}
            </button>
          </div>

          {/* Buy vs Sell Contract Address Comparison Rows */}
          <div className="space-y-1 font-mono text-[9px] sm:text-[10px]">
            {/* Buy Exchange Contract */}
            <div className="flex items-center justify-between gap-1 bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-800">
              <span className="text-slate-400 shrink-0 font-sans text-[8.5px] sm:text-[9.5px]">
                {opp.buyExchangeName}:
              </span>
              <div className="flex items-center gap-1 min-w-0">
                <span className="text-emerald-300 font-semibold font-mono truncate select-all">
                  {buyAddr ? truncateAddr(buyAddr) : (matchedAddr ? truncateAddr(matchedAddr) : '0x...')}
                </span>
                {(buyAddr || matchedAddr) && (
                  <button
                    onClick={(e) => copyToClipboard(buyAddr || matchedAddr, `buy-${opp.id}`, e)}
                    title={`Copy ${opp.buyExchangeName} Contract Address`}
                    className="p-0.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors shrink-0"
                  >
                    {copiedKey === `buy-${opp.id}` ? (
                      <Check className="w-2.5 h-2.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-2.5 h-2.5" />
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Sell Exchange Contract */}
            <div className="flex items-center justify-between gap-1 bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-800">
              <span className="text-slate-400 shrink-0 font-sans text-[8.5px] sm:text-[9.5px]">
                {opp.sellExchangeName}:
              </span>
              <div className="flex items-center gap-1 min-w-0">
                <span className="text-rose-300 font-semibold font-mono truncate select-all">
                  {sellAddr ? truncateAddr(sellAddr) : (matchedAddr ? truncateAddr(matchedAddr) : '0x...')}
                </span>
                {(sellAddr || matchedAddr) && (
                  <button
                    onClick={(e) => copyToClipboard(sellAddr || matchedAddr, `sell-${opp.id}`, e)}
                    title={`Copy ${opp.sellExchangeName} Contract Address`}
                    className="p-0.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors shrink-0"
                  >
                    {copiedKey === `sell-${opp.id}` ? (
                      <Check className="w-2.5 h-2.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-2.5 h-2.5" />
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Expanded Full Contracts View */}
            {showFullContracts && hasContracts && (
              <div className="mt-1.5 pt-1.5 border-t border-slate-800/60 space-y-1">
                {buyAddr && (
                  <div className="text-[8px] sm:text-[9px] bg-slate-950 p-1.5 rounded border border-slate-800 break-all select-all text-slate-300">
                    <span className="text-emerald-400 font-sans font-bold block mb-0.5">{opp.buyExchangeName} Contract:</span>
                    {buyAddr}
                  </div>
                )}
                {sellAddr && sellAddr !== buyAddr && (
                  <div className="text-[8px] sm:text-[9px] bg-slate-950 p-1.5 rounded border border-slate-800 break-all select-all text-slate-300">
                    <span className="text-rose-400 font-sans font-bold block mb-0.5">{opp.sellExchangeName} Contract:</span>
                    {sellAddr}
                  </div>
                )}
                {opp.verifiedChains && opp.verifiedChains.length > 0 && (
                  <div className="text-[8px] text-slate-400 flex flex-wrap gap-1 mt-1">
                    <span className="text-slate-500 font-sans font-semibold">Chains:</span>
                    {opp.verifiedChains.map((c, i) => (
                      <span key={i} className="text-purple-300 bg-slate-900 px-1 py-0.2 rounded border border-slate-800">
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons (Compact Mobile Bar) */}
      <div className="flex items-center justify-between gap-1.5 sm:gap-2 pt-1.5 sm:pt-2 border-t border-slate-800/80">
        <button
          onClick={() => onOpenDetail(opp.symbol)}
          className="flex-1 flex items-center justify-center gap-1 text-[10px] sm:text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 py-1.5 rounded-lg transition-all cursor-pointer"
        >
          <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
          Cross-Ex
        </button>

        <button
          onClick={() => onOpenCalculator(opp)}
          className="flex-1 flex items-center justify-center gap-1 text-[10px] sm:text-xs font-bold text-emerald-300 hover:text-white bg-emerald-500/15 hover:bg-emerald-500/30 border border-emerald-500/30 py-1.5 rounded-lg transition-all cursor-pointer"
        >
          <Calculator className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
          Simulate
        </button>
      </div>
    </div>
  );
};
