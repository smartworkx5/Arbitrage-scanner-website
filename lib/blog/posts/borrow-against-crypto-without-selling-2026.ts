import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "borrow-against-crypto-without-selling-2026",
  title: "Borrowing Against Crypto Without Selling: A Careful Walkthrough",
  description: "Borrowing Against Crypto without selling can unlock cash while you keep your coins. Learn loan-to-value choices, interest costs, tax angles and risks.",
  keywords: [
      "Borrowing Against Crypto",
      "crypto-backed loans",
      "loan-to-value crypto",
      "crypto loan interest",
      "borrow without selling crypto",
      "crypto loan tax"
  ],
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "A crypto-backed loan lets you access cash without selling your coins, but the trade is real: you pay interest, accept liquidation risk, and may face tax questions. This walkthrough covers loan-to-value, costs and the checks to make first.",
  image: "/images/blog/borrow-against-crypto-without-selling-2026.svg",
  blocks: [
      { type: "p", text: "Borrowing Against Crypto without selling is one of the most common reasons holders use lending platforms. You own Bitcoin or Ether, you believe in its long-term value, and you need cash now for a house deposit, a business expense, a tax bill or an emergency. Selling would lock in a taxable event and give up future upside. Borrowing against the coins instead gives you liquidity while keeping your position, but it replaces market risk with a different set: interest costs, liquidation risk and lender risk. As of 2 Nov 2026, with BTC around $78,400 and ETH near $2,280, many long-term holders are again weighing this choice, and the terms on offer deserve a slow, careful read." },
      { type: "p", text: "The mechanics are straightforward. You deposit crypto as collateral with a lender, centralised or decentralised, and receive a loan, usually in stablecoins or fiat, worth a fraction of your collateral value. That fraction is the loan-to-value ratio, or LTV. If you deposit $100,000 of BTC and borrow $40,000, your LTV is 40 percent. The lender sets a maximum LTV, often 50 to 70 percent, and a liquidation threshold, often 80 to 85 percent. If your collateral value falls so far that your LTV crosses that threshold, the lender sells some or all of your collateral to repay the loan. You keep the cash you borrowed, but you lose the coins, often at the worst possible moment." },
      { type: "h2", text: "Choosing Your Loan-to-Value Ratio" },
      { type: "p", text: "LTV is the single most important decision in a crypto-backed loan, and the right answer is almost always lower than the maximum on offer. A 70 percent LTV loan looks generous until you do the maths: a 20 percent fall in collateral value pushes your LTV above 87 percent, past most liquidation thresholds. A 30 percent LTV loan, by contrast, survives a 50 percent crash before hitting an 80 percent threshold. The buffer is the point. Crypto routinely falls 30 to 50 percent in weeks, and the borrowers who survive those falls are the ones who borrowed modestly, kept cash reserves to top up collateral, and set price alerts well above the liquidation level." },
      { type: "p", text: "Think of LTV as a dial between capital efficiency and safety. Low LTV means less cash now but a loan that survives volatility. High LTV means more cash now but a loan that demands constant attention and can liquidate during a weekend crash while you sleep. A practical rule: borrow only what you could repay from other income or savings within the loan term, even if the collateral vanished. If the loan only works when prices rise, it is not a liquidity tool, it is a leveraged bet, and it should be sized like one. For a comparison of how traders evaluate venues and spreads, see [cross-exchange arbitrage](/guides/cross-exchange-arbitrage), which shows the same discipline of checking costs before acting." },
      {
        type: "table",
        headers: ["Starting LTV", "Collateral fall to liquidation (80 percent threshold)", "Verdict"],
        rows: [
          ["25 percent", "About 69 percent fall", "Very safe, low cash unlocked"],
          ["40 percent", "About 50 percent fall", "Balanced for most borrowers"],
          ["50 percent", "About 38 percent fall", "Needs active monitoring"],
          ["65 percent", "About 19 percent fall", "High risk, thin buffer"],
          ["75 percent", "About 6 percent fall", "Liquidation on a normal bad week"]
        ],
      },
      { type: "h2", text: "Interest Costs and the True Price of the Loan" },
      { type: "p", text: "Interest is where crypto loans quietly get expensive. Rates vary widely by lender, collateral type, loan size and market conditions, and they can be fixed or variable. A variable rate that starts at 6 percent can rise to 15 percent in a stressed market, exactly when you least want higher costs. Some platforms charge origination fees, withdrawal fees or early repayment penalties, and stablecoin loans carry an additional risk: the stablecoin itself could depeg, leaving you repaying a loan denominated in something worth less, or more, than expected. Always calculate the total cost over the full loan term, including fees, and compare it with alternatives such as a conventional loan, a credit line or simply selling a smaller amount than you planned." },
      { type: "p", text: "Duration matters as much as rate. Open-ended loans with no fixed repayment date sound flexible, but they let interest compound indefinitely while your collateral sits at risk. A loan with a defined term forces a decision: repay, refinance or sell. Refinancing in a falling market is often impossible at good terms, so a short loan that must be repaid during a crash can force a sale anyway, defeating the original purpose. Match the loan term to a realistic repayment plan: a known bonus, a property sale, business income or staged savings. If no repayment source exists beyond hoping prices rise, the loan is speculation, not planning." },
      {
        type: "list",
        items: [
        "Set your LTV at least 20 points below the liquidation threshold, not at the maximum allowed.",
        "Keep a cash or stablecoin reserve ready to top up collateral during a sharp fall.",
        "Check whether the rate is fixed or variable, and what fees apply on top of interest.",
        "Confirm where your collateral is held, and what happens if the lender fails.",
        "Set price alerts at several levels above liquidation, not just at the threshold itself."
        ],
      },
      { type: "h2", text: "Tax Considerations You Should Not Guess At" },
      { type: "p", text: "Tax is a major reason people borrow instead of selling, but the rules are jurisdiction-specific and frequently misunderstood. In many countries, borrowing against crypto is not itself a taxable disposal, because you have not sold the asset, while selling would trigger capital gains tax. That distinction can make borrowing genuinely cheaper than selling for someone with large unrealised gains. But the details matter: interest may or may not be deductible, a liquidation counts as a disposal in many tax systems, and converting borrowed stablecoins to fiat or spending them can create separate tax events. Stablecoin-to-fiat conversions, in particular, are treated differently across jurisdictions." },
      { type: "p", text: "The safe approach is to get advice from a tax professional in your own country before taking a large loan, and to keep complete records: loan agreements, collateral deposits, interest payments, top-ups and any liquidation. Do not rely on a platform's marketing claim that its loans are tax-free, and do not assume another country's rules apply to you. For Pakistani readers, the USD/PKR interbank rate of 276.65/277.15 as of 2 Nov 2026 also affects the real cost of any dollar-denominated loan when repaid in rupees. Tax law in this area is still evolving, and an arrangement that looks efficient today can be recharacterised later, which is another reason to keep loan sizes modest and documentation thorough." },
      {
        type: "callout",
        title: "Risk warning",
        text: "A crypto-backed loan can liquidate your collateral during a market crash, leaving you with the borrowed cash but without your coins. Interest costs compound, rates can rise, and liquidation may trigger tax. Never borrow more than you could repay if your collateral lost most of its value.",
        tone: "warning",
      },
      { type: "h2", text: "A Careful Checklist Before You Borrow" },
      { type: "p", text: "Work through this sequence before committing. First, define the cash need precisely and check whether a smaller amount would do. Second, compare at least two lenders on LTV, rate type, fees, custody and liquidation mechanics, not just headline rate. Third, stress-test your loan: what happens at a 30 percent fall, a 50 percent fall, and a flash crash that recovers in hours? Fourth, set up monitoring and a top-up plan that does not depend on you watching charts around the clock. Fifth, confirm your repayment source and date, and write down what you will do if the plan fails. If any step has no good answer, reduce the loan or postpone it." },
      { type: "p", text: "Borrowing against crypto without selling is a legitimate tool when used with restraint. It preserves upside, can defer a taxable sale, and solves real cash-flow timing problems. It becomes dangerous when it is used to increase exposure, fund lifestyle spending with no repayment plan, or borrow at maximum LTV because the platform allows it. The platform's maximum is a risk limit for the lender, not a recommendation for you. For definitions of LTV, liquidation and collateral, the [glossary](/glossary) is a useful reference before you sign anything, and this article is educational only, not financial or tax advice." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain loan-to-value in simple words, work through example numbers for different LTV levels, and help you draft a checklist of questions to ask a lender. For this topic, it can compare borrowing versus selling for a hypothetical holder so you can see the trade-offs clearly before deciding. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Does borrowing against crypto trigger tax like selling does?",
            a: "In many jurisdictions, borrowing itself is not a disposal, while selling is. But liquidation usually counts as a disposal, and rules differ by country, so get local professional advice before a large loan.",
          },
          {
            q: "What LTV is safe for a crypto-backed loan?",
            a: "There is no universal safe level, but keeping LTV at least 20 points below the liquidation threshold gives a meaningful buffer. Lower LTV survives larger crashes; higher LTV needs constant monitoring.",
          },
          {
            q: "What happens if my collateral value crashes?",
            a: "If LTV crosses the liquidation threshold, the lender sells some or all of your collateral to repay the loan. You keep the borrowed cash but lose the coins, often at depressed prices.",
          },
          {
            q: "Is a crypto loan cheaper than selling?",
            a: "Sometimes, especially where selling triggers large capital gains tax. But interest, fees and liquidation risk can make borrowing more expensive overall, so compare total cost, not just the headline rate.",
          }
        ],
      },
  ],
};
