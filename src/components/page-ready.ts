"use client";

import { useEffect, useState } from "react";

const READY_EVENT = "page:ready";
const READY_ATTR = "data-page-ready";

/** Fired by the Preloader once the loading bar hits 100%. */
export function signalPageReady() {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute(READY_ATTR, "true");
  window.dispatchEvent(new Event(READY_EVENT));
}

export function isPageReady() {
  return (
    typeof document !== "undefined" &&
    document.documentElement.hasAttribute(READY_ATTR)
  );
}

/**
 * Returns true once the initial loading screen has finished.
 * Entrance animations use this so nothing fires while the loader is up.
 */
export function usePageReady() {
  const [ready, setReady] = useState(isPageReady);

  useEffect(() => {
    if (ready) return;
    const onReady = () => setReady(true);
    window.addEventListener(READY_EVENT, onReady);
    return () => window.removeEventListener(READY_EVENT, onReady);
  }, [ready]);

  return ready;
}
