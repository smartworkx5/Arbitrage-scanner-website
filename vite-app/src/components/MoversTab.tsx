import React, { useState, useEffect } from 'react';
import { ArbitrageOpportunity, ExchangeMeta } from '../types';
import { TrendingUp, TrendingDown, RefreshCw, Zap, ShieldCheck } from 'lucide-react';
import { OpportunityCard } from './OpportunityCard';
import { CexDexCard } from './CexDexCard';
import { CexDexCalculatorModal } from './CexDexCalculatorModal';
import { CexDexArbitrageOpportunity } from '../types';
import { safeApiFetch } from '../utils/api';
import { dataService } from '../services/dataService';

interface MoversTabProps {
  exchanges: ExchangeMeta[];
  savedIds: Set<string>;
  onToggleSave: (id: string) => void;
  onOpenCalculator: (opp: ArbitrageOpportunity) => void;
  onOpenDetail: (symbol: string) => void;
}

export const MoversTab: React.FC<MoversTabProps> = ({
  exchanges,
  savedIds,
  onToggleSave,
  onOpenCalculator,
  onOpenDetail,
}) => {
  const [selectedExchange, setSelectedExchange] = useState<string>('mexc');
  const [limit, setLimit] = useState<number>(20);
  const [loading, setLoading] = useState(false);
  const [selectedCexDexCalcOpp, setSelectedCexDexCalcOpp] = useState<CexDexArbitrageOpportunity | null>(null);
  const [data, setData] = useState<{
    gainers: any[];
    losers: any[];
  } | null>(null);

  const fetchData = async (isInitial = false) => {
    setLoading(true);
    try {
      const json = await dataService.getExchangeMovers(selectedExchange, limit);
      if (json && (Array.isArray(json.gainers) || Array.isArray(json.losers))) {
        if (json.gainers.length > 0 || json.losers.length > 0) {
          setData(json);
        } else if (isInitial) {
          // If returned empty during cold start, retry once after 1.5s
          setTimeout(async () => {
            const retryJson = await dataService.getExchangeMovers(selectedExchange, limit);
            if (retryJson && (retryJson.gainers.length > 0 || retryJson.losers.length > 0)) {
              setData(retryJson);
            }
          }, 1500);
        } else {
          setData(json);
        }
      }
    } catch (err) {
      console.warn('Movers feed loading notice:', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(true);
  }, [selectedExchange, limit]);

  const exchangeOptions = exchanges.length > 0 ? exchanges : [
    { id: 'mexc', name: 'MEXC' },
    { id: 'binance', name: 'Binance' },
    { id: 'gateio', name: 'Gate.io' },
    { id: 'kucoin', name: 'KuCoin' },
    { id: 'bybit', name: 'Bybit' },
    { id: 'okx', name: 'OKX' },
    { id: 'bitget', name: 'Bitget' },
    { id: 'lbank', name: 'LBank' },
    { id: 'htx', name: 'HTX' },
    { id: 'bitmart', name: 'BitMart' },
    { id: 'xt', name: 'XT.com' },
    { id: 'bitrue', name: 'Bitrue' },
    { id: 'coinstore', name: 'Coinstore' },
    { id: 'coinex', name: 'CoinEx' },
    { id: 'cex', name: 'CEX.io' },
  ];

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="bg-slate-900/80 p-3 sm:p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">Exchange:</span>
            <select
              value={selectedExchange}
              onChange={(e) => setSelectedExchange(e.target.value)}
              className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs font-bold focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              {exchangeOptions.map((ex) => (
                <option key={ex.id} value={ex.id}>
                  {ex.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">Show:</span>
            <select
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 text-xs font-bold focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              <option value={5}>Top 5</option>
              <option value={10}>Top 10</option>
              <option value={20}>Top 20</option>
              <option value={50}>Top 50</option>
            </select>
          </div>
        </div>

        <button
          onClick={fetchData}
          disabled={loading}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 border border-indigo-500/40 text-xs font-semibold transition-all disabled:opacity-50 cursor-pointer shadow-sm"
          title="Refresh top gainers and losers for this exchange"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-indigo-400' : ''}`} />
          <span>{loading ? 'Refreshing...' : 'Refresh Movers'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Gainers Column */}
        <div className="bg-slate-950/50 rounded-2xl border border-slate-800/80 p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-emerald-400 font-bold text-sm">Top Gainers</h3>
              <p className="text-[10px] text-slate-400">Price is HIGH here. We can SELL here if we buy cheaper elsewhere.</p>
            </div>
          </div>

          <div className="space-y-3">
            {data?.gainers.map((g, idx) => {
              const change = typeof g.change24h === 'number' ? g.change24h : 0;
              const price = typeof g.price === 'number' ? g.price : 0;
              return (
                <div key={g.symbol || idx} className="bg-slate-900/60 rounded-xl border border-slate-800 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-500">#{idx + 1}</span>
                      <span className="font-bold text-white text-sm">{g.symbol}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-emerald-400 font-mono font-bold text-xs">
                        +{change.toFixed(2)}%
                      </span>
                      <span className="text-slate-400 font-mono text-[10px]">
                        ${price >= 1 ? price.toFixed(4) : price.toFixed(8)}
                      </span>
                    </div>
                  </div>
                  
                  {g.opp ? (
                    <div className="mt-2 border-t border-slate-800/80 pt-2">
                      <div className="mb-2">
                        <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                          Arbitrage Found: Buy on {g.oppType === 'DEX' ? g.opp.buyDexName || 'DEX' : g.opp.buyExchangeName}
                        </span>
                      </div>
                      {g.oppType === 'DEX' ? (
                        <CexDexCard
                          opp={g.opp}
                          onOpenCalculator={(o) => setSelectedCexDexCalcOpp(o)}
                          isSaved={savedIds.has(g.opp.id)}
                          onToggleSave={onToggleSave}
                        />
                      ) : (
                        <OpportunityCard
                          opp={g.opp}
                          onOpenCalculator={onOpenCalculator}
                          onOpenDetail={onOpenDetail}
                          isSaved={savedIds.has(g.opp.id)}
                          onToggleSave={onToggleSave}
                        />
                      )}
                    </div>
                  ) : (
                    <div className="mt-2 text-[10px] text-slate-500 italic bg-slate-950 px-2 py-1.5 rounded border border-slate-900">
                      No profitable arbitrage found matching this token currently.
                    </div>
                  )}
                </div>
              );
            })}
            {!data?.gainers.length && !loading && (
              <div className="text-center py-6 text-slate-500 text-xs font-mono flex flex-col items-center gap-2">
                <span>No gainer data available for this exchange.</span>
                <button
                  onClick={() => fetchData(false)}
                  className="px-2.5 py-1 rounded bg-slate-800 text-indigo-400 hover:bg-slate-700 text-xs transition-colors"
                >
                  Fetch Live Movers
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Losers Column */}
        <div className="bg-slate-950/50 rounded-2xl border border-slate-800/80 p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center">
              <TrendingDown className="w-4 h-4 text-rose-400" />
            </div>
            <div>
              <h3 className="text-rose-400 font-bold text-sm">Top Losers</h3>
              <p className="text-[10px] text-slate-400">Price is LOW here. We can BUY here and sell higher elsewhere.</p>
            </div>
          </div>

          <div className="space-y-3">
            {data?.losers.map((l, idx) => {
              const change = typeof l.change24h === 'number' ? l.change24h : 0;
              const price = typeof l.price === 'number' ? l.price : 0;
              return (
                <div key={l.symbol || idx} className="bg-slate-900/60 rounded-xl border border-slate-800 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-500">#{idx + 1}</span>
                      <span className="font-bold text-white text-sm">{l.symbol}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-rose-400 font-mono font-bold text-xs">
                        {change.toFixed(2)}%
                      </span>
                      <span className="text-slate-400 font-mono text-[10px]">
                        ${price >= 1 ? price.toFixed(4) : price.toFixed(8)}
                      </span>
                    </div>
                  </div>
                  
                  {l.opp ? (
                    <div className="mt-2 border-t border-slate-800/80 pt-2">
                      <div className="mb-2">
                        <span className="text-[10px] font-semibold text-rose-300 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">
                          Arbitrage Found: Sell on {l.oppType === 'DEX' ? l.opp.sellDexName || 'DEX' : l.opp.sellExchangeName}
                        </span>
                      </div>
                      {l.oppType === 'DEX' ? (
                        <CexDexCard
                          opp={l.opp}
                          onOpenCalculator={(o) => setSelectedCexDexCalcOpp(o)}
                          isSaved={savedIds.has(l.opp.id)}
                          onToggleSave={onToggleSave}
                        />
                      ) : (
                        <OpportunityCard
                          opp={l.opp}
                          onOpenCalculator={onOpenCalculator}
                          onOpenDetail={onOpenDetail}
                          isSaved={savedIds.has(l.opp.id)}
                          onToggleSave={onToggleSave}
                        />
                      )}
                    </div>
                  ) : (
                    <div className="mt-2 text-[10px] text-slate-500 italic bg-slate-950 px-2 py-1.5 rounded border border-slate-900">
                      No profitable arbitrage found matching this token currently.
                    </div>
                  )}
                </div>
              );
            })}
            {!data?.losers.length && !loading && (
              <div className="text-center py-6 text-slate-500 text-xs font-mono flex flex-col items-center gap-2">
                <span>No loser data available for this exchange.</span>
                <button
                  onClick={() => fetchData(false)}
                  className="px-2.5 py-1 rounded bg-slate-800 text-indigo-400 hover:bg-slate-700 text-xs transition-colors"
                >
                  Fetch Live Movers
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedCexDexCalcOpp && (
        <CexDexCalculatorModal
          opp={selectedCexDexCalcOpp}
          onClose={() => setSelectedCexDexCalcOpp(null)}
        />
      )}
    </div>

  );
};
