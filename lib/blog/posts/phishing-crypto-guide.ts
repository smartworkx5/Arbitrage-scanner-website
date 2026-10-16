import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "phishing-crypto-guide",
  title: "Crypto Phishing: Recognition Guide",
  description: "Learn to spot crypto phishing: fake exchange sites, support scams, wallet-drainer links, and the verification habits that keep your funds safe in 2026.",
  keywords: [
      "crypto phishing",
      "crypto phishing scams",
      "fake crypto exchange",
      "crypto support scam",
      "wallet drainer",
      "avoid crypto scams"
  ],
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  readingMinutes: 8,
  category: "Risk",
  excerpt: "Phishing is the most common way crypto gets stolen. Learn to recognize the traps before you click.",
  image: "/images/blog/phishing-crypto-guide.svg",
  blocks: [
      { type: "p", text: "Crypto phishing is the art of tricking you into handing over your own credentials, keys, or approvals — and it is the most common way crypto gets stolen. Attackers impersonate exchanges, wallet providers, and support teams with alarming precision, building fake login pages, fake support accounts, and fake giveaways that look nearly identical to the real thing. With Bitcoin near $82,200 as of Oct 16, 2026 and markets choppy after hot US inflation data, phishing activity rises in step with volatility, because anxious traders are more likely to click a plausible-looking alert. This guide teaches you to recognize the main phishing patterns and build verification habits that stop them." },
      { type: "h2", text: "Fake Exchange and Wallet Sites" },
      { type: "p", text: "The classic phishing attack is a lookalike login page. You receive an email or message warning of a locked account or a failed withdrawal, click the link, and land on a page that mirrors the real exchange — same logo, same layout, same colors. You enter your username, password, and two-factor code, and the attackers capture all of them in real time, then use them to log in to the real site before your code expires. The tell-tale signs are subtle: a domain name with a swapped letter, an extra hyphen, or a different top-level domain; a missing or mismatched anti-phishing code in the email; and urgency designed to rush you past verification." },
      { type: "p", text: "The defense is simple and absolute: never log in through a link. Bookmark the real exchange URLs yourself, type them manually, or use the official app. Check for your anti-phishing code in every exchange email — any message without it is fake. And use a hardware security key for login where available: unlike typed codes, a security key will not authenticate to a lookalike domain, so it defeats even a perfect fake page. Our [exchange security guide](/guides/cross-exchange-arbitrage) explains how to set these controls up." },
      { type: "h2", text: "Fake Support Scams and Impersonation" },
      { type: "p", text: "Fake support is the second major pattern. You post a question in a public channel, and within minutes a helpful support agent messages you privately, offering to fix your problem if you share your screen, enter a code, or validate your wallet. Real exchange support never contacts you first on social media, never asks for your password, seed phrase, or two-factor codes, and never asks you to move funds to a safe wallet. Anyone who does any of these things is a scammer, no matter how professional their profile looks or how many followers they have." },
      { type: "p", text: "Giveaway scams are a close cousin: a celebrity or exchange account — often a hijacked verified account — promises to double any crypto you send to an address. There is no doubling. Every giveaway that asks you to send funds first is theft. Similarly, fake airdrop sites ask you to connect your wallet and sign a transaction that quietly grants a drainer contract permission to empty your wallet. Never connect your main wallet to an unfamiliar site, and never sign a transaction you do not fully understand." },
      {
        type: "list",
        items: [
        "Never log in through an email or message link — use bookmarks or type the URL yourself",
        "Check for your anti-phishing code in every exchange email",
        "Real support never DMs first and never asks for passwords, seed phrases, or 2FA codes",
        "Never send crypto to claim a giveaway — doubling giveaways are always theft",
        "Never sign a wallet transaction you do not fully understand",
        "Verify every sender address and domain character by character"
        ],
      },
      { type: "h2", text: "Wallet Drainers and Malicious Approvals" },
      { type: "p", text: "Wallet drainers are the most technically sophisticated phishing threat. A drainer site looks like a legitimate mint, airdrop claim, or trading tool, and asks you to connect your wallet and approve a transaction. The approval may look harmless — a token allowance or a signature request — but it can grant the attacker's contract permission to transfer your tokens, or it can be a blind signature that authorizes a transaction you cannot inspect. Once approved, funds can be drained in seconds, and the transaction is irreversible. The defense is layered: use a separate low-value wallet for unfamiliar sites, review every approval in a tool that shows what it actually permits, and revoke old token approvals regularly." },
      { type: "p", text: "Browser hygiene matters here too. Malicious browser extensions, fake wallet apps, and clipboard malware all support phishing campaigns. Install extensions only from official stores and official publishers, verify wallet-app downloads against the official website, and always verify a pasted address by checking its first and last characters. If a site pressures you with a countdown timer or a claim that your funds will be frozen, stop: urgency is the phisher's favorite tool, and legitimate services do not operate that way." },
      {
        type: "table",
        headers: ["Phishing pattern", "The hook", "The defense"],
        rows: [
          ["Fake login page", "Account locked / withdrawal failed alert", "Bookmark URLs, anti-phishing code, security key"],
          ["Fake support DM", "Helpful agent offers to fix your problem", "Support never DMs first or asks for secrets"],
          ["Giveaway scam", "Send crypto, get double back", "Never send funds to claim a prize"],
          ["Wallet drainer", "Airdrop or mint requires wallet approval", "Separate low-value wallet, review approvals"],
          ["Fake app / extension", "Lookalike wallet download", "Download only from official website"]
        ],
      },
      { type: "h2", text: "Building a Verification Routine" },
      { type: "p", text: "The best protection against phishing is a boring routine, applied every time. Before entering credentials anywhere, check the domain character by character. Before clicking any link, ask whether you expected the message and whether the sender's address matches the official one. Before signing anything, read what the transaction actually authorizes. Before trusting any support interaction, open a ticket through the official site yourself. These checks take seconds, and they stop nearly every phishing attack, because phishing depends on you skipping them. If any term here is unfamiliar, check our [glossary](/glossary)." },
      { type: "p", text: "Keep your defenses current as threats evolve. With Thailand's crypto-ETF framework effective Oct 16, 2026 and new regulated products appearing, scammers will impersonate the new funds and issuers too — remember that no ETF fund had actually been approved as of the announcements, so any site selling early access to one is a scam. If you ever do fall for a phishing attempt, act immediately: change passwords, revoke sessions and approvals, move remaining funds to a fresh wallet, and report the incident. Speed limits the damage, and reporting helps protect the next target." },
      {
        type: "callout",
        title: "Risk disclosure",
        text: "Phishing theft is usually irreversible. No legitimate exchange, wallet provider, or support agent will ever ask for your seed phrase, password, or 2FA codes.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can help with this topic by explaining phishing patterns in plain words, helping you check whether a suspicious message matches known scam tactics, or drafting a personal verification checklist to use before clicking any crypto link." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is the most common crypto phishing attack?",
            a: "A fake login page impersonating an exchange or wallet. Victims enter credentials and 2FA codes, which attackers use immediately on the real site.",
          },
          {
            q: "How can I tell a phishing email from a real one?",
            a: "Check the sender domain, look for your anti-phishing code, and never trust urgency. Real exchanges include your code in every genuine email.",
          },
          {
            q: "Will a hardware security key stop phishing?",
            a: "Largely yes for login phishing — a security key will not authenticate to a lookalike domain. It does not protect against malicious wallet approvals, so still review every transaction.",
          },
          {
            q: "What should I do after falling for a phishing attack?",
            a: "Change passwords immediately, revoke sessions and token approvals, move remaining funds to a fresh wallet, and report the incident to the exchange and law enforcement.",
          }
        ],
      },
  ],
};
