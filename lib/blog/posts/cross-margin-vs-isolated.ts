import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "cross-margin-vs-isolated",
  title: "Cross vs Isolated Margin for Arbitrage",
  description: "Cross vs isolated margin for arbitrage: how each margin mode treats hedged positions, where contagion risk hides, and which mode suits each arbitrage leg.",
  keywords: [
      "cross margin vs isolated margin",
      "isolated margin arbitrage",
      "cross margin crypto",
      "margin mode hedged positions",
      "crypto margin explained 2026"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 8,
  category: "Strategies",
  excerpt: "Cross margin shares collateral across positions; isolated margin quarantines each one. For arbitrageurs running hedged legs, the choice changes everything about liquidation risk.",
  image: "/images/blog/cross-margin-vs-isolated.svg",
  blocks: [
      { type: "p", text: "Every crypto derivatives account forces a choice most traders click through without thinking: **cross margin** or **isolated margin**. In cross margin mode, all positions in the account share one pool of collateral — winners support losers, and the whole account stands or falls together. In isolated margin mode, each position gets its own dedicated collateral, walled off from everything else. For directional traders the choice is a matter of convenience. For arbitrageurs running hedged legs, it is a structural decision that determines how — and whether — a crisis in one leg can kill the others." },
      { type: "p", text: "This matters because arbitrage is, by construction, a multi-position business: a long here, a short there, maybe a funding leg on a third venue. How those positions share (or do not share) collateral decides your true risk. Get the margin mode wrong and a textbook hedge becomes a contagion chain. Get it right and each leg fails — if it must fail — alone. Here is how the two modes actually work, where each one helps or hurts an arbitrage book, and the setups experienced hedgers use in 2026." },
      { type: "h2", text: "How Isolated Margin Works" },
      { type: "p", text: "Isolated margin assigns a fixed amount of collateral to a single position when you open it. That collateral — and only that collateral — backs the position. If the market moves against you, losses eat into the isolated allocation; if it is exhausted, the position is liquidated and closed. Everything else in your account is untouched: other positions keep their own collateral, and your remaining balance stays exactly where it was. The blast radius of any single failure is known in advance and strictly contained." },
      { type: "h2", text: "How Cross Margin Works" },
      { type: "p", text: "Cross margin pools everything: your entire account balance serves as collateral for every open position simultaneously. A losing position automatically draws on the shared pool, which means positions effectively lend each other strength — a deep-in-profit hedge leg props up a struggling one, and liquidation only threatens when the *account as a whole* runs out of margin. This is convenient and capital-efficient: you do not pre-allocate collateral, and offsetting positions naturally stabilize each other." },
      { type: "h2", text: "Side-by-Side Comparison" },
      {
        type: "table",
        headers: ["Feature", "Isolated margin", "Cross margin"],
        rows: [
          ["Collateral", "Fixed per position", "Shared account pool"],
          ["Blast radius", "One position only", "Entire account"],
          ["Capital efficiency", "Lower; collateral sits idle", "Higher; shared buffer"],
          ["Liquidation trigger", "Single position's margin ratio", "Whole account's margin ratio"],
          ["Management effort", "Higher; top up per position", "Lower; automatic sharing"],
          ["Best for", "Leveraged arbitrage legs", "Genuinely offsetting hedged books"]
        ],
      },
      { type: "p", text: "The last row is the crux, and it is more subtle than it looks. Cross margin is genuinely excellent for a *true* hedged book — say, long spot-equivalent and short futures on the same asset in one account — because the offsetting economics match the offsetting collateral: when one leg loses, the other gains, and the shared pool barely moves. The danger arises when the book is not as hedged as the trader believes: mismatched sizes, different assets, or legs on different venues that the margin engine cannot see. Cross margin rewards true hedges and punishes false ones." },
      {
        type: "callout",
        title: "The golden rule for arbitrage margin",
        text: "Isolate what can surprise you; share only what truly offsets. Leveraged or experimental legs get isolated margin. Proven, tightly-hedged pairs in a single account can use cross margin — after you have verified the hedge ratio holds under stress.",
        tone: "info",
      },
      { type: "h2", text: "Which Mode for Which Arbitrage Leg" },
      { type: "p", text: "Apply the rule leg by leg. The **short futures leg** of a basis trade — the one that faces liquidation in upside spikes — usually belongs in isolated margin, with collateral sized so that historic wicks cannot touch it. The **funding-trade short** on perpetuals, exposed to the same squeeze dynamics, likewise benefits from isolation. What about the combined book? If both legs of a hedge live in one account and you have verified they offset under stress, cross margin lets the winning leg support the losing one through volatility that would have stopped out an isolated position. Many experienced desks therefore run a hybrid: isolated margin on the dangerous legs, cross margin on the proven core book." },
      { type: "p", text: "There is one more consideration: **venue mechanics differ**. Some exchanges compute margin at the portfolio level even in cross mode, recognizing hedges automatically; others treat cross margin as a simple shared pool with no offset logic. Portfolio-margin features can make cross margin dramatically more capital-efficient for hedgers — but they also add complexity and higher eligibility requirements. Before choosing, read your exchange's margin documentation and compare structures across venues, for example in our [Binance versus OKX](/arbitrage/binance-vs-okx) breakdown." },
      { type: "h2", text: "Practical Setup Tips" },
      {
        type: "list",
        items: [
        "Default new positions to isolated margin; switch to cross only as a deliberate, documented decision.",
        "Size isolated collateral so the position survives twice the worst wick in the asset's recent history.",
        "Never mix experimental strategies with your core hedged book in one cross-margin account.",
        "Keep a stablecoin buffer outside positions for emergency top-ups — on the same exchange, not another one.",
        "Re-verify hedge ratios after every adjustment; a hedge that drifted is a directional bet in a cross-margin pool.",
        "Know your exchange's liquidation order: which position gets closed first when the shared pool runs dry."
        ],
      },
      { type: "p", text: "Margin mode is not a one-time setting — it is an ongoing discipline. Review it quarterly, or whenever you add a strategy to the book. The traders who get hurt are rarely the ones who chose wrong once; they are the ones who set cross margin two years ago, added three new strategies since, and never re-examined whether the shared pool still matches the risks inside it. Ten minutes of review per quarter is cheap insurance. For the broader risk picture, see our guides to [liquidation risk in hedged arbitrage](/blog/liquidation-risk-arbitrage) and [using leverage safely](/blog/leverage-in-arbitrage)." },
      {
        type: "faq",
        items: [
          {
            q: "Can I mix cross and isolated margin on one exchange?",
            a: "On most major exchanges, yes — margin mode is set per position, not per account. You can run isolated margin on risky legs and cross margin on the hedged core book simultaneously. Check your exchange's interface, as the exact mechanics vary.",
          },
          {
            q: "Does cross margin really prevent liquidations?",
            a: "It delays them by letting positions share collateral, which helps genuinely offsetting hedges ride out volatility. But it cannot prevent liquidation if the whole account's losses exhaust the shared pool — and then everything liquidates together instead of one position at a time.",
          },
          {
            q: "Which margin mode is better for beginners?",
            a: "Isolated margin. It makes the maximum loss per position explicit and prevents one mistake from cascading through your account. The extra management effort is a worthwhile tuition in understanding your real exposures.",
          },
          {
            q: "What is portfolio margin and how does it relate?",
            a: "Portfolio margin is an advanced account type where the exchange recognizes offsetting positions and reduces total margin requirements accordingly. It is the most capital-efficient option for hedgers but usually requires higher balances, experience checks, and careful risk management.",
          }
        ],
      },
  ],
};
