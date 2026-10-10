import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "quarterly-futures-arbitrage",
  title: "Quarterly Futures Arbitrage Strategy",
  description: "Quarterly futures arbitrage strategy: how expiry convergence mechanics lock in the basis, when to enter, and how professionals roll contracts for steady carry.",
  keywords: [
      "quarterly futures arbitrage",
      "dated futures arbitrage crypto",
      "futures expiry convergence",
      "cash and carry quarterly",
      "crypto futures roll strategy"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Quarterly futures must converge to spot at expiry — that mechanical certainty is the engine of the strategy. Here is how traders structure entries, exits, and rolls.",
  image: "/images/blog/quarterly-futures-arbitrage.svg",
  blocks: [
      { type: "p", text: "Most crypto derivatives volume sits in perpetual contracts, but the quiet workhorse of professional arbitrage is the **quarterly future** — a contract with a fixed expiry date, typically the last Friday of March, June, September, or December. Unlike perpetuals, which can drift from spot indefinitely, a quarterly future has a contractual appointment with reality: at settlement, its price must equal the spot price. That mechanical **expiry convergence** is what makes **quarterly futures arbitrage** a genuine arbitrage rather than a directional bet. You are not predicting where bitcoin goes; you are collecting the premium the market pays for time." },
      { type: "p", text: "The strategy is the classic cash-and-carry applied to dated contracts: when the quarterly future trades above spot, buy spot, short the future, and let expiry pull the two together. What makes quarterlies special versus shorter-dated contracts is the balance they strike — long enough duration that the basis is worth harvesting, short enough that your capital is not locked away for a year, and liquid enough on major exchanges that large positions can enter and exit without excessive slippage. For serious basis traders, the quarterly cycle is the heartbeat of the business." },
      { type: "h2", text: "Why Quarterly Futures Must Converge" },
      { type: "p", text: "Convergence is not a market tendency; it is a contract specification. A quarterly future settles against an index or average of spot prices at expiry — for cash-settled contracts, the exchange computes a settlement price from spot markets and closes every position at that price; for physically delivered contracts, the future literally becomes spot. Either way, holding to expiry forces the futures price and the spot price to meet. Any gap remaining at the settlement moment would be free money, and arbitrageurs eliminate it in the final hours." },
      { type: "p", text: "This creates a beautiful property for the basis trader: the profit is **time-decaying and self-realizing**. On day one of the quarter, the basis might imply a 12% annualized yield; each day that passes, a slice of that basis mechanically accrues to your position as the future drifts toward spot. You do not need the market to do anything. Time does the work. The main ways to lose are operational — liquidation, fees, or failing to manage the position through expiry — not directional." },
      { type: "h2", text: "Structuring the Trade" },
      {
        type: "list",
        items: [
        "Pick the contract: the nearest quarterly future with good liquidity — usually the front quarter.",
        "Measure the annualized basis: (future - spot) / spot, annualized over days to expiry. Enter only above your hurdle rate.",
        "Size the hedge: buy spot and short the future in equal quantities, accounting for contract multipliers.",
        "Choose your venue: both legs on one exchange simplifies margin; split legs across venues can capture better pricing but complicates collateral.",
        "Plan the exit: hold to expiry for the full basis, or set a basis target to exit early if the premium compresses."
        ],
      },
      { type: "h2", text: "The Roll: Where Professionals Make Their Money" },
      { type: "p", text: "Here is the part beginners miss: professionals rarely let a quarterly position simply expire and stop. Instead, they **roll** — closing the expiring contract and opening the next quarter's contract, capturing the fresh basis on the new contract. Each quarterly cycle is one harvest; four cycles a year is a compounding carry business. The roll itself is a trade with its own timing: rolling early avoids the illiquidity and weirdness of expiry week, while rolling late captures more of the old contract's remaining basis. Most desks roll in the final one to two weeks." },
      {
        type: "table",
        headers: ["Quarter", "Illustrative annualized basis", "What a rolling trader does"],
        rows: [
          ["Q1 (Jan-Mar)", "Higher at listing", "Enter new positions on fresh, wide basis"],
          ["Q1 expiry week", "Decaying to ~0", "Roll into Q2 contract before liquidity fades"],
          ["Q2 (Apr-Jun)", "Higher at listing", "Harvest the new contract's premium"],
          ["Stress event", "Spikes sharply", "Add to positions when basis blows out"]
        ],
      },
      { type: "p", text: "Rolling is not free: each roll means closing and reopening the futures leg, paying trading fees and crossing the spread twice (once on each contract). On liquid majors this cost is small, but on thinner altcoin quarterlies it can eat a meaningful chunk of the harvested basis. Factor roll costs into your hurdle rate from the start — a 10% annualized basis that costs 1% to roll quarterly is really a 6% strategy, not a 10% one." },
      { type: "h2", text: "Risks Specific to Quarterly Contracts" },
      {
        type: "callout",
        title: "Expiry week is the danger zone",
        text: "Liquidity migrates to the next contract before expiry, spreads widen, and settlement-price calculations can behave unexpectedly. Plan rolls and exits before expiry week, not during it.",
        tone: "warning",
      },
      { type: "p", text: "Beyond the generic risks of basis trading — liquidation, fees, operational failures — quarterlies have their own quirks. **Settlement risk**: the settlement price is computed from an index of spot exchanges, and if one of those venues behaves oddly in the settlement window, your fill may differ from the screen price. **Delivery risk**: on physically delivered contracts, failing to close before expiry can leave you unexpectedly long or short the actual asset. **Calendar risk**: quarter-end often coincides with portfolio rebalancing by large funds, which can whip the basis around in the final days. None of these are reasons to avoid the trade; all of them are reasons to have a written expiry plan." },
      { type: "p", text: "There is also the quiet risk of **opportunity cost across the quarter**. A three-month lockup is a long time in crypto. If a spectacular funding-rate opportunity or a market dislocation appears mid-quarter, your capital is tied up in a position yielding a fixed, modest return. Professional desks manage this by keeping a portion of capital uncommitted — the basis trade gets an allocation, not the entire book. For a broader view of how this strategy fits alongside others, see our guide to [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) and the [crypto arbitrage blog](/blog)." },
      {
        type: "faq",
        items: [
          {
            q: "What is the difference between quarterly and perpetual futures?",
            a: "Quarterly futures have a fixed expiry date and must converge to spot at settlement; perpetuals never expire and stay near spot through funding-rate payments. Quarterlies suit time-decay harvesting (basis trades); perpetuals suit ongoing carry collection (funding trades).",
          },
          {
            q: "When is the best time to enter a quarterly basis trade?",
            a: "Usually early in the contract's life, when the basis is widest and there is maximum time for it to accrue. Entering in the final weeks before expiry means harvesting only the thin remaining premium — rarely worth the effort and costs.",
          },
          {
            q: "What does rolling a futures contract mean?",
            a: "Closing your position in the expiring quarterly contract and opening an equivalent position in the next quarter's contract. It lets you keep the basis trade running continuously, harvesting each new contract's premium four times a year.",
          },
          {
            q: "Can quarterly futures go into backwardation?",
            a: "Yes, during market panics the quarterly future can trade below spot, just like any dated contract. The convergence mechanic still works — the discount must close by expiry — but the trade direction flips to buying the future and shorting spot, which requires borrowable spot inventory.",
          }
        ],
      },
  ],
};
