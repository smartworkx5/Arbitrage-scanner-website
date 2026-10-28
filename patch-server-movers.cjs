const fs = require('fs');

let code = fs.readFileSync('server.ts', 'utf8');

// The file might be named server.ts, wait, the root one is just server.ts. Let's check `package.json` for start script to be sure.
// Wait, the path is `server.ts`.

const newRoute = `
  // Get Exchange Top Movers & Arbitrage Opportunities
  app.get('/api/exchange-movers/:exchangeId', (req, res) => {
    try {
      const exchangeId = req.params.exchangeId;
      const limit = parseInt((req.query.limit || 20).toString(), 10);
      const data = scannerEngine.getExchangeMovers(exchangeId, limit);
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ error: err?.message || 'Failed to get exchange movers' });
    }
  });
`;

code = code.replace(
  "  // Trigger manual immediate rescan",
  newRoute + "\n  // Trigger manual immediate rescan"
);

fs.writeFileSync('server.ts', code);
