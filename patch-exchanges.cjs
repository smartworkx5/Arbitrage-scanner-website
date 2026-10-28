const fs = require('fs');

let code = fs.readFileSync('src/server/exchanges.ts', 'utf8');

// We will do a generic replacement for all fetchers:
// Inside the `if (bid > 0 && ask > 0)` block of each fetcher, we will inject change24h if we can extract it.
// Actually, it's safer to just do a string replace for each exchange.

// Gate:
code = code.replace(
  'const volume24h = safeFloat(item.quote_volume) > 0 ? safeFloat(item.quote_volume) : (safeFloat(item.base_volume) * last);',
  `const volume24h = safeFloat(item.quote_volume) > 0 ? safeFloat(item.quote_volume) : (safeFloat(item.base_volume) * last);
        const change24h = safeFloat(item.change_percentage);`
);
code = code.replace(
  'prices[symbol] = { bid, ask, last, volume24h };',
  'prices[symbol] = { bid, ask, last, volume24h, change24h };'
);

// HTX:
code = code.replace(
  'const volume24h = safeFloat(item.amount) > 0 ? safeFloat(item.amount) : (safeFloat(item.vol) * last);',
  `const volume24h = safeFloat(item.amount) > 0 ? safeFloat(item.amount) : (safeFloat(item.vol) * last);
        const openPrice = safeFloat(item.open);
        const change24h = openPrice > 0 ? ((last - openPrice) / openPrice) * 100 : undefined;`
);
code = code.replace(
  'volume24h,',
  'volume24h,\n            change24h,'
);

// Coinex:
code = code.replace(
  'const volume24h = safeFloat(item.value) > 0 ? safeFloat(item.value) : (safeFloat(item.vol) * last);',
  `const volume24h = safeFloat(item.value) > 0 ? safeFloat(item.value) : (safeFloat(item.vol) * last);
      const openPrice = safeFloat(item.open);
      const change24h = openPrice > 0 ? ((last - openPrice) / openPrice) * 100 : undefined;`
);

// Kucoin:
code = code.replace(
  'const volume24h = safeFloat(item.volValue) > 0 ? safeFloat(item.volValue) : (safeFloat(item.vol) * last);',
  `const volume24h = safeFloat(item.volValue) > 0 ? safeFloat(item.volValue) : (safeFloat(item.vol) * last);
      const change24h = safeFloat(item.changeRate) * 100;`
);

// Bitmart:
// Bitmart doesn't have open directly, wait, `item.open_24h`? Let's just omit it if we don't know. Actually we can do nothing for Bitmart if unsure, but we want all to work. Let's see if we can do MEXC and Bybit.

// MEXC:
code = code.replace(
  'const volume24h = safeFloat(item.quoteVolume) > 0 ? safeFloat(item.quoteVolume) : (safeFloat(item.volume) * last);',
  `const volume24h = safeFloat(item.quoteVolume) > 0 ? safeFloat(item.quoteVolume) : (safeFloat(item.volume) * last);
            const change24h = safeFloat(item.priceChangePercent) * 100;`
);

// Bybit:
code = code.replace(
  'const volume24h = safeFloat(item.turnover24h);',
  `const volume24h = safeFloat(item.turnover24h);
            const change24h = safeFloat(item.price24hPcnt) * 100;`
);

// OKX:
code = code.replace(
  'const volume24h = safeFloat(item.volCcy24h);',
  `const volume24h = safeFloat(item.volCcy24h);
          const openPrice = safeFloat(item.sodUtc0) || safeFloat(item.open24h);
          const change24h = openPrice > 0 ? ((last - openPrice) / openPrice) * 100 : undefined;`
);

// Bitget:
code = code.replace(
  'const volume24h = safeFloat(item.usdtVolume);',
  `const volume24h = safeFloat(item.usdtVolume);
          const openPrice = safeFloat(item.open24h) || safeFloat(item.open);
          const change24h = openPrice > 0 ? ((last - openPrice) / openPrice) * 100 : undefined;`
);

fs.writeFileSync('src/server/exchanges.ts', code);
