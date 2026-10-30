import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "mvrv-ratio-bitcoin-guide-2026",
  title: "MVRV Ratio Explained: Bitcoin's Most Watched On-Chain Metric",
  description: "MVRV Ratio explained for 2026: how market value versus realised value works, what its zones signal, and why it fails when used alone for trade timing.",
  keywords: [
      "MVRV Ratio",
      "Bitcoin MVRV",
      "on-chain metrics",
      "MVRV zones",
      "Bitcoin valuation metric",
      "realised value Bitcoin"
  ],
  datePublished: "2026-10-30",
  dateModified: "2026-10-30",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "MVRV compares what Bitcoin is worth on the market with what holders actually paid. High readings warn of overheating; low readings mark deep value, not a guaranteed bottom.",
  image: "/images/blog/mvrv-ratio-bitcoin-guide-2026.svg",
  blocks: [
      { type: "p", text: "MVRV Ratio is the on-chain metric traders check first on October 30, 2026, when Bitcoin trades around $77,300 to $77,975, down roughly 4 to 5 percent in 24 hours after breaking below $80,000 on October 29 and below $78,000 on October 30. In a sell-off, the question is not just how far price fell but how far it fell relative to what holders actually paid, and that is exactly what MVRV measures. It divides market capitalisation by realised capitalisation, giving a single number for how much profit, on average, the market is sitting on. High values mean holders are deep in profit and tempted to sell; low values mean the average holder is near break-even or underwater." },
      { type: "h2", text: "The calculation, in plain terms" },
      { type: "p", text: "Market capitalisation is simple: current price multiplied by circulating supply. Realised capitalisation is subtler: it values each coin at the price when it last moved on-chain, which approximates what its current holder paid for it. Summing those last-moved prices across all coins gives an aggregate cost basis for the whole network. Dividing market value by realised value therefore answers a specific question: for every dollar the average holder paid, how many dollars is the market now offering? A reading of 2.0 means the market values coins at roughly twice what holders paid; a reading below 1.0 means the market values them below aggregate cost." },
      { type: "p", text: "The power of the metric is that it is anchored in real transactions, not in sentiment surveys or price patterns alone. Every coin that moves at a price updates realised value, so the denominator reflects genuine holder behaviour over time. The weakness is the same mechanism: coins lost, dormant, or held for a decade still count at their last moved price, and exchange internal transfers can create noise. MVRV is therefore a valuation gauge, not a precise accounting of anyone's portfolio. Use it to judge whether the market as a whole is stretched or depressed, not to calculate your own gain." },
      { type: "h2", text: "Reading the zones" },
      { type: "p", text: "Traders usually read MVRV in zones rather than exact numbers, because the thresholds have shifted across cycles as the market matured. Very high readings, historically above roughly 3 to 4, have coincided with euphoric tops, when long-term holders distribute heavily into new buyers. Mid-range readings around 1.5 to 2.5 often describe a healthy bull market, where profit exists but is not extreme. Readings near 1.0 describe a market at aggregate break-even, often after a long drawdown, and readings below 1.0 describe capitulation territory, where the average holder is underwater and selling pressure may be exhausted." },
      { type: "p", text: "Zones are guides, not triggers. MVRV can stay elevated for months in a strong bull market, punishing anyone who sells on the first high reading, and it can stay below 1.0 for months in a bear market, punishing anyone who buys on the first low reading. The metric also tends to compress over cycles: as Bitcoin grows and institutional holders lengthen holding periods, the peaks of each cycle have arguably become less extreme. Comparing a 2026 reading directly with a 2017 peak without adjusting for that structural change is a common error. Always ask whether the zone is confirmed by holder behaviour, not just by the number." },
      { type: "h2", text: "What history actually shows" },
      { type: "p", text: "History shows MVRV doing two jobs well and one job badly. It identifies overheating reliably: the major cycle tops of the past decade all featured MVRV readings far above normal, accompanied by heavy long-term-holder selling. It identifies deep value reasonably: readings below 1.0 have historically marked periods when patient accumulation was eventually rewarded, though not immediately. It times entries and exits badly: the exact top and bottom of MVRV within a zone have varied widely, and traders who treated a threshold as a signal rather than a condition often sold too early or bought too early." },
      { type: "p", text: "The October 30, 2026 backdrop illustrates why context matters. With Ether near $2,254, gold near $4,002 to $4,008 per ounce, and the Fear and Greed index at 30, the market is fearful but not necessarily capitulated, and a single MVRV print cannot resolve that ambiguity. Combine MVRV with the direction of holder supply, exchange flows, and macro conditions: a low MVRV with long-term holders accumulating looks different from a low MVRV with holders still distributing. For a primer on how traders exploit price differences while waiting for valuation signals, see [cross-exchange arbitrage](/guides/cross-exchange-arbitrage), and for terminology, the [glossary](/glossary)." },
      { type: "h2", text: "MVRV versus its cousins" },
      { type: "p", text: "MVRV has relatives that answer slightly different questions, and confusing them is easy. The MVRV Z-score standardises MVRV against its own history, expressing how extreme a reading is relative to past volatility, which helps when raw thresholds drift across cycles. Realised price, which is realised capitalisation divided by supply, gives the average cost basis as a price level, so traders can compare it directly with spot price. Net unrealised profit and loss, covered elsewhere in this series, expresses the same profit picture as a share of market value rather than as a ratio." },
      { type: "p", text: "Each variant has the same underlying data and therefore the same blind spots: lost coins, exchange noise, and the assumption that last movement equals purchase. The practical approach is to use MVRV as one vote in a committee of indicators, alongside realised price, holder-supply trends, and funding and leverage data. When several independent measures point the same way, confidence rises; when they disagree, the honest answer is uncertainty, and position size should shrink accordingly. No single on-chain metric has ever been sufficient on its own, and MVRV is no exception." },
      { type: "h2", text: "Using MVRV without fooling yourself" },
      { type: "p", text: "A disciplined MVRV routine is simple. Check the level and the trend: a falling MVRV from a high zone means profit is being squeezed out, while a rising MVRV from a low zone means holders are moving back into profit. Check the company it keeps: long-term-holder supply, exchange balances, and derivatives positioning should confirm or challenge the story. Decide in advance what action, if any, a zone triggers, and write it down before the market moves, because in the moment every reading feels like an emergency." },
      { type: "p", text: "Above all, separate valuation from timing. MVRV can tell you Bitcoin looks expensive or cheap relative to holder cost, but it cannot tell you what happens next week, and expensive markets can get more expensive while cheap markets get cheaper. That distinction protects both traders and long-term holders: traders avoid overleveraging on a valuation signal, and holders avoid panic-selling a sound position because a metric flashed a warning. Valuation guides patience; it does not replace risk management, diversification, or position sizing." },
      {
        type: "callout",
        title: "A zone is not a trade signal",
        text: "Never buy or sell on an MVRV threshold alone. High readings can persist for months in bull markets and low readings can persist for months in bear markets. Use MVRV as a valuation condition, confirmed by holder behaviour and market structure, not as a timing trigger.",
        tone: "warning",
      },
      {
        type: "table",
        headers: ["MVRV zone", "Typical meaning", "Common mistake"],
        rows: [
          ["Above ~3-4", "Euphoric, holders deep in profit", "Selling everything on first high print"],
          ["~1.5-2.5", "Healthy bull market profit", "Assuming the top is near"],
          ["Near 1.0", "Aggregate break-even", "Calling the bottom too early"],
          ["Below 1.0", "Capitulation territory", "Buying with leverage on first low print"]
        ],
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help here by explaining on-chain concepts like market capitalisation and realised value in simple words, or by drafting a research checklist for comparing valuation metrics before you rely on any one of them." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What does an MVRV of 2.0 mean?",
            a: "Roughly that the market values Bitcoin at twice the aggregate price holders last paid for their coins. It means the average holder sits on about 100 percent unrealised profit, not that any individual holder does.",
          },
          {
            q: "Is MVRV below 1.0 a buy signal?",
            a: "It marks a market valued below aggregate cost, historically associated with deep value, but it is not a timing signal. Readings below 1.0 have persisted for months, so it should guide patience and sizing, not leveraged buying.",
          },
          {
            q: "How is realised capitalisation different from market capitalisation?",
            a: "Market capitalisation values every coin at today's price. Realised capitalisation values each coin at the price when it last moved on-chain, approximating aggregate holder cost basis.",
          },
          {
            q: "Why do MVRV thresholds change across cycles?",
            a: "Market structure changes: more institutional holders, longer holding periods, and deeper liquidity can compress extremes. Comparing a 2026 reading with a 2017 peak without adjusting for that change overstates the signal.",
          }
        ],
      },
  ],
};
