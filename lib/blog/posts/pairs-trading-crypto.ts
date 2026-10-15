import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "pairs-trading-crypto",
  title: "Pairs Trading Crypto Assets",
  description: "Pairs trading buys one crypto asset and shorts a related one, betting the gap closes. Learn pair selection, entry and exit rules, ratios, and risk control.",
  keywords: [
      "pairs trading crypto",
      "crypto pair trading strategy",
      "pairs trading BTC ETH",
      "crypto pairs selection",
      "pairs trading ratio",
      "mean reversion pairs trading"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Pairs trading is the most accessible form of statistical arbitrage: long one asset, short a related one, and profit when their gap narrows. Here is how to choose pairs and manage the trade.",
  image: "/images/blog/pairs-trading-crypto.svg",
  blocks: [
      { type: "h2", text: "How Pairs Trading Works" },
      { type: "p", text: "Pairs trading is a market-neutral strategy built on a simple idea: two related assets usually trade in a rough relationship, and when that relationship stretches unusually far, it tends to snap back. The trader goes long the relatively cheap asset and short the relatively expensive one, in sizes balanced so the position is roughly neutral to the overall market. If the gap narrows, the trade profits regardless of whether the broader market rose or fell. If the gap widens further, the trade loses. The edge is in the relationship, not in predicting the market's direction." },
      { type: "p", text: "A concrete example makes the mechanics clear. Suppose Bitcoin and Ether have historically traded with a fairly stable ratio, and Ether suddenly falls much harder than Bitcoin on a news shock, pushing the ratio to an extreme. A pairs trader might go long Ether and short Bitcoin, expecting the ratio to normalise. On 15 October 2026, that kind of divergence was visible in real time: Bitcoin traded near $80,980 to $81,835 while Ether fell about 2.9% to near $2,414 to $2,426, with roughly $973 million in liquidations in 24 hours. A trader who saw the gap as a pairs opportunity still had to survive the execution risks — funding, slippage, and the possibility that the gap would widen before it narrowed." },
      { type: "h2", text: "Choosing Pairs That Actually Belong Together" },
      { type: "p", text: "Pair selection is where pairs trading is won or lost. The best pairs share a genuine economic link: two large-cap coins exposed to the same market drivers, two tokens in the same sector, a spot price and its futures contract, or two stablecoins pegged to the same currency. The link should have a reason to persist, not just a chart that looked correlated last month. Two coins that both rose in a bull market are not a pair — they just shared a trend. A pair needs a mechanism that pulls the prices back together, such as shared demand, arbitrage between the assets, or a structural peg." },
      { type: "p", text: "Statistical checks help, but they are a filter, not a verdict. Traders typically test for cointegration — a long-run equilibrium in the gap between the two prices — and examine how the spread behaved across different regimes, including crashes and rallies. A pair whose spread was stable only in calm markets is a fair-weather pair; it will likely fail exactly when you need it most. Also check the practical side before committing: can you actually short the expensive leg at reasonable cost, is there enough liquidity in both legs to enter and exit, and are the assets available on venues you can use? A statistically perfect pair that cannot be shorted is a research project, not a trade. For the broader statistical framework, see [Statistical Arbitrage in Crypto](/blog/statistical-arbitrage-crypto)." },
      {
        type: "list",
        items: [
        "Shared economic driver or structural link between the two assets.",
        "Cointegrated spread that reverted across multiple market regimes.",
        "Both legs tradeable with adequate liquidity for your size.",
        "Short leg borrowable at a cost that leaves room for profit.",
        "No upcoming event (fork, delisting, unlock) that could break the relationship."
        ],
      },
      { type: "h2", text: "Ratios, Entry Rules, and Exit Rules" },
      { type: "p", text: "Once a pair is chosen, the trader must decide the hedge ratio — how much of each leg to hold. A common approach is to size the legs by dollar neutrality or by beta neutrality, so that a broad market move affects both legs roughly equally. Some traders use a regression-based ratio derived from the historical relationship between the two prices. The ratio is not set-and-forget: it should be re-estimated periodically, because relationships drift. Getting the ratio wrong leaves the position with unintended directional exposure, which defeats the purpose of the strategy." },
      { type: "p", text: "Entry and exit rules are usually expressed through the spread's z-score, which measures how far the current gap sits from its historical average in standard deviations. A typical setup enters when the z-score exceeds roughly two, meaning the gap is unusually wide, and exits when it returns toward zero or a profit target. Just as important is the stop rule: a maximum adverse z-score or a maximum loss at which the trader exits even if the model still expects reversion. Without a stop, a trader can hold a broken pair all the way down, averaging into a relationship that no longer exists. Decide the stop before entering, and honour it mechanically." },
      { type: "h2", text: "Costs, Funding, and the Risks That Matter" },
      { type: "p", text: "Pairs trading profits are usually small per trade, which makes costs decisive. Trading fees on both legs, borrowing costs on the short leg, funding payments on any perpetual positions, and slippage on entry and exit all come out of the same thin edge. A pair that looks profitable on a price chart can be a losing trade once real costs are included. Always compute the full round-trip cost before entering, and be realistic about slippage: the prices you see on screen are not the prices you will get when you trade size in a moving market. Backtests that ignore these costs are worse than useless — they are actively misleading." },
      {
        type: "callout",
        title: "A pair is only as good as its worst leg",
        text: "If the short leg becomes hard to borrow, its liquidity dries up, or its venue halts withdrawals, the whole pair is at risk. Monitor both legs and have an exit plan for each one separately.",
        tone: "warning",
      },
      { type: "p", text: "The deepest risk is relationship breakdown: a protocol failure, a delisting, a regulatory action, or a token unlock can permanently change one leg's economics, and the spread can widen without ever reverting. Position sizing is the defence: no single pair should be large enough to damage the portfolio if it breaks. Diversifying across several pairs with different drivers reduces the damage from any single failure. Keep a trading journal of every pair, including why you entered, what the costs were, and what happened, so your pair selection improves with evidence rather than memory. For portfolio-level discipline, see [Market-Neutral Crypto Portfolios](/blog/market-neutral-crypto) and [Arbitrage Risk Management](/blog/arbitrage-risk-management)." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain pairs trading, hedge ratios, and z-scores in plain language, and it can help you draft a pre-trade checklist covering pair selection, costs, and stop rules." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is pairs trading in crypto?",
            a: "Going long one asset and short a related one when their price gap stretches unusually wide, expecting the gap to narrow. Profit comes from the relationship, not from the market's direction.",
          },
          {
            q: "What makes a good crypto pair?",
            a: "A genuine economic link, a cointegrated spread that reverted across regimes, adequate liquidity in both legs, and a short leg that is borrowable at reasonable cost.",
          },
          {
            q: "How do I decide when to enter a pairs trade?",
            a: "Traders commonly use the spread's z-score, entering when it exceeds roughly two standard deviations and exiting when it returns toward zero — with a pre-set stop for the case that it keeps widening.",
          },
          {
            q: "What is the biggest risk in pairs trading?",
            a: "Relationship breakdown: a fundamental change to one asset that permanently alters the spread. Position limits and stop rules are the main defence.",
          }
        ],
      },
  ],
};
