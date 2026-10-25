import { NextRequest, NextResponse } from "next/server";
import { requireAdminEmail } from "@/lib/admin";
import {
  getPaymentById,
  isBinanceTxnUsed,
  markPaymentVerified,
} from "@/lib/db";
import { findMatchingPayment, isBinancePayConfigured } from "@/lib/binance";

export const dynamic = "force-dynamic";

/** Admin one-click version of the buyer-side auto-check. */
export async function POST(req: NextRequest) {
  const admin = await requireAdminEmail();
  if (!admin) {
    return NextResponse.json({ error: "Access denied. Admins only." }, { status: 403 });
  }
  if (!isBinancePayConfigured()) {
    return NextResponse.json({
      error:
        "Automatic Binance verification is not switched on yet (BINANCE_API_KEY / BINANCE_API_SECRET are not set in Vercel). Approve manually from the screenshot instead.",
    });
  }
  let body: { paymentId?: unknown } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const paymentId = Number(body.paymentId);
  if (!Number.isInteger(paymentId) || paymentId <= 0) {
    return NextResponse.json({ error: "Invalid paymentId." }, { status: 400 });
  }
  const payment = await getPaymentById(paymentId);
  if (!payment) return NextResponse.json({ error: "Payment not found." }, { status: 404 });
  if (payment.status === "approved") {
    return NextResponse.json({ ok: true, alreadyPro: true });
  }
  const sinceMs = payment.created_at ? Date.parse(payment.created_at) : Date.now() - 24 * 60 * 60 * 1000;
  const result = await findMatchingPayment({
    verificationCode: payment.verification_code,
    txnId: payment.txn_ref,
    sinceMs: Number.isNaN(sinceMs) ? Date.now() - 24 * 60 * 60 * 1000 : sinceMs,
  });
  if (!result.matched) {
    return NextResponse.json({ ok: false, error: result.reason });
  }
  if (await isBinanceTxnUsed(result.tx.transactionId, paymentId)) {
    return NextResponse.json({ ok: false, error: "That Binance transaction was already used for another account." });
  }
  await markPaymentVerified(paymentId, result.tx.transactionId, `admin:${result.via}`);
  return NextResponse.json({
    ok: true,
    message: `Verified on Binance (${result.via}) — Pro activated for ${payment.user_email}.`,
  });
}
