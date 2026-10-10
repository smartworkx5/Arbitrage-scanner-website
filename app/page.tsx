import type { Metadata } from "next";
import Link from "next/link";
import { LaunchAppButton } from "./LaunchAppButton";
import { MobileMenu } from "./MobileMenu";
import { faqJsonLd } from "./components/Seo";
import LiveTicker from "./LiveTicker";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://crypto-rb-trade-scanner.vercel.app";

export const metadata: Metadata = {
  title: "Crypto Arbitrage Scanner | Real-Time Arbitrage Across 16 Exchanges",
  description:
    "The Crypto Arbitrage Scanner finds the top gainers and top losers in real time, then checks those tokens across 16 exchanges to spot cross-exchange, CEX vs DEX, triangular and funding-rate arbitrage — plus a paper trading bot to practice risk-free. Start your free 3-day trial.",
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
    siteName: "Crypto Arbitrage Scanner",
    title: "Crypto Arbitrage Scanner",
    description:
      "Find top gainers and losers in real time. Spot arbitrage across 16 exchanges — cross-exchange, CEX vs DEX, triangular, funding-rate — and practice with a paper trading bot. Free 3-day trial.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Arbitrage Scanner",
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
    text: "Love it? Unlock unlimited access for a one-time $24.99 payment via Binance — approved fast, manually reviewed.",
  },
];

const faqs = [
  {
    q: "How does the free 3-day trial work?",
    a: "Sign in with your Google account and you get full access — the Arbitrage Matrix, all 16 exchanges, and the paper trading bot — for 3 days, completely free. No credit card required. When the trial ends you simply lose access until you upgrade to Pro.",
  },
  {
    q: "What exactly is the Arbitrage Matrix?",
    a: "It's the core of Crypto Arbitrage Scanner. It finds the top gainers and top losers on exchanges in real time, then checks those same tokens across 16 exchanges to spot arbitrage opportunities: cross-exchange spreads, CEX vs DEX gaps, triangular arbitrage and funding-rate arbitrage — all ranked by profit potential.",
  },
  {
    q: "What is the paper trading bot?",
    a: "A risk-free practice mode. The bot lets you execute the arbitrage opportunities the scanner finds using virtual money, so you can test strategies and build confidence before trading with real funds.",
  },
  {
    q: "How much does Pro cost?",
    a: "Pro is a one-time payment of $24.99 — not a subscription. Pay once and keep access. There are no renewals or hidden fees.",
  },
  {
    q: "How do I pay for Pro?",
    a: "We accept payment via Binance. On the payment page you'll see our Binance ID (346894283): send exactly 24.99 USDT, then upload a screenshot of the transfer along with your transaction ID. Our team reviews it and activates your Pro access, usually within a few hours.",
  },
  {
    q: "How long does payment approval take?",
    a: "Payments are reviewed manually. Most are approved within a few hours, and never longer than 24 hours. You'll see the 'Pro Active' status on your dashboard as soon as it's approved.",
  },
  {
    q: "Do you offer refunds?",
    a: "Because Pro is a one-time digital access product, all sales are final once access is granted. That's exactly why we give you a full 3-day free trial first — try everything before you pay a cent.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. Crypto Arbitrage Scanner is a web app that runs in your browser on desktop and mobile. Click 'Launch App' and you're in.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Crypto Arbitrage Scanner",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://crypto-rb-scanner.vercel.app/app",
  description:
    "Real-time crypto arbitrage scanner: finds top gainers and losers, detects cross-exchange, CEX vs DEX, triangular and funding-rate arbitrage across 16 exchanges, with a paper trading bot for risk-free practice.",
  offers: {
    "@type": "Offer",
    price: "24.99",
    priceCurrency: "USD",
    description: "Pro lifetime access (one-time payment)",
  },
};

export default function LandingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />

      {/* ---------- Header ---------- */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0a0e17]/90 backdrop-blur">
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4" aria-label="Main">
          <Link href="/" className="text-lg font-bold tracking-tight">
            <span className="gradient-text">Crypto Arbitrage</span> Scanner
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
            <Link href="/signin" className="hidden text-sm font-medium text-slate-300 hover:text-white sm:block">
              Sign in
            </Link>
            <Link href="/signin" className="btn-primary hidden !px-4 !py-2 text-sm sm:inline-flex">
              Free Trial
            </Link>
            <MobileMenu />
          </div>
        </nav>
      </header>

      <main>
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden px-4 pb-16 pt-14 md:pt-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.14),transparent_60%)]" />
            <div className="animate-float-slow absolute -left-32 top-20 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
            <div className="animate-float absolute -right-32 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          </div>
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <p className="animate-pulse-glow mb-5 inline-block rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-sm text-green-300">
                ⚡ Real-time arbitrage scanning across 16 exchanges
              </p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
                <span className="gradient-text-animated">Crypto Arbitrage Scanner</span>
                <br />
                Spot arbitrage gaps before they close
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 lg:mx-0">
                The Arbitrage Matrix finds the <strong className="text-slate-200">top gainers and top losers</strong> in
                real time, then checks those tokens across <strong className="text-slate-200">16 exchanges</strong> to
                spot cross-exchange, CEX vs DEX, triangular and funding-rate arbitrage — and lets you
                test every opportunity risk-free with the built-in <strong className="text-slate-200">paper trading bot</strong>.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Link href="/signin" className="btn-primary w-full sm:w-auto">
                  Start Free 3-Day Trial
                </Link>
                <LaunchAppButton className="btn-secondary w-full sm:w-auto">
                  Launch App ↗
                </LaunchAppButton>
              </div>
              <p className="mt-4 text-sm text-slate-500">No credit card required · Full access for 3 days</p>
              <dl className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-6 lg:mx-0">
                {[
                  ["16", "Exchanges scanned"],
                  ["4", "Arbitrage strategies"],
                  ["$24.99", "One-time Pro price"],
                ].map(([v, l]) => (
                  <div key={l} className="text-center lg:text-left">
                    <dt className="sr-only">{l}</dt>
                    <dd className="text-2xl font-extrabold text-white md:text-3xl">{v}</dd>
                    <dd className="mt-1 text-xs text-slate-500">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <div aria-hidden className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-green-500/15 via-transparent to-blue-600/15 blur-2xl" />
              <div className="relative">
                <LiveTicker />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Features ---------- */}
        <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:py-20">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">Inside the App</p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Every tool you need to <span className="gradient-text">profit from arbitrage</span>
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

        {/* ---------- App Screenshots ---------- */}
        <section id="screenshots" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:py-20">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-400">See It In Action</p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Real screenshots from the <span className="gradient-text">live app</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              No mockups. No fake UI. These are actual screens from the running scanner.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { tab: "Scanner", desc: "Real-time arbitrage opportunities ranked by profit" },
              { tab: "CEX vs DEX", desc: "Centralized vs decentralized price gaps with calculator" },
              { tab: "Spread", desc: "Full spread analysis across 16 exchanges" },
              { tab: "Movers", desc: "Top gainers and losers, updated live" },
            ].map((s) => (
              <div key={s.tab} className="glass-card overflow-hidden !p-0">
                <div className="border-b border-slate-800 bg-slate-900/50 px-4 py-3">
                  <span className="text-sm font-semibold text-white">{s.tab} Tab</span>
                  <p className="text-xs text-slate-400">{s.desc}</p>
                </div>
                <div className="flex aspect-video items-center justify-center bg-slate-950/50 p-8 text-center">
                  <div>
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-2xl">📸</div>
                    <p className="text-sm text-slate-400">App screenshot coming soon</p>
                    <p className="mt-1 text-xs text-slate-500">Taken directly from the live scanner</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <LaunchAppButton className="btn-primary">
              Launch the App & See For Yourself ↗
            </LaunchAppButton>
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
            Try everything free for 3 days. Pay once, keep it forever.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="card">
              <h3 className="text-xl font-semibold">Free Trial</h3>
              <p className="mt-2 text-4xl font-extrabold">
                $0 <span className="text-base font-normal text-slate-400">/ 3 days</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {[
                  "Full scanner access for 3 days",
                  "Top gainers & losers scanner",
                  "Arbitrage detection across 16 exchanges",
                  "Paper trading bot",
                  "No credit card required",
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
                $24.99 <span className="text-base font-normal text-slate-400">/ one-time</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {[
                  "Unlimited lifetime access",
                  "Top gainers & losers scanner",
                  "16-exchange arbitrage detection",
                  "All 4 arbitrage strategies",
                  "Paper trading bot",
                  "Real-time price alerts",
                  "Mobile friendly",
                  "Priority support",
                ].map((li) => (
                  <li key={li} className="flex gap-2"><span className="text-green-400">✓</span>{li}</li>
                ))}
              </ul>
              <Link href="/signin" className="btn-primary mt-8 w-full">Upgrade to Pro</Link>
            </article>
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
          <p className="mt-6 text-center text-sm text-slate-500">
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
              Join Crypto Arbitrage Scanner today. Your first 3 days are on us.
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
            <span className="font-bold text-slate-200">Crypto Arbitrage Scanner</span> · Trade smarter, not harder.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400" aria-label="Footer">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <Link href="/guides" className="hover:text-white">Guides</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/arbitrage" className="hover:text-white">Exchange Comparisons</Link>
            <Link href="/best-crypto-arbitrage-scanners" className="hover:text-white">Best Scanners</Link>
            <Link href="/glossary" className="hover:text-white">Glossary</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <LaunchAppButton className="hover:text-white">Launch App</LaunchAppButton>
          </nav>
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-xs leading-relaxed text-slate-600">
          Disclaimer: Crypto trading involves substantial risk of loss. Signals are informational tools,
          not financial advice. Never trade with money you cannot afford to lose.
        </p>
      </footer>
    </>
  );
}
