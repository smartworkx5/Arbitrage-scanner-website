import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "nft-tax-record-keeping-2026",
  title: "NFT Taxes: Minting, Trading, and Royalties Reporting",
  description: "NFT taxes explained: which minting, trading, royalty, and airdrop events are taxable, what records to keep, and how to avoid costly reporting mistakes.",
  keywords: [
      "NFT Taxes",
      "NFT tax reporting",
      "NFT minting tax",
      "NFT royalty income",
      "crypto tax records",
      "NFT capital gains"
  ],
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  readingMinutes: 9,
  category: "Markets",
  excerpt: "Minting, trading, and earning NFT royalties can each create a tax event. This guide maps the events and the records you need.",
  image: "/images/blog/nft-tax-record-keeping-2026.svg",
  blocks: [
      { type: "p", text: "NFT Taxes confuse even experienced traders, because a single NFT journey can involve minting, buying, selling, swapping, receiving royalties, and earning rewards, and each step may be treated differently. Tax rules vary by country, and this guide explains the general principles rather than giving tax advice for any specific person. On Oct 31, 2026, the market backdrop is weak, with BTC around $77,300 to $77,376, ETH about $2,245, and gold spot around $3,874 to $3,897 per ounce, so many traders are sitting on losses. Those losses may be usable in some jurisdictions, but only if trades were recorded properly, which is why record-keeping matters as much as the trading itself." },
      { type: "h2", text: "The Tax Events in an NFT Lifecycle" },
      { type: "p", text: "Minting an NFT is usually not itself a taxable sale, although the gas fee and any mint price paid in crypto may involve a disposal of that crypto, which can be taxable in some countries. Buying an NFT with ETH or another cryptocurrency is often treated as disposing of that crypto, so the buyer may owe tax on any gain in the crypto used, even before the NFT itself is sold. Selling an NFT for crypto or fiat is the clearest taxable event, typically producing a capital gain or loss measured from the cost basis to the sale proceeds, minus allowable fees. Swapping one NFT for another is treated as a sale in many jurisdictions, even though no cash changed hands." },
      { type: "p", text: "Royalty income is a separate category. A creator who receives royalties on secondary sales is usually earning income at the time of receipt, valued in local currency at that moment, and that income may be taxed differently from capital gains. Airdrops, staking rewards tied to NFT ownership, and play-to-earn earnings can also be income when received, depending on local rules. The practical point is that taxable events happen throughout the lifecycle, not only at the final sale, and traders who only track sales will miss income events that tax authorities may still expect to see reported." },
      { type: "h2", text: "Cost Basis: The Number That Decides Your Gain" },
      { type: "p", text: "Cost basis is what you paid for an asset, including purchase price and allowable fees, and it is subtracted from sale proceeds to calculate the gain or loss. For NFTs, cost basis gets complicated quickly: a buyer who paid in ETH must record the ETH price at purchase, the gas fee, the marketplace fee, and any royalty paid, all converted to local currency. A creator who minted an NFT has a cost basis built from minting costs and gas, which may be very low compared with a later sale price, producing a large taxable gain. Traders who swap NFTs must establish the value of both sides of the swap at the time of trade, which requires a contemporaneous price record, not a guess months later." },
      { type: "p", text: "Poor cost-basis records are the most common and most expensive NFT tax mistake. Without records, a trader may be unable to prove what they paid, and tax authorities may treat the full sale price as a gain. Keep a record for every transaction: date, platform, asset, amounts in crypto and local currency, fees, wallet addresses, and transaction hashes. Export marketplace and wallet histories regularly, because platforms close, APIs change, and reconstructing two years of trades from block explorers is slow and error-prone." },
      { type: "h2", text: "Royalties, Creator Income, and Business Treatment" },
      { type: "p", text: "Creators face a different tax picture from collectors. Royalty payments received over time are generally income, and a creator who mints and sells regularly may be treated as running a business, which brings different reporting, expense deductions, and sometimes self-employment or VAT-style obligations depending on jurisdiction. Business expenses such as software, gas for business mints, marketing, and contractor payments may be deductible, but only with proper invoices and records. Creators should separate business wallets from personal wallets where possible, because mixed wallets make it far harder to prove which transactions were business activity." },
      {
        type: "table",
        headers: ["Event", "Common treatment", "Record to keep"],
        rows: [
          ["Minting", "Usually not a sale, gas may matter", "Mint price, gas, date, hash"],
          ["Buying with crypto", "Possible disposal of the crypto paid", "Crypto price at purchase, fees"],
          ["Selling an NFT", "Capital gain or loss", "Proceeds, basis, fees, date"],
          ["Receiving royalties", "Usually income at receipt", "Amount, date, local currency value"],
          ["Airdrops and rewards", "Often income at receipt", "Token value at receipt, vesting terms"]
        ],
      },
      { type: "h2", text: "Losses, Wash Sales, and Timing" },
      { type: "p", text: "Capital losses on NFT sales can offset gains in many jurisdictions, but the rules differ: some countries allow losses to offset only same-type gains, others allow broader offsetting, and some restrict loss use when an asset is repurchased quickly. Wash-sale rules, which disallow losses when a substantially identical asset is repurchased within a short window, apply to securities in many countries and are debated for crypto and NFTs, so traders should not assume they can sell and rebuy the same collection to harvest a loss safely. Timing also matters: selling in December versus January can shift the tax year, and realising gains in a year with lower income may produce a different outcome, although tax timing should never override investment judgement." },
      { type: "p", text: "A related trap is the illiquid loss. An NFT that has fallen 90 percent still produces no tax loss until it is actually sold or disposed of, and an unsellable NFT may be difficult to dispose of at all. Some traders donate worthless NFTs or sell them for a nominal amount to realise the loss, but the tax treatment of such disposals varies and should be confirmed with a professional. Never assume a paper loss is a tax loss, and never manufacture a disposal purely for tax purposes without understanding the local anti-avoidance rules." },
      { type: "h2", text: "Record-Keeping System That Survives an Audit" },
      { type: "p", text: "A workable system has three parts: automated exports, a personal ledger, and secure storage. Use crypto tax software or portfolio tools that import wallet and marketplace data, but verify the results manually, because these tools frequently misprice NFTs, miss royalty income, or misclassify swaps. Keep your own spreadsheet with one row per transaction, including date, platform, asset, crypto amounts, local currency values, fees, and hashes, and reconcile it against the tool output at least quarterly. Store records for the full retention period required in your country, which is often several years after the relevant tax year, and keep backups offline as well as in the cloud." },
      {
        type: "list",
        items: [
        "Record every mint, buy, sell, swap, royalty, and airdrop with date and local currency value.",
        "Save transaction hashes, wallet addresses, and platform names for each event.",
        "Reconcile tax software output against your own ledger every quarter.",
        "Keep records for the full retention period required in your jurisdiction."
        ],
      },
      {
        type: "callout",
        title: "Risk warning",
        text: "Tax rules for NFTs vary widely by country and change frequently. This guide is general information, not tax advice, and traders with significant activity should consult a qualified tax professional.",
        tone: "warning",
      },
      { type: "h2", text: "Common Mistakes and How to Avoid Them" },
      { type: "p", text: "The most common mistakes are ignoring crypto-to-crypto disposals, forgetting royalty income, losing cost-basis records, and assuming a marketplace year-end statement covers everything. Marketplaces often report only sales on their own platform, missing wallet-to-wallet transfers, cross-platform trades, and gas costs. Another mistake is reporting in crypto units instead of local currency, which makes gains and losses impossible to verify. Fix these by treating every wallet movement as a potential tax event until proven otherwise, and by reviewing your full year activity before filing, not after. For background on how traders track prices across venues, see [cross-exchange arbitrage](/guides/cross-exchange-arbitrage) and the [glossary](/glossary)." },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, and it can help you organise NFT tax records in plain language. For this topic, you can ask it to explain cost basis with a simple example, or to draft a record-keeping checklist you can follow after each trade." },
      { type: "p", text: "Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code." },
      { type: "p", text: "Disclosure: LTGSWD is the author's Muse invite code." },
      { type: "p", text: "Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "Is minting an NFT a taxable event?",
            a: "Minting alone is usually not a sale, but paying gas or a mint price in crypto can involve disposing of that crypto, which may be taxable. Keep records of mint costs and gas in any case.",
          },
          {
            q: "Are NFT royalties taxed as income or capital gains?",
            a: "Royalties received by a creator are generally treated as income at receipt, while a collector selling an NFT usually faces capital gains treatment. The distinction depends on jurisdiction and whether the activity is a business.",
          },
          {
            q: "Can I claim a loss on an NFT that has fallen but not sold?",
            a: "Usually not. A paper loss becomes a tax loss only when the asset is sold or otherwise disposed of, and unsellable NFTs can be difficult to dispose of, so check local rules before assuming.",
          },
          {
            q: "What records should I keep for NFT taxes?",
            a: "Keep date, platform, asset, crypto and local currency amounts, fees, wallet addresses, and transaction hashes for every mint, buy, sell, swap, royalty, and airdrop, for the full retention period in your country.",
          }
        ],
      },
  ],
};
