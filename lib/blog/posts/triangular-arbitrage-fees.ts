import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "triangular-arbitrage-fees",
  title: "Triangular Arbitrage Fees: The Math That Decides Profit",
  description: "Triangular arbitrage fees apply on every leg, turning 0.1% per trade into ~0.3% per loop. Learn the net-edge formula, maker vs taker, and break-even math.",
  keywords: [
      "triangular arbitrage fees",
      "arbitrage trading fees",
      "crypto trading fee tiers",
      "maker vs taker fees",
      "arbitrage break-even",
      "triangular arbitrage profit"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Fees decide triangular arbitrage: three taker fees of 0.1% consume roughly 0.3% per loop, so the net edge equals the gross edge minus every leg's fee and spread cost.",
  image: "/images/blog/triangular-arbitrage-fees.svg",
  blocks: [
      { type: "p", text: "Triangular arbitrage fees are the single factor that most often turns a promising loop into a losing one. Because the strategy needs three separate trades, the exchange takes its cut three times per cycle: a 0.1% fee per leg becomes roughly 0.3% per loop before spreads are even considered. When gross edges are frequently under one percent, that fee drag decides everything. Skip this step and you are trading blind: the difference between a profitable loop and a donation to the exchange is usually a few basis points of fee drag. This article lays out the math so you can judge any loop honestly before committing capital." },
      { type: "h2", text: "Why Three Legs Means Three Fees" },
      { type: "p", text: "Each leg of the triangle is an independent order on the exchange, and each order pays the exchange's trading fee. There is no bundled pricing for completing a loop; the USDT-to-BTC leg, the BTC-to-ETH leg, and the ETH-to-USDT leg are each charged like any normal spot trade. That multiplication is what makes triangular arbitrage so fee-sensitive compared with single-trade strategies. A loop showing a 0.25% gross edge against three 0.1% taker fees is already underwater before spreads, which is a common beginner miscalculation." },
      { type: "h2", text: "Maker vs Taker: Which Fee You Actually Pay" },
      { type: "p", text: "Exchanges generally charge lower maker fees for limit orders that add liquidity and higher taker fees for market orders that remove it. Triangular loops usually need speed, which pushes traders toward market orders and therefore taker fees on all three legs. Patient traders can post limit orders to earn maker rates, but resting orders risk missing the mispricing entirely as the gap closes. Your realistic fee assumption should match your execution style: quote taker fees if you need immediacy, and only use maker rates if you genuinely execute with resting limit orders. Hybrid approaches exist, such as posting two legs as limit orders while taking the third, but every resting order adds timing risk to the loop." },
      { type: "h2", text: "Fee Tiers, Volume Discounts, and Fee Tokens" },
      { type: "p", text: "Most exchanges reduce fees as your 30-day trading volume grows, and some offer additional discounts for holding or paying fees in their native token. These programs change over time, so always check the current schedule rather than relying on remembered figures. In general terms, high-volume or token-discounted accounts can cut per-leg costs meaningfully, which directly lowers the break-even edge for every loop. Fee optimization is one of the few durable advantages available here, since speed and information advantages are hard for smaller traders to obtain." },
      { type: "h2", text: "The Net Edge Formula" },
      { type: "p", text: "The honest way to evaluate a loop is: net edge equals gross edge minus the sum of leg fees minus spread and slippage costs. In symbols, if each leg pays fee f and the gross edge is g, the break-even condition is roughly g greater than (1 + f) cubed minus 1, plus your spread costs. The cubed term captures fee compounding across three legs. Work through this formula for every candidate loop, because intuition consistently underestimates how much three small fees subtract from a small edge. For quick mental math, three times the per-leg fee is a fine approximation of the fee drag, since compounding adds only a tiny second-order term at these fee levels." },
      { type: "h2", text: "Worked Illustration With General Numbers" },
      { type: "p", text: "Take a loop with a 0.6% gross edge and a 0.1% taker fee per leg. The three fees compound to about 0.3%, leaving a net edge near 0.3% before spreads. Now add a modest 0.05% of spread and slippage cost per leg, another 0.15% total, and the net falls to roughly 0.15%. Halve the gross edge to 0.3% and the same costs push the loop negative. This is why professionals set a minimum gross-edge threshold well above their fee level and skip everything below it, a discipline covered further in our [triangular arbitrage example](/blog/triangular-arbitrage-example). This example is deliberately general: plug in your own exchange's taker fee and your measured spread costs to get your personal threshold." },
      { type: "h2", text: "Break-Even Table: Fee Level vs Required Edge" },
      { type: "p", text: "The table below shows the approximate gross edge needed to break even at different per-leg fee levels, using the (1 + f) cubed minus 1 relationship and ignoring spreads. Your real required edge is higher once spread and slippage are added. Use it as a quick filter: if a scanner flags a loop below your row's threshold, it is not profitable at your fee tier. If your scanner flags loops at a fixed minimum edge, set that floor above your row's value plus a buffer for spreads, or you will execute phantom profits. Compare this with the broader [triangular arbitrage guide](/guides/triangular-arbitrage) for context on where such edges appear." },
      {
        type: "table",
        headers: ["Per-leg fee", "Fee drag per loop (approx)", "Gross edge needed to break even"],
        rows: [
          ["0.02%", "~0.06%", "Above ~0.06%"],
          ["0.05%", "~0.15%", "Above ~0.15%"],
          ["0.10%", "~0.30%", "Above ~0.30%"],
          ["0.15%", "~0.45%", "Above ~0.45%"],
          ["0.20%", "~0.60%", "Above ~0.60%"],
          ["0.25%", "~0.75%", "Above ~0.75%"]
        ],
      },
      {
        type: "callout",
        title: "The Hidden Cost: Spread",
        text: "Spreads are a cost on every leg just like fees. Buying at the ask and selling at the bid means you lose half the spread each time you cross it. On thin altcoin books, spread costs alone can exceed the fee drag, so always measure them from the live order book.",
        tone: "info",
      },
      {
        type: "callout",
        title: "Risk Disclosure",
        text: "Fee schedules change, and quoted maker/taker rates may not match your account tier. Verify your actual fees in the exchange's fee schedule before trading, and never assume a loop is profitable without subtracting all three legs' fees plus spreads.",
        tone: "warning",
      },
      {
        type: "faq",
        items: [
          {
            q: "How much do fees reduce triangular arbitrage profit?",
            a: "Roughly three times the per-leg fee. At 0.1% per leg, the loop loses about 0.3% to fees alone, before spreads and slippage. Since gross edges are often under 1%, fees commonly consume a third to a half of the apparent opportunity.",
          },
          {
            q: "Should I use maker or taker fees in my calculations?",
            a: "Use whichever matches your real execution. Market orders pay taker fees, which is the realistic assumption for fast loops. Only use maker rates if you consistently execute with resting limit orders, and remember that resting orders may miss short-lived mispricings.",
          },
          {
            q: "Do fee-token discounts make triangular arbitrage viable?",
            a: "They help by lowering the per-leg fee, which directly reduces the break-even edge for every loop. Whether that makes the strategy viable depends on your volume, the discount size, and how much edge remains after spreads. Check the current program terms, since they change.",
          },
          {
            q: "What is the break-even formula for a triangular loop?",
            a: "The gross edge must exceed (1 + f) cubed minus 1, where f is the per-leg fee, plus spread and slippage costs. At 0.1% per leg, that means a gross edge above roughly 0.3% just to cover fees, with spreads pushing the true threshold higher.",
          },
          {
            q: "Why do beginners underestimate fee impact?",
            a: "Because a single 0.1% fee feels negligible, and it is easy to forget it applies three times per loop. People also calculate with mid-prices instead of executable bid/ask prices, hiding the spread cost. Always compute with all-in costs on all three legs.",
          }
        ],
      },
  ],
};
