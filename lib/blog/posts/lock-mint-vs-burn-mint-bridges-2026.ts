import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "lock-mint-vs-burn-mint-bridges-2026",
  title: "Lock-and-Mint vs Burn-and-Mint Bridges: How Your Tokens Cross Chains",
  description: "Lock-and-Mint vs burn-and-mint bridges move tokens across chains in different ways. Compare custodial locks, native burns, trust assumptions and failure modes.",
  keywords: [
      "Lock-and-Mint",
      "burn and mint bridge",
      "cross-chain bridge models",
      "wrapped tokens",
      "bridge custody risk",
      "native token bridging"
  ],
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readingMinutes: 9,
  category: "Basics",
  excerpt: "Two designs dominate cross-chain bridging: lock tokens on one chain and mint wrapped copies on another, or burn tokens natively and mint them on the destination. Each carries different trust assumptions, and recent bridge incidents show why the difference matters.",
  image: "/images/blog/lock-mint-vs-burn-mint-bridges-2026.svg",
  blocks: [
      { type: "p", text: "Lock-and-Mint is the oldest and most widely used bridge design, and understanding it explains most of what can go wrong in cross-chain transfers. When you bridge tokens from Ethereum to another chain using a lock-and-mint bridge, you send your original tokens to a vault or custodian contract on the source chain, where they are locked. The bridge then mints an equivalent amount of wrapped tokens on the destination chain, which you can use there. To return, you burn the wrapped tokens, and the bridge unlocks your originals. The wrapped tokens are IOUs: they are only as good as the locked reserves and the bridge's honesty in maintaining the one-to-one backing. Bridge security is again in focus as of 2 Nov 2026 after THORChain paused on 31 Oct when an Ethereum reorg caused a mistaken 10 ETH payout, and the FBI asked node operators to block attacker-linked transactions." },
      { type: "p", text: "Burn-and-mint works differently and is only possible when the token's issuer supports it natively. Instead of locking original tokens in a third-party vault, the token is burned on the source chain under the issuer's own contract, and an equal amount is minted on the destination chain by the same issuer. There is no wrapped IOU and no independent custodian holding a giant honeypot of locked assets. The trust assumption shifts from a bridge operator to the token issuer and its minting controls. Stablecoin issuers use this model for their official cross-chain transfers, and it is generally considered the cleaner design where it is available, though it is limited to tokens whose issuers have built it." },
      { type: "h2", text: "Lock-and-Mint in Detail: Convenience and Custody Risk" },
      { type: "p", text: "Lock-and-mint bridges are flexible: they can support almost any token, because the bridge does not need the issuer's cooperation. It simply holds the originals and issues its own wrapped version. That flexibility made them the default for years, and it also made them the biggest targets in crypto. A lock-and-mint vault holding billions of dollars of locked tokens is a single point of failure, and attackers have repeatedly compromised the validator sets, multisig keys or verification logic guarding those vaults. When a vault is drained, wrapped tokens on the destination chain lose their backing, and holders discover their IOUs are worth far less than the originals they represented." },
      { type: "p", text: "The user experience hides this risk well. You click bridge, wait a few minutes, and wrapped tokens appear. Nothing in the interface shows how many validators guard the vault, whether the multisig threshold is two of five or eight of twelve, or whether the bridge's code has been audited recently. Liquidity adds another wrinkle: some lock-and-mint bridges do not mint on demand but rely on liquidity pools on the destination chain, which means large transfers can suffer slippage or fail during stress. The design works smoothly in normal conditions, which is precisely why its failure modes catch users by surprise." },
      {
        type: "table",
        headers: ["Feature", "Lock-and-mint", "Burn-and-mint"],
        rows: [
          ["Works for any token", "Yes, no issuer cooperation needed", "No, issuer must support it"],
          ["Wrapped IOU created", "Yes, backed by locked reserves", "No, native tokens on both chains"],
          ["Main honeypot", "Vault holding locked originals", "Issuer minting controls"],
          ["Failure mode", "Vault hack leaves wrapped tokens unbacked", "Issuer key compromise or minting bug"],
          ["Typical examples", "Independent third-party bridges", "Issuer-operated stablecoin transfers"]
        ],
      },
      { type: "h2", text: "Burn-and-Mint in Detail: Cleaner, but Narrower" },
      { type: "p", text: "Burn-and-mint removes the third-party vault, which removes the largest historical attack surface in bridging. The issuer burns tokens on the source chain and mints them on the destination, keeping total supply constant by its own accounting rather than by a vault balance. If the issuer's systems are sound, there is no wrapped token to depeg and no custodian to compromise. The trade-off is centralisation of a different kind: you trust the issuer's key management, its attestation service that confirms burns before minting, and its willingness to keep supporting both chains. An issuer that pauses minting, whether for compliance, security or business reasons, can strand your transfer mid-route." },
      { type: "p", text: "Availability is the practical limit. Only a handful of major tokens, mostly stablecoins, offer native burn-and-mint across chains. For everything else, lock-and-mint or a liquidity-based bridge is the only option. That means most users will encounter both models, and the sensible approach is to use burn-and-mint where it exists for that token, and to treat lock-and-mint transfers as carrying custodian risk that should be sized accordingly: bridge what you need, do not leave large wrapped balances sitting idle on a destination chain, and prefer bridges with transparent validator sets and published audits." },
      {
        type: "list",
        items: [
        "Wrapped tokens are IOUs: check what backs them before holding large amounts.",
        "Burn-and-mint avoids vault risk but depends entirely on the token issuer.",
        "Validator set size and multisig thresholds are the real security spec of a lock-and-mint bridge.",
        "Bridge in smaller amounts first to test a new route before moving a large sum.",
        "Never leave bridged funds idle on a destination chain longer than necessary."
        ],
      },
      { type: "h2", text: "What Recent Incidents Teach About Both Models" },
      { type: "p", text: "Bridge history is a catalogue of trust assumptions failing in public. Validator-set compromises drained lock-and-mint vaults. Multisig keys were stolen or socially engineered. Verification logic bugs let attackers mint wrapped tokens without locking anything. The 31 Oct THORChain pause is a different lesson: even a decentralised cross-chain protocol can be tripped by chain-level events, when an Ethereum reorg caused a mistaken 10 ETH payout and operators halted to investigate. The FBI's request to node operators to block attacker-linked transactions after the recent exchange incident is another reminder that cross-chain infrastructure now sits inside law-enforcement attention, not outside it." },
      { type: "p", text: "The pattern across incidents is consistent: the bridge's security is only as strong as its weakest trusted component, whether that is a validator set, a multisig, an attestation service or an issuer's mint key. Users cannot eliminate that risk, but they can choose which trusted component they accept, keep transfer sizes proportionate to the bridge's track record, and avoid bridging during network instability or security incidents. As of 2 Nov 2026, with BTC around $78,400 and the Fear and Greed Index at 37, caution is the market's general mood, and bridge transfers deserve the same caution as any other irreversible transaction. For how traders weigh venue risks more broadly, see [cross-exchange arbitrage](/guides/cross-exchange-arbitrage), and the [glossary](/glossary) defines wrapped tokens and custodial risk." },
      {
        type: "callout",
        title: "Risk warning",
        text: "Bridge transfers are usually irreversible, and a compromised bridge can leave wrapped tokens unbacked. Test with a small amount first, verify the destination address and chain, and never bridge funds you cannot afford to lose during an incident.",
        tone: "warning",
      },
      { type: "h2", text: "Choosing Between the Models" },
      { type: "p", text: "Use burn-and-mint when the token issuer offers it natively for your route, since it removes vault risk. Use lock-and-mint when no native option exists, but check the bridge's validator decentralisation, audit history, total value locked and incident record first. For very large transfers, consider splitting across routes or timing the transfer outside volatile periods, and always confirm the wrapped token's contract address on the destination chain, since fake wrapped tokens are a common phishing vector. The best bridge is often the boring one: established, transparent, and used for your exact token pair many times before." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant. It can explain lock-and-mint and burn-and-mint in simple words, compare two bridges for your route, and help you draft a pre-transfer checklist. For this topic, it can walk through what happens to your tokens step by step on each model so you know where the risk sits. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is a wrapped token?",
            a: "A wrapped token is an IOU issued on a destination chain representing original tokens locked on a source chain. It is redeemable for the originals only if the bridge's locked reserves remain intact and the bridge honours redemptions.",
          },
          {
            q: "Why is burn-and-mint considered safer?",
            a: "It removes the third-party vault that holds locked tokens, which has been the largest attack target in bridge history. Risk shifts to the token issuer's minting controls instead of an independent custodian.",
          },
          {
            q: "Can any token use burn-and-mint bridging?",
            a: "No. Only tokens whose issuers have built native burn-and-mint support across chains can use it, which in practice means mainly major stablecoins. Other tokens rely on lock-and-mint or liquidity bridges.",
          },
          {
            q: "What should I check before using a lock-and-mint bridge?",
            a: "Check validator decentralisation, multisig thresholds, audit history, total value locked, incident record and whether the wrapped token contract is genuine. Test with a small amount before moving a large sum.",
          }
        ],
      },
  ],
};
