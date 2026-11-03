import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "ethereum-slashing-explained-2026",
  title: "Ethereum Slashing Explained: What Actually Gets You Penalised",
  description: "Ethereum slashing explained: double-signing and surround votes trigger real penalties, while ordinary downtime costs far less. Know the key difference.",
  keywords: [
      "Ethereum Slashing",
      "validator slashing",
      "slashing penalties",
      "double signing",
      "surround vote",
      "validator offences"
  ],
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "Ethereum Slashing sounds terrifying, but it punishes only specific offences, and ordinary downtime is a far smaller penalty.",
  image: "/images/blog/ethereum-slashing-explained-2026.svg",
  blocks: [
      { type: "p", text: "On Tuesday 3 November 2026, ETH traded around $2,255, down about 1% in 24 hours, while the Fear and Greed Index sat at 26. For stakers, few words cause more anxiety than Ethereum Slashing, the severe penalty for validators that break the protocol's core voting rules. The fear is understandable but often misplaced: slashing does not punish ordinary downtime, slow machines, or missed attestations. It punishes two specific offences, double-signing and surround voting, and understanding exactly what those are turns a vague dread into a manageable checklist." },
      { type: "h2", text: "The two slashing offences" },
      { type: "p", text: "Double-signing, technically a double proposal, means a validator signs two different blocks for the same slot. Only one block can be valid for a slot, so signing two is proof the validator is trying to support conflicting histories. Surround voting means a validator signs attestations that contradict each other in a specific way: one attestation surrounds another, voting for a chain history that conflicts with an earlier vote the same validator made. Both offences share one trait: they are cryptographically provable misbehaviour, not accidents of connectivity. The protocol can show the two conflicting signatures and prove the validator signed both." },
      { type: "p", text: "Why does the protocol punish these so harshly? Because conflicting votes attack consensus itself. If validators could vote for two histories without cost, finality would be meaningless and the chain could split. Slashing makes equivocation expensive: the penalty starts at a fraction of the stake, grows if many validators commit the same offence around the same time, and ends with forced exit from the validator set. The correlation penalty is deliberate, since a lone mistake and a coordinated attack look identical at first, and the protocol charges more when the offence is widespread." },
      { type: "h2", text: "How slashing actually happens in practice" },
      { type: "p", text: "Almost every real slashing case traces back to a configuration mistake, not malice. The classic cause is running the same validator keys on two machines at once, for example after migrating to a new server without stopping the old one, or restoring a backup that replays old duties. Both machines sign, the signatures conflict, and slashing follows. Other causes include failover systems that activate a backup while the primary is still running, and key-management errors that duplicate a validator across setups. The pattern is consistent: slashing comes from duplication, so the whole prevention strategy is about never letting two live copies of a key exist." },
      { type: "p", text: "Prevention is therefore practical rather than theoretical. Run one validator instance per key, use slashing-protection databases that refuse to sign conflicting messages, and test failover procedures before relying on them. When migrating machines, stop the old instance completely and confirm it is down before starting the new one. When restoring from backup, use a backup that includes the slashing-protection database, not just the keys. These steps are unglamorous, but they are the difference between a boring staking operation and a costly lesson. For definitions of the key terms, see our [glossary](/glossary)." },
      { type: "h2", text: "Downtime is not slashing" },
      { type: "p", text: "This is the distinction most newcomers get wrong. A validator that goes offline misses attestations and earns small inactivity penalties, roughly equal to the rewards it would have earned. A machine down for a day loses a small amount; a machine down for a month loses more, but the losses stay proportional and the validator is not ejected for being offline. Slashing penalties, by contrast, start larger, include forced exit, and can reach several percent of stake or more in correlated events. Confusing the two leads to opposite mistakes: panicking over a brief outage, or underestimating the danger of duplicated keys." },
      { type: "p", text: "There is one middle case worth knowing: prolonged inactivity during a period when the chain fails to finalise triggers an inactivity leak, where offline validators lose stake gradually until the chain recovers. The leak is designed to restore finality, not to punish individuals, and it stops once enough validators return. It is still far smaller than slashing for ordinary outages, but it explains why extended downtime during a crisis costs more than the same downtime on a normal day. Keeping a machine online is good practice; duplicating keys is the real danger." },
      { type: "h2", text: "What to do if you are slashed, and how to avoid it" },
      { type: "p", text: "If slashing happens, the validator is force-exited and cannot rejoin with the same stake; the penalty is deducted and the remaining balance becomes withdrawable after the exit and withdrawal delays. There is no appeal process, since the offence is cryptographically proven. The practical response is to audit what duplicated the key, fix the setup, and treat it as an operational failure to learn from rather than a mystery to dispute. Pooled stakers face this differently: the pool's operators manage keys, and a slashing event may be absorbed across the pool or covered by insurance, depending on the pool's design, which is another policy worth checking before depositing." },
      { type: "p", text: "The checklist for solo stakers is short. One live instance per key, always. Slashing protection enabled and backed up with keys. Migration done by stopping before starting, never the reverse. Failover tested in advance, not improvised during an outage. Follow those four rules and slashing risk falls to near zero, leaving only the ordinary, manageable costs of downtime. For how operational risks compound across venues, our guide to [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) shows why small failures matter most in stressed markets." },
      {
        type: "list",
        items: [
        "Slashing offence 1: double-signing, two blocks for the same slot",
        "Slashing offence 2: surround voting, contradictory attestations",
        "Usual cause: same keys running on two machines at once",
        "Prevention: one live instance per key, slashing protection, stop-before-start migration",
        "Downtime alone: small inactivity penalties, not slashing or ejection"
        ],
      },
      {
        type: "callout",
        title: "Risk note",
        text: "Slashing penalties are real, cryptographically proven, and irreversible, with forced exit and losses that grow when many validators offend together. Key duplication is the main cause, so never run the same validator keys on two live machines. This article is educational, not financial advice.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can explain a topic like slashing in simple words, or compare two ideas side by side, such as slashing versus ordinary downtime penalties. It can also draft a short research checklist of validator setup steps that prevent key duplication. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What gets a validator slashed?",
            a: "Two offences: double-signing, meaning signing two different blocks for the same slot, and surround voting, meaning signing attestations that contradict an earlier vote from the same validator. Both are cryptographically provable.",
          },
          {
            q: "Does going offline cause slashing?",
            a: "No. Offline validators earn small inactivity penalties roughly equal to missed rewards, but they are not slashed or ejected for downtime alone. Prolonged inactivity during a finality failure triggers a gradual leak, which is still far smaller than slashing.",
          },
          {
            q: "What is the most common cause of slashing?",
            a: "Running the same validator keys on two machines at once, usually during a migration or failover where the old instance was not fully stopped. Prevention means one live instance per key and slashing protection.",
          },
          {
            q: "Can a slashed validator rejoin?",
            a: "No. Slashing ends with forced exit from the validator set, the penalty is deducted, and the remaining balance becomes withdrawable after exit and withdrawal delays. There is no appeal, since the offence is proven by conflicting signatures.",
          }
        ],
      },
  ],
};
