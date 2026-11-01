import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "covered-calls-crypto-holdings-2026",
  title: "Covered Calls on Crypto Holdings: Income, Caps, and Assignment Risk",
  description: "Covered calls can earn income from crypto you already own, but they cap upside and carry assignment risk. Learn the mechanics, trade-offs, and sizing rules.",
  keywords: [
      "Covered Calls",
      "crypto holdings",
      "call selling",
      "option income",
      "assignment risk",
      "crypto options"
  ],
  datePublished: "2026-11-01",
  dateModified: "2026-11-01",
  readingMinutes: 10,
  category: "Strategies",
  excerpt: "Selling a covered call earns premium from holdings you already own, but it caps your upside. This guide explains when that trade-off is worth it and when it is not.",
  image: "/images/blog/covered-calls-crypto-holdings-2026.svg",
  blocks: [
      { type: "p", text: "Covered Calls are one of the most popular income strategies for long-term crypto holders, because they turn idle holdings into premium income without selling the underlying asset. On 1 November 2026, Bitcoin traded near 77,586 dollars, Ether near 2,255.13 dollars, and Solana near 95.5 dollars. A holder who is comfortable holding through moderate moves might sell a call against those holdings, collect premium upfront, and accept that a very large rally will be capped at the strike price. That trade-off, income in exchange for capped upside, is the whole strategy in one sentence." },
      { type: "p", text: "The mechanics are simple, but the judgement is not. The premium looks like free income until the market rallies strongly and the holder watches gains stop at the strike while the asset keeps rising. Assignment risk, tax and accounting considerations, and the temptation to chase higher premiums with riskier strikes all complicate the picture. This guide walks through the structure, the realistic income expectations, and the mistakes that turn a sensible income trade into a frustrating one. For core terms, see the [glossary](/glossary) and the guide to [cross-exchange arbitrage](/guides/cross-exchange-arbitrage)." },
      { type: "h2", text: "How a Covered Call Works" },
      { type: "p", text: "A covered call means owning the underlying asset and selling a call option against it. If you hold one Bitcoin and sell one call struck above the current price, you receive premium immediately. If Bitcoin stays below the strike at expiry, the call expires worthless and you keep both the premium and the Bitcoin. If Bitcoin rises above the strike, the call buyer can exercise, and your Bitcoin may be sold at the strike price. Your total outcome in that case is the strike price plus the premium received, minus your original cost basis and fees, which is still a profit if the strike is above your entry, but less than holding without the call." },
      { type: "p", text: "The word covered matters because the seller already owns the asset that would be delivered on assignment. An uncovered, or naked, call seller does not own the asset and faces potentially unlimited loss if price rises sharply. A covered call seller's loss on the option leg is offset by gains on the holding, up to the point where the holding is sold at the strike. That does not make the strategy risk-free, because the holding itself can still fall in value, and the premium collected may be small compared with a large fall. Covered refers to the delivery obligation, not to protection against downside." },
      { type: "h2", text: "Income: Realistic Expectations" },
      { type: "p", text: "Premium income depends on implied volatility, time to expiry, strike distance, and the asset's price. Higher volatility and longer expiries generally produce larger premiums, but they also tie up the holding for longer and increase the chance of assignment or a large adverse move. Selling weekly calls can generate frequent small premiums, but it also requires frequent management, incurs more fees, and increases the chance of being assigned during a rally. Selling monthly calls reduces management but means a longer cap on upside if the market rallies early in the cycle." },
      { type: "p", text: "Traders should annualise premium income with caution. A premium that looks like 1 percent per week does not automatically mean 52 percent per year, because some weeks will produce no premium opportunity, some positions will be assigned, and fees and spreads reduce the net result. A more honest measure is total return over several months, including premium collected, price changes on the holding, assignment outcomes, and costs. Strategies that look excellent in a single calm month can look ordinary over a full market cycle that includes both rallies and falls." },
      { type: "h2", text: "The Upside Cap and Opportunity Cost" },
      { type: "p", text: "The upside cap is the most misunderstood cost of a covered call. It is not a fee, but it is a real opportunity cost when the market rallies beyond the strike. A holder who sells a call struck 5 percent above the current price and then sees the asset rise 25 percent will have sold at the strike plus premium, missing most of the rally. That outcome can feel worse than simply holding, even though the covered call position still profited in absolute terms. Traders who cannot tolerate that feeling, or who hold an asset specifically because they expect a large rally, are poor candidates for covered calls." },
      { type: "p", text: "Strike selection is therefore a statement about expectations. A far out-of-the-money strike collects less premium but leaves more upside room. A near-the-money strike collects more premium but caps upside sooner. There is no strike that gives both maximum premium and maximum upside, and any presentation that suggests otherwise should be treated with scepticism. A holder should choose a strike they would genuinely be happy to sell at, because assignment at that strike is a realistic outcome, not a remote possibility." },
      { type: "h2", text: "Assignment Risk and Early Exercise" },
      { type: "p", text: "Assignment means the call buyer exercises the option and the seller must deliver the underlying asset at the strike. In crypto options, settlement and exercise rules vary by venue and contract type, with some contracts cash-settled and others physically settled. Cash-settled contracts do not deliver the actual coin, but the economic effect is similar: the seller pays the difference above the strike. Early assignment can also occur before expiry in some American-style contracts, particularly around dividends or other corporate events, although crypto has no dividends in the traditional sense. Traders must confirm the exercise style of their specific contract before selling." },
      { type: "p", text: "Even without early exercise, assignment creates practical work. The holding may be sold, a new position must be re-established if the trader wants to stay invested, and tax or accounting consequences may arise depending on jurisdiction. Rolling a covered call, by closing the existing call and opening a new one at a higher strike or later expiry, can avoid assignment but usually costs money if price has risen, because the existing call must be bought back at a higher price. Rolling is not a free escape from the cap, and repeated rolling can turn a small premium strategy into a loss-making chase." },
      { type: "h2", text: "Downside Protection Is Limited" },
      { type: "p", text: "A covered call provides only limited downside cushion, equal to the premium received. If Bitcoin falls by 20 percent and the premium collected was 2 percent, the net loss is still about 18 percent before fees. Traders who describe covered calls as a hedge misunderstand the strategy. A protective put is a hedge, because its payoff rises as price falls. A covered call is an income strategy that slightly cushions a fall but does not prevent it. In a market like that on 1 November 2026, where Bitcoin was down about 4.0 percent over seven days and gold had fallen about 108 dollars on the day, a holder should not rely on call premium to offset a broad market decline." },
      { type: "p", text: "Sizing and diversification also matter. Selling covered calls against an entire holding concentrates the upside cap on the whole position. Selling against only part of the holding leaves the remainder free to capture a rally, at the cost of less total premium. That partial approach suits many holders better, because it balances income with participation. It also reduces the emotional impact of assignment, since only part of the position is sold. The [best scanners overview](/best-crypto-arbitrage-scanners) and the [glossary](/glossary) can help with venue comparison and terminology before choosing a contract." },
      {
        type: "callout",
        title: "Risk Warning",
        text: "A covered call caps upside and provides only limited downside cushion equal to the premium received. It does not protect a holding from a large fall, and assignment can sell your asset at the strike even during a strong rally.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain covered calls in simple words and help you draft a checklist for strike selection and assignment risk. Muse AI is not a trading tool and does not give financial advice." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      {
        type: "faq",
        items: [
          {
            q: "What is a covered call?",
            a: "It is selling a call option against an asset you already own. You collect premium upfront, keep the premium if price stays below the strike, and may sell the asset at the strike if price rises above it.",
          },
          {
            q: "Does a covered call protect against a price fall?",
            a: "Only slightly. The premium received cushions a fall by that amount, but a large fall will still produce a net loss. It is an income strategy, not a hedge.",
          },
          {
            q: "What happens if I am assigned?",
            a: "Your holding may be sold at the strike price, or the contract may cash-settle at the difference above the strike, depending on the venue and contract type. Check exercise rules before selling.",
          },
          {
            q: "Should I sell covered calls on my whole holding?",
            a: "Many holders prefer a partial approach, selling calls against only part of the holding. That keeps some upside participation while still generating premium income.",
          }
        ],
      },
  ],
};
