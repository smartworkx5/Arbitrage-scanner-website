import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "ai-market-making-crypto-2026",
  title: "AI Market Making: How Algorithms Quote Crypto Spreads",
  description: "AI market making keeps crypto order books tight 24/7. We explain quoting models, inventory control, and adverse selection, and what it means for fills.",
  keywords: [
      "AI Market Making",
      "crypto market making algorithms",
      "quoting models",
      "inventory skew",
      "adverse selection crypto",
      "bid ask spreads"
  ],
  datePublished: "2026-10-20",
  dateModified: "2026-10-20",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Tight crypto spreads do not happen by accident. Here is how market-making algorithms quote, manage inventory, and react to toxic flow, and what it means for your fills.",
  image: "/images/blog/ai-market-making-crypto-2026.svg",
  blocks: [
      { type: "p", text: "AI Market Making is the invisible infrastructure of crypto trading: algorithms quoting buy and sell prices around the clock, on hundreds of pairs, across centralized and decentralized venues. Every time you see a tight spread on BTC near $81,600-$82,000 as of October 20, 2026, a market-making model probably put it there. Understanding how these algorithms quote, and when they pull their quotes, explains a lot about your fills, your slippage, and those strange moments when liquidity vanishes." },
      { type: "p", text: "This article explains the quoting models, the inventory math, and the adverse-selection problem that shapes every order book you trade on. You do not need to run a market-making operation to benefit: understanding the other side of your trades makes you a better taker." },
      { type: "h2", text: "What Market Makers Actually Do" },
      { type: "p", text: "A market maker continuously posts both a bid and an ask, earning the spread when both sides get hit while ending up roughly flat. The business looks simple, capture the difference between buy and sell prices thousands of times, but the risk is real: every quote is an option you give the market for free, and informed traders will exercise it exactly when the price is about to move against you. The entire art of market making is pricing that risk correctly." },
      { type: "p", text: "In crypto this happens everywhere at once: on centralized exchanges with millisecond competition, on DEXs where automated market makers use formulas instead of order books, and across venues where the same firms quote correlated pairs. The result is the normally tight spreads retail traders take for granted, and the sudden widening that surprises them during stress. Both are the algorithm working as designed." },
      { type: "h2", text: "Quoting Models: From Avellaneda-Stoikov to Reinforcement Learning" },
      { type: "p", text: "The classic framework is the Avellaneda-Stoikov model, which computes two things: a reservation price that shifts with your inventory, and an optimal spread that widens with volatility and your risk aversion. Long inventory pushes your reservation price below mid, so you shade quotes to attract sellers and discourage more buying. It is elegant, interpretable, and still the conceptual backbone of much professional quoting." },
      { type: "p", text: "Modern AI approaches build on this foundation rather than replacing it. Machine learning forecasts short-term volatility and order-flow toxicity to adjust spreads dynamically, while reinforcement learning agents learn quoting policies by simulating millions of market scenarios. The ML layer adapts to regimes the closed-form model cannot see, but every serious operation keeps hard risk limits underneath the learning layer, because learned policies can fail in unprecedented conditions." },
      { type: "h2", text: "Inventory Control and Skew" },
      { type: "p", text: "Inventory is the market maker's core risk: accumulate too much of an asset and a price drop wipes out weeks of spread earnings. Skew is the main control, shifting both quotes to encourage the trades that flatten your position. Long BTC into a selloff means lowering both bid and ask to attract sellers and repel buyers; the quotes still look competitive, but they lean in the direction that reduces your exposure." },
      { type: "p", text: "Watch for skew in the wild and you will start reading order books differently. A book that looks balanced but consistently leans its quotes one way is often a big inventory being worked off. For retail traders the lesson is practical: when you see persistent one-sided skew ahead of events like the October 27-28 FOMC meeting, liquidity providers are telling you they are nervous, and you should be careful about demanding immediacy." },
      { type: "h2", text: "Adverse Selection: The Informed-Flow Problem" },
      { type: "p", text: "Adverse selection is the tax informed traders levy on market makers: the traders who hit your quotes tend to know something you do not, so your fills predict losses. Algorithms estimate toxicity from order-flow patterns, rapid-fire market orders, correlated buying across venues, unusual size, and widen spreads or pull quotes when toxicity spikes. This is why spreads blow out before big moves: the models detect informed flow and protect themselves." },
      { type: "p", text: "Liquidation cascades are adverse selection at scale. During events like the recent $1.3 billion liquidation wave, forced selling hits every bid indiscriminately, and market makers respond by widening spreads dramatically or stepping away entirely. The vanishing liquidity is not a malfunction; it is the model's correct response to toxic flow. Understanding this keeps you from placing market orders into the exact moments when quotes are worst." },
      { type: "h2", text: "What This Means for Retail Traders" },
      { type: "p", text: "The actionable takeaways are straightforward. Use limit orders instead of market orders, especially in volatile conditions, so you choose your price rather than accepting whatever the skewed book offers. Trade when spreads are tight and books are deep, typically during high-volume hours, and avoid demanding liquidity around scheduled news. On DEXs, understand the specific AMM math you are trading against, since formula-based pools behave differently from order-book market makers, a topic our [CEX vs DEX arbitrage guide](/guides/cex-vs-dex-arbitrage) explores." },
      { type: "p", text: "Finally, respect the spread as information. A suddenly wide spread on a normally tight pair is the market's professionals telling you something changed; slow down and find out what before trading into it. For systematic ways to profit from cross-venue price differences rather than paying spreads, see our [triangular arbitrage guide](/guides/triangular-arbitrage) and the [best crypto arbitrage scanners](/best-crypto-arbitrage-scanners) roundup." },
      {
        type: "callout",
        title: "Risk Disclosure",
        text: "Market making is a professional activity with real inventory and technology risk; this article explains the mechanics for educational purposes, not as a recommendation to run market-making strategies. Retail traders face adverse selection on every market order. Spreads can widen violently during volatility, and stop or market orders placed into thin books can fill far from expected prices.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can decode the microstructure jargon in this article. For example, you can ask it to explain adverse selection or inventory skew in plain simple words with an everyday analogy. Muse AI is not a trading tool and does not give financial advice." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      {
        type: "faq",
        items: [
          {
            q: "What is a market maker in crypto?",
            a: "A participant, usually an algorithm, that continuously posts buy and sell orders to provide liquidity, earning the bid-ask spread. Market makers take on inventory risk and the risk of trading against better-informed counterparties, which they manage through quoting models and skew.",
          },
          {
            q: "Why do spreads widen during volatility?",
            a: "Because volatility increases adverse-selection risk: informed and forced flows hit quotes exactly when prices are moving. Market-making algorithms detect this toxicity and widen spreads or pull quotes to protect themselves, which is why liquidity is thinnest when traders want it most.",
          },
          {
            q: "Can retail traders market-make profitably?",
            a: "It is very difficult. Professional firms compete on latency, inventory models, and exchange fee tiers that retail cannot match, and adverse selection punishes slow quoters hardest. Most retail traders do better focusing on taking liquidity wisely than on providing it.",
          },
          {
            q: "How do market makers affect arbitrage?",
            a: "They are both the competition and the infrastructure: their quoting keeps cross-venue prices aligned most of the time, which shrinks arbitrage opportunities, but their quotes are also the liquidity arbitrageurs trade against when real gaps appear.",
          }
        ],
      },
  ],
};
