import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "institutional-custody-insurance-2026",
  title: "Crypto Custody Insurance: What Is Actually Covered",
  description: "Crypto custody insurance decoded: crime vs specie policies, what exclusions actually exclude, and why a claim paying out is rarer than the marketing suggests.",
  keywords: [
      "Crypto Custody Insurance",
      "custody insurance crypto",
      "crime policy crypto",
      "specie insurance digital assets",
      "crypto insurance exclusions",
      "institutional custody insurance"
  ],
  datePublished: "2026-10-20",
  dateModified: "2026-10-20",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "'We are insured' is the most abused sentence in crypto custody. Here's what custody insurance actually covers, what it excludes, and how claims really work.",
  image: "/images/blog/institutional-custody-insurance-2026.svg",
  blocks: [
      { type: "p", text: "Crypto Custody Insurance is the safety net everyone assumes exists and almost nobody has read the terms of. 'We are insured' appears on custodian websites as a trust signal, but the reality behind it is a patchwork of crime policies, specie policies, sublimits, and exclusions that determine what — if anything — pays out when coins disappear. As of October 20, 2026, with institutional treasuries like Strive's 36,818 BTC and BitMine's 12,535 ETH sitting in professional custody, insurance is a standard line item in [custodian selection](/blog/qualified-custodians-crypto-2026) — which makes understanding it a practical skill, not a legal curiosity." },
      { type: "p", text: "This guide decodes the two main policy types, walks through the exclusions that actually matter, explains how claims work in practice (including why payouts are rarer than marketing suggests), and tells you what to ask any custodian about their coverage. The goal is simple: after reading this, no insurance claim on a website should impress you until you have seen the policy." },
      { type: "h2", text: "The Two Policy Types: Crime and Specie" },
      { type: "p", text: "Custody insurance in crypto generally comes in two flavors. Crime policies (often called fidelity or D&O-adjacent crime coverage) protect against employee dishonesty, theft, and certain types of fraud — the insider-threat scenario. Specie policies, borrowed from the fine-art and precious-metals world, cover physical loss or damage to assets in storage or transit — adapted for crypto, they cover the private keys and signing infrastructure held in vaults. In practice, institutional custodians layer both: crime coverage for the human risks, specie coverage for the vault risks. The key insight is that neither is a general 'if anything bad happens we pay' policy. Each covers a defined set of perils, up to defined limits, with defined exclusions — and the definitions are where claims live or die." },
      { type: "h2", text: "What Is Typically Covered" },
      { type: "p", text: "Under a well-structured program, covered events usually include: theft of private keys from the custodian's vaults or HSMs by external attackers; employee theft or collusion (within the crime policy's terms); physical destruction of key material in certified storage; and losses during insured transit of key material between facilities. Coverage applies to assets in the custodian's defined 'premises' — which, for crypto, means specified wallet infrastructure, not every address the custodian touches. Limits are set per occurrence and in aggregate, and serious custodians carry nine-figure programs. But note the framing: the policy protects the custodian's liability to its clients. Whether you, the client, actually recover depends on the custodian's contractual liability to you and the policy's terms — insurance does not automatically make clients whole." },
      { type: "h2", text: "The Exclusions That Actually Matter" },
      { type: "p", text: "Exclusions are where insurance marketing goes to die. Standard exclusions include: losses from market movements (a crash is not an insured event — the $1.3B liquidation wave cost traders real money and no policy covers it); losses from smart-contract bugs or protocol exploits in DeFi positions the custodian staked or deployed into; social-engineering losses where the client was tricked (phishing you is not the custodian's insured peril); losses from assets the custodian was not contractually holding; and — critically — often, losses arising from the custodian's own insolvency or fraud at the corporate level, which is exactly the scenario clients fear most. War, terrorism, and regulatory-seizure exclusions are also standard. Read any policy's exclusion section first; it is shorter than the coverage section and more informative." },
      { type: "h2", text: "Sublimits, Deductibles, and the Fine Print" },
      { type: "p", text: "Even within covered perils, the numbers matter. Policies carry sublimits — for example, a $100M program might sublimit hot-wallet coverage to $10M, which matters enormously because hot wallets are where most thefts happen. Deductibles (the custodian's retained loss before insurance pays) can be large. Coverage is also typically written on specific wallet infrastructure: assets in a newly added chain or a novel staking arrangement may not be covered until the insurer endorses them. And policies renew annually with terms that can change — the coverage your custodian had last year is not proof of this year's coverage. When a custodian says 'insured up to $X,' the honest follow-ups are: per occurrence or aggregate? What is the hot-wallet sublimit? What is excluded? May I see the certificate and the exclusion schedule? A custodian that answers these crisply is more trustworthy than one with a bigger headline number and no details." },
      { type: "h2", text: "How Claims Actually Work (and Why Payouts Are Rare)" },
      { type: "p", text: "Here is the uncomfortable truth: public, verified payouts on crypto custody insurance are rare. The claims process requires proving the loss falls within a covered peril, quantifying it, and surviving the insurer's investigation — which will scrutinize the custodian's security practices for any breach of policy warranties (did they follow the procedures the policy required?). Insurers can and do dispute claims, and litigation takes years. Meanwhile, the largest crypto losses in history — exchange collapses, DeFi exploits, bridge hacks — largely fell outside custody insurance entirely, either because the assets were not in insured custody or the peril was excluded. Insurance is a real but narrow backstop: it meaningfully covers specific vault-theft scenarios at serious custodians, and it is nearly irrelevant to the losses most crypto holders actually suffer. Treat it as one layer in [a custody strategy](/blog/cold-storage-best-practices-2026), not as a guarantee." },
      { type: "h2", text: "What to Ask Your Custodian" },
      { type: "p", text: "Turn this knowledge into due diligence with five questions. One: crime policy, specie policy, or both — and who is the insurer? Two: what are the per-occurrence and aggregate limits, and the hot-wallet sublimit? Three: what are the exclusions — specifically, is custodian insolvency covered, and are staked or DeFi-deployed assets covered? Four: may I see the certificate of insurance and the exclusion schedule, dated this year? Five: in the event of a loss, what is the contractual claims process between the custodian and me — do I claim against the custodian, and does the policy respond to that liability? If the custodian cannot answer, or answers with marketing language, you have learned something important about their insurance: it was purchased for the website, not for you." },
      {
        type: "callout",
        title: "Risk Disclosure",
        text: "Custody insurance is narrow: it covers defined perils up to defined limits with extensive exclusions, and verified payouts are rare. It does not cover market losses, most DeFi exploits, client-side phishing, or — often — custodian insolvency itself. Never choose a custodian on insurance marketing alone; verify limits, sublimits, and exclusions independently.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant — a conversational helper for questions, writing, and working through ideas. For this topic, you can ask it to explain the difference between crime and specie policies in plain terms, or to help you draft the five due-diligence questions to send a custodian. Muse AI is not a trading tool and does not give financial advice." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      {
        type: "faq",
        items: [
          {
            q: "What does crypto custody insurance actually cover?",
            a: "Typically theft of keys from the custodian's vaults, employee dishonesty (crime policy), and physical loss of key material (specie policy) — up to defined limits and sublimits. It does not cover market losses, most DeFi exploits, client phishing, or often custodian insolvency.",
          },
          {
            q: "What is the difference between crime and specie policies?",
            a: "Crime policies cover human risks like employee theft and fraud; specie policies cover physical loss or damage to assets in storage or transit, adapted from the precious-metals world. Institutional custodians usually layer both.",
          },
          {
            q: "Why are insurance payouts in crypto so rare?",
            a: "Most historic crypto losses fell outside custody insurance — wrong peril, wrong assets, or excluded scenarios like insolvency. Claims also require proving the loss fits a covered peril and surviving insurer investigation, which can take years.",
          },
          {
            q: "What should I ask a custodian about insurance?",
            a: "Policy types and insurer, per-occurrence and aggregate limits, hot-wallet sublimits, the full exclusion list, a current certificate, and the contractual claims process. Crisp answers signal real coverage; marketing language signals the opposite.",
          }
        ],
      },
  ],
};
