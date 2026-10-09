import type { ArticleMeta, ContentBlock } from "./content";

export interface Guide extends ArticleMeta {
  excerpt: string;
  blocks: ContentBlock[];
}

export const guides: Guide[] = [
  {
    slug: "cross-exchange-arbitrage",
    title: "Cross-Exchange Arbitrage: The Complete Guide",
    description:
      "Learn how cross-exchange crypto arbitrage works: find price differences for the same token on two exchanges, and execute before the gap closes. Strategies, costs and risks explained.",
    keywords: [
      "cross exchange arbitrage",
      "crypto arbitrage between exchanges",
      "cross-exchange arbitrage strategy",
      "bitcoin arbitrage exchanges",
    ],
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
    readingMinutes: 9,
    category: "Strategies",
    excerpt:
      "Buy low on one exchange, sell high on another. The simplest arbitrage strategy — and the hardest to execute manually.",
    blocks: [
      {
        type: "p",
        text: "**Cross-exchange arbitrage** is the simplest form of crypto arbitrage: you buy a token where it is cheap and sell it where it is expensive — at the same time, on two different exchanges. When Bitcoin trades at $97,200 on Exchange A and $97,590 on Exchange B, that $390 gap is a cross-exchange spread waiting to be captured.",
      },
      {
        type: "p",
        text: "It sounds like free money, and in theory it is close to risk-free. In practice, the profit survives only if you are faster than the gap and cheaper than the costs. This guide covers exactly how it works, what it really costs, and how traders find these spreads with a [crypto arbitrage scanner](/).",
      },
      { type: "h2", text: "How cross-exchange arbitrage works" },
      {
        type: "p",
        text: "Every exchange is its own island of supply and demand. Prices diverge because order books are separate, liquidity differs, fiat on-ramps vary by region, and news travels at different speeds. A scanner watches the same trading pair — say **BTC/USDT** — on many exchanges simultaneously and flags the moment the highest bid on one exchange exceeds the lowest ask on another.",
      },
      {
        type: "list",
        items: [
          "**Spot the spread:** Exchange A asks $97,200 for BTC, Exchange B bids $97,590. Gross spread: $390 (0.40%).",
          "**Buy and sell simultaneously:** Buy 1 BTC on A, sell 1 BTC on B. You never hold directional risk if both legs fill instantly.",
          "**Account for every cost:** Trading fees on both legs, withdrawal/deposit fees if you move coins, network fees, and slippage on the fill.",
          "**Net profit = spread − all costs.** Only execute when the net number is clearly positive.",
        ],
      },
      { type: "h2", text: "A realistic profit calculation" },
      {
        type: "p",
        text: "Beginners consistently underestimate costs. Here is honest math on a typical retail setup with 0.1% maker/taker fees per exchange:",
      },
      {
        type: "table",
        headers: ["Item", "Amount"],
        rows: [
          ["Buy 1 BTC on Exchange A", "$97,200.00"],
          ["Sell 1 BTC on Exchange B", "$97,590.00"],
          ["Gross spread", "+$390.00 (0.40%)"],
          ["Trading fee, Exchange A (0.1%)", "−$97.20"],
          ["Trading fee, Exchange B (0.1%)", "−$97.59"],
          ["BTC withdrawal + network fee", "−$8.00"],
          ["**Net profit**", "**+$187.21**"],
        ],
      },
      {
        type: "callout",
        title: "The 0.3% rule of thumb",
        text: "With standard retail fees, spreads below ~0.3% are rarely worth chasing — costs eat them. Profitable retail spreads usually start around 0.4–1.0% and vanish within seconds to minutes.",
        tone: "info",
      },
      { type: "h2", text: "The two execution methods" },
      { type: "h3", text: "1. Sequential (transfer-based)" },
      {
        type: "p",
        text: "Buy on the cheap exchange, withdraw the coins, deposit to the expensive exchange, sell. Simple — but **slow**. Bitcoin transfers can take 10–60 minutes, and the spread often closes while your coins are in transit. You arrive to find the gap gone and you are now just holding BTC.",
      },
      { type: "h3", text: "2. Simultaneous (pre-funded)" },
      {
        type: "p",
        text: "Keep balances on both exchanges. The moment a spread appears, buy on A and sell on B at the same time — no transfer wait. Afterwards, rebalance. This is how serious arbitrageurs operate, but it requires capital sitting on multiple exchanges and careful inventory management.",
      },
      { type: "h2", text: "Risks and why spreads disappear" },
      {
        type: "list",
        items: [
          "**Execution lag:** prices move between your two clicks; one leg can fill at a worse price (leg risk).",
          "**Withdrawal freezes:** exchanges pause withdrawals during volatility — exactly when spreads are widest.",
          "**Fake spreads:** thin order books show a big gap on tiny size; your actual fill gets terrible slippage.",
          "**KYC and limits:** unverified accounts face low withdrawal limits that cap your size.",
          "**Stablecoin depegs:** USDT/USDC occasionally trade off $1.00, distorting every spread quoted against them.",
        ],
      },
      {
        type: "callout",
        title: "Risk warning",
        text: "Arbitrage is lower-risk than directional trading, not risk-free. Never deploy capital you cannot afford to have locked on an exchange, and always paper-trade a strategy first.",
        tone: "warning",
      },
      { type: "h2", text: "How to find cross-exchange spreads" },
      {
        type: "p",
        text: "Manual checking cannot compete — spreads live for seconds. Traders use scanners that poll order books across exchanges continuously. [Crypto Arbitrage Scanner](/), for example, watches 16 exchanges in real time, ranks opportunities by net spread, and lets you rehearse execution with a paper trading bot before committing real funds. See also our guide to [crypto arbitrage opportunities](/blog/crypto-arbitrage-opportunities) and the [glossary](/glossary) if any term here is new.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Is cross-exchange arbitrage legal?",
            a: "Yes. Buying and selling the same asset on different exchanges is legal in most jurisdictions. You are still responsible for taxes on the profits and for each exchange's terms of service.",
          },
          {
            q: "How much capital do I need to start?",
            a: "You can practice with a paper trading bot for free. For live sequential arbitrage, many start with $500–$2,000; pre-funded simultaneous execution needs more since capital sits on several exchanges at once.",
          },
          {
            q: "How fast do I need to be?",
            a: "Retail spreads often last seconds to a few minutes. Pre-funded accounts and one-click execution (or a scanner with alerts) are the realistic minimum; high-frequency firms compete in milliseconds.",
          },
        ],
      },
    ],
  },
  {
    slug: "triangular-arbitrage",
    title: "Triangular Arbitrage in Crypto: How It Works",
    description:
      "Triangular arbitrage exploits price differences between three trading pairs on a single exchange — no transfers needed. Learn the loop, the math, and the risks.",
    keywords: [
      "triangular arbitrage crypto",
      "triangular arbitrage strategy",
      "crypto triangular arbitrage bot",
      "arbitrage loop trading",
    ],
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
    readingMinutes: 8,
    category: "Strategies",
    excerpt:
      "Three trades, one exchange, zero transfers. Triangular arbitrage loops price inefficiencies between trading pairs.",
    blocks: [
      {
        type: "p",
        text: "**Triangular arbitrage** is a self-contained loop of three trades on a **single exchange**. You start with one asset, trade through two intermediate pairs, and end up with more of the original asset than you started with — all without moving funds between exchanges.",
      },
      {
        type: "p",
        text: "Because everything happens inside one order book, there is no withdrawal wait and no transfer fee. That makes triangular arbitrage one of the most accessible strategies for beginners — and one of the most competitive, since bots watch these loops constantly.",
      },
      { type: "h2", text: "The classic triangle" },
      {
        type: "p",
        text: "Imagine an exchange listing three pairs: **BTC/USDT**, **ETH/USDT**, and **ETH/BTC**. The loop goes:",
      },
      {
        type: "list",
        items: [
          "**Leg 1:** Sell USDT → buy BTC at the BTC/USDT ask.",
          "**Leg 2:** Sell BTC → buy ETH at the ETH/BTC ask.",
          "**Leg 3:** Sell ETH → buy USDT at the ETH/USDT bid.",
          "If the three prices are inconsistent, you finish with more USDT than you started with.",
        ],
      },
      {
        type: "p",
        text: "Concretely: start with $10,000 USDT. Buy BTC, convert to ETH via the ETH/BTC pair, then sell ETH for USDT. If the implied cross-rate differs from the direct rate by more than your total fees (three taker fees, typically ~0.3% combined), the loop is profitable.",
      },
      { type: "h2", text: "When do triangles appear?" },
      {
        type: "list",
        items: [
          "**Volatile markets:** fast moves desynchronize related pairs for seconds at a time.",
          "**New listings:** fresh pairs are priced inefficiently against established ones.",
          "**Low-liquidity altcoins:** thin books on one leg of the triangle create persistent small gaps.",
          "**Stablecoin wobbles:** when USDT or USDC deviate from $1.00, every triangle quoted through them shifts.",
        ],
      },
      { type: "h2", text: "Why it is hard in practice" },
      {
        type: "table",
        headers: ["Challenge", "What it means"],
        rows: [
          ["Three taker fees", "Every leg usually crosses the spread — ~0.1% × 3 adds up fast."],
          ["Leg risk", "If leg 2 moves before it fills, the loop breaks and you hold an unwanted asset."],
          ["Bot competition", "HFT firms run the same loops in milliseconds; retail sees leftovers."],
          ["Minimum sizes", "Dust limits on small pairs can block the exact quantities you need."],
        ],
      },
      {
        type: "callout",
        title: "Do the math before every loop",
        text: "A triangle showing 0.25% gross edge with 0.3% in combined fees is a guaranteed loss. Profitable retail triangles typically need 0.5%+ gross edge — rare, brief, and worth practicing in simulation first.",
        tone: "warning",
      },
      { type: "h2", text: "How traders scan for triangles" },
      {
        type: "p",
        text: "Profitable triangles require checking hundreds of pair combinations per second — a job for software. Scanners built for [crypto arbitrage opportunities](/blog/crypto-arbitrage-opportunities) compute implied cross-rates continuously and surface only loops whose edge survives fees. New to the terminology? The [glossary](/glossary) covers every term used here.",
      },
      {
        type: "faq",
        items: [
          {
            q: "Do I need multiple exchange accounts for triangular arbitrage?",
            a: "No — that is its main advantage. All three trades happen on one exchange, so one funded account is enough and there are no blockchain transfers.",
          },
          {
            q: "Can triangular arbitrage be automated?",
            a: "Yes, and at any serious scale it must be. The windows are seconds long, so most practitioners use bots with pre-computed loops and instant execution.",
          },
          {
            q: "What is a good profit target per triangle?",
            a: "After all fees, retail traders generally look for at least 0.2–0.5% net per loop. Anything smaller is usually noise once slippage is included.",
          },
        ],
      },
    ],
  },
  {
    slug: "funding-rate-arbitrage",
    title: "Funding Rate Arbitrage: The Cash-and-Carry Guide",
    description:
      "Earn yield market-neutral with funding rate arbitrage: long spot, short perpetuals, collect funding payments. Learn the cash-and-carry trade step by step.",
    keywords: [
      "funding rate arbitrage",
      "cash and carry crypto",
      "funding rate farming",
      "delta neutral arbitrage",
      "perp funding arbitrage",
    ],
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
    readingMinutes: 10,
    category: "Strategies",
    excerpt:
      "Get paid to hold a hedged position. Funding rate arbitrage turns perpetual futures mechanics into steady yield.",
    blocks: [
      {
        type: "p",
        text: "**Funding rate arbitrage** — the classic **cash-and-carry** trade — earns yield from the funding payments on perpetual futures contracts while staying market-neutral. When perpetuals trade above spot, longs pay shorts a funding fee every few hours. By holding **long spot + short perps** in equal size, price moves cancel out and you simply collect the funding.",
      },
      {
        type: "p",
        text: "In strong bull markets, annualized funding on majors like BTC and ETH has historically printed double digits. But funding flips sign, and the trade has real risks. Here is the full picture.",
      },
      { type: "h2", text: "How funding rates work" },
      {
        type: "p",
        text: "Perpetual futures never expire, so exchanges use **funding payments** to tether the perp price to spot. Every 1–8 hours (exchange-dependent), traders on the expensive side pay traders on the cheap side. Positive funding = longs pay shorts. Negative funding = shorts pay longs.",
      },
      {
        type: "list",
        items: [
          "**Bull market:** perps trade at a premium → funding positive → shorts get paid.",
          "**Bear market:** perps trade at a discount → funding negative → longs get paid.",
          "**The trade:** hold the side that *receives* funding, hedge with the opposite spot/perp position.",
        ],
      },
      { type: "h2", text: "The cash-and-carry setup, step by step" },
      {
        type: "list",
        items: [
          "**Check the funding rate:** look for sustained positive funding (e.g., 0.05–0.1% per 8 hours) on a liquid perp like BTCUSDT.",
          "**Buy spot:** purchase $10,000 of BTC on spot.",
          "**Short the perp:** open a $10,000 short on the BTC perpetual — now you are delta-neutral.",
          "**Collect funding:** every funding interval, the long perp holders pay you. At 0.06% per 8h, that is ~$18/day on $10k (~65% APR before costs).",
          "**Unwind:** close both legs together when funding normalizes.",
        ],
      },
      {
        type: "callout",
        title: "Funding is variable, not guaranteed",
        text: "That eye-catching APR assumes funding stays elevated. Funding can collapse to zero or flip negative within hours when sentiment turns — your yield is a weather forecast, not a fixed deposit.",
        tone: "warning",
      },
      { type: "h2", text: "Costs and risks" },
      {
        type: "table",
        headers: ["Risk / cost", "Detail"],
        rows: [
          ["Funding flip", "Negative funding means *you* pay. Have an exit rule."],
          ["Basis risk", "Spot and perp can diverge briefly; your hedge is not mathematically perfect."],
          ["Liquidation", "The short perp uses margin — a violent spike can liquidate it even though spot covers the loss economically."],
          ["Fees", "Opening/closing two legs plus ongoing margin costs eat into yield."],
          ["Exchange risk", "Your capital sits on a derivatives exchange — counterparty risk is real."],
        ],
      },
      { type: "h2", text: "Spotting the best funding opportunities" },
      {
        type: "p",
        text: "The edge is in **scanning funding rates across many exchanges and pairs simultaneously** — the highest payers change daily. A dedicated [crypto arbitrage scanner](/) with funding-rate coverage surfaces the top payers ranked by net yield, so you are not manually refreshing a dozen futures dashboards. For broader context, read [crypto arbitrage opportunities](/blog/crypto-arbitrage-opportunities).",
      },
      {
        type: "faq",
        items: [
          {
            q: "Is funding rate arbitrage risk-free?",
            a: "No. It is market-neutral, which removes directional risk, but funding flips, liquidation risk, fees and exchange risk remain. Treat it as low-volatility yield, not a savings account.",
          },
          {
            q: "How much capital do I need?",
            a: "You need enough to hold both legs plus margin buffer — typically a few thousand dollars minimum for the math to beat fees, though paper trading lets you learn the mechanics free.",
          },
          {
            q: "Which coins work best?",
            a: "High-liquidity perps with persistent funding skew — historically BTC, ETH and large-cap alts during trending markets. Illiquid perps have juicier headline rates and much worse execution.",
          },
        ],
      },
    ],
  },
  {
    slug: "cex-vs-dex-arbitrage",
    title: "CEX vs DEX Arbitrage: Profiting From Price Gaps",
    description:
      "Centralized and decentralized exchanges often price the same token differently. Learn how CEX vs DEX arbitrage works, its costs, and its risks.",
    keywords: [
      "cex vs dex arbitrage",
      "dex arbitrage",
      "uniswap arbitrage",
      "centralized vs decentralized exchange arbitrage",
    ],
    datePublished: "2026-10-05",
    dateModified: "2026-10-05",
    readingMinutes: 9,
    category: "Strategies",
    excerpt:
      "When Uniswap and Binance disagree on a token's price, patient traders get paid. The CEX vs DEX playbook.",
    blocks: [
      {
        type: "p",
        text: "**CEX vs DEX arbitrage** exploits price differences between centralized exchanges (Binance, Kraken, Coinbase) and decentralized exchanges (Uniswap, PancakeSwap, Raydium). The two venues discover prices through completely different mechanisms — order books versus automated market makers — so they disagree often, especially on volatile or newly listed tokens.",
      },
      {
        type: "p",
        text: "A token might trade at $2.40 on a CEX while the same token's DEX pool prices it at $2.52 after a whale buy. Buy on the CEX, sell into the DEX pool (or vice versa), pocket the gap. Simple in theory — the devil is in gas fees and slippage.",
      },
      { type: "h2", text: "Why CEX and DEX prices diverge" },
      {
        type: "list",
        items: [
          "**Different price discovery:** CEXs use limit order books; DEX pools use the x·y=k formula, which reprices only when someone trades.",
          "**Speed gaps:** CEX market makers update quotes in milliseconds; DEX pools move only with on-chain swaps.",
          "**New listings:** tokens often launch on a DEX days before a CEX listing — early pools are inefficient.",
          "**Network congestion:** when gas spikes, DEX arbitrageurs sit out and gaps widen.",
        ],
      },
      { type: "h2", text: "The two directions" },
      { type: "h3", text: "CEX → DEX (sell into the pool)" },
      {
        type: "p",
        text: "Token is cheaper on the CEX. Buy there, withdraw to your wallet, swap into the DEX pool at the higher price. Watch out: **withdrawal time + gas** can erase the edge.",
      },
      { type: "h3", text: "DEX → CEX (buy the dip in the pool)" },
      {
        type: "p",
        text: "Token is cheaper in the DEX pool (after a whale dump). Buy via swap, deposit to the CEX, sell higher. Deposit confirmations are the bottleneck here.",
      },
      { type: "h2", text: "The real cost stack" },
      {
        type: "table",
        headers: ["Cost", "Typical size"],
        rows: [
          ["CEX trading fee", "0.05–0.1% per trade"],
          ["DEX swap fee", "0.25–0.3% pool fee"],
          ["Gas (Ethereum L1)", "$2–$30+ depending on congestion"],
          ["Price impact", "Grows with your size vs pool depth"],
          ["CEX withdrawal fee", "Flat, varies by token"],
        ],
      },
      {
        type: "callout",
        title: "Gas is the silent killer",
        text: "On Ethereum mainnet, a $15 gas bill turns a 1% spread on a $500 trade into a loss. CEX vs DEX arbitrage shines on L2s (Arbitrum, Base) and cheap L1s (Solana, BNB Chain) — or with larger size on mainnet.",
        tone: "info",
      },
      { type: "h2", text: "Risks specific to DEX legs" },
      {
        type: "list",
        items: [
          "**MEV and frontrunning:** your swap is visible in the mempool; bots can sandwich it.",
          "**Rug pulls:** brand-new pools can be honeypots — verify the token contract first.",
          "**Impermanent pricing:** thin pools show a great price for $100 and a terrible one for $10,000.",
          "**Failed transactions:** you still pay gas when a swap reverts.",
        ],
      },
      {
        type: "callout",
        title: "Risk warning",
        text: "Smart-contract risk is unique to the DEX side: bugs or malicious contracts can drain funds. Stick to audited, high-liquidity pools while learning.",
        tone: "warning",
      },
      { type: "h2", text: "Finding CEX vs DEX gaps" },
      {
        type: "p",
        text: "You need CEX order-book prices and DEX pool prices side by side, updating live. That is exactly what a [crypto arbitrage scanner](/) with CEX-vs-DEX coverage does — plus a [paper trading bot](/) to rehearse the mechanics without risking gas. Brush up on terms in the [glossary](/glossary).",
      },
      {
        type: "faq",
        items: [
          {
            q: "Which is better for arbitrage, CEX or DEX?",
            a: "Neither universally — the profit is in the *difference* between them. CEXs offer speed and depth; DEXs offer early access to new tokens and permissionless pools.",
          },
          {
            q: "Can I do CEX vs DEX arbitrage without a wallet?",
            a: "No. The DEX leg requires a self-custody wallet (e.g., MetaMask, Phantom) holding the chain's native token for gas.",
          },
          {
            q: "What size trade makes sense?",
            a: "Large enough that gas + fees are a small fraction of the spread. On mainnet that often means $2,000+; on L2s/Solana, a few hundred dollars can work.",
          },
        ],
      },
    ],
  },
];
