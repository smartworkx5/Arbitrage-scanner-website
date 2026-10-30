import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "sopr-spent-output-profit-2026",
  title: "SOPR Explained: Reading Profit-Taking From On-Chain Data",
  description: "SOPR Explained for 2026: how spent output profit ratio reveals profit-taking, capitulation, and trend strength in Bitcoin on-chain data for active traders.",
  keywords: [
      "SOPR Explained",
      "spent output profit ratio",
      "Bitcoin SOPR",
      "on-chain profit taking",
      "SOPR capitulation",
      "Bitcoin on-chain metrics"
  ],
  datePublished: "2026-10-30",
  dateModified: "2026-10-30",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "SOPR watches coins as they move: above 1.0, sellers take profit; below 1.0, they sell at a loss. The pattern around 1.0 reveals trend strength.",
  image: "/images/blog/sopr-spent-output-profit-2026.svg",
  blocks: [
      { type: "p", text: "SOPR Explained starts with a simple idea on October 30, 2026, as Bitcoin trades around $77,300 to $77,975, down roughly 4 to 5 percent in 24 hours, with about $356 million in crypto futures liquidated over 24 hours around October 29. When coins move on-chain, SOPR asks whether they moved at a profit or a loss compared with the price when they last moved. If sellers are consistently moving coins at a profit, the market is distributing gains; if they move coins at a loss, someone is capitulating or being forced out. Reading that flow, day after day, reveals more about trend strength than price alone." },
      { type: "h2", text: "How SOPR is calculated" },
      { type: "p", text: "Spent Output Profit Ratio divides the realised value of coins spent by the value at which those coins were created, where value means price multiplied by amount. In practice, each unspent output carries the price from when it was last received, and when it is spent, SOPR compares the spending price with that earlier price. A ratio above 1.0 means the spent coins were sold, on average, at a profit; exactly 1.0 means break-even; below 1.0 means the average spent coin was sold at a loss. The metric is usually smoothed over days or weeks, because daily prints are noisy." },
      { type: "p", text: "Two adjustments matter for serious readers. Adjusted SOPR excludes very short-term outputs, filtering out noise from coins that move within hours and do not reflect real holder decisions. Long-term-holder SOPR isolates coins held for months, showing what experienced holders are doing rather than what speculators are doing. The headline SOPR blends everyone, which is useful for the broad picture but can mislead when one group dominates a day's flow. Always check which version a chart shows before drawing conclusions." },
      { type: "h2", text: "SOPR above 1.0: profit-taking and distribution" },
      { type: "p", text: "In a bull market, SOPR typically stays above 1.0 for long stretches, because most coins moving were bought cheaper. That alone is not bearish: profit-taking is normal and healthy, and markets can rise for months while SOPR stays modestly above 1.0. The warning sign is escalation, when SOPR spikes to extreme levels as long-term holders rush to sell into euphoria. Spikes often coincide with local tops, not because profit-taking causes the top, but because the same enthusiasm that drives price also drives holders to lock in gains." },
      { type: "p", text: "The practical read is about persistence and magnitude. A gentle SOPR above 1.0 with steady price gains suggests orderly distribution, where buyers absorb supply without strain. A violent SOPR spike with surging volume suggests a blow-off, where the last buyers arrive just as the strongest hands exit. Traders who watch only price miss that distinction, because both patterns look like a rally on a chart. SOPR adds the missing dimension: who is selling, and at what profit." },
      { type: "h2", text: "SOPR below 1.0: losses and capitulation" },
      { type: "p", text: "SOPR below 1.0 means coins are moving at a loss, and the depth and duration of that condition matter enormously. A brief dip below 1.0 during a correction is normal, as weak hands sell into a pullback and stronger hands buy. A sustained period below 1.0, especially with large volume, describes capitulation: holders who waited through a long decline finally give up, often near the point of maximum pain. Capitulation is painful for those selling, but historically it has marked the exhaustion of selling pressure rather than the start of it." },
      { type: "p", text: "The trap is assuming capitulation equals an instant bottom. Selling can exhaust itself gradually, with SOPR recovering toward 1.0 over weeks while price grinds sideways, and premature buyers can sit through further declines. The more reliable signal is the reset: after a long period below 1.0, SOPR reclaiming and holding 1.0 suggests sellers no longer need to accept losses, which often accompanies a new accumulation phase. Patience after capitulation usually beats heroics during it, particularly with leverage, which the October 29 liquidation wave shows can be wiped out by a single volatile session." },
      { type: "h2", text: "The 1.0 line as trend support and resistance" },
      { type: "p", text: "One of SOPR's most useful properties is how it behaves around 1.0 in different trends. In a bull market, SOPR tends to find support at 1.0: dips touch break-even, holders refuse to sell at a loss, and price recovers. In a bear market, SOPR tends to find resistance at 1.0: rallies bring underwater holders back to break-even, they sell to escape, and price rolls over. This behaviour turns a simple ratio into a trend filter, arguably more useful than any single threshold." },
      { type: "p", text: "Watching the 1.0 line also disciplines expectations. If SOPR repeatedly fails at 1.0 from below, the market is still in a bear regime regardless of how exciting a single green week looks. If SOPR repeatedly holds 1.0 from above, the bull regime is intact despite scary corrections. Regime awareness changes everything about strategy, from position size to the usefulness of dip-buying, and it is where SOPR earns its reputation. For context on how traders handle price differences across venues during these regimes, see [cross-exchange arbitrage](/guides/cross-exchange-arbitrage), and for definitions, the [glossary](/glossary)." },
      { type: "h2", text: "Limits and common misreads" },
      { type: "p", text: "SOPR has real limits. It measures coins that move, not coins that sit still, so a market where nobody sells can look calm while risk builds silently. Exchange internal transfers, custodial reshuffling, and lost coins add noise, and adjusted versions only partly remove it. SOPR also cannot distinguish a voluntary sale from a forced liquidation, a tax sale, or a transfer mislabelled as spending, so a single extreme print should never trigger a trade on its own." },
      { type: "p", text: "The most common misread is treating SOPR as a standalone buy or sell signal. It is a flow gauge, best combined with price structure, holder-supply data, and derivatives positioning. When SOPR, MVRV, and long-term-holder supply all point the same way, the picture is strong; when they conflict, the honest answer is to wait and size smaller. On October 30, 2026, with the Fear and Greed index at 30 and Ether near $2,254, down about 4.5 percent, a careful SOPR read asks whether sellers are panicking or merely taking profits, and refuses to answer that question from one day's number." },
      {
        type: "callout",
        title: "SOPR measures movers, not holders",
        text: "SOPR only sees coins that move. A quiet SOPR can hide large unrealised losses among holders who refuse to sell, and a loud SOPR can reflect a few large wallets rather than the whole market. Always check volume and holder cohorts alongside the ratio.",
        tone: "warning",
      },
      {
        type: "list",
        items: [
        "Above 1.0: spent coins moved at a profit on average",
        "At 1.0: break-even, acting as support in bull markets and resistance in bear markets",
        "Below 1.0: spent coins moved at a loss; sustained readings suggest capitulation",
        "Adjusted SOPR filters very short-term outputs to reduce noise",
        "Long-term-holder SOPR isolates experienced holders from speculators"
        ],
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help here by explaining on-chain terms like spent outputs and profit ratios in simple words, or by comparing SOPR with MVRV so you can see what each metric adds." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What does SOPR above 1.0 mean?",
            a: "It means coins spent on that day were sold at a profit on average, compared with the price when they last moved. Sustained readings above 1.0 are normal in bull markets; extreme spikes can mark euphoric distribution.",
          },
          {
            q: "What does SOPR below 1.0 mean?",
            a: "It means spent coins moved at a loss on average. Brief dips are normal in corrections, while sustained readings below 1.0 with large volume suggest capitulation, where holders finally sell at a loss.",
          },
          {
            q: "What is adjusted SOPR?",
            a: "A version that excludes very short-term outputs, filtering noise from coins that move within hours. It gives a cleaner picture of genuine holder profit-taking and loss-taking.",
          },
          {
            q: "Can SOPR predict tops and bottoms alone?",
            a: "No. It is a flow gauge best combined with price structure, holder supply, and derivatives data. Single prints can reflect a few large wallets or exchange operations rather than the whole market.",
          }
        ],
      },
  ],
};
