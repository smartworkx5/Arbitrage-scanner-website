import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "perps-vs-quarterlies",
  title: "Perpetuals vs Quarterly Futures Compared",
  description: "Perpetuals vs quarterly futures compared: funding rates, basis, roll costs, and which contract suits arbitrage, hedging, or directional trading better.",
  keywords: [
      "perpetuals vs quarterly futures",
      "perps vs futures crypto",
      "quarterly futures arbitrage",
      "funding rate vs basis",
      "crypto futures comparison",
      "perp futures difference",
      "crypto derivatives guide"
  ],
  datePublished: "2026-10-17",
  dateModified: "2026-10-17",
  readingMinutes: 10,
  category: "Strategies",
  excerpt: "Perpetuals never expire but charge funding; quarterlies expire but carry basis. Choosing between them changes the costs, risks, and arbitrage math of every trade.",
  image: "/images/blog/perps-vs-quarterlies.svg",
  blocks: [
      { type: "h2", text: "The Core Difference: Expiry" },
      { type: "p", text: "Perpetuals vs quarterly futures is one of the most practical comparisons in crypto derivatives, because the two contract types solve the same problem, gaining exposure to a crypto asset with leverage, in opposite ways. A perpetual future, often called a perp, has no expiry date. It trades forever, and its price is kept close to spot by a funding rate mechanism: traders who are long or short pay each other a periodic fee depending on whether the perp trades above or below spot. A quarterly future has a fixed expiry, usually the last Friday of a quarter, and its price converges to spot as expiry approaches. There is no funding rate. Instead, the price difference between the future and spot, called the basis, is where the cost lives." },
      { type: "p", text: "That single difference, expiry versus no expiry, drives almost everything else. A perp trader never has to roll a position, but pays or receives funding every few hours for as long as the position is open. A quarterly trader never pays funding, but must roll the position into the next contract before expiry, and the roll itself has a cost. For arbitrageurs, the two structures create different trades: perp arbitrage usually involves the funding rate, while quarterly arbitrage usually involves the basis. Understanding which cost you are paying, funding or basis, is the first step to choosing the right contract. On October 17, 2026, with bitcoin near $81,300 to $81,600 and the market still digesting heavy liquidations from the prior day, both funding and basis were worth checking, because stressed markets distort both." },
      { type: "h2", text: "Funding Rates: The Cost of Holding Perps" },
      { type: "p", text: "The funding rate is the mechanism that keeps perps anchored to spot, and it is also the perp trader's running cost. When perps trade above spot, longs pay shorts, which discourages long positions and pulls the perp price down. When perps trade below spot, shorts pay longs, which does the reverse. Funding is usually exchanged every eight hours, and the rate depends on the premium of the perp over spot and on an interest-rate component. In calm markets, funding is small. In euphoric markets, when everyone wants to be long, funding can become very expensive, and longs can pay a large fraction of their position every day just to stay in the trade." },
      { type: "p", text: "For arbitrageurs, funding is the opportunity. The classic funding-rate arbitrage, explained in our [funding-rate arbitrage guide](/guides/funding-rate-arbitrage), involves holding a position that collects funding while hedging the price exposure elsewhere, for example long spot and short perps when funding is positive. The profit is the funding collected minus fees and hedging costs. The risks are real: funding can flip sign, the basis between spot and perp can move, and the hedge itself can be liquidated if margin is mismanaged. Funding arbitrage is often described as low-risk, which is misleading. It is lower-directional-risk, but it carries funding, basis, liquidation, and venue risk that must all be managed." },
      {
        type: "list",
        items: [
        "Perps have no expiry; funding keeps the price near spot.",
        "Positive funding means longs pay shorts; negative funding reverses it.",
        "Funding is exchanged periodically, usually every eight hours.",
        "High funding in euphoric markets can erase directional gains.",
        "Quarterlies have no funding; their cost lives in the basis."
        ],
      },
      { type: "h2", text: "Basis: The Cost of Holding Quarterlies" },
      { type: "p", text: "The basis is the difference between a quarterly future's price and the spot price, and it is the quarterly trader's version of funding. In a normal, upward-sloping market, called contango, quarterlies trade above spot, and the basis shrinks to zero as expiry approaches. A trader who buys a quarterly in contango and holds to expiry effectively pays the basis, because the future converges down to spot. In a downward-sloping market, called backwardation, quarterlies trade below spot, and holding to expiry earns the basis. The basis therefore encodes the market's expectations about rates, demand for leverage, and supply and demand for the underlying asset." },
      { type: "p", text: "Basis arbitrage, also called cash-and-carry, exploits the basis directly: buy spot and sell the quarterly when the basis is wide in contango, then let convergence do the work. The profit is the basis minus fees, borrowing costs, and the cost of holding the spot leg. Unlike funding arbitrage, basis arbitrage has a fixed endpoint, expiry, which makes the trade easier to plan. The risks are still real. The basis can widen before it narrows, margin requirements can rise, and the spot leg must be stored safely for the full holding period. A trader who enters a cash-and-carry trade without enough margin to survive a basis swing is gambling, not arbitraging." },
      {
        type: "table",
        headers: ["Feature", "Perpetuals", "Quarterly futures"],
        rows: [
          ["Expiry", "None, trades forever", "Fixed, usually quarter-end"],
          ["Running cost", "Funding rate, every few hours", "Basis, realized at expiry or roll"],
          ["Roll needed", "No", "Yes, before expiry"],
          ["Convergence", "Continuous via funding", "At expiry, future equals spot"],
          ["Best for", "Short-term, funding arbitrage", "Planned holds, basis arbitrage"]
        ],
      },
      { type: "h2", text: "Liquidity, Leverage, and Rollover" },
      { type: "p", text: "Liquidity differs between the two contract types in ways that matter for execution. Perps are usually the most liquid derivatives in crypto, with the tightest spreads and the deepest books, because all trading concentrates in one contract that never expires. Quarterlies split liquidity across expiries, so the nearest contract is usually liquid while farther contracts can be thin. For a trader entering a large position, perps are often easier to execute, but the funding cost can make them expensive to hold. For a trader holding for weeks, a quarterly can be cheaper overall, because the basis is paid once rather than every eight hours, though the roll at expiry adds a transaction and a new basis." },
      { type: "p", text: "Leverage is available on both, and the same warnings apply to both. High leverage magnifies gains and losses equally, and liquidation engines do not care which contract type you used. Margin requirements, maintenance levels, and liquidation mechanics differ by venue, and traders should confirm them before opening a position. Rollover deserves its own planning: a quarterly position that is not rolled or closed before expiry will settle under the venue's rules, which may mean cash settlement at an index price. Forgetting an expiry is one of the most avoidable ways to lose money in derivatives, and a calendar reminder is cheaper than a settlement surprise." },
      {
        type: "callout",
        title: "Compare total cost, not headline cost",
        text: "A perp with low fees can still be expensive if funding stays high for weeks, and a quarterly with a wide basis can be cheap if you hold to expiry. Always compare the all-in cost over your planned holding period.",
        tone: "info",
      },
      { type: "h2", text: "Which Suits Arbitrage Better?" },
      { type: "p", text: "For arbitrage, neither contract is universally better. Perps suit funding-rate arbitrage and short-term basis trades, because the funding mechanism creates a steady, collectible cash flow and because perp liquidity makes hedging easy. Quarterlies suit cash-and-carry arbitrage and planned medium-term holds, because the fixed expiry gives a clear convergence date and removes the uncertainty of funding flips. Many professional arbitrageurs use both: perps for the funding leg, quarterlies for the basis leg, and spot for the hedge, adjusting the mix as funding and basis move. The choice depends on the trader's horizon, capital, margin, and tolerance for roll management." },
      { type: "p", text: "For directional traders and hedgers, the logic is similar. Short-term directional trades usually favor perps, because there is no expiry to manage and liquidity is deepest. Longer-term holds and hedges often favor quarterlies, because the cost is locked in at entry through the basis and there is no funding surprise. Hedgers protecting a spot holding should pay special attention to basis risk: a hedge that does not track spot perfectly can lose money even when the underlying moves as expected. Whatever the use case, the discipline is the same: price the full round trip, including fees, funding or basis, slippage, and margin, and never trade a structure you cannot explain in one sentence. For the broader toolkit, see our [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) and the [arbitrage hub](/arbitrage)." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you compare perps and quarterlies for your own holding period. Ask it to walk through a cash-and-carry example with real numbers, or to draft a checklist comparing funding, basis, roll costs, and margin for one trade." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is the main difference between perps and quarterly futures?",
            a: "Perps have no expiry and use a funding rate to stay near spot. Quarterlies have a fixed expiry, no funding rate, and converge to spot through the basis.",
          },
          {
            q: "What is the funding rate?",
            a: "A periodic payment between long and short perp holders that keeps the perp price near spot. When perps trade above spot, longs pay shorts; when below, shorts pay longs.",
          },
          {
            q: "What is the basis in futures?",
            a: "The difference between the futures price and the spot price. In contango, futures trade above spot; in backwardation, below. The basis converges to zero at expiry.",
          },
          {
            q: "Which is better for arbitrage?",
            a: "It depends on the trade. Perps suit funding-rate arbitrage and short-term trades; quarterlies suit cash-and-carry basis arbitrage and planned holds. Many professionals use both.",
          }
        ],
      },
  ],
};
