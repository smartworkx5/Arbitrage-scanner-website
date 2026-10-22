import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { faqJsonLd } from "../components/Seo";
import TrialCta from "../components/TrialCta";
import Calculator from "./Calculator";

export const metadata: Metadata = {
  title: "Crypto Arbitrage Calculator — Net Profit After Fees",
  description:
    "Free crypto arbitrage calculator: enter buy and sell prices on two exchanges and see your estimated net profit after trading and withdrawal fees. No sign-up needed.",
  alternates: { canonical: `${SITE_URL}/arbitrage-calculator/` },
  openGraph: {
    title: "Crypto Arbitrage Calculator — Net Profit After Fees | Cryptoscopia",
    description:
      "Work out if an arbitrage gap is actually worth taking — after fees. Free calculator, no sign-up.",
    url: `${SITE_URL}/arbitrage-calculator/`,
    type: "website",
  },
};

const faqs = [
  {
    q: "How do I use this arbitrage calculator?",
    a: "Pick the exchange you would buy on and the one you would sell on, enter the two prices and your trade amount. The calculator subtracts both trading fees and your estimated withdrawal/transfer fee, so you see the net profit — the number that actually matters.",
  },
  {
    q: "Why does net profit matter more than the spread?",
    a: "A 1% price gap can disappear completely after two taker fees and a withdrawal fee, especially on small amounts. Many 'opportunities' are losers once fees are counted. Always judge a trade on net profit after all costs.",
  },
  {
    q: "Are the fees accurate?",
    a: "The preset fees are the typical published spot taker fees for each exchange. Your real fee depends on your account tier and the trading pair, so the fee fields are editable — set them to your own rates for a closer estimate.",
  },
  {
    q: "Can Cryptoscopia do this automatically?",
    a: "Yes. This calculator works on prices you type in. The Cryptoscopia scanner watches 16 exchanges in real time, finds the gaps for you and ranks them — and the paper trading bot lets you practice the trades risk-free. You can try it free for 3 days.",
  },
];

export default function ArbitrageCalculatorPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <p className="text-sm font-medium text-emerald-400">
        <Link href="/" className="hover:text-emerald-300">← Cryptoscopia</Link>
      </p>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
        Crypto Arbitrage Calculator
      </h1>
      <p className="mt-4 leading-relaxed text-slate-400">
        A price gap between two exchanges is only worth trading if money is left after fees.
        Enter a buy price and a sell price below and see your <strong className="text-slate-200">estimated
        net profit after trading and withdrawal fees</strong> — free, no sign-up.
      </p>

      <div className="mt-8">
        <Calculator />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">Why most spreads are not worth trading</h2>
        <p className="mt-3 leading-relaxed text-slate-400">
          Spreads appear and vanish in seconds, and every trade pays fees twice — once when you buy,
          once when you sell — plus a withdrawal or network fee to move the asset. On a $100 trade,
          a 0.5% gap is $0.50 before costs: usually a loss. On a larger trade the same gap can be real
          money. The honest way to judge any opportunity is net profit after all fees, which is exactly
          what this calculator shows — and what the Cryptoscopia scanner computes automatically,
          live, across 16 exchanges.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white">Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="card !p-5">
              <summary className="cursor-pointer font-semibold text-slate-100">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <TrialCta />
    </main>
  );
}
