import express from 'express';
import { scannerEngine } from '../src/server/scanner';
import { cexDexScannerEngine } from '../src/server/dexScanner';
import { EXCHANGES } from '../src/server/exchanges';
import { apiKeyService } from '../src/server/apiKeyService';

const app = express();
app.use(express.json());

// CORS headers
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  next();
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', time: Date.now() });
});

// Summary
app.get('/api/summary', async (_req, res) => {
  try {
    await scannerEngine.waitForReady(4000);
    res.json(scannerEngine.getSummary());
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Failed to get summary' });
  }
});

// Exchanges
app.get('/api/exchanges', async (_req, res) => {
  try {
    await scannerEngine.waitForReady(3000);
    res.json(scannerEngine.getExchangeMetas());
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Failed to get exchange metadata' });
  }
});

// Arbitrage
app.get('/api/arbitrage', async (req, res) => {
  try {
    await scannerEngine.waitForReady(4000);

    const search = req.query.search as string;
    const minSpread = req.query.minSpread ? parseFloat(req.query.minSpread as string) : undefined;
    const maxSpread = req.query.maxSpread ? parseFloat(req.query.maxSpread as string) : undefined;
    const openStatusOnly = req.query.openStatusOnly === 'true';
    const contractVerifiedOnly = req.query.contractVerifiedOnly === 'true';
    const tokenTier = req.query.tokenTier as 'ALL' | 'SMALL_MICRO' | 'MAJOR';
    const buyExchanges = req.query.buyExchanges ? (req.query.buyExchanges as string).split(',') : undefined;
    const sellExchanges = req.query.sellExchanges ? (req.query.sellExchanges as string).split(',') : undefined;
    const sortBy = req.query.sortBy as any;
    const sortOrder = req.query.sortOrder as any;

    const filtered = scannerEngine.getFilteredOpportunities({
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
      count: filtered.length,
      opportunities: filtered,
    });
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Failed to fetch opportunities' });
  }
});

// Scan trigger
app.post('/api/scan', async (_req, res) => {
  try {
    const opps = await scannerEngine.scanAllExchanges();
    res.json({
      success: true,
      summary: scannerEngine.getSummary(),
      count: opps.length,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err?.message || 'Scan failed' });
  }
});

// CEX vs DEX Arbitrage
app.get('/api/cex-dex-arbitrage', (req, res) => {
  try {
    const search = req.query.search as string;
    const direction = req.query.direction as any;
    const chain = req.query.chain as string;
    const dex = req.query.dex as string;
    const cex = req.query.cex as string;
    const minSpread = req.query.minSpread ? parseFloat(req.query.minSpread as string) : undefined;
    const minDexLiquidity = req.query.minDexLiquidity ? parseFloat(req.query.minDexLiquidity as string) : undefined;
    const verifiedOnly = req.query.verifiedOnly === 'true';
    const tokenTier = req.query.tokenTier as any;
    const sortBy = req.query.sortBy as any;
    const sortOrder = req.query.sortOrder as any;

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

// API keys
app.get('/api/settings/keys', async (_req, res) => {
  try {
    const status = apiKeyService.getStatus();
    res.json(status);
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Failed to get API key status' });
  }
});

app.post('/api/settings/keys', async (req, res) => {
  try {
    const { geminiApiKey } = req.body || {};
    if (geminiApiKey) {
      apiKeyService.saveKeys({ geminiApiKey });
    }
    const result = await apiKeyService.testAndVerifyKeys(() => scannerEngine.scanAllExchanges());
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Failed to save API key' });
  }
});

export default app;
