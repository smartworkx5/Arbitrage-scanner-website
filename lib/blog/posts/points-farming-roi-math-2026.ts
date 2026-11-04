import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "points-farming-roi-math-2026",
  title: "Points Farming ROI Math: When the Gas and Fees Exceed the Reward",
  description: "Points Farming ROI math made simple: add gas, bridge fees, and time costs, then compare against realistic token values to find your true break-even point.",
  keywords: [
      "Points Farming",
      "points farming ROI",
      "farming break-even",
      "gas fees farming",
      "airdrop points value",
      "crypto farming costs"
  ],
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Points farming looks free until you add up gas, bridge fees, and hours of attention. This guide walks through the break-even calculation so you can tell a profitable farm from an expensive hobby.",
  image: "/images/blog/points-farming-roi-math-2026.svg",
  blocks: [
      { type: "p", text: "Points Farming is the habit of completing on-chain actions to earn points that may later convert into tokens, and its real cost hides in small, repeated charges that are easy to ignore one at a time. On Wednesday 4 November 2026, Ether traded around $2,249 to $2,290, and every transaction on Ethereum mainnet still carried a gas cost that adds up across dozens of farming actions, while Binance's $6.3 billion theft on 29 October and $4.72 billion in net withdrawals since reopening reminded traders that platform and custody risks also belong in any cost calculation. A farming strategy that earns points worth less than the gas, bridge fees, and time spent producing them is not an investment; it is a slow loss disguised as progress. The break-even calculation below makes that judgement explicit before you commit." },
      { type: "h2", text: "The Full Cost of a Farming Position" },
      { type: "p", text: "Start by listing every cost category, not just gas. Direct costs include transaction fees on each action, bridge fees when moving assets between chains, swap slippage when entering and exiting positions, and any protocol fees charged by the platforms you farm. Indirect costs matter too: capital locked in a farming position earns nothing elsewhere, so the yield you forgo is a real cost, and your time has value even if you enjoy the activity. A farm that requires daily check-ins for three months consumes hours that could have gone to research, work, or rest, and honest accounting includes that time at some modest rate." },
      { type: "p", text: "The most common accounting error is counting only the cheapest transactions and forgetting the expensive ones. Bridging assets, claiming rewards, and exiting positions often cost several times more than routine farming actions, and those lump sums arrive exactly when you can least avoid them. Write down the full sequence of actions a farm requires from entry to exit, attach a realistic fee to each step, and total them before you start. If the project later adds steps, update the total; a farm whose cost keeps growing is a farm whose break-even keeps moving away from you." },
      { type: "h2", text: "Break-Even: A Worked Calculation" },
      { type: "p", text: "Break-even is the token value at which your farming rewards exactly cover your total costs. The formula is simple: add all direct costs, add the value of forgone yield on locked capital, add a modest value for your time, and divide by the number of tokens you realistically expect to receive. That expected token count is the hardest input, because points-to-token conversion rates are usually unknown until launch, and dilution can shrink them sharply. Use a range, not a single optimistic number: a pessimistic case, a middle case, and an optimistic case, and require the middle case to clear break-even before you commit." },
      {
        type: "table",
        headers: ["Cost item", "Example amount", "Notes"],
        rows: [
          ["Gas across 60 actions", "$90", "Varies sharply by chain and congestion"],
          ["Bridge fees, two crossings", "$25", "Often higher during busy periods"],
          ["Swap slippage, entry and exit", "$15", "Worse in thin pools"],
          ["Forgone yield on locked capital", "$30", "Three months at a modest alternative rate"],
          ["Time, 10 hours at $10 per hour", "$100", "Use your own honest rate"],
          ["Total cost", "$260", "Break-even token value must exceed this"]
        ],
      },
      { type: "p", text: "If that farm realistically yields 500 tokens, break-even is about $0.52 per token. If it yields 100 tokens, break-even jumps to $2.60, a price many farm tokens never reach. That sensitivity is the point: small changes in expected token count move break-even dramatically, so any farm whose token count depends on unknown conversion rates carries wide uncertainty. Farms that look attractive under optimistic assumptions often fail under middle-case assumptions, and the middle case is the one to trust." },
      { type: "h2", text: "When Farming Stops Being Worth It" },
      {
        type: "list",
        items: [
        "Gas costs rise above the value of points earned in the same period, turning each action into a net loss.",
        "The project keeps adding required actions, raising total cost without raising expected rewards.",
        "Your locked capital grows while alternative yields elsewhere improve, increasing forgone yield.",
        "Conversion terms stay vague late into the campaign, widening the uncertainty around token count.",
        "You are farming mainly from habit or sunk cost rather than a fresh calculation that still clears break-even."
        ],
      },
      {
        type: "callout",
        title: "Warning: sunk cost is not a reason to keep farming",
        text: "Money and time already spent cannot be recovered by spending more. If a fresh break-even calculation no longer clears, stopping is the rational move, even after months of farming.",
        tone: "warning",
      },
      { type: "h2", text: "Practical Rules for Farming Profitably" },
      { type: "p", text: "Favour farms on low-fee chains or layer-2 networks where gas is a small fraction of expected rewards, and batch actions where the protocol allows it rather than transacting daily out of habit. Keep a simple spreadsheet of costs as you go, so the break-even figure stays current instead of living in your head as an optimistic guess. Set a cost ceiling in advance: a maximum total spend beyond which you stop regardless of how many points you hold. That ceiling converts an open-ended hobby into a bounded experiment with a defined downside." },
      { type: "p", text: "Finally, compare farming honestly against simpler alternatives. Sometimes holding an asset, providing liquidity elsewhere, or simply not participating produces a better risk-adjusted outcome than months of farming for an uncertain token. Farming is worthwhile when the middle-case break-even clears comfortably, the time cost is acceptable, and the project is credible. When any of those fail, the best farming decision is to skip it. The [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) shows how traders compare returns across venues, and the [glossary](/glossary) defines gas, slippage, and yield in plain terms." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can help you lay out a points farming break-even calculation, or explain gas, slippage, and forgone yield in simple words. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What costs should I include in points farming ROI?",
            a: "Include gas, bridge fees, swap slippage, protocol fees, forgone yield on locked capital, and a modest value for your time. Leaving any of these out understates true cost.",
          },
          {
            q: "How do I estimate tokens from points before launch?",
            a: "You usually cannot know exactly, so use a range: pessimistic, middle, and optimistic token counts. Require the middle case to clear break-even before committing.",
          },
          {
            q: "Are low-fee chains better for points farming?",
            a: "Often yes, because gas is a smaller share of expected rewards. But chain choice should not override project credibility; a cheap farm on a weak project is still a weak farm.",
          },
          {
            q: "When should I stop farming a project?",
            a: "Stop when a fresh break-even calculation no longer clears, when costs keep rising without higher expected rewards, or when you hit a pre-set spending ceiling.",
          }
        ],
      },
  ],
};
