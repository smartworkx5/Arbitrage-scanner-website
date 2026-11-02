import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "stablecoin-borrow-loop-strategy-risks-2026",
  title: "Stablecoin Borrow Loops: Leverage, Yield and the Liquidation Trap",
  description: "Stablecoin borrow loops multiply yield by redepositing borrowed funds, but each loop adds leverage and risk. Learn how loops work and how a depeg unwinds them.",
  keywords: [
      "Stablecoin Borrow Loops",
      "recursive borrowing DeFi strategy",
      "leveraged yield farming risk",
      "stablecoin depeg liquidation",
      "DeFi loop strategy",
      "borrow loop APY risk"
  ],
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readingMinutes: 10,
  category: "Strategies",
  excerpt: "Borrow, redeposit, repeat: stablecoin loops can multiply a modest yield into an eye-catching one. This article dissects the leverage hiding inside each loop and the depeg that unwinds it.",
  image: "/images/blog/stablecoin-borrow-loop-strategy-risks-2026.svg",
  blocks: [
      { type: "p", text: "Stablecoin Borrow Loops are one of the most seductive strategies in DeFi, because they turn a modest lending yield into a headline APY through repetition. Data as of 2 Nov 2026, BTC traded at about $78,400, up about 1% in 24 hours, and ETH traded near $2,280, up about 1%, while gold spot traded near $3,900 an ounce after rebounding from a 31 Oct one-year low near $3,876. In that environment, a strategy promising multiples of the base yield attracts attention, and loops deliver it, at least on paper. The mechanics are simple: deposit stablecoins, borrow stablecoins against them, redeposit the borrowed stablecoins, borrow again, and repeat. Each loop adds another layer of deposits earning yield and another layer of debt costing interest, and the net yield on your original capital rises with each repetition." },
      { type: "p", text: "The catch is that each loop also adds leverage and shrinks your safety margin. After several loops, a position that started with $10,000 of your own money may control $40,000 or $50,000 of deposits and debt, and a small move in the price of any asset involved, or a spike in borrow rates, can trigger liquidation across the whole stack. Loops feel safe because both sides are stablecoins, and stablecoins are supposed to stay at $1, but that assumption is exactly what fails in the scenario that matters most: a depeg, when one stablecoin falls below its peg and the carefully balanced loop becomes a forced unwind. This article dissects how loops work, why the yield is real but smaller than advertised, and how a depeg turns a quiet strategy into a rapid liquidation." },
      { type: "h2", text: "How a recursive borrow loop actually works" },
      { type: "p", text: "A loop starts with a deposit of, say, $10,000 in USDC. With a loan-to-value limit of 80%, you borrow $8,000 in USDT, redeposit it, and borrow $6,400 more, then redeposit and borrow $5,120, and so on. Each round adds a smaller amount, and the total position converges toward a multiple of the original capital determined by the loan-to-value ratio. At 80% loan-to-value, the theoretical maximum leverage is 5 times, meaning $10,000 controls $50,000 of deposits, though in practice gas costs, rate spreads, and safety margins keep real loops to 3 or 4 times. Every deposit earns the supply rate, every loan pays the borrow rate, and the profit is the difference between the two, multiplied by the leveraged size, minus fees." },
      { type: "p", text: "The arithmetic shows why the yield is smaller than it first appears. If the supply rate is 6% and the borrow rate is 5%, the spread is only 1%, and even at 4 times leverage the net yield on original capital is roughly 4%, not the eye-catching number sometimes advertised. Loops become attractive mainly when a protocol offers extra token rewards on deposits or borrows, which widen the effective spread, or when borrow rates are temporarily below supply rates, an inefficiency that usually corrects. Traders who loop purely for the base spread often discover that gas costs and rate moves consume most of the gain. A loop is therefore best understood as a magnifier: it magnifies whatever edge exists, including a negative edge, and it magnifies risk in direct proportion." },
      { type: "h2", text: "The hidden leverage and liquidation maths" },
      { type: "p", text: "The danger of loops is that leverage hides inside a position that looks like a simple deposit. Your health factor is calculated on the total position, and because debt is a large fraction of total deposits, a small adverse move in collateral value relative to debt can push the health factor below 1. With stablecoins on both sides, price moves are usually tiny, which is why loops survive for months, but tiny is not zero. If the borrowed stablecoin rises slightly against the deposited one, or the deposited one dips, the ratio shifts, and at 4 times leverage a 2% relative move can be enough to threaten liquidation. Add a borrow-rate spike, which grows the debt while you sleep, and the margin thins further without any price move at all." },
      { type: "p", text: "Loopers often compound the risk by using the maximum loan-to-value at every step, leaving the health factor barely above 1 from the start. That is a position with no room for any adverse move, and it survives only while conditions stay perfect. Prudent loopers use a lower loan-to-value per step, accept less leverage, and monitor the health factor as a single number for the whole stack rather than per loop. They also keep an exit reserve: stablecoins held outside the loop, ready to repay debt quickly if the health factor falls. Without that reserve, unwinding a loop during stress means selling into a falling market or paying punitive gas costs, which is precisely when exits are most expensive. Terms like loan-to-value are defined in the [glossary](/glossary) for readers sizing their first loop." },
      {
        type: "list",
        items: [
        "Each loop borrows against the previous deposit, adding leverage and shrinking the safety margin.",
        "Maximum leverage equals roughly 1 divided by 1 minus the loan-to-value ratio.",
        "At 80% loan-to-value, theoretical leverage is 5 times; practical loops run lower.",
        "Profit is the supply-minus-borrow spread multiplied by leverage, minus fees and gas.",
        "A small relative price move between two stablecoins can threaten a highly looped position."
        ],
      },
      { type: "h2", text: "The depeg scenario that unwinds loops fast" },
      { type: "p", text: "A depeg is the loop's nightmare scenario, and it unfolds faster than most loopers expect. Suppose you deposited USDC and borrowed USDT, and USDT falls to $0.95 while USDC holds $1. Your debt, measured in USDT, is now worth less in dollar terms, which sounds helpful, but the protocol values positions using oracle prices, and the real damage comes from the other direction: if the deposited stablecoin depegs while the borrowed one holds, your collateral value collapses while your debt stays constant, and the health factor plunges. Liquidators then sell your discounted collateral to repay debt, and because the loop is stacked, liquidation cascades through every layer at once. A position that looked diversified across stablecoins turns out to be a single concentrated bet on both pegs holding." },
      { type: "p", text: "Depegs also trigger secondary effects that worsen the unwind. Borrow rates for the stressed stablecoin spike as users rush to borrow or repay, liquidity for swapping between stablecoins dries up or becomes expensive, and oracle prices can lag the real market, causing liquidations at prices that feel wrong. Data as of 2 Nov 2026, the Fear and Greed Index sat at 37, and fearful markets are when peg stress historically appears, driven by redemptions, rumours, or collateral concerns. Loopers who survived previous depegs share a common lesson: the exit must be planned before the depeg, because during it, every exit route is crowded, expensive, or both. Holding a reserve, using modest leverage, and avoiding loops that pair a weaker stablecoin as collateral with a stronger one as debt are the practical defences." },
      {
        type: "table",
        headers: ["Loop leverage", "Original capital", "Total position", "Relative move to danger"],
        rows: [
          ["1x, no loop", "$10,000", "$10,000", "Large"],
          ["2x loop", "$10,000", "$20,000", "Moderate"],
          ["3x loop", "$10,000", "$30,000", "Small, a few percent"],
          ["4x loop", "$10,000", "$40,000", "Very small, around 2%"],
          ["5x loop, maximum", "$10,000", "$50,000", "Tiny, under 2%"]
        ],
      },
      { type: "h2", text: "When, if ever, does looping make sense?" },
      { type: "p", text: "Looping makes sense only when three conditions hold together: a genuine, durable spread between supply and borrow rates or rewards, modest leverage that leaves a real safety margin, and a clear exit plan with a reserve. A short-term loop to capture a temporary reward programme can be rational if sized small and monitored daily. A permanent, maximum-leverage loop justified by a headline APY is usually a accident waiting for a depeg or a rate spike. The honest question to ask before looping is whether you would still be comfortable if the spread disappeared tomorrow and one stablecoin moved 3% against the other; if the answer is no, the loop is too large." },
      { type: "p", text: "For most users, a simpler alternative beats looping: deposit once, earn the base supply rate, and accept the lower but far safer yield. The difference between a 6% single deposit and a 9% looped yield is rarely worth the liquidation risk, the monitoring burden, and the depeg exposure, especially for capital that cannot be replaced. If you do loop, document the plan: maximum leverage, health-factor floor for action, and the exact steps to unwind in order. The [guides on cross-exchange arbitrage](/guides/cross-exchange-arbitrage) show the same discipline of pre-written exits in another context. Loops reward the boring virtues, modest size, reserves, and rules, and they punish the exciting ones, maximum leverage and blind faith in a peg." },
      {
        type: "callout",
        title: "Risk warning",
        text: "Stablecoin loops are leveraged positions, and a depeg or rate spike can liquidate the entire stack quickly. Stablecoins can and do lose their pegs, so never loop with money you cannot afford to lose, and never use maximum leverage.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, built to explain ideas in plain language and help you think through questions step by step. For this topic, you can ask Muse AI to explain a borrow loop with a simple stacking-blocks analogy, showing how each layer adds both yield and risk. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is a stablecoin borrow loop?",
            a: "A borrow loop deposits stablecoins, borrows stablecoins against them, redeposits the borrowed amount, and repeats. Each repetition increases both the deposits earning yield and the debt costing interest, multiplying the net yield on the original capital along with the leverage and risk.",
          },
          {
            q: "Why is the real loop yield lower than advertised?",
            a: "Because profit is only the spread between supply and borrow rates, multiplied by leverage, minus gas and fees. If supply pays 6% and borrowing costs 5%, the spread is just 1%, so even at 4 times leverage the net yield is roughly 4% before costs, not a multiple of the headline supply rate.",
          },
          {
            q: "How does a depeg liquidate a loop?",
            a: "If the deposited stablecoin falls below its peg while the borrowed stablecoin holds, collateral value drops while debt stays constant, pushing the health factor below 1. Liquidators then sell collateral at a discount across the stacked position, and the unwind can cascade through every loop layer at once.",
          },
          {
            q: "What leverage is safe for looping?",
            a: "There is no universally safe leverage, but prudent loopers stay well below the maximum, keep the health factor comfortably above 1, and hold an exit reserve outside the loop. If a 3% relative move between the stablecoins would liquidate you, the loop is too large.",
          }
        ],
      },
  ],
};
