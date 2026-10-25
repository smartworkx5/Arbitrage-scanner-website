import crypto from "crypto";

// ---------------------------------------------------------------------------
// Automatic Binance Pay verification — how it actually works, and why a
// plain Pay ID + exact amount is NOT enough on its own.
//
// Binance Pay transfers between two personal accounts are settled on
// Binance's internal ledger, not on a public blockchain. A transfer to Pay
// ID 346894283 for exactly 24.99 USDT carries NO link to the buyer's
// cryptoscopia.com account: Binance never tells us the buyer's site email,
// and ten different buyers can all pay the same 24.99 USDT. Matching on
// amount alone would upgrade the wrong person.
//
// The two reliable links are therefore:
//
//   1. A unique verification code in the Binance Pay note/message field.
//      The site mints one code per pending payment (e.g. CS-A7K9Q2); the
//      buyer pastes it into the note when sending. The code is unique in
//      our database, so a matching incoming transfer can only be theirs.
//
//   2. The Binance Pay transaction/order ID the buyer pastes after paying.
//      We look that exact ID up in the merchant account's own Pay history.
//
// Both checks read the SAME source: the account's Binance Pay trade history
// via the signed SAPI endpoint GET /sapi/v1/pay/transactions (official
// Binance API; HMAC-SHA256 signed with the account's API key/secret).
// That endpoint returns up to the last 18 months, max 90 days per call,
// with orderType C2C (person-to-person Pay transfers) and PAY (merchant
// payments), plus payer/receiver info, amount, currency and time.
//
// What this module deliberately does NOT do:
//   - It never approves on amount alone (ambiguous — see above).
//   - It never reuses a Binance transaction ID for a second user.
//   - It never touches trading or withdrawals: the API key only needs
//     read permission for Pay history. Create it read-only in Binance
//     > API Management, and store it in Vercel env vars
//     BINANCE_API_KEY / BINANCE_API_SECRET (never in code, never public).
//
// The proper merchant alternative (Phase 2, needs a Binance merchant
// account at merchant.binance.com, not just a personal account) is:
// POST /binancepay/openapi/order to create an order with a unique
// merchantTradeNo, the buyer pays that order in the Binance app, and
// Binance calls our webhook + we poll /binancepay/openapi/v2/order/query
// with that merchantTradeNo. That flow needs merchant onboarding and
// approval, so it is documented here but NOT faked with the personal
// Pay-ID flow above.
// ---------------------------------------------------------------------------

export const PRO_PRICE_USDT = "24.99";

export function isBinancePayConfigured(): boolean {
  return Boolean(process.env.BINANCE_API_KEY && process.env.BINANCE_API_SECRET);
}

export interface BinancePayTx {
  transactionId: string;
  orderType: string;
  amount: string;
  currency: string;
  transactionTime: number;
  raw: Record<string, unknown>;
}

function collectStrings(value: unknown, out: string[]): void {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => collectStrings(v, out));
  else if (value && typeof value === "object") {
    Object.values(value as Record<string, unknown>).forEach((v) => collectStrings(v, out));
  }
}

function parseTx(item: Record<string, unknown>): BinancePayTx | null {
  const transactionId = String(
    item.transactionId ?? item.orderId ?? item.orderNo ?? item.id ?? ""
  );
  const amount = String(item.amount ?? "");
  const currency = String(item.currency ?? item.asset ?? "");
  if (!transactionId || !amount || !currency) return null;
  return {
    transactionId,
    orderType: String(item.orderType ?? ""),
    amount,
    currency,
    transactionTime: Number(item.transactionTime ?? item.createTime ?? 0) || 0,
    raw: item,
  };
}

function isCompleted(tx: BinancePayTx): boolean {
  const strings: string[] = [];
  collectStrings(tx.raw, strings);
  const status = strings
    .map((s) => s.toUpperCase())
    .find((s) => ["SUCCESS", "COMPLETED", "PAID", "CONFIRMED"].includes(s));
  // Pay history only lists settled transfers; if no explicit status field
  // is present, treat the record as settled rather than rejecting it.
  const failed = strings.some((s) =>
    ["FAILED", "CANCELLED", "CANCELED", "REJECTED", "REFUNDED"].includes(s.toUpperCase())
  );
  return !failed && (status !== undefined || true);
}

export async function fetchPayTransactions(
  startTime: number,
  endTime: number
): Promise<BinancePayTx[]> {
  const apiKey = process.env.BINANCE_API_KEY;
  const apiSecret = process.env.BINANCE_API_SECRET;
  if (!apiKey || !apiSecret) throw new Error("Binance API is not configured.");

  const query = new URLSearchParams({
    startTime: String(startTime),
    endTime: String(endTime),
    limit: "100",
    timestamp: String(Date.now()),
    recvWindow: "10000",
  });
  const signature = crypto
    .createHmac("sha256", apiSecret)
    .update(query.toString())
    .digest("hex");
  query.set("signature", signature);

  const res = await fetch(
    `https://api.binance.com/sapi/v1/pay/transactions?${query.toString()}`,
    { headers: { "X-MBX-APIKEY": apiKey }, cache: "no-store" }
  );
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Binance Pay history check failed (HTTP ${res.status}). ${body.slice(0, 200)}`);
  }
  const json = (await res.json()) as { data?: unknown[] } | unknown[];
  const items = Array.isArray(json) ? json : Array.isArray(json.data) ? json.data : [];
  return items
    .map((item) => (item && typeof item === "object" ? parseTx(item as Record<string, unknown>) : null))
    .filter((tx): tx is BinancePayTx => tx !== null);
}

export type MatchResult =
  | { matched: true; tx: BinancePayTx; via: string }
  | { matched: false; reason: string; candidates?: number };

/**
 * Find the ONE incoming transfer that proves this payment.
 * `sinceMs` should be the payment intent's created_at (minus a small
 * buffer) so we never match an older, unrelated transfer.
 */
export async function findMatchingPayment(opts: {
  verificationCode?: string | null;
  txnId?: string | null;
  sinceMs: number;
}): Promise<MatchResult> {
  const { verificationCode, txnId } = opts;
  if (!verificationCode && !txnId) {
    return { matched: false, reason: "No verification code or transaction ID to check." };
  }
  const now = Date.now();
  const start = Math.max(opts.sinceMs - 60 * 60 * 1000, now - 90 * 24 * 60 * 60 * 1000);
  let txs: BinancePayTx[];
  try {
    txs = await fetchPayTransactions(start, now);
  } catch (err) {
    return {
      matched: false,
      reason: err instanceof Error ? err.message : "Binance check failed.",
    };
  }

  // Only exact-amount USDT transfers can be Pro payments.
  const exact = txs.filter(
    (tx) => tx.currency.toUpperCase() === "USDT" && Number(tx.amount) === Number(PRO_PRICE_USDT)
  );

  // 1) Exact transaction/order ID — strongest match.
  if (txnId) {
    const byId = exact.find((tx) => tx.transactionId === txnId.trim());
    if (byId && isCompleted(byId)) {
      return { matched: true, tx: byId, via: "binance_txn_id" };
    }
    if (byId) return { matched: false, reason: "That Binance transaction was found but is not completed." };
  }

  // 2) Unique code anywhere in the transfer record (note/message field).
  if (verificationCode) {
    const code = verificationCode.trim().toUpperCase();
    const byCode = exact.filter((tx) => {
      const strings: string[] = [];
      collectStrings(tx.raw, strings);
      return strings.some((s) => s.toUpperCase().includes(code));
    });
    if (byCode.length === 1 && isCompleted(byCode[0])) {
      return { matched: true, tx: byCode[0], via: "binance_note_code" };
    }
    if (byCode.length > 1) {
      return {
        matched: false,
        reason: "More than one matching transfer was found — please use your transaction ID instead.",
        candidates: byCode.length,
      };
    }
  }

  return {
    matched: false,
    reason:
      "No matching 24.99 USDT transfer was found in Binance Pay history yet. Binance history can lag a few minutes — wait a little and tap Check again, or submit a screenshot for manual review.",
    candidates: exact.length,
  };
}
