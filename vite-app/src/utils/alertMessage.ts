import type { ArbitrageOpportunity } from '../types';

export function formatPriceUsd(price: number): string {
  if (price >= 1000) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (price >= 1) return price.toFixed(4);
  if (price >= 0.0001) return price.toFixed(6);
  return price.toFixed(8);
}

export function openStatusLabel(value: boolean | null): string {
  if (value === true) return 'Open';
  if (value === false) return 'Closed';
  return 'unknown';
}

/**
 * Plain-text alert message for copying (e.g. to paste into Telegram).
 * This only copies text to the clipboard — it never sends anything to
 * Telegram, email, or any other service, and never claims it was sent.
 * Unknown values are written as "unknown", never as $0.
 */
export function formatTelegramMessage(opp: ArbitrageOpportunity): string {
  const withdrawal = opp.cheapestWithdrawalFeeUsdt !== null && opp.cheapestWithdrawalFeeUsdt !== undefined && opp.cheapestWithdrawalChain
    ? `${opp.cheapestWithdrawalChain} $${opp.cheapestWithdrawalFeeUsdt.toFixed(2)}`
    : 'unknown';
  const executable = opp.executableUsdt !== null && opp.executableUsdt !== undefined
    ? `$${opp.executableUsdt.toFixed(2)}`
    : 'depth unknown';
  const netNote = opp.cheapestWithdrawalFeeUsdt === null || opp.cheapestWithdrawalFeeUsdt === undefined
    ? ' (before withdrawal fee — fee unknown)'
    : '';
  const lines = [
    `Arbitrage alert: ${opp.symbol}`,
    `Buy: ${opp.buyExchangeName} $${formatPriceUsd(opp.buyPrice)}`,
    `Sell: ${opp.sellExchangeName} $${formatPriceUsd(opp.sellPrice)}`,
    `Gross: +${opp.grossSpreadPercent.toFixed(2)}% | Net: +${opp.netProfitPercent.toFixed(2)}% ($${opp.profitPer1000USDT.toFixed(2)} on a $1000 trade)${netNote}`,
    `Cheapest withdrawal: ${withdrawal}`,
    `Executable depth: ${executable}`,
    `Withdraw (buy): ${openStatusLabel(opp.buyWithdrawOpen)} | Deposit (sell): ${openStatusLabel(opp.sellDepositOpen)}`,
    'Copied from Cryptoscopia — not sent to Telegram.',
  ];
  return lines.join('\n');
}

export interface AlertSettings {
  enabled: boolean;
  minNetProfitPercent: number;
  coinSearch: string;
  buyExchanges: string[];
  sellExchanges: string[];
}

export const DEFAULT_ALERT_SETTINGS: AlertSettings = {
  enabled: false,
  minNetProfitPercent: 5,
  coinSearch: '',
  buyExchanges: [],
  sellExchanges: [],
};

export function loadAlertSettings(): AlertSettings {
  try {
    const raw = localStorage.getItem('cryptoscopia_alert_settings');
    if (!raw) return { ...DEFAULT_ALERT_SETTINGS };
    const parsed = JSON.parse(raw) as Partial<AlertSettings>;
    return { ...DEFAULT_ALERT_SETTINGS, ...parsed };
  } catch {
    return { ...DEFAULT_ALERT_SETTINGS };
  }
}

export function saveAlertSettings(settings: AlertSettings): void {
  try {
    localStorage.setItem('cryptoscopia_alert_settings', JSON.stringify(settings));
  } catch {
    // localStorage unavailable (private mode etc.) — settings stay in memory.
  }
}

export function oppMatchesAlert(opp: ArbitrageOpportunity, settings: AlertSettings): boolean {
  if (opp.netProfitPercent < settings.minNetProfitPercent) return false;
  const q = settings.coinSearch.trim().toUpperCase();
  if (q && !opp.symbol.includes(q) && !opp.baseSymbol.includes(q)) return false;
  if (settings.buyExchanges.length > 0 && !settings.buyExchanges.includes(opp.buyExchange)) return false;
  if (settings.sellExchanges.length > 0 && !settings.sellExchanges.includes(opp.sellExchange)) return false;
  return true;
}
