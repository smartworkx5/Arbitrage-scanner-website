import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/spreads — live cross-exchange arbitrage spreads (free preview).
 *
 * Fetches public spot tickers server-side from Binance, Bybit, OKX, KuCoin
 * and Gate.io. Each exchange is fetched in isolation: if one fails, the
 * others still produce data. For the highest-volume USDT pairs we compare
 * the best ask (buy) and best bid (sell) across exchanges and report the
 * gross spread plus an estimate net of typical taker fees on both sides
 * (withdrawal fees are NOT included in the estimate).
 *
 * Results are cached in memory for ~30 seconds so the exchange APIs are
 * not hammered by preview traffic.
 *
 * Optional query: ?ex=Binance,Bybit (exact exchange display names) —
 * restricts the computation to just those exchanges (used by the
 * /arbitrage/<pair> pages). Each filter combination is cached separately.
 */

interface Quote {
  bid: number;
  ask: number;
  last: number;
  /** 24h quote-currency (USDT) volume on this exchange. */
  volume: number;
}

type QuoteMap = Map<string, Quote>; // key: base symbol, e.g. "BTC"

/** Typical spot taker fee (%) per exchange; anything unlisted uses 0.20. */
const TAKER_FEE_PCT: Record<string, number> = {
  Binance: 0.1,
  Bybit: 0.1,
  OKX: 0.1,
  KuCoin: 0.1,
  "Gate.io": 0.2,
};
const DEFAULT_FEE_PCT = 0.2;

/** Stablecoin bases quoted against USDT — not real arbitrage targets. */
const EXCLUDED_BASES = new Set([
  "USDC",
  "DAI",
  "FDUSD",
  "TUSD",
  "USDP",
  "USD1",
  "BUSD",
  "USTC",
]);

const TOP_PAIRS_BY_VOLUME = 40;
const MAX_RESULTS = 20;
const MIN_SPREAD_PCT = 0.05;
const MAX_SPREAD_PCT = 20;
const CACHE_TTL_MS = 30_000;
const FETCH_TIMEOUT_MS = 8_000;

function num(v: unknown): number {
  const n = typeof v === "string" ? parseFloat(v) : typeof v === "number" ? v : NaN;
  return Number.isFinite(n) ? n : NaN;
}

function makeQuote(bid: number, ask: number, last: number, volume: number): Quote | null {
  const b = bid > 0 ? bid : last;
  const a = ask > 0 ? ask : last;
  const l = last > 0 ? last : b > 0 ? b : a;
  if (!(b > 0) && !(a > 0) && !(l > 0)) return null;
  return { bid: b, ask: a, last: l, volume: volume > 0 ? volume : 0 };
}

async function fetchJson(url: string): Promise<unknown> {
  const res = await fetch(url, {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    headers: { accept: "application/json" },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return res.json();
}

async function fetchBinance(): Promise<QuoteMap> {
  const map: QuoteMap = new Map();
  const data = (await fetchJson("https://data-api.binance.vision/api/v3/ticker/24hr")) as Array<
    Record<string, string>
  >;
  if (!Array.isArray(data)) return map;
  for (const t of data) {
    if (!t.symbol?.endsWith("USDT")) continue;
    const base = t.symbol.slice(0, -4);
    if (!base || EXCLUDED_BASES.has(base)) continue;
    const q = makeQuote(num(t.bidPrice), num(t.askPrice), num(t.lastPrice), num(t.quoteVolume));
    if (q) map.set(base, q);
  }
  return map;
}

async function fetchBybit(): Promise<QuoteMap> {
  const map: QuoteMap = new Map();
  const data = (await fetchJson("https://api.bybit.com/v5/market/tickers?category=spot")) as {
    retCode?: number;
    result?: { list?: Array<Record<string, string>> };
  };
  const list = data?.result?.list;
  if (data?.retCode !== 0 || !Array.isArray(list)) return map;
  for (const t of list) {
    if (!t.symbol?.endsWith("USDT")) continue;
    const base = t.symbol.slice(0, -4);
    if (!base || EXCLUDED_BASES.has(base)) continue;
    const q = makeQuote(num(t.bid1Price), num(t.ask1Price), num(t.lastPrice), num(t.turnover24h));
    if (q) map.set(base, q);
  }
  return map;
}

async function fetchOkx(): Promise<QuoteMap> {
  const map: QuoteMap = new Map();
  const data = (await fetchJson("https://www.okx.com/api/v5/market/tickers?instType=SPOT")) as {
    code?: string;
    data?: Array<Record<string, string>>;
  };
  if (data?.code !== "0" || !Array.isArray(data.data)) return map;
  for (const t of data.data) {
    if (!t.instId?.endsWith("-USDT")) continue;
    const base = t.instId.slice(0, -5);
    if (!base || EXCLUDED_BASES.has(base)) continue;
    const q = makeQuote(num(t.bidPx), num(t.askPx), num(t.last), num(t.volCcy24h));
    if (q) map.set(base, q);
  }
  return map;
}

async function fetchKucoin(): Promise<QuoteMap> {
  const map: QuoteMap = new Map();
  const data = (await fetchJson("https://api.kucoin.com/api/v1/market/allTickers")) as {
    code?: string;
    data?: { ticker?: Array<Record<string, string>> };
  };
  const list = data?.data?.ticker;
  if (data?.code !== "200000" || !Array.isArray(list)) return map;
  for (const t of list) {
    if (!t.symbol?.endsWith("-USDT")) continue;
    const base = t.symbol.slice(0, -5);
    if (!base || EXCLUDED_BASES.has(base)) continue;
    const q = makeQuote(num(t.buy), num(t.sell), num(t.last), num(t.volValue));
    if (q) map.set(base, q);
  }
  return map;
}

async function fetchGateio(): Promise<QuoteMap> {
  const map: QuoteMap = new Map();
  const data = (await fetchJson("https://api.gateio.ws/api/v4/spot/tickers")) as Array<
    Record<string, string>
  >;
  if (!Array.isArray(data)) return map;
  for (const t of data) {
    if (!t.currency_pair?.endsWith("_USDT")) continue;
    const base = t.currency_pair.slice(0, -5);
    if (!base || EXCLUDED_BASES.has(base)) continue;
    const q = makeQuote(num(t.highest_bid), num(t.lowest_ask), num(t.last), num(t.quote_volume));
    if (q) map.set(base, q);
  }
  return map;
}

const FETCHERS: Array<{ name: string; run: () => Promise<QuoteMap> }> = [
  { name: "Binance", run: fetchBinance },
  { name: "Bybit", run: fetchBybit },
  { name: "OKX", run: fetchOkx },
  { name: "KuCoin", run: fetchKucoin },
  { name: "Gate.io", run: fetchGateio },
];

export interface SpreadRow {
  pair: string;
  buyExchange: string;
  sellExchange: string;
  buyPrice: number;
  sellPrice: number;
  spreadPct: number;
  netPct: number;
  volume24h: number;
}

interface SpreadsPayload {
  updatedAt: string;
  spreads: SpreadRow[];
}

const caches = new Map<string, { at: number; payload: SpreadsPayload }>();

async function buildSpreads(only?: string[]): Promise<SpreadsPayload> {
  const fetchers = only
    ? FETCHERS.filter((f) => only.includes(f.name))
    : FETCHERS;
  const results = await Promise.all(
    fetchers.map(async (f) => {
      try {
        return { name: f.name, quotes: await f.run() };
      } catch {
        return { name: f.name, quotes: new Map() as QuoteMap };
      }
    })
  );
  const live = results.filter((r) => r.quotes.size > 0);
  if (live.length === 0) {
    // With an explicit ?ex= filter, an empty result is a valid answer
    // (e.g. neither requested exchange is covered by our feeds) — the
    // caller shows an empty state rather than an outage message.
    if (only) return { updatedAt: new Date().toISOString(), spreads: [] };
    throw new Error("All exchange feeds are unreachable right now");
  }

  // Aggregate 24h quote volume per pair across exchanges.
  const volumeByPair = new Map<string, number>();
  for (const { quotes } of live) {
    quotes.forEach((q, base) => {
      volumeByPair.set(base, (volumeByPair.get(base) ?? 0) + q.volume);
    });
  }
  const volumeEntries: Array<[string, number]> = [];
  volumeByPair.forEach((volume, base) => {
    volumeEntries.push([base, volume]);
  });
  const topPairs = volumeEntries
    .sort((a, b) => b[1] - a[1])
    .slice(0, TOP_PAIRS_BY_VOLUME)
    .map((entry) => entry[0]);

  const spreads: SpreadRow[] = [];
  for (const base of topPairs) {
    let buy: { exchange: string; price: number } | null = null;
    let sell: { exchange: string; price: number } | null = null;
    let quotedOn = 0;
    for (const { name, quotes } of live) {
      const q = quotes.get(base);
      if (!q) continue;
      quotedOn += 1;
      const ask = q.ask > 0 ? q.ask : q.last;
      const bid = q.bid > 0 ? q.bid : q.last;
      if (ask > 0 && (buy === null || ask < buy.price)) buy = { exchange: name, price: ask };
      if (bid > 0 && (sell === null || bid > sell.price)) sell = { exchange: name, price: bid };
    }
    if (quotedOn < 2 || buy === null || sell === null) continue;

    const spreadPct = ((sell.price - buy.price) / buy.price) * 100;
    if (spreadPct < MIN_SPREAD_PCT || spreadPct > MAX_SPREAD_PCT) continue;

    const buyFee = TAKER_FEE_PCT[buy.exchange] ?? DEFAULT_FEE_PCT;
    const sellFee = TAKER_FEE_PCT[sell.exchange] ?? DEFAULT_FEE_PCT;
    const netPct = spreadPct - buyFee - sellFee;

    spreads.push({
      pair: `${base}/USDT`,
      buyExchange: buy.exchange,
      sellExchange: sell.exchange,
      buyPrice: buy.price,
      sellPrice: sell.price,
      spreadPct: Math.round(spreadPct * 10000) / 10000,
      netPct: Math.round(netPct * 10000) / 10000,
      volume24h: Math.round(volumeByPair.get(base) ?? 0),
    });
  }

  spreads.sort((a, b) => b.spreadPct - a.spreadPct);
  return { updatedAt: new Date().toISOString(), spreads: spreads.slice(0, MAX_RESULTS) };
}

export async function GET(request: NextRequest) {
  // Optional ?ex=Binance,Bybit filter (exact display names): compute spreads
  // using only those exchanges' quotes. Normalized to canonical fetcher
  // order so the cache key is stable regardless of parameter order.
  const exParam = request.nextUrl.searchParams.get("ex");
  const requested = exParam
    ? exParam
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : null;
  const only = requested
    ? FETCHERS.map((f) => f.name).filter((name) => requested.includes(name))
    : undefined;
  const key = only ? only.join(",") : "__all__";

  const cached = caches.get(key);
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) {
    return NextResponse.json(cached.payload, {
      headers: { "Cache-Control": "public, s-maxage=30, stale-while-revalidate=30" },
    });
  }
  try {
    const payload = await buildSpreads(only);
    caches.set(key, { at: Date.now(), payload });
    return NextResponse.json(payload, {
      headers: { "Cache-Control": "public, s-maxage=30, stale-while-revalidate=30" },
    });
  } catch {
    return NextResponse.json(
      { error: "Live spreads are temporarily unavailable. Please try again shortly." },
      { status: 502 }
    );
  }
}
