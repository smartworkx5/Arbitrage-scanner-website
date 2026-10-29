import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "crypto-tax-loss-harvesting-2026",
  title: "Crypto Tax-Loss Harvesting: Legally Cutting Your Tax Bill",
  description: "Crypto tax-loss harvesting explained for 2026: how to realise losses legally, avoid wash-sale traps, and keep records that support every harvested loss.",
  keywords: [
      "Crypto Tax-Loss Harvesting",
      "crypto harvest losses legally",
      "wash sale crypto trap",
      "crypto capital losses offset gains",
      "tax loss harvesting record keeping",
      "crypto losses tax planning"
  ],
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "Tax-loss harvesting means selling a losing position to realise a loss that can offset gains, but the benefit depends on timing, replacement rules, and clean records. This guide explains how to do it legally.",
  image: "/images/blog/crypto-tax-loss-harvesting-2026.svg",
  blocks: [
      { type: "p", text: "Crypto Tax-Loss Harvesting is the practice of selling a crypto asset that has fallen below what you paid for it, realising the loss on paper as a real tax loss, and using that loss to offset gains elsewhere, within the rules of your jurisdiction. The idea is straightforward, but the execution is where traders go wrong, because a loss only helps if it is genuinely realised, properly documented, and not immediately undone by buying the same asset back in a way that the rules treat as a wash sale or a non-qualifying repurchase. Harvesting is a tax-planning tool, not a trading strategy, and it should never be the reason to sell an asset you would otherwise hold, nor a reason to hold an asset you would otherwise sell." },
      { type: "p", text: "The late October 2026 market shows how harvesting opportunities appear in ordinary volatility. Bitcoin closed on October 28, 2026 at $81,254, up 0.8 percent, Ether closed at $2,357, up 0.6 percent, and on October 29, 2026 Bitcoin slipped below $80,000, with a Binance print at $79,975, while gold traded around $4,040 to $4,049 per ounce after the Federal Reserve held rates at 3.75 percent to 4.00 percent. A trader who bought near a recent high and watched the market pull back may suddenly hold a loss worth harvesting, while another trader who bought lower may hold a gain that the loss could offset. The decision should start from the portfolio, not from the headline price, and the first question is always whether the sale makes investment sense on its own merits." },
      { type: "h2", text: "How Harvesting Works, Step by Step" },
      { type: "p", text: "Harvesting begins with identifying a position that is genuinely underwater relative to its cost basis, after accounting for fees and for any earlier partial sales from the same lot. The trader sells that position, records the sale price, the original cost, and the resulting loss, and then decides what to do with the proceeds, which may mean holding cash or a stablecoin, reallocating to a different asset with a different risk profile, or waiting before re-entering the same asset. The loss is then available, subject to local rules, to offset gains realised in the same period or, in some systems, to be carried forward to future periods. The mechanics sound simple, but each step has a trap: a wrong cost basis, a forgotten fee, or a repurchase that disqualifies the loss can erase the benefit." },
      { type: "p", text: "Timing within the tax year matters as much as the sale itself. A loss realised in December may offset gains from earlier in the same year, while a loss realised in January belongs to a different year, and a trader who harvests too late may find that the gain they wanted to offset has already been locked into a return. That is why experienced traders review unrealised gains and losses quarterly, not in the final week of the year, and why they keep a running estimate of realised gains so far. A quarterly review also prevents panic selling in a volatile week, because the trader already knows which positions are candidates and which sales would actually help. For position-sizing discipline that pairs with this review, see [how to size positions in volatile markets](/guides/cross-exchange-arbitrage)." },
      { type: "h2", text: "Wash Sales and Repurchase Traps" },
      { type: "p", text: "The wash-sale trap is the most famous harvesting pitfall, and also the most misunderstood in crypto. In traditional markets, selling a security at a loss and buying substantially the same security shortly before or after the sale can disallow the loss, and while crypto has historically been treated differently in some jurisdictions, that difference should never be assumed to last or to apply everywhere. Rules change, guidance evolves, and a strategy built on a loophole can collapse when the loophole closes, leaving a trader with a disallowed loss and an unwanted position. The prudent approach is to treat a quick repurchase of the same asset as risky, to document the waiting period and the reasoning, and to check the current rules for your jurisdiction before relying on any gap." },
      { type: "p", text: "Related traps are subtler than a direct repurchase. Buying a wrapped version of the same asset, buying through a different wallet or exchange, or having a spouse or a company you control buy the same asset can, in some frameworks, be treated as effectively repurchasing, and automated strategies such as recurring buys or staking rewards that automatically acquire the same token can accidentally recreate a position you just sold. The defence is a pre-sale checklist: pause automated buys for that asset, check every wallet and account you control, and record the date you sold and the date, if any, you re-entered. If you intend to re-enter, write down why the re-entry is a new investment decision rather than a continuation of the old position." },
      {
        type: "callout",
        title: "Never harvest a loss you cannot prove",
        text: "A harvested loss without a sale record, cost basis, and fee breakdown is a liability, not a saving. If the exchange history is incomplete, reconstruct it before you claim the loss, and do not rely on a loophole that may not apply in your country.",
        tone: "warning",
      },
      { type: "h2", text: "Losses, Gains, and What Can Actually Be Offset" },
      { type: "p", text: "Not every loss offsets every gain, and assuming otherwise is the second major harvesting error. In many systems, capital losses first offset capital gains, and only a limited amount, if any, can offset other income in a given year, with the remainder carried forward under specific conditions. A trader with large trading gains and a small harvested loss may therefore get less benefit than expected, while a trader with no gains at all may find that the loss simply carries forward rather than producing an immediate refund. The practical lesson is to model the benefit before selling: estimate realised gains for the year, estimate the loss, and check, with local guidance or a professional, how much of that loss would actually be usable and when." },
      { type: "p", text: "Losses also interact with earlier harvesting decisions. A loss carried forward from a previous year may already be available to offset current gains, which changes how much new harvesting is needed, and a gain that was deferred or structured in an earlier year may reappear in the current year. Keeping a multi-year loss register, showing losses realised, losses used, and losses carried forward, turns harvesting from a year-end guess into a running calculation, as part of a broader [risk and record-keeping routine](/guides/cex-vs-dex-arbitrage). That register should be updated at the same quarterly review as the portfolio review, so that the trader always knows the true tax position, not just the market position." },
      { type: "h2", text: "Harvesting Without Harming the Portfolio" },
      { type: "p", text: "The best harvesting decision is one that also makes investment sense. Selling a fundamentally broken position to realise a loss and reallocating to a stronger asset is good tax planning and good investing at the same time, while selling a sound long-term holding purely for a tax benefit, then scrambling to buy it back, is tax planning that harms the portfolio. A useful test is to ask whether you would make the same sale if there were no tax benefit at all. If the answer is no, pause and consider whether the tax saving is large enough to justify the trading costs, the spread, the risk of missing a rebound, and the complexity of the repurchase rules. Often the honest answer is that holding is better." },
      {
        type: "list",
        items: [
        "Review unrealised gains and losses quarterly, not only in December.",
        "Model the usable benefit before selling, including carry-forward limits.",
        "Pause automated buys for the asset you are harvesting.",
        "Record sale price, cost basis, fees, and the reason for the sale.",
        "Keep a multi-year register of losses used and losses carried forward."
        ],
      },
      { type: "h2", text: "Records, Timing, and Professional Checks" },
      { type: "p", text: "Every harvested loss should be provable from three sources that agree with each other: the exchange or wallet transaction history, your own log with cost basis and fees, and, where relevant, the bank or stablecoin trail showing where proceeds went. If those three sources disagree, resolve the difference before filing, because a reviewer will notice the same gap. Timing records matter too: the sale date, the settlement date if different, and any repurchase date should all be logged, since wash-sale and holding-period questions turn on days, not months. A trader who harvests across several exchanges should also check that the same asset was not bought on another venue in the same window, which is a common cause of accidental disqualification." },
      { type: "p", text: "Finally, remember that harvesting is legal tax planning, not tax avoidance, and the line between the two is substance. A sale with a genuine change in economic position, documented reasoning, and a consistent method is planning. A circular trade designed only to create a paper loss, with no real risk or change in exposure, may be challenged even if it technically follows the letter of a rule. When the amounts are large, the structure is complex, or the rules in your country are changing, a short professional review before you sell is far cheaper than defending a disallowed loss afterwards. In a market where Bitcoin moved from $81,254 on October 28, 2026 to below $80,000 on October 29, volatility will keep creating harvesting candidates, but discipline, not speed, is what turns them into real savings." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you understand tax-loss harvesting in plain terms. Ask it to explain the wash-sale idea with a simple example, or to draft a pre-sale checklist of records and timing questions to take to a tax professional." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is crypto tax-loss harvesting?",
            a: "It is selling a crypto asset at a loss to realise that loss for tax purposes, so it can offset gains or be carried forward, subject to your jurisdiction's rules and limits.",
          },
          {
            q: "What is a wash sale in crypto?",
            a: "A wash sale generally involves selling at a loss and buying substantially the same asset shortly before or after, which can disallow the loss in some systems. Crypto treatment varies by country and changes over time, so check current local rules.",
          },
          {
            q: "Can a harvested loss offset all my income?",
            a: "Not necessarily. In many systems capital losses first offset capital gains, and only a limited amount may offset other income, with the rest carried forward. Model the usable benefit before selling.",
          },
          {
            q: "Should I sell a good holding just to harvest a loss?",
            a: "Usually not. Harvesting should also make investment sense. Selling a sound holding purely for tax, then rushing to buy it back, can cost more in spreads, fees, and missed moves than the tax saving.",
          }
        ],
      },
  ],
};
