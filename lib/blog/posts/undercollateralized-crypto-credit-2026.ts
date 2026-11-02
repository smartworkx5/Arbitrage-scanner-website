import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "undercollateralized-crypto-credit-2026",
  title: "Undercollateralized Crypto Credit: Reputation, KYC and Real Risk",
  description: "Undercollateralized Crypto Credit lets vetted borrowers borrow without full collateral. Learn how reputation, KYC and default risk shape these loans in 2026.",
  keywords: [
      "Crypto Credit",
      "undercollateralized lending",
      "institutional crypto loans",
      "crypto credit risk",
      "DeFi credit scoring",
      "KYC crypto lending"
  ],
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "Some crypto lenders now extend credit without full collateral, relying on identity, reputation and legal agreements instead. This guide explains how these loans work, what their default record really looks like, and why the risk is very different from overcollateralized borrowing.",
  image: "/images/blog/undercollateralized-crypto-credit-2026.svg",
  blocks: [
      { type: "p", text: "Crypto Credit without full collateral sounds like a contradiction to anyone who learned crypto lending through overcollateralized loans, where a borrower locks up more value than they borrow. Undercollateralized credit flips that model: the lender extends funds based on who the borrower is, what their track record shows, and what legal agreements back the loan, rather than on crypto locked in a vault. The borrower may post some collateral, or none at all, and the lender accepts the gap because it has other ways to judge and enforce repayment. With BTC trading around $78,400 as of 2 Nov 2026, up about 1% in 24 hours, institutional credit desks are again active, but the memory of the 2022 lender failures still shapes every term sheet they write." },
      { type: "p", text: "The core idea is not new. Banks have lent on reputation and cash flow for centuries. What is new is doing it in crypto markets, where borrowers are often trading firms, market makers or funds that need working capital in stablecoins or major assets for hours or days, not years. A market maker that needs $10 million of USDT to balance inventory across exchanges does not want to lock $15 million of ETH to get it. If the lender knows the firm, has seen its trading history, and holds a signed loan agreement enforceable in a real court, the economics can work without full collateral. The lender earns interest, the borrower gets capital efficiency, and both sides accept counterparty risk that overcollateralized lending was designed to remove." },
      { type: "h2", text: "How Undercollateralized Lending Actually Works" },
      { type: "p", text: "Most undercollateralized crypto loans today are bilateral and off-chain, even when the funds move on-chain. A borrower goes through know-your-customer (KYC) and anti-money-laundering checks, shares financial statements or trading records, and negotiates a credit line with a set limit, interest rate, maturity and covenants. Some lenders use on-chain credit protocols that issue loans through smart contracts, but even there, a permissioned pool or a whitelisted borrower list usually sits behind the contract. The reputation element comes from payment history: a borrower that has repaid ten loans on time earns a larger line and a lower rate, much like a credit score, except the score is private to that lender or shared within a small network." },
      { type: "p", text: "Collateral is rarely zero in practice. Partial collateral is common: a borrower might post 30 to 50 percent of the loan value, with the rest unsecured. Other structures use first-loss capital, where the lender or a junior tranche absorbs initial losses, or insurance-style reserves funded by protocol fees. Some arrangements rely on off-chain recourse, meaning the lender can pursue the borrower in court or seize other assets if the loan defaults. That legal enforceability is the real backstop in most institutional deals, and it is also the reason these loans are mostly unavailable to anonymous retail borrowers. Without identity, there is no recourse, and without recourse, unsecured lending is just a gift." },
      {
        type: "table",
        headers: ["Feature", "Overcollateralized loan", "Undercollateralized loan"],
        rows: [
          ["Collateral required", "120 to 200 percent of loan", "Zero to 50 percent of loan"],
          ["Borrower check", "None, wallet is enough", "KYC, financials, track record"],
          ["Liquidation", "Automatic, on-chain", "Negotiated or legal enforcement"],
          ["Main risk", "Price crash, oracle failure", "Borrower default, fraud"],
          ["Typical borrower", "Any wallet holder", "Institutions, known firms"]
        ],
      },
      { type: "h2", text: "The Default Record: What 2022 Taught the Market" },
      { type: "p", text: "The default record of undercollateralized crypto credit is dominated by one brutal chapter. In 2022, several large lenders collapsed after extending huge unsecured or lightly secured loans to a small number of borrowers, most famously the hedge fund Three Arrows Capital. When that fund failed, lenders discovered that their loans were correlated: many had lent to the same borrower, against the same strategies, with little independent verification of the borrower's true exposure. Losses ran into billions of dollars, and the failures cascaded because lenders themselves had borrowed from each other. The lesson was not that unsecured lending is impossible, but that concentration, weak diligence and poor disclosure turn manageable credit risk into systemic collapse." },
      { type: "p", text: "Survivors changed their practices in visible ways. Credit limits per borrower are now smaller relative to lender capital, and lenders ask harder questions about a borrower's other debts. Proof-of-reserves and proof-of-liabilities reporting, while still imperfect, are now expected from serious lenders. Some lenders moved to bankruptcy-remote structures, where loan assets sit in a separate legal entity so that a lender's own failure does not automatically swallow client funds. Others shifted toward shorter maturities, often days or weeks rather than months, so exposure can be cut quickly if a borrower's condition worsens. None of this eliminates default risk, but it changes the shape of it from sudden, total loss to earlier, smaller, more manageable problems." },
      {
        type: "list",
        items: [
        "Concentration kills: lending most of a book to one borrower or one strategy is the fastest route to failure.",
        "Verify independently: a borrower's own claims about its positions are not diligence.",
        "Short maturities help: a 7-day loan can be refused at renewal; a 12-month loan cannot.",
        "Legal recourse matters: a signed agreement in a real jurisdiction is worth more than a handshake on-chain.",
        "Transparency protects lenders: borrowers that hide liabilities usually have a reason."
        ],
      },
      { type: "h2", text: "Reputation Systems and Their Limits" },
      { type: "p", text: "On-chain reputation scoring is the most ambitious attempt to bring undercollateralized credit to a wider audience. These systems track a wallet's repayment history, transaction behaviour and asset holdings, then assign a score that a protocol uses to set loan terms. The appeal is obvious: a good borrower should not need to overcollateralize forever. The limits are equally clear. Wallets are cheap to create, so a borrower can build a clean history on one wallet while hiding bad debts on another. Scores can be gamed by wash activity, and a score says nothing about off-chain debts, which is where the largest defaults have actually happened. For now, on-chain reputation works best as a supplement to identity-based underwriting, not a replacement for it." },
      { type: "p", text: "KYC is therefore central to serious undercollateralized lending, and it creates its own tension. Crypto's original promise was permissionless access, but unsecured credit without identity has no enforcement mechanism. Lenders that serve institutions accept this trade-off openly: they are running a credit business that happens to settle in crypto, not a permissionless protocol. Retail-facing experiments with smaller unsecured lines exist, but they typically cap amounts tightly, charge high rates to cover expected losses, and still require some form of identity verification. Anyone offered a large unsecured crypto loan with no questions asked should treat it as a red flag, not an opportunity." },
      {
        type: "callout",
        title: "Risk warning",
        text: "Undercollateralized lending carries real default risk for lenders and, for borrowers, legal and reputational consequences if repayment fails. Never lend funds you cannot afford to lose to an unsecured borrower, and never borrow against a promise you cannot keep. This article is educational, not financial advice.",
        tone: "warning",
      },
      { type: "h2", text: "What to Check Before Lending or Borrowing" },
      { type: "p", text: "If you are considering this market from either side, diligence is the whole game. A lender should ask for audited or at least reviewed financials, a full list of the borrower's other credit lines, and clarity on what the borrowed funds will be used for. Loans funding directional trading are riskier than loans funding market making with hedged inventory. A borrower should check the lender's own health: does it publish reserves, is it regulated or audited, and what happens to your collateral and your agreement if the lender fails? The 2022 collapses hurt borrowers too, when lenders froze withdrawals or went bankrupt mid-loan. Reading the loan agreement matters more than reading the marketing page, and the interest rate is only one term among many." },
      { type: "p", text: "Market context also matters. As of 2 Nov 2026, gold spot is around $3,900 per ounce after rebounding from a one-year low near $3,876 on 31 Oct, and the crypto Fear and Greed Index sits at 37, a cautious reading that reflects the recent exchange security scare. In cautious markets, credit tightens: lenders shorten maturities, cut limits and raise rates. Borrowers who plan for that tightening, by keeping maturities staggered and maintaining relationships with more than one lender, are less likely to face a sudden funding gap. For a broader view of how price gaps between venues create opportunity and risk, see [cross-exchange arbitrage](/guides/cross-exchange-arbitrage), and for key terms, the [glossary](/glossary) explains collateral, liquidation and counterparty risk in plain language." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain lending concepts in simple words, compare loan structures side by side, and help you draft a checklist of questions to ask a lender before signing anything. For this topic, it can walk through an example loan-to-value calculation or summarize the key terms in a credit agreement so you know what to look for. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What does undercollateralized mean in crypto lending?",
            a: "It means the borrower posts less collateral than the loan value, or none at all. The lender relies on identity, reputation, legal agreements and the borrower's track record instead of locked crypto.",
          },
          {
            q: "Why did so many crypto lenders fail in 2022?",
            a: "Several lent huge unsecured sums to a small number of borrowers with correlated strategies and weak independent verification. When one major borrower defaulted, losses cascaded across lenders that had lent to each other.",
          },
          {
            q: "Can retail users get undercollateralized crypto loans?",
            a: "Rarely at meaningful size. Most serious undercollateralized lending is institutional and requires KYC, financial disclosure and a signed agreement. Small retail experiments exist but cap amounts and charge high rates.",
          },
          {
            q: "Is undercollateralized lending safe for lenders?",
            a: "No lending is safe, but risk can be managed with diversification, short maturities, independent diligence and legal recourse. Lenders should only commit capital they can afford to lose in a default scenario.",
          }
        ],
      },
  ],
};
