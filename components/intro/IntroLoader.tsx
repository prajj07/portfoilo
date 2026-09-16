"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "pm-intro-seen";
const DURATION_MS = 2400;
const START = 99;

type IntroLoaderProps = {
  onComplete?: () => void;
};

/**
 * Zero-inspired first paint continuity:
 * matching field + large "99" paints immediately, counts down to 00,
 * then hands off to the page without a white flash. Once per session.
 *
 * Never removes #pre-loader-shell from the DOM before/during hydration —
 * visibility is toggled via html classes only.
 */
export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [count, setCount] = useState(START);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }

    if (seen || reduced) {
      const shell = document.getElementById("pre-loader-shell");
      if (shell) shell.style.display = "none";
      document.documentElement.classList.remove("intro-lock", "intro-handoff");
      document.documentElement.classList.add("intro-done");
      onComplete?.();
      return;
    }

    setVisible(true);
    document.documentElement.classList.add("intro-lock", "intro-handoff");
    document.documentElement.classList.remove("intro-done");
    const shell = document.getElementById("pre-loader-shell");
    if (shell) shell.style.display = "";

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION_MS);
      const eased =
        t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
      setCount(Math.round(START * (1 - eased)));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
        return;
      }

      setCount(0);
      setExiting(true);
      window.setTimeout(() => {
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          /* ignore */
        }
        document.documentElement.classList.remove("intro-lock", "intro-handoff");
        document.documentElement.classList.add("intro-done");
        setVisible(false);
        onComplete?.();
      }, 750);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("intro-lock");
    };
  }, [onComplete]);

  if (!visible) return null;

  const display = String(count).padStart(2, "0");

  return (
    <div
      className={`intro-loader${exiting ? " intro-loader--exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Loading ${START - count} of ${START}`}
    >
      <div className="intro-loader__gradient" aria-hidden />
      <div className="intro-loader__counter" aria-hidden>
        {display}
      </div>
      <p className="intro-loader__label">Prajwal M</p>
    </div>
  );
}
