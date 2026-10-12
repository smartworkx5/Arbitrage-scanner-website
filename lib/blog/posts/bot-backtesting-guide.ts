import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "bot-backtesting-guide",
  title: "Backtesting Arbitrage Strategies Properly",
  description: "Backtesting arbitrage strategies the right way: realistic fees, slippage, and latency assumptions. How to avoid overfitting and actually trust your results.",
  keywords: [
      "backtesting arbitrage strategies",
      "crypto backtest guide",
      "avoid overfitting trading",
      "realistic backtest assumptions",
      "arbitrage strategy testing"
  ],
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
  readingMinutes: 10,
  category: "Strategies",
  excerpt: "Most backtests lie — not maliciously, but through optimistic assumptions. Here is how to backtest arbitrage strategies with realistic fees, slippage, and latency so results mean something.",
  image: "/images/blog/bot-backtesting-guide.svg",
  blocks: [
      { type: "p", text: "**Backtesting arbitrage strategies** — replaying historical market data through your trading logic to estimate performance — is the cheapest way to kill a bad idea and the most dangerous way to fall in love with one. Done properly, a backtest tells you whether your logic is sound, where it breaks, and what it costs. Done sloppily, it manufactures confidence: a beautiful equity curve built on fills you would never have gotten, at prices that never existed for you. This guide covers the realistic assumptions that separate useful backtests from expensive fiction, with special attention to the ways arbitrage backtests deceive." },
      { type: "p", text: "Arbitrage backtests are uniquely treacherous because the edges are tiny. A momentum strategy with 20% annual returns can absorb sloppy cost modeling and still look fine; an arbitrage strategy targeting fractions of a percent per trade is destroyed by a single unrealistic assumption. October 2026 illustrates the regime problem: bitcoin dropped to $80,420 on October 9, then recovered to $83,650–$83,854 by October 12 — a backtest trained only on the calm weeks before would have learned spreads and liquidity conditions that the volatile days violated. Your backtest must include the ugly days, not just the pretty ones." },
      { type: "h2", text: "What a Backtest Can and Cannot Tell You" },
      { type: "p", text: "A backtest validates logic: does the strategy identify the opportunities it claims to, does the position math work, do the risk rules trigger when they should? It estimates the strategy's behavior across different market regimes — trending, choppy, panicky — and it reveals structural flaws like strategies that only work when spreads are wide but never trade when they are. What it cannot tell you is your actual future fills. Historical data shows quotes; it does not show whether your order would have been filled at that quote, ahead of which queue, against which competing bots." },
      { type: "p", text: "This distinction matters more in arbitrage than anywhere else. A backtest that assumes you capture the full quoted spread on every signal is assuming you are the fastest participant in every market at every moment — an assumption that is wrong essentially always. Treat backtest results as an upper bound on reality: your live results will be worse by the sum of every friction the backtest ignored. The honest question a backtest answers is not will this make money, but is the logic coherent enough to deserve paper trading?" },
      { type: "h2", text: "The Realistic Assumptions Checklist" },
      { type: "p", text: "Fees first: model taker fees on every leg at your actual fee tier, not the advertised best-case tier — and remember both legs pay. Most beginners model one side or use maker fees they will never earn as an aggressive arbitrageur. Our [fee tier explainer](/blog/fee-tiers-explained) shows how much tier assumptions change the math. Slippage second: assume your fills are worse than the mid-price by a realistic fraction of the spread, scaled by your order size relative to book depth. A backtest trading $10,000 through a book with $2,000 on the top level is fantasy." },
      { type: "p", text: "Latency third: delay your simulated fills by your real round-trip time — tens to hundreds of milliseconds for a VPS setup — and recompute the spread at the delayed timestamp, not the signal timestamp. Quotes move; the edge you saw is not the edge you get. Fourth: model partial fills and failures. In real markets, some signals produce no fill, some produce half fills, and some leave you briefly unhedged. A backtest that fills 100% of signals at full size is describing a market with no competition, which does not exist. Fifth: include funding costs, transfer fees, and withdrawal fees wherever the strategy actually incurs them — the [hidden costs breakdown](/blog/hidden-costs-arbitrage) is a checklist for the frictions beginners forget." },
      {
        type: "table",
        headers: ["Assumption", "Optimistic (wrong)", "Realistic (right)"],
        rows: [
          ["Fees", "Best-tier maker fees, one leg", "Your actual taker tier, both legs"],
          ["Slippage", "Filled at mid-price", "Worse than mid, scaled to book depth"],
          ["Latency", "Instant execution at signal price", "Delayed fills at post-delay prices"],
          ["Fill rate", "100% of signals, full size", "Partial fills, missed signals modeled"],
          ["Market impact", "None", "Degrade fills as size grows vs. book"],
          ["Data", "Clean, survivorship-biased", "Includes delistings, outages, ugly days"]
        ],
      },
      { type: "h2", text: "Avoiding Overfitting: The Silent Killer" },
      { type: "p", text: "**Overfitting** means tuning your strategy to the noise of your historical data rather than its signal — adding rules until the backtest looks perfect on the past and fails on the future. Every parameter you optimize (spread threshold, lookback window, cooldown period) is a degree of freedom the strategy uses to memorize history. The symptoms are classic: spectacular backtest returns, many finely-tuned parameters, and performance that degrades immediately in live trading. In arbitrage, overfitting often takes the form of thresholds calibrated to a specific volatility regime that no longer exists." },
      { type: "p", text: "The defenses are standard but rarely followed. Split your data: develop on one period, validate on a completely separate out-of-sample period you never touch during development — and be honest about never peeking. Prefer strategies with few parameters; a three-parameter strategy that works across regimes beats a fifteen-parameter one that works on one. Test across regimes deliberately: your backtest must include crashes, low-volatility grinds, and exchange-specific disruptions. And apply the common-sense filter: if you cannot explain in one sentence why the edge exists structurally, you have probably fit noise. Our [drawdown analysis](/blog/arbitrage-drawdowns) shows what regime changes do to strategies that memorized the old one." },
      {
        type: "callout",
        title: "Walk-forward testing beats single backtests",
        text: "Instead of one backtest on all history, use walk-forward analysis: optimize on a trailing window, test on the next unseen window, then roll forward. It simulates how you would actually adapt over time and exposes strategies whose edge existed only in one historical stretch.",
        tone: "info",
      },
      { type: "h2", text: "Data Quality: Garbage In, Gospel Out" },
      { type: "p", text: "A backtest is only as honest as its data. You need timestamped order-book snapshots or tick data — not hourly candles — because arbitrage lives inside the candle. Data must be survivorship-inclusive: pairs that were delisted, exchanges that failed, symbols that were renamed. Survivorship bias quietly flatters every backtest by deleting the failures from history. Timestamps must align across venues to the millisecond, or your cross-exchange spreads are fiction. And corporate actions of crypto — token migrations, redenominations, contract swaps — must be adjusted, or your price series contains phantom gaps." },
      { type: "p", text: "Free data is usually insufficient for serious backtesting: aggregated or sampled feeds smooth away the very microstructure your strategy trades. Budget for quality historical tick or book data if you are serious, and always sanity-check it — plot the spreads, look for impossible prints, verify against known events. A backtest on bad data does not give approximate answers; it gives confident wrong ones, which are worse than no answers." },
      { type: "h2", text: "From Backtest to Paper Trading to Live" },
      { type: "p", text: "Treat backtesting as stage one of three. Stage two is paper trading: run the strategy against live market data with simulated execution, which catches everything backtests cannot — feed disconnects, API quirks, timing issues, and the psychological reality of watching it operate. Run paper trading for weeks, through varied market conditions, and demand that its results roughly match your backtest's degraded expectations. Large divergences mean your backtest assumptions were wrong; find out which before money is involved." },
      { type: "p", text: "Stage three is small-size live trading: real orders, real fees, real slippage, with capital sized so that total loss is affordable tuition. Live results will underperform paper results — that gap is the final measure of your assumption quality. Only after weeks of live trading behaving roughly as modeled do you scale. This pipeline — realistic backtest, extended paper trading, small live — is how professionals earn the right to size up. Skipping stages does not save time; it concentrates the tuition into fewer, more expensive lessons." },
      {
        type: "list",
        items: [
        "Model taker fees on both legs at YOUR tier, slippage scaled to book depth, and real latency delays.",
        "Assume partial fills and missed signals — 100% fill rates do not exist in competitive markets.",
        "Split data into development and untouched out-of-sample periods; never optimize on the test set.",
        "Prefer few-parameter strategies; test across crashes, grinds, and disruptions.",
        "Backtest → paper trade for weeks → small live: earn each stage before advancing."
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "How much historical data do I need for a backtest?",
            a: "Enough to cover multiple market regimes — ideally 1–2 years including volatile episodes, crashes, and calm periods. A backtest on three calm months tells you nothing about how the strategy survives stress. For arbitrage specifically, include events like exchange outages and extreme volatility days, since those reveal the strategy's true risk.",
          },
          {
            q: "What is overfitting in backtesting?",
            a: "Overfitting is tuning a strategy's parameters until it performs perfectly on historical data by memorizing noise rather than capturing a real edge. Symptoms include many optimized parameters, spectacular backtest returns, and immediate live underperformance. Defenses: few parameters, out-of-sample validation, walk-forward testing, and requiring a structural explanation for the edge.",
          },
          {
            q: "Should backtests assume maker or taker fees?",
            a: "Taker fees, on both legs, at your actual fee tier. Arbitrageurs hitting spreads aggressively pay taker fees; assuming maker fees or modeling only one side is one of the most common ways backtests overstate returns. Check your exchange's actual tier for your volume.",
          },
          {
            q: "Why do live results always underperform backtests?",
            a: "Because backtests cannot fully capture latency (quotes move before your fill), adverse selection (faster traders pick off the quotes you wanted), partial fills, API failures, and your own operational mistakes. Treat backtest results as an optimistic upper bound and size expectations — and positions — accordingly.",
          },
          {
            q: "Is walk-forward testing better than a single backtest?",
            a: "Yes, for strategies you will maintain over time. Walk-forward analysis optimizes on a trailing window and tests on the next unseen window, rolling forward — simulating real adaptation and exposing edges that existed only in one historical stretch. It is more work but far more honest than a single optimized backtest.",
          }
        ],
      },
  ],
};
