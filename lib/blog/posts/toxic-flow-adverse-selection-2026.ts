import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "toxic-flow-adverse-selection-2026",
  title: "Toxic Flow and Adverse Selection: Why Market Makers Lose",
  description: "Explore toxic flow and adverse selection: why informed orders hurt market makers, how to detect toxic flow, and how liquidity providers protect themselves.",
  keywords: [
      "Toxic Flow and Adverse Selection",
      "toxic flow crypto",
      "adverse selection market making",
      "informed order flow",
      "market maker losses",
      "toxicity detection trading"
  ],
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Market makers earn the spread, yet many still lose money. The reason is toxic flow: orders from traders who know something the maker does not, arriving just before the price moves against the maker.",
  image: "/images/blog/toxic-flow-adverse-selection-2026.svg",
  blocks: [
      { type: "p", text: "Toxic Flow and Adverse Selection explain a puzzle that surprises many new market makers: how can you earn a fee or a spread on every trade and still end up losing? The answer is that not all order flow is equal. Some flow is uninformed, from traders who simply need to buy or sell and are happy to pay the spread for immediacy. Other flow is informed, from traders who have news, a signal, or a faster view of another market, and who trade precisely because the price is about to move. When a market maker fills an informed order, the price then moves against the position they just took, and the loss on price dwarfs the spread they earned. That is adverse selection, and it is the central cost of providing liquidity." },
      { type: "h2", text: "What Makes Flow Toxic" },
      { type: "p", text: "Flow becomes toxic when the trader sending the order has an informational edge over the market maker filling it. That edge can come from many sources: faster access to news, a signal from another exchange where the price has already moved, an on-chain clue, a large order visible elsewhere, or simply better analysis of the same public data. The maker, quoting passively in the book, cannot tell in the moment whether an incoming order is a harmless retail trade or the first trade of an informed campaign. They must fill it at the quoted price, and only afterwards does the price reveal which kind it was. Over many trades, the informed minority can cost more than the uninformed majority earns." },
      { type: "p", text: "Toxicity is not about intent to harm; it is about information asymmetry. A pension fund rebalancing slowly is not toxic, because its trades do not predict the next price move. A trader arbitraging a price gap between two exchanges is toxic to the slower venue, because they only trade there when they know the price on the faster venue has already moved. The same logic applies to latency arbitrage, news trading, and toxic derivatives flow that hedges an options position. In each case, the maker is effectively selling insurance against price moves to someone who already knows which way the price is likely to go, and the premium, meaning the spread, is often too small for the risk taken." },
      { type: "h2", text: "How Adverse Selection Shows Up in Results" },
      { type: "p", text: "Adverse selection shows up as a pattern: fills are followed by price moves against the maker more often than chance would suggest. A maker who buys will see the price fall shortly after the fill, and a maker who sells will see it rise. Measured over hundreds of fills, this post-trade drift, often called markout, is the key diagnostic. If the average price five minutes after a buy fill is lower than the fill price by more than the spread earned, the flow is toxic on average, and the strategy loses even before fees. Professional makers track markouts at several horizons, from seconds to minutes, because different kinds of toxicity reveal themselves at different speeds." },
      { type: "p", text: "The effect is amplified in volatile or news-driven markets. On Oct 31, 2026, Bitcoin traded around $77,300 to $77,376, down about 0.8 percent in 24 hours after a range of roughly $76,326 to $78,804, and reports around a major exchange incident were still being digested, with preliminary estimates of about $6.3 billion in assets affected, attributed as reported and preliminary rather than proven. In such conditions, informed traders move first, and passive makers become the counterparty to flow that already reflects the news. That does not mean makers should never quote during news, but it does mean they should widen spreads, reduce size, or pause when the probability of informed flow spikes, because the spread that was fair in calm conditions is no longer fair compensation." },
      { type: "h2", text: "Detecting Toxic Flow Before It Hurts" },
      { type: "p", text: "Detection starts with measurement, not intuition. Track the markout of your fills: the average price move in the seconds and minutes after each trade, split by venue, pair, time of day, and order size. If one venue or one pair shows consistently negative markouts, its flow is more toxic, and you should quote wider there, reduce size, or stop quoting it altogether. Also watch fill clustering: informed flow often arrives in bursts, with several trades hitting the same side in quick succession, while uninformed flow is more evenly spread. A sudden burst of same-direction fills, especially after a quiet period, is a warning that something has changed." },
      { type: "p", text: "External signals help too. A price move on a leading venue, a large liquidation, a funding-rate dislocation, or a news headline that has not yet been priced into your venue all raise the odds that the next incoming order is informed. Smart makers therefore monitor cross-venue prices and news feeds in real time, and they automate defensive responses: widening quotes when another venue moves sharply, or pulling quotes entirely when a dislocation exceeds a threshold. This is not about predicting the market; it is about recognising when the odds have shifted against passive quoting and adjusting compensation accordingly. Traders studying cross-venue dynamics should also read [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) to see how price gaps create informed flow." },
      {
        type: "list",
        items: [
        "Measure post-trade markouts by venue, pair, and time of day to find where flow is most toxic.",
        "Watch for bursts of same-direction fills after quiet periods, a classic sign of informed arrival.",
        "Monitor leading venues and news feeds, and widen or pull quotes when another market moves sharply first.",
        "Compare spread earned per fill with average adverse drift: if drift exceeds spread, the flow loses money."
        ],
      },
      { type: "h2", text: "Defences That Actually Work" },
      { type: "p", text: "The most effective defence is dynamic pricing: quote wider when toxicity is high and tighter when flow is benign. That can mean widening spreads during news, after large moves on other venues, or when recent markouts have been poor, and tightening again when conditions normalise. Inventory management is the second defence: skew quotes to discourage further fills on the side where inventory is already heavy, so a toxic run cannot keep adding to a losing position indefinitely. Hard inventory caps, which stop quoting on a side once a limit is reached, prevent the worst case where a maker keeps absorbing informed flow all the way down." },
      { type: "p", text: "Speed and selectivity are the third defence. Faster makers can update quotes before stale prices are hit, and selective makers can simply decline to quote the most toxic pairs or sessions. Some makers avoid quoting at all during scheduled news, exchange maintenance windows, or periods of extreme volatility, accepting zero revenue for an hour to avoid a large adverse-selection loss. That restraint is a skill, not a failure: the market maker who survives is the one who knows when the spread on offer is not enough for the risk of being the uninformed counterparty. For related fee dynamics, see [funding rate arbitrage](/guides/funding-rate-arbitrage) and how carry costs interact with quoting decisions." },
      {
        type: "callout",
        title: "Risk Warning",
        text: "Providing liquidity exposes you to adverse selection: informed traders will systematically trade against stale quotes, and losses from price moves can far exceed spread and rebate income. Never quote size without inventory limits, markout measurement, and a pause rule for volatile or news-driven sessions.",
        tone: "warning",
      },
      { type: "h2", text: "Toxic Flow in Crypto Specifically" },
      { type: "p", text: "Crypto markets are especially prone to toxic flow because they are fragmented across many venues, operate around the clock, and react to news and on-chain events at all hours. A price move on one major exchange can create informed flow on slower venues within seconds, and a liquidation cascade on a derivatives venue can spill into spot books before makers have updated quotes. The absence of a single central tape, combined with varying latency and fee structures, means the fastest participants consistently enjoy an edge over passive quoters. That structure does not make market making impossible, but it does mean crypto makers must be more selective, faster, and more disciplined about widening spreads than their traditional-market counterparts." },
      { type: "p", text: "Decentralised venues add their own toxicity, notably through arbitrageurs and searchers who exploit stale automated market maker prices after a move elsewhere. A liquidity provider in a pool faces the same adverse-selection problem in a different form: when the external price moves, arbitrageurs trade against the pool until its price catches up, leaving providers with a worse mix of assets, a phenomenon often called impermanent loss. The parallel is instructive, because it shows that adverse selection is not a quirk of order books, but a universal cost of offering liquidity to better-informed traders. Any liquidity strategy, centralised or decentralised, must earn enough from fees and spreads to cover that cost, or it will bleed slowly." },
      {
        type: "table",
        headers: ["Flow type", "Predicts next move", "Maker outcome"],
        rows: [
          ["Uninformed retail flow", "No", "Spread earned, price roughly flat after fill"],
          ["Slow rebalancing flow", "No", "Spread earned, low adverse drift"],
          ["Cross-exchange arbitrage flow", "Yes, from faster venue", "Adverse drift often exceeds spread"],
          ["News-driven informed flow", "Yes, from new information", "Large adverse drift, widen or pause quoting"]
        ],
      },
      { type: "h2", text: "A Practical Toxicity Routine" },
      { type: "p", text: "Start with a simple weekly review: for each venue and pair, calculate average spread earned per fill and average price move five minutes after fills, then subtract one from the other. If the result is negative for a venue, you are losing to toxicity there, and the fix is to widen, shrink, or stop quoting that venue until conditions change. Add a daily check for burst patterns and cross-venue dislocations, and write down your pause rules in advance so you follow them during stress rather than debating them mid-crash. Over time, this routine turns adverse selection from a mysterious loss into a measured cost that can be priced, avoided, or compensated." },
      { type: "p", text: "Toxic flow is not a reason to avoid providing liquidity altogether; it is the reason liquidity earns a spread in the first place. The market pays makers because they take the risk of trading with better-informed counterparties, and the makers who last are those who measure that risk honestly, price it into their quotes, and refuse to provide liquidity at a price that does not compensate them. Understand toxicity, and you understand why spreads exist, why they widen in stress, and why the quiet discipline of quoting only when paid enough is the real edge in market making." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can turn a dense market idea into a clear, simple explanation. For this article, you can ask it to explain adverse selection with an everyday analogy, or to help you outline a simple checklist for reviewing your own trading fills." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is toxic flow in trading?",
            a: "Toxic flow is order flow from traders who have an informational edge, such as faster news or a price move on another venue, so their orders predict the next price move. When a market maker fills toxic flow, the price usually moves against the maker shortly afterwards.",
          },
          {
            q: "What is adverse selection?",
            a: "Adverse selection is the cost a liquidity provider pays for trading with better-informed counterparties. The maker earns the spread on each fill but loses on price when informed orders arrive, and if the price loss exceeds the spread, market making loses money overall.",
          },
          {
            q: "How can I measure whether my flow is toxic?",
            a: "Measure post-trade markouts: the average price move in the seconds and minutes after your fills, by venue and pair. Consistently negative markouts larger than the spread earned indicate toxic flow that needs wider quotes, smaller size, or a pause.",
          },
          {
            q: "Can market makers avoid toxic flow entirely?",
            a: "No, but they can manage it by widening spreads when toxicity is high, capping inventory, skewing quotes away from heavy positions, and pausing during news or extreme volatility. The goal is to be paid enough for the risk, not to eliminate informed trading.",
          }
        ],
      },
  ],
};
