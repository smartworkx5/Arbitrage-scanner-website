import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "triangular-arbitrage-risks",
  title: "Triangular Arbitrage Risks and Failure Modes",
  description: "Triangular arbitrage looks risk-free until a leg fails. Learn the real failure modes — partial fills, latency, fee traps, outages — plus how to mitigate each.",
  keywords: [
      "triangular arbitrage",
      "triangular arbitrage risks",
      "arbitrage failure modes",
      "crypto arbitrage risks",
      "partial fills",
      "slippage risk",
      "crypto trading risks"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 8,
  category: "Strategies",
  excerpt: "Triangular arbitrage is often called risk-free. It is not. Here are the real failure modes — partial fills, latency, fee-tier traps, outages, and depegs — and practical ways to mitigate each.",
  image: "/images/blog/triangular-arbitrage-risks.svg",
  blocks: [
      { type: "p", text: "Triangular arbitrage is often called the closest thing to a risk-free trade: everything happens inside one exchange, settlement is instant, and you never hold overnight exposure. That reputation is misleading. The strategy has real failure modes — partial fills, latency, fee-tier traps, outages — that turn theoretically profitable loops into actual losses. This risk-first guide covers each failure mode honestly and how professionals mitigate it. Pair it with our [triangular arbitrage strategy guide](/guides/triangular-arbitrage)." },
      {
        type: "callout",
        title: "Risk Warning",
        text: "Triangular arbitrage is not risk-free and does not guarantee profit. Execution failures, fees, and market moves can all produce losses, sometimes larger than the edge you were chasing. Never trade with money you cannot afford to lose, and validate every assumption with small sizes first.",
        tone: "warning",
      },
      { type: "h2", text: "Partial Fills Break the Loop" },
      { type: "p", text: "A triangular loop only works if all three legs complete at expected sizes and prices. A partial fill — where only part of an order executes — breaks the loop's math, leaving you holding an intermediate asset. If leg two fills halfway, leg three is sized wrong and you keep an unintended position. Bots must detect partial fills instantly, resize or cancel remaining legs, and exit stranded balances by plan, not hope." },
      { type: "p", text: "Mitigation starts with sizing discipline: never trade larger than dependable top-of-book liquidity, and keep a safety margin below quoted depth. Use order types that fail cleanly instead of leaving dust, set maximum slippage per leg, and code an unwind routine that converts stranded balances back to your base asset at market. Paper-trading with realistic fill simulation shows how often partial fills actually hit your triplets." },
      { type: "h2", text: "Latency and Slippage Between Legs" },
      { type: "p", text: "Even when every leg fills, prices can move between leg one and leg three. This latency risk is why triangular arbitrage is a speed game: the edge computed from an order-book snapshot decays with every millisecond of delay. Slippage compounds it on thin books, where your own orders push prices against you. A loop showing 0.3 percent edge can print a loss if the market shifts mid-execution." },
      { type: "p", text: "Professionals use conservative edge thresholds — only trading loops whose edge is several multiples of expected slippage — plus infrastructure that minimizes delay, like servers near the exchange. Equally important is measuring reality: log expected versus actual outcomes for every loop. If slippage keeps eating your edge, the threshold is too low or the triplets too thin. A bot that trades rarely beats one that trades unprofitably." },
      { type: "h2", text: "Fee-Tier Traps and Price Moves" },
      { type: "p", text: "The fee-tier trap is a classic beginner loss: modeling the edge with a discounted tier you have not qualified for, or forgetting all three legs pay taker fees. When real, higher fees apply, every loop quietly loses money. Always verify your actual tier on the live fee page and model taker fees on all three legs. Separate but related: volatile markets can swing a pair mid-loop, and no fee model protects against that." },
      { type: "p", text: "Build a fee buffer into your minimum edge — require the gross edge to exceed total fees by a fixed margin before trading. Reduce movement risk by skipping the most volatile minutes, such as major news events and maintenance windows, and keep loop duration as short as your setup allows. The live fee page is always the final authority on your real costs." },
      { type: "h2", text: "Downtime, API Errors, and Capital Lockup" },
      { type: "p", text: "Exchanges go down, APIs return errors, and WebSocket feeds drop — usually at the worst moment. Lose connectivity mid-loop and you hold intermediate assets with no way to complete or unwind until service returns. API errors can also reject one leg while others fill, creating the same stranded position as a partial fill. These are infrastructure failures, not strategy failures, but your money does not care about the difference." },
      { type: "p", text: "Defend with redundancy and limits: health-check your data feed and halt trading when data goes stale, add automatic unwind logic on connectivity loss, and cap deployed capital so one stuck loop cannot lock the whole account. Size positions so an hour-long outage is an annoyance, not a disaster. Stranded balances in illiquid altcoins also lock capital slowly — prefer liquid triplets and unwind aggressively." },
      { type: "h2", text: "Stablecoin Depegs and Account Risk" },
      { type: "p", text: "Stablecoin-routed loops carry a subtle extra risk: the stablecoin itself can depeg. If a triplet assumes one unit always equals one dollar and the peg slips, the loop math breaks and exits cascade as everyone rushes out. This is rare but has hit major stablecoins, so stable-routed loops deserve full skepticism. Account-level risk lurks too: API key compromises or regulatory actions can strand funds for reasons unrelated to your edge." },
      { type: "p", text: "Mitigate with hygiene and humility: diversify stablecoin routing, avoid concentrating your bankroll in one loop type, secure API keys with IP restrictions and no withdrawal permissions, and keep only trading capital on the exchange. Triangular arbitrage is one tool among several — [funding-rate arbitrage](/guides/funding-rate-arbitrage) and [CEX vs DEX strategies](/guides/cex-vs-dex-arbitrage) have different risk profiles worth learning before you specialize. Honest accounting of failure modes separates professionals from hopefuls." },
      {
        type: "faq",
        items: [
          {
            q: "Is triangular arbitrage really risk-free?",
            a: "No. The 'risk-free' label refers only to the absence of directional market exposure in theory. In practice, partial fills, latency, slippage, fees, outages, and depegs can all produce real losses. Treat it as a low-margin execution business with many small risks, not a guaranteed profit machine.",
          },
          {
            q: "What is the most common way beginners lose money?",
            a: "Fee miscalculation. Beginners model edges with discounted or maker fees they do not actually get, then discover every loop loses money after real taker fees on three legs. The second most common is running too large relative to book liquidity, which causes partial fills and slippage.",
          },
          {
            q: "How do I protect against partial fills?",
            a: "Size legs within dependable top-of-book liquidity, set maximum slippage per leg, and code explicit handling: detect the partial fill, resize remaining legs, and unwind the stranded balance. Paper-trade with realistic fill simulation first to learn how often it happens on your triplets.",
          },
          {
            q: "Can exchange downtime really hurt a triangular arbitrageur?",
            a: "Yes, because a loop is a multi-step sequence. If connectivity drops mid-loop, you hold intermediate assets you never intended to own, with no way to exit until service returns. Mitigate with feed health checks, automatic trading halts on stale data, and position sizes small enough to survive an outage.",
          },
          {
            q: "Are stablecoin-routed loops safer?",
            a: "They reduce volatility risk between legs but add depeg risk: if the stablecoin slips from its peg, the loop math breaks. They are not inherently safer, just differently risky. Diversify stablecoin routing and avoid assuming any peg is ever permanent.",
          }
        ],
      },
  ],
};
