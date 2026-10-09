import type { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { isDbConfigured } from "@/lib/db";
import PaymentForm from "./PaymentForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Upgrade to Pro — $24.99",
  description: "Pay $24.99 USDT via Binance to unlock lifetime Pro access to Crypto Arbitrage Scanner.",
  robots: { index: false, follow: false },
};

const PRICE = "24.99";

export default async function PaymentPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect("/signin");
  }

  const binanceId = process.env.NEXT_PUBLIC_BINANCE_ID || "346894283";

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <Link href="/dashboard" className="text-sm text-slate-400 hover:text-white">
        ← Back to dashboard
      </Link>

      <h1 className="mt-4 text-3xl font-bold">
        Upgrade to <span className="gradient-text">Pro</span>
      </h1>
      <p className="mt-2 text-slate-400">
        One-time payment of <strong className="text-slate-100">${PRICE}</strong>. No subscription,
        no renewals — lifetime access.
      </p>

      {!isDbConfigured() && (
        <div className="card mt-6 !border-amber-500/40">
          <p className="text-sm text-amber-200">
            ⚠️ Payments are currently paused: the database isn&apos;t configured yet.
          </p>
        </div>
      )}

      <div className="card mt-6">
        <h2 className="text-lg font-semibold">Step 1 — Send the payment on Binance</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-300">
          <li>Open your Binance app and go to <strong>Pay / Send</strong>.</li>
          <li>
            Send exactly <strong className="text-green-300">${PRICE} USDT</strong> to this Binance
            ID:
          </li>
        </ol>
        <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3">
          <code className="break-all font-mono text-lg font-bold text-green-300">{binanceId}</code>
        </div>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-300" start={3}>
          <li>Double-check the amount: it must be exactly <strong>${PRICE} USDT</strong>.</li>
          <li>Take a screenshot of the completed transfer.</li>
        </ol>
      </div>

      <div className="card mt-6">
        <h2 className="text-lg font-semibold">Step 2 — Submit your payment below</h2>
        <p className="mt-2 text-sm text-slate-400">
          Upload the screenshot and your transaction ID. We review every payment manually and
          activate Pro access, usually within a few hours.
        </p>
        <div className="mt-6">
          <PaymentForm binanceId={binanceId} />
        </div>
      </div>
    </main>
  );
}
