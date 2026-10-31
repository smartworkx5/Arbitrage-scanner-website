import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "maker-rebates-crypto-2026",
  title: "Maker Rebates: Getting Paid to Provide Liquidity",
  description: "Understand crypto maker rebates: how exchanges pay liquidity providers, tiered fee schedules, and strategies to earn rebates without taking extra risk.",
  keywords: [
      "Maker Rebates",
      "maker rebate crypto",
      "maker taker fees crypto",
      "provide liquidity crypto",
      "exchange fee tiers",
      "market making rebates"
  ],
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "On most crypto exchanges, placing a limit order that rests in the book can earn you money instead of costing you a fee. Maker rebates reward the traders who provide liquidity — if you understand the schedule and the risks.",
  image: "/images/blog/maker-rebates-crypto-2026.svg",
  blocks: [
      { type: "p", text: "Maker Rebates turn the usual fee logic upside down: instead of paying to trade, you get paid for placing a limit order that waits in the book and is later filled by someone else. Exchanges offer this because resting orders create the liquidity that attracts takers, and takers pay the fees that fund the rebate. On Oct 31, 2026, Bitcoin traded around $77,300 to $77,376, down about 0.8 percent in 24 hours, and in a choppy tape like that, the difference between paying a taker fee on every trade and collecting a maker rebate can quietly decide whether a high-frequency or market-making strategy is profitable at all." },
      { type: "h2", text: "Maker Versus Taker: The Basic Deal" },
      { type: "p", text: "Every order on an exchange is either a maker or a taker. A maker order rests in the book, adding liquidity, because its price does not immediately cross the best bid or offer. A taker order removes liquidity, because it executes immediately against resting orders. Exchanges typically charge takers a fee and charge makers less, or in rebate models pay makers a small amount per trade. For example, a venue might charge takers 0.05 percent and pay makers 0.01 percent, meaning a maker earns a tiny slice on each fill while the taker funds both the rebate and the exchange margin. The amounts look trivial per trade, but across thousands of fills they become a real revenue line." },
      { type: "p", text: "The maker-taker model exists to solve a chicken-and-egg problem: traders will not come to an empty book, and a book stays empty without traders. By paying makers, the exchange seeds depth, tightens spreads, and makes the venue more attractive to takers, who in turn generate the volume that funds future rebates. That is why newer or smaller venues often offer the most generous rebates: they need depth more urgently than an established exchange with a deep book already. Traders should therefore compare rebate schedules across venues, but also weigh counterparty risk, real depth, and withdrawal rules, since the highest headline rebate on a fragile venue can be the most expensive deal of all." },
      { type: "h2", text: "How Tiered Rebate Schedules Work" },
      { type: "p", text: "Most large exchanges do not pay one flat rebate. They use tiers based on trailing 30-day trading volume, holdings of the exchange token, or both, so that larger and more consistent makers earn better terms. A beginner tier might pay no rebate and charge a small maker fee, while a high-volume tier might pay a meaningful rebate per trade. The tier is usually recalculated daily or monthly, which means a trader who stops providing liquidity can drift back down the tiers and lose the rebate. Reading the full schedule, including how volume is counted across spot and derivatives, and whether token holdings are staked or simply held, is essential before building a strategy around a rebate." },
      { type: "p", text: "Some venues add extra incentives on top of the base schedule, such as designated market-maker programmes that pay additional rebates for quoting both sides within a maximum spread for a minimum share of the day. These programmes can be lucrative, but they carry obligations: quoting through volatility, maintaining size during stress, and facing penalties or removal if uptime falls short. A trader considering such a programme should model the worst case, not just the average rebate, because the obligation to quote during a crash is precisely when providing liquidity is most dangerous. The rebate is compensation for risk, not free money, and any model that treats it as guaranteed income is missing the point." },
      { type: "h2", text: "Earning Rebates Without Taking Extra Risk" },
      { type: "p", text: "The safest way to earn maker rebates is to place limit orders you would have wanted anyway, at prices you are genuinely happy to trade at, and let the rebate be a bonus rather than the reason for the trade. For example, a trader accumulating a position over days can work resting buy orders below the market instead of chasing with market orders, collecting rebates on fills while also getting a better average price. The same applies to selling into strength with resting offers above the market. In both cases the rebate improves an already sensible plan, rather than creating a trade that would not otherwise exist. That distinction is the line between a rebate-aware trader and a rebate-chaser." },
      { type: "p", text: "More active strategies deliberately quote both sides to capture the spread plus the rebate, but they must manage inventory risk carefully. A market maker who is long after a series of buy fills, and the market keeps falling, has earned rebates while losing far more on price. Controls such as inventory limits, skewing quotes to encourage the side that reduces inventory, and pausing during extreme volatility are what separate durable market making from hopeful quoting. Traders exploring these ideas should also study [cex versus dex arbitrage](/guides/cex-vs-dex-arbitrage), since fee and rebate structures differ sharply between centralised books and automated market makers, and a strategy that works on one may fail on the other." },
      {
        type: "list",
        items: [
        "Place resting limit orders at prices you genuinely want to trade at, and treat any rebate as a bonus, not the motive.",
        "Check your tier regularly: volume and token-holding requirements change, and a lapsed tier can quietly erase the rebate.",
        "Set inventory limits and skew quotes to reduce a growing position before it becomes a directional bet.",
        "Pause quoting when spreads explode or volatility spikes, since that is when maker risk rises fastest."
        ],
      },
      { type: "h2", text: "Rebates in a Falling Market" },
      { type: "p", text: "Rebate strategies face their hardest test in a selloff, and Oct 31, 2026 offered a live example. Ethereum traded around $2,245, down about 0.3 percent, while gold spot sat around $3,874 to $3,897 per ounce, down roughly 3.5 percent and below $4,000, and the Nasdaq had closed Oct 30 down 2.9 percent at 25,437. In that tape, makers quoting both sides would have been filled repeatedly on the buy side as prices fell, accumulating inventory while the rebate trickled in. A maker who kept quoting without inventory limits could easily have lost many times the rebate income on price alone. The lesson is that rebates are a small, steady income stream that must never justify holding a large, unwanted position through a trend." },
      { type: "p", text: "Volatility also changes the effective value of a rebate. In calm markets, a small rebate on a tight spread is meaningful, because the spread itself is thin and price risk per fill is low. In wild markets, spreads widen, price moves between fills are larger, and the same rebate becomes negligible compared with the risk of holding inventory for even a few minutes. Smart makers therefore scale their quoting size with volatility, quote wider during stress, and sometimes step away entirely when the book becomes disorderly. Earning nothing for an hour is far better than earning rebates while absorbing a large adverse move, and the best market makers are defined as much by when they stop as by when they quote." },
      {
        type: "callout",
        title: "Risk Warning",
        text: "Maker rebates do not make market making risk-free. Providing liquidity means holding inventory that can fall in value, and rebate income is usually far smaller than a single adverse price move. Never quote size you cannot afford to hold, and never treat rebates as assured earnings.",
        tone: "warning",
      },
      { type: "h2", text: "Comparing Venues and Doing the Maths" },
      { type: "p", text: "Before committing to a venue for rebates, do the maths on your own expected flow. Multiply your expected monthly maker volume by the rebate rate at your realistic tier, subtract any token-holding cost or opportunity cost, and compare the result with the same calculation on two other venues. Then adjust for fill quality: a venue with a generous rebate but thin depth may fill you rarely, or fill you only when the market is moving against you, which is the worst kind of fill. A venue with a smaller rebate but deeper, more balanced flow may produce better total results, because you trade more often at fairer prices. Headline rates are marketing; realised rebate per unit of risk is the real metric." },
      { type: "p", text: "Fees also interact with other strategies. A trader running [funding rate arbitrage](/guides/funding-rate-arbitrage) or cross-exchange work needs to know whether the rebate applies to the specific contract and order type being used, since some venues exclude certain order types or reduce rebates on particular pairs. Check whether rebates are paid in the traded asset, in stablecoin, or in the exchange token, because that affects both tax treatment and conversion costs. Small print matters here more than in most trading topics, and a ten-minute read of the fee schedule can save months of mispriced assumptions." },
      {
        type: "table",
        headers: ["Venue feature", "What to check", "Why it matters"],
        rows: [
          ["Rebate tier", "Volume window and token requirement", "Your realistic tier may be lower than the advertised top tier"],
          ["Order eligibility", "Which order types and pairs earn rebates", "Some orders may earn nothing despite resting in the book"],
          ["Payout asset", "Token, stablecoin, or traded asset", "Conversion costs and price risk on the rebate itself"],
          ["Market-maker programme", "Quoting obligations and penalties", "Obligations during volatility can force dangerous quoting"]
        ],
      },
      { type: "h2", text: "A Sensible Starting Plan" },
      { type: "p", text: "Start by using maker orders for trades you already plan to make, and track how much rebate you actually collect over a month versus what the schedule promised. That single measurement will tell you whether your tier, venue, and order style are aligned, without any new risk. If the numbers look good, consider a small, inventory-limited two-sided quoting experiment on one liquid pair, with strict pause rules and a daily loss limit. Scale only when the data over several weeks, including at least one volatile period, shows that spread plus rebate exceeds adverse price moves after fees." },
      { type: "p", text: "Maker rebates reward patience and discipline, not aggression. They pay the trader who is willing to wait in the book at a fair price, manage inventory honestly, and step away when conditions turn hostile. Used that way, they are a genuine, if modest, edge that compounds over many trades. Used as a reason to trade when you otherwise would not, they become a trap that pays pennies while price risk takes pounds. The difference is not in the schedule, but in the trader." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can explain financial and market topics in clear, simple language. For this article, you can ask it to explain maker versus taker fees with an everyday example, or to help you draft a checklist for comparing exchange fee schedules." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is a maker rebate?",
            a: "A maker rebate is a small payment an exchange makes to a trader whose limit order rests in the book and is later filled by another trader. It rewards providing liquidity, funded largely by the fees paid by takers who remove liquidity.",
          },
          {
            q: "Do all exchanges pay maker rebates?",
            a: "No. Some exchanges charge makers a small fee instead, while others pay rebates only at higher volume tiers or through market-maker programmes. Always check the specific fee schedule and tier rules for the venue and pair you trade.",
          },
          {
            q: "Can I profit from rebates alone?",
            a: "Rarely, and never without risk. Rebate income is small per trade and can be overwhelmed by a single adverse price move on inventory you accumulate while quoting. Treat rebates as a bonus on sensible trades, not as a standalone guaranteed income.",
          },
          {
            q: "How do I qualify for a better rebate tier?",
            a: "Most venues base tiers on trailing trading volume over 30 days, holdings of the exchange token, or both. Consistent maker volume and meeting any token requirement can lift your tier, but tiers are recalculated regularly and can fall back if activity drops.",
          }
        ],
      },
  ],
};
