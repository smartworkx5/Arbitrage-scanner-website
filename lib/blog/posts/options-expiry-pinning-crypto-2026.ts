import type { BlogPost } from "../../blog-posts";

export const post: BlogPost = {
  slug: "options-expiry-pinning-crypto-2026",
  title: "Expiry Pinning in Crypto Options: Do Prices Gravitate to Max Pain?",
  description: "Expiry pinning claims crypto prices gravitate toward max pain as options expire. We test the idea against expiry-week behaviour, incentives, and the evidence.",
  keywords: [
      "Expiry Pinning",
      "max pain crypto options",
      "options expiry week price behaviour",
      "crypto options market makers",
      "BTC options expiry",
      "options pinning evidence"
  ],
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readingMinutes: 10,
  category: "Markets",
  excerpt: "Traders swear prices pin to max-pain levels at expiry. This article tests that claim against how expiry weeks actually behave, who would benefit, and what the evidence really shows.",
  image: "/images/blog/options-expiry-pinning-crypto-2026.svg",
  blocks: [
      { type: "p", text: "Expiry Pinning is one of the most repeated claims in crypto options trading: the idea that prices gravitate toward the level that causes maximum pain to option buyers, known as max pain, as expiry approaches. Data as of 2 Nov 2026, BTC traded at about $78,400, up about 1% in 24 hours, and ETH traded near $2,280, up about 1%, while gold spot traded near $3,900 an ounce after rebounding from a 31 Oct one-year low near $3,876. In a week like this, with a fearful Fear and Greed reading of 37, social media fills with max-pain charts and confident predictions that BTC will pin to a round number by Friday. The claim feels plausible because market makers hedge their books, and hedging can move prices, but feeling plausible and being reliably true are very different things, and this article tests the idea with the scepticism it deserves." },
      { type: "p", text: "Max pain itself is simple to define. For a given expiry, it is the underlying price at which the total value of all expiring options, calls and puts combined, is at its lowest, meaning option buyers as a group lose the most and option sellers keep the most premium. The pinning theory says that market makers, who are typically net sellers of options, hedge by buying the underlying when prices fall and selling when they rise, and that this hedging pressure pushes the price toward the level where their payout is smallest. It is a neat story with a clear mechanism, which is exactly why it spreads so easily. The problem is that the story skips several awkward questions: how large is options hedging relative to spot trading, who is actually net short, and whether expiry-week prices really behave differently from any other week." },
      { type: "h2", text: "How the pinning mechanism is supposed to work" },
      { type: "p", text: "The mechanism starts with delta hedging. A market maker who sells a call must buy some of the underlying coin to stay neutral, because the call gains value as the coin rises. As the coin rises, the call's delta rises, so the market maker must buy more; as the coin falls, delta falls, so the market maker sells some back. This buy-high, sell-low hedging pattern is inherently stabilising around the strike where the most options sit, because hedging flows lean against price moves. Near expiry, gamma rises sharply, so the required hedging trades get larger and faster, which in theory strengthens the pinning force. If a huge amount of open interest clusters at one strike, the argument goes, hedging flows around that strike should act like gravity." },
      { type: "p", text: "That logic is sound as far as it goes, but its strength depends entirely on size. In crypto, daily spot and perpetual futures volume dwarfs options hedging flows on most days, and large directional traders, liquidations, and macro news routinely overwhelm any stabilising effect from hedging. Pinning also assumes market makers are net sellers at that expiry, which is not always true, and it assumes they hedge mechanically rather than managing risk with futures, spreads, or simply accepting some exposure. A mechanism that exists in principle can still be too small to matter in practice, and the burden of proof sits with anyone claiming a reliable, tradeable edge. If you are new to these mechanics, the [glossary](/glossary) is a useful place to confirm terms like open interest and delta hedging before trusting a max-pain chart." },
      { type: "h2", text: "What expiry weeks actually look like" },
      { type: "p", text: "If pinning were strong and reliable, expiry weeks would show a distinctive fingerprint: prices drifting toward max pain, volatility compressing as expiry nears, and settlement prices clustering near predicted levels more often than chance allows. Reality is messier. Some expiries do settle near a high-open-interest strike, which believers screenshot and circulate, while many others settle far away after news, liquidations, or a simple trend day. That selective memory is the core trap: humans remember the hits and forget the misses, and a theory that is celebrated only when it works is not a theory at all. A fair test counts every expiry, including the ones where BTC blew straight through max pain on a macro headline or a wave of forced selling." },
      { type: "p", text: "There is also a simpler explanation for many apparent pins. Max-pain levels tend to sit near round numbers and near the current price, because open interest clusters at round strikes close to where the market already trades. A price that stays roughly near where it started the week will therefore look pinned even if nothing special happened. Likewise, volatility often falls into expiry simply because the uncertainty that options were pricing has passed, not because of a conspiracy to pin the price. None of this proves pinning never happens; small stabilising effects from hedging are plausible, especially in quiet weeks with enormous concentrated open interest. But plausible and small is very different from reliable and tradeable, and the distinction matters when real money is at stake." },
      {
        type: "list",
        items: [
        "Max pain is the price where expiring options lose the most value in aggregate, favouring net sellers.",
        "Delta hedging by market makers can lean against price moves, which is the proposed pinning force.",
        "Spot and perpetual volume usually dwarfs options hedging flows, limiting the effect.",
        "Apparent pins often reflect round-number strikes and prices simply staying near where the week began.",
        "A fair test must count every expiry, not just the screenshots that get shared."
        ],
      },
      { type: "h2", text: "Who benefits, and does that prove manipulation?" },
      { type: "p", text: "A common leap goes from pinning to manipulation: if prices land near max pain, someone must be pushing them there deliberately. That leap is usually unjustified. Market makers hedging a book are not manipulating a market; they are managing risk, and their flows are a normal consequence of selling options to customers who wanted them. Deliberate manipulation would also be expensive and risky in a deep, fragmented crypto market, where pushing BTC by thousands of dollars against spot and perpetual flows would cost a fortune and invite competition from traders fading the move. The fact that sellers benefit when options expire worthless is not evidence of foul play; it is the basic economics of selling insurance, where the seller profits most of the time and occasionally pays out heavily." },
      { type: "p", text: "There is a subtler, more honest version of the claim worth keeping. In quiet conditions, with very large open interest at a single expiry, hedging flows can dampen moves and make settlement near a popular strike somewhat more likely than a random walk would suggest. That is a modest, conditional effect, and it might justify a small adjustment to expectations, such as being less surprised by a flat expiry week. It does not justify betting the account on a max-pain target, selling options purely because max pain sits nearby, or assuming Friday's settlement is predetermined on Monday. Traders who treat max pain as one weak input among many, alongside trend, liquidity, and news risk, will do far better than traders who treat it as a prophecy. For perspective on how professionals weigh small edges against larger market forces, see the [guides on cross-exchange arbitrage](/guides/cross-exchange-arbitrage), where tiny structural effects are measured rather than assumed." },
      {
        type: "table",
        headers: ["Claim about pinning", "What would prove it", "What we usually see"],
        rows: [
          ["Price always pins to max pain", "Settlement near max pain far above chance, every expiry", "Many expiries settle far away on news or trend days"],
          ["Hedging moves the price", "Hedging flows large versus spot volume", "Options hedging is usually small versus spot and perps"],
          ["Pinning is manipulation", "Evidence of deliberate, costly price pushing", "Normal risk hedging explains the flows; no proof of intent"],
          ["Weak stabilising effect in quiet weeks", "Slight clustering near big strikes in calm conditions", "Plausible and modest; not a reliable trading edge"]
        ],
      },
      { type: "h2", text: "How to use max pain without being used by it" },
      { type: "p", text: "The practical approach is to treat max pain as context, not as a signal. Before an expiry, note the max-pain level and the strikes with the largest open interest, but ask what else could move the market that week: scheduled economic releases, exchange news, large liquidations, or an ongoing trend. Data as of 2 Nov 2026, the market backdrop included Binance's report that about 95% of roughly $6.3bn in stolen tokens was covered, with $3.64bn in net outflows in the first 9.5 hours after withdrawals resumed on 1 Nov, a reminder that exchange-specific news can dominate any expiry-week pattern. If a strong trend or a major event is in play, discard the pinning idea entirely; trends break pins, and events overwhelm hedging flows." },
      { type: "p", text: "Position sizing is where scepticism pays. Never size an expiry-week trade on the assumption that the price will land at max pain, and never hold a short-dated option into expiry purely because a chart says the price is pinned. If you sell options into expiry, size for the scenario where pinning fails and the price runs, because that is the scenario that causes real damage. If you buy options, accept that a flat, pinned week is one of several outcomes, and that time decay will punish you for waiting. The traders who survive expiry weeks are not the ones with the cleverest max-pain chart; they are the ones whose positions still make sense if the chart is wrong, and whose losses stay small when the market ignores the theory completely." },
      {
        type: "callout",
        title: "Risk warning",
        text: "Max-pain levels are not predictions and must never be the sole basis for a trade. Expiry weeks can produce violent moves, gap risk, and fast time decay, so size positions for the scenario where pinning fails completely.",
        tone: "warning",
      },
      { type: "h2", text: "AI Help: Muse AI" },
      { type: "p", text: "Muse AI is Meta's personal AI assistant, built to explain ideas in plain language and help you think through questions step by step. For this topic, you can ask Muse AI to explain max pain with a simple example, or to list reasons why a price might not pin to a predicted level. Join Muse with invite code LTGSWD — in the Muse app, go to Settings > Redeem token and enter the code. Disclosure: LTGSWD is the author's Muse invite code. Muse AI is not a trading tool and does not give financial advice." },
      {
        type: "faq",
        items: [
          {
            q: "What is max pain in crypto options?",
            a: "Max pain is the underlying price at which all options expiring on a given date lose the most value combined. At that price, option buyers as a group do worst and net sellers keep the most premium. It is calculated from open interest across strikes, not from any forecast about where the price will actually go.",
          },
          {
            q: "Does expiry pinning actually work?",
            a: "The hedging mechanism behind pinning is real but usually small compared with spot and perpetual trading volume. Some expiries settle near max pain and some settle far away, and the memorable hits get shared far more than the misses. Treat any stabilising effect as weak and conditional, not as a reliable prediction.",
          },
          {
            q: "Is pinning evidence of market manipulation?",
            a: "Not by itself. Market makers hedge their books by buying and selling the underlying, which can dampen moves, but that is normal risk management rather than manipulation. Deliberately pushing a deep market like BTC to a target price would be extremely expensive and is not demonstrated by a settlement landing near a popular strike.",
          },
          {
            q: "Should I trade around max pain levels?",
            a: "Use max pain as background context only. Check trend, news risk, and liquidity first, never size a trade on the assumption that pinning will hold, and always plan for the scenario where the price runs straight through the predicted level.",
          }
        ],
      },
  ],
};
