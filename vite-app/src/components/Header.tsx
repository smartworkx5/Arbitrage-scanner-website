import React from 'react';
import { RefreshCw, Activity, ShieldCheck, Zap, Bell, Volume2, VolumeX, Key, ArrowRightLeft, Layers, Sparkles, Percent, TrendingUp, Cpu } from 'lucide-react';
import { ScanResultSummary } from '../types';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  summary: ScanResultSummary | null;
  isScanning: boolean;
  onScanNow: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  activeTab: 'scanner' | 'cexdex' | 'spread' | 'triangular' | 'funding' | 'exchanges' | 'watchlist';
  setActiveTab: (tab: 'scanner' | 'cexdex' | 'spread' | 'triangular' | 'funding' | 'exchanges' | 'watchlist') => void;
  savedCount: number;
  onOpenApiModal?: () => void;
  cexDexCount?: number;
  apiConnected?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  summary,
  isScanning,
  onScanNow,
  soundEnabled,
  onToggleSound,
  activeTab,
  setActiveTab,
  savedCount,
  onOpenApiModal,
  cexDexCount,
  apiConnected = true,
}) => {
  const formattedTime = summary?.timestamp
    ? new Date(summary.timestamp).toLocaleTimeString()
    : 'Never';

  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 text-white px-3 sm:px-6 py-2 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 w-full">
        {/* Logo & Tagline */}
        <div className="flex items-center gap-2.5 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-md shadow-emerald-500/20">
              <div className="w-full h-full bg-slate-950/90 rounded-[6px] flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-sm font-extrabold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight leading-none">
                  ARBITRAGE MATRIX
                </h1>
                <span className="text-[9px] uppercase font-mono px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  {summary?.totalExchanges || 15} EXCHANGES
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Action buttons */}
          <div className="flex items-center gap-1.5 md:hidden">
            <PWAInstallButton variant="header" />
            {onOpenApiModal && (
              <button
                onClick={onOpenApiModal}
                title="Gemini API Key Connection"
                className={`p-1.5 rounded-lg border text-xs cursor-pointer ${
                  apiConnected
                    ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                    : 'bg-slate-900 border-amber-500/30 text-amber-300'
                }`}
              >
                <Cpu className={`w-3.5 h-3.5 ${apiConnected ? 'text-emerald-400' : 'text-amber-400'}`} />
              </button>
            )}
            <button
              onClick={onScanNow}
              disabled={isScanning}
              className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white transition-all shadow cursor-pointer"
            >
              <RefreshCw className={`w-3 h-3 ${isScanning ? 'animate-spin' : ''}`} />
              {isScanning ? 'Scanning...' : 'Scan'}
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-0.5 rounded-lg border border-white/10 w-full md:w-auto overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button
            onClick={() => setActiveTab('scanner')}
            className={`shrink-0 whitespace-nowrap flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'scanner'
                ? 'bg-white/15 text-white shadow-sm font-semibold border border-white/10'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Spot Matrix</span>
          </button>

          <button
            onClick={() => setActiveTab('cexdex')}
            className={`shrink-0 whitespace-nowrap flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'cexdex'
                ? 'bg-gradient-to-r from-emerald-500/30 to-indigo-500/30 text-white shadow-sm font-semibold border border-emerald-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ArrowRightLeft className="w-3.5 h-3.5 text-teal-400" />
            <span>CEX vs DEX</span>
            {cexDexCount !== undefined && cexDexCount > 0 && (
              <span className="text-[9px] px-1.5 py-0.2 bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-full font-mono font-bold">
                {cexDexCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('spread')}
            className={`shrink-0 whitespace-nowrap flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'spread'
                ? 'bg-gradient-to-r from-emerald-500/30 to-teal-500/30 text-white shadow-sm font-semibold border border-emerald-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Spread</span>
          </button>


          <button
            onClick={() => setActiveTab('movers')}
            className={`shrink-0 whitespace-nowrap flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'movers'
                ? 'bg-gradient-to-r from-orange-500/30 to-rose-500/30 text-white shadow-sm font-semibold border border-orange-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
            <span>Top Movers</span>
          </button>

          <button
            onClick={() => setActiveTab('exchanges')}
            className={`shrink-0 whitespace-nowrap flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'exchanges'
                ? 'bg-white/15 text-white shadow-sm font-semibold border border-white/10'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Exchanges</span>
          </button>

          <button
            onClick={() => setActiveTab('watchlist')}
            className={`shrink-0 whitespace-nowrap flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'watchlist'
                ? 'bg-white/15 text-white shadow-sm font-semibold border border-white/10'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bell className="w-3.5 h-3.5 text-amber-400" />
            <span>Watchlist</span>
            {savedCount > 0 && (
              <span className="text-[9px] px-1 py-0.2 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full font-mono font-bold">
                {savedCount}
              </span>
            )}
          </button>
        </div>

        {/* Right side controls: API Key Button, Scan Status, Mute & Scan Now */}
        <div className="hidden md:flex items-center gap-2">
          {/* API Key Setup Button */}
          {onOpenApiModal && (
            <button
              onClick={onOpenApiModal}
              title="Gemini API Key Connection"
              className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg border transition-all cursor-pointer shadow-sm ${
                apiConnected
                  ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/50'
                  : 'bg-slate-900 border-amber-500/30 hover:border-amber-500/60 text-amber-300 hover:bg-amber-500/10'
              }`}
            >
              <Cpu className={`w-3 h-3 ${apiConnected ? 'text-emerald-400' : 'text-amber-400'}`} />
              <span>{apiConnected ? 'Gemini API: Connected' : 'Gemini API Key'}</span>
              {apiConnected && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              )}
            </button>
          )}

          {/* Last Scan indicator */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-white/10">
            <span className="relative flex h-1.5 w-1.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isScanning ? 'bg-amber-400' : 'bg-emerald-400'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isScanning ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
            </span>
            <span className="font-mono text-slate-300">
              {formattedTime}
            </span>
          </div>

          {/* Sound Alert Toggle */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Mute audio alerts' : 'Enable audio alerts for high spreads'}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
              soundEnabled
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
                : 'bg-slate-900 text-slate-400 border-white/10 hover:text-slate-200'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* PWA Install Button */}
          <PWAInstallButton variant="header" />

          {/* Scan Now Button */}
          <button
            onClick={onScanNow}
            disabled={isScanning}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white shadow shadow-emerald-600/20 transition-all cursor-pointer border border-white/20 active:scale-95"
          >
            <RefreshCw className={`w-3 h-3 ${isScanning ? 'animate-spin' : ''}`} />
            <span>{isScanning ? 'Scanning...' : 'Scan Now'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
