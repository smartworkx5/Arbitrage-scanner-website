const fs = require('fs');

let code = fs.readFileSync('src/server/exchanges.ts', 'utf8');

// For MEXC
code = code.replace(
  '              prices[symbol] = {\n                bid,\n                ask,\n                last,\n                volume24h,\n                change24h,\n              };',
  '              const bidTokenVolume = safeFloat(item.bidQty);\n              const askTokenVolume = safeFloat(item.askQty);\n              prices[symbol] = {\n                bid,\n                ask,\n                last,\n                volume24h,\n                change24h,\n                bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,\n                askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,\n              };'
);

// Fallback for MEXC (bookTicker)
code = code.replace(
  '          prices[symbol] = {\n            bid,\n            ask,\n            last: (bid + ask) / 2,\n            volume24h: 0,\n            change24h: 0,\n          };',
  '          const bidTokenVolume = safeFloat(item.bidQty);\n          const askTokenVolume = safeFloat(item.askQty);\n          prices[symbol] = {\n            bid,\n            ask,\n            last: (bid + ask) / 2,\n            volume24h: 0,\n            change24h: 0,\n            bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,\n            askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,\n          };'
);

fs.writeFileSync('src/server/exchanges.ts', code);
