import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Search,
  RefreshCw,
  ExternalLink,
  Calculator,
  Eye,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  BarChart2,
  Layers,
  ArrowUpDown,
  Coins,
  Activity,
  ChevronDown,
  LayoutGrid,
  Table as TableIcon,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { ExchangeSpreadOverview, ExchangeTokenSpread } from '../types';
import { safeApiFetch } from '../utils/api';
import { dataService } from '../services/dataService';

interface ExchangeSpreadTabProps {
  onOpenDetail?: (symbol: string) => void;
  onOpenCalculator?: (opp: any) => void;
}

export const ExchangeSpreadTab: React.FC<ExchangeSpreadTabProps> = ({
  onOpenDetail,
  onOpenCalculator,
}) => {
  const [selectedExchange, setSelectedExchange] = useState<string>('binance');
  const [search, setSearch] = useState<string>('');
  const [tokenTier, setTokenTier] = useState<'ALL' | 'SMALL_MICRO' | 'MAJOR'>('ALL');
  const [spreadCategory, setSpreadCategory] = useState<'ALL' | 'TIGHT' | 'MODERATE' | 'WIDE' | 'HIGH'>('ALL');
  const [openStatusOnly, setOpenStatusOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'spread' | 'spreadUsd' | 'volume' | 'symbol' | 'bid' | 'ask' | 'depth'>('spread');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  const [data, setData] = useState<ExchangeSpreadOverview | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 50;

  // Fetch exchange spread data
  const fetchSpreadData = useCallback(
    async (showRefreshIndicator = false) => {
      if (showRefreshIndicator) {
        setIsRefreshing(true);
      } else {
        setIsLoading(true);
      }

      try {
        const json = await dataService.getExchangeSpreads({
          exchange: selectedExchange,
          search: search.trim(),
          tokenTier,
          spreadCategory,
          openStatusOnly,
          sortBy,
          sortOrder,
        });
        if (json) {
          setData(json);
          setError(null);
          // If currently selected exchange is not initialized in server response, update it
          if (json.exchange?.id && json.exchange.id !== selectedExchange) {
            setSelectedExchange(json.exchange.id);
          }
        } else {
          setError('Waiting for exchange spread feed... please wait.');
        }
      } catch (err: any) {
        setError('Exchange spread feed initializing... please wait.');
      } finally {
        setIsLoading(false);
        setIsRefreshing(false);
      }
    },
    [selectedExchange, search, tokenTier, spreadCategory, openStatusOnly, sortBy, sortOrder]
  );

  // Initial fetch and on dependency change
  useEffect(() => {
    fetchSpreadData();
    setCurrentPage(1);
  }, [fetchSpreadData]);

  // Periodic polling every 12 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      fetchSpreadData(false);
    }, 12000);
    return () => clearInterval(timer);
  }, [fetchSpreadData]);

  // Paginated tokens
  const paginatedTokens = useMemo(() => {
    if (!data?.tokens) return [];
    const start = (currentPage - 1) * pageSize;
    return data.tokens.slice(start, start + pageSize);
  }, [data?.tokens, currentPage, pageSize]);

  const totalPages = Math.max(1, Math.ceil((data?.tokens.length || 0) / pageSize));

  // Helper formatting for smart price decimals
  const formatPrice = (price: number) => {
    if (!price || isNaN(price)) return '0.00';
    if (price >= 1000) {
      return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    if (price >= 1) {
      return price.toFixed(4);
    }
    if (price >= 0.0001) {
      return price.toFixed(6);
    }
    return price.toFixed(8);
  };

  // Helper formatting for USD volume
  const formatVolume = (vol?: number) => {
    if (!vol || vol <= 0) return '$0';
    if (vol >= 1e9) return `$${(vol / 1e9).toFixed(2)}B`;
    if (vol >= 1e6) return `$${(vol / 1e6).toFixed(2)}M`;
    if (vol >= 1e3) return `$${(vol / 1e3).toFixed(1)}K`;
    return `$${Math.round(vol)}`;
  };

  // Spread color helper
  const getSpreadColor = (spreadPercent: number) => {
    if (spreadPercent < 0.1) return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    if (spreadPercent <= 0.5) return 'text-sky-400 bg-sky-500/10 border-sky-500/20';
    if (spreadPercent <= 1.0) return 'text-amber-400 bg-amber-500/15 border-amber-500/30';
    return 'text-rose-400 bg-rose-500/15 border-rose-500/30';
  };

  const getSpreadBarWidth = (spreadPercent: number) => {
    // Normalizes spread into 0 - 100% bar width (capped at 5%)
    return Math.min(100, Math.max(2, (spreadPercent / 3.0) * 100));
  };

  return (
    <div className="space-y-4 text-slate-100">
      {/* ------------------------------------------------------------------- */}
      {/* 1. TOP EXCHANGE SELECTOR BAR                                        */}
      {/* ------------------------------------------------------------------- */}
      <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-white tracking-tight">
                  Exchange Token Spreads
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                  Select Exchange to Inspect
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Live bid-ask spread matrix, order book depth, and liquidity analysis per exchange
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchSpreadData(true)}
              disabled={isRefreshing}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 transition-all cursor-pointer shadow-sm disabled:opacity-50"
              title="Refresh spreads for this exchange"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-emerald-400' : ''}`} />
              <span>{isRefreshing ? 'Refreshing...' : 'Refresh Spreads'}</span>
            </button>
          </div>
        </div>

        {/* Exchanges Horizontal Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {data?.availableExchanges?.map((ex) => {
            const isSelected = selectedExchange.toLowerCase() === ex.id.toLowerCase();
            return (
              <button
                key={ex.id}
                onClick={() => {
                  setSelectedExchange(ex.id);
                  setCurrentPage(1);
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer shrink-0 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-500/25 to-teal-500/20 border-emerald-400 text-white shadow-lg shadow-emerald-500/10 font-bold ring-1 ring-emerald-400/50'
                    : 'bg-slate-950/60 border-white/10 text-slate-300 hover:bg-slate-800/80 hover:text-white hover:border-white/20'
                }`}
              >
                {ex.logo ? (
                  <img
                    src={ex.logo}
                    alt={ex.name}
                    className="w-4 h-4 rounded-full object-cover shrink-0"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-[9px] font-black text-emerald-400">
                    {ex.name.charAt(0)}
                  </div>
                )}
                <span>{ex.name}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                    isSelected
                      ? 'bg-emerald-500/30 text-emerald-200'
                      : 'bg-slate-800/80 text-slate-400'
                  }`}
                >
                  {ex.pairCount}
                </span>
                {ex.avgSpreadPercent > 0 && (
                  <span
                    className={`text-[10px] font-mono font-semibold ${
                      ex.avgSpreadPercent < 0.1
                        ? 'text-emerald-400'
                        : ex.avgSpreadPercent < 0.5
                        ? 'text-sky-400'
                        : 'text-amber-400'
                    }`}
                  >
                    {ex.avgSpreadPercent}%
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 2. SELECTED EXCHANGE METRICS OVERVIEW                               */}
      {/* ------------------------------------------------------------------- */}
      {data?.exchange && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {/* Exchange Info Card */}
          <div className="bg-slate-900/60 border border-white/10 rounded-xl p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Selected Exchange</span>
              <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {data.exchange.status.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1.5">
              {data.exchange.logo && (
                <img
                  src={data.exchange.logo}
                  alt={data.exchange.name}
                  className="w-5 h-5 rounded-full object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
              )}
              <span className="text-sm font-extrabold text-white truncate">
                {data.exchange.name}
              </span>
            </div>
            <div className="mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between text-[11px]">
              <span className="text-slate-400 font-mono">Ping {data.exchange.latencyMs}ms</span>
              <a
                href={data.exchange.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-0.5 text-[10px] font-semibold"
              >
                <span>Visit</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Total Pairs Card */}
          <div className="bg-slate-900/60 border border-white/10 rounded-xl p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Pairs Tracked</span>
              <Coins className="w-3.5 h-3.5 text-sky-400" />
            </div>
            <div className="mt-1">
              <span className="text-lg font-extrabold text-white font-mono">
                {data.stats.totalTokens.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-400 ml-1.5">markets</span>
            </div>
            <div className="mt-2 pt-1.5 border-t border-white/5 text-[11px] text-slate-400 truncate">
              Filtered: <span className="text-white font-semibold">{data.tokens.length}</span> tokens
            </div>
          </div>

          {/* Average Bid-Ask Spread Card */}
          <div className="bg-slate-900/60 border border-white/10 rounded-xl p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Avg Spread</span>
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span
                className={`text-lg font-extrabold font-mono ${
                  data.stats.avgSpreadPercent < 0.1
                    ? 'text-emerald-400'
                    : data.stats.avgSpreadPercent < 0.5
                    ? 'text-sky-400'
                    : 'text-amber-400'
                }`}
              >
                {data.stats.avgSpreadPercent}%
              </span>
              <span className="text-[10px] text-slate-400">
                (Med: {data.stats.medianSpreadPercent}%)
              </span>
            </div>
            <div className="mt-2 pt-1.5 border-t border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Min: {data.stats.minSpreadPercent}%</span>
              <span>Max: {data.stats.maxSpreadPercent}%</span>
            </div>
          </div>

          {/* Tight vs High Spread Breakdown Card */}
          <div className="bg-slate-900/60 border border-white/10 rounded-xl p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Spread Quality</span>
              <BarChart2 className="w-3.5 h-3.5 text-indigo-400" />
            </div>
            <div className="mt-1 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-emerald-400">
                  {data.stats.tightSpreadsCount}
                </div>
                <div className="text-[9px] text-slate-400">Tight (&lt;0.1%)</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono font-bold text-amber-400">
                  {data.stats.highSpreadsCount}
                </div>
                <div className="text-[9px] text-slate-400">Wide (&gt;1.0%)</div>
              </div>
            </div>
            <div className="mt-2 pt-1.5 border-t border-white/5 flex h-1.5 rounded-full overflow-hidden bg-slate-800">
              <div
                className="bg-emerald-500 h-full"
                style={{
                  width: `${(data.stats.tightSpreadsCount / Math.max(1, data.stats.totalTokens)) * 100}%`,
                }}
                title="Tight Spreads"
              />
              <div
                className="bg-sky-500 h-full"
                style={{
                  width: `${(data.stats.moderateSpreadsCount / Math.max(1, data.stats.totalTokens)) * 100}%`,
                }}
                title="Moderate Spreads"
              />
              <div
                className="bg-amber-500 h-full"
                style={{
                  width: `${(data.stats.wideSpreadsCount / Math.max(1, data.stats.totalTokens)) * 100}%`,
                }}
                title="Wide Spreads"
              />
              <div
                className="bg-rose-500 h-full"
                style={{
                  width: `${(data.stats.highSpreadsCount / Math.max(1, data.stats.totalTokens)) * 100}%`,
                }}
                title="High Spreads"
              />
            </div>
          </div>

          {/* 24h Volume Card */}
          <div className="col-span-2 sm:col-span-1 bg-slate-900/60 border border-white/10 rounded-xl p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>24h Vol (USDT)</span>
              <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
            </div>
            <div className="mt-1">
              <span className="text-lg font-extrabold text-teal-300 font-mono">
                {formatVolume(data.stats.totalVolume24h)}
              </span>
            </div>
            <div className="mt-2 pt-1.5 border-t border-white/5 text-[11px] text-slate-400 truncate">
              Order book depth tracked
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* 3. FILTER & CONTROLS TOOLBAR                                        */}
      {/* ------------------------------------------------------------------- */}
      <div className="bg-slate-900/70 border border-white/10 rounded-xl p-3 space-y-2.5">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-2.5">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder={`Search tokens in ${data?.exchange?.name || 'exchange'} (e.g. BTC, ETH, SOL, PEPE)...`}
              className="w-full bg-slate-950/80 border border-white/10 rounded-lg pl-8 pr-8 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 transition-all font-mono"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Controls: Tier, Spread category, Open status & Sort */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {/* Token Tier Filter */}
            <div className="flex items-center bg-slate-950/80 border border-white/10 rounded-lg p-0.5">
              <button
                onClick={() => setTokenTier('ALL')}
                className={`px-2 py-1 rounded-md font-medium transition-all cursor-pointer ${
                  tokenTier === 'ALL'
                    ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All Tiers
              </button>
              <button
                onClick={() => setTokenTier('SMALL_MICRO')}
                className={`flex items-center gap-1 px-2 py-1 rounded-md font-medium transition-all cursor-pointer ${
                  tokenTier === 'SMALL_MICRO'
                    ? 'bg-amber-500/25 text-amber-300 font-semibold border border-amber-500/30'
                    : 'text-slate-400 hover:text-amber-300'
                }`}
                title="Small and Micro Cap Tokens"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Small/Micro</span>
              </button>
              <button
                onClick={() => setTokenTier('MAJOR')}
                className={`px-2 py-1 rounded-md font-medium transition-all cursor-pointer ${
                  tokenTier === 'MAJOR'
                    ? 'bg-sky-500/20 text-sky-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Major
              </button>
            </div>

            {/* Spread Category Filter */}
            <div className="flex items-center bg-slate-950/80 border border-white/10 rounded-lg p-0.5">
              <button
                onClick={() => setSpreadCategory('ALL')}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                  spreadCategory === 'ALL'
                    ? 'bg-white/15 text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All Spreads
              </button>
              <button
                onClick={() => setSpreadCategory('HIGH')}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                  spreadCategory === 'HIGH'
                    ? 'bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/30'
                    : 'text-slate-400 hover:text-rose-300'
                }`}
                title="Wide spreads (> 1%)"
              >
                &gt; 1% Spread
              </button>
              <button
                onClick={() => setSpreadCategory('MODERATE')}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                  spreadCategory === 'MODERATE'
                    ? 'bg-sky-500/20 text-sky-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                0.1 - 0.5%
              </button>
              <button
                onClick={() => setSpreadCategory('TIGHT')}
                className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                  spreadCategory === 'TIGHT'
                    ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Tight liquid spreads (< 0.1%)"
              >
                &lt; 0.1% Tight
              </button>
            </div>

            {/* Open Transfers Toggle */}
            <button
              onClick={() => setOpenStatusOnly(!openStatusOnly)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                openStatusOnly
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold'
                  : 'bg-slate-950/80 text-slate-400 border-white/10 hover:text-slate-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Open Transfer</span>
            </button>

            {/* Sort Selector */}
            <div className="flex items-center bg-slate-950/80 border border-white/10 rounded-lg px-2 py-1">
              <ArrowUpDown className="w-3 h-3 text-slate-400 mr-1.5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="spread" className="bg-slate-900 text-white">Sort: Spread %</option>
                <option value="spreadUsd" className="bg-slate-900 text-white">Sort: Spread ($)</option>
                <option value="volume" className="bg-slate-900 text-white">Sort: 24h Vol (USDT)</option>
                <option value="depth" className="bg-slate-900 text-white">Sort: Book Depth</option>
                <option value="symbol" className="bg-slate-900 text-white">Sort: Symbol (A-Z)</option>
                <option value="bid" className="bg-slate-900 text-white">Sort: Bid Price</option>
                <option value="ask" className="bg-slate-900 text-white">Sort: Ask Price</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="ml-1 text-slate-400 hover:text-white px-1 font-mono text-[10px]"
                title={sortOrder === 'asc' ? 'Ascending' : 'Descending'}
              >
                {sortOrder === 'asc' ? '▲' : '▼'}
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-950/80 border border-white/10 rounded-lg p-0.5">
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${
                  viewMode === 'table' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Table view"
              >
                <TableIcon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${
                  viewMode === 'cards' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Card grid view"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 4. SPREAD DATA CONTENT (TABLE OR CARDS)                             */}
      {/* ------------------------------------------------------------------- */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-16 gap-3 text-center bg-slate-900/40 rounded-2xl border border-white/5">
          <RefreshCw className="w-7 h-7 text-emerald-400 animate-spin" />
          <div className="text-xs text-slate-400 font-mono">
            Fetching order book spreads for {selectedExchange.toUpperCase()}...
          </div>
        </div>
      ) : error ? (
        <div className="bg-rose-500/10 border border-rose-500/30 text-rose-300 p-4 rounded-xl text-xs flex items-center justify-between">
          <span>{error}</span>
          <button
            onClick={() => fetchSpreadData(true)}
            className="px-3 py-1 bg-rose-500/20 hover:bg-rose-500/30 rounded-lg text-rose-200 font-semibold"
          >
            Retry
          </button>
        </div>
      ) : !data?.tokens || data.tokens.length === 0 ? (
        <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-10 text-center max-w-md mx-auto my-6">
          <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-2" />
          <h3 className="text-sm font-bold text-white mb-1">
            No Tokens Match Filters
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            Try clearing the search or changing the Spread Category filter for {data?.exchange?.name}.
          </p>
          <button
            onClick={() => {
              setSearch('');
              setTokenTier('ALL');
              setSpreadCategory('ALL');
              setOpenStatusOnly(false);
            }}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'table' ? (
        /* TABLE VIEW */
        <div className="bg-slate-900/70 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-950/90 border-b border-white/10 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-2.5 px-3">Token / Market</th>
                  <th className="py-2.5 px-3">Bid Price</th>
                  <th className="py-2.5 px-3">Ask Price</th>
                  <th className="py-2.5 px-3">Spread (% &amp; $)</th>
                  <th className="py-2.5 px-3">24h Vol (USDT)</th>
                  <th className="py-2.5 px-3">Order Depth ($)</th>
                  <th className="py-2.5 px-3">Transfers</th>
                  <th className="py-2.5 px-3">Arbitrage</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                {paginatedTokens.map((token) => {
                  const spreadColor = getSpreadColor(token.spreadPercent);
                  const barWidth = getSpreadBarWidth(token.spreadPercent);

                  return (
                    <tr
                      key={token.symbol}
                      className="hover:bg-slate-800/40 transition-colors group"
                    >
                      {/* Token / Market */}
                      <td className="py-2 px-3">
                        <div className="flex items-center gap-2">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-white font-black font-mono">
                                {token.baseSymbol}
                              </span>
                              <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-slate-800 text-slate-300">
                                {token.quoteSymbol}
                              </span>
                              {token.tokenTier === 'micro' && (
                                <span className="text-[8.5px] px-1 py-0.2 rounded bg-fuchsia-500/15 text-fuchsia-300 font-semibold border border-fuchsia-500/25">
                                  Micro
                                </span>
                              )}
                              {token.tokenTier === 'small' && (
                                <span className="text-[8.5px] px-1 py-0.2 rounded bg-amber-500/15 text-amber-300 font-semibold border border-amber-500/25">
                                  Small
                                </span>
                              )}
                            </div>
                            <div className="text-[10px] text-slate-400 truncate max-w-[120px]">
                              {token.name || token.baseSymbol}
                              {token.tokenCategory && ` • ${token.tokenCategory}`}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Bid Price */}
                      <td className="py-2 px-3 font-mono font-bold text-emerald-300">
                        ${formatPrice(token.bid)}
                      </td>

                      {/* Ask Price */}
                      <td className="py-2 px-3 font-mono font-bold text-rose-300">
                        ${formatPrice(token.ask)}
                      </td>

                      {/* Spread (% & $) */}
                      <td className="py-2 px-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`px-1.5 py-0.5 rounded font-mono font-extrabold text-[11px] border ${spreadColor}`}
                            >
                              +{token.spreadPercent}%
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">
                              ${token.spreadUsd < 0.000001 ? token.spreadUsd.toExponential(2) : token.spreadUsd.toFixed(token.spreadUsd > 1 ? 2 : 4)}
                            </span>
                          </div>
                          {/* Mini visual spread meter */}
                          <div className="w-24 h-1 bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                token.spreadPercent < 0.1
                                  ? 'bg-emerald-500'
                                  : token.spreadPercent <= 0.5
                                  ? 'bg-sky-500'
                                  : token.spreadPercent <= 1.0
                                  ? 'bg-amber-500'
                                  : 'bg-rose-500'
                              }`}
                              style={{ width: `${barWidth}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* 24h Volume */}
                      <td className="py-2 px-3 font-mono text-slate-300">
                        {formatVolume(token.volume24h)}
                      </td>

                      {/* Order Book Depth */}
                      <td className="py-2 px-3">
                        {token.bidUsdtVolume || token.askUsdtVolume ? (
                          <div className="text-[11px] font-mono space-y-0.5">
                            <div className="flex items-center justify-between gap-1 text-[10px]">
                              <span className="text-emerald-400">
                                B: {formatVolume(token.bidUsdtVolume)}
                              </span>
                              <span className="text-rose-400">
                                A: {formatVolume(token.askUsdtVolume)}
                              </span>
                            </div>
                            <div className="w-20 h-1 bg-slate-800 rounded-full flex overflow-hidden">
                              <div
                                className="bg-emerald-500 h-full"
                                style={{
                                  width: `${
                                    ((token.bidUsdtVolume || 0) /
                                      Math.max(1, (token.bidUsdtVolume || 0) + (token.askUsdtVolume || 0))) *
                                    100
                                  }%`,
                                }}
                              />
                              <div
                                className="bg-rose-500 h-full"
                                style={{
                                  width: `${
                                    ((token.askUsdtVolume || 0) /
                                      Math.max(1, (token.bidUsdtVolume || 0) + (token.askUsdtVolume || 0))) *
                                    100
                                  }%`,
                                }}
                              />
                            </div>
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-500 font-mono">Standard</span>
                        )}
                      </td>

                      {/* Transfer Status */}
                      <td className="py-2 px-3">
                        <div className="flex items-center gap-1.5 text-[10px]">
                          <span
                            className={`flex items-center gap-0.5 px-1.5 py-0.2 rounded font-semibold ${
                              token.depositOpen !== false
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                            }`}
                            title={`Deposit: ${token.depositOpen !== false ? 'Open' : 'Suspended'}`}
                          >
                            {token.depositOpen !== false ? 'Dep ✓' : 'Dep ✕'}
                          </span>
                          <span
                            className={`flex items-center gap-0.5 px-1.5 py-0.2 rounded font-semibold ${
                              token.withdrawOpen !== false
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                            }`}
                            title={`Withdrawal: ${token.withdrawOpen !== false ? 'Open' : 'Suspended'}`}
                          >
                            {token.withdrawOpen !== false ? 'Wth ✓' : 'Wth ✕'}
                          </span>
                        </div>
                      </td>

                      {/* Cross-Exchange Arbitrage Opportunity */}
                      <td className="py-2 px-3">
                        {token.hasArbitrage && token.arbitrageBestSpread ? (
                          <button
                            onClick={() => onOpenDetail && onOpenDetail(token.symbol)}
                            className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 text-[10px] font-mono font-bold transition-all cursor-pointer"
                            title={`Cross-exchange arbitrage vs ${token.arbitrageTargetExchange}`}
                          >
                            <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
                            <span>+{token.arbitrageBestSpread}%</span>
                            <span className="text-[8px] text-slate-300">
                              vs {token.arbitrageTargetExchange}
                            </span>
                          </button>
                        ) : (
                          <span className="text-[10px] text-slate-500 font-mono">—</span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-2 px-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          {onOpenDetail && (
                            <button
                              onClick={() => onOpenDetail(token.symbol)}
                              title="Compare prices across all exchanges"
                              className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <a
                            href={token.tradeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-[11px] transition-all cursor-pointer shadow-sm"
                            title={`Trade ${token.symbol} on ${data?.exchange?.name}`}
                          >
                            <span>Trade</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Pagination */}
          <div className="p-3 bg-slate-950/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
            <div>
              Showing{' '}
              <span className="text-white font-semibold">
                {(currentPage - 1) * pageSize + 1}
              </span>{' '}
              to{' '}
              <span className="text-white font-semibold">
                {Math.min(currentPage * pageSize, data.tokens.length)}
              </span>{' '}
              of <span className="text-white font-semibold">{data.tokens.length}</span> tokens on{' '}
              <span className="text-emerald-400 font-semibold">{data.exchange.name}</span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800"
              >
                Previous
              </button>
              <span className="px-2 font-mono text-white">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* CARD GRID VIEW */
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {paginatedTokens.map((token) => {
              const spreadColor = getSpreadColor(token.spreadPercent);
              const barWidth = getSpreadBarWidth(token.spreadPercent);

              return (
                <div
                  key={token.symbol}
                  className="bg-slate-900/80 border border-white/10 hover:border-white/20 rounded-xl p-3.5 shadow-md flex flex-col justify-between transition-all group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-black text-white font-mono">
                          {token.baseSymbol}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                          {token.quoteSymbol}
                        </span>
                        {token.tokenTier === 'micro' && (
                          <span className="text-[8.5px] px-1 py-0.2 rounded bg-fuchsia-500/15 text-fuchsia-300 font-semibold border border-fuchsia-500/25">
                            Micro
                          </span>
                        )}
                        {token.tokenTier === 'small' && (
                          <span className="text-[8.5px] px-1 py-0.2 rounded bg-amber-500/15 text-amber-300 font-semibold border border-amber-500/25">
                            Small
                          </span>
                        )}
                      </div>

                      <span
                        className={`px-2 py-0.5 rounded-md font-mono font-extrabold text-xs border ${spreadColor}`}
                      >
                        +{token.spreadPercent}%
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-400 mb-3 truncate">
                      {token.name || token.baseSymbol}
                      {token.tokenCategory && ` • ${token.tokenCategory}`}
                    </div>

                    {/* Prices Grid */}
                    <div className="grid grid-cols-2 gap-2 bg-slate-950/60 rounded-lg p-2 mb-3 border border-white/5">
                      <div>
                        <div className="text-[9px] uppercase font-mono text-slate-400">Bid (Buy)</div>
                        <div className="text-xs font-mono font-bold text-emerald-400">
                          ${formatPrice(token.bid)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[9px] uppercase font-mono text-slate-400">Ask (Sell)</div>
                        <div className="text-xs font-mono font-bold text-rose-400">
                          ${formatPrice(token.ask)}
                        </div>
                      </div>
                    </div>

                    {/* Spread Meter */}
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span>Spread Gap</span>
                        <span className="text-slate-200">
                          ${token.spreadUsd < 0.0001 ? token.spreadUsd.toFixed(8) : token.spreadUsd.toFixed(4)}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            token.spreadPercent < 0.1
                              ? 'bg-emerald-500'
                              : token.spreadPercent <= 0.5
                              ? 'bg-sky-500'
                              : token.spreadPercent <= 1.0
                              ? 'bg-amber-500'
                              : 'bg-rose-500'
                          }`}
                          style={{ width: `${barWidth}%` }}
                        />
                      </div>
                    </div>

                    {/* Volume & Transfers */}
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-3 pt-2 border-t border-white/5 font-mono">
                      <span>24h Vol: {formatVolume(token.volume24h)} (USDT)</span>
                      <div className="flex items-center gap-1">
                        <span className={token.depositOpen !== false ? 'text-emerald-400' : 'text-rose-400'}>
                          Dep {token.depositOpen !== false ? '✓' : '✕'}
                        </span>
                        <span>•</span>
                        <span className={token.withdrawOpen !== false ? 'text-emerald-400' : 'text-rose-400'}>
                          Wth {token.withdrawOpen !== false ? '✓' : '✕'}
                        </span>
                      </div>
                    </div>

                    {/* Cross Arbitrage Badge if any */}
                    {token.hasArbitrage && token.arbitrageBestSpread && (
                      <div className="mb-3 p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] flex items-center justify-between">
                        <span className="text-slate-300">Arb Available:</span>
                        <span className="font-mono font-bold text-emerald-300">
                          +{token.arbitrageBestSpread}% vs {token.arbitrageTargetExchange}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1.5 pt-2 border-t border-white/10">
                    {onOpenDetail && (
                      <button
                        onClick={() => onOpenDetail(token.symbol)}
                        className="flex-1 py-1 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer"
                      >
                        <Eye className="w-3 h-3" />
                        <span>Compare</span>
                      </button>
                    )}
                    <a
                      href={token.tradeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer shadow"
                    >
                      <span>Trade</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Grid Pagination */}
          <div className="p-3 bg-slate-900/60 border border-white/10 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
            <div>
              Showing {(currentPage - 1) * pageSize + 1} to{' '}
              {Math.min(currentPage * pageSize, data.tokens.length)} of {data.tokens.length} tokens
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-2.5 py-1 rounded-lg bg-slate-800 border border-white/10 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700"
              >
                Previous
              </button>
              <span className="px-2 font-mono text-white">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-2.5 py-1 rounded-lg bg-slate-800 border border-white/10 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
