import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import {
  getPaymentById,
  isBinanceTxnUsed,
  isDbConfigured,
  markPaymentVerified,
} from "@/lib/db";
import { findMatchingPayment, isBinancePayConfigured } from "@/lib/binance";

export const dynamic = "force-dynamic";

/**
 * Automatic Pro activation. The buyer has already sent 24.99 USDT to the
 * site's Binance Pay ID; this endpoint checks the site account's own
 * Binance Pay history for either (a) the unique note code minted for this
 * payment, or (b) the transaction ID the buyer pastes in. On a single
 * exact match, Pro is activated immediately — no admin wait.
 * If Binance API keys are not configured, this returns
 * `autoVerifyUnavailable` so the UI falls back to manual screenshot review
 * instead of pretending the check ran.
 */
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!email) {
    return NextResponse.json({ error: "You must be signed in." }, { status: 401 });
  }
  if (!isDbConfigured()) {
    return NextResponse.json({ error: "Database not configured." }, { status: 503 });
  }
  if (!isBinancePayConfigured()) {
    return NextResponse.json({
      ok: false,
      autoVerifyUnavailable: true,
      error:
        "Automatic Binance verification is not switched on yet (the site owner's Binance API key is not connected). Please submit a screenshot for manual review — an admin will activate Pro.",
    });
  }

  let body: { paymentId?: unknown; txnId?: unknown } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const paymentId = Number(body.paymentId);
  const txnId = String(body.txnId ?? "").trim() || null;
  if (!Number.isInteger(paymentId) || paymentId <= 0) {
    return NextResponse.json({ error: "Invalid paymentId." }, { status: 400 });
  }

  const payment = await getPaymentById(paymentId);
  if (!payment || payment.user_email !== email) {
    return NextResponse.json({ error: "Payment not found." }, { status: 404 });
  }
  if (payment.status === "approved") {
    return NextResponse.json({ ok: true, alreadyPro: true, message: "Pro is already active." });
  }

  const sinceMs = payment.created_at ? Date.parse(payment.created_at) : Date.now() - 24 * 60 * 60 * 1000;
  const result = await findMatchingPayment({
    verificationCode: payment.verification_code,
    txnId,
    sinceMs: Number.isNaN(sinceMs) ? Date.now() - 24 * 60 * 60 * 1000 : sinceMs,
  });
  if (!result.matched) {
    return NextResponse.json({ ok: false, error: result.reason });
  }

  // A Binance transaction ID may only ever activate ONE account.
  if (await isBinanceTxnUsed(result.tx.transactionId, paymentId)) {
    return NextResponse.json({
      ok: false,
      error: "That Binance transaction has already been used to activate another account.",
    });
  }

  await markPaymentVerified(paymentId, result.tx.transactionId, result.via);
  return NextResponse.json({
    ok: true,
    message: "Payment confirmed on Binance — Pro is now active.",
    binanceTxnId: result.tx.transactionId,
    verifiedVia: result.via,
  });
}
