import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "incident-response-crypto",
  title: "When Things Go Wrong: Incident Guide",
  description: "Crypto incident response guide: hack response checklist, freezing accounts, revoking approvals and securing funds in the first hour after a suspected breach.",
  keywords: [
      "crypto incident response",
      "crypto hack response",
      "wallet hacked what to do",
      "revoke token approvals",
      "exchange account breach",
      "crypto security checklist"
  ],
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  readingMinutes: 9,
  category: "Risk",
  excerpt: "The first hour after a suspected hack decides how much you save. Freeze accounts, revoke approvals, and move surviving funds before investigating.",
  image: "/images/blog/incident-response-crypto.svg",
  blocks: [
      { type: "p", text: "Crypto incident response is a race, and the winner is usually whoever acts in the first hour. When a wallet is drained or an exchange account is breached, every minute spent panicking or debating is a minute the attacker uses to move funds onward. As of Oct 16, 2026, with Bitcoin near $82,200 and Ethereum near $2,440, even a partial loss hurts, so the right response is a rehearsed checklist, not improvisation. This guide gives you that checklist: how to recognize a real breach, what to freeze first, how to rescue surviving funds, and how to preserve evidence for exchanges and law enforcement. Read it now, while nothing is wrong, and keep a printed copy near your workstation. The goal in an incident is not to catch the attacker. It is to stop the bleeding, secure what remains, and then investigate." },
      { type: "h2", text: "Recognize a Real Breach Quickly" },
      { type: "p", text: "Not every scare is a breach, but treat the ambiguous ones as breaches until proven otherwise. Warning signs include unexpected outgoing transactions, login alerts from unfamiliar devices or locations, password or 2FA changes you did not make, wallet approvals you do not remember granting, and messages claiming your account is locked that push you toward a lookalike login page. If you see an unfamiliar transaction, check the destination address and the token approvals on a block explorer before assuming the worst, but do not wait for full confirmation before securing other accounts. Attackers often strike several wallets or accounts in sequence, so a breach in one place should trigger a lockdown everywhere. One common trap is the fake support agent who appears right after you post about a problem: real exchanges and wallet teams never ask for your seed phrase or remote access, and anyone who does is part of the attack." },
      { type: "h2", text: "The First-Hour Checklist" },
      { type: "p", text: "Start by freezing what the attacker can still reach. On exchanges, change the password, revoke API keys, disable withdrawals if the platform offers a freeze, and contact support to lock the account. On wallets, move any surviving funds to a fresh, clean wallet generated on an uninfected device, because a compromised device can steal the next transaction too. Then revoke token approvals and connected dApps, since an unlimited approval can let a malicious contract drain tokens later even after you move the obvious balances. Change your email password and review its forwarding rules and active sessions, because email is the master key to most account resets. Only after containment should you start investigating what happened, and you should do that investigation from a clean device. For traders active across venues, this is also the moment to review exposure on each platform, and the [Binance versus Bybit comparison](/arbitrage/binance-vs-bybit) is a useful prompt to check which accounts still hold funds." },
      {
        type: "list",
        items: [
        "Freeze exchanges: change password, revoke API keys, disable withdrawals, contact support.",
        "Rescue surviving funds to a fresh wallet created on a clean device.",
        "Revoke token approvals and disconnect suspicious dApps and sites.",
        "Secure email first: new password, review forwarding rules and active sessions.",
        "Preserve evidence: screenshots, transaction hashes, timestamps, and messages."
        ],
      },
      { type: "h2", text: "Rescuing Funds Without Making Things Worse" },
      { type: "p", text: "Rescue moves made in a panic can hand the attacker more money, so sequence matters. Do not reuse the compromised wallet or device for the rescue: generate a fresh wallet on a clean phone or computer, verify its address carefully, and move funds there in a small test transaction first. If gas fees spike or the network is congested, prioritize the highest-value tokens and the approvals that expose the most value. Watch out for fake rescue tools and fake revoke sites, which spike in search results after big hacks; use bookmarks and well-known explorers rather than links from social media. Remember that on-chain transactions are irreversible, so double-check every destination address character by character. If funds already left to an exchange, report the deposit addresses to that exchange quickly, because a timely report is the only realistic chance of a freeze. Volatile weeks raise the stakes: after Bitcoin dipped below $80,000 on Oct 15, 2026 and recovered, stressed traders are prime targets for fake support scams, so verify every helper before trusting them." },
      {
        type: "callout",
        title: "Never Share Your Seed Phrase",
        text: "No legitimate support agent, exchange, wallet team, or security tool will ever ask for your seed phrase or private key. Anyone who asks is an attacker, even if they sound helpful and professional.",
        tone: "warning",
      },
      { type: "h2", text: "After Containment: Evidence, Reports, and Prevention" },
      { type: "p", text: "Once funds are safe, preserve evidence before cleaning up. Save transaction hashes, wallet addresses, timestamps, screenshots of phishing pages, and the full text of suspicious messages, because exchanges and investigators need specifics, not summaries. File reports with the exchanges involved, your local law enforcement cybercrime unit, and any relevant reporting portal, and keep copies of every report. Then rebuild properly: wipe or replace the compromised device, rotate every password and API key, set up hardware-key two-factor authentication, and move long-term holdings into multisig or cold storage with tested backups. A post-incident review matters as much as the response itself: write down how the attacker got in, which habit failed, and what you will change. Many traders discover the entry point was mundane, such as a reused password or a malicious extension, which means prevention is mostly hygiene. Pairing better custody with careful venue selection helps too, and [CEX versus DEX arbitrage](/guides/cex-vs-dex-arbitrage) shows how spreading activity across well-chosen venues reduces single-point exposure." },
      {
        type: "table",
        headers: ["Phase", "First Actions", "Goal"],
        rows: [
          ["0-15 minutes", "Freeze exchanges, revoke API keys, secure email", "Stop further losses"],
          ["15-60 minutes", "Move surviving funds, revoke approvals", "Rescue what remains"],
          ["1-24 hours", "Preserve evidence, file reports", "Enable freezes and investigation"],
          ["Aftermath", "Wipe device, rotate keys, rebuild custody", "Prevent a repeat"]
        ],
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you stay calm and organized during a crypto incident. Ask it to turn this guide into a printable first-hour checklist, or to explain any step, such as revoking token approvals, in simple words. It can also help you draft a clear incident report with the transaction details exchanges need." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "My wallet was drained. What should I do first?",
            a: "Freeze exchange accounts, revoke API keys, and secure your email, then move any surviving funds to a fresh wallet on a clean device. Preserve transaction hashes and screenshots before you clean up, and report the theft to the exchanges and law enforcement.",
          },
          {
            q: "Can stolen crypto be recovered?",
            a: "On-chain transfers are generally irreversible, but funds sent to an exchange can sometimes be frozen if you report the deposit addresses quickly. Treat recovery as unlikely, and focus first on securing what remains.",
          },
          {
            q: "Should I wipe my device after a breach?",
            a: "Yes. Assume a compromised device stays compromised. Move funds using a clean device, then wipe or replace the affected one, rotate every password and API key, and rebuild your setup.",
          },
          {
            q: "How do I revoke malicious token approvals?",
            a: "Use a reputable approval-revocation tool or the block explorer for the chain involved, connect with a clean wallet, and revoke unlimited approvals for tokens you do not actively use. Do this only through bookmarked, trusted tools.",
          }
        ],
      },
  ],
};
