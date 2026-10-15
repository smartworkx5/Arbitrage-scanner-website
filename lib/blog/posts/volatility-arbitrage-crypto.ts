import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "volatility-arbitrage-crypto",
  title: "Volatility Arbitrage in Crypto",
  description: "Volatility arbitrage trades the gap between implied and realised volatility in crypto options. Learn IV vs RV, delta hedging, vega risk, and who it suits.",
  keywords: [
      "volatility arbitrage crypto",
      "crypto options volatility trading",
      "implied vs realised volatility",
      "delta hedging crypto options",
      "vega risk crypto",
      "crypto volatility surface"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 10,
  category: "Strategies",
  excerpt: "Volatility arbitrage bets on how much prices will move, not which way. Here is how implied versus realised volatility works, why delta hedging is the whole job, and why this strategy suits specialists.",
  image: "/images/blog/volatility-arbitrage-crypto.svg",
  blocks: [
      { type: "h2", text: "Betting on How Much, Not Which Way" },
      { type: "p", text: "Most trading is a bet on direction: up or down. Volatility arbitrage is a bet on magnitude: how much the price will move, regardless of direction. The trader compares implied volatility — the market's expectation of future movement, embedded in option prices — with realised volatility, the movement that actually happens. If options are pricing in more movement than actually occurs, selling volatility can profit. If options are pricing in less movement than occurs, buying volatility can profit. The edge, when it exists, comes from the gap between expectation and reality." },
      { type: "p", text: "Crypto makes this strategy both attractive and treacherous. Crypto volatility is high, option markets are younger and less efficient than in equities, and volatility spikes are violent. On 15 October 2026, a hot US inflation print knocked Bitcoin from above $83,000 to near $80,980 to $81,835, Ether fell about 2.9% to near $2,414 to $2,426, and roughly $973 million in positions were liquidated in 24 hours. Implied volatility repriced sharply around that event. A trader who had sold volatility before the print faced a fast, painful loss; a trader who had bought it profited. Volatility arbitrage is a strategy where being right about the average is not enough — the timing of the spikes decides the outcome." },
      { type: "h2", text: "Implied Volatility vs Realised Volatility" },
      { type: "p", text: "Implied volatility is not a forecast anyone publishes. It is backed out of option prices using a pricing model: given the option's market price, the strike, the expiry, and the underlying price, the model solves for the volatility that would make the option worth what it costs. When option prices rise, implied volatility rises. Realised volatility is simpler: it is the actual, measured movement of the underlying price over a period, usually annualised from daily or hourly returns. The volatility arbitrageur's job is to judge whether implied volatility is rich or cheap relative to what will actually be realised." },
      { type: "p", text: "That judgement is harder than it looks. Implied volatility tends to run above realised volatility on average — a premium that compensates option sellers for the risk of sudden spikes — so selling volatility looks profitable most of the time and then loses badly in the tails. Volatility also clusters: calm periods follow calm periods, and violent periods follow violent ones. A strategy that sells volatility because the last month was quiet is exactly the strategy that gets hurt when the regime flips. Crypto adds its own wrinkles: 24/7 trading, weekend gaps in traditional markets that do not exist in crypto, thin option liquidity in longer-dated contracts, and exchange-specific pricing that can differ from venue to venue." },
      { type: "h2", text: "Delta Hedging: Where the Strategy Lives or Dies" },
      { type: "p", text: "A volatility trade is not just buying or selling an option and waiting. Options carry directional exposure — delta — that changes as the underlying price moves. To isolate the volatility bet, the trader delta-hedges: trading the underlying asset in the opposite direction to offset the option's directional sensitivity, and re-hedging as the price moves. If the hedge is maintained well, the profit or loss comes mostly from the volatility difference rather than from direction. If the hedge is sloppy, the position becomes a directional bet with option leverage, which is a much riskier trade than intended." },
      { type: "p", text: "Delta hedging in crypto is expensive and operationally demanding. The underlying moves around the clock, so the hedge needs monitoring around the clock. Every hedge trade costs fees and slippage, and those costs accumulate fastest exactly when volatility is highest — which is when the hedge needs the most adjustment. Gaps are the enemy: a sudden jump leaves the hedge stale and the position exposed. Traders also manage vega, the sensitivity to changes in implied volatility itself, and gamma, the rate at which delta changes. A long-volatility position is typically long gamma, meaning the hedge must be adjusted by selling into rises and buying into falls; a short-volatility position is short gamma, the reverse. Both require discipline, capital, and fast execution. This is why volatility arbitrage is a specialist strategy, not a beginner's side project." },
      {
        type: "list",
        items: [
        "Implied volatility (IV): what option prices assume will happen.",
        "Realised volatility (RV): what actually happened.",
        "Delta: directional sensitivity, neutralised by hedging the underlying.",
        "Gamma: how fast delta changes — drives how often you must re-hedge.",
        "Vega: sensitivity to changes in implied volatility itself."
        ],
      },
      { type: "h2", text: "Risks, Costs, and Who This Strategy Is For" },
      { type: "p", text: "The risks of volatility arbitrage are concentrated and unforgiving. A short-volatility position has limited upside — the premium collected — and large downside if realised volatility explodes. A long-volatility position bleeds premium every day the market stays calm, and can lose money even when a spike eventually arrives if the timing or the hedge is wrong. Model risk is real: the pricing models used to compute implied volatility make assumptions about distributions and liquidity that crypto routinely violates. Liquidity risk is acute in crypto options, where spreads can be wide and large orders move prices. And tail risk is the defining feature: the strategy's worst days are far worse than a normal distribution predicts." },
      {
        type: "callout",
        title: "Volatility arbitrage is a specialist strategy",
        text: "It requires options expertise, hedging infrastructure, capital, and round-the-clock monitoring. Most traders are better served by simpler strategies such as pairs trading or basis trading — and by studying rather than trading volatility.",
        tone: "warning",
      },
      { type: "p", text: "For most readers, the right takeaway is educational. Understanding implied versus realised volatility helps you read option markets, judge whether options are expensive or cheap, and understand why strategies like covered calls or protective puts cost what they do. If you want exposure to volatility ideas without running a delta-hedged book, consider learning through paper trading and small, defined-risk option positions, and studying the related market-neutral approaches in [Market-Neutral Crypto Portfolios](/blog/market-neutral-crypto) and [Pairs Trading Crypto Assets](/blog/pairs-trading-crypto). Never trade volatility with leverage you do not fully understand, and never treat a volatility edge as a safe yield." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain implied versus realised volatility, delta hedging, and vega in plain language, and it can help you draft a study checklist for learning options before risking capital." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is volatility arbitrage?",
            a: "Trading the gap between implied volatility (what option prices expect) and realised volatility (what actually happens), usually with delta hedging to isolate the volatility bet from direction.",
          },
          {
            q: "Is selling volatility in crypto a safe income strategy?",
            a: "No. Selling volatility earns small premiums most of the time and can lose heavily when realised volatility spikes. Short-volatility positions have limited upside and large downside.",
          },
          {
            q: "What is delta hedging?",
            a: "Trading the underlying asset to offset an option position's directional sensitivity, re-hedged as prices move, so the result depends mainly on volatility rather than direction.",
          },
          {
            q: "Do beginners need volatility arbitrage?",
            a: "No. It is a specialist strategy requiring options expertise, hedging infrastructure, and round-the-clock monitoring. Most traders should learn the concepts and stick to simpler strategies.",
          }
        ],
      },
  ],
};
