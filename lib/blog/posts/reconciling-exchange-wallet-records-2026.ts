import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "reconciling-exchange-wallet-records-2026",
  title: "Reconciling Exchange and Wallet Records: Finding the Missing Trades",
  description: "Reconciling Exchange and Wallet Records step by step: match exchange exports against wallet history, trace transfers, and find trades your ledger is missing.",
  keywords: [
      "Reconciling Exchange and Wallet Records",
      "crypto reconciliation workflow",
      "missing trades ledger",
      "exchange wallet mismatch",
      "crypto record matching",
      "wallet history audit"
  ],
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  readingMinutes: 9,
  category: "Strategies",
  excerpt: "When exchange balances and wallet history disagree, something is missing. This reconciliation workflow traces transfers, matches deposits, and finds the trades your ledger lost.",
  image: "/images/blog/reconciling-exchange-wallet-records-2026.svg",
  blocks: [
      { type: "p", text: "On Wednesday 4 November 2026, with Binance reporting net withdrawals of $4.72bn since reopening after the 29 October theft, Reconciling Exchange and Wallet Records is a timely discipline for anyone who moved funds in a hurry. Reconciliation means proving that two independent records, exchange history and wallet history, describe the same reality, and any gap between them is a missing trade, an unrecorded transfer, or a fee nobody logged. The work is detective work: match deposits to withdrawals, follow assets across chains, and explain every balance change with a dated event. The [glossary](/glossary) defines the record types involved, and the [best scanners](/best-crypto-arbitrage-scanners) page reinforces a useful habit: verify across independent sources instead of trusting one view." },
      { type: "h2", text: "Start With Balances, Not Transactions" },
      { type: "p", text: "Begin reconciliation from balances, because a balance gap tells you the size of the problem before you drown in transaction lists. For each asset, compare the exchange balance, the wallet balance, and your ledger balance at the same timestamp, and record the difference for each. If the ledger is lower than the exchange, entries are missing; if it is higher, phantom entries or duplicated imports are likely. Work asset by asset rather than all at once, starting with the largest balances, since a single large asset often explains most of the total gap. This balance-first approach prevents the common trap of fixing small transactions for hours while a single large transfer remains unexplained." },
      { type: "h2", text: "Match Transfers Across Both Sides" },
      { type: "p", text: "Most reconciliation gaps are transfers recorded on one side only. A withdrawal from an exchange should appear as a deposit in a wallet, with matching asset, amount minus network fee, and a transaction identifier linking them, and the reverse applies for deposits. Build a transfer table with sending side, receiving side, asset, amount, fee, and identifier, then tick off each pair as matched. Pay special attention to bridge transfers, which change chains and sometimes asset representations, and to internal transfers between sub-accounts on the same exchange, which may not generate a blockchain record at all. Unmatched items at the end of this step are your investigation list, and each one needs either a missing entry or a correction." },
      {
        type: "list",
        items: [
        "Compare exchange, wallet, and ledger balances per asset at one timestamp.",
        "Match every withdrawal to a corresponding deposit using transaction identifiers.",
        "Flag bridge transfers separately, since chain and asset representation may change.",
        "Check internal sub-account transfers that leave no blockchain trail.",
        "Investigate unmatched items one by one until every gap has an explanation."
        ],
      },
      { type: "h2", text: "Common Causes of Missing Trades" },
      { type: "p", text: "Missing trades usually come from a short list of causes, and recognising them speeds the search. Delisted or renamed assets break automated imports, small dust conversions and staking rewards arrive without obvious trade records, and failed transactions that later succeeded create duplicates or omissions. API exports sometimes cover only a limited date range, silently dropping older history, while manual imports can duplicate a month when a file is loaded twice. The [cross-exchange guide](/guides/cross-exchange-arbitrage) notes how venue differences complicate even simple comparisons, and reconciliation across venues multiplies that complexity. When a gap resists explanation, widen the date range, check the asset's full history on a block explorer, and look for events outside trading, such as fees, rebates, or airdrops." },
      {
        type: "table",
        headers: ["Gap pattern", "Likely cause", "Fix"],
        rows: [
          ["Ledger lower than exchange", "Missing buys or rewards", "Import full history, add rewards"],
          ["Ledger higher than exchange", "Duplicate imports", "Remove duplicated period"],
          ["Wallet higher than ledger", "Unrecorded withdrawal", "Add transfer with tx id"],
          ["One asset only, odd amount", "Dust conversion or fee", "Record conversion and fee"],
          ["Gap appears after a date", "API range limit", "Re-export full date range"]
        ],
      },
      { type: "h2", text: "Reconcile in a Repeatable Monthly Cycle" },
      { type: "p", text: "Reconciliation should be a monthly cycle, not an annual emergency. At month end, export exchange histories, download wallet histories, update the ledger, and run the balance comparison before the month's details fade. Keep a reconciliation note for each month recording the starting gap, the items found, and the ending gap, so next month starts from a known position rather than from scratch. If a gap cannot be resolved, record it explicitly as unresolved with its size and suspected cause, instead of forcing a balancing entry that hides the problem. A small, honestly labelled unresolved item is far safer than a fabricated adjustment, because it can be revisited when new information appears." },
      { type: "h2", text: "When to Seek Professional Help" },
      { type: "p", text: "Seek professional help when gaps involve large amounts, when assets passed through mixers or privacy tools you cannot fully document, or when a tax filing deadline approaches with unresolved differences. An accountant or forensic bookkeeper can advise on reasonable estimation methods permitted in your jurisdiction, but they need your honest gap list, not a polished fiction. This article describes general record-keeping principles only and is not tax advice, and rules vary by jurisdiction. Bring complete exports, transaction identifiers, and your monthly reconciliation notes, since professionals resolve gaps fastest when the investigation trail is already laid out." },
      {
        type: "callout",
        title: "Warning: never force a balance to match",
        text: "Inventing a trade or adjustment to make balances agree hides the real problem and can create false tax records. Record unresolved gaps honestly and revisit them with better data.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain reconciliation steps in simple words and help you draft a monthly checklist for matching exchange and wallet records. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What does reconciling exchange and wallet records mean?",
            a: "It means proving that exchange history, wallet history, and your ledger all describe the same events, and explaining every difference as a missing entry, a fee, or a correction.",
          },
          {
            q: "Where should I start when balances disagree?",
            a: "Start with balances per asset at one timestamp to size the gap, then match transfers across both sides before hunting individual transactions.",
          },
          {
            q: "What causes most missing trades?",
            a: "Transfers recorded on one side only, delisted or renamed assets, dust conversions, staking rewards, limited API date ranges, and duplicated imports.",
          },
          {
            q: "What if a gap cannot be resolved?",
            a: "Record it explicitly as unresolved with its size and suspected cause. Never invent an adjustment to force balances to agree.",
          }
        ],
      },
  ],
};
