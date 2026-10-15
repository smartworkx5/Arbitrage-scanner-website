import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "crypto-security-basics",
  title: "Crypto Security Basics for Traders",
  description: "New to crypto trading? Learn the essential security basics: wallets, passwords, two-factor authentication, phishing defence, and safe habits that protect funds.",
  keywords: [
      "crypto security basics",
      "crypto wallet security",
      "crypto trading safety",
      "two-factor authentication crypto",
      "protect crypto funds",
      "crypto phishing protection"
  ],
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readingMinutes: 8,
  category: "Basics",
  excerpt: "Most crypto losses are not caused by bad trades — they are caused by weak security. Here are the essential habits every trader should set up before risking real money.",
  image: "/images/blog/crypto-security-basics.svg",
  blocks: [
      { type: "h2", text: "Why Security Comes Before Strategy" },
      { type: "p", text: "Every trading strategy assumes your funds are actually yours to trade. In crypto, that assumption is not automatic. Transactions are irreversible, there is no bank to reverse a fraudulent transfer, and customer support cannot recover coins sent to a scammer's wallet. That is why security is not an advanced topic to learn later — it is the first skill a new trader needs. A trader with a mediocre strategy and strong security can survive and improve. A trader with a brilliant strategy and weak security can lose everything in a single phishing email." },
      { type: "p", text: "The stakes are real on any given day. On 15 October 2026, Bitcoin traded near $80,980 to $81,835 after a hot US inflation print knocked it below $81,000, Ether sat near $2,414 to $2,426, and roughly $973 million in positions were liquidated in 24 hours. Volatile days like this one bring out scammers, who know traders are distracted, rushing, and more likely to click a fake link promising a recovery, a giveaway, or an urgent wallet update. Good security habits are what keep a bad market day from becoming a total loss." },
      { type: "h2", text: "Wallets: Hot, Cold, and What Belongs Where" },
      { type: "p", text: "A crypto wallet does not hold coins the way a physical wallet holds cash. It holds the private keys that prove you own coins recorded on a blockchain. Whoever controls the keys controls the funds, which is why the single most important rule in crypto security is simple: never share your private keys or your seed phrase with anyone, ever. No legitimate exchange, support agent, or project will ever ask for them. Anyone who does is a scammer." },
      { type: "p", text: "In practice, traders split funds between hot wallets and cold wallets. Hot wallets are connected to the internet — exchange accounts, mobile apps, and browser extensions. They are convenient for active trading but exposed to hacks, phishing, and malware. Cold wallets, such as hardware devices kept offline, are far harder to attack and suit funds you do not need to trade this week. A sensible rule is to keep only your active trading capital on exchanges and in hot wallets, and to move the rest to cold storage. Before trusting any new wallet, test it with a small amount first, and confirm you can recover it from your backup before you send anything significant." },
      {
        type: "list",
        items: [
        "Write your seed phrase on paper and store it offline in a safe place — never in a cloud note, email, or photo.",
        "Keep only active trading capital in hot wallets and on exchanges.",
        "Test every new wallet and withdrawal address with a small transfer first.",
        "Use a separate email address for crypto accounts, with a unique strong password."
        ],
      },
      { type: "h2", text: "Passwords, Two-Factor Authentication, and Device Hygiene" },
      { type: "p", text: "Strong account security rests on three habits: unique passwords, two-factor authentication, and a clean device. Use a long, unique password for every exchange and wallet service, managed by a reputable password manager. Reusing one password across sites means a single breach anywhere can hand an attacker your exchange account. Wherever possible, prefer an authenticator app or a hardware security key for two-factor authentication over SMS codes, which can be intercepted through SIM-swap attacks. If an exchange offers withdrawal address allowlists, turn them on, so even a compromised login cannot send funds to a new address without a delay." },
      { type: "p", text: "Device hygiene matters just as much. Keep your phone and computer updated, install apps only from official stores and publisher sites, and be cautious with browser extensions, which have been used to steal keys and hijack transactions. Avoid logging into exchange accounts on public or shared computers, and avoid public Wi-Fi for trading unless you use a trusted VPN. If you ever suspect a device is compromised, move funds to a clean device and a fresh wallet before you troubleshoot, not after. For more on the trading side of staying safe, see [Arbitrage Risk Management](/blog/arbitrage-risk-management) and our guide to [Cross-Exchange Arbitrage](/guides/cross-exchange-arbitrage)." },
      { type: "h2", text: "Phishing, Fake Apps, and Social Engineering" },
      { type: "p", text: "Most crypto theft starts with deception, not code-breaking. Phishing emails and messages impersonate exchanges, wallet providers, and even colleagues, urging you to click a link and log in on a lookalike site that steals your credentials. Fake apps in app stores mimic real wallets and exchanges. Social engineering goes further: a scammer posing as support, a romantic interest, or a profitable trader builds trust over days or weeks, then steers you toward a fake platform or asks you to share your screen. The defence is scepticism by default. Type exchange URLs yourself or use bookmarks instead of clicking links, verify sender addresses carefully, and treat any unexpected message about your account as suspicious until proven otherwise." },
      {
        type: "callout",
        title: "If it asks for your seed phrase, it is a scam",
        text: "No legitimate exchange, wallet, or support agent will ever ask for your seed phrase, private keys, or two-factor codes. Close the conversation and report it.",
        tone: "warning",
      },
      { type: "p", text: "One habit that stops most phishing is the bookmark rule: bookmark the real login pages of the exchanges you use, and only ever reach them through those bookmarks. Check for the correct domain spelling every time, since scammers register lookalike domains that differ by one letter. Enable anti-phishing codes if your exchange offers them — a code embedded in genuine emails makes fakes easy to spot. And remember that urgency is a weapon: messages claiming your account will be closed in an hour, or that a giveaway ends today, are designed to make you skip the checks that would expose them. For a deeper look at the scams that target newcomers, see [Avoiding Scams Targeting New Traders](/blog/avoiding-crypto-scams)." },
      { type: "h2", text: "A Simple Security Checklist for New Traders" },
      {
        type: "list",
        items: [
        "Set up a password manager and give every crypto account a unique password.",
        "Enable app-based two-factor authentication on every exchange and email account.",
        "Turn on withdrawal allowlists and anti-phishing codes where available.",
        "Store your seed phrase offline on paper, in a safe place, and never photograph it.",
        "Keep most funds in cold storage; only trading capital stays on exchanges.",
        "Bookmark real login pages and never click login links from messages.",
        "Review account activity and connected apps regularly, and revoke anything unfamiliar."
        ],
      },
      { type: "p", text: "Security is a habit, not a one-time setup. Review your accounts every few weeks, rotate passwords after any breach notice, and re-check your backups after you change devices. The traders who survive long enough to get good are usually not the ones with the cleverest strategies — they are the ones who never gave an attacker an easy opening. Start with the checklist above, then build your trading knowledge on top of a foundation that actually holds." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain wallet types, seed phrases, and two-factor authentication in plain language, and it can help you draft a personal security checklist to work through before you fund an account." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is the single most important crypto security rule?",
            a: "Never share your seed phrase or private keys with anyone. No legitimate exchange, wallet, or support agent will ever ask for them, and anyone who does is trying to steal your funds.",
          },
          {
            q: "Should beginners keep funds on an exchange or in their own wallet?",
            a: "Keep only active trading capital on an exchange. Move funds you are not trading soon to a wallet you control, ideally a hardware wallet kept offline, and test recovery from your backup before trusting it with significant funds.",
          },
          {
            q: "Is SMS two-factor authentication good enough?",
            a: "An authenticator app or hardware security key is stronger, because SMS codes can be intercepted through SIM-swap attacks. Use app-based two-factor wherever it is offered.",
          },
          {
            q: "How do I spot a phishing email pretending to be my exchange?",
            a: "Check the sender address and domain spelling, look for your anti-phishing code if you enabled one, and never click login links in messages. Reach the exchange through your own bookmark instead.",
          }
        ],
      },
  ],
};
