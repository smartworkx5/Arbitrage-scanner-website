import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "us-crypto-tax-reporting-2026",
  title: "US Crypto Tax Reporting 2026: 1099-DA Forms Explained",
  description: "US Crypto Tax Reporting 2026 explained: what the 1099-DA covers, which sales brokers report, cost basis, and how traders should prepare their records well.",
  keywords: [
      "US Crypto Tax Reporting 2026",
      "1099-DA form",
      "crypto tax reporting",
      "IRS crypto broker reporting",
      "crypto cost basis",
      "crypto tax records 2026"
  ],
  datePublished: "2026-10-30",
  dateModified: "2026-10-30",
  readingMinutes: 9,
  category: "Markets",
  excerpt: "The 1099-DA changes what brokers report, but it does not replace your own records. Here is what traders actually receive and what to check.",
  image: "/images/blog/us-crypto-tax-reporting-2026.svg",
  blocks: [
      { type: "p", text: "US Crypto Tax Reporting 2026 matters more than ever on October 30, 2026, because this is the year broker reporting catches up with how most people actually trade. Bitcoin trades around $77,300 to $77,975, down roughly 4 to 5 percent in 24 hours, Ether sits near $2,254, and about $356 million in crypto futures were liquidated over 24 hours around October 29, which means plenty of traders closed positions, swapped assets, or rebalanced into a tax year they will have to account for. The new Form 1099-DA is the centrepiece of that change: brokers report certain digital-asset sales to the IRS and to the customer, but the form is a starting point for a return, not a finished tax calculation." },
      { type: "h2", text: "What the 1099-DA actually is" },
      { type: "p", text: "Form 1099-DA, Digital Assets, is the IRS information return for brokers that effect sales or exchanges of digital assets for customers. In plain terms, when a covered broker executes a sale of crypto for you, it reports the transaction details, including gross proceeds and, where it has the information, cost basis, to both you and the IRS. The form was designed to close the gap between exchange activity and tax returns, because for years many traders received no broker form at all and had to reconstruct everything themselves. Its arrival does not create a new tax on crypto; gains and losses were taxable before, and the form simply makes them harder to overlook." },
      { type: "p", text: "Coverage is the first thing to get right. The form applies to brokers as defined by the IRS rules, which centre on custodial exchanges and similar intermediaries, while many decentralised, non-custodial transactions fall outside broker reporting even though they remain taxable. That distinction confuses people: no form does not mean no tax. Swaps, spending crypto, and moving assets between your own wallets can each have different treatment, and a broker form will never see the full picture of a trader who uses several venues. Keep your own records regardless of which forms arrive, and treat any form as one source among several." },
      { type: "h2", text: "Which transactions brokers report" },
      { type: "p", text: "Brokers generally report sales and exchanges, which means selling crypto for dollars, swapping one crypto for another, and in many cases using crypto to pay for goods or services through a broker. Simple transfers between your own wallets or accounts are generally not sales, but moving assets to an exchange and then selling them is. Staking rewards, airdrops, and interest-like income may be reported on other forms or not at all, depending on the platform, even though they can be taxable income when received. The practical lesson is to track the event type, not just the dollar amount, because each event type can land on a different part of a return." },
      { type: "p", text: "Timing also matters. A sale is generally recognised when the trade executes, not when you withdraw cash, and a swap is generally a sale of the asset you gave up even if no dollars touched your bank account. That surprises traders who rotated from Bitcoin into altcoins during a volatile week like this one, with XRP near $1.2369, down about 6.7 percent, and BNB near $699, down about 8.0 percent, and assume no tax event occurred because they never cashed out. If you traded, you probably created reportable events, and the 1099-DA will reflect the broker-side portion of them. Reconcile early rather than discovering a mismatch in filing season." },
      { type: "h2", text: "Cost basis: the number that decides your gain" },
      { type: "p", text: "Gross proceeds alone do not tell you what you owe; cost basis does. Basis is generally what you paid, plus fees where applicable, and the gain or loss is proceeds minus basis, adjusted for the holding period. Where a broker knows your basis, it may report it, but brokers often lack basis for assets transferred in from elsewhere, assets bought years ago, or assets received as rewards and gifts. In those cases the form may show proceeds with basis blank or marked as not available, and the taxpayer must supply the missing history. This is where most 1099-DA headaches begin, and it is entirely preventable with contemporaneous records." },
      { type: "p", text: "Accounting method is a quiet decision with real consequences. Specific identification, where you identify exactly which units you sold, can produce very different results from first-in-first-out, and the IRS expects consistency and documentation. If you use tax software, confirm which method it applies and whether it matches your broker's method, because a mismatch can generate phantom gains. For active traders, the [glossary](/glossary) is a useful place to pin down terms like basis, proceeds, and wash-sale-adjacent concepts, while [funding rate arbitrage](/guides/funding-rate-arbitrage) shows how one popular strategy generates frequent taxable events that must be tracked trade by trade." },
      { type: "h2", text: "Reconciling forms with your own records" },
      { type: "p", text: "Reconciliation is unglamorous and essential. Start by listing every venue you used, every form you received, and every transaction type, then compare broker proceeds against your own trade history, wallet history, and bank deposits. Common mismatches include duplicate reporting across venues, missing basis on transferred assets, and income items like staking rewards that appear nowhere on a 1099-DA. Resolve duplicates before filing, because the IRS matching system compares what brokers reported against what you reported, and an unexplained gap is what triggers notices." },
      { type: "p", text: "Keep records for years, not months: trade confirmations, deposit and withdrawal histories, wallet addresses, fee schedules, and any correspondence about basis transfers. Export data while accounts are still accessible, because exchanges close, merge, or restrict history, and a CSV downloaded in January is worth far more than a memory in April. If your activity spans decentralised exchanges, record the transaction hashes and the dollar value at the time of each trade. Good records also protect you if a form is wrong, since a corrected form or a well-documented return position is much easier to defend than a guess." },
      { type: "h2", text: "Common mistakes and how to avoid them" },
      { type: "p", text: "The most common mistake is assuming the 1099-DA total equals taxable income. It does not: proceeds are not profit, basis is not automatic, and income items may sit on other forms or no form. The second mistake is forgetting swaps and crypto-to-crypto trades, which many traders mentally file as non-events. The third is ignoring state tax, since states have their own rules and forms, and a federal form does not settle a state return. The fourth is waiting until filing season to gather data, when exchanges are slowest and support queues longest." },
      { type: "p", text: "A fifth mistake is treating tax software output as gospel without checking it. Software is only as good as its imports, and a missed wallet or a mislabelled transfer can distort an entire return. Review a sample of trades by hand, check that transfers between your own wallets are not counted as sales, and confirm that fee treatment matches the method you chose. When activity is complex, involving business income, mining, or large DeFi volumes, professional advice usually pays for itself. The goal is a return you can explain line by line, not just one that a program produced. For background on how different trading venues report activity, see [cex vs dex arbitrage](/guides/cex-vs-dex-arbitrage), which also illustrates why decentralised trades rarely arrive pre-packaged on a broker form." },
      {
        type: "callout",
        title: "A form is not a tax return",
        text: "Do not file by copying 1099-DA proceeds as income, and do not ignore a form because its basis looks wrong. Reconcile every form against your own records, correct errors with the broker where possible, and keep documentation for each adjustment you make.",
        tone: "warning",
      },
      {
        type: "list",
        items: [
        "Collect every 1099-DA and other tax form from each venue you used",
        "Export full trade, deposit, and withdrawal history before filing season",
        "Reconcile broker proceeds against your own records and flag missing basis",
        "Track swaps and staking rewards separately from simple sales",
        "Review software output by hand on a sample of trades before filing"
        ],
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help here by explaining tax terms like cost basis, proceeds, and broker reporting in simple words, or by drafting a checklist of records to gather before you prepare your return." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Does receiving a 1099-DA mean I owe tax on the full amount shown?",
            a: "No. The form generally reports gross proceeds, not profit. Your taxable gain or loss is proceeds minus cost basis, and basis may be missing or incomplete on the form, so you must supply it from your own records.",
          },
          {
            q: "What if I traded on a platform that sent no form?",
            a: "You still report taxable sales, swaps, and income. Broker reporting covers only certain intermediaries, and decentralised or non-custodial activity is often unreported by any broker while remaining taxable.",
          },
          {
            q: "Are crypto-to-crypto swaps taxable?",
            a: "Generally yes in the US. Swapping one crypto for another is usually treated as a sale of the asset you gave up, even if you never received dollars, so it can create a gain or loss.",
          },
          {
            q: "How long should I keep crypto tax records?",
            a: "Keep them for years after filing, including trade histories, wallet records, fee schedules, and basis documentation. Exchanges can restrict or lose history, so export your data while accounts remain accessible.",
          }
        ],
      },
  ],
};
