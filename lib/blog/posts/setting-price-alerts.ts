import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "setting-price-alerts",
  title: "Setting Effective Arbitrage Price Alerts",
  description: "Price alerts turn a scanner into a workflow. Learn how to set thresholds, filters, and delivery rules that surface tradeable gaps without drowning you in noise.",
  keywords: [
      "arbitrage price alerts",
      "setting crypto price alerts",
      "crypto arbitrage alerts",
      "price alert strategy",
      "arbitrage alert thresholds"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 7,
  category: "Basics",
  excerpt: "Most alert setups fail in one of two ways: they fire constantly, or they miss the one gap that mattered. Here is how to set thresholds, filters, and delivery rules that keep alerts useful.",
  image: "/images/blog/setting-price-alerts.svg",
  blocks: [
      { type: "h2", text: "Why Most Alert Setups Fail" },
      { type: "p", text: "Price alerts are supposed to save attention, but most traders set them up in a way that wastes it. The common failure is alerting on gross spreads: the scanner pings every time a headline gap crosses a threshold, and the trader spends the day dismissing gaps that would lose money after fees. The opposite failure is setting thresholds so high that the alert almost never fires, which means the one genuinely tradeable gap of the week arrives silently. Both failures have the same root cause: the alert is tuned to a number on a screen, not to a trade the trader can actually execute. Effective alerts start from your real routes, your real costs, and your real availability." },
      { type: "p", text: "Volatile days make the problem worse. On 15 October 2026, after a hot US CPI print at 3.7% year on year, Bitcoin traded near $80,980 to $81,835, Ether near $2,414 to $2,426, and roughly $973 million in leveraged positions were liquidated in 24 hours. A scanner with loose thresholds would have fired dozens of alerts during that session, most of them untradeable once transfer delays and stablecoin premiums were counted. A trader who had tuned alerts to net spreads on tested routes would have seen far fewer pings, but each one would have been worth reading. The goal is fewer, better alerts, not more alerts." },
      { type: "h2", text: "Start From Your Routes, Not From the Scanner" },
      { type: "p", text: "Before setting a single alert, list the routes you can actually trade: the venues where you hold verified accounts, the pairs you can settle, and the capital you have pre-positioned on each side. For each route, work out your true round-trip cost: trading fees on both legs, withdrawal and network fees, a slippage allowance based on order-book depth, and any stablecoin premium on the settlement leg. Your alert threshold for that route should be your cost plus a minimum profit margin, not a round number that felt right. A route that costs 0.6% all-in needs an alert threshold above 0.6%, and the margin you demand on top is a matter of temperament and trade frequency." },
      { type: "p", text: "Next, add a liquidity filter. A 2% gap on a pair with almost no depth is a mirage: your order would move the price before it filled. Require a minimum 24-hour volume or a minimum order-book depth on both venues before an alert qualifies. Also filter by transfer time. If a route takes forty minutes to settle, an alert that fires on a gap that typically lasts five minutes is noise. Good scanners let you filter by venue, pair, minimum net spread, and minimum volume. Use all of those filters. An alert you have not filtered is a to-do list you will learn to ignore. For scanner selection, see [Arbitrage Scanners Compared 2026](/blog/arbitrage-scanners-compared)." },
      { type: "h2", text: "Thresholds, Cooldowns, and Delivery Rules" },
      { type: "p", text: "Thresholds should differ by route, because costs and volatility differ by route. A deep BTC pair between two major exchanges might justify a tight threshold, since costs are low and fills are reliable. A thin altcoin pair between smaller venues needs a wide threshold, because slippage and transfer risk are far higher. Resist the temptation to use one global threshold for everything. It will over-alert on cheap routes and under-alert on expensive ones, which is exactly backwards. Review thresholds monthly, or after any fee change on a venue you use, because a fee change silently shifts your break-even point." },
      {
        type: "table",
        headers: ["Alert setting", "Recommended approach", "Why it helps"],
        rows: [
          ["Threshold", "Per-route: cost plus minimum margin", "Only tradeable gaps fire"],
          ["Liquidity filter", "Minimum volume or book depth", "Filters out mirage gaps on thin pairs"],
          ["Cooldown", "One alert per route per gap episode", "Stops repeat pings for the same gap"],
          ["Delivery", "Fastest channel you actually read", "An unread alert is no alert at all"],
          ["Quiet hours", "Mute routes you cannot trade overnight", "Protects sleep and prevents stale chasing"]
        ],
      },
      { type: "p", text: "Cooldowns are the most underused alert feature. Without a cooldown, a gap that hovers near your threshold will ping you every few minutes for as long as it lasts, which is both annoying and dangerous, because the tenth ping feels less urgent than the first even though the trade is the same. Set a cooldown per route, such as one alert per gap episode, so you hear about a gap once and then decide in peace. Delivery matters too: send alerts to the channel you actually check promptly, whether that is a mobile push, email, or messaging app. And set quiet hours for routes you cannot trade while asleep. Waking up to a stale alert and chasing a gap that closed hours ago is a classic way to lose money." },
      { type: "h2", text: "From Alert to Action: A Verification Routine" },
      {
        type: "list",
        items: [
        "Read the alert and identify the route, the net spread, and the transfer time before doing anything else.",
        "Check both venues are operational, with deposits and withdrawals working.",
        "Check the order book on both sides for depth, not just the last traded price.",
        "Recompute the net spread with live fees, then decide. Never trade from the alert number alone.",
        "After the trade, log whether the alert was accurate: predicted spread versus realized spread."
        ],
      },
      { type: "p", text: "The log in that last step is what turns alerts from a gadget into a system. Over a month, it shows which routes produce alerts you actually trade, which thresholds are too tight or too loose, and whether your scanner's estimates are honest. If a route alerts ten times and you trade none of them, the threshold or the filter is wrong. If a route never alerts but you keep spotting gaps manually, the threshold is too high. Adjust on evidence, not on frustration. And remember that alerts are a discovery tool, not a decision tool. The decision still belongs to you, made with live data and a clear head, not to a notification sound. For the broader workflow, see [Executing Across 5+ Venues at Once](/blog/multi-venue-execution)." },
      {
        type: "callout",
        title: "Never chase a stale alert",
        text: "If an alert is more than a few minutes old, recheck the spread before acting. Gaps close fast, and trading a number from an old notification is one of the most common ways beginners lose money.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain alert thresholds, filters, and cooldowns in plain language and help you draft an alert plan for the routes you trade." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What spread threshold should I set for alerts?",
            a: "Set it per route: your full round-trip cost plus a minimum profit margin. A single global threshold over-alerts on cheap routes and under-alerts on expensive ones.",
          },
          {
            q: "Why do I get so many useless alerts?",
            a: "Usually because alerts fire on gross spreads without cost, liquidity, or transfer-time filters. Add net-spread thresholds, volume filters, and cooldowns to cut the noise.",
          },
          {
            q: "Should I use alerts for pairs I have never traded?",
            a: "Only after you verify the route: account verification, capital layout, withdrawal testing, and cost math. An alert on an untested route is a research prompt, not a trade signal.",
          },
          {
            q: "How often should I review my alert settings?",
            a: "Monthly, or after any fee change, venue change, or shift in how often you trade. Use your alert log to adjust thresholds on evidence.",
          }
        ],
      },
  ],
};
