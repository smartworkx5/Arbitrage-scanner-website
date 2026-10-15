import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "record-keeping-traders",
  title: "Record Keeping for Crypto Traders",
  description: "Good records are a trader's best defence: tax, compliance, and profit analysis all depend on them. Here is a simple record-keeping system for crypto traders.",
  keywords: [
      "record keeping crypto traders",
      "crypto trading records",
      "crypto trade log template",
      "crypto tax records",
      "trading journal crypto"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 8,
  category: "Basics",
  excerpt: "Your memory will not survive a tax audit or a compliance review. A simple, consistent record-keeping system will. Here is what to track, how to store it, and how often to reconcile.",
  image: "/images/blog/record-keeping-traders.svg",
  blocks: [
      { type: "h2", text: "Why Records Matter More Than You Think" },
      { type: "p", text: "Record keeping feels like paperwork, but for a crypto trader it is closer to infrastructure. Three separate audiences may demand your records, and none of them will accept your memory as evidence. Tax authorities want a complete history of buys, sells, swaps, fees, and transfers so they can assess gains and losses. Exchange compliance teams want source-of-funds evidence when a large transfer triggers a review. And you yourself need accurate records to know whether your strategy is actually profitable after fees, slippage, and transfer costs. A trader who cannot answer those three questions is flying blind." },
      { type: "p", text: "The cost of poor records shows up in predictable ways. A missing exchange export means a tax return built on guesses. A compliance hold without evidence means funds frozen for weeks instead of days. And a strategy evaluated without fee data means you keep repeating trades that lose money after costs. On 15 October 2026, with Bitcoin near $80,980 to $81,835 and about $973 million in liquidations in 24 hours, traders who knew their exact cost basis and fee load could make calm decisions, while traders working from rough memory could not. Records are what turn a volatile day into a manageable one." },
      { type: "h2", text: "What to Record for Every Trade" },
      { type: "p", text: "A useful trade record answers six questions: what, when, where, how much, at what price, and at what cost. For each trade, log the date and time, the venue, the pair, the side (buy or sell), the quantity, the execution price, and every fee charged. For arbitrage, you also need the other leg: record both sides of the pair of trades, the transfer between them, the network fee, and the time each step took. A spread that looks profitable before fees often turns out to be a loss once the full cost chain is included, and only a complete record reveals that." },
      {
        type: "table",
        headers: ["Field", "Example", "Why it matters"],
        rows: [
          ["Date and time (UTC)", "2026-10-15 14:32 UTC", "Tax lots, audit trail, performance by session"],
          ["Venue and pair", "Exchange A, BTC/USDT", "Fee tiers and venue comparison"],
          ["Side, quantity, price", "Buy 0.5 BTC at $81,200", "Cost basis and P&L"],
          ["Fees (trading, withdrawal, network)", "$12.40 + $8.00 network", "True profitability after costs"],
          ["Transfer details", "TxID, from/to addresses", "Compliance and reconciliation"],
          ["Notes", "CPI-day volatility, slow transfer", "Strategy review and lessons"]
        ],
      },
      { type: "p", text: "Transfers deserve the same attention as trades. Log every deposit and withdrawal with the transaction ID, the sending and receiving addresses, the amount, the network, and the timestamps on both ends. This transfer log is the evidence that connects your exchange accounts into one coherent story, and it is exactly what a compliance team asks for when a Travel Rule or source-of-funds check triggers. For more on that process, see [The Travel Rule and Arbitrage Transfers](/blog/travel-rule-crypto) and [KYC/AML for Active Arbitrageurs](/blog/kyc-aml-arbitrage)." },
      { type: "h2", text: "A Simple System That Actually Gets Used" },
      { type: "p", text: "The best record-keeping system is the one you maintain, so keep it simple. A spreadsheet with one row per trade and one row per transfer is enough for most retail traders. Add a weekly reconciliation habit: every week, export your trade history from each exchange, compare it against your log, and fix discrepancies while you still remember them. Monthly, reconcile exchange balances against your own records and back up everything. Quarterly, review your fee totals and your strategy's true net profit, and set aside whatever you need for tax obligations rather than discovering the bill at year end." },
      {
        type: "list",
        items: [
        "Use one spreadsheet or portfolio tool as the single source of truth; avoid scattered notes.",
        "Export trade history from every exchange monthly, and store the raw CSVs, not just summaries.",
        "Log transfers with transaction IDs; screenshots alone are not enough.",
        "Record fees in the same currency as the trade so P&L stays comparable.",
        "Back up records in two places, for example a local drive and encrypted cloud storage.",
        "Keep records for at least as long as your tax authority requires, and longer if you are unsure."
        ],
      },
      { type: "h2", text: "Tax Records: What to Keep and Why" },
      { type: "p", text: "Tax treatment of crypto varies by country, and this article is not tax advice. What is consistent everywhere is that the burden of proof falls on you. Keep the raw data that lets an accountant reconstruct your activity: exchange exports, wallet transaction histories, staking or lending records, airdrop receipts, and any records of gifts or payments received in crypto. In several jurisdictions, crypto-to-crypto swaps are taxable events, which surprises traders who assumed only fiat cash-outs count. If you are unsure how your country treats swaps, staking rewards, or arbitrage profits, consult a qualified tax professional who works with crypto clients, and do it before the filing deadline, not after." },
      {
        type: "callout",
        title: "Never rely on exchange history alone",
        text: "Exchanges can restrict, suspend, or delete accounts, and history exports sometimes cover only a limited window. Export your data regularly and keep your own copies — your records should survive losing access to any single venue.",
        tone: "warning",
      },
      { type: "h2", text: "Records That Protect You in a Compliance Review" },
      { type: "p", text: "When an exchange freezes funds and asks for source-of-funds evidence, the traders who get released fastest are the ones who can answer in one message. Keep a short file for each funding source: the bank statement showing the original deposit, the trade history that built the balance, and the withdrawal confirmations that moved it. If you received funds from another person or business, keep the agreement or invoice that explains it. If you used a self-hosted wallet, keep proof of ownership. This file is not just for emergencies: preparing it forces you to notice gaps in your own records before a compliance team does. For venue and compliance context, see [Exchange Licensing: Why It Matters](/blog/exchange-licensing-guide)." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can help you design a simple trade-log template, turn a messy list of trades into a tidy summary, and draft the questions to ask a tax professional about your situation." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is the minimum I should record for each crypto trade?",
            a: "Date and time, venue, pair, side, quantity, price, and all fees. For arbitrage, also record the matching leg, the transfer, and the network fee, so you can compute true net profit.",
          },
          {
            q: "How long should I keep crypto trading records?",
            a: "At least as long as your tax authority's audit window, which is typically several years and varies by country. When in doubt, keep them longer; storage is cheap and missing records are expensive.",
          },
          {
            q: "Can I rely on my exchange's trade history?",
            a: "No, not as your only copy. Exchanges can suspend accounts and limit export windows. Export your history regularly and keep your own spreadsheet and raw CSVs.",
          },
          {
            q: "Do crypto-to-crypto swaps need to be recorded?",
            a: "Yes. In many jurisdictions they are taxable events even though no fiat changed hands. Record every swap the same way you record a buy or sell, and confirm the treatment with a tax professional.",
          }
        ],
      },
  ],
};
