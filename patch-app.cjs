const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  "import { ExchangeSpreadTab } from './components/ExchangeSpreadTab';",
  "import { ExchangeSpreadTab } from './components/ExchangeSpreadTab';\nimport { MoversTab } from './components/MoversTab';"
);

code = code.replace(
  "const [activeTab, setActiveTab] = useState<'scanner' | 'cexdex' | 'spread' | 'exchanges' | 'watchlist'>('scanner');",
  "const [activeTab, setActiveTab] = useState<'scanner' | 'cexdex' | 'spread' | 'movers' | 'exchanges' | 'watchlist'>('scanner');"
);

const moversContent = `
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
`;

code = code.replace(
  "            {/* TAB CONTENT: EXCHANGE HEALTH */}",
  moversContent + "\n            {/* TAB CONTENT: EXCHANGE HEALTH */}"
);

fs.writeFileSync('src/App.tsx', code);
