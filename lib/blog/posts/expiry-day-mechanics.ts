import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "expiry-day-mechanics",
  title: "What Happens on Crypto Futures Expiry Day",
  description: "Crypto futures expiry day explained: settlement mechanics, how the basis collapses in the final hours, and the traps that catch arbitrageurs off guard.",
  keywords: [
      "crypto futures expiry day",
      "futures settlement mechanics",
      "basis collapse expiry",
      "quarterly futures settlement",
      "crypto expiry trading 2026"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 8,
  category: "Strategies",
  excerpt: "Expiry day is when futures contracts meet reality: settlement prices are computed, the basis collapses to zero, and careless traders get caught. Here is the full mechanics.",
  image: "/images/blog/expiry-day-mechanics.svg",
  blocks: [
      { type: "p", text: "Four times a year — and monthly on some exchanges — crypto derivatives go through a ritual that basis traders plan their entire quarter around: **expiry day**. This is when dated futures contracts settle, open interest collapses, the **basis** compresses to zero, and the orderly machinery of convergence meets the messy reality of settlement mechanics. For arbitrageurs, expiry day is both payday and minefield: it is when locked-in profits are finally realized, and also when liquidity evaporates, settlement quirks appear, and careless position management gets punished." },
      { type: "p", text: "Most guides treat expiry as a footnote — contracts expire, prices converge, done. The reality is more textured, and the texture is where the money is lost. Settlement prices are computed from index formulas with specific time windows; liquidity migrates to the next contract days before expiry; and the final hours can produce basis behavior that looks irrational until you understand the plumbing. This article walks through exactly **what happens on crypto futures expiry day**, so you can plan for it instead of being surprised by it." },
      { type: "h2", text: "What Expiry Day Actually Is" },
      { type: "p", text: "A dated futures contract is a promise to transact the underlying asset at a specific price on a specific date. Expiry day is when that promise comes due. On major crypto exchanges, quarterly contracts typically expire on the last Friday of March, June, September, and December, at a precise published time (often 08:00 UTC). In the minutes around that time, the exchange computes a **settlement price**, closes out all remaining open positions at that price, and the contract ceases to exist. If settlement mechanics are new to you, our [crypto arbitrage glossary](/glossary) covers the key terms used throughout this article." },
      { type: "p", text: "Crucially, most of that open interest never reaches expiry. Professional traders **roll** their positions — closing the expiring contract and opening the next quarter's — in the one to two weeks before expiry. By expiry day itself, remaining open interest is dominated by three groups: basis traders holding to settlement to capture the final sliver of convergence, hedgers with genuine delivery needs, and inattentive traders who forgot to close. Liquidity follows the crowd to the next contract, which means expiry-day trading in the expiring contract happens in thinning books — the first thing to understand about the day's weirdness." },
      { type: "h2", text: "How Settlement Prices Are Calculated" },
      { type: "p", text: "The settlement price is not simply the last traded price — it is computed from a **settlement index**, typically a time-weighted average of spot prices across several major exchanges over a defined window (often the final 30 minutes before expiry). This design exists to prevent manipulation: no single trade, on any single venue, can dictate the settlement. For cash-settled contracts, every open position is closed at this index price and profit or loss is credited in the settlement currency. For physically delivered contracts, the future converts into the underlying asset itself." },
      { type: "h2", text: "The Basis Collapse in the Final Hours" },
      {
        type: "table",
        headers: ["Time to expiry", "Typical basis behavior", "What traders do"],
        rows: [
          ["2+ weeks out", "Normal decay toward zero", "Rolls begin; new positions rare"],
          ["Final week", "Accelerated compression", "Most rolling completes here"],
          ["Final 24 hours", "Near zero, occasional wobbles", "Only deliberate holders remain"],
          ["Settlement window", "Forced to index price", "Arbitrageurs flatten residual gaps"]
        ],
      },
      { type: "p", text: "The convergence you have been harvesting all quarter finishes in these final hours, and the endgame has a characteristic shape. As liquidity thins, the basis can oscillate — briefly widening as large rolls push the contract around, then snapping back as arbitrageurs pick off the dislocations. These micro-opportunities are real but treacherous: spreads are wide, depth is thin, and a market order can move the price against you significantly. The professionals harvesting expiry-day scraps use limit orders, small sizes, and pre-computed fair values. Everyone else is better off watching from the sidelines." },
      {
        type: "callout",
        title: "Do not trade expiry day like a normal day",
        text: "Thinning liquidity, wide spreads, settlement-window basis risk, and physical-delivery surprises make expiry day the worst day of the quarter for casual trading — and a specialized hunting ground for prepared arbitrageurs with limit orders and small size.",
        tone: "warning",
      },
      { type: "h2", text: "Expiry-Day Traps for Arbitrageurs" },
      { type: "p", text: "The classic trap is **forgetting to roll or close**. On physically delivered contracts, an unclosed short future can leave you needing to deliver actual bitcoin you do not hold; an unclosed long can leave you receiving coins you did not plan to custody. Even on cash-settled contracts, holding into settlement means accepting index risk in the final window — usually fine, but not what you signed up for if your plan was to exit cleanly. Set calendar alerts a week before every expiry you have exposure to, and treat the roll as a scheduled operation, not an improvisation." },
      { type: "h2", text: "What Smart Arbitrageurs Do Differently" },
      {
        type: "list",
        items: [
        "Roll 1-2 weeks before expiry, never during the final illiquid days.",
        "Set calendar alerts for every contract expiry with open exposure.",
        "Read the settlement spec: index constituents, averaging window, cash vs physical.",
        "Keep margin buffers through settlement; expect requirement changes near expiry.",
        "Use limit orders only in the expiring contract's final sessions — never market orders into thin books.",
        "After settlement, verify fills against the published index price before moving on."
        ],
      },
      { type: "p", text: "Handled properly, expiry day is uneventful — which is exactly the point. The basis trader's edge comes from months of patient convergence, not from heroics in the final hours. Plan the roll early, respect the settlement mechanics, keep your margin healthy, and let the contract specification do its work. Then turn your attention to the new quarter's contract, where the next basis is already waiting to be harvested. For the full quarterly strategy, see our [quarterly futures arbitrage strategy](/blog/quarterly-futures-arbitrage-guide) guide." },
      {
        type: "faq",
        items: [
          {
            q: "What time do crypto quarterly futures expire?",
            a: "Typically on the last Friday of the quarter month at a published time, often 08:00 UTC — but the exact time, index methodology, and settlement type vary by exchange. Always check the contract specifications for the specific product you trade.",
          },
          {
            q: "What happens if I forget to close a futures position before expiry?",
            a: "On cash-settled contracts, the exchange closes it at the settlement index price automatically. On physically delivered contracts, you may end up delivering or receiving the actual asset. Neither is catastrophic if understood, but both can surprise traders who assumed auto-closure works the same everywhere.",
          },
          {
            q: "Why does trading volume drop before expiry?",
            a: "Because most traders roll to the next contract 1-2 weeks early. Liquidity migrates, leaving the expiring contract thin. This is normal and expected — it is why professionals finish their rolling before the final week.",
          },
          {
            q: "Can I profit from expiry-day price moves?",
            a: "Small, specialized opportunities exist in the final sessions as the basis oscillates in thin books, but they require limit orders, small size, and precise fair-value estimates. For most arbitrageurs, the profitable move is harvesting the quarter's convergence — not gambling on settlement noise.",
          }
        ],
      },
  ],
};
