/**
 * Single source of truth for number and date formatting across the site.
 *
 * The Phase 1 audit found the live tables mixing formats on one screen
 * (prices `8.2180` next to `224.70`, volumes `$38.4M` next to `$46M`, raw
 * ISO dates like `2026-10-17`). Every page should format through these
 * helpers so a given kind of value always looks the same.
 *
 * All helpers are pure and safe to call with bad input: non-finite
 * numbers render as an em dash instead of "NaN".
 */

const DASH = "—";

/**
 * Price in USD terms (no currency symbol unless `usd` is set).
 * - >= 100: 2 decimals, thousands separators  → 1,234.56 / 224.70
 * - 1–100: 2–4 decimals (trailing zeros past 2 trimmed by Intl) → 8.218
 * - < 1: 2–8 decimals so small-cap prices keep precision → 0.026676
 */
export function formatPrice(
  value: number,
  opts: { usd?: boolean } = {},
): string {
  if (!Number.isFinite(value)) return DASH;
  const abs = Math.abs(value);
  const fraction =
    abs >= 100
      ? { minimumFractionDigits: 2, maximumFractionDigits: 2 }
      : abs >= 1
        ? { minimumFractionDigits: 2, maximumFractionDigits: 4 }
        : { minimumFractionDigits: 2, maximumFractionDigits: 8 };
  const body = new Intl.NumberFormat("en-US", fraction).format(value);
  return opts.usd ? `$${body}` : body;
}

/**
 * Compact USD volume, one decimal at most, always the same rule:
 * 38,400,000 → "$38.4M", 46,000,000 → "$46M", 1,250,000,000 → "$1.3B".
 */
export function formatVolume(value: number): string {
  if (!Number.isFinite(value)) return DASH;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(value);
}

/**
 * Percentage where `value` is already in percent units (1.25 means 1.25%).
 * Signed by default: 1.25 → "+1.25%", -0.4 → "-0.40%", 0 → "0.00%".
 * Pair with the gain/loss colours — never rely on colour alone.
 */
export function formatPct(
  value: number,
  opts: { signed?: boolean; digits?: number } = {},
): string {
  if (!Number.isFinite(value)) return DASH;
  const { signed = true, digits = 2 } = opts;
  const fixed = Math.abs(value).toFixed(digits);
  if (value > 0) return `${signed ? "+" : ""}${fixed}%`;
  if (value < 0) return `-${fixed}%`;
  return `${fixed}%`;
}

/**
 * Human date: "17 Oct 2026". Accepts an ISO string or a Date.
 * Unparseable input is returned as-is (for strings) rather than crashing.
 */
export function formatDate(input: string | Date): string {
  const d = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(d.getTime())) return typeof input === "string" ? input : DASH;
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);
}
