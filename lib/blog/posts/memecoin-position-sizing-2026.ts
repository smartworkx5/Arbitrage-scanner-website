import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "memecoin-position-sizing-2026",
  title: "Memecoin Position Sizing: Surviving 90% Drawdowns",
  description: "Memecoin Position Sizing rules for extreme volatility: fixed-risk stakes, portfolio caps, staged entries and exit plans that help traders survive 90% drawdowns.",
  keywords: [
      "Memecoin Position Sizing",
      "memecoin risk management",
      "position sizing crypto",
      "how much to invest in memecoins",
      "memecoin drawdown survival",
      "crypto portfolio allocation"
  ],
  datePublished: "2026-10-30",
  dateModified: "2026-10-30",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "A memecoin can be a good idea at 1 percent of your portfolio and a disaster at 20 percent. Position sizing is what decides which one it becomes.",
  image: "/images/blog/memecoin-position-sizing-2026.svg",
  blocks: [
      { type: "p", text: "On Oct 30, 2026, Memecoin Position Sizing matters more than picking winners, because Bitcoin traded around $77,300 to $77,975, down roughly 4 to 5 percent in 24 hours after breaking below $80,000 on Oct 29, and memecoins typically fall much harder than Bitcoin in the same move. A 90 percent drawdown is not a worst-case fantasy for memecoins; it is a normal outcome for most of them, including tokens that once looked unstoppable. The traders who survive are rarely the ones with the best predictions. They are the ones whose position sizes let them be wrong repeatedly without being ruined. This guide gives practical sizing rules for extreme-volatility coins." },
      { type: "h2", text: "Think in Portfolio Percent, Not Dollars" },
      { type: "p", text: "The first sizing habit is to think in percentages of your total crypto portfolio, not in dollar amounts that feel small in isolation. Five hundred dollars feels trivial until you realise it is a quarter of a small portfolio, or the fifth memecoin gamble you have taken this month. A common framework is to cap total memecoin exposure at 5 to 10 percent of a crypto portfolio, with any single memecoin at 0.5 to 2 percent. Those numbers are not rules handed down by an authority; they are a way to ensure that even several total losses in a row leave your portfolio intact and your judgement unpanicked." },
      { type: "p", text: "Percent thinking also clarifies opportunity cost. If a memecoin is 1 percent of your portfolio and it rises tenfold, it adds roughly 9 percent to the portfolio, which is meaningful. If it goes to zero, you lose 1 percent, which is survivable. That asymmetry is the whole point of small sizing in high-volatility assets. By contrast, a 20 percent position that falls 90 percent wipes out 18 percent of your portfolio in one trade, and the emotional damage often causes worse decisions afterwards. Before buying, write down the percentage, not just the price, and check it against your total exposure to similar bets." },
      { type: "h2", text: "Fixed Risk Per Trade Beats Gut Feeling" },
      { type: "p", text: "A fixed-risk rule removes the most dangerous variable: your mood on the day. Decide in advance the maximum you will lose on any single memecoin idea, for example 0.5 or 1 percent of your portfolio, and size the position so that your planned exit respects that limit. Because memecoins can gap down past stop levels and thin pools can make exits expensive, many traders treat the full position as at risk rather than trusting a stop-loss to save them. That conservative assumption is honest: if you cannot afford to lose the whole stake, the stake is too large." },
      { type: "p", text: "Fixed risk also stops the classic escalation pattern, where a trader doubles down on a falling token to lower the average entry price. Averaging down into a memecoin that is falling for fundamental reasons, such as insider selling or a broken narrative, usually increases loss rather than improving odds. A written rule helps here: no adding to a losing memecoin unless it meets fresh, pre-defined criteria, and never with money moved from safer holdings in a panic. For a broader lesson in how professionals size exposure rather than chase direction, see [funding rate arbitrage](/guides/funding-rate-arbitrage), where returns depend on structure and cost, not on being right about price." },
      { type: "h2", text: "Staged Entries and Taking Profits Early" },
      { type: "p", text: "Staging entries is a practical way to size under uncertainty. Instead of deploying a full memecoin allocation at once, split it into two or three tranches tied to confirmation: an initial small position after basic checks pass, a second tranche only if holder growth and liquidity hold up, and nothing more if the thesis weakens. This approach accepts that you may miss part of a fast pump, but it also means you rarely hold a full-size position in a token that collapses within hours. In memecoins, missing upside is cheap; holding maximum size through a collapse is expensive." },
      { type: "p", text: "Profit-taking deserves the same pre-commitment. Decide in advance what portion you will sell at set milestones, for example selling a third after a doubling to recover the initial stake, and another portion at higher levels. Taking the initial stake off the table changes the psychology completely: the remaining position becomes a free ride in emotional terms, even though it still carries risk. Without a plan, traders tend to hold through the entire round trip, watching a large paper gain become a large loss. In a fearful market, such as Oct 30, 2026, when the Fear and Greed Index read 30, planned profit-taking is more valuable than hopeful holding." },
      { type: "h2", text: "Surviving a 90 Percent Drawdown in Practice" },
      { type: "p", text: "Surviving a 90 percent drawdown starts before it happens, because during it, clear thinking is scarce. Keep memecoin funds separate from money needed for bills, long-term holdings, or other obligations, and never borrow to buy a memecoin. Avoid leverage on memecoins entirely: leverage turns a survivable 90 percent spot drawdown into a liquidation, and around Oct 29, 2026, roughly $356 million in crypto futures were liquidated in 24 hours, a reminder of how fast leveraged positions disappear. If a position falls 50 percent, your plan should already tell you whether to hold, trim, or exit; improvising at that moment usually means selling at the worst point or doubling down blindly." },
      { type: "p", text: "After a large drawdown, review without self-punishment. Ask whether the sizing was wrong, the thesis was wrong, or both, and record the answer. A token that fell 90 percent because the whole market fell is a different lesson from one that fell because insiders sold, and both differ from a token you bought too large despite knowing the risks. The [triangular arbitrage guide](/guides/triangular-arbitrage) offers a useful contrast: its edge comes from repeatable structure, whereas memecoin sizing is about surviving randomness. Accepting that randomness, and sizing for it, is what keeps you in the game long enough to learn." },
      {
        type: "table",
        headers: ["Portfolio size example", "Single memecoin at 1%", "Single memecoin at 10%", "Loss if token falls 90%"],
        rows: [
          ["$1,000 portfolio", "$10", "$100", "$9 versus $90 lost"],
          ["$10,000 portfolio", "$100", "$1,000", "$90 versus $900 lost"],
          ["$50,000 portfolio", "$500", "$5,000", "$450 versus $4,500 lost"]
        ],
      },
      { type: "h2", text: "Common Sizing Mistakes to Avoid" },
      { type: "p", text: "The most common sizing mistake is sizing to confidence instead of uncertainty. A trader feels certain about a token because friends bought it, social media is loud, or the chart looks strong, and then sizes as if certainty were evidence. In memecoins, loud social signals often peak near the top, precisely when risk is highest. Another mistake is counting unrealised gains as new capital and reinvesting them into ever-larger memecoin bets, which quietly grows exposure until one failure erases many wins. A third mistake is ignoring correlated exposure: five different memecoins are not five independent bets when they all fall together in a market selloff." },
      { type: "p", text: "Correlation deserves special attention on days like Oct 30, 2026, when Bitcoin, Ethereum near $2,254, Solana near $95.68, and XRP near $1.2369 all fell together. In such conditions, a portfolio of memecoins behaves like one large memecoin position, so the total memecoin cap matters more than any single token's size. Review total exposure weekly, include memecoins held across wallets and exchanges, and rebalance when a pump pushes memecoins above your cap. Sizing is not a one-time decision; it is ongoing maintenance, and the traders who treat it that way survive drawdowns that end others." },
      {
        type: "callout",
        title: "Warning: a 90% fall needs a 900% recovery",
        text: "After a 90 percent fall, a token must rise 900 percent just to return to your entry price. That arithmetic is why position size matters more than hope, and why averaging down rarely rescues a bad memecoin trade.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you practise sizing decisions before you trade. For example, you can ask it to explain, in simple words, what a 1 percent portfolio position means in dollars, or to help you draft a written position-sizing checklist to follow." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is a sensible memecoin position size?",
            a: "Many cautious traders limit a single memecoin to 0.5 to 2 percent of their crypto portfolio, with total memecoin exposure capped at 5 to 10 percent. Treat the full stake as at risk.",
          },
          {
            q: "Should I average down on a falling memecoin?",
            a: "Usually not. Averaging down increases exposure to a weakening thesis and can turn a small loss into a large one. Only add if fresh, pre-defined criteria are met, and never in a panic.",
          },
          {
            q: "How do I survive a 90 percent drawdown?",
            a: "By sizing small before it happens, avoiding leverage and borrowed money, keeping memecoin funds separate, and having a written hold, trim, or exit plan decided in advance.",
          },
          {
            q: "Does diversification across memecoins reduce risk?",
            a: "Only partly. Memecoins are highly correlated and often fall together in market selloffs, so total memecoin exposure matters more than the number of different tokens you hold.",
          }
        ],
      },
  ],
};
