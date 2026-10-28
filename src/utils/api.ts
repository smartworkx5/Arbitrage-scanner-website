/**
 * Resilient client-side JSON fetcher with retry, exponential backoff,
 * HTML/Doctype detection and graceful error handling.
 */
export async function safeApiFetch<T>(
  url: string,
  options: {
    retries?: number;
    baseDelay?: number;
    headers?: Record<string, string>;
    method?: string;
    body?: any;
  } = {}
): Promise<T | null> {
  const { retries = 2, baseDelay = 500, headers = {}, method = 'GET', body } = options;

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const fetchOptions: RequestInit = {
        method,
        headers: {
          Accept: 'application/json',
          ...(body ? { 'Content-Type': 'application/json' } : {}),
          ...headers,
        },
        ...(body ? { body: typeof body === 'string' ? body : JSON.stringify(body) } : {}),
      };

      const res = await fetch(url, fetchOptions);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const text = await res.text();
      if (!text || text.trim().length === 0) {
        return null;
      }

      const trimmed = text.trim();
      // Guard against HTML error pages, text error pages, or SPA fallback index.html
      if (
        trimmed.startsWith('<') ||
        trimmed.toLowerCase().startsWith('<!doctype') ||
        (!trimmed.startsWith('{') && !trimmed.startsWith('['))
      ) {
        throw new Error(`Server returned non-JSON response: ${trimmed.slice(0, 80)}`);
      }

      try {
        return JSON.parse(trimmed) as T;
      } catch (parseErr: any) {
        throw new Error(`Invalid JSON response: ${parseErr?.message || 'Parse error'}`);
      }
    } catch (err: any) {
      lastError = err instanceof Error ? err : new Error(String(err));
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, baseDelay * Math.pow(1.6, attempt)));
      }
    }
  }

  // If retries exhausted, log warning rather than unhandled exception
  console.warn(`[safeApiFetch] Failed to fetch ${url} after ${retries + 1} attempts:`, lastError?.message);
  return null;
}
