import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { createPaymentIntent, isDbConfigured } from "@/lib/db";

export const dynamic = "force-dynamic";

/** Mint (or reuse) the buyer's unique Binance Pay note code. */
export async function POST() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!email) {
    return NextResponse.json({ error: "You must be signed in." }, { status: 401 });
  }
  if (!isDbConfigured()) {
    return NextResponse.json({ error: "Database not configured." }, { status: 503 });
  }
  try {
    const payment = await createPaymentIntent(email);
    if (!payment) throw new Error("No payment intent created.");
    return NextResponse.json({
      ok: true,
      paymentId: payment.id,
      verificationCode: payment.verification_code,
    });
  } catch (err) {
    console.error("[payments/intent] failed:", err);
    return NextResponse.json({ error: "Could not create a payment code." }, { status: 500 });
  }
}
