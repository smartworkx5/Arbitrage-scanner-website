"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export type AppShot = { tab: string; desc: string; img: string };

/**
 * "Screenshots from the App" — one screenshot at a time inside a phone
 * frame, with arrows, dots, swipe and gentle autoplay (pauses on
 * hover / touch / focus). Replaces the old all-at-once 2x2 grid.
 */
export default function ScreenshotCarousel({ shots }: { shots: AppShot[] }) {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = shots.length;

  const go = useCallback(
    (dir: number) => {
      setIndex(([i]) => [(i + dir + count) % count, dir]);
    },
    [count]
  );
  const goTo = useCallback(
    (to: number) => {
      setIndex(([i]) => [to, to > i ? 1 : -1]);
    },
    []
  );

  // Autoplay — advance every 5s unless the visitor is interacting.
  useEffect(() => {
    if (paused || count < 2) return;
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [paused, go, count, index]);

  const onTouchStart = (e: React.TouchEvent) => {
    setPaused(true);
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current !== null) {
      const dx = e.changedTouches[0].clientX - touchX.current;
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    }
    touchX.current = null;
    setTimeout(() => setPaused(false), 4000);
  };

  const shot = shots[index];

  return (
    <div>
      {/* Section label — makes clear what these images are */}
      <div className="mb-4 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
          Screenshots from the App
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Swipe or use the arrows to look inside the live scanner
        </p>
      </div>

      <div
        className="relative mx-auto w-full max-w-[340px] select-none"
        role="region"
        aria-roledescription="carousel"
        aria-label="Screenshots from the app"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(-1);
          if (e.key === "ArrowRight") go(1);
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Phone frame */}
        <div className="relative rounded-[2.6rem] border border-slate-600/60 bg-slate-900 p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
          {/* side buttons */}
          <div aria-hidden className="absolute -right-[3px] top-28 h-16 w-[3px] rounded bg-slate-600/70" />
          <div aria-hidden className="absolute -left-[3px] top-24 h-10 w-[3px] rounded bg-slate-600/70" />
          <div aria-hidden className="absolute -left-[3px] top-36 h-10 w-[3px] rounded bg-slate-600/70" />

          <div className="relative overflow-hidden rounded-[2.1rem] bg-black">
            {/* camera dot */}
            <div aria-hidden className="absolute left-1/2 top-2 z-10 h-2 w-2 -translate-x-1/2 rounded-full bg-slate-700 ring-2 ring-black/60" />
            {/* Sliding track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {shots.map((s, i) => (
                <div key={s.tab} className="aspect-[800/1456] w-full shrink-0" aria-hidden={i !== index}>
                  {/* Only the visible slide renders an <img>: the other slides
                      are empty placeholders that keep the track geometry (and
                      the slide animation) intact. Rendering all four images
                      up front cost ~3 extra downloads (~400 KiB live) because
                      lazy loading still fires for track siblings near the
                      viewport. The incoming slide's image loads on demand
                      when its index becomes active. */}
                  {i === index && (
                    <Image
                      src={s.img}
                      alt={`${s.tab} — Cryptoscopia app screenshot`}
                      width={800}
                      height={1456}
                      sizes="(max-width: 640px) 85vw, 322px"
                      className="h-full w-full object-cover"
                      priority={i === 0}
                      loading={i === 0 ? "eager" : "lazy"}
                      draggable={false}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prev / next arrows */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous screenshot"
          className="absolute -left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-slate-600 bg-slate-900/90 text-white shadow-lg backdrop-blur transition hover:border-emerald-500 hover:bg-emerald-600 sm:-left-6"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next screenshot"
          className="absolute -right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-slate-600 bg-slate-900/90 text-white shadow-lg backdrop-blur transition hover:border-emerald-500 hover:bg-emerald-600 sm:-right-6"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Caption + dots */}
      <div className="mt-4 text-center" aria-live="polite">
        <p key={index} className="text-sm font-semibold text-white">
          {shot.tab}
          <span className="ml-2 text-xs font-normal text-slate-400">
            {index + 1} / {count}
          </span>
        </p>
        <p className="mx-auto mt-1 max-w-xs text-xs leading-snug text-slate-400">{shot.desc}</p>
        <div className="mt-3 flex items-center justify-center gap-2">
          {shots.map((s, i) => (
            <button
              key={s.tab}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show screenshot: ${s.tab}`}
              aria-current={i === index}
              className="flex h-6 w-6 cursor-pointer items-center justify-center"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-emerald-500" : "w-2 bg-slate-600 hover:bg-slate-400"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
