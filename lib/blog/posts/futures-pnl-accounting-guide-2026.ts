import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "futures-pnl-accounting-guide-2026",
  title: "Futures P&L Accounting: Funding, Fees, and Realised Gains Explained",
  description: "Futures P&L Accounting explained: realised gains, funding payments, trading fees, and liquidation effects, with a ledger approach keeping contracts traceable.",
  keywords: [
      "Futures P&L Accounting",
      "perpetual futures funding",
      "futures realised gains",
      "futures trading fees ledger",
      "futures liquidation accounting",
      "crypto futures records"
  ],
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Futures profit looks simple on screen and messy in a ledger. This guide separates realised gains, funding, fees, and liquidations, so your records match what actually happened.",
  image: "/images/blog/futures-pnl-accounting-guide-2026.svg",
  blocks: [
      { type: "p", text: "On Wednesday 4 November 2026, with BTC slipping below $77,000 to near $76,700 and the CPI report due on 13 November, Futures P&L Accounting is essential reading for anyone holding leveraged positions into volatile data weeks. Exchange dashboards show unrealised profit moving every second, but accounting cares about realised events: closed positions, funding payments exchanged, fees paid, and liquidations that close positions for you. Mixing unrealised swings into realised profit overstates performance in good weeks and hides losses in bad ones, while forgetting funding can turn a winning trade into a losing month. The [glossary](/glossary) defines the futures terms used here, and the [best scanners](/best-crypto-arbitrage-scanners) page illustrates why checking figures across sources beats trusting a single screen." },
      { type: "h2", text: "Realised Versus Unrealised Profit" },
      { type: "p", text: "Realised profit arises only when a position closes, whether by your order, a stop, a take-profit, or liquidation, while unrealised profit is the paper value of an open position at current prices. A position that shows a large unrealised gain today can close at a loss tomorrow, so recording unrealised figures as income or profit distorts every report built on them. Your ledger should therefore track open positions separately, with entry price, size, leverage, and margin, and move profit into realised columns only on closure. Partial closes complicate this, since each partial close realises a proportion of the position, and the remaining open portion keeps its original entry basis adjusted for the closed share. Keep the arithmetic explicit for every partial close rather than trusting a dashboard summary." },
      { type: "h2", text: "Funding Payments: Small, Frequent, Decisive" },
      { type: "p", text: "Perpetual futures use funding payments to anchor the contract price to spot, with longs paying shorts or vice versa at regular intervals depending on market positioning. Each payment is a real cash flow in or out of your margin balance, and over days or weeks of holding, funding can rival or exceed the price-move profit itself. Record every funding event with its date, market, direction, and amount, and treat received funding as a distinct income-like flow and paid funding as a distinct cost, rather than netting them silently into position profit. Netting hides the true cost of holding a crowded side of the market and makes later review impossible. The [cross-exchange guide](/guides/cross-exchange-arbitrage) shows how small recurring costs change outcomes across venues, and funding is the futures version of that lesson." },
      {
        type: "list",
        items: [
        "Record realised profit only when a position or partial position actually closes.",
        "Log every funding payment with date, market, direction, and amount.",
        "Keep trading fees separate from position profit so net performance stays honest.",
        "Record liquidations as forced closes with fee and remaining margin details.",
        "Reconcile margin balance movements monthly against closes, funding, and fees."
        ],
      },
      { type: "h2", text: "Fees, Liquidations, and Margin Movements" },
      { type: "p", text: "Trading fees on futures include maker and taker charges on entry and exit, and sometimes delivery or settlement charges, all of which reduce net realised profit and must be recorded per trade. Liquidations deserve their own careful entry: the forced close price, the fee charged, any insurance-fund contribution, and the margin returned or lost, since a liquidation is not the same as an ordinary close and its tax or reporting treatment may differ by jurisdiction. Margin movements that are not trades, such as adding collateral or withdrawing excess margin, are transfers, not profit, and must be labelled as such to avoid phantom gains. When margin balance changes cannot be explained by closes plus funding plus fees, the unexplained remainder is an investigation item, not a rounding difference to ignore." },
      {
        type: "table",
        headers: ["Futures event", "Ledger treatment", "Do not do this"],
        rows: [
          ["Position close", "Realised gain or loss, net of fees", "Record unrealised swings as profit"],
          ["Funding received", "Separate inflow entry", "Silently net against position profit"],
          ["Funding paid", "Separate cost entry", "Omit because it feels small"],
          ["Liquidation", "Forced close with fee detail", "Treat as an ordinary voluntary close"],
          ["Margin top-up", "Transfer, not profit", "Count added collateral as a gain"]
        ],
      },
      { type: "h2", text: "A Ledger Structure for Futures Traders" },
      { type: "p", text: "A futures ledger needs three linked sections: positions, funding, and margin movements. The positions section records each trade's market, direction, size, leverage, entry, exit, realised result, and fees, while the funding section logs every payment chronologically by market, and the margin section reconciles the account balance from all flows. Monthly, prove the structure by checking that opening margin plus realised results plus funding plus fees plus transfers equals closing margin, and investigate any difference before it grows. This reconciliation is the futures equivalent of balancing a bank statement, and it catches missing funding entries, misrecorded partial closes, and fee discrepancies while they are still traceable. Software can help, but the reconciliation logic must be understood, not outsourced blindly." },
      { type: "h2", text: "General Principles Only, Not Tax Advice" },
      { type: "p", text: "This article describes general accounting principles only and is not tax, legal, or investment advice. Futures taxation, including the treatment of funding, fees, and liquidations, varies by jurisdiction and by contract type, and leveraged trading carries a high risk of rapid loss, including losses exceeding the initial margin in some arrangements. Keep complete, event-level records and consult a qualified professional in your jurisdiction before filing anything based on them. Good futures accounting will not make a losing strategy profitable, but it will ensure you know exactly how much you made, lost, and paid, which is the minimum any serious trader should demand of their own records." },
      {
        type: "callout",
        title: "Warning: leverage magnifies losses as well as gains",
        text: "Futures leverage can produce losses that arrive faster than expected, and liquidation can close positions at unfavourable prices. Never trade with funds you cannot afford to lose, and record every forced close carefully.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain futures funding and realised profit in simple words and help you draft a ledger checklist for your contracts. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "When is futures profit considered realised?",
            a: "Only when a position closes, whether by your order, a stop, a take-profit, a partial close, or liquidation. Unrealised paper profit on open positions should not be recorded as realised profit.",
          },
          {
            q: "How should funding payments be recorded?",
            a: "Record each payment separately with date, market, direction, and amount, treating received funding as an inflow and paid funding as a cost, rather than netting them into position profit.",
          },
          {
            q: "How is a liquidation different from an ordinary close?",
            a: "A liquidation is a forced close, often with extra fees and margin loss, and it should be recorded with its close price, fees, and remaining margin so it is not mistaken for a voluntary trade.",
          },
          {
            q: "How do I check my futures ledger is complete?",
            a: "Monthly, confirm that opening margin plus realised results plus funding plus fees plus transfers equals closing margin, and investigate any difference immediately.",
          }
        ],
      },
  ],
};
