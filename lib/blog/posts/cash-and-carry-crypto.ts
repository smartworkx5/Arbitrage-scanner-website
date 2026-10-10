import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "cash-and-carry-crypto",
  title: "Cash-and-Carry Arbitrage in Crypto Explained",
  description: "Cash-and-carry arbitrage in crypto: buy spot, short futures, lock in the basis as contracts converge. Mechanics, margin math, costs, and real 2026 risks.",
  keywords: [
      "cash and carry crypto",
      "cash and carry arbitrage",
      "crypto basis trade",
      "spot futures arbitrage",
      "crypto contango trade"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Cash-and-carry is one of finance's oldest arbitrage trades: buy spot, short the future, and pocket the difference as they converge. Here is how it works on crypto exchanges in 2026.",
  image: "/images/blog/cash-and-carry-crypto.svg",
  blocks: [
      { type: "p", text: "Some arbitrage trades predate cryptocurrency, and **cash-and-carry** is the oldest of them all. When a futures contract trades above spot — contango — you buy the asset on spot and simultaneously short the futures contract. As the contract approaches expiry, its price must converge with spot, and the locked-in gap becomes your profit. No prediction, no market timing, no leverage heroics: you are paid to wait while two prices become one." },
      { type: "p", text: "Crypto is one of the few markets where retail traders can run this trade directly — both legs live on the same exchange account: spot bitcoin in one click, a quarterly futures short in the next. The mechanics are accessible; the devil is in margin requirements, fee drag, and 2026's compressed basis. This guide covers the trade as it actually works today." },
      { type: "h2", text: "Spot Long Plus Futures Short: The Mechanics" },
      { type: "p", text: "Suppose bitcoin spot trades at $67,000 and the three-month future at $68,500 — a $1,500 premium, about 2.2%. You buy 1 BTC spot and short 1 BTC of the quarterly future. At expiry the future settles at the spot price: wherever bitcoin went, your spot is worth the settlement price, your short offsets the difference exactly, and the $1,500 spread between your entries is locked. Minus fees, that locked spread is your return." },
      { type: "p", text: "The key phrase is **convergence**. A dated futures contract has a defined expiry and settlement, so its price cannot wander from spot forever. That separates cash-and-carry from perpetual funding trades: perps rely on funding payments to stay anchored, while dated futures converge by contract design — which is why cash-and-carry is often called the purest form of crypto arbitrage. For the perp-based cousin, see our [funding rate arbitrage guide](/guides/funding-rate-arbitrage)." },
      { type: "h2", text: "Why the Basis Exists (and What It Pays)" },
      { type: "p", text: "The futures premium — the **basis** — exists because leveraged longs pay for exposure without buying spot. In bullish periods, demand for leveraged upside pushes quarterly contracts above spot; the premium is the market's price for leverage. Annualized, the basis is the trade's gross yield: a 2.2% quarterly premium annualizes to roughly 9% before costs. In 2026, basis levels are far tamer than previous bull runs' double-digit premiums — professional desks have competed the trade down to a thin margin." },
      {
        type: "table",
        headers: ["Quarterly basis", "Annualized (approx)", "After est. costs", "Verdict"],
        rows: [
          ["1%", "~4%", "~2-3%", "Thin — only for large size"],
          ["2%", "~8%", "~6-7%", "Workable with low fees"],
          ["3%+", "~12%+", "~10%+", "Attractive but rare in 2026"]
        ],
      },
      { type: "p", text: "That table is illustrative, but the pattern is real: after fees on both legs, only a meaningful basis clears the bar. The trade ties up capital until expiry — returns accrue over months, not days — so compare it against your capital's alternatives. Cash-and-carry is a yield strategy wearing an arbitrage costume; judge it like one." },
      { type: "h2", text: "Margin, Collateral, and the Real Capital Need" },
      {
        type: "callout",
        title: "The short leg needs margin forever",
        text: "Your futures short requires maintenance margin for the entire life of the contract. A violent upside spike can trigger margin calls or liquidation even though your spot leg is gaining equally — the two legs sit in different margin accounts. Keep leverage minimal and buffers large.",
        tone: "warning",
      },
      { type: "p", text: "Capital efficiency is this strategy's weak point: you need full cash for the spot purchase plus margin for the short — often 110-130% of notional in total. Portfolio or cross-margin accounts let spot holdings offset futures margin, improving efficiency considerably. Without that, a $50,000 trade might need $55,000-$65,000 committed. Our [capital requirements breakdown](/blog/funding-arbitrage-capital-needed) runs the full math." },
      { type: "p", text: "Fees deserve their own spreadsheet line: spot fees, futures fees, plus bid-ask spread on both legs. On a three-month hold these one-time costs amortize fine — but they set a hard floor. If round-trip costs are 0.3% against a 1% quarterly basis, nearly a third of gross is gone before the trade starts. Maker orders and fee-tier discounts are not optional here; they decide whether the trade is worth doing." },
      { type: "h2", text: "Risks: What Can Actually Go Wrong" },
      { type: "p", text: "Liquidation of the short leg is the headline risk. In a parabolic rally, your futures short bleeds margin while spot gains sit unrealized elsewhere — if the exchange liquidates the short before you top up, the hedge breaks and you hold naked spot into the top. Basis risk is subtler: the premium can widen after entry, showing paper losses that test your nerve though convergence at expiry remains assured. Exchange risk — outages, withdrawal freezes, insolvency — applies to both legs throughout." },
      { type: "p", text: "Then there is opportunity risk, the quiet one: capital locked in a quarterly basis trade cannot rotate elsewhere for three months. Professionals ladder expiries — splitting capital across contracts so some portion is always nearing settlement. And as with all derivatives income in 2026, check your jurisdiction's tax treatment before assuming the headline yield is what you keep." },
      { type: "h2", text: "Cash-and-Carry vs. Perpetual Funding Trades" },
      { type: "p", text: "Beginners often confuse cash-and-carry with funding rate arbitrage — both pair spot longs against derivative shorts. The difference is structural: cash-and-carry uses dated futures and earns a locked-in premium at expiry, with the return known upfront; funding arbitrage uses perpetuals and earns variable payments that can flip, with no lockup and minute-fast exits. Patient capital favors cash-and-carry, tactical capital favors funding trades. Compare venues in our [Binance vs Coinbase breakdown](/arbitrage/binance-vs-coinbase)." },
      {
        type: "list",
        items: [
        "Choose: dated futures for locked-in yield, perpetuals for flexible yield.",
        "Enter only when the annualized basis clears your costs by a comfortable margin.",
        "Keep futures leverage at 1x and margin buffers generous.",
        "Ladder expiries instead of concentrating on a single settlement date.",
        "Track the position's mark-to-market, but judge it at expiry — interim swings are noise."
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "Is cash-and-carry arbitrage risk-free?",
            a: "No, though it is among the lower-risk crypto strategies. The main dangers are liquidation of the short leg during sharp rallies, exchange counterparty risk over the holding period, and fee drag. The convergence itself is contractually assured, but everything around it — margin, fees, the venue — needs management.",
          },
          {
            q: "How long does a cash-and-carry trade take?",
            a: "Typically one quarterly cycle — around three months — since quarterly futures are the standard instrument. You can exit early by closing both legs, but the full locked-in premium is only realized at expiry. Some traders ladder multiple expiries so capital frees up on a rolling basis.",
          },
          {
            q: "Can I do cash-and-carry with perpetual futures?",
            a: "Not exactly — perpetuals never expire, so there is no convergence to lock in. The perp equivalent is funding rate arbitrage: short the perp, long the spot, and collect funding payments. It is the same delta-neutral shape with a variable, flippable yield instead of a fixed one.",
          },
          {
            q: "What minimum basis makes the trade worthwhile?",
            a: "It depends on your fees, but as a rule of thumb the quarterly basis should exceed your total round-trip costs by at least 2-3x. With 0.3% total costs, look for roughly 1%+ quarterly basis before the trade earns its keep — and more if your capital has better alternatives.",
          }
        ],
      },
  ],
};
