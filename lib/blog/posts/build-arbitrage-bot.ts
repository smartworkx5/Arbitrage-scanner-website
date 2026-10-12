import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "build-arbitrage-bot",
  title: "Building Your First Arbitrage Bot: Roadmap",
  description: "Want to build an arbitrage bot? A realistic 2026 roadmap: the skills, APIs, and architecture you need — from your first script to safe live deployment.",
  keywords: [
      "build arbitrage bot",
      "arbitrage bot development",
      "crypto bot programming",
      "DIY arbitrage bot roadmap",
      "trading bot architecture"
  ],
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
  readingMinutes: 11,
  category: "Strategies",
  excerpt: "Building an arbitrage bot is a software project with real money on the line. Here is a realistic roadmap: the skills you need, the architecture that works, and the testing phases that keep you safe.",
  image: "/images/blog/build-arbitrage-bot.svg",
  blocks: [
      { type: "p", text: "Choosing to **build an arbitrage bot** yourself is one of the best decisions a technically inclined trader can make — and one of the most underestimated projects in crypto. The payoff is real: full control over strategy, no subscriptions, code you can audit, and skills that transfer to any systematic trading. The cost is also real: this is a multi-month software project where bugs cost money instead of just embarrassment. This roadmap breaks the journey into phases — skills, architecture, APIs, and testing — so you know exactly what you are signing up for before you write a line of code." },
      { type: "p", text: "The market you will be building for looks like this as of October 12, 2026: bitcoin near $83,650–$83,854 (up 0.7–1.1% on the day, recovering from an October 9 low of $80,420), ether at $2,542.22 with a ~$310.4B market cap, and gold spot around $4,192–$4,213 per ounce. It is a trader's market — volatile enough to produce spreads, calm enough that edges are thin and competitive. Your bot will not be competing against amateurs; it will be competing against professional desks. That is fine, as long as you build for reality rather than the demo." },
      { type: "h2", text: "Phase 0: The Skills You Actually Need" },
      { type: "p", text: "The non-negotiable foundation is programming fluency in Python or TypeScript — Python dominates crypto bot development thanks to its ecosystem, while TypeScript/Node.js suits high-concurrency WebSocket work. You need comfort with asynchronous programming, because a bot juggles dozens of simultaneous data streams and must never block waiting on one slow exchange. You need basic data handling: storing tick data, computing rolling statistics, and querying your own trade history to audit performance." },
      { type: "p", text: "Beyond code, you need the domain knowledge: how order books work, what maker/taker fees do to small edges, how funding rates accrue, and why [transfer times](/blog/crypto-transfer-times) kill sequential strategies. Many failed bot projects are not coding failures — they are trading-knowledge failures wearing a coding costume. Spend a month trading arbitrage manually or with a scanner first; every hour of manual experience saves ten hours of debugging strategies that never had an edge. Our [cross-exchange guide](/guides/cross-exchange-arbitrage) is the strategy primer to master before automating anything." },
      { type: "h2", text: "Phase 1: Architecture — The Four Modules" },
      { type: "p", text: "Every production arbitrage bot, regardless of strategy, decomposes into four modules. The **feed handler** maintains WebSocket connections to each exchange, normalizes the different message formats into one internal representation, and — critically — detects stale or disconnected feeds and marks their data unusable. A bot that trades on a frozen order book is worse than a bot that does nothing. The **signal engine** consumes normalized books and emits candidate opportunities: spread calculations, fee-adjusted edge estimates, and size limits based on book depth." },
      { type: "p", text: "The **execution router** turns signals into orders: it checks risk limits, selects order types, fires both legs, and tracks fills versus expectations. The **risk module** sits above everything with veto power — position caps, daily loss limits, per-venue exposure caps, and a global kill switch. Architecturally, the risk module must be able to halt the execution router even if the signal engine is screaming opportunity. Build these as separate components from day one; a monolithic script where strategy logic and order placement are tangled together becomes unmaintainable the moment you add a second exchange." },
      {
        type: "table",
        headers: ["Module", "Job", "Most common failure"],
        rows: [
          ["Feed handler", "Live normalized market data", "Trading on stale books after silent disconnects"],
          ["Signal engine", "Fee-adjusted opportunity detection", "Phantom edges from thin books or quote flicker"],
          ["Execution router", "Order placement and fill tracking", "Partial fills leaving unhedged exposure"],
          ["Risk module", "Limits, halts, kill switch", "Limits that exist in code but never trigger in practice"]
        ],
      },
      { type: "h2", text: "Phase 2: Exchange APIs — Your Bot's Nervous System" },
      { type: "p", text: "You will live inside exchange APIs, so learn them properly. REST endpoints handle account queries and order placement; WebSocket streams deliver live market data and private updates like fills. Rate limits are the constant constraint — every exchange caps how many requests you can make, and exceeding them gets you temporarily banned at exactly the wrong moment. Design around limits from the start: cache aggressively, batch requests, prefer WebSocket streams over REST polling, and implement exponential backoff on every call." },
      { type: "p", text: "API key hygiene is a security discipline, not an afterthought. Create keys with the minimum permissions the bot needs — trading enabled, withdrawals disabled, always. Restrict keys by IP address to your server. Never commit keys to version control; use environment variables or a secrets manager. Rotate keys periodically. The history of crypto is littered with developers who leaked keys in a public repository and watched their accounts drain within hours — our [exchange security analysis](/blog/exchange-hacks-arbitrage) documents how these incidents actually unfold." },
      { type: "h2", text: "Phase 3: Testing in Layers — The Phase That Saves You" },
      { type: "p", text: "Testing a trading bot has four layers, and skipping any of them is how money gets lost. **Unit tests** verify individual functions: fee math, spread calculations, order-size logic. **Backtests** replay historical data through your strategy — essential for logic validation, but dangerous if you trust them too much, because historical fills are simulated. **Paper trading** runs the bot live against real market data with fake money, catching the timing and connectivity issues backtests cannot. **Small-size live trading** is the final exam: real fills, real fees, real slippage, with amounts small enough that mistakes are tuition, not tragedy." },
      { type: "p", text: "Budget realistically: most developers spend more time on testing and operations than on strategy code. A common timeline is 2–4 weeks for a first working prototype, then 2–3 months of testing, hardening, and small-size live trading before the bot earns trust with serious capital. Anyone telling you they built a profitable bot in a weekend either got lucky, is lying, or has not discovered their bug yet." },
      {
        type: "callout",
        title: "Your first version will lose money",
        text: "Plan for it. The learning phase — backtest surprises, paper-trading disconnects, small-live mistakes — is tuition, not failure. Size your early capital so that total loss is affordable and educational. Bots that survive their first quarter get dramatically more reliable; most never reach it because their owners bet too big too early.",
        tone: "warning",
      },
      { type: "h2", text: "Phase 4: Going Live Safely" },
      { type: "p", text: "Live deployment starts with infrastructure: a VPS or dedicated server with uptime monitoring, automated restarts, and alerting that reaches you within minutes when something breaks. Deploy with minimum position sizes and a daily loss cap set aggressively low — you can raise limits after weeks of clean operation, but you cannot un-lose money. Keep detailed logs of every signal, order, and fill; when something unexpected happens — and it will — logs are the difference between diagnosing in an hour and guessing for a week." },
      { type: "p", text: "Operate like an engineer, not a gambler. Review performance weekly: compare actual fills against expected, track where slippage exceeds your model, and investigate every anomaly before increasing size. Maintain a changelog for strategy tweaks so you can correlate performance changes with code changes. And keep a manual kill procedure — a single command or button that flattens positions and halts the bot — tested regularly. The [risk management framework](/blog/arbitrage-risk-management) we published pairs directly with this roadmap: build the bot, then build the rules that govern it." },
      {
        type: "list",
        items: [
        "Learn the strategy manually first — code multiplies understanding, not ignorance.",
        "Separate feed, signal, execution, and risk into independent modules from day one.",
        "API keys: trading-only, IP-restricted, never in version control, rotated regularly.",
        "Test in four layers: unit, backtest, paper, small-live — skip none.",
        "Deploy with minimum size and tight loss caps; scale only on evidence.",
        "Log everything; review weekly; keep a practiced manual kill switch."
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "How long does it take to build an arbitrage bot?",
            a: "A first working prototype typically takes 2–4 weeks for a competent developer; a production-ready bot with proper risk controls, testing, and operational hardening takes 3–6 months. The strategy code is the fast part — feed handling, error recovery, and testing consume most of the time. Anyone promising faster is skipping the parts that protect your money.",
          },
          {
            q: "Python or TypeScript for a trading bot?",
            a: "Python is the most common choice thanks to its data libraries and large crypto-bot community; TypeScript/Node.js excels at high-concurrency WebSocket work. Either works. More important than language: asynchronous design, clean module separation, and comprehensive logging. Pick the language you already know well — a bot is no place to learn a new one.",
          },
          {
            q: "Do I need to be a professional programmer?",
            a: "You need solid intermediate skills: async programming, API integration, basic database work, and debugging distributed issues. Beginners can get there, but expect the learning curve to add months. If you cannot yet write and debug a multi-file program confidently, build those skills first on non-financial projects.",
          },
          {
            q: "What is the hardest part of building an arbitrage bot?",
            a: "Not the strategy — the operations. Handling exchange disconnects, partial fills, rate limits, API changes, and stale data gracefully is where most projects fail. The strategy is maybe 20% of the work; making it run reliably 24/7 without supervision is the other 80%.",
          },
          {
            q: "Should I start from an open-source framework?",
            a: "Usually yes — a mature open-source framework gives you feed handling, exchange integrations, and order management that would take months to build. You then write only your strategy and risk logic. Audit the code you depend on, keep dependencies updated, and verify the project is actively maintained before building on it.",
          }
        ],
      },
  ],
};
