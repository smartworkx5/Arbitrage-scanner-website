import { NextRequest, NextResponse } from "next/server";

/**
 * Same-origin JSON proxy for public exchange APIs.
 *
 * Several exchanges (MEXC, Coinstore, …) do not send CORS headers, so the
 * in-browser scanner cannot call them directly, and the free public CORS
 * proxies are unreliable (auth walls / timeouts). The scanner's fallback
 * chain calls this route instead: the server fetches the URL and returns
 * the body. Restricted to an allowlist of known exchange/DEX API hosts so
 * it cannot be used as an open proxy.
 */
const ALLOWED_HOSTS = new Set([
  "api.binance.com",
  "api1.binance.com",
  "api2.binance.com",
  "api3.binance.com",
  "data-api.binance.vision",
  "api.bybit.com",
  "www.okx.com",
  "api.kucoin.com",
  "api.gateio.ws",
  "api.bitget.com",
  "api.huobi.pro",
  "api.coinex.com",
  "api-cloud.bitmart.com",
  "spot-api.bitmart.com",
  "api.mexc.com",
  "api.mexc.co",
  "api.lbkex.com",
  "sapi.xt.com",
  "openapi.bitrue.com",
  "cex.io",
  "api.coinstore.com",
  "api.dexscreener.com",
]);

export async function GET(req: NextRequest) {
  const urlParam = req.nextUrl.searchParams.get("url");
  if (!urlParam) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  let target: URL;
  try {
    target = new URL(urlParam);
  } catch {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }

  if (target.protocol !== "https:" || !ALLOWED_HOSTS.has(target.hostname)) {
    return NextResponse.json({ error: "Host not allowed" }, { status: 403 });
  }

  try {
    const res = await fetch(target.toString(), {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      },
      signal: AbortSignal.timeout(15000),
    });
    const body = await res.text();
    return new NextResponse(body, {
      status: res.status,
      headers: {
        "Content-Type": res.headers.get("content-type") ?? "application/json",
        "Cache-Control": "public, s-maxage=10, stale-while-revalidate=20",
      },
    });
  } catch {
    return NextResponse.json({ error: "Upstream fetch failed" }, { status: 502 });
  }
}
