import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "how-arbitrage-scanners-work",
  title: "How Arbitrage Scanners Work Under the Hood",
  description: "How do arbitrage scanners find price gaps across exchanges? Learn how feeds, matching, cost math, and alerts work, and where scanner data can mislead you.",
  keywords: [
      "how arbitrage scanners work",
      "arbitrage scanner explained",
      "crypto scanner data feed",
      "scanner spread calculation",
      "arbitrage alert system"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 8,
  category: "Basics",
  excerpt: "A scanner looks simple: a list of spreads. Underneath, it is a pipeline of price feeds, matching logic, cost math, and alerting. Here is how each stage works, and where the numbers can mislead you.",
  image: "/images/blog/how-arbitrage-scanners-work.svg",
  blocks: [
      { type: "h2", text: "The Pipeline: Feeds, Normalization, Matching, Math, Alerts" },
      { type: "p", text: "Every arbitrage scanner, from a free dashboard to a professional terminal, runs the same basic pipeline. First, it collects price data from exchanges. Second, it normalizes that data, because every exchange formats its prices, pair names, and fees differently. Third, it matches equivalent assets across venues, so that Bitcoin on one exchange is compared with Bitcoin on another, and not with a similarly named token. Fourth, it computes spreads and subtracts estimated costs. Fifth, it ranks the results and sends alerts for the ones that pass your filters. A failure at any stage corrupts everything downstream, which is why understanding the pipeline matters more than admiring the interface." },
      { type: "p", text: "Feeds are the foundation. Most scanners pull data from exchange APIs, which are interfaces that let software request market data. The two common feed styles are polling, where the scanner asks for fresh prices on a schedule, and websockets, where the exchange pushes updates the moment prices change. Websocket feeds are faster and better suited to arbitrage, but they are also more complex to maintain, because connections drop and must be rebuilt. A scanner that polls every thirty seconds will show stale prices during fast markets, and a spread computed from a stale price is worse than no spread at all. When evaluating a scanner, ask whether its feeds are streaming or polled, and how it handles a feed that goes silent." },
      { type: "h2", text: "Normalization and Matching: Where Bad Data Sneaks In" },
      { type: "p", text: "Normalization sounds boring, but it is where many scanners quietly go wrong. Exchanges use different pair names, different precision, different fee tiers, and different rules for what counts as a tradable pair. One venue may quote BTC/USDT, another BTC/USD, and a third BTC/USDC. Those are not the same quote, because the settlement asset differs, and a scanner that treats them as interchangeable will show phantom spreads that vanish the moment you try to trade them. Token identity is another trap: similarly named tokens, wrapped versions, and bridged assets can look identical in a price table while being entirely different assets with different transfer rules." },
      { type: "p", text: "Matching is the process of deciding which listings refer to the same underlying asset and which do not. Good scanners match by contract address or by a curated asset registry, and they exclude pairs with broken deposits, suspended withdrawals, or maintenance flags. Weaker scanners match by ticker symbol alone, which invites false positives. A practical habit for traders is to sanity-check any surprising spread before acting: confirm the pair exists on both venues, confirm deposits and withdrawals are operational, and confirm the settlement asset is the one you expected. That thirty-second check has saved many traders from chasing a gap that was never real. For related venue checks, see [Arbitrage Scanners Compared 2026](/blog/arbitrage-scanners-compared)." },
      { type: "h2", text: "Spread Math: Gross Spreads Lie, Net Spreads Matter" },
      { type: "p", text: "The spread calculation itself is simple arithmetic: the price on the expensive venue minus the price on the cheap venue, divided by the cheap price, expressed as a percentage. The hard part is the cost adjustment. An honest scanner subtracts the trading fees on both legs, the withdrawal fee on the source venue, the network fee for the transfer, and an allowance for slippage, which is the difference between the quoted price and the price you actually get. It should also factor in transfer time, because a spread that lasts ten minutes is useless on a route that takes an hour. Some scanners also adjust for the stablecoin leg: if you must sell through a stablecoin that trades at a premium on one venue, that premium is part of your cost." },
      {
        type: "table",
        headers: ["Cost element", "Why scanners get it wrong", "What to verify yourself"],
        rows: [
          ["Trading fees", "Your fee tier may differ from the default", "Enter your actual maker and taker fees"],
          ["Withdrawal fees", "Fees change and vary by network", "Check the live withdrawal page, not a cached table"],
          ["Transfer time", "Congestion varies by hour", "Check mempool or network status before entering"],
          ["Slippage", "Book depth is not in the headline price", "Read the order book, not just the last price"],
          ["Stablecoin premium", "Settlement asset may trade off peg", "Price the stablecoin leg explicitly"]
        ],
      },
      { type: "p", text: "Volatile sessions expose weak cost math. On 15 October 2026, after a hot US CPI print at 3.7% year on year, Bitcoin traded near $80,980 to $81,835, Ether near $2,414 to $2,426, and roughly $973 million in leveraged positions were liquidated in 24 hours. Scanners that ignored transfer delays and stablecoin premiums made gaps look far more attractive than they were, because the real costs of moving funds during that session were unusually high. The lesson generalizes: scanner output is an estimate built on assumptions, and your job is to check the assumptions that matter most for your route. See [Cross-Exchange Hidden Risks](/blog/cross-exchange-hidden-risks) for the full list of costs that scanners tend to understate." },
      { type: "h2", text: "Ranking, Alerts, and the Limits of Scanner Data" },
      { type: "p", text: "Once spreads are computed, scanners rank them and alert you to the ones that pass your filters. Ranking usually favors the largest net spread, but the largest spread is not always the best trade. A 2% spread on a thin pair with a one-hour transfer is usually worse than a 0.4% spread on a deep pair with a five-minute transfer. Good scanners let you filter by minimum net spread, minimum volume, maximum transfer time, and venue, so you see only gaps you could plausibly trade. Alert design matters too: an alert that fires for every tiny fluctuation trains you to ignore it, while an alert tuned to your real thresholds is worth reading." },
      { type: "p", text: "Finally, understand what a scanner cannot see. It cannot see whether your account is verified on a venue, whether your withdrawal limit covers the trade size, whether a venue is about to enter maintenance, or whether your own transfer will arrive before the gap closes. It also cannot see intent: a spread that exists because one venue's order book is thin and easily pushed around is not the same as a spread backed by deep liquidity. Use the scanner as a discovery tool, then verify with the order book, the venue status page, and your own cost sheet before committing capital. For the alerting side of the workflow, see [Setting Effective Arbitrage Price Alerts](/blog/setting-price-alerts) and our [best scanners](/best-crypto-arbitrage-scanners) page." },
      {
        type: "callout",
        title: "Trust the pipeline, not the headline number",
        text: "A spread is only as good as the feed, the matching, and the cost math behind it. When a number looks too good, check the pair, the settlement asset, the venue status, and the transfer time before you believe it.",
        tone: "info",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain scanner pipelines, feeds, and spread math in plain language and help you draft a verification checklist for any spread you see." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Where do arbitrage scanners get their prices?",
            a: "From exchange APIs. Better scanners use streaming websocket feeds that push updates instantly; weaker ones poll on a schedule, which leaves prices stale during fast markets.",
          },
          {
            q: "Why do scanners sometimes show spreads that do not exist?",
            a: "Common causes include stale feeds, mismatched settlement assets, similarly named tokens, suspended withdrawals, and cost math that ignores fees, slippage, or transfer time.",
          },
          {
            q: "What is the difference between a gross spread and a net spread?",
            a: "A gross spread is the raw price gap. A net spread subtracts trading fees, withdrawal and network fees, slippage, and any stablecoin premium. Only the net spread is tradeable.",
          },
          {
            q: "Can a scanner execute trades for me?",
            a: "Some tools offer execution features, but most scanners only surface opportunities. Execution adds risks around API keys, bugs, and runaway orders, so use it only with strict limits and withdrawal-disabled keys.",
          }
        ],
      },
  ],
};
