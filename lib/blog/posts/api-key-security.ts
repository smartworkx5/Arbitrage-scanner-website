import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "api-key-security",
  title: "API Key Security Best Practices",
  description: "API keys connect bots and tools to your exchange account. Learn least-privilege permissions, IP allowlists, rotation, and the mistakes that leak keys.",
  keywords: [
      "API key security",
      "crypto API key",
      "exchange API key safety",
      "API key permissions",
      "API key rotation",
      "trading bot API security"
  ],
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  readingMinutes: 8,
  category: "Risk",
  excerpt: "An API key is a spare key to your exchange account. Treat it like one — limited, monitored, and easy to revoke.",
  image: "/images/blog/api-key-security.svg",
  blocks: [
      { type: "p", text: "API key security is the least glamorous part of crypto trading — and one of the most consequential. An API key lets software — a trading bot, a portfolio tracker, a tax tool — act on your exchange account without your password. That convenience is also the risk: a leaked or over-permissioned key can let an attacker trade, withdraw, or harvest your data, sometimes for months before anyone notices. With Bitcoin near $82,200 as of Oct 16, 2026 and volatile markets pushing more traders toward bots and automation, API hygiene matters more than ever. This guide covers least-privilege permissions, IP allowlists, rotation, and the habits that keep API access safe." },
      { type: "h2", text: "Least Privilege: Grant Only What the Tool Needs" },
      { type: "p", text: "Every API key should have the minimum permissions its job requires, and nothing more. A portfolio tracker that only reads balances needs read-only access — it has no business holding trading or withdrawal permissions. A trading bot needs trading permission, but almost never needs withdrawal permission. Withdrawal permission on an API key is the single most dangerous setting in crypto: it lets software — and anyone who steals the key — move funds off the exchange entirely. As a rule, never enable withdrawal permission on an API key unless you have a specific, unavoidable reason and you have locked the key down with IP allowlists and withdrawal address whitelists." },
      { type: "p", text: "Review permissions at creation time, not after. Exchange permission screens often default to broad access, and it is easy to click through them. Slow down and check each toggle: read, trade, withdraw, staking, transfers. For each one, ask whether the tool genuinely needs it. If you are unsure, start with read-only and add permissions only when the tool demonstrably fails without them. You can always broaden a key later; you cannot un-leak a key that was too broad from the start." },
      { type: "h2", text: "IP Allowlists and Key Storage" },
      { type: "p", text: "IP allowlisting is the second essential control. It binds an API key to specific IP addresses, so the key simply does not work from anywhere else. A stolen key becomes nearly useless if it can only be used from your server's IP. Most major exchanges support IP restrictions on API keys — use them on every key, and update the allowlist whenever your infrastructure changes. For tools running on your home connection with a changing IP, consider a fixed-IP VPS or a VPN with a static IP rather than leaving the key unrestricted." },
      { type: "p", text: "Store keys like the secrets they are. Never hard-code an API key into a script you share, never paste it into chat messages, screenshots, or public code repositories, and never store it in a shared document. Use environment variables or a secrets manager on servers, and keep local copies in an encrypted password manager. If a key ever appears in a log file, a screenshot, or a repository — even briefly — treat it as compromised and rotate it immediately. Automated scanners constantly sweep public code repositories for leaked keys, and exploitation can begin within minutes of exposure." },
      {
        type: "list",
        items: [
        "Grant read-only access unless the tool genuinely needs trading permission",
        "Never enable withdrawal permission on an API key without a specific, unavoidable reason",
        "Bind every key to specific IPs with an IP allowlist",
        "Store keys in environment variables or a secrets manager — never in code or chat",
        "Give each tool its own key so you can revoke one without breaking the others",
        "Review and rotate keys on a schedule, and immediately after any suspected exposure"
        ],
      },
      { type: "h2", text: "One Key Per Tool, and a Rotation Schedule" },
      { type: "p", text: "Create a separate API key for each tool or service. Sharing one key across a bot, a tracker, and a tax tool means a single compromise affects everything, and revoking it breaks everything. Separate keys let you revoke exactly the compromised one, and they make audit logs meaningful — you can see which tool made which request. Label each key clearly with the tool name and creation date, and keep a simple inventory of active keys so orphaned keys from abandoned tools do not linger forever." },
      { type: "p", text: "Rotate keys on a schedule — quarterly is a good default for trading keys, and immediately after any team change, infrastructure change, or suspected exposure. Rotation means creating a new key with the same permissions, switching the tool to it, verifying the tool works, then deleting the old key. Test the rotation process before you need it under pressure, and make sure you know where each key is used. An unrotated key from a tool you stopped using two years ago is a forgotten open door." },
      {
        type: "table",
        headers: ["Practice", "What it prevents", "Frequency"],
        rows: [
          ["Least-privilege permissions", "Over-broad key abuse", "At creation"],
          ["IP allowlist", "Use of stolen keys from elsewhere", "At creation, on infra change"],
          ["Separate key per tool", "One breach affecting everything", "At creation"],
          ["Scheduled rotation", "Long-lived forgotten keys", "Quarterly"],
          ["Immediate rotation on exposure", "Exploitation of leaked keys", "Immediately"],
          ["Usage monitoring", "Silent abuse of a live key", "Weekly"]
        ],
      },
      { type: "h2", text: "Monitoring, Revocation, and Incident Response" },
      { type: "p", text: "Monitor your API keys the way you monitor your account. Most exchanges offer API activity logs — check them regularly for unexpected requests, unfamiliar IP addresses, or activity at odd hours. Set up alerts for new key creation, permission changes, and withdrawal attempts if your exchange supports them. A key that suddenly starts trading pairs it never touched before, or that appears from an unfamiliar IP despite your allowlist, is a red flag that deserves immediate investigation." },
      { type: "p", text: "If a key is compromised, revoke it first and investigate second: deleting the key stops the bleeding instantly, and you can recreate it later. Then check what the key did — review trade and withdrawal history, change your account password, and review all other active keys. With the FOMC decision on Oct 28 and US September CPI at 3.7% year over year, volatile markets are prime time for bot-related incidents, since attackers know traders are distracted. For comparing venues' API features, see our [Binance vs Bybit](/arbitrage/binance-vs-bybit) and [Kraken vs Coinbase](/arbitrage/kraken-vs-coinbase) comparisons. Treat every API key as a live credential, and your automation will stay an asset instead of becoming a liability." },
      {
        type: "callout",
        title: "Risk disclosure",
        text: "API keys with withdrawal permission can move funds off an exchange. Never enable withdrawal access unless strictly necessary, and always pair it with IP allowlists and withdrawal address whitelists.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can help with this topic by explaining API permissions in plain words, drafting a least-privilege checklist for your trading bot, or summarizing a key-inventory and rotation schedule you can follow each quarter." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Should an API key ever have withdrawal permission?",
            a: "Almost never. Only enable it for a specific, unavoidable reason, and pair it with IP allowlists and withdrawal address whitelists.",
          },
          {
            q: "How often should I rotate API keys?",
            a: "Quarterly is a good default for trading keys, and immediately after any suspected exposure, team change, or infrastructure change.",
          },
          {
            q: "What should I do if an API key leaks?",
            a: "Revoke it immediately, then investigate what it was used for, change your account password, and review all other active keys.",
          },
          {
            q: "Does an IP allowlist make an API key fully safe?",
            a: "No, but it makes a stolen key nearly useless outside your infrastructure. Combine it with least-privilege permissions and regular rotation.",
          }
        ],
      },
  ],
};
