import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "arbitrage-drawdowns",
  title: "Crypto Arbitrage Drawdowns: When Edges Compress for Months",
  description: "Crypto arbitrage drawdowns: why edges compress for months, how to tell regime change from bad luck, and the capital rules for surviving lean periods in 2026.",
  keywords: [
      "arbitrage drawdowns",
      "crypto arbitrage edge compression",
      "arbitrage losing months",
      "crypto market neutral drawdown",
      "arbitrage regime change"
  ],
  datePublished: "2026-10-11",
  dateModified: "2026-10-11",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "Arbitrage edges do not disappear overnight — they compress for months. How to distinguish a regime change from bad luck, and the capital rules for surviving lean periods.",
  image: "/images/blog/arbitrage-drawdowns.svg",
  blocks: [
      { type: "p", text: "**Arbitrage drawdowns** are the industry's open secret: market-neutral does not mean loss-free, and edges do not vanish in a day — they compress slowly over months until the strategy that paid your bills barely covers its costs. If you trade arbitrage in October 2026, you are living inside this phenomenon. Bitcoin sits near $82,950–$83,015 as of October 11, 2026 — about 34% below its October 2025 all-time high of $126,208.50 — drifting in a choppy range. Gold, at roughly $4,193.76 per ounce, is about 24% below its January 2026 high. Sideways, professionalized markets are where retail arbitrage edges go to compress. Understanding drawdown mechanics — and the difference between bad luck and regime change — is what separates traders who survive lean years from those who quit at the bottom." },
      { type: "p", text: "A drawdown in arbitrage looks different from a drawdown in directional trading. There is no single catastrophic day; instead, monthly returns decay: 3% becomes 1.5% becomes 0.4% becomes slightly negative after fees. The psychological trap is that nothing feels broken — each trade still works mechanically, the scanner still flashes spreads — but the aggregate no longer compensates for the capital and effort deployed. Traders respond by sizing up to recover old income levels, which is precisely how a gentle edge compression becomes a real capital loss." },
      { type: "h2", text: "Why Edges Compress: The Four Forces" },
      { type: "p", text: "Edge compression has structural causes. First, **competition**: profitable, visible spreads attract professional market makers with better latency, lower fees, and more capital — the spread you found is the spread they now harvest in milliseconds. Second, **market maturation**: as venues improve connectivity and liquidity deepens, the fragmentation that creates cross-exchange gaps narrows. Third, **volatility regimes**: arbitrage feeds on movement — funding rates, basis, and spreads all fatten when markets trend or panic. In calm, range-bound stretches like much of 2026, the raw material of edge is scarce. Fourth, **fee and cost creep**: spreads compress while fees do not, so net edges decay faster than gross ones." },
      { type: "p", text: "None of these reverse quickly. Competition does not leave; matured markets do not un-mature; volatility returns on its own schedule. This is why drawdown discipline matters more in arbitrage than almost any other strategy: the lean period is measured in quarters, not weeks. Our [profitability analysis](/blog/is-crypto-arbitrage-profitable-2026) puts honest numbers on what edges look like in the current environment — read it before assuming historical returns still apply." },
      { type: "h2", text: "Bad Luck or Regime Change? How to Tell" },
      {
        type: "callout",
        title: "The costliest mistake is misdiagnosis",
        text: "Treating regime change as bad luck leads to sizing up into a permanently thinner edge. Treating bad luck as regime change leads to abandoning a working strategy at the bottom. You need a diagnostic, not a feeling.",
        tone: "warning",
      },
      { type: "p", text: "Distinguishing noise from regime change requires data, not intuition. Keep a monthly log of: gross edge captured per unit of capital, average spread size on your traded pairs, win rate and average holding time, and fee drag as a percentage of gross. A bad-luck stretch shows normal spreads with abnormal outcomes — a few failed transfers, one venue outage, an unlucky liquidation. A regime change shows the inputs themselves decaying: average spreads trending down over 3–6 months, holding times lengthening as fills get harder, fee drag rising as a share of shrinking gross. Three to six months of deteriorating inputs is a regime signal; three bad weeks is weather." },
      {
        type: "table",
        headers: ["Signal", "Bad luck (weather)", "Regime change (climate)"],
        rows: [
          ["Duration", "Days to weeks", "3+ months of decay"],
          ["Spread sizes", "Normal; outcomes unlucky", "Trending down structurally"],
          ["Cause", "Identifiable events (outage, failed transfer)", "Competition, maturation, low volatility"],
          ["Correct response", "Hold size; fix the operational issue", "Cut size; adapt strategy mix"]
        ],
      },
      { type: "p", text: "The diagnostic matters because the responses are opposites. Weather calls for patience and operational fixes; climate calls for smaller size and strategic adaptation — adding a [funding rate](/guides/funding-rate-arbitrage) sleeve, exploring new venue pairs, or simply accepting lower returns on reduced capital. Sizing up into climate is the classic blow-up path: it converts a gentle income decline into amplified losses the moment volatility returns." },
      { type: "h2", text: "Capital Rules for Lean Periods" },
      { type: "p", text: "Surviving compression is a capital-management problem. First, **never spend edge income as if it were permanent** — bank a portion of peak-period profits as a reserve specifically for lean quarters. Second, **cut size mechanically as edges thin**: if your average net spread halves, your position sizes should shrink, not grow, because the return-per-unit-risk has deteriorated. Third, **reduce costs aggressively**: renegotiate fee tiers, consolidate venues, pause strategies whose net edge has gone negative — a strategy earning 0.1% gross against 0.15% costs is not a strategy, it is a donation. Fourth, **keep learning while earning less**: lean periods are when professionals research the next edge, paper-trade new approaches, and upgrade infrastructure." },
      {
        type: "list",
        items: [
        "Bank 20–30% of peak-period profits as a lean-period reserve; do not lifestyle-inflate on good quarters.",
        "Cut position sizes as average spreads decay — never size up to chase old income.",
        "Kill strategies whose net edge (after all fees) has been negative for two consecutive months.",
        "Use lean periods for research: new venues, new strategy sleeves, better tooling.",
        "Set a personal stop: a maximum acceptable months-of-drawdown before you step back and reassess everything."
        ],
      },
      { type: "h2", text: "The Long View: Edges Migrate, They Rarely Die" },
      { type: "p", text: "Here is the encouraging part of the history: arbitrage edges do not generally disappear — they migrate. When cross-exchange spot spreads compressed, funding rate trades flourished; when those crowded, basis and options-based edges opened; when CEX spreads thinned, [CEX vs DEX gaps](/guides/cex-vs-dex-arbitrage) widened. Each migration rewarded traders who had capital intact and skills current — which is exactly what drawdown discipline buys you. The traders who survive compression are not the ones who predicted it; they are the ones whose [risk policy](/blog/arbitrage-risk-management) kept them solvent until the next edge arrived." },
      { type: "p", text: "If you are entering arbitrage in late 2026, calibrate expectations to the environment, not to 2021 stories. Start with [minimum viable capital](/blog/crypto-arbitrage-minimum-capital), measure your true net edge monthly, and treat the first year as tuition toward a durable operation. Lean markets forge the disciplined traders who thrive when volatility returns — and it always, eventually, returns." },
      {
        type: "faq",
        items: [
          {
            q: "What is edge compression in crypto arbitrage?",
            a: "The gradual decay of arbitrage profitability as competition, market maturation, low volatility, and fee drag shrink spreads over months. Gross edges fall while costs stay fixed, so net returns decay faster — turning a working strategy into one that barely covers its costs.",
          },
          {
            q: "How do I know if my arbitrage drawdown is bad luck or regime change?",
            a: "Track monthly inputs: average spread size, holding times, and fee drag. Bad luck shows normal spreads with unlucky outcomes over days to weeks; regime change shows the inputs themselves decaying over 3–6 months. The responses are opposites — patience versus smaller size and strategic adaptation.",
          },
          {
            q: "Should I increase position size during an arbitrage drawdown?",
            a: "No — sizing up to recover old income levels is the classic path from gentle edge compression to real capital loss. If average net spreads have halved, position sizes should shrink, because return-per-unit-risk has deteriorated. Cut size mechanically as edges thin.",
          },
          {
            q: "Do arbitrage edges ever come back after compressing?",
            a: "Historically edges migrate rather than die: as one type compresses, others open — funding trades, basis trades, CEX-DEX gaps. Traders who survive lean periods with capital intact and skills current are positioned to capture the next edge when volatility returns.",
          }
        ],
      },
  ],
};
