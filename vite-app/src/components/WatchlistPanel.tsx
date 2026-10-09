import React from 'react';
import { ArbitrageOpportunity } from '../types';
import { OpportunityCard } from './OpportunityCard';
import { OpportunityTable } from './OpportunityTable';
import { Star, Bell, Trash2, ShieldAlert } from 'lucide-react';

interface WatchlistPanelProps {
  savedOpportunities: ArbitrageOpportunity[];
  savedIds: Set<string>;
  onToggleSave: (id: string) => void;
  onClearWatchlist: () => void;
  onOpenCalculator: (opp: ArbitrageOpportunity) => void;
  onOpenDetail: (symbol: string) => void;
  viewMode: 'cards' | 'table';
}

export const WatchlistPanel: React.FC<WatchlistPanelProps> = ({
  savedOpportunities,
  savedIds,
  onToggleSave,
  onClearWatchlist,
  onOpenCalculator,
  onOpenDetail,
  viewMode,
}) => {
  return (
    <div className="space-y-6 relative z-10">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400/20" />
            <h2 className="text-lg font-bold text-white">Watchlist & Pinned Opportunities</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Track pinned cross-exchange opportunities and monitor high-spread alerts.
          </p>
        </div>

        {savedOpportunities.length > 0 && (
          <button
            onClick={onClearWatchlist}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 transition-all cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear Watchlist
          </button>
        )}
      </div>

      {savedOpportunities.length === 0 ? (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center max-w-md mx-auto shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-500 mx-auto mb-3">
            <Star className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-white mb-1">Your Watchlist is Empty</h3>
          <p className="text-xs text-slate-400">
            Click the star icon on any arbitrage opportunity in the Scanner Matrix to bookmark and track it here.
          </p>
        </div>
      ) : viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedOpportunities.map((opp) => (
            <OpportunityCard
              key={opp.id}
              opp={opp}
              onOpenCalculator={onOpenCalculator}
              onOpenDetail={onOpenDetail}
              isSaved={savedIds.has(opp.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      ) : (
        <OpportunityTable
          opportunities={savedOpportunities}
          onOpenCalculator={onOpenCalculator}
          onOpenDetail={onOpenDetail}
          savedIds={savedIds}
          onToggleSave={onToggleSave}
        />
      )}
    </div>
  );
};
