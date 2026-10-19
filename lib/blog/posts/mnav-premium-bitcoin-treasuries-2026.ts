import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "mnav-premium-bitcoin-treasuries-2026",
  title: "mNAV Explained: Why Bitcoin Treasury Stocks Trade Above Their BTC",
  description: "mNAV measures what a Bitcoin treasury stock is worth versus its BTC. Learn how the premium is calculated, why it moves, and what compresses it, step by step.",
  keywords: [
      "mNAV",
      "mNAV bitcoin treasury",
      "bitcoin treasury premium",
      "mNAV explained",
      "treasury stock premium",
      "net asset value bitcoin",
      "BTC treasury valuation"
  ],
  datePublished: "2026-10-19",
  dateModified: "2026-10-19",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "mNAV is the single number that explains most treasury-stock moves. Here is the premium math, what dilution does to it, and what makes it compress.",
  image: "/images/blog/mnav-premium-bitcoin-treasuries-2026.svg",
  blocks: [
      { type: "p", text: "mNAV, short for modified net asset value multiple, is the ratio that tells you how much the market is paying for a bitcoin treasury company's shares compared with the bitcoin it holds. If a company's shares are collectively worth twice the market value of its BTC, its mNAV is 2. If the shares are worth exactly the same as the coins, its mNAV is 1. If the shares trade below the value of the coins, its mNAV is under 1. The number matters because it is the hinge of the whole treasury model: when mNAV sits above 1, a company can issue new shares and add value for existing holders, and when it falls toward or below 1, the same share issues start diluting them. On October 19, 2026, with bitcoin near $82,100 to $82,600 and the market cautious after a weak October, mNAV compression is the risk every treasury investor should understand first." },
      { type: "h2", text: "What mNAV Actually Measures" },
      { type: "p", text: "At its simplest, mNAV compares a company's market capitalization with the market value of its bitcoin holdings. Market capitalization is the share price multiplied by shares outstanding. Bitcoin holdings value is the number of coins multiplied by the current bitcoin price. Divide the first by the second and you get a rough mNAV. In practice, careful analysts adjust for debt, preferred shares, cash, and the value of the operating business, because a company is worth more or less than its coins depending on what else it owns and owes. Different data providers make different adjustments, which is why two sources can quote slightly different mNAV figures for the same company. The exact number matters less than the direction and the level: well above 1 means a rich premium, near 1 means little premium, below 1 means a discount." },
      { type: "p", text: "Think of mNAV as the market's verdict on the wrapper. A mNAV of 1 says the market values the company at exactly the value of its coins, giving no credit for management, future accumulation, or the operating business. A mNAV above 1 says the market expects the company to add value beyond the coins it holds today, through future bitcoin purchases, business earnings, or both. A mNAV below 1 says the market thinks the wrapper destroys value, perhaps because of heavy debt, poor management, or doubts about whether the coins will ever benefit shareholders. The ratio compresses a complicated story into one number, which is exactly why it is both useful and easy to misuse." },
      { type: "h2", text: "The Premium Math, With a Worked Example" },
      { type: "p", text: "Consider a simple illustrative example. Suppose a company holds 10,000 BTC and bitcoin trades at $80,000, so the stack is worth $800 million. Suppose the company has 10 million shares outstanding trading at $120 each, giving a market capitalization of $1.2 billion. Dividing $1.2 billion by $800 million gives an mNAV of 1.5. In other words, the market pays $1.50 for every $1 of bitcoin the company holds. Now suppose the same company issues 1 million new shares at $120, raising $120 million, and uses it all to buy 1,500 more BTC. The stack grows to 11,500 BTC worth $920 million, and shares outstanding grow to 11 million. If the share price holds at $120, market capitalization becomes $1.32 billion, and mNAV becomes about 1.43. Existing holders are slightly better off per share, because the new shares were issued above the value of the bitcoin each share represented." },
      { type: "p", text: "Now run the same example with a mNAV near 1. Suppose the shares trade at $80 each instead of $120, so market capitalization equals the $800 million stack and mNAV is 1. Issuing 1 million shares at $80 raises $80 million, buys 1,000 BTC, and leaves 11 million shares backed by 11,000 BTC worth $880 million. Each share still represents the same amount of bitcoin. The issue neither creates nor destroys value per share. And if mNAV is below 1, issuing shares destroys value: the company sells a claim on more bitcoin than each new share brings in. This is the arithmetic behind the treasury flywheel, and it is why mNAV is the number that decides whether the model compounds or dilutes. For the mechanics of how premiums and spreads work in markets generally, see [cross-exchange arbitrage](/guides/cross-exchange-arbitrage)." },
      { type: "h2", text: "Dilution and How It Moves mNAV" },
      { type: "p", text: "Dilution is often misunderstood as simply more shares. What matters is bitcoin per share, not the share count alone. If a company issues shares at a premium and uses the proceeds to buy bitcoin, bitcoin per share rises, and existing holders benefit even though they own a smaller percentage of the company. If a company issues shares at or below the value of the bitcoin each share represents, bitcoin per share falls or stays flat, and existing holders lose. The same logic applies to convertible bonds, which can turn into shares later, and to preferred shares, which rank ahead of common shareholders. Every form of new capital changes the per-share math, and the test is always the same: did bitcoin per share go up?" },
      { type: "p", text: "Management teams sometimes describe share issues as free bitcoin, because the proceeds buy coins without selling existing assets. That framing is only fair when mNAV is comfortably above 1. When mNAV is near or below 1, the proceeds buy less bitcoin per new share than existing holders already own, and the issue is a transfer from old holders to new ones. Investors should therefore watch two numbers together: mNAV at the time of each issue, and bitcoin per share before and after. A company that grows its stack while shrinking bitcoin per share is growing for the sake of headlines, not for shareholders. The [glossary](/glossary) defines dilution, per-share metrics, and net asset value for readers who want the vocabulary pinned down." },
      { type: "h2", text: "What Compresses mNAV" },
      { type: "p", text: "mNAV compresses when the market stops paying up for the wrapper, and several forces can cause that. First, competition: as more treasury companies appear, investors have more wrappers to choose from, and the scarcity premium on any single one fades. Second, easier alternatives: bitcoin ETFs and regulated products give investors direct exposure without the wrapper, so the convenience premium shrinks. Third, disappointment: if a company issues shares that dilute bitcoin per share, or its operating business loses money, investors re-rate it downward. Fourth, bitcoin itself: when bitcoin falls, as it did in October 2026 with the month down more than 2% and on track for a first back-to-back losing October in over a decade, sentiment toward leveraged bitcoin exposure cools and premiums compress across the sector." },
      { type: "p", text: "Compression is not always a disaster, but it changes the rules. A company that could accretively issue shares at a mNAV of 2 may find that at a mNAV of 1.1 the same issues barely add value, and at a mNAV below 1 they destroy it. Companies that keep issuing into compression dig their own hole, while companies that pause, cut costs, and wait for sentiment to recover preserve per-share value. This is why mNAV compression is the early warning signal for the whole sector: it arrives before forced selling, before debt problems, and before headlines, and it tells observant investors that the flywheel has stalled." },
      { type: "h2", text: "How to Use mNAV Without Misusing It" },
      { type: "p", text: "mNAV is a snapshot, not a verdict. It does not tell you whether a company is well managed, whether its debt is safe, or whether its operating business has value. A high mNAV can reflect genuine quality or pure hype, and a low mNAV can reflect a bargain or a trap. Use mNAV alongside bitcoin per share, debt maturity schedules, and the quality of the operating business. Compare companies on the same basis, because a mNAV that includes debt adjustments is not comparable to one that ignores them. And never buy a treasury stock on mNAV alone: the number tells you what the market pays for the wrapper, not whether the wrapper deserves it." },
      {
        type: "callout",
        title: "mNAV above 1 is not a buy signal",
        text: "A premium can reflect quality, hype, or scarcity, and it can compress without warning. Pair mNAV with bitcoin per share, debt levels, and business quality before drawing any conclusion.",
        tone: "warning",
      },
      { type: "p", text: "Risk disclosure: treasury stocks can lose value faster than bitcoin, and mNAV can compress sharply during market stress. The [best crypto arbitrage scanners](/best-crypto-arbitrage-scanners) page is a useful reminder that every premium in crypto is a spread that can close. Treat mNAV as one gauge on the dashboard, not the whole dashboard." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you learn mNAV without the finance jargon. Ask it to walk through the mNAV formula with a worked example, explain why issuing shares helps holders when mNAV is above 1 and hurts them when it is below 1, or compare mNAV with bitcoin per share." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What does mNAV stand for?",
            a: "Modified net asset value multiple. It compares a treasury company's market value with the market value of the bitcoin it holds, adjusted for debt, cash, and business value depending on the provider.",
          },
          {
            q: "What does an mNAV of 2 mean?",
            a: "The market values the company's shares at roughly twice the value of its bitcoin holdings. Investors are paying a large premium for the wrapper and its expected future accumulation.",
          },
          {
            q: "Why does mNAV compress?",
            a: "Competition, easier direct bitcoin exposure, disappointing management, or falling bitcoin sentiment can all shrink the premium investors will pay for a treasury wrapper.",
          },
          {
            q: "Is a low mNAV always a buying opportunity?",
            a: "No. A low mNAV can reflect a bargain or a genuine problem such as heavy debt or value-destroying management. Check bitcoin per share and debt before concluding anything.",
          }
        ],
      },
  ],
};
