import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, Share2, PlusSquare, X, CheckCircle2 } from 'lucide-react';

export const PWAInstallButton: React.FC<{ variant?: 'header' | 'floating' | 'sidebar' }> = ({ variant = 'header' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  // If already running as an installed PWA (standalone window)
  if (isInstalled) {
    return (
      <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 rounded-lg">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span>Installed</span>
      </div>
    );
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      setIsInstalling(true);
      try {
        await install();
      } finally {
        setIsInstalling(false);
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      // Fallback for browsers that don't emit beforeinstallprompt yet
      setShowIOSGuide(true);
    }
  };

  return (
    <>
      <button
        id="pwa-install-btn"
        onClick={handleInstallClick}
        disabled={isInstalling}
        title="Install Crypto Arbitrage Terminal as Desktop / Mobile App"
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 hover:border-emerald-400 rounded-lg transition-all shadow-sm hover:shadow-emerald-500/20 active:scale-95 cursor-pointer"
      >
        <Download className={`w-3.5 h-3.5 ${isInstalling ? 'animate-bounce text-emerald-200' : 'text-emerald-400'}`} />
        <span>{isInstalling ? 'Installing...' : 'Install App'}</span>
      </button>

      {/* iOS / General Installation Guide Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700/80 p-6 shadow-2xl relative text-left">
            <button
              onClick={() => setShowIOSGuide(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Install Crypto Arbitrage Matrix</h3>
                <p className="text-xs text-slate-400">Run standalone with instant zero-lag desktop/mobile experience</p>
              </div>
            </div>

            <div className="space-y-3 my-4 text-xs text-slate-300">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/50 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 mt-0.5">
                  <Share2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-200">On iPhone / iPad (Safari):</p>
                  <p className="text-slate-400 mt-0.5">
                    1. Tap the <strong className="text-white">Share</strong> button in Safari toolbar.<br />
                    2. Scroll down and tap <strong className="text-emerald-400">Add to Home Screen</strong> <PlusSquare className="w-3.5 h-3.5 inline ml-1 text-emerald-400" />.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/50 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 mt-0.5">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-200">On Chrome / Edge / Android:</p>
                  <p className="text-slate-400 mt-0.5">
                    Click the <strong className="text-emerald-400">Install icon</strong> in your browser's address bar (or menu &gt; Install App).
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="mt-2 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition border border-slate-600"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export const OfflineIndicator: React.FC = () => {
  const { isOnline } = usePWAInstall() as any;
  const online = typeof navigator !== 'undefined' ? navigator.onLine : true;

  if (online) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-lg bg-amber-500/90 text-slate-950 font-semibold px-3 py-1.5 text-xs shadow-xl border border-amber-300 backdrop-blur-xs animate-pulse">
      <span className="h-2 w-2 rounded-full bg-slate-950" />
      <span>Offline Mode — Using cached ticker data</span>
    </div>
  );
};
