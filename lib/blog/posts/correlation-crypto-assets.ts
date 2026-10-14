import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "correlation-crypto-assets",
  title: "Crypto Correlations and Pair Trading",
  description: "Crypto assets move together — until they don't. Learn how correlations work, when they break, and how pair trading profits from divergence, not direction.",
  keywords: [
      "crypto correlation",
      "pair trading crypto",
      "correlation trading",
      "BTC ETH correlation",
      "relative value trading",
      "crypto pairs"
  ],
  datePublished: "2026-10-14",
  dateModified: "2026-10-14",
  readingMinutes: 9,
  category: "Markets",
  excerpt: "Most crypto assets rise and fall together — but divergences between correlated pairs create market-neutral trading opportunities that don't depend on predicting direction.",
  image: "/images/blog/correlation-crypto-assets.svg",
  blocks: [
      { type: "p", text: "**Crypto correlations** describe how closely two assets move together. When Bitcoin rises and Ether rises by a similar amount, they are positively correlated. When one rises while the other falls, correlation is breaking down. On 14 October 2026 the market showed both forces at once: Bitcoin gained roughly 1–1.5% and Ether about 0.5–1.9%, broadly in step, while individual sectors scattered wildly — Layer-2 tokens up 2.9% with one token surging nearly 20%, AI-sector tokens up 2.6% with a single token jumping over 35%. That gap between the index-like majors and the dispersing sectors is exactly where correlation trading lives." },
      { type: "p", text: "Correlation matters because it determines whether your portfolio is diversified or just a single bet wearing different clothes. A portfolio of ten altcoins that all move with Bitcoin is not diversified — it is one leveraged Bitcoin position. Understanding correlation lets traders build genuinely balanced exposure, spot when the market's structure is changing, and trade the divergences between related assets instead of gambling on direction." },
      { type: "h2", text: "Why Crypto Assets Move Together" },
      { type: "p", text: "The dominant driver of crypto correlation is Bitcoin itself. Bitcoin still accounts for roughly half or more of total crypto market value — around $1.67 trillion of market capitalisation against a total market far smaller than in the 2025 peak — and most altcoins are priced, traded, and margined against it. When Bitcoin moves, liquidity, sentiment, and leveraged positions ripple outward into everything else. Add to this the shared drivers: the same macro headlines, the same ETF flows, the same risk-on or risk-off mood across global markets." },
      { type: "p", text: "Macro forces reinforce the link. On 14 October 2026, the backdrop included continued outflows from US crypto ETFs — Bitcoin ETFs shedding $65.40 million on 12 October, the fourth outflow of the month, and Ether ETFs losing $85.40 million for an eighth straight day of outflows — plus a global backdrop in which 15 of 33 major central banks raised rates in the last six months. When macro pressure hits, correlations across all risk assets tend to rise: everything sells off together, and diversification fails exactly when it is needed most." },
      { type: "h2", text: "When Correlations Break Down" },
      { type: "p", text: "Correlations are not constants; they are weather. They tighten in panics and loosen in calm, trend-driven markets when asset-specific stories take over. A sector catalyst — a protocol upgrade, a regulatory decision, a major listing — can send one asset soaring while the rest of the market barely moves. The 14 October movers illustrate this perfectly: sector-level gains of 1–3% hid individual moves of 6%, 11%, 20%, and even 35%. A trader watching only Bitcoin would have missed the entire story of the day." },
      { type: "p", text: "Regulatory news is another classic correlation breaker. On 13 October 2026, South Korea announced plans to block 27 unregistered overseas exchanges, including major names. News like that hits exchange tokens, Korean-linked projects, and the specific venues named — while leaving unrelated assets untouched. Similarly, Thailand finalising Bitcoin and Ether ETF rules effective 16 October 2026 is a targeted catalyst for BTC and ETH exposure in that market, not a broad market driver. Traders who track which assets a story actually touches can anticipate the divergence before it happens." },
      {
        type: "table",
        headers: ["Situation", "Typical correlation effect", "Trading implication"],
        rows: [
          ["Market-wide panic", "Correlations spike toward 1.0", "Diversification fails; reduce risk"],
          ["Calm, trend-driven market", "Correlations loosen", "Stock-picking style selection works"],
          ["Sector-specific catalyst", "One sector decouples", "Pair trades within or against the sector"],
          ["Regulatory news", "Targeted assets diverge", "Avoid blanket bets; trade the affected names"],
          ["ETF flow shock", "Majors move together", "BTC/ETH pairs tighten; altcoins lag"]
        ],
      },
      { type: "h2", text: "Pair Trading: Profiting From Divergence" },
      { type: "p", text: "Pair trading is the most direct way to trade correlation. The idea is simple: find two assets that usually move together, wait for them to diverge, then buy the relatively weak one and sell the relatively strong one, betting that the gap closes. Because you hold both a long and a short, the trade is market-neutral — if the whole market rises or falls, the two legs roughly cancel out, and your profit comes from the convergence of the pair rather than from guessing direction." },
      { type: "p", text: "A classic crypto example is the ETH/BTC ratio. When Ether outperforms Bitcoin sharply, the ratio stretches; when it lags, the ratio compresses. Traders who believe the ratio reverts to a range can trade the stretch. The same logic applies to sector pairs — for instance, a Layer-1 token against a Layer-2 token, or two competing exchange tokens — and to an asset against an index-like proxy. The key requirement is a genuine, persistent relationship: pairs chosen on a few weeks of data often fall apart, so the relationship should hold across different market regimes." },
      {
        type: "callout",
        title: "Pair trades are not risk-free",
        text: "A pair can diverge further instead of converging — a 'broken pair' can stay broken if the fundamental story changed. Always cap losses with a maximum-divergence exit, and never assume mean reversion is guaranteed.",
        tone: "warning",
      },
      { type: "h2", text: "Measuring Correlation Without Fooling Yourself" },
      {
        type: "list",
        items: [
        "Use returns, not prices: correlate daily percentage changes, since two assets both trending upward will look correlated even if their day-to-day moves are unrelated.",
        "Use rolling windows (30, 60, 90 days) — a single correlation number hides how the relationship changes over time.",
        "Check correlation in stress periods separately: the correlation that matters is the one during drawdowns, not during rallies.",
        "Beware small samples: a correlation computed on two weeks of data is mostly noise.",
        "Remember that correlation says nothing about causation — two assets can move together for years for unrelated reasons and then decouple overnight."
        ],
      },
      { type: "p", text: "For traders, the most practical use of correlation data is portfolio construction and risk control. If your holdings are 90% correlated with Bitcoin, your real exposure is Bitcoin with extra volatility. If you run [cross-exchange arbitrage](/guides/cross-exchange-arbitrage), correlation tells you which legs genuinely hedge each other and which merely look diversified. And if you trade spreads, correlation breakdowns are often the signal itself — a divergence between two normally linked assets is a [triangular or spread opportunity](/guides/triangular-arbitrage) waiting to be measured. The [glossary](/glossary) defines the key terms if you want to check any of the vocabulary used here." },
      {
        type: "faq",
        items: [
          {
            q: "Are all cryptocurrencies correlated with Bitcoin?",
            a: "Most are, to a significant degree — especially during sharp market-wide moves. But the correlation varies by asset and by regime: large-cap assets track Bitcoin more closely than small-cap ones, and sector-specific news can decouple individual assets for days or weeks.",
          },
          {
            q: "What is a good correlation for a pair trade?",
            a: "Traders typically look for a historically stable, high positive correlation (often above 0.8 on daily returns) with a clear, repeatable pattern of divergence and convergence. Stability across different market regimes matters more than the headline number.",
          },
          {
            q: "Can pair trading lose money if the market is flat?",
            a: "Yes. If the pair keeps diverging instead of converging, the trade loses even in a flat market. Pair trading removes market-direction risk, but it keeps the risk that the relationship itself has changed.",
          },
          {
            q: "How do ETF flows affect crypto correlations?",
            a: "Sustained ETF inflows or outflows hit Bitcoin and Ether directly and disproportionately, which can tighten BTC/ETH correlation while leaving smaller altcoins to move on their own stories — widening the gap between majors and the rest of the market.",
          }
        ],
      },
  ],
};
