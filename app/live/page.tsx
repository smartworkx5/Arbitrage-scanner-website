import type { Metadata } from "next";
import Link from "next/link";
import TrialCta from "@/app/components/TrialCta";
import LiveSpreads from "./LiveSpreads";

export const metadata: Metadata = {
  title: "Live Crypto Arbitrage Spreads — Free Preview",
  description:
    "See live crypto arbitrage spreads across Binance, Bybit, OKX, KuCoin and Gate.io — a free preview of the full Cryptoscopia scanner: price gaps, best buy/sell exchanges and estimated profit after fees, updated every minute.",
  alternates: { canonical: "/live/" },
  openGraph: {
    type: "website",
    title: "Live Crypto Arbitrage Spreads — Free Preview | Cryptoscopia",
    description:
      "Free live preview: the biggest crypto price gaps between exchanges right now, with estimated net spread after fees.",
  },
};

export default function LiveSpreadsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <img src="/images/logo-mark.svg" alt="Cryptoscopia logo" width={30} height={30} />
          <span className="gradient-text">Cryptoscopia</span>
        </Link>
        <Link href="/signin" className="btn-primary hidden !px-4 !py-2 text-sm sm:inline-flex">
          Free Trial
        </Link>
      </header>

      <div className="max-w-3xl">
        <p className="mb-4 inline-block rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-sm text-green-300">
          Free preview — live exchange data
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Live crypto arbitrage spreads
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          The table below compares real prices on Binance, Bybit, OKX, KuCoin
          and Gate.io right now and shows where the same coin is cheaper on one
          exchange than another — the gap arbitrage traders look for.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          <strong className="text-slate-300">Please note:</strong> this is a
          free, slightly delayed preview that refreshes about once a minute and
          covers only the highest-volume pairs on 5 exchanges. The full
          Cryptoscopia scanner tracks all 16 exchanges in real time, with the
          complete opportunity list, CEX vs DEX, triangular and funding-rate
          scanning, alerts, and a paper trading bot to practice risk-free.
          Spreads move fast and can vanish before a transfer completes — a
          positive number here is never a guaranteed profit.
        </p>
      </div>

      <div className="mt-8">
        <LiveSpreads />
      </div>

      <section className="mx-auto mt-14 max-w-3xl">
        <h2 className="text-center text-2xl font-bold">What the full scanner adds</h2>
        <ul className="mx-auto mt-6 grid max-w-2xl gap-3 text-sm text-slate-300 sm:grid-cols-2">
          {[
            "All 16 exchanges in real time — not a 1-minute delayed preview",
            "Every tradable pair, ranked by spread and profit potential",
            "CEX vs DEX, triangular and funding-rate arbitrage scanners",
            "Real-time alerts when a gap opens",
            "Paper trading bot — practice the full loop with virtual money",
            "Fee-aware profit estimates on every opportunity",
          ].map((li) => (
            <li key={li} className="flex gap-2">
              <span className="text-green-400">✓</span>
              {li}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10">
        <TrialCta />
      </div>
    </main>
  );
}
