import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "wrapped-bitcoin-arbitrage",
  title: "Wrapped Bitcoin (WBTC) Arbitrage",
  description: "Wrapped Bitcoin arbitrage: why WBTC trades off its BTC peg, how mint/burn mechanics restore it, and the real costs and custody risks of trading the deviation.",
  keywords: [
      "wrapped bitcoin arbitrage",
      "WBTC arbitrage",
      "WBTC BTC peg",
      "wrapped bitcoin depeg",
      "WBTC vs BTC price",
      "bitcoin defi arbitrage"
  ],
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
  readingMinutes: 8,
  category: "Markets",
  excerpt: "WBTC should equal BTC — but it doesn't always. Mint/burn mechanics, custody changes, and DeFi liquidations push the wrapped token off peg, creating spreads for traders who understand the plumbing.",
  image: "/images/blog/wrapped-bitcoin-arbitrage.svg",
  blocks: [
      { type: "p", text: "**Wrapped bitcoin arbitrage** exploits deviations between WBTC (Wrapped Bitcoin) — an ERC-20 token backed 1:1 by BTC held in custody — and native BTC itself. In theory the two should trade at parity; in practice, WBTC has printed discounts and premiums of 0.1% to over 1% during stress events, and those deviations are tradeable for anyone who understands the mint/burn plumbing. With BTC near **$83,650** on October 12, 2026, even a 0.3% deviation is worth about $250 per coin — meaningful for sized traders, provided the costs and custody risks are properly accounted for." },
      { type: "h2", text: "How the WBTC peg is supposed to work" },
      { type: "p", text: "WBTC is issued by custodians: a merchant deposits BTC with the custodian, the custodian mints an equal amount of WBTC on Ethereum, and the process reverses on burn. Because minting and burning are (in principle) frictionless for authorized merchants, any price gap should be arbitraged away — buy discounted WBTC, redeem for BTC, sell BTC; or buy BTC, mint WBTC, sell at a premium. This is the same creation/redemption logic that keeps ETF prices near their net asset value, except the authorized participants here are WBTC merchants, and the settlement rails are Ethereum and Bitcoin rather than the traditional financial system." },
      { type: "h2", text: "Why the peg breaks: the real deviation drivers" },
      { type: "p", text: "Deviations appear when the arbitrage loop slows or breaks. The biggest driver is redemption friction: burning WBTC requires going through a merchant with KYC, minimum sizes, and processing delays — it is not an instant atomic swap. During market stress, merchants may pause or slow redemptions, and discounts widen. Custody risk repricing is the second driver: WBTC's backing depends on specific custodians, and any news questioning custodian solvency or control (as seen in past custody-transition controversies) causes holders to dump WBTC at a discount rather than wait for redemption. Third, DeFi liquidations: WBTC is heavily used as collateral in lending protocols, and liquidation cascades force-sell WBTC on DEXs faster than arbitrageurs can absorb it, pushing the DEX price below peg until the cascade clears. Gas costs on Ethereum add a final friction — see our [DEX gas cost guide](/blog/dex-arbitrage-gas-costs) — making small deviations uneconomical to close." },
      {
        type: "table",
        headers: ["Deviation driver", "Typical discount size", "Duration"],
        rows: [
          ["Normal market noise", "0.05%–0.2%", "Minutes to hours"],
          ["DeFi liquidation cascade", "0.3%–1%+", "Hours until cascade clears"],
          ["Custody concern repricing", "0.5%–2%+", "Days until clarity emerges"],
          ["Merchant redemption pause", "Varies", "Until redemptions resume"]
        ],
      },
      {
        type: "callout",
        title: "Custody risk is the real risk",
        text: "A WBTC discount is often the market pricing custody risk, not offering free money. If the market doubts the backing, the 'arbitrage' of buying discounted WBTC can become a permanent loss. Never treat a depeg as risk-free — investigate why the discount exists before touching it.",
        tone: "warning",
      },
      { type: "h2", text: "The tradeable setups (and their true costs)" },
      { type: "p", text: "The cleanest setup is the DEX-vs-CEX loop during a liquidation-driven discount: buy discounted WBTC on a DEX like Uniswap, transfer to a venue where WBTC trades near peg (or redeem through a merchant if you have access), and capture the difference. Costs include Ethereum gas on the buy and any transfers, DEX slippage on thin WBTC pools during stress, CEX trading fees on the hedge leg, and — critically — the time your capital is exposed while redemption or transfer completes. A 0.5% gross discount can net to 0.1–0.2% after costs, which is why this trade favors larger size and low-fee operators. The reverse (premium) setup — buy BTC, mint WBTC, sell premium — requires merchant access and is effectively institutional-only." },
      { type: "p", text: "Alternatives to WBTC carry the same logic with different trust assumptions. cbBTC (Coinbase's wrapped bitcoin), tBTC, and other wrapped variants each have their own custodian/bridge risk and their own deviation patterns — and spreads between wrapped variants themselves (WBTC vs cbBTC) can be traded by those with mint/burn access on both. Stablecoin depegs follow parallel mechanics; our [stablecoin depeg guide](/blog/stablecoin-depeg-risk) covers the shared playbook. The general principle across all of them: the peg holds until the redemption mechanism is doubted, and the trade is pricing that doubt, not ignoring it." },
      { type: "h2", text: "Risk management for peg-deviation trades" },
      { type: "p", text: "Size these trades like credit trades, not like spot arbitrage, because that is what they are — you are extending trust to a custodian for the duration of the position. Cap exposure per wrapped asset, set a maximum holding time (if the peg has not recovered in your window, exit and reassess rather than hoping), and hedge the BTC price exposure if you plan to hold the discounted token rather than immediately redeem. Keep a written checklist of each custodian's current status — merchant lists, proof-of-reserves publications, and any governance changes — and re-verify before increasing size. The [CEX vs DEX stablecoin gaps guide](/blog/cex-dex-stablecoin-gaps) has a useful framework for evaluating peg mechanics that transfers directly to wrapped BTC." },
      {
        type: "faq",
        items: [
          {
            q: "Is WBTC backed 1:1 by real bitcoin?",
            a: "WBTC is designed to be backed 1:1 by BTC held by custodians, with on-chain proof of reserves. But 'backed' depends on the custodian's integrity and operational security — which is exactly what the market reprices during custody scares.",
          },
          {
            q: "Why does WBTC trade below BTC price?",
            a: "Usually because of redemption friction, DeFi liquidation selling, or custody concerns. The discount reflects the cost, delay, or risk of converting WBTC back to BTC — it is rarely a free lunch.",
          },
          {
            q: "Can retail traders arbitrage the WBTC peg?",
            a: "Partially. Buying discounted WBTC on a DEX and selling where it trades near peg is accessible; direct mint/burn through merchants requires KYC and minimum sizes. Gas costs make small deviations uneconomical for small accounts.",
          },
          {
            q: "What is the difference between WBTC and cbBTC?",
            a: "Different issuers and custodians: WBTC uses its custodian/merchant network, cbBTC is issued by Coinbase. Each has distinct trust assumptions, liquidity profiles, and deviation patterns — and the spread between them is itself tradeable.",
          }
        ],
      },
  ],
};
