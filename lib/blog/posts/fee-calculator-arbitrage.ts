import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "fee-calculator-arbitrage",
  title: "Crypto Arbitrage Fee Calculator: Spreadsheet Template Walkthrough",
  description: "Build a crypto arbitrage fee calculator in a spreadsheet: every input, formula, and go/no-go rule you need to cost an arbitrage trade honestly in 2026.",
  keywords: [
      "crypto arbitrage fee calculator",
      "arbitrage spreadsheet template",
      "arbitrage profit calculator",
      "crypto arbitrage calculator excel",
      "arbitrage cost spreadsheet"
  ],
  datePublished: "2026-10-11",
  dateModified: "2026-10-11",
  readingMinutes: 10,
  category: "Basics",
  excerpt: "A spreadsheet is the most honest arbitrage tool you own. This walkthrough builds a fee calculator cell by cell — inputs, formulas, and the go/no-go rules pros use.",
  image: "/images/blog/fee-calculator-arbitrage.svg",
  blocks: [
      { type: "p", text: "Every professional arbitrageur runs the same unglamorous tool before risking a dollar: a spreadsheet that turns a quoted spread into a net-profit verdict. A **crypto arbitrage fee calculator** forces honesty — it makes you write down every cost (trading fees, withdrawal fees, spread, slippage, transfer risk) instead of mentally rounding them away. Most losing arbitrage is not bad strategy; it is good strategy executed on costs that were never calculated. This walkthrough builds that calculator step by step in any spreadsheet app." },
      { type: "p", text: "You do not need advanced spreadsheet skills — just the discipline to fill every cell before trading. The template below handles a standard cross-exchange round trip: buy on venue A, sell on venue B, rebalance. Triangular and funding variants need extra rows, but the costing logic is identical. All example numbers are illustrative; the structure is what matters, and you will plug in your own venue's real fees. For the mechanics of the trade this calculator prices, see our [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage)." },
      { type: "h2", text: "The Inputs Your Calculator Needs" },
      { type: "p", text: "A calculator is only as honest as its inputs, so start by collecting real numbers. You need the executable buy price (the ask on venue A) and sell price (the bid on venue B) — never mid-prices. You need your actual maker/taker fee rates on both venues at your current tier, the withdrawal fee and minimum for the rebalancing coin and network, and a slippage estimate based on order-book depth at your intended size. Finally, note the expected transfer time for the rebalancing coin, because that sets your price-risk window." },
      {
        type: "list",
        items: [
        "Buy price: live ask on venue A, at your intended size (check depth beyond top of book).",
        "Sell price: live bid on venue B, same size discipline.",
        "Trading fees: your real taker/maker rates on both venues — entry tier unless you qualify higher.",
        "Withdrawal fee + minimum: per-coin, per-network, from the venue's current schedule.",
        "Slippage estimate: from walking the book; be pessimistic on thin pairs.",
        "Transfer time: typical confirmation time for the rebalancing coin and network."
        ],
      },
      { type: "h2", text: "Building the Sheet Step by Step" },
      { type: "p", text: "Lay out the sheet as a vertical cost waterfall: start with gross spread at the top, subtract each cost line, and end with net edge at the bottom. Each row should be a formula referencing the input cells, so updating one input recalculates everything. The key rows: gross spread in dollars (sell value minus buy cost), trading fees on both legs, withdrawal fee as a dollar amount, slippage estimate in dollars, and a transfer-risk reserve — a small percentage buffer for price movement during rebalancing. Sum the costs, subtract from gross, and the bottom line is your estimated net." },
      {
        type: "table",
        headers: ["Row (illustrative $10,000 trade)", "Formula logic", "Example value"],
        rows: [
          ["Gross spread", "(Sell price - buy price) x size", "+$150.00"],
          ["Buy-leg trading fee", "Buy value x taker fee rate", "-$10.00"],
          ["Sell-leg trading fee", "Sell value x taker fee rate", "-$10.00"],
          ["Withdrawal fee", "Flat fee from schedule", "-$6.00"],
          ["Slippage estimate", "Book-walk estimate x size", "-$15.00"],
          ["Transfer-risk reserve", "Illustrative 0.3% of size", "-$30.00"],
          ["NET EDGE", "Gross minus all cost rows", "+$79.00"]
        ],
      },
      { type: "p", text: "That illustrative table shows the waterfall logic, not a recommendation — your numbers will differ, and the transfer-risk reserve is deliberately judgment-based. The discipline that matters: every row must contain a formula, no hardcoded guesses buried in the math, and the sheet should flag in red when net edge falls below your minimum threshold. Add a second section for the reverse direction (spreads often work both ways at different times) and a log tab recording every evaluated opportunity with its verdict — that log becomes your personal dataset on which conditions actually pay." },
      { type: "h2", text: "Reading the Result: Go/No-Go Rules" },
      { type: "p", text: "A positive net edge is necessary but not sufficient. Professionals apply a margin-of-safety multiple: the estimated net should exceed total costs by a comfortable factor — commonly two to three times — because every input is an estimate that errs optimistic in fast markets. Set your sheet to show three verdicts: strong go (net clears the multiple), marginal (positive but thin — usually skip), and no-go (negative or below costs). Most quoted spreads land in marginal or no-go; that filtering is the entire point of the calculator." },
      {
        type: "callout",
        title: "Backtest the calculator, not just the strategy",
        text: "Before trading real money, run your sheet against twenty past opportunities and compare its verdicts with what would actually have happened. If the calculator consistently overestimates, your slippage and risk-reserve rows are too thin — widen them until the sheet's pessimism matches reality.",
        tone: "info",
      },
      { type: "p", text: "Two refinements separate decent sheets from great ones. First, add a size-sensitivity row: recompute net edge at half and double size to see where slippage starts dominating — this reveals your maximum efficient size per opportunity. Second, track cumulative net across the log tab weekly; a strategy whose per-trade math works but whose weekly total disappoints is telling you something about frequency or execution quality. The [glossary](/glossary) defines any costing term you want to double-check while building." },
      { type: "h2", text: "Common Spreadsheet Mistakes" },
      { type: "p", text: "The most common error is modeling with mid-prices instead of executable bid/ask — it inflates every spread by the full bid-ask cost on both venues. Next is forgetting the withdrawal leg entirely, as if coins teleport back for free; on small sizes this single omission flips verdicts. Third is static fee rates: traders hardcode one fee number while their tier, venue, or token-discount status changes. Fourth is ignoring minimums — a $2 withdrawal fee with a $50 minimum breaks the math on small rebalancing amounts. Audit your sheet against this list monthly." },
      { type: "p", text: "The deeper mistake is psychological: building the calculator and then overriding it. The sheet says no-go, the spread looks juicy, and you trade anyway — that is not a calculator problem, it is a discipline problem. Professionals treat the sheet's verdict as binding precisely because their instincts are biased toward action. Build it honestly, calibrate it against reality, and then let it do the job you built it for: saying no far more often than yes. For how costs fit into strategy selection more broadly, our [how crypto arbitrage works](/blog/how-crypto-arbitrage-works) guide puts the calculator in context." },
      {
        type: "faq",
        items: [
          {
            q: "What should a crypto arbitrage fee calculator include?",
            a: "At minimum: executable buy/sell prices (bid/ask, not mid), trading fees for every leg at your actual tier, withdrawal and network fees, a slippage estimate from real book depth, and a reserve for transfer-time price risk. The sheet should waterfall from gross spread down to net edge with a clear go/no-go verdict.",
          },
          {
            q: "Can I use this spreadsheet for triangular arbitrage too?",
            a: "Yes, with extra rows. Triangular arbitrage has three trading legs on one venue instead of two legs across venues, so you need three fee rows and no withdrawal row — but you must add a row for the three sequential executions' slippage, since each leg's fill affects the next.",
          },
          {
            q: "How do I estimate slippage in the calculator?",
            a: "Walk the order book manually: note how far the average fill price moves from the top quote at your intended size on each venue. Use that dollar figure as the slippage row, and be pessimistic on thin altcoin books. Revisit the estimate whenever volatility rises, since books thin out in fast markets.",
          },
          {
            q: "What net margin should I require before trading?",
            a: "A common professional standard is requiring estimated net profit to exceed total estimated costs by two to three times. This margin of safety absorbs the optimism baked into every input. Spreads that are merely positive after costs are usually skipped — estimation error eats thin edges first.",
          }
        ],
      },
  ],
};
