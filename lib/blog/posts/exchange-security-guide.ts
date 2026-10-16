import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "exchange-security-guide",
  title: "Exchange Account Security Guide",
  description: "Lock down your crypto exchange account: strong 2FA, withdrawal whitelists, anti-phishing codes, device checks, and habits that stop most account takeovers.",
  keywords: [
      "exchange account security",
      "crypto account security",
      "crypto 2FA",
      "withdrawal whitelist",
      "anti-phishing code",
      "secure crypto exchange account"
  ],
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  readingMinutes: 8,
  category: "Risk",
  excerpt: "Most exchange account takeovers are preventable. These are the controls and habits that stop them.",
  image: "/images/blog/exchange-security-guide.svg",
  blocks: [
      { type: "p", text: "Exchange account security is the layer of protection that matters most for active traders, because your exchange account is where your funds sit within reach of the internet. The good news is that most account takeovers are preventable: they exploit weak passwords, SMS-based two-factor authentication, and users who click phishing links — all problems with known fixes. With Bitcoin near $82,200 as of Oct 16, 2026 and volatility elevated after hot US inflation data, attackers are especially active during volatile weeks, when fake support accounts and phishing sites multiply. This guide covers the controls every exchange account needs, in priority order." },
      { type: "h2", text: "Passwords and Two-Factor Authentication" },
      { type: "p", text: "Start with a unique, long password for your exchange account — one you use nowhere else — stored in a reputable password manager. Password reuse is the single most common way accounts fall: a breach at an unrelated site hands attackers a working password, and automated tools test it against every major exchange within minutes. Your password should be long and random, not a variation of a password you use elsewhere. Enable a breach-alert feature in your password manager so you learn quickly if any credential leaks." },
      { type: "p", text: "Then upgrade your two-factor authentication. Authenticator apps are far stronger than SMS codes, because SMS can be intercepted through SIM-swap attacks — see our [SIM-swap protection guide](/guides/cross-exchange-arbitrage) for the full picture. Hardware security keys are stronger still, and the best exchanges support them for login and withdrawals. Set up at least two 2FA methods where the exchange allows it, and store backup codes offline in a safe place. If your exchange offers a login allowlist or device management, use it: unknown devices should face extra verification before they can do anything." },
      { type: "h2", text: "Withdrawal Whitelists and Anti-Phishing Codes" },
      { type: "p", text: "Withdrawal whitelists — also called address allowlists — are the single most powerful account control most traders ignore. When a whitelist is active, withdrawals can only go to addresses you have pre-approved, and adding a new address triggers a waiting period. That means even if an attacker gets full access to your account, they cannot send your funds to their own wallet. The waiting period is the key: it gives you time to notice the unauthorized change and lock the account. Enable whitelists on every exchange you use, and treat any unexpected whitelist-change email as an emergency." },
      { type: "p", text: "Anti-phishing codes add a second layer of verification to your inbox. Once set, every legitimate email from the exchange includes your chosen code or phrase in a prominent spot. Any email claiming to be from the exchange that lacks the code is fake — no matter how convincing the logo or layout. Set a code that is memorable but not guessable, and check for it before clicking any link in any exchange email. Better still, avoid clicking email links entirely: navigate to the exchange manually or use a bookmark you created yourself." },
      {
        type: "list",
        items: [
        "Unique random password per exchange, stored in a password manager",
        "Authenticator app or hardware security key for 2FA — avoid SMS where possible",
        "Withdrawal whitelist enabled, with new-address waiting periods",
        "Anti-phishing code set and checked on every exchange email",
        "Device and session management reviewed monthly; unknown sessions revoked",
        "Login alerts enabled for every sign-in, withdrawal, and settings change"
        ],
      },
      { type: "h2", text: "Devices, Networks, and Everyday Habits" },
      { type: "p", text: "Your account is only as secure as the device you log in from. Keep your operating system and browser updated, run reputable malware protection, and never install browser extensions from unknown sources — malicious extensions have stolen exchange sessions and clipboard contents. Avoid logging into exchanges on public Wi-Fi; if you must, use a trusted VPN. Be especially careful with clipboard hygiene: malware that swaps a copied wallet address for an attacker's address is a classic theft technique. Always visually verify the first and last characters of any pasted address before confirming." },
      { type: "p", text: "Treat every unsolicited message as hostile until proven otherwise. Real exchange support never contacts you first on social media, never asks for your password or 2FA codes, and never urges you to move funds to a safe wallet. During volatile weeks — and with the FOMC decision on Oct 28 and US producer prices up 6.3% year over year, more volatility is likely — scammers impersonate support staff to exploit traders seeking help. Bookmark official support pages, and if you need help, open a ticket through the official site only." },
      {
        type: "table",
        headers: ["Control", "What it stops", "Priority"],
        rows: [
          ["Unique password + manager", "Credential-stuffing attacks", "Essential"],
          ["Authenticator / security key 2FA", "Password theft, SIM-swap", "Essential"],
          ["Withdrawal whitelist", "Theft even after full account compromise", "Essential"],
          ["Anti-phishing code", "Fake exchange emails", "High"],
          ["Device management", "Stale or hijacked sessions", "High"],
          ["Login and withdrawal alerts", "Slow detection of intrusions", "High"]
        ],
      },
      { type: "h2", text: "If Something Goes Wrong" },
      { type: "p", text: "If you suspect your account is compromised, act immediately: change your password from a clean device, revoke all active sessions and API keys, and contact the exchange's official support to freeze withdrawals. Then check your email account too — if an attacker controls your email, they can reset passwords across services. Change your email password, review its forwarding rules and recovery options, and enable 2FA there as well. Document everything with timestamps and screenshots, and report the incident to the exchange and, if funds were lost, to local law enforcement. Speed matters: the first hour after a compromise is when most damage is done or prevented. For definitions of the security terms used here, see our [glossary](/glossary)." },
      {
        type: "callout",
        title: "Risk disclosure",
        text: "No security setup is perfect. These controls dramatically reduce risk, but keep only active trading balances on exchanges and hold long-term funds in self-custody.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can help with this topic by explaining 2FA options in plain words, comparing authenticator apps with hardware security keys, or drafting a personal security checklist for every exchange account you hold." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Is SMS two-factor authentication enough for an exchange account?",
            a: "No. SMS codes can be intercepted through SIM-swap attacks. Use an authenticator app or a hardware security key instead.",
          },
          {
            q: "What does a withdrawal whitelist actually do?",
            a: "It restricts withdrawals to pre-approved addresses. Adding a new address triggers a waiting period, so an attacker who compromises your account cannot immediately send funds to their own wallet.",
          },
          {
            q: "How do anti-phishing codes work?",
            a: "You set a code or phrase that the exchange includes in all genuine emails. Any email claiming to be from the exchange without your code is fake.",
          },
          {
            q: "What should I do first if my account is compromised?",
            a: "Change your password from a clean device, revoke all sessions and API keys, freeze withdrawals through official support, and secure your email account too.",
          }
        ],
      },
  ],
};
