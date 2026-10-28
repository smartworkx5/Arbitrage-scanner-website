import React from 'react';
import { ExchangeMeta } from '../types';
import { Server, Wifi, WifiOff, ExternalLink, Clock, Layers, ShieldCheck } from 'lucide-react';

interface ExchangeGridProps {
  exchanges: ExchangeMeta[];
}

export const ExchangeGrid: React.FC<ExchangeGridProps> = ({ exchanges }) => {
  return (
    <div className="space-y-4 relative z-10">
      <div className="bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-2xl">
        <div className="flex items-center justify-between mb-1.5">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <Server className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            Spot Exchange Health Matrix
          </h2>
          <span className="text-[10px] sm:text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-semibold">
            {exchanges.filter((e) => e.status === 'online').length} / {exchanges.length} Online
          </span>
        </div>
        <p className="text-[10px] sm:text-xs text-slate-400">
          Direct real-time API latency monitor, active USDT market count, and deposit/withdrawal status API compatibility.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
        {exchanges.map((ex) => {
          const isOnline = ex.status === 'online';

          return (
            <div
              key={ex.id}
              className="bg-slate-950/80 backdrop-blur-xl border border-slate-800/90 hover:border-emerald-500/40 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col justify-between transition-all shadow-lg hover:shadow-2xl group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden shrink-0">
                      <span className="text-[10px] sm:text-xs font-bold text-slate-300 font-mono">
                        {ex.name.slice(0, 2)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-xs sm:text-sm text-white group-hover:text-emerald-400 transition-colors truncate">
                        {ex.name}
                      </h3>
                      <a
                        href={ex.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[8.5px] sm:text-[10px] text-slate-500 hover:text-slate-300 flex items-center gap-0.5 font-mono truncate"
                      >
                        <span className="truncate">{ex.url.replace('https://www.', '').replace('https://', '')}</span>
                        <ExternalLink className="w-2 h-2 shrink-0" />
                      </a>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="shrink-0">
                    {isOnline ? (
                      <span className="flex items-center gap-0.5 sm:gap-1 text-[8.5px] sm:text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-full">
                        <Wifi className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
                        <span className="hidden sm:inline">Online</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-0.5 sm:gap-1 text-[8.5px] sm:text-[10px] font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-full">
                        <WifiOff className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-rose-400" />
                        <span className="hidden sm:inline">Offline</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-1 sm:gap-2 my-2 bg-slate-900/90 border border-slate-800 p-2 rounded-lg sm:rounded-xl font-mono text-[10px] sm:text-xs">
                  <div>
                    <span className="text-[8px] sm:text-[10px] text-slate-500 block mb-0.5 flex items-center gap-0.5 sm:gap-1">
                      <Layers className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400" />
                      Pairs
                    </span>
                    <span className="font-bold text-white text-xs sm:text-sm truncate block">
                      {ex.pairCount.toLocaleString()}
                    </span>
                  </div>

                  <div>
                    <span className="text-[8px] sm:text-[10px] text-slate-500 block mb-0.5 flex items-center gap-0.5 sm:gap-1">
                      <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
                      Latency
                    </span>
                    <span className="font-bold text-emerald-400 text-xs sm:text-sm truncate block">
                      {ex.latencyMs}ms
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Feature */}
              <div className="pt-1.5 sm:pt-2 border-t border-slate-800/80 flex items-center justify-between text-[9px] sm:text-[11px] text-slate-400">
                <span className="flex items-center gap-0.5 text-[8.5px] sm:text-[10px] truncate">
                  <ShieldCheck className={`w-3 h-3 ${ex.hasStatusApi ? 'text-sky-400' : 'text-slate-600'}`} />
                  Wallet API:
                </span>
                <span className={`font-mono text-[8.5px] sm:text-[10px] font-semibold ${ex.hasStatusApi ? 'text-sky-300' : 'text-slate-500'}`}>
                  {ex.hasStatusApi ? 'Public ✓' : 'Auth'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
