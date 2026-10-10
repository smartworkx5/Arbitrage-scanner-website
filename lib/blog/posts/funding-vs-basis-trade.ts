import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "funding-vs-basis-trade",
  title: "Funding Trades vs Basis Trades Compared",
  description: "Funding trades vs basis trades compared: perpetuals vs dated futures for carry. Costs, risks, capital needs, and which carry trade fits your style in 2026.",
  keywords: [
      "funding rate vs basis trade",
      "perps vs futures arbitrage",
      "crypto carry trade",
      "funding rate arbitrage vs cash and carry",
      "crypto basis trade comparison"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Two hedged carry trades dominate crypto: collecting funding on perpetuals and harvesting the basis on dated futures. They look similar — but their risks are completely different.",
  image: "/images/blog/funding-vs-basis-trade.svg",
  blocks: [
      { type: "p", text: "Crypto offers two great hedged ways to earn **carry** — yield collected from market structure rather than price direction. The **funding trade** shorts a perpetual future and holds spot (or a long hedge) to collect periodic funding payments. The **basis trade** buys spot and shorts a dated future to harvest the futures premium as the contract converges at expiry. Both are market-neutral. Both exploit the market's structural demand for leveraged longs. And both are routinely confused with each other — which is dangerous, because their risk profiles diverge exactly when markets get violent." },
      { type: "p", text: "This comparison breaks down both trades honestly: how each one generates its return, what can break it, what it costs to run, and which trader profile each suits. Neither is free money, and neither is risk-free — but understood properly, they are two of the most durable edges available to a disciplined crypto trader in 2026. If you are new to either concept, start with our [funding-rate arbitrage guide](/guides/funding-rate-arbitrage) and our [spot-futures arbitrage guide](/blog/spot-futures-arbitrage-guide)." },
      { type: "h2", text: "The Funding Trade: Collecting Payments on Perpetuals" },
      { type: "p", text: "Perpetual futures never expire, so they use a **funding rate** — a periodic payment exchanged between longs and shorts, typically every eight hours — to tether the contract price to spot. When the market is bullish and perpetuals trade above spot, funding goes positive: longs pay shorts. The funding trader takes the receiving side, shorting the perpetual while holding an offsetting long (usually spot) to stay delta-neutral. Every funding interval, a payment lands in the account. The return accrues continuously, like interest, for as long as funding stays positive and the position stays open." },
      { type: "h2", text: "The Basis Trade: Harvesting Convergence on Dated Futures" },
      { type: "p", text: "The basis trade works on **dated futures** — quarterlies and other expiring contracts. You buy spot and short the future when it trades at a premium, and the premium mechanically decays to zero at expiry. Your return is locked in at entry (minus costs): the annualized basis on day one is your yield, accruing steadily as settlement approaches. There is no variable payment, no flip risk, no dependence on sentiment staying bullish. Time does the work, and the contract specification guarantees the convergence." },
      { type: "h2", text: "Head-to-Head Comparison" },
      {
        type: "table",
        headers: ["Dimension", "Funding trade (perps)", "Basis trade (dated futures)"],
        rows: [
          ["Return source", "Periodic funding payments", "Futures premium decaying to zero"],
          ["Return certainty", "Variable; can flip negative", "Locked at entry (before costs)"],
          ["Duration", "Open-ended; exit anytime", "Tied to expiry; roll each cycle"],
          ["Main risk", "Funding flips + liquidation in spikes", "Liquidation + expiry/roll frictions"],
          ["Capital lockup", "Flexible", "Committed to expiry"],
          ["Best market", "Sustained bullish leverage demand", "Wide, stable contango"],
          ["Operational load", "Low; monitor funding", "Higher; manage rolls and expiry"]
        ],
      },
      {
        type: "callout",
        title: "The income illusion",
        text: "Funding payments feel like passive income, but they are compensation for standing ready to be liquidated during leverage squeezes. Basis yield feels like a guaranteed coupon, but it is compensation for locking capital and absorbing expiry risk. In both cases, the market pays you for a real risk — price the risk, not just the yield.",
        tone: "info",
      },
      { type: "h2", text: "When to Choose Which" },
      { type: "p", text: "Choose the **funding trade** when funding rates are persistently high, you want flexibility to enter and exit, and you are comfortable actively monitoring a variable income stream. It suits traders who watch markets daily and can react to funding flips. Choose the **basis trade** when the quarterly basis is wide, you prefer a set-and-monitor position, and you can commit capital through expiry. It suits patient, process-driven traders who would rather lock a yield than chase one." },
      { type: "p", text: "Capital size matters too. The funding trade can be run small — a few thousand dollars on a single exchange works fine. The basis trade is hungrier: you need full spot purchase capital plus futures margin, which prices out very small accounts on majors like bitcoin. On the other hand, the basis trade scales more gracefully, because dated-futures liquidity on majors is deep and the return is locked rather than variable. Many professional desks run both simultaneously, allocating between them as relative value shifts — harvesting basis when the quarterly premium is fat, collecting funding when perp demand runs hot." },
      { type: "h2", text: "Can You Run Both at Once?" },
      { type: "p", text: "Yes, and sophisticated carry desks do exactly that — but it is not as simple as stacking the yields. Running both means managing two hedges, two margin accounts (or one portfolio-margin account), and two sets of risks that can correlate in a crisis. During a violent market break, funding can flip negative *while* the basis collapses, hitting both trades simultaneously. The combined position needs combined risk management: total leverage limits, cross-position margin monitoring, and a clear plan for which leg gets cut first if things go wrong." },
      { type: "p", text: "For most individual traders, the honest advice is to master one trade before adding the second. Run a single funding position through a full market cycle — a calm period, a funding spike, and a flip — and you will understand its temperament. Run a single quarterly basis trade from entry through expiry and roll, and you will understand its discipline. Only then does combining them become diversification rather than complication. Our [crypto arbitrage blog](/blog) covers both strategies in ongoing detail as market regimes shift." },
      {
        type: "faq",
        items: [
          {
            q: "Which pays more: funding trades or basis trades?",
            a: "It varies by regime. In sustained bull markets with heavy perp speculation, funding can exceed the quarterly basis yield for weeks. In calmer markets, the basis trade's locked-in premium often wins on consistency. Compare the current annualized funding rate against the quarterly basis yield, net of costs, before choosing.",
          },
          {
            q: "Can funding rates stay negative for long?",
            a: "Yes, during bear markets or after major liquidations, funding can stay negative for weeks — meaning shorts pay longs. Funding traders either sit out these periods or flip to the long side. Never assume funding income is permanent.",
          },
          {
            q: "Do I need different exchanges for each trade?",
            a: "No. Both trades can run on a single major exchange that offers spot, perpetuals, and quarterly futures. Splitting across exchanges can capture better pricing on each leg, but it complicates margin and transfers — most traders start single-venue.",
          },
          {
            q: "Are these trades really market-neutral?",
            a: "They are delta-neutral by construction — equal long and short exposure to the same asset. But delta-neutral is not risk-neutral: liquidation, funding flips, basis moves, fees, and operational failures all remain. Treat them as lower-volatility strategies, not risk-free ones.",
          }
        ],
      },
  ],
};
