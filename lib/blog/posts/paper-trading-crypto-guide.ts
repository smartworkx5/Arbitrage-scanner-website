import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "paper-trading-crypto-guide",
  title: "Paper Trading Crypto: Best Practices",
  description: "Paper trading lets you test crypto strategies with zero capital at risk. Learn how to make it realistic, what it cannot teach you, and when to go live.",
  keywords: [
      "paper trading crypto",
      "crypto paper trading guide",
      "practice trading crypto",
      "paper trading arbitrage",
      "crypto demo trading"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 8,
  category: "Basics",
  excerpt: "Paper trading is the cheapest education in crypto — if you run it honestly. Here is how to simulate real conditions, track real costs, and know when your results actually mean something.",
  image: "/images/blog/paper-trading-crypto-guide.svg",
  blocks: [
      { type: "h2", text: "What Paper Trading Is, and What It Is For" },
      { type: "p", text: "Paper trading means executing trades on paper, in a spreadsheet or a simulator, without risking real money. You record the entry and exit prices you would have taken, apply the fees you would have paid, and track the result as if the money were real. Its purpose is to test ideas, learn execution mechanics, and build discipline before capital is at stake. For arbitrage specifically, paper trading lets you test route economics: does this spread survive fees, slippage, and transfer time, or does it only look profitable on a screen? That is a question you want answered with fake money." },
      { type: "p", text: "Paper trading is especially valuable in volatile markets. On 15 October 2026, Bitcoin traded near $80,980 to $81,835 after a hot US inflation print, Ether sat near $2,414 to $2,426, and about $973 million in positions were liquidated in 24 hours. A beginner who paper traded through a session like that one learned how fast spreads open and close, and how transfer delays destroy trades, without losing a cent. A beginner who traded it live with real money often learned the same lesson at full price." },
      { type: "h2", text: "The Rules That Make Paper Trading Honest" },
      { type: "p", text: "Paper trading fails when it is dishonest, and dishonesty creeps in easily. The classic cheat is hindsight: looking at a chart, seeing where the price went, and claiming you would have traded the perfect entry. The second cheat is ignoring friction: recording fills at the quoted price with no fees, no slippage, and instant transfers. The third is selective memory: forgetting the losing paper trades and remembering the winners. All three produce a beautiful fake track record and a painful first month of live trading." },
      {
        type: "list",
        items: [
        "Record every intended trade before it happens, with a timestamp, never after the fact.",
        "Fill at realistic prices: use the price you could actually have executed at, not the best price of the day.",
        "Charge yourself full fees: trading fees on both legs, withdrawal fees, and network fees.",
        "Add a slippage penalty on every fill, for example 0.05-0.1% on liquid pairs and more on thin ones.",
        "Count transfer time: if your route needs 20 minutes, the exit price is the price 20 minutes later, not the price now.",
        "Log losses with the same honesty as wins; a paper log with no losses is a fantasy."
        ],
      },
      { type: "p", text: "The transfer-time rule is the one that matters most for arbitrage paper trading. A cross-exchange spread that exists right now is not a trade you can take right now unless capital is already positioned on both sides. If your simulation assumes instant settlement, it will approve trades that real life would kill. Force yourself to use the later price. If the trade still works, it is a real candidate. If it does not, you have learned something valuable for free. For the mechanics of real routes, see [Cross-Exchange Arbitrage](/guides/cross-exchange-arbitrage) and [Your First Arbitrage Trade: Walkthrough](/blog/first-arbitrage-trade)." },
      { type: "h2", text: "How to Set Up a Paper Trading System" },
      { type: "p", text: "You do not need expensive software. A spreadsheet with columns for date, strategy, venue, pair, entry price, exit price, fees, slippage, and net result is enough, provided you fill it in before the trade, not after. Several exchanges and charting platforms also offer demo or testnet modes that simulate fills, which add realism by forcing you to place orders in a live order book. Whatever tool you use, the discipline is the same: pre-commit to the trade, record it, and review it. Set a fixed paper-trading period, for example 30 trades or four weeks, and a fixed evaluation standard before you start, so you cannot move the goalposts after a bad week." },
      {
        type: "table",
        headers: ["Metric", "What to track", "Pass mark example"],
        rows: [
          ["Net profit after all costs", "Per trade and in total", "Positive over the full sample"],
          ["Win rate", "Share of trades net-positive", "Above 50% with costs included"],
          ["Average winner vs loser", "Size of gains vs losses", "Winners larger than losers"],
          ["Worst drawdown", "Largest peak-to-trough paper loss", "Small enough to survive live"],
          ["Discipline", "Trades that followed the plan", "Near 100%, no hindsight trades"]
        ],
      },
      { type: "h2", text: "What Paper Trading Cannot Teach You" },
      { type: "p", text: "Paper trading has real limits, and honest traders name them. It cannot teach you how you will feel when real money is at stake: the fear that makes you exit early, the greed that makes you hold too long, and the panic that makes you improvise. It cannot fully simulate liquidity: your paper order never moves the market, but a real order on a thin book does. And it cannot simulate operational friction: a frozen withdrawal, a compliance hold, or an exchange outage during a volatile session. These are the events that end real arbitrage strategies, and no simulator reproduces them." },
      {
        type: "callout",
        title: "Paper profits are not a promise",
        text: "A winning paper-trading record means your idea survives fees and slippage on paper. It does not guarantee live profits, where emotions, liquidity, and operational failures all take their cut.",
        tone: "warning",
      },
      { type: "p", text: "The standard remedy is a graduated transition. After a solid paper-trading record, move to the smallest real trades you can make, and treat them as a second, harder test. If your live results roughly match your paper results, scale slowly. If they diverge sharply, the gap itself is the lesson: find which assumption was wrong, fix it, and return to paper trading until the model is honest again. For the live-trade process, see [Paper Trading Arbitrage](/blog/paper-trading-arbitrage) and [Arbitrage Risk Management](/blog/arbitrage-risk-management)." },
      { type: "h2", text: "When to Stop Paper Trading and Go Live" },
      { type: "p", text: "Go live when three conditions hold at once. First, your paper record is net-positive after full costs over a meaningful sample, not just a lucky week. Second, you can state your strategy's rules, including entry, exit, sizing, and abort conditions, without improvising. Third, you have the operational setup ready: verified accounts, tested withdrawals, security in place, and a trade log waiting. If any of the three is missing, more paper trading is cheaper than live tuition. And when you do go live, keep paper trading in parallel for new ideas: it remains the cheapest way to test a route you have never traded before." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can help you design a paper-trading log, draft honest simulation rules, and summarise your paper-trading results into clear lessons before you risk real money." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "How long should I paper trade before going live?",
            a: "Until you have a meaningful sample — for example 30 trades or four weeks — that is net-positive after full fees, slippage, and transfer-time costs, and you can state your strategy rules without improvising.",
          },
          {
            q: "Does paper trading work for arbitrage?",
            a: "Yes, if you count transfer time honestly. A spread that exists now is not a trade you can take now unless capital is already positioned on both sides, so your simulated exit must use the later price.",
          },
          {
            q: "Why do paper-trading results differ from live results?",
            a: "Paper trading removes emotions, market impact, and operational failures like frozen withdrawals or outages. Graduated small live trades are the bridge that tests whether your model survives reality.",
          },
          {
            q: "What is the biggest paper-trading mistake?",
            a: "Hindsight trading: claiming entries after the price has already moved. Record every intended trade with a timestamp before it happens, and charge full fees and slippage.",
          }
        ],
      },
  ],
};
