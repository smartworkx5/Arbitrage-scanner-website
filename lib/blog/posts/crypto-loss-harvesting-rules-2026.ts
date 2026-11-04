import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "crypto-loss-harvesting-rules-2026",
  title: "Crypto Loss Harvesting: Rules, Wash-Sale Traps, and Record Needs",
  description: "Crypto loss harvesting rules for 2026 explained: wash-sale traps, timing, documentation, and the records needed to support every claim before you file.",
  keywords: [
      "Crypto Loss Harvesting",
      "crypto tax loss harvesting",
      "wash sale crypto",
      "crypto tax records",
      "harvesting losses 2026",
      "crypto trader tax"
  ],
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "Selling at a loss can reduce a tax bill, but only when the trade, the timing, and the paperwork all stand up to scrutiny.",
  image: "/images/blog/crypto-loss-harvesting-rules-2026.svg",
  blocks: [
      { type: "p", text: "Crypto Loss Harvesting means deliberately selling a losing position so the realised loss can offset gains elsewhere, and on Wednesday 4 November 2026 it is back in focus because Bitcoin slipped below $77,000, trading around $76,540 to $76,900, leaving many recent buyers nursing paper losses. The idea sounds simple, but the rules around it are not, and a harvested loss that cannot be evidenced is worthless if it is ever questioned. Before selling anything for tax reasons, a trader should understand what counts as a disposal, how the loss is calculated, and what records must survive long after the trade itself is forgotten." },
      { type: "h2", text: "What Loss Harvesting Actually Does" },
      { type: "p", text: "A loss only becomes useful when it is realised, which generally means the asset is sold, swapped, or otherwise disposed of in a way the relevant tax rules recognise. Simply watching a price fall creates no tax event, however painful the drawdown feels, and moving coins between your own wallets is not the same as selling them. The harvested loss is then typically set against capital gains in the same period, with unused losses carried forward under rules that differ sharply by jurisdiction. Traders who use a [crypto glossary](/glossary) to pin down terms like disposal, cost basis, and realised loss tend to make fewer expensive mistakes than those who trade on loose definitions." },
      { type: "p", text: "Timing matters as much as the sale itself. Harvesting in late December is a common ritual, but waiting until the final days of a tax year compresses every decision into the worst possible window, when prices are moving and exchanges are busy. A better habit is to review losing positions quarterly, so harvesting becomes a planned portfolio decision rather than a panicked year-end scramble. That discipline also keeps the strategy honest: the question should always be whether the position still deserves a place in the portfolio, not merely whether its loss looks useful on paper." },
      { type: "h2", text: "Wash-Sale Traps and Repurchase Rules" },
      { type: "p", text: "The classic trap is selling a coin to book a loss and buying it straight back, a pattern tax authorities in several jurisdictions treat as a wash sale and disallow. The details vary enormously: some countries have explicit wash-sale rules for securities that may or may not extend to crypto, others apply general anti-avoidance principles, and a few have no equivalent rule at all. A trader who assumes the rules of one country apply everywhere is asking for trouble, especially when trading on global exchanges. The safe approach is to check the specific rules where you are tax resident before repurchasing, and to keep a written note of the advice or source relied upon." },
      {
        type: "list",
        items: [
        "Selling and repurchasing the same asset within days can trigger wash-sale or anti-avoidance scrutiny in some jurisdictions.",
        "Buying a closely related asset immediately after selling may be treated the same way as buying the identical coin.",
        "Automated bots and recurring buys can accidentally repurchase a harvested asset before any waiting period ends.",
        "Staking rewards or airdrops received around the sale can complicate the cost-basis calculation.",
        "Cross-exchange activity counts too: a sale on one venue and a buy on another is still a repurchase."
        ],
      },
      { type: "h2", text: "How to Calculate the Loss Correctly" },
      { type: "p", text: "A harvested loss is only as good as its cost-basis maths. Fees paid on the original purchase usually form part of the cost, fees on the sale usually reduce the proceeds, and partial sales require a consistent method for deciding which units were sold. Traders who switch methods mid-year, or who reconstruct figures from memory months later, often discover their numbers do not reconcile with exchange statements. Using a consistent method from the first trade of the year, and recording it in writing, prevents most of these problems. For traders comparing venues, the [best arbitrage scanners](/best-crypto-arbitrage-scanners) can help with execution quality, but they do not replace proper tax records." },
      {
        type: "table",
        headers: ["Record item", "Why it matters", "Where to get it"],
        rows: [
          ["Buy date, price, and fees", "Sets the cost basis for the loss", "Exchange trade history export"],
          ["Sell date, price, and fees", "Sets the proceeds and realisation date", "Exchange trade history export"],
          ["Wallet addresses used", "Proves custody and movement chain", "Wallet software and block explorer"],
          ["Repurchase dates, if any", "Tests wash-sale exposure", "All exchanges and wallets used"],
          ["Method note (e.g. FIFO)", "Keeps partial sales consistent", "Your own written policy note"]
        ],
      },
      { type: "h2", text: "Records That Survive an Enquiry" },
      { type: "p", text: "Tax authorities can ask about a return years after it was filed, by which time an exchange may have closed, changed its export format, or deleted old data. That is why harvested-loss records should be exported and stored outside the exchange itself, in a format that can still be read years later. A complete pack includes the raw trade export, deposit and withdrawal history, fee statements, and a short narrative explaining why each harvested sale was made. Screenshots alone are weak evidence; structured exports with timestamps, order IDs, and amounts are far stronger, and they also make an accountant's job dramatically cheaper." },
      { type: "p", text: "Stablecoin legs deserve special attention because they are easy to overlook. Selling Bitcoin for a stablecoin is still a disposal in most systems even though no fiat ever touched a bank account, and swapping one stablecoin for another can be a disposal too. Traders who only record fiat on-ramps and off-ramps will understate both gains and losses, and the resulting return will not reconcile. Every swap, including those inside a [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) workflow, belongs in the record set, with the market value at the time of the swap noted alongside it." },
      { type: "h2", text: "Common Mistakes to Avoid" },
      { type: "p", text: "The most expensive mistake is harvesting a loss on an asset you immediately need back, then repurchasing at a higher price and wiping out the benefit. Another is harvesting without checking whether losses can actually offset the type of income you hold, since some systems ring-fence capital losses so they cannot shelter ordinary income. A third is letting the tax tail wag the investment dog: selling a good long-term holding purely for a loss, then missing a recovery, is rarely a good trade. Harvesting works best as a tidying exercise inside a portfolio you already understand, not as a standalone profit strategy." },
      {
        type: "callout",
        title: "Not tax advice",
        text: "Tax rules vary by jurisdiction and change frequently. This article explains general principles only and is not tax advice; confirm your position with a qualified tax professional before acting.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, built to explain ideas in plain language and help organise everyday research. For this topic, it can turn a confusing wash-sale explanation into a simple checklist of questions to ask your accountant. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Does selling crypto at a loss always create a usable tax loss?",
            a: "Not necessarily. The disposal must be recognised under your jurisdiction's rules, the loss must be calculated on a consistent cost basis, and wash-sale or anti-avoidance rules may disallow it if you repurchase too quickly. Check local rules before relying on the loss.",
          },
          {
            q: "Is moving crypto between my own wallets a disposal?",
            a: "Generally no, but rules vary by jurisdiction and the movement still needs to be documented so the chain of custody is clear. Keep wallet transfer records alongside your trade history.",
          },
          {
            q: "How long should I keep harvesting records?",
            a: "Keep them at least as long as your jurisdiction's enquiry window for the relevant tax year, and longer if practical. Exchanges can close or purge data, so store exports outside the exchange.",
          },
          {
            q: "Can a harvested loss offset salary or business income?",
            a: "In many systems capital losses can only offset capital gains, not ordinary income, though unused losses may carry forward. The exact treatment depends on where you are tax resident, so confirm it before planning around it.",
          }
        ],
      },
  ],
};
