import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pairs } from "@/lib/pairs";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { Breadcrumbs, articleJsonLd, faqJsonLd } from "@/app/components/Seo";

export async function generateStaticParams() {
  return pairs.map((p) => ({ pair: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { pair: string };
}): Promise<Metadata> {
  const pair = pairs.find((p) => p.slug === params.pair);
  if (!pair) return {};
  const title = `${pair.a} vs ${pair.b} Arbitrage — Price Differences Explained`;
  const description = `Why ${pair.a} and ${pair.b} price the same crypto differently, what it costs to arbitrage between them, and how traders capture the spread.`;
  return {
    title,
    description,
    keywords: [
      `${pair.a.toLowerCase()} ${pair.b.toLowerCase()} arbitrage`,
      `crypto arbitrage ${pair.a.toLowerCase()}`,
      `${pair.a.toLowerCase()} vs ${pair.b.toLowerCase()} price difference`,
      "cross exchange arbitrage",
    ],
    alternates: { canonical: `${SITE_URL}/arbitrage/${pair.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/arbitrage/${pair.slug}`,
      title,
      description,
    },
  };
}

export default function PairPage({ params }: { params: { pair: string } }) {
  const pair = pairs.find((p) => p.slug === params.pair);
  if (!pair) notFound();

  const url = `${SITE_URL}/arbitrage/${pair.slug}`;
  const related = pairs.filter((p) => p.slug !== pair.slug).slice(0, 4);
  const faqs = [
    {
      q: `Can I arbitrage between ${pair.a} and ${pair.b}?`,
      a: `Yes. Like any two exchanges with separate order books, ${pair.a} and ${pair.b} price the same tokens differently at times. Profitability depends on the spread surviving trading fees, withdrawal/network costs and slippage — always calculate net, not gross.`,
    },
    {
      q: `How long do ${pair.a} vs ${pair.b} price gaps last?`,
      a: `It varies from seconds (during volatile bursts) to hours (during trending markets or listing events). Pre-funded balances on both exchanges let you act on short-lived gaps; transfer-based execution suits longer-lasting ones.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e17]">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              articleJsonLd({
                title: `${pair.a} vs ${pair.b} Arbitrage`,
                description: `Price differences between ${pair.a} and ${pair.b} explained: causes, costs and execution.`,
                url,
                datePublished: "2026-10-05",
                dateModified: "2026-10-05",
              })
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
        <Breadcrumbs
          items={[
            { label: "Arbitrage", href: "/arbitrage" },
            { label: `${pair.a} vs ${pair.b}` },
          ]}
        />

        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          {pair.a} vs {pair.b} Arbitrage
        </h1>
        <p className="mt-3 text-slate-500">
          Updated October 2026 · Fee figures are typical retail tiers — always
          confirm current fees on each exchange.
        </p>

        {pair.intro.map((t, i) => (
          <p key={i} className="mt-4 leading-relaxed text-slate-300">
            {t}
          </p>
        ))}

        <h2 className="pt-6 text-2xl font-bold text-white">
          Why {pair.a} and {pair.b} prices diverge
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-slate-300">
          {pair.whyDiverges.map((w, i) => (
            <li key={i}>{w}</li>
          ))}
        </ul>

        <h2 className="pt-6 text-2xl font-bold text-white">Fee comparison</h2>
        <div className="mt-3 overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead>
              <tr className="bg-slate-900/80">
                <th className="px-4 py-3 font-semibold text-white">Exchange</th>
                <th className="px-4 py-3 font-semibold text-white">
                  Typical spot fee
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-800/60">
                <td className="px-4 py-3 text-slate-200">{pair.a}</td>
                <td className="px-4 py-3 text-slate-300">{pair.aFee}</td>
              </tr>
              <tr className="border-t border-slate-800/60">
                <td className="px-4 py-3 text-slate-200">{pair.b}</td>
                <td className="px-4 py-3 text-slate-300">{pair.bFee}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="pt-6 text-2xl font-bold text-white">
          Moving funds between {pair.a} and {pair.b}
        </h2>
        <p className="mt-3 leading-relaxed text-slate-300">
          {pair.transferNotes}
        </p>

        <h2 className="pt-6 text-2xl font-bold text-white">
          Tips for this pair
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-slate-300">
          {pair.tips.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>

        <h2 className="pt-6 text-2xl font-bold text-white">
          Frequently asked questions
        </h2>
        <div className="mt-3 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"
            >
              <summary className="cursor-pointer font-medium text-white">
                {f.q}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6">
          <h2 className="text-xl font-bold text-white">
            Scan {pair.a} vs {pair.b} spreads live
          </h2>
          <p className="mt-2 text-slate-300">
            {SITE_NAME} watches 16 exchanges in real time and ranks {pair.a}–
            {pair.b} opportunities by net spread — try it free for 3 days.
          </p>
          <Link href="/signin" className="btn-primary mt-4 inline-block">
            Start Free 3-Day Trial
          </Link>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-bold text-white">
            More exchange comparisons
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/arbitrage/${r.slug}`}
                className="card hover:border-emerald-500/40"
              >
                <p className="font-semibold text-white">
                  {r.a} vs {r.b} Arbitrage
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Spreads, fees and execution tips →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
