import type { Metadata } from "next";
import Link from "next/link";
import { pairs } from "@/lib/pairs";
import { SITE_URL } from "@/lib/site";
import { Breadcrumbs } from "@/app/components/Seo";

export const metadata: Metadata = {
  title: "Exchange Arbitrage Comparisons — Spreads, Fees & Execution Tips",
  description:
    "Which exchange pairs offer the best crypto arbitrage? Compare price differences, fees and transfer realities for Binance, Kraken, Coinbase, Bybit, OKX and more.",
  keywords: [
    "crypto arbitrage exchanges",
    "binance kraken arbitrage",
    "exchange price comparison crypto",
    "best exchanges for arbitrage",
  ],
  alternates: { canonical: `${SITE_URL}/arbitrage` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/arbitrage`,
    title: "Exchange Arbitrage Comparisons",
    description:
      "Spreads, fees and execution tips for the top crypto exchange pairs.",
  },
};

export default function ArbitrageHub() {
  return (
    <div className="min-h-screen bg-[#0a0e17]">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <Breadcrumbs items={[{ label: "Arbitrage" }]} />
        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Crypto Arbitrage by Exchange Pair
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          Not all exchange pairs are equal for arbitrage. Each comparison
          below breaks down <strong className="text-slate-200">why prices diverge</strong>,
          what it <strong className="text-slate-200">really costs</strong> to
          trade the gap, and how to execute — so you pick the right venues for
          your strategy.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {pairs.map((p) => (
            <Link
              key={p.slug}
              href={`/arbitrage/${p.slug}`}
              className="card group hover:border-emerald-500/40"
            >
              <h2 className="text-xl font-bold text-white group-hover:text-emerald-300">
                {p.a} vs {p.b} Arbitrage
              </h2>
              <p className="mt-2 line-clamp-2 text-slate-400">{p.intro[0]}</p>
              <p className="mt-3 text-sm font-medium text-emerald-300">
                Read comparison →
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-slate-300">
            Want the theory first? Read{" "}
            <Link href="/guides/cross-exchange-arbitrage" className="text-emerald-300 underline">
              Cross-Exchange Arbitrage: The Complete Guide
            </Link>{" "}
            or browse all{" "}
            <Link href="/guides" className="text-emerald-300 underline">
              strategy guides
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
