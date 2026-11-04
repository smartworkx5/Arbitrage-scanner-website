import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "points-to-token-conversion-dilution-2026",
  title: "Points-to-Token Conversion: Why Your Points Are Worth Less Than Expected",
  description: "Points-to-Token Conversion dilutes early points as more users join. Learn the dilution math, why conversion rates disappoint, and how to set expectations.",
  keywords: [
      "Points-to-Token Conversion",
      "points conversion rate",
      "airdrop dilution",
      "points token value",
      "farming dilution math",
      "points program rewards"
  ],
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  readingMinutes: 9,
  category: "Markets",
  excerpt: "Points feel valuable until conversion day, when dilution shrinks each point's worth. This guide explains the dilution math and why points almost always convert below early expectations.",
  image: "/images/blog/points-to-token-conversion-dilution-2026.svg",
  blocks: [
      { type: "p", text: "Points-to-Token Conversion is the moment a farming programme turns accumulated points into real tokens, and it is also the moment many farmers discover their points are worth far less than they imagined. On Wednesday 4 November 2026, the US dollar to Pakistani rupee interbank rate stood at 276.60 buy and 277.10 sell, essentially unchanged, a stable backdrop that makes the contrast with points programmes sharper: while a currency rate barely moves in a day, a points conversion rate can collapse simply because more people joined the programme after you did. Dilution is not a malfunction or a betrayal; it is the arithmetic of dividing a fixed token allocation among a growing number of points. Understanding that arithmetic before you farm is what separates realistic expectations from disappointment." },
      { type: "h2", text: "The Dilution Formula, Plainly Stated" },
      { type: "p", text: "Conversion value per point equals the total tokens allocated to the points programme divided by the total points issued. If a project allocates 10 million tokens to a programme that issues 100 million points, each point converts to 0.1 tokens. If the programme later issues 500 million points against the same allocation, each point converts to 0.02 tokens, an 80 percent reduction that required no change in the project's plans. Early farmers often anchor on the first ratio they imagine, but the only ratio that matters is the final one, computed after all points are issued, and that ratio moves against early participants whenever later participants keep joining." },
      { type: "p", text: "Projects sometimes soften dilution with tiers, multipliers, or caps, but those mechanisms redistribute value rather than create it. A multiplier for early users raises their share at the expense of later users, which is fair in spirit but still leaves the total unchanged. Caps on points per user limit the largest farmers, which helps small participants, but they do not change the total-points denominator. Whatever the design, the fundamental constraint remains: a fixed allocation divided by more points means less per point, and no programme design escapes that arithmetic." },
      { type: "h2", text: "Why Expectations Overshoot Reality" },
      { type: "p", text: "Expectations overshoot for several predictable reasons. First, points balances feel large: holding millions of points suggests wealth, even when millions of points are normal in the programme. Second, early community chatter often quotes optimistic conversion guesses made before most points were issued, and those guesses circulate long after they become stale. Third, farmers compare their points to the token's hoped-for price rather than to a realistic launch price, compounding two optimistic assumptions at once. Fourth, programmes rarely publish running totals of points issued, so farmers cannot see dilution happening in real time and only discover it at conversion." },
      {
        type: "table",
        headers: ["Scenario", "Total points issued", "Tokens per 10,000 points"],
        rows: [
          ["Early programme, few users", "100 million", "1,000 tokens"],
          ["Mid programme, growing users", "250 million", "400 tokens"],
          ["Late programme, mass participation", "500 million", "200 tokens"],
          ["Viral programme, huge issuance", "1 billion", "100 tokens"]
        ],
      },
      { type: "p", text: "The table assumes a fixed 10 million token allocation and shows how the same 10,000-point balance shrinks from 1,000 tokens to 100 tokens as issuance grows tenfold. That tenfold swing is not a hypothetical edge case; viral programmes regularly grow issuance by far more than tenfold between launch and conversion. Any farmer who valued their points using the early ratio was overvaluing them by an order of magnitude, and the disappointment at conversion is the correction of that error, not a change in the project's generosity." },
      { type: "h2", text: "Other Forces That Shrink Conversion Value" },
      {
        type: "list",
        items: [
        "Sybil filtering removes some points, but also removes some claimants, with a net effect that is hard to predict in advance.",
        "Vesting on converted tokens delays selling, exposing farmers to price moves after conversion.",
        "Launch-day selling pressure from all converters at once can push the token price down quickly.",
        "Programme changes mid-campaign, such as new point sources, can inflate issuance without warning.",
        "Token price at launch may be far below the price farmers assumed when valuing their points."
        ],
      },
      {
        type: "callout",
        title: "Warning: points are not tokens and carry no guaranteed value",
        text: "Points programmes can change terms, cap rewards, or cancel conversions. Never spend real money or lock capital based on an assumed points value that the project has not guaranteed.",
        tone: "warning",
      },
      { type: "h2", text: "Setting Realistic Expectations Before You Farm" },
      { type: "p", text: "Before joining a points programme, estimate conversion under a diluted scenario, not an early one: assume total issuance grows several-fold, assume a modest launch price, and assume some vesting. If the programme still looks worthwhile under those assumptions, it is a reasonable use of time; if it only works under optimistic assumptions, it is a lottery ticket and should be treated as one. Track programme growth where possible, such as leaderboard totals or community-reported point supplies, and revise your estimate as issuance grows rather than clinging to your first guess." },
      { type: "p", text: "Finally, remember that points farming competes with simpler alternatives for your time and capital, and dilution is the reason many programmes lose that competition quietly. A programme that looked attractive at 100 million points may be a poor use of time at 1 billion points, and the disciplined farmer exits or scales back when the diluted math stops clearing, rather than farming harder to chase a shrinking per-point value. The [glossary](/glossary) defines dilution, vesting, and conversion, and the [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) explains how converted tokens price across venues at launch." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain points-to-token dilution math in simple words, or help you work through a conversion estimate under different issuance scenarios. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Why do points convert to fewer tokens than expected?",
            a: "Because a fixed token allocation is divided by total points issued, and issuance usually grows substantially after early users join, so each point's share shrinks by conversion day.",
          },
          {
            q: "Do early-user multipliers prevent dilution?",
            a: "No. Multipliers redistribute a fixed allocation toward early users, but they do not increase the total, so dilution still affects the programme as a whole.",
          },
          {
            q: "Can I predict my conversion rate in advance?",
            a: "Only approximately, by estimating total issuance at conversion and the allocated token pool. Use a diluted scenario rather than the earliest ratio for a realistic estimate.",
          },
          {
            q: "Should I keep farming when issuance keeps growing?",
            a: "Re-run the diluted conversion math. If the programme no longer clears your break-even under realistic assumptions, scaling back or stopping is the disciplined choice.",
          }
        ],
      },
  ],
};
