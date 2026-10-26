import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "corporate-crypto-custody-policy-2026",
  title: "Corporate Crypto Custody Policies: Controls Boards Should Require",
  description: "Corporate crypto custody policies boards should require: segregation, dual approval, custodian oversight, audits, and incident plans that protect assets.",
  keywords: [
      "Corporate Crypto Custody",
      "board custody controls",
      "corporate crypto policy",
      "segregation of assets",
      "custodian oversight",
      "crypto audit controls"
  ],
  datePublished: "2026-10-26",
  dateModified: "2026-10-26",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "A board that approves crypto holdings without a custody policy is accepting unknown risk. This guide sets out the controls directors should require before a company holds digital assets.",
  image: "/images/blog/corporate-crypto-custody-policy-2026.svg",
  blocks: [
      { type: "p", text: "Corporate Crypto Custody begins at board level, not in the IT department. When a company holds bitcoin, ether, or stablecoins on its balance sheet, the board is responsible for the same duties it owes over cash: safeguarding assets, preventing fraud, and ensuring accurate reporting. Yet many companies adopt crypto faster than they adopt the controls around it, leaving treasury teams to improvise with personal wallets, shared passwords, and undocumented procedures. A written custody policy closes that gap by stating, before any holding grows large, who may move assets, how much, under what approvals, and with what oversight." },
      { type: "p", text: "The policy also protects the people running the operation. Clear rules remove ambiguity for treasury staff, give auditors something concrete to test, and give directors evidence that they exercised care. In October 2026, with bitcoin near $79,600 to $80,150 and ether near $2,310 to $2,330, even a mid-sized corporate holding represents serious money, and the Federal Open Market Committee meets October 27 to 28, which may move prices sharply. A company holding crypto through that meeting needs controls that work under volatility, not only in calm markets. For the mechanics of moving assets between venues, see [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) and [triangular arbitrage](/guides/triangular-arbitrage)." },
      { type: "h2", text: "What a Custody Policy Must Cover" },
      { type: "p", text: "A useful policy starts with scope: which assets the company may hold, which chains and venues are approved, and what purposes holdings serve, whether treasury reserves, customer payments, or trading. It should state maximum holdings per asset and per venue, so a single position cannot quietly grow into a concentration risk. It should also define the storage model: what share sits in hot wallets, what share in cold storage, and what share with a custodian, with thresholds that trigger rebalancing. Without these limits, a policy is a statement of intent rather than a control." },
      { type: "p", text: "The policy must also assign roles. Trading, custody approval, and reconciliation should sit with different people, so no one person can initiate, approve, and hide a transfer. It should name the officers authorized to approve transfers at each size tier, require dual approval above a threshold, and set a process for emergency transfers that still leaves an audit trail. Companies often resist this formality when holdings are small, but controls are cheapest to install before holdings grow, and retrofitting them after a loss is both expensive and embarrassing." },
      { type: "h2", text: "Segregation, Wallets, and Key Management" },
      { type: "p", text: "Segregation is the first principle of corporate custody. Company assets must never mix with employee assets, customer funds must never mix with company funds unless a documented and lawful structure allows it, and each business purpose should have its own wallets. Mixing creates accounting confusion, legal exposure, and a single compromised wallet that endangers everything. The policy should require separate wallets per venue and purpose, with an inventory that maps every wallet to its owner, purpose, signers, and approval rules." },
      { type: "p", text: "Key management rules should specify how keys are generated, stored, backed up, and retired. Generation should happen in a controlled environment, never on a personal device; backups should be encrypted and stored in at least two separate locations; and access to backups should require the same dual approval as a transfer. The policy should also cover key-person risk: what happens if the treasurer resigns, is incapacitated, or becomes unavailable. A company whose crypto access depends on one employee's memory has a governance failure, not a technology problem, and the board should treat it as such." },
      { type: "h2", text: "Custodian Selection and Ongoing Oversight" },
      { type: "p", text: "If the company uses an external custodian, the policy should set selection criteria and oversight duties. Before signing, management should verify whether client assets are segregated or held in omnibus wallets, what insurance covers and excludes, how quickly withdrawals can be made, and what happens if the custodian fails. These answers belong in the board pack, not only in a sales deck. The policy should also require a second custody option, because reliance on a single custodian is a concentration risk that the board should consciously accept or mitigate." },
      { type: "p", text: "Oversight must continue after onboarding. The policy should require daily reconciliation of custodian balances against internal records, periodic review of the custodian's audit reports and regulatory standing, and a test withdrawal of meaningful size before large balances are committed. It should also set triggers for escalation: a delayed withdrawal, a change in the custodian's ownership, or a downgrade in its audit opinion should reach the board promptly. A custodian relationship that nobody reviews is an assumption, not a control, and assumptions are what fail in a crisis." },
      { type: "h2", text: "Accounting, Reporting, and Audit" },
      { type: "p", text: "Custody policy and accounting policy must agree. The policy should state how holdings are valued, which price sources are used, how often valuations are updated, and who may override a price. With bitcoin below $80,000 on October 26, 2026, after a roughly 1 percent daily decline, valuation timing can change a reported position materially, so the company needs a consistent, documented approach rather than ad hoc picks. It should also define how transfers are recorded, so every on-chain movement maps to an internal journal entry that an auditor can trace." },
      { type: "p", text: "Internal audit should test custody controls directly: sample transfers for approvals, verify wallet inventories, confirm custodian balances independently, and check that terminated employees lost access promptly. External auditors will ask the same questions, and a company that cannot produce wallet inventories, approval logs, and reconciliation records will face a difficult audit. The board's audit committee should receive a custody report at least quarterly, covering holdings, movements, exceptions, and any control failures, in plain language that non-technical directors can challenge." },
      { type: "h2", text: "Incident Response and Policy Review" },
      { type: "p", text: "No policy prevents every incident, so the policy must define what happens when one occurs. It should name the incident team, set the first-hour actions for freezing wallets and preserving logs, and define who notifies exchanges, custodians, insurers, auditors, and regulators. It should also set decision authority for exceptional transfers during an incident, because a team that must improvise approvals during a theft will either move too slowly or bypass controls entirely. A tabletop exercise at least once a year, involving directors as well as staff, keeps the plan realistic." },
      { type: "p", text: "Finally, the policy itself needs a review cycle. The board should reapprove it annually and after any material change: a new asset class, a new custodian, a new jurisdiction, or a significant incident. Each review should ask whether limits still fit the company's holdings, whether roles still match the org chart, and whether the policy reflects current technology and regulation. A custody policy written once and forgotten is worse than no policy at all, because it creates false confidence. The board's job is not to write perfect rules once, but to keep asking whether the rules still protect the assets." },
      {
        type: "list",
        items: [
        "Separate trading, approval, and reconciliation across different people",
        "Require dual approval above a set threshold, with an auditable trail",
        "Keep company, customer, and employee assets in separate wallets",
        "Reconcile custodian balances daily and review audits annually",
        "Rehearse incident response with a tabletop exercise every year"
        ],
      },
      {
        type: "table",
        headers: ["Control", "Board question", "Evidence to request"],
        rows: [
          ["Segregation", "Are assets separated by purpose?", "Wallet inventory and mapping"],
          ["Dual approval", "Who approves large transfers?", "Approval logs for sampled transfers"],
          ["Custodian oversight", "How is the custodian monitored?", "Reconciliations and audit reports"],
          ["Incident readiness", "What happens in the first hour?", "Exercise report and plan"]
        ],
      },
      {
        type: "callout",
        title: "Warning: undocumented custody is unmanaged risk",
        text: "If the board cannot see wallet inventories, approval logs, and reconciliation records, it cannot claim to oversee crypto holdings. Require the evidence, not just the assurance.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain board-level custody concepts like segregation of assets and dual approval in plain language, helping directors ask sharper questions about a policy draft." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Why does a board need a crypto custody policy?",
            a: "Because directors owe the same duty of care over digital assets as over cash. A policy defines who may move assets, under what approvals, and with what oversight, and it gives auditors something concrete to test.",
          },
          {
            q: "Should company crypto be kept with a custodian or self-held?",
            a: "Many companies use both: a custodian for segregated holdings with insurance and audits, and self-custody for operational balances. The policy should state the split, the limits, and the oversight for each.",
          },
          {
            q: "How often should the board review custody controls?",
            a: "The audit committee should receive a custody report quarterly, and the full policy should be reapproved annually and after any material change such as a new custodian or asset class.",
          },
          {
            q: "What is the most common corporate custody failure?",
            a: "Concentration of control: one employee who can initiate, approve, and conceal a transfer, or one wallet holding everything. Separation of duties and dual approval prevent most such failures.",
          }
        ],
      },
  ],
};
