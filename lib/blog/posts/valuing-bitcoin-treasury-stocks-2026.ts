import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "valuing-bitcoin-treasury-stocks-2026",
  title: "How to Value a Bitcoin Treasury Stock: Beyond mNAV",
  description: "Valuing a Bitcoin treasury stock takes more than mNAV. Learn a four-step framework for combining BTC per share, operating value, debt, and premium risk.",
  keywords: [
      "bitcoin treasury stock",
      "bitcoin treasury valuation",
      "valuing treasury stocks",
      "treasury stock valuation framework",
      "BTC per share valuation",
      "mNAV valuation",
      "treasury stock analysis"
  ],
  datePublished: "2026-10-19",
  dateModified: "2026-10-19",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "mNAV is a starting point, not a valuation. Here is a four-step framework for valuing a bitcoin treasury stock on fundamentals, not hype.",
  image: "/images/blog/valuing-bitcoin-treasury-stocks-2026.svg",
  blocks: [
      { type: "p", text: "Valuing a bitcoin treasury stock is harder than valuing either a bitcoin holding or an ordinary company, because it is both at once. The market price reflects the coins, the operating business, the debt, and a premium that depends on sentiment, all tangled together. Investors who rely on a single number, usually mNAV, end up paying for hype in good times and panic-selling in bad ones. A better approach is a framework that separates the pieces: value the bitcoin per share, value the operating business, subtract the debt and obligations, and then decide what premium, if any, the result deserves. On October 19, 2026, with bitcoin near $82,100 to $82,600, $80,000 as near-term support, and October down more than 2%, premiums across the sector are under pressure, which makes a disciplined framework more valuable than ever. This guide walks through that framework step by step." },
      { type: "h2", text: "Why mNAV Alone Is Not Enough" },
      { type: "p", text: "mNAV compares a company's market value with the value of its bitcoin, and it is a useful gauge of how richly the market prices the wrapper. But it is not a valuation, for three reasons. First, it says nothing about the operating business: two companies with the same mNAV can have very different business values. Second, it says nothing about debt quality: a company with long-dated, low-cost debt is worth more than one with the same mNAV and a wall of near-term maturities. Third, it says nothing about whether the premium is justified: mNAV tells you what the market pays, not what it should pay. An investor who buys because mNAV is low, or sells because it is high, is using the market's opinion as a substitute for their own judgment." },
      { type: "p", text: "The framework in this guide treats mNAV as an output to sanity-check, not an input to decide with. You value the pieces first, arrive at your own estimate of what the shares are worth, and then compare your estimate with the market price and the implied mNAV. If your estimate is well above the market price, the shares may be cheap. If it is well below, they may be expensive, however the mNAV looks. This discipline is slower than quoting a ratio, but it is the only approach that survives a bear market, because ratios compress while fundamentals, debt schedules and business earnings, change more slowly. For the mNAV mechanics themselves, see the companion guide on [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) for how spreads work, and the [glossary](/glossary) for the key terms." },
      { type: "h2", text: "Step 1: Bitcoin per Share" },
      { type: "p", text: "Start with the foundation: how much bitcoin does each share represent? Divide the company's bitcoin holdings by its fully diluted share count, including shares that convertible bonds and options could create. This is the per-share claim on the stack, and it is the number that decides whether capital raises have helped or hurt holders. Track it over time, not just at one moment. A company whose bitcoin per share grows quarter after quarter is compounding for holders. A company whose stack grows while bitcoin per share falls is diluting holders behind a headline of growth. The trend matters more than the level, because the trend reveals management's discipline." },
      { type: "p", text: "Then convert bitcoin per share into a dollar value at the current bitcoin price, and stress-test it. What is bitcoin per share worth if bitcoin falls 30%? What if it falls 50%? These are not predictions. They are the range of outcomes a treasury investor must be able to tolerate, because bitcoin has fallen that far before and will again. A valuation that only works if bitcoin rises is not a valuation. It is a hope. The per-share bitcoin value, at today's price and at stressed prices, is the anchor of the whole framework. Everything else, business value, debt, premium, adjusts around it." },
      { type: "h2", text: "Step 2: Operating Business Value" },
      { type: "p", text: "Next, value the operating business on its own, as if the bitcoin did not exist. Does the company sell software, services, or products that earn real profits? If so, estimate what that business alone would be worth, using the same methods you would apply to any company: earnings, cash flow, and comparable businesses. If the business loses money, its value may be zero or negative, because it consumes cash that could otherwise support the treasury. Many treasury companies have operating businesses that are small relative to the stack, or that lose money, and investors routinely overvalue them by treating the whole company as a bitcoin vehicle and ignoring the drag of an unprofitable operation." },
      { type: "p", text: "The operating business matters for a second reason: it is the company's other source of cash. A profitable business can fund interest payments, dividends, and even bitcoin purchases without new share issues, which makes the treasury far more resilient. An unprofitable business does the opposite, draining cash and forcing the company back to the capital markets at whatever terms are available. When valuing a treasury, ask whether the business helps the treasury or feeds on it. A business that funds the treasury is a genuine asset. A business that feeds on the treasury is a liability wearing an asset's clothes, and it should be valued accordingly, which usually means at or near zero." },
      { type: "h2", text: "Step 3: Debt and Obligations" },
      { type: "p", text: "Now subtract what the company owes. List all debt by maturity, all preferred shares with their dividend obligations, and any other fixed commitments. The total matters, but the timing matters more: debt due next year is a present danger, while debt due in five years is a manageable one. Compare the obligations with the company's resources: cash reserves, operating cash flow, and the liquid portion of the bitcoin stack. Strategy's $1.44 billion dollar reserve, reported in October 2026 and established to support preferred-stock dividends and debt interest, is an example of a resource that belongs in this calculation. A company with obligations covered by reserves and cash flow is financeable. A company whose obligations exceed its liquid resources is one maturity away from forced selling." },
      { type: "p", text: "Be thorough about what counts as an obligation. Convertible bonds that may convert are still debt until they do. Preferred shares with mandatory dividends are obligations even though they are called equity. Operating leases, legal liabilities, and promised payments all belong in the picture. Investors who count only the headline bond total miss the preferred dividends that drain cash every quarter and the maturities that arrive in clusters. The framework's rule is simple: if it must be paid in cash on a schedule, it is an obligation, and it reduces what shareholders own. Value the company after obligations, not before them." },
      { type: "h2", text: "Step 4: Premium Risk and a Sanity Check" },
      { type: "p", text: "Finally, decide what premium the shares deserve, if any. Add the per-share bitcoin value and the per-share operating value, subtract per-share obligations, and you have a rough fundamental value per share. Compare it with the market price. The gap is the premium the market is paying for management, future accumulation, and sentiment. Ask whether that gap is justified. Does management have a record of growing bitcoin per share? Is the business profitable? Is the debt manageable? If the answers are yes, some premium may be fair. If the answers are no, the premium is a risk, not a reward, and the shares are expensive however the mNAV looks." },
      {
        type: "table",
        headers: ["Valuation step", "What to calculate", "Key question"],
        rows: [
          ["Bitcoin per share", "Stack divided by fully diluted shares", "Is it growing or shrinking?"],
          ["Operating business value", "Standalone earnings and cash flow value", "Does the business fund or feed on the treasury?"],
          ["Debt and obligations", "Debt by maturity plus preferred dividends", "Can obligations be met without selling BTC?"],
          ["Premium sanity check", "Market price minus fundamental value", "Is the premium justified by the record?"]
        ],
      },
      {
        type: "callout",
        title: "Value the pieces, then the whole",
        text: "Never value a treasury stock on mNAV alone. Value the bitcoin per share, the business, and the obligations separately, then decide what premium, if any, the combination deserves.",
        tone: "warning",
      },
      { type: "p", text: "Risk disclosure: valuation is judgment, not arithmetic, and even a careful framework cannot predict bitcoin's price or the market's mood. Treasury stocks can fall far below any fundamental estimate in a panic, and they can trade far above it in a mania. Use the framework to avoid overpaying and to spot distress early, not to time the market. The [best crypto arbitrage scanners](/best-crypto-arbitrage-scanners) page is a useful reminder that every premium is a spread that can close. The investor who values the pieces, stresses the price, and respects the premium is the investor most likely to survive the treasury cycle." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you learn to value a bitcoin treasury stock. Ask it to explain the four-step framework in simple words, walk through a bitcoin-per-share calculation with an example, or draft a checklist for reading a treasury's debt schedule." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "How do I value a bitcoin treasury stock?",
            a: "Value the pieces: bitcoin per share, operating business value, minus debt and obligations. Then compare your fundamental estimate with the market price to judge whether the premium is justified.",
          },
          {
            q: "Why is mNAV not enough for valuation?",
            a: "mNAV shows what the market pays for the wrapper, not what it should pay. It says nothing about business quality, debt timing, or whether the premium is justified.",
          },
          {
            q: "What is the most important number in a treasury valuation?",
            a: "Bitcoin per share and its trend. It decides whether capital raises helped or hurt holders, and it anchors the whole framework.",
          },
          {
            q: "How should I stress-test a treasury valuation?",
            a: "Recompute bitcoin per share at 30% and 50% lower bitcoin prices, and check whether debt and dividends can still be met without selling coins. If not, the treasury is fragile.",
          }
        ],
      },
  ],
};
