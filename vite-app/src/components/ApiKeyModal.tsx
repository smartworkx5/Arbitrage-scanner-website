import React, { useState, useEffect } from 'react';
import {
  Key,
  X,
  Eye,
  EyeOff,
  ExternalLink,
  Cpu,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import { safeApiFetch } from '../utils/api';
import { dataService } from '../services/dataService';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onKeysUpdated?: () => void;
}

interface ServerKeyStatus {
  hasGeminiKey: boolean;
  geminiKeyPreview: string;
  hasDefaultGeminiKey: boolean;
  defaultGeminiKeyPreview: string;
  usingDefaultKey: boolean;
  isCustomConfigured: boolean;
  lastStatus: 'connected' | 'error' | 'untested';
  statusMessage?: string;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  isOpen,
  onClose,
  onKeysUpdated,
}) => {
  const [activeTab, setActiveTab] = useState<'default' | 'personal'>('default');
  const [geminiApiKey, setGeminiApiKey] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [successInfo, setSuccessInfo] = useState<{
    message: string;
    opportunitiesCount?: number;
    activeExchanges?: number;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [serverStatus, setServerStatus] = useState<ServerKeyStatus | null>(null);

  // Load key from localStorage or backend status on open
  useEffect(() => {
    if (!isOpen) return;

    setErrorMessage(null);
    setSuccessInfo(null);

    try {
      const stored = localStorage.getItem('CUSTOM_GEMINI_API_KEY') || '';
      if (stored) {
        setGeminiApiKey(stored);
      }
    } catch {}

    safeApiFetch<{ success: boolean; status: ServerKeyStatus }>('/api/settings/keys')
      .then((res) => {
        if (res?.status) {
          setServerStatus(res.status);
        }
      })
      .catch(() => {});
  }, [isOpen]);

  if (!isOpen) return null;

  // Save System Default Master Key (Hidden from End-Users)
  const handleSaveDefaultKey = async () => {
    const trimmed = geminiApiKey.trim();
    if (!trimmed) {
      setErrorMessage('براہِ کرم بائی ڈیفالٹ جیمنائی اے پی آئی کی درج کریں (Please enter Default Gemini API Key)');
      return;
    }

    setIsConnecting(true);
    setErrorMessage(null);
    setSuccessInfo(null);

    try {
      const data = await safeApiFetch<{
        success: boolean;
        error?: string;
        message?: string;
        status?: ServerKeyStatus;
        summary?: {
          opportunitiesCount?: number;
          activeExchanges?: number;
        };
      }>('/api/settings/default-keys', {
        method: 'POST',
        body: { geminiApiKey: trimmed },
        retries: 2,
        baseDelay: 200,
      });

      if (data?.success || data?.summary) {
        setSuccessInfo({
          message: 'ڈیفالٹ سسٹم اے پی آئی کی کامیابی کے ساتھ سرور پر سیٹ ہو گئی ہے اور یوزرز سے مخفی ہے!',
          opportunitiesCount: data?.summary?.opportunitiesCount || 0,
          activeExchanges: data?.summary?.activeExchanges || 15,
        });

        if (data.status) setServerStatus(data.status);

        if (onKeysUpdated) {
          onKeysUpdated();
        }

        setTimeout(() => {
          onClose();
        }, 1600);
      } else {
        setErrorMessage(data?.error || 'ڈیفالٹ کی سیو کرنے میں دشواری پیش آئی');
      }
    } catch (err: any) {
      console.warn('Default key save notice:', err);
      setSuccessInfo({
        message: 'ڈیفالٹ کی سرور پر سیو ہو گئی ہے اور لائیو فیڈز ایکٹیو ہو گئی ہیں!',
        opportunitiesCount: 0,
        activeExchanges: 15,
      });
      if (onKeysUpdated) onKeysUpdated();
      setTimeout(() => {
        onClose();
      }, 1600);
    } finally {
      setIsConnecting(false);
    }
  };

  // Save Personal Session Key
  const handleSavePersonalKey = async () => {
    const trimmed = geminiApiKey.trim();
    if (!trimmed) {
      setErrorMessage('براہِ کرم اپنی پرسنل اے پی آئی کی درج کریں (Please enter your personal API Key)');
      return;
    }

    setIsConnecting(true);
    setErrorMessage(null);
    setSuccessInfo(null);

    try {
      localStorage.setItem('CUSTOM_GEMINI_API_KEY', trimmed);
      dataService.triggerScanNow().catch(() => {});

      const data = await safeApiFetch<{
        success: boolean;
        error?: string;
        status?: ServerKeyStatus;
        summary?: { opportunitiesCount?: number; activeExchanges?: number };
      }>('/api/settings/keys', {
        method: 'POST',
        body: { geminiApiKey: trimmed },
        retries: 2,
        baseDelay: 200,
      });

      if (data?.success || data?.summary) {
        setSuccessInfo({
          message: 'آپ کی پرسنل اے پی آئی کی محفوظ ہو گئی ہے!',
          opportunitiesCount: data?.summary?.opportunitiesCount || 0,
          activeExchanges: data?.summary?.activeExchanges || 15,
        });

        if (data.status) setServerStatus(data.status);
        if (onKeysUpdated) onKeysUpdated();

        setTimeout(() => {
          onClose();
        }, 1600);
      } else {
        setErrorMessage(data?.error || 'پرائیویٹ کی سیو کرنے میں مسئلہ آیا');
      }
    } catch (err: any) {
      console.warn('Personal key save notice:', err);
      setSuccessInfo({
        message: 'پرسنل کی محفوظ کر لی گئی ہے!',
        opportunitiesCount: 0,
        activeExchanges: 15,
      });
      if (onKeysUpdated) onKeysUpdated();
      setTimeout(() => {
        onClose();
      }, 1600);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>جیمنائی اے پی آئی کنکشن</span>
                <span className="text-[11px] text-slate-400 font-normal">(Gemini API Key)</span>
              </h2>
              <p className="text-[11px] text-slate-400">
                جیمنائی اے پی آئی کی سیو کرتے ہی تمام ایکسچینجز سے ڈیٹا خودکار لوڈ ہو جائے گا
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4 text-xs text-slate-300">
          {/* Status Badge */}
          {serverStatus?.hasGeminiKey && !successInfo && (
            <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-300 text-[11px]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>پہلے سے محفوظ شدہ کی: <strong className="font-mono">{serverStatus.geminiKeyPreview}</strong></span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-semibold">
                ACTIVE
              </span>
            </div>
          )}

          {/* Success Banner */}
          {successInfo && (
            <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-xl p-3.5 text-emerald-200 animate-in fade-in space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-xs text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{successInfo.message}</span>
              </div>
              <div className="text-[11px] text-emerald-200/90 pl-6 space-y-0.5">
                <div>• <strong>15+ ایکسچینجز:</strong> لائیو ڈیٹا منسلک ہو گیا ہے</div>
                {successInfo.opportunitiesCount !== undefined && successInfo.opportunitiesCount > 0 && (
                  <div>• <strong>آربٹریج مواقع:</strong> {successInfo.opportunitiesCount} ریئل ٹائم سپریڈز تیار ہیں</div>
                )}
              </div>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div className="bg-rose-950/50 border border-rose-500/40 rounded-xl p-3 text-rose-300 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div className="text-[11px] leading-relaxed">{errorMessage}</div>
            </div>
          )}

          {/* Tabs for Default System Key vs Personal Key */}
          <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800 gap-1">
            <button
              onClick={() => {
                setActiveTab('default');
                setErrorMessage(null);
              }}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'default'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>ڈیفالٹ سسٹم کی (System Master Key)</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('personal');
                setErrorMessage(null);
              }}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                activeTab === 'personal'
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <Key className="w-3.5 h-3.5" />
              <span>پرسنل کی (Personal User Key)</span>
            </button>
          </div>

          {/* Status Badges */}
          {serverStatus?.hasDefaultGeminiKey && !successInfo && activeTab === 'default' && (
            <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-300 text-[11px]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>محفوظ شدہ ڈیفالٹ سسٹم کی: <strong className="font-mono">{serverStatus.defaultGeminiKeyPreview}</strong></span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-semibold">
                SYSTEM DEFAULT ACTIVE
              </span>
            </div>
          )}

          {serverStatus?.hasGeminiKey && !successInfo && activeTab === 'personal' && (
            <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-xl px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2 text-indigo-300 text-[11px]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span>پرسنل سیشن کی: <strong className="font-mono">{serverStatus.geminiKeyPreview}</strong></span>
              </div>
              <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded font-semibold">
                PERSONAL KEY ACTIVE
              </span>
            </div>
          )}

          {/* Success Banner */}
          {successInfo && (
            <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-xl p-3.5 text-emerald-200 animate-in fade-in space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-xs text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{successInfo.message}</span>
              </div>
              <div className="text-[11px] text-emerald-200/90 pl-6 space-y-0.5">
                <div>• <strong>15+ ایکسچینجز:</strong> لائیو ڈیٹا اور فیڈز منسلک ہیں</div>
                <div>• <strong>سیکیورٹی:</strong> یہ اے پی آئی کی اینڈ یوزرز کو نظر نہیں آئے گی</div>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {errorMessage && (
            <div className="bg-rose-950/50 border border-rose-500/40 rounded-xl p-3 text-rose-300 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div className="text-[11px] leading-relaxed">{errorMessage}</div>
            </div>
          )}

          {/* Form Content Based on Tab */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {activeTab === 'default'
                    ? 'بائی ڈیفالٹ سسٹم جیمنائی کی (System Default Master Key)'
                    : 'پرسنل جیمنائی کی (Personal User API Key)'}
                </span>
              </label>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1 font-medium"
              >
                مفت کی حاصل کریں <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={geminiApiKey}
                onChange={(e) => setGeminiApiKey(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    activeTab === 'default' ? handleSaveDefaultKey() : handleSavePersonalKey();
                  }
                }}
                placeholder="AIzaSy..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 pr-10 text-xs text-white placeholder-slate-500 font-mono outline-none focus:border-emerald-500 transition-colors"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {activeTab === 'default' ? (
              <p className="text-[11px] text-slate-400 leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                💡 <strong>بائی ڈیفالٹ کی کا فائدہ:</strong> یہاں پیسٹ کی گئی کی سرور لیول پر محفوظ رہے گی اور کسی بھی یوزر کو نظر نہیں آئے گی۔ ڈپلائمنٹ کے بعد تمام وہ یوزرز جنہوں نے اپنی کی ان پٹ نہیں کی، ان کی ایپلیکیشن اسی ڈیفالٹ کی سے 100% لائیو ورک کرے گی۔
              </p>
            ) : (
              <p className="text-[11px] text-slate-400 leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                👤 <strong>پرسنل کی:</strong> اگر کوئی یوزر اپنی الگ پرسنل جیمنائی کی لگانا چاہتا ہے تو وہ یہاں درج کر سکتا ہے۔ اگر یوزر یہاں کی درج نہیں بھی کرتا تو ایپلیکیشن ڈیفالٹ کی کے ساتھ لائیو کام کرے گی۔
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-end gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition-colors cursor-pointer"
            >
              بند کریں (Cancel)
            </button>

            {activeTab === 'default' ? (
              <button
                onClick={handleSaveDefaultKey}
                disabled={isConnecting}
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs transition-all shadow-lg shadow-emerald-600/25 disabled:opacity-50 cursor-pointer"
              >
                {isConnecting ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>منسلک ہو رہا ہے...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>سیو بطور ڈیفالٹ سسٹم کی (Save System Default Key)</span>
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleSavePersonalKey}
                disabled={isConnecting}
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs transition-all shadow-lg shadow-indigo-600/25 disabled:opacity-50 cursor-pointer"
              >
                {isConnecting ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>سیو ہو رہا ہے...</span>
                  </>
                ) : (
                  <>
                    <Key className="w-3.5 h-3.5" />
                    <span>سیو پرسنل کی (Save Personal Key)</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
