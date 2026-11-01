import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "perp-hedging-spot-with-futures-2026",
  title: "Hedging Spot Holdings With Perpetual Futures: Basis, Funding, and Mistakes",
  description: "Hedging spot crypto with perpetual futures: hedge ratios, basis risk, funding costs, and the common mistakes that turn a hedge into a new bet in practice.",
  keywords: [
      "Hedging Spot Holdings",
      "perpetual hedge",
      "basis risk",
      "funding costs",
      "hedge ratio",
      "crypto risk management"
  ],
  datePublished: "2026-11-01",
  dateModified: "2026-11-01",
  readingMinutes: 10,
  category: "Strategies",
  excerpt: "Hedging spot holdings with perpetuals can reduce downside exposure, but only if the hedge ratio, basis, and funding costs are understood. This guide walks through the trade-offs.",
  image: "/images/blog/perp-hedging-spot-with-futures-2026.svg",
  blocks: [
      { type: "p", text: "Hedging Spot Holdings with perpetual futures is a defensive strategy that long-term holders use when they want to reduce downside exposure without selling their coins. On 1 November 2026, Bitcoin traded near 77,586 dollars, down about 4.0 percent over seven days, while Ether traded near 2,255.13 dollars and Solana near 95.5 dollars. A holder who believes in the long term but worries about a short-term fall faces a choice: sell spot and possibly miss a rebound, or open a short perpetual position that gains if prices fall and offsets part of the spot loss." },
      { type: "p", text: "The idea sounds simple, but the execution contains several traps. A hedge is not a profit machine, and a badly sized hedge can create more risk than it removes. Basis risk, funding costs, liquidation risk on the short leg, and the temptation to keep the hedge on for too long all matter. This guide explains the mechanics in plain terms, shows where hedges typically go wrong, and sets out the checks a holder should make before opening one. For related definitions, see the [glossary](/glossary) and the guide to [cross-exchange arbitrage](/guides/cross-exchange-arbitrage)." },
      { type: "h2", text: "The Basic Hedge in Plain Terms" },
      { type: "p", text: "Suppose a trader holds one Bitcoin in spot and opens a short perpetual position for one Bitcoin. If Bitcoin falls by 1,000 dollars, the spot holding loses about 1,000 dollars in value, while the short perpetual gains about 1,000 dollars before fees and funding. The two legs roughly cancel, leaving the trader near break-even on price, minus costs. If Bitcoin rises by 1,000 dollars, the reverse happens: spot gains, the short loses, and the net result is again near break-even on price. The hedge therefore trades upside participation for downside protection, which is the point, but also the cost that many traders forget." },
      { type: "p", text: "In practice, few hedges are exactly one-to-one. A holder may hedge only half of a position, for example shorting 0.5 Bitcoin against a one Bitcoin holding. That partial hedge softens a fall without giving up all upside. A full hedge, by contrast, locks in the current value in price terms, subject to basis and funding, and is closer to a temporary exit without actually selling. The choice depends on conviction, time horizon, and how much downside the holder is willing to tolerate. There is no universally correct ratio, only a ratio that matches the holder's actual goal." },
      { type: "h2", text: "Basis Risk: Why the Offset Is Never Perfect" },
      { type: "p", text: "Basis is the difference between the perpetual contract price and the spot price. A perfect hedge assumes the two move together, but they do not always do so. During stress, the perpetual price can trade at a discount or premium to spot for hours, and that gap can widen or narrow while the hedge is open. If a trader closes both legs when the basis has moved against the hedge, the net result will differ from the simple example above. Basis risk is usually small in calm markets and larger in fast markets, which is exactly when a hedge is most wanted." },
      { type: "p", text: "Funding adds a second layer. If the perpetual market is heavily short, shorts may receive funding, which helps a short hedge. If the market is heavily long, shorts must pay funding, which drags on the hedge every few hours. Over days or weeks, funding can become a material cost, especially for a full hedge held through a crowded long market. A hedge that looks free at entry can therefore bleed slowly, and a holder who ignores funding may be surprised by the cumulative bill. Checking the current funding rate and its recent history is essential before sizing a hedge." },
      { type: "h2", text: "Liquidation Risk on the Short Leg" },
      { type: "p", text: "The most dangerous misunderstanding about hedging is the belief that holding spot makes the short safe. It does not, if the two legs sit in different accounts or if the short is margined separately. A sharp rise in price can liquidate the short perpetual even though the spot holding has gained in value, because the exchange liquidating the short does not automatically count the spot holding as collateral. The trader may then be left with unhedged spot exposure after a rise, plus a realised loss on the closed short, and no easy way to restore the hedge at the original price." },
      { type: "p", text: "To reduce this risk, traders use low leverage on the hedge leg, keep ample margin, and set alerts well before the liquidation price. Some use portfolio margin or unified accounts where spot and futures are recognised together, but those features vary by exchange and must be confirmed in advance. A hedge opened at high leverage defeats its own purpose, because it introduces a new liquidation risk that the spot holding alone never had. The safest hedge is often the most boring one: small, low-leverage, and sized to survive a sharp move in either direction." },
      { type: "h2", text: "Common Mistakes That Break a Hedge" },
      { type: "p", text: "The first common mistake is hedging without an exit plan. A hedge opened during a scare can stay open for weeks, accumulating funding costs and missing a recovery, because the trader never defined the condition for closing it. A clear rule helps, such as closing the hedge if price recovers to a stated level, if a set number of days pass, or if the original risk event has passed. Without that rule, a defensive hedge quietly becomes a directional short bet, and the trader's exposure flips from protected to speculative." },
      { type: "p", text: "Other mistakes include hedging the wrong asset, hedging with a contract that has low liquidity, and forgetting fees and taxes. A Bitcoin hedge does not properly hedge an altcoin holding, because altcoins can fall much further than Bitcoin or move independently. A thin perpetual contract can have wide spreads and unreliable prices, which increases basis risk. Fees on entry and exit, plus funding, must be included in any realistic estimate of hedge cost. A hedge that is roughly right on price but wrong on asset, venue, or duration can still lose money in both directions." },
      { type: "h2", text: "A Practical Pre-Hedge Checklist" },
      { type: "p", text: "Before opening a hedge, write down the goal in one sentence, the exact hedge ratio, the maximum funding cost you will accept, and the condition for closing. Check the liquidation price of the short leg and the margin available, and confirm whether spot holdings count as collateral on your exchange. Check the basis and funding history, not just the current snapshot, because a single reading can be misleading. Finally, consider simpler alternatives: selling a portion of spot, holding stablecoins, or simply accepting volatility may achieve the same goal with less complexity and less liquidation risk." },
      { type: "p", text: "Market context on 1 November 2026 also matters for hedge timing. Gold traded near 3,872 to 3,897 dollars per ounce after a fall of about 108 dollars on the day, and the dollar against the Pakistani rupee was steady at an interbank mid near 276.75. Those figures show that safe-haven and currency markets were also moving, and a crypto hedge does not protect against every portfolio risk. A holder should therefore view a perpetual hedge as one tool for one risk, namely short-term crypto price risk, rather than as a complete portfolio shield. The [best scanners overview](/best-crypto-arbitrage-scanners) and the [glossary](/glossary) can help with venue comparison and terminology." },
      {
        type: "callout",
        title: "Risk Warning",
        text: "A short perpetual hedge can be liquidated on a price rise even while your spot holding gains value, if the legs are margined separately. Use low leverage, keep extra margin, and confirm how your exchange treats spot collateral before hedging.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain hedge ratios and basis risk in simple words and help you draft a pre-hedge checklist for your own holdings. Muse AI is not a trading tool and does not give financial advice." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      {
        type: "faq",
        items: [
          {
            q: "Does hedging eliminate risk completely?",
            a: "No. It reduces price exposure but introduces basis risk, funding costs, fees, and liquidation risk on the futures leg. A hedge changes risk rather than removing it.",
          },
          {
            q: "What hedge ratio should a beginner use?",
            a: "Many holders start with a partial hedge, such as 25 to 50 percent of the holding, so that a mistake is smaller and upside is not fully given up. The right ratio depends on risk tolerance and time horizon.",
          },
          {
            q: "Can my short hedge be liquidated while I hold spot?",
            a: "Yes, if the short is margined separately. The exchange may not count your spot holding as collateral, so a sharp rise can close the short even though spot has gained.",
          },
          {
            q: "How long should a hedge stay open?",
            a: "As short as the risk it was opened for. Define an exit condition in advance, such as a price level, a date, or the end of the risk event, to avoid paying funding indefinitely.",
          }
        ],
      },
  ],
};
