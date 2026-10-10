import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "spot-futures-arbitrage-guide",
  title: "Spot-Futures Arbitrage: Complete Guide",
  description: "Spot-futures arbitrage explained: buy spot, short the future, capture the basis as contracts converge. The full 2026 playbook, costs, and honest risks.",
  keywords: [
      "spot futures arbitrage",
      "cash and carry arbitrage crypto",
      "crypto basis trade",
      "spot futures basis capture",
      "crypto arbitrage strategy 2026"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Spot-futures arbitrage is the classic cash-and-carry trade: buy the coin on spot, short the dated future, and collect the difference as the contract converges. Here is how the whole trade works.",
  image: "/images/blog/spot-futures-arbitrage-guide.svg",
  blocks: [
      { type: "p", text: "**Spot-futures arbitrage** is one of the oldest trades in finance, and it works in crypto exactly the way it works in commodities and bonds: buy the asset on the spot market, short the corresponding futures contract, and hold both legs until the future converges toward spot at expiry. The difference between the futures price and the spot price — the **basis** — becomes your profit, assuming you manage costs and risks properly. Because you are long and short the same asset in equal size, the trade is market-neutral: whether bitcoin doubles or halves while you hold the position, the two legs cancel each other out and the locked-in basis stays yours." },
      { type: "p", text: "This trade thrives in a specific market condition called **contango**, when futures trade above spot. Contango is the normal state of crypto futures: buyers pay a premium for the future contract because it bundles in the market's expectations, the time value of money, and the demand for leveraged exposure. Your job as a basis trader is simple to state and harder to execute well: buy spot, short the future at that premium, wait for expiry to pull the two prices together, and keep the difference. When futures trade below spot — **backwardation** — the trade flips: you short spot and buy the future, though that version is harder to fund for most traders." },
      { type: "h2", text: "The Trade Structure, Step by Step" },
      {
        type: "list",
        items: [
        "Open the spot leg: buy the asset on the spot market with your own capital (for example, 1 BTC).",
        "Open the futures leg: short the same quantity of a dated futures contract on a margin account.",
        "Hold both legs to expiry: the futures price converges to the spot price as settlement approaches.",
        "Close out: at or near expiry, sell the spot asset and settle or close the short future.",
        "Keep the basis: profit equals the initial futures-minus-spot difference, minus every cost incurred along the way."
        ],
      },
      { type: "p", text: "The critical detail is sizing. The two legs must be **equal in quantity**, not equal in notional value in a loose sense — one bitcoin long on spot against a one-bitcoin short future. Any mismatch leaves you with directional exposure, and a basis trade with directional exposure is not a basis trade anymore; it is a directional bet wearing a costume. Professional basis desks check this hedge ratio before opening anything and re-check it after every adjustment, because contract sizes, lot rounding, and fees can all nudge the ratio off center. If you are new to the terminology, our [crypto arbitrage glossary](/glossary) covers basis, contango, and hedge ratios." },
      { type: "h2", text: "Where the Profit Actually Comes From" },
      { type: "p", text: "Your gross profit is the annualized yield implied by the basis at the moment you open the trade. If bitcoin spot is $90,000 and the three-month future is $93,000, the $3,000 gap is about 3.33% over roughly a quarter — roughly 13-14% annualized before costs. That number is your ceiling. Everything you spend — trading fees on both legs, funding or borrowing costs if you use margin, the bid-ask spread on entry and exit, and any transfer fees — comes out of it. Basis traders live and die by this yield calculation: they enter when the annualized basis exceeds their cost of capital and their required margin of safety, and they wait when it does not." },
      {
        type: "callout",
        title: "Basis yield is not a guaranteed return",
        text: "The locked-in basis only survives if both legs stay intact until convergence. Liquidation of either leg, a forced closure, a platform halt, or a failure to roll or close properly can all break the trade. Treat basis yield as a target, not a promise.",
        tone: "warning",
      },
      { type: "h2", text: "The Full Cost Breakdown" },
      {
        type: "table",
        headers: ["Cost", "Typical range", "Notes"],
        rows: [
          ["Spot trading fee", "0.05%-0.1%", "Per side; maker orders are cheaper"],
          ["Futures trading fee", "0.02%-0.05%", "Per side; taker usually costs more"],
          ["Bid-ask spread (both legs)", "0.01%-0.05%", "Wider on less liquid contracts"],
          ["Margin borrowing cost", "Varies by platform", "Only if you use leverage on either leg"],
          ["Transfer costs", "Network fee + time", "Only if legs sit on different exchanges"],
          ["Opportunity cost", "Your capital's alternative yield", "Often forgotten, always real"]
        ],
      },
      { type: "h2", text: "What Can Go Wrong" },
      { type: "p", text: "Liquidation is the headline risk. If you use leverage on the futures leg and the market rips upward, your short can be liquidated even though your spot leg is gaining — the exchange liquidates positions leg by leg, not as a portfolio, unless you have portfolio margin. During sharp moves, the two legs can also diverge temporarily: the basis can widen against you, and if you used cross margin with other positions, a losing leg can drag the whole account. Never assume a hedged position cannot blow up." },
      { type: "h2", text: "Running Spot-Futures Arbitrage in 2026" },
      { type: "p", text: "In 2026, the spot-futures basis on major coins is a professional's game: institutional desks, market makers, and well-capitalized funds compete for it, which keeps the basis tight on bitcoin and ether quarterly contracts most of the time. The remaining opportunities tend to cluster around three situations: altcoin futures where retail leverage demand pushes premiums higher, periods of market stress or euphoria when the basis swings violently, and the days just before expiry when convergence accelerates. Traders who succeed here are patient, well-capitalized, and obsessive about costs — the opposite of the get-rich-quick image arbitrage sometimes carries." },
      { type: "p", text: "If this strategy appeals to you, start by understanding the moving parts: how the [basis itself behaves](/blog/futures-basis-explained), how quarterly contract mechanics work, and how margin modes affect hedged positions. Paper-trade the full cycle once — entry, holding, expiry, settlement — before committing real capital. The mechanics are straightforward; the discipline is the hard part." },
      {
        type: "faq",
        items: [
          {
            q: "How much capital do I need for spot-futures arbitrage?",
            a: "More than most beginners expect. You need the full spot purchase in cash plus margin for the futures short, so a 1 BTC trade at $90,000 needs roughly $90,000 plus margin collateral. Basis trading is capital-intensive, which is why professionals use margin offsets and portfolio margin where available.",
          },
          {
            q: "Can I do spot-futures arbitrage with perpetual futures instead?",
            a: "Yes, but it becomes a different trade: the funding-rate carry trade. Perpetuals never expire, so there is no convergence at settlement — instead you collect (or pay) periodic funding. It has different risk characteristics and is covered in our comparison of funding trades versus basis trades.",
          },
          {
            q: "What happens if I get liquidated on the futures leg?",
            a: "The hedge breaks: you are left holding spot with no short offset, which is just a directional long position. This is the single most dangerous moment in a basis trade. Use conservative leverage, monitor margin ratios, and understand your exchange's liquidation mechanics before entering.",
          },
          {
            q: "Is spot-futures arbitrage risk-free?",
            a: "No. It is market-neutral, which is not the same thing. Liquidation, operational failures, funding costs, exchange outages, and tax complexity all remain. The honest description is lower directional risk than holding crypto outright — with a full set of other risks replacing it.",
          }
        ],
      },
  ],
};
