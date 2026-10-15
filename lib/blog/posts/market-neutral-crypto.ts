import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "market-neutral-crypto",
  title: "Market-Neutral Crypto Portfolios",
  description: "Market-neutral crypto portfolios aim to profit from spreads and relative value, not direction. Learn construction, hedging, leverage limits, and risks.",
  keywords: [
      "market neutral crypto",
      "market-neutral portfolio crypto",
      "delta neutral crypto",
      "crypto hedging strategy",
      "neutral crypto portfolio construction",
      "crypto relative value"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 10,
  category: "Strategies",
  excerpt: "Market-neutral portfolios try to make the market's direction irrelevant. Here is how they are built, what delta-neutral really means, and why neutral is never the same as risk-free.",
  image: "/images/blog/market-neutral-crypto.svg",
  blocks: [
      { type: "h2", text: "What Market-Neutral Really Means" },
      { type: "p", text: "A market-neutral portfolio is designed so that its value does not depend much on whether the overall market goes up or down. Instead of betting on direction, it profits from relative movements: the gap between two related assets, the basis between spot and futures, or the funding paid on a perpetual contract. The classic construction pairs long and short positions so their market exposures roughly cancel. If Bitcoin rises 5%, the long leg gains and the short leg loses by similar amounts, and what remains is the change in the relationship between them. That remainder is the trade." },
      { type: "p", text: "The appeal is obvious, especially on volatile days. On 15 October 2026, Bitcoin traded near $80,980 to $81,835 after a hot US inflation print, Ether fell about 2.9% to near $2,414 to $2,426, gold rose to roughly $4,130 to $4,160 an ounce, and about $973 million in positions were liquidated in 24 hours. A directional trader had to survive all of that. A well-built market-neutral portfolio aimed to be largely indifferent to it. But indifferent is not immune. Market-neutral strategies carry their own risks — basis risk, funding risk, liquidity risk, and counterparty risk — and in a crisis those risks can bite harder than the directional risk they replaced." },
      { type: "h2", text: "The Main Building Blocks" },
      { type: "p", text: "Most market-neutral crypto portfolios are built from a small set of trade types. Pairs trades go long one asset and short a related one, betting the gap narrows, as covered in [Pairs Trading Crypto Assets](/blog/pairs-trading-crypto). Spot-versus-perpetual basis trades hold spot long and short the perpetual future, collecting funding when it is positive while hedging price exposure. Stablecoin and peg trades exploit small deviations around a peg. Cross-exchange spreads exploit price gaps between venues. A portfolio combines several of these, ideally across different drivers, so that no single relationship's failure dominates the result." },
      { type: "p", text: "Delta-neutral is the precise version of the idea: the portfolio's delta, its sensitivity to a small move in the underlying market, is kept near zero. In practice this requires active rebalancing, because deltas drift as prices move. A spot-long versus perpetual-short position that starts delta-neutral will not stay that way if one leg moves faster than the other, or if funding changes the economics of holding the short. Rebalancing costs money, so the manager must balance hedge precision against trading costs. Perfect neutrality is a theoretical target; real portfolios live with a band of acceptable residual exposure and rebalance when they leave it." },
      { type: "h2", text: "Construction: Diversification, Sizing, and Leverage" },
      { type: "p", text: "Construction starts with diversification across strategies and drivers. A portfolio of five pairs trades that all depend on the same large-cap relationship is not diversified — it is one bet in five costumes. Genuine diversification means combining trades whose failures have different causes: a pairs trade, a basis trade, a stablecoin trade, and a cross-venue spread, for example. Position sizing follows from that: each trade gets a weight sized to its risk, not its expected return, so that a single broken relationship costs a small, survivable fraction of the portfolio. Correlations should be stress-tested, not just measured in calm markets, because correlations tend to converge toward one in a crisis." },
      { type: "p", text: "Leverage is the most dangerous temptation in market-neutral construction. Because each individual trade looks low-risk, it is easy to justify leverage that multiplies a small edge into a large return. The problem is that low-risk is not no-risk, and leverage multiplies losses exactly as it multiplies gains. A basis trade that moves 2% against you is a nuisance at 1x leverage and a serious loss at 10x. Many spectacular blowups in crypto history were market-neutral strategies run with leverage that turned a manageable dislocation into a liquidation cascade. Keep leverage modest, keep a liquidation buffer, and size every position for the worst plausible move, not the average one. For sizing discipline, see [Arbitrage Risk Management](/blog/arbitrage-risk-management)." },
      {
        type: "table",
        headers: ["Design choice", "Conservative approach", "Aggressive approach"],
        rows: [
          ["Number of strategies", "Several, different drivers", "One or two, similar drivers"],
          ["Leverage", "Low or none, with buffer", "High, justified by low per-trade risk"],
          ["Rebalancing", "Bands, cost-aware", "Constant, fee-blind"],
          ["Stress testing", "Crash and liquidity scenarios", "Calm-period backtest only"],
          ["Monitoring", "Continuous, with kill-switches", "Set and forget"]
        ],
      },
      { type: "h2", text: "The Risks That Remain When Direction Does Not" },
      { type: "p", text: "Market-neutral portfolios still face serious risks. Basis risk is the risk that the relationship you trade moves against you and stays there. Funding risk is the risk that the payments on a perpetual position flip sign and start costing you instead of paying you. Liquidity risk is the risk that you cannot exit one leg at a reasonable price during stress. Counterparty risk is the risk that an exchange halts withdrawals, freezes an account, or fails while you hold a leg there. Operational risk covers everything from a misconfigured bot to a compromised API key. None of these care that your portfolio is delta-neutral." },
      {
        type: "callout",
        title: "Neutral is not safe — it is differently risky",
        text: "A market-neutral portfolio replaces directional risk with basis, funding, liquidity, and counterparty risk. Size for those risks, monitor them continuously, and never confuse a hedged position with a safe one.",
        tone: "warning",
      },
      { type: "p", text: "The practical response is monitoring and pre-planned exits. Watch funding rates, basis levels, borrow costs, and withdrawal status on every venue you use. Define in advance the conditions under which you unwind a trade or the whole portfolio, and make sure the unwind path is executable — an exit plan that requires withdrawing from an exchange that has halted withdrawals is not a plan. Keep records, keep leverage low, and treat every strategy as a hypothesis that the market can falsify at any time. Market-neutral trading rewards humility and infrastructure, not confidence." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain market-neutral construction, delta hedging, and basis trades in plain language, and it can help you draft a portfolio checklist covering diversification, leverage limits, and exit rules." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is a market-neutral crypto portfolio?",
            a: "A portfolio of paired long and short positions designed so its value depends on relative price movements — spreads, basis, funding — rather than on whether the overall market rises or falls.",
          },
          {
            q: "Is market-neutral trading risk-free?",
            a: "No. It replaces directional risk with basis, funding, liquidity, counterparty, and operational risk. Leverage can turn a small dislocation into a large loss.",
          },
          {
            q: "What does delta-neutral mean?",
            a: "The portfolio's sensitivity to a small move in the underlying market is kept near zero, usually by balancing long and short legs and rebalancing as deltas drift.",
          },
          {
            q: "How much leverage should a market-neutral portfolio use?",
            a: "Conservatively, little or none. Leverage multiplies the very dislocation risks that market-neutral strategies are exposed to, and many blowups came from leveraged neutral strategies.",
          }
        ],
      },
  ],
};
