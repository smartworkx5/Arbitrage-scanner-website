import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "perp-position-tiers-margin-steps-2026",
  title: "Position Tiers and Margin Steps: How Size Changes Your Perpetual Margin",
  description: "Position Tiers and margin steps in perpetual futures: how larger positions need more margin, lower leverage, and different liquidation prices in 2026 trading.",
  keywords: [
      "Position Tiers",
      "perpetual margin tiers",
      "margin steps crypto",
      "leverage limits futures",
      "position size margin",
      "perp liquidation price"
  ],
  datePublished: "2026-11-01",
  dateModified: "2026-11-01",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "In perpetual futures, bigger is not just riskier, it is structurally different. Position tiers raise your margin requirement as size grows, and that changes leverage and liquidation.",
  image: "/images/blog/perp-position-tiers-margin-steps-2026.svg",
  blocks: [
      { type: "p", text: "Position Tiers determine how much margin a perpetual trader must post as a position grows, and they are one of the least understood features of futures risk management. On 1 November 2026, Bitcoin traded near 77,586 dollars and Solana near 95.50 dollars, down about 0.89 percent in 24 hours, a market where a large position can be harder to exit than a small one. Most exchanges divide position size into tiers. Each tier has its own maintenance margin rate, maximum leverage, and sometimes its own initial margin requirement. As a position crosses into a higher tier, the margin rate steps up, maximum leverage steps down, and the liquidation price moves closer to the entry price. Traders who size a position without checking tiers may discover that adding to a winning trade suddenly requires much more margin, or that a position they thought was safe is closer to liquidation than expected. This article explains the mechanics and the sizing habits that follow. See the [glossary](/glossary) for terms and the [arbitrage guide](/guides/cross-exchange-arbitrage) for cross-venue context." },
      { type: "h2", text: "Why tiers exist" },
      { type: "p", text: "Tiers exist because large positions are harder and riskier to liquidate than small ones. If a small position is liquidated, the exchange can usually close it in the market without moving the price much. If a very large position is liquidated, closing it may move the price against the exchange, creating losses that exceed the posted margin and potentially triggering auto-deleveraging for other traders. By requiring more margin for larger positions, exchanges create a bigger buffer for that liquidation risk and discourage traders from building positions so large that the market cannot absorb them safely. Tiers also protect other traders, because a large liquidation cascade is less likely when large positions already carry higher margin. From a trader perspective, tiers are a form of progressive risk pricing: the first units of a position are cheapest in margin terms, and each additional unit becomes more expensive as size grows. That structure rewards careful sizing and penalises indiscriminate scaling." },
      { type: "h2", text: "How margin steps work" },
      { type: "p", text: "A typical tier table lists a maximum notional value for each tier, a maintenance margin rate, and a maximum leverage. For example, tier one might cover positions up to a certain notional value with a low maintenance margin and high maximum leverage, while tier five covers much larger positions with a higher maintenance margin and lower maximum leverage. When a position grows, the whole position, not just the incremental part, is often subject to the higher tier margin rate, depending on the exchange design. That whole-position effect is important: crossing a tier boundary can raise the margin requirement for the entire position at once, not just for the new addition. Some exchanges use a blended or marginal calculation, but traders should assume the stricter interpretation until they verify the specification. The liquidation price is calculated from the maintenance margin, so a higher maintenance margin means liquidation occurs sooner, closer to entry, even if the trader added margin. Checking the tier table before opening a position, and again before adding to it, is therefore a basic risk step." },
      { type: "h2", text: "Leverage, liquidation, and tier interaction" },
      { type: "p", text: "Leverage and tiers interact in a way that surprises many traders. A trader may open a small position at high leverage within tier one, then add to it and cross into tier two, where maximum leverage is lower. The exchange may then require additional margin to bring the position into compliance, or may prevent further increases in leverage, even though the trader has not changed their view. Similarly, a position that was opened at a leverage allowed in a lower tier may become non-compliant if the tier thresholds change, although exchanges usually apply changes with notice. Liquidation price also shifts with tiers. Because maintenance margin rises, the price at which equity falls to maintenance margin moves closer to entry, reducing the room for adverse moves. Traders should therefore calculate liquidation price after each addition, not only at entry, and should keep a margin buffer above maintenance margin that accounts for the next tier, not just the current one. Trading at maximum leverage in a higher tier leaves almost no room for volatility." },
      { type: "h2", text: "Sizing strategies around tiers" },
      { type: "p", text: "Smart sizing treats tier boundaries as decision points, not as obstacles to ignore. One approach is to size the core position to stay within a lower tier, and to take additional exposure through a separate account, a different contract, or a spot position if the strategy genuinely requires more size, while understanding that splitting does not remove total risk. Another approach is to plan additions in advance: decide the maximum position, check which tier it falls into, and ensure margin is available for that tier before the first trade, rather than discovering the requirement mid-trade. A third approach is to use tier-aware stop losses and take-profit levels, since a larger position in a higher tier may need a tighter risk plan because liquidation is closer. On 1 November 2026, the United States dollar to Pakistani rupee interbank mid rate was about 276.75, and United States equities had fallen sharply on 30 October, with the Nasdaq-100 down 3.46 percent, a reminder that macro volatility can move crypto margins quickly. Position sizing that respects tiers, volatility, and total portfolio risk is more durable than sizing that chases maximum leverage." },
      { type: "h2", text: "Common tier mistakes" },
      { type: "p", text: "The most common mistake is adding to a position without rechecking margin. A trader who doubles a position may expect margin to double, but if the new size crosses a tier, margin may more than double, and the account may face a margin call or forced reduction. Another mistake is assuming leverage stays constant as size grows. Maximum leverage is a tier property, not a trader property, and it falls as size rises. A third mistake is ignoring notional value. Tier thresholds are usually based on notional value, meaning quantity multiplied by price, not on quantity alone, so a price rise can push a position into a higher tier even without adding contracts. Finally, traders sometimes confuse initial margin with maintenance margin. Initial margin is what is needed to open, maintenance margin is what must be maintained to avoid liquidation, and tiers affect both, but in different ways by venue. Reading the tier table, noting whether it applies to the whole position, and recalculating after price moves will prevent most tier surprises. When in doubt, trade smaller and keep excess margin." },
      {
        type: "callout",
        title: "Risk warning",
        text: "Larger perpetual positions require proportionally more margin and face closer liquidation prices under tier rules. Adding to a position can trigger a sudden margin increase. Never size a position on leverage alone.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can explain trading mechanics in simple words. For this article, it can explain position tiers with a simple size example and help you draft a sizing checklist that checks tier, margin, and liquidation price before adding to a trade." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Do tiers apply to the whole position or only the extra part?",
            a: "It depends on the exchange, but many venues apply the higher tier rate to the whole position. Check the specification and assume the stricter case until verified.",
          },
          {
            q: "Can a price rise alone push me into a higher tier?",
            a: "Yes, if tiers are based on notional value. Quantity times price determines notional value, so a price increase can cross a threshold without any new trades.",
          },
          {
            q: "Why does maximum leverage fall as size grows?",
            a: "Larger positions are harder to liquidate without moving the market, so exchanges require more margin and allow less leverage to protect the risk engine and other traders.",
          },
          {
            q: "How should I plan additions around tiers?",
            a: "Decide your maximum size in advance, check its tier and margin requirement, and keep that margin available before you start scaling in, rather than discovering it mid-trade.",
          }
        ],
      },
  ],
};
