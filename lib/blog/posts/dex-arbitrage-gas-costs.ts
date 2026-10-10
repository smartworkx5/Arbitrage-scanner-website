import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "dex-arbitrage-gas-costs",
  title: "DEX Arbitrage Gas Costs: When Profit Survives",
  description: "DEX arbitrage gas costs can erase your edge. Learn exactly how L1 and L2 fees work, how to estimate total on-chain costs, and when a spread truly survives.",
  keywords: [
      "dex arbitrage gas costs",
      "ethereum gas fees arbitrage",
      "layer 2 arbitrage costs",
      "gas fees dex trading",
      "arbitrage profit after gas"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 7,
  category: "Strategies",
  excerpt: "Gas is the silent killer of DEX arbitrage. This guide breaks down how on-chain fees really work on L1s and L2s — and the math that decides whether a spread survives them.",
  image: "/images/blog/dex-arbitrage-gas-costs.svg",
  blocks: [
      { type: "p", text: "**DEX arbitrage gas costs** decide more trades than price gaps do. Every on-chain arbitrage leg — the swap, the approval, sometimes a bridge transaction — pays a network fee, and that fee spikes at exactly the wrong moment: when volatility is high, gaps are widest, and everyone is competing for block space. A spread that looks like 0.8% profit can easily be a net loss once gas is accounted for. Traders who master gas math survive; traders who ignore it donate their capital to validators one transaction at a time." },
      { type: "p", text: "Gas is simply the price of computation on a blockchain, paid in the network's native token. On Ethereum-style networks, each transaction declares how much it will pay per unit of computation, and transactions bidding higher get included sooner. When the network is quiet, inclusion is cheap; when markets are moving fast, thousands of traders and bots bid against each other and fees multiply. Because arbitrage opportunities cluster in volatile moments, arbitrageurs systematically face the worst gas prices — a cruel correlation every on-chain trader must plan around." },
      { type: "h2", text: "How Gas Pricing Actually Works" },
      { type: "p", text: "Modern Ethereum-style fee markets split the fee into a base fee, which rises and falls automatically with network congestion and is burned, and a priority fee (tip), which goes to the block builder and determines how fast your transaction is included. For arbitrage, inclusion speed is part of the strategy: a slow transaction may confirm after the gap has closed, turning a planned profit into a loss plus wasted gas. Bidding too low saves pennies and risks the whole trade; bidding too high eats the edge directly. Getting this balance right — fast enough to capture the gap, cheap enough to stay profitable — is a genuine skill." },
      { type: "p", text: "The total gas cost of a trade is the gas price multiplied by the gas units the transaction consumes, and complex trades consume more. A simple token swap uses a moderate amount of gas; a multi-hop route through several pools, or a trade that first needs a token approval transaction, can cost multiples of that. Approvals are a commonly forgotten cost: the first time your wallet interacts with a token contract, a separate approval transaction is usually required before the swap itself." },
      { type: "h2", text: "L1 vs L2: The Fee Landscape in 2026" },
      { type: "p", text: "This is where network choice transforms the math. Ethereum mainnet (L1) offers the deepest liquidity and the most pools, but its gas costs make small and medium trades uneconomical — a single swap leg can cost several dollars when congested, which instantly disqualifies sub-thousand-dollar arbitrage attempts. Layer-2 networks like Arbitrum, Base, and Optimism execute the same kinds of swaps for a small fraction of that cost, often cents rather than dollars. The trade-off is thinner liquidity on some pairs and the added complexity of bridging funds between networks." },
      {
        type: "table",
        headers: ["Factor", "Ethereum L1", "Major L2s (Arbitrum, Base, Optimism)"],
        rows: [
          ["Typical swap cost", "Dollars; spikes hard in volatility", "Cents; much flatter under load"],
          ["Liquidity depth", "Deepest pools in DeFi", "Growing fast; thinner on exotic pairs"],
          ["Minimum viable trade", "Larger sizes needed to cover gas", "Small trades can stay profitable"],
          ["Competition", "Heaviest bot competition", "Competitive but more accessible"],
          ["Bridging friction", "None (native)", "Bridge fees and delays to move funds in/out"]
        ],
      },
      { type: "h2", text: "The Survival Formula: When a Spread Beats Gas" },
      {
        type: "callout",
        title: "Compute gas as a percentage of trade size",
        text: "A $4 gas cost on a $400 trade is 1% — it needs a spread above roughly 1.5% just to break even after other fees. On a $4,000 trade it is 0.1%, a rounding error. Gas punishes small trades disproportionately: size up or move to cheaper networks.",
        tone: "info",
      },
      { type: "p", text: "The practical formula: net edge = spread % minus (swap fees + gas as % of trade + price impact % + CEX fees if one leg is off-chain). Run this before every trade, using current gas prices — not yesterday's. Many traders set a personal rule, such as requiring the spread to exceed total costs by at least 2x, because estimates are always optimistic: gas can spike between estimation and confirmation, and price impact is routinely underestimated. If a trade only works with perfect conditions, it is not a trade worth taking." },
      { type: "h2", text: "Practical Ways to Cut Gas Costs" },
      {
        type: "list",
        items: [
        "Trade on L2s where the strategy allows — the fee difference is often 10-50x, which changes which spreads are viable.",
        "Batch approvals in quiet periods so they never coincide with an urgent arbitrage attempt.",
        "Use aggregators that optimize routes for gas as well as price; the cheapest quote is not always the cheapest trade.",
        "Avoid multi-hop routes unless the extra edge clearly pays for the extra gas units.",
        "Time non-urgent rebalancing for low-congestion windows instead of competing with volatility spikes."
        ],
      },
      { type: "p", text: "None of these tricks manufacture profit from a bad spread — they only stop costs from killing a good one. The hierarchy of skill in DEX arbitrage runs: first, find real gaps; second, execute them cheaply; third, execute them fast. Gas mastery is the second rung, and it is where most beginners lose money without ever understanding why. For the venue-level picture of where these costs bite hardest, revisit our [CEX vs DEX arbitrage guide](/guides/cex-vs-dex-arbitrage), and check unfamiliar fee terms in the [glossary](/glossary)." },
      {
        type: "faq",
        items: [
          {
            q: "How do I estimate gas before an arbitrage trade?",
            a: "Wallets and aggregators show a gas estimate before you confirm — treat it as a lower bound and add a margin, since congestion can push the actual cost higher. For planning, track typical costs on your target network over a week so you know your break-even spread sizes in advance.",
          },
          {
            q: "Is arbitrage on Ethereum mainnet still worth it?",
            a: "For large, well-capitalized traders it can be, because the deepest liquidity lives there. For small accounts, mainnet gas usually makes the math impossible — L2s are the realistic venue. Match the network to your trade size.",
          },
          {
            q: "Do failed transactions really cost gas?",
            a: "Yes. A reverted transaction still consumed computation, so you pay for it. Strategies with low success rates can lose money purely through failed-attempt gas, which is why simulation and conservative thresholds matter.",
          },
          {
            q: "Can gas fees change between quote and confirmation?",
            a: "Yes — the base fee adjusts every block with congestion. In volatile moments it can jump significantly in seconds. Building a margin into your estimates, rather than using the exact quoted figure, protects against this.",
          }
        ],
      },
  ],
};
