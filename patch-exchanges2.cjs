const fs = require('fs');

let code = fs.readFileSync('src/server/exchanges.ts', 'utf8');

code = code.replace(/prices\[symbol\] \= \{ bid, ask, last, volume24h,[\s\S]*?change24h \};/g, 'prices[symbol] = { bid, ask, last, volume24h, change24h };');

// Also need to make sure we added change24h to the objects correctly.
code = code.replace(/volume24h,\n            change24h,\n            change24h,/g, 'volume24h,\n            change24h,');

fs.writeFileSync('src/server/exchanges.ts', code);
