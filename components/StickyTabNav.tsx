"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

export type TabId = "whatsapp" | "instagram" | "website";

const TABS: { id: TabId; label: string }[] = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "instagram", label: "Instagram" },
  { id: "website", label: "Website" },
];

const SECTION_IDS: TabId[] = ["whatsapp", "instagram", "website"];

const ACTIVE_GREEN = "#25D366";
const NAV_HEIGHT = 52;

type StickyTabNavProps = {
  /** When set, nav only shows while this zone is in view */
  zoneRef?: RefObject<HTMLElement | null>;
  /** Distance from viewport top (clears fixed navbar) */
  topOffset?: number;
};

export default function StickyTabNav({
  zoneRef,
  topOffset = 72,
}: StickyTabNavProps) {
  const [activeTab, setActiveTab] = useState<TabId>("whatsapp");
  const [visible, setVisible] = useState(false);
  const [pill, setPill] = useState({ width: 0, x: 0 });

  const navRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const clickScrolling = useRef(false);
  const ratiosRef = useRef<Record<TabId, number>>({
    whatsapp: 0,
    instagram: 0,
    website: 0,
  });

  const updatePill = useCallback(() => {
    const index = TABS.findIndex((t) => t.id === activeTab);
    const btn = tabRefs.current[index];
    const nav = navRef.current;
    if (!btn || !nav) return;

    const navBox = nav.getBoundingClientRect();
    const btnBox = btn.getBoundingClientRect();
    setPill({
      width: btnBox.width,
      x: btnBox.left - navBox.left,
    });
  }, [activeTab]);

  useLayoutEffect(() => {
    updatePill();
  }, [activeTab, updatePill, visible]);

  useEffect(() => {
    const onResize = () => updatePill();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updatePill]);

  /* IntersectionObserver — two-way scroll sync */
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
        rootMargin: `-${topOffset + NAV_HEIGHT + 8}px 0px -45% 0px`,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [topOffset]);

  /* Show nav only while integration zone is on screen */
  useEffect(() => {
    if (!zoneRef?.current) {
      setVisible(true);
      return;
    }

    const zoneObserver = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: `-${topOffset}px 0px 0px 0px` }
    );

    zoneObserver.observe(zoneRef.current);
    return () => zoneObserver.disconnect();
  }, [zoneRef, topOffset]);

  const scrollToSection = (id: TabId) => {
    const el = document.getElementById(id);
    if (!el) return;

    clickScrolling.current = true;
    setActiveTab(id);

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      topOffset -
      NAV_HEIGHT -
      12;

    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });

    window.setTimeout(() => {
      clickScrolling.current = false;
    }, 900);
  };

  return (
    <div
      className={`fixed inset-x-0 z-[100] flex justify-center px-3 transition-all duration-300 sm:px-4 ${
        visible
          ? "pointer-events-none translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      }`}
      style={{ top: topOffset }}
      aria-hidden={!visible}
    >
      <div
        ref={navRef}
        className="pointer-events-auto relative flex w-full rounded-full border border-white/40 bg-white/75 p-1.5 shadow-[0_8px_32px_rgba(13,27,42,0.12)] backdrop-blur-[12px] sm:max-w-[360px]"
        style={{ WebkitBackdropFilter: "blur(12px)" }}
        role="tablist"
        aria-label="Integration sections"
      >
        {/* Sliding active pill */}
        <span
          aria-hidden
          className="absolute bottom-1.5 top-1.5 rounded-full transition-[transform,width] duration-300 ease-out"
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
              className={`relative z-10 flex-1 rounded-full px-3 py-2 text-[14px] transition-colors duration-300 sm:flex-none sm:px-6 sm:py-2.5 sm:text-[15px] ${
                isActive
                  ? "font-semibold text-white"
                  : "font-medium text-[#555555] hover:text-[#333333]"
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
