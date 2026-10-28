const fs = require('fs');
let code = fs.readFileSync('src/server/dexScanner.ts', 'utf8');

code = code.replace(
  '              cexWithdrawOpen,',
  '              cexWithdrawOpen,\n              cexVolumeUsd: cexDepth.askUsdtVolume || cexDepth.bidUsdtVolume,\n              cexVolumeToken: cexDepth.askTokenVolume || cexDepth.bidTokenVolume,'
);

fs.writeFileSync('src/server/dexScanner.ts', code);
