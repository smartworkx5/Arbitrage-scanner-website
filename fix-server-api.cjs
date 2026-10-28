const fs = require('fs');

let code = fs.readFileSync('server.ts', 'utf8');

const replacement = `
        if (isGainer) {
          // Gainer: price is high on exchangeId. We SELL on exchangeId. So we BUY elsewhere (DEX or another CEX).
          bestDexOpp = dexOpps.find(o => o.baseSymbol === baseSymbol && o.cexId === exchangeId && o.direction === 'DEX_TO_CEX');
        } else {
          // Loser: price is low on exchangeId. We BUY on exchangeId. So we SELL elsewhere.
          bestDexOpp = dexOpps.find(o => o.baseSymbol === baseSymbol && o.cexId === exchangeId && o.direction === 'CEX_TO_DEX');
        }
`;

code = code.replace(
  /        if \(isGainer\) \{[\s\S]*?else \{[\s\S]*?buyExchangeId === exchangeId\);[\s\S]*?\}/m,
  replacement.trim()
);

fs.writeFileSync('server.ts', code);
