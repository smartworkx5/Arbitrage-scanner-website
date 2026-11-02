import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "using-tokenized-treasuries-defi-collateral-2026",
  title: "Using Tokenized Treasuries as DeFi Collateral: Benefits and Haircuts",
  description: "Tokenized treasuries can back DeFi loans, but haircuts, oracles and liquidations decide how much you can safely borrow against them without taking excess risk.",
  keywords: [
      "Tokenized Treasuries",
      "DeFi collateral",
      "treasury token loans",
      "LTV haircuts",
      "oracle pricing",
      "RWA DeFi"
  ],
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readingMinutes: 8,
  category: "Strategies",
  excerpt: "Tokenized treasuries bring a familiar, income-paying asset into DeFi lending. The benefits are real, but so are the haircuts and liquidation risks.",
  image: "/images/blog/using-tokenized-treasuries-defi-collateral-2026.svg",
  blocks: [
      { type: "p", text: "Tokenized Treasuries are among the most popular real-world assets in decentralised finance, because they combine government-bill backing with blockchain settlement. A holder can deposit them into a lending protocol, borrow a stablecoin against them, and keep earning bill interest while using the borrowed funds elsewhere. as of 2 Nov 2026, Bitcoin traded near $78,400, up about 1% in 24 hours, while Ether traded near $2,280, also up about 1%, gold spot traded near $3,900 an ounce after rebounding from a one-year low near $3,876 on 31 October, and the Fear and Greed Index stood at 37. That combination of income and liquidity explains their appeal, but it also creates risks that cash-only collateral does not carry." },
      { type: "p", text: "The key question is not whether treasury tokens can serve as collateral, but on what terms. Lending protocols apply haircuts that limit borrowing, rely on oracles for prices, and liquidate positions when values fall or risk parameters change. Understanding those mechanics before depositing is the difference between a useful liquidity tool and a forced sale at the worst moment. The [glossary](/glossary) defines loan-to-value and liquidation, and the [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) shows how price gaps across venues complicate oracle pricing." },
      { type: "h2", text: "Why protocols want treasury collateral" },
      { type: "p", text: "Treasury tokens appeal to lending protocols because their underlying assets are liquid, highly rated, and short-dated, which usually means stable prices. Compared with volatile crypto collateral, a treasury token's value moves slowly, so protocols can offer higher loan-to-value ratios with less liquidation risk. Holders also benefit: they earn bill interest on the collateral while borrowing, which partly offsets the interest they pay on the loan, a combination sometimes called a carry trade." },
      { type: "p", text: "There is a second benefit: diversification of protocol collateral. A lending market backed only by volatile tokens faces correlated liquidations during a crypto crash, when many positions fail at once. Treasury tokens, whose value depends on interest rates rather than crypto sentiment, can reduce that correlation. That stability is relative, not absolute, and it depends on the token actually tracking its underlying bills, which is why protocols usually admit only well-established treasury tokens with regular audits." },
      { type: "h2", text: "Haircuts and loan-to-value limits" },
      { type: "p", text: "A haircut is the discount a protocol applies to collateral value when deciding how much you can borrow. If a treasury token is worth $10,000 and the protocol applies a 10 percent haircut, it treats the collateral as worth $9,000 for borrowing purposes, and the maximum loan is a fraction of that. Haircuts exist because prices move, redemptions can freeze, and liquidators need a margin to sell collateral without loss. Protocols set haircuts by asset volatility, liquidity, and confidence in the token's backing." },
      { type: "p", text: "Borrowers should leave a wide buffer below the maximum. Borrowing at the maximum loan-to-value leaves no room for a price dip, an interest-rate move, or a protocol parameter change, any of which can trigger liquidation. A prudent approach borrows well under half the allowed maximum, monitors the position daily, and keeps extra collateral or repayment funds ready. Remember that interest accrues on the loan while the collateral earns its own yield, so the net position changes every day even when prices stand still." },
      {
        type: "list",
        items: [
        "Token issuer, backing, and audit history",
        "Haircut, liquidation threshold, and penalty",
        "Oracle source and update frequency",
        "Supply caps and withdrawal pauses",
        "Separate repayment reserve"
        ],
      },
      { type: "h2", text: "Oracle pricing and liquidation behaviour" },
      { type: "p", text: "Lending protocols do not know what a treasury token is worth unless an oracle tells them. Oracles may report the token's market price, its net asset value, or a combination, and each choice behaves differently in stress. Market-price oracles can be distorted by thin trading or a panic sale, while net-asset-value oracles update slowly and may not reflect a broken redemption. Either failure can cause wrongful liquidations or, worse, under-collateralised loans that leave the protocol with bad debt." },
      { type: "p", text: "Liquidation itself is rarely gentle. When a position breaches its threshold, liquidators repay part of the loan and seize collateral at a discount, and the borrower pays a penalty on top of any price loss. During network congestion, liquidation transactions can be delayed or expensive, and the borrower may be unable to top up collateral in time. Before depositing, check which oracle the protocol uses, how often it updates, what liquidation penalty applies, and whether the protocol has ever paused liquidations or redemptions during stress." },
      {
        type: "table",
        headers: ["Parameter", "Conservative approach", "Aggressive approach"],
        rows: [
          ["Borrowing vs maximum", "Under 50 percent", "Near maximum"],
          ["Buffer to liquidation", "Large", "Thin"],
          ["Collateral concentration", "Diversified", "Single token"],
          ["Monitoring", "Daily", "Occasional"],
          ["Repayment reserve", "Held separately", "None"]
        ],
      },
      { type: "h2", text: "Practical checklist before depositing" },
      { type: "p", text: "Start by verifying the token: its issuer, backing, audit history, and redemption terms, because a lending protocol's acceptance is not a guarantee of the token's quality. Then read the protocol's risk parameters for that specific collateral, including the haircut, liquidation threshold, penalty, and any supply cap. Supply caps matter, because a protocol may stop accepting a token once its exposure limit is reached, leaving you unable to add collateral when you most need to." },
      { type: "p", text: "Finally, plan for the scenario where redemption freezes. If the token issuer pauses redemptions or the protocol pauses withdrawals, your collateral may be locked while your loan keeps accruing interest. Keep a separate reserve of stablecoins or liquid assets for repayment, avoid using borrowed funds for illiquid investments, and test the full cycle, deposit, borrow, repay, withdraw, with a small amount before committing serious capital." },
      {
        type: "callout",
        title: "Risk note",
        text: "Liquidation can happen quickly and at a loss, even for treasury-backed collateral, if oracle prices move, parameters change, or redemptions freeze. Never borrow the maximum, and never assume stable collateral cannot be liquidated.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain loan-to-value haircuts and liquidation in simple words and help you draft a checklist for using a treasury token as collateral. It can also summarise a lending protocol's risk parameters into plain language." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is a haircut in DeFi lending?",
            a: "A haircut is the discount applied to collateral value when calculating borrowing power. A 10 percent haircut means $10,000 of collateral counts as $9,000 for loan purposes.",
          },
          {
            q: "Why can a stable treasury token be liquidated?",
            a: "Liquidation follows price moves, oracle updates, or parameter changes, not just big crashes. Thin trading, redemption freezes, or a raised haircut can all push a position over its threshold.",
          },
          {
            q: "Do I keep earning interest while borrowing?",
            a: "Usually yes, the collateral keeps earning bill interest, but you also pay interest on the loan. The net result depends on both rates and on fees, so calculate it before borrowing.",
          },
          {
            q: "What should I do before depositing?",
            a: "Verify the token's backing and redemption terms, read the protocol's haircut and liquidation rules, and test deposit, borrow, repay, and withdraw with a small amount first.",
          }
        ],
      },
  ],
};
