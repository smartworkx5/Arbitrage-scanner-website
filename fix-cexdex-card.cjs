const fs = require('fs');

let code = fs.readFileSync('src/components/CexDexCard.tsx', 'utf8');

// We need to import formatOrderSize
code = code.replace(
  "import { Droplets, ArrowRightLeft, ShieldCheck, Zap, AlertTriangle, Info, Map, ChevronDown, ChevronUp } from 'lucide-react';",
  "import { Droplets, ArrowRightLeft, ShieldCheck, Zap, AlertTriangle, Info, Map, ChevronDown, ChevronUp } from 'lucide-react';\nimport { formatOrderSize } from '../utils/formatters';"
);

// Add the order volume block to CEX side
const cexVolumeBlock = `
            {/* Order size in USDT */}
            <div className="text-[8.5px] sm:text-[10px] font-mono mt-0.5 flex items-center justify-between">
              <span className="text-slate-400">Vol:</span>
              <span className="font-bold truncate text-slate-300">
                {isCexToDex 
                  ? formatOrderSize(opp.cexVolumeUsd, opp.cexVolumeToken, opp.baseSymbol)
                  : formatOrderSize(opp.cexVolumeUsd, opp.cexVolumeToken, opp.baseSymbol)
                }
              </span>
            </div>
`;

code = code.replace(
  '              ${formatPrice(isCexToDex ? opp.cexBuyPrice : opp.dexPrice)}\n            </div>\n            <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-between">',
  '              ${formatPrice(isCexToDex ? opp.cexBuyPrice : opp.dexPrice)}\n            </div>\n' + cexVolumeBlock + '            <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-between">'
);

fs.writeFileSync('src/components/CexDexCard.tsx', code);
