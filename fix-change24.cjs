const fs = require('fs');

let code = fs.readFileSync('src/server/exchanges.ts', 'utf8');

// For MEXC
code = code.replace(
  '              prices[symbol] = {\n                bid,\n                ask,\n                last,\n                volume24h,\n              };',
  '              prices[symbol] = {\n                bid,\n                ask,\n                last,\n                volume24h,\n                change24h,\n              };'
);

// For HTX
code = code.replace(
  '            prices[symbol] = {\n              bid,\n              ask,\n              last,\n              volume24h,\n              bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,\n              askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,\n            };',
  '            prices[symbol] = {\n              bid,\n              ask,\n              last,\n              volume24h,\n              change24h,\n              bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,\n              askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,\n            };'
);

// For Coinex
code = code.replace(
  '        prices[symbol] = {\n          bid,\n          ask,\n          last,\n          volume24h,\n          bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,\n          askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,\n        };',
  '        prices[symbol] = {\n          bid,\n          ask,\n          last,\n          volume24h,\n          change24h,\n          bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,\n          askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,\n        };'
);

// For KuCoin
code = code.replace(
  '        prices[symbol] = {\n          bid,\n          ask,\n          last,\n          volume24h,\n          bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,\n          askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,\n        };',
  '        prices[symbol] = {\n          bid,\n          ask,\n          last,\n          volume24h,\n          change24h,\n          bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,\n          askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,\n        };'
);

// For Bybit
code = code.replace(
  '            prices[symbol] = {\n              bid,\n              ask,\n              last,\n              volume24h: safeFloat(item.turnover24h),\n              bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,\n              askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,\n            };',
  '            prices[symbol] = {\n              bid,\n              ask,\n              last,\n              volume24h: safeFloat(item.turnover24h),\n              change24h,\n              bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,\n              askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,\n            };'
);

// For OKX
code = code.replace(
  '          prices[symbol] = {\n            bid,\n            ask,\n            last,\n            volume24h: safeFloat(item.volCcy24h),\n            bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,\n            askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,\n          };',
  '          prices[symbol] = {\n            bid,\n            ask,\n            last,\n            volume24h: safeFloat(item.volCcy24h),\n            change24h,\n            bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,\n            askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,\n          };'
);

// For Bitget
code = code.replace(
  '          prices[symbol] = {\n            bid,\n            ask,\n            last,\n            volume24h: safeFloat(item.usdtVolume),\n            bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,\n            askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,\n          };',
  '          prices[symbol] = {\n            bid,\n            ask,\n            last,\n            volume24h: safeFloat(item.usdtVolume),\n            change24h,\n            bidTokenVolume: bidTokenVolume > 0 ? bidTokenVolume : undefined,\n            askTokenVolume: askTokenVolume > 0 ? askTokenVolume : undefined,\n          };'
);


fs.writeFileSync('src/server/exchanges.ts', code);
