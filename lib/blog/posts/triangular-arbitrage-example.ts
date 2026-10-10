import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "triangular-arbitrage-example",
  title: "Triangular Arbitrage Example With Real Numbers",
  description: "A worked triangular arbitrage example with real numbers: a BTC-ETH-USDT loop done leg by leg, gross edge, fee math, and the net result explained honestly.",
  keywords: [
      "triangular arbitrage example",
      "triangular arbitrage calculation",
      "BTC ETH USDT arbitrage",
      "arbitrage example crypto",
      "triangular arbitrage math"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 8,
  category: "Strategies",
  excerpt: "This fully worked hypothetical example walks a BTC-ETH-USDT triangular loop leg by leg: 100,000 USDT becomes 100,600 USDT before fees, then three taker fees reduce the net edge to about 0.3%.",
  image: "/images/blog/triangular-arbitrage-example.svg",
  blocks: [
      { type: "p", text: "A triangular arbitrage example is easiest to understand with concrete numbers, so this article works through one complete loop step by step. Every price below is hypothetical and labeled as such; it is an illustrative example, not a real market snapshot. We will use a BTC-ETH-USDT triangle, compute each of the three legs, find the gross edge, then subtract realistic taker fees to reach the net result. The arithmetic is deliberately simple so you can verify every figure yourself. We will also flag where the textbook version diverges from live trading, because spreads and slippage always take their share in practice." },
      {
        type: "callout",
        title: "Hypothetical Example",
        text: "All prices and balances in this article are illustrative hypotheticals chosen to make the math clear. Real order books move constantly, and an edge this clean would be captured by bots within seconds. Treat this as a teaching example, not a trading signal.",
        tone: "info",
      },
      { type: "h2", text: "Setting Up the Hypothetical Prices" },
      { type: "p", text: "Assume the following hypothetical quotes on a single exchange. The BTC/USDT order book shows 1 BTC = 100,000 USDT. The ETH/USDT order book shows 1 ETH = 4,000 USDT. From these two, the implied BTC/ETH rate must be 100,000 divided by 4,000, which equals exactly 25.00 ETH per BTC. Now suppose the actual BTC/ETH order book is quoting 25.15 ETH per BTC. That quote is mispriced: it pays more ETH per BTC than the other two books imply, and that disagreement is what the loop will exploit. Notice the structure: two legs are fairly priced and only the BTC/ETH book is off, which is typical, since one lagging book is usually what creates a triangular gap." },
      { type: "h2", text: "Leg One: USDT Into BTC" },
      { type: "p", text: "We start the loop with 100,000 USDT. Leg one buys BTC at the hypothetical BTC/USDT price of 100,000 USDT per BTC, so the full 100,000 USDT converts into exactly 1 BTC. Ignoring fees for a moment, our balance is now 1 BTC and zero USDT. This leg simply positions us in the first asset of the triangle. Nothing has been earned yet; we have only changed the denomination of our capital from the stablecoin into Bitcoin at the quoted rate. In a real loop this leg would be a market buy crossing the spread, so the fill would be very slightly worse than the quoted mid-price used here." },
      { type: "h2", text: "Leg Two: BTC Into ETH" },
      { type: "p", text: "Leg two sells the 1 BTC on the mispriced BTC/ETH book at 25.15 ETH per BTC, giving us 25.15 ETH. Compare that with the fair implied rate of 25.00 ETH: the mispricing hands us an extra 0.15 ETH, which is where the edge originates. At this point we hold 25.15 ETH and nothing else. The loop is two-thirds complete, and the only thing left is converting this ETH back into our starting asset, the USDT stablecoin." },
      { type: "h2", text: "Leg Three: ETH Back Into USDT" },
      { type: "p", text: "Leg three sells the 25.15 ETH at the hypothetical ETH/USDT price of 4,000 USDT per ETH. Multiplying 25.15 by 4,000 gives 100,600 USDT. The loop is now closed: we started with 100,000 USDT and finished with 100,600 USDT. The gross profit is 600 USDT, and the gross edge is 600 divided by 100,000, which equals 0.6%. As a sanity check, the edge also equals the mispricing itself: 25.15 divided by 25.00 minus 1 is 0.006, or 0.6%, which confirms the three legs are arithmetically consistent. The table below summarizes all three legs of the [triangular arbitrage guide](/guides/triangular-arbitrage) loop." },
      {
        type: "table",
        headers: ["Leg", "Trade (hypothetical)", "Result"],
        rows: [
          ["1", "100,000 USDT to BTC at 100,000 USDT/BTC", "1 BTC"],
          ["2", "1 BTC to ETH at 25.15 ETH/BTC", "25.15 ETH"],
          ["3", "25.15 ETH to USDT at 4,000 USDT/ETH", "100,600 USDT"],
          ["Gross edge", "600 USDT profit on 100,000 USDT", "0.6%"]
        ],
      },
      { type: "h2", text: "Subtracting the Three Taker Fees" },
      { type: "p", text: "Fees apply on every leg, so a 0.1% taker fee charged three times is roughly 0.3% per loop. Compounded precisely, keeping 99.9% of value through three legs leaves 0.999 raised to the third power, or about 99.7003% of the gross proceeds. Apply that to our 100,600 USDT and we keep roughly 100,298 USDT, a net gain of about 298 USDT on 100,000 USDT of starting capital. That is a net edge of approximately 0.3%, which is exactly the [fee math](/blog/triangular-arbitrage-fees) that decides whether a loop is worth running." },
      { type: "h2", text: "Why the Example Overstates Reality" },
      { type: "p", text: "This clean example ignores the frictions that eat edges in live markets. Bid-ask spreads mean you buy slightly above and sell slightly below the quoted mid-prices used above. Slippage worsens your fill when your order size is large relative to the book, and prices can shift between legs while you execute. In practice, a 0.6% gross edge often shrinks to zero or negative after spreads and slippage, which is why professionals measure real execution costs with small test trades before committing size. Compared with [cross-exchange arbitrage](/guides/cross-exchange-arbitrage), the loop is fast, but the competition for it is equally fast." },
      {
        type: "callout",
        title: "Risk Disclosure",
        text: "This is a hypothetical illustration, not a promise of profit. Real loops face spreads, slippage, partial fills, and fees on all three legs. Verify every number with your exchange's actual fee schedule and order book before trading, and never risk money you cannot afford to lose.",
        tone: "warning",
      },
      {
        type: "faq",
        items: [
          {
            q: "How do you calculate triangular arbitrage profit?",
            a: "Multiply through the three legs: start capital times each leg's rate, then compare the final balance with the starting balance. In this example, 100,000 USDT became 100,600 USDT for a 0.6% gross edge. Then subtract fees on all three legs, which reduced the net edge to about 0.3%.",
          },
          {
            q: "What does the implied rate mean in this example?",
            a: "The implied BTC/ETH rate is derived from the other two books: 100,000 USDT per BTC divided by 4,000 USDT per ETH equals 25.00 ETH per BTC. Because the actual BTC/ETH book quoted 25.15, it disagreed with the implied rate, creating the 0.6% mispricing the loop captured.",
          },
          {
            q: "Why do fees matter so much in triangular arbitrage?",
            a: "Every leg of the loop pays a trading fee, so a 0.1% fee applies three times per cycle, totaling about 0.3%. Since gross edges are often under 1%, fees can erase half or more of the profit. Always compute the net edge after fees before executing.",
          },
          {
            q: "Are the prices in this example real?",
            a: "No. All prices are hypothetical figures chosen to make the arithmetic transparent: 1 BTC = 100,000 USDT, 1 ETH = 4,000 USDT, and a mispriced BTC/ETH quote of 25.15. Real order books move constantly, and clean edges like this are captured by automated systems almost immediately.",
          },
          {
            q: "Could I run this exact loop myself?",
            a: "In theory yes, since it uses only standard spot orders on one exchange, but in practice the mispricing would likely vanish before manual execution finishes. Bots monitor these triangles continuously. Manual traders should paper-trade the logic first and measure real spreads and slippage.",
          }
        ],
      },
  ],
};
