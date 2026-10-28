const fs = require('fs');
let code = fs.readFileSync('src/server/exchanges.ts', 'utf8');

code = code.replace(
  'const askTokenVolume = safeFloat(item.ask1Size);',
  'const askTokenVolume = safeFloat(item.ask1Size);\n            const change24h = safeFloat(item.price24hPcnt) * 100;'
);

fs.writeFileSync('src/server/exchanges.ts', code);
