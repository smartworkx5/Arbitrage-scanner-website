import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "defi-liquidation-bots",
  title: "DeFi Liquidation Bots Explained",
  description: "DeFi liquidation bots repay undercollateralized loans for a bonus, racing other keepers to each opportunity. Learn how keeper strategies and gas auctions work.",
  keywords: [
      "DeFi liquidation bots",
      "keeper bots",
      "DeFi liquidation strategy",
      "liquidation bot crypto",
      "keeper strategy DeFi",
      "MEV liquidation"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 8,
  category: "Strategies",
  excerpt: "DeFi liquidation bots repay unhealthy loans on lending protocols and earn a bonus for doing so. Here is how keeper strategies work, why competition is fierce, and what can go wrong.",
  image: "/images/blog/defi-liquidation-bots.svg",
  blocks: [
      { type: "p", text: "DeFi liquidation bots are automated programs that watch decentralized lending protocols for loans that have become undercollateralized, then step in to repay part of the debt and claim a liquidation bonus. When collateral prices fall faster than borrowers can top up, these bots keep protocols solvent by clearing bad debt before it piles up. On 15 October 2026, with ETH trading near $2,420 and down about 2.9% over 24 hours, leveraged positions across lending markets were under real pressure, which is exactly the environment in which **DeFi liquidation bots** become most active. They are not arbitrage bots in the classic sense, but the skill set overlaps heavily with [cross-exchange arbitrage](/guides/cross-exchange-arbitrage), because both reward speed, cheap execution, and careful capital management." },
      { type: "h2", text: "What a Liquidation Actually Is" },
      { type: "p", text: "On a lending protocol, a borrower deposits collateral such as ETH and borrows another asset against it, for example a stablecoin. The protocol sets a maximum loan-to-value ratio and a liquidation threshold. If the collateral value falls below that threshold, anyone may repay some or all of the debt and receive the collateral at a discount. That discount, often called the liquidation bonus or penalty, is the keeper's revenue. The borrower loses part of their collateral, the protocol removes a risky loan, and the liquidator pockets the spread between the discounted collateral and the debt repaid. In calm markets, liquidations are rare. In sharp selloffs, such as the one that followed the hot US September CPI print of 3.7% year over year on 14 October 2026, liquidations can arrive in waves as many positions breach their thresholds at once." },
      { type: "h2", text: "How Keeper Bots Work Step by Step" },
      { type: "p", text: "A keeper bot runs a continuous loop: monitor, evaluate, execute. First, it reads on-chain data or protocol subgraphs to track every open loan's health factor, which compares collateral value to borrowed value. Second, when a loan crosses into liquidatable territory, the bot checks profitability by simulating the transaction, including the liquidation bonus, gas costs, slippage on swapping the seized collateral, and any protocol fees. Third, it submits the liquidation transaction, ideally through a private mempool or a builder that protects it from being front-run. Finally, it swaps the seized collateral back into the asset it wants to hold, usually a stablecoin, and the cycle repeats. The fastest bots run their own nodes or use low-latency RPC endpoints, because a delay of one block can mean another keeper takes the opportunity." },
      {
        type: "list",
        items: [
        "Monitor loan health factors across one or more lending protocols in real time.",
        "Simulate each liquidation to confirm it is profitable after gas, slippage, and fees.",
        "Submit the liquidation through a fast or private route to avoid front-running.",
        "Swap seized collateral back to the preferred asset and recycle the capital."
        ],
      },
      { type: "h2", text: "Keeper Strategies: From Simple to Advanced" },
      { type: "p", text: "The simplest keeper strategy is reactive and single-protocol: watch one lending market, liquidate what becomes unhealthy, and sell the collateral immediately. More advanced keepers run multi-protocol scanners that cover several lending platforms and chains at once, prioritizing the largest bonuses. Some keepers hold inventory in the assets they expect to seize, so they can repay debt instantly without swapping first. Others use flash loans to fund the liquidation itself, borrowing the repayment amount for a single transaction and repaying it from the seized collateral, which means they need little starting capital but pay flash-loan fees and face extra execution risk. The most sophisticated operations combine liquidation with [funding rate arbitrage](/guides/funding-rate-arbitrage) and market making, so capital earns a return even between liquidation events rather than sitting idle." },
      {
        type: "table",
        headers: ["Keeper strategy", "Capital needed", "Complexity", "Main risk"],
        rows: [
          ["Single-protocol reactive", "Low to medium", "Low", "Missed opportunities during volatility spikes"],
          ["Multi-protocol scanning", "Medium", "Medium", "Higher infrastructure and monitoring costs"],
          ["Flash-loan liquidation", "Very low", "High", "Failed transactions and wasted gas"],
          ["Inventory-based keeper", "High", "Medium", "Collateral price exposure while holding inventory"]
        ],
      },
      { type: "h2", text: "Competition, Gas Auctions, and MEV" },
      { type: "p", text: "Liquidations are among the most competitive activities in DeFi because the bonus is public, the trigger is visible on-chain, and every keeper sees the same opportunity. When a large position becomes liquidatable, dozens of bots may submit transactions in the same block, and the winner is usually the one that pays the most for priority or routes through a builder with the best ordering. This bidding war is a form of maximal extractable value (MEV), and it eats into profits: a bonus that looks generous on paper can vanish once gas or priority fees spike. Searchers sometimes bundle liquidations with follow-up swaps to lock in the full round trip. For newcomers, this is the hardest lesson: the edge is not spotting the liquidation, which everyone sees, but executing it more cheaply and reliably than the next bot. Understanding [liquidity and execution costs](/blog/liquidity-guide-crypto) matters as much as the strategy itself." },
      { type: "h2", text: "Costs, Risks, and Realistic Expectations" },
      { type: "p", text: "Liquidation bots face several risks that marketing threads rarely mention. Failed transactions still cost gas, and a volatile session can burn through a budget with nothing to show for it. Smart-contract bugs are a live danger: the keeper interacts with lending protocols, routers, and sometimes flash-loan providers, and a flaw in any of them can trap funds, as the roughly $86,000 UNCX incident reported on 15 October 2026 was a reminder of for the wider DeFi ecosystem. Collateral seized during a crash can keep falling before the bot sells it, turning a profitable liquidation into a loss. There is also protocol risk: liquidation parameters, bonus sizes, and pause switches can change through governance. Keepers should start on testnets, cap position sizes, simulate every transaction, and treat historical profits as no guide to future results. Liquidation keeping is a real, useful service to DeFi, but it is a competitive business with real downside, not free money." },
      {
        type: "callout",
        title: "Risk disclosure",
        text: "Liquidation bots can lose money through failed transactions, gas spikes, slippage, smart-contract bugs, and falling collateral prices. Never run a keeper with funds you cannot afford to lose, and test thoroughly on testnets first.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, available in the Muse app, that can answer questions and explain complex topics in plain language. For this topic, you can ask it to walk through a liquidation example step by step with simple numbers, so the roles of borrower, protocol, and keeper are clear before you study real code." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Do DeFi liquidation bots need a lot of capital?",
            a: "Not necessarily. Flash-loan strategies can liquidate with very little starting capital, while inventory-based keepers need significant funds. In both cases, gas, infrastructure, and failed-transaction costs still apply, so a realistic budget includes operating costs, not just liquidation capital.",
          },
          {
            q: "Are liquidation bots the same as arbitrage bots?",
            a: "They are related but different. Arbitrage bots profit from price differences between markets, while liquidation bots profit from a protocol-paid bonus for clearing unhealthy loans. Both reward speed and cheap execution, and some operators run both strategies.",
          },
          {
            q: "Can a beginner run a liquidation bot profitably?",
            a: "It is difficult. Competition from professional keepers, gas auctions, and MEV mean margins are thin. Beginners should learn on testnets, study one protocol deeply, and start with tiny sizes to understand real execution costs before committing meaningful capital.",
          },
          {
            q: "What happens to borrowers who get liquidated?",
            a: "The protocol sells part of their collateral at a discount to repay the debt. Borrowers lose a portion of their collateral plus the liquidation penalty, which is why maintaining a safe buffer above the liquidation threshold matters so much.",
          }
        ],
      },
  ],
};
