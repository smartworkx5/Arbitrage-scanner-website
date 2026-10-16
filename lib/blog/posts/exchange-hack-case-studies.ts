import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "exchange-hack-case-studies",
  title: "Exchange Hacks: Case Studies",
  description: "Exchange hacks from Mt Gox to FTX reveal repeating patterns in custody, leverage, and governance. Learn what traders should check before trusting any venue.",
  keywords: [
      "exchange hacks",
      "Mt Gox hack",
      "FTX collapse",
      "crypto exchange security",
      "exchange case studies",
      "custody risk"
  ],
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  readingMinutes: 10,
  category: "Strategies",
  excerpt: "From Mt Gox to FTX, exchange failures follow repeating patterns in custody, leverage, and governance. These case studies show what traders should verify before trusting any venue with funds.",
  image: "/images/blog/exchange-hack-case-studies.svg",
  blocks: [
      { type: "h2", text: "Why Exchange Hacks Keep Repeating" },
      { type: "p", text: "Exchange hacks are not a single type of event. Some are pure security breaches, where attackers steal private keys or exploit hot-wallet infrastructure. Others are failures of custody and governance, where customer funds were misused, lent out, or never properly segregated in the first place. A third group blends both: a security incident exposes an exchange that was already fragile, and the loss of confidence finishes what the hackers started. Studying these cases together matters because the surface details change while the underlying patterns repeat. Traders who learn to spot weak custody, opaque accounting, and concentrated control can reduce their exposure before the next headline arrives." },
      { type: "p", text: "As of Oct 16, 2026, Bitcoin traded near $82,100 to $82,300 after a dip below $80,000 on Oct 15, while Ether held near $2,431 to $2,442 and gold traded around $4,155 per ounce. In stressed markets like this one, exchange risk rises because withdrawals surge, customer support strains, and rumours spread faster than verified facts. The September US CPI reading of 3.7% year over year and the sharp PPI jump reminded traders that macro shocks can coincide with exchange stress. The practical takeaway is timeless: an exchange is only as safe as its custody, its controls, and its willingness to prove reserves honestly, and no marketing claim replaces verification." },
      { type: "h2", text: "Mt Gox: The Original Custody Catastrophe" },
      { type: "p", text: "Mt Gox, once the dominant Bitcoin exchange, collapsed in 2014 after years of losses that were hidden from customers. The exchange had suffered repeated thefts, poor key management, and accounting gaps that allowed the shortfall to grow while trading continued. When the exchange finally halted withdrawals and filed for bankruptcy, customers discovered that a large share of the Bitcoin they believed they held was gone. The case became the defining lesson in a simple principle: coins held on an exchange are only as safe as the exchange's internal controls, and customers have little visibility into those controls until something breaks." },
      { type: "p", text: "The Mt Gox aftermath also shaped how the industry thinks about proof and process. Creditors spent years in legal proceedings, and the eventual distribution process became a long-running reminder that recovery after an exchange failure is slow, partial, and uncertain. For traders, the practical lessons were concrete: keep only trading capital on an exchange, move longer-term holdings to self-custody, verify withdrawal functionality regularly with small test withdrawals, and treat an exchange that delays withdrawals without a clear technical explanation as a serious warning sign. These habits remain relevant even though today's largest venues are far more professional than Mt Gox ever was." },
      { type: "h2", text: "Later Breaches: Hot Wallets and Operational Gaps" },
      { type: "p", text: "After Mt Gox, a wave of exchange breaches followed a more familiar pattern: attackers compromised hot wallets, employee credentials, or third-party systems, then drained funds before the exchange could freeze withdrawals. In several well-known cases, exchanges had kept too large a share of customer funds in hot wallets connected to the internet, or had failed to enforce withdrawal allowlists, multi-signature approvals, and strict separation between trading systems and key storage. The technical details varied, but the root cause was usually operational: security processes that looked adequate on paper were not enforced consistently under pressure." },
      {
        type: "list",
        items: [
        "Hot-wallet share: exchanges that keep most funds in cold storage limit the damage from any single breach.",
        "Withdrawal controls: allowlists, delays on new addresses, and multi-signature approvals slow attackers down.",
        "Key management: hardware-isolated keys and strict access separation reduce the value of any single compromised credential.",
        "Transparency: prompt incident disclosure, clear timelines, and independent audits rebuild trust faster than silence."
        ],
      },
      { type: "p", text: "Traders cannot audit an exchange's internal security directly, but they can look for observable signals. Does the exchange publish proof-of-reserves attestations and explain their limits? Does it support withdrawal allowlists and hardware security keys? Has it handled past incidents transparently, with clear timelines and customer reimbursement? An exchange that answers these questions well is not guaranteed to be safe, but an exchange that avoids them deserves extra caution. Comparing venues on security practices, not just fees, is a core part of choosing where to trade, and our guide to [CEX versus DEX arbitrage](/guides/cex-vs-dex-arbitrage) explains how custody models change the risk picture." },
      { type: "h2", text: "FTX: When the Failure Is Governance, Not Just Hacking" },
      { type: "p", text: "The collapse of FTX in late 2022 was different from a classic hack because the central problem was governance: customer funds were allegedly misused, risk controls failed, and affiliated entities were entangled in ways that customers could not see. The exchange had presented itself as sophisticated and well-managed, yet its internal accounting and segregation of funds were inadequate. When confidence cracked, a bank-run-style withdrawal surge exposed the shortfall within days. The speed of the collapse shocked even experienced traders, because the exchange had been one of the largest venues in the market until the moment it failed." },
      {
        type: "table",
        headers: ["Failure Pattern", "Example", "Trader Lesson"],
        rows: [
          ["Hidden losses and poor keys", "Mt Gox", "Verify withdrawals; keep most holdings in self-custody"],
          ["Hot-wallet breach", "Later exchange hacks", "Prefer venues with cold storage and withdrawal controls"],
          ["Misused customer funds", "FTX", "Demand segregation, audits, and honest proof of reserves"],
          ["Contagion after collapse", "FTX aftermath", "Limit exposure per venue; watch counterparty links"]
        ],
      },
      { type: "p", text: "The FTX case also showed how contagion works. Lenders, funds, and other exchanges with exposure to the failed venue suffered losses, and market-wide liquidity contracted. Traders who had diversified across venues and kept most capital in self-custody were hurt less than those who concentrated everything in one place. The lesson is not to avoid centralized exchanges entirely, since they still offer the deepest liquidity for most traders, but to treat every exchange as a counterparty with real default risk. Position sizing, withdrawal discipline, and venue diversification are risk controls, not inconveniences." },
      { type: "h2", text: "A Practical Exchange Safety Checklist" },
      { type: "p", text: "Before trusting an exchange with meaningful capital, run through a short checklist. Confirm that the venue supports withdrawal allowlists, two-factor authentication, and hardware security keys. Check whether it publishes proof-of-reserves attestations and whether independent analysts have scrutinised them. Look at its track record: how did it handle past incidents, withdrawal pauses, and periods of extreme volatility? Test withdrawals yourself with a small amount before depositing more. Keep only the capital you actively trade on the exchange, and move the rest to a wallet you control. Finally, spread activity across more than one reputable venue, so no single failure can wipe out your trading capital." },
      {
        type: "callout",
        title: "Red Flags Worth Taking Seriously",
        text: "Unexplained withdrawal delays, sudden changes to terms of service, vague proof-of-reserves claims, opaque affiliated entities, and leadership that avoids hard questions about custody are all reasons to reduce exposure immediately, even without proof of wrongdoing.",
        tone: "warning",
      },
      { type: "p", text: "Exchange hacks will keep happening because exchanges concentrate valuable assets, complex software, and human processes in one place. Traders cannot eliminate that risk, but they can manage it with custody discipline, venue diversification, and a habit of verifying rather than assuming. The cases from Mt Gox to FTX all point in the same direction: the traders who survived with the least damage were the ones who kept most funds in self-custody, tested withdrawals, and treated every exchange as a counterparty. For more on how venue choice affects trading risk, see our comparison of [Binance versus Coinbase](/arbitrage/binance-vs-coinbase) and our overview of [cross-exchange arbitrage](/guides/cross-exchange-arbitrage)." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you turn exchange-security lessons into a personal checklist. Ask it to explain proof of reserves in simple words, or to draft a short list of questions to ask before trusting a new exchange with your funds." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is the biggest lesson from Mt Gox?",
            a: "Keep only trading capital on an exchange and hold longer-term funds in self-custody. Mt Gox showed that customers may not learn about custody failures until withdrawals stop, and recovery can take years.",
          },
          {
            q: "How is the FTX collapse different from a hack?",
            a: "FTX was primarily a governance and fund-segregation failure rather than a pure external hack. Customer funds were allegedly misused and risk controls failed, so a confidence shock exposed the shortfall within days.",
          },
          {
            q: "What are the strongest signs an exchange takes security seriously?",
            a: "Cold-storage-heavy custody, withdrawal allowlists, multi-signature approvals, hardware-key support, credible proof-of-reserves attestations, and transparent handling of past incidents are all positive signals.",
          }
        ],
      },
  ],
};
