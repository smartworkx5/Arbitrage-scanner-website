import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "uniswap-arbitrage-guide",
  title: "Uniswap Arbitrage: Finding Pool Mispricings",
  description: "Uniswap arbitrage guide: how AMM pools get mispriced, why on-chain price discovery lags CEXs, and how to spot pool mispricings you can actually trade.",
  keywords: [
      "uniswap arbitrage",
      "uniswap pool mispricing",
      "amm arbitrage strategy",
      "uniswap v3 arbitrage",
      "dex pool arbitrage"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 8,
  category: "Strategies",
  excerpt: "Uniswap pools only reprice when someone trades against them — which means they lag the market constantly. Here is how arbitrageurs find and trade those mispricings.",
  image: "/images/blog/uniswap-arbitrage-guide.svg",
  blocks: [
      { type: "p", text: "**Uniswap arbitrage** starts from a simple observation: a Uniswap pool does not know the market price of anything. It is just two token balances and a formula. The pool's quoted price changes only when a trade moves those balances — so between trades, the pool sits still while the rest of the crypto market keeps moving. Every time the market moves and the pool has not yet been traded against, a mispricing opens up. Arbitrageurs close it by trading against the pool, pushing its price back toward the market and pocketing the difference." },
      { type: "p", text: "This is not a flaw in Uniswap's design; it is the design. Automated market makers outsource price discovery to arbitrageurs on purpose. Liquidity providers earn swap fees, traders get instant execution without an order book, and arbitrageurs keep prices honest — each role compensated by the mechanism itself. Understanding that you are playing the designated price-corrector role, competing against other correctors (many of them bots), is the right mental model. Our [CEX vs DEX arbitrage guide](/guides/cex-vs-dex-arbitrage) puts this dynamic in the broader venue-arbitrage picture." },
      { type: "h2", text: "How Uniswap Pools Price Assets" },
      { type: "p", text: "Classic Uniswap pools use the constant-product formula: the two token reserves multiplied together must stay constant (x * y = k). When you buy token X with token Y, you add Y to the pool and remove X, and the price of X rises automatically as its reserve shrinks. The bigger your trade relative to the pool, the worse your average price — this is price impact, and it is the built-in brake that stops any single trade from draining a pool. Concentrated-liquidity pools (v3-style) refine this by letting providers focus capital in tight price ranges, which deepens liquidity near the current price but can leave wilder swings at the edges of those ranges." },
      { type: "p", text: "The key consequence for arbitrage: a pool's price is always exactly one trade behind the market. If external prices move 1% and nobody trades the pool, the pool is now mispriced by 1% — an open invitation. The first arbitrageur to trade against it captures most of the edge; later ones get scraps. Speed of detection therefore matters enormously, which is why serious operators monitor pools programmatically rather than by refreshing a price page." },
      { type: "h2", text: "Where Mispricings Actually Come From" },
      {
        type: "list",
        items: [
        "Fast market moves: volatility reprices CEX order books in milliseconds while pools wait for a trade.",
        "Thin or new pools: low-liquidity pools swing wildly on small trades and take longer to be corrected.",
        "Concentrated-range edges: when price exits providers' ranges, liquidity thins and mispricings widen.",
        "Fee-tier mismatches: the same pair on different fee tiers can quote slightly different prices.",
        "Cross-chain copies: the same token's pool on another network may lag behind the main one."
        ],
      },
      { type: "p", text: "The most reliable mispricings come from volatility, not exotic setups. During sharp market moves, dozens of pools across many tokens fall behind simultaneously, and the edge goes to whoever has monitoring, capital positioned, and gas priced to land trades quickly. Exotic multi-pool routes look clever in diagrams but usually lose to gas costs and complexity in practice." },
      { type: "h2", text: "Spotting a Tradable Mispricing" },
      { type: "p", text: "A mispricing is only tradable if it survives costs. The practical workflow: compare the pool's quoted price against a reference price (a deep CEX order book or an aggregated feed), subtract the pool's swap fee, estimate gas for your chain at current conditions, and subtract expected price impact for your size. What remains is your real edge — and most apparent gaps fail this test. Beginners should do this arithmetic by hand for the first dozen opportunities; it builds the instinct that later lets you evaluate a scanner alert in seconds. Our [glossary](/glossary) defines the cost terms if any are unfamiliar." },
      {
        type: "table",
        headers: ["Check", "What to verify", "Why it matters"],
        rows: [
          ["Reference price", "Deep CEX quote for the same token", "A thin venue's quote is not a real benchmark"],
          ["Swap fee", "Pool's fee tier (e.g. 0.05%, 0.3%)", "Comes straight off your edge"],
          ["Gas estimate", "Current network conditions", "Spikes exactly when gaps are biggest"],
          ["Price impact", "Your size vs pool depth", "Large trades move the price against you"],
          ["Token safety", "Contract verification, taxes, honeypot checks", "Some 'gaps' are traps"]
        ],
      },
      { type: "h2", text: "Risks Specific to Pool Arbitrage" },
      {
        type: "callout",
        title: "The pool can move against you mid-trade",
        text: "Between the moment you spot a mispricing and the moment your transaction confirms, other arbitrageurs may correct the pool — leaving you paying gas for a trade with no edge. Simulate before sending, set slippage limits, and never chase a gap that is already closing.",
        tone: "warning",
      },
      { type: "p", text: "Competition is the dominant risk: you are racing bots that monitor every block and land transactions in milliseconds. MEV bots may also sandwich your swap, pushing the price against you before your trade executes. Then there is token risk — mispriced pools for obscure tokens sometimes involve contracts with transfer taxes, trading restrictions, or outright honeypot mechanics that prevent selling. Finally, reverted transactions still cost gas, so a strategy with a low hit rate can lose money even when its winning trades look good on paper." },
      { type: "h2", text: "Building the Skill Step by Step" },
      { type: "p", text: "Start on a low-fee network with tiny sizes: pick one liquid pair, watch its pool price against a CEX quote for a week, and log every mispricing you see with its size and duration. Then simulate trades — compute what you would have made after fees — before executing a single real one. Most people discover that genuine, executable edges are rarer and smaller than they expected, which is exactly the lesson worth learning cheaply. From there, better monitoring and faster execution are what separate hobbyists from consistent operators. More background on venue dynamics lives in our [blog](/blog)." },
      {
        type: "faq",
        items: [
          {
            q: "Which Uniswap pools have the most arbitrage opportunities?",
            a: "Volatile, mid-liquidity pools tend to show the most mispricings, because they move with the market but lack the bot competition of the deepest pools. Very thin pools show bigger quoted gaps but are usually untradable after price impact. There is no single best pool — conditions change constantly.",
          },
          {
            q: "Do I need to understand the x*y=k math to trade pool arbitrage?",
            a: "You need the intuition, not the algebra: bigger trades move the price more, and thin pools move more than deep ones. That intuition plus careful fee math covers most practical decisions. The formula matters more if you ever build automated quoting.",
          },
          {
            q: "Can I lose money if the trade reverts?",
            a: "Yes — reverted transactions still consume gas. If you attempt many marginal trades with a low success rate, gas costs alone can put the strategy underwater. This is why simulation and conservative edge thresholds matter.",
          },
          {
            q: "Is pool arbitrage still viable with so many bots competing?",
            a: "On the deepest pools during calm markets, retail traders rarely beat professional bots. Edges persist more often in volatile periods, newer pools, and less-monitored networks — but these carry higher risk and demand better tooling.",
          }
        ],
      },
  ],
};
