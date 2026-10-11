import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "choosing-arbitrage-exchanges",
  title: "How to Choose Exchanges for Arbitrage: Liquidity, Fees, Reliability",
  description: "How to choose exchanges for arbitrage in 2026: a practical framework scoring liquidity, fees, and reliability — with a checklist and venue-pairing playbook.",
  keywords: [
      "choose exchanges for arbitrage",
      "best exchanges crypto arbitrage",
      "arbitrage exchange selection",
      "crypto arbitrage liquidity fees",
      "arbitrage venue reliability 2026"
  ],
  datePublished: "2026-10-11",
  dateModified: "2026-10-11",
  readingMinutes: 10,
  category: "Markets",
  excerpt: "Liquidity, fees, reliability — pick two? No: you need a framework that scores all three. Here is how professionals choose and pair arbitrage venues in 2026.",
  image: "/images/blog/choosing-arbitrage-exchanges.svg",
  blocks: [
      { type: "p", text: "**Choosing exchanges for arbitrage** is the highest-leverage decision an arbitrageur makes — more decisive than any single strategy tweak. Your venues determine your fee hurdle, your executable size, your transfer options, and your counterparty risk. Yet most traders choose venues by habit or marketing, then wonder why their spreads evaporate. The professional approach is a scoring framework across three dimensions — liquidity, fees, reliability — applied deliberately, with venues assigned roles in a stack rather than picked as favorites. As of October 11, 2026, with BTC near $82,950–$83,015, ETH around $2,505–$2,509, and altcoins swinging 5–60% daily, venue choice is the difference between capturing dislocations and watching them." },
      { type: "p", text: "This guide gives you that framework: how to score each dimension, the checklist to run before committing capital, and the venue-pairing playbook that turns three good choices into one working system. For strategy mechanics, start with our [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage)." },
      { type: "h2", text: "Dimension 1: Liquidity — Can Your Size Actually Trade?" },
      { type: "p", text: "Liquidity is the first dimension because it gates everything else: a venue with the lowest fees in the world is useless if your orders walk the book. Score liquidity per pair you intend to trade, not per venue in the abstract — a venue can be deep in BTC and a desert in small-caps. Check live order-book depth at multiple price levels, typical bid-ask spreads during both calm and volatile periods, and 24-hour volume as a sanity check (sustained volume with tight spreads signals real market-making; volume with wide spreads can signal wash trading)." },
      { type: "p", text: "The practical test is the volume-weighted fill: for your intended trade size, what average price would you actually get on each side? If that realistic fill erases the spread, the venue fails for that pair regardless of its fee schedule. Re-test during volatility — books that look deep on quiet Sundays can hollow out during a STRK-style 40–61% surge, which is exactly when you need them most. Our [best exchange pairs roundup](/blog/best-exchange-pairs-arbitrage) applies this lens to common venue combinations." },
      { type: "h2", text: "Dimension 2: Fees — The Hurdle Every Spread Must Clear" },
      { type: "p", text: "Fees are the hurdle rate of arbitrage: no spread below your total round-trip cost is a trade, whatever the scanner says. Score fees as a complete stack — spot taker/maker tiers at your volume, derivatives fees if you hedge with perps, withdrawal fees per network, and any deposit or conversion costs. Two venues with similar headline fees can differ enormously once withdrawal fees on your specific tokens and networks are included; a 'cheap' venue with expensive withdrawals is expensive for transfer-based strategies." },
      { type: "p", text: "Three fee nuances professionals weight heavily. First, maker/taker structure: venues with maker rebates reward passive execution, which suits patient spread capture but not fast gaps. Second, tier trajectories: your fees should fall as your volume grows — check that the venue's tiers actually reward your expected volume band. Third, promotional fees (zero-maker campaigns and the like) are upside, never foundation — model on standard schedules. Never state fees from memory; fee schedules change, and your spreadsheet should link to the current page. See our [crypto arbitrage glossary](/glossary) for maker/taker and spread terminology." },
      {
        type: "table",
        headers: ["Scoring factor", "What 'good' looks like", "Red flag"],
        rows: [
          ["Spot depth on your pairs", "Tight spreads, depth 50x+ your size", "Top-of-book only; gaps between levels"],
          ["Fee hurdle", "Round trip < 1/3 of target spreads", "Spreads routinely below your costs"],
          ["Withdrawal reliability", "Fast, multi-network, pre-tested", "Suspensions, single-network, high fees"],
          ["Track record", "Years operating, audited reserves", "Young, opaque, or incident-prone"],
          ["Jurisdiction fit", "Full product access where you live", "Restricted features for your region"]
        ],
      },
      { type: "h2", text: "Dimension 3: Reliability — The Risk You Can't Price" },
      {
        type: "callout",
        title: "Reliability is scored in trust tiers, not binary",
        text: "No centralized venue is risk-free. Professionals tier venues: the largest working balances sit on the longest-audited, most transparent venues; opportunity venues get tactical amounts only. Size every balance to the venue's trust tier — and sweep profits uphill toward trust on a schedule.",
        tone: "warning",
      },
      { type: "p", text: "Reliability is the dimension you cannot fully price — until it prices you. Score it on operating history (years without major incidents), transparency practices (proof-of-reserves audits, public leadership), regulatory standing in your jurisdiction, and operational track record during volatility (did the venue stay orderly during the last liquidation cascade?). The FTX lesson, now permanent industry curriculum, is that size and marketing are not reliability signals — verifiable practices are." },
      { type: "p", text: "Reliability also has an operational layer: API stability under load (your bot's orders must reach the matching engine during the volatility that creates spreads), withdrawal processing consistency, and customer support responsiveness when something breaks mid-trade. Test these before you need them — place small live orders via API, run test withdrawals on each network you plan to use, and confirm support channels exist. A venue that fails operational tests with $100 will fail worse with $10,000." },
      { type: "h2", text: "The Venue-Pairing Playbook" },
      { type: "p", text: "Venues are not picked solo — they are paired by role. The classic three-role stack: a **hedge venue** (deepest books, lowest slippage — typically Binance or OKX) where the reliable leg of every spread executes; an **opportunity venue** (broad listings, wider spreads — KuCoin, MEXC, Gate.io) where dislocations appear; and a **trust venue** (longest-audited, best fiat rails — Kraken or Coinbase) where inventory stages and profits settle. Capital flows by role: tactical amounts on the opportunity venue, working inventory split between hedge and trust venues, profits sweeping uphill to trust." },
      { type: "p", text: "Pair selection follows the strategies you run. Cross-exchange spot spreads want hedge-plus-opportunity depth contrast. Funding-rate trades want two derivatives venues with divergent funding (see our venue-vs-venue arbitrage comparisons). Fiat-basis strategies want a trust venue with real USD/EUR rails paired against USDT venues. Review pairings quarterly: listings change, fee tiers shift with your volume, and a venue's reliability score is a living assessment, not a one-time verdict. Our [best crypto arbitrage scanners](/best-crypto-arbitrage-scanners) roundup covers the tooling that monitors whichever venues you choose." },
      {
        type: "list",
        items: [
        "Score liquidity per pair at your size — volume-weighted fills, not headlines.",
        "Stack all fees (trading, withdrawal, conversion) into one hurdle rate per strategy.",
        "Tier venues by verifiable reliability; size balances to the tier.",
        "Assign roles: hedge venue, opportunity venue, trust venue — don't ask one venue to be all three.",
        "Pre-test operations (API orders, withdrawals, support) before committing capital.",
        "Re-score quarterly: venues, volumes, and your jurisdiction change."
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "How many exchanges do I need for arbitrage?",
            a: "Two is the minimum for cross-exchange spreads; three is the professional standard — a deep hedge venue, a wide-spread opportunity venue, and a trusted settlement venue. More venues add opportunity surface but multiply operational overhead, KYC, and balance fragmentation. Start with two, add a third when your process is logging consistent net results.",
          },
          {
            q: "Should I prioritize low fees or deep liquidity?",
            a: "Liquidity first, fees second. A cheap venue you can't execute size on is worthless; a slightly pricier deep venue where fills are clean usually nets more. The exception is high-frequency thin-spread strategies, where fee differentials dominate — but those are professional territory with co-located infrastructure.",
          },
          {
            q: "How do I check if an exchange is reliable?",
            a: "Look for years of operation without major incidents, proof-of-reserves audits, regulatory standing in your jurisdiction, and orderly behavior during past volatility events. Then verify operationally: test API orders, test withdrawals, confirm support responsiveness — with small amounts before committing capital.",
          },
          {
            q: "Can I do arbitrage on just one exchange?",
            a: "Yes — intra-venue strategies like spot-vs-perp funding trades and cash-and-carry basis trades need only one account. But cross-exchange spreads, the classic arbitrage, need at least two venues. Many traders run both: single-venue derivatives structures plus two-venue spot spreads.",
          }
        ],
      },
  ],
};
