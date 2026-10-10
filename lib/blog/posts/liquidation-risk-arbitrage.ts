import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "liquidation-risk-arbitrage",
  title: "Liquidation Risk in Hedged Arbitrage",
  description: "Liquidation risk in hedged arbitrage: how market-neutral positions get liquidated, margin-call mechanics, and the practical defenses that keep hedges alive.",
  keywords: [
      "liquidation risk arbitrage",
      "hedged position liquidation",
      "crypto margin call arbitrage",
      "arbitrage liquidation cascade",
      "crypto liquidation explained 2026"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Hedged does not mean liquidation-proof. Here is exactly how arbitrage positions get liquidated — and the defenses that keep your hedge alive through violent markets.",
  image: "/images/blog/liquidation-risk-arbitrage.svg",
  blocks: [
      { type: "p", text: "Ask a new arbitrage trader about risk and you will hear a confident answer: the position is hedged, so it cannot really lose. Then show them a liquidation notice. **Liquidation risk in hedged arbitrage** is the most misunderstood danger in the strategy — precisely because the hedge creates a feeling of safety that the mechanics do not support. Exchanges do not liquidate *trades*; they liquidate *positions*, one at a time, against the margin allocated to each. Your perfectly balanced book means nothing to a liquidation engine evaluating your short future in isolation during a violent upside wick." },
      { type: "p", text: "This article walks through exactly how hedged positions die: the mechanics of margin and liquidation, the specific scenarios that break arbitrage hedges, and the practical defenses that experienced traders actually use. The goal is not to scare you away from arbitrage — hedged strategies remain among the sanest ways to trade crypto — but to replace the false comfort of market-neutral with the true comfort of understanding your real exposures. If you have not yet internalized why leverage and hedges interact badly, read our piece on [using leverage in arbitrage](/blog/leverage-in-arbitrage) first." },
      { type: "h2", text: "How a Hedged Position Gets Liquidated" },
      { type: "p", text: "Picture the standard basis trade: long 1 BTC on spot, short 1 BTC of quarterly futures with 3x leverage. Net exposure: zero. Now bitcoin spikes 12% in twenty minutes on a short squeeze. Your spot leg gains 12% — lovely, but unrealized and sitting in your spot wallet. Your short future loses 36% against its margin — and the exchange's risk engine, watching only the futures account, issues a margin call and then liquidates the short. The engine does not net your spot profit against your futures loss; in most account structures, it cannot even see the spot leg. Seconds later you own 1 BTC outright with no hedge — a directional long opened at the old price, fully exposed to whatever the market does next." },
      { type: "h2", text: "The Basis Can Move Against You Too" },
      { type: "p", text: "Liquidation is not the only way a hedge breaks — sometimes the hedge just bleeds. The **basis** between your legs is itself a tradable spread, and it can widen violently against you. Imagine you entered a basis trade at a 10% annualized premium; a market panic flips the contract into backwardation at -15% annualized. Your position's mark-to-market swings hard negative. If you are margined tightly or using cross margin with other positions, that mark-to-market loss alone can trigger margin calls — even though the trade would still converge profitably at expiry if you could hold it." },
      { type: "p", text: "This is the cruelest feature of basis trading: the trade can be *right* and still kill you. Convergence at expiry is guaranteed by contract mechanics, but your margin account lives in the present, marked to market every second. Being right about expiry is worthless if you cannot survive the path there. Professional desks manage this with deep margin buffers and modest leverage; they treat interim basis volatility as a known cost of the strategy, sized so that even historic basis blowouts cannot force them out. Amateurs learn about it the first time the basis gaps against them on a Sunday night." },
      { type: "h2", text: "Where Liquidations Actually Happen" },
      {
        type: "table",
        headers: ["Scenario", "What breaks", "Typical trigger"],
        rows: [
          ["Upside squeeze on short perp/future", "Short leg liquidated", "Funding-trade shorts during rallies"],
          ["Basis blowout against you", "Margin call on mark-to-market loss", "Panic flipping contango to backwardation"],
          ["Cross-margin contagion", "Whole account drained", "One bad position eating shared collateral"],
          ["Split-exchange hedge", "One leg liquidated, other stranded", "Cannot move collateral fast enough"],
          ["Auto-deleveraging (ADL)", "Position force-closed at bad price", "No liquidators left during extremes"]
        ],
      },
      {
        type: "callout",
        title: "ADL: liquidation's ugly cousin",
        text: "When liquidations overwhelm the insurance fund during extreme moves, exchanges use auto-deleveraging: profitable positions get force-closed to cover bankrupt ones. Your winning hedge leg can be closed against your will at the worst moment. Check whether your exchange uses ADL and how it prioritizes accounts.",
        tone: "warning",
      },
      { type: "h2", text: "Defenses That Actually Work" },
      {
        type: "list",
        items: [
        "Keep leverage low: size positions so historic wicks cannot reach your liquidation price.",
        "Use isolated margin for leveraged legs to quarantine each position from the rest of the account.",
        "Maintain a dedicated margin buffer in stablecoins on the derivatives exchange — not on another venue.",
        "Set alerts well above liquidation: act at 2x your maintenance margin, not at the edge.",
        "Pre-write your deleveraging plan: which leg closes first, at what trigger, with no improvisation.",
        "Understand ADL and insurance-fund mechanics on every exchange you use before you need them."
        ],
      },
      { type: "h2", text: "Stress-Test Before You Scale" },
      { type: "p", text: "Before committing serious capital to any hedged strategy, run a simple stress test on paper. Take your planned position and apply the worst single-day move in the asset's recent history — then double it, because crypto invents new records regularly. Check every leg's liquidation price against that move. Check your total margin usage under cross margin. Check whether you could meet a margin call at 3 a.m. on a Sunday with funds already in place. If any answer is uncomfortable, the position is too big or the leverage too high. This exercise takes twenty minutes and has saved more arbitrageurs than any indicator ever will." },
      { type: "p", text: "Liquidation risk never goes to zero — it is the price of using margin at all. But it can be managed down to a level where it stops being the thing that ends you. Low leverage, isolated margin, real buffers, written plans, and honest stress tests: unglamorous, effective, and entirely within your control. For the full framework on sizing leverage inside hedged trades, see [using leverage safely in arbitrage](/blog/leverage-in-arbitrage), and compare exchange margin mechanics in our [Binance versus Bybit](/arbitrage/binance-vs-bybit) breakdown." },
      {
        type: "faq",
        items: [
          {
            q: "Can a fully hedged position really be liquidated?",
            a: "Yes. Exchanges liquidate individual positions against their allocated margin, not your net book. A leveraged short leg can be liquidated during a spike even while your long hedge leg is profitable — the engine evaluates each leg separately in most account structures.",
          },
          {
            q: "What is the difference between a margin call and liquidation?",
            a: "A margin call is a warning that your margin ratio has fallen to a dangerous level; liquidation is the exchange force-closing your position. On most crypto exchanges the process is automatic and fast — there may be no human-readable warning before the engine acts.",
          },
          {
            q: "Does isolated margin prevent liquidation?",
            a: "No — it prevents contagion. Isolated margin quarantines each position so one liquidation cannot drain your whole account, but the isolated position itself can still be liquidated if the market moves far enough against it.",
          },
          {
            q: "What is auto-deleveraging (ADL)?",
            a: "When mass liquidations exhaust an exchange's insurance fund, ADL force-closes profitable opposing positions to cover the shortfall. Even winning positions can be closed during extremes. It is rare but real — know whether your exchange uses it.",
          }
        ],
      },
  ],
};
