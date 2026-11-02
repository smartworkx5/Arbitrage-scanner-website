import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "intent-based-bridges-solvers-2026",
  title: "Intent-Based Bridges: How Solvers Move Your Funds Faster",
  description: "Intent-Based Bridges let solvers compete to fill your transfer. Learn how intents, auctions and outcome-based execution make bridging faster and simpler.",
  keywords: [
      "Intent-Based Bridges",
      "bridge solvers",
      "cross-chain intents",
      "solver competition bridging",
      "intent-based execution",
      "fast cross-chain transfers"
  ],
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "Intent-based bridges flip the old model: instead of choosing a route, you state the outcome you want, and competing solvers race to deliver it. This guide explains intents, solver auctions, and the new risks this speed introduces.",
  image: "/images/blog/intent-based-bridges-solvers-2026.svg",
  blocks: [
      { type: "p", text: "Intent-Based Bridges change the question a user has to answer. Traditional bridging asks you to pick a route: which bridge, which chain path, which liquidity pool, and how much slippage to accept. Intent-based bridging asks you to state an outcome instead: I want 10,000 USDC on Arbitrum, and I am willing to pay up to a certain fee, within a certain time. Competing solvers, professional actors with capital on many chains, then race to fulfil that outcome, fronting the destination funds from their own inventory and settling with your source funds afterwards. You get speed and simplicity; solvers get fees for speed and capital efficiency. With BTC around $78,400 as of 2 Nov 2026, and bridge security under scrutiny after THORChain paused on 31 Oct following an Ethereum reorg that caused a mistaken 10 ETH payout, intent-based designs are gaining attention as a faster, differently-trusted alternative." },
      { type: "p", text: "The core concept is the intent itself: a signed, structured statement of what you want, under what conditions. An intent specifies the input asset and chain, the output asset and chain, the minimum amount you will accept, a deadline, and any constraints such as preferred tokens or maximum fees. It does not specify how the solver gets there. A solver might use its own inventory, route through a liquidity pool, or chain several hops together. The user does not care, as long as the outcome matches the intent. If no solver can meet the terms before the deadline, the intent simply expires and nothing happens, which is a safety property traditional bridges lack: a bad route cannot execute because the user never authorised a route, only an outcome." },
      { type: "h2", text: "How Solvers Compete to Fill Your Intent" },
      { type: "p", text: "Solver competition is usually organised as an auction. When you broadcast an intent, solvers bid for the right to fill it, offering better output amounts or faster settlement. The winning solver delivers destination funds first, then claims your source funds by proving delivery, often through an escrow contract that releases payment only when the outcome is verified. This fronting model is why intent-based transfers settle in seconds or minutes rather than the tens of minutes some traditional bridges need for finality. The solver takes on timing and execution risk, including price moves between delivery and settlement, and is compensated through the fee embedded in the output amount." },
      { type: "p", text: "Competition benefits users in measurable ways. Solvers with deeper inventory and faster infrastructure can offer tighter pricing, and the auction format forces them to reveal their best price rather than quote a take-it-or-leave-it rate. But competition also has limits. On obscure routes with little solver coverage, there may be one solver or none, and pricing can be poor or the intent may expire unfilled. During volatility, solvers widen their margins or stop bidding, exactly when users most want speed. Understanding that solver coverage varies by route is essential: intent-based bridging is fastest on popular corridors and thinnest on the long tail." },
      {
        type: "table",
        headers: ["Feature", "Traditional bridge", "Intent-based bridge"],
        rows: [
          ["User specifies", "Exact route and bridge", "Desired outcome only"],
          ["Who fronts funds", "Bridge vault or liquidity pool", "Competing solvers"],
          ["Typical settlement", "Minutes to much longer", "Seconds to minutes"],
          ["Price discovery", "Single quote", "Solver auction"],
          ["Failure mode", "Stuck or slow transfer", "Intent expires, nothing moves"],
          ["Main trust assumption", "Bridge validators or custodian", "Solver honesty plus escrow verification"]
        ],
      },
      { type: "h2", text: "Escrow, Verification and the New Trust Assumptions" },
      { type: "p", text: "Intent-based designs do not remove trust, they relocate it. The escrow contract must correctly verify that the solver delivered the promised outcome before releasing the user's source funds. If verification is weak, a solver could claim payment without delivering, or deliver a lookalike token instead of the genuine one. If escrow logic has a bug, funds can be locked or misdirected. The solver's own inventory also matters: a solver that fronts funds from borrowed or thin capital can fail mid-settlement during stress. Reputation systems, solver bonds or collateral requirements, and slashing for failed deliveries are emerging answers, but they are newer and less battle-tested than the validator models they aim to replace." },
      { type: "p", text: "Censorship and extraction are subtler risks. A dominant solver could refuse certain intents, prioritise its own flow, or extract value by delaying fills during volatility. Auction designs try to counter this with open participation and short bidding windows, but a market with few solvers is still an oligopoly. Users should check how many independent solvers serve their route, whether solver identities and performance are public, and what happens to an expired intent: are source funds immediately reusable, or locked for a claim period? These details determine whether intent-based speed comes with acceptable risk or merely faster exposure to new failure modes." },
      {
        type: "list",
        items: [
        "State outcomes, not routes: your intent should specify minimum output, deadline and acceptable tokens.",
        "Check solver coverage for your exact route before relying on fast settlement.",
        "Verify the escrow design: payment should release only on verified delivery.",
        "Watch for thin routes where one solver sets the price or intents expire unfilled.",
        "Keep transfer sizes proportionate to the design's track record on your corridor."
        ],
      },
      { type: "h2", text: "When Intent-Based Bridging Wins, and When It Does Not" },
      { type: "p", text: "Intent-based bridging wins on popular routes where many solvers compete, settlement is fast, and the user values simplicity over control. It is well suited to routine transfers between major chains in liquid assets, where solver inventory is deep and auction pricing is tight. It is less suited to exotic tokens, illiquid routes, or very large transfers that exceed solver inventory, where traditional lock-and-mint or liquidity bridges may still be the only option. Large transfers can also be split across solvers in some designs, but splitting adds complexity and partial-fill risk that users should understand before attempting." },
      { type: "p", text: "The broader significance is architectural: intents separate what users want from how it is achieved, which lets infrastructure improve without changing the user experience. As solver networks mature, the same intent model may cover swaps, cross-chain lending and other multi-step actions, not just bridging. For now, treat intent-based bridges as a promising but younger design: excellent on well-covered routes, unproven on the margins. As of 2 Nov 2026, with gold near $3,900 per ounce after rebounding from a 31 Oct low near $3,876 and the Fear and Greed Index at 37, cautious users will test new routes with small amounts first. For related concepts, see [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) and the [glossary](/glossary)." },
      {
        type: "callout",
        title: "Risk warning",
        text: "Intent-based bridges are newer and less battle-tested than traditional bridges. Solver failure, escrow bugs or thin coverage can delay or fail transfers. Test with a small amount, verify destination token contracts, and never assume a fast quote guarantees settlement.",
        tone: "warning",
      },
      { type: "h2", text: "Using Intent-Based Bridges Safely" },
      { type: "p", text: "Start by choosing a well-covered route and a reputable intent protocol with public solver performance data. Set a minimum output amount that protects you from bad fills, and a deadline that reflects your urgency without forcing a rushed settlement. Confirm the destination token contract and receiving address, then send a small test intent and verify receipt before larger transfers. Monitor whether your intent fills promptly; repeated expiries signal thin solver coverage on that route, and you should switch to a traditional bridge rather than raising your fee blindly. Speed is valuable, but only when the outcome is exactly what you specified." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain intents and solvers in simple words, compare intent-based and traditional bridges for your route, and help you draft an intent checklist. For this topic, it can walk through a sample intent to show what each field means before you sign anything. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is an intent in intent-based bridging?",
            a: "An intent is a signed statement of the outcome you want: input asset and chain, output asset and chain, minimum acceptable amount, deadline and constraints. It does not specify the route; solvers choose how to deliver it.",
          },
          {
            q: "Why are intent-based transfers faster?",
            a: "Solvers front destination funds from their own inventory and settle with your source funds afterwards, avoiding the long finality waits of some traditional bridges. Competition between solvers also tightens pricing.",
          },
          {
            q: "What happens if no solver fills my intent?",
            a: "The intent expires at its deadline and nothing moves. Your source funds remain available, though some designs have a short claim or unlock period, so check the terms before signing.",
          },
          {
            q: "Are intent-based bridges safer than traditional bridges?",
            a: "They remove vault risk but introduce solver and escrow risks, and they are newer and less battle-tested. They are strong on popular routes with many solvers, and thinner and riskier on obscure routes.",
          }
        ],
      },
  ],
};
