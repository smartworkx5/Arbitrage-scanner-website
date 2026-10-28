const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

// We need to import fetchL2OrderBookTopLevel
code = code.replace(
  "import { cexDexScannerEngine } from './src/server/dexScanner';",
  "import { cexDexScannerEngine } from './src/server/dexScanner';\nimport { fetchL2OrderBookTopLevel } from './src/server/exchanges';"
);

// We need to make the route async
const newRoute = `
  // Get Exchange Top Movers & Arbitrage Opportunities
  app.get('/api/exchange-movers/:exchangeId', async (req, res) => {
    try {
      const exchangeId = req.params.exchangeId;
      const limit = parseInt((req.query.limit || 20).toString(), 10);
      const data = scannerEngine.getExchangeMovers(exchangeId, limit);
      
      const dexOpps = cexDexScannerEngine.getFilteredOpportunities({});
      
      const attachBestOpp = async (item: any, isGainer: boolean) => {
        const baseSymbol = item.symbol.endsWith('USDT') ? item.symbol.slice(0, -4) : item.symbol;
        let bestCexOpp = item.opp;
        let bestDexOpp;

        if (isGainer) {
          bestDexOpp = dexOpps.find(o => o.baseSymbol === baseSymbol && o.cexId === exchangeId && o.direction === 'DEX_TO_CEX');
        } else {
          bestDexOpp = dexOpps.find(o => o.baseSymbol === baseSymbol && o.cexId === exchangeId && o.direction === 'CEX_TO_DEX');
        }

        if (bestCexOpp) bestCexOpp.isDex = false;
        if (bestDexOpp) bestDexOpp.isDex = true;

        let targetOpp = null;
        if (bestDexOpp && bestCexOpp) {
          if (bestDexOpp.grossSpreadPercent > bestCexOpp.spreadPercent) {
             targetOpp = bestDexOpp; item.oppType = 'DEX';
          } else {
             targetOpp = bestCexOpp; item.oppType = 'CEX';
          }
        } else if (bestDexOpp) {
           targetOpp = bestDexOpp; item.oppType = 'DEX';
        } else if (bestCexOpp) {
           targetOpp = bestCexOpp; item.oppType = 'CEX';
        }
        item.opp = targetOpp;
        
        // Fetch L2 if needed
        if (targetOpp) {
           if (item.oppType === 'CEX') {
              if (targetOpp.buyAskTokenVolume === undefined) {
                 const l2 = await fetchL2OrderBookTopLevel(targetOpp.buyExchange, targetOpp.symbol).catch(() => null);
                 if (l2 && l2.askQty) {
                    targetOpp.buyAskTokenVolume = l2.askQty;
                    targetOpp.buyAskUsdtVolume = Math.round(targetOpp.buyPrice * l2.askQty * 100) / 100;
                 }
              }
              if (targetOpp.sellBidTokenVolume === undefined) {
                 const l2 = await fetchL2OrderBookTopLevel(targetOpp.sellExchange, targetOpp.symbol).catch(() => null);
                 if (l2 && l2.bidQty) {
                    targetOpp.sellBidTokenVolume = l2.bidQty;
                    targetOpp.sellBidUsdtVolume = Math.round(targetOpp.sellPrice * l2.bidQty * 100) / 100;
                 }
              }
           } else if (item.oppType === 'DEX') {
              if (targetOpp.cexVolumeToken === undefined) {
                 const l2 = await fetchL2OrderBookTopLevel(targetOpp.cexId, targetOpp.symbol).catch(() => null);
                 if (l2) {
                    if (targetOpp.direction === 'CEX_TO_DEX' && l2.askQty) {
                       targetOpp.cexVolumeToken = l2.askQty;
                       targetOpp.cexVolumeUsd = Math.round(targetOpp.cexBuyPrice * l2.askQty * 100) / 100;
                    } else if (targetOpp.direction === 'DEX_TO_CEX' && l2.bidQty) {
                       targetOpp.cexVolumeToken = l2.bidQty;
                       targetOpp.cexVolumeUsd = Math.round(targetOpp.cexSellPrice * l2.bidQty * 100) / 100;
                    }
                 }
              }
           }
        }
      };

      const promises = [];
      data.gainers.forEach(g => promises.push(attachBestOpp(g, true)));
      data.losers.forEach(l => promises.push(attachBestOpp(l, false)));
      await Promise.all(promises);

      res.json(data);
    } catch (err: any) {
      res.status(500).json({ error: err?.message || 'Failed to get exchange movers' });
    }
  });
`;

const regex = /\/\/ Get Exchange Top Movers & Arbitrage Opportunities[\s\S]*?res\.status\(500\)\.json\(\{ error: err\?\.message \|\| 'Failed to get exchange movers' \}\);\n    \}\n  \}\);/m;
code = code.replace(regex, newRoute.trim());

fs.writeFileSync('server.ts', code);
