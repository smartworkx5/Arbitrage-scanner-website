import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";
import { Breadcrumbs } from "@/app/components/Seo";

export const metadata: Metadata = {
  title: "Crypto Arbitrage Guides — Strategies Explained Step by Step",
  description:
    "Free in-depth guides to crypto arbitrage strategies: cross-exchange, triangular, funding-rate (cash-and-carry) and CEX vs DEX arbitrage. Learn how each works, what it costs, and the risks.",
  keywords: [
    "crypto arbitrage guide",
    "crypto arbitrage strategies",
    "how crypto arbitrage works",
    "arbitrage trading guide",
  ],
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/guides`,
    title: "Crypto Arbitrage Guides",
    description:
      "Master cross-exchange, triangular, funding-rate and CEX vs DEX arbitrage with free step-by-step guides.",
  },
};

export default function GuidesHub() {
  return (
    <div className="min-h-screen bg-[#0a0e17]">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <Breadcrumbs items={[{ label: "Guides" }]} />
        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Crypto Arbitrage Guides
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          Free, in-depth guides to every major crypto arbitrage strategy — how
          each one works, what it really costs, and the risks nobody tells you
          about. Start with the basics, then go deeper.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="card group hover:border-emerald-500/40"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                {g.category} · {g.readingMinutes} min read
              </p>
              <h2 className="mt-2 text-xl font-bold text-white group-hover:text-emerald-300">
                {g.title}
              </h2>
              <p className="mt-2 text-slate-400">{g.excerpt}</p>
              <p className="mt-3 text-sm font-medium text-emerald-300">
                Read guide →
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h2 className="text-xl font-bold text-white">New to arbitrage?</h2>
          <p className="mt-2 text-slate-400">
            Start with our beginner-friendly explainer{" "}
            <Link href="/blog/what-is-crypto-arbitrage" className="text-emerald-300 underline">
              What Is Crypto Arbitrage?
            </Link>{" "}
            or browse the{" "}
            <Link href="/glossary" className="text-emerald-300 underline">
              arbitrage glossary
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
