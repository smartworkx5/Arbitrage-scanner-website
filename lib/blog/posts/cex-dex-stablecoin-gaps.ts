import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "cex-dex-stablecoin-gaps",
  title: "Stablecoin Gaps Between CEXs and DEXs",
  description: "Stablecoin gaps between CEXs and DEXs: why USDC and USDT diverge across venues, when the spreads are tradable, and when a cheap stablecoin is a warning.",
  keywords: [
      "stablecoin arbitrage",
      "usdc usdt price gap",
      "stablecoin depeg arbitrage",
      "cex dex stablecoin spread",
      "usdt usdc arbitrage 2026"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 7,
  category: "Strategies",
  excerpt: "USDC and USDT are supposed to equal $1 — but across exchanges and DEX pools they often do not. Here is why stablecoin gaps appear and how to tell a tradable spread from a trap.",
  image: "/images/blog/cex-dex-stablecoin-gaps.svg",
  blocks: [
      { type: "p", text: "**Stablecoin gaps between CEXs and DEXs** are among the most misunderstood arbitrage setups in crypto. USDC and USDT are designed to hold $1, and most of the time they do — but \"most of the time\" hides constant small deviations: 0.9997 here, 1.0004 there, drifting with liquidity flows, redemption demand, and market stress. Because stablecoins anchor nearly every trading pair, even a 0.2% deviation creates apparent arbitrage across hundreds of pairs simultaneously. The critical skill is distinguishing a genuine, tradable dislocation from a discount that exists for a very good reason." },
      { type: "p", text: "These gaps matter beyond stablecoin specialists. If you trade any CEX-DEX arbitrage, your profit is usually measured in stablecoins — and a stablecoin that is itself mispriced corrupts every calculation downstream. A trader who \"makes\" 0.5% arbitraging a token but receives it in a stablecoin trading at a 0.6% discount has lost money. Venue-level stablecoin pricing is therefore foundational knowledge, not a niche topic." },
      { type: "h2", text: "Why Stablecoins Diverge Across Venues" },
      { type: "p", text: "On centralized exchanges, stablecoin prices come from order-book supply and demand: heavy selling pressure during market panic pushes USDT below $1 on exchanges where traders are fleeing to fiat or other stables. On DEXs, stablecoin prices come from pool balances — large one-sided flows into or out of stablecoin pools (like the big Curve-style pools) tilt ratios and move the implied price. The two mechanisms respond to different pressures at different speeds, so the same stablecoin can quote differently on a CEX and a DEX for hours. Add bridged variants on L2s, which carry their own redemption frictions, and the landscape gets genuinely complex." },
      {
        type: "list",
        items: [
        "Market stress: flight-to-safety flows push stablecoins off peg on venues with the most panic selling.",
        "Redemption friction: if redeeming with the issuer is slow or restricted, secondary markets price in the delay.",
        "Pool imbalance: one-sided DEX flows tilt stablecoin pool ratios away from 1:1.",
        "Bridged variants: L2 representations can trade at discounts reflecting bridge or redemption risk.",
        "Regional demand: exchanges serving specific regions see local premiums or discounts on dollar access."
        ],
      },
      { type: "h2", text: "When the Spread Is Tradable" },
      { type: "p", text: "Small, calm-market deviations are the bread and butter: USDT at 0.9992 on a DEX pool while a CEX quotes 1.0001, with deep liquidity on both sides and no alarming news. The trade is conceptually simple — buy the cheap venue's stablecoin, sell or redeem at the dearer one — but the edge is razor thin, so it only works with size, low fees, and fast execution. These micro-gaps are heavily competed over by market makers; a retail trader's realistic angle is catching them during brief dislocations rather than farming them continuously." },
      {
        type: "table",
        headers: ["Signal", "Tradable gap", "Warning sign"],
        rows: [
          ["Deviation size", "0.1%-0.5%, stable", "Growing rapidly; several percent"],
          ["Market context", "Calm markets, normal flows", "Panic, breaking news about the issuer"],
          ["Liquidity", "Deep on both venues", "Thinning; wide spreads forming"],
          ["Redemptions", "Issuer redemptions functioning", "Redemption pauses or restrictions reported"],
          ["Duration", "Minutes to hours", "Persisting for days and widening"]
        ],
      },
      { type: "h2", text: "When a Cheap Stablecoin Is a Warning" },
      {
        type: "callout",
        title: "A deepening discount can mean real impairment",
        text: "History's biggest stablecoin losses came from traders who treated a widening depeg as a buying opportunity. If a stablecoin falls several percent and keeps falling amid bad news, the discount reflects genuine doubt about backing — not an arbitrage gift. Never catch a falling stablecoin with size.",
        tone: "warning",
      },
      { type: "p", text: "The dangerous version of this trade is buying a depegging stablecoin because \"it always returns to $1.\" Sometimes it does not. The discount is the market's collective assessment of redemption risk, and markets are occasionally right. Before touching any stablecoin trading beyond a fraction of a percent off peg, check three things: is the issuer honoring redemptions normally, is there credible reporting explaining the move, and is the deviation stable or accelerating? If redemptions are impaired or the story is unclear, the correct arbitrage position is no position. Our [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) covers the execution mechanics; the judgment call here is entirely about credit risk." },
      { type: "h2", text: "A Sensible Approach for Most Traders" },
      { type: "p", text: "For most arbitrageurs, stablecoins are infrastructure, not the trade itself: keep your working capital in the most reliable stablecoins, monitor their venue prices as part of your pre-trade checklist, and treat any deviation above your threshold as a reason to pause rather than an invitation to speculate. If you do trade stablecoin gaps, stick to the major, transparently backed coins, demand deep liquidity on both sides, and size positions so that even a worst-case depeg is survivable. Compare CEX fee baselines for the execution legs in our [Binance vs Kraken comparison](/arbitrage/binance-vs-kraken), and keep definitions handy in the [glossary](/glossary)." },
      {
        type: "faq",
        items: [
          {
            q: "Why is USDT sometimes below $1 on exchanges?",
            a: "Heavy selling pressure — traders exiting to fiat or other assets — can push the order-book price below $1, especially during market stress. It usually recovers as market makers buy the discount, but the depth and speed of recovery vary with conditions.",
          },
          {
            q: "Can I arbitrage USDC vs USDT directly?",
            a: "Yes — the USDC/USDT pair itself trades on both CEXs and DEXs, and small deviations are common. It is one of the most competitive arbitrage pairs in crypto, so edges are thin and execution must be sharp.",
          },
          {
            q: "Are bridged stablecoins on L2s safe to arbitrage?",
            a: "The discount on a bridged variant reflects real friction or risk around the bridge. Small, stable discounts can be tradable; widening ones deserve investigation before any capital goes near them.",
          },
          {
            q: "How do I monitor stablecoin pegs across venues?",
            a: "Track the stablecoin's price on 2-3 major CEXs plus its largest DEX pools, and watch for divergence beyond your threshold (many traders use 0.2-0.3%). Price aggregators and custom alerts both work; consistency matters more than sophistication.",
          }
        ],
      },
  ],
};
