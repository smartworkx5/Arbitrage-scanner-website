/** Shared site constants for SEO. */
export const SITE_NAME = "Cryptoscopia";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://cryptoscopia.com";
export const SITE_TAGLINE = "Real-time price gaps across 19 exchanges";
export const SITE_DESCRIPTION =
  "Cryptoscopia is a real-time crypto arbitrage scanner comparing prices across 19 exchanges — cross-exchange, triangular & funding-rate spreads. Free 3-day trial.";
export const BRAND_TWITTER = "@cryptoarbscan";
