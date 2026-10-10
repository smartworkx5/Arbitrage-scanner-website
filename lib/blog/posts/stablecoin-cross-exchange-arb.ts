import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "stablecoin-cross-exchange-arb",
  title: "Stablecoin Cross-Exchange Arbitrage (USDT/USDC)",
  description: "Stablecoin arbitrage between exchanges: why USDT and USDC trade at small premiums and discounts, the strategies that capture them, and the depeg risk involved.",
  keywords: [
      "stablecoin arbitrage",
      "USDT arbitrage",
      "USDC price difference",
      "stablecoin price gaps",
      "USDT USDC spread",
      "low risk crypto arbitrage"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 7,
  category: "Strategies",
  excerpt: "Smaller spreads, smaller shocks: how USDT and USDC premiums and discounts form between exchanges, and the disciplined strategies that harvest them.",
  image: "/images/blog/stablecoin-cross-exchange-arb.svg",
  blocks: [
      { type: "p", text: "Stablecoin arbitrage across exchanges is the quiet corner of the arbitrage world: instead of chasing volatile altcoins, you trade the small premiums and discounts at which USDT and USDC change hands on different venues. The spreads are thinner — often fractions of a percent — but so are the shocks, and the strategy runs on the same venues and rails you already use. This guide explains why 'stable' coins are not priced identically everywhere, the strategies that capture the differences, and the depeg risk you must respect." },
      { type: "h2", text: "Why 'Stable' Coins Have Unstable Prices" },
      { type: "p", text: "A stablecoin's price on any exchange is set by local supply and demand, not by its issuer's $1 target. When a region's traders rush to exit crypto, they sell stablecoins for fiat faster than buyers appear, pushing the local stablecoin price below peg; when fresh fiat floods in, buyers bid stablecoins above peg. Fiat on- and off-ramp friction sustains these gaps: moving actual dollars between a trader and an exchange takes time and fees, so the stablecoin price absorbs the pressure instead. Regional demand patterns make this structural — some venues chronically trade USDT at a small premium, others at a small discount — which is exactly what makes the gaps tradeable rather than random." },
      { type: "h2", text: "USDT vs USDC: Different Dynamics" },
      { type: "p", text: "USDT and USDC behave differently because their user bases differ. USDT dominates emerging-market P2P flows and offshore trading, so its premiums track developing-world demand — it frequently trades at a premium on venues serving regions with strong crypto-dollar demand. USDC is more US-institutional, more tightly integrated with American banking rails, and tends to trade closer to peg on US-regulated venues. The USDT/USDC cross itself is therefore a tradeable spread on many exchanges: when one deviates from the other, convergence trades capture the normalization. Watch both, because a 'USDT discount' is sometimes really a 'USDC premium' in disguise." },
      { type: "h2", text: "Three Strategies That Actually Get Used" },
      {
        type: "table",
        headers: ["Strategy", "Mechanism", "Typical spread", "Main risk"],
        rows: [
          ["Premium harvesting", "Buy stablecoin cheap on one venue, sell at premium on another", "0.1% to 1%", "Transfer time; premium fading"],
          ["USDT/USDC convergence", "Buy the discounted one, sell the premium one, wait for convergence", "0.1% to 0.5%", "Prolonged deviation; depeg"],
          ["P2P-to-exchange", "Buy via P2P below market, sell on exchange at market", "0.5% to 2%", "Counterparty risk; payment fraud"]
        ],
      },
      { type: "p", text: "Premium harvesting is the purest cross-exchange play: simultaneous or near-simultaneous trades capturing a venue-to-venue difference. Convergence trading is slower — you take a position in the spread itself and wait hours or days for normalization, which ties up capital but needs no speed. P2P-to-exchange arbitrage exploits the gap between peer-to-peer markets and exchange order books; the spreads are wider but so are the risks, including payment reversals and scammers, so it demands strict P2P hygiene. All three share one trait: the edge is small per trade, so fee discipline and volume decide profitability." },
      { type: "h2", text: "The Math: When Small Spreads Still Work" },
      { type: "p", text: "A 0.3% stablecoin spread looks pointless until you run the numbers at scale and frequency. With simultaneous execution, your costs are two sets of trading fees — often 0.1% or less per leg at reasonable tiers — plus any transfer cost if you rebalance afterward. On a 0.3% gross spread with 0.15% total fees, you keep 0.15% per round trip; done daily on meaningful size, that compounds into a respectable low-volatility return stream. The keys are high win-rate (stablecoin spreads mean-revert reliably in normal conditions), low costs (maker orders, good fee tiers, cheap rails), and honest accounting that includes rebalancing transfers. Our [funding-rate arbitrage guide](/guides/funding-rate-arbitrage) covers a complementary low-volatility strategy that pairs well with stablecoin operations." },
      { type: "h2", text: "Depeg Risk: The One That Wipes Out Months" },
      {
        type: "callout",
        title: "Respect the tail risk",
        text: "Stablecoin arbitrage earns small, steady gains and can lose months of profit in a single depeg event. Never hold concentrated stablecoin inventory through periods of market stress, and always know your exit venue in advance.",
        tone: "warning",
      },
      { type: "p", text: "Every stablecoin arbitrageur is short volatility in the stablecoin itself: you profit when it stays near peg and suffer when it breaks. Historical depeg events have seen major stablecoins trade several percent off peg for days. Mitigation is straightforward but non-negotiable: diversify across USDT and USDC rather than concentrating in one, reduce inventory during market-wide stress, and define in advance the price level at which you exit rather than 'waiting for repeg.' The [glossary](/glossary) covers depeg mechanics, and comparing venue behavior on [Binance vs Bybit](/arbitrage/binance-vs-bybit) shows how the same stablecoin can price differently across order books during stress." },
      {
        type: "faq",
        items: [
          {
            q: "Is stablecoin arbitrage risk-free?",
            a: "No. It has lower volatility than altcoin arbitrage, but depeg risk, transfer delays, withdrawal freezes, and fee miscalculations can all produce losses. 'Lower risk' describes the typical day, not the worst day.",
          },
          {
            q: "Which is better for arbitrage, USDT or USDC?",
            a: "Neither universally — they have different premium patterns on different venues. USDT shows bigger regional premiums on offshore and P2P-heavy venues; USDC tracks closer to peg on US-regulated ones. Monitor both and trade whichever deviates.",
          },
          {
            q: "How much capital does stablecoin arbitrage need?",
            a: "More than volatile-coin arbitrage, because spreads are thinner. Fixed fees must stay a small fraction of the expected gain, so undercapitalized accounts find most stablecoin spreads untradeable after costs. Pre-funded simultaneous execution is the standard approach.",
          },
          {
            q: "Can I automate stablecoin arbitrage?",
            a: "Yes, and many operators do — the strategy's rules are simple enough to encode: monitor spreads, check depth, verify fee math, execute both legs. Automation also removes the emotional temptation to hold through a depeg hoping for recovery.",
          }
        ],
      },
  ],
};
