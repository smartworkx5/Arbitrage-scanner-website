import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "crypto-arbitrage-glossary",
  title: "Crypto Arbitrage Glossary: 40 Terms You Must Know",
  description: "Spread, slippage, funding rate, basis, latency: 40 essential crypto arbitrage terms defined in plain English, so any strategy guide becomes easy to read.",
  keywords: [
      "crypto arbitrage glossary",
      "arbitrage terms explained",
      "crypto trading terms",
      "spread slippage funding rate",
      "crypto definitions beginners"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 12,
  category: "Basics",
  excerpt: "Every arbitrage guide assumes you know the vocabulary. These 40 plain-English definitions — spread, slippage, funding, basis, and more — get you fluent fast.",
  image: "/images/blog/crypto-arbitrage-glossary.svg",
  blocks: [
      { type: "p", text: "Crypto arbitrage has its own language, and strategy guides rarely slow down to define it. This **crypto arbitrage glossary** covers the 40 terms you will encounter constantly — from basic market mechanics to the fee and risk vocabulary that decides whether a trade makes money. Bookmark it; you will come back to it. For deeper dives on individual concepts, see our full [glossary page](/glossary)." },
      { type: "p", text: "A practical tip for using this glossary: do not try to memorize all forty terms at once. Read through them once to get the landscape, then return whenever a strategy guide uses a word you cannot precisely define. Precision matters here — in arbitrage, the difference between \"spread\" and \"net edge\" is the difference between thinking a trade is profitable and knowing it." },
      { type: "h2", text: "Core Market Terms" },
      { type: "p", text: "These ten terms describe what you see on any exchange screen. The liquidity family — spread, bid-ask spread, liquidity, order book, market depth — is really one idea viewed from different angles: how easily can you trade size without moving the price? If you internalize only one section of this glossary, make it this one, because nearly every arbitrage decision reduces to judging whether quoted prices are actually tradeable. A scanner can show you a spread; only liquidity tells you whether that spread is real." },
      {
        type: "list",
        items: [
        "**Spread** — The price difference for the same asset between two venues. The raw material of arbitrage, measured in percent.",
        "**Bid-ask spread** — The gap between the highest buy order (bid) and lowest sell order (ask) on a single order book. Wide bid-ask spreads mean thin liquidity.",
        "**Liquidity** — How easily an asset can be bought or sold without moving its price. Deep liquidity means large orders barely move the market.",
        "**Order book** — The live list of buy and sell orders on an exchange. Its depth shows how much can trade near the current price.",
        "**Market depth** — The total volume of orders near the current price. Shallow depth means your order will cause slippage.",
        "**Volume** — How much of an asset trades over a period. High volume usually (not always) signals real, tradeable liquidity.",
        "**Volatility** — How much and how fast prices move. Volatility creates spreads but also closes them violently.",
        "**Market maker** — A trader or firm that constantly quotes buy and sell prices, earning the bid-ask spread. Professionals who close most arbitrage gaps.",
        "**Taker** — A trader whose order executes immediately against existing orders. Takers pay higher fees.",
        "**Maker** — A trader whose limit order sits on the book adding liquidity. Makers pay lower fees."
        ],
      },
      { type: "h2", text: "Execution and Order Terms" },
      { type: "p", text: "Execution vocabulary is where beginners lose the most money through misunderstanding. Slippage is the classic example: newcomers treat the quoted price as the traded price, then wonder where their profit went. Similarly, the sequential-versus-concurrent distinction decides your entire operational setup — whether you need transfer speed or double capital. Read these definitions twice; they describe the exact failure modes you will personally encounter in your first month of live trading." },
      {
        type: "list",
        items: [
        "**Slippage** — The difference between the price you expected and the price you actually got, caused by price movement or thin books.",
        "**Market order** — An order to buy or sell immediately at the best available price. Fast, but guarantees slippage on thin books.",
        "**Limit order** — An order to buy or sell only at your specified price or better. Cheaper fees, but may not fill.",
        "**Fill** — When your order executes, partially or fully. Partial fills complicate arbitrage math.",
        "**Latency** — The delay between spotting a price and your order reaching the exchange. High latency kills fast strategies.",
        "**API** — The programmatic interface bots use to trade. API keys let software place orders on your account.",
        "**Sequential execution** — Buy, transfer, then sell. Simple, but exposed to price moves during transfer.",
        "**Concurrent execution** — Buying and selling simultaneously on two venues from pre-funded balances. No transfer risk, needs double capital.",
        "**Rebalancing** — Moving funds back to restore balanced inventory across exchanges after concurrent trades.",
        "**Confirmation** — A blockchain's acknowledgment of your transfer. Exchanges require a set number before crediting deposits."
        ],
      },
      { type: "h2", text: "Fees and Cost Terms" },
      { type: "p", text: "Study this section before you trade a single dollar. Every cost term here subtracts directly from your spread, and beginners consistently underestimate how many apply at once — trading fees on both sides, a withdrawal fee, a network fee, and slippage can easily total 0.5% against a 0.6% spread. Professionals think in net edge automatically; until you do too, run the subtraction on paper for every candidate trade. There is no faster way to develop professional instincts." },
      {
        type: "list",
        items: [
        "**Trading fee** — The exchange's cut of each trade, often around 0.1% per side for regular users, lower for high-volume or maker orders.",
        "**Withdrawal fee** — The flat fee exchanges charge to send crypto out, plus the blockchain network fee. A silent profit-killer.",
        "**Network (gas) fee** — The blockchain's own transaction fee, paid to miners or validators. Spikes during congestion.",
        "**Funding rate** — Periodic payments between long and short holders of perpetual futures, keeping the contract near spot price.",
        "**Basis** — The difference between a futures contract's price and spot price. The raw material of cash-and-carry arbitrage.",
        "**Contango** — When futures trade above spot. The normal state that makes cash-and-carry possible.",
        "**Backwardation** — When futures trade below spot. Rarer, and it flips which side of the trade is attractive.",
        "**Net edge** — Spread minus all costs. The only number that decides whether a trade is worth taking.",
        "**Round trip** — The complete buy-and-sell cycle. Costs must always be counted for the full round trip, not one side.",
        "**Fee tier** — Discounted fee levels exchanges grant for high volume or holding their token. Professionals live on good tiers."
        ],
      },
      { type: "h2", text: "Risk and Strategy Terms" },
      { type: "p", text: "These terms describe what can go wrong and how traders defend themselves. Delta-neutral positioning is the philosophical core of arbitrage — profit from price differences, not price direction — while the risk terms (execution, counterparty, smart-contract, liquidation) explain why arbitrage is never the risk-free activity marketers claim. Understanding impermanent loss and wash trading also protects you when evaluating DeFi venues and unfamiliar exchanges, where the advertised numbers are the least trustworthy." },
      {
        type: "list",
        items: [
        "**Execution risk** — The chance that prices move, orders fail, or transfers stall between your buy and your sell.",
        "**Counterparty risk** — The chance an exchange, bridge, or protocol fails, freezes, or absconds with your funds.",
        "**Smart-contract risk** — The chance that DeFi code has a bug or gets exploited. Relevant to all DEX arbitrage.",
        "**Delta-neutral** — A position with no net exposure to price direction — e.g., long spot plus an equal short. The goal of hedged arbitrage.",
        "**Hedge** — An offsetting position that cancels directional risk, such as shorting futures against long spot.",
        "**Liquidation** — Forced closure of a leveraged position when losses breach the margin requirement. The key danger in funding-rate strategies.",
        "**Impermanent loss** — Value lost by liquidity providers when pooled token prices diverge. Relevant background for DEX arbitrage.",
        "**Wash trading** — Fake volume created by trading with oneself. Makes illiquid venues look active; a red flag for fake spreads.",
        "**Premium / discount** — How far an asset trades above (premium) or below (discount) a reference price, common in regional markets.",
        "**Convergence** — Prices moving back together. Arbitrage profits depend on convergence happening after you are positioned — or being already hedged."
        ],
      },
      { type: "p", text: "Knowing these terms changes how you read opportunity alerts: a \"0.8% spread\" means something very different once you automatically subtract taker fees, estimate slippage from market depth, and check whether withdrawals are even enabled. Fluency is a genuine edge. When you are ready to apply it, our [triangular arbitrage guide](/guides/triangular-arbitrage) is a good first strategy to read with fresh eyes — and the [strategy articles](/blog) put the vocabulary to work." },
      { type: "p", text: "One final note: terminology varies slightly between venues — one exchange's \"taker fee\" is another's \"market fee,\" and funding intervals differ across perpetual contracts. When in doubt, check the specific venue's documentation rather than assuming. The concepts in this glossary are universal; the labels occasionally are not." },
      {
        type: "faq",
        items: [
          {
            q: "What is the difference between spread and slippage?",
            a: "Spread is the price difference between venues — your potential profit. Slippage is the price difference between what you expected and what you got on your own order — a cost. Confusing them is a classic beginner mistake.",
          },
          {
            q: "What does delta-neutral mean in arbitrage?",
            a: "It means your position has no net exposure to the market going up or down — for example, holding spot while shorting an equal futures position. Pure arbitrage aims to be delta-neutral so profit comes from the price difference, not direction.",
          },
          {
            q: "Why do funding rates matter for arbitrage?",
            a: "Funding rates are periodic payments between perpetual-futures longs and shorts. When rates are high, traders can collect them with a hedged spot-plus-short position — one of the main yield-style arbitrage strategies in 2026.",
          }
        ],
      },
  ],
};
