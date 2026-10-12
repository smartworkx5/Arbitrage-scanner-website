import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "arbitrage-bot-risks",
  title: "Risks of Running Arbitrage Bots",
  description: "The real risks of running arbitrage bots: software bugs, leaked API keys, runaway order loops, and flash moves. How professionals protect their capital.",
  keywords: [
      "arbitrage bot risks",
      "trading bot dangers",
      "crypto bot security risks",
      "API key risk trading",
      "bot runaway loop risk"
  ],
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
  readingMinutes: 10,
  category: "Strategies",
  excerpt: "Arbitrage bots fail in specific, expensive ways: bugs, leaked keys, runaway loops, and markets that move faster than code. Here are the real risks and how professionals defend against each.",
  image: "/images/blog/arbitrage-bot-risks.svg",
  blocks: [
      { type: "p", text: "Every **arbitrage bot risk** falls into one of three buckets: the code does something wrong, someone else does something wrong with your access, or the market does something your code never imagined. Beginners obsess over strategy — which spread to trade — while professionals obsess over failure modes, because a bot's losses come overwhelmingly from operations, not from bad signals. October 2026 shows why: bitcoin fell to $80,420 on October 9 then recovered to $83,650–$83,854 by October 12, a 4%+ round trip in three days. Bots running through that move faced whipsawing spreads, thinning books, and funding flips — exactly the conditions where operational weaknesses turn into losses." },
      { type: "p", text: "This article catalogs the risks honestly — not to scare you away from automation, but because each risk has a known defense, and professionals implement all of them. If you are considering running a bot, read this as a checklist: every risk below should have a corresponding control in your setup before real capital goes live. Our [risk management framework](/blog/arbitrage-risk-management) covers the position-sizing side; this article covers the things that break." },
      { type: "h2", text: "Software Bugs: Your Code Is the Biggest Risk" },
      { type: "p", text: "The most expensive arbitrage bot failures in history were not market events — they were bugs. A misplaced decimal in position sizing turns a $100 trade into a $10,000 trade. A pair-mapping error buys the wrong asset. An unhandled exception in the sell leg leaves the buy leg naked in a falling market. Off-by-one errors in fee math make unprofitable trades look profitable, so the bot executes them enthusiastically, thousands of times. These are not hypothetical: every experienced bot operator has a story about a bug that cost real money, usually discovered at the worst possible time." },
      { type: "p", text: "Defense is layered. Code review — even self-review after a night's sleep — catches what tired eyes miss. Unit tests on every calculation the bot makes with money: fee math, size math, spread math. A staging environment that mirrors production. Gradual rollouts: new code trades minimum size for days before earning normal size. And above all, position-level circuit breakers in the risk module that cap what any single bug can do. A bug that can only lose 1% of capital is an annoyance; the same bug without limits is a catastrophe." },
      { type: "h2", text: "API Keys: The Keys to Your Kingdom, Handed to Code" },
      { type: "p", text: "A trading bot needs your exchange API keys, which means your code — and your server — hold credentials that can move your money. The threat model has three parts: theft (someone steals the keys), misuse (the keys have more permission than needed), and exposure (keys leak through logs, repositories, or backups). Real incidents follow a grim pattern: keys committed to a public GitHub repo are typically drained within hours by automated scanners; phishing pages mimicking exchanges harvest keys; malware on a developer's laptop copies configuration files." },
      { type: "p", text: "The defenses are well established and non-negotiable. Generate keys with trading permission only — withdrawals disabled, always, no exceptions. Restrict keys to your server's IP address so stolen keys are useless elsewhere. Store keys in environment variables or a secrets manager, never in code or chat logs. Rotate keys on a schedule and immediately after any suspected exposure. Use a dedicated sub-account for the bot with limited funds rather than your main account. These controls are covered in depth in our [exchange security analysis](/blog/exchange-hacks-arbitrage) — the attack patterns are the same whether the victim is manual or automated." },
      {
        type: "callout",
        title: "Withdrawals must stay disabled",
        text: "There is no legitimate reason for a trading bot's API key to have withdrawal permissions. If a platform or tutorial tells you to enable withdrawals, stop and reconsider — that single permission turns every other vulnerability from a trading loss into a total loss.",
        tone: "warning",
      },
      { type: "h2", text: "Runaway Loops: When the Bot Won't Stop" },
      { type: "p", text: "A runaway loop is every bot operator's nightmare: the bot enters a cycle — placing and canceling orders, or repeatedly executing a flawed trade — and each iteration loses a little more to fees and slippage. Causes include retry logic without backoff (a failed order retried instantly, forever), signal flicker (a spread oscillating around the threshold triggers alternating buy/sell cycles), and state desynchronization (the bot's internal position record diverges from reality, so it keeps hedging a position that no longer exists). Because bots act in milliseconds, a runaway loop can execute thousands of loss-making iterations before a human notices." },
      { type: "p", text: "Prevention is architectural. Every order-placement path needs idempotency — the same signal must never produce duplicate orders. Retry logic needs exponential backoff with a hard cap on attempts, then escalation to a human. Rate-of-ordering monitors should halt trading if order frequency exceeds sane bounds. And the daily loss cap in the risk module is the final backstop: even if every other defense fails, the bot stops when losses hit the line. Test runaway scenarios deliberately in paper trading — simulate a flickering signal and confirm the bot stands down instead of churning." },
      { type: "h2", text: "Market Risks: Flash Moves and Vanishing Liquidity" },
      { type: "p", text: "Bots assume markets behave like their recent data; markets periodically disagree. Flash crashes, exchange outages during volatility, and stablecoin wobbles create conditions where both legs of an arbitrage cannot be executed as modeled. The October 9 drop to $80,420 is a mild example — books thinned, spreads widened then snapped back, and any bot sized for calm conditions took unexpected slippage. Worse are venue-specific events: an exchange halting withdrawals strands the capital you need for rebalancing, turning a hedged position into a directional bet you never chose." },
      { type: "p", text: "You cannot code away market risk, but you can bound it. Size positions for stressed liquidity, not average liquidity — assume your fills will be worse than the screen shows. Diversify across venues so no single exchange's failure strands everything. Build venue-health monitoring into the bot: if an exchange's API latency spikes or withdrawals pause, the bot should reduce or halt exposure there automatically. And keep the [execution risk playbook](/blog/execution-risk-arbitrage) handy — it details how professionals structure trades to survive the moments models miss." },
      {
        type: "table",
        headers: ["Risk", "Typical cause", "Primary defense"],
        rows: [
          ["Oversized orders", "Decimal/unit bug in sizing code", "Hard position caps in risk module"],
          ["Stolen API keys", "Leaked repo, phishing, malware", "Withdrawal-disabled, IP-restricted keys"],
          ["Runaway order loop", "Retry without backoff, signal flicker", "Idempotency, order-rate monitors, loss caps"],
          ["Half-hedged exposure", "One leg fails, other fills", "Atomic execution checks, immediate alerting"],
          ["Venue outage mid-trade", "Exchange downtime in volatility", "Venue health monitoring, diversified venues"],
          ["Strategy decay", "Edges compress over time", "Weekly P&L reviews, kill criteria per strategy"]
        ],
      },
      { type: "h2", text: "The Operational Discipline That Ties It Together" },
      { type: "p", text: "All these defenses share one requirement: operational discipline. Review logs and P&L weekly, not when something breaks. Rehearse the kill switch — flattening positions and halting the bot — until it is muscle memory. Keep the bot's capital segregated from your long-term holdings so a bad day cannot touch money you need. Document every incident and the fix, building an institutional memory that compounds. Professional bot operation looks boring from the outside: checklists, reviews, small sizes, constant monitoring. That boredom is the product — excitement in automated trading is almost always expensive." },
      {
        type: "faq",
        items: [
          {
            q: "What is the biggest risk of running an arbitrage bot?",
            a: "Your own code. Bugs in sizing, order logic, or error handling cause larger and faster losses than bad strategies, because the bot executes mistakes at machine speed. The primary defenses are code review, unit tests on all money math, hard position caps, and gradual rollouts of any code change at minimum size.",
          },
          {
            q: "Can someone steal my money through my bot's API keys?",
            a: "Yes, if the keys are exposed or over-permissioned. Always create trading-only keys with withdrawals disabled, restrict them to your server's IP, store them outside your codebase, and rotate them regularly. A key with withdrawals enabled turns any other vulnerability into a total loss.",
          },
          {
            q: "What is a runaway loop and how do I prevent it?",
            a: "A runaway loop is when a bot cycles orders or trades repeatedly due to retry logic without limits, flickering signals, or desynchronized state — losing money on every iteration. Prevent it with idempotent order paths, capped retries with backoff, order-rate monitors that halt trading on abnormal frequency, and a daily loss cap as the final backstop.",
          },
          {
            q: "How do bots handle exchange outages?",
            a: "Well-built bots monitor venue health — API latency, order-book freshness, withdrawal status — and automatically reduce or halt exposure to a degraded venue. Poorly built bots keep trading into the outage. Diversifying across venues and sizing for stressed liquidity are the structural defenses; no code can trade on an exchange that is down.",
          },
          {
            q: "How much of my capital should a bot control?",
            a: "Only capital you can afford to lose, segregated from long-term holdings — many operators limit bot capital to a fraction of their total crypto portfolio and cap per-trade risk at 1–2%. Start small, prove the system over months, and scale gradually. Never run a new bot on money you need.",
          }
        ],
      },
  ],
};
