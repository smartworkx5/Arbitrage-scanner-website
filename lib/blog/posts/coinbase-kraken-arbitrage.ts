import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "coinbase-kraken-arbitrage",
  title: "Coinbase vs Kraken Arbitrage Guide",
  description: "A US-focused Coinbase vs Kraken arbitrage walkthrough: Advanced Trade vs Kraken Pro fees, fiat corridors, transfer routes, and compliance notes for US traders.",
  keywords: [
      "Coinbase vs Kraken arbitrage",
      "Kraken Pro fees",
      "Coinbase Advanced Trade fees",
      "US crypto arbitrage",
      "fiat arbitrage crypto",
      "Kraken vs Coinbase spread"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 8,
  category: "Strategies",
  excerpt: "The all-American arbitrage pair: how Coinbase and Kraken's fee tiers, fiat rails, and order flow create tradeable gaps — and how US traders can work them compliantly.",
  image: "/images/blog/coinbase-kraken-arbitrage.svg",
  blocks: [
      { type: "p", text: "For US-based traders, the Coinbase vs Kraken arbitrage pair is the most practical venue combination available — two long-established, US-compliant exchanges with deep books and fully legal access for American residents. This Coinbase vs Kraken arbitrage guide walks through how their different fee structures, fiat corridors, and order-flow characteristics create tradeable gaps, and how to work them without tripping over compliance or cost surprises." },
      { type: "h2", text: "Why This Pair Matters for US Traders" },
      { type: "p", text: "Most global arbitrage content assumes access to offshore venues that US residents cannot legally use. Coinbase and Kraken solve that problem: both are available across most US states, both support USD funding natively, and both publish transparent fee schedules. The spreads between them are rarely dramatic — these are efficient, heavily watched venues — but they are real, repeatable, and tradeable without regulatory workarounds. For Americans, that combination beats a theoretically wider offshore spread that you cannot legally touch." },
      { type: "h2", text: "Coinbase's Two Fee Worlds: Retail vs Advanced Trade" },
      { type: "p", text: "Coinbase effectively operates two exchanges. The simple retail interface charges a spread plus a flat-ish fee that can exceed 1% on small trades — ruinous for arbitrage. Coinbase Advanced Trade, the pro interface, uses a volume-tiered maker-taker schedule with taker fees starting around 0.6% at the lowest tier and falling with volume. Every arbitrage calculation on Coinbase must use Advanced Trade pricing; if you are still on the retail interface, your first step is switching. Maker orders on Advanced Trade earn the lower maker rate, so patient limit orders are worth the wait when the spread allows it." },
      { type: "h2", text: "Kraken's Edge: Kraken Pro and Deep Fiat Books" },
      { type: "p", text: "Kraken Pro is the interface arbitrageurs should use, with a tiered schedule starting around 0.25% taker and 0.15% maker at base volume — meaningfully cheaper than Coinbase Advanced Trade at comparable volumes. Kraken's real structural advantage, though, is its deep USD and EUR order books built over a decade of serving fiat-native traders. During volatile moves, Kraken's fiat-priced books can lag or lead Coinbase's, creating the small, fast gaps this pair is known for. Kraken also supports a wide range of funding methods with transparent fees, which matters because funding cost is part of every round trip." },
      {
        type: "table",
        headers: ["Factor", "Coinbase Advanced Trade", "Kraken Pro"],
        rows: [
          ["Base taker fee", "Around 0.6%, tiered down with volume", "Around 0.25%, tiered down with volume"],
          ["Base maker fee", "Around 0.4%, tiered down with volume", "Around 0.15%, tiered down with volume"],
          ["USD funding", "ACH, wire, debit (fees vary)", "ACH, wire, SWIFT options"],
          ["Interface to use", "Advanced Trade, not retail", "Kraken Pro, not instant buy"],
          ["Typical spread character", "US retail-driven moves", "Fiat-book depth, EUR/USD corridors"]
        ],
      },
      { type: "h2", text: "Moving Money and Coins: ACH, Wire, and On-Chain Routes" },
      { type: "p", text: "You have two ways to balance inventory between these venues: move fiat or move crypto. ACH transfers are cheap but slow — several business days — which makes them useless for reacting to a live spread but fine for scheduled rebalancing. Wire transfers are faster but carry flat fees that punish small amounts. On-chain crypto transfers between the two exchanges typically confirm in minutes to under an hour depending on the asset, making them the practical rail for active trading. Whichever rail you use, verify deposit confirmation requirements on the receiving exchange first; they vary by asset and are the most commonly underestimated part of transfer time." },
      { type: "h2", text: "Tax and Compliance Notes for Americans" },
      {
        type: "callout",
        title: "Every trade is taxable",
        text: "In the US, each leg of an arbitrage trade is a taxable event. High-frequency arbitrage generates many small gains and losses that must all be reported. Use crypto tax software that syncs both exchanges via API from day one — reconstructing this manually at tax time is miserable.",
        tone: "warning",
      },
      { type: "p", text: "Beyond taxes, keep records of your fee basis on every trade; your taxable gain is computed on net proceeds, and accurate fee records directly reduce your reported gains. Both exchanges issue tax documents and cooperate with the IRS, so assume full visibility. On the compliance side, the [key terms](/glossary) around order types and settlement are worth knowing precisely, because misusing margin or leverage features on either venue introduces liquidation risk that spot arbitrage does not have." },
      { type: "h2", text: "A Sample Walkthrough" },
      { type: "p", text: "Here is how a typical trade flows. Your scanner flags ETH trading 0.4% higher on Coinbase Advanced Trade than on Kraken Pro. You check both order books at your intended size and confirm the gap survives slippage. Fee math: selling on Coinbase as a taker costs roughly 0.6% at base tier while buying on Kraken costs roughly 0.25% — already 0.85% in fees against a 0.4% gross spread, so this trade fails at base tiers. That is the honest reality of this pair at retail volume: many visible spreads are untradeable until your volume tier improves. The traders who profit here either operate at discounted fee tiers, use maker orders patiently, or wait for the wider dislocations that volatile news events produce. Compare this dynamic with the [Binance vs Coinbase](/arbitrage/binance-vs-coinbase) pair to see how offshore liquidity changes the spread character." },
      {
        type: "faq",
        items: [
          {
            q: "Is Coinbase vs Kraken arbitrage profitable for beginners?",
            a: "At base fee tiers it is difficult — the combined taker fees on both venues often exceed the typical spread. Beginners should focus on learning execution and fee math in small size, and treat profitability as something that arrives with better fee tiers and maker-order discipline, not immediately.",
          },
          {
            q: "Should I use Coinbase retail or Advanced Trade for arbitrage?",
            a: "Always Advanced Trade. The retail interface's spread-plus-fee pricing is far too expensive for arbitrage and will turn almost every opportunity negative. Advanced Trade is free to use with the same login.",
          },
          {
            q: "How do I fund both exchanges cheaply?",
            a: "ACH transfers are the cheapest fiat rail but take days, so use them for planned funding rather than reacting to spreads. For active trading, keep stablecoin and coin inventory pre-positioned on both venues so both legs can execute simultaneously.",
          },
          {
            q: "Do I owe taxes on every arbitrage trade?",
            a: "In the US, yes — each buy and sell is a taxable event, and both exchanges report to the IRS. Track every trade with tax software via API from the start; do not try to reconstruct a year of high-frequency trading manually.",
          }
        ],
      },
  ],
};
