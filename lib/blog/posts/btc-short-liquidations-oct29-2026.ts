import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "btc-short-liquidations-oct29-2026",
  title: "BTC Short Liquidations on Oct 29: A Short-Covering Bounce, Explained",
  description: "About $48.25 million in crypto liquidations hit on October 29, 2026, with shorts at 76%. Here is what a short-covering bounce is, and what it is not, in detail.",
  keywords: [
      "BTC Short Liquidations",
      "Bitcoin short covering October 2026",
      "crypto liquidations October 29",
      "short squeeze Bitcoin explained",
      "Bitcoin open interest October 2026",
      "liquidation cascade crypto"
  ],
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  readingMinutes: 9,
  category: "Markets",
  excerpt: "About $48.25 million in liquidations over 24 hours to October 29, 2026, with shorts at 76%, lifted Bitcoin temporarily. A covering bounce is forced buying, not new conviction, and that distinction changes everything.",
  image: "/images/blog/btc-short-liquidations-oct29-2026.svg",
  blocks: [
      { type: "p", text: "BTC Short Liquidations on October 29, 2026, totalled about $48.25 million over 24 hours, with shorts accounting for about $36.66 million, or 76 percent of the total, while open interest of about $54.14 billion fell about 0.95 percent over two days. Those three numbers together tell a specific story: leveraged traders betting on a fall were forced to buy back, and that forced buying lifted price, while overall leveraged exposure shrank rather than grew. It is the anatomy of a short-covering bounce, and understanding its mechanics prevents the most common misreading of such bounces." },
      { type: "p", text: "The price context makes the mechanics concrete. Bitcoin closed October 28 at $81,254, up 0.8 percent, traded early October 29 at $81,340, and later slipped below $80,000, with Ethereum falling to $2,303.92. Liquidations happen when price moves against a leveraged position far enough to trigger automatic closure, and the closure itself buys or sells into the market, pushing price further in the same direction for a time. That feedback loop is why liquidation days feel violent: the market is not just reacting to news, it is mechanically unwinding positions. For leverage basics, see [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) and the [funding-rate guide](/guides/funding-rate-arbitrage)." },
      { type: "h2", text: "How a Short Liquidation Actually Works" },
      { type: "p", text: "A short position borrows an asset, sells it, and hopes to buy it back cheaper. With leverage, a small adverse move wipes out the margin posted, and the exchange closes the position automatically to prevent further loss. Closing a short means buying, so a wave of short liquidations is a wave of forced buying, which pushes price up, which triggers more short liquidations, which pushes price up further. The loop continues until the vulnerable shorts are gone or new sellers arrive to absorb the buying." },
      { type: "p", text: "The key point is compulsion. Liquidated shorts do not buy because they changed their minds about Bitcoin; they buy because the exchange made them. That is why a covering bounce can look like enthusiasm while containing none: the buyers are exiting, not entering, and once they are done, the buying stops unless genuine new demand replaces it. A bounce built on exits is therefore fragile by construction, and its end is often abrupt rather than gradual." },
      { type: "h2", text: "What the October 29 Numbers Say, and Do Not Say" },
      { type: "p", text: "Shorts at 76 percent of $48.25 million in liquidations says the pain was concentrated on the bearish side, which fits a market that had positioned for further falls after the Fed hold and was caught by a bounce. Open interest falling about 0.95 percent over two days to about $54.14 billion says total leveraged exposure shrank: positions were closed, not replaced by even larger new ones. A rising price with falling open interest is the classic covering signature, because genuine new buying usually adds open interest rather than reducing it." },
      { type: "p", text: "What the numbers do not say is equally important. They do not say that Bitcoin is now bullish, that the bottom is in, or that the next move is up. Liquidation data is a record of forced exits, not a forecast, and $48.25 million, while notable, is modest against a market capitalisation of $2.69 trillion and daily spot volumes far larger. Treating a moderate liquidation day as a major turning point overstates its importance, and overstatement is how traders buy the top of a covering bounce." },
      { type: "h2", text: "Covering Bounce Versus Genuine Rally" },
      { type: "p", text: "A genuine rally and a covering bounce differ in four observable ways. First, volume and spot flows: genuine rallies usually bring sustained spot buying and, often, exchange inflows or ETF demand, while covering bounces are concentrated in derivatives. Second, open interest: genuine rallies often add open interest as new positions open, while covering bounces reduce it. Third, breadth: genuine rallies lift many coins together, while covering bounces can be narrow, concentrated in the most shorted asset. Fourth, duration: genuine rallies build over days with pullbacks that hold, while covering bounces often reverse quickly once forced buying ends." },
      { type: "p", text: "October 29 shows a mixed picture, which is why caution is warranted. The Fed week brought genuine spot ETF inflows of $176 million on October 27 and exchange outflows of about 12,570 Bitcoin on October 28, which are real demand signals, but the liquidation profile itself is covering, not conviction. Mixed signals call for smaller positions and wider confirmation, not for all-in bets in either direction. A trader who waits for spot flows to confirm a bounce will miss the first part of the move and avoid the worst of its reversal, a trade worth making." },
      {
        type: "table",
        headers: ["Liquidation gauge, Oct 29", "Reading"],
        rows: [
          ["Total liquidations, 24h", "About $48.25 million"],
          ["Short liquidations", "About $36.66 million (76%)"],
          ["Open interest", "About $54.14 billion, down about 0.95% over two days"],
          ["Bitcoin, Oct 28 close", "$81,254 (+0.8%)"],
          ["Bitcoin, Oct 29", "Below $80,000 intraday"]
        ],
      },
      { type: "h2", text: "How Liquidations Affect Spreads" },
      { type: "p", text: "Liquidation waves affect spreads through volatility and venue speed. During a wave, perpetual markets move fastest, because that is where the liquidations happen, while spot venues lag by seconds or minutes, opening a spot-perpetual gap. Market makers widen spot quotes to protect against the volatility, which widens cross-exchange spreads too. A spread trader who sees a gap during a liquidation wave should ask whether the gap is a genuine venue difference or just the time lag between derivatives and spot, because the two have very different half-lives." },
      { type: "p", text: "Funding rates are the other spread input that liquidation waves distort. Heavy short liquidations can flip funding sharply, changing the cost of hedging a spot leg with a perpetual position. A spread that was profitable before the wave can become unprofitable after funding moves, even if the spot gap is unchanged. Checking funding before and after any liquidation-driven trade is not optional; it is part of the price." },
      {
        type: "callout",
        title: "Risk warning",
        text: "Leverage turns small price moves into liquidations, and liquidation cascades can move prices violently in minutes. Never use leverage you do not fully understand, never trade with money you cannot afford to lose, and never chase a covering bounce as if it were a guaranteed rally.",
        tone: "warning",
      },
      { type: "h2", text: "Trading a Covering Bounce Without Being Trapped" },
      { type: "p", text: "The disciplined way to handle a covering bounce is to treat it as information, not invitation. Note the liquidation totals, check whether open interest is falling or rising, check whether spot volume confirms the move, and then decide whether any trade meets your normal criteria, including net spread after fees and a clear exit. If the bounce does not meet those criteria, watching it is a valid outcome. Many traders' best decision on liquidation days is to do nothing and let the forced flow pass." },
      { type: "p", text: "If a trade is taken, size it for the volatility regime, not for the calm regime. Liquidation days have wider ranges, faster reversals and less reliable quotes, so a normal size is effectively a larger risk on such a day. Halving size, tightening stops, or requiring a larger net spread are all reasonable adjustments, and any one of them beats trading a volatile day at calm-day settings. The market will offer another bounce; capital is the constraint, not opportunity." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you decode a liquidation headline in plain language. For example, ask it to explain in simple words what a short liquidation is, why forced buying lifts price temporarily, and how a covering bounce differs from a genuine rally." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What happened with Bitcoin liquidations on October 29, 2026?",
            a: "About $48.25 million in crypto liquidations occurred over 24 hours, with shorts at about $36.66 million, or 76%. Open interest of about $54.14 billion fell about 0.95% over two days, the signature of positions closing rather than new ones opening.",
          },
          {
            q: "What is a short-covering bounce?",
            a: "A price rise caused by short sellers being forced to buy back their positions when liquidated, not by new bullish buyers entering. The buying is compulsory, so it stops once vulnerable shorts are gone, making the bounce fragile.",
          },
          {
            q: "How can traders tell a covering bounce from a genuine rally?",
            a: "Check open interest, spot volume and breadth. Genuine rallies often add open interest, bring sustained spot buying and lift many coins; covering bounces reduce open interest, concentrate in derivatives and reverse quickly.",
          },
          {
            q: "Why do liquidations widen arbitrage spreads?",
            a: "Because perpetual markets move first during a liquidation wave while spot venues lag, and market makers widen quotes against the volatility. Funding rates also shift sharply, changing the cost of hedging a spread leg.",
          }
        ],
      },
  ],
};
