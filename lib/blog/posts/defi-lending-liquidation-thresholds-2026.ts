import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "defi-lending-liquidation-thresholds-2026",
  title: "Liquidation Thresholds and Health Factors in DeFi Lending",
  description: "Liquidation thresholds decide when a DeFi loan gets force-sold. Learn health factors, how close your loan sits to liquidation, and which price move triggers it.",
  keywords: [
      "Liquidation Thresholds",
      "DeFi health factor explained",
      "lending liquidation price",
      "collateral liquidation risk",
      "DeFi loan safety buffer",
      "borrow position health"
  ],
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readingMinutes: 10,
  category: "Risk",
  excerpt: "Every DeFi loan has a tripwire: the price at which collateral gets sold automatically. This guide shows how to read your health factor and calculate the exact move that triggers liquidation.",
  image: "/images/blog/defi-lending-liquidation-thresholds-2026.svg",
  blocks: [
      { type: "p", text: "Liquidation Thresholds are the tripwires built into every DeFi loan, and understanding them is the difference between borrowing confidently and waking up to a forced sale. Data as of 2 Nov 2026, BTC traded at about $78,400, up about 1% in 24 hours, and ETH traded near $2,280, up about 1%, a calm-looking tape that can still hide sharp intraday drops capable of liquidating thinly collateralised loans. When you deposit collateral and borrow against it, the protocol does not trust you to repay; it watches a number called the health factor, and if that number falls below 1, anyone can repay part of your loan and claim your collateral at a discount. There is no phone call, no grace period, and no negotiation. The sale happens automatically, in code, at whatever price the market offers." },
      { type: "p", text: "The mechanics are straightforward once the three key numbers are clear. The loan-to-value ratio measures how much you borrowed against your collateral. The liquidation threshold is the maximum loan-to-value the protocol tolerates for your collateral asset, typically 75% to 85% depending on the asset's volatility. The health factor combines these: roughly, it is your collateral value multiplied by the liquidation threshold, divided by your borrowed value. Above 1, you are safe; at 1, you are on the edge; below 1, you are liquidatable. A health factor of 1.5 means your collateral could fall by about a third before liquidation, while a health factor of 1.05 means a mere 5% dip could trigger a sale. That single number deserves more attention than almost anything else in a borrower's dashboard." },
      { type: "h2", text: "Calculating the exact price that liquidates you" },
      { type: "p", text: "The most useful exercise a borrower can do is to calculate the liquidation price before borrowing, not after. Suppose you deposit $10,000 of ETH and borrow $6,000 of stablecoins, with a liquidation threshold of 80% for ETH. Liquidation occurs when the borrowed amount equals 80% of the collateral value, so the critical collateral value is $6,000 divided by 0.80, which is $7,500. If ETH falls 25% from your deposit price, your collateral is worth $7,500 and you hit the tripwire. That 25% cushion sounds comfortable until you remember that ETH has fallen 25% in days, and sometimes in hours, during stress episodes. Borrowers who never do this arithmetic are effectively driving without knowing where the cliff edge sits." },
      { type: "p", text: "Two complications make the real picture slightly worse than the simple calculation. First, liquidation usually does not take the whole loan at once; liquidators typically repay up to half the debt and take a corresponding slice of collateral plus a bonus, often 5% to 10%, which is an extra loss on top of the price fall. Second, the price the protocol uses comes from an oracle feed, which can lag or deviate during extreme volatility, so liquidation can trigger at a moment that feels unfair relative to the price you see on an exchange. Both points argue for a wide safety margin. A common rule among careful borrowers is to keep the health factor above 2 for volatile collateral, meaning the collateral could halve before liquidation, and to treat anything below 1.3 as an urgent warning to repay or add collateral." },
      { type: "h2", text: "What actually happens during a liquidation" },
      { type: "p", text: "When a health factor drops below 1, the position becomes open to liquidators, who are usually bots scanning for exactly this opportunity. A liquidator repays part of your debt, often up to 50%, and receives your collateral at a discount to the market price, pocketing the liquidation bonus as profit. You lose collateral worth more than the debt repaid, your loan shrinks, and your health factor usually rises back above 1, so the position survives in a smaller, poorer form. But if prices keep falling, the position can be liquidated repeatedly, with each round taking another discounted slice, until little collateral remains. This is why liquidation is not a single event but a process that can grind a position down during a crash." },
      { type: "p", text: "Gas costs and network congestion add a further twist. During a crash, liquidators compete to execute first, and transactions can fail or be delayed, which sometimes gives borrowers a brief window to save a position by adding collateral. More often, congestion means liquidations execute at worse prices than expected, increasing losses. Borrowers should also know that repaying a loan or adding collateral during a crash can itself be expensive and slow, which is why the time to build a buffer is before the crash, not during it. Data as of 2 Nov 2026, Binance reported about 95% of roughly $6.3bn in stolen tokens covered, with $3.64bn in net outflows in the first 9.5 hours after withdrawals resumed on 1 Nov, a reminder that exchange stress and market stress often coincide, when saving a position is hardest." },
      {
        type: "list",
        items: [
        "Health factor above 1 means safe; below 1 means liquidatable, with no grace period.",
        "Liquidation price equals borrowed value divided by the liquidation threshold, in collateral terms.",
        "Liquidators typically repay up to half the debt and take collateral plus a bonus of 5 to 10%.",
        "Repeated liquidations can grind a position down if prices keep falling.",
        "Oracle prices can lag during volatility, so liquidation may trigger at surprising moments."
        ],
      },
      { type: "h2", text: "Choosing a safe health factor for your collateral" },
      { type: "p", text: "The right health factor depends on the collateral's volatility and on how quickly you can react. For relatively stable collateral, a health factor of 1.5 may be reasonable; for volatile altcoins, even 2.5 can be thin, because a 60% crash is not unheard of. Borrowers should also consider correlation: if you borrow stablecoins against ETH and the whole market crashes together, there is no diversification to save you, since the collateral and the broader market fall at once. Borrowing a volatile asset against volatile collateral is doubly risky, because both sides of the position can move against you simultaneously. The safest structures pair volatile collateral with stablecoin debt, keep loan-to-value modest, and leave room for the worst week, not the average week." },
      { type: "p", text: "Practical habits make the difference. Check your health factor daily when markets are calm and hourly when they are stressed. Set alerts at 1.5 and again at 1.2, and decide in advance what action each alert triggers: repay a fixed amount, or add a fixed amount of collateral. Keep spare collateral or stablecoins outside the position, ready to deploy, rather than locked in another risky strategy. And never borrow the maximum the protocol allows simply because it allows it; maximum borrowing is maximum fragility, and protocols set limits for their own safety, not yours. Definitions of loan-to-value and related terms can be confirmed in the [glossary](/glossary) before you size any loan." },
      {
        type: "table",
        headers: ["Health factor", "Collateral fall to liquidation", "Status", "Action"],
        rows: [
          ["Above 2.0", "More than 50%", "Comfortable", "Monitor normally"],
          ["1.5", "About 33%", "Healthy", "Keep buffer ready"],
          ["1.2", "About 17%", "Warning", "Plan repayment or top-up"],
          ["1.05", "About 5%", "Critical", "Act immediately"],
          ["Below 1.0", "Already triggered", "Liquidatable", "Liquidators can act now"]
        ],
      },
      { type: "h2", text: "Common mistakes that cause avoidable liquidations" },
      { type: "p", text: "The most common mistake is borrowing against collateral whose price the borrower never stress-tests. A borrower who deposits a token at its all-time high and borrows 70% against it has almost no cushion if the token retraces, which new tokens frequently do. Another mistake is recursive leverage, covered in detail elsewhere in this series, where borrowed funds are redeposited as collateral, multiplying exposure and shrinking the effective safety margin with each loop. A third mistake is ignoring the borrow rate: a loan that is safe today can become unsafe if rates spike and the debt grows faster than expected, especially for long-held positions. Each mistake shares a root cause, which is treating the health factor as a static number rather than a live gauge that moves with prices, rates, and other users." },
      { type: "p", text: "The final mistake is psychological: refusing to repay a losing loan out of hope that prices recover. Hope is not a risk strategy, and protocols do not wait for hope. Partial repayment is almost always better than full liquidation, because it preserves collateral, avoids the liquidation bonus, and keeps the position alive for a genuine recovery. Traders who set mechanical rules, such as repaying 25% of the debt whenever the health factor hits 1.3, survive crashes that wipe out discretionary borrowers. The [guides on cross-exchange arbitrage](/guides/cross-exchange-arbitrage) illustrate the same principle of mechanical, pre-committed exits applied to a different market. In lending, as in trading, the plan you make in calm weather is what saves you in the storm." },
      {
        type: "callout",
        title: "Risk warning",
        text: "DeFi liquidations are automatic and irreversible, and you can lose collateral worth more than the debt repaid because of liquidation bonuses. Never borrow so much that a normal market drop triggers liquidation, and always keep a repayment reserve outside the position.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, built to explain ideas in plain language and help you think through questions step by step. For this topic, you can ask Muse AI to walk through a health factor calculation with your own example numbers, so you can see the exact price that would liquidate a loan. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is a health factor in DeFi lending?",
            a: "The health factor measures how safe a loan is. Roughly, it is collateral value multiplied by the liquidation threshold, divided by borrowed value. Above 1 is safe, at 1 is on the edge, and below 1 means the position can be liquidated by anyone.",
          },
          {
            q: "How do I calculate my liquidation price?",
            a: "Divide your borrowed value by the liquidation threshold to get the critical collateral value, then convert that into a price for your collateral asset. For example, borrowing $6,000 against ETH with an 80% threshold means liquidation when the collateral falls to $7,500 in value.",
          },
          {
            q: "Do I lose everything when liquidated?",
            a: "Usually not all at once. Liquidators typically repay up to half the debt and take collateral plus a bonus, so the position shrinks and the health factor recovers. But repeated liquidations during a continued crash can grind the position down substantially.",
          },
          {
            q: "What health factor should I maintain?",
            a: "It depends on collateral volatility, but careful borrowers often keep above 2 for volatile assets, meaning collateral could halve before liquidation. Treat 1.3 as a warning level and 1.05 as critical, and decide your repayment actions in advance.",
          }
        ],
      },
  ],
};
