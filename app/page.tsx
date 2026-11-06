import type { Metadata } from "next";
import Link from "next/link";
import { sql } from "@vercel/postgres";
import {
  Target,
  Scale,
  BarChart3,
  TrendingUp,
  LayoutGrid,
  Star,
  Calculator as CalculatorIcon,
  SlidersHorizontal,
  Bot,
  Zap,
  Check,
  type LucideIcon,
} from "lucide-react";
import { LaunchAppButton } from "./LaunchAppButton";
import { faqJsonLd } from "./components/Seo";
import ScreenshotCarousel from "./components/ScreenshotCarousel";
import LazyLiveSpreads from "./components/LazyLiveSpreads";
import { PricingCards, HowPayingWorks } from "./components/PricingCards";
import { EXCHANGE_COUNT, SITE_DESCRIPTION } from "@/lib/site";

export const revalidate = 300;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://cryptoscopia.com";

async function getRegisteredUserCount(): Promise<number | null> {
  try {
    const { rows } = await sql`SELECT COUNT(*)::int AS c FROM users`;
    const c = Number((rows[0] as { c?: number | string } | undefined)?.c ?? NaN);
    return Number.isFinite(c) ? c : null;
  } catch {
    return null;
  }
}

const appScreenshots = [
  { tab: "Spot Matrix", desc: `2,355 arbitrage pairs found across ${EXCHANGE_COUNT} exchanges`, img: "https://aeb9hcvyfaw2hgog.public.blob.vercel-storage.com/app-screenshots/scanner-spot-matrix-Np57AV5jPoRihaeWtLBQzqF10atLNJ.jpg" },
  { tab: "CEX vs DEX", desc: "46 CEX vs DEX opportunities with profit calculator", img: "https://aeb9hcvyfaw2hgog.public.blob.vercel-storage.com/app-screenshots/cex-vs-dex-0EiOnCDYaRAb9HorNbHrBpx55rzDZH.jpg" },
  { tab: "Spread Analyzer", desc: "Bid/ask spreads ranked — spot gaps instantly", img: "https://aeb9hcvyfaw2hgog.public.blob.vercel-storage.com/app-screenshots/spread-analyzer-Y7NNBcDrGzGAlu9UNuToC6vQ7yjK4o.jpg" },
  { tab: "Top Movers", desc: "Biggest gainers with arbitrage routes mapped", img: "https://aeb9hcvyfaw2hgog.public.blob.vercel-storage.com/app-screenshots/top-movers-gH02EZ8gO21xMLys7zLT7uEFh0n4qI.jpg" },
];

export const metadata: Metadata = {
  title: `Cryptoscopia | Crypto Arbitrage Scanner — Real-Time Price Gaps Across ${EXCHANGE_COUNT} Exchanges`,
  description: SITE_DESCRIPTION,
  keywords: [
    "crypto arbitrage scanner",
    "crypto arbitrage finder",
    "cross exchange arbitrage",
    "CEX DEX arbitrage",
    "triangular arbitrage crypto",
    "funding rate arbitrage",
    "top gainers losers crypto",
    "crypto trade scanner",
    "paper trading bot",
    "Crypto Arbitrage Scanner",
    "crypto arbitrage matrix",
  ],
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "website",
    url: `${siteUrl}/`,
    siteName: "Cryptoscopia",
    title: `Cryptoscopia | Crypto Arbitrage Scanner — Real-Time Price Gaps Across ${EXCHANGE_COUNT} Exchanges`,
    description:
      `Find real-time crypto arbitrage opportunities across ${EXCHANGE_COUNT} exchanges — cross-exchange, CEX vs DEX, triangular and funding-rate spreads, plus a paper trading bot to practice risk-free. Free 3-day trial.`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cryptoscopia | Crypto Arbitrage Scanner",
    description:
      `Real-time arbitrage scanning across ${EXCHANGE_COUNT} exchanges, plus a paper trading bot. Free 3-day trial, no credit card required.`,
  },
  robots: { index: true, follow: true },
};

interface Feature {
  title: string;
  text: string;
  icon: LucideIcon;
  tab: string;
}

const features: Feature[] = [
  {
    title: "Arbitrage Scanner",
    text: `The core engine. Scans ${EXCHANGE_COUNT} exchanges in real time, finds price differences on the same token, and ranks every opportunity by profit potential. Switch between cards and table view.`,
    icon: Target,
    tab: "Scanner",
  },
  {
    title: "CEX vs DEX Arbitrage",
    text: "Compares centralized exchange prices against decentralized pools. Built-in calculator shows exact profit after gas fees and slippage.",
    icon: Scale,
    tab: "CEX vs DEX",
  },
  {
    title: "Spread Analyzer",
    text: `See the full spread picture across all ${EXCHANGE_COUNT} exchanges for any token. Know exactly where to buy low and sell high.`,
    icon: BarChart3,
    tab: "Spread",
  },
  {
    title: "Top Movers",
    text: "Live ranking of the biggest gainers and losers across every connected exchange. Your watchlist of exactly where the action is.",
    icon: TrendingUp,
    tab: "Movers",
  },
  {
    title: `${EXCHANGE_COUNT}-Exchange Grid`,
    text: `All ${EXCHANGE_COUNT} connected exchanges in one visual grid. See which exchanges are live, their status, and jump straight to opportunities.`,
    icon: LayoutGrid,
    tab: "Exchanges",
  },
  {
    title: "Smart Watchlist",
    text: "Track your favorite tokens. Get instant alerts when an arbitrage gap appears on anything you're watching.",
    icon: Star,
    tab: "Watchlist",
  },
  {
    title: "Profit Calculator",
    text: "Every opportunity includes a one-click calculator. Enter your amount, see net profit after all fees — before you trade.",
    icon: CalculatorIcon,
    tab: "Calculator",
  },
  {
    title: "Advanced Filters",
    text: "Filter by minimum spread, volume, exchange, or token. Sort by profit, spread %, or recency. Find exactly what you want in seconds.",
    icon: SlidersHorizontal,
    tab: "Filters",
  },
  {
    title: "Paper Trading Bot",
    text: "Practice every opportunity with virtual money before risking a cent. Test strategies, build confidence, go live when you're ready.",
    icon: Bot,
    tab: "Paper Trade",
  },
];

const steps = [
  {
    n: "1",
    title: "Sign in with Google",
    text: "One click with your Google account starts your free 3-day trial instantly. No credit card, no forms.",
  },
  {
    n: "2",
    title: "Scan for arbitrage",
    text: `Open the scanner, watch top gainers and losers update live, and see arbitrage spreads ranked across ${EXCHANGE_COUNT} exchanges.`,
  },
  {
    n: "3",
    title: "Upgrade to Pro",
    text: "Love it? Unlock unlimited access for just $24.99/month via Binance — pay with your payment note code, tap Check for auto-verification, with manual screenshot review as the fallback.",
  },
];

const faqs = [
  {
    q: "How does the free 3-day trial work?",
    a: `Sign in with your Google account and you get full access — the Arbitrage Matrix, all ${EXCHANGE_COUNT} exchanges, and the paper trading bot — for 3 days, completely free. No credit card required. When the trial ends you simply lose access until you upgrade to Pro.`,
  },
      {
    q: "How much does Pro cost?",
    a: "Pro is $24.99 per month — a monthly plan, not a one-time payment. Pay via Binance, and each monthly payment keeps your Pro access active for that month. There are no hidden fees.",
  },
  {
    q: "How do I pay for Pro?",
    a: "Pay via Binance in 3 steps: 1) On the payment page, send exactly 24.99 USDT to our Binance ID (346894283) and put your payment note code in the Binance Pay note. 2) Tap Check payment status for auto-verification — or upload a screenshot of the transfer with your transaction ID for manual review. 3) Pro activates when your payment is matched; manual screenshot review remains the fallback if the auto-check does not match yet. Sent the wrong amount or network? Contact us and we'll sort it out.",
  },
  {
    q: "How long does payment approval take?",
    a: "Auto-check runs when you tap Check payment status after paying — if your payment matches by note code or transaction ID, Pro activates then. If it does not match yet, manual screenshot review remains the fallback. You'll see the 'Pro Active' status on your dashboard as soon as it's approved.",
  },
  {
    q: "Do you offer refunds?",
    a: "Because Pro is a monthly digital access plan, a payment is final once that month's access is granted. That's exactly why we give you a full 3-day free trial first — try everything before you pay a cent.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. Cryptoscopia is a web app that runs in your browser on desktop and mobile. Click 'Launch App' and you're in.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Cryptoscopia",
  alternateName: "Crypto Arbitrage Scanner",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://cryptoscopia.com/app",
  description:
    `Real-time crypto arbitrage scanner: finds top gainers and losers, detects cross-exchange, CEX vs DEX, triangular and funding-rate arbitrage across ${EXCHANGE_COUNT} exchanges, with a paper trading bot for risk-free practice.`,
  offers: {
    "@type": "Offer",
    price: "24.99",
    priceCurrency: "USD",
    description: "Pro access — $24.99 per month",
  },
};

export default async function LandingPage() {
  const registeredUsers = await getRegisteredUserCount();
  const stats: [string, string][] = [
    [String(EXCHANGE_COUNT), "Exchanges scanned"],
    ...(registeredUsers !== null && registeredUsers >= 100
      ? ([[registeredUsers.toLocaleString("en-US"), "Registered users"]] as [string, string][])
      : []),
    ["4", "Arbitrage strategies"],
    ["$24.99", "Per month Pro price"],
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqJsonLd(faqs)]) }} />

      {/* Header, footer and mobile trial bar come from the shared shell
          in app/layout.tsx (SiteHeader / SiteFooter / MobileTrialBar). */}
        {/* ---------- Hero: copy, then the live proof table ---------- */}
        <section className="px-4 pb-16 pt-14 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-300">
              <Zap className="h-4 w-4" aria-hidden />
              Real-time arbitrage scanning across {EXCHANGE_COUNT} exchanges
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Find <span className="text-emerald-400">crypto arbitrage gaps</span>
              <br />
              across {EXCHANGE_COUNT} exchanges — before they close
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Cryptoscopia scans the <strong className="text-slate-200">top gainers and losers</strong> across
              <strong className="text-slate-200"> {EXCHANGE_COUNT} exchanges</strong> in real time and ranks the best price differences for you.
              Built for retail traders — no coding, nothing to install. Practice risk-free with the built-in
              <strong className="text-slate-200"> paper trading bot</strong>.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/signin" className="btn-primary w-full sm:w-auto">
                Start Free 3-Day Trial
              </Link>
              <LaunchAppButton className="font-medium text-emerald-400 underline hover:text-emerald-300">
                Launch App ↗
              </LaunchAppButton>
            </div>
            <p className="mt-4 text-sm text-slate-400">No credit card required · Full access for 3 days</p>
            <p className="mt-2 text-xs text-slate-400">No scanner can guarantee profits — Cryptoscopia finds the gaps; you decide the trades.</p>
            <dl className={`mx-auto mt-10 grid max-w-xl grid-cols-2 gap-6 ${stats.length >= 4 ? "sm:grid-cols-4" : "sm:grid-cols-3"}`}>
              {stats.map(([v, l]) => (
                <div key={l} className="text-center">
                  <dt className="sr-only">{l}</dt>
                  <dd className="data text-2xl font-extrabold text-white md:text-3xl">{v}</dd>
                  <dd className="mt-1 text-xs text-slate-400">{l}</dd>
                </div>
              ))}
            </dl>
            <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-slate-400">
              Scanning: Binance · Bybit · OKX · KuCoin · Gate.io · MEXC · Bitget · HTX · CoinEx · BitMart · LBank · XT.com · Bitrue · CEX.io · Coinstore · + DEX pools
            </p>
          </div>

          {/* Live proof — the hero's evidence: real spreads, ranked by
              estimated net after fees, best first. */}
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-400">Live Proof</p>
              <h2 className="text-3xl font-bold md:text-4xl">Live net spreads, right now</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                A no-signup preview of the highest-volume pairs across the exchanges we track,
                refreshed every minute. This is the same kind of table the full scanner builds on —
                with more pairs, more exchanges, and net after withdrawal fees and executable depth in the app.
                Rows are ranked by estimated net after fees, best first. If even the best preview rows are
                net-negative after fees, we still show them exactly as they are — the full scanner watches
                the whole market and filters for net-positive opportunities.
              </p>
            </div>
            <div className="mt-8">
              <LazyLiveSpreads />
              <p className="mt-3 text-xs text-slate-400">
                Est. net is after taker fees on both sides, before withdrawal/transfer fees. This is a
                no-signup preview of the top pairs; the full scanner in the app shows net after the
                cheapest open withdrawal fee and executable depth.
              </p>
              <p className="mt-3 text-sm text-slate-400">
                See more on the{" "}
                <Link href="/live" className="text-emerald-400 hover:text-emerald-300">live spreads page</Link>,{" "}
                <Link href="/app" className="text-emerald-400 hover:text-emerald-300">open the full app</Link>, or{" "}
                <Link href="/arbitrage-calculator" className="text-emerald-400 hover:text-emerald-300">try the no-signup arbitrage calculator</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Trust strip ---------- */}
        <section aria-label="Trial basics" className="border-y border-slate-800/80 bg-[#0d1320] px-4 py-5">
          <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-3 text-center text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "No credit card required",
              "Full access for 3 days",
              "$24.99/month for Pro after the trial",
              "Runs in your browser — nothing to install",
            ].map((li) => (
              <li key={li} className="flex items-center justify-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                {li}
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Screenshots ---------- */}
        <section className="mx-auto max-w-3xl px-4 py-16">
          <ScreenshotCarousel shots={appScreenshots} />
          <p className="mt-4 text-center text-sm text-slate-400">
            Real screenshots from the live app — no mockups, no fake UI.
          </p>
          <div className="mt-3 text-center">
            <LaunchAppButton className="font-medium text-emerald-400 underline hover:text-emerald-300">
              Launch the App & See For Yourself ↗
            </LaunchAppButton>
          </div>
        </section>

        <div className="section-divider" />

        {/* ---------- Features (editorial, alternating) ---------- */}
        <section id="features" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-16 md:py-20">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-400">Inside the App</p>
            <h2 className="text-3xl font-bold md:text-4xl">Every tool you need to find arbitrage</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              9 powerful features, one app. This is exactly what you get when you launch the scanner.
            </p>
          </div>
          <div className="mt-6">
            {features.map((f, i) => (
              <article
                key={f.title}
                className={`flex gap-5 border-t border-slate-800/70 py-8 first:border-t-0 sm:gap-8 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-900">
                  <f.icon className="h-6 w-6 text-emerald-400" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{f.tab}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-400">{f.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* ---------- How it works ---------- */}
        <section id="how-it-works" className="border-y border-slate-800/60 bg-[#0d1320] px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold md:text-4xl">Get started in 3 steps</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <article key={s.n} className="card card-hover relative">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white">
                    {s.n}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Pricing (facts: lib/pricing.ts) ---------- */}
        <section id="pricing" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Simple, honest pricing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            Try everything free for 3 days. Then Pro is just $24.99/month.
          </p>
          <div className="mt-10">
            <PricingCards />
            <HowPayingWorks />
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Frequently asked questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card !p-5">
                <summary className="cursor-pointer font-semibold text-slate-100">{f.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ---------- Learn / Resources ---------- */}
        <section className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-center text-2xl font-bold md:text-3xl">Learn crypto arbitrage</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-400">
            Free guides and explainers — understand the strategies before you trade them.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/guides/cross-exchange-arbitrage" className="card hover:border-emerald-500/40">
              <h3 className="font-bold text-white">Cross-Exchange Arbitrage</h3>
              <p className="mt-2 text-sm text-slate-400">Buy low on one exchange, sell high on another — the complete guide.</p>
            </Link>
            <Link href="/guides/triangular-arbitrage" className="card hover:border-emerald-500/40">
              <h3 className="font-bold text-white">Triangular Arbitrage</h3>
              <p className="mt-2 text-sm text-slate-400">Three trades, one exchange, zero transfers. How the loop works.</p>
            </Link>
            <Link href="/guides/funding-rate-arbitrage" className="card hover:border-emerald-500/40">
              <h3 className="font-bold text-white">Funding-Rate Arbitrage</h3>
              <p className="mt-2 text-sm text-slate-400">Earn yield market-neutral with the cash-and-carry trade.</p>
            </Link>
            <Link href="/best-crypto-arbitrage-scanners" className="card hover:border-emerald-500/40">
              <h3 className="font-bold text-white">Best Arbitrage Scanners</h3>
              <p className="mt-2 text-sm text-slate-400">What separates a great scanner from a gimmick — honest buyer's guide.</p>
            </Link>
          </div>
          <p className="mt-6 text-center text-sm text-slate-400">
            More: <Link href="/guides" className="text-emerald-300 underline">all guides</Link> ·{" "}
            <Link href="/blog" className="text-emerald-300 underline">blog</Link> ·{" "}
            <Link href="/arbitrage" className="text-emerald-300 underline">exchange comparisons</Link> ·{" "}
            <Link href="/glossary" className="text-emerald-300 underline">glossary</Link>
          </p>
        </section>

        {/* ---------- Final CTA ---------- */}
        <section className="mx-auto max-w-4xl px-4 pb-20">
          <div className="card !border-emerald-500/30 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Stop missing the spreads that matter</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-400">
              Join Cryptoscopia today. Your first 3 days are on us.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/signin" className="btn-primary w-full sm:w-auto">Start Free 3-Day Trial</Link>
              <LaunchAppButton className="btn-secondary w-full sm:w-auto">
                Launch App ↗
              </LaunchAppButton>
            </div>
          </div>
        </section>
    </>
  );
}
