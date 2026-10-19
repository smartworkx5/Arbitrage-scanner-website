import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "bitcoin-post-quantum-cryptography-2026",
  title: "Post-Quantum Cryptography for Bitcoin: The Migration Options",
  description: "Bitcoin will need quantum-resistant signatures one day. Explore post-quantum signature schemes, migration paths, and trade-offs the community weighs in 2026.",
  keywords: [
      "quantum cryptography",
      "bitcoin quantum migration",
      "post-quantum signatures",
      "quantum-resistant bitcoin",
      "bitcoin upgrade quantum",
      "PQC bitcoin"
  ],
  datePublished: "2026-10-19",
  dateModified: "2026-10-19",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "Bitcoin does not need to switch signatures tomorrow, but it does need a plan. Here are the post-quantum signature options, how migration could work, and the trade-offs involved.",
  image: "/images/blog/bitcoin-post-quantum-cryptography-2026.svg",
  blocks: [
      { type: "p", text: "Post-quantum cryptography is the family of cryptographic algorithms designed to resist attacks from quantum computers. For Bitcoin, the question is not whether post-quantum signatures exist, because they do, but which ones fit Bitcoin's constraints and how the network would adopt them. Bitcoin is decentralized, conservative about changes, and deeply concerned with keeping the network usable for ordinary people. Any post-quantum migration must respect all three realities. As of October 2026, no quantum computer can break Bitcoin, and no migration is urgent, but researchers and developers are actively discussing options so that a tested path exists long before it is needed. On 2026-10-19, Bitcoin traded around $82,100 to $82,600, and the market was focused on ordinary concerns such as ETF flows and October weakness, not on cryptography. That breathing room is exactly what makes now the right time to plan." },
      { type: "h2", text: "Why Bitcoin Needs a Post-Quantum Plan" },
      { type: "p", text: "Bitcoin's current signature scheme, based on elliptic curve cryptography, is efficient and well tested, but it is the one component that a sufficiently powerful quantum computer could theoretically break using Shor's algorithm. Hashing, by contrast, is far more resistant to quantum attack, because quantum computers offer only a modest speedup against hash functions. This asymmetry shapes the whole migration debate: Bitcoin does not need to replace everything, only the signature layer, and even that replacement can happen gradually. The plan must also handle the fact that some coins sit in addresses whose public keys are already exposed, and whose owners may never move them. A migration that only protects active users leaves a long tail of exposed coins behind, and the community must decide what, if anything, to do about them." },
      { type: "p", text: "Planning early matters because Bitcoin upgrades are slow by design. Changes require broad agreement among developers, miners, exchanges, wallet providers, and users, and each group moves at its own pace. The network has upgraded its address formats before, and those experiences show that adoption takes years even when everyone agrees the change is good. Starting the post-quantum discussion now means the migration can proceed at Bitcoin's normal deliberate pace instead of under crisis pressure. For context on how Bitcoin upgrades interact with market conditions, see the [glossary](/glossary) and the [blog](/blog)." },
      { type: "h2", text: "The Main Post-Quantum Signature Families" },
      { type: "p", text: "Post-quantum signature schemes fall into a few broad families, each with strengths and weaknesses for Bitcoin. Lattice-based signatures are among the most studied and offer relatively balanced sizes and speeds, but their security rests on mathematical problems that, while well researched, are newer than the elliptic curve assumptions Bitcoin relies on today. Hash-based signatures rest on the security of hash functions, which is well understood and conservative, but they can produce larger signatures and may require careful key management, since some designs can only sign a limited number of messages per key. Other families exist too, but the practical debate for Bitcoin centers on balancing signature size, verification speed, key size, and confidence in the underlying mathematics." },
      {
        type: "table",
        headers: ["Family", "Strength", "Main trade-off for Bitcoin"],
        rows: [
          ["Lattice-based", "Balanced sizes, fast verification", "Security rests on newer assumptions"],
          ["Hash-based", "Conservative, rests on hash security", "Larger signatures, key management rules"],
          ["Other PQC families", "Diverse security foundations", "Less studied, varied performance"]
        ],
      },
      { type: "p", text: "Signature size matters more for Bitcoin than for most systems, because every signature is stored on the blockchain forever, and larger signatures mean larger transactions, higher fees, and more storage for every node. Verification speed matters too, because every node must verify every signature. A scheme that is secure but slow or bulky could make Bitcoin more expensive and harder to run, which is a real cost. This is why the post-quantum discussion is not simply a matter of picking the most secure algorithm. It is a negotiation between security, efficiency, and the practical needs of a global network that must keep working for everyone, including users with limited bandwidth and storage." },
      { type: "h2", text: "How Migration Could Work in Practice" },
      { type: "p", text: "The most widely discussed migration path is a voluntary, opt-in upgrade. Bitcoin would introduce a new address type that uses post-quantum signatures, and users would move their coins to these addresses at their own pace. This mirrors how the network adopted earlier address formats: new options appear, wallets support them, and users migrate gradually. Active users who follow the guidance would become quantum-resistant, while inactive or lost coins would remain in older address types. This approach respects Bitcoin's principle that no one can be forced to move their coins, and it avoids the risks of a sudden, mandatory switchover. The trade-off is that migration would be incomplete for a long time, and the long tail of unmoved coins would remain exposed in theory." },
      { type: "p", text: "A more aggressive option sometimes discussed is setting a deadline after which old address types can no longer spend coins, effectively forcing migration. Supporters argue this is the only way to fully close the quantum exposure, since lost and dormant coins would otherwise remain vulnerable forever. Critics argue that confiscating coins from holders who fail to migrate would violate Bitcoin's core promise that ownership is not conditional on keeping up with upgrades, and that it could destroy coins belonging to people who are incapacitated, deceased, or simply unaware. The community has not settled this debate, and it may never need to if quantum computers remain distant. For now, the voluntary path is the realistic one, and the debate itself is a sign of healthy governance." },
      { type: "h2", text: "Migration Trade-Offs the Community Is Weighing" },
      { type: "p", text: "Every migration option involves trade-offs beyond cryptography. Larger signatures could raise fees and slow adoption among users who transact frequently. New address types require wallet developers to build and test support, exchanges to update their systems, and users to learn new habits. There is also a coordination challenge: a migration only works if enough of the ecosystem moves together, because an address type that no wallet supports is useless. The community must also decide how to handle the transition period, during which both old and new signature types are valid, and how to communicate the change to millions of holders who do not follow technical debates. Clear, patient communication will matter as much as the cryptography itself." },
      {
        type: "list",
        items: [
        "Signature size affects fees, storage, and node costs for everyone.",
        "Voluntary migration protects active users but leaves dormant coins exposed.",
        "Forced migration would close the exposure but raises deep ownership questions.",
        "Wallet and exchange support decides whether a new address type is usable.",
        "Communication to ordinary holders matters as much as the algorithm choice."
        ],
      },
      { type: "h2", text: "What Holders Can Do While the Plan Develops" },
      { type: "p", text: "Holders do not need to take any post-quantum action today, because no quantum computer threatens Bitcoin now and no migration has been adopted. The useful habits are the same ones that protect against current risks: use fresh addresses, avoid address reuse, keep your recovery phrase secure, and use wallets that are actively maintained. When a post-quantum address type eventually appears, migrating active funds to it will likely be a straightforward wallet operation, similar to past address upgrades. Holders who keep their wallets updated and follow reputable sources will be well positioned. There is no need to pay for a quantum-proof product today, and anyone selling one should be treated with skepticism." },
      { type: "p", text: "Risk disclosure: post-quantum cryptography is an evolving field, and the schemes discussed today may change as research advances. This article is educational, not financial advice. The broader lesson applies beyond quantum risk: Bitcoin's real day-to-day risks are volatility, custody, and regulation. On 2026-10-19, Bitcoin traded around $82,100 to $82,600, and gold traded near $4,178 to $4,185 per ounce, a reminder that markets reward attention to present conditions as well as future ones. Readers interested in how traders manage risk across venues can explore [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) and [funding rate arbitrage](/guides/funding-rate-arbitrage)." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you understand post-quantum cryptography for Bitcoin. Ask it to compare lattice-based and hash-based signatures in simple words, explain how a voluntary address migration would work, or summarize the trade-offs between signature size and security." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is post-quantum cryptography?",
            a: "Cryptography designed to resist attacks from quantum computers. For Bitcoin, it mainly means signature schemes that a quantum computer running Shor's algorithm could not break.",
          },
          {
            q: "Will Bitcoin have to replace all its cryptography?",
            a: "No. Hashing is far more resistant to quantum attack. The migration mainly concerns the signature layer, which can be upgraded gradually through new address types.",
          },
          {
            q: "How would a Bitcoin quantum migration work?",
            a: "The most realistic path is voluntary: Bitcoin adds a new quantum-resistant address type, and users move coins to it at their own pace, as with earlier address upgrades.",
          },
          {
            q: "Do holders need to do anything about quantum risk now?",
            a: "No urgent action is needed. Use fresh addresses, avoid reuse, keep recovery phrases secure, and stay informed. No quantum computer can break Bitcoin today.",
          }
        ],
      },
  ],
};
