import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "profit-threshold-arbitrage",
  title: "Minimum Profitable Spread for Arbitrage",
  description: "What spread is actually worth trading? Break-even math for the minimum profitable arbitrage spread across five strategies, with a worked October 2026 example.",
  keywords: [
      "minimum profitable arbitrage spread",
      "arbitrage break even",
      "profitable spread crypto",
      "arbitrage threshold",
      "spread vs fees"
  ],
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "Every strategy has a break-even spread below which you lose money. The formula, per-strategy thresholds, and why October 2026's volatility raised the bar.",
  image: "/images/blog/profit-threshold-arbitrage.svg",
  blocks: [
      { type: "p", text: "The minimum profitable arbitrage spread is the single number that separates traders who compound from traders who churn. Every strategy has a break-even point — the spread width at which all costs are exactly covered — and any trade narrower than that threshold loses money no matter how clean the execution looks. With BTC around $83,650 on October 12, 2026 and volatility still elevated after the October 9 dip to $80,420, knowing your thresholds matters more than finding spreads. This article gives you the break-even math for each major strategy." },
      { type: "h2", text: "The Break-Even Formula" },
      { type: "p", text: "Minimum profitable spread = trading fees (all legs) + withdrawal fees + network fees + expected slippage + spread-crossing cost + funding or borrow costs + a safety margin. The safety margin is not optional: prices move between legs, and a threshold computed with zero margin fails the first time the market twitches. Professionals typically demand 1.5–2x the raw cost total before they call a spread \"profitable.\" A [fee calculator approach](/blog/fee-calculator-arbitrage) to each leg keeps the inputs honest." },
      { type: "p", text: "Worked example — cross-exchange spot, $10,000 position: maker fees on two legs at 0.05% ($10), one withdrawal amortized ($5), network fee ($2), slippage estimate 0.05% ($5), spread-crossing on the sell leg 0.05% ($5). Raw total: $27, or 0.27%. With a 2x safety multiple, the **minimum profitable spread is about 0.55%**. Anything under that is a pass, no matter how tempting the ticker looks." },
      { type: "h2", text: "Break-Even Thresholds by Strategy" },
      {
        type: "table",
        headers: ["Strategy", "Typical all-in costs", "Suggested minimum spread", "Notes"],
        rows: [
          ["Cross-exchange spot", "0.3–0.7%", "0.6–1.0%", "Withdrawal plus two spread-crossings dominate"],
          ["Triangular (single exchange)", "0.15–0.4%", "0.4–0.8%", "No withdrawals; execution speed is the risk"],
          ["Funding-rate arbitrage", "0.1–0.3%", "0.3–0.5%", "Funding itself is income; watch for flips"],
          ["Stablecoin cross-exchange", "0.1–0.25%", "0.25–0.5%", "Tight spreads; volume is the constraint"],
          ["CEX–DEX", "0.4–1.0%", "0.8–1.5%", "Gas plus slippage plus MEV risk"],
          ["Cash-and-carry (futures basis)", "0.2–0.5%", "0.5–1.0% annualized edge", "Capital lockup is the real cost"]
        ],
      },
      { type: "p", text: "Treat these as starting points, not gospel. Your thresholds depend on your venues, your size, and your measured slippage — a $100,000 trader and a $1,000 trader have different numbers on the same spread. Recompute quarterly, and recompute immediately after changing exchanges. [Execution risk](/blog/execution-risk-arbitrage) is the reason the suggested minimums sit well above raw costs." },
      { type: "h2", text: "Why Thresholds Rise in Volatile Markets" },
      { type: "p", text: "October 2026 is a live case study. BTC fell to $80,420 on October 9, then recovered to roughly $83,650–83,854 by October 12 — a round trip of over 4% in three days. In conditions like that, slippage estimates from calm markets understate reality by two to three times, spreads you \"lock in\" evaporate between legs, and funding rates spike. Prudent traders raise their minimums in volatile regimes: a 0.6% threshold in calm markets becomes 1.0% or more when daily ranges exceed 3%. The spread has to pay you for the regime, not just the costs. Whether [crypto arbitrage is profitable in 2026](/blog/is-crypto-arbitrage-profitable-2026) depends heavily on this regime adjustment." },
      { type: "p", text: "There is also a subtler effect: volatility widens quoted spreads, which makes scanners light up with opportunities that are mostly mirage. A scanner showing twenty 0.8% spreads during a selloff is often showing twenty spreads with 0.8% of slippage hiding inside them. Threshold discipline is what keeps you from trading the mirage." },
      { type: "h2", text: "Turning Thresholds Into a Trading Rule" },
      { type: "p", text: "Write your thresholds down — per strategy, per venue pair — and make them a hard filter in your process or bot configuration. The rule is binary: spread at or above threshold plus margin means consider the trade; below means ignore, no exceptions, no \"this one looks safe.\" Most losing arbitrageurs do not have a strategy problem; they have a threshold problem, trading 0.4% spreads against 0.5% of costs because the number on the screen felt like progress. [Risk management](/blog/arbitrage-risk-management) starts with this filter." },
      {
        type: "callout",
        title: "Measure, don't guess",
        text: "Thresholds assume honest cost measurement. If you have never measured your actual slippage on real fills — not the ticker, your fills — your threshold is a guess. Paper-trade or small-size test first, measure, then set the number.",
        tone: "warning",
      },
      {
        type: "faq",
        items: [
          {
            q: "What is a good minimum spread for beginners?",
            a: "Start with 1% for cross-exchange spot. It sounds high, but beginners underestimate slippage and overestimate fill quality. Tighten the number only after measuring real costs over 50 or more trades.",
          },
          {
            q: "Do thresholds change with position size?",
            a: "Yes — flat fees (withdrawals, network) matter less as size grows, but slippage matters more. Very large positions can face worse all-in costs than medium ones on thin books.",
          },
          {
            q: "Should funding-rate strategies use the same thresholds?",
            a: "No — funding strategies earn from the rate itself, so the threshold is about the rate's persistence and flip risk rather than a one-time spread. Different math, different minimum.",
          },
          {
            q: "How often should I recalculate my thresholds?",
            a: "Quarterly at minimum, plus after any venue change, fee-tier change, or volatility regime shift like October 2026's selloff.",
          }
        ],
      },
  ],
};
