import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "first-arbitrage-trade",
  title: "Your First Arbitrage Trade: Walkthrough",
  description: "A step-by-step walkthrough of your first arbitrage trade, from spotting a spread to closing both legs, logging costs, and reviewing what actually happened.",
  keywords: [
      "first arbitrage trade",
      "arbitrage trade walkthrough",
      "how to do arbitrage trade",
      "cross-exchange arbitrage example",
      "beginner arbitrage execution"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 8,
  category: "Basics",
  excerpt: "Your first arbitrage trade should be small, slow, and fully logged. This walkthrough takes you through every step — before, during, and after — so the lesson survives even if the trade does not profit.",
  image: "/images/blog/first-arbitrage-trade.svg",
  blocks: [
      { type: "h2", text: "Before You Trade: The Pre-Flight Checklist" },
      { type: "p", text: "Your first arbitrage trade begins long before you click buy. Confirm that both exchange accounts are verified and that you have already tested a small deposit and withdrawal on each one. Confirm that withdrawal addresses are whitelisted and that two-factor authentication is enabled everywhere. Check that both venues are operating normally: deposits and withdrawals open, no maintenance announcements, no unusual delays. Then define the trade in advance: which asset, which route, how much capital, what spread you require after fees, and the conditions under which you will abort. A trade without a pre-defined abort rule is a trade you will hold too long." },
      { type: "p", text: "Sizing is the most important decision of your first trade. Use an amount small enough that losing all of it would be annoying, not painful. The purpose of a first trade is to learn the full execution chain, not to make money. You are buying information: how long the transfer really takes, how much slippage you really get, and whether your fee model matches reality. Treat the trade as tuition, and the lesson is worth more than the profit. For the broader starting roadmap, see [How to Start Crypto Arbitrage in 2026](/blog/start-crypto-arbitrage-2026)." },
      { type: "h2", text: "Step 1: Find and Verify a Real Spread" },
      { type: "p", text: "Suppose you notice Bitcoin quoted at $81,100 on Exchange A and $81,350 on Exchange B, a gap of about 0.31%. Before touching it, verify that the spread is real and tradeable. Check the order books, not just the last price: is there enough depth at or near those quotes to absorb your size, or would your own order move the price? Check the direction of the gap: spreads can invert within seconds, and a stale quote is not an opportunity. Then compute the full cost chain. If each exchange charges a 0.1% trading fee, the withdrawal costs $10, and the network fee is $5, a 0.31% spread on a $1,000 trade leaves roughly $3.10 minus $2.00 in trading fees minus $15 in transfer costs, which is a loss. This arithmetic kills most beginner spreads, and that is a good thing: it kills them on paper instead of in your account." },
      { type: "p", text: "If the numbers do not work, walk away. There will be another spread, and the discipline of rejecting unprofitable trades is the core skill of arbitrage. If the numbers do work, write them down: the two quotes, the expected fees, the expected net, and the time you observed them. That written plan is what you will compare reality against afterwards." },
      { type: "h2", text: "Step 2: Execute the First Leg" },
      { type: "p", text: "Execution order matters. In a cross-exchange trade, you normally buy first on the cheaper exchange, then transfer, then sell on the dearer one. Buy with a limit order where possible, so you control your entry price instead of accepting whatever the market gives you. Confirm the fill, and record the exact execution price, quantity, and fee. Then double-check the withdrawal details before sending anything: the destination address, the network, and any memo or tag the receiving exchange requires. A wrong network or a missing memo is the most common and most painful beginner error, and it can strand funds for days. Send a small test amount first if this route has never been used, then the remainder once the test lands." },
      {
        type: "callout",
        title: "Never skip the address check",
        text: "Copy-paste errors, wrong networks, and missing memos are the leading cause of lost first-time transfers. Verify the address, the network, and the memo against the receiving exchange's deposit page before every withdrawal.",
        tone: "warning",
      },
      { type: "h2", text: "Step 3: Wait, Monitor, and Sell the Second Leg" },
      { type: "p", text: "The waiting period is where first-time arbitrageurs lose their nerve. Your coins are in transit, the spread is moving, and there is nothing to do but watch. Resist the urge to improvise. Monitor the destination exchange for the deposit, monitor the spread, and remember your abort rule. If the spread collapses before your coins arrive, you have a decision to make: sell at the new, smaller spread and accept a small loss, hold the asset and accept market exposure you did not plan for, or send the coins back and pay another round of fees. None of these options is wrong in itself; the mistake is making the decision in a panic instead of from your plan. For most beginners, selling at the available price and logging the lesson is the right call." },
      { type: "p", text: "When the deposit confirms, sell with a limit order at or near the price your plan assumed. Record the fill exactly as you did for the first leg. Then compute the real result: sale proceeds minus purchase cost minus every fee on both legs minus transfer costs. Compare it with the expected net from your plan. The gap between expected and actual is your education: it is usually made of slippage, a slower transfer than assumed, or a fee you forgot. For execution risks in general, see [Execution Risk in Arbitrage](/blog/execution-risk-arbitrage) and [Cross-Exchange Hidden Risks](/blog/cross-exchange-hidden-risks)." },
      { type: "h2", text: "Step 4: Log Everything and Review Honestly" },
      {
        type: "list",
        items: [
        "Both fills: prices, quantities, fees, and timestamps.",
        "The transfer: transaction ID, network, send and arrival times.",
        "Expected net versus actual net, with the difference explained.",
        "What surprised you: slippage, delay, fee, or spread movement.",
        "One change you will make before the next trade."
        ],
      },
      { type: "p", text: "Review the trade within 24 hours while the details are fresh. Ask three questions. Did the trade make or lose money after all costs? Did I follow my plan, or did I improvise? What is the single biggest cost I can reduce next time? If the answer to the first question is a small loss, that is a normal outcome for a first trade, and it is far better than a lucky win that teaches nothing. A first trade that loses $5 but produces an accurate fee model and a tested route is a successful first trade. A first trade that wins $50 by luck and teaches nothing is a liability, because it encourages larger size before the process is sound." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can turn your trade plan into a printable pre-flight checklist and help you summarise your trade log into lessons for your next trade." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "How much should my first arbitrage trade be?",
            a: "Small enough that losing it all would be annoying, not painful. The first trade is for learning the execution chain — transfer times, slippage, and real fees — not for profit.",
          },
          {
            q: "Should I buy first or sell first in cross-exchange arbitrage?",
            a: "Usually you buy first on the cheaper exchange, transfer, then sell on the dearer one. The risk is that the spread closes during the transfer, so define your abort rule before you buy.",
          },
          {
            q: "What if the spread disappears while my coins are in transit?",
            a: "Follow your plan: usually sell at the available price and log the lesson, rather than holding unplanned market exposure or paying another round of transfer fees to reverse the trade.",
          },
          {
            q: "How do I know if my first trade was successful?",
            a: "Judge it by what you learned, not just profit. A small loss that produces an accurate fee model and a tested route is a successful first trade.",
          }
        ],
      },
  ],
};
