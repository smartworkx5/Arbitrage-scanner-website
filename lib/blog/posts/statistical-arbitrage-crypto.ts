import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "statistical-arbitrage-crypto",
  title: "Statistical Arbitrage in Crypto",
  description: "Statistical arbitrage uses price relationships, not predictions, to trade crypto. Learn cointegration, mean reversion, z-scores, backtesting, and model risk.",
  keywords: [
      "statistical arbitrage crypto",
      "crypto pairs mean reversion",
      "cointegration crypto trading",
      "z-score trading crypto",
      "stat arb backtesting",
      "quantitative crypto trading"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 10,
  category: "Strategies",
  excerpt: "Statistical arbitrage trades the relationship between prices rather than the direction of any single coin. Here is how cointegration, z-scores, and backtesting work — and where the models break.",
  image: "/images/blog/statistical-arbitrage-crypto.svg",
  blocks: [
      { type: "h2", text: "What Statistical Arbitrage Actually Is" },
      { type: "p", text: "Statistical arbitrage, often called stat arb, is a family of strategies that trade the relationship between prices instead of betting on the direction of a single asset. The core idea is that two prices which have historically moved together will tend to return to their usual relationship after they drift apart. When the gap stretches unusually wide, the trader sells the relatively expensive leg and buys the relatively cheap one, expecting the gap to narrow. When it does, both legs are closed for a profit. When it does not, the trader loses. Nothing here is guaranteed, and the edge comes from the relationship holding on average, not from any single trade being safe." },
      { type: "p", text: "This is fundamentally different from directional trading. A directional trader needs to be right about whether Bitcoin goes up or down. A stat arb trader needs the relationship between two prices to behave roughly as it has in the past, even while both prices move unpredictably. That is why stat arb is usually described as market-neutral in theory: the two legs hedge each other, and the profit comes from the spread, not from the market's direction. In practice, crypto's volatility and regime shifts mean the neutrality is imperfect, as the 15 October 2026 session showed — Bitcoin near $80,980 to $81,835 after a hot US inflation print, Ether near $2,414 to $2,426, and about $973 million in liquidations in 24 hours. On days like that, historical relationships can break faster than any model expects." },
      { type: "h2", text: "Cointegration, Mean Reversion, and Z-Scores" },
      { type: "p", text: "The statistical foundation of most stat arb is cointegration: a long-run equilibrium relationship between two or more price series. Two assets are cointegrated if a combination of their prices tends to revert to a stable average, even though each price wanders on its own. Common crypto examples include two large-cap coins that share the same market drivers, a spot price and its perpetual futures price, or two stablecoins pegged to the same currency. Cointegration is tested statistically, not assumed from a chart that looks correlated. Correlation measures whether prices move together day to day; cointegration measures whether their gap stays bounded over time. That distinction matters, because correlated prices can drift apart permanently while cointegrated ones tend to snap back." },
      { type: "p", text: "In practice, traders track the spread between the legs and standardise it with a z-score: how many standard deviations the current spread sits from its historical average. A common rule of thumb is to enter when the z-score exceeds roughly two, meaning the gap is unusually wide, and to exit when it returns toward zero. The exact thresholds, lookback windows, and stop rules are the strategy's real design decisions, and they matter more than the concept itself. A z-score computed over a calm month behaves very differently from one computed across a crash, and a threshold that worked in a trending market can fail in a ranging one. Treat every parameter as a hypothesis to test, not a law of nature. For the related two-asset approach, see [Pairs Trading Crypto Assets](/blog/pairs-trading-crypto)." },
      { type: "h2", text: "Backtesting: Where Most Stat Arb Strategies Die" },
      { type: "p", text: "Backtesting is how a stat arb idea earns the right to trade real money, and it is also where most ideas die. A proper backtest replays the strategy over historical data with realistic fees, slippage, funding costs, and execution delays, and checks whether the edge survives. A naive backtest that ignores costs, uses closing prices you could never have traded at, or peeks at future data will show profits that vanish the moment real money is involved. Overfitting is the quiet killer: a strategy tuned until it looks perfect on past data is usually tuned to the noise of that specific period, not to a durable relationship." },
      {
        type: "list",
        items: [
        "Include all costs: trading fees, funding, slippage, and transfer or borrowing costs.",
        "Use out-of-sample data: test on a period the strategy was never tuned on.",
        "Check regime robustness: does it survive crashes, rallies, and flat markets?",
        "Watch for look-ahead bias: never use data that would not have been available at the time.",
        "Start small: forward-test live with tiny size before scaling anything."
        ],
      },
      { type: "p", text: "Walk-forward testing is a stronger discipline than a single backtest. It tunes parameters on one window, tests on the next unseen window, then rolls forward, mimicking how a live strategy must adapt. Even then, a strategy that passes backtests can fail live because of execution realities: the borrow you need is unavailable, the futures contract's liquidity thins, or an exchange halts withdrawals during a shock. Paper-trade any stat arb strategy in live conditions for weeks before committing capital, and treat the first live trades as a test of your execution pipeline, not as income. For execution-risk habits, see [Arbitrage Risk Management](/blog/arbitrage-risk-management)." },
      { type: "h2", text: "The Risks That Break Stat Arb Models" },
      { type: "p", text: "Stat arb models break for reasons that are easy to list and hard to survive. Regime change is the biggest: a protocol upgrade, a delisting, a regulatory shock, or a market crash can permanently alter a relationship that held for years. If you keep betting on reversion after the relationship has fundamentally changed, losses compound. Funding and borrow costs are the second: a short leg that is expensive to borrow, or a futures position with persistently adverse funding, can bleed the edge away even when the spread moves in your favour. Liquidity is the third: a model that assumes you can exit both legs instantly will fail when one leg's order book thins during stress." },
      {
        type: "callout",
        title: "A broken relationship does not owe you reversion",
        text: "When a cointegrated pair breaks structurally — a delisting, a protocol failure, a regulatory shock — the spread can keep widening. Always trade with stop rules and position limits that assume the model is wrong.",
        tone: "warning",
      },
      { type: "p", text: "The practical defences are position sizing, stop rules, and monitoring. Cap any single pair's share of capital, set a maximum adverse z-score at which you exit regardless of what the model says, and monitor for news that could change the relationship's fundamentals. Diversify across several uncorrelated pairs rather than concentrating on one, and keep a human in the loop: a model that runs unattended through a market shock is a model waiting for a bad day. Stat arb rewards discipline and infrastructure far more than cleverness. The traders who last are the ones whose risk rules survive the days their models do not." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain cointegration, z-scores, and backtesting in plain language, and it can help you draft a checklist of backtest pitfalls to check before trusting any strategy." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is statistical arbitrage in simple terms?",
            a: "Trading the relationship between two prices that historically move together. When the gap widens unusually, you sell the expensive leg and buy the cheap one, expecting the gap to narrow.",
          },
          {
            q: "Is statistical arbitrage risk-free?",
            a: "No. Relationships can break permanently, funding and borrow costs can erase the edge, and liquidity can vanish during stress. Position limits and stop rules are essential.",
          },
          {
            q: "What is the difference between correlation and cointegration?",
            a: "Correlation measures whether prices move together day to day. Cointegration measures whether the gap between them stays bounded over time and tends to revert. Stat arb relies on cointegration, not correlation alone.",
          },
          {
            q: "Do I need programming skills for stat arb?",
            a: "Serious stat arb usually requires code for data, testing, and execution. Beginners can start by learning the concepts and paper-trading simple pairs before investing in the technical stack.",
          }
        ],
      },
  ],
};
