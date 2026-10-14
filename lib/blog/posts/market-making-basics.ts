import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "market-making-basics",
  title: "Market Making Basics for Retail",
  description: "Market making means earning the bid-ask spread by quoting both sides. Learn how retail traders can capture spreads — without high-frequency infrastructure.",
  keywords: [
      "market making",
      "market maker crypto",
      "bid ask spread",
      "retail market making",
      "spread capture",
      "liquidity provision"
  ],
  datePublished: "2026-10-14",
  dateModified: "2026-10-14",
  readingMinutes: 9,
  category: "Markets",
  excerpt: "Market makers profit by quoting both sides of the book and collecting the spread. Retail traders can do a simplified version — if they respect inventory risk.",
  image: "/images/blog/market-making-basics.svg",
  blocks: [
      { type: "p", text: "**Market making** is the business of quoting both a buy price (bid) and a sell price (ask) and earning the difference — the bid-ask spread — when both sides of the quote get filled. It is the oldest profit model in trading, and it works because most traders want immediacy: they will pay a small premium to buy now rather than wait. The market maker supplies that immediacy and keeps the premium. On 14 October 2026, with Bitcoin oscillating between roughly $81,945 and $84,073 in a single day and Ether swinging between about $2,408 and $2,539, spreads on less liquid pairs widened and narrowed with every swing — and each widening was a small invitation to anyone willing to quote both sides." },
      { type: "p", text: "Professional market making is a technology arms race: co-located servers, microsecond latency, and sophisticated inventory models. Retail traders cannot compete on that battlefield, and should not try. But retail traders can practice a simplified, slower version of market making on less competitive pairs, on decentralised exchanges, or with small size — provided they understand that the spread is not free money. It is compensation for two risks: holding inventory that moves against you, and being picked off by better-informed traders." },
      { type: "h2", text: "The Spread: Where the Profit Comes From" },
      { type: "p", text: "Imagine a token where the best bid is $10.00 and the best ask is $10.10. The spread is $0.10, or about 1%. If a market maker places a buy order at $10.00 and a sell order at $10.10 and both fill, they have bought at $10.00 and sold at $10.10, pocketing $0.10 per token minus fees. Repeat that hundreds of times a day and the profits add up — without ever predicting which direction the market will go. The strategy is market-neutral by construction: the market maker does not care whether the token rises or falls, only that buyers and sellers keep arriving." },
      { type: "p", text: "The catch is that spreads exist for a reason. Wide spreads mean the market is thin or uncertain; narrow spreads mean competition is fierce. On major pairs such as BTC/USDT, spreads are often a few hundredths of a percent — far too thin for manual retail market making after fees. On mid-cap and long-tail pairs, spreads of 0.5% to several percent are common, which looks attractive until you account for the fact that fills are rarer and inventory risk is far higher." },
      { type: "h2", text: "The Two Risks Every Market Maker Faces" },
      {
        type: "table",
        headers: ["Risk", "What happens", "How to manage it"],
        rows: [
          ["Inventory risk", "You accumulate a position as the price trends one way", "Skew quotes to reduce the unwanted side; cap total inventory"],
          ["Adverse selection", "Informed traders buy from you just before the price jumps", "Widen spreads around news and volatile periods; pause quoting"],
          ["Fee drag", "Fees exceed the spread you capture", "Trade only where maker fees are low or rebated"],
          ["Technology risk", "Stale quotes fill at bad prices during fast moves", "Keep quotes close to the touch; cancel fast when the market runs"]
        ],
      },
      { type: "p", text: "Inventory risk is the slow killer. A market maker quoting both sides during a one-way trend keeps getting filled on the losing side: as the price falls, their buy orders fill again and again, and they end up holding a growing pile of a depreciating asset. Professionals manage this by skewing their quotes — lowering both bid and ask when they are long and want to sell, raising them when they are short — so the market gradually takes the unwanted inventory off their hands. Retail market makers should copy this habit in simple form: if your inventory drifts past a set limit, stop quoting the buy side until you are back to neutral." },
      { type: "p", text: "Adverse selection is the fast killer. When news breaks — say, a regulatory announcement like South Korea's 13 October 2026 move to block 27 unregistered exchanges — informed traders rush to trade before the price adjusts. The market maker's quotes are suddenly stale, and they get filled at prices that are already wrong. The defence is to widen spreads or pause quoting entirely around news events, earnings-style catalysts, and sudden volatility spikes. A missed fill costs nothing; a bad fill costs real money." },
      { type: "h2", text: "Retail Market Making: Where It Can Work" },
      { type: "p", text: "Retail traders have three realistic arenas. The first is mid-cap spot pairs on centralised exchanges, where spreads are wide enough to cover fees and competition from professionals is lighter. The second is decentralised exchanges with concentrated-liquidity pools, where anyone can provide liquidity in a chosen price range and earn a share of trading fees — but with the added danger of impermanent loss when the price leaves the range. The third is smaller, newer venues or pairs where the professional firms have not yet arrived." },
      { type: "p", text: "In every arena, the same disciplines apply: trade pairs you understand, start with tiny size, and measure your real profit after fees, not your gross spread capture. A useful exercise is to paper-trade market making for a week — record every hypothetical fill, fee, and inventory move — before risking capital. Many traders discover that their edge was an illusion once fees and adverse selection are counted honestly." },
      {
        type: "callout",
        title: "Fees decide whether market making works",
        text: "If the spread is 0.2% and your round-trip fee is 0.2%, you earn nothing even with perfect fills. Check maker fees, rebates, and any volume tiers before quoting — on thin spreads, the fee schedule is the strategy.",
        tone: "info",
      },
      { type: "h2", text: "Market Making vs Arbitrage: Cousins, Not Twins" },
      { type: "p", text: "Market making and arbitrage are related but distinct. Arbitrage exploits a price gap that already exists between two markets; market making earns the gap between buyers and sellers inside one market. Arbitrage is usually a one-shot trade; market making is a continuous service. Many professionals blend the two: they make markets on one venue while hedging on another, which is effectively [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) with a market-making flavour. Retail traders can think of the two as a spectrum, and the [triangular arbitrage](/guides/triangular-arbitrage) and [funding-rate](/guides/funding-rate-arbitrage) strategies on this site sit on the same spectrum too." },
      { type: "p", text: "The unifying lesson is risk control. Whether you are quoting spreads or trading gaps, the [risk-management rules](/blog/arbitrage-risk-management) are the same: cap your exposure, never let one position dominate the book, and measure results after all costs. Market making rewards patience and discipline far more than speed — which is precisely why a careful retail trader can participate at all." },
      {
        type: "faq",
        items: [
          {
            q: "Can retail traders really make markets without HFT infrastructure?",
            a: "Yes, on the right pairs. High-frequency firms dominate the most liquid pairs, but mid-cap and long-tail pairs have less competition and wider spreads. Retail market making works there if you keep size small, manage inventory, and respect fees.",
          },
          {
            q: "How much capital do you need to start market making?",
            a: "You can learn with very little — even a few hundred dollars on a mid-cap pair. What matters more than capital is discipline: inventory limits, fee awareness, and the willingness to stop quoting when conditions turn against you.",
          },
          {
            q: "What is impermanent loss in liquidity provision?",
            a: "When you provide liquidity to an automated pool, a price move leaves you holding more of the falling asset and less of the rising one than if you had simply held both. The fee income may or may not compensate for that difference — always compare against simply holding.",
          },
          {
            q: "Is market making safer than directional trading?",
            a: "It removes directional risk in theory, but replaces it with inventory risk and adverse selection. It is steadier but not safer: a market maker who ignores inventory limits can lose as much as any directional trader.",
          }
        ],
      },
  ],
};
