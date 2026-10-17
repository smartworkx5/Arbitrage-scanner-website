import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "capital-rotation-strategy",
  title: "Capital Rotation Between Strategies",
  description: "Edges move. Learn how to rotate capital between arbitrage strategies using evidence, thresholds, and a schedule, instead of chasing yesterday's best spread.",
  keywords: [
      "capital rotation strategy",
      "rotate capital arbitrage",
      "strategy rotation crypto",
      "arbitrage strategy switching",
      "capital allocation trading",
      "rotate between strategies"
  ],
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "No arbitrage strategy wins forever. Rotation means shifting capital to where the edge is now, based on data — not on what worked last month.",
  image: "/images/blog/capital-rotation-strategy.svg",
  blocks: [
      { type: "p", text: "Capital Rotation Between Strategies is the discipline of moving capital from strategies whose edge has faded to strategies whose edge is currently strongest. Every arbitrage edge decays: spreads compress as more traders find them, fees change, funding rates flip, and market regimes shift. Traders who keep all their capital in last month's winning strategy slowly earn less and less, while traders who rotate on evidence keep their capital where it is paid best. On Oct 17, 2026, with BTC near $81,500, ETH near $2,430, and BTC open interest down more than 14 percent from recent highs, market conditions have clearly changed from weeks ago, and strategies should be re-examined rather than run on autopilot." },
      { type: "h2", text: "Why Edges Decay" },
      { type: "p", text: "Edges decay for structural reasons, not because anyone did anything wrong. When a spread is easy to find, more capital chases it and the spread narrows. When an exchange improves its matching engine or lowers fees, the advantage of being fast shrinks. When volatility changes, strategies that need calm markets stop working and strategies that thrive on movement start paying. Funding-rate spreads are a clear example: they can be generous for weeks, then flip sign and charge the trader who stays too long. Rotation is the response to this decay. It treats each strategy as a temporary allocation with an expiry date, not as a permanent identity." },
      { type: "p", text: "The opposite of rotation is loyalty to a dead strategy, and it is expensive. A trader who keeps running a cross-exchange route after its net spread has fallen below break-even is paying fees to stay busy. A trader who keeps holding a funding-rate position after the rate flips is paying to hold a losing trade. Both mistakes feel like persistence, but they are actually neglect. The fix is measurement: every strategy should have a current, after-fee return figure, updated at least weekly, so decay is visible before it becomes a loss." },
      { type: "h2", text: "A Rotation Framework" },
      { type: "p", text: "A workable rotation framework has four parts: a strategy scorecard, a review schedule, rotation thresholds, and execution rules. The scorecard tracks each live strategy's net return per unit of capital per week, its worst week, and its capital usage. The review happens on a fixed schedule, for example every Sunday, so rotation is a calm decision rather than a panicked reaction. Thresholds define when to act: for instance, rotate capital away from a strategy whose four-week average net return falls below your minimum, or toward one whose return exceeds it for two consecutive reviews. Execution rules govern how fast to move: shift a fraction at a time, unwind hedges in the right order, and never rotate everything on a single data point." },
      {
        type: "table",
        headers: ["Framework element", "Example rule", "Purpose"],
        rows: [
          ["Scorecard", "Net weekly return per strategy, after fees", "See decay early"],
          ["Review schedule", "Fixed weekly review", "Calm, evidence-based decisions"],
          ["Rotation threshold", "Two reviews below minimum triggers rotation", "Avoid reacting to one bad week"],
          ["Execution rule", "Move 25 to 50 percent at a time", "Avoid whipsaw and unwind errors"],
          ["Capital cap", "No strategy above 50 percent of capital", "Limit damage from any one failure"]
        ],
      },
      { type: "h2", text: "What to Rotate Between" },
      { type: "p", text: "Most arbitrageurs rotate among a small set of strategies they already understand: cross-exchange spot spreads, funding-rate differentials, stablecoin or wrapped-token spreads, and single-exchange spread trades. The point of rotation is not to collect strategies but to allocate among proven ones. A new strategy should enter the rotation only after a paper-trading or small-size trial with logged after-fee results. During volatile periods, rotation often means moving toward hedged or funding-based strategies and away from transfer-dependent routes, because transfer risk rises with volatility. During calm periods, transfer-based routes may earn again. The regime, not the calendar, decides. For the core mechanics of two major strategies, see [Cross-Exchange Arbitrage](/guides/cross-exchange-arbitrage) and [Funding-Rate Arbitrage](/guides/funding-rate-arbitrage)." },
      {
        type: "list",
        items: [
        "Keep a weekly scorecard of net return per strategy.",
        "Rotate on thresholds, not on feelings or single trades.",
        "Move capital in fractions, never all at once.",
        "Trial any new strategy at small size before allocating.",
        "Keep a reserve so rotation never requires emergency withdrawals."
        ],
      },
      { type: "h2", text: "Rotation Mistakes to Avoid" },
      { type: "p", text: "The most common rotation mistake is over-rotation: chasing every weekly winner and paying transfer and trading fees on constant moves. Rotation should be infrequent and evidence-based, not a weekly reshuffle. A second mistake is rotating into a strategy you have not tested, which replaces a known small edge with an unknown risk. A third is ignoring correlation: two strategies that both depend on the same exchange or the same stablecoin are not truly diversified, so rotating between them does not reduce risk. Finally, never rotate under time pressure during a market event. If conditions are chaotic, the right move is usually to reduce exposure and wait, not to reorganize the whole portfolio. For venue-level context, see [Binance vs Kraken](/arbitrage/binance-vs-kraken)." },
      {
        type: "callout",
        title: "Rotation is reallocation, not prediction",
        text: "You rotate because measured returns changed, not because you forecast the next move. If the data does not justify a move, staying put is the correct decision.",
        tone: "info",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you design a rotation routine that stays disciplined. Ask it to draft a strategy scorecard template, or to summarize your weekly review notes into clear rotate, hold, or shrink decisions." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is capital rotation in arbitrage?",
            a: "It is moving capital from strategies whose after-fee edge has faded to strategies whose edge is currently strongest, based on measured returns rather than guesses.",
          },
          {
            q: "How often should I rotate capital?",
            a: "On a fixed schedule, such as weekly, and only when thresholds are met. Frequent rotation wastes fees and usually underperforms patient reallocation.",
          },
          {
            q: "Why do arbitrage edges decay?",
            a: "More capital chases profitable spreads, fees and platform rules change, funding rates flip, and market regimes shift. Every strategy has a limited window of strong returns.",
          },
          {
            q: "What is the biggest rotation mistake?",
            a: "Chasing last week's winner without testing. Rotate only into strategies you have already validated at small size with logged after-fee results.",
          }
        ],
      },
  ],
};
