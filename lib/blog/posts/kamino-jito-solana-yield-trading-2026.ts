import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "kamino-jito-solana-yield-trading-2026",
  title: "Kamino and Jito: Solana Yield Strategies Traders Actually Use",
  description: "Kamino and Jito explained for Solana traders: lending loops, liquid staking yields, liquidation risks, and checks to run before looping a position in 2026.",
  keywords: [
      "Kamino and Jito",
      "Solana yield strategies",
      "Kamino lending loops",
      "Jito liquid staking",
      "Solana DeFi risk",
      "SOL yield farming"
  ],
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Kamino lending loops and Jito liquid staking are the two Solana yield routes traders use most, but each loop adds liquidation risk that needs active management.",
  image: "/images/blog/kamino-jito-solana-yield-trading-2026.svg",
  blocks: [
      { type: "p", text: "Kamino and Jito sit at the centre of Solana yield strategies that many traders actually use in 2026, because they combine lending markets with liquid staking in ways that can be repeated for higher exposure. On Tuesday 3 November 2026, BTC traded around $76,800, down about 2 percent in 24 hours, while SOL traded around $92, down about 2.8 percent, a reminder that yield earned in a falling market can be erased quickly by price moves. Kamino is a lending market where users supply assets, borrow against them, and repeat the cycle, while Jito offers liquid staking tokens that keep SOL exposure liquid while it earns staking rewards. Used together, they let a trader hold staked SOL exposure, borrow against it, and redeposit the borrowed funds, but every loop adds liquidation risk that must be understood before the first deposit." },
      { type: "h2", text: "How a Kamino lending loop works" },
      { type: "p", text: "A lending loop starts with collateral supplied to Kamino, most often SOL, a liquid staking token, or a stablecoin. The protocol lets the user borrow a second asset against that collateral up to a limit set by the loan-to-value ratio for the pair. The borrowed asset is then supplied back into the same market or swapped into more collateral, and the cycle repeats. Each loop increases both the yield-bearing position and the debt, so the position earns more when rewards are positive but also moves closer to liquidation when collateral prices fall. Traders who loop three or four times can hold several times their starting capital in exposure, which is why small price moves start to matter a lot. The [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) explains how traders compare returns across venues before committing capital to any single loop." },
      { type: "p", text: "Looping only makes sense when the net return stays positive after borrowing costs, and that calculation changes constantly. Borrow rates on Kamino move with utilisation, so a loop that paid well in the morning can turn unprofitable by the evening if many users borrow the same asset. Reward emissions, staking yield, and trading fees all feed into the same equation, and none of them are fixed. Sensible traders model the loop at several borrow rates and several collateral prices before entering, rather than trusting the headline annual percentage yield shown on a dashboard. They also keep a buffer between their current loan-to-value ratio and the liquidation threshold, because Solana price moves can be fast and liquidations are executed by bots without warning." },
      { type: "h2", text: "What Jito liquid staking adds to the trade" },
      { type: "p", text: "Jito liquid staking lets SOL holders stake their tokens and receive a liquid token in return, which represents the staked position plus accumulated rewards. Unlike native staking, where tokens are locked and unstaking takes time, the liquid token can be traded, supplied as collateral, or used in DeFi immediately. That flexibility is the whole point for yield traders: staked SOL that would otherwise sit idle can now back a Kamino loan, and the loan proceeds can be looped again. The trade-off is that the liquid token can trade slightly below or above the value of the underlying staked SOL, especially during stress, so the collateral value in a loop is not exactly the same as holding raw SOL." },
      { type: "p", text: "Jito also runs a maximum extractable value infrastructure that shares some validator revenue with stakers, which can lift staking returns above plain staking in busy periods. Traders should still treat that extra return as variable, not as a fixed income stream, because it depends on network activity and validator performance. Another point to check is redemption: converting the liquid token back to SOL may take time or cost a small discount on a decentralised exchange if liquidity is thin at that moment. A trader who needs to exit a loop in a hurry during a market drop may therefore face slippage on top of a falling collateral price, which is exactly when exit costs hurt most." },
      { type: "h2", text: "Liquidation trade-offs traders often misjudge" },
      { type: "p", text: "Liquidation is the central risk of every leveraged yield strategy, and it is routinely underestimated because calm markets make loops look safe. When collateral falls below the required ratio, liquidators repay part of the debt and take collateral at a discount, which shrinks the position and locks in a loss. Repeated liquidations can unwind a looped position almost entirely, leaving the trader with far less than the starting deposit even if prices later recover. Health factor displays help, but they are snapshots, not guarantees, because oracle prices update on their own schedule and a sharp move can cross several thresholds between updates. Keeping the health factor high is the simplest defence, and it costs yield, which is a trade many traders resist until they experience their first liquidation." },
      {
        type: "callout",
        title: "Liquidation warning",
        text: "A looped position can be liquidated while you sleep, and liquidations lock in losses even if prices recover later. Never loop with funds you cannot afford to lose, and keep a wide buffer above the liquidation threshold at all times.",
        tone: "warning",
      },
      { type: "h2", text: "A practical checklist before looping" },
      {
        type: "list",
        items: [
        "Work out the net yield after borrow cost at three different borrow rates, not just the current one",
        "Set a maximum loan-to-value ratio for yourself well below the protocol liquidation line",
        "Check liquid token liquidity and any discount to underlying staked SOL before supplying it as collateral",
        "Plan an exit route that does not depend on a single pool or a single decentralised exchange",
        "Size the position so that one liquidation does not wipe out your wider portfolio"
        ],
      },
      { type: "p", text: "Position sizing deserves as much attention as yield maths, because a loop concentrates risk in one chain, one lending market, and often one collateral asset. A sensible rule is to treat the looped position as a high-risk trade rather than as savings, and to cap it at a share of the portfolio that can be lost without changing long-term plans. Diversifying across stablecoin collateral and SOL collateral, or across more than one lending market, can reduce single-protocol risk, but it also adds complexity and more positions to monitor. The [crypto glossary](/glossary) is a useful place to confirm terms like loan-to-value, health factor, and utilisation before putting capital at risk. Regular review matters too: a loop that was safe last week may be close to liquidation after a week of falling prices and rising borrow rates." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can explain a Kamino lending loop or a Jito liquid staking token in simple words before you risk any funds. Ask it to walk through an example loop step by step, or to turn the checklist in this article into a short research note you can review before opening a position." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is a Kamino lending loop?",
            a: "A lending loop supplies collateral, borrows against it, and redeposits the borrowed funds to increase exposure. Each loop raises both potential yield and liquidation risk.",
          },
          {
            q: "How does Jito liquid staking work?",
            a: "You stake SOL and receive a liquid token representing the staked position plus rewards. The token can be traded or used as collateral while the underlying SOL stays staked.",
          },
          {
            q: "What causes a looped position to be liquidated?",
            a: "Liquidation happens when collateral value falls relative to debt and crosses the protocol threshold. Liquidators then repay part of the debt and take collateral at a discount.",
          },
          {
            q: "Is looping suitable for beginners?",
            a: "Generally no. Looping combines leverage, variable borrow rates, and liquidation risk, so it suits traders who already understand lending markets and monitor positions actively.",
          }
        ],
      },
  ],
};
