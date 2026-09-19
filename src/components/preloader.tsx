"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { signalPageReady } from "./page-ready";

const MIN_MS = 2200;
const FAILSAFE_MS = 6000;
const HOLD_AT_100_MS = 400;

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [reduceMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const loadedRef = useRef(false);
  const finishedRef = useRef(false);

  useEffect(() => {
    const markLoaded = () => {
      loadedRef.current = true;
    };

    if (document.readyState === "complete") {
      markLoaded();
    } else {
      window.addEventListener("load", markLoaded, { once: true });
    }
    if (typeof document.fonts !== "undefined") {
      document.fonts.ready.then(markLoaded).catch(() => {});
    }
    const failsafe = window.setTimeout(markLoaded, FAILSAFE_MS);

    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 200 : MIN_MS;

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      // Hold at 100% briefly so the full bar reads, then reveal the page
      // and let entrance animations fire.
      window.setTimeout(() => {
        setProgress(1);
        setVisible(false);
        signalPageReady();
      }, HOLD_AT_100_MS);
    };

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      if (loadedRef.current && t >= 1) {
        finish();
        return;
      }
      // Ease toward 96% while assets are still loading; only the real
      // load event + minimum time unlocks 100%.
      const target = Math.min(eased, 0.96);
      setProgress((p) => p + (target - p) * 0.12);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(failsafe);
      window.removeEventListener("load", markLoaded);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = visible ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [visible]);

  const percent = Math.floor(progress * 100);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader-container"
          role="status"
          aria-label="Loading website"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: reduceMotion ? 0 : 0.5, ease: "easeOut" },
          }}
        >
          <div className="flex w-[min(420px,72vw)] flex-col gap-4">
            <div className="flex items-end justify-between">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent">
                Loading portfolio
              </p>
              <p className="font-mono text-sm tabular-nums">{percent}%</p>
            </div>
            <div
              className="h-[2px] w-full overflow-hidden rounded-full bg-border"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={percent}
              aria-label="Page loading progress"
            >
              <div
                className="h-full rounded-full bg-foreground"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
