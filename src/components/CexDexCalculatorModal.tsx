import React, { useState } from 'react';
import { CexDexArbitrageOpportunity } from '../types';
import {
  X,
  Calculator,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Fuel,
  ShieldCheck,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';
import { getTradeUrl } from '../utils/tradeUrls';

interface CexDexCalculatorModalProps {
  opp: CexDexArbitrageOpportunity;
  onClose: () => void;
}

export const CexDexCalculatorModal: React.FC<CexDexCalculatorModalProps> = ({
  opp,
  onClose,
}) => {
  const [investmentUsdt, setInvestmentUsdt] = useState<number>(1000);
  const [customGasFee, setCustomGasFee] = useState<number>(opp.estimatedGasFeeUsd);
  const [cexFeeRate, setCexFeeRate] = useState<number>(0.10); // 0.1% standard spot fee
  const [dexFeeRate, setDexFeeRate] = useState<number>(0.30); // 0.3% standard LP fee
  const [slippagePercent, setSlippagePercent] = useState<number>(0.20); // 0.2% estimated slippage

  const isCexToDex = opp.direction === 'CEX_TO_DEX';

  const buyPrice = isCexToDex ? opp.cexBuyPrice : opp.dexPrice;
  const sellPrice = isCexToDex ? opp.dexPrice : opp.cexSellPrice;

  // Calculation Math
  const tokensBought = buyPrice > 0 ? (investmentUsdt * (1 - (isCexToDex ? cexFeeRate : dexFeeRate) / 100)) / buyPrice : 0;
  
  // Gross sale value
  const grossSaleUsdt = tokensBought * sellPrice;
  
  // Total fees
  const sellFeeUsdt = grossSaleUsdt * ((isCexToDex ? dexFeeRate : cexFeeRate) / 100);
  const slippageCostUsdt = grossSaleUsdt * (slippagePercent / 100);
  const totalGasAndNetworkCostUsdt = customGasFee;

  // Final Net Return
  const netSaleUsdt = grossSaleUsdt - sellFeeUsdt - slippageCostUsdt - totalGasAndNetworkCostUsdt;
  const netProfitUsdt = netSaleUsdt - investmentUsdt;
  const netRoiPercent = investmentUsdt > 0 ? (netProfitUsdt / investmentUsdt) * 100 : 0;

  const cexTradeData = getTradeUrl(opp.cexId, opp.baseSymbol, 'USDT');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-slate-950 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>CEX ↔ DEX Arbitrage Calculator</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {opp.baseSymbol}/USDT
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">
                {isCexToDex ? `Buy on ${opp.cexName} ➔ Sell on ${opp.dexName}` : `Buy on ${opp.dexName} ➔ Sell on ${opp.cexName}`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          {/* Investment Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Investment Amount (USDT)
            </label>
            <div className="relative">
              <input
                type="number"
                min="10"
                step="50"
                value={investmentUsdt}
                onChange={(e) => setInvestmentUsdt(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-bold font-mono text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <span className="absolute right-3.5 top-2.5 text-xs text-slate-400 font-mono font-semibold">
                USDT
              </span>
            </div>

            {/* Quick Preset Buttons */}
            <div className="flex items-center gap-1.5 mt-2">
              {[100, 250, 500, 1000, 2500, 5000].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setInvestmentUsdt(preset)}
                  className={`text-[11px] font-mono px-2 py-1 rounded-lg border transition-all ${
                    investmentUsdt === preset
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold'
                      : 'bg-slate-800/60 text-slate-400 border-white/5 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  ${preset}
                </button>
              ))}
            </div>
          </div>

          {/* Trade Execution Flow Box */}
          <div className="bg-slate-950/80 rounded-xl p-3 border border-white/10 space-y-2">
            <span className="text-[10.5px] uppercase tracking-wider text-slate-400 font-bold block">
              Arbitrage Route Breakdown
            </span>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400 mb-0.5">1. Buy ({isCexToDex ? opp.cexName : opp.dexName})</div>
                <div className="font-mono font-bold text-white text-xs">${buyPrice.toFixed(6)}</div>
                <div className="text-[10.5px] text-emerald-400 font-mono mt-1">
                  ≈ {tokensBought.toLocaleString(undefined, { maximumFractionDigits: 2 })} {opp.baseSymbol}
                </div>
              </div>

              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400 mb-0.5">2. Sell ({isCexToDex ? opp.dexName : opp.cexName})</div>
                <div className="font-mono font-bold text-white text-xs">${sellPrice.toFixed(6)}</div>
                <div className="text-[10.5px] text-purple-300 font-mono mt-1">
                  Gross: ${grossSaleUsdt.toFixed(2)} USDT
                </div>
              </div>
            </div>
          </div>

          {/* Parameter Tuning Grid (Gas, Slippage, Fees) */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-950 p-2.5 rounded-xl border border-white/5">
              <label className="text-[10px] text-slate-400 block mb-1">
                <Fuel className="w-2.5 h-2.5 inline text-amber-400 mr-0.5" /> Gas Fee ($)
              </label>
              <input
                type="number"
                step="0.01"
                value={customGasFee}
                onChange={(e) => setCustomGasFee(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs font-mono text-white text-center"
              />
            </div>

            <div className="bg-slate-950 p-2.5 rounded-xl border border-white/5">
              <label className="text-[10px] text-slate-400 block mb-1">
                Slippage (%)
              </label>
              <input
                type="number"
                step="0.05"
                value={slippagePercent}
                onChange={(e) => setSlippagePercent(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs font-mono text-white text-center"
              />
            </div>

            <div className="bg-slate-950 p-2.5 rounded-xl border border-white/5">
              <label className="text-[10px] text-slate-400 block mb-1">
                DEX Fee (%)
              </label>
              <input
                type="number"
                step="0.05"
                value={dexFeeRate}
                onChange={(e) => setDexFeeRate(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs font-mono text-white text-center"
              />
            </div>
          </div>

          {/* Net Result Highlight Box */}
          <div className={`p-4 rounded-xl border ${
            netProfitUsdt >= 0
              ? 'bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border-emerald-500/40'
              : 'bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-950 border-rose-500/40'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-300">
                Estimated Net Profit (After Gas & Fees)
              </span>
              <span className="text-[11px] font-mono font-bold text-slate-400">
                Gross Spread: +{opp.grossSpreadPercent.toFixed(2)}%
              </span>
            </div>

            <div className="flex items-baseline justify-between">
              <div className={`text-2xl font-black font-mono ${netProfitUsdt >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {netProfitUsdt >= 0 ? '+' : ''}${netProfitUsdt.toFixed(2)} USDT
              </div>
              <div className={`text-sm font-bold font-mono ${netRoiPercent >= 0 ? 'text-teal-300' : 'text-rose-300'}`}>
                {netRoiPercent >= 0 ? '+' : ''}{netRoiPercent.toFixed(2)}% ROI
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="p-4 bg-slate-950 border-t border-white/10 grid grid-cols-2 gap-2">
          <a
            href={cexTradeData.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-white/10 transition-colors"
          >
            <span>Trade on {opp.cexName}</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href={opp.dexTradeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg transition-all"
          >
            <span>Swap on {opp.dexName}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
