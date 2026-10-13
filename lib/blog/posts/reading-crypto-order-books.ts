import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "reading-crypto-order-books",
  title: "How to Read Crypto Order Books",
  description: "Learn to read crypto order books: bid-ask spread, depth, order walls, and spoofing explained. Practical skills for October 2026's thin, volatile markets.",
  keywords: [
      "how to read crypto order books",
      "order book depth crypto",
      "crypto bid ask spread",
      "order book spoofing",
      "crypto order book explained"
  ],
  datePublished: "2026-10-13",
  dateModified: "2026-10-13",
  readingMinutes: 8,
  category: "Basics",
  excerpt: "An order book is where supply meets demand in crypto — and misreading it costs real money. This guide teaches you to read depth, walls, and spoofing like a professional, with lessons from today's October 13, 2026 market action.",
  image: "/images/blog/reading-crypto-order-books.svg",
  blocks: [
      { type: "p", text: "Every crypto trade you make passes through an order book — the live ledger of buy orders (bids) and sell orders (asks) waiting to be filled. If you are buying bitcoin on an exchange, you are buying from someone's ask; if you are selling, you are selling into someone's bid. Understanding how to read that book is one of the highest-leverage skills a trader can build, because it tells you where liquidity actually sits before you commit capital." },
      { type: "p", text: "This matters more than ever on October 13, 2026. Bitcoin is trading near $81,800, down roughly 2.3% in 24 hours and sitting below the $82,000 level, while ether has fallen about 3.5% to near $2,430. In selloffs like this one, order books thin out: market makers widen their quotes, bids get pulled, and the same size order that barely moved the market last week suddenly causes real slippage. If you cannot read an order book, you are trading blind at exactly the moment vision matters most." },
      { type: "h2", text: "Anatomy of an Order Book" },
      { type: "p", text: "An order book has two sides. The bid side lists buy orders from highest price to lowest — these are prices buyers are willing to pay. The ask side lists sell orders from lowest price to highest — prices sellers are willing to accept. The gap between the best bid and the best ask is the spread. Each price level also shows the quantity offered at that price, which is the visible liquidity available." },
      { type: "p", text: "Market depth is the cumulative picture: add up all bids below the current price and all asks above it, and you get the total liquidity the book can absorb. Most exchanges visualize this as a depth chart, with the bid wall sloping down to the left and the ask wall sloping up to the right. The steeper the wall near the mid-price, the more liquidity is available for small orders; a shallow, jagged chart warns you that even modest size will move the price." },
      { type: "h2", text: "Depth, Walls, and What They Really Mean" },
      { type: "p", text: "A wall is an unusually large order sitting at a single price level. A bid wall below the price can act as support, because filling it requires a lot of selling. An ask wall above can act as resistance, absorbing buying pressure. But walls are not always what they seem. A genuine wall belongs to someone willing to transact; a fake wall belongs to someone who plans to cancel before it is hit. On October 13, with bitcoin slipping under $82,000, watch for bid walls that appear, disappear, and reappear a few dollars lower — a classic sign that displayed liquidity is thinner than it looks." },
      {
        type: "list",
        items: [
        "Compare displayed size to recent traded volume: a wall far larger than normal trade sizes is more likely signaling than real supply.",
        "Watch how the book reacts when price approaches a wall — real walls get eaten into gradually; fake ones vanish before contact.",
        "Check depth on both sides, not just the wall: thin depth behind a big wall means the wall is the only thing holding the level.",
        "Remember that hidden and iceberg orders exist: some liquidity never shows up in the visible book at all."
        ],
      },
      { type: "h2", text: "The Bid-Ask Spread Is Your Hidden Cost" },
      { type: "p", text: "The spread is the round-trip tax on every market order. If bitcoin's best bid is $81,790 and the best ask is $81,800, buying at the market and immediately selling at the market loses you $10 per coin — before fees. Spreads widen when volatility rises and market makers demand more compensation for risk, which is exactly what happens during selloffs like today's. A spread that was a few dollars on a calm day can become many times wider when the market is falling fast." },
      {
        type: "table",
        headers: ["Market condition", "Typical BTC spread behavior", "What to do"],
        rows: [
          ["Calm, high volume", "Tight — a few dollars", "Market orders are cheap and fine"],
          ["Normal trading", "Moderate — single digits to tens of dollars", "Consider limit orders near the mid"],
          ["Sharp selloff (like Oct 13, 2026)", "Wide — tens of dollars or more", "Use limit orders; never market-order large size"],
          ["Thin altcoin books", "Very wide — often over 0.5%", "Split orders or wait for depth"]
        ],
      },
      { type: "p", text: "For arbitrage traders, the spread is the minimum gap that must exist before a cross-exchange trade makes sense. If the spread alone eats most of the price difference between two venues, there is no edge — only a fee donation. Learning to read spreads across venues is foundational to everything in [cross-exchange arbitrage](/guides/cross-exchange-arbitrage), so treat spread-watching as a daily habit, not a one-time lesson." },
      { type: "h2", text: "Spoofing and Fake Walls" },
      { type: "p", text: "Spoofing is the practice of placing large orders with no intention of letting them fill, in order to create a false impression of supply or demand. A spoofer might stack a huge bid wall to make buyers feel safe pushing the price up — while quietly selling into the rally — then cancel the wall before it is touched. This is illegal market manipulation in regulated markets, but in crypto it still happens, especially on thinner venues." },
      {
        type: "callout",
        title: "How to spot a possible spoof",
        text: "A large order appears far from the mid-price, never gets closer as the market moves toward it, and disappears the moment it risks being filled. One occurrence proves nothing; a pattern across sessions is the tell. Do not try to trade against spoofers — trade around them by using limit orders at prices you genuinely like.",
        tone: "warning",
      },
      { type: "p", text: "The practical defense is simple: never assume displayed liquidity will be there when you need it. Trade the prices you see only with limit orders, keep orders at sizes the book can actually absorb, and be especially skeptical of walls on low-volume pairs where a single player can dominate the visible book." },
      { type: "h2", text: "Reading Order Books During a Selloff" },
      { type: "p", text: "Today's market is a live textbook. With bitcoin down about 2.3% and ether down about 3.5%, and $68.68 million in liquidations over the past 24 hours (nearly 87% of them longs), books are showing classic stress signatures: bids thinning below the market, spreads widening on the way down, and depth charts that look more like cliffs than slopes. Overhead resistance is stacked at $84,281 and $87,151, and each of those levels will show up as ask-wall clusters in the book." },
      { type: "p", text: "During forced selling, limit your own market impact. If you need to sell, work the order in smaller pieces at prices just inside the best bid rather than dumping a single market order into a thin book — the difference between the two approaches can be several tenths of a percent, which compounds fast on larger size. And if you are hunting arbitrage, remember that selloffs widen cross-exchange gaps (good for opportunity) while simultaneously widening spreads and raising [execution risk](/blog/execution-risk-arbitrage) (bad for realized profit). The book tells you which effect is winning." },
      { type: "h2", text: "Putting It Into Practice" },
      { type: "p", text: "Reading order books is a screen-time skill. Open the book for a major pair and spend ten focused minutes watching it before placing anything: note the spread, the depth within 0.5% of the mid-price, how fast quotes refresh, and what happens when a large market order hits. Do this on a calm day and again on a volatile day like today, and the difference will teach you more than any textbook." },
      {
        type: "list",
        items: [
        "Start with BTC or ETH books — the deepest and cleanest to learn on.",
        "Practice estimating your slippage before trading: walk your intended size through the visible levels and add up the cost.",
        "Use limit orders by default; reserve market orders for when speed genuinely matters more than price.",
        "Compare books across two or three exchanges to see how liquidity — and price — differs by venue."
        ],
      },
      { type: "p", text: "Once you can read a single book confidently, the next step is comparing books across exchanges — which is where arbitrage begins. Our [cross-exchange arbitrage guide](/blog/cross-exchange-arbitrage-guide) builds directly on these skills, and the [glossary](/glossary) covers every term used here. Like any practical skill, order-book reading compounds: the earlier you start watching real books, the faster your intuition develops. Just remember that no amount of book-reading removes [risk](/blog/arbitrage-risk-management) — it only makes the risks visible before they cost you money." },
      {
        type: "faq",
        items: [
          {
            q: "What is an order book in crypto?",
            a: "An order book is the live list of buy orders (bids) and sell orders (asks) on an exchange, sorted by price. It shows the best available prices and the quantity offered at each level — the visible liquidity of the market.",
          },
          {
            q: "What does order book depth tell me?",
            a: "Depth shows how much total buying and selling interest exists near the current price. Deep books absorb large orders with little price movement; thin books mean even small orders can cause slippage. Depth typically thins during volatile selloffs.",
          },
          {
            q: "Are big order walls real support or resistance?",
            a: "Sometimes, but not always. Real walls represent genuine supply or demand, while fake walls are placed to create a false impression and get canceled before being filled. Watch whether a wall gets eaten into or vanishes as price approaches — the behavior reveals the intent.",
          },
          {
            q: "Why does the spread matter for arbitrage?",
            a: "The bid-ask spread is the minimum cost of a round-trip market order. A cross-exchange price gap must be larger than the combined spreads and fees on both venues to be worth trading — otherwise the gap is an illusion.",
          }
        ],
      },
  ],
};
