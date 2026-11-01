import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "perp-mark-price-vs-last-price-2026",
  title: "Mark Price vs Last Price in Perpetual Futures: Why Your Liquidation Uses One, Not the Other",
  description: "Mark Price vs Last Price in perpetual futures: why liquidations use mark price, how the index is built, and how to avoid wick liquidations in 2026 trading.",
  keywords: [
      "Mark Price vs Last Price",
      "perpetual mark price",
      "liquidation price crypto",
      "index price futures",
      "perp liquidation risk",
      "crypto futures basics"
  ],
  datePublished: "2026-11-01",
  dateModified: "2026-11-01",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "Your perpetual position can be liquidated even when the last traded price never touched your liquidation level. The reason is mark price, and understanding it changes how you set leverage.",
  image: "/images/blog/perp-mark-price-vs-last-price-2026.svg",
  blocks: [
      { type: "p", text: "Mark Price vs Last Price is the most important distinction for anyone trading perpetual futures, because liquidation is usually based on mark price, not on the last price you see on the chart. On 1 November 2026, Bitcoin traded near 77,586 dollars, up about 0.15 to 0.4 percent in 24 hours, and Ethereum traded near 2,255 dollars, up about 0.45 percent. In calm markets, mark price and last price stay close together, so the distinction feels academic. In volatile markets, they can diverge sharply, and a trader who watches only last price may be surprised by a liquidation, a margin call, or an unrealised profit figure that does not match the order book. This article explains both prices, how mark price is built, and how to trade with that knowledge. For core futures terms, see the [glossary](/glossary), and for how prices differ across venues, see the [arbitrage guide](/guides/cross-exchange-arbitrage)." },
      { type: "h2", text: "What last price means" },
      { type: "p", text: "Last price is simply the price of the most recent trade on that perpetual contract on that exchange. It reflects whatever buyers and sellers just agreed, including small trades, large market orders, and trades during thin liquidity. Because it is driven by the last transaction, it can spike on a single large order, a cascade of stop losses, or a brief gap in the order book, even if the broader market has not moved. Last price is useful for execution: it tells you roughly where you can buy or sell right now, and it drives the chart most traders watch. It is a poor basis for liquidation, however, precisely because it is so easy to move temporarily. If liquidations were based on last price, a single manipulative trade or a momentary liquidity gap could liquidate positions that are otherwise sound, creating a cascade that harms traders and the exchange alike. That is why exchanges use a more stable reference price for risk decisions." },
      { type: "h2", text: "What mark price means" },
      { type: "p", text: "Mark price is an exchange-calculated reference price designed to track the fair value of the perpetual contract, usually based on an index of spot prices from several major exchanges, adjusted for funding and, in some designs, for the contract own order book. The index component anchors mark price to the wider market, so a wick on one exchange alone does not move it much. The funding adjustment accounts for the difference between perpetual and spot prices, keeping mark price close to where the contract should trade if funding were settled continuously. Some exchanges also blend in a moving average of the contract price to smooth brief spikes. The result is a price that moves more smoothly than last price and is harder to manipulate with a single trade. Mark price is used for unrealised profit and loss, margin calculations, and liquidation triggers on most major venues, although the exact formula varies by exchange and traders should read the specific contract specification before trading." },
      { type: "h2", text: "Why liquidations use mark price" },
      { type: "p", text: "Liquidation based on mark price protects both traders and the exchange from unnecessary cascades. Imagine Bitcoin spot is stable near 77,586 dollars, but a large sell order on one perpetual venue briefly pushes last price down by several percent before buyers return. If liquidation used last price, leveraged long positions would be closed at a bad price, their selling would push last price lower, and more positions would liquidate in a chain reaction, even though the underlying spot market never moved that far. Using mark price, which is anchored to spot indices from several venues, prevents that single-venue wick from triggering mass liquidations. The trade-off is that a trader may be liquidated while last price on their screen still looks safe, if the spot index itself has moved to the liquidation level. That feels unfair in the moment, but it reflects the wider market, not just one order book. Traders who understand this check both prices: last price for execution, mark price for risk, margin, and liquidation distance." },
      { type: "h2", text: "How divergence happens in practice" },
      { type: "p", text: "Divergence between mark and last price is largest when funding is extreme, liquidity is thin, or spot and perpetual markets disagree. During a sharp move, perpetual last price may trade at a premium or discount to spot as traders rush to open or close positions, while mark price stays closer to the spot index. During low-liquidity hours, a single market order can move last price far from mark price, creating a temporary gap that usually closes as market makers return. Basis risk also matters: if spot indices themselves diverge because one spot exchange is stressed or halted, mark price construction becomes harder and exchanges may use fallback procedures. On 1 November 2026, the Fear and Greed Index read 34, a fearful level where sudden moves and thin liquidity are more common, so checking the gap between mark and last price before increasing leverage is especially important. Most trading interfaces show both prices side by side, and the gap, often shown as a premium or discount, is a useful warning signal that execution price and liquidation price may differ." },
      { type: "h2", text: "Practical habits for perpetual traders" },
      { type: "p", text: "A few habits reduce mark-price surprises. First, always display mark price alongside last price, and set alerts on mark price, not only on last price, for liquidation distance. Second, use lower leverage when the mark-last gap is wide, because execution slippage and liquidation risk both rise in that environment. Third, avoid placing stop losses based solely on last-price wicks, since a stop triggered by a brief wick may execute far from fair value, while a stop based on mark price may be more stable but still needs a buffer for real spot moves. Fourth, check the exchange mark price methodology, including which spot venues feed the index and how funding is incorporated, before trading a new contract, because a thin or concentrated index is easier to distort. Finally, keep margin above the maintenance level with a buffer, rather than trading at maximum leverage, so a normal mark-price move does not force a liquidation. Perpetual futures reward traders who manage risk on the price that actually liquidates them, not only on the price that looks best on the chart." },
      {
        type: "table",
        headers: ["Price", "Based on", "Used for"],
        rows: [
          ["Last price", "Most recent trade on that contract", "Execution and charting"],
          ["Mark price", "Spot index plus funding adjustment", "Liquidation, margin, unrealised profit"]
        ],
      },
      {
        type: "callout",
        title: "Risk warning",
        text: "Perpetual futures are leveraged and can liquidate quickly. Mark price can move to your liquidation level even if last price looks safe, and losses can exceed your initial margin in extreme moves. Trade with size you can afford to lose.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can explain trading concepts in simple words. For this article, it can explain mark price versus last price with a short example and help you draft a pre-trade checklist for checking liquidation distance." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Can I be liquidated if last price never hit my liquidation price?",
            a: "Yes, if mark price reaches it. Most exchanges liquidate on mark price, which is based on a spot index, so a real spot move can liquidate you even while last price on one venue looks different.",
          },
          {
            q: "Why is mark price usually more stable than last price?",
            a: "Mark price is anchored to spot prices from several exchanges and adjusted for funding, so a single trade or wick on one venue has limited effect compared with last price.",
          },
          {
            q: "Which price should I use for stop losses?",
            a: "Check your exchange trigger options. Many traders use mark price triggers to avoid wick stops, but still leave a buffer, because a genuine spot move can trigger either type.",
          },
          {
            q: "Does every exchange calculate mark price the same way?",
            a: "No. Index composition, funding treatment, and smoothing differ by venue. Read the contract specification for the exchange and contract you trade.",
          }
        ],
      },
  ],
};
