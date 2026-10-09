import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  ArbitrageOpportunity,
  ExchangeMeta,
  FilterState,
  ScanResultSummary,
  CexDexArbitrageOpportunity,
  CexDexSummary,
} from './types';
import { Header } from './components/Header';
import { StatsOverview } from './components/StatsOverview';
import { FilterBar } from './components/FilterBar';
import { OpportunityCard } from './components/OpportunityCard';
import { OpportunityTable } from './components/OpportunityTable';
import { CalculatorModal } from './components/CalculatorModal';
import { TokenDetailModal } from './components/TokenDetailModal';
import { ExchangeGrid } from './components/ExchangeGrid';
import { WatchlistPanel } from './components/WatchlistPanel';
import { ApiKeyModal } from './components/ApiKeyModal';
import { CexDexTab } from './components/CexDexTab';
import { ExchangeSpreadTab } from './components/ExchangeSpreadTab';
import { MoversTab } from './components/MoversTab';
import { OfflineIndicator } from './components/PWAInstallButton';
import { RefreshCw, Sparkles } from 'lucide-react';
import { safeApiFetch } from './utils/api';
import { dataService } from './services/dataService';

export default function App() {
  const [summary, setSummary] = useState<ScanResultSummary | null>(null);
  const [opportunities, setOpportunities] = useState<ArbitrageOpportunity[]>([]);
  const [exchanges, setExchanges] = useState<ExchangeMeta[]>([]);
  const [cexDexOpportunities, setCexDexOpportunities] = useState<CexDexArbitrageOpportunity[]>([]);
  const [cexDexSummary, setCexDexSummary] = useState<CexDexSummary | null>(null);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Tab & View States
  const [activeTab, setActiveTab] = useState<'scanner' | 'cexdex' | 'spread' | 'movers' | 'exchanges' | 'watchlist'>('scanner');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  // Modals
  const [selectedCalcOpp, setSelectedCalcOpp] = useState<ArbitrageOpportunity | null>(null);
  const [selectedDetailSymbol, setSelectedDetailSymbol] = useState<string | null>(null);
  const [isApiModalOpen, setIsApiModalOpen] = useState<boolean>(false);
  const [isApiConnected, setIsApiConnected] = useState<boolean>(true);

  // Watchlist (Saved Opportunity IDs)
  const [savedIds, setSavedIds] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem('arbitrage_watchlist_ids');
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Filters State
  const [filter, setFilter] = useState<FilterState>({
    search: '',
    minSpread: 0, // Default to show all >0% spread
    maxSpread: 0, // Default to 0 (All / No upper limit) so all opportunities are immediately visible
    openStatusOnly: false, // Default to false so all active pairs are visible, user can toggle Open D/W Only anytime
    contractVerifiedOnly: false,
    buyExchanges: [],
    sellExchanges: [],
    sortBy: 'spread',
    sortOrder: 'desc',
  });

  const handleFilterChange = (updated: Partial<FilterState>) => {
    setFilter((prev) => ({ ...prev, ...updated }));
  };

  const toggleSaveId = (id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        localStorage.setItem('arbitrage_watchlist_ids', JSON.stringify(Array.from(next)));
      } catch {}
      return next;
    });
  };

  const clearWatchlist = () => {
    setSavedIds(new Set());
    localStorage.removeItem('arbitrage_watchlist_ids');
  };

  // Fetch Data using Universal Data Service (Works on Vercel & Node.js)
  const fetchData = useCallback(async (isManualTrigger = false) => {
    if (isManualTrigger) setIsScanning(true);

    try {
      const [oppsResult, exData, cexDexResult] = await Promise.all([
        dataService.getArbitrageOpportunities(filter),
        dataService.getExchanges(),
        dataService.getCexDexOpportunities({
          search: filter.search,
          tokenTier: filter.tokenTier,
        }),
      ]);

      if (oppsResult) {
        if (oppsResult.summary) setSummary(oppsResult.summary);
        if (Array.isArray(oppsResult.opportunities)) setOpportunities(oppsResult.opportunities);
      }

      if (Array.isArray(exData)) {
        setExchanges(exData);
      }

      if (cexDexResult && Array.isArray(cexDexResult.opportunities)) {
        setCexDexOpportunities(cexDexResult.opportunities);
        if (cexDexResult.summary) setCexDexSummary(cexDexResult.summary);
      }

      // Successful fetch clears any previous error
      if (oppsResult || exData || cexDexResult) {
        setError(null);
      }
    } catch (err: any) {
      console.warn('Scanner connection notice:', err?.message || err);
      // Only show error message if no opportunities have loaded yet
      setOpportunities((prevOpps) => {
        if (prevOpps.length === 0) {
          setError('Connecting to scanner engine feeds... please wait.');
        }
        return prevOpps;
      });
    } finally {
      setIsScanning(false);
      setInitialLoading(false);
    }
  }, [filter]);

  // Trigger manual immediate rescan
  const handleScanNow = async () => {
    setIsScanning(true);
    try {
      const newSummary = await dataService.triggerScanNow();
      if (newSummary) setSummary(newSummary);
      await fetchData(true);
    } catch (e) {
      console.warn('Scan notice:', e);
    } finally {
      setIsScanning(false);
    }
  };

  // Initial load: Runs ONCE on first open to populate initial scan data, then stops automatic re-scanning
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Saved Opportunities list
  const savedOpportunities = useMemo(() => {
    return opportunities.filter((o) => savedIds.has(o.id));
  }, [opportunities, savedIds]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950 flex flex-col relative overflow-x-hidden">
      {/* Background Mesh Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed top-[30%] right-[15%] w-[35%] h-[35%] bg-emerald-500/8 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Top Header */}
      <Header
        summary={summary}
        isScanning={isScanning || summary?.isScanning || false}
        onScanNow={handleScanNow}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedIds.size}
        onOpenApiModal={() => setIsApiModalOpen(true)}
        cexDexCount={cexDexOpportunities.length}
        apiConnected={isApiConnected}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-3 space-y-3">
        {/* Banner Alert for Active Scanning */}
        {initialLoading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <RefreshCw className="w-6 h-6 animate-spin" />
              </div>
            </div>
            <div>
              <h2 className="text-base font-bold text-white mb-1">
                Connecting to 15 Exchange Feeds & DEX Pools...
              </h2>
              <p className="text-xs text-slate-400 max-w-md font-mono">
                Querying order books on Gate.io, HTX, CoinEx, KuCoin, BitMart, MEXC, Bybit, OKX, Bitget, LBank, XT, Bitrue, CEX.io, Coinstore + DEXs...
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Stats Overview */}
            <StatsOverview summary={summary} />

            {/* TAB CONTENT: SCANNER MATRIX */}
            {activeTab === 'scanner' && (
              <>
                {/* Filter & Controls Bar */}
                <FilterBar
                  filter={filter}
                  onFilterChange={handleFilterChange}
                  viewMode={viewMode}
                  onViewModeChange={setViewMode}
                  resultCount={opportunities.length}
                  onRefresh={() => fetchData(true)}
                  isRefreshing={isScanning}
                />

                {/* Error Banner */}
                {error && (
                  <div className="bg-rose-500/10 border border-rose-500/30 text-rose-300 p-3 rounded-xl mb-3 text-xs flex items-center justify-between">
                    <span>{error}</span>
                    <button
                      onClick={() => fetchData(true)}
                      className="px-2.5 py-1 bg-rose-500/20 hover:bg-rose-500/30 rounded-lg text-rose-200 font-semibold"
                    >
                      Retry
                    </button>
                  </div>
                )}

                {/* Opportunities List / Cards / Table */}
                {opportunities.length === 0 ? (
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center max-w-md mx-auto my-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 mx-auto mb-2.5">
                      <Sparkles className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">
                      No Arbitrage Opportunities Match Filters
                    </h3>
                    <p className="text-xs text-slate-400 mb-3">
                      Try lowering the Minimum Spread filter (e.g. to 0.5% or All) or searching for a different coin ticker.
                    </p>
                    <button
                      onClick={() => setFilter({ ...filter, minSpread: 0, search: '' })}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md cursor-pointer"
                    >
                      Reset Spread Filters
                    </button>
                  </div>
                ) : viewMode === 'cards' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                    {opportunities.map((opp) => (
                      <OpportunityCard
                        key={opp.id}
                        opp={opp}
                        onOpenCalculator={(o) => setSelectedCalcOpp(o)}
                        onOpenDetail={(s) => setSelectedDetailSymbol(s)}
                        isSaved={savedIds.has(opp.id)}
                        onToggleSave={toggleSaveId}
                      />
                    ))}
                  </div>
                ) : (
                  <OpportunityTable
                    opportunities={opportunities}
                    onOpenCalculator={(o) => setSelectedCalcOpp(o)}
                    onOpenDetail={(s) => setSelectedDetailSymbol(s)}
                    savedIds={savedIds}
                    onToggleSave={toggleSaveId}
                  />
                )}
              </>
            )}

            {/* TAB CONTENT: CEX VS DEX ARBITRAGE */}
            {activeTab === 'cexdex' && (
              <CexDexTab
                opportunities={cexDexOpportunities}
                summary={cexDexSummary}
                isScanning={isScanning}
                savedIds={savedIds}
                onToggleSave={toggleSaveId}
              />
            )}

            {/* TAB CONTENT: EXCHANGE SPREADS (SELECTED EXCHANGE TOKEN SPREADS) */}
            {activeTab === 'spread' && (
              <ExchangeSpreadTab
                onOpenDetail={(s) => setSelectedDetailSymbol(s)}
                onOpenCalculator={(o) => setSelectedCalcOpp(o)}
              />
            )}


            {/* TAB CONTENT: EXCHANGE MOVERS (GAINERS/LOSERS) */}
            {activeTab === 'movers' && (
              <MoversTab
                exchanges={exchanges}
                savedIds={savedIds}
                onToggleSave={toggleSaveId}
                onOpenCalculator={(o) => setSelectedCalcOpp(o)}
                onOpenDetail={(s) => setSelectedDetailSymbol(s)}
              />
            )}

            {/* TAB CONTENT: EXCHANGE HEALTH */}
            {activeTab === 'exchanges' && <ExchangeGrid exchanges={exchanges} />}

            {/* TAB CONTENT: WATCHLIST */}
            {activeTab === 'watchlist' && (
              <WatchlistPanel
                savedOpportunities={savedOpportunities}
                savedIds={savedIds}
                onToggleSave={toggleSaveId}
                onClearWatchlist={clearWatchlist}
                onOpenCalculator={(o) => setSelectedCalcOpp(o)}
                onOpenDetail={(s) => setSelectedDetailSymbol(s)}
                viewMode={viewMode}
              />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-3 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <div>
            Arbitrage Matrix Engine • Scanning 16 Spot Exchanges & Multi-Chain DEXs in Real-Time
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Live Websocket & REST
            </span>
            <span>Latency ~180ms</span>
          </div>
        </div>
      </footer>

      {/* Calculator Modal */}
      {selectedCalcOpp && (
        <CalculatorModal
          opp={selectedCalcOpp}
          onClose={() => setSelectedCalcOpp(null)}
        />
      )}

      {/* Token Detail Matrix Modal */}
      {selectedDetailSymbol && (
        <TokenDetailModal
          symbol={selectedDetailSymbol}
          onClose={() => setSelectedDetailSymbol(null)}
          onOpenCalculator={(opp) => setSelectedCalcOpp(opp)}
        />
      )}

      {/* API Key & Standalone Deployment Modal */}
      <ApiKeyModal
        isOpen={isApiModalOpen}
        onClose={() => setIsApiModalOpen(false)}
        onKeysUpdated={() => {
          setIsApiConnected(true);
          fetchData(true);
        }}
      />

      {/* PWA Offline Mode Indicator */}
      <OfflineIndicator />
    </div>
  );
}
