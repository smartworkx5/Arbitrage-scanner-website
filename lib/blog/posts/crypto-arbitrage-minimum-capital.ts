import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "crypto-arbitrage-minimum-capital",
  title: "How Much Capital Do You Need for Crypto Arbitrage?",
  description: "How much money do you need to start crypto arbitrage? Minimum viable capital by strategy, with the fee math that decides if small accounts can compete.",
  keywords: [
      "crypto arbitrage minimum capital",
      "how much money arbitrage crypto",
      "arbitrage starting capital",
      "small account arbitrage",
      "crypto arbitrage costs"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 8,
  category: "Basics",
  excerpt: "Fees punish small accounts and reward large ones — but \"large\" is smaller than you think. Here is the honest capital math for every major arbitrage strategy.",
  image: "/images/blog/crypto-arbitrage-minimum-capital.svg",
  blocks: [
      { type: "p", text: "**How much capital do you need for crypto arbitrage?** Less than the gurus imply, more than the \"start with $50\" crowd admits. The honest answer is that capital requirements are set almost entirely by fees: every strategy has fixed and percentage costs, and your account must be big enough that a realistic spread leaves meaningful profit after all of them. This article does that math for each major strategy." },
      { type: "h2", text: "Fees Set the Floor" },
      { type: "p", text: "Consider a typical cross-exchange trade: 0.1% taker fee on each side (0.2% round trip), plus a flat network withdrawal fee of a few dollars. On a $100 trade capturing a 0.5% spread, the gross gain is $0.50 — already less than the $0.20 in trading fees, and the flat withdrawal fee wipes out the rest several times over. The same trade with $5,000 of capital yields $25 gross against roughly $10 in percentage fees plus the same few dollars flat — suddenly viable." },
      { type: "p", text: "This is the fundamental scaling law of arbitrage: **percentage costs stay constant, but flat costs shrink as a share of larger trades**. Small accounts are not just disadvantaged — below a certain size, the math literally cannot work. The break-even point is where your expected net edge per trade comfortably exceeds the sum of all flat fees, with margin for the trades that go wrong." },
      { type: "h2", text: "Minimum Viable Capital by Strategy" },
      {
        type: "table",
        headers: ["Strategy", "Practical minimum", "Why"],
        rows: [
          ["Manual cross-exchange", "$500-$2,000", "Flat withdrawal fees dominate below this"],
          ["Concurrent cross-exchange", "$2,000-$5,000", "Inventory needed on both venues"],
          ["Triangular (single exchange)", "$300-$1,000", "No transfers; only trading fees matter"],
          ["DEX vs CEX", "$1,000-$3,000", "Gas fees punish small trades severely"],
          ["Funding rate arbitrage", "$2,000-$5,000", "Needs margin buffer against liquidation"],
          ["Cash-and-carry", "$5,000+", "Margin requirements and contract sizes"]
        ],
      },
      { type: "p", text: "These are practical minimums for learning with real money, not theoretical ones — and \"practical\" means you can survive a few losing trades without the account becoming untradeable. Notice that the cheapest strategies to learn are triangular arbitrage (no transfers) and manual cross-exchange on major pairs. The [fee math walkthrough](/blog/how-crypto-arbitrage-works) shows exactly how to compute your own break-even." },
      { type: "h2", text: "The Costs Beginners Forget to Budget" },
      { type: "p", text: "Trading capital is only part of the budget. Beginners routinely forget: **spread across venues** — concurrent strategies need funds on every exchange you trade, and moving money between them costs time and fees; **dust and minimums** — exchanges have minimum order and withdrawal sizes that strand small balances; **the learning tax** — your first dozen trades will include mistakes, and those mistakes must be small enough to survive; and **tooling** — a decent [scanner subscription](/best-crypto-arbitrage-scanners) or VPS for a bot is a real monthly cost that must be earned back." },
      { type: "p", text: "Taxes deserve a line of their own. In many jurisdictions every arbitrage trade is a taxable event, and hundreds of small trades create a reporting burden that can cost real money in accountant fees. Factor it in before you scale trade count." },
      {
        type: "callout",
        title: "Start smaller than your ego wants",
        text: "Whatever capital you have decided on, start live trading with 10-20% of it. Prove the strategy survives contact with reality — fees, delays, mistakes — before committing the rest. Paper trading teaches mechanics; only real money teaches costs.",
        tone: "info",
      },
      { type: "h2", text: "A Sensible Starting Point" },
      { type: "p", text: "For most beginners, $1,000-$2,000 dedicated to manual cross-exchange or triangular arbitrage is a reasonable learning stake: large enough that fee math can work on good setups, small enough that early mistakes are tuition rather than tragedy. Prove consistent profitability over 50-100 trades before adding capital — and add it to the strategy that is working, not to new experiments. Capital amplifies whatever your process already is, including its flaws." },
      { type: "p", text: "When you do scale, scale gradually and deliberately: increase working capital only after a full profitable month, and keep a cash reserve outside the exchanges for rebalancing and unexpected opportunities. Resist the temptation to deploy everything at once — larger size magnifies both edge and mistakes, and the mistakes always show up first. Patient compounding of a proven process beats aggressive sizing of an unproven one, every single time." },
      {
        type: "faq",
        items: [
          {
            q: "Can I do crypto arbitrage with $100?",
            a: "Technically yes, practically no for most strategies. Flat withdrawal and network fees will consume typical spreads at that size. $100 is fine for learning mechanics on a single exchange (triangular practice), but not for real cross-exchange profit.",
          },
          {
            q: "Does more capital mean proportionally more profit?",
            a: "Roughly, up to a point. Larger size improves the fee ratio, but very large orders face slippage and move thin markets against you. Professionals size positions to the available liquidity, not just to their account balance.",
          },
          {
            q: "Should I borrow money to fund arbitrage?",
            a: "No. Arbitrage returns are modest and uncertain, especially while learning. Borrowed capital adds pressure that leads to oversized risk-taking — the opposite of the discipline arbitrage requires.",
          },
          {
            q: "How should I split capital across exchanges?",
            a: "For concurrent strategies, keep balanced inventory on each venue you actively trade, weighted toward where you find the most opportunities. Keep a reserve on one main exchange for rebalancing, and never leave more on any venue than you can afford to have frozen during an outage.",
          }
        ],
      },
  ],
};
