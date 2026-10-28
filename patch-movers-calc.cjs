const fs = require('fs');

let code = fs.readFileSync('src/components/MoversTab.tsx', 'utf8');

code = code.replace(
  "import { CexDexCard } from './CexDexCard';",
  "import { CexDexCard } from './CexDexCard';\nimport { CexDexCalculatorModal } from './CexDexCalculatorModal';\nimport { CexDexArbitrageOpportunity } from '../types';"
);

code = code.replace(
  "  const [loading, setLoading] = useState(false);",
  "  const [loading, setLoading] = useState(false);\n  const [selectedCexDexCalcOpp, setSelectedCexDexCalcOpp] = useState<CexDexArbitrageOpportunity | null>(null);"
);

code = code.replace(
  `                      <CexDexCard
                        opp={g.opp}
                        onOpenCalculator={onOpenCalculator}
                        isSaved={savedIds.has(g.opp.id)}
                        onToggleSave={onToggleSave}
                      />`,
  `                      <CexDexCard
                        opp={g.opp}
                        onOpenCalculator={(o) => setSelectedCexDexCalcOpp(o)}
                        isSaved={savedIds.has(g.opp.id)}
                        onToggleSave={onToggleSave}
                      />`
);

code = code.replace(
  `                      <CexDexCard
                        opp={l.opp}
                        onOpenCalculator={onOpenCalculator}
                        isSaved={savedIds.has(l.opp.id)}
                        onToggleSave={onToggleSave}
                      />`,
  `                      <CexDexCard
                        opp={l.opp}
                        onOpenCalculator={(o) => setSelectedCexDexCalcOpp(o)}
                        isSaved={savedIds.has(l.opp.id)}
                        onToggleSave={onToggleSave}
                      />`
);

const modalCode = `
      {selectedCexDexCalcOpp && (
        <CexDexCalculatorModal
          opp={selectedCexDexCalcOpp}
          onClose={() => setSelectedCexDexCalcOpp(null)}
        />
      )}
    </div>
`;

code = code.replace(
  "    </div>\n  );\n};",
  modalCode + "\n  );\n};"
);

fs.writeFileSync('src/components/MoversTab.tsx', code);
