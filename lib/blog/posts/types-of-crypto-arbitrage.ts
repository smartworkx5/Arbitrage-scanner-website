import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "types-of-crypto-arbitrage",
  title: "7 Types of Crypto Arbitrage Explained",
  description: "Cross-exchange, triangular, funding-rate and more: the 7 main types of crypto arbitrage explained simply, with honest pros, cons, and who each strategy suits.",
  keywords: [
      "types of crypto arbitrage",
      "cross exchange arbitrage",
      "triangular arbitrage crypto",
      "funding rate arbitrage",
      "dex arbitrage"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 10,
  category: "Basics",
  excerpt: "Not all arbitrage is buying low on one exchange and selling high on another. These are the 7 main types of crypto arbitrage — and the very different skills each one demands.",
  image: "/images/blog/types-of-crypto-arbitrage.svg",
  blocks: [
      { type: "p", text: "Most beginners think **crypto arbitrage** means one thing: buy cheap on Exchange A, sell dear on Exchange B. That is only the first of several distinct strategies, and they differ wildly in capital needs, technical difficulty, and risk. Understanding the full menu matters, because the strategy that suits a patient beginner is very different from the one a funded, automated trader runs. Here are the seven types that matter in 2026." },
      { type: "h2", text: "The 7 Types of Crypto Arbitrage" },
      { type: "h3", text: "1. Cross-Exchange Arbitrage" },
      { type: "p", text: "The classic: the same coin trades at different prices on two exchanges, so you buy on the cheaper one and sell on the dearer one. It is the easiest to understand and the best starting point for beginners. The catch is execution — transfer delays and fees eat most small gaps, which is why serious operators hold inventory on both sides. Read our full [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) for the mechanics." },
      { type: "h3", text: "2. Triangular Arbitrage" },
      { type: "p", text: "Three trades inside a single exchange: for example, BTC to ETH, ETH to USDT, USDT back to BTC — ending with more BTC than you started with. Because everything happens on one venue, there are no transfers and no withdrawal risk. The difficulty is speed: these loops are usually spotted and closed by bots in seconds, and the math has to include three sets of fees. See [triangular arbitrage explained](/guides/triangular-arbitrage)." },
      { type: "h3", text: "3. DEX vs CEX Arbitrage" },
      { type: "p", text: "Decentralized exchanges (like Uniswap-style pools) price assets by algorithm, while centralized exchanges price them by order book — and the two disagree surprisingly often, especially for new or volatile tokens. Traders buy on one venue type and sell on the other. This requires comfort with wallets, gas fees, and smart-contract risk, but it is one of the few areas where retail traders still find real edges. Our [CEX vs DEX arbitrage guide](/guides/cex-vs-dex-arbitrage) covers the setup." },
      { type: "h3", text: "4. Funding Rate Arbitrage" },
      { type: "p", text: "Perpetual futures contracts pay periodic funding rates between longs and shorts. When funding is strongly positive, traders can short the perpetual and buy the equivalent spot — collecting the funding payments while staying price-neutral. This is closer to yield farming than classic arbitrage: the \"profit\" accrues over hours and days, and the main risks are liquidation and sudden funding flips. Explained in our [funding rate arbitrage guide](/guides/funding-rate-arbitrage)." },
      { type: "h3", text: "5. Cash-and-Carry (Spot-Futures Basis)" },
      { type: "p", text: "When a futures contract trades above spot (contango), you buy spot and short the future, locking in the difference as the contract converges at expiry. This is one of the oldest arbitrage trades in finance, and crypto's dated futures still offer it. Capital requirements are higher and you need a margin account, but the trade is genuinely market-neutral once positioned." },
      { type: "h3", text: "6. Statistical / Pairs Arbitrage" },
      { type: "p", text: "Instead of identical assets, you trade two correlated assets — say, two layer-1 tokens — that historically move together. When their price ratio stretches unusually far from its norm, you buy the laggard and short the leader, betting on reversion. This is the most quantitative of the seven: it needs data, backtesting, and strict risk limits, because correlations can break without warning." },
      { type: "h3", text: "7. Inter-Network (Bridge) Arbitrage" },
      { type: "p", text: "The same token can trade at different prices on different blockchains — for example, a token on Ethereum versus its bridged version on another network. Bridging the token to the cheaper chain and selling there captures the gap. Bridge delays, bridge fees, and bridge smart-contract risk make this the most technically demanding type, and bridge exploits remain a real hazard in 2026." },
      { type: "h2", text: "Comparing the 7 Types at a Glance" },
      {
        type: "table",
        headers: ["Type", "Difficulty", "Capital need", "Main risk"],
        rows: [
          ["Cross-exchange", "Beginner", "Low-moderate", "Transfer delays, fees"],
          ["Triangular", "Intermediate", "Low", "Speed; bots close loops fast"],
          ["DEX vs CEX", "Intermediate", "Moderate", "Gas fees, smart-contract risk"],
          ["Funding rate", "Intermediate", "Moderate-high", "Liquidation, funding flips"],
          ["Cash-and-carry", "Advanced", "High", "Margin requirements"],
          ["Statistical/pairs", "Advanced", "Moderate-high", "Correlation breakdown"],
          ["Inter-network", "Advanced", "Moderate", "Bridge risk, delays"]
        ],
      },
      { type: "h2", text: "Which Type Should Beginners Start With?" },
      { type: "p", text: "Start with cross-exchange arbitrage on major coins between two reputable exchanges, using small amounts. It teaches you the core skills — fee math, order books, transfers, reconciliation — that every other type builds on. Avoid funding-rate and statistical strategies until you are comfortable with leverage math and risk management, and treat anything involving bridges as advanced territory. Whichever you choose, the honest profitability picture is in our 2026 analysis of [whether crypto arbitrage is still profitable](/blog/is-crypto-arbitrage-profitable-2026)." },
      {
        type: "callout",
        title: "One strategy at a time",
        text: "Each type has its own fee structure, tooling, and failure modes. Master one before adding a second — spreading thin across strategies is a reliable way to make beginner mistakes in seven places at once.",
        tone: "info",
      },
      { type: "h2", text: "Getting Started: Pick One Type and Master It" },
      { type: "p", text: "The biggest beginner error is trying to learn several types at once. Pick the one that matches your current resources: if you have modest capital and no coding skills, start with manual cross-exchange on major pairs. If you are technical and enjoy automation, triangular loops on a single exchange are a great first bot project. If you prefer earning yield over chasing spreads, study funding-rate mechanics with paper trades first. Give your chosen type at least 50-100 live trades before judging it — and before even thinking about a second strategy. Depth beats breadth in arbitrage, because each type's profit hides in details that only repetition reveals." },
      {
        type: "faq",
        items: [
          {
            q: "Which type of crypto arbitrage is most profitable?",
            a: "There is no universally best type — profitability depends on your capital, skills, and tools. Cross-exchange and triangular are most accessible; funding-rate and cash-and-carry can offer steadier yields but need more capital and leverage knowledge. All of them are competitive in 2026.",
          },
          {
            q: "Can I combine multiple arbitrage types?",
            a: "Experienced traders do, but beginners should not. Each type has different fee structures, risks, and monitoring needs. Master one strategy with consistent results before adding another.",
          },
          {
            q: "Is triangular arbitrage still possible in 2026?",
            a: "Yes, but the easy loops are heavily competed over by bots. Opportunities still appear during volatility spikes and on less liquid pairs. Manual triangular trading is mostly a learning exercise now; consistent profits generally need automation.",
          },
          {
            q: "What is the riskiest type of crypto arbitrage?",
            a: "Inter-network (bridge) arbitrage carries the most distinctive risk — bridge smart contracts have been exploited for large sums, and a bridge failure can strand or lose funds entirely. Statistical arbitrage is also dangerous for beginners because correlations can break suddenly.",
          }
        ],
      },
  ],
};
