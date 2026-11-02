import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "choosing-crypto-bridge-fees-slippage-2026",
  title: "Choosing a Crypto Bridge: Fees, Slippage and Arrival Time Compared",
  description: "Choosing a Crypto Bridge means comparing more than the headline fee. Learn to spot slippage, hidden liquidity costs, gas charges and arrival-time trade-offs.",
  keywords: [
      "Crypto Bridge",
      "bridge fees comparison",
      "bridge slippage",
      "cross-chain transfer cost",
      "bridge arrival time",
      "bridge hidden costs"
  ],
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "Bridge quotes hide costs in slippage, gas on two chains, and liquidity fees. This checklist shows how to compare real arrival amounts, not advertised fees, before you move tokens across chains.",
  image: "/images/blog/choosing-crypto-bridge-fees-slippage-2026.svg",
  blocks: [
      { type: "p", text: "Choosing a Crypto Bridge by its advertised fee is like choosing a flight by its ticket price and ignoring baggage charges, seat fees and a twelve-hour layover. The number that matters is not the fee shown on the quote screen, but the amount that actually arrives in your wallet on the destination chain, and how long it takes to get there. Between the headline fee, slippage in liquidity pools, gas on both chains, and the bridge's own spread, the gap between quoted and received can be several percent on larger transfers. Bridge security is also front of mind as of 2 Nov 2026 after THORChain paused on 31 Oct when an Ethereum reorg caused a mistaken 10 ETH payout, so cost comparison should never override safety checks." },
      { type: "p", text: "Bridge costs come in layers. First, the bridge protocol fee, usually a flat amount or a percentage, which is the visible part. Second, gas fees: you pay on the source chain to initiate, and sometimes on the destination chain to claim or receive, and both vary with network congestion. Third, slippage: if the bridge sources destination tokens from a liquidity pool, a large transfer moves the pool price against you, and you receive less than the quoted rate. Fourth, liquidity provider fees embedded in pool-based routes, which are real costs even when they are not labelled as fees. Fifth, the spread between the bridge's exchange rate and the market rate, which some bridges quietly widen. A quote that shows only one of these is not a comparison, it is marketing." },
      { type: "h2", text: "Build a Quote Comparison Checklist" },
      { type: "p", text: "The reliable method is to compare arrival amounts, not fees. For each bridge, enter the exact amount and token pair, note the quoted destination amount, and calculate the total cost as the percentage difference from the market value of your input. Do this at the same moment for each bridge, because prices and gas move constantly. Record the estimated arrival time and whether it is a range or a guarantee. Check whether the destination amount is fixed at quote time or can change before execution, which matters enormously during volatility. A bridge that locks your rate is worth a slightly higher fee when markets are moving fast, while a floating quote can deteriorate between approval and settlement." },
      { type: "p", text: "Slippage settings deserve special attention. Some bridges let you set a maximum slippage tolerance, and a transfer that exceeds it will fail or revert, costing you gas but saving you from a bad rate. Others execute at whatever rate the pool gives, which can be punishing on large transfers into thin pools. As a rule, slippage grows with transfer size relative to pool depth: moving $1,000 through a $10 million pool is negligible, while moving $500,000 through a $2 million pool can cost several percent. Check pool depth for your route before committing, and split large transfers into smaller ones if a single transfer would move the price materially." },
      {
        type: "table",
        headers: ["Cost layer", "Where it hides", "How to check it"],
        rows: [
          ["Protocol fee", "Quote screen, sometimes in small print", "Compare net arrival amount, not the fee line"],
          ["Source gas", "Wallet confirmation", "Check gas estimate before approving"],
          ["Destination gas", "Claim step, if any", "Ask whether receipt is automatic or needs a claim"],
          ["Slippage", "Pool-based routes", "Compare quote to market rate, check pool depth"],
          ["LP fee", "Embedded in pool rate", "Included in arrival amount comparison"],
          ["Rate spread", "Quote vs market price", "Price the input at market, subtract arrival value"]
        ],
      },
      { type: "h2", text: "Arrival Time: Fast, Slow and Stuck" },
      { type: "p", text: "Arrival time is a cost too, because a transfer in flight is exposed to price moves, bridge incidents and opportunity cost. Native burn-and-mint routes and intent-based bridges can settle in minutes, while some lock-and-mint routes with long finality requirements take tens of minutes or longer. Optimistic-style bridges that rely on fraud-proof windows can take far longer for full finality, even if funds appear usable sooner. Check whether the quoted time is typical or guaranteed, and what happens if the transfer stalls: is there a support channel, a refund path, or only a transaction hash and hope? A bridge with no support during a stuck transfer is a risk that no fee saving justifies." },
      { type: "p", text: "Network conditions change arrival time unpredictably. Source-chain congestion delays initiation, destination-chain congestion delays receipt, and validator or relayer outages can pause a route entirely. The THORChain pause on 31 Oct is a useful reminder that even established cross-chain infrastructure can halt for safety reasons. If your transfer is time-sensitive, for example to meet a liquidation deadline or an exchange deposit window, build in a generous buffer and avoid bridging during known network upgrades, major market events or active security incidents. As of 2 Nov 2026, with BTC around $78,400 and gold near $3,900 per ounce, markets are steady but the recent exchange security scare shows how quickly conditions change." },
      {
        type: "list",
        items: [
        "Compare net arrival amounts at the same moment, not headline fees.",
        "Check slippage tolerance and whether your rate is locked or floating.",
        "Confirm whether destination receipt is automatic or needs a manual claim.",
        "Check pool depth for your route before moving a large amount.",
        "Test a new bridge with a small transfer before committing a large one."
        ],
      },
      { type: "h2", text: "Hidden Costs and Red Flags" },
      { type: "p", text: "Several red flags should stop a transfer before it starts. A bridge that refuses to show a destination amount before you approve is not comparable and should not be trusted. A quote dramatically better than every competitor often signals a fake token, a manipulated pool or a rate that will not survive execution. Minimum and maximum transfer limits matter: some bridges charge disproportionately on small transfers through flat fees, while others cap large transfers or route them through thin liquidity. Destination token identity is critical: confirm you will receive the genuine token contract on the destination chain, not a similarly named imitation, since fake wrapped tokens are a persistent phishing method." },
      { type: "p", text: "Also consider the cost of getting back. A bridge that is cheap in one direction may be expensive or illiquid in reverse, which matters if you plan to return funds later. Check both directions before committing to a route you may need to unwind. And remember the security layer beneath the cost layer: a bridge's audit history, validator decentralisation and incident record are part of its true price. The cheapest bridge that loses your funds is infinitely expensive. For a broader view of comparing venues and spreads, see [cross-exchange arbitrage](/guides/cross-exchange-arbitrage), and the [glossary](/glossary) defines slippage, liquidity and finality." },
      {
        type: "callout",
        title: "Risk warning",
        text: "Bridge transfers are usually irreversible, and quotes can change between approval and settlement. Verify the destination chain, address and token contract before confirming, test with a small amount first, and never bridge funds you cannot afford to lose.",
        tone: "warning",
      },
      { type: "h2", text: "A Practical Pre-Transfer Routine" },
      { type: "p", text: "A short routine prevents most costly mistakes. First, shortlist two or three established bridges for your exact token pair and chains. Second, get simultaneous quotes and compare net arrival amounts and times. Third, check slippage tolerance, rate locking and claim requirements. Fourth, verify the destination token contract and your receiving address. Fifth, send a small test transfer, confirm receipt, then send the remainder. This routine takes a few extra minutes and routinely saves more than it costs, especially on transfers above a few thousand dollars where a single percentage point of slippage exceeds any time saving." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain bridge fees and slippage in simple words, compare two bridge quotes side by side, and help you draft a pre-transfer checklist. For this topic, it can walk through a sample quote to show where each hidden cost sits before you confirm anything. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Why does the amount I receive differ from the bridge quote?",
            a: "Quotes can change with slippage, gas costs, liquidity fees and rate spreads, especially on pool-based routes or during volatility. Compare the net arrival amount, not the headline fee, and check whether your rate is locked.",
          },
          {
            q: "How does slippage affect bridge transfers?",
            a: "If a bridge sources destination tokens from a liquidity pool, a large transfer moves the pool price against you. Slippage grows with transfer size relative to pool depth, so check depth and consider splitting large transfers.",
          },
          {
            q: "What makes a bridge transfer slow?",
            a: "Source and destination congestion, long finality requirements, validator or relayer delays, and safety pauses can all extend arrival time. Check whether the quoted time is typical or guaranteed.",
          },
          {
            q: "Should I test a bridge with a small amount first?",
            a: "Yes. A small test confirms the route, destination token and receiving address work before you commit a large sum. It costs a little extra gas but prevents far larger mistakes.",
          }
        ],
      },
  ],
};
