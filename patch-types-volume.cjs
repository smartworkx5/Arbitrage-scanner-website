const fs = require('fs');
let code = fs.readFileSync('src/server/types.ts', 'utf8');

code = code.replace(
  '  cexVolume24h?: number;',
  '  cexVolume24h?: number;\n  cexVolumeUsd?: number;\n  cexVolumeToken?: number;'
);

fs.writeFileSync('src/server/types.ts', code);
