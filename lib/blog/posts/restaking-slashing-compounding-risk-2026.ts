import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "restaking-slashing-compounding-risk-2026",
  title: "Restaking's Compounding Risk: One Stake, Many Slashing Conditions",
  description: "Restaking's compounding risk explained: how one stake under many AVS slashing rules multiplies exposure, and how stakers can limit correlated losses today.",
  keywords: [
      "Restaking's Compounding Risk",
      "restaking slashing",
      "AVS slashing conditions",
      "correlated slashing",
      "EigenLayer risk",
      "staking risk management"
  ],
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
  readingMinutes: 8,
  category: "Risk",
  excerpt: "One stake, many rulebooks. Restaking multiplies slashing exposure, and the losses can correlate in exactly the wrong market conditions.",
  image: "/images/blog/restaking-slashing-compounding-risk-2026.svg",
  blocks: [
      { type: "p", text: "Restaking's Compounding Risk is the part of the restaking story that headline yields usually hide: on Tuesday 3 November 2026, BTC traded around $76,800, down about 2% in 24 hours, ETH sat around $2,255, down about 1%, and the Fear and Greed Index read 26, a reminder that risk shows up fastest when sentiment is already fearful. In ordinary staking, your ETH answers to one rulebook: Ethereum's. In restaking, the same stake can answer to five, ten, or more rulebooks at once, one per AVS supported. Each rulebook can slash independently, so a single operator failure can trigger penalties across several services at the same time. Understanding that multiplication effect is essential before chasing stacked yields." },
      { type: "h2", text: "How one failure becomes many penalties" },
      { type: "p", text: "Slashing on Ethereum punishes provable misbehaviour, such as signing two conflicting blocks, and downtime can cost smaller inactivity penalties. AVSs add their own conditions on top: failing to keep data available, missing a relay deadline, submitting a wrong proof, or going offline during a critical window. Because the same stake backs all of them, one root cause, such as a server outage, a bad software upgrade, or a compromised key, can breach several AVS conditions simultaneously. The penalties do not wait in line; they stack. An operator outage that would cost a small penalty in plain staking can therefore become a meaningful loss in restaking, even though nothing about the underlying ETH changed." },
      { type: "h2", text: "Correlation is the real danger" },
      { type: "p", text: "The deepest risk is correlation. AVS failures are not independent coin flips. Many operators run the same cloud providers, the same client software, and the same monitoring setups, so one widespread outage can slash many operators at once. Market stress makes it worse: when prices fall sharply, operators under financial pressure may cut corners, and forced selling by slashed stakers can push prices lower. Restaking also concentrates risk in popular operators, since stakers rationally delegate to the biggest names, which means a single large operator's failure affects a large share of restaked capital. Diversifying across operators helps, but only if they genuinely run different infrastructure; five operators on the same cloud region are not five independent bets. A plain-language grounding in the core terms is available in the [glossary](/glossary)." },
      { type: "h2", text: "What stakers can actually control" },
      { type: "p", text: "Stakers cannot remove restaking risk, but they can shape it. First, limit how many AVSs any one stake supports, and favour AVSs whose slashing rules you have actually read. Second, spread stake across operators with genuinely different setups rather than concentrating on the largest name. Third, treat AVS reward tokens as volatile income, not as guaranteed yield, and check whether rewards are paid in liquid assets or in tokens that may be hard to sell. Fourth, keep position sizes modest relative to your total portfolio, because slashing losses are permanent capital losses, not temporary drawdowns. Finally, remember withdrawal queues: in a crisis, everyone heads for the exit at once, and unstaking delays can leave you exposed longer than planned." },
      {
        type: "list",
        items: [
        "Cap the number of AVSs per stake so one outage cannot trigger many penalties at once.",
        "Diversify across operators with different infrastructure, not just different names.",
        "Read slashing conditions before opting in, especially for young or lightly adopted AVSs.",
        "Size restaking positions so a worst-case slash does not damage your whole portfolio."
        ],
      },
      { type: "h2", text: "A simple way to think about stacked yield" },
      { type: "p", text: "A useful mental model is to treat each AVS as a separate insurance policy you are writing: you collect a premium (the reward) and you accept a payout obligation (the slash) if a defined event happens. Writing one policy is a modest risk. Writing ten policies on the same capital, all exposed to the same storm, is a much bigger risk than ten times one policy, because the storm can trigger them all together. When an AVS offers a very high reward, ask what event would trigger its slash and how likely that event is, rather than annualising the reward and stopping there. If the answer is unclear, that uncertainty is itself a reason to pass or to size small. For traders comparing venues and strategies, the [best crypto arbitrage scanners](/best-crypto-arbitrage-scanners) page offers a practical starting point." },
      {
        type: "callout",
        title: "Risk warning",
        text: "Slashing losses in restaking are permanent and can stack across AVSs from a single operator failure. Never restake your full stake, and never treat stacked AVS rewards as safe income.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help with a topic like restaking risk by explaining slashing in simple words, comparing two AVS rulebooks side by side, or drafting a research checklist of questions to ask before you delegate to any operator. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Why is restaking risk compounding rather than additive?",
            a: "Because one root cause, such as an operator outage, can breach several AVS rulebooks at once, so penalties stack simultaneously instead of occurring as separate, independent events.",
          },
          {
            q: "Can I lose my whole stake to slashing?",
            a: "Total loss from slashing alone is unlikely, since slashes are usually partial, but stacked partial slashes plus smart contract or operator failures can still produce a large permanent loss.",
          },
          {
            q: "Does delegating to a big operator remove slashing risk?",
            a: "No. Large operators are usually more reliable, but concentration means their failure affects more capital, and delegation never transfers the slashing loss away from the staker.",
          },
          {
            q: "How can I reduce correlated slashing risk?",
            a: "Support fewer AVSs per stake, spread across operators with genuinely different infrastructure, and keep restaking positions modest relative to your portfolio.",
          }
        ],
      },
  ],
};
