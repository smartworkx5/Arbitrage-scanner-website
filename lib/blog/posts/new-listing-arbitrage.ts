import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "new-listing-arbitrage",
  title: "New Exchange Listing Arbitrage",
  description: "PLACEHOLDER",
  keywords: [
      "new listing arbitrage",
      "exchange listing arbitrage",
      "listing pump arbitrage",
      "crypto listing strategy",
      "new token arbitrage",
      "announcement pump trading",
      "crypto arbitrage 2026"
  ],
  datePublished: "2026-10-13",
  dateModified: "2026-10-13",
  readingMinutes: 8,
  category: "Strategies",
  excerpt: "Exchange listings create some of crypto's fastest cross-venue gaps. Learn the announcement-to-listing playbook, the four phases of listing edge, and how to avoid the dump.",
  image: "/images/blog/new-listing-arbitrage.svg",
  blocks: [
      { type: "p", text: "Few events move a token's price faster than a major exchange listing. When a large venue announces a new listing, the token often pumps on every other venue within minutes, but not evenly, creating cross-exchange gaps of several percent. On 2026-10-13, South Korean regulators moved to block domestic access to 27 unregistered offshore exchange websites, a reminder that listing-driven flows concentrate on compliant major venues while smaller platforms quote their own prices. This guide explains how new-listing arbitrage works: capturing the announcement pump's cross-venue gaps without getting caught in the dump." },
      { type: "h2", text: "Why listings create cross-venue gaps" },
      { type: "p", text: "A listing announcement triggers immediate buying across all venues where the token already trades, as traders front-run the new liquidity and visibility. But each venue's order book absorbs that demand differently: thin books spike harder, deep books barely move, and venues in different time zones react with lags. The result is a dispersion window, often 30 minutes to a few hours, where the same token trades at materially different prices across exchanges. The [new token DEX arbitrage](/blog/new-token-dex-arbitrage) guide covers the on-chain side of this dynamic." },
      { type: "p", text: "The actual listing moment adds a second gap. When deposits open on the new venue, early depositors can sell into the listing premium while traders on other venues are still repricing. Perpetual futures listings create a third surface: funding rates on the new perp often print extreme as directional traders pile in. Each of these is a distinct, short-lived edge within the broader landscape of how crypto arbitrage works." },
      { type: "h2", text: "The announcement-to-listing playbook" },
      { type: "p", text: "Preparation beats reaction. Maintain funded accounts on the venues most likely to list new tokens, keep stablecoin inventory ready, and set alerts for listing announcements rather than discovering them on social media an hour late. When an announcement drops: check which venues already list the token, compare quotes net of fees, and act only if the gap survives the depth test. Speed matters, but buying the top of a 40% announcement spike is not arbitrage, it is momentum trading with extra steps." },
      {
        type: "list",
        items: [
        "Confirm the token contract address; fake listings and copycat tokens proliferate around announcements.",
        "Verify deposits are actually open on the listing venue before planning a transfer leg.",
        "Size against the thinnest leg's book, not the headline gap.",
        "Predefine your exit: announcement pumps usually fade within 24 to 72 hours."
        ],
      },
      { type: "p", text: "DEX-first launches deserve special caution. A token launching on a Solana or Ethereum DEX before any CEX listing trades purely on pool liquidity, where slippage and MEV bots dominate. Cross-venue gaps between the DEX price and the first CEX quote can be enormous, and enormously risky to capture. The [CEX vs DEX arbitrage guide](/guides/cex-vs-dex-arbitrage) details the mechanics and the MEV problem." },
      { type: "h2", text: "Risks: the dump, the fake-out, and the freeze" },
      { type: "p", text: "The classic failure mode is buying the announcement pump and holding through the listing dump, when early holders use the new liquidity to exit. Gaps can also invert violently: a token up 50% on thin venues can retrace in minutes, turning a long-cheap-venue position into an instant loss. Add the standard risks, withdrawal freezes during volatility and exchange outages under listing-day traffic, plus the hidden cross-exchange risks that surface when venues behave unexpectedly under load." },
      {
        type: "callout",
        title: "Beware listing scams",
        text: "Listing scams are common: fake announcement accounts, phishing links promising early deposits, and copycat tokens with similar tickers. Only trust announcements on the exchange's official domain, and never connect your wallet to a site shared in a listing announcement thread.",
        tone: "warning",
      },
      {
        type: "table",
        headers: ["Phase", "Typical window", "Edge type"],
        rows: [
          ["Announcement", "Minutes to hours", "Cross-venue repricing gaps"],
          ["Deposit opening", "Hours", "Listing-premium selling"],
          ["Perp listing", "Hours to days", "Funding-rate dislocation"],
          ["Post-listing", "1 to 3 days", "Mean-reversion fade; highest risk"]
        ],
      },
      { type: "h2", text: "Realistic expectations" },
      { type: "p", text: "New-listing arbitrage is one of the highest-variance arbitrage niches: a handful of trades a month may produce most of the year's edge, and long quiet stretches are normal. Competition from professional market makers means the easy gaps close fastest on the biggest listings. Treat it as a satellite strategy, a small allocation with strict checklists, rather than a core income source, and review the [profitability reality check](/blog/is-crypto-arbitrage-profitable-2026) to calibrate expectations." },
      { type: "p", text: "Keep meticulous records of which listing setups worked and why: venue pair, token profile, gap size, fill quality. Over time this log becomes your real edge, pattern recognition for which announcements produce tradeable dispersion and which just produce noise. And never deploy capital you cannot afford to have locked if a venue freezes withdrawals mid-event; our [risk management guide](/blog/arbitrage-risk-management) covers contingency planning." },
      {
        type: "faq",
        items: [
          {
            q: "Is new listing arbitrage profitable?",
            a: "It can be, but it is high-variance: a few trades a month may drive most returns, with long quiet stretches between. Treat it as a satellite strategy with strict checklists rather than a core income source, and size positions for the possibility of violent reversals.",
          },
          {
            q: "How fast do listing gaps close?",
            a: "Minutes to a few hours for the announcement repricing window; the biggest listings get arbitraged fastest by professional market makers. Deposit-opening and perp-listing edges can persist for hours to days but carry their own distinct risks.",
          },
          {
            q: "Should I buy a token before the listing announcement?",
            a: "That is speculation, not arbitrage: you are betting on an announcement that may never come, with no spread to capture. Listing arbitrage means trading the pricing disagreement the announcement creates, not predicting the announcement itself.",
          },
          {
            q: "What about DEX-first launches?",
            a: "Tokens launching on a DEX before any CEX listing trade on thin pool liquidity with heavy slippage and MEV bot competition. The gaps look enormous but are extremely risky to capture; most traders should wait for CEX price discovery before engaging.",
          }
        ],
      },
  ],
};
