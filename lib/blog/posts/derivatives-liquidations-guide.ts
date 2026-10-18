import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "derivatives-liquidations-guide",
  title: "Derivatives Liquidations Explained",
  description: "Liquidations are forced sales that can cascade through crypto markets. Learn how margin calls, liquidation engines, and cascade mechanics really work.",
  keywords: [
      "derivatives liquidations",
      "crypto liquidations",
      "liquidation cascade",
      "margin call crypto",
      "crypto leverage liquidation",
      "liquidation mechanics"
  ],
  datePublished: "2026-10-18",
  dateModified: "2026-10-18",
  readingMinutes: 8,
  category: "Strategies",
  excerpt: "Liquidations are the market forced selling at the worst possible moment. Here is how liquidation engines work, why cascades form, and how traders avoid becoming fuel for one.",
  image: "/images/blog/derivatives-liquidations-guide.svg",
  blocks: [
      { type: "p", text: "Derivatives liquidations are the market most brutal mechanism: when a leveraged position loses too much, the exchange closes it automatically, and that forced sale can push the price further, triggering more liquidations. Understanding liquidations matters for every trader, not just leveraged ones, because liquidation cascades move spot prices, widen spreads, and create the sharp wicks that stop out careful positions. On Oct 18, 2026, the market offered a live example. Liquidations cooled to about $315 million on Oct 17, down sharply from a roughly $1 billion flush on Oct 16, while Bitcoin traded near $81,300 to $81,850, roughly flat over 24 hours. The cooling tells you the forced selling had mostly run its course. The $1 billion day tells you how much leverage had built up before it. Both numbers are part of the same story." },
      { type: "h2", text: "What a Liquidation Actually Is" },
      { type: "p", text: "When you open a leveraged position, you post margin as collateral, and the exchange lends you the rest of the exposure. If the price moves against you far enough, your margin no longer covers the potential loss, and the exchange liquidates the position: it closes it at market price to prevent the loss from exceeding your collateral. This is not punishment. It is the exchange protecting itself and other traders from a default. The liquidation price depends on your leverage, your entry price, and your maintenance margin requirement. Higher leverage means a smaller adverse move triggers liquidation. At very high leverage, a move of one or two percent is enough." },
      { type: "p", text: "Most exchanges use a liquidation engine that takes over the position and tries to close it at the best available price, often using an insurance fund to cover any shortfall if the market gaps past the liquidation price. Some exchanges also use partial liquidation, closing just enough of the position to restore the margin ratio rather than wiping out the whole trade. Traders should know which system their exchange uses before they open a position, because the difference between full and partial liquidation can be the difference between losing a position and losing an account. Either way, the core lesson is the same: leverage converts small price moves into account-ending events, and the exchange, not the trader, decides when enough is enough." },
      { type: "h2", text: "How Cascades Form" },
      { type: "p", text: "A liquidation cascade is a chain reaction. It starts with a price move that liquidates a cluster of leveraged positions. Those forced sales push the price further in the same direction, which liquidates the next cluster, whose sales push the price further still. Each round feeds the next, and the cascade only stops when it runs out of vulnerable positions, when buyers step in at bargain prices, or when the market simply runs out of momentum. Cascades are worst when leverage is concentrated at similar price levels, because many traders share nearly the same liquidation price. That clustering is common: traders anchor to the same round numbers, the same support levels, and the same recent highs and lows, so their liquidation prices pile up together." },
      { type: "p", text: "Cascades explain the long wicks that appear on charts after sudden moves. The price spikes down, liquidates a wave of longs, and then recovers partway as the forced selling ends and bargain buyers arrive. The traders who were liquidated cannot participate in the recovery; their positions are gone. The traders who survived with cash can buy the aftermath, but catching a falling cascade is dangerous because nobody knows which round is the last one. This is why experienced traders treat liquidation clusters as zones to avoid, not targets to trade. If a cascade is running, the safest action is usually to stand aside until the forced selling is visibly exhausted, which is exactly what the drop from roughly $1 billion in liquidations on Oct 16 to about $315 million on Oct 17 suggested had happened." },
      {
        type: "table",
        headers: ["Stage", "What happens", "What traders see"],
        rows: [
          ["Build-up", "Leverage accumulates near a level", "Rising open interest, crowded funding"],
          ["Trigger", "Price moves against the crowd", "First liquidations, widening spreads"],
          ["Cascade", "Forced sales push price further", "Long wicks, accelerating liquidations"],
          ["Exhaustion", "Vulnerable positions cleared", "Liquidations drop, price stabilizes"],
          ["Recovery", "Buyers return at lower prices", "Partial bounce, thinner leverage"]
        ],
      },
      { type: "h2", text: "Reading Liquidation Data" },
      { type: "p", text: "Liquidation data is useful in two ways: as a real-time read on stress, and as a historical read on where leverage builds up. Real-time liquidation totals tell you whether forced selling is accelerating or fading. A day with very high liquidations followed by a sharp drop usually means the weak hands are gone, at least for now. Heatmaps of liquidation levels, which show where clusters of leveraged positions sit, tell you where the next cascade could start if price reaches those levels. Traders use them to place stops away from clusters, or to avoid leverage entirely when price is approaching a dense cluster. Liquidation data is not a prediction. It is a map of where forced selling could happen, and maps are only useful if you respect the terrain." },
      {
        type: "list",
        items: [
        "Rising liquidations plus falling price: forced selling is accelerating.",
        "Falling liquidations after a flush: the cascade may be exhausting.",
        "Dense liquidation clusters above or below price: magnets for volatility.",
        "Liquidations concentrated in one coin: a local problem, not a market-wide one.",
        "Liquidations across many coins at once: a systemic leverage event."
        ],
      },
      { type: "h2", text: "Protecting Yourself From Liquidations" },
      { type: "p", text: "The best protection against liquidation is the simplest: use less leverage. A position at 2x leverage survives moves that would wipe out a 20x position, and it lets you hold through volatility instead of being forced out at the worst moment. Beyond that, traders protect themselves by sizing positions so that a liquidation, if it happens, is a small loss rather than an account-ending one, by using isolated margin so one bad position cannot drag down the whole account, and by placing stops before the liquidation price so they exit on their own terms rather than the exchange. Hedging with spot or options can also reduce the risk, as explained in the guides on [funding rate arbitrage](/guides/funding-rate-arbitrage) and [cross-exchange arbitrage](/guides/cross-exchange-arbitrage)." },
      {
        type: "callout",
        title: "Never add to a losing leveraged position",
        text: "Adding margin to a losing leveraged trade to avoid liquidation usually turns a small loss into a large one. If the trade thesis is broken, exit. If it is intact, the position size was too big in the first place.",
        tone: "warning",
      },
      { type: "p", text: "Risk disclosure: leveraged derivatives can lose more than your initial margin on some venues, and liquidation is always a possibility, not a remote tail event. The Fear and Greed index near 54 to 55 on Oct 18, 2026, sitting at the neutral-to-greed boundary, is a reminder that calm sentiment does not mean leverage has disappeared. Check the [glossary](/glossary) for terms like maintenance margin, insurance fund, and partial liquidation, and treat every leveraged position as a trade that can be closed by the exchange, not just by you." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you understand derivatives liquidations clearly. Ask it to explain how a liquidation price is calculated, walk through a liquidation cascade step by step, or draft a pre-trade checklist for leverage, margin, and stop placement." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What triggers a crypto liquidation?",
            a: "When a leveraged position price moves far enough against you that your margin no longer meets the maintenance requirement. The exchange then closes the position automatically.",
          },
          {
            q: "What is a liquidation cascade?",
            a: "A chain reaction where forced sales push the price further, triggering more liquidations, whose sales push the price further still, until vulnerable positions are cleared.",
          },
          {
            q: "Can I lose more than my margin to a liquidation?",
            a: "On some venues, yes, if the market gaps past your liquidation price. Many exchanges use insurance funds to cover shortfalls, but the protection is not absolute.",
          },
          {
            q: "How do I avoid being liquidated?",
            a: "Use lower leverage, size positions so a loss is small, use isolated margin, place stops before the liquidation price, and never add margin to a broken trade.",
          }
        ],
      },
  ],
};
