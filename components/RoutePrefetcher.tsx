"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PREFETCH_ROUTES } from "@/lib/nav-routes";

/**
 * Warm the App Router cache for every main nav destination as soon as
 * the browser is idle, so navbar clicks usually hit an already-loaded route.
 */
export default function RoutePrefetcher() {
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;

    const prefetchAll = () => {
      if (cancelled) return;
      for (const href of PREFETCH_ROUTES) {
        try {
          router.prefetch(href);
        } catch {
          // ignore prefetch errors (offline / aborted)
        }
      }
    };

    // Prefetch immediately for the highest-traffic destinations, then the rest on idle
    const priority = ["/", "/pricing", "/contact", "/integrations"] as const;
    for (const href of priority) {
      try {
        router.prefetch(href);
      } catch {
        // ignore
      }
    }

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(prefetchAll, { timeout: 1800 });
    } else {
      timeoutId = setTimeout(prefetchAll, 400);
    }

    // Refresh prefetch when tab becomes visible again (dev / bfcache)
    const onVisible = () => {
      if (document.visibilityState === "visible") prefetchAll();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisible);
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [router]);

  return null;
}
