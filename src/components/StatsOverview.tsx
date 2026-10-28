import React from 'react';
import { ScanResultSummary } from '../types';
import { TrendingUp, Coins, Server, Layers, Clock, Zap } from 'lucide-react';

interface StatsOverviewProps {
  summary: ScanResultSummary | null;
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ summary }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-3 relative z-10">
      {/* Opportunities Count */}
      <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 flex items-center justify-between shadow-md hover:bg-slate-900/80 transition-all">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 font-medium">Arbitrage Pairs</span>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="text-base font-extrabold text-white font-mono leading-none">
              {summary?.opportunitiesCount ?? 0}
            </span>
            <span className="text-[9px] text-emerald-400 font-semibold px-1 py-0.2 rounded bg-emerald-500/10 border border-emerald-500/20">
              Found
            </span>
          </div>
        </div>
        <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
          <TrendingUp className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Max Spread % */}
      <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 flex items-center justify-between shadow-md hover:bg-slate-900/80 transition-all">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 font-medium">Peak Spread</span>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="text-base font-extrabold text-amber-400 font-mono leading-none">
              +{summary?.maxSpreadPercent ? summary.maxSpreadPercent.toFixed(2) : '0.00'}%
            </span>
            <span className="text-[9px] text-amber-300 font-semibold px-1 py-0.2 rounded bg-amber-500/10 border border-amber-500/20">
              Max
            </span>
          </div>
        </div>
        <div className="w-6 h-6 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
          <Zap className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Unique Coins */}
      <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 flex items-center justify-between shadow-md hover:bg-slate-900/80 transition-all">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 font-medium">Scanned Coins</span>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="text-base font-extrabold text-sky-400 font-mono leading-none">
              {summary?.uniqueCoinsScanned ?? 0}
            </span>
            {summary?.smallCoinsCount ? (
              <span className="text-[9px] text-amber-300 font-semibold px-1 py-0.2 rounded bg-amber-500/15 border border-amber-500/30" title="Small & micro-cap tokens tracked">
                {summary.smallCoinsCount} Small/Micro
              </span>
            ) : (
              <span className="text-[9px] text-sky-300 font-semibold px-1 py-0.2 rounded bg-sky-500/10 border border-sky-500/20">
                Tokens
              </span>
            )}
          </div>
        </div>
        <div className="w-6 h-6 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
          <Coins className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Total Scanned Pairs */}
      <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 flex items-center justify-between shadow-md hover:bg-slate-900/80 transition-all">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 font-medium">Total Markets</span>
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="text-base font-extrabold text-purple-300 font-mono leading-none">
              {summary?.totalPairsScanned ? summary.totalPairsScanned.toLocaleString() : '0'}
            </span>
            <span className="text-[9px] text-purple-300 font-semibold px-1 py-0.2 rounded bg-purple-500/10 border border-purple-500/20">
              Pairs
            </span>
          </div>
        </div>
        <div className="w-6 h-6 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
          <Layers className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Active Exchanges & Latency */}
      <div className="col-span-2 sm:col-span-1 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 flex items-center justify-between shadow-md hover:bg-slate-900/80 transition-all">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 font-medium">Exchanges & Latency</span>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-base font-extrabold text-white font-mono leading-none">
              {summary?.activeExchanges ?? 0}/{summary?.totalExchanges ?? 14}
            </span>
            <span className="text-[9px] text-slate-300 font-semibold px-1 py-0.2 rounded bg-white/10 border border-white/10 flex items-center gap-0.5">
              <Clock className="w-2.5 h-2.5 text-slate-400" />
              {summary?.scanDurationMs ?? 0}ms
            </span>
          </div>
        </div>
        <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
          <Server className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
