import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "open-interest-guide",
  title: "Open Interest Explained for Traders",
  description: "Open interest shows how much capital is committed to crypto futures. Learn how OI, liquidations and squeezes work — and how traders read them for risk.",
  keywords: [
      "open interest",
      "crypto open interest",
      "OI trading",
      "liquidations",
      "short squeeze crypto",
      "futures open interest"
  ],
  datePublished: "2026-10-14",
  dateModified: "2026-10-14",
  readingMinutes: 9,
  category: "Markets",
  excerpt: "Open interest measures the total number of outstanding futures contracts. It reveals conviction, crowding, and squeeze risk that price alone never shows.",
  image: "/images/blog/open-interest-guide.svg",
  blocks: [
      { type: "p", text: "**Open interest** is the total number of outstanding crypto futures contracts that have not yet been settled. Every new contract between a buyer and a seller adds to it, and every closed position subtracts from it. Unlike trading volume, which counts how much changed hands, open interest shows how much capital is currently committed. On 14 October 2026, with Bitcoin trading near $83,250 and Ether holding above $2,500, open interest across major derivatives venues is one of the first things professional traders check before judging whether a move is backed by conviction or just thin-market noise." },
      { type: "p", text: "Why does it matter? Because price can rise for two very different reasons: new money entering the market, or existing positions being forced closed. Open interest separates the two. When price and open interest climb together, fresh capital is flowing in and the trend has support. When price climbs while open interest falls, the move is often driven by short sellers covering — a squeeze that can reverse quickly once the covering ends. Reading the two together is one of the most practical skills a derivatives trader can build." },
      { type: "h2", text: "What Open Interest Actually Measures" },
      { type: "p", text: "Open interest counts contracts, not coins and not dollars, though exchanges usually also publish a dollar-denominated figure. A single contract exists only while both sides keep it open. If Alice opens a new long and Bob opens a new short, open interest rises by one. If Alice later sells her long to Carol, open interest is unchanged — the contract merely changed hands. If Alice sells her long to Bob, who was short, both positions close and open interest falls by one. That is the entire mechanism, and it explains why open interest can stay flat during heavy trading: volume was high, but no net new positions were created." },
      { type: "p", text: "In crypto, open interest is reported separately for perpetual swaps and for dated futures, and separately again for each exchange. Aggregators add these up into a single market-wide figure, but experienced traders also look at the breakdown: rising open interest concentrated on one venue can reflect a single large player, while broad-based growth across exchanges suggests genuinely wide participation. Coin-margined and stablecoin-margined contracts behave differently too, because the collateral itself moves with the market in the first case." },
      { type: "h2", text: "Open Interest vs Volume: Reading Them Together" },
      {
        type: "table",
        headers: ["Signal", "What it usually means", "Trader takeaway"],
        rows: [
          ["Price up + OI up", "New longs entering, fresh money", "Trend has backing; follow-through more likely"],
          ["Price up + OI down", "Shorts covering, longs exiting", "Squeeze risk; move may fade"],
          ["Price down + OI up", "New shorts building", "Bearish pressure growing"],
          ["Price down + OI down", "Longs capitulating and exiting", "Selling may be exhausting itself"],
          ["Flat price + OI up", "Positions accumulating quietly", "A breakout in either direction is brewing"]
        ],
      },
      { type: "p", text: "Volume confirms activity; open interest confirms commitment. A sharp price move on high volume but flat open interest is often short-lived, because nobody new is staking capital on the direction. A slower move with steadily rising open interest tends to be stickier. This is why traders watch the combination rather than either number alone — and why a sudden price spike on a quiet Sunday, when open interest barely budges, deserves scepticism rather than excitement." },
      { type: "h2", text: "Liquidations: When Open Interest Unwinds Violently" },
      { type: "p", text: "Liquidation is the forced closure of a leveraged position when its margin falls below the maintenance level. In crypto, where leverage of 10x to 100x is available, even a small adverse move can wipe out a position. When many traders are positioned the same way — say, heavily long after a rally — a modest dip can trigger a cascade: liquidations push the price down, which triggers more liquidations, which push the price down further. Open interest collapses during these events because the contracts are forcibly closed." },
      { type: "p", text: "The practical lesson is that extreme open interest at high leverage is a fragility signal, not a strength signal. Markets with record open interest and elevated funding rates are coiled: a small spark in either direction can set off a chain reaction. Traders who track liquidation levels — the price zones where clusters of leveraged positions would be wiped out — can anticipate where these cascades might start and avoid standing in front of them." },
      {
        type: "callout",
        title: "Leverage magnifies everything",
        text: "At 50x leverage, a 2% move against you liquidates the position. High open interest built on high leverage is a crowded, fragile market — trade smaller, keep stops, and never assume a trend is safe because many people are in it.",
        tone: "warning",
      },
      { type: "h2", text: "Squeezes: What Happens When Everyone Is on One Side" },
      { type: "p", text: "A short squeeze happens when a rising price forces short sellers to buy back, and their buying pushes the price higher, forcing more shorts to buy. A long squeeze is the mirror image. Both are visible in open interest data before and during the event: open interest often falls sharply as the losing side is forced out, even while price moves violently in the winners' favour. The October 2026 market offers a live example of the setup: on 14 October, Layer-2 tokens such as OP surged nearly 20% in a single day, and AI-sector tokens jumped over 35% in one case — moves of that size in crowded positioning are exactly where squeeze dynamics show up." },
      { type: "p", text: "Squeezes are not a reliable trading strategy on their own. By the time a squeeze is obvious, most of the move has usually happened, and chasing it means buying at the top of a forced-buying spike. The real edge is defensive: if open interest shows the market is heavily one-sided and funding rates confirm the crowd is paying to hold that side, reduce size or wait rather than joining the pile." },
      { type: "h2", text: "Using Open Interest in Practice" },
      {
        type: "list",
        items: [
        "Compare open interest across exchanges — concentration on one venue is a weaker signal than broad-based growth.",
        "Watch OI relative to its own history, not just the absolute number; a record high means something only in context.",
        "Combine OI with funding rates: rising OI plus deeply positive funding means longs are crowded and paying for it.",
        "Check whether rising OI sits in perpetuals or dated futures — dated-futures growth often reflects hedging, not speculation.",
        "Use OI drops after a sharp move as a sign the flush may be over and a base can form."
        ],
      },
      { type: "p", text: "Open interest is also useful for [arbitrage traders](/guides/cross-exchange-arbitrage). When open interest and funding rates diverge sharply between exchanges, spreads widen and [funding-rate strategies](/guides/funding-rate-arbitrage) become more interesting — but the same divergence signals liquidation risk, so position sizing matters as much as the opportunity itself. Pairing open-interest analysis with the [risk-management habits](/blog/arbitrage-risk-management) that keep a portfolio alive through volatile weeks is what separates durable traders from lucky ones." },
      {
        type: "faq",
        items: [
          {
            q: "Does rising open interest mean the price will go up?",
            a: "No. Rising open interest means new positions are being opened, but it does not say whether they are long or short. Price up with OI up suggests new longs; price down with OI up suggests new shorts. Always read OI together with price direction.",
          },
          {
            q: "What is the difference between open interest and volume?",
            a: "Volume counts contracts traded during a period; open interest counts contracts still open at a point in time. High volume with flat OI means positions are changing hands, not growing. High volume with rising OI means genuinely new money is entering.",
          },
          {
            q: "Can open interest predict a liquidation cascade?",
            a: "It can flag the conditions: very high OI plus high leverage plus one-sided positioning means a small move can trigger forced selling. It cannot predict the timing or the trigger — so use it as a risk signal, not a timing signal.",
          },
          {
            q: "Why does open interest drop after a big price move?",
            a: "Because the losing side gets liquidated or exits, and winners take profit and close. A sharp OI drop during a violent move usually means the forced selling is flushing out, which is often a precondition for the market to stabilise.",
          }
        ],
      },
  ],
};
