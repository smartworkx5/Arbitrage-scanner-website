import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "luna-collapse-arbitrage",
  title: "LUNA Collapse: Arbitrage Lessons",
  description: "The LUNA collapse wiped out billions in days. What broke, who got hurt, and the arbitrage and risk lessons traders should still apply for traders in 2026.",
  keywords: [
      "LUNA collapse",
      "Terra Luna crash lessons",
      "UST depeg",
      "LUNA arbitrage lessons",
      "Terra collapse 2022",
      "crypto crash lessons"
  ],
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "The Terra/LUNA collapse of 2022 was crypto's most expensive lesson in reflexive design. Here is what broke, who got hurt, and what arbitrage traders must take from it.",
  image: "/images/blog/luna-collapse-arbitrage.svg",
  blocks: [
      { type: "h2", text: "LUNA Collapse: What Actually Broke" },
      { type: "p", text: "The LUNA collapse of May 2022 remains the most instructive disaster in modern crypto, and its arbitrage lessons still apply in 2026. The system was elegant on paper: TerraUSD (UST), a stablecoin, was meant to hold a dollar peg through an algorithmic link to LUNA. If UST traded above a dollar, traders could burn LUNA to mint UST and sell it for a profit; if UST traded below a dollar, traders could buy cheap UST, burn it for LUNA, and sell the LUNA. That burn-and-mint arbitrage was supposed to keep the peg stable. It worked while confidence held. It failed catastrophically when confidence broke, because the mechanism was reflexive: falling UST led to more LUNA being minted, which crashed LUNA's price, which destroyed confidence in UST, which led to more redemptions, which minted more LUNA. The death spiral took both assets to near zero in days and wiped out tens of billions of dollars of value. As of Oct 16, 2026, BTC trades near $82,200 and the market has moved on — but the mechanism that killed Terra is still the mechanism behind every algorithmic design that promises stability without real collateral." },
      { type: "p", text: "The human cost was severe. Retail investors in South Korea, where Terraform Labs was founded, were hit especially hard, and the collapse triggered investigations, lawsuits, and eventually criminal proceedings. Institutional holders — funds, market makers, and protocols that had parked capital in UST for its high yields — also took heavy losses. The Anchor protocol, which offered yields near 20% on UST deposits, had drawn in billions of dollars by paying returns that were not supported by real economic activity. When the peg broke, Anchor depositors discovered that a yield is only as safe as the asset paying it. The lesson is brutal and general: if a yield looks too good to be true relative to the risk, it is compensation for risk you have not yet understood. In 2026, with US CPI at 3.7% year over year and the FOMC decision due Oct 28, yields across all markets deserve the same scepticism." },
      { type: "h2", text: "The Arbitrage That Was Supposed to Save the Peg" },
      { type: "p", text: "The cruel irony of the LUNA collapse is that arbitrage was the stabilizer that became the accelerant. In normal conditions, the UST-LUNA arbitrage kept the peg tight: traders profited from small deviations, and their trading pushed the price back to a dollar. But the mechanism assumed that LUNA would always have enough value to absorb UST redemptions. Once UST redemptions exceeded LUNA's market value, the arbitrage loop minted LUNA faster than the market could absorb it, and each round of minting diluted LUNA further. Arbitrageurs who kept running the loop — buying discounted UST, minting LUNA, selling LUNA — were acting rationally on each individual trade while collectively destroying the system. This is the core lesson for arbitrage traders: a mechanism that is stabilizing at small scale can be destabilizing at large scale, especially when the underlying asset's value depends on confidence. Any arbitrage strategy that relies on a reflexive peg, an uncollateralized promise, or a yield that depends on new money coming in should be treated as a trade with a hard expiry, not as a safe source of income." },
      {
        type: "table",
        headers: ["Lesson", "What happened in LUNA", "Rule for 2026"],
        rows: [
          ["Reflexive pegs break", "Minting diluted LUNA, killing confidence", "Avoid uncollateralized algorithmic pegs"],
          ["Yield is risk", "Anchor's ~20% yield was unsustainable", "Ask where the yield actually comes from"],
          ["Concentration kills", "Too much capital in one system", "Cap exposure to any single protocol"],
          ["Exit liquidity vanishes", "Sellers could not exit at any price", "Assume you cannot exit during a spiral"],
          ["Audits are not guarantees", "Marketing outran verification", "Verify reserves and code yourself"]
        ],
      },
      { type: "h2", text: "Who Got Hurt — and Why It Was Predictable" },
      {
        type: "list",
        items: [
        "Retail savers who treated UST as a dollar, because it was marketed as stable and paid high yield.",
        "Yield farmers who parked capital in Anchor, because the 20% return looked like free money.",
        "Protocols that held UST as treasury or collateral, because one asset's failure cascaded into others.",
        "Arbitrageurs who ran the burn-mint loop too long, because each trade looked profitable until the system died.",
        "Counterparties who lent against LUNA or UST, because collateral that can go to zero is not collateral."
        ],
      },
      { type: "p", text: "The predictability matters. Critics had warned for months that the design was fragile: the yield was subsidized, the peg depended on confidence, and the minting mechanism had no circuit breaker. The warnings were dismissed because the system was working — until it was not. That pattern repeats in every market: the loudest warnings come while the trade is still profitable, and they are easiest to ignore precisely when they matter most. In 2026, the same test applies to any yield product, algorithmic stablecoin, or reflexive protocol: if the system's survival depends on confidence and new inflows, it is fragile, no matter how long it has survived so far. Gold, trading near $4,155 per ounce as of Oct 16, 2026, is a useful contrast — it has no yield, no mechanism, and no issuer, and that is exactly why it does not have a death spiral." },
      { type: "h2", text: "Arbitrage Rules That Survived the Collapse" },
      { type: "p", text: "The LUNA collapse did not kill arbitrage — it clarified which arbitrage is sound. Sound arbitrage exploits price differences between assets that exist independently of the trade: BTC on two exchanges, a futures contract and its spot market, a tokenized asset and its underlying. Fragile arbitrage exploits a mechanism that only works if everyone keeps believing in it. The practical rules that survived are simple. First, never treat a peg as a fact — treat it as a hypothesis that can break. Second, cap exposure to any single protocol, stablecoin, or mechanism, because concentration turns a bad day into a ruinous one. Third, demand real collateral: if the asset backing your trade is itself the thing being arbitraged, you are standing inside the loop. Fourth, have an exit plan that works when liquidity disappears, because the moment you most need to exit is the moment exits close. For sound arbitrage frameworks, see [cross-exchange arbitrage](/guides/cross-exchange-arbitrage), [triangular arbitrage](/guides/triangular-arbitrage), and our [USDC depeg case study](/blog)." },
      {
        type: "callout",
        title: "Risk note",
        text: "Any strategy that depends on a peg, a subsidized yield, or a reflexive mechanism can fail suddenly and completely. Never hold more in such a system than you can afford to lose in full.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can help you learn from the LUNA collapse by explaining the death-spiral mechanism in simple words and by summarizing the warning signs to look for in any yield product." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What caused the LUNA collapse?",
            a: "UST lost its dollar peg, triggering a reflexive loop: redemptions minted more LUNA, crashing LUNA's price, which destroyed confidence in UST and caused more redemptions. Both assets went to near zero within days.",
          },
          {
            q: "Was the LUNA collapse predictable?",
            a: "Many critics warned that the design was fragile — the yield was subsidized and the peg depended on confidence. The warnings were ignored because the system was still profitable until it broke.",
          },
          {
            q: "What is the main arbitrage lesson from LUNA?",
            a: "Arbitrage that stabilizes a system at small scale can destroy it at large scale when the mechanism is reflexive. Never treat a peg as a fact, and never rely on a mechanism that only works while everyone believes in it.",
          },
          {
            q: "Are algorithmic stablecoins safe now?",
            a: "No design is safe by label. Judge any stablecoin by its collateral, its redemption mechanics, its audit quality, and whether it survives stress — not by its marketing.",
          }
        ],
      },
  ],
};
