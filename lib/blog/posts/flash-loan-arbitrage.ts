import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "flash-loan-arbitrage",
  title: "Flash Loan Arbitrage Explained: How Atomic Crypto Trades Work",
  description: "Flash loan arbitrage lets traders borrow crypto with no collateral and repay in one block. Learn how atomic trades work, what they cost, and where they fail.",
  keywords: [
      "flash loan arbitrage",
      "flash loans crypto",
      "atomic arbitrage",
      "DeFi arbitrage",
      "flash loan risks",
      "un-collateralized loans"
  ],
  datePublished: "2026-10-14",
  dateModified: "2026-10-14",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Flash loans let traders borrow large sums with no collateral, as long as the loan is repaid inside a single blockchain transaction. Here is how atomic arbitrage works, what it costs, and why most attempts fail.",
  image: "/images/blog/flash-loan-arbitrage.svg",
  blocks: [
      { type: "p", text: "Flash loan arbitrage is one of the most distinctive strategies in decentralised finance. A flash loan lets a trader borrow a large amount of cryptocurrency with no collateral, no credit check, and no upfront capital — on one condition: the loan must be borrowed and repaid inside the same blockchain transaction. If any step fails, the whole transaction reverses, as if it never happened." },
      { type: "p", text: "The core idea is simple. Suppose the same token trades at slightly different prices on two decentralised exchanges. A trader borrows funds, buys the token where it is cheaper, sells it where it is dearer, repays the loan plus a small fee, and keeps the difference. All of that happens in one transaction. If the profit does not cover the loan and fees, the transaction reverts and the trader loses only the gas spent trying." },
      { type: "h2", text: "What Makes a Loan a Flash Loan" },
      { type: "p", text: "A normal DeFi loan requires collateral worth more than the amount borrowed. A flash loan requires none, because it never exists outside a single transaction. The lending protocol checks at the end of the transaction that the borrowed amount plus the fee has been returned. If the check fails, the protocol rolls back every step, including the original borrow. From the protocol's point of view, the loan was never made." },
      { type: "p", text: "This design is possible because blockchains execute transactions atomically: either every operation in the transaction succeeds, or none of them take effect. Flash loans exploit that property deliberately. Traders write smart contracts that encode the full sequence — borrow, swap, swap back, repay — and submit it as one transaction. The contract either completes profitably or reverts. There is no half-finished state in which the trader keeps the borrowed funds without repaying them." },
      { type: "p", text: "Flash loans are available on major lending protocols, typically denominated in stablecoins or large-cap assets with deep liquidity. The fee is usually a small fraction of the borrowed amount. That fee, plus network gas, is the main fixed cost. On busy networks, gas alone can erase the profit on smaller opportunities, which is why flash loan arbitrage concentrates where liquidity is deep and spreads cover costs." },
      { type: "h2", text: "How a Flash Loan Arbitrage Trade Works" },
      { type: "p", text: "A typical flash loan arbitrage follows a fixed sequence. First, the trader's contract borrows funds from a lending pool. Second, it uses those funds to buy an asset on the exchange where the price is lower. Third, it immediately sells that asset on the exchange where the price is higher. Fourth, it repays the loan plus the protocol fee. Whatever remains is profit. Every step is pre-programmed, and the contract checks the final balance before allowing the transaction to complete." },
      {
        type: "table",
        headers: ["Step", "What happens", "What can go wrong"],
        rows: [
          ["1. Borrow", "Contract borrows funds from a lending pool", "Pool liquidity is insufficient for the size needed"],
          ["2. Buy low", "Contract buys the asset on the cheaper venue", "Price moves or slippage eats the spread"],
          ["3. Sell high", "Contract sells on the dearer venue", "Shallow liquidity means the sale price drops"],
          ["4. Repay", "Contract repays loan plus fee, keeps the rest", "Profit below fees, so the transaction reverts"]
        ],
      },
      { type: "p", text: "The critical detail is that steps two and three depend on prices that exist only for a moment. Decentralised exchange prices move with every trade, and competing bots watch the same pools. By the time a transaction is confirmed, the gap may have closed. This is why flash loan arbitrage is dominated by automated systems that simulate transactions and only execute when the simulated profit clears a threshold after fees and gas." },
      { type: "p", text: "Traders who try this manually, or with slow tooling, usually find that the opportunity disappears before their transaction lands. Spreads in the most-watched pools are tiny because they are competed away within seconds. Larger spreads tend to appear in less liquid pools or during volatile moves — settings that bring higher slippage and execution risk." },
      { type: "h2", text: "Where Flash Loan Arbitrage Opportunities Appear" },
      { type: "p", text: "The most common setting is two decentralised exchanges on the same chain quoting different prices for the same pair. These gaps open when a large trade moves one pool's price, when new information hits the market, or when liquidity is unevenly distributed. As of October 14, 2026, Bitcoin trades near $83,300 and Ether above $2,500, with the Layer-2 sector up 2.90% on the day — conditions in which fast-moving tokens can briefly trade at different prices across venues. Gaps of that kind close quickly, but they illustrate why price monitoring has to be continuous rather than occasional." },
      { type: "p", text: "A third use is collateral swaps and debt refinancing: a trader uses a flash loan to repay one loan, move collateral, and open a cheaper loan elsewhere, all atomically. These are legitimate uses, but they require precise contract logic and careful testing." },
      { type: "p", text: "Cross-chain flash loan arbitrage is harder than it sounds. A single transaction cannot span two chains, so the atomic guarantee does not apply across a bridge. Traders who bridge assets mid-strategy take on bridge risk, confirmation delays, and price movement while funds are in transit — converting an atomic trade into a directional bet. Our guide to [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) covers the safer cross-venue patterns that do not depend on atomicity." },
      { type: "h2", text: "Costs, Risks, and Why Most Attempts Fail" },
      { type: "p", text: "Flash loans are not free money. The visible costs are the protocol fee and gas. The hidden costs are failed transactions, which still consume gas, and the time spent building a competitive bot. A strategy that looks profitable in a spreadsheet can lose money once failed attempts, gas spikes during volatility, and maximum extractable value (MEV) competition are included. MEV searchers can see pending transactions and may front-run or sandwich them, turning a profitable simulation into a loss." },
      { type: "p", text: "Smart contract risk is the other major danger. A bug in the arbitrage contract can lock funds, misroute a swap, or leave the transaction unable to repay. Because the contract handles large borrowed sums, even a small error is expensive. Test on testnets, simulate against current on-chain state, cap the borrowed size during early runs, and never deploy unaudited code with real funds. The same discipline applies to any automated strategy — see [arbitrage risk management](/blog/arbitrage-risk-management) for a broader checklist." },
      {
        type: "callout",
        title: "Reversion Is Not the Same as Safety",
        text: "A reverted flash loan transaction loses only gas, but a bug that lets a transaction complete with the wrong balances can lose far more. Atomicity protects the lender, not the trader. Audit your contract logic, simulate every path, and start small.",
        tone: "warning",
      },
      { type: "p", text: "There is also a common misconception that flash loans require no capital at all. The loan itself needs no collateral, but building the system — development, testing, gas for failed attempts, monitoring — costs real money. If someone promises easy flash loan profits with no experience and no capital, treat it as a red flag. Genuine edge comes from speed, accurate simulation, and disciplined cost control, not from the loan mechanism alone." },
      { type: "h2", text: "A Practical Starting Checklist" },
      {
        type: "list",
        items: [
        "Learn how automated market makers price swaps before writing any contract code.",
        "Simulate every trade against live pool state and require profit after fees and gas before submitting.",
        "Start with small borrow sizes and a single chain with deep liquidity.",
        "Monitor gas prices and skip opportunities that only work at unusually low gas.",
        "Log every attempt, including reverts, so you can measure true net profit.",
        "Keep your arbitrage capital in a wallet secured with verified hardware and tested backups."
        ],
      },
      { type: "p", text: "Flash loan arbitrage rewards preparation more than daring. The traders who last treat it as an engineering problem: find genuine price gaps, prove they survive fees and competition, and execute with contracts that fail safely. For a broader view of how arbitrage fits into a trading toolkit, compare the major approaches in our [best crypto arbitrage scanners](/best-crypto-arbitrage-scanners) overview, and study the mechanics in [how crypto arbitrage works](/blog/how-crypto-arbitrage-works). The loan is the easy part. The edge is everything around it." },
      {
        type: "faq",
        items: [
          {
            q: "Do flash loans require collateral?",
            a: "No. A flash loan requires no collateral because it must be repaid within the same transaction. If repayment fails, the whole transaction reverts and the loan is treated as never having happened.",
          },
          {
            q: "Can beginners profit from flash loan arbitrage?",
            a: "Rarely. Profitable flash loan arbitrage is dominated by automated bots competing on speed and simulation accuracy. Beginners should first learn AMM pricing, test on testnets, and understand gas and MEV costs before risking real funds.",
          },
          {
            q: "What happens if a flash loan arbitrage fails?",
            a: "The transaction reverts, so the borrow, swaps, and repayment are all undone. The trader loses only the gas spent on the failed transaction — unless a contract bug lets a bad transaction complete, which is why auditing and simulation matter.",
          },
          {
            q: "Are flash loans the same as regular DeFi loans?",
            a: "No. Regular DeFi loans are over-collateralized and last for days or months. Flash loans exist only inside one transaction and must be repaid before that transaction ends.",
          }
        ],
      },
  ],
};
