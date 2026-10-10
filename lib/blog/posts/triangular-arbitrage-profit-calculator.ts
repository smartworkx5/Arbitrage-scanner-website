import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "triangular-arbitrage-profit-calculator",
  title: "How to Calculate Triangular Arbitrage Profit",
  description: "Learn the exact fee math behind triangular arbitrage profit: the three-leg formula, a worked 10,000 USDT example, a spreadsheet setup, and break-even checks.",
  keywords: [
      "triangular arbitrage",
      "triangular arbitrage calculator",
      "arbitrage profit formula",
      "crypto arbitrage math",
      "arbitrage spreadsheet",
      "trading fees calculation",
      "crypto profit calculation"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Triangular arbitrage profit lives or dies on fee math. Here is the exact three-leg formula, a fully worked example starting from 10,000 USDT, and a spreadsheet layout you can reuse.",
  image: "/images/blog/triangular-arbitrage-profit-calculator.svg",
  blocks: [
      { type: "p", text: "Triangular arbitrage looks simple — convert A to B to C and back to A for more than you started with — but the profit calculation trips up most beginners because fees compound across three legs. Skip the fee math and every loop looks profitable; do it properly and most apparent edges vanish. This guide gives you the exact formula for triangular arbitrage profit, a fully worked example with verified arithmetic, and a spreadsheet layout you can reuse for live evaluation. Pair it with the strategy overview in our [triangular arbitrage guide](/guides/triangular-arbitrage)." },
      { type: "h2", text: "The Core Formula" },
      { type: "p", text: "Let f1, f2, and f3 be the taker fee rates on legs one, two, and three, expressed as decimals (for example, 0.001 for 0.1 percent). Each leg multiplies your amount by its price ratio and then by (1 minus the fee). Chaining all three legs gives: final_amount = start x (1 - f1) x (1 - f2) x (1 - f3) x (leg ratios). The leg ratios are the three conversion rates multiplied together — for instance, units of B per A, times units of C per B, times units of A per C. If the product of the ratios exceeds 1 by more than the fees consume, the loop profits." },
      { type: "p", text: "From the final amount, the net result is straightforward: net_profit_pct = (final / start - 1) x 100. A positive value means the loop earns money after all three fees; a negative value means it loses. Note that the formula uses taker fees deliberately — triangular arbitrage legs must execute immediately, so modeling maker fees you may not receive is a classic beginner error. Always use the fee tier you actually qualify for, verified on the exchange's live fee page." },
      { type: "h2", text: "Worked Example: 10,000 USDT Start" },
      { type: "p", text: "Suppose you start with 10,000 USDT and each leg charges a 0.1 percent taker fee (f = 0.001). Leg 1 converts USDT to BTC at an illustrative ratio of 0.00001500 BTC per USDT: 10,000 x 0.00001500 = 0.15000000 BTC before fees, minus 0.1 percent gives 0.14985000 BTC. Leg 2 converts BTC to ETH at 15.00 ETH per BTC: 0.14985000 x 15.00 = 2.24775000 ETH before fees, minus 0.1 percent gives 2.24550225 ETH. Leg 3 converts ETH back to USDT at 4,470.00 USDT per ETH: 2.24550225 x 4,470.00 = 10,037.39506 USDT before fees, minus 0.1 percent gives 10,027.35766 USDT." },
      { type: "p", text: "Now apply the net formula: (10,027.35766 / 10,000 - 1) x 100 = 0.2736 percent, roughly 0.27 percent net profit, or about 27.36 USDT earned on the loop. Notice how the gross edge looked larger before fees: the raw ratio product was 10,000 x 0.00001500 x 15.00 x 4,470.00 = 10,057.50 USDT, a 0.575 percent gross edge, and the three 0.1 percent fees consumed roughly 0.3 percent of it. This is the central lesson of triangular arbitrage math — fees take a fixed bite, and only edges comfortably larger than that bite are worth trading. Check every step of your own calculations the same way before trusting a bot's output." },
      { type: "h2", text: "Building a Spreadsheet Calculator" },
      { type: "p", text: "A spreadsheet is the best learning tool because it forces you to see every leg's math. Set up columns as follows: leg number, pair, execution price, fee rate, amount in, and amount out. Each row's amount-out cell contains the formula: = amount_in x price x (1 - fee_rate). The next row's amount in references the previous row's amount out, chaining the three legs exactly like the formula above. Add a final cell computing (final / start - 1) x 100 for the net percentage, and you have a reusable calculator for any triplet." },
      {
        type: "list",
        items: [
        "Column A (Leg): 1, 2, 3 — identifies each conversion step.",
        "Column B (Pair): e.g. USDT/BTC — the market traded on that leg.",
        "Column C (Price): the execution price, i.e. units received per unit sent.",
        "Column D (Fee): your actual taker fee as a decimal, e.g. 0.001.",
        "Column E (Amount in): references the previous leg's amount out; leg 1 is your starting capital.",
        "Column F (Amount out): = E x C x (1 - D) — paste this formula down all three rows."
        ],
      },
      { type: "h2", text: "Break-Even Check and Fee Tiers" },
      { type: "p", text: "The break-even check is the single most useful cell in your spreadsheet: it tells you the minimum gross edge a loop needs before it is worth considering. Approximately, break-even gross edge = f1 + f2 + f3 (for small fees, the sum is a fine approximation of the compounded drag). With 0.1 percent per leg, you need roughly 0.3 percent gross just to break even — and a sensible trader demands a margin above that for slippage. Build this as a highlighted cell so you never evaluate a loop without seeing its hurdle rate first." },
      {
        type: "table",
        headers: ["Illustrative fee per leg", "Approx. break-even gross edge", "Sensible minimum target"],
        rows: [
          ["0.10%", "~0.30%", "0.50%+"],
          ["0.075%", "~0.225%", "0.40%+"],
          ["0.05%", "~0.15%", "0.30%+"],
          ["0.02%", "~0.06%", "0.15%+"]
        ],
      },
      { type: "p", text: "The table above is illustrative — your real numbers come from your actual fee tier — but the pattern is what matters: lower fee tiers dramatically lower the hurdle, which is why high-volume traders see opportunities that are invisible to retail accounts. This is also why fee assumptions are the most dangerous input in the whole calculation. For broader context on how this strategy compares with alternatives, see our [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) and our [scanner comparison](/best-crypto-arbitrage-scanners) for tools that surface live edges." },
      {
        type: "faq",
        items: [
          {
            q: "What is the formula for triangular arbitrage profit?",
            a: "final_amount = start x (1-f1) x (1-f2) x (1-f3) x (leg ratios), where f1, f2, f3 are the taker fee rates per leg and the leg ratios are the three conversion rates multiplied together. Then net_profit_pct = (final/start - 1) x 100. Use taker fees, not maker fees, since the legs must execute immediately.",
          },
          {
            q: "Why do I need to include fees on all three legs?",
            a: "Because the exchange charges you three times — once per conversion. Three legs at 0.1 percent each consume roughly 0.3 percent of your capital, which wipes out any gross edge smaller than that. Beginners who model one fee or none consistently find 'profitable' loops that lose money in reality.",
          },
          {
            q: "How do I set up the spreadsheet calculation?",
            a: "Use columns for leg, pair, price, fee, amount in, and amount out. Each row's amount out is = amount_in x price x (1 - fee), and each row's amount in references the previous row's amount out. Add a final cell for (final/start - 1) x 100 to get the net percentage.",
          },
          {
            q: "What is a break-even edge in triangular arbitrage?",
            a: "The minimum gross price edge needed to cover all three legs' fees — approximately the sum of the three fee rates. With 0.1 percent per leg, break-even is roughly 0.3 percent gross. Sensible traders require a margin above break-even to cover slippage and execution uncertainty.",
          },
          {
            q: "Should I use maker or taker fees in the calculation?",
            a: "Taker fees. Triangular arbitrage legs must fill immediately to capture a fleeting edge, which means market-style orders that pay taker rates. Modeling maker fees produces phantom edges that disappear the moment you trade for real. When in doubt, model the highest fee you might pay — conservative math keeps you safe.",
          }
        ],
      },
  ],
};
