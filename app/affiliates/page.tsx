import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import TrialCta from "../components/TrialCta";

export const metadata: Metadata = {
  title: "Affiliate Program — Earn 40% Recurring",
  description:
    "Promote Cryptoscopia and earn 40% recurring commission on every Pro payment from your referrals — for as long as they stay subscribed. Top partners earn 50%.",
  alternates: { canonical: `${SITE_URL}/affiliates/` },
  openGraph: {
    title: "Cryptoscopia Affiliate Program — 40% Recurring Commission",
    description:
      "Earn 40% of every monthly Pro payment from users you refer. Paid monthly in USDT via Binance.",
    url: `${SITE_URL}/affiliates/`,
    type: "website",
  },
};

export default function AffiliatesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm font-medium text-emerald-400">
        <Link href="/" className="hover:text-emerald-300">← Cryptoscopia</Link>
      </p>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
        Affiliate Program — earn 40% recurring
      </h1>
      <p className="mt-4 leading-relaxed text-slate-400">
        Recommend Cryptoscopia to traders, and earn <strong className="text-slate-200">40% of every
        monthly Pro payment</strong> your referrals make — month after month, for as long as they stay
        subscribed. Pro is $24.99/month, so each active referral earns you about{" "}
        <strong className="text-slate-200">$10 every month</strong>. Ten referrals ≈ $100/month.
        Top-performing partners are upgraded to <strong className="text-slate-200">50%</strong>.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-white">How it works</h2>
        <ol className="mt-4 space-y-3 text-slate-300">
          <li className="flex gap-3"><span className="font-bold text-green-400">1.</span> Create your free Cryptoscopia account (the 3-day trial is included).</li>
          <li className="flex gap-3"><span className="font-bold text-green-400">2.</span> Get your personal referral link — links are being activated in dashboards now; sign in and yours will appear in your dashboard as soon as your account is enabled.</li>
          <li className="flex gap-3"><span className="font-bold text-green-400">3.</span> Share it anywhere honest promotion is welcome: your channel, community, videos or blog. When someone subscribes to Pro through your link, 40% of every payment they make is yours.</li>
          <li className="flex gap-3"><span className="font-bold text-green-400">4.</span> Get paid monthly in USDT via Binance, once your balance reaches $25.</li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-white">The honest rules</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
          <li>Promote honestly — no guaranteed-profit claims, no fake screenshots, no spam. Cryptoscopia's reputation for honesty is the product; affiliates who break this are removed.</li>
          <li>Commission is paid on payments we actually receive and that are not refunded.</li>
          <li>You cannot earn commission on your own account.</li>
          <li>Rates may change for new referrals with 30 days' notice; existing referrals keep the rate they joined under.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-white">What you get to promote</h2>
        <p className="mt-3 leading-relaxed text-slate-400">
          A real-time scanner across 16 exchanges (cross-exchange, CEX vs DEX, triangular and
          funding-rate arbitrage) with a paper trading bot — at $24.99/month, well below the
          $69–$795/month competitors charge. Your audience gets a free 3-day trial with no credit
          card, so your link converts without asking anyone to pay up front. The free{" "}
          <Link href="/live/" className="text-emerald-400 hover:text-emerald-300">live spreads preview</Link>{" "}
          and <Link href="/arbitrage-calculator/" className="text-emerald-400 hover:text-emerald-300">profit calculator</Link>{" "}
          are easy, useful content to share.
        </p>
      </section>

      <div className="mt-10 text-center">
        <Link href="/signin" className="btn-primary">Create your free account</Link>
        <p className="mt-3 text-sm text-slate-500">Free 3-day trial included · No credit card required</p>
      </div>

      <TrialCta />
    </main>
  );
}
