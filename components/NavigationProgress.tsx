"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Instant top progress bar on internal navigations.
 * Keeps the current page visible (no blank flash) while the next route loads.
 */
export default function NavigationProgress() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      try {
        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) return;

        const nextPath = url.pathname;
        if (nextPath === pathname) return;

        setActive(true);
      } catch {
        // ignore invalid hrefs
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  if (!active) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[200] h-[3px] overflow-hidden"
      role="progressbar"
      aria-label="Loading page"
      aria-valuetext="Loading"
    >
      <div className="nav-progress-bar h-full w-full origin-left bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.65)]" />
    </div>
  );
}
