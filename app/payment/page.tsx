import type { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import { authOptions } from "@/lib/auth";
import { DEVICE_COOKIE, resolveDeviceAccess } from "@/lib/device";
import { createPaymentIntent, isDbConfigured } from "@/lib/db";
import PaymentForm from "./PaymentForm";
import AutoVerify from "./AutoVerify";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Upgrade to Pro — $24.99",
  description: "Pay $24.99 USDT via Binance to unlock Pro access to Cryptoscopia — $24.99 per month.",
  robots: { index: false, follow: false },
};

const PRICE = "24.99";

export default async function PaymentPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect("/signin");
  }

  // One device = one account: do not let a blocked second email buy Pro
  // (or mint a payment intent) on a device registered to another email.
  const deviceAccess = await resolveDeviceAccess(
    (await cookies()).get(DEVICE_COOKIE)?.value ?? null,
    session.user.email,
    (await headers()).get("user-agent")
  );
  if (!deviceAccess.allowed) {
    redirect(
      `/device-blocked?registered=${encodeURIComponent(
        deviceAccess.registeredEmailMasked
      )}`
    );
  }

  const binanceId = process.env.NEXT_PUBLIC_BINANCE_ID || "346894283";

  // Mint (or reuse) the buyer's note code server-side, so the simple card
  // shows the code immediately — no extra "get code" step on first load.
  let paymentId: number | null = null;
  let verificationCode: string | null = null;
  if (isDbConfigured()) {
    try {
      const intent = await createPaymentIntent(session.user.email);
      paymentId = intent?.id ?? null;
      verificationCode = intent?.verification_code ?? null;
    } catch (err) {
      console.error("[payment] intent failed:", err);
    }
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <Link href="/dashboard" className="text-sm text-slate-400 hover:text-white">
        ← Back to dashboard
      </Link>

      <div className="card mt-6">
        <AutoVerify
          binanceId={binanceId}
          amount={PRICE}
          initialPaymentId={paymentId}
          initialCode={verificationCode}
        />
      </div>

      <details className="card mt-6">
        <summary className="cursor-pointer text-sm font-semibold text-slate-300">
          Manual review alternative (if the automatic check is unavailable)
        </summary>
        <p className="mt-3 text-sm text-slate-400">
          Upload a screenshot and your transaction ID and an admin will activate Pro manually,
          usually within a few hours.
        </p>
        <div className="mt-4">
          <PaymentForm binanceId={binanceId} />
        </div>
      </details>
    </main>
  );
}
