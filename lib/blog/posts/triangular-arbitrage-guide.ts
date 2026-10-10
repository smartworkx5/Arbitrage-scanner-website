import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "triangular-arbitrage-guide",
  title: "Triangular Arbitrage: Complete 2026 Guide",
  description: "Triangular arbitrage explained: how three-leg crypto loops work on one exchange, where mispricings appear, who runs them, and what the edge is in 2026.",
  keywords: [
      "triangular arbitrage",
      "triangular arbitrage guide",
      "crypto arbitrage strategies",
      "three-leg arbitrage loop",
      "crypto arbitrage explained",
      "arbitrage trading crypto"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Triangular arbitrage earns from price mismatches between three pairs on a single exchange, cycling A to B to C and back to A. This guide explains how the loop works, where mispricings appear, and who actually captures them.",
  image: "/images/blog/triangular-arbitrage-guide.svg",
  blocks: [
      { type: "p", text: "Triangular arbitrage is a trading strategy that profits from price mismatches between three related trading pairs on the same exchange. Instead of moving coins between exchanges, the trader executes a three-leg loop, for example converting USDT to BTC, BTC to ETH, and ETH back to USDT. If the three quoted prices disagree with each other, the loop can end with slightly more capital than it started with. No blockchain transfers are involved, so the whole cycle completes in seconds on the exchange itself." },
      { type: "p", text: "The strategy matters in 2026 because it is one of the few arbitrage styles that avoids withdrawal times, network fees, and cross-exchange price risk. That advantage makes it attractive, but it also makes it extremely competitive. Automated bots scan for these loops constantly, so genuine opportunities are small and short-lived. Understanding how triangular arbitrage works is still valuable, even for traders who will never run it manually, because the same math explains how prices stay aligned across an order book." },
      { type: "h2", text: "What Is Triangular Arbitrage?" },
      { type: "p", text: "Triangular arbitrage exists because exchanges quote each trading pair independently. The BTC/USDT price, the ETH/USDT price, and the BTC/ETH price are each set by their own order book, and nothing forces them into perfect agreement. In theory, the BTC/ETH rate should equal the BTC/USDT rate divided by the ETH/USDT rate. When the actual BTC/ETH quote drifts away from that implied rate, a loop becomes profitable. The trader is not betting on direction; they are harvesting a temporary inconsistency between three prices that must logically agree." },
      { type: "h2", text: "How a Three-Leg Loop Works" },
      { type: "p", text: "A loop always starts and ends in the same asset, usually a stablecoin like USDT. Step one converts USDT into the first asset, say BTC, at the BTC/USDT price. Step two converts that BTC into the second asset, say ETH, at the BTC/ETH price. Step three converts the ETH back into USDT at the ETH/USDT price. If the three rates are misaligned, the final USDT balance exceeds the starting balance. Each leg is a normal market or limit order, executed one after another on the same exchange account, with no waiting for confirmations." },
      { type: "h2", text: "Why Loops Can Be Profitable" },
      { type: "p", text: "Loops become profitable when one pair lags behind the others. Crypto moves fast, and during sharp moves the BTC/ETH book may update seconds after BTC/USDT has already repriced. In that window, the implied and actual rates disagree, and a loop can capture the difference. High liquidity usually keeps gaps tiny, but thin altcoin triplets and volatile moments produce larger dislocations. A detailed walkthrough of a [triangular arbitrage example](/blog/triangular-arbitrage-example) shows exactly how the legs and numbers fit together in practice." },
      { type: "h2", text: "Where Loops Are Found" },
      { type: "p", text: "Almost every liquid exchange hosts potential loops, since any three mutually quoted assets form a triangle. Common hunting grounds include majors against stablecoins, such as BTC-ETH-USDT, where volume is huge but edges are razor thin, and altcoin triplets like SOL-AVAX-USDT, where liquidity is thinner and mispricings larger. Unlike [cross-exchange arbitrage](/guides/cross-exchange-arbitrage), the trader never compares two venues, so discovery means scanning implied versus actual rates inside one exchange's own books. Bots do this continuously, checking thousands of triplets per second." },
      { type: "h2", text: "Who Actually Runs Triangular Loops" },
      { type: "p", text: "In 2026, profitable triangular arbitrage is dominated by automated systems. Market-making firms and professional trading desks run low-latency infrastructure that detects a gap and fires all three legs before a human could react. Retail traders occasionally find loops using scanner tools that flag implied-rate discrepancies, and some succeed with limit orders on slower-moving alt triplets. Manual execution on major pairs is essentially pointless against bot competition. For most people, the realistic role is understanding the mechanism, not racing professional systems." },
      { type: "h2", text: "The Realistic Edge in 2026" },
      { type: "p", text: "Honest expectations matter. Gross edges on liquid triplets are typically fractions of a percent, and three sets of trading fees plus spreads consume most of them. After costs, many apparent opportunities are simply unprofitable, which is why [triangular arbitrage fees](/blog/triangular-arbitrage-fees) deserve study before any capital is committed. Compared with strategies like [funding-rate arbitrage](/guides/funding-rate-arbitrage), triangular loops demand more speed and infrastructure for a similarly modest edge. It is a legitimate strategy, but it is a professional's game, not free money." },
      {
        type: "callout",
        title: "Risk Disclosure",
        text: "Triangular arbitrage carries execution risk: prices can move between legs, orders can partially fill, and fees can exceed the edge. Never assume a displayed opportunity stays profitable by the time all three legs fill. Start with tiny sizes, measure real slippage, and never trade capital you cannot afford to lose.",
        tone: "warning",
      },
      {
        type: "faq",
        items: [
          {
            q: "What is triangular arbitrage in simple terms?",
            a: "Triangular arbitrage is trading through three related pairs on one exchange, for example USDT to BTC to ETH and back to USDT, to profit when the three quoted prices disagree with each other. The loop starts and ends in the same asset, needs no transfers, and completes in seconds on the exchange.",
          },
          {
            q: "Do you need three different exchanges for triangular arbitrage?",
            a: "No. Triangular arbitrage happens entirely inside one exchange using three of its trading pairs. That is its main structural advantage over cross-exchange arbitrage, since there are no blockchain transfers, no withdrawal waits, and no settlement risk between legs. All three orders settle inside the same account within seconds.",
          },
          {
            q: "Is triangular arbitrage still profitable in 2026?",
            a: "Occasionally, but the edge is small and heavily competed. Automated bots capture most mispricings on liquid pairs within seconds. After three rounds of fees and spreads, retail traders often find the remaining edge is zero or negative, especially on major triplets like BTC-ETH-USDT.",
          },
          {
            q: "How much capital do you need for triangular arbitrage?",
            a: "The math works at any size, but fixed costs and minimum order sizes make tiny loops pointless. Larger capital scales the absolute profit, yet it also increases slippage against the order book. Many practitioners test with small amounts first to measure real execution costs before sizing up.",
          },
          {
            q: "Can beginners do triangular arbitrage manually?",
            a: "Manual execution is very difficult because opportunities vanish in seconds and three legs must be filled quickly. Beginners are better served learning the concept, paper-trading the logic, and using scanner tools to understand implied rates before risking real money. Speed and fee math matter more than theory at this stage.",
          }
        ],
      },
  ],
};
