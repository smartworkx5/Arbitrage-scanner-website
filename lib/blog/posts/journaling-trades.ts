import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "journaling-trades",
  title: "Trade Journaling That Improves Results",
  description: "A trade journal turns random trades into a feedback loop. Learn what to record, how to review entries, and how journaling improves arbitrage discipline.",
  keywords: [
      "trade journaling crypto",
      "trading journal arbitrage",
      "journaling trades improves results",
      "crypto trade journal template",
      "trading review habit"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 8,
  category: "Basics",
  excerpt: "A trade journal is the cheapest coach an arbitrageur can hire. Here is what to record, how to review it, and how journaling turns mistakes into a system that improves.",
  image: "/images/blog/journaling-trades.svg",
  blocks: [
      { type: "h2", text: "Why Journaling Works When Memory Fails" },
      { type: "p", text: "Human memory is a generous editor. It keeps the wins, softens the losses, and rewrites the reasons you entered a trade to make them sound smarter than they were. A trade journal defeats that editing by recording the facts while they are fresh: what you traded, why, at what size, what it cost, and what happened. Over weeks and months, that record becomes the only honest picture of your trading you will ever get, and it is the raw material for every real improvement you make." },
      { type: "p", text: "For arbitrageurs, journaling is especially valuable because arbitrage trades have many moving parts: two venues, two legs, a transfer, fees on both sides, and a stablecoin leg that may carry its own premium. When a trade goes wrong, memory will blame the most dramatic part, usually the market. A journal often reveals the real culprit was quieter: a withdrawal delay you had seen before, a fee you forgot to include, or a spread you entered below your own minimum. You cannot fix what you cannot see, and a journal makes the pattern visible. For the psychology behind honest reviews, see [Psychology of Arbitrage Trading](/blog/trading-psychology-arbitrage)." },
      { type: "h2", text: "What to Record for Every Trade" },
      { type: "p", text: "A useful journal entry is short but complete. Record the date and time, the route and both venues, the asset and the spread you expected, the actual entry and exit prices on each leg, all fees including withdrawal and network fees, the transfer time, the profit or loss after all costs, and the reason you entered. Then add two fields most traders skip: the emotional state you were in, and whether you followed your written plan. Those two fields are where the most expensive lessons live." },
      {
        type: "table",
        headers: ["Field", "What to write", "Why it matters"],
        rows: [
          ["Route and venues", "Asset, buy venue, sell venue, stablecoin leg", "Shows which routes actually pay"],
          ["Expected vs actual spread", "Spread at entry vs realised spread after costs", "Reveals fee and slippage gaps"],
          ["Transfer time", "Minutes from withdrawal to deposit confirmation", "Exposes slow routes before they strand capital"],
          ["Plan followed?", "Yes or no, and which rule broke if no", "Links losses to discipline, not luck"],
          ["Emotional state", "Calm, rushed, FOMO, revenge, tired", "Shows which feelings precede bad trades"]
        ],
      },
      { type: "p", text: "Keep the format consistent. A journal with a different layout every week is hard to review, and a journal you never review is a diary, not a tool. A simple spreadsheet or a plain text file works fine. The best journal is the one you will actually fill in after every trade, even on a bad day, especially on a bad day." },
      { type: "h2", text: "The Weekly Review That Turns Notes Into Improvement" },
      { type: "p", text: "Recording trades is only half the work. The improvement comes from a weekly review, ideally at a fixed time when the market is not demanding your attention. In the review, sort your trades by profit, and then sort them again by plan adherence. The second sort is more informative. Traders often discover that their most profitable trades were disciplined ones on familiar routes, while their biggest losses came from a small number of rule-breaking trades on unfamiliar routes. That insight is worth more than any indicator, because it tells you exactly which behaviour to change." },
      { type: "p", text: "A good review ends with one concrete change, not ten. Pick the single pattern that cost you the most, and write a specific rule against it. If slow transfers caused the losses, the rule might be: no route with a transfer time over 20 minutes during volatile sessions. If FOMO entries caused them, the rule might be: a two-minute pause and a written fee check before every alert-triggered trade. Small, specific rules compound. Grand resolutions do not. For the FOMO pattern in particular, see [Beating FOMO as an Arbitrageur](/blog/fomo-arbitrage-traders)." },
      { type: "h2", text: "Journaling for Arbitrage: Special Cases" },
      {
        type: "list",
        items: [
        "Log missed trades too: the spread, why you skipped it, and what happened next, to calibrate your minimum threshold.",
        "Log near-misses: trades where a leg failed or a transfer stalled, even if you escaped without a loss.",
        "Log external events: macro news, exchange outages, and stablecoin premiums, so later reviews have context.",
        "Log your energy: note sleep and session length, since tired traders make the mistakes a journal catches.",
        "Revisit old entries monthly: patterns invisible in a week become obvious across a quarter."
        ],
      },
      { type: "p", text: "One special case deserves emphasis: log the trades you did not take. A journal that only records executed trades suffers from survivorship bias, because it never shows you the opportunities you wisely skipped or foolishly ignored. On 15 October 2026, when Bitcoin traded near $80,980 to $81,835 amid roughly $973 million in liquidations, many spreads flashed and closed within minutes. A missed-trade log from that day would show which gaps were real and which were traps, and that evidence would still be useful months later. For risk context on volatile days, see [Arbitrage Risk Management](/blog/arbitrage-risk-management)." },
      {
        type: "callout",
        title: "Review process, not just profit",
        text: "Sort your weekly review by whether you followed the plan, not by how much you made. A disciplined loss is a good trade; a lucky rule-break is a warning, even when it pays.",
        tone: "info",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can help you design a trade journal template, explain what fields matter most for arbitrage, and help you turn a week of entries into review questions. For example, you can ask it to help you draft a weekly review checklist that sorts trades by plan adherence and surfaces your costliest recurring pattern." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What should a trade journal include?",
            a: "Date, route and venues, expected vs actual spread, all fees, transfer time, profit or loss after costs, reason for entry, emotional state, and whether you followed your plan. Those last two fields hold the most expensive lessons.",
          },
          {
            q: "How often should I review my journal?",
            a: "Weekly for the tactical review, and monthly for longer patterns. Each review should end with one concrete rule change, not a long list of resolutions.",
          },
          {
            q: "Should I journal trades I did not take?",
            a: "Yes. Logging missed trades and near-misses prevents survivorship bias and calibrates your minimum spread threshold with evidence instead of regret.",
          },
          {
            q: "Is a spreadsheet enough for a trade journal?",
            a: "Yes. The best journal is the one you actually fill in after every trade. A simple, consistent spreadsheet beats an elaborate tool you abandon after a week.",
          }
        ],
      },
  ],
};
