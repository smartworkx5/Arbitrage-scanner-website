import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "monitoring-alerting-trading",
  title: "Monitoring and Alerting for Bots",
  description: "Bots fail silently unless you watch them. Learn uptime checks, anomaly alerts, latency monitoring, and the runbooks that keep automated trading alive.",
  keywords: [
      "monitoring and alerting",
      "bot monitoring",
      "trading bot uptime",
      "anomaly detection trading",
      "bot alerting tools",
      "automated trading alerts",
      "trading bot health checks"
  ],
  datePublished: "2026-10-18",
  dateModified: "2026-10-18",
  readingMinutes: 8,
  category: "Basics",
  excerpt: "A trading bot that fails quietly is worse than one that fails loudly. Here is how to watch uptime, catch anomalies early, and build alerts you actually act on.",
  image: "/images/blog/monitoring-alerting-trading.svg",
  blocks: [
      { type: "p", text: "Monitoring and alerting is the difference between a trading bot you trust and one you merely hope is working. A bot can lose its exchange connection, start rejecting orders, or drift away from its strategy without any visible crash, and the first sign is often a balance that is quietly wrong. Markets do not pause while you notice. On Oct 18, 2026, Bitcoin traded around $81,300 to $81,850 while liquidations cooled to roughly $315 million on Oct 17 from about $1 billion the day before, a reminder that even calmer sessions carry real risk for unattended automation. Good monitoring and alerting tells you within seconds that something changed, what changed, and whether you need to act now or can check it after coffee." },
      { type: "h2", text: "What to Watch: The Five Signals That Matter" },
      { type: "p", text: "Five signals cover most bot failures. First, uptime and heartbeat: is the bot process alive and looping on schedule? Second, order success rate: are orders being accepted, or is the exchange rejecting them? Third, latency: how long do API calls take, and is it creeping up? Fourth, balances and positions: do they match what the strategy expects, or has something drifted? Fifth, error logs: are warnings piling up that nobody has read? A dashboard showing these five numbers at a glance beats a dozen exotic metrics that nobody checks. If any one of them moves outside its normal band, something deserves a look, even if nothing has lost money yet." },
      { type: "p", text: "The heartbeat is the simplest and most valuable check. Your bot should record a timestamped I am alive signal every minute, and your monitor should alert if two in a row go missing. That catches crashes, frozen processes, and dead servers. Also watch exchange-side signals: API keys expire, IP allowlists change, and rate limits return 429 errors when you call too fast. A bot that keeps retrying against a revoked key can burn through its error budget and get throttled further. Treat repeated authentication or permission errors as a stop-everything signal, not background noise." },
      { type: "h2", text: "Anomaly Detection: Catching Drift Before It Costs Money" },
      { type: "p", text: "Threshold alerts catch crashes. Anomaly detection catches drift, the slow change in behavior that precedes real losses. Start by recording baselines for normal behavior: how many trades per hour, what spread the bot usually captures, how long orders usually sit open, and how much slippage is typical. An alert should fire when behavior leaves its normal band for a sustained period, not on a single odd data point. For example, if your bot normally places 20 to 40 orders an hour and suddenly places 200, that is an anomaly worth investigating, whether it is a bug, a stuck loop, or a genuine market event." },
      { type: "p", text: "The enemy of anomaly detection is alert fatigue. Thresholds set too tight produce so many alerts that you start ignoring them, which defeats the whole system. Keep the number of alerts small and the signal high. Use severity tiers: a warning for unusual-but-not-dangerous behavior, and a critical alert for behavior that can lose money. Review your alert history weekly and tune the noisiest ones. An alerting system that cried wolf ten times last week will be ignored on the eleventh, and the eleventh is usually the one that matters." },
      { type: "h2", text: "Alerts That Reach You in Time" },
      { type: "p", text: "An alert that sits unread in an inbox is not an alert. Critical alerts should reach you through at least two channels, such as a push notification plus an SMS or phone call, and they should require acknowledgment. If nobody acknowledges a critical alert within a few minutes, it should escalate to a second person or a louder channel. Non-critical alerts can go to email or a chat channel for review during the day. Match the channel to the stakes: a bot that is down during a quiet weekend is a warning, while a bot placing erratic orders during a volatile session is a wake-up call. Decide these tiers in advance, when you are calm, not during an incident." },
      {
        type: "list",
        items: [
        "P1 critical: erratic orders, large unexpected loss, positions do not match strategy. Phone call plus push, escalate if unacknowledged.",
        "P2 warning: exchange connection flaky, latency doubled, heartbeat missed once. Push notification, check within the hour.",
        "P3 info: unusual but harmless pattern, daily summary items. Email or chat digest, review once a day.",
        "Every alert must say what happened, which bot, and the first action to take."
        ],
      },
      { type: "h2", text: "Runbooks: Decide the Response Before the Alert Fires" },
      { type: "p", text: "A runbook is a short written procedure for each alert: what to check, in what order, and what to do. For an exchange-disconnect alert, the runbook might read: pause the bot, check the exchange status page, verify open positions and balances against the strategy, then resume only when the connection is stable. For an erratic-orders alert, the runbook starts with the kill switch: stop all trading first, ask questions second. Writing runbooks in advance matters because incidents happen at bad times, when you are tired or distracted. A two-minute checklist beats twenty minutes of improvising under pressure." },
      {
        type: "callout",
        title: "Never auto-restart blindly",
        text: "A bot that restarts after a crash without checking its positions can place duplicate orders or reopen positions you already closed. Every restart must reconcile balances and open orders against the strategy before trading resumes.",
        tone: "warning",
      },
      { type: "h2", text: "Logs, Dashboards, and Post-Incident Reviews" },
      { type: "p", text: "Monitoring is only as good as the records behind it. Keep structured logs of every order, fill, error, and decision, and keep them long enough to investigate problems days later. A simple dashboard showing equity, open positions, error counts, and recent alerts gives you the state of the system in one glance. After any incident, write a short review: what happened, why it happened, what you fixed, and what would prevent a repeat. That discipline turns each failure into a stronger system. Monitoring supports every strategy you run, from [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) to [funding rate arbitrage](/guides/funding-rate-arbitrage), and the [glossary](/glossary) explains the terms behind the metrics. More practical guides live on the [blog](/blog)." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you design a monitoring setup for your trading bots. Ask it to explain anomaly detection in simple words, draft a runbook for a bot outage, or turn a messy incident into a clear checklist." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is the single most important thing to monitor on a trading bot?",
            a: "The heartbeat, a regular I am alive signal. If the heartbeat stops, the bot may be crashed, frozen, or disconnected, and you need to know within minutes, not hours.",
          },
          {
            q: "How do I avoid alert fatigue?",
            a: "Keep alerts few and meaningful. Use severity tiers, alert on sustained behavior changes rather than single data points, and review and tune the noisiest alerts every week.",
          },
          {
            q: "Should my bot auto-restart after a crash?",
            a: "Only after reconciling balances and open orders against the strategy. An unchecked restart can place duplicate orders or reopen positions you already closed.",
          },
          {
            q: "What belongs in a trading bot runbook?",
            a: "The symptom, the checks in order, the action for each outcome, and the kill-switch step. Write it in advance so you follow a checklist instead of improvising during an incident.",
          }
        ],
      },
  ],
};
