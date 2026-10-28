import React, { useState } from 'react';
import { ArbitrageOpportunity } from '../types';
import { Calculator, ArrowRight, X, DollarSign, ExternalLink, AlertCircle, CheckCircle2, Smartphone } from 'lucide-react';
import { openExchangeTrade } from '../utils/tradeUrls';
import { formatOrderSize } from '../utils/formatters';

interface CalculatorModalProps {
  opp: ArbitrageOpportunity;
  onClose: () => void;
}

export const CalculatorModal: React.FC<CalculatorModalProps> = ({ opp, onClose }) => {
  const [usdtCapital, setUsdtCapital] = useState<number>(100);
  const [buyFeePercent, setBuyFeePercent] = useState<number>(0.1);
  const [sellFeePercent, setSellFeePercent] = useState<number>(0.1);
  const [networkFeeUsdt, setNetworkFeeUsdt] = useState<number>(2.0); // estimated $2 network transfer fee

  // Calculations
  const grossTokensBought = usdtCapital / opp.buyPrice;
  const buyFeeUsdt = usdtCapital * (buyFeePercent / 100);
  const tokensAfterBuyFee = grossTokensBought * (1 - buyFeePercent / 100);

  const grossUsdtFromSell = tokensAfterBuyFee * opp.sellPrice;
  const sellFeeUsdt = grossUsdtFromSell * (sellFeePercent / 100);
  const netUsdtBeforeNetworkFee = grossUsdtFromSell - sellFeeUsdt;

  const finalUsdt = netUsdtBeforeNetworkFee - networkFeeUsdt;
  const netProfitUsdt = finalUsdt - usdtCapital;
  const netProfitPercent = (netProfitUsdt / usdtCapital) * 100;

  const quickAmounts = [100, 500, 1000, 2500, 5000, 10000];

  const formatPrice = (price: number) => {
    if (price >= 1000) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (price >= 1) return price.toFixed(4);
    if (price >= 0.0001) return price.toFixed(6);
    return price.toFixed(8);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fade-in">
      <div className="bg-slate-900/90 border border-white/15 rounded-3xl max-w-2xl w-full p-6 shadow-2xl backdrop-blur-2xl relative text-white max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-950 border border-slate-800 transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              Arbitrage Simulator: {opp.symbol}
            </h2>
            <p className="text-xs text-slate-400">
              {opp.buyExchangeName} → {opp.sellExchangeName}
            </p>
          </div>
        </div>

        {/* Order Book Depth & Chain Compatibility Card */}
        <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl mb-4 font-mono text-xs grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-sans block mb-0.5">Buy Ask Order Size:</span>
            <div className="font-bold text-emerald-400">
              {formatOrderSize(opp.buyAskUsdtVolume, opp.buyAskTokenVolume, opp.baseSymbol)}
            </div>
            {opp.buyWithdrawChains && opp.buyWithdrawChains.length > 0 && (
              <div className="text-[10px] text-purple-300 font-sans mt-0.5">
                WD Chains: {opp.buyWithdrawChains.slice(0, 3).join(', ')}
              </div>
            )}
          </div>

          <div>
            <span className="text-[10px] text-slate-400 uppercase font-sans block mb-0.5">Sell Bid Order Size:</span>
            <div className="font-bold text-sky-400">
              {formatOrderSize(opp.sellBidUsdtVolume, opp.sellBidTokenVolume, opp.baseSymbol)}
            </div>
            {opp.sellDepositChains && opp.sellDepositChains.length > 0 && (
              <div className="text-[10px] text-sky-300 font-sans mt-0.5">
                DEP Chains: {opp.sellDepositChains.slice(0, 3).join(', ')}
              </div>
            )}
          </div>
        </div>

        {/* Capital Preset Selectors */}
        <div className="mb-6 bg-slate-950/80 border border-slate-800 p-4 rounded-2xl">
          <label className="block text-xs font-medium text-slate-300 mb-2 flex items-center justify-between">
            <span>Trading Capital (USDT):</span>
            <span className="text-emerald-400 font-mono font-bold">${usdtCapital.toLocaleString()} USDT</span>
          </label>

          <div className="flex flex-wrap gap-2 mb-3">
            {quickAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => setUsdtCapital(amt)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                  usdtCapital === amt
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                }`}
              >
                ${amt.toLocaleString()}
              </button>
            ))}
          </div>

          <div className="relative">
            <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="number"
              value={usdtCapital}
              onChange={(e) => setUsdtCapital(Math.max(1, parseFloat(e.target.value) || 0))}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-white outline-none focus:border-emerald-500"
              placeholder="Custom capital amount..."
            />
          </div>
        </div>

        {/* Fees Settings Panel */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl">
            <label className="text-[11px] text-slate-400 block mb-1">Buy Taker Fee %</label>
            <input
              type="number"
              step="0.01"
              value={buyFeePercent}
              onChange={(e) => setBuyFeePercent(parseFloat(e.target.value) || 0)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs font-mono text-white"
            />
          </div>

          <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl">
            <label className="text-[11px] text-slate-400 block mb-1">Sell Taker Fee %</label>
            <input
              type="number"
              step="0.01"
              value={sellFeePercent}
              onChange={(e) => setSellFeePercent(parseFloat(e.target.value) || 0)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs font-mono text-white"
            />
          </div>

          <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl">
            <label className="text-[11px] text-slate-400 block mb-1">Est Network Fee ($)</label>
            <input
              type="number"
              step="0.5"
              value={networkFeeUsdt}
              onChange={(e) => setNetworkFeeUsdt(parseFloat(e.target.value) || 0)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs font-mono text-white"
            />
          </div>
        </div>

        {/* Execution Flow Step-By-Step Breakdown */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 mb-6 space-y-3 font-mono text-xs">
          <div className="text-xs font-bold text-slate-300 font-sans tracking-wide uppercase mb-2">
            Execution Steps & Net Calculation
          </div>

          {/* Step 1: Buy */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-900">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-[10px] font-bold font-sans">
                1
              </span>
              <span>Buy on <strong className="text-white font-sans">{opp.buyExchangeName}</strong> @ ${formatPrice(opp.buyPrice)}</span>
            </div>
            <span className="text-slate-300 font-bold">{grossTokensBought.toLocaleString(undefined, { maximumFractionDigits: 4 })} {opp.baseSymbol}</span>
          </div>

          {/* Step 2: Trading Fee */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-900 text-slate-400">
            <span className="pl-7 text-[11px]">Exchange Trading Fee ({buyFeePercent}%)</span>
            <span className="text-rose-400">-${buyFeeUsdt.toFixed(2)} USDT</span>
          </div>

          {/* Step 3: Withdraw & Transfer */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-900">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-[10px] font-bold font-sans">
                2
              </span>
              <span>Withdraw & Transfer to <strong className="text-white font-sans">{opp.sellExchangeName}</strong></span>
            </div>
            <span className="text-rose-400">-${networkFeeUsdt.toFixed(2)} USDT</span>
          </div>

          {/* Step 4: Sell */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-900">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-[10px] font-bold font-sans">
                3
              </span>
              <span>Sell on <strong className="text-white font-sans">{opp.sellExchangeName}</strong> @ ${formatPrice(opp.sellPrice)}</span>
            </div>
            <span className="text-emerald-400 font-bold">${grossUsdtFromSell.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDT</span>
          </div>

          {/* Step 5: Sell Fee */}
          <div className="flex items-center justify-between text-slate-400">
            <span className="pl-7 text-[11px]">Exchange Trading Fee ({sellFeePercent}%)</span>
            <span className="text-rose-400">-${sellFeeUsdt.toFixed(2)} USDT</span>
          </div>
        </div>

        {/* Final Result Box */}
        <div className={`p-4 rounded-2xl border mb-6 ${
          netProfitUsdt > 0
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
            : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-slate-300 mb-0.5">
                Estimated Net Profit
              </div>
              <div className="text-2xl font-black font-mono">
                {netProfitUsdt >= 0 ? '+' : ''}${netProfitUsdt.toFixed(2)} USDT
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs text-slate-300 mb-0.5">ROI %</div>
              <div className="text-2xl font-black font-mono">
                {netProfitPercent >= 0 ? '+' : ''}{netProfitPercent.toFixed(2)}%
              </div>
            </div>
          </div>
        </div>

        {/* Direct Action Links */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => openExchangeTrade(opp.buyExchangeName, opp.symbol)}
            title={`Open ${opp.symbol} in ${opp.buyExchangeName} App`}
            className="w-full sm:flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-white/10 transition-all cursor-pointer shadow-md active:scale-95"
          >
            <Smartphone className="w-3.5 h-3.5 text-sky-400" />
            Buy on {opp.buyExchangeName} App
          </button>

          <button
            onClick={() => openExchangeTrade(opp.sellExchangeName, opp.symbol)}
            title={`Open ${opp.symbol} in ${opp.sellExchangeName} App`}
            className="w-full sm:flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs border border-emerald-400/30 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer active:scale-95"
          >
            <Smartphone className="w-3.5 h-3.5 text-emerald-200" />
            Sell on {opp.sellExchangeName} App
          </button>
        </div>
      </div>
    </div>
  );
};
