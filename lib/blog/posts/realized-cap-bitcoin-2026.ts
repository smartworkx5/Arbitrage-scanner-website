import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "realized-cap-bitcoin-2026",
  title: "Realized Cap vs Market Cap: Bitcoin's True Cost Basis",
  description: "Realized Cap vs Market Cap explained: what Bitcoin's aggregate cost basis reveals, how the gap signals tops and bottoms, and where the metric misleads.",
  keywords: [
      "Realized Cap vs Market Cap",
      "Bitcoin realized cap",
      "Bitcoin cost basis",
      "realized price Bitcoin",
      "market cap vs realized cap",
      "Bitcoin valuation on-chain"
  ],
  datePublished: "2026-10-30",
  dateModified: "2026-10-30",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "Market cap asks what Bitcoin is worth today. Realised cap asks what holders paid. The gap between them is the market's unrealised profit, and its history.",
  image: "/images/blog/realized-cap-bitcoin-2026.svg",
  blocks: [
      { type: "p", text: "Realized Cap vs Market Cap is the comparison that grounds every other on-chain valuation metric on October 30, 2026, as Bitcoin trades around $77,300 to $77,975, down roughly 4 to 5 percent in 24 hours after breaking below $80,000 on October 29. Market capitalisation is the number everyone quotes: price times supply. Realised capitalisation is the number fewer people know: every coin valued at the price when it last moved, summed across the network, approximating what all holders paid in total. The gap between them tells you whether the market sits on profit or loss, and how much of each." },
      { type: "h2", text: "Two ways to value the same coins" },
      { type: "p", text: "Market cap is instantaneous and forward-looking: it assumes every coin could sell at today's price, which is never literally true, since selling everything at once would crash the price. Realised cap is backward-looking and grounded: it records the price at which each coin actually changed hands most recently, which approximates the holder's entry price. Neither is the true value of Bitcoin in any absolute sense, but together they frame valuation as a relationship between today's price and yesterday's decisions, which is more useful than either number alone." },
      { type: "p", text: "Dividing realised cap by circulating supply gives realised price, the average cost basis expressed as a single price level. Traders can plot realised price against spot price directly: when spot trades far above realised price, the average holder is deep in profit; when spot falls below realised price, the average holder is underwater. That single comparison underlies MVRV, NUPL, and several other metrics, which are all different ways of expressing the same gap. Understanding realised cap therefore unlocks a whole family of indicators rather than just one." },
      { type: "h2", text: "How realised cap moves through a cycle" },
      { type: "p", text: "Realised cap moves slowly in bear markets and quickly in bull markets, and that rhythm is itself informative. In a bear market, few coins move, so realised cap barely changes while market cap falls, and the gap closes as unrealised profit evaporates. In capitulation, coins finally move at low prices, resetting realised cap downward as weak hands sell to stronger ones. In a bull market, coins move at rising prices, lifting realised cap steadily as new buyers pay more, which means the cost basis chases price upward even while profit grows." },
      { type: "p", text: "This behaviour explains why realised price often acts as support in bull markets and resistance in recoveries. In a bull market, dips toward realised price attract buyers who see value near the average cost, reinforcing the level. After a long bear market, rallies back to realised price meet sellers who finally break even and exit, capping the recovery until enough supply changes hands at the new level. Watching whether spot holds or rejects realised price therefore gives a structural read on trend health, beyond any single day's candle." },
      { type: "h2", text: "What the gap signals at extremes" },
      { type: "p", text: "At cycle tops, market cap runs far ahead of realised cap, because price rises faster than the cost basis can follow. The gap represents enormous unrealised profit, and the incentive for long-term holders to sell becomes overwhelming, which is why tops often feature heavy distribution even as price makes new highs. At cycle bottoms, market cap falls toward or below realised cap, because price has dropped to or beneath what holders paid, and the gap shrinks or turns negative. The remaining holders are those unwilling or unable to sell, which is why selling pressure eventually exhausts." },
      { type: "p", text: "The extremes are more reliable as conditions than as timers. A wide gap can persist for months while price climbs further, and a closed gap can persist for months while price grinds lower, so neither extreme justifies an all-in or all-out decision on its own. The disciplined use is comparative: is the gap wider or narrower than in previous cycles at similar stages, is it widening or narrowing now, and does holder behaviour confirm the story? On October 30, 2026, with Solana near $95.68, down about 6.6 percent, and XRP near $1.2369, down about 6.7 percent, cross-asset weakness suggests the gap question applies market-wide, even though realised cap itself is a Bitcoin-native metric." },
      { type: "h2", text: "Realised cap and the new buyer problem" },
      { type: "p", text: "Realised cap has a subtle bias that sophisticated readers watch: it treats every last movement as a purchase, but not every movement is one. Exchange reshuffling, custodial transfers, and internal wallet management move coins without any economic buyer, yet they reset the cost basis in the calculation. Large holders splitting wallets or exchanges reorganising cold storage can therefore nudge realised cap without any real change in holder cost. Data providers adjust for known exchange wallets, but adjustments are imperfect, and a sudden realised-cap jump should be checked against known exchange activity before being celebrated or feared." },
      { type: "p", text: "Lost coins create the opposite bias. Coins whose keys are gone will never move again, so their realised value stays frozen at an ancient price forever, understating the true cost basis of active holders. The effect grows over time as more coins are lost, which is one reason realised-cap thresholds drift across cycles. Neither bias destroys the metric, but both argue for using realised cap as a trend and zone indicator rather than a precise balance sheet. For traders comparing venues while forming a view, [triangular arbitrage](/guides/triangular-arbitrage) shows how price gaps behave, and the [glossary](/glossary) defines the underlying terms." },
      { type: "h2", text: "Practical uses for traders and holders" },
      { type: "p", text: "For long-term holders, realised price is a reality check: it shows the level at which the average holder breaks even, and therefore the level where broad selling pressure may appear on recoveries or support may appear on dips. For traders, the market-cap-to-realised-cap ratio, which is MVRV, condenses the gap into one number for cycle positioning. For analysts, the growth rate of realised cap measures how much new money is entering at current prices, distinguishing a rally driven by fresh capital from one driven by thin, speculative volume." },
      { type: "p", text: "None of these uses requires predicting price. A holder who knows realised price can set realistic expectations for a recovery, a trader who watches realised-cap growth can judge whether a rally has substance, and both can avoid the two classic errors: assuming a high market cap means everyone is rich, and assuming a low price means everyone has sold. The market's cost basis is the anchor; price is the weather around it. With the Fed holding rates at 3.75 to 4.00 percent on October 28 in a hawkish hold, macro weather will keep moving price around that anchor for some time." },
      {
        type: "callout",
        title: "Market cap is not money in the bank",
        text: "Market capitalisation assumes every coin sells at today's price, which could never happen at once. Do not mistake a large market cap for available liquidity or for profit that holders have actually banked; realised cap is the closer, though still imperfect, measure of money paid in.",
        tone: "warning",
      },
      {
        type: "list",
        items: [
        "Market cap: current price multiplied by circulating supply",
        "Realised cap: each coin valued at its last moved price, summed across the network",
        "Realised price: realised cap divided by supply, the average holder cost basis",
        "Wide gap: large unrealised profit, strong selling incentive at tops",
        "Narrow or negative gap: holders near break-even or underwater, selling exhaustion near bottoms"
        ],
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help here by explaining valuation terms like market capitalisation and realised price in simple words, or by drafting a research checklist for comparing on-chain valuation metrics." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is realised capitalisation?",
            a: "It values each Bitcoin at the price when it last moved on-chain and sums those values across all coins, approximating the total amount holders paid for the current supply.",
          },
          {
            q: "What is realised price?",
            a: "Realised capitalisation divided by circulating supply. It expresses the aggregate cost basis as a single price, directly comparable with spot price.",
          },
          {
            q: "Why does market cap exceed realised cap in bull markets?",
            a: "Because price rises faster than the cost basis follows. New buyers pay higher prices, lifting realised cap, but existing holders' unrealised profit grows faster, widening the gap.",
          },
          {
            q: "Can realised cap be misleading?",
            a: "Yes. Exchange reshuffling can reset cost basis without real purchases, and lost coins freeze ancient prices into the calculation forever. Use it as a trend and zone gauge, not a precise balance sheet.",
          }
        ],
      },
  ],
};
