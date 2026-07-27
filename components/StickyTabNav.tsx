"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export type TabId = "whatsapp" | "instagram" | "website";

const TABS: { id: TabId; label: string }[] = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "instagram", label: "Instagram" },
  { id: "website", label: "Website" },
];

const SECTION_IDS: TabId[] = ["whatsapp", "instagram", "website"];

const ACTIVE_GREEN = "#2D6A4F";
/** Approx secondary nav height for scroll offset calculations */
const NAV_HEIGHT = 60;
/**
 * Main navbar is h-16 (4rem) / md:h-[4.5rem].
 * Keep a small gap (~0.75rem) between main navbar and this secondary bar.
 */
const STICKY_TOP_CLASS = "top-[calc(4rem+0.75rem)] md:top-[calc(4.5rem+0.75rem)]";
const STICKY_TOP_PX = { mobile: 64 + 12, desktop: 72 + 12 };

type StickyTabNavProps = {
  /** Distance from viewport top used for section scroll sync */
  topOffset?: number;
  className?: string;
};

function getStickyTopPx() {
  if (typeof window === "undefined") return STICKY_TOP_PX.desktop;
  return window.matchMedia("(min-width: 768px)").matches
    ? STICKY_TOP_PX.desktop
    : STICKY_TOP_PX.mobile;
}

export default function StickyTabNav({
  topOffset,
  className = "",
}: StickyTabNavProps) {
  const [activeTab, setActiveTab] = useState<TabId>("whatsapp");
  const [pill, setPill] = useState({ width: 0, x: 0 });
  const [resolvedTop, setResolvedTop] = useState(
    topOffset ?? STICKY_TOP_PX.desktop
  );

  const navRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const clickScrolling = useRef(false);
  const ratiosRef = useRef<Record<TabId, number>>({
    whatsapp: 0,
    instagram: 0,
    website: 0,
  });

  useEffect(() => {
    if (topOffset != null) {
      setResolvedTop(topOffset);
      return;
    }
    const sync = () => setResolvedTop(getStickyTopPx());
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [topOffset]);

  const updatePill = useCallback(() => {
    const index = TABS.findIndex((t) => t.id === activeTab);
    const btn = tabRefs.current[index];
    const nav = navRef.current;
    if (!btn || !nav) return;

    const navBox = nav.getBoundingClientRect();
    const btnBox = btn.getBoundingClientRect();
    const pad = 6; // matches p-1.5
    const maxRight = navBox.width - pad;
    const rawX = btnBox.left - navBox.left;
    const rawW = btnBox.width;
    const x = Math.max(pad, Math.min(rawX, maxRight - rawW));
    const width = Math.min(rawW, maxRight - x);

    setPill({ width, x });
  }, [activeTab]);

  useLayoutEffect(() => {
    updatePill();
  }, [activeTab, updatePill]);

  useEffect(() => {
    const onResize = () => updatePill();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updatePill]);

  /* IntersectionObserver - two-way scroll sync */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id as TabId;
          if (SECTION_IDS.includes(id)) {
            ratiosRef.current[id] = entry.intersectionRatio;
          }
        });

        if (clickScrolling.current) return;

        const aboveHalf = SECTION_IDS.filter(
          (id) => ratiosRef.current[id] >= 0.5
        ).sort((a, b) => ratiosRef.current[b] - ratiosRef.current[a]);

        const next =
          aboveHalf[0] ??
          [...SECTION_IDS].sort(
            (a, b) => ratiosRef.current[b] - ratiosRef.current[a]
          )[0];

        if (ratiosRef.current[next] > 0) {
          setActiveTab(next);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: `-${resolvedTop + NAV_HEIGHT + 8}px 0px -45% 0px`,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [resolvedTop]);

  const scrollToSection = (id: TabId) => {
    const el = document.getElementById(id);
    if (!el) return;

    clickScrolling.current = true;
    setActiveTab(id);

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      resolvedTop -
      NAV_HEIGHT -
      12;

    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });

    window.setTimeout(() => {
      clickScrolling.current = false;
    }, 900);
  };

  return (
    <div
      className={`sticky z-40 flex justify-center px-3 py-0 sm:px-4 ${STICKY_TOP_CLASS} ${className}`}
    >
      <div
        ref={navRef}
        className="relative flex w-full items-center overflow-hidden rounded-full border border-border-default bg-white p-1.5 shadow-card sm:max-w-[380px]"
        role="tablist"
        aria-label="Integration sections"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-1.5 left-0 top-1.5 rounded-full transition-[transform,width] duration-300 ease-brand"
          style={{
            width: pill.width,
            transform: `translateX(${pill.x}px)`,
            backgroundColor: ACTIVE_GREEN,
          }}
        />

        {TABS.map((tab, index) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`relative z-10 flex-1 rounded-full px-4 py-2.5 text-[14px] transition-colors duration-300 sm:flex-none sm:px-7 sm:py-3 sm:text-[15px] ${
                isActive
                  ? "font-semibold text-white"
                  : "font-medium text-subtext hover:text-navy"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
