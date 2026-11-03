import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "liquidity-lock-burn-verification-2026",
  title: "Liquidity Locks and Burns: Verifying Them Before You Trust a Launch",
  description: "Liquidity locks and burns sound reassuring until verified: learn the on-chain checks for lock contracts, burn addresses, LP tokens, and lock expiry dates.",
  keywords: [
      "Liquidity Locks and Burns",
      "liquidity lock verification",
      "LP token burn",
      "burn address",
      "lock expiry",
      "locked liquidity"
  ],
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
  readingMinutes: 8,
  category: "Risk",
  excerpt: "Locked or burned liquidity protects holders only when verified on-chain. Learn to check lock contracts, burn addresses, and expiry dates.",
  image: "/images/blog/liquidity-lock-burn-verification-2026.svg",
  blocks: [
      { type: "p", text: "Liquidity Locks and Burns are among the most quoted safety claims in new token launches, and among the least verified. A project can claim its liquidity is locked while the lock is short, partial, or held by a contract the team still controls. On Tuesday 3 November 2026, with total crypto market capitalization around $2.67 trillion and the Binance story in the news, with the FBI attributing the roughly $6.3 billion 29 October theft to North Korea's TraderTraitor group, trust in unverified claims was in short supply. This guide gives the on-chain checks that separate real locks and burns from marketing." },
      { type: "h2", text: "What Locks and Burns Actually Mean" },
      { type: "p", text: "When liquidity is added to a decentralized exchange pool, the provider receives liquidity provider tokens, known as LP tokens, representing a claim on that pool. Locking liquidity means sending those LP tokens to a lock contract that releases them only after a set date. Burning liquidity means sending LP tokens to an address nobody controls, usually the zero address, so they can never be retrieved. Both arrangements prevent the team from suddenly withdrawing the pool, but they differ: a lock eventually expires, while a burn is permanent." },
      { type: "p", text: "Neither arrangement guarantees a token's price or the project's honesty. Locked liquidity can still lose value if the token price falls, and a project with burned liquidity can still fail, abandon development, or carry dangerous contract functions. Locks and burns protect against one specific abuse, the sudden removal of liquidity, and they should be weighed alongside supply checks, contract review, and team track record. A verified lock is a positive signal, not a complete safety verdict. The [glossary](/glossary) defines LP tokens, locks, and burns." },
      { type: "h2", text: "Verifying a Liquidity Lock" },
      { type: "p", text: "Verification starts on a block explorer. Find the lock contract, confirm it holds the LP tokens for the correct pool, and read the amount locked and the unlock date. Compare the locked amount with the total LP tokens issued: locking 10% of LP tokens while the team holds the other 90% offers little protection. Check who can extend, cancel, or modify the lock, because a lock the team can revoke early is not a lock at all. Reputable locking services publish these details publicly, but always confirm them on-chain rather than trusting a screenshot." },
      { type: "p", text: "Duration matters as much as existence. A lock expiring days after launch protects holders only briefly, while a lock of a year or more signals longer commitment, though even long locks eventually end. Note the unlock date in your calendar and reassess the position before it arrives, since liquidity removal becomes possible again at expiry. Also check whether new liquidity added later is locked too; an initial lock does not cover LP tokens minted afterward. For a wider view of safer venues, see the [best crypto arbitrage scanners](/best-crypto-arbitrage-scanners) page." },
      { type: "h2", text: "Verifying a Burn" },
      { type: "p", text: "A burn claim is verified by finding the burn transaction on-chain: LP tokens sent to an unspendable address, most commonly the zero address, in the amount claimed. Check that the tokens burned correspond to the real pool, not a different or fake pool, and that the amount is a meaningful share of total LP tokens. Partial burns are common and legitimate, but they should be described honestly: burning 20% of LP tokens while retaining 80% is not the same as burning the liquidity. If the project claims a full burn, the numbers must show it." },
      { type: "p", text: "Be careful with lookalike burn claims. Some projects send tokens, not LP tokens, to a burn address and describe it as burning the liquidity, which is a different and weaker claim. Others burn LP tokens for a pool that holds little value while the main trading pool remains unlocked. Always identify exactly which asset was burned, which pool it relates to, and what share of that pool's LP tokens it represents. If any link in that chain is unclear, treat the claim as unverified." },
      { type: "h2", text: "A Pre-Buy Verification Routine" },
      { type: "p", text: "Combine the checks into a short routine before buying any launch that leans on lock or burn claims. Confirm the pool address, find the LP token holders, verify the lock contract or burn transaction, record the amount and expiry date, and check whether the team retains unlocked LP tokens. Cross-check the project's statements against the on-chain record, and search for independent confirmation. If the lock cannot be found, the amounts do not match, or the team controls the lock contract, walk away: a launch that misstates its liquidity safety is unlikely to be trustworthy elsewhere." },
      {
        type: "callout",
        title: "Lock Claim Warning",
        text: "A claimed lock or burn means nothing until verified on-chain. Check the lock contract, the LP token amounts, and the expiry date yourself, and never buy on the basis of a screenshot or a marketing claim alone.",
        tone: "warning",
      },
      {
        type: "table",
        headers: ["Claim", "On-chain proof", "Warning sign"],
        rows: [
          ["Liquidity locked", "Lock contract holds LP tokens, dated expiry", "Team can revoke lock or holds most LP tokens"],
          ["Liquidity burned", "LP tokens sent to zero address", "Only tokens burned, not LP tokens, or wrong pool"],
          ["Long lock", "Expiry a year or more away", "Lock expires days after launch"],
          ["Full protection", "No single check proves this", "Treating a lock as a safety guarantee"]
        ],
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain a concept from this article in simple words, for example the difference between locking LP tokens and burning them, and help you draft a verification checklist to reuse before a launch." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is a liquidity lock?",
            a: "LP tokens are sent to a lock contract that releases them only after a set date, preventing the team from withdrawing pool liquidity before then.",
          },
          {
            q: "What is a liquidity burn?",
            a: "LP tokens are sent to an address nobody controls, usually the zero address, so that liquidity can never be withdrawn by anyone.",
          },
          {
            q: "How do I verify a lock?",
            a: "On a block explorer, confirm the lock contract holds LP tokens for the correct pool, check the locked amount against total LP tokens, and note the unlock date.",
          },
          {
            q: "Does locked liquidity make a token safe?",
            a: "No. It protects against sudden liquidity removal only. Price falls, contract risks, and project failure remain possible.",
          }
        ],
      },
  ],
};
