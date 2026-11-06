import { EXCHANGE_COUNT } from "./site";

/**
 * Single source of truth for the pricing facts shown on the homepage
 * pricing section and the /pricing page (Redesign Phase 4, decision D3).
 *
 * These are the site's current, real pricing facts — the same wording the
 * homepage carried before the redesign. Change them here and both
 * surfaces update together. Do not add plans, discounts or features that
 * do not exist.
 */
export const PRO_PRICE = "$24.99";
export const PRO_PRICE_VALUE = "24.99";

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  badge?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

export const FREE_TRIAL_PLAN: PricingPlan = {
  name: "Free Trial",
  price: "$0",
  period: "/ 3 days",
  features: [
    "Everything in Pro — free for 3 days",
    "No credit card required",
    "Access simply stops if you don't upgrade",
  ],
  ctaLabel: "Start Free Trial",
  ctaHref: "/signin",
};

export const PRO_PLAN: PricingPlan = {
  name: "Pro",
  price: PRO_PRICE,
  period: "/ month",
  badge: "MOST POPULAR",
  features: [
    "Unlimited access to every feature",
    "Top gainers & losers scanner",
    `${EXCHANGE_COUNT}-exchange arbitrage detection`,
    "All 4 arbitrage strategies",
    "Paper trading bot",
    "Real-time price alerts",
    "Priority support",
  ],
  ctaLabel: "Upgrade to Pro",
  ctaHref: "/signin",
};

/** The exact 3 payment steps the homepage has always shown. */
export const HOW_PAYING_STEPS: string[] = [
  "Send exactly 24.99 USDT on Binance to our Binance ID",
  "Upload your transfer screenshot + transaction ID",
  "Tap Check for auto-verification — manual screenshot review is the fallback",
];

export const HOW_PAYING_NOTE =
  "Sent the wrong amount or network? Don't worry — contact us and we'll sort it out.";

export const PRICING_INTRO =
  "Try everything free for 3 days. Then Pro is just $24.99/month.";
