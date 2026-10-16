import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "sim-swap-protection",
  title: "Protecting Against SIM-Swap Attacks",
  description: "SIM-swap attacks steal your phone number to reset passwords and bypass SMS codes. Learn carrier PINs, authenticator apps, and defenses that actually work.",
  keywords: [
      "SIM swap protection",
      "SIM swap attack",
      "prevent SIM swap",
      "SIM swap crypto",
      "carrier PIN security",
      "authenticator app vs SMS"
  ],
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  readingMinutes: 8,
  category: "Risk",
  excerpt: "A SIM-swap attack hands criminals your phone number — and with it, your accounts. Here is how to make yourself a hard target.",
  image: "/images/blog/sim-swap-protection.svg",
  blocks: [
      { type: "p", text: "A SIM-swap attack is one of the most damaging forms of account takeover, and it starts far from your computer. An attacker convinces your mobile carrier — through social engineering, a bribed store employee, or stolen personal data — to transfer your phone number to a SIM card they control. From that moment, they receive your calls and text messages, including SMS verification codes. With those codes, they can reset passwords on your email and exchange accounts, bypass SMS two-factor authentication, and drain funds. With Bitcoin near $82,200 as of Oct 16, 2026 and markets volatile after hot US inflation data, attackers are actively hunting high-value targets, and SIM swap protection is a must-have layer of defense." },
      { type: "h2", text: "How SIM-Swap Attacks Actually Work" },
      { type: "p", text: "Most SIM-swap attacks follow a predictable script. First, the attacker gathers personal details about you — full name, date of birth, address, account numbers — from data breaches, social media, or phishing. Then they contact your carrier impersonating you, claiming a lost or damaged phone, and request a number transfer to a new SIM. Carriers that rely on weak identity checks, such as a few knowledge-based questions, can be talked into the transfer. In some cases, attackers bribe carrier employees directly. Once the swap completes, your phone loses service — often the first warning sign — and the attacker's phone starts receiving your messages." },
      { type: "p", text: "The damage then moves fast. With control of your number, the attacker requests password resets on your email account, which typically sends a reset link or code by SMS. Once inside your email, they reset passwords on your exchange accounts, disable or change security settings, and withdraw funds. The entire chain can take under an hour. That is why SIM-swap defense is not just about your phone — it is about removing your phone number as a single point of failure across all your important accounts." },
      { type: "h2", text: "Carrier-Level Defenses: PINs and Port Locks" },
      { type: "p", text: "Your first line of defense is with your carrier. Set a port-out PIN or transfer PIN — a separate numeric code required before your number can be moved to another carrier or SIM. Also set an account PIN or passcode required for any account change, and ask the carrier to flag your account for extra verification, sometimes called a high-security or VIP flag. Some carriers offer a dedicated port-freeze feature that blocks number transfers entirely until you lift the freeze in person or with strong verification. Call your carrier today and confirm all of these are active — do not assume defaults protect you." },
      { type: "p", text: "Also reduce the personal information attackers can use against you. Remove your date of birth, home address, and other identity details from public social-media profiles, and be skeptical of quizzes or forms that collect them. Use a separate email address for account recovery that you never publish anywhere. The less an attacker can learn about you from public sources, the harder it is for them to pass a carrier's identity checks." },
      {
        type: "list",
        items: [
        "Set a port-out PIN and an account-change PIN with your carrier",
        "Ask for a port freeze or high-security flag on your account",
        "Remove personal identity details from public social-media profiles",
        "Use a separate, unpublished email address for account recovery",
        "Enable account-change notifications from your carrier",
        "If your phone suddenly loses service, treat it as a possible attack and act fast"
        ],
      },
      { type: "h2", text: "Remove SMS From Your Security Chain" },
      { type: "p", text: "The most effective SIM-swap defense is to stop relying on SMS for security at all. Replace SMS two-factor authentication with an authenticator app or a hardware security key on every important account — email first, then exchanges, then everything else. Authenticator codes are generated on your device and never travel over the mobile network, so a SIM-swap attacker cannot intercept them. Hardware security keys are stronger still, because they require physical possession of the key and resist phishing as well. Our [exchange security guide](/guides/cross-exchange-arbitrage) covers how to set these up on exchange accounts." },
      { type: "p", text: "Where an account still insists on SMS — some banks and services offer no alternative — reduce the exposure: use a number that is not tied to your main identity where possible, keep the account's other recovery options strong, and monitor it closely. Never use SMS 2FA as the only protection on an account holding funds. And on your exchange accounts, enable withdrawal whitelists so that even a successful account takeover cannot send funds to an attacker's address without a waiting period. Defense in depth is what saves you when any single layer fails. For definitions of the terms used here, see the [glossary](/glossary)." },
      {
        type: "table",
        headers: ["Defense", "What it stops", "Effort"],
        rows: [
          ["Port-out PIN / port freeze", "Unauthorized number transfers", "One carrier call"],
          ["Account-change PIN", "Social-engineered account changes", "One carrier call"],
          ["Authenticator app 2FA", "SMS code interception", "Minutes per account"],
          ["Hardware security key", "Phishing and SMS interception", "Buy a key, set up once"],
          ["Withdrawal whitelist", "Theft after account takeover", "Minutes per exchange"],
          ["Separate recovery email", "Email takeover via leaked info", "One-time setup"]
        ],
      },
      { type: "h2", text: "If You Suspect a SIM Swap Is Happening" },
      { type: "p", text: "The classic warning sign is sudden loss of mobile service — your phone shows no signal or emergency-calls-only in a place where it normally works, while other phones on the same network are fine. Do not wait to see if it resolves. Immediately contact your carrier from another phone or a landline and report a suspected unauthorized SIM swap, ask them to freeze the number, and verify that no transfer occurred. Then, from a secure device, change passwords on your email and exchange accounts, revoke sessions and API keys, and check withdrawal histories. The first hour matters enormously: attackers move quickly once they control your number." },
      { type: "p", text: "After the incident, file a report with your carrier and with local law enforcement, and consider moving to a carrier with stronger verification practices if yours failed you. Review every account that used your number for recovery and replace SMS with app-based or key-based authentication. The macro backdrop makes vigilance worthwhile: with the FOMC decision on Oct 28 and US September CPI at 3.7% year over year, volatility will keep attracting scammers, and a hardened phone setup is one of the highest-return security investments you can make." },
      {
        type: "callout",
        title: "Risk disclosure",
        text: "SIM-swap attacks can bypass SMS security entirely. Never rely on SMS codes alone for any account that holds funds, and treat sudden loss of mobile service as a security emergency.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can help with this topic by explaining SIM-swap attacks in plain words, walking you through the exact settings to request from your carrier, or drafting a checklist for replacing SMS codes with authenticator apps on all your accounts." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is a SIM-swap attack?",
            a: "An attacker convinces your mobile carrier to transfer your phone number to a SIM they control, letting them receive your SMS codes and reset passwords on your accounts.",
          },
          {
            q: "How do I know if I have been SIM-swapped?",
            a: "The most common sign is sudden loss of mobile service while other phones on the same network work fine. Contact your carrier immediately from another phone.",
          },
          {
            q: "Does a carrier PIN fully prevent SIM swaps?",
            a: "No, but it makes attacks much harder. Combine a port-out PIN with authenticator-app or hardware-key 2FA so SMS is not a single point of failure.",
          },
          {
            q: "Should I remove my phone number from exchange accounts?",
            a: "Where the exchange allows it, yes — use an authenticator app or security key instead of SMS. Keep withdrawal whitelists enabled as a final backstop.",
          }
        ],
      },
  ],
};
