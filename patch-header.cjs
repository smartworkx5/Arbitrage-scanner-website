const fs = require('fs');
let code = fs.readFileSync('src/components/Header.tsx', 'utf8');

code = code.replace(
  "import { Activity, Bell, Layers, Zap, Settings, ArrowRightLeft, ShieldCheck, RefreshCw, Smartphone, Percent, Sparkles, Fuel, LogOut, Wallet } from 'lucide-react';",
  "import { Activity, Bell, Layers, Zap, Settings, ArrowRightLeft, ShieldCheck, RefreshCw, Smartphone, Percent, Sparkles, Fuel, LogOut, Wallet, TrendingUp } from 'lucide-react';"
);

// We should also add it to `activeTab` props typing
code = code.replace(
  "  activeTab: 'scanner' | 'cexdex' | 'spread' | 'exchanges' | 'watchlist';",
  "  activeTab: 'scanner' | 'cexdex' | 'spread' | 'movers' | 'exchanges' | 'watchlist';"
);

code = code.replace(
  "  setActiveTab: (tab: 'scanner' | 'cexdex' | 'spread' | 'exchanges' | 'watchlist') => void;",
  "  setActiveTab: (tab: 'scanner' | 'cexdex' | 'spread' | 'movers' | 'exchanges' | 'watchlist') => void;"
);

const moversButton = `
          <button
            onClick={() => setActiveTab('movers')}
            className={\`shrink-0 whitespace-nowrap flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer \${
              activeTab === 'movers'
                ? 'bg-gradient-to-r from-orange-500/30 to-rose-500/30 text-white shadow-sm font-semibold border border-orange-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }\`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
            <span>Top Movers</span>
          </button>
`;

code = code.replace(
  "          <button\n            onClick={() => setActiveTab('exchanges')}",
  moversButton + "\n          <button\n            onClick={() => setActiveTab('exchanges')}"
);

fs.writeFileSync('src/components/Header.tsx', code);
