/** Shared site constants for SEO. */
export const SITE_NAME = "Crypto Arbitrage Scanner";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://crypto-rb-scanner.vercel.app";
export const SITE_TAGLINE = "Spot arbitrage gaps before they close";
export const SITE_DESCRIPTION =
  "Crypto Arbitrage Scanner finds top gainers and losers in real time and detects cross-exchange, CEX vs DEX, triangular and funding-rate arbitrage across 16 exchanges — with a paper trading bot for risk-free practice.";
export const BRAND_TWITTER = "@cryptoarbscan";
