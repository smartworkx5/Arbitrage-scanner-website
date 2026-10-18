import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "exchange-status-pages",
  title: "Using Exchange Status Pages",
  description: "Before you blame your bot, check the exchange. Learn to read status pages, subscribe to incident updates, and tell a real outage from a local problem fast.",
  keywords: [
      "exchange status pages",
      "exchange outage",
      "crypto exchange status",
      "exchange downtime",
      "exchange incident",
      "exchange API status",
      "trading outage check"
  ],
  datePublished: "2026-10-18",
  dateModified: "2026-10-18",
  readingMinutes: 7,
  category: "Basics",
  excerpt: "Half of all trading outages are not your fault. Exchange status pages tell you what is broken, what still works, and when to expect a fix.",
  image: "/images/blog/exchange-status-pages.svg",
  blocks: [
      { type: "p", text: "Exchange status pages are the fastest way to answer the most common trading question: is it me, or is it them? When orders stop filling, deposits vanish into limbo, or an API starts returning errors, the instinct is to restart everything and hope. The disciplined move is to check the exchange status page first, because it tells you whether the problem is a known outage, which services are affected, and whether the exchange is already working on it. On Oct 18, 2026, Bitcoin traded near $81,300 to $81,850 in a market where liquidations had cooled to about $315 million on Oct 17, and quiet sessions like this are exactly when traders mistake a routine exchange maintenance window for a broken strategy. Five minutes on a status page saves an hour of misdiagnosis." },
      { type: "h2", text: "What a Status Page Actually Shows" },
      { type: "p", text: "A good exchange status page separates the exchange into components: spot trading, futures trading, deposits, withdrawals, the API, the website, and the mobile app. Each component gets its own status, usually operational, degraded performance, partial outage, or major outage. That breakdown matters because an exchange is rarely all up or all down. Spot trading can work while withdrawals are paused, and the website can fail while the API keeps running. Reading only the headline banner misses this. Always check the component you actually use. A trader whose bot uses the API needs the API status, not the website status." },
      { type: "p", text: "Status pages also show incident history. A pattern of repeated degraded API performance during volatile sessions tells you something important about that venue: it struggles under load. A single resolved incident from months ago tells you much less. When choosing where to trade, compare incident histories across exchanges the same way you compare fees. An exchange with a clean recent record and fast incident resolution earns trust. One with frequent unexplained outages deserves smaller balances and tighter limits." },
      { type: "h2", text: "Reading an Incident Update Like a Pro" },
      { type: "p", text: "Incident updates follow a rhythm: investigating, identified, monitoring, resolved. Investigating means the exchange knows something is wrong but not yet why. Identified means they found the cause and are fixing it. Monitoring means the fix is deployed and they are watching for a repeat. Resolved means the incident is closed. The gaps between these updates are information too. Long silence during investigating usually means the problem is hard, not that it is fixed. Repeated monitoring-to-investigating cycles mean the fix did not hold. Treat vague updates that only say the team is working on it as a signal to protect your positions rather than wait hopefully." },
      {
        type: "table",
        headers: ["Status label", "What it means", "What you should do"],
        rows: [
          ["Operational", "Component is working normally", "Trade as usual"],
          ["Degraded performance", "Works, but slow or unreliable", "Reduce size, expect delays"],
          ["Partial outage", "Some functions are down", "Check which functions, pause affected strategies"],
          ["Major outage", "Component is effectively down", "Stop affected trading, protect open positions"],
          ["Maintenance", "Planned downtime", "Plan around it, never trade through it"]
        ],
      },
      { type: "h2", text: "Subscribe Before You Need It" },
      { type: "p", text: "Status pages offer subscriptions by email, SMS, RSS, or webhook, and setting them up before an incident is one of the highest-value five-minute tasks in trading. A webhook that posts incidents into your trading chat or monitoring channel gives your whole setup the news at the same time you get it. Subscribe to every exchange you use, and to the status pages of services your trading depends on, such as cloud providers and price-feed services. During an incident, these subscriptions also tell you when service is restored, so you can resume trading promptly instead of discovering the recovery an hour late." },
      { type: "h2", text: "Outage or Local Problem: How to Tell" },
      { type: "p", text: "When something breaks, run a quick isolation check before changing anything. First, open the status page. Second, try a second device or a phone hotspot to rule out your own network. Third, check whether other traders are reporting the same problem in public channels, while remembering that social media also amplifies rumors. Fourth, try a harmless read-only API call, such as fetching the order book, before attempting a real order. If the status page shows an outage, stop troubleshooting your own setup: the problem is theirs, and your job is position safety, not debugging. If the status page is green and your own checks fail, the problem is local, and restarting or switching networks is the right move." },
      {
        type: "list",
        items: [
        "Check the status page before restarting anything.",
        "Isolate: second device or hotspot rules out your own network.",
        "Read the component you use, not just the headline banner.",
        "During an outage, protect positions first; debug later.",
        "Subscribe to status updates for every exchange you use."
        ],
      },
      { type: "h2", text: "What Status Pages Mean for Arbitrage" },
      { type: "p", text: "For arbitrage traders, status pages are especially important, because an outage on one venue is what creates the widest and most dangerous spreads. When withdrawals pause on one exchange, its prices detach from the rest of the market, and the gap looks like free money. It is not. It is compensation for the risk that funds stay trapped. Checking the status page before chasing such a spread is what separates a calculated risk from a blind one. The [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) guide explains normal spread mechanics, [funding rate arbitrage](/guides/funding-rate-arbitrage) covers the futures side, and the [glossary](/glossary) defines outage, degraded performance, and maintenance. More practical trading guides are on the [blog](/blog)." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you make sense of exchange status updates. Ask it to explain what a partial outage means for your open orders, summarize an incident history, or draft an outage checklist for your trading setup." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Where do I find an exchange status page?",
            a: "Most major exchanges link it from their support or help pages, often at a subdomain like status.exchange.com. Bookmark it before you need it, and subscribe to its updates.",
          },
          {
            q: "What does degraded performance mean?",
            a: "The service works but is slow or unreliable. Expect delays, reduce position sizes, and avoid strategies that depend on fast execution.",
          },
          {
            q: "Should I trade through a partial outage?",
            a: "Only the unaffected parts, and carefully. Pause any strategy that depends on the affected component, and protect open positions first.",
          },
          {
            q: "Why do spreads widen during an exchange outage?",
            a: "Because capital cannot move to close the gap. A paused withdrawal traps funds, so prices on that venue detach. The spread compensates for trapped-capital risk, not free profit.",
          }
        ],
      },
  ],
};
