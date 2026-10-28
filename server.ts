import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { scannerEngine, normalizeExchangeId } from './src/server/scanner';
import { cexDexScannerEngine } from './src/server/dexScanner';
import { fetchL2OrderBookTopLevel, EXCHANGES } from './src/server/exchanges';
import { apiKeyService } from './src/server/apiKeyService';

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // CORS headers for API
  app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    next();
  });

  // ---------------------------------------------------------------------------
  // REST API Routes
  // ---------------------------------------------------------------------------

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', time: Date.now() });
  });

  // Get scanner summary & stats
  app.get('/api/summary', async (_req, res) => {
    try {
      await scannerEngine.waitForReady(3000);
      res.json(scannerEngine.getSummary());
    } catch (err: any) {
      res.status(500).json({ error: err?.message || 'Failed to get summary' });
    }
  });

  // Get exchange metadata & latencies
  app.get('/api/exchanges', async (_req, res) => {
    try {
      await scannerEngine.waitForReady(3500);
      res.json(scannerEngine.getExchangeMetas());
    } catch (err: any) {
      res.status(500).json({ error: err?.message || 'Failed to get exchange metadata' });
    }
  });

  // Batched endpoint for initial load: combines Arbitrage, Exchanges, and CEX-DEX opportunities in 1 roundtrip
  app.get('/api/batch', async (req, res) => {
    try {
      await scannerEngine.waitForReady(3500);
      const search = req.query.search as string;
      const minSpread = req.query.minSpread ? parseFloat(req.query.minSpread as string) : undefined;
      const maxSpread = req.query.maxSpread ? parseFloat(req.query.maxSpread as string) : undefined;
      const openStatusOnly = req.query.openStatusOnly === 'true';
      const contractVerifiedOnly = req.query.contractVerifiedOnly === 'true';
      const tokenTier = req.query.tokenTier as 'ALL' | 'SMALL_MICRO' | 'MAJOR' | undefined;
      const sortBy = req.query.sortBy as 'spread' | 'profit' | 'symbol' | 'buyPrice';
      const sortOrder = req.query.sortOrder as 'asc' | 'desc';
      
      let buyExchanges: string[] | undefined;
      if (req.query.buyExchanges) {
        buyExchanges = (req.query.buyExchanges as string).split(',');
      }

      let sellExchanges: string[] | undefined;
      if (req.query.sellExchanges) {
        sellExchanges = (req.query.sellExchanges as string).split(',');
      }

      const opportunities = scannerEngine.getFilteredOpportunities({
        search,
        minSpread,
        maxSpread,
        openStatusOnly,
        contractVerifiedOnly,
        tokenTier,
        buyExchanges,
        sellExchanges,
        sortBy,
        sortOrder,
      });

      const exchanges = scannerEngine.getExchangeMetas();

      const cexDexOpps = cexDexScannerEngine.getFilteredOpportunities({
        search,
        tokenTier,
      });

      res.json({
        arbitrage: {
          summary: scannerEngine.getSummary(),
          count: opportunities.length,
          opportunities,
        },
        exchanges,
        cexDex: {
          summary: cexDexScannerEngine.getSummary(),
          count: cexDexOpps.length,
          opportunities: cexDexOpps,
        },
        timestamp: Date.now(),
      });
    } catch (err: any) {
      res.status(500).json({ error: err?.message || 'Failed to get batched initial data' });
    }
  });

  // Get filtered arbitrage opportunities
  app.get('/api/arbitrage', async (req, res) => {
    try {
      await scannerEngine.waitForReady(4000);
      const search = req.query.search as string;
      const minSpread = req.query.minSpread ? parseFloat(req.query.minSpread as string) : undefined;
      const maxSpread = req.query.maxSpread ? parseFloat(req.query.maxSpread as string) : undefined;
      const openStatusOnly = req.query.openStatusOnly === 'true';
      const contractVerifiedOnly = req.query.contractVerifiedOnly === 'true';
      const tokenTier = req.query.tokenTier as 'ALL' | 'SMALL_MICRO' | 'MAJOR' | undefined;
      const sortBy = req.query.sortBy as 'spread' | 'profit' | 'symbol' | 'buyPrice';
      const sortOrder = req.query.sortOrder as 'asc' | 'desc';
      
      let buyExchanges: string[] | undefined;
      if (req.query.buyExchanges) {
        buyExchanges = (req.query.buyExchanges as string).split(',');
      }

      let sellExchanges: string[] | undefined;
      if (req.query.sellExchanges) {
        sellExchanges = (req.query.sellExchanges as string).split(',');
      }

      const opportunities = scannerEngine.getFilteredOpportunities({
        search,
        minSpread,
        maxSpread,
        openStatusOnly,
        contractVerifiedOnly,
        tokenTier,
        buyExchanges,
        sellExchanges,
        sortBy,
        sortOrder,
      });

      res.json({
        summary: scannerEngine.getSummary(),
        count: opportunities.length,
        opportunities,
      });
    } catch (err: any) {
      res.status(500).json({ error: err?.message || 'Failed to get arbitrage opportunities' });
    }
  });

  // Get CEX vs DEX Arbitrage Opportunities
  app.get('/api/cex-dex-arbitrage', (req, res) => {
    try {
      const search = req.query.search as string;
      const direction = req.query.direction as 'ALL' | 'CEX_TO_DEX' | 'DEX_TO_CEX';
      const chain = req.query.chain as string;
      const dex = req.query.dex as string;
      const cex = req.query.cex as string;
      const minSpread = req.query.minSpread ? parseFloat(req.query.minSpread as string) : undefined;
      const minDexLiquidity = req.query.minDexLiquidity ? parseFloat(req.query.minDexLiquidity as string) : undefined;
      const verifiedOnly = req.query.verifiedOnly === 'true';
      const tokenTier = req.query.tokenTier as 'ALL' | 'SMALL_MICRO' | 'MAJOR';
      const sortBy = req.query.sortBy as 'spread' | 'profit' | 'liquidity' | 'dexVolume' | 'symbol';
      const sortOrder = req.query.sortOrder as 'asc' | 'desc';

      const opportunities = cexDexScannerEngine.getFilteredOpportunities({
        search,
        direction,
        chain,
        dex,
        cex,
        tokenTier,
        minSpread,
        minDexLiquidity,
        verifiedOnly,
        sortBy,
        sortOrder,
      });

      res.json({
        summary: cexDexScannerEngine.getSummary(),
        count: opportunities.length,
        opportunities,
      });
    } catch (err: any) {
      res.status(500).json({ error: err?.message || 'Failed to get CEX vs DEX arbitrage opportunities' });
    }
  });

  // Get deep details for a specific pair
  app.get('/api/symbol/:symbol', (req, res) => {
    try {
      const detail = scannerEngine.getSymbolDetail(req.params.symbol);
      res.json(detail);
    } catch (err: any) {
      res.status(500).json({ error: err?.message || 'Failed to get symbol details' });
    }
  });

  // Get Spreads of Tokens on a Selected Exchange
  app.get('/api/exchange-spreads/:exchangeId?', async (req, res) => {
    try {
      await scannerEngine.waitForReady(3500);
      const rawExchangeId = req.params.exchangeId || (req.query.exchange as string);
      const exchangeId = rawExchangeId ? normalizeExchangeId(rawExchangeId) : undefined;
      const search = req.query.search as string;
      const tokenTier = req.query.tokenTier as 'ALL' | 'SMALL_MICRO' | 'MAJOR';
      const spreadCategory = req.query.spreadCategory as 'ALL' | 'TIGHT' | 'MODERATE' | 'WIDE' | 'HIGH';
      const openStatusOnly = req.query.openStatusOnly === 'true';
      const minSpread = req.query.minSpread ? parseFloat(req.query.minSpread as string) : undefined;
      const maxSpread = req.query.maxSpread ? parseFloat(req.query.maxSpread as string) : undefined;
      const sortBy = req.query.sortBy as any;
      const sortOrder = req.query.sortOrder as 'asc' | 'desc';

      const spreadOverview = scannerEngine.getExchangeSpreads({
        exchangeId,
        search,
        tokenTier,
        spreadCategory,
        openStatusOnly,
        minSpread,
        maxSpread,
        sortBy,
        sortOrder,
      });

      res.json(spreadOverview);
    } catch (err: any) {
      res.status(500).json({ error: err?.message || 'Failed to get exchange spreads' });
    }
  });


  // Get Exchange Top Movers & Arbitrage Opportunities
  const handleMovers = async (req: express.Request, res: express.Response) => {
    try {
      const rawExchangeId = req.params.exchangeId || (req.query.exchange as string) || 'mexc';
      const exchangeId = normalizeExchangeId(rawExchangeId);
      const limit = parseInt((req.query.limit || 20).toString(), 10);
      const data = await scannerEngine.fetchExchangeMoversOnDemand(exchangeId, limit);
      
      const dexOpps = cexDexScannerEngine.getFilteredOpportunities({});
      
      const attachBestOpp = (item: any, isGainer: boolean) => {
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
      };

      if (Array.isArray(data?.gainers)) {
        data.gainers.forEach((g) => attachBestOpp(g, true));
      }
      if (Array.isArray(data?.losers)) {
        data.losers.forEach((l) => attachBestOpp(l, false));
      }

      res.json(data || { gainers: [], losers: [] });
    } catch (err: any) {
      res.status(500).json({ error: err?.message || 'Failed to get exchange movers' });
    }
  };

  app.get('/api/exchange-movers/:exchangeId', handleMovers);
  app.get('/api/movers', handleMovers);

  // Trigger manual immediate rescan
  app.post('/api/scan', async (_req, res) => {
    try {
      const opps = await scannerEngine.scanAllExchanges();
      try {
        await cexDexScannerEngine.fetchAllDexPrices();
        const exchangeNames: Record<string, string> = {};
        for (const ex of EXCHANGES) {
          exchangeNames[ex.id] = ex.name;
        }
        cexDexScannerEngine.computeOpportunities(
          (scannerEngine as any).priceCache,
          (scannerEngine as any).statusCache,
          exchangeNames
        );
      } catch (dexErr) {
        console.warn('DEX rescan background notice:', dexErr);
      }

      res.json({
        success: true,
        summary: scannerEngine.getSummary(),
        count: opps.length,
      });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err?.message || 'Scan failed' });
    }
  });

  // Get current API key status
  const handleKeyStatus = async (_req: express.Request, res: express.Response) => {
    try {
      const status = apiKeyService.getStatus();
      res.json({
        success: true,
        status,
        summary: scannerEngine.getSummary(),
      });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err?.message || 'Failed to get key status' });
    }
  };

  app.get('/api/settings/keys', handleKeyStatus);
  app.get('/api/settings/status', handleKeyStatus);

  // Save API keys and immediately connect & sync exchange data (Seamless Method)
  app.post('/api/settings/keys', async (req, res) => {
    try {
      const { geminiApiKey, exchangeApiKey, exchangeApiSecret, exchangeProvider } = req.body || {};
      
      apiKeyService.saveKeys({
        geminiApiKey,
        exchangeApiKey,
        exchangeApiSecret,
        exchangeProvider,
      });

      // Automatically verify keys and refresh all exchange feeds
      const testResult = await apiKeyService.testAndVerifyKeys(() => scannerEngine.scanAllExchanges());

      res.json({
        success: testResult.success,
        message: testResult.message || 'API keys configured and verified',
        testResult,
        status: apiKeyService.getStatus(),
        summary: scannerEngine.getSummary(),
      });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err?.message || 'Failed to save and connect API keys' });
    }
  });

  // Save Default System API Keys (Admin / Fallback for All Unauthenticated Users)
  app.post('/api/settings/default-keys', async (req, res) => {
    try {
      const { geminiApiKey } = req.body || {};
      
      apiKeyService.saveDefaultKeys({ geminiApiKey });

      const testResult = await apiKeyService.testAndVerifyKeys(() => scannerEngine.scanAllExchanges());

      res.json({
        success: testResult.success,
        message: 'Master Default System API Key configured successfully and hidden from end-users.',
        testResult,
        status: apiKeyService.getStatus(),
        summary: scannerEngine.getSummary(),
      });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err?.message || 'Failed to configure default API key' });
    }
  });

  // Test current connection without modifying keys
  app.post('/api/settings/test-connection', async (_req, res) => {
    try {
      const testResult = await apiKeyService.testAndVerifyKeys(() => scannerEngine.scanAllExchanges());
      res.json({
        success: testResult.success,
        testResult,
        status: apiKeyService.getStatus(),
        summary: scannerEngine.getSummary(),
      });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err?.message || 'Connection test failed' });
    }
  });

  // Catch-all 404 for /api routes to prevent Vite SPA middleware from returning HTML for bad API endpoints
  app.all('/api', (_req, res) => {
    res.status(404).json({ error: 'API endpoint not found' });
  });
  app.all('/api/*', (_req, res) => {
    res.status(404).json({ error: 'API endpoint not found' });
  });

  // ---------------------------------------------------------------------------
  // Vite / Production Static File Middleware
  // ---------------------------------------------------------------------------

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Global error handling middleware
  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error('Unhandled server error:', err);
    res.status(500).json({ error: err?.message || 'Internal server error' });
  });

  // Run initial boot scan once on server start
  scannerEngine.scanAllExchanges().catch((err) => console.error('Boot scan notice:', err));

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Crypto Arbitrage Matrix Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
