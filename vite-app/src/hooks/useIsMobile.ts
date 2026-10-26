import { useEffect, useState } from 'react';

/**
 * True when the viewport is narrower than Tailwind's `md` breakpoint
 * (768px). Used only to choose a phone layout (cards instead of wide
 * tables); it never changes data, sorting, filtering, or access logic.
 * Defaults to false on the server / before the first measurement so the
 * desktop layout renders first and then swaps in on phones.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const query = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return isMobile;
}
