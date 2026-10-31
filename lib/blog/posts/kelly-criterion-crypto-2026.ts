import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "kelly-criterion-crypto-2026",
  title: "Kelly Criterion for Crypto Traders: Optimal Bet Sizing Math",
  description: "Kelly Criterion sizing for crypto: the formula, fractional Kelly, and why estimation error makes full Kelly dangerous in volatile markets with worked examples.",
  keywords: [
      "Kelly Criterion",
      "Kelly formula crypto",
      "fractional Kelly",
      "bet sizing trading",
      "optimal position size",
      "Kelly estimation error"
  ],
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  readingMinutes: 10,
  category: "Risk",
  excerpt: "The Kelly Criterion promises the fastest long-run growth, but only if your edge estimates are right. This guide works through the math, shows why full Kelly is usually too aggressive in crypto, and explains fractional Kelly.",
  image: "/images/blog/kelly-criterion-crypto-2026.svg",
  blocks: [
      { type: "p", text: "Kelly Criterion is a formula for sizing bets to maximise long-run growth when you have an edge, and it is famous precisely because it is both mathematically elegant and practically dangerous. The simple version for a trade with a win probability p, a loss probability q, and a payoff ratio b, meaning you win b units for every unit risked, is f equals p minus q divided by b, where f is the fraction of capital to risk. If you win 50% of the time with a 2-to-1 payoff, Kelly says risk 25% of capital, which sounds bold until you remember that crypto edges are estimates, not facts. On Oct 31, 2026, BTC traded around $77,300 after falling to a six-week low range near $76,326 to $78,804, a reminder that even careful estimates can be overwhelmed by a volatile, fearful market where the Fear and Greed reading sat around 29 to 30. Kelly does not protect you from being wrong about p or b; it amplifies whatever edge you think you have, including an imagined one." },
      { type: "h2", text: "The Kelly Formula in Plain Language" },
      { type: "p", text: "Think of Kelly as answering one question: if I repeated this exact trade many times, what fixed fraction of my capital should I risk each time to grow fastest without eventually blowing up. The formula balances two forces: betting more grows wealth faster when you win, but betting too much creates drawdowns so deep that recovery becomes mathematically brutal. A 50% drawdown needs a 100% gain just to get back to even, and Kelly is designed to avoid that trap by keeping bet size proportional to edge. The classic two-outcome formula is a simplification, because real trades have variable wins and losses, partial exits, fees, and slippage, but it still teaches the central lesson: size should rise with edge and payoff, and fall quickly when either shrinks. If your win rate drops from 50% to 45% on a 2-to-1 setup, Kelly falls from 25% to 17.5%, a large change from a small estimation shift." },
      { type: "p", text: "A worked example helps. Suppose a strategy wins 40% of the time, loses 60%, and averages twice as much on wins as on losses, so b equals 2. Kelly gives 0.40 minus 0.60 divided by 2, which is 0.10, or 10% of capital per trade. That is already aggressive for most traders, because a run of five losses at 10% each, even with compounding, cuts capital by roughly 40%, and the emotional pressure to abandon the strategy at exactly the wrong moment becomes intense. Now suppose the true win rate is only 35%, not 40%, because of fees or a regime change. True Kelly would be 0.35 minus 0.65 divided by 2, or just 2.5%, so betting the estimated 10% means betting four times the optimal size, which dramatically increases drawdown and risk of ruin. That sensitivity is the whole story of Kelly in crypto: the formula is exact, but its inputs are guesses." },
      { type: "h2", text: "Why Full Kelly Fails Most Crypto Traders" },
      { type: "p", text: "Full Kelly fails in practice for three reasons that stack on top of each other. First, estimation error: win rates and payoffs estimated from backtests or a few dozen live trades carry wide uncertainty, and crypto regimes change fast, so yesterday's edge may not exist tomorrow. Second, non-stationarity: volatility, liquidity, and correlations shift during stress, so a strategy that won steadily in a calm market can lose in clusters during a sell-off, exactly when Kelly-sized bets hurt most. Third, human limits: even a mathematically optimal strategy that produces 40% drawdowns will be abandoned by most humans long before the long run arrives, and a strategy you abandon has no long-run growth at all. Professional gamblers and funds that use Kelly therefore almost never use full Kelly; they use a fraction of it, accept slower growth, and buy a much smoother equity curve in return." },
      {
        type: "list",
        items: [
        "Estimation error: small mistakes in win rate or payoff cause large sizing errors.",
        "Regime change: crypto edges decay or reverse when volatility and liquidity shift.",
        "Drawdown psychology: full Kelly drawdowns cause most traders to quit early.",
        "Variable outcomes: real trades do not have one fixed win and loss size."
        ],
      },
      { type: "h2", text: "Fractional Kelly: The Practical Compromise" },
      { type: "p", text: "Fractional Kelly means betting a fixed fraction of the Kelly amount, most commonly half-Kelly or quarter-Kelly, and it is the standard practical compromise. Half-Kelly cuts expected growth by only about a quarter relative to full Kelly, while cutting volatility and drawdown depth roughly in half, which is an excellent trade for anyone who must live through the drawdowns. Quarter-Kelly cuts growth more, but produces an equity curve that most traders can actually follow without panic. A useful rule is to compute full Kelly from conservative inputs, meaning a win rate and payoff deliberately shaded below your optimistic estimate, then take half or a quarter of that result, then cap the final risk per trade at a hard ceiling such as 1% to 2% of capital, whichever is smaller. That layered approach protects you twice: once against overestimating your edge, and once against the formula itself. It also pairs well with [triangular-arbitrage](/guides/triangular-arbitrage) thinking, where many small, bounded edges beat one large, fragile bet." },
      {
        type: "table",
        headers: ["Kelly fraction", "Growth vs full Kelly", "Volatility vs full Kelly", "Who it suits"],
        rows: [
          ["Full Kelly", "100%", "100%", "Rare, disciplined professionals"],
          ["Half Kelly", "About 75%", "About 50%", "Experienced traders with an edge"],
          ["Quarter Kelly", "About 44%", "About 25%", "Most systematic traders"],
          ["Fixed 1% risk", "Lower, steadier", "Much lower", "Discretionary traders, learners"]
        ],
      },
      { type: "h2", text: "Estimating p and b Honestly" },
      { type: "p", text: "Honest estimation starts with sample size. A win rate from 20 trades is almost meaningless, because the statistical noise around it is huge, while a win rate from 300 trades in varied conditions is at least a starting point. Separate your results by regime, by asset, and by setup, because a blended win rate hides the fact that a strategy may win in trends and lose badly in ranges. Include fees, slippage, and funding costs in the payoff ratio, since a strategy that looks like 2-to-1 before costs may be closer to 1.4-to-1 after them, which changes Kelly dramatically. Finally, shrink your estimates: if your backtest says 50% wins, plan as if it were 45% until live trading confirms it, and if live trading confirms it, you can raise size gradually rather than all at once. Kelly rewards humility more than confidence, because overbetting an imaginary edge is the fastest way to destroy capital." },
      { type: "p", text: "For crypto specifically, beware of edges that come from a single market condition, such as a bull market where almost every long strategy wins, or a funding-rate regime that later normalises. Test across at least one major drawdown, check how the strategy behaved when BTC fell sharply, as it did into Oct 31, 2026, and ask whether the edge survives when liquidity thins and spreads widen. Also remember that Kelly assumes you can keep betting the same edge repeatedly with no correlation between bets; if your trades cluster around one event, one asset, or one thesis, your effective risk is far larger than the per-trade fraction suggests. In that case, size the cluster as one bet, not as many independent bets, or you will accidentally run full Kelly on a single idea wearing a disguise." },
      { type: "h2", text: "A Safe Kelly Workflow for Real Accounts" },
      { type: "p", text: "A safe workflow has five steps and no shortcuts. First, define the setup precisely enough that two traders would take the same trades from the same chart. Second, collect at least 100 trades, live or carefully out-of-sample, and compute win rate and average win versus average loss after all costs. Third, compute full Kelly, then halve it, then apply your hard cap of 1% to 2% per trade. Fourth, paper-trade or small-size the strategy for a month to confirm the live edge before scaling. Fifth, review monthly and reduce size automatically if the rolling win rate falls or drawdown exceeds a preset threshold, rather than waiting for a discretionary decision under stress. That workflow will not make you rich quickly, and that is the point: Kelly is a long-run growth tool, and the long run only rewards traders who are still in the game when it arrives. For position construction across venues, [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) offers a useful contrast, because its edges are structural and bounded, unlike directional edges that Kelly must size with great care." },
      {
        type: "callout",
        title: "Risk warning",
        text: "Kelly sizing can recommend very large bets that produce severe drawdowns if your edge is overestimated, which is common in crypto. Use fractional Kelly, cap per-trade risk, and never risk money you cannot afford to lose.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, built to explain maths in plain language and walk through calculations step by step. For Kelly, you can ask it to work through the formula with your own win rate and payoff numbers, or to explain why half-Kelly cuts volatility more than it cuts growth." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Is Kelly better than risking a fixed 1% per trade?",
            a: "Kelly can grow faster if your edge is real and stable, but fixed-percentage risk is simpler and far more forgiving when estimates are wrong. Most traders do better with fixed risk or fractional Kelly than with full Kelly.",
          },
          {
            q: "How many trades do I need to estimate Kelly inputs?",
            a: "Aim for at least 100 trades in varied conditions, and treat smaller samples as rough guesses. Shrink optimistic estimates and confirm with live trading before scaling size.",
          },
          {
            q: "Does Kelly work for arbitrage strategies?",
            a: "Kelly is designed for repeated bets with a probabilistic edge, not for near-certain spreads. Arbitrage sizing is usually limited by liquidity, fees, and execution risk rather than by the Kelly formula.",
          },
          {
            q: "What is the biggest Kelly mistake in crypto?",
            a: "Overestimating win rate or payoff from a bull-market backtest, then betting full Kelly into a regime change. Fractional Kelly plus a hard per-trade cap is the standard defence.",
          }
        ],
      },
  ],
};
