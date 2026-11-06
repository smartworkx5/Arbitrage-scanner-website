/** Shared site constants for SEO. */
export const SITE_NAME = "Cryptoscopia";
/**
 * The one true exchange count — the scanner's real connected-exchange
 * count, established by the Phase 1 audit (2026-11-06). Every surface
 * (copy, stats, calculator lists) must read this constant instead of
 * hardcoding a number; older copy that still says otherwise migrates
 * page by page during the redesign.
 */
export const EXCHANGE_COUNT = 16;
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://cryptoscopia.com";
export const SITE_TAGLINE = `Real-time price gaps across ${EXCHANGE_COUNT} exchanges`;
export const SITE_DESCRIPTION =
  `Cryptoscopia is a real-time crypto arbitrage scanner comparing prices across ${EXCHANGE_COUNT} exchanges — cross-exchange, triangular & funding-rate spreads. Free 3-day trial.`;
export const BRAND_TWITTER = "@cryptoarbscan";
