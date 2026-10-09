import React, { useState, useRef, useEffect } from 'react';
import { FilterState } from '../types';
import {
  Search,
  SlidersHorizontal,
  ShieldCheck,
  CheckCircle2,
  LayoutGrid,
  ListFilter,
  ArrowUpDown,
  Building2,
  Check,
  X,
  ChevronDown,
  RotateCcw,
  Sparkles,
  Coins,
  RefreshCw,
} from 'lucide-react';

const ALL_EXCHANGES = [
  { id: 'gateio', name: 'Gate.io' },
  { id: 'htx', name: 'HTX' },
  { id: 'coinex', name: 'CoinEx' },
  { id: 'kucoin', name: 'KuCoin' },
  { id: 'bitmart', name: 'BitMart' },
  { id: 'mexc', name: 'MEXC' },
  { id: 'bybit', name: 'Bybit' },
  { id: 'okx', name: 'OKX' },
  { id: 'bitget', name: 'Bitget' },
  { id: 'lbank', name: 'LBank' },
  { id: 'xt', name: 'XT.com' },
  { id: 'bitrue', name: 'Bitrue' },
  { id: 'cex', name: 'CEX.io' },
  { id: 'coinstore', name: 'Coinstore' },
];

interface FilterBarProps {
  filter: FilterState;
  onFilterChange: (updated: Partial<FilterState>) => void;
  viewMode: 'cards' | 'table';
  onViewModeChange: (mode: 'cards' | 'table') => void;
  resultCount: number;
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filter,
  onFilterChange,
  viewMode,
  onViewModeChange,
  resultCount,
  onRefresh,
  isRefreshing = false,
}) => {
  const [isExchangeMenuOpen, setIsExchangeMenuOpen] = useState(false);
  const [exchangeSearch, setExchangeSearch] = useState('');
  const [exchangeMode, setExchangeMode] = useState<'both' | 'buy' | 'sell'>('both');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const minSpreadPresets = [0, 1.0, 5.0, 10.0, 20.0, 50.0];
  const maxSpreadPresets = [15, 30, 50, 100, 200, 0]; // 0 means All/Unlimited

  const handleMinSpreadChange = (val: number) => {
    const updates: Partial<FilterState> = { minSpread: val };
    // If setting a minSpread that conflicts with an active maxSpread, clear maxSpread
    if (val > 0 && filter.maxSpread && filter.maxSpread > 0 && val >= filter.maxSpread) {
      updates.maxSpread = 0;
    }
    onFilterChange(updates);
  };

  const handleMaxSpreadChange = (val: number) => {
    const updates: Partial<FilterState> = { maxSpread: val };
    // If setting a maxSpread that conflicts with an active minSpread, reset minSpread
    if (val > 0 && filter.minSpread && filter.minSpread >= val) {
      updates.minSpread = 0;
    }
    onFilterChange(updates);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsExchangeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compute active buy/sell exchange sets
  const activeBuyExchanges = new Set(
    filter.buyExchanges.length === 0 ? ALL_EXCHANGES.map((e) => e.id) : filter.buyExchanges
  );
  const activeSellExchanges = new Set(
    filter.sellExchanges.length === 0 ? ALL_EXCHANGES.map((e) => e.id) : filter.sellExchanges
  );

  // Check if an exchange is active in current tab
  const isExchangeActive = (id: string) => {
    if (exchangeMode === 'both') {
      return activeBuyExchanges.has(id) && activeSellExchanges.has(id);
    }
    if (exchangeMode === 'buy') {
      return activeBuyExchanges.has(id);
    }
    return activeSellExchanges.has(id);
  };

  // Toggle single exchange
  const handleToggleExchange = (id: string) => {
    let nextBuy = new Set(activeBuyExchanges);
    let nextSell = new Set(activeSellExchanges);

    if (exchangeMode === 'both') {
      const isCurrentlyActive = nextBuy.has(id) && nextSell.has(id);
      if (isCurrentlyActive) {
        nextBuy.delete(id);
        nextSell.delete(id);
      } else {
        nextBuy.add(id);
        nextSell.add(id);
      }
    } else if (exchangeMode === 'buy') {
      if (nextBuy.has(id)) {
        nextBuy.delete(id);
      } else {
        nextBuy.add(id);
      }
    } else {
      if (nextSell.has(id)) {
        nextSell.delete(id);
      } else {
        nextSell.add(id);
      }
    }

    const finalBuy = nextBuy.size === ALL_EXCHANGES.length ? [] : Array.from(nextBuy);
    const finalSell = nextSell.size === ALL_EXCHANGES.length ? [] : Array.from(nextSell);

    onFilterChange({
      buyExchanges: finalBuy,
      sellExchanges: finalSell,
    });
  };

  // Select All Exchanges
  const handleSelectAllExchanges = () => {
    if (exchangeMode === 'both') {
      onFilterChange({ buyExchanges: [], sellExchanges: [] });
    } else if (exchangeMode === 'buy') {
      onFilterChange({ buyExchanges: [] });
    } else {
      onFilterChange({ sellExchanges: [] });
    }
  };

  // Deselect All Exchanges
  const handleDeselectAllExchanges = () => {
    if (exchangeMode === 'both') {
      onFilterChange({ buyExchanges: ['none'], sellExchanges: ['none'] });
    } else if (exchangeMode === 'buy') {
      onFilterChange({ buyExchanges: ['none'] });
    } else {
      onFilterChange({ sellExchanges: ['none'] });
    }
  };

  // Count active exchanges
  const activeBothCount = ALL_EXCHANGES.filter((e) => activeBuyExchanges.has(e.id) && activeSellExchanges.has(e.id)).length;
  const isFiltered = filter.buyExchanges.length > 0 || filter.sellExchanges.length > 0;

  // Filtered list by search term
  const filteredExchangesList = ALL_EXCHANGES.filter((ex) =>
    ex.name.toLowerCase().includes(exchangeSearch.toLowerCase())
  );

  return (
    <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-xl p-2.5 mb-3 shadow-lg space-y-2 relative z-10">
      {/* Top Row: Search + Filters + Controls */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
        {/* Search Input */}
        <div className="relative w-full lg:w-72">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            value={filter.search}
            onChange={(e) => onFilterChange({ search: e.target.value })}
            placeholder="Search coin (e.g. BTC, PEPE, SOL)..."
            className="w-full bg-slate-950/80 border border-white/10 focus:border-emerald-500/80 rounded-lg pl-8 pr-6 py-1.5 text-xs text-white placeholder-slate-400 outline-none transition-all focus:bg-slate-900"
          />
          {filter.search && (
            <button
              onClick={() => onFilterChange({ search: '' })}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-mono"
            >
              ✕
            </button>
          )}
        </div>

        {/* Toggles + Exchange Dropdown + Sort + View Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
          {/* Exchange Filter Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsExchangeMenuOpen(!isExchangeMenuOpen)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                isFiltered
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm'
                  : 'bg-slate-950/80 text-slate-200 border-white/10 hover:border-white/20 hover:bg-slate-900'
              }`}
            >
              <Building2 className={`w-3.5 h-3.5 ${isFiltered ? 'text-amber-400' : 'text-slate-400'}`} />
              <span>
                Exchanges ({activeBothCount}/{ALL_EXCHANGES.length})
              </span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isExchangeMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Exchange Popover Dropdown Menu */}
            {isExchangeMenuOpen && (
              <div className="absolute left-0 lg:left-auto lg:right-0 mt-1.5 w-80 sm:w-88 bg-slate-950 border border-slate-800 rounded-xl p-3 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {/* Popover Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-bold text-white text-[11px] uppercase tracking-wider font-mono">
                      Filter Exchanges
                    </span>
                  </div>
                  <button
                    onClick={() => setIsExchangeMenuOpen(false)}
                    className="text-slate-400 hover:text-white text-xs p-0.5 rounded hover:bg-slate-800"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Scope Mode Selector (Both / Buy / Sell) */}
                <div className="grid grid-cols-3 gap-1 bg-slate-900 p-1 rounded-lg mb-2 text-[10px] font-mono">
                  <button
                    onClick={() => setExchangeMode('both')}
                    className={`py-1 rounded font-bold transition-all ${
                      exchangeMode === 'both' ? 'bg-emerald-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Both Roles
                  </button>
                  <button
                    onClick={() => setExchangeMode('buy')}
                    className={`py-1 rounded font-bold transition-all ${
                      exchangeMode === 'buy' ? 'bg-emerald-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Buy Side
                  </button>
                  <button
                    onClick={() => setExchangeMode('sell')}
                    className={`py-1 rounded font-bold transition-all ${
                      exchangeMode === 'sell' ? 'bg-emerald-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Sell Side
                  </button>
                </div>

                {/* Quick Actions: Select All / Deselect All */}
                <div className="flex items-center justify-between mb-2 text-xs">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handleSelectAllExchanges}
                      className="px-2 py-0.5 bg-emerald-500/15 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 rounded text-[10px] font-semibold transition-all cursor-pointer"
                    >
                      Select All
                    </button>
                    <button
                      onClick={handleDeselectAllExchanges}
                      className="px-2 py-0.5 bg-rose-500/15 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 rounded text-[10px] font-semibold transition-all cursor-pointer"
                    >
                      Deselect All
                    </button>
                  </div>

                  {isFiltered && (
                    <button
                      onClick={() => onFilterChange({ buyExchanges: [], sellExchanges: [] })}
                      className="text-[10px] text-amber-400 hover:underline flex items-center gap-1 font-mono cursor-pointer"
                    >
                      <RotateCcw className="w-2.5 h-2.5" /> Reset
                    </button>
                  )}
                </div>

                {/* Search Bar for Exchanges */}
                <div className="relative mb-2">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500" />
                  <input
                    type="text"
                    value={exchangeSearch}
                    onChange={(e) => setExchangeSearch(e.target.value)}
                    placeholder="Search exchange name..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-7 pr-2.5 py-1 text-[11px] text-white placeholder-slate-500 outline-none focus:border-emerald-500/60 font-sans"
                  />
                </div>

                {/* Exchange Checklist Grid */}
                <div className="grid grid-cols-2 gap-1 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                  {filteredExchangesList.map((ex) => {
                    const active = isExchangeActive(ex.id);
                    return (
                      <button
                        key={ex.id}
                        onClick={() => handleToggleExchange(ex.id)}
                        className={`flex items-center justify-between p-1.5 rounded-lg text-[11px] font-medium border transition-all cursor-pointer ${
                          active
                            ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                            : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span className="truncate">{ex.name}</span>
                        <div
                          className={`w-3.5 h-3.5 rounded flex items-center justify-center border text-[9px] ${
                            active
                              ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold'
                              : 'border-slate-700 bg-slate-950'
                          }`}
                        >
                          {active && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Token Tier Filter Selector (All, Small & Micro, Major) */}
          <div className="flex items-center bg-slate-950/80 border border-white/10 rounded-lg p-0.5 text-xs">
            <button
              onClick={() => onFilterChange({ tokenTier: 'ALL' })}
              className={`px-2 py-1 rounded-md font-medium transition-all cursor-pointer ${
                !filter.tokenTier || filter.tokenTier === 'ALL'
                  ? 'bg-emerald-500/20 text-emerald-300 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => onFilterChange({ tokenTier: 'SMALL_MICRO' })}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
                filter.tokenTier === 'SMALL_MICRO'
                  ? 'bg-amber-500/25 text-amber-300 font-semibold border border-amber-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-amber-300'
              }`}
              title="Show only small-cap and micro-cap tokens"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Small / Micro</span>
            </button>
            <button
              onClick={() => onFilterChange({ tokenTier: 'MAJOR' })}
              className={`px-2 py-1 rounded-md font-medium transition-all cursor-pointer ${
                filter.tokenTier === 'MAJOR'
                  ? 'bg-sky-500/20 text-sky-300 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Show only major large-cap coins"
            >
              Major
            </button>
          </div>

          {/* Open Deposit/Withdraw Only Toggle */}
          <button
            onClick={() => onFilterChange({ openStatusOnly: !filter.openStatusOnly })}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
              filter.openStatusOnly
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm'
                : 'bg-slate-950/80 text-slate-400 border-white/10 hover:text-slate-200 hover:border-white/20'
            }`}
          >
            <CheckCircle2 className={`w-3.5 h-3.5 ${filter.openStatusOnly ? 'text-emerald-400' : 'text-slate-500'}`} />
            <span>Open D/W Only</span>
          </button>

          {/* Contract Match Only Toggle */}
          <button
            onClick={() => onFilterChange({ contractVerifiedOnly: !filter.contractVerifiedOnly })}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
              filter.contractVerifiedOnly
                ? 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm'
                : 'bg-slate-950/80 text-slate-400 border-white/10 hover:text-slate-200 hover:border-white/20'
            }`}
          >
            <ShieldCheck className={`w-3.5 h-3.5 ${filter.contractVerifiedOnly ? 'text-sky-400' : 'text-slate-500'}`} />
            <span>Contract Verified</span>
          </button>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-1 bg-slate-950/80 border border-white/10 rounded-lg px-2 py-1 text-xs text-slate-300">
            <ArrowUpDown className="w-3 h-3 text-slate-400" />
            <select
              value={filter.sortBy}
              onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
              className="bg-transparent text-xs text-slate-200 outline-none cursor-pointer pr-1"
            >
              <option value="spread" className="bg-slate-900">Sort: Gross Spread %</option>
              <option value="profit" className="bg-slate-900">Sort: Profit / $1k USDT</option>
              <option value="symbol" className="bg-slate-900">Sort: Coin Symbol</option>
              <option value="buyPrice" className="bg-slate-900">Sort: Buy Price ($)</option>
            </select>
          </div>

          {/* Refresh Matrix Button */}
          {onRefresh && (
            <button
              onClick={onRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition-all cursor-pointer shadow-sm disabled:opacity-50"
              title="Refresh Spot Matrix arbitrage opportunities"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-emerald-400' : ''}`} />
              <span>{isRefreshing ? 'Refreshing...' : 'Refresh Matrix'}</span>
            </button>
          )}

          {/* View Mode Switcher */}
          <div className="flex items-center gap-0.5 bg-slate-950/80 p-0.5 rounded-lg border border-white/10 ml-auto lg:ml-1">
            <button
              onClick={() => onViewModeChange('cards')}
              title="Card Grid View"
              className={`p-1 rounded-md transition-all ${
                viewMode === 'cards'
                  ? 'bg-white/15 text-emerald-400 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onViewModeChange('table')}
              title="Compact Table View"
              className={`p-1 rounded-md transition-all ${
                viewMode === 'table'
                  ? 'bg-white/15 text-emerald-400 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row: Min & Max Spread Presets + Results Counter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 pt-1.5 border-t border-white/5">
        <div className="flex flex-wrap items-center gap-3">
          {/* Min Spread Filter */}
          <div className="flex items-center gap-1">
            <span className="text-[11px] text-slate-400 font-medium flex items-center gap-0.5">
              <SlidersHorizontal className="w-3 h-3 text-amber-400" />
              Min:
            </span>
            <div className="flex items-center gap-1">
              {minSpreadPresets.map((val) => (
                <button
                  key={val}
                  onClick={() => handleMinSpreadChange(val)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-medium transition-all cursor-pointer ${
                    (filter.minSpread === val || (val === 0 && (!filter.minSpread || filter.minSpread === 0)))
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm font-bold'
                      : 'bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-white/10'
                  }`}
                >
                  {val === 0 ? 'All' : `>${val}%`}
                </button>
              ))}
            </div>
          </div>

          {/* Max Spread % Filter */}
          <div className="flex items-center gap-1">
            <span className="text-[11px] text-slate-400 font-medium flex items-center gap-0.5">
              <SlidersHorizontal className="w-3 h-3 text-rose-400" />
              Max:
            </span>
            <div className="flex items-center gap-1">
              {maxSpreadPresets.map((val) => (
                <button
                  key={val}
                  onClick={() => handleMaxSpreadChange(val)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-medium transition-all cursor-pointer ${
                    (filter.maxSpread === val || (val === 0 && (!filter.maxSpread || filter.maxSpread === 0)))
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm font-bold'
                      : 'bg-slate-950/80 text-slate-400 hover:text-slate-200 border border-white/10'
                  }`}
                >
                  {val === 0 ? 'All' : `<${val}%`}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 font-mono self-end sm:self-auto">
          Showing <span className="text-emerald-400 font-bold">{resultCount}</span> opportunities
        </div>
      </div>
    </div>
  );
};
