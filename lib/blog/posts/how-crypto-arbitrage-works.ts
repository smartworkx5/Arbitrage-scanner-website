import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "how-crypto-arbitrage-works",
  title: "How Crypto Arbitrage Actually Works (With Real Math)",
  description: "Follow a crypto arbitrage trade step by step with real fee math: how spreads, trading fees, slippage, and transfer costs decide whether a trade is profitable.",
  keywords: [
      "how crypto arbitrage works",
      "crypto arbitrage math",
      "arbitrage trading fees",
      "crypto spread explained",
      "arbitrage profit calculation"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "Crypto arbitrage is a chain of small, unglamorous steps — each carrying a cost. This walkthrough shows the real fee-adjusted math that decides whether any spread is actually profitable.",
  image: "/images/blog/how-crypto-arbitrage-works.svg",
  blocks: [
      { type: "p", text: "Crypto arbitrage sounds like free money until you do the math. **How crypto arbitrage actually works** is a chain of small, unglamorous steps — each one carrying a cost — and profitability is decided entirely by whether the spread survives every link in that chain. This article walks through the full mechanics with realistic numbers, so you can evaluate any supposed opportunity in under a minute." },
      { type: "h2", text: "The Four Steps of Every Arbitrage Trade" },
      {
        type: "list",
        items: [
        "Spot the gap: the same asset trades at different prices on two venues — judged after fees, not before.",
        "Buy low: execute a buy order on the cheaper exchange.",
        "Position for the sale: either transfer the asset to the expensive exchange, or sell from a balance you already hold there.",
        "Sell high and reconcile: execute the sell, then subtract every cost — trading fees, transfer fees, slippage — to find your true profit."
        ],
      },
      { type: "p", text: "The third step is where strategies diverge. **Sequential execution** — buy, transfer, then sell — is simple but exposes you to price movement during the transfer window, which can last anywhere from a minute to over an hour depending on the network. **Concurrent execution** — holding inventory on both exchanges and buying on one while selling on the other at the same time — removes transfer risk but requires roughly double the capital and careful inventory management. Most beginners start sequential with small amounts; most serious operators run concurrent. Our [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) compares both approaches in detail." },
      { type: "h2", text: "The Fee-Adjusted Math (A Worked Example)" },
      { type: "p", text: "Let us walk through a realistic example. Imagine 1 ETH trades at $3,400 on Exchange A and $3,412 on Exchange B — a $12 spread, or about 0.35%. On paper, that looks like a $12 profit per ETH. Now subtract reality." },
      {
        type: "table",
        headers: ["Cost", "Typical amount", "Profit remaining"],
        rows: [
          ["Gross spread", "$12.00 (0.35%)", "$12.00"],
          ["Buy fee (0.1%)", "$3.40", "$8.60"],
          ["Sell fee (0.1%)", "$3.41", "$5.19"],
          ["Network transfer fee", "$1-$3", "$2.19-$4.19"],
          ["Slippage on both orders", "$0.50-$2", "$0.19-$3.69"]
        ],
      },
      { type: "p", text: "Notice how a 0.35% spread — which many scanners flag as an opportunity — leaves somewhere between nineteen cents and a few dollars on a $3,400 position, and that is before accounting for transfer-time risk. The formula professionals use is simple: **net edge = spread % minus (buy fee + sell fee + transfer cost % + slippage %)**. If the result is not clearly positive with margin to spare, the trade is not an opportunity — it is a donation to the exchanges." },
      {
        type: "callout",
        title: "The 3x rule of thumb",
        text: "Many arbitrageurs ignore any spread smaller than roughly three times their total round-trip cost. If your costs are 0.25%, you want at least 0.75% of spread before you even consider the trade. Thin margins plus execution risk is how beginners slowly bleed.",
        tone: "info",
      },
      { type: "h2", text: "Why Screenshots of Big Spreads Usually Mislead" },
      { type: "p", text: "Every beginner eventually finds a 5% spread on some obscure token and wonders why nobody is exploiting it. The answers are almost always the same: deposits or withdrawals are suspended (so the price cannot be arbitraged away), the order book is paper-thin (your market order would crash straight through it), the exchange has withdrawal minimums or fees that dwarf the spread, or the volume is simply fake. A spread that cannot be executed is not an opportunity — it is a mirage. Before believing any spread, check three things: can you deposit, can you withdraw, and is there real depth at the quoted prices?" },
      { type: "p", text: "This is also why scanner results need interpretation. A scanner shows you price differences; it cannot tell you whether the transfer network is congested, whether the exchange will process your withdrawal in minutes or hours, or whether the order book holds more than a few dollars of real liquidity. The tool finds candidates. Your judgment — and your fee math — decides which ones are real." },
      { type: "h2", text: "Putting It Together: Your Pre-Trade Checklist" },
      {
        type: "list",
        items: [
        "Spread exceeds total round-trip costs by at least 2-3x",
        "Both exchanges have deposits and withdrawals working for this asset",
        "Order book depth covers your full trade size near the quoted price",
        "You have accounted for transfer time (sequential) or hold balanced inventory (concurrent)",
        "You know your tax reporting obligations for the trades"
        ],
      },
      { type: "p", text: "Run every opportunity through this checklist and most spectacular spreads will disqualify themselves — which is exactly the point. Arbitrage profits come from the few trades that survive scrutiny, repeated patiently. If you want to see how the same logic works without moving coins between exchanges at all, our guide to [triangular arbitrage](/guides/triangular-arbitrage) shows the strategy running inside a single venue." },
      {
        type: "faq",
        items: [
          {
            q: "What is the minimum spread needed for profitable arbitrage?",
            a: "It depends entirely on your costs. With roughly 0.1% fees per side plus transfer costs, most traders use at least 0.5-1% of spread as a starting filter — and want 2-3x their total costs as a safety margin. Anything thinner is usually noise.",
          },
          {
            q: "How long does a crypto transfer between exchanges take?",
            a: "Anywhere from under a minute to over an hour, depending on the blockchain, network congestion, and each exchange's confirmation requirements. Always check current conditions before committing to a sequential trade.",
          },
          {
            q: "Can I arbitrage without transferring coins between exchanges?",
            a: "Yes — this is called concurrent (or balanced-inventory) execution. You hold the asset on both exchanges, buy on the cheap one while simultaneously selling on the expensive one, and rebalance later. It needs roughly double the capital but removes transfer-time risk.",
          },
          {
            q: "Do maker fees change the math?",
            a: "Yes. Limit orders that add liquidity (maker orders) usually pay lower fees than market orders (taker orders) — sometimes half or less. Patient traders who use limit orders can meaningfully widen their net edge, at the cost of execution speed.",
          }
        ],
      },
  ],
};
