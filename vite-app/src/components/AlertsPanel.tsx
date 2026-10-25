import React, { useState } from 'react';
import type { ArbitrageOpportunity } from '../types';
import type { AlertSettings } from '../utils/alertMessage';
import { formatTelegramMessage } from '../utils/alertMessage';
import { Bell, BellOff, Copy, Check, Trash2 } from 'lucide-react';

export interface AlertFeedItem {
  id: string;
  oppId: string;
  symbol: string;
  buyExchangeName: string;
  sellExchangeName: string;
  netProfitPercent: number;
  profitPer1000USDT: number;
  timestamp: number;
  message: string;
}

interface AlertsPanelProps {
  settings: AlertSettings;
  onSettingsChange: (next: AlertSettings) => void;
  alerts: AlertFeedItem[];
  onClearAlerts: () => void;
  notificationPermission: NotificationPermission | 'unsupported';
  onEnableNotifications: () => void;
}

export const AlertsPanel: React.FC<AlertsPanelProps> = ({
  settings,
  onSettingsChange,
  alerts,
  onClearAlerts,
  notificationPermission,
  onEnableNotifications,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyAlert = (item: AlertFeedItem) => {
    navigator.clipboard.writeText(item.message).catch(() => {});
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-xl p-3 mb-3 shadow-lg space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {settings.enabled ? <Bell className="w-4 h-4 text-emerald-400" /> : <BellOff className="w-4 h-4 text-slate-400" />}
          <h3 className="text-sm font-bold text-white">In-app alerts</h3>
          <span className="text-[10px] font-mono text-slate-400">
            Works while this app tab stays open. No Telegram bot, no email service.
          </span>
        </div>
        <button
          onClick={() => onSettingsChange({ ...settings, enabled: !settings.enabled })}
          className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
            settings.enabled
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
              : 'bg-slate-950/80 text-slate-400 border-white/10 hover:text-slate-200'
          }`}
        >
          {settings.enabled ? 'Alerts ON' : 'Alerts OFF'}
        </button>
      </div>

      <div className="flex flex-wrap items-end gap-2 text-xs">
        <label className="flex flex-col gap-1 text-slate-400">
          Min net profit %
          <input
            type="number"
            step="0.5"
            value={settings.minNetProfitPercent}
            onChange={(e) => onSettingsChange({ ...settings, minNetProfitPercent: Number(e.target.value) || 0 })}
            className="w-24 bg-slate-950/80 border border-white/10 rounded-lg px-2 py-1.5 text-white outline-none focus:border-emerald-500/60"
          />
        </label>
        <label className="flex flex-col gap-1 text-slate-400">
          Coin (optional)
          <input
            type="text"
            value={settings.coinSearch}
            onChange={(e) => onSettingsChange({ ...settings, coinSearch: e.target.value })}
            placeholder="e.g. BTC"
            className="w-28 bg-slate-950/80 border border-white/10 rounded-lg px-2 py-1.5 text-white outline-none focus:border-emerald-500/60"
          />
        </label>
        <label className="flex flex-col gap-1 text-slate-400">
          Buy exchange id (optional, comma-separated)
          <input
            type="text"
            value={settings.buyExchanges.join(', ')}
            onChange={(e) => onSettingsChange({ ...settings, buyExchanges: e.target.value.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean) })}
            placeholder="mexc, bybit"
            className="w-40 bg-slate-950/80 border border-white/10 rounded-lg px-2 py-1.5 text-white outline-none focus:border-emerald-500/60"
          />
        </label>
        <label className="flex flex-col gap-1 text-slate-400">
          Sell exchange id (optional, comma-separated)
          <input
            type="text"
            value={settings.sellExchanges.join(', ')}
            onChange={(e) => onSettingsChange({ ...settings, sellExchanges: e.target.value.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean) })}
            placeholder="gateio, okx"
            className="w-40 bg-slate-950/80 border border-white/10 rounded-lg px-2 py-1.5 text-white outline-none focus:border-emerald-500/60"
          />
        </label>
        {notificationPermission === 'unsupported' ? (
          <span className="text-[11px] text-slate-500">Browser notifications are not supported here.</span>
        ) : notificationPermission === 'granted' ? (
          <span className="text-[11px] text-emerald-400 font-semibold">Browser notifications enabled</span>
        ) : (
          <button
            onClick={onEnableNotifications}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 border border-sky-500/30 cursor-pointer"
          >
            Enable notifications
          </button>
        )}
        {alerts.length > 0 && (
          <button
            onClick={onClearAlerts}
            className="ml-auto flex items-center gap-1 px-2 py-1.5 rounded-lg text-[11px] text-slate-400 hover:text-rose-300 border border-white/10 cursor-pointer"
          >
            <Trash2 className="w-3 h-3" /> Clear feed
          </button>
        )}
      </div>

      {alerts.length === 0 ? (
        <p className="text-[11px] text-slate-500">
          No alerts yet. Turn alerts on, set a minimum net profit, and keep this tab open while scanning — matching
          opportunities will appear here.
        </p>
      ) : (
        <ul className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
          {alerts.map((item) => (
            <li key={item.id} className="flex items-start justify-between gap-2 bg-slate-950/70 border border-slate-800 rounded-lg px-2.5 py-2">
              <div className="min-w-0">
                <div className="text-xs font-bold text-white">
                  {item.symbol} <span className="text-emerald-400 font-mono">+{item.netProfitPercent.toFixed(2)}% net</span>
                  <span className="text-slate-400 font-normal"> (+${item.profitPer1000USDT.toFixed(2)} / $1000)</span>
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  Buy {item.buyExchangeName} → Sell {item.sellExchangeName} · {new Date(item.timestamp).toLocaleTimeString()}
                </div>
              </div>
              <button
                onClick={() => copyAlert(item)}
                title="Copy for Telegram (copies text only, does not send)"
                className="shrink-0 flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 cursor-pointer"
              >
                {copiedId === item.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copiedId === item.id ? 'Copied' : 'Copy for Telegram'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Re-exported for convenience so card/table code shares one message format.
export { formatTelegramMessage };
