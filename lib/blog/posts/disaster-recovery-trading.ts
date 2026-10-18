import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "disaster-recovery-trading",
  title: "Disaster Recovery for Traders",
  description: "Exchanges go down, laptops die, and keys get lost. Build a disaster recovery plan for trading: backups, kill switches, and recovery steps before you need it.",
  keywords: [
      "disaster recovery",
      "trading disaster recovery",
      "trading backup plan",
      "crypto kill switch",
      "trading contingency plan",
      "exchange outage plan",
      "trading risk management"
  ],
  datePublished: "2026-10-18",
  dateModified: "2026-10-18",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "When everything breaks at once, traders with a plan lose hours, not accounts. Here is how to build disaster recovery for your trading setup before you need it.",
  image: "/images/blog/disaster-recovery-trading.svg",
  blocks: [
      { type: "p", text: "Disaster recovery for traders means having a plan for the day everything breaks at once. Your exchange goes down during a volatile session. Your laptop dies. Your phone, with your two-factor codes, is lost. Your internet drops. None of these are rare, and they tend to arrive together because volatility stresses both markets and infrastructure. On Oct 17, 2026, liquidations cooled to about $315 million after roughly $1 billion the day before, while Bitcoin held near $81,300 to $81,850. Calm weeks still produce outages, and a trader without a recovery plan discovers the gap at the worst possible moment. The goal of disaster recovery is simple: no single failure should be able to lock you out of your own money or leave positions running that you cannot control." },
      { type: "h2", text: "Map Your Single Points of Failure" },
      { type: "p", text: "Start by listing everything your trading depends on, and ask what happens if each item disappears. Your device: if your laptop is stolen, can you trade from another device today, or do you need to reinstall and reconfigure everything first? Your connectivity: if your home internet drops, do you have a phone hotspot and the exchange app ready? Your authentication: if you lose your phone, how do you recover your two-factor codes, and do you have backup codes stored somewhere safe? Your exchange account: if the exchange freezes withdrawals or goes offline, what positions are exposed, and how long can you wait? Write honest answers. Most traders find three or four single points of failure they never noticed, usually around authentication and device access." },
      { type: "p", text: "Rank each failure by two questions: how likely is it, and how bad is it if it happens during an open position? A dead laptop with no open positions is an inconvenience. A dead laptop while a leveraged position is running is a crisis. That ranking decides where to spend effort first. The highest-priority fixes are almost always the same: a second way to access each exchange, printed or securely stored backup codes for two-factor authentication, and a way to close positions without your main device. Everything else is refinement." },
      { type: "h2", text: "Backups: Keys, Codes, Configs, and Records" },
      { type: "p", text: "Backups for traders cover four things. First, recovery codes for two-factor authentication, stored offline in a safe place, never as a screenshot in a cloud photo album. Second, wallet seed phrases, also offline, split or secured so that losing one copy is not losing everything. Third, your trading configuration: bot settings, API key permissions, alert rules, and exchange account details, exported regularly so a replacement device can be set up in minutes. Fourth, your records: trade history, tax-relevant logs, and account statements, exported monthly. A backup you have never tested is a guess, not a backup. Once a quarter, restore from your backups on a spare device and confirm everything works." },
      {
        type: "list",
        items: [
        "Two-factor backup codes: printed, stored offline, in a secure location.",
        "Wallet seed phrases: offline, never photographed or pasted into chat apps.",
        "Bot and strategy configs: exported after every meaningful change.",
        "Trade and tax records: exported monthly, stored in two places.",
        "Test the restore once a quarter on a spare device."
        ],
      },
      { type: "h2", text: "Kill Switches and Position Control" },
      { type: "p", text: "A kill switch is a single action that stops all automated trading and, where possible, closes or hedges open positions. Every trader running bots needs one, and it must work from a second device. Practice using it before you need it, because a kill switch you cannot find during a crisis is decoration. Beyond the switch itself, set exchange-side safeguards: maximum order sizes, withdrawal allowlists, and API keys with trading-only permissions where your strategy allows. If a bot goes rogue while you are unreachable, these limits cap the damage. Also decide in advance your position policy for outages: which positions you would close immediately, which you would hold, and what price moves would change that decision." },
      {
        type: "callout",
        title: "Kill switch rule",
        text: "If you cannot stop all of your bots within 60 seconds from your phone, your kill switch is not ready. Test it on a quiet day, not during a market event.",
        tone: "warning",
      },
      { type: "h2", text: "Exchange Outages and Counterparty Failure" },
      { type: "p", text: "Some disasters are not yours at all. An exchange can pause withdrawals, freeze an account, or go offline for hours during peak volatility. Your plan should assume that any single exchange can become unavailable at any time, and that during an outage you may not be able to close positions there. That is why experienced traders spread capital across venues, keep most funds in self-custody when not actively trading, and never size a position on one exchange so large that its outage alone would be catastrophic. The [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) guide explains how spreads behave when one venue goes dark, and [CEX vs DEX arbitrage](/guides/cex-vs-dex-arbitrage) shows why a second venue type matters. More risk guides are on the [blog](/blog)." },
      { type: "h2", text: "Rehearse, Then Improve" },
      { type: "p", text: "A plan on paper is only half a plan. Run a tabletop drill twice a year: pick a scenario, such as your phone is lost during a volatile session, and walk through every step out loud with a timer. You will find gaps immediately, like a backup code stored in the same bag as the phone it backs up, or an exchange app that requires a fresh device verification you cannot complete without email access. Fix the gaps, update the written plan, and repeat. Traders who rehearse recover in minutes. Traders who improvise during a real outage lose hours and often money. Disaster recovery is not pessimism. It is the unglamorous work that keeps one bad day from becoming a bad month." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you build a disaster recovery plan for your trading setup. Ask it to list single points of failure in your workflow, draft a kill-switch checklist, or turn your recovery steps into a one-page document you can print." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is the first step in disaster recovery for traders?",
            a: "Map your single points of failure: device, connectivity, authentication, and exchange access. Fix the failures that would hurt most while positions are open.",
          },
          {
            q: "Where should I store backup codes and seed phrases?",
            a: "Offline, in a secure physical location, never as screenshots in cloud photos or chat apps. Losing one copy should not mean losing everything.",
          },
          {
            q: "What is a trading kill switch?",
            a: "A single action that stops all automated trading and, where possible, closes or hedges open positions. It must work from a second device within about a minute.",
          },
          {
            q: "How often should I test my recovery plan?",
            a: "Test backups on a spare device once a quarter, and run a full tabletop drill twice a year. A backup you have never tested is a guess, not a backup.",
          }
        ],
      },
  ],
};
