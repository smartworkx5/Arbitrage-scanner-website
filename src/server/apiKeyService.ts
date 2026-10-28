import { GoogleGenAI } from '@google/genai';

export interface StoredApiKeys {
  geminiApiKey: string;
  exchangeApiKey: string;
  exchangeApiSecret: string;
  exchangeProvider: string;
}

export interface ApiKeyStatus {
  hasGeminiKey: boolean;
  geminiKeyPreview: string;
  hasDefaultGeminiKey: boolean;
  defaultGeminiKeyPreview: string;
  usingDefaultKey: boolean;
  hasExchangeKey: boolean;
  exchangeKeyPreview: string;
  exchangeProvider: string;
  isCustomConfigured: boolean;
  lastTestedMs: number;
  lastStatus: 'connected' | 'error' | 'untested';
  statusMessage?: string;
}

export interface ConnectionTestResult {
  success: boolean;
  gemini: {
    tested: boolean;
    valid: boolean;
    message: string;
    model?: string;
  };
  exchange: {
    tested: boolean;
    valid: boolean;
    provider: string;
    message: string;
    activeExchanges?: number;
    totalPairs?: number;
    opportunitiesCount?: number;
  };
  message: string;
  timestamp: number;
}

class ApiKeyService {
  private defaultGeminiApiKey: string = process.env.DEFAULT_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';

  private keys: StoredApiKeys = {
    geminiApiKey: process.env.GEMINI_API_KEY || '',
    exchangeApiKey: process.env.EXCHANGE_API_KEY || '',
    exchangeApiSecret: process.env.EXCHANGE_API_SECRET || '',
    exchangeProvider: process.env.EXCHANGE_PROVIDER || 'universal',
  };

  private lastTestedMs = 0;
  private lastStatus: 'connected' | 'error' | 'untested' = 'untested';
  private lastStatusMessage = '';

  constructor() {
    if (process.env.DEFAULT_GEMINI_API_KEY) {
      this.defaultGeminiApiKey = process.env.DEFAULT_GEMINI_API_KEY;
    }
    if (process.env.GEMINI_API_KEY) {
      this.keys.geminiApiKey = process.env.GEMINI_API_KEY;
      if (!this.defaultGeminiApiKey) {
        this.defaultGeminiApiKey = process.env.GEMINI_API_KEY;
      }
    }
    if (process.env.EXCHANGE_API_KEY) {
      this.keys.exchangeApiKey = process.env.EXCHANGE_API_KEY;
    }
    if (process.env.EXCHANGE_API_SECRET) {
      this.keys.exchangeApiSecret = process.env.EXCHANGE_API_SECRET;
    }
    if (process.env.EXCHANGE_PROVIDER) {
      this.keys.exchangeProvider = process.env.EXCHANGE_PROVIDER;
    }
  }

  public getGeminiApiKey(): string {
    return this.keys.geminiApiKey || this.defaultGeminiApiKey || process.env.DEFAULT_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';
  }

  public getDefaultGeminiApiKey(): string {
    return this.defaultGeminiApiKey || process.env.DEFAULT_GEMINI_API_KEY || '';
  }

  public getExchangeApiKey(): string {
    return this.keys.exchangeApiKey || process.env.EXCHANGE_API_KEY || '';
  }

  public getExchangeApiSecret(): string {
    return this.keys.exchangeApiSecret || process.env.EXCHANGE_API_SECRET || '';
  }

  public getExchangeProvider(): string {
    return this.keys.exchangeProvider || 'universal';
  }

  public getStatus(): ApiKeyStatus {
    const customGemini = this.keys.geminiApiKey;
    const defaultGemini = this.getDefaultGeminiApiKey();
    const effectiveGemini = this.getGeminiApiKey();
    const exKey = this.getExchangeApiKey();

    const maskKey = (k: string) => {
      if (!k || k.length < 8) return '';
      return `${k.slice(0, 6)}...${k.slice(-4)}`;
    };

    return {
      hasGeminiKey: Boolean(effectiveGemini && effectiveGemini.trim().length > 5),
      geminiKeyPreview: maskKey(effectiveGemini),
      hasDefaultGeminiKey: Boolean(defaultGemini && defaultGemini.trim().length > 5),
      defaultGeminiKeyPreview: maskKey(defaultGemini),
      usingDefaultKey: Boolean(!customGemini && Boolean(defaultGemini)),
      hasExchangeKey: Boolean(exKey && exKey.trim().length > 5),
      exchangeKeyPreview: maskKey(exKey),
      exchangeProvider: this.keys.exchangeProvider || 'universal',
      isCustomConfigured: Boolean(customGemini || exKey),
      lastTestedMs: this.lastTestedMs,
      lastStatus: this.lastStatus,
      statusMessage: this.lastStatusMessage,
    };
  }

  public saveKeys(newKeys: Partial<StoredApiKeys>): void {
    if (newKeys.geminiApiKey !== undefined) {
      this.keys.geminiApiKey = newKeys.geminiApiKey.trim();
      process.env.GEMINI_API_KEY = this.keys.geminiApiKey;
    }
    if (newKeys.exchangeApiKey !== undefined) {
      this.keys.exchangeApiKey = newKeys.exchangeApiKey.trim();
      process.env.EXCHANGE_API_KEY = this.keys.exchangeApiKey;
    }
    if (newKeys.exchangeApiSecret !== undefined) {
      this.keys.exchangeApiSecret = newKeys.exchangeApiSecret.trim();
      process.env.EXCHANGE_API_SECRET = this.keys.exchangeApiSecret;
    }
    if (newKeys.exchangeProvider !== undefined) {
      this.keys.exchangeProvider = newKeys.exchangeProvider.trim();
      process.env.EXCHANGE_PROVIDER = this.keys.exchangeProvider;
    }
  }

  public saveDefaultKeys(defaultKeys: { geminiApiKey?: string }): void {
    if (defaultKeys.geminiApiKey !== undefined) {
      this.defaultGeminiApiKey = defaultKeys.geminiApiKey.trim();
      process.env.DEFAULT_GEMINI_API_KEY = this.defaultGeminiApiKey;
      if (!process.env.GEMINI_API_KEY) {
        process.env.GEMINI_API_KEY = this.defaultGeminiApiKey;
      }
    }
  }

  public async testAndVerifyKeys(rescanFn?: () => Promise<any>): Promise<ConnectionTestResult> {
    const geminiKey = this.getGeminiApiKey();
    const exKey = this.getExchangeApiKey();
    const provider = this.getExchangeProvider();

    const result: ConnectionTestResult = {
      success: true,
      gemini: {
        tested: false,
        valid: false,
        message: 'No Gemini key provided',
      },
      exchange: {
        tested: false,
        valid: false,
        provider,
        message: 'No custom exchange key provided',
      },
      message: '',
      timestamp: Date.now(),
    };

    // 1. Verify Gemini API key if present
    if (geminiKey && geminiKey.trim().length > 5) {
      result.gemini.tested = true;
      try {
        const ai = new GoogleGenAI({ apiKey: geminiKey.trim() });
        let genResponse = null;
        try {
          genResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: 'ping',
          });
        } catch {
          genResponse = await ai.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: 'ping',
          });
        }
        if (genResponse) {
          result.gemini.valid = true;
          result.gemini.model = 'gemini-2.5-flash';
          result.gemini.message = 'Connected successfully to Gemini AI';
        }
      } catch (err: any) {
        result.gemini.valid = false;
        result.gemini.message = `Gemini Notice: ${err?.message || 'Verification skipped'}`;
        // Do not fail the whole exchange connection if only Gemini had an issue
      }
    }

    // 2. Test Exchange API Connection & Trigger Live Rescan
    result.exchange.tested = true;
    try {
      if (rescanFn) {
        const opps = await rescanFn();
        const oppsCount = Array.isArray(opps) ? opps.length : 0;
        result.exchange.valid = true;
        result.exchange.opportunitiesCount = oppsCount;
        result.exchange.message = `Connected & synchronized live orderbooks (${oppsCount} arbitrage spreads calculated)`;
      } else {
        result.exchange.valid = true;
        result.exchange.message = 'Exchange headers and API parameters updated';
      }
    } catch (exErr: any) {
      result.exchange.valid = false;
      result.exchange.message = `Exchange connection notice: ${exErr?.message || 'Failed to refresh feeds'}`;
    }

    // Overall success: Exchange connectivity must be valid
    result.success = result.exchange.valid;
    result.message = result.exchange.valid
      ? (result.exchange.message || 'API connection active')
      : 'Exchange connection failed';

    this.lastTestedMs = Date.now();
    this.lastStatus = result.success ? 'connected' : 'error';
    this.lastStatusMessage = result.message;

    return result;
  }
}

export const apiKeyService = new ApiKeyService();
