import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "defi-lending-utilization-curves-2026",
  title: "Utilization Curves: Why DeFi Borrow Rates Jump Suddenly",
  description: "DeFi borrow rates can sit calm for weeks, then spike in hours. Learn how kinked utilization curves work and what the pool-full moment means for borrowers.",
  keywords: [
      "Utilization Curves",
      "DeFi borrow rates explained",
      "kinked interest rate model",
      "lending pool utilization",
      "DeFi lending risk",
      "borrow APY spike"
  ],
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readingMinutes: 10,
  category: "Basics",
  excerpt: "A lending pool's borrow rate is not set by a committee but by a curve tied to how full the pool is. This guide explains kinked rate models and the moment rates jump.",
  image: "/images/blog/defi-lending-utilization-curves-2026.svg",
  blocks: [
      { type: "p", text: "Utilization Curves explain one of the most confusing experiences in decentralised finance: borrowing at a comfortable 4% on Monday and waking up to 40% on Thursday, with nothing obviously changing about your loan. Data as of 2 Nov 2026, BTC traded at about $78,400, up about 1% in 24 hours, and ETH traded near $2,280, up about 1%, while the Fear and Greed Index sat at 37, a fearful backdrop in which borrowers often rush to add collateral or repay loans at exactly the same time. That rush is the story of the utilization curve. A lending pool holds deposits from lenders and lends them to borrowers, and the interest rate is set automatically by how much of the pool is currently lent out, a ratio called utilization. When the pool is half empty, borrowing is cheap; when it nears full, the protocol raises rates sharply to attract fresh deposits and encourage repayments." },
      { type: "p", text: "The curve is not a straight line, and that is deliberate. Most major lending protocols use a kinked model: rates rise gently up to a target utilization, often around 80%, and then rise steeply beyond it. Below the kink, the protocol prioritises affordable borrowing and steady growth; above the kink, it prioritises survival, using punishing rates to pull the pool back from the edge where lenders could no longer withdraw. Understanding that kink changes how you borrow. A loan opened at 60% utilization is not locked into a low rate; it floats with the pool, and a wave of new borrowing or a wave of lender withdrawals can push utilization through the kink while you sleep. Borrowers who check utilization before borrowing, and who keep a buffer for rate spikes, avoid the nastiest surprises." },
      { type: "h2", text: "How a kinked interest-rate model works" },
      { type: "p", text: "A kinked model has two segments with very different slopes. In the first segment, from zero utilization up to the kink, the borrow rate rises slowly, perhaps from a base of 1% or 2% up to 6% or 8% at the kink. This gentle slope keeps borrowing attractive and gives the pool room to grow. In the second segment, beyond the kink, the slope steepens dramatically, and rates can climb from 8% to 50%, 80%, or even higher as utilization approaches 100%. The steep segment is not a bug or a penalty imposed by a team; it is the protocol's automatic defence mechanism, designed to make borrowing so expensive that some borrowers repay, while simultaneously offering lenders such high yields that new deposits flood in. Both effects push utilization back down." },
      { type: "p", text: "The supply rate that lenders earn follows from the borrow rate, minus a reserve factor kept by the protocol as a safety buffer. If borrowers pay 10% and the reserve factor is 10%, lenders share roughly 9% scaled by utilization, so lender yields also rise as the pool fills, though never as fast as borrow rates. This linkage matters because it explains why lender yields spike during stress: lenders are being paid to stay in a pool that is becoming riskier and less liquid. A useful mental model is a hotel with fixed rooms: when occupancy is low, rooms are cheap; when the last few rooms remain, prices surge, not because the rooms improved, but because scarcity itself is being priced. The [glossary](/glossary) can help confirm terms like utilization and reserve factor before you compare protocols." },
      { type: "h2", text: "The pool-full moment: what happens near 100% utilization" },
      { type: "p", text: "The pool-full moment is the scenario every kinked model is built to prevent: utilization reaching 100%, meaning every deposited token is lent out and no lender can withdraw until someone repays. In that state, the protocol is effectively frozen for lenders, and confidence can evaporate quickly. Rates at that point are typically astronomical, which usually forces action, but in a fast-moving crisis, borrowers may be unable or unwilling to repay, for example if repaying requires selling collateral into a crashing market. That is why the steep segment of the curve begins well before 100%: the protocol would rather scare borrowers with 60% rates at 90% utilization than face a frozen pool at 100%." },
      { type: "p", text: "Several triggers can push a pool toward full in hours. A popular new yield strategy can borrow heavily from one pool, a large lender withdrawing deposits shrinks the denominator and raises utilization instantly, and a market crash can freeze repayments as borrowers wait or get liquidated elsewhere. Stablecoin pools are especially prone to sudden utilization jumps, because stablecoin borrowing demand is highly correlated: when traders want leverage or need to exit positions, they all borrow the same assets at once. Data as of 2 Nov 2026, gold spot traded near $3,900 an ounce after rebounding from a 31 Oct one-year low near $3,876, and such cross-market stress episodes are exactly when correlated borrowing demand spikes. Borrowers should therefore treat utilization as a live risk gauge, not a one-time check at the moment of borrowing." },
      {
        type: "list",
        items: [
        "Utilization equals total borrowed divided by total supplied in a pool.",
        "Below the kink, rates rise gently to encourage borrowing and growth.",
        "Above the kink, rates rise steeply to force repayments and attract deposits.",
        "At 100% utilization, lenders cannot withdraw until someone repays.",
        "Large lender withdrawals raise utilization instantly by shrinking the pool."
        ],
      },
      { type: "h2", text: "Reading utilization before you borrow" },
      { type: "p", text: "A careful borrower checks three numbers before opening a loan: current utilization, the kink level, and the borrow rate at and beyond the kink. If utilization sits at 75% with a kink at 80%, the loan is one large withdrawal away from the steep segment, and the borrower should either borrow less, choose a different pool, or keep spare funds ready to repay quickly. If utilization sits at 40%, there is comfortable headroom, though even then a crisis can move it fast. Also check how concentrated the pool is: a pool dominated by a few large lenders is more fragile than a diversified one, because one exit moves utilization dramatically. Protocol dashboards usually show utilization and rates transparently, and there is no excuse for borrowing blind." },
      { type: "p", text: "Variable versus stable rates deserve a note here. Some protocols offer a stable borrow rate that can still be revised upward if utilization stays high, so stable does not mean fixed forever. Variable rates track the curve immediately and are the honest default for most borrowers. A practical rule is to size borrowing so that even a spike to the kink-plus rate remains affordable for weeks, not days, and to set alerts for utilization crossing the kink. Borrowers who run leveraged strategies on thin margins have no room for a rate spike, and the curve will eventually test them. For a parallel lesson in how small structural costs compound, the [guides on cross-exchange arbitrage](/guides/cross-exchange-arbitrage) show how professionals account for every cost before committing capital." },
      {
        type: "table",
        headers: ["Utilization", "Segment", "Typical borrow rate", "What it means for borrowers"],
        rows: [
          ["30%", "Below kink", "Low, around 2 to 4%", "Comfortable, plenty of headroom"],
          ["70%", "Below kink", "Moderate, around 5 to 8%", "Normal borrowing conditions"],
          ["85%", "Above kink", "High, rising fast", "Warning zone, spike risk real"],
          ["95%", "Far above kink", "Very high, 40% plus", "Repay or add buffer urgently"],
          ["100%", "Pool full", "Extreme", "Lenders cannot withdraw"]
        ],
      },
      { type: "h2", text: "Planning for rate spikes instead of fearing them" },
      { type: "p", text: "Rate spikes are a feature of the system, not an accident, so the right response is planning rather than panic. Keep a repayment reserve in the borrowed asset so you can exit quickly without selling collateral at a bad price. Avoid borrowing the maximum available amount, because a maxed-out loan leaves no room to manoeuvre when rates jump. Consider splitting borrowing across two pools or protocols, so that a spike in one does not trap your entire position. And revisit loans regularly: a loan that was safe at 50% utilization can become dangerous at 85% without you doing anything at all, because other users changed the pool around you." },
      { type: "p", text: "Lenders, too, should read the curve honestly. High yields above the kink look attractive, but they arrive precisely when the pool is stressed and withdrawal may be delayed. Chasing the highest headline APY into a nearly full pool is being paid to hold risk at its peak, and the yield is compensation for that risk, not a free lunch. The healthiest approach for both sides is to treat utilization as a shared weather report: calm below the kink, storm warnings above it, and shelter, meaning repayment or withdrawal, when the storm arrives. Markets reward participants who respect the curve and punish those who discover it only after the spike." },
      {
        type: "callout",
        title: "Risk warning",
        text: "Borrow rates in DeFi can spike sharply and without warning, and a loan that is affordable today can become unaffordable within hours. Never borrow against collateral you cannot afford to lose, keep a repayment reserve, and monitor utilization regularly.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, built to explain ideas in plain language and help you think through questions step by step. For this topic, you can ask Muse AI to explain a kinked utilization curve with a simple hotel-rooms analogy, so the sudden rate jump makes intuitive sense. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is utilization in a DeFi lending pool?",
            a: "Utilization is total borrowed divided by total supplied in a pool. If lenders deposited $10 million and borrowers took $8 million, utilization is 80%. The borrow rate is set automatically from this ratio, rising as utilization rises.",
          },
          {
            q: "Why do borrow rates jump suddenly instead of rising smoothly?",
            a: "Because most protocols use a kinked curve. Rates rise gently up to a target utilization, then steeply beyond it. Crossing the kink can therefore multiply the borrow rate quickly, which is intentional: the steep segment forces repayments and attracts deposits to pull the pool back from full.",
          },
          {
            q: "What happens at 100% utilization?",
            a: "At 100%, every deposited token is lent out, so lenders cannot withdraw until someone repays. Rates become extreme to force action, but if borrowers cannot repay, the pool can stay frozen. That is why the steep segment starts well before 100%.",
          },
          {
            q: "How can a borrower protect against rate spikes?",
            a: "Check utilization and the kink before borrowing, keep a repayment reserve in the borrowed asset, avoid borrowing the maximum, and set alerts for utilization crossing the kink. Size the loan so that even a spiked rate stays affordable for weeks.",
          }
        ],
      },
  ],
};
