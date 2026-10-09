import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { ArticleBody } from "@/app/components/ArticleBody";
import { Breadcrumbs, faqJsonLd } from "@/app/components/Seo";
import type { ContentBlock } from "@/lib/content";

export const metadata: Metadata = {
  title: "Best Crypto Arbitrage Scanners — What to Look For (2026)",
  description:
    "Compare crypto arbitrage scanners: what separates a great scanner from a gimmick. Exchange coverage, speed, strategy support, paper trading and pricing — explained honestly.",
  keywords: [
    "best crypto arbitrage scanner",
    "crypto arbitrage scanner comparison",
    "top arbitrage tools crypto",
    "crypto arbitrage software",
    "best crypto arbitrage bot",
  ],
  alternates: { canonical: `${SITE_URL}/best-crypto-arbitrage-scanners` },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/best-crypto-arbitrage-scanners`,
    title: "Best Crypto Arbitrage Scanners — What to Look For",
    description:
      "Exchange coverage, speed, strategies, paper trading, pricing: how to choose a crypto arbitrage scanner without getting burned.",
  },
};

const blocks: ContentBlock[] = [
  {
    type: "p",
    text: "Searching for the **best crypto arbitrage scanner**? The market is full of tools promising risk-free profits — most of them disappoint. This guide explains what actually matters when choosing one, how the main approaches compare, and where Crypto Arbitrage Scanner fits in. No hype, just the criteria professionals use.",
  },
  { type: "h2", text: "What a good arbitrage scanner must do" },
  {
    type: "list",
    items: [
      "**Broad exchange coverage:** arbitrage lives in price differences *between* venues. A scanner watching 3–4 exchanges sees a fraction of the opportunities one watching 16 does.",
      "**Real-time data:** spreads often last seconds. If the scanner refreshes every minute, you are looking at history, not opportunity.",
      "**Net-spread ranking:** gross spreads lie. A serious tool accounts for trading fees so you see *executable* profit, not fantasy numbers.",
      "**Multiple strategies:** cross-exchange, CEX vs DEX, triangular and funding-rate arbitrage behave differently — coverage of all four multiplies your chances.",
      "**Paper trading:** you should be able to rehearse execution with virtual money before risking capital.",
      "**Honest pricing:** subscriptions that cost more than your edge are a losing trade by themselves.",
    ],
  },
  { type: "h2", text: "The four ways traders find arbitrage" },
  {
    type: "table",
    headers: ["Approach", "Speed", "Coverage", "Cost", "Best for"],
    rows: [
      ["**Manual checking**", "Minutes", "2–3 exchanges", "Free", "Learning the concepts"],
      ["**Spreadsheet + APIs**", "Seconds–minutes", "As many as you code", "Your time", "Developers"],
      ["**Generic trading bots**", "Fast", "Varies", "$30–$100+/mo", "Automation-first traders"],
      ["**Crypto Arbitrage Scanner**", "Real-time", "**16 exchanges**", "**$24.99 once**", "Retail traders who want it working now"],
    ],
  },
  {
    type: "p",
    text: "Manual checking is free but cannot compete with spreads that live for seconds. Building your own API stack works if you code — budget weekends, not hours. Generic bots are powerful but complex, and their subscriptions quietly eat small edges. A purpose-built scanner is the pragmatic middle ground: turn it on, see ranked opportunities, practice with paper trading.",
  },
  { type: "h2", text: "How Crypto Arbitrage Scanner compares" },
  {
    type: "list",
    items: [
      "**16 exchanges monitored simultaneously** — cross-exchange spreads, CEX vs DEX gaps, triangular loops and funding-rate opportunities in one view.",
      "**Ranked by profit potential** — opportunities sorted so the best net spreads surface first.",
      "**Paper trading bot included** — execute every strategy with virtual money and build a track record before going live.",
      "**One-time $24.99, not a subscription** — most competing tools charge $30–$100 *per month*. A subscription has to be beaten by your edge every single month; a one-time payment does not.",
      "**3-day free trial** — full access with just a Google sign-in, no credit card, so you can verify it works for you before paying anything.",
    ],
  },
  {
    type: "callout",
    title: "Our honest take",
    text: "No scanner — ours included — prints money on its own. What a good scanner does is compress hours of manual checking into seconds and stop you from chasing fake spreads. The edge still comes from your execution, position sizing and risk management.",
    tone: "info",
  },
  { type: "h2", text: "Red flags to avoid" },
  {
    type: "list",
    items: [
      "**Guaranteed profit claims** — anyone promising risk-free returns is selling something other than a scanner.",
      "**No trial or refund path** — if you cannot test it, do not buy it.",
      "**Vague exchange coverage** — 'many exchanges' without naming them usually means few.",
      "**Monthly fees above your realistic edge** — do the math on your capital size first.",
    ],
  },
  {
    type: "faq",
    items: [
      {
        q: "What is the best crypto arbitrage scanner for beginners?",
        a: "Beginners do best with a scanner that combines broad exchange coverage, real-time alerts and paper trading — so you can learn execution without risking money. A free trial is essential: test whether you can actually act on the opportunities before paying.",
      },
      {
        q: "How much should a crypto arbitrage scanner cost?",
        a: "Subscription scanners typically run $30–$100/month, which is hard to justify on small capital. A one-time payment (like our $24.99 Pro) removes the monthly hurdle entirely.",
      },
      {
        q: "Can a scanner guarantee arbitrage profits?",
        a: "No — and distrust any tool that says otherwise. Scanners find opportunities; profit depends on your speed, fees, capital and discipline. Paper trading first is non-negotiable.",
      },
    ],
  },
];

const faqs = [
  {
    q: "What is the best crypto arbitrage scanner for beginners?",
    a: "Beginners do best with a scanner that combines broad exchange coverage, real-time alerts and paper trading — so you can learn execution without risking money. A free trial is essential: test whether you can actually act on the opportunities before paying.",
  },
  {
    q: "How much should a crypto arbitrage scanner cost?",
    a: "Subscription scanners typically run $30–$100/month, which is hard to justify on small capital. A one-time payment (like our $24.99 Pro) removes the monthly hurdle entirely.",
  },
  {
    q: "Can a scanner guarantee arbitrage profits?",
    a: "No — and distrust any tool that says otherwise. Scanners find opportunities; profit depends on your speed, fees, capital and discipline. Paper trading first is non-negotiable.",
  },
];

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-[#0a0e17]">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
        <Breadcrumbs items={[{ label: "Best Crypto Arbitrage Scanners" }]} />
        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Best Crypto Arbitrage Scanners: What to Look For
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          An honest buyer's guide — the criteria that matter, how the main
          approaches compare, and the red flags to avoid.
        </p>
        <div className="mt-8">
          <ArticleBody blocks={blocks} />
        </div>
        <div className="mt-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 text-center">
          <h2 className="text-xl font-bold text-white">
            Try {SITE_NAME} free for 3 days
          </h2>
          <p className="mt-2 text-slate-300">
            Full access — 16 exchanges, all 4 strategies, paper trading bot. No
            credit card.
          </p>
          <Link href="/signin" className="btn-primary mt-4 inline-block">
            Start Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
}
