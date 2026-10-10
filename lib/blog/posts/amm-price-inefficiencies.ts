import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "amm-price-inefficiencies",
  title: "How AMM Price Inefficiencies Create Arbitrage",
  description: "How AMM price inefficiencies create arbitrage: constant-product math, stale low-liquidity pools, and the large trades that push pool prices off market.",
  keywords: [
      "amm price inefficiencies",
      "automated market maker arbitrage",
      "constant product formula arbitrage",
      "amm arbitrage explained",
      "liquidity pool mispricing"
  ],
  datePublished: "2026-10-10",
  dateModified: "2026-10-10",
  readingMinutes: 8,
  category: "Strategies",
  excerpt: "Automated market makers price assets with math, not order books — and that math creates predictable inefficiencies. Here is how constant-product pools drift off market and how arbitrageurs trade it.",
  image: "/images/blog/amm-price-inefficiencies.svg",
  blocks: [
      { type: "p", text: "**AMM price inefficiencies** are the engine behind most on-chain arbitrage. An automated market maker does not watch the market, read news, or react to sentiment — it applies a formula to its token balances every time someone trades. Between trades, the formula's output is frozen while the outside world moves on. That gap between a pool's formulaic price and the live market price is an inefficiency, and correcting it is literally the job arbitrageurs are paid to do through the spread they capture." },
      { type: "p", text: "Understanding where these inefficiencies come from turns random gap-spotting into a repeatable edge. Some are mechanical — the unavoidable lag between a market move and the next trade against the pool. Some are structural — thin pools that overreact to every trade. And some are behavioral — large traders who accept terrible prices out of urgency or poor routing, leaving the pool badly mispriced in their wake. Each type behaves differently, lasts a different length of time, and demands a different response." },
      { type: "h2", text: "The Constant-Product Formula, Intuitively" },
      { type: "p", text: "The classic AMM rule is x * y = k: the product of the two token reserves stays constant. Imagine a pool holding 100 ETH and 300,000 USDC, implying roughly $3,000 per ETH. Buying 10 ETH removes ETH and adds USDC, forcing the price upward as the reserve shrinks — you might pay $3,050 on average instead of $3,000. Price impact grows steeply with trade size relative to the pool, so every large trade leaves the pool's price displaced from where it started." },
      { type: "p", text: "After a large buy pushes a pool's price above the market, the pool is now offering to sell the token too cheaply relative to everywhere else — or rather, it is quoting a price nobody would pay voluntarily, which is exactly the arbitrageur's invitation. The arbitrageur sells into the pool (or buys from it, in the reverse case), collecting the difference between the pool's displaced price and the true market price, and the pool lands back near fair value. The original large trader paid for this whole cycle through their price impact; the arbitrageur simply harvests the distortion they left behind." },
      { type: "h2", text: "Stale Pools: When Nobody Is Watching" },
      { type: "p", text: "The most common inefficiency is staleness. A pool that trades infrequently — a mid-cap token's secondary pool, a new pool that has not attracted volume yet — can sit at an outdated price for minutes or even hours while centralized exchanges move on. When the market rallies 3% and the pool has not been touched, it is effectively offering a 3% discount to the first trader who notices. These are the gaps retail arbitrageurs can realistically compete for, because professional bots concentrate on the deepest, most profitable pools and may monitor thin ones less aggressively." },
      {
        type: "table",
        headers: ["Inefficiency type", "What causes it", "Typical duration"],
        rows: [
          ["Stale pool", "Infrequent trading; market moved without touching the pool", "Minutes to hours"],
          ["Large-trade displacement", "A big swap pushed price far from market", "Seconds to minutes"],
          ["Thin-pool overreaction", "Small trades swing low-liquidity pools wildly", "Until arbitrage corrects it"],
          ["Fee-tier divergence", "Same pair quoted differently across fee tiers", "Persistent but tiny"],
          ["Range-edge thinning", "Price exited concentrated-liquidity ranges", "Minutes during volatility"]
        ],
      },
      { type: "h2", text: "Why Inefficiencies Persist Instead of Vanishing" },
      {
        type: "callout",
        title: "An inefficiency that cannot be traded is not an opportunity",
        text: "Many quoted gaps survive only because costs exceed them: gas, swap fees, and price impact make the correction unprofitable at small sizes. The gap persists precisely because nobody can afford to close it — which also means you probably cannot profit from it either.",
        tone: "info",
      },
      { type: "p", text: "If arbitrageurs correct mispricings, why do any survive? Because correction is only worth doing when the profit exceeds the cost of the correcting trade. A 0.4% mispricing on a network where the round trip costs 0.5% in gas and fees will sit there uncorrected indefinitely — it is an inefficiency in theory but not an opportunity in practice. This is the single most important filter in AMM arbitrage: the question is never how big the gap is, but how big it is after every cost. Beginners who skip this filter end up executing textbook-perfect corrections that lose money." },
      { type: "h2", text: "Trading the Inefficiency Without Becoming the Victim" },
      { type: "p", text: "The irony of AMM arbitrage is that the arbitrageur's own trade creates price impact too — you are correcting the pool by trading against it, which moves the price as you go. Sizing is therefore everything: too small and gas eats the profit, too large and your own impact erases the edge you came to capture. The practical approach is to compute the optimal size where marginal profit turns negative, then trade well below it to leave a safety margin. Simulating the trade before sending — checking the expected output at current pool state — separates professionals from gamblers." },
      { type: "p", text: "Risk management matters as much as math. Volatile tokens can move against you between detection and confirmation; MEV bots can sandwich your correcting trade; and thin pools sometimes belong to tokens with transfer taxes or trading restrictions that turn a clean-looking gap into a trap. Verify the token contract, set slippage limits, and never commit a size where a failed or frontrun trade would hurt. For the broader venue context of these trades, see our [CEX vs DEX arbitrage guide](/guides/cex-vs-dex-arbitrage), and for single-venue loops, [triangular arbitrage](/guides/triangular-arbitrage)." },
      {
        type: "faq",
        items: [
          {
            q: "What does x*y=k actually mean for my trade?",
            a: "It means the pool's price moves against you as your trade gets bigger relative to the pool. Small trades get near the quoted price; large trades get a worse average price. Always check the expected output for your exact size, not the headline quote.",
          },
          {
            q: "Why do large trades create arbitrage opportunities?",
            a: "A large buy pushes the pool's price above the market (or a large sell pushes it below). Until someone trades against the pool in the opposite direction, it stays mispriced — and the arbitrageur who corrects it keeps the difference.",
          },
          {
            q: "Are stale-pool gaps safe to trade?",
            a: "No gap is safe, but stale pools are among the more accessible edges for non-bot traders. The risks remain: the token may be illiquid or restricted, gas still applies, and the price can move while your transaction confirms.",
          },
          {
            q: "Do liquidity providers lose money to arbitrageurs?",
            a: "In effect, yes — this is the well-known impermanent-loss dynamic. Arbitrageurs systematically buy underpriced assets from pools and sell overpriced ones to them. Providers accept this as the cost of earning swap fees, which is why fee income must exceed arbitrage leakage for providing liquidity to make sense.",
          }
        ],
      },
  ],
};
