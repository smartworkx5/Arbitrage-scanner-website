import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "api-management-tools",
  title: "Managing Exchange API Keys Securely",
  description: "Exchange API keys power bots and scanners, but a leaked key can drain an account. Learn key permissions, IP allowlists, rotation, and secure API management.",
  keywords: [
      "exchange API keys secure",
      "crypto API key management",
      "API key security trading",
      "Binance API key safety",
      "crypto trading API permissions"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 8,
  category: "Basics",
  excerpt: "API keys connect your tools to your exchange account, and a leaked key can be costly. Here is how to create, restrict, store, and rotate exchange API keys safely.",
  image: "/images/blog/api-management-tools.svg",
  blocks: [
      { type: "h2", text: "What an Exchange API Key Actually Is" },
      { type: "p", text: "An API key is a credential that lets software, such as a scanner, a trading bot, or a portfolio tracker, talk to your exchange account on your behalf. It usually comes as a pair: a public key that identifies the connection, and a secret key that proves the request is authorised. Anyone holding both can act with whatever permissions the key carries. That is why API key security is account security. A leaked key with trading permission can place orders, and a leaked key with withdrawal permission can move funds, so the permissions you grant matter as much as the secrecy of the keys themselves." },
      { type: "p", text: "API keys are involved in almost every automated arbitrage workflow. A scanner uses read-only keys or public market data to compare prices. A bot uses trading keys to place orders on two venues. A portfolio tool uses read-only keys to track balances. Each use case needs different permissions, and the safest setup is to give each tool only the permissions its job requires. A price scanner never needs withdrawal permission, and a portfolio tracker never needs trading permission. Over-permissioned keys are the most common and most avoidable API mistake." },
      { type: "h2", text: "Setting Permissions, IP Allowlists, and Withdrawal Locks" },
      { type: "p", text: "When you create a key, start by choosing the minimum permission set. Most exchanges offer granular toggles: read-only market data, spot trading, futures trading, margin, and withdrawals. For a scanner, enable read-only only. For a trading bot, enable trading on the specific market types it uses, and leave withdrawals off unless the bot genuinely must move funds, which most should not. Some exchanges also let you restrict a key to specific trading pairs or to sub-accounts, which further limits the damage if the key leaks." },
      { type: "p", text: "Next, use an IP allowlist wherever the exchange supports it. An allowlist means the key only works from approved server addresses, so a stolen key is useless from an attacker's machine. This is one of the strongest single protections available, and it costs nothing but a few minutes of setup. Also enable the exchange's withdrawal address allowlist, which restricts withdrawals to pre-approved addresses even if an attacker somehow gains account access. Combined with two-factor authentication on the account itself, these two allowlists make a stolen key far less dangerous. For the broader security picture, see the [Glossary](/glossary) entries on API keys and two-factor authentication." },
      { type: "h2", text: "Storing Keys: What Never to Do" },
      {
        type: "list",
        items: [
        "Never paste a secret key into chat messages, emails, screenshots, or shared documents.",
        "Never commit keys to a public or shared code repository, even temporarily, since history keeps them forever.",
        "Never store keys in plain text in a spreadsheet, note app, or browser bookmark.",
        "Never share one key across several tools; create a separate key per tool so you can revoke one without breaking the rest.",
        "Never reuse a key after a suspected leak; revoke it and create a fresh one."
        ],
      },
      { type: "p", text: "For storage, use a reputable secrets manager or the environment-variable system of the server that runs your tool, and keep access to that server tightly limited. If you run a bot on a cloud server, restrict who can log in, keep the operating system patched, and avoid exposing dashboards without authentication. If you share a workspace with others, remember that anyone who can read your server configuration can read your keys. Treat a secret key like a password to your bank account, because in practical terms that is what it is." },
      { type: "h2", text: "Rotation, Monitoring, and Incident Response" },
      { type: "p", text: "Rotate keys on a schedule, not only after a scare. A reasonable rhythm for active traders is to rotate trading keys every few months, and immediately after any team change, server migration, or suspected exposure. Rotation is simple: create a new key with the same permissions, point the tool at it, verify the tool works, then revoke the old key. Because each tool has its own key, rotating one tool's key does not disturb the others. Keep a private inventory of which key belongs to which tool, which server uses it, and when it was created, so nothing lingers unnoticed." },
      { type: "p", text: "Monitoring matters as much as rotation. Review your exchange's API activity and order history regularly for trades you did not authorise, logins from unfamiliar addresses, or permission changes you did not make. If anything looks wrong, act fast: revoke the affected key, change the account password, review withdrawal addresses and allowlists, and contact the exchange's support team. Speed matters because a compromised key with trading permission can be used to manipulate prices or drain funds through wash trades. For related operational risks, see [Cross-Exchange Hidden Risks](/blog/cross-exchange-hidden-risks) and [Arbitrage Risk Management](/blog/arbitrage-risk-management)." },
      {
        type: "callout",
        title: "If a key leaks, revoke first, investigate second",
        text: "Do not wait to understand how a key leaked before revoking it. Revoke the key immediately, then investigate. Every minute a compromised key stays active is a minute it can be used.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain API key permissions, IP allowlists, and rotation in plain language, and help you draft a personal security checklist for the exchanges you use. For example, you can ask it to walk through the steps for creating a read-only key for a scanner versus a trading key for a bot, so you grant only the permissions each tool needs." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What permissions should a scanner API key have?",
            a: "Read-only. A scanner only needs market data and balance visibility, never trading or withdrawal permission. Granting more than that adds risk for no benefit.",
          },
          {
            q: "What is an IP allowlist, and why does it matter?",
            a: "An IP allowlist restricts an API key to approved server addresses. Even if a key is stolen, it cannot be used from an attacker's machine, which makes it one of the strongest free protections available.",
          },
          {
            q: "How often should I rotate API keys?",
            a: "Rotate trading keys every few months, and immediately after any suspected exposure, team change, or server migration. Create the new key, verify the tool works, then revoke the old one.",
          },
          {
            q: "What should I do if I think a key leaked?",
            a: "Revoke the key immediately, change the account password, review withdrawal addresses and allowlists, check recent orders for unauthorised trades, and contact the exchange's support team.",
          }
        ],
      },
  ],
};
