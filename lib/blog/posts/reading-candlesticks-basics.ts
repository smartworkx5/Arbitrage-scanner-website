import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "reading-candlesticks-basics",
  title: "Candlestick Basics for Arbitrageurs",
  description: "Candlesticks show where price has been and how hard it moved. Learn to read candle structure, spot momentum and reversals, and use charts without overtrading.",
  keywords: [
      "candlestick basics arbitrage",
      "how to read candlesticks",
      "candlestick patterns beginners",
      "crypto candlestick chart guide",
      "candlestick momentum signals"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 8,
  category: "Basics",
  excerpt: "Arbitrageurs do not trade chart patterns, but they do read momentum, exhaustion, and risk off a chart. Here is the candlestick literacy that actually helps — and the patterns to ignore.",
  image: "/images/blog/reading-candlesticks-basics.svg",
  blocks: [
      { type: "h2", text: "What a Candlestick Actually Shows" },
      { type: "p", text: "A candlestick compresses a whole period of trading into one shape. Each candle covers a fixed interval: one minute, one hour, one day. It shows four numbers: the open, the high, the low, and the close. The body spans the open to the close, and the wicks, also called shadows, stretch to the high and the low. A candle that closes higher than it opened is usually drawn green or hollow, and one that closes lower is red or filled. That is all a candlestick is: open, high, low, close, drawn as a picture." },
      { type: "p", text: "The picture is useful because it shows not just where price went, but how it got there. A long green body with short wicks means buyers controlled the whole period. A small body with long wicks means price swung both ways and ended near where it started: a fight with no winner. A long upper wick means price rose and was pushed back down. A long lower wick means price fell and buyers stepped in. Learning to read that effort-versus-result story is the entire skill. For the order-book side of the same story, see [Reading Crypto Order Books](/blog/reading-crypto-order-books)." },
      { type: "h2", text: "The Candle Shapes That Matter Most" },
      { type: "p", text: "A handful of shapes carry most of the information. A marubozu, a long body with almost no wicks, signals strong one-sided momentum: the period belonged to buyers or sellers. A doji, a tiny body with long wicks, signals indecision: neither side could hold ground, and a trend may be pausing. A hammer, a small body at the top with a long lower wick, shows sellers pushed price down and buyers pushed it back: a possible sign of buying interest after a decline. A shooting star is the mirror image: a small body at the bottom with a long upper wick, showing buyers pushed up and were rejected." },
      { type: "p", text: "Engulfing candles matter because they show a shift in control. In a bullish engulfing pattern, a green candle's body fully covers the previous red candle's body: sellers had control, then buyers took it back in one period. In a bearish engulfing pattern, the reverse happens. These patterns are not predictions. They are descriptions of what just happened, and they become meaningful only with context: where they occur, how much volume backs them, and what the surrounding trend looks like. A hammer after a long fall means something different from a hammer in the middle of a sideways drift, and beginners lose money by treating patterns as fortune-telling instead of evidence." },
      {
        type: "table",
        headers: ["Shape", "What it looks like", "What it suggests"],
        rows: [
          ["Marubozu", "Long body, almost no wicks", "Strong one-sided momentum"],
          ["Doji", "Tiny body, long wicks", "Indecision, trend may pause"],
          ["Hammer", "Small top body, long lower wick", "Sellers rejected, buyers stepping in"],
          ["Shooting star", "Small bottom body, long upper wick", "Buyers rejected, sellers stepping in"],
          ["Engulfing", "Body fully covers prior body", "Possible shift in control"]
        ],
      },
      { type: "h2", text: "How Arbitrageurs Actually Use Candlesticks" },
      { type: "p", text: "Arbitrageurs do not buy breakouts or trade chart patterns for their own sake, because arbitrage profits come from price gaps, not from predicting direction. Candlesticks help in three narrower ways. First, timing: a chart full of long, volatile candles warns you that spreads will be jumpy, slippage will be worse, and transfers are riskier. A chart of small, calm candles suggests the opposite. Second, momentum awareness: a violent selloff candle on one exchange that has not yet appeared on another is a clue that a gap may be opening, or closing, right now. Third, risk assessment: long wicks on high timeframes tell you the market is rejecting extremes, which is useful context when you are holding an unhedged leg." },
      { type: "p", text: "On 15 October 2026, Bitcoin traded near $80,980 to $81,835 after a hot US inflation print, with about $973 million in liquidations in 24 hours. On the charts, that session showed the classic shock signature: long red candles, long lower wicks as buyers tried to catch the fall, and rapid reversals. An arbitrageur reading those candles would have known the environment was hostile to slow transfers and kind to nobody's market orders. The correct response was smaller size, wider margins, and no improvisation, not a clever pattern trade. For the risk framework behind that judgement, see [Arbitrage Risk Management](/blog/arbitrage-risk-management) and [Volatility and Arbitrage Impact](/blog/volatility-arbitrage-impact)." },
      { type: "h2", text: "Timeframes: The Same Chart, Different Stories" },
      { type: "p", text: "A candlestick chart changes completely when you change the timeframe. A one-minute chart shows noise: hundreds of candles, most of them meaningless. A daily chart shows structure: trends, exhaustion, and the big turning points. Beginners make two opposite mistakes here. Some stare at one-minute charts and overtrade every wick. Others look only at daily charts and miss that a spread on an hourly chart is already closing. The practical rule is to use higher timeframes for context and lower timeframes for execution timing. The daily chart tells you whether the market is calm or in a panic. The short chart tells you whether the gap you want to trade is still open right now." },
      {
        type: "list",
        items: [
        "Daily and 4-hour charts: trend, volatility regime, major turning points.",
        "1-hour chart: the working view for most arbitrage timing decisions.",
        "15-minute and shorter: execution timing only, never strategy.",
        "Always check volume alongside candles: a big candle on thin volume is weaker evidence.",
        "One candle is noise; a pattern across several candles with volume is evidence."
        ],
      },
      {
        type: "callout",
        title: "Candlesticks describe the past, not the future",
        text: "No candle pattern predicts price. Candles tell you what buyers and sellers just did, and how hard they fought. Use them to judge conditions and risk, not to forecast the next move.",
        tone: "info",
      },
      { type: "h2", text: "Common Candlestick Mistakes to Avoid" },
      { type: "p", text: "The most common mistake is pattern-hunting: scanning charts for textbook shapes and trading them as if they were signals. Real charts are messy, textbook patterns are rare, and a pattern that works in a trending market fails in a sideways one. The second mistake is ignoring volume: a dramatic candle on tiny volume is a small number of traders moving a thin market, not a conviction shift. The third is timeframe-hopping: flipping between intervals until you find one that supports the trade you already want to make. Pick your timeframes before the session, read them honestly, and let them inform your risk, not your hopes. Candlestick literacy is a defensive skill for arbitrageurs: it keeps you out of bad conditions more often than it puts you into good trades." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain candlestick shapes in plain language, quiz you on reading open, high, low, and close, and help you draft a simple chart-reading checklist for volatile sessions." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What do the four parts of a candlestick show?",
            a: "The open, high, low, and close for one period. The body spans open to close, and the wicks stretch to the high and low. Colour shows whether the period closed higher or lower than it opened.",
          },
          {
            q: "Do candlestick patterns predict price moves?",
            a: "No. They describe what buyers and sellers just did. Patterns gain meaning only with context — trend, timeframe, and volume — and should inform risk assessment, not forecasts.",
          },
          {
            q: "Which timeframe should an arbitrageur watch?",
            a: "Higher timeframes for context and volatility regime, the 1-hour chart for most timing decisions, and short timeframes for execution timing only. Staring at 1-minute charts encourages overtrading.",
          },
          {
            q: "What is the most useful candlestick signal for arbitrage?",
            a: "Volatility regime: long, jumpy candles warn of worse slippage and riskier transfers, while small, calm candles suggest steadier conditions. That judgement shapes sizing more than any pattern.",
          }
        ],
      },
  ],
};
