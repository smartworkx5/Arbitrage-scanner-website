import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "arbitrage-risk-management",
  title: "Crypto Arbitrage Risk Management: Position Sizing and Kill Switches",
  description: "Crypto arbitrage risk management in 2026: position sizing rules, kill switches, and drawdown limits that keep a bad week from becoming a career-ending loss.",
  keywords: [
      "crypto arbitrage risk management",
      "arbitrage position sizing",
      "crypto trading kill switch",
      "arbitrage drawdown rules",
      "risk management crypto 2026"
  ],
  datePublished: "2026-10-11",
  dateModified: "2026-10-11",
  readingMinutes: 10,
  category: "Risk",
  excerpt: "Arbitrage trades look safe on paper — then one oversized position meets a volatile market. Here is a practical risk-management framework: how to size positions, where to put kill switches, and when to stop trading.",
  image: "/images/blog/arbitrage-risk-management.svg",
  blocks: [
      { type: "p", text: "**Crypto arbitrage risk management** is the difference between a strategy that compounds quietly for years and one that blows up in a single afternoon. Arbitrage trades are small, frequent, and low-margin — which means risk rarely arrives as one dramatic loss. It arrives as slow position bloat, a skipped stop rule, or a venue outage at the worst possible moment. The market of October 2026 illustrates the backdrop: bitcoin trades near $82,950–$83,015 as of October 11, 2026 — about 34% below its October 2025 all-time high — and ether sits near $2,505–$2,509, roughly 49% off its own high. In choppy, range-bound markets like this, spreads appear and vanish quickly, tempting traders to size up to make the economics work. That is exactly when a written risk policy matters most." },
      { type: "p", text: "Most arbitrage education focuses on finding the edge — scanning spreads, computing funding, timing transfers. Risk management is the boring half that determines whether you survive long enough to harvest edges repeatedly. The framework below has three pillars: position sizing (how much you put at risk per trade), kill switches (predefined conditions that halt trading automatically), and drawdown rules (how losses force you to reduce size or stop). None of this is glamorous, but professionals will tell you risk rules are the actual strategy — the trades are just the vehicle." },
      { type: "h2", text: "Position Sizing: The Rule That Decides Everything" },
      { type: "p", text: "Position sizing in arbitrage answers one question: what fraction of total capital goes into a single opportunity? A sensible starting convention is **1–2% of dedicated trading capital at risk per trade**, where at risk means the estimated worst-case loss on that trade, not the notional size. In classic cross-exchange spot arbitrage, the notional can be large while the risk is small — the exposure is brief and directional only during transfer. But the risk is never zero: transfers fail, prices move mid-transit, and [withdrawal networks congest](/blog/crypto-transfer-times) at exactly the wrong times. Sizing against notional is how traders fool themselves; sizing against the loss you would take if everything went wrong is how professionals stay solvent." },
      { type: "p", text: "A practical approach is tiered sizing by trade confidence and liquidity. High-confidence, deep-liquidity trades — a well-established spread on a major pair between two venues you know well — earn standard size. Thin-order-book or new-token trades earn a fraction of standard size, or are skipped entirely. This is the opposite of what beginners do: they size UP on exotic trades because the headline spread looks bigger, precisely when liquidity risk is highest. Our [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) walks through spread mechanics; the sizing rule is what keeps those spreads from biting you." },
      {
        type: "list",
        items: [
        "Set standard trade risk at 1–2% of trading capital, defined as worst-case loss, not notional.",
        "Size down to 0.25–0.5% on thin books, new listings, and unfamiliar venues.",
        "Cap total deployed capital across all open trades (for example, 50–70% of the account) so you always keep dry powder.",
        "Recompute position sizes monthly as your capital base changes — never let a winning streak quietly inflate your risk."
        ],
      },
      { type: "h2", text: "Kill Switches: Automating Your Exit Before You Need One" },
      { type: "p", text: "A **kill switch** is a rule — ideally automated, at minimum written down and non-negotiable — that halts your trading when conditions deteriorate. The defining feature is that you decide it while calm, so it executes while you are not. Common kill-switch triggers for arbitrageurs include: a single-trade loss exceeding X% (many use 3–5%), a daily loss limit (commonly 5–8% of capital), a venue becoming unresponsive or halting withdrawals, funding rates flipping against your position past a threshold, and personal state — fatigue, tilt, or distraction are legitimate kill-switch triggers. If that sounds extreme, remember that most catastrophic trading days are not caused by markets; they are caused by traders overriding their own rules." },
      { type: "p", text: "Automation is better than willpower. If you run scripts or bots, code the halt directly: a maximum daily loss parameter that flattens positions and pauses the bot until a manual reset the next day. For manual traders, the kill switch can be environmental — moving capital to cold storage, logging out, closing the terminal. The mechanism matters less than the commitment: a kill switch you can easily override is not a kill switch, it is a suggestion. Review your triggers quarterly, but never in the middle of a losing day." },
      { type: "h2", text: "Drawdown Rules: When a Bad Week Becomes a Bad Month" },
      {
        type: "callout",
        title: "The drawdown spiral is the real killer",
        text: "After losses, traders either freeze (missing recovery) or double down (accelerating losses). A mechanical drawdown schedule removes the decision: at defined loss thresholds, you cut size automatically. Decide it now, in writing.",
        tone: "warning",
      },
      { type: "p", text: "A drawdown rule converts losses into a mechanical response. A widely used schedule: at a 10% drawdown from peak capital, reduce position sizes by 25%; at 15%, cut by 50% and pause new strategies; at 20%, stop trading entirely and conduct a full review before restarting at half size. These numbers are conventions, not magic — the point is having the schedule BEFORE the drawdown, because mid-drawdown your judgment is compromised. For arbitrage specifically, an extended drawdown often signals [edge compression](/blog/arbitrage-drawdowns): the market regime has changed and your historical spreads no longer exist. Cutting size during edge compression is not capitulation; it is calibration." },
      { type: "p", text: "Drawdown rules also protect against a subtle arbitrage trap: the strategy's low per-trade returns mean recovering from a drawdown requires many winning trades. A 20% drawdown needs a 25% gain to recover — at typical arbitrage returns, that can take months. Every percentage point of preventable drawdown is expensive. That asymmetry is why conservative sizing is not timidity; it is arithmetic." },
      {
        type: "table",
        headers: ["Drawdown from peak", "Mechanical response", "Why"],
        rows: [
          ["5%", "No change; log and review weekly", "Normal noise in any active strategy"],
          ["10%", "Cut position sizes 25%", "Early signal that conditions may be shifting"],
          ["15%", "Cut sizes 50%; pause new strategies", "Protect capital while diagnosing the cause"],
          ["20%", "Stop trading; full review; restart at half size", "Preservation first — regime may have changed"]
        ],
      },
      { type: "h2", text: "Putting It Together: A Sample Risk Policy" },
      { type: "p", text: "A written risk policy fits on one page. It states your standard trade risk (say 1.5% of capital), your maximum concurrent exposure (say 60%), your kill-switch triggers (daily loss 6%, venue outage, manual-tilt rule), and your drawdown schedule. It also states your per-venue caps — no more than a set fraction of capital on any single exchange, which our [hidden risks guide](/blog/cross-exchange-hidden-risks) covers in detail. Print it, sign it, and review it on the first of every month. The traders who survive decades in markets are not the ones with the best signals; they are the ones whose risk policy survived their worst days." },
      { type: "p", text: "If you are building toward live arbitrage trading, treat risk infrastructure as part of the setup, not an afterthought: alerts on position and venue health, a daily P&L review ritual, and a pre-written plan for what you do when an exchange halts withdrawals. The [best arbitrage scanners](/best-crypto-arbitrage-scanners) help you find opportunities; your risk policy is what lets you take them without betting the account. Start small, measure everything, and let the rules — not your mood — decide how much goes in." },
      {
        type: "faq",
        items: [
          {
            q: "What is a good position size for crypto arbitrage trades?",
            a: "A common convention is risking 1–2% of trading capital per trade, measured as worst-case loss rather than notional size. Arbitrage notional can be large while actual risk is small, so size against the loss you would take if everything went wrong. Reduce to 0.25–0.5% on thin books or unfamiliar venues.",
          },
          {
            q: "What is a kill switch in trading?",
            a: "A kill switch is a predefined, non-negotiable rule that halts your trading when conditions deteriorate — such as hitting a daily loss limit, a venue outage, or a funding flip beyond your threshold. It is decided while you are calm so it executes while you are not, and it should be hard to override.",
          },
          {
            q: "How should I respond to a drawdown in arbitrage trading?",
            a: "Follow a mechanical schedule decided in advance: for example, cut sizes 25% at a 10% drawdown, 50% at 15%, and stop entirely at 20% pending a full review. Arbitrage drawdowns often signal edge compression — a regime change — rather than bad luck, so cutting size is calibration, not capitulation.",
          },
          {
            q: "How much capital should stay off exchanges?",
            a: "Many arbitrageurs cap total deployed capital at 50–70% of their trading account, keeping the rest as dry powder, and limit exposure per venue so no single exchange failure is catastrophic. Cold-stored reserves cannot be lost to a venue outage or a fat-fingered oversized trade.",
          }
        ],
      },
  ],
};
