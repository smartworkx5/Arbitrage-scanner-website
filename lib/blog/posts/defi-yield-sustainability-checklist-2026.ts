import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "defi-yield-sustainability-checklist-2026",
  title: "DeFi Yield Sustainability Checklist: Spotting Unsustainable APYs",
  description: "Use this DeFi yield sustainability checklist to spot unsustainable APYs: revenue sources, token emissions, liquidity depth, and red flags before depositing.",
  keywords: [
      "DeFi Yield Sustainability Checklist",
      "unsustainable APY",
      "DeFi yield due diligence",
      "token emissions",
      "yield farming risks"
  ],
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "A triple-digit APY usually means someone is subsidising you, and subsidies end. This checklist helps you tell durable yield from a payout that cannot last.",
  image: "/images/blog/defi-yield-sustainability-checklist-2026.svg",
  blocks: [
      { type: "p", text: "The DeFi Yield Sustainability Checklist exists because the most dangerous number in crypto is a high APY with no explanation attached. A yield that looks generous may be paid from genuine revenue, such as borrower interest or trading fees, or it may be paid from newly minted tokens, venture subsidies, or deposits from later users. The first kind can last; the second kind lasts only until emissions slow, the subsidy budget runs out, or inflows stop. In late October 2026, with Bitcoin closing 28 October at $81,254 and total crypto market capitalisation near $2.69 trillion, plenty of protocols still advertise eye-catching rates, and the difference between a durable opportunity and a trap is usually visible to anyone who asks the right questions before depositing." },
      { type: "p", text: "This article turns those questions into a practical checklist you can run in under an hour. Work through it in order: revenue source, emission schedule, liquidity, contract and team risk, and exit terms. If a protocol fails an early check, there is rarely a reason to continue to the later ones. For background on how yields differ across venues, the [glossary](/glossary) defines APY, APR, and emissions, and the mechanics of [triangular arbitrage](/guides/triangular-arbitrage) illustrate how genuine trading revenue is created, as opposed to rewards printed from nothing." },
      { type: "h2", text: "Check One: Where Does the Yield Actually Come From" },
      { type: "p", text: "Every sustainable yield has a payer. In lending markets, borrowers pay interest, and that interest flows to lenders minus a protocol cut. In decentralised exchanges, traders pay fees, and those fees flow to liquidity providers. In staking, protocol revenue or inflation set by transparent rules funds the reward. If you cannot name the payer and explain why they keep paying, you have not found a yield; you have found a promise. Ask for the revenue figure: how much did the protocol earn in fees or interest over the last month, and how does that compare with how much it paid out in rewards? A protocol paying out far more than it earns is subsidising the difference, and subsidies are a marketing budget, not a business model." },
      { type: "p", text: "Be especially careful with yields denominated in a reward token rather than in the asset you deposited. A farm advertising a high rate paid in its own governance token is really paying you in a volatile asset whose price depends on continued demand. If the token falls by half, your real yield halves too, even though the advertised rate never changed. Convert the reward into the deposit asset at current prices before comparing farms, and ask what would happen to your return if the reward token fell sharply. Durable farms survive that question; subsidised ones do not." },
      { type: "h2", text: "Check Two: Read the Emission Schedule" },
      { type: "p", text: "Token emissions are the most common source of unsustainable yield. A protocol that mints millions of new tokens to pay farmers dilutes every holder, including the farmers themselves, so the headline rate overstates the real return. Find the emission schedule in the documentation: how many tokens are minted per day or per block, when emissions decline, and what the total supply cap is, if any. A schedule with a steep early cliff, where rewards collapse after a few months, tells you the current rate is a launch promotion. A schedule that declines gradually and is funded by protocol revenue is a healthier sign." },
      { type: "p", text: "Also check who receives emissions besides farmers. If insiders, early investors, or the team hold large allocations that unlock soon, their selling can pressure the reward token price just as your rewards arrive. Vesting schedules and unlock calendars are public for most serious projects, and a large unlock shortly after you deposit is a concrete reason to wait. The pattern to fear is a high yield funded by emissions, paid in a token with heavy insider selling ahead: in that setup, farmers are effectively exit liquidity, whether or not anyone intended it that way." },
      { type: "h2", text: "Check Three: Liquidity Depth and Lockups" },
      { type: "p", text: "A yield you cannot exit is not a yield; it is a locked donation. Check the liquidity of the pool or market where your deposit sits: total value locked, daily trading volume, and the depth available at prices near the current one. Thin pools produce high percentage yields precisely because few people are willing to take the risk, and exiting a thin pool during stress can cost more in slippage than months of yield earned. Also read the lockup terms. Some farms require deposits to be locked for weeks or months, or charge heavy early-exit penalties, which means you cannot leave when the yield collapses or the token falls." },
      { type: "p", text: "Pay attention to concentration as well. If a handful of wallets supply most of a pool's liquidity, their exit can change the yield and the price dramatically. Block explorers make this check straightforward: look at the top holders of the LP or vault token and the distribution of the reward token. A healthy pool has broad participation; a pool dominated by a few addresses is fragile, and its advertised rate reflects that fragility rather than generosity. The same logic applies to the protocol's total value locked: a sudden spike in deposits often signals a promotional rate that will normalise downward as more capital arrives." },
      { type: "h2", text: "Check Four: Contracts, Team, and Counterparty Risk" },
      { type: "p", text: "Sustainable yield still requires safe custody of your capital. Check whether the contracts have been audited, by whom, and whether the audit covered the exact version currently deployed. An audit from years ago on an earlier version is not coverage for today's code. Check upgrade controls: if a single key or small multisig can change strategy logic or drain funds, that is a centralisation risk worth pricing. Look for bug bounties, incident history, and how the team handled past problems; a team that disclosed and fixed an issue transparently is a better sign than a team with no history at all, since every long-lived protocol eventually faces one." },
      { type: "p", text: "Team transparency matters in proportion to the risk you take. Anonymous teams are common in DeFi and are not automatically disreputable, but anonymity removes accountability, so it should be offset by stronger audits, longer track records, and timelocks on upgrades. Where a protocol is backed by identifiable people or firms with reputations at stake, that accountability is a real, if imperfect, safeguard. Combine this with the macro backdrop: with the Federal Reserve holding rates at 3.75 to 4.00 percent after its 28 October 2026 decision, traditional yields are meaningful again, so a DeFi rate must justify its extra risk against a safer baseline rather than against zero." },
      {
        type: "list",
        items: [
        "Revenue test: payouts should be covered by fees, interest, or real protocol income.",
        "Emission test: declining, transparent schedules beat steep cliffs and insider unlocks.",
        "Liquidity test: deep pools and no punitive lockups let you exit at a fair price.",
        "Contract test: current audits, timelocked upgrades, and honest incident history.",
        "Comparison test: convert rewards to the deposit asset before comparing rates."
        ],
      },
      { type: "h2", text: "Putting the Checklist to Work" },
      { type: "p", text: "Run the checklist before every new deposit, and re-run it periodically for positions you already hold, because yields that were sustainable at launch can become unsustainable as emissions end or liquidity thins. Score each check simply: pass, caution, or fail. A single fail on revenue source or contract safety is enough to walk away, while a cluster of cautions should at least reduce your position size. Keep a short note for each farm you use, recording the yield source, emission schedule, and exit terms you found; when the rate later changes, that note tells you whether the change was expected or a warning sign." },
      { type: "p", text: "Finally, remember that sustainability is about the protocol, not the APY display. Two farms can show the same rate while one is funded by borrower interest and the other by token printing, and only the first deserves a long-term allocation. Traders who compare venues often study [cex versus dex arbitrage](/guides/cex-vs-dex-arbitrage) to see how real price differences create real revenue, and that distinction between earned revenue and printed rewards is the heart of this checklist. A modest yield from a genuine source, held in a deep pool with clean contracts, beats a spectacular yield from a subsidy that ends the week after you deposit." },
      {
        type: "callout",
        title: "Risk warning",
        text: "High APYs are often a warning sign, not an opportunity. Never deposit based on a headline rate alone, never lock funds you may need urgently, and treat unaudited farms paying yields in their own token as speculative.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, built to explain complicated topics in plain language and help you organise research. If a protocol's documentation is long and technical, you can ask Muse AI to summarise its yield source and emission schedule in simple words, giving you a head start on this checklist." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What makes a DeFi yield unsustainable?",
            a: "Yields paid mainly from token emissions or subsidies, rather than from borrower interest, trading fees, or real protocol revenue, usually fall when emissions slow or the reward token drops.",
          },
          {
            q: "Is a high APY always a red flag?",
            a: "Not always, but it demands scrutiny. Check the revenue source, emission schedule, liquidity depth, and contract audits before treating a high rate as genuine.",
          },
          {
            q: "Why should I convert rewards to the deposit asset?",
            a: "Because a rate paid in a volatile reward token overstates your return if that token falls. Converting at current prices shows what you actually earn in the asset you deposited.",
          },
          {
            q: "How often should I re-check a farm I already use?",
            a: "Periodically, and whenever the rate changes sharply. Emissions end, liquidity thins, and contracts upgrade, so a farm that passed at launch can fail later.",
          }
        ],
      },
  ],
};
