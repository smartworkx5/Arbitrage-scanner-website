import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "lending-rate-arbitrage",
  title: "Lending Rate Arbitrage Across Protocols: Aave vs Compound Rate Gaps",
  description: "Lending rate arbitrage exploits supply and borrow gaps between Aave, Compound, and other protocols. Learn how rate gaps form, how the loop works, and the risks.",
  keywords: [
      "lending rate arbitrage",
      "Aave vs Compound",
      "DeFi lending rates",
      "interest rate arbitrage",
      "DeFi yield strategies",
      "borrow rate gaps"
  ],
  datePublished: "2026-10-14",
  dateModified: "2026-10-14",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "The same asset can earn different supply rates — and cost different borrow rates — across lending protocols. Here is how lending rate arbitrage works, why the gaps exist, and what can go wrong.",
  image: "/images/blog/lending-rate-arbitrage.svg",
  blocks: [
      { type: "p", text: "Lending rate arbitrage is the quieter cousin of price arbitrage. Instead of exploiting a price gap for the same token on two exchanges, it exploits an interest rate gap for the same asset on two lending protocols. If one protocol pays a higher supply rate on a stablecoin than another charges to borrow it, a trader can supply on one side, borrow on the other, and pocket the difference. The mechanics are straightforward. The risks — liquidation, variable rates, and governance changes — are what separate careful practitioners from those who get caught out." },
      { type: "p", text: "This strategy lives on protocols such as Aave and Compound, the two longest-running decentralised lending markets. Both let users supply assets to earn interest and borrow against collateral. Both set rates algorithmically, based on how much of each asset is currently lent out. Because the two protocols have different users, collateral rules, and incentive programmes, their rates for the same asset often differ. Those differences are the raw material of lending rate arbitrage." },
      { type: "h2", text: "Why Lending Rates Differ Between Protocols" },
      { type: "p", text: "Lending rates on Aave and Compound are not set by a committee. They follow a curve: as utilisation rises — meaning a larger share of supplied funds is borrowed — rates rise to attract more supply and discourage more borrowing. As utilisation falls, rates drop. Because each protocol has its own pool of suppliers and borrowers, utilisation for the same asset can differ sharply between them, and so can the rate." },
      { type: "p", text: "Incentive programmes add a second layer. Protocols sometimes distribute governance tokens or other rewards to suppliers or borrowers, which changes the effective return beyond the headline interest rate. A pool with a modest headline supply rate can be the best deal once rewards are included — and rewards can change or end with little notice. Always calculate the all-in return: interest plus rewards, minus fees and gas." },
      { type: "p", text: "Market conditions matter too. In risk-off periods, borrowers rush to borrow stablecoins against crypto collateral, pushing stablecoin borrow rates up. In calmer periods, demand fades and rates fall. On October 14, 2026, Bitcoin trades near $83,300 and Ether above $2,500 after a choppy week, with gold near $4,150 per ounce — a backdrop in which borrowing demand can swing quickly as traders reposition." },
      { type: "h2", text: "How the Lending Rate Arbitrage Loop Works" },
      { type: "p", text: "The basic loop has four steps. First, the trader supplies collateral — often Ether or a liquid staking token — to the protocol with the cheaper borrow rate. Second, the trader borrows the target asset, typically a stablecoin, against that collateral. Third, the trader supplies the borrowed stablecoin to the protocol paying the higher supply rate. Fourth, the trader collects the spread between the supply rate earned and the borrow rate paid, as long as the gap lasts." },
      {
        type: "table",
        headers: ["Step", "Action", "Key check"],
        rows: [
          ["1. Collateral", "Supply collateral to the cheaper-borrow protocol", "Collateral factor and liquidation threshold"],
          ["2. Borrow", "Borrow the target asset at the lower rate", "Borrow rate type: variable vs stable"],
          ["3. Supply", "Supply borrowed asset where the rate is higher", "Supply cap and reward programme terms"],
          ["4. Monitor", "Track the spread and health factor continuously", "Rate moves, utilisation, and liquidation risk"]
        ],
      },
      { type: "p", text: "Some traders repeat the loop — supplying the borrowed funds, borrowing more against them, and supplying again — to multiply the spread. This recursive looping magnifies both returns and risk. Each loop adds leverage, pushes the position closer to liquidation, and increases exposure to a single protocol's smart contracts. Beginners should master the single-loop version thoroughly before considering recursion." },
      { type: "p", text: "A related variant is stablecoin rate arbitrage: borrowing one stablecoin where it is cheap and supplying a different stablecoin where rates are higher, while managing the small but real risk that the two stablecoins diverge. All of these share the same core logic — move capital to where it earns the most, borrow where it costs the least, and keep the net spread positive after every cost." },
      { type: "h2", text: "The Risks That Matter Most" },
      { type: "p", text: "Variable rates are the first risk. Both supply and borrow rates on Aave and Compound adjust automatically with utilisation. A gap that is profitable today can close tomorrow if borrowers flood the cheap protocol or suppliers flood the high-yield one. Because rates are variable, the spread is never locked in. Traders must monitor positions continuously and be ready to unwind when the spread turns negative." },
      { type: "p", text: "Liquidation is the second risk, and the most dangerous. If the collateral's value falls relative to the borrowed amount, the position can be liquidated — often with a penalty. Crypto collateral is volatile: a sharp drop in Ether, for example, can push a healthy position toward liquidation within hours. Keep the health factor well above the minimum, avoid maximum leverage, and set alerts for collateral price moves. A spread of a few percentage points is not worth a liquidation penalty." },
      { type: "p", text: "Smart contract and governance risk come third. Lending protocols are governed by token holders who can change interest rate models, collateral factors, supply caps, or supported assets — altering a position's economics overnight. Protocol bugs, oracle failures, and stablecoin depegs are rarer but more severe. Diversifying across protocols reduces, but never eliminates, these risks. Our [arbitrage risk management](/blog/arbitrage-risk-management) guide covers position sizing and monitoring in more depth." },
      {
        type: "callout",
        title: "Never Chase a Rate Without Checking the Exit",
        text: "Before entering any lending rate position, confirm you can unwind it: is there enough liquidity to withdraw and repay? Are there supply caps or withdrawal queues? A position you cannot exit is a trap, however attractive the headline rate.",
        tone: "warning",
      },
      { type: "h2", text: "Comparing Aave and Compound in Practice" },
      { type: "p", text: "Aave and Compound differ in ways that matter for arbitrage. Aave generally supports more assets, offers both variable and stable borrow rates, and uses features such as efficiency mode for correlated assets. Compound has historically offered a simpler, more conservative market with fewer assets. Those design choices mean the two protocols attract different users — and different rate dynamics. Compare not just current rates but collateral factors, liquidation thresholds, reserve factors, and reward programmes on each side." },
      { type: "p", text: "Fees and gas also shape the comparison. Entering and exiting positions costs gas on every step: supply, borrow, supply again, and eventually unwind. On expensive networks, those costs can exceed weeks of spread income on a small position. Larger positions amortise gas better, but they also concentrate risk. Many traders therefore run lending rate arbitrage on lower-fee networks or wait for low-gas windows, and they size positions so expected spread income is a comfortable multiple of total gas." },
      { type: "p", text: "Finally, remember that lending rate arbitrage competes with simpler strategies. The same capital might earn a comparable return from [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) or [funding rate arbitrage](/guides/funding-rate-arbitrage) with different risk profiles. The right choice depends on your capital size, monitoring capacity, and tolerance for smart contract and liquidation risk — not on which headline rate looks highest." },
      { type: "h2", text: "A Disciplined Process for Rate Arbitrage" },
      {
        type: "list",
        items: [
        "Compare all-in rates: interest plus rewards, minus fees and gas, on both protocols.",
        "Check collateral factors, liquidation thresholds, and supply caps before entering.",
        "Keep the health factor comfortably above liquidation, especially with volatile collateral.",
        "Set alerts for rate changes, utilisation spikes, and collateral price moves.",
        "Plan the unwind before entering: confirm liquidity and withdrawal paths.",
        "Review governance proposals and reward programme end dates weekly."
        ],
      },
      { type: "p", text: "Lending rate arbitrage is not a set-and-forget yield. It is an active strategy that pays traders for monitoring, discipline, and fast exits. The spread is the reward for bearing variable-rate risk, liquidation risk, and protocol risk — and for doing the unglamorous work of checking all three, every day. Done carefully, it can add a steady, market-neutral return stream. Done carelessly, it converts a small rate edge into a liquidation. Start small, measure net returns after all costs, and scale only when the numbers — not the headline rates — justify it." },
      {
        type: "faq",
        items: [
          {
            q: "What is lending rate arbitrage?",
            a: "It is earning a spread by supplying an asset on a protocol that pays a higher rate while borrowing the same or an equivalent asset on a protocol that charges a lower rate, keeping the difference after fees and gas.",
          },
          {
            q: "Why do Aave and Compound offer different rates for the same asset?",
            a: "Each protocol sets rates based on its own pool utilisation, and each has different users, collateral rules, and incentive programmes. Those differences create persistent but variable rate gaps.",
          },
          {
            q: "Is lending rate arbitrage risk-free?",
            a: "No. Rates are variable and can turn against you, collateral can fall toward liquidation, and protocols carry smart contract and governance risk. Position sizing, health-factor buffers, and exit planning are essential.",
          },
          {
            q: "What is recursive looping in lending arbitrage?",
            a: "Repeating the supply-borrow-supply cycle to multiply the spread. It magnifies returns and liquidation risk at the same time, and is only suitable for experienced traders with strict monitoring.",
          }
        ],
      },
  ],
};
