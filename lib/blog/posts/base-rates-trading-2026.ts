import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "base-rates-trading-2026",
  title: "Base Rates in Trading: Why Your Win Rate Guess Is Probably Wrong",
  description: "Base rates in trading: why win-rate guesses run too high, how to build realistic priors, and how to combine them with your own evidence before sizing a trade.",
  keywords: [
      "Base Rates",
      "base rate neglect trading",
      "realistic win rate",
      "trading priors",
      "base rate fallacy",
      "strategy win rate estimate"
  ],
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "Traders overestimate their setup because they ignore how often it works for everyone else. This guide explains base rates, why your win-rate guess is usually too high, and how to build honest priors.",
  image: "/images/blog/base-rates-trading-2026.svg",
  blocks: [
      { type: "p", text: "Base Rates are the background frequencies that tell you how often something happens in general, before you add your special information, and ignoring them is one of the most expensive errors in trading. When a trader says a breakout setup wins 70% of the time, the right first question is not about their chart, but about the base rate: how often do breakouts in this market, on this timeframe, actually follow through at all. If the base rate is 40%, then a 70% claim needs extraordinary evidence, not just a few memorable wins. On Oct 31, 2026, BTC traded around $77,300, well below its $126,080 all-time high anchor that still haunts many holders, and in a fearful tape where gold spot had fallen below $4,000 an ounce, base rates mattered more than narratives, because stories about imminent reversals were everywhere while follow-through rates were ordinary. Starting from the base rate keeps you honest when excitement wants you to extrapolate from a vivid example." },
      { type: "h2", text: "Base-Rate Neglect: The Classic Error" },
      { type: "p", text: "Base-rate neglect happens when vivid, specific information overwhelms dull, statistical information. A trader watches three breakouts succeed in a row, hears a confident influencer describe a setup, or remembers one spectacular win, and suddenly the setup feels like a near-certainty, even though hundreds of similar breakouts failed quietly. Psychologists call this the inside view: focusing on the details of this one case while ignoring the outside view, meaning the distribution of outcomes for similar cases. The outside view is boring and unflattering, which is why it gets ignored, but it is also far more accurate for forecasting. A useful discipline is to force the outside view first: before analysing this trade, write down the base rate for this setup class, then ask what specific evidence justifies moving above or below it, and by how much. If you cannot state a base rate, you do not yet have a forecast; you have a hope." },
      { type: "p", text: "Crypto amplifies base-rate neglect because its history is short, volatile, and dominated by extreme stories. Bull-market anecdotes, where almost every long setup worked, become the mental base rate for traders who started in those years, even though those years were exceptional, not typical. Social media worsens the distortion by showcasing winners and hiding the far larger population of traders who tried the same setup and failed, which is survivorship bias feeding base-rate error. The antidote is to build base rates from your own complete trade log, including losers, and from broad market statistics, such as how often assets trend versus range on your timeframe. A base rate built from complete data, not from memory, will almost always be lower and more sobering than the rate your memory suggests, and that sobriety is a feature, not a flaw." },
      { type: "h2", text: "Realistic Priors for Common Setups" },
      { type: "p", text: "Realistic priors vary by setup, but few discretionary setups sustain win rates above 55% to 60% after costs, and many hover near 40% to 50% with payoffs doing the heavy lifting. Trend-following breakouts often win less than half the time but pay more on wins than they lose on losses. Mean-reversion trades into support often win more frequently but pay less, and fail catastrophically when support breaks and the range becomes a trend. News-driven trades, such as buying an ETF debut or a listing announcement, have especially poor base rates for chasing, because the news is already priced in by the time retail traders react, and the initial move often reverses. Use these ranges as starting priors, not as truths, and adjust them with your own data: if your breakout log shows 45% wins over 200 trades, that is your prior until new evidence moves it, not the 70% you felt during a hot streak." },
      {
        type: "table",
        headers: ["Setup class", "Typical prior win rate", "What usually carries profit"],
        rows: [
          ["Trend breakout", "40% to 50%", "Large wins outweigh frequent small losses"],
          ["Mean reversion to support", "50% to 60%", "Frequent small wins, rare large failures"],
          ["News chase after a headline", "30% to 45%", "Rarely; chasing is usually negative EV"],
          ["Range fade at extremes", "50% to 55%", "Small wins, disciplined exits"]
        ],
      },
      { type: "h2", text: "Combining Base Rates With Your Own Evidence" },
      { type: "p", text: "Base rates are starting points, not verdicts, and the skill is combining them with case-specific evidence without letting either dominate. Bayesian thinking gives a practical framework: start with the base rate, then update it modestly based on strong evidence, such as confluence of levels, volume confirmation, or a favourable regime, and update it barely at all based on weak evidence, such as a single indicator or a gut feeling. A setup with a 40% base rate plus genuinely strong confirmation might justify a 48% estimate, not a 75% estimate, because one confirming factor rarely transforms a coin-flip setup into a near-certainty. Write down your pre-trade estimate and compare it with realised results over time; if your estimates are consistently above realised win rates, you are overweighting case evidence and underweighting the base rate, and you should shrink future updates until calibration improves." },
      {
        type: "list",
        items: [
        "Start with the base rate for the setup class, not your feeling about this trade.",
        "Update modestly for strong, specific evidence; barely at all for weak evidence.",
        "Track calibration: compare estimated win rates with realised win rates.",
        "If estimates run hot, shrink updates until calibration improves."
        ],
      },
      { type: "h2", text: "Base Rates for Markets, Not Just Setups" },
      { type: "p", text: "Base rates apply to market regimes as well as to setups, and regime base rates prevent the common error of assuming a trend will continue just because it has continued recently. Most assets spend more time ranging than trending strongly, most sharp sell-offs do not immediately reverse into new highs, and most new all-time highs are followed by pullbacks rather than by straight-line continuation. On Oct 31, 2026, traders anchoring on BTC at $126,080 needed the regime base rate: after a large decline from a high, the common paths include extended consolidation, lower-high bounces, and further declines, not just instant recovery, and position sizing should reflect that distribution rather than betting on the single most hoped-for path. Similarly, gold falling below $4,000 after a long run does not automatically imply collapse or instant rebound; its base rate includes choppy consolidations that punish both extremes. Regime base rates keep you from paying trend prices for range outcomes." },
      { type: "p", text: "Base rates also discipline strategy selection. Before adopting a new strategy, ask for its base rate across traders and conditions: how many similar strategies survive out-of-sample testing, how many survive transaction costs, and how many survive a regime change. The honest answers are sobering, which is why most backtested strategies fail live, and why a strategy with a modest but robust base rate, such as a structural arbitrage edge described in [triangular-arbitrage](/guides/triangular-arbitrage), may be more valuable than a spectacular discretionary setup with no base rate at all. When a promoter shows only winners, ask for the denominator: how many traders tried this, how many failed, and what happened to the strategy in its worst year. If the denominator is missing, the base rate is being hidden, and you should assume the worst until evidence proves otherwise." },
      { type: "h2", text: "A Practical Base-Rate Checklist" },
      { type: "p", text: "Make base rates a pre-trade habit with a short checklist that takes two minutes. First, name the setup class and write its base win rate from your log or a conservative prior. Second, list one or two specific pieces of evidence for this trade and state how much each should move the estimate, in percentage points, not in adjectives. Third, compute break-even win rate from your stop and target, and only proceed if your updated estimate clears it after costs. Fourth, record the estimate so you can calibrate later. That checklist will feel slow at first, and it will filter out many trades that felt exciting but were below base-rate break-even, which is exactly its value. Over months, your estimates will calibrate, your win-rate guesses will stop running hot, and your sizing, which should follow your calibrated edge, will become steadier. For cross-venue work where base rates are structural rather than behavioural, [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) provides a useful comparison, because its edges depend less on guessing human behaviour." },
      {
        type: "callout",
        title: "Risk warning",
        text: "Win-rate estimates from small samples, bull markets, or cherry-picked examples are unreliable. Base your sizing on conservative priors and complete trade logs, and never risk money you cannot afford to lose on an uncalibrated estimate.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, built to explain reasoning concepts in plain language and help you test your thinking. For base rates, you can ask it to explain base-rate neglect with a simple example, or to help you draft a short pre-trade checklist that forces an outside view first." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is a base rate in trading?",
            a: "It is how often a setup or market pattern succeeds in general, before considering the specifics of one trade. It is the starting forecast that case-specific evidence should adjust modestly, not replace.",
          },
          {
            q: "Why are my win-rate guesses usually too high?",
            a: "Memory favours vivid wins, social media hides losers, and bull markets create unrepresentative samples. Complete trade logs and conservative priors correct that upward bias.",
          },
          {
            q: "How much should strong evidence move my estimate?",
            a: "Usually only a few percentage points, not from 40% to 75%. One confirming factor rarely transforms an ordinary setup into a near-certainty, so update modestly and track calibration.",
          },
          {
            q: "Do base rates apply to arbitrage strategies?",
            a: "Yes, but differently. Structural edges have base rates driven by liquidity, fees, and execution rather than by trader psychology, which makes them more stable, though never risk-free.",
          }
        ],
      },
  ],
};
