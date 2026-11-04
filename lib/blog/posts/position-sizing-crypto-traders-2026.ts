import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "position-sizing-crypto-traders-2026",
  title: "Position Sizing for Crypto Traders: Volatility-Adjusted Rules That Work",
  description: "Position sizing for crypto traders in 2026: volatility-adjusted rules, risk-per-trade limits, and stake maths that survive sharp market moves in fast markets.",
  keywords: [
      "Position Sizing for Crypto Traders",
      "crypto position sizing",
      "volatility adjusted sizing",
      "risk per trade crypto",
      "crypto stake sizing",
      "trading risk management"
  ],
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "Position size, not prediction skill, decides whether a trader survives a run of losses. Volatility-adjusted sizing keeps that decision honest.",
  image: "/images/blog/position-sizing-crypto-traders-2026.svg",
  blocks: [
      { type: "p", text: "Position Sizing for Crypto Traders is the skill that decides survival before any trade is judged on its thesis, and on Wednesday 4 November 2026 the lesson is live, with Bitcoin slipping below $77,000 to around $76,540 to $76,900 as early US midterm results unsettled markets. A position sized for calm conditions becomes dangerously large when volatility doubles overnight, and a string of ordinary losses can then do extraordinary damage. Volatility-adjusted sizing fixes this by letting the market's current turbulence, not a trader's confidence, set the stake." },
      { type: "h2", text: "Risk Per Trade Comes First" },
      { type: "p", text: "Every sizing method starts with one decision: how much of the account may be lost on a single trade if the stop is hit. A widely used range is 0.5 to 2 percent of account equity per trade, with beginners and part-time traders favouring the lower end. This percentage is the budget, and the position size is simply whatever quantity makes the distance to the stop equal that budget. Framing size this way reverses the usual mistake, where traders pick a quantity that feels right and discover afterwards what they were risking." },
      { type: "p", text: "The stop distance must be honest, not aspirational. A stop placed so tightly that normal market noise triggers it will produce a stream of small losses that feel like bad luck but are really a sizing error. A stop placed beyond any plausible exit turns the risk budget into fiction. Use recent volatility to judge a realistic stop distance, place the stop where the thesis genuinely breaks, and then let the maths dictate the size. A [crypto glossary](/glossary) can clarify terms like stop loss, risk unit, and expectancy for traders still building their vocabulary." },
      { type: "h2", text: "Adjusting for Volatility" },
      { type: "p", text: "Volatility adjustment means risking the same amount of money while varying the quantity as conditions change. When an asset's daily range widens, the same stop distance in percentage terms grows, so the position must shrink to keep the monetary risk constant. When volatility contracts, the position can grow without increasing risk. Practical measures include average true range, recent daily percentage ranges, or implied volatility where available, and any of them beats the alternative of trading fixed quantities through both calm and storm. Recompute volatility on a regular schedule, such as weekly, rather than chasing every intraday spike." },
      {
        type: "list",
        items: [
        "Set risk per trade as a percentage of equity, typically 0.5 to 2 percent.",
        "Place the stop where the thesis breaks, then size so the stop equals the risk budget.",
        "Measure volatility over a recent window, such as 14 or 30 days.",
        "Shrink size when volatility rises; grow it only when volatility genuinely falls.",
        "Recalculate after large account changes, wins or losses, before the next trade."
        ],
      },
      { type: "h2", text: "The Sizing Formula in Practice" },
      { type: "p", text: "The core formula is simple: position quantity equals risk amount divided by distance to stop. If an account holds $10,000, risk per trade is 1 percent ($100), entry is $2,000, and the stop is $1,900, then the distance is $100 and the position is one unit, worth $2,000. If volatility doubles and the stop must sit at $1,800, the distance becomes $200 and the position halves to 0.5 units, still risking $100. The trader's conviction has not changed, but the exposure has, and that is exactly the point. For multi-venue execution, the [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) shows how legs must be sized together, since an unmatched leg is an unintended position." },
      {
        type: "table",
        headers: ["Account", "Risk per trade", "Stop distance", "Position value"],
        rows: [
          ["$10,000", "1% ($100)", "$100", "$2,000 at 1 unit"],
          ["$10,000", "1% ($100)", "$200", "$1,000 at 0.5 units"],
          ["$50,000", "1% ($500)", "$100", "$10,000 at 5 units"],
          ["$50,000", "0.5% ($250)", "$200", "$2,500 at 1.25 units"]
        ],
      },
      { type: "h2", text: "Correlated Positions Multiply Risk" },
      { type: "p", text: "Sizing each trade in isolation understates risk when several open positions move together, which crypto positions usually do. Five positions each risking 1 percent can behave like a single 5 percent bet if they all fall with Bitcoin, and the drawdown will arrive as one event rather than five independent ones. The remedy is portfolio-level sizing: cap total open risk across correlated positions, reduce size when adding a position similar to one already held, and treat stablecoin-funded legs with the same discipline. Traders comparing venues can use the [best arbitrage scanners](/best-crypto-arbitrage-scanners) for execution, but scanner signals never justify exceeding a risk cap." },
      { type: "p", text: "Leverage deserves explicit mention because it breaks the intuition behind every sizing rule. Leverage multiplies both the distance arithmetic and the speed of loss, and liquidation can occur before a planned stop is ever reached in a fast market. Traders using leverage should size on the leveraged exposure, not the margin posted, and should assume slippage and gaps will be worse than backtests suggest. Many experienced traders avoid leverage entirely for directional bets, reserving it, if at all, for tightly managed short-term strategies with hard risk caps." },
      { type: "h2", text: "Common Sizing Errors" },
      { type: "p", text: "The classic errors are easy to list and hard to avoid under pressure: sizing up after wins, doubling down after losses, rounding to a round number of coins instead of the calculated quantity, and ignoring fees that quietly raise the effective risk. A written sizing sheet, completed before entry and kept with the trade record, prevents most of them, because it forces the risk calculation into the open before excitement takes over. Review sizing errors monthly alongside results, since a trader who sizes well but picks mediocre trades will still usually outlast a brilliant picker who sizes recklessly." },
      {
        type: "callout",
        title: "Warning: sizing does not remove risk",
        text: "Volatility-adjusted sizing limits the damage from any single trade; it does not prevent losses, guarantee profits, or protect against market-wide crashes, exchange failures, or gaps past a stop.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, designed to explain maths and trading ideas in plain language. For this topic, it can walk through a position-sizing example step by step using your own account size and risk percentage. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What risk percentage should a beginner use per trade?",
            a: "Many educators suggest 0.5 to 1 percent of account equity per trade for beginners. The lower end leaves room for the learning curve, including the inevitable run of losses while skills develop.",
          },
          {
            q: "How often should volatility be remeasured?",
            a: "Weekly remeasurement suits most traders, with an extra check after exceptional market moves. Daily chasing of every volatility spike tends to produce unstable sizes and overtrading.",
          },
          {
            q: "Does position sizing work for long-term holdings?",
            a: "The same logic applies: size the holding so that a plausible adverse move costs an acceptable amount. Long-term holders often use wider effective stops and therefore smaller sizes relative to account equity.",
          },
          {
            q: "Can good sizing make a losing strategy profitable?",
            a: "No. Sizing controls how quickly losses arrive and how long capital survives, but it cannot turn a negative-expectancy strategy into a profitable one. Strategy edge and sizing must both be sound.",
          }
        ],
      },
  ],
};
