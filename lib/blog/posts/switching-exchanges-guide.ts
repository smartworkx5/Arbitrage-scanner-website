import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "switching-exchanges-guide",
  title: "Switching Exchanges Without the Pain",
  description: "A practical migration checklist for switching crypto exchanges: moving funds safely, preserving records, avoiding downtime, and keeping trading running.",
  keywords: [
      "switching crypto exchanges",
      "move crypto to new exchange",
      "exchange migration checklist",
      "transfer crypto between exchanges",
      "change crypto exchange",
      "crypto exchange migration"
  ],
  datePublished: "2026-10-16",
  dateModified: "2026-10-16",
  readingMinutes: 8,
  category: "Markets",
  excerpt: "Switching exchanges is routine — if you plan it. A careful migration avoids stuck funds, lost records, and costly downtime.",
  image: "/images/blog/switching-exchanges-guide.svg",
  blocks: [
      { type: "p", text: "Switching crypto exchanges sounds simple until you are mid-migration with funds in transit, open orders on the old venue, and a tax report that needs both accounts. A planned move takes a few hours of careful work; an unplanned one can strand assets for days. Whether you are leaving a venue over fees, security concerns, or a better asset list, the process is the same: prepare, move in stages, verify everything, then close out cleanly. With Bitcoin near $82,200 as of Oct 16, 2026 and the FOMC decision coming Oct 28, this is a good week to migrate deliberately rather than during a volatility spike — a calm market is the cheapest time to move." },
      { type: "h2", text: "Before You Move: Prepare the New Account First" },
      { type: "p", text: "Set up and fully verify the new exchange before touching the old one. Complete identity verification, enable strong two-factor authentication, set up withdrawal allowlists, and confirm that the new venue supports every asset you plan to move — some tokens are listed on one exchange but not another, and discovering that mid-transfer is painful. Also confirm deposit methods and limits: a new account may have lower withdrawal limits until verification tiers complete, and you do not want to learn that with a large balance waiting to move. Test the new account with a tiny deposit and a tiny withdrawal first, so you know the full round trip works." },
      { type: "p", text: "While preparing, take a full snapshot of the old account. Export your complete transaction history, trade history, deposit and withdrawal records, and any staking or rewards statements. Exchanges sometimes restrict history exports after an account is closed, and tax reporting depends on having both sides of every move. Save these exports in at least two places. If you use portfolio tracking software, note your cost-basis records too — switching exchanges does not reset your tax obligations, and clean records make year-end reporting dramatically easier." },
      { type: "h2", text: "Moving Funds in Stages, Not All at Once" },
      { type: "p", text: "Never move your entire balance in a single transfer. The professional approach is staged: first a small test transfer of each asset, confirm it arrives at the new exchange, then move the remainder in two or three tranches. For each transfer, verify the destination address character by character, confirm you have selected the correct network, and double-check that the token is supported on that network at the receiving exchange. A stablecoin sent on the wrong network is one of the most common and most expensive migration mistakes, and support teams may not be able to recover it." },
      { type: "p", text: "Choose the right moment for each transfer. Network fees and confirmation times vary with congestion, and moving during a news event can mean slower confirmations and wider spreads if you need to trade immediately on arrival. With US September CPI at 3.7% year over year and producer prices up 6.3%, markets are jumpy, so avoid migrating right before major announcements. If you hold assets on the old exchange that you plan to sell rather than transfer, sell them before the move rather than transferring and selling later — fewer transfers means fewer fees and fewer chances for error." },
      {
        type: "list",
        items: [
        "Verify the new account fully: KYC, 2FA, withdrawal allowlists, deposit test",
        "Export complete history from the old exchange: trades, deposits, withdrawals, rewards",
        "Confirm the new venue lists every asset you plan to move, on the right networks",
        "Send a small test transfer for each asset before moving the balance",
        "Verify destination addresses and networks character by character, every time",
        "Move in tranches; keep a written log of every transfer with transaction IDs"
        ],
      },
      { type: "h2", text: "Open Orders, Staking, and Subscriptions" },
      { type: "p", text: "Before closing anything, deal with the positions that do not move themselves. Cancel or let expire any open limit orders on the old exchange, and close or transfer any open futures positions — futures positions cannot be moved between venues, so you must close them on the old exchange and reopen on the new one, which means accepting the spread and any funding costs. Unstake any staked assets and account for unbonding periods, which can take days or weeks. Cancel recurring buys, savings plans, and API keys tied to the old account, and check whether any third-party apps or trading bots still point at it." },
      {
        type: "table",
        headers: ["Item to close", "Action", "Timing"],
        rows: [
          ["Open limit orders", "Cancel or let expire", "Before migration"],
          ["Futures positions", "Close on old venue, reopen on new", "Before migration"],
          ["Staked assets", "Unstake, allow for unbonding period", "Days to weeks ahead"],
          ["Recurring buys / savings plans", "Cancel on old venue, recreate on new", "Before closing old account"],
          ["API keys", "Revoke old keys, create new ones", "After bots are migrated"]
        ],
      },
      { type: "h2", text: "Closing Out and Verifying the Move" },
      { type: "p", text: "Once everything has arrived and you have confirmed balances on the new venue, do a final reconciliation: compare the new account's balances against your migration log, confirm that no dust balances or pending rewards remain on the old account, and revoke any remaining API keys. Then decide whether to close the old account or leave it dormant. Keeping a dormant account with strong security can be useful as a backup venue — price differences between exchanges create opportunities, and our [cross-exchange arbitrage guide](/guides/cross-exchange-arbitrage) explains how traders use multiple venues. If you close it, confirm in writing that the account is closed and that no personal data remains beyond what the exchange must retain for compliance." },
      { type: "p", text: "Finally, update your security posture on the new venue the same day: review active sessions and devices, confirm withdrawal allowlists are live, and set up anti-phishing codes. A migration is a rare moment when your security settings are all being touched at once, so it is the perfect time to tighten them. If you trade across venues regularly, our [Binance vs Kraken](/arbitrage/binance-vs-kraken) and [Binance vs OKX](/arbitrage/binance-vs-okx) comparisons can help you pick a second venue that complements the first. Migrate once, migrate carefully, and your future self will thank you." },
      {
        type: "callout",
        title: "Risk disclosure",
        text: "Crypto transfers are irreversible. Always send a small test transaction first, verify addresses and networks manually, and never migrate funds under time pressure from anyone claiming to be support.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can help with this topic by turning this guide into a personalized migration checklist for your specific assets, explaining network selection in plain words, or summarizing your transfer log into a clean record for tax time." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "How long does switching exchanges take?",
            a: "Usually a few hours of active work, but allow days if you have staked assets with unbonding periods or large balances that need staged transfers.",
          },
          {
            q: "Can I move open futures positions to a new exchange?",
            a: "No. Futures positions cannot transfer between venues. Close them on the old exchange and reopen on the new one, accepting the spread and funding costs.",
          },
          {
            q: "What is the biggest mistake when switching exchanges?",
            a: "Sending funds on the wrong network or to an unsupported token address. Always send a small test transfer first and verify the network.",
          },
          {
            q: "Should I close the old account after migrating?",
            a: "Not necessarily. A dormant, well-secured second account can serve as a backup venue. If you close it, get written confirmation and revoke all API keys first.",
          }
        ],
      },
  ],
};
