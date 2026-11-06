import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { PRICING_INTRO, PRO_PRICE } from "@/lib/pricing";
import { PricingCards, HowPayingWorks } from "../components/PricingCards";
import { softwareAppJsonLd } from "../components/Seo";

export const metadata: Metadata = {
  title: "Pricing — Free 3-Day Trial, Then Pro $24.99/month",
  description:
    "Cryptoscopia pricing: try everything free for 3 days — no credit card required. Then Pro is $24.99/month, paid in USDT via Binance with auto-verification.",
  alternates: { canonical: `${SITE_URL}/pricing/` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/pricing/`,
    title: "Pricing — Free 3-Day Trial, Then Pro $24.99/month | Cryptoscopia",
    description:
      "Try everything free for 3 days. Then Pro is just $24.99/month — no hidden fees.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cryptoscopia Pricing — Free Trial, Pro $24.99/month",
    description:
      "Free 3-day trial with full access, no credit card. Pro is $24.99/month after the trial.",
  },
  robots: { index: true, follow: true },
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd()) }}
      />
      {/* Header/footer come from the shared shell in app/layout.tsx.
          Pricing facts come from lib/pricing.ts — the same source the
          homepage pricing section uses. */}
      <h1 className="text-center text-3xl font-extrabold tracking-tight text-white md:text-4xl">
        Simple, honest pricing
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
        {PRICING_INTRO}
      </p>

      <div className="mt-10">
        <PricingCards />
        <HowPayingWorks />
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-400">
        Pro is a monthly plan at {PRO_PRICE} — each monthly payment keeps your
        Pro access active for that month. There are no hidden fees, and the
        free trial gives you full access first so you can decide before
        paying anything.
      </p>
      <p className="mt-4 text-center text-xs text-slate-500">
        No scanner can guarantee profits — Cryptoscopia finds the gaps; you decide the trades.
      </p>
      {/* The full risk disclosure renders once in the shared footer. */}
    </div>
  );
}
