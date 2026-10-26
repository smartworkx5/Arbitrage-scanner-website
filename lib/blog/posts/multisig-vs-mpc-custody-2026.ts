import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "multisig-vs-mpc-custody-2026",
  title: "Multisig vs MPC: Choosing a Custody Model",
  description: "Multisig vs MPC custody compared honestly: transparency vs flexibility, cost differences, setup complexity, and which model fits your own threat profile.",
  keywords: [
      "Multisig vs MPC",
      "multisig custody",
      "MPC custody",
      "crypto custody models",
      "threshold signature",
      "digital asset custody comparison"
  ],
  datePublished: "2026-10-20",
  dateModified: "2026-10-20",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "Multisig and MPC are the two serious custody models for 2026. Here's an honest comparison of security, cost, and operational trade-offs — and how to choose.",
  image: "/images/blog/multisig-vs-mpc-custody-2026.svg",
  blocks: [
      { type: "p", text: "Multisig vs MPC is the custody decision serious holders face in 2026: two mature technologies for eliminating single-key risk, with genuinely different security properties, costs, and operational demands. Multisig requires multiple complete signatures recorded on-chain; MPC splits one key into shares that cooperate off-chain to produce a single signature. As institutional treasuries grow — Strive's 36,818 BTC, Metaplanet's expanding stack — the choice of custody model is no longer academic. It determines your failure modes, your costs, and what happens on the worst day." },
      { type: "p", text: "This guide compares the two models head-to-head across security, cost, operational complexity, privacy, and recovery — then gives you a decision framework based on your threat profile. It builds on our explainers of [MPC wallets](/blog/mpc-wallets-explained-2026) and [qualified custodians](/blog/qualified-custodians-crypto-2026); read those first if the cryptography is new to you. The short version: both beat single-key custody by a wide margin, and the right choice depends on what you fear most." },
      { type: "h2", text: "How Each Model Works, Briefly" },
      { type: "p", text: "In multisig, you create N independent key pairs and configure an on-chain contract or native script so that any M of them must sign for funds to move — 2-of-3 is the classic setup. Every signature is visible on the blockchain, and the quorum rule is enforced by the chain itself. In MPC, one private key is generated in a distributed ceremony and split into N shares; any T shares can jointly compute a signature off-chain through a cryptographic protocol, and the chain sees only a normal single-signature transaction. The key difference in one line: multisig distributes trust across multiple complete keys enforced on-chain, while MPC distributes trust across shares of one key enforced by cryptography off-chain. Both eliminate the single point of failure — but they replace it with different structures of trust." },
      { type: "h2", text: "Security Compared: Different Strengths, Different Weaknesses" },
      { type: "p", text: "Multisig's security is transparent and battle-tested: the quorum logic is on-chain, auditable by anyone, and does not depend on any off-chain party's software or availability. Its weaknesses are operational — key management complexity (you must generate, store, and back up N independent keys), and the fact that the quorum structure is visible on-chain, which can aid targeted attacks. MPC's security is elegant but opaque: no single device ever holds the key, shares can be refreshed without moving funds, and signing policies can be complex and flexible. Its weaknesses are implementation complexity (threshold-signing bugs have occurred) and, in most commercial setups, dependence on a provider's infrastructure to co-sign. A useful way to think about it: multisig fails when your key management fails; MPC fails when your provider or protocol fails. Choose the failure mode you can best mitigate." },
      { type: "h2", text: "Cost: On-Chain Fees vs Infrastructure" },
      { type: "p", text: "Multisig costs more per transaction because multiple signatures mean larger transaction sizes and higher fees — on Bitcoin, a 2-of-3 spend can cost roughly double a single-sig spend, and on Ethereum, multisig contract execution costs extra gas. For a vault that moves funds rarely, this is negligible; for active operations, it adds up. MPC produces standard single-signature transactions, so on-chain costs are identical to a normal wallet — but you pay in other ways: commercial MPC services charge platform or custody fees, and self-hosted MPC requires serious engineering investment. The honest accounting: multisig shifts cost to the blockchain (visible, per-transaction), while MPC shifts cost to infrastructure and vendors (recurring, less visible). For long-term [cold storage](/blog/cold-storage-best-practices-2026) that transacts quarterly, multisig's per-transaction premium is trivial; for an active treasury, MPC's flat economics often win." },
      {
        type: "table",
        headers: ["Dimension", "Multisig", "MPC"],
        rows: [
          ["Trust basis", "On-chain quorum, auditable", "Off-chain protocol + provider"],
          ["On-chain privacy", "Quorum visible on-chain", "Looks like normal transaction"],
          ["Transaction cost", "Higher (multiple signatures)", "Standard single-sig cost"],
          ["Key management", "N independent keys to secure", "Shares, no seed phrase"],
          ["Provider dependency", "None required", "Usually required to co-sign"],
          ["Policy flexibility", "Fixed quorum rules", "Complex programmable policies"],
          ["Maturity", "Battle-tested for a decade", "Maturing, protocol bugs possible"]
        ],
      },
      { type: "h2", text: "Operational Reality: Setup, Signing, and Recovery" },
      { type: "p", text: "Day-to-day operations differ more than the cryptography suggests. Multisig signing is a coordination exercise: gather M signers, each with their own device and secure environment, and collect signatures — straightforward but slow, which is actually a feature for vaults (haste is the enemy of custody). Recovery means replacing a lost key through the remaining quorum, which requires the other signers to be available and cooperative. MPC signing is smoother — often one tap on your phone plus the provider's co-signature — which makes it better for active use but means the provider is a live dependency: if their service is down during a market panic, your funds are temporarily immobile. Recovery in MPC is typically easier (identity-verified share restoration) but introduces the social-engineering surface of that identity layer. The operational question to ask: on your worst day — a crash, a hack scare, a lost device — which workflow will your actual humans execute correctly under stress?" },
      { type: "h2", text: "Privacy and Flexibility" },
      { type: "p", text: "MPC has a clear privacy advantage: the blockchain sees an ordinary transaction, revealing nothing about your custody structure, number of parties, or policies. Multisig announces its structure to the world — observers can see it is a 2-of-3 and, with enough analysis, cluster the participant addresses. For treasuries that do not want to advertise their security setup, this matters. MPC also wins on policy flexibility: signing rules can incorporate time locks, spending limits, whitelists, and approval workflows without touching the chain, and policies can be changed without moving funds. Multisig policies are comparatively rigid — changing the quorum usually means moving funds to a new address. If your custody needs will evolve (adding team members, changing approval thresholds), MPC's flexibility is a genuine operational advantage." },
      { type: "h2", text: "The Decision Framework" },
      { type: "p", text: "Choose multisig if: you want zero provider dependency, you value on-chain auditability, you transact infrequently, and you (or your team) can competently manage multiple independent keys. This is the right answer for most personal deep-storage vaults and for organizations with strong operational discipline. Choose MPC if: you want seedless UX and easy recovery, you transact actively, you need flexible programmable policies, and you accept a vetted provider as a dependency. This is the right answer for active treasuries, funds with staff turnover, and anyone who has ever lost a seed phrase. Many sophisticated setups use both: multisig for the deep vault, MPC for operating funds — layered custody where each layer's failure mode is covered by the other. Whatever you choose, the decision is only as good as the recovery procedure you have tested. An untested custody model is a hope, not a plan." },
      {
        type: "callout",
        title: "Risk Disclosure",
        text: "No custody model eliminates risk. Multisig fails through key-management errors and lost quorum members; MPC fails through provider outages, protocol bugs, and compromised recovery identities. Both require tested recovery procedures and operational discipline. Never store all assets under one model without understanding its specific failure modes.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant — a conversational helper for questions, writing, and working through ideas. For this topic, you can ask it to walk through a 2-of-3 multisig setup versus a 2-of-3 MPC setup for your situation, or to help you draft a threat model before you choose. Muse AI is not a trading tool and does not give financial advice." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      {
        type: "faq",
        items: [
          {
            q: "Is multisig or MPC more secure?",
            a: "Neither is universally more secure — they have different failure modes. Multisig's security is on-chain and auditable with no provider dependency, but demands rigorous key management. MPC eliminates seed phrases and offers flexible policies, but usually depends on a provider and complex protocols. Choose based on which failure mode you can mitigate better.",
          },
          {
            q: "Which costs more to operate, multisig or MPC?",
            a: "Multisig costs more per transaction (larger on-chain signatures); MPC costs more in infrastructure or vendor fees. For infrequent vault transactions, multisig's premium is trivial; for active treasuries, MPC's flat economics usually win.",
          },
          {
            q: "Can I use both multisig and MPC?",
            a: "Yes, and sophisticated holders often do: multisig for the deep-storage vault (maximum auditability, minimal trust) and MPC for operating funds (better UX, flexible policies). Layered custody means each layer's failure mode is covered by the other.",
          },
          {
            q: "Does MPC really have no seed phrase?",
            a: "Correct — there is no master seed phrase because the full key never exists in one place. Instead you have key shares and a recovery process (usually identity-verified). This removes seed-phrase risk but introduces recovery-process and provider risks you must understand.",
          }
        ],
      },
  ],
};
