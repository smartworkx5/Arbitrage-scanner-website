import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "exchange-licensing-guide",
  title: "Exchange Licensing: Why It Matters",
  description: "Not every exchange is licensed to serve you. Learn what exchange licensing means, how to verify it, and why unlicensed venues put your capital at risk.",
  keywords: [
      "exchange licensing crypto",
      "licensed crypto exchange",
      "crypto exchange regulation",
      "MiCA licensed exchange",
      "how to check exchange licence"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 8,
  category: "Risk",
  excerpt: "A licence does not make an exchange risk-free, but it does tell you who supervises it, where your money sits, and what happens when things go wrong. Here is how to check.",
  image: "/images/blog/exchange-licensing-guide.svg",
  blocks: [
      { type: "h2", text: "What an Exchange Licence Actually Means" },
      { type: "p", text: "An exchange licence is permission from a financial regulator to offer crypto services in a specific jurisdiction, under specific rules. It is not a global badge of quality, and it is not a guarantee that a platform is safe. What it does give you is a supervisor: a named regulator that can inspect the business, demand audits, enforce client-asset segregation, and take action if the exchange breaks the rules. An unlicensed exchange, by contrast, answers to nobody in particular. If it freezes withdrawals, loses funds, or simply disappears, you may have no regulator to complain to and no legal entity you can realistically pursue." },
      { type: "p", text: "Licensing also shapes what a venue can offer you. A licensed exchange in the European Union operates under the MiCA framework, which sets rules for custody, disclosures, and stablecoin issuance. A licensed exchange in the United States typically holds state money-transmitter licences and, in New York, often a BitLicense, and is subject to anti-money-laundering supervision. In other jurisdictions, licensing may be lighter, newer, or still being built. The important point is that the same brand name can hide different legal entities: one subsidiary may be fully licensed in your country while another serves you from offshore with far weaker oversight. Always check which entity your account sits with, not just the logo on the app." },
      { type: "h2", text: "Why Licensing Matters for Arbitrageurs Specifically" },
      { type: "p", text: "Arbitrageurs are unusually exposed to exchange licensing risk because they hold capital on several venues at once and move it between them constantly. An unlicensed venue can look attractive: lower fees, higher leverage, exotic pairs, no verification queues. But every one of those conveniences is a trade-off. If that venue halts withdrawals during a market shock, your capital is trapped on the wrong side of the spread, and the profitable route you mapped becomes a loss. On 15 October 2026, Bitcoin traded near $80,980 to $81,835 after a hot US inflation print pushed Fed hike odds to roughly 43%, and about $973 million in positions were liquidated across the market in 24 hours. In sessions like that one, withdrawal reliability matters more than a fraction of a percent in fees." },
      { type: "p", text: "Licensing also affects whether your arbitrage routes will keep working. Regulators regularly force venues to delist products, restrict leverage, or change which stablecoins they can offer to users in a given region. A route that depends on an unlicensed venue's exotic pair can vanish overnight when that venue exits your market or is forced to restructure. Routes built on licensed venues change too, but usually with notice periods and public announcements rather than sudden shutdowns. For more on the regulatory side of venue choice, see [Regulatory Risk Arbitrage](/blog/regulatory-risk-arbitrage) and [KYC/AML for Active Arbitrageurs](/blog/kyc-aml-arbitrage)." },
      { type: "h2", text: "How to Verify an Exchange's Licence" },
      {
        type: "list",
        items: [
        "Find the legal entity name in the exchange's terms of service or footer, then search for that exact name on the regulator's public register.",
        "Confirm the licence covers your country of residence, not just the exchange's home country.",
        "Check which products the licence covers: spot trading, derivatives, and custody are often licensed separately.",
        "Look for the entity's registered address and compare it with what the exchange shows in its app and emails.",
        "Treat claims like 'regulated' or 'compliant' as marketing until you find a licence number you can verify independently."
        ],
      },
      { type: "p", text: "A genuine licence leaves a paper trail. Most regulators publish a searchable register of authorised firms, and the exchange should link to it or at least name its licence number. If you cannot find the exchange on any regulator's register, if its terms name a shell company in a jurisdiction you cannot identify, or if customer support dodges the question of which entity holds your funds, treat all three as red flags. None of them proves fraud on its own, but together they describe a venue where your legal protection is thin. Our guide to [CEX vs DEX Arbitrage](/guides/cex-vs-dex-arbitrage) explains how centralised venue risk compares with decentralised alternatives." },
      { type: "h2", text: "Licensed Does Not Mean Risk-Free" },
      { type: "p", text: "It is worth being blunt: licensed exchanges have failed too. Licensing reduces certain risks, such as outright fraud and commingled client funds, but it does not remove market risk, hacking risk, or bad management. A licensed exchange can still suffer a security breach, face insolvency, or freeze withdrawals under a court order. That is why serious traders spread capital across venues, keep only working balances on exchanges, and move profits to wallets they control. Licensing is one filter in a larger risk framework, not a substitute for it." },
      {
        type: "table",
        headers: ["What to check", "Licensed venue", "Unlicensed venue"],
        rows: [
          ["Named regulator", "Yes, verifiable on a public register", "Often none, or a vague claim"],
          ["Client-asset segregation", "Usually required", "Rarely guaranteed"],
          ["Audit and disclosure duties", "Ongoing, regulator-enforced", "Voluntary at best"],
          ["Complaints route", "Regulator or ombudsman", "Platform support only"],
          ["Sudden shutdown risk", "Lower, usually with notice", "Higher, sometimes without warning"]
        ],
      },
      {
        type: "callout",
        title: "The one-minute licence check",
        text: "Before depositing on any new exchange, find its legal entity, search the regulator's register, and confirm the licence covers your country. If any step fails, do not deposit until it is resolved.",
        tone: "warning",
      },
      { type: "h2", text: "A Practical Licensing Checklist Before You Deposit" },
      { type: "p", text: "Build licensing checks into your onboarding routine the same way you test deposits and withdrawals. Verify the entity and licence before the first deposit, re-check it once a year, and re-check it immediately after any announcement about restructuring, delistings, or a change of regulator. Keep a simple record for each venue: entity name, regulator, licence number, and the date you verified it. If a venue changes its serving entity, treat it as a new venue and verify it from scratch. For the operational side of choosing venues, see [Choosing Arbitrage Exchanges](/blog/choosing-arbitrage-exchanges) and [Counterparty Risk in Crypto](/blog/counterparty-risk-crypto)." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain exchange licensing in plain language and help you draft a checklist of questions to verify before trusting a new venue with your funds." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Does a licensed exchange guarantee my funds are safe?",
            a: "No. Licensing adds supervision, audits, and usually client-asset segregation, but licensed exchanges can still be hacked or fail. Keep only working balances on exchanges and move the rest to wallets you control.",
          },
          {
            q: "How do I check whether an exchange is licensed in my country?",
            a: "Find the legal entity name in the exchange's terms of service, then search for that exact name on your regulator's public register. Confirm the licence covers your country and the products you plan to use.",
          },
          {
            q: "Is an offshore exchange automatically unsafe?",
            a: "Not automatically, but your legal protection is usually weaker. If an offshore venue has no regulator you can complain to and no clear entity holding your funds, treat it as higher-risk and limit your exposure.",
          },
          {
            q: "Can the same exchange be licensed in one country and unlicensed in another?",
            a: "Yes, and this is common. Exchanges operate through different subsidiaries, so the entity serving you may have different licensing than the one serving another region. Always check the entity behind your own account.",
          }
        ],
      },
  ],
};
