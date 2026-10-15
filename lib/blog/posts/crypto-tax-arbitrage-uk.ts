import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "crypto-tax-arbitrage-uk",
  title: "Crypto Arbitrage Taxes in the UK",
  description: "UK crypto arbitrage profits can fall under Capital Gains Tax, with pooling rules that surprise frequent traders. Learn how HMRC treats swaps, fees, and records.",
  keywords: [
      "crypto arbitrage taxes",
      "crypto tax UK",
      "HMRC crypto",
      "capital gains tax crypto UK",
      "Section 104 holding",
      "crypto pooling UK"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "UK arbitrage traders can owe Capital Gains Tax on crypto-to-crypto swaps, and HMRC's pooling rules change how gains are calculated. Here is what to know before you trade.",
  image: "/images/blog/crypto-tax-arbitrage-uk.svg",
  blocks: [
      { type: "p", text: "Crypto arbitrage taxes in the UK surprise many traders, because HMRC treats most crypto-to-crypto swaps as disposals for Capital Gains Tax purposes. You do not need to cash out to sterling for a taxable event to occur: swapping BTC for ETH during an arbitrage loop can itself trigger a gain or loss that must be calculated and reported. On 15 October 2026, with BTC near $81,000 after the hot US inflation print and ETH near $2,420, UK-based traders face the same fast-moving spreads as everyone else, but their tax arithmetic follows distinctly British rules. The central ideas are pooling, the same-day and bed-and-breakfast rules, and careful record-keeping. This article gives general educational information about **crypto arbitrage taxes in the UK** and is not tax advice, since rates, allowances, and guidance change over time. The [crypto arbitrage glossary](/blog/crypto-arbitrage-glossary) defines the key terms used below." },
      { type: "h2", text: "How HMRC Treats Crypto Assets" },
      { type: "p", text: "HMRC generally treats crypto assets as property for tax purposes, and for most individuals, gains on disposal fall under Capital Gains Tax. Income Tax can apply instead in some circumstances, for example where crypto is received as employment income or where activity amounts to a trade, but HMRC has historically said that buying and selling crypto is generally an investment activity rather than a trade for most individuals, with each case depending on its facts. A disposal includes selling crypto for fiat, swapping it for another coin, spending it on goods or services, or giving it away in some cases. Moving crypto between your own wallets is generally not a disposal. Because arbitrage involves constant swapping, a busy arbitrageur can rack up dozens of disposals in a day, each needing its own calculation. Allowances and rates change between tax years, so always check the current HMRC guidance for the year in question." },
      { type: "h2", text: "Pooling: The Section 104 Holding" },
      { type: "p", text: "The pooling rules are the part of UK crypto tax that trips up the most traders. Instead of tracking each purchase of a coin separately, HMRC generally requires holdings of the same type of crypto to be pooled into a single Section 104 holding, with an average cost per unit. When you dispose of part of the pool, the gain is calculated against that average cost, and the pool is reduced accordingly. This averaging means your oldest, cheapest purchases and your newest, expensive ones blend together, which can produce a very different result from FIFO-style thinking. New acquisitions are added to the pool, and the average cost updates. Traders who mentally track individual lots and expect FIFO results often find their HMRC-compliant calculation looks nothing like their own spreadsheet, so understanding pooling is essential before scaling up arbitrage volume. Our guide to [tax as an arbitrage cost](/blog/tax-as-arbitrage-cost) explains why after-tax spreads, not headline spreads, decide whether a strategy survives." },
      { type: "h2", text: "Same-Day and Bed-and-Breakfast Rules" },
      { type: "p", text: "Two matching rules sit on top of pooling and matter enormously for high-frequency traders. First, disposals are generally matched with acquisitions made on the same day before the pool is used. Second, the bed-and-breakfast rule generally matches a disposal with acquisitions made in the following 30 days, ahead of the pool. These rules exist to stop people from manufacturing losses by selling and quickly rebuying the same asset. For arbitrageurs, who may buy and sell the same coin many times a day across venues, the matching rules can dominate the calculation: a sale that looks like a clean gain against the pool may actually be matched against a same-day purchase at a nearly identical price, producing little gain at all. The only reliable way to handle this is software or a carefully maintained ledger that applies the matching order correctly, since doing it by hand for hundreds of trades is error-prone." },
      {
        type: "table",
        headers: ["HMRC matching step", "What it means", "Why it matters for arbitrage"],
        rows: [
          ["Same-day acquisitions", "Disposals matched against buys the same day first", "Intraday round trips often net to near zero"],
          ["Bed-and-breakfast (30 days)", "Disposals matched against buys in next 30 days", "Quick rebuys change the gain calculation"],
          ["Section 104 pool", "Remaining disposals matched against average pool cost", "Average cost blends cheap and expensive buys"]
        ],
      },
      { type: "h2", text: "Fees, Stablecoins, and Record-Keeping" },
      { type: "p", text: "Fees and stablecoins both deserve attention. Transaction fees paid in fiat can generally be added to the cost of an acquisition or deducted from disposal proceeds, while fees paid in crypto may themselves count as disposals of the fee coin, creating yet another calculation. Stablecoin swaps are not automatically tax-free: swapping a volatile coin for a stablecoin is generally a disposal of the first coin, and moving between stablecoins can produce small gains or losses. Record-keeping should capture every trade, transfer, fee, and fiat movement with timestamps, values in sterling, and the venue involved, because HMRC can ask for evidence years later. Export exchange statements regularly, keep wallet addresses documented, and reconcile your ledger against exchange balances. The volatility around events such as the 14 October 2026 US CPI release is a reminder that end-of-day prices are a poor substitute for timestamped trade data." },
      { type: "h2", text: "Reporting and Practical Next Steps" },
      { type: "p", text: "Individuals who owe Capital Gains Tax on crypto generally report through the Self Assessment system, and the annual exempt amount and rates that apply depend on the tax year and personal circumstances, so check the current figures rather than relying on older articles. Deadlines matter: Self Assessment returns and payments follow fixed annual dates, and penalties can apply for late or inaccurate filings. If your activity is extensive, consider whether it could be viewed as trading for Income Tax purposes, and get professional advice rather than assuming the investment treatment applies. Keep a year-end summary from your ledger or tax software, file it with your return papers, and review your approach annually, since both UK rules and the wider [regulatory risk](/blog/regulatory-risk-arbitrage) picture, including the EU's DAC8 reporting regime, continue to evolve. This article is general educational information only and is not tax advice." },
      {
        type: "callout",
        title: "Educational information only",
        text: "UK tax rates, allowances, and HMRC guidance change over time. This article gives general educational information, not tax advice. For filing decisions, consult a qualified UK tax professional.",
        tone: "info",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, available in the Muse app, that can answer questions and explain complex topics in plain language. For this topic, you can ask it to explain the Section 104 pooling idea with a small worked example, so the average-cost logic is clear before you tackle real trade records." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Is swapping crypto for crypto taxable in the UK?",
            a: "Generally yes. HMRC usually treats a crypto-to-crypto swap as a disposal for Capital Gains Tax, even when no sterling is involved. Each swap in an arbitrage loop may therefore need its own gain calculation.",
          },
          {
            q: "What is the Section 104 holding?",
            a: "It is HMRC's pooling rule: holdings of the same crypto are pooled into one holding with an average cost per unit, and disposals are measured against that average cost after same-day and 30-day matching rules are applied.",
          },
          {
            q: "Do I owe tax if I only trade between exchanges and never withdraw?",
            a: "Possibly yes. Tax follows disposals, not withdrawals. Swaps between coins can be taxable even if all funds stay on exchanges, which is why arbitrageurs must track every trade, not just bank movements.",
          },
          {
            q: "Are stablecoin swaps taxable in the UK?",
            a: "They can be. Swapping a volatile coin for a stablecoin is generally a disposal of the first coin, and stablecoin-to-stablecoin swaps can also produce small gains or losses. Keep records for those trades too.",
          }
        ],
      },
  ],
};
