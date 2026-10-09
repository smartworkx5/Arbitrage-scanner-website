/**
 * Programmatic SEO: exchange-pair arbitrage pages.
 * Each pair has genuinely unique editorial content (intro, why spreads form,
 * transfer notes, tips) — not just templated filler.
 */
export interface ExchangePair {
  slug: string;
  a: string;
  b: string;
  aFee: string;
  bFee: string;
  intro: string[];
  whyDiverges: string[];
  transferNotes: string;
  tips: string[];
}

export const pairs: ExchangePair[] = [
  {
    slug: "binance-vs-kraken",
    a: "Binance",
    b: "Kraken",
    aFee: "~0.10% spot (0.075% with BNB)",
    bFee: "~0.16% maker / 0.26% taker",
    intro: [
      "Binance and Kraken are the two deepest spot markets in crypto — and they disagree on price more often than most traders expect. Binance dominates global retail flow while Kraken anchors serious USD and EUR fiat volume, so regional demand shocks hit their order books at different speeds.",
      "The classic setup: a US news event spikes buying on Kraken's USD pairs while Binance's USDT pairs lag by seconds. That lag is the trade.",
    ],
    whyDiverges: [
      "Fiat ramps differ: Kraken's USD/EUR rails vs Binance's USDT-dominated books react differently to regional news.",
      "Listing pace: Binance lists new tokens aggressively; Kraken is slower — fresh listings often trade at a premium on one venue first.",
      "Fee tiers: different maker/taker structures mean market makers quote slightly different spreads on each.",
    ],
    transferNotes:
      "BTC/ETH transfers between Binance and Kraken typically confirm in 10–30 minutes. For speed, traders often use faster networks (e.g., SOL, XRP, or TRX where supported) or hold pre-funded balances on both — the only way to catch spreads that last seconds.",
    tips: [
      "Watch Kraken's EUR pairs during European morning hours — EUR/USD forex moves create cross-quoted distortions vs Binance USDT pairs.",
      "Compare like-for-like quote currencies: BTC/USD on Kraken vs BTC/USDT on Binance includes a hidden USDT/USD wobble.",
      "Kraken's lower maker fees reward limit orders; Binance's BNB discount rewards takers — factor both into net-spread math.",
    ],
  },
  {
    slug: "binance-vs-coinbase",
    a: "Binance",
    b: "Coinbase",
    aFee: "~0.10% spot (0.075% with BNB)",
    bFee: "~0.40–0.60% retail taker (lower on Advanced Trade)",
    intro: [
      "The 'Coinbase premium' is one of the most watched signals in crypto: when BTC trades higher on Coinbase than Binance, it usually means US institutional demand is leading. That premium — sometimes 0.1%, sometimes over 1% in volatile stretches — is a direct arbitrage read.",
      "Coinbase's higher retail fees mean its order book is thinner at the top, so large US buys move its price faster than the equivalent flow moves Binance.",
    ],
    whyDiverges: [
      "US institutional flow concentrates on Coinbase; global retail flow concentrates on Binance.",
      "Coinbase lists fewer tokens and moves slower — newly listed assets often carry a venue premium.",
      "Higher taker fees on Coinbase retail widen its effective spreads vs Binance.",
    ],
    transferNotes:
      "Transfers between the two take 10–30 minutes on Bitcoin/Ethereum. Because the Coinbase premium often persists for hours during trending markets (unlike second-long glitches), slower transfer-based execution is more viable here than on most pairs.",
    tips: [
      "Track the premium itself as a signal: persistent positive premium often precedes continued upside — many traders watch it rather than arbitrage it.",
      "Use Coinbase Advanced Trade, not retail buy/sell, or fees will erase the edge before you start.",
      "Stablecoin choice matters: compare USDT pairs to USDT pairs, not USDT vs USD, to avoid mixing in stablecoin wobble.",
    ],
  },
  {
    slug: "binance-vs-bybit",
    a: "Binance",
    b: "Bybit",
    aFee: "~0.10% spot",
    bFee: "~0.10% spot",
    intro: [
      "Binance and Bybit are both derivatives-heavy giants with deep spot books — and their funding-rate and spot divergences are a playground for arbitrageurs. When leveraged positioning differs between the two, spot prices can decouple briefly.",
      "Both venues list new perpetuals fast, and newly launched contracts are frequently mispriced relative to spot for the first minutes.",
    ],
    whyDiverges: [
      "Different leverage positioning: funding skew differs, pulling perp and spot quotes apart.",
      "Listing races: whoever lists a hot token's perp first sees the initial price discovery.",
      "Regional user bases trade different sessions, creating Asia-hours vs global-hours flow imbalances.",
    ],
    transferNotes:
      "Both support fast networks (TRX, SOL, BSC-based tokens). Internal transfers are quick; still, pre-funded balances win for sub-minute spreads.",
    tips: [
      "Watch funding-rate differentials between the two — they often predict which venue's spot will richen next.",
      "New perp listings are the highest-probability window: have alerts set, not just a scanner tab open.",
      "Bybit's unified margin account simplifies hedged spot-perp setups across the pair.",
    ],
  },
  {
    slug: "binance-vs-okx",
    a: "Binance",
    b: "OKX",
    aFee: "~0.10% spot (0.075% with BNB)",
    bFee: "~0.08% maker / 0.10% taker",
    intro: [
      "Two Asian liquidity titans with deeply overlapping user bases — yet their prices still diverge. OKX's slightly better maker fees attract a different market-maker crowd, and each venue's liquidation engine behaves differently during volatility.",
      "During liquidation cascades, one venue's insurance fund mechanics can leave its price dislocated from the other for minutes — the best windows all month can appear in a single volatile hour.",
    ],
    whyDiverges: [
      "Different market-maker rebate structures produce subtly different quoting.",
      "Liquidation engine differences: cascading liquidations dislocate one book more than the other.",
      "OKX's strong derivatives franchise means its spot sometimes follows its perps, while Binance spot follows global flow.",
    ],
    transferNotes:
      "Both are fast on major networks. OKX and Binance both support numerous L2 and alt-L1 deposit networks — pick the cheapest/fastest common one, not default Bitcoin.",
    tips: [
      "Volatility events are the main event here — keep dry powder ready rather than chasing tiny calm-market spreads.",
      "Compare OKX's maker pricing if you execute with limit orders; it can flip a marginal spread positive.",
      "Watch for OKX-exclusive Jumpstart/listing events that temporarily distort specific tokens.",
    ],
  },
  {
    slug: "binance-vs-kucoin",
    a: "Binance",
    b: "KuCoin",
    aFee: "~0.10% spot",
    bFee: "~0.10% spot (discount with KCS)",
    intro: [
      "KuCoin lists long-tail altcoins early — often weeks before Binance. That listing gap is a recurring arbitrage pattern: a token pumps on KuCoin on rumors of a Binance listing, and the two venues' prices diverge wildly around the announcement.",
      "Even without listings, KuCoin's thinner altcoin books mean large orders move its prices more than the same orders move Binance — creating mechanical spreads on mid-caps.",
    ],
    whyDiverges: [
      "Listing timing: KuCoin first, Binance later — the announcement window is the trade.",
      "Depth mismatch: KuCoin altcoin books are thinner, so equal-sized flow moves prices unequally.",
      "Different user geography creates distinct buy-the-rumor patterns.",
    ],
    transferNotes:
      "Altcoin withdrawals from KuCoin can be slow or briefly suspended around hype events — exactly when you need them. Pre-position inventory for tokens you actively watch, and confirm withdrawal status before counting on a transfer.",
    tips: [
      "The highest-probability setup is rumor → KuCoin pump → Binance listing confirmation → convergence trade.",
      "Size down: thin-book spreads look huge on screen but fill terribly at size — test fills small first.",
      "Track KuCoin's new-listing announcements feed; it is effectively an arbitrage calendar.",
    ],
  },
  {
    slug: "kraken-vs-coinbase",
    a: "Kraken",
    b: "Coinbase",
    aFee: "~0.16% maker / 0.26% taker",
    bFee: "~0.40–0.60% retail taker (lower on Advanced Trade)",
    intro: [
      "The two great US-regulated venues — and they still disagree. Kraken's pro-oriented fee schedule and deep EUR books vs Coinbase's massive retail flow create persistent micro-divergences, especially on altcoins where Coinbase retail piles in first.",
      "Coinbase's retail premium on newly listed assets vs Kraken's steadier institutional quoting is a repeatable pattern.",
    ],
    whyDiverges: [
      "Retail vs pro flow: Coinbase retail momentum vs Kraken's steadier institutional flow.",
      "Fee structures push different execution styles, widening retail-visible spreads.",
      "Listing announcements on either venue create temporary venue premiums.",
    ],
    transferNotes:
      "Both are US-compliant with reliable fiat rails but crypto transfers between them still take standard network times (10–30 min). ACH/wire between them is irrelevant for arb — only crypto transfers count, so plan around network speed.",
    tips: [
      "Altcoin listing pumps on Coinbase often leave Kraken lagging by minutes — the most reliable window on this pair.",
      "Never use Coinbase retail one-click buy for arb legs; Advanced Trade limit orders cut fees dramatically.",
      "Kraken's EUR pairs add a forex dimension — EUR strength/weakness shows up as apparent 'arbitrage' that is really FX.",
    ],
  },
  {
    slug: "kraken-vs-bitstamp",
    a: "Kraken",
    b: "Bitstamp",
    aFee: "~0.16% maker / 0.26% taker",
    bFee: "~0.15–0.30% (volume tiered)",
    intro: [
      "Europe's two oldest venues. Kraken and Bitstamp both run serious EUR fiat books, and EUR/USD forex moves ripple through their crypto quotes differently — creating spreads that are part crypto-arb, part FX-arb.",
      "Both are conservative listers, so divergences here are usually flow-driven rather than listing-driven: steadier, smaller, and more repeatable.",
    ],
    whyDiverges: [
      "EUR forex fluctuations hit EUR-quoted pairs unevenly across the two books.",
      "Different European banking partners mean fiat deposit/withdrawal speeds differ, segmenting flow.",
      "Conservative, overlapping token lists keep divergences flow-driven and mean-reverting.",
    ],
    transferNotes:
      "Both support SEPA-adjacent fiat, but for arb only crypto transfers matter: 10–30 minutes typical. The steadier nature of this pair's spreads makes transfer-based execution more forgiving than on hype-driven pairs.",
    tips: [
      "Quote everything in the same fiat: compare EUR pairs to EUR pairs, USD to USD.",
      "European morning (7–10 AM UTC) is prime time — forex volatility peaks and both books are fully staffed.",
      "Smaller, steadier spreads reward lower fees: use maker/limit orders on both venues.",
    ],
  },
  {
    slug: "bybit-vs-okx",
    a: "Bybit",
    b: "OKX",
    aFee: "~0.10% spot",
    bFee: "~0.08% maker / 0.10% taker",
    intro: [
      "The derivatives-arbitrageur's pair. Bybit and OKX both run enormous perp books, and their funding rates for the same token frequently disagree — sometimes by 2–3x. That disagreement is directly tradable via cash-and-carry across venues.",
      "Spot divergences are smaller here (both books are deep), but funding and basis divergences are among the widest in the market.",
    ],
    whyDiverges: [
      "Funding-rate skew differs by venue positioning — the same token can pay positive funding on one and negative on the other.",
      "Different liquidation engines create different spot dislocations in volatility.",
      "New perp listings appear on one first, with the other following hours later.",
    ],
    transferNotes:
      "For funding arbitrage you do not need transfers at all — hold spot on one venue and the opposite perp on the other (or both legs split). For spot-spot spreads, fast networks on both make 5–15 minute transfers realistic.",
    tips: [
      "This pair is primarily a funding-rate venue pair: rank opportunities by net funding APR, not spot spread.",
      "Cross-venue cash-and-carry (long spot Bybit, short perp OKX) captures funding differentials with no transfer.",
      "Watch for one venue's funding going deeply negative while the other stays positive — the highest-conviction setup.",
    ],
  },
  {
    slug: "coinbase-vs-gemini",
    a: "Coinbase",
    b: "Gemini",
    aFee: "~0.40–0.60% retail taker (lower on Advanced Trade)",
    bFee: "~0.20–0.40% (tiered)",
    intro: [
      "Two US-regulated venues with an institutional bent. Spreads here are rarely dramatic — but they are clean: deep books, reliable withdrawals, no listing chaos. For risk-averse arbitrageurs, this pair offers smaller, more dependable edges.",
      "Gemini's steadier quoting vs Coinbase's retail-driven swings creates a gentle, repeatable mean-reversion pattern on majors.",
    ],
    whyDiverges: [
      "Coinbase retail flow is burstier; Gemini's flow is steadier and more institutional.",
      "Different custody and staking offerings segment each venue's holder base.",
      "Both list conservatively, so divergences are flow-driven, not news-driven.",
    ],
    transferNotes:
      "Both venues have excellent operational reliability — withdrawals rarely freeze, which is itself an edge. Standard 10–30 minute crypto transfers; the reliability makes transfer-based execution genuinely viable here.",
    tips: [
      "Think 'base hits, not home runs': 0.2–0.4% net edges executed reliably beat chasing 1% ghosts elsewhere.",
      "Use Advanced Trade (Coinbase) and ActiveTrader (Gemini) — retail fees destroy this pair's thin edges.",
      "Weekend US news flow moves Coinbase first; Gemini follows — set alerts for the gap, not just the price.",
    ],
  },
  {
    slug: "kucoin-vs-gate-io",
    a: "KuCoin",
    b: "Gate.io",
    aFee: "~0.10% spot",
    bFee: "~0.20% spot (discount with GT)",
    intro: [
      "The altcoin casino pair. KuCoin and Gate.io both list hundreds of long-tail tokens, often the same ones days apart — and their thin books mean the same token can trade 2–5% apart during hype cycles.",
      "This is the highest-spread, highest-risk pair on this list: enormous gross edges, brutal execution reality.",
    ],
    whyDiverges: [
      "Staggered listings of the same micro-caps create days-long price disagreements.",
      "Thin books on both sides: moderate flow moves each venue's price independently.",
      "Different regional communities pump different tokens first.",
    ],
    transferNotes:
      "Withdrawal reliability is the #1 risk on this pair — both venues occasionally pause withdrawals on hot tokens. Never assume a transfer will go through; verify network status first, keep pre-funded balances for tokens you trade repeatedly, and expect the unexpected.",
    tips: [
      "Gross spreads lie most here: assume 50%+ slippage vs screen price until you have tested fills.",
      "Gate.io's higher taker fee (0.2%) must be in every calculation — it flips many apparent edges negative.",
      "Rug/honeypot risk is real on fresh micro-caps: verify contracts before providing exit liquidity to someone else's pump.",
    ],
  },
];
