import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "execution-risk-arbitrage",
  title: "Execution Risk in Arbitrage: Slippage, Partial Fills, Latency",
  description: "Execution risk in crypto arbitrage: slippage, partial fills, and latency turn paper spreads into losses. Measure and control the gap between signal and fill.",
  keywords: [
      "execution risk arbitrage",
      "crypto arbitrage slippage",
      "partial fills crypto",
      "arbitrage latency risk",
      "order execution crypto"
  ],
  datePublished: "2026-10-11",
  dateModified: "2026-10-11",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "The spread you see is not the spread you get. Slippage, partial fills, and latency eat arbitrage edges between signal and execution — here is how to measure and control them.",
  image: "/images/blog/execution-risk-arbitrage.svg",
  blocks: [
      { type: "p", text: "**Execution risk** is the gap between the arbitrage opportunity you see on screen and the one you actually capture. Your scanner flashes a 1.2% spread; by the time both legs fill, you have kept 0.4% — or lost money. In October 2026's choppy market — bitcoin near $82,950–$83,015 as of October 11, 2026, drifting sideways about 34% below its all-time high — spreads are thin enough that execution quality decides profitability. And on volatile days, when coins like Starknet's STRK move 40–60% in 24 hours (as it did on October 11), latency turns from a minor cost into the dominant risk. Understanding what happens between signal and fill is not optimization; it is survival." },
      { type: "p", text: "Three forces create execution risk: **slippage** (your fills land worse than the quoted price), **partial fills** (only part of your order executes, leaving you half-hedged), and **latency** (delay between your decision and the exchange's confirmation). They compound: latency causes slippage, slippage on one leg causes you to hesitate on the second, and hesitation turns a hedged trade into a directional bet. This article breaks down each force and the practical controls that keep them from eating your edge." },
      { type: "h2", text: "Slippage: The Spread Is Not the Price" },
      { type: "p", text: "Slippage is the difference between the price you expected and the price you got. On a scanner, spreads are usually computed from mid-prices or best bid/ask — but your market order walks the book, filling at progressively worse prices. On deep BTC/USDT books the cost is basis points; on a thin altcoin book, a $5,000 order can move the price 1–2% against you, erasing the spread that attracted you. Slippage scales with size relative to book depth, which is why the same spread is profitable at $500 and a guaranteed loss at $50,000." },
      { type: "p", text: "The professional habit is pre-trade slippage estimation: before entering, check the order book depth on both venues and simulate your order's walk. Many scanners show spread only — you must supply the depth check yourself. Rules that help: use limit orders where speed allows, cap order size as a fraction of visible book depth (a common convention is under 1–2% of the top levels), and skip trades where estimated slippage exceeds half the spread. Our [triangular arbitrage guide](/guides/triangular-arbitrage) covers multi-leg execution where slippage compounds across three fills instead of two." },
      { type: "h2", text: "Partial Fills: The Half-Hedged Nightmare" },
      {
        type: "callout",
        title: "A partial fill converts arbitrage into speculation",
        text: "If leg A fills completely and leg B fills 40%, you are not running an arbitrage trade — you are holding a directional position you never intended. Always have a defined response: complete the fill, unwind immediately, or hedge the remainder elsewhere.",
        tone: "warning",
      },
      { type: "p", text: "**Partial fills** happen when your order executes against only part of the available liquidity — common in fast markets, on thin books, and when using limit orders priced at the edge. The danger is asymmetric: suppose you buy 1 BTC on Exchange A (fills fully) and your sell order on Exchange B fills only 0.4 BTC before the price moves. You are now long 0.6 BTC unintentionally — a directional bet inside a strategy that was supposed to be market-neutral. If the market drops while you work the remainder, the loss can dwarf the spread you were chasing." },
      { type: "p", text: "Controls: prefer fill-or-kill or immediate-or-cancel order types where venues support them, so a leg either completes or aborts cleanly. Sequence legs to fill the harder leg first — if the thin-book leg fails, you simply never open the easy leg. And predefine the unwind rule: if a leg is partially filled and the remainder cannot be completed within your time limit, close the filled portion immediately at market rather than hoping. Hope is not a hedge. For the transfer leg between venues, our [crypto transfer times guide](/blog/crypto-transfer-times) explains why the in-transit window is the longest partial-exposure period of all." },
      { type: "h2", text: "Latency: Milliseconds That Cost Real Money" },
      { type: "p", text: "**Latency** is the delay between market data reaching you, your decision, and the exchange confirming your fill. For manual traders it is measured in seconds — reading the screen, clicking, confirming. For bots, milliseconds — network round-trips, API rate limits, matching-engine queue position. In calm markets latency is a minor tax; in volatile ones it is the trade. When a coin is moving several percent per hour, a 30-second manual execution delay can erase a 0.5% spread before the second leg fills. This is why professional arbitrage is overwhelmingly automated: not for sophistication, but to compress the signal-to-fill window." },
      {
        type: "table",
        headers: ["Execution style", "Typical signal-to-fill", "Suitable spreads"],
        rows: [
          ["Manual clicking", "10–60 seconds", "Only large, slow-moving spreads"],
          ["Basic API bot", "1–5 seconds", "Standard cross-exchange spreads"],
          ["Co-located / optimized bot", "100–500 ms", "Thin, fast-decaying spreads"]
        ],
      },
      { type: "p", text: "You do not need co-location to start — you need honesty about which game you are playing. A manual trader competing for a 0.3% spread against bots is donating money. Match your targets to your latency: manual traders should focus on slower-decaying opportunities (larger spreads, less competitive pairs, longer-lived dislocations), while automation unlocks thinner, faster edges. Compare venue API quality and rate limits when choosing where to trade — our [Binance vs Bybit comparison](/arbitrage/binance-vs-bybit) notes practical differences that affect execution." },
      { type: "h2", text: "Measuring and Controlling Execution Costs" },
      {
        type: "list",
        items: [
        "Log expected vs. actual fill prices on every trade — your true edge is realized spread, not quoted spread.",
        "Set a maximum acceptable slippage per trade; abort if the first leg slips beyond it.",
        "Use fill-or-kill or IOC orders to avoid partial fills; fill the thin-book leg first.",
        "Match spread targets to your latency: manual traders need bigger, slower spreads.",
        "Backtest with realistic slippage assumptions — paper profits without slippage modeling are fiction."
        ],
      },
      { type: "p", text: "The meta-rule: your scanner shows opportunities, but your execution statistics show your business. Track realized spread per trade, slippage per venue, and partial-fill frequency monthly. If realized spreads are consistently 40–60% of quoted spreads, either your sizing is too large for the books you trade or your latency is too high for the spreads you chase — both fixable, but only if measured. Execution risk never goes to zero, but measured execution risk becomes just another cost line in honest profitability math. For the risk framework this sits inside, see our [position sizing and kill switches guide](/blog/arbitrage-risk-management)." },
      {
        type: "faq",
        items: [
          {
            q: "What is slippage in crypto arbitrage?",
            a: "Slippage is the difference between the price you expected when you saw the spread and the price your order actually filled at. Market orders walk the order book, filling at progressively worse prices — on thin books, slippage alone can exceed the spread you were trying to capture.",
          },
          {
            q: "How do partial fills create risk in arbitrage?",
            a: "If one leg of your trade fills completely and the other fills only partially, you are left holding an unintended directional position instead of a hedged arbitrage. Predefine your response — complete the fill, unwind immediately, or hedge the remainder — and prefer fill-or-kill order types where available.",
          },
          {
            q: "Does latency really matter for arbitrage?",
            a: "Yes, especially in volatile markets. A manual trader taking 30 seconds to execute both legs can watch a 0.5% spread vanish before the second leg fills. Match your spread targets to your execution speed: manual traders need larger, slower-decaying spreads; automation unlocks thinner edges.",
          },
          {
            q: "How can I reduce execution risk?",
            a: "Estimate slippage from order-book depth before entering, use limit or fill-or-kill orders, fill the thin-book leg first, cap order size relative to book depth, and log expected vs. actual fills on every trade so you know your true realized edge.",
          }
        ],
      },
  ],
};
