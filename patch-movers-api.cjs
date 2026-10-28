const fs = require('fs');

let code = fs.readFileSync('server.ts', 'utf8');

const newRoute = `
  // Get Exchange Top Movers & Arbitrage Opportunities
  app.get('/api/exchange-movers/:exchangeId', (req, res) => {
    try {
      const exchangeId = req.params.exchangeId;
      const limit = parseInt((req.query.limit || 20).toString(), 10);
      const data = scannerEngine.getExchangeMovers(exchangeId, limit);
      
      const dexOpps = cexDexScannerEngine.getFilteredOpportunities({});
      
      const attachBestOpp = (item: any, isGainer: boolean) => {
        const baseSymbol = item.symbol.endsWith('USDT') ? item.symbol.slice(0, -4) : item.symbol;
        let bestCexOpp = item.opp;
        let bestDexOpp;

        if (isGainer) {
          // Gainer: price is high on exchangeId. We SELL on exchangeId. So we BUY elsewhere (DEX or another CEX).
          bestDexOpp = dexOpps.find(o => o.symbol === baseSymbol && o.sellExchangeId === exchangeId);
        } else {
          // Loser: price is low on exchangeId. We BUY on exchangeId. So we SELL elsewhere.
          bestDexOpp = dexOpps.find(o => o.symbol === baseSymbol && o.buyExchangeId === exchangeId);
        }

        if (bestCexOpp) bestCexOpp.isDex = false;
        if (bestDexOpp) bestDexOpp.isDex = true;

        if (bestDexOpp && bestCexOpp) {
          if (bestDexOpp.grossSpreadPercent > bestCexOpp.spreadPercent) {
            item.opp = bestDexOpp;
            item.oppType = 'DEX';
          } else {
            item.opp = bestCexOpp;
            item.oppType = 'CEX';
          }
        } else if (bestDexOpp) {
          item.opp = bestDexOpp;
          item.oppType = 'DEX';
        } else if (bestCexOpp) {
          item.opp = bestCexOpp;
          item.oppType = 'CEX';
        }
      };

      data.gainers.forEach(g => attachBestOpp(g, true));
      data.losers.forEach(l => attachBestOpp(l, false));

      res.json(data);
    } catch (err: any) {
      res.status(500).json({ error: err?.message || 'Failed to get exchange movers' });
    }
  });
`;

// Replace the existing route
const regex = /\/\/ Get Exchange Top Movers & Arbitrage Opportunities[\s\S]*?res\.status\(500\)\.json\(\{ error: err\?\.message \|\| 'Failed to get exchange movers' \}\);\n    \}\n  \}\);/m;
code = code.replace(regex, newRoute.trim());

fs.writeFileSync('server.ts', code);
