import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "fifo-lifo-crypto-gains-method-2026",
  title: "FIFO vs LIFO for Crypto Gains: How the Method Changes Your Tax Bill",
  description: "FIFO vs LIFO for crypto gains, worked step by step: how each cost-basis method changes taxable profit on the same trades, and why your local rules decide.",
  keywords: [
      "FIFO vs LIFO",
      "crypto cost basis methods",
      "FIFO crypto gains",
      "LIFO crypto gains",
      "crypto tax calculation",
      "cost basis comparison"
  ],
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Sell the same coins under FIFO and LIFO and you can get two very different tax bills. This worked comparison shows exactly why the method matters, and why the choice is often not yours to make freely.",
  image: "/images/blog/fifo-lifo-crypto-gains-method-2026.svg",
  blocks: [
      { type: "p", text: "On Wednesday 4 November 2026, with BTC near $76,700 and ETH near $2,270 after a volatile week for risk assets, FIFO vs LIFO is more than an accounting curiosity for anyone who bought the same asset at very different prices. Both methods answer one question: when you sell part of a holding, which purchase does the sale draw from, and therefore what cost basis offsets the proceeds? In a rising market, FIFO, which sells the oldest coins first, usually produces larger gains because early purchases were cheaper, while LIFO, which sells the newest coins first, usually produces smaller gains. The difference can be thousands of dollars on a single sale, which is why understanding the mechanics matters even before any tax return is prepared. Key terms are defined in the [glossary](/glossary), and the [best scanners](/best-crypto-arbitrage-scanners) page illustrates why comparing methods before acting beats assuming one answer fits all." },
      { type: "h2", text: "FIFO and LIFO in Plain Language" },
      { type: "p", text: "FIFO stands for first in, first out: the earliest purchases are treated as sold first, so the cost basis of a sale comes from your oldest lots. LIFO stands for last in, first out: the most recent purchases are treated as sold first, so the cost basis comes from your newest lots. Imagine buying one coin at $1,000, another at $2,000, and a third at $3,000, then selling one coin at $3,500. Under FIFO the gain is $2,500, because the $1,000 lot is sold, while under LIFO the gain is $500, because the $3,000 lot is sold. The proceeds are identical; only the cost basis, and therefore the taxable gain, changes. That single mechanical difference drives the whole debate." },
      { type: "h2", text: "A Worked Comparison on the Same Trades" },
      { type: "p", text: "Consider a trader who buys 2 ETH at $1,500, then 2 ETH at $2,500, and later sells 2 ETH at $2,800, ignoring fees for clarity. Under FIFO, the sale draws the $1,500 lots, giving proceeds of $5,600 against cost of $3,000, a gain of $2,600. Under LIFO, the sale draws the $2,500 lots, giving proceeds of $5,600 against cost of $5,000, a gain of only $600. In a falling market the pattern reverses: FIFO would then draw cheaper or more expensive lots depending on history, which is why no method is universally better. Fees, partial lots, and multiple venues complicate real calculations, but the principle holds: the method selects the cost basis, and the cost basis decides the gain. The [cross-exchange guide](/guides/cross-exchange-arbitrage) similarly shows how venue and timing change outcomes on otherwise identical trades." },
      {
        type: "table",
        headers: ["Scenario", "FIFO gain", "LIFO gain", "Why it differs"],
        rows: [
          ["Buy $1,000, $2,000, $3,000; sell one at $3,500", "$2,500", "$500", "FIFO sells cheapest old lot"],
          ["Buy 2 ETH at $1,500 then $2,500; sell 2 at $2,800", "$2,600", "$600", "LIFO uses recent higher cost"],
          ["Falling market, early buys expensive", "Smaller or loss", "Larger gain", "Old expensive lots sold first"],
          ["Flat market, similar prices", "Nearly equal", "Nearly equal", "Lot costs barely differ"]
        ],
      },
      { type: "h2", text: "Why the Choice Is Often Not Free" },
      { type: "p", text: "Many traders assume they can simply pick whichever method gives the lower bill each year, but most jurisdictions restrict that freedom. Some require FIFO as the default, some permit specific identification of lots if records are precise enough, and some prohibit switching methods year to year without approval. Consistency matters enormously: changing methods mid-stream without permission can invalidate prior returns and create mismatched lot histories that are painful to unwind. Wallet-by-wallet versus global treatment also varies, since some rules apply per wallet while others aggregate all holdings. The practical lesson is to determine your jurisdiction's permitted method before your first sale, keep lot-level records from day one, and never assume a method used by a trader elsewhere applies to you." },
      {
        type: "list",
        items: [
        "Confirm which methods your jurisdiction permits before selling, not after.",
        "Keep lot-level records: date, amount, price, and venue for every purchase.",
        "Apply the chosen method consistently across years unless a change is formally allowed.",
        "Check whether rules apply per wallet or across all holdings combined.",
        "Ask a qualified professional before switching methods or using specific identification."
        ],
      },
      { type: "h2", text: "Record-Keeping That Makes Either Method Possible" },
      { type: "p", text: "Whichever method applies, it only works if lot records are complete. Every purchase must be stored as a distinct lot with its date, quantity, price, fees, and venue, and every sale must be matched against lots in the correct order with the remaining balances updated. Transfers between your own wallets should not consume lots, but they must be recorded so lots are not accidentally double-counted or lost. Dedicated accounting software can automate lot matching, yet it still depends on complete imports, so missing exchange data will corrupt FIFO and LIFO alike. A quarterly lot review, comparing software balances with exchange balances, catches import gaps while they are still fixable." },
      { type: "h2", text: "General Principles Only, Not Tax Advice" },
      { type: "p", text: "This article describes general principles of cost-basis methods only and is not tax advice. Tax treatment of crypto disposals, lot methods, holding periods, and loss rules varies by jurisdiction and changes over time, so the worked examples above are illustrations, not calculations for any real return. A qualified tax professional in your jurisdiction can confirm which method applies, whether specific identification is available, and how your records should be presented. Bring them lot-level data rather than annual totals, because method questions are answered at the lot level, and a summary cannot support a method choice that an authority might later question." },
      {
        type: "callout",
        title: "Warning: do not switch methods casually",
        text: "Switching between FIFO and LIFO year to year, or applying different methods to different wallets without permission, can invalidate prior filings and create costly mismatches. Confirm the permitted method first.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain FIFO and LIFO in simple words and help you draft questions to ask a tax professional about cost-basis methods. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is the core difference between FIFO and LIFO?",
            a: "FIFO treats the oldest purchases as sold first, while LIFO treats the newest purchases as sold first. The sale proceeds are the same, but the cost basis, and therefore the taxable gain, differs.",
          },
          {
            q: "Is LIFO always better in a rising market?",
            a: "Usually LIFO produces smaller gains in a rising market because recent purchases cost more, but the pattern reverses in falling markets, and neither method is universally better.",
          },
          {
            q: "Can I choose FIFO one year and LIFO the next?",
            a: "Often no. Many jurisdictions require a consistent method or formal approval to change, so switching casually can create filing problems.",
          },
          {
            q: "What records do I need for lot-based methods?",
            a: "Every purchase as a distinct lot with date, quantity, price, fees, and venue, plus every sale matched against lots in the correct order with balances updated.",
          }
        ],
      },
  ],
};
