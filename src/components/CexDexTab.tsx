import React, { useState, useMemo } from 'react';
import {
  CexDexArbitrageOpportunity,
  CexDexFilterState,
  CexDexSummary,
} from '../types';
import { CexDexCard } from './CexDexCard';
import { CexDexTable } from './CexDexTable';
import { CexDexCalculatorModal } from './CexDexCalculatorModal';
import {
  Search,
  SlidersHorizontal,
  LayoutGrid,
  List,
  TrendingUp,
  Droplets,
  Layers,
  Sparkles,
  ArrowRightLeft,
  ShieldCheck,
  RefreshCw,
  Fuel,
  Activity,
  Globe,
  Flame,
  Zap,
} from 'lucide-react';

interface CexDexTabProps {
  opportunities: CexDexArbitrageOpportunity[];
  summary: CexDexSummary | null;
  isScanning: boolean;
  savedIds: Set<string>;
  onToggleSave: (id: string) => void;
}

const CHAINS = [
  'ALL',
  'Solana',
  'Ethereum',
  'Base',
  'BEP20 (BSC)',
  'Arbitrum',
  'Avalanche',
];

const DEX_LIST = [
  'ALL',
  'Uniswap V3',
  'Raydium',
  'PancakeSwap V3',
  'Aerodrome',
  'Camelot',
  'Orca',
  'Trader Joe',
];

const CEX_LIST = [
  'ALL',
  'Gate.io',
  'MEXC',
  'OKX',
  'Bybit',
  'KuCoin',
  'Bitget',
  'HTX',
  'CoinEx',
  'BitMart',
  'LBank',
  'XT',
  'Bitrue',
  'CEX.io',
  'Coinstore',
];

export const CexDexTab: React.FC<CexDexTabProps> = ({
  opportunities,
  summary,
  isScanning,
  savedIds,
  onToggleSave,
}) => {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [selectedCalcOpp, setSelectedCalcOpp] = useState<CexDexArbitrageOpportunity | null>(null);

  // Filters State
  const [filter, setFilter] = useState<CexDexFilterState>({
    search: '',
    direction: 'ALL',
    chain: 'ALL',
    dex: 'ALL',
    cex: 'ALL',
    tokenTier: 'ALL',
    minSpread: 0.5, // Broad default to catch high-yield small tokens
    minDexLiquidity: 1000, // Accessible liquidity for small/micro pools
    verifiedOnly: true,
    sortBy: 'spread',
    sortOrder: 'desc',
  });

  // Client-side filtering and sorting
  const filteredOpps = useMemo(() => {
    let list = [...opportunities];

    // Search query
    if (filter.search.trim()) {
      const q = filter.search.trim().toLowerCase();
      list = list.filter(
        (o) =>
          o.symbol.toLowerCase().includes(q) ||
          o.baseSymbol.toLowerCase().includes(q) ||
          o.tokenName.toLowerCase().includes(q) ||
          o.contractAddress.toLowerCase().includes(q) ||
          o.cexName.toLowerCase().includes(q) ||
          o.dexName.toLowerCase().includes(q) ||
          o.dexChain.toLowerCase().includes(q) ||
          (o.tokenCategory && o.tokenCategory.toLowerCase().includes(q))
      );
    }

    // Direction
    if (filter.direction !== 'ALL') {
      list = list.filter((o) => o.direction === filter.direction);
    }

    // Chain
    if (filter.chain !== 'ALL') {
      list = list.filter((o) => o.dexChain.toLowerCase() === filter.chain.toLowerCase());
    }

    // DEX
    if (filter.dex !== 'ALL') {
      list = list.filter((o) => o.dexName.toLowerCase().includes(filter.dex.toLowerCase()));
    }

    // CEX
    if (filter.cex !== 'ALL') {
      list = list.filter((o) => o.cexName.toLowerCase().includes(filter.cex.toLowerCase()));
    }

    // Token Tier Filter (All / Small & Micro only / Major only)
    if (filter.tokenTier && filter.tokenTier !== 'ALL') {
      if (filter.tokenTier === 'SMALL_MICRO') {
        list = list.filter((o) => o.tokenTier === 'small' || o.tokenTier === 'micro');
      } else if (filter.tokenTier === 'MAJOR') {
        list = list.filter((o) => o.tokenTier === 'major' || !o.tokenTier);
      }
    }

    // Min Spread
    if (filter.minSpread > 0) {
      list = list.filter((o) => o.grossSpreadPercent >= filter.minSpread);
    }

    // Min Liquidity
    if (filter.minDexLiquidity > 0) {
      list = list.filter((o) => o.dexLiquidityUsd >= filter.minDexLiquidity);
    }

    // Sort
    const sortOrder = filter.sortOrder === 'asc' ? 1 : -1;
    list.sort((a, b) => {
      if (filter.sortBy === 'spread') {
        return (a.grossSpreadPercent - b.grossSpreadPercent) * sortOrder;
      }
      if (filter.sortBy === 'profit') {
        return (a.netProfitPer1000USDT - b.netProfitPer1000USDT) * sortOrder;
      }
      if (filter.sortBy === 'liquidity') {
        return (a.dexLiquidityUsd - b.dexLiquidityUsd) * sortOrder;
      }
      if (filter.sortBy === 'dexVolume') {
        return ((a.dexVolume24h || 0) - (b.dexVolume24h || 0)) * sortOrder;
      }
      if (filter.sortBy === 'symbol') {
        return a.symbol.localeCompare(b.symbol) * sortOrder;
      }
      return 0;
    });

    return list;
  }, [opportunities, filter]);

  const formatUsd = (val?: number) => {
    if (!val) return '$0';
    if (val >= 1_000_000) return `$${(val / 1_000_000).toFixed(2)}M`;
    if (val >= 1_000) return `$${(val / 1_000).toFixed(1)}k`;
    return `$${val.toFixed(0)}`;
  };

  const smallTokensCount = summary?.smallTokensCount ?? opportunities.filter(o => o.tokenTier === 'small' || o.tokenTier === 'micro').length;

  return (
    <div className="space-y-4">
      {/* Top Banner & High-Level Metric Tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 shadow-md">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
            <ArrowRightLeft className="w-3.5 h-3.5 text-emerald-400" />
            <span>CEX ↔ DEX Routes</span>
          </div>
          <div className="text-xl font-extrabold text-white font-mono">
            {summary?.totalCexDexPairs ?? opportunities.length}
          </div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5 flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">{summary?.cexToDexCount ?? 0} CEX➔DEX</span>
            <span>•</span>
            <span className="text-purple-400 font-bold">{summary?.dexToCexCount ?? 0} DEX➔CEX</span>
          </div>
        </div>

        {/* Small & Micro Tokens Highlight Tile */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 shadow-md">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-1">
            <span className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Small & Micro Tokens</span>
            </span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold">
              Active
            </span>
          </div>
          <div className="text-xl font-extrabold text-amber-300 font-mono">
            {smallTokensCount} Pairs
          </div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">
            AI Agents, Memes & Low-Caps
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 shadow-md">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Top Spread</span>
          </div>
          <div className="text-xl font-extrabold text-emerald-400 font-mono">
            +{summary?.maxSpreadPercent ? summary.maxSpreadPercent.toFixed(2) : '0.00'}%
          </div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">
            Real-time Order Book vs LP
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 shadow-md">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
            <Droplets className="w-3.5 h-3.5 text-sky-400" />
            <span>DEX Liquidity</span>
          </div>
          <div className="text-xl font-extrabold text-sky-300 font-mono">
            {formatUsd(summary?.totalDexLiquidityUsd)}
          </div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">
            Monitored Pools Depth
          </div>
        </div>

        <div className="col-span-2 sm:col-span-3 lg:col-span-1 bg-slate-900/90 border border-slate-800 rounded-xl p-3 shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-1">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> Contract Verify</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-bold">100% Verified</span>
          </div>
          <p className="text-[10.5px] text-slate-300 leading-tight">
            Matching official smart contracts between spot exchanges and on-chain pools.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 shadow-lg space-y-3">
        {/* Row 1: Direction Tabs, Token Tier Tabs, Search & View Mode */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {/* Direction Filter Pills */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setFilter({ ...filter, direction: 'ALL' })}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                  filter.direction === 'ALL'
                    ? 'bg-white/20 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All Routes
              </button>
              <button
                onClick={() => setFilter({ ...filter, direction: 'CEX_TO_DEX' })}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1 ${
                  filter.direction === 'CEX_TO_DEX'
                    ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-500/40 shadow-sm'
                    : 'text-emerald-400/70 hover:text-emerald-300'
                }`}
              >
                <span>🟢 CEX ➔ DEX</span>
              </button>
              <button
                onClick={() => setFilter({ ...filter, direction: 'DEX_TO_CEX' })}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1 ${
                  filter.direction === 'DEX_TO_CEX'
                    ? 'bg-purple-500/30 text-purple-200 border border-purple-500/40 shadow-sm'
                    : 'text-purple-400/70 hover:text-purple-300'
                }`}
              >
                <span>🟣 DEX ➔ CEX</span>
              </button>
            </div>

            {/* Token Tier Pills (All / Small & Micro / Majors) */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setFilter({ ...filter, tokenTier: 'ALL' })}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                  filter.tokenTier === 'ALL'
                    ? 'bg-white/20 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All Tokens
              </button>
              <button
                onClick={() => setFilter({ ...filter, tokenTier: 'SMALL_MICRO' })}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1 ${
                  filter.tokenTier === 'SMALL_MICRO'
                    ? 'bg-amber-500/30 text-amber-200 border border-amber-500/40 shadow-sm'
                    : 'text-amber-400/70 hover:text-amber-300'
                }`}
              >
                <Flame className="w-3 h-3 text-amber-400" />
                <span>Small & Micro ({smallTokensCount})</span>
              </button>
              <button
                onClick={() => setFilter({ ...filter, tokenTier: 'MAJOR' })}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                  filter.tokenTier === 'MAJOR'
                    ? 'bg-sky-500/30 text-sky-200 border border-sky-500/40 shadow-sm'
                    : 'text-sky-400/70 hover:text-sky-300'
                }`}
              >
                💎 Majors Only
              </button>
            </div>
          </div>

          {/* Search Input & View Mode */}
          <div className="flex items-center gap-2 w-full lg:w-auto justify-between lg:justify-end">
            <div className="relative flex-1 lg:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search token, meme, AI agent, chain..."
                value={filter.search}
                onChange={(e) => setFilter({ ...filter, search: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700/80 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-white/10 shrink-0">
              <button
                onClick={() => setViewMode('cards')}
                className={`p-1.5 rounded transition-all ${
                  viewMode === 'cards'
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Cards View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded transition-all ${
                  viewMode === 'table'
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Table View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Chain, DEX, CEX, Min Spread, Min Liquidity, and Sort dropdowns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
          {/* Chain */}
          <div>
            <label className="text-[10px] text-slate-400 block mb-1 font-semibold">Chain</label>
            <select
              value={filter.chain}
              onChange={(e) => setFilter({ ...filter, chain: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-emerald-500"
            >
              {CHAINS.map((c) => (
                <option key={c} value={c}>{c === 'ALL' ? '🌐 All Chains' : c}</option>
              ))}
            </select>
          </div>

          {/* DEX */}
          <div>
            <label className="text-[10px] text-slate-400 block mb-1 font-semibold">DEX</label>
            <select
              value={filter.dex}
              onChange={(e) => setFilter({ ...filter, dex: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-emerald-500"
            >
              {DEX_LIST.map((d) => (
                <option key={d} value={d}>{d === 'ALL' ? '🦄 All DEXs' : d}</option>
              ))}
            </select>
          </div>

          {/* CEX */}
          <div>
            <label className="text-[10px] text-slate-400 block mb-1 font-semibold">CEX</label>
            <select
              value={filter.cex}
              onChange={(e) => setFilter({ ...filter, cex: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-emerald-500"
            >
              {CEX_LIST.map((c) => (
                <option key={c} value={c}>{c === 'ALL' ? '🏦 All CEXs' : c}</option>
              ))}
            </select>
          </div>

          {/* Min Spread */}
          <div>
            <label className="text-[10px] text-slate-400 block mb-1 font-semibold">
              Min Spread: <span className="text-emerald-400 font-mono font-bold">{filter.minSpread}%</span>
            </label>
            <select
              value={filter.minSpread}
              onChange={(e) => setFilter({ ...filter, minSpread: parseFloat(e.target.value) })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-emerald-500 font-mono"
            >
              <option value="0.2">≥ 0.2% Spread</option>
              <option value="0.5">≥ 0.5% Spread</option>
              <option value="1.0">≥ 1.0% Spread</option>
              <option value="2.0">≥ 2.0% Spread</option>
              <option value="5.0">≥ 5.0% Spread</option>
              <option value="10.0">≥ 10.0% Spread</option>
              <option value="20.0">≥ 20.0% Spread</option>
            </select>
          </div>

          {/* Min DEX Liquidity */}
          <div>
            <label className="text-[10px] text-slate-400 block mb-1 font-semibold">Min Liquidity</label>
            <select
              value={filter.minDexLiquidity}
              onChange={(e) => setFilter({ ...filter, minDexLiquidity: parseFloat(e.target.value) })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-emerald-500 font-mono"
            >
              <option value="100">≥ $100 Liquidity (Micro)</option>
              <option value="500">≥ $500 Liquidity</option>
              <option value="1000">≥ $1k Liquidity</option>
              <option value="5000">≥ $5k Liquidity</option>
              <option value="10000">≥ $10k Liquidity</option>
              <option value="25000">≥ $25k Liquidity</option>
              <option value="100000">≥ $100k Liquidity</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="text-[10px] text-slate-400 block mb-1 font-semibold">Sort By</label>
            <select
              value={filter.sortBy}
              onChange={(e) => setFilter({ ...filter, sortBy: e.target.value as any })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-slate-200 text-xs focus:outline-none focus:border-emerald-500"
            >
              <option value="spread">⚡ Spread % (High to Low)</option>
              <option value="profit">💰 Net Profit ($1k)</option>
              <option value="liquidity">💧 DEX Liquidity ($)</option>
              <option value="dexVolume">📊 24h DEX Volume</option>
              <option value="symbol">🔤 Token Symbol (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <div>
          Showing <span className="font-bold text-white">{filteredOpps.length}</span> CEX vs DEX opportunities
        </div>
        {(filter.search || filter.direction !== 'ALL' || filter.chain !== 'ALL' || filter.dex !== 'ALL' || filter.cex !== 'ALL' || filter.minSpread > 2) && (
          <button
            onClick={() =>
              setFilter({
                search: '',
                direction: 'ALL',
                chain: 'ALL',
                dex: 'ALL',
                cex: 'ALL',
                minSpread: 0.5,
                minDexLiquidity: 1000,
                verifiedOnly: true,
                sortBy: 'spread',
                sortOrder: 'desc',
              })
            }
            className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Opportunity Grid / Table */}
      {filteredOpps.length === 0 ? (
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center max-w-md mx-auto my-8">
          <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 mx-auto mb-2.5">
            <Sparkles className="w-5 h-5 text-amber-400" />
          </div>
          <h3 className="text-sm font-bold text-white mb-1">
            No CEX vs DEX Opportunities Match Filters
          </h3>
          <p className="text-xs text-slate-400 mb-3">
            Try lowering the Minimum Spread filter (e.g. to 0.5%) or selecting "All Chains".
          </p>
          <button
            onClick={() =>
              setFilter({
                ...filter,
                minSpread: 0.5,
                chain: 'ALL',
                dex: 'ALL',
                cex: 'ALL',
                search: '',
              })
            }
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredOpps.map((opp) => (
            <CexDexCard
              key={opp.id}
              opp={opp}
              onOpenCalculator={(o) => setSelectedCalcOpp(o)}
              isSaved={savedIds.has(opp.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      ) : (
        <CexDexTable
          opportunities={filteredOpps}
          onOpenCalculator={(o) => setSelectedCalcOpp(o)}
          savedIds={savedIds}
          onToggleSave={onToggleSave}
        />
      )}

      {/* CEX vs DEX Profit Calculator Modal */}
      {selectedCalcOpp && (
        <CexDexCalculatorModal
          opp={selectedCalcOpp}
          onClose={() => setSelectedCalcOpp(null)}
        />
      )}
    </div>
  );
};
