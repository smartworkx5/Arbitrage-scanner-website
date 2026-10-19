import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "quantum-vulnerable-bitcoin-coins-2026",
  title: "Which Bitcoin Coins Are Quantum-Vulnerable? Lost Coins and Reused Addresses",
  description: "Not all Bitcoin carries equal quantum risk. Learn which coins are exposed: reused addresses, spent-from outputs, Satoshi-era coins, and lost coins in 2026.",
  keywords: [
      "reused addresses",
      "exposed bitcoin UTXO",
      "address reuse quantum",
      "Satoshi coins quantum",
      "lost bitcoin quantum",
      "bitcoin UTXO quantum risk"
  ],
  datePublished: "2026-10-19",
  dateModified: "2026-10-19",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "Quantum risk is not spread evenly across Bitcoin. Coins in reused or spent-from addresses carry the theoretical exposure, while coins in fresh, never-spent addresses do not. Here is the full breakdown.",
  image: "/images/blog/quantum-vulnerable-bitcoin-coins-2026.svg",
  blocks: [
      { type: "p", text: "When people ask whether quantum computers threaten Bitcoin, they usually imagine all coins equally at risk. The reality is more uneven. Quantum risk in Bitcoin depends on one specific fact: whether the public key behind an address has been revealed on the blockchain. Coins whose public keys have never been revealed are not exposed to the theoretical quantum attack on signatures. Coins whose public keys are visible are, in theory, exposed, because a sufficiently powerful quantum computer could derive the private key from the public key. This distinction divides Bitcoin's supply into very different risk groups, from fresh unspent addresses to reused addresses, spent-from outputs, and long-dormant Satoshi-era coins. As of October 2026, no quantum computer can break Bitcoin, so this is a map of theoretical exposure, not a list of coins in danger today. On 2026-10-19, Bitcoin traded around $82,100 to $82,600, and nothing in the market suggested quantum urgency. The map still matters, because it tells holders exactly where the exposure sits." },
      { type: "h2", text: "The Key Rule: Exposed Public Keys Create the Exposure" },
      { type: "p", text: "Bitcoin addresses are derived from public keys through hashing, and the hash hides the public key. When you receive coins at an address, the network sees the address, not the public key. When you spend coins from that address, you must reveal the public key to prove the signature is valid, and from that moment the public key is permanently visible on the blockchain. A future quantum computer running Shor's algorithm could theoretically take that visible public key and compute the private key, then spend any coins still sitting in that address. The attack only works on coins that remain in an address after its public key has been revealed. Coins that were fully spent and never reused are gone from that address, so there is nothing left to steal. The exposure is therefore specific: it is about coins still sitting in addresses whose public keys have been revealed." },
      { type: "p", text: "This rule explains why address hygiene is the single most effective quantum defense available today. If you never reuse an address after spending from it, your coins are never left sitting behind an exposed public key. Modern wallets handle this automatically by generating a fresh address for each transaction. Older habits, such as posting a single donation address and reusing it for years, do the opposite, leaving coins behind exposed keys. The [glossary](/glossary) defines public keys, addresses, and UTXOs for readers who want the foundations." },
      { type: "h2", text: "Reused Addresses: The Most Common Exposure" },
      { type: "p", text: "Address reuse is the largest source of quantum exposure among active users, and it is also the easiest to fix. Reuse happens when someone receives coins at an address, spends some of them, and then receives more coins at the same address later. After the first spend, the public key is visible, so the new coins sit behind an exposed key. Reuse was common in Bitcoin's early years, when wallets did not automatically generate fresh addresses, and it still happens today with static donation addresses, exchange deposit addresses, and users who copy one address for all purposes. Every reused address holding a balance is, in theory, a quantum target." },
      { type: "p", text: "The fix is simple: never reuse an address. Use a wallet that generates fresh addresses, and treat every address as single-use. If you have coins sitting in a reused address, moving them to a fresh address removes the exposure, because the fresh address has never revealed its public key. There is no need to panic, since no quantum computer can exploit the exposure today, but there is also no reason to keep coins in a reused address when moving them costs one ordinary transaction. Traders who move coins between venues already practice this kind of hygiene when they manage spreads across exchanges, as described in [cross-exchange arbitrage](/guides/cross-exchange-arbitrage)." },
      { type: "h2", text: "Spent-From Outputs and Change Addresses" },
      { type: "p", text: "A subtler form of exposure involves change addresses. When you spend part of the coins in an address, the remainder usually returns to you as change at a new address. Good wallets send change to a fresh address, which is safe. But some older wallets and careless setups send change back to the same address that was just spent from, which means the change sits behind an exposed public key. Similarly, partially spent outputs, where an address still holds a balance after a spend, are exposed for the same reason. The pattern is the same as reuse: any balance remaining in an address after that address has spent coins is behind an exposed key." },
      { type: "p", text: "Modern wallets handle change correctly by default, so most users today do not face this problem. The exposure mainly affects holders using very old wallets, custom setups, or manual coin management. If you manage your own coins manually, check whether your change goes to fresh addresses. If it does not, consider switching to a modern wallet. This is also a good reason to avoid consolidating many old outputs into one address and leaving the result there, since consolidation itself reveals keys and the consolidated balance then sits behind an exposed key." },
      {
        type: "table",
        headers: ["Coin group", "Public key exposed?", "Quantum exposure"],
        rows: [
          ["Fresh, never-spent addresses", "No", "Not exposed"],
          ["Reused addresses with balance", "Yes", "Theoretically exposed"],
          ["Spent-from addresses with balance", "Yes", "Theoretically exposed"],
          ["Fully spent addresses", "Yes, but no coins left", "Nothing left to steal"],
          ["Lost coins in old addresses", "Varies", "Exposed if key revealed, unrecoverable anyway"]
        ],
      },
      { type: "h2", text: "Satoshi-Era Coins and the Long-Dormant Supply" },
      { type: "p", text: "The most discussed group of potentially exposed coins is the Satoshi-era supply: coins mined in Bitcoin's earliest years, many sitting in addresses that use the oldest format, which reveals the public key directly without any hashing layer. These addresses, including those associated with the earliest mining, have their public keys visible by design, so they are theoretically exposed in a way that modern addresses are not. Some of these coins have not moved in over a decade, and many are presumed lost or held by people who are no longer active. If a quantum computer ever became capable of deriving private keys, these dormant coins would be among the first targets, because their keys are already public and their owners may never move them." },
      { type: "p", text: "It is important to keep this in perspective. The Satoshi-era coins have sat unmoved through every market cycle, and their exposure is theoretical until a cryptographically relevant quantum computer exists, which researchers estimate is years to decades away. The coins are also not a systemic threat to Bitcoin itself: even in a worst-case scenario, an attacker could only steal the specific coins behind exposed keys, not rewrite the blockchain or create new coins. The network would continue to function. The Satoshi-era coins are a fascinating case study in quantum exposure, but they are not a reason for ordinary holders to panic." },
      { type: "h2", text: "Lost Coins: Exposed, But Already Gone" },
      { type: "p", text: "A large share of Bitcoin's supply is believed to be lost: coins whose owners lost their keys, died without passing them on, or sent them to unspendable addresses. Lost coins overlap heavily with the quantum-exposed groups, because many were lost in early addresses that have exposed keys or in addresses that were spent from and then abandoned. In theory, a future quantum computer could recover some lost coins by deriving their private keys. In practice, that possibility raises difficult questions. Should coins that an attacker recovers count as theft, or as salvage? Would the recovery of lost coins increase the effective supply and pressure the price? The community has no settled answers, and the debate is part of the broader discussion about whether a future migration should include a deadline for moving coins." },
      {
        type: "callout",
        title: "Lost does not mean safe from theory",
        text: "Some lost coins sit behind exposed public keys, so they are theoretically recoverable by a future quantum computer. That is a debate for the community, not a danger to active holders today.",
        tone: "info",
      },
      { type: "p", text: "For active holders, the lesson is clear: the coins that matter are yours, and your exposure is under your control. Keep coins in fresh, never-spent addresses, avoid reuse, and use a modern wallet. Risk disclosure: this article is educational, not financial advice. The far more immediate risks to Bitcoin holders are price volatility, custody mistakes, and scams. On 2026-10-19, Bitcoin traded around $82,100 to $82,600 while gold sat near $4,178 to $4,185 per ounce, and ordinary market risk, not quantum risk, was what moved portfolios. Readers who want to understand how market risk works across venues can read [spot-futures arbitrage](/guides/spot-futures-arbitrage) and [funding rate arbitrage](/guides/funding-rate-arbitrage)." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you understand which Bitcoin coins carry quantum exposure. Ask it to explain the difference between exposed and unexposed public keys in simple words, walk through why address reuse creates risk, or draft a checklist for moving coins to fresh addresses." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Are all Bitcoin coins equally vulnerable to quantum computers?",
            a: "No. Only coins sitting in addresses whose public keys have been revealed are theoretically exposed. Coins in fresh, never-spent addresses are not exposed.",
          },
          {
            q: "Does address reuse create quantum risk?",
            a: "Yes, in theory. After you spend from an address, its public key is visible. Any coins that later arrive at that reused address sit behind an exposed key.",
          },
          {
            q: "What about Satoshi-era coins?",
            a: "Many early coins sit in the oldest address format, which reveals public keys directly. They are theoretically exposed, but no quantum computer can exploit that today.",
          },
          {
            q: "Can quantum computers recover lost Bitcoin?",
            a: "In theory, a future quantum computer could derive private keys for lost coins behind exposed public keys. Whether that counts as theft or salvage is an unsettled community debate.",
          }
        ],
      },
  ],
};
