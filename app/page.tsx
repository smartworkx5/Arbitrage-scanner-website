import type { Metadata } from "next";
import Link from "next/link";
import { sql } from "@vercel/postgres";
import { LaunchAppButton } from "./LaunchAppButton";
import HeaderAuth from "./components/HeaderAuth";
import { MobileMenu } from "./MobileMenu";
import { faqJsonLd } from "./components/Seo";
import ScreenshotCarousel from "./components/ScreenshotCarousel";
import LazyLiveSpreads from "./components/LazyLiveSpreads";

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
  { tab: "Spot Matrix", desc: "2,355 arbitrage pairs found across 16 exchanges", img: "https://aeb9hcvyfaw2hgog.public.blob.vercel-storage.com/app-screenshots/scanner-spot-matrix-Np57AV5jPoRihaeWtLBQzqF10atLNJ.jpg" },
  { tab: "CEX vs DEX", desc: "46 CEX vs DEX opportunities with profit calculator", img: "https://aeb9hcvyfaw2hgog.public.blob.vercel-storage.com/app-screenshots/cex-vs-dex-0EiOnCDYaRAb9HorNbHrBpx55rzDZH.jpg" },
  { tab: "Spread Analyzer", desc: "Bid/ask spreads ranked — spot gaps instantly", img: "https://aeb9hcvyfaw2hgog.public.blob.vercel-storage.com/app-screenshots/spread-analyzer-Y7NNBcDrGzGAlu9UNuToC6vQ7yjK4o.jpg" },
  { tab: "Top Movers", desc: "Biggest gainers with arbitrage routes mapped", img: "https://aeb9hcvyfaw2hgog.public.blob.vercel-storage.com/app-screenshots/top-movers-gH02EZ8gO21xMLys7zLT7uEFh0n4qI.jpg" },
];

export const metadata: Metadata = {
  title: "Cryptoscopia | Crypto Arbitrage Scanner — Real-Time Price Gaps Across 16 Exchanges",
  description:
    "Cryptoscopia is a real-time crypto arbitrage scanner comparing prices across 16 exchanges — cross-exchange, triangular & funding-rate spreads. Free 3-day trial.",
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
    title: "Cryptoscopia | Crypto Arbitrage Scanner — Real-Time Price Gaps Across 16 Exchanges",
    description:
      "Find real-time crypto arbitrage opportunities across 16 exchanges — cross-exchange, CEX vs DEX, triangular and funding-rate spreads, plus a paper trading bot to practice risk-free. Free 3-day trial.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cryptoscopia | Crypto Arbitrage Scanner",
    description:
      "Real-time arbitrage scanning across 16 exchanges, plus a paper trading bot. Free 3-day trial, no credit card required.",
  },
  robots: { index: true, follow: true },
};

const features = [
  {
    title: "Arbitrage Scanner",
    text: "The core engine. Scans 16 exchanges in real time, finds price differences on the same token, and ranks every opportunity by profit potential. Switch between cards and table view.",
    icon: "🎯",
    tab: "Scanner",
  },
  {
    title: "CEX vs DEX Arbitrage",
    text: "Compares centralized exchange prices against decentralized pools. Built-in calculator shows exact profit after gas fees and slippage.",
    icon: "⚖️",
    tab: "CEX vs DEX",
  },
  {
    title: "Spread Analyzer",
    text: "See the full spread picture across all 16 exchanges for any token. Know exactly where to buy low and sell high.",
    icon: "📊",
    tab: "Spread",
  },
  {
    title: "Top Movers",
    text: "Live ranking of the biggest gainers and losers across every connected exchange. Your watchlist of exactly where the action is.",
    icon: "🚀",
    tab: "Movers",
  },
  {
    title: "16-Exchange Grid",
    text: "All 16 connected exchanges in one visual grid. See which exchanges are live, their status, and jump straight to opportunities.",
    icon: "🌐",
    tab: "Exchanges",
  },
  {
    title: "Smart Watchlist",
    text: "Track your favorite tokens. Get instant alerts when an arbitrage gap appears on anything you're watching.",
    icon: "⭐",
    tab: "Watchlist",
  },
  {
    title: "Profit Calculator",
    text: "Every opportunity includes a one-click calculator. Enter your amount, see net profit after all fees — before you trade.",
    icon: "🧮",
    tab: "Calculator",
  },
  {
    title: "Advanced Filters",
    text: "Filter by minimum spread, volume, exchange, or token. Sort by profit, spread %, or recency. Find exactly what you want in seconds.",
    icon: "🔍",
    tab: "Filters",
  },
  {
    title: "Paper Trading Bot",
    text: "Practice every opportunity with virtual money before risking a cent. Test strategies, build confidence, go live when you're ready.",
    icon: "🤖",
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
    text: "Open the scanner, watch top gainers and losers update live, and see arbitrage spreads ranked across 16 exchanges.",
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
    a: "Sign in with your Google account and you get full access — the Arbitrage Matrix, all 16 exchanges, and the paper trading bot — for 3 days, completely free. No credit card required. When the trial ends you simply lose access until you upgrade to Pro.",
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
    "Real-time crypto arbitrage scanner: finds top gainers and losers, detects cross-exchange, CEX vs DEX, triangular and funding-rate arbitrage across 16 exchanges, with a paper trading bot for risk-free practice.",
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
    ["16", "Exchanges scanned"],
    ...(registeredUsers !== null && registeredUsers >= 100
      ? ([[registeredUsers.toLocaleString("en-US"), "Registered users"]] as [string, string][])
      : []),
    ["4", "Arbitrage strategies"],
    ["$24.99", "Per month Pro price"],
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqJsonLd(faqs)]) }} />

      {/* ---------- Header ---------- */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0a0e17]/90 backdrop-blur">
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4" aria-label="Main">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <img src="/images/logo-mark.svg" alt="Cryptoscopia logo" width={30} height={30} />
            <span className="gradient-text">Cryptoscopia</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <Link href="/guides" className="hover:text-white">Guides</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <HeaderAuth />
            <MobileMenu />
          </div>
        </nav>
      </header>

      <main>
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden px-4 pb-16 pt-14 md:pt-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.14),transparent_60%)]" />
            <div className="animate-float-slow absolute -left-32 top-20 h-96 w-96 bg-[radial-gradient(closest-side,rgba(34,197,94,0.13),transparent)]" />
            <div className="animate-float absolute -right-32 top-40 h-96 w-96 bg-[radial-gradient(closest-side,rgba(37,99,235,0.13),transparent)]" />
            <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(16,185,129,0.07),transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          </div>
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <p className="animate-pulse-glow mb-5 inline-block rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-sm text-green-300">
                ⚡ Real-time arbitrage scanning across 16 exchanges
              </p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
                Find <span className="gradient-text-animated">crypto arbitrage gaps</span>
                <br />
                across 16 exchanges — before they close
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 lg:mx-0">
                Cryptoscopia scans the <strong className="text-slate-200">top gainers and losers</strong> across
                <strong className="text-slate-200">16 exchanges</strong> in real time and ranks the best price differences for you.
                Built for retail traders — no coding, nothing to install. Practice risk-free with the built-in
                <strong className="text-slate-200">paper trading bot</strong>.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Link href="/signin" className="btn-primary w-full sm:w-auto">
                  Start Free 3-Day Trial
                </Link>
                <LaunchAppButton className="font-medium text-green-400 underline hover:text-green-300">
                  Launch App ↗
                </LaunchAppButton>
              </div>
              <p className="mt-4 text-sm text-slate-400">No credit card required · Full access for 3 days</p>
              <p className="mt-2 text-xs text-slate-400">No scanner can guarantee profits — Cryptoscopia finds the gaps; you decide the trades.</p>
              <dl className={`mx-auto mt-10 grid max-w-xl grid-cols-2 gap-6 lg:mx-0 ${stats.length >= 4 ? "sm:grid-cols-4" : "sm:grid-cols-3"}`}>
                {stats.map(([v, l]) => (
                  <div key={l} className="text-center lg:text-left">
                    <dt className="sr-only">{l}</dt>
                    <dd className="text-2xl font-extrabold text-white md:text-3xl">{v}</dd>
                    <dd className="mt-1 text-xs text-slate-400">{l}</dd>
                  </div>
                ))}
              </dl>
              <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-slate-400 lg:mx-0">
                Scanning: Binance · Bybit · OKX · KuCoin · Gate.io · MEXC · Bitget · HTX · CoinEx · BitMart · LBank · XT.com · Bitrue · CEX.io · Coinstore · + DEX pools
              </p>
            </div>
            <div className="relative">
              <div aria-hidden className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-green-500/15 via-transparent to-blue-600/15" />
              <div className="relative">
                <ScreenshotCarousel shots={appScreenshots} />
                <p className="mt-4 text-center text-sm text-slate-400">
                  Real screenshots from the live app — no mockups, no fake UI.
                </p>
                <div className="mt-3 text-center">
                  <LaunchAppButton className="font-medium text-green-400 underline hover:text-green-300">
                    Launch the App & See For Yourself ↗
                  </LaunchAppButton>
                </div>
              </div>
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
              <li key={li} className="flex items-center justify-center gap-2"><span className="text-green-400">✓</span>{li}</li>
            ))}
          </ul>
        </section>

        {/* ---------- Live net spreads ---------- */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">Live Proof</p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Live net spreads, <span className="gradient-text">right now</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              A no-signup preview of the highest-volume pairs across the exchanges we track,
              refreshed every minute. This is the same kind of table the full scanner builds on —
              with more pairs, more exchanges, and net after withdrawal fees and executable depth in the app.
            </p>
          </div>
          <div className="mt-10">
            <LazyLiveSpreads />
            <p className="mt-3 text-xs text-slate-400">
              Est. net is after taker fees on both sides, before withdrawal/transfer fees. This is a
              no-signup preview of the top pairs; the full scanner in the app shows net after the
              cheapest open withdrawal fee and executable depth.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              See more on the{" "}
              <Link href="/live" className="text-green-400 hover:text-green-300">live spreads page</Link>,{" "}
              <Link href="/app" className="text-green-400 hover:text-green-300">open the full app</Link>, or{" "}
              <Link href="/arbitrage-calculator" className="text-green-400 hover:text-green-300">try the no-signup arbitrage calculator</Link>.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* ---------- Features ---------- */}
        <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:py-20">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">Inside the App</p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Every tool you need to <span className="gradient-text">find arbitrage</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              9 powerful features, one app. This is exactly what you get when you launch the scanner.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="glass-card group relative overflow-hidden">
                <div className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-800/50 px-2 py-0.5 text-[10px] font-medium text-slate-400">
                  {f.tab}
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-blue-600/20 text-2xl transition group-hover:scale-110" aria-hidden>{f.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{f.text}</p>
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
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-lg font-bold">
                    {s.n}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Pricing ---------- */}
        <section id="pricing" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Simple, honest pricing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            Try everything free for 3 days. Then Pro is just $24.99/month.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="card">
              <h3 className="text-xl font-semibold">Free Trial</h3>
              <p className="mt-2 text-4xl font-extrabold">
                $0 <span className="text-base font-normal text-slate-400">/ 3 days</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {[
                  "Everything in Pro — free for 3 days",
                  "No credit card required",
                  "Access simply stops if you don't upgrade",
                ].map((li) => (
                  <li key={li} className="flex gap-2"><span className="text-green-400">✓</span>{li}</li>
                ))}
              </ul>
              <Link href="/signin" className="btn-secondary mt-8 w-full">Start Free Trial</Link>
            </article>
            <article className="card relative border-green-500/40 !bg-gradient-to-b !from-green-950/40 !to-[#111827]">
              <span className="absolute -top-3 left-6 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-black">
                MOST POPULAR
              </span>
              <h3 className="text-xl font-semibold">Pro</h3>
              <p className="mt-2 text-4xl font-extrabold">
                $24.99 <span className="text-base font-normal text-slate-400">/ month</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {[
                  "Unlimited access to every feature",
                  "Top gainers & losers scanner",
                  "16-exchange arbitrage detection",
                  "All 4 arbitrage strategies",
                  "Paper trading bot",
                  "Real-time price alerts",
                  "Priority support",
                ].map((li) => (
                  <li key={li} className="flex gap-2"><span className="text-green-400">✓</span>{li}</li>
                ))}
              </ul>
              <Link href="/signin" className="btn-primary mt-8 w-full">Upgrade to Pro</Link>
            </article>
          </div>
          <div className="card mt-8">
            <h3 className="font-semibold text-slate-100">How paying works</h3>
            <ol className="mt-3 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <li><span className="font-bold text-green-400">1.</span> Send exactly 24.99 USDT on Binance to our Binance ID</li>
              <li><span className="font-bold text-green-400">2.</span> Upload your transfer screenshot + transaction ID</li>
              <li><span className="font-bold text-green-400">3.</span> Tap Check for auto-verification — manual screenshot review is the fallback</li>
            </ol>
            <p className="mt-3 text-xs text-slate-400">Sent the wrong amount or network? Don't worry — contact us and we'll sort it out.</p>
          </div>
        </section>

        {/* Sticky mobile trial CTA */}
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800 bg-[#0a0e17]/95 px-4 py-3 backdrop-blur md:hidden">
          <Link href="/signin" className="btn-primary flex w-full justify-center">Start Free 3-Day Trial — no card needed</Link>
        </div>

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
          <div className="card !bg-gradient-to-br !from-green-950/60 !via-[#111827] !to-blue-950/40 text-center">
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
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-slate-800/80 px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-slate-400">
            <span className="font-bold text-slate-200">Cryptoscopia</span> · Trade smarter, not harder.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400" aria-label="Footer">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <Link href="/guides" className="hover:text-white">Guides</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/arbitrage" className="hover:text-white">Exchange Comparisons</Link>
            <Link href="/live" className="hover:text-white">Live Spreads</Link>
            <Link href="/arbitrage-calculator" className="hover:text-white">Profit Calculator</Link>
            <Link href="/affiliates" className="hover:text-white">Affiliates</Link>
            <Link href="/best-crypto-arbitrage-scanners" className="hover:text-white">Best Scanners</Link>
            <Link href="/glossary" className="hover:text-white">Glossary</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <LaunchAppButton className="hover:text-white">Launch App</LaunchAppButton>
          </nav>
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-xs leading-relaxed text-slate-400">
          Disclaimer: Crypto trading involves substantial risk of loss. Signals are informational tools,
          not financial advice. Never trade with money you cannot afford to lose.
        </p>
      </footer>
    </>
  );
}
