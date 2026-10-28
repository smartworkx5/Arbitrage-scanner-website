const fs = require('fs');

let code = fs.readFileSync('src/components/MoversTab.tsx', 'utf8');

// Add import for CexDexCard
code = code.replace(
  "import { OpportunityCard } from './OpportunityCard';",
  "import { OpportunityCard } from './OpportunityCard';\nimport { CexDexCard } from './CexDexCard';"
);

// We need to render CexDexCard when `g.oppType === 'DEX'`
code = code.replace(
  `                    <OpportunityCard
                      opp={g.opp}
                      onOpenCalculator={onOpenCalculator}
                      onOpenDetail={onOpenDetail}
                      isSaved={savedIds.has(g.opp.id)}
                      onToggleSave={onToggleSave}
                    />`,
  `                    {g.oppType === 'DEX' ? (
                      <CexDexCard
                        opp={g.opp}
                        onOpenCalculator={onOpenCalculator}
                        isSaved={savedIds.has(g.opp.id)}
                        onToggleSave={onToggleSave}
                      />
                    ) : (
                      <OpportunityCard
                        opp={g.opp}
                        onOpenCalculator={onOpenCalculator}
                        onOpenDetail={onOpenDetail}
                        isSaved={savedIds.has(g.opp.id)}
                        onToggleSave={onToggleSave}
                      />
                    )}`
);

code = code.replace(
  `                    <OpportunityCard
                      opp={l.opp}
                      onOpenCalculator={onOpenCalculator}
                      onOpenDetail={onOpenDetail}
                      isSaved={savedIds.has(l.opp.id)}
                      onToggleSave={onToggleSave}
                    />`,
  `                    {l.oppType === 'DEX' ? (
                      <CexDexCard
                        opp={l.opp}
                        onOpenCalculator={onOpenCalculator}
                        isSaved={savedIds.has(l.opp.id)}
                        onToggleSave={onToggleSave}
                      />
                    ) : (
                      <OpportunityCard
                        opp={l.opp}
                        onOpenCalculator={onOpenCalculator}
                        onOpenDetail={onOpenDetail}
                        isSaved={savedIds.has(l.opp.id)}
                        onToggleSave={onToggleSave}
                      />
                    )}`
);

// We also need to fix the banner message for DEX vs CEX
code = code.replace(
  `                        Arbitrage Found: Buy on {g.opp.buyExchangeName}
                      </span>`,
  `                        Arbitrage Found: Buy on {g.oppType === 'DEX' ? g.opp.buyDexName || 'DEX' : g.opp.buyExchangeName}
                      </span>`
);

code = code.replace(
  `                        Arbitrage Found: Sell on {l.opp.sellExchangeName}
                      </span>`,
  `                        Arbitrage Found: Sell on {l.oppType === 'DEX' ? l.opp.sellDexName || 'DEX' : l.opp.sellExchangeName}
                      </span>`
);


fs.writeFileSync('src/components/MoversTab.tsx', code);
