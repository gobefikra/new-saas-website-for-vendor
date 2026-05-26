"use client";

import { useEffect, useRef, useState } from "react";

export type IntegrationTab = "whatsapp" | "instagram" | "website";

type IntegrationTabsProps = {
  whatsappRef: React.RefObject<HTMLElement | null>;
  instagramRef: React.RefObject<HTMLElement | null>;
  websiteRef: React.RefObject<HTMLElement | null>;
  zoneRef: React.RefObject<HTMLElement | null>;
};

const tabs: { id: IntegrationTab; label: string; sectionId: string }[] = [
  { id: "whatsapp", label: "WhatsApp", sectionId: "whatsapp-section" },
  { id: "instagram", label: "Instagram", sectionId: "instagram-section" },
  { id: "website", label: "Website", sectionId: "website-section" },
];

export default function IntegrationTabs({
  whatsappRef,
  instagramRef,
  websiteRef,
  zoneRef,
}: IntegrationTabsProps) {
  const [activeTab, setActiveTab] = useState<IntegrationTab>("whatsapp");
  const [showTabs, setShowTabs] = useState(false);
  const ratiosRef = useRef<Record<IntegrationTab, number>>({
    whatsapp: 0,
    instagram: 0,
    website: 0,
  });

  useEffect(() => {
    const sectionMap: { ref: React.RefObject<HTMLElement | null>; id: IntegrationTab }[] = [
      { ref: whatsappRef, id: "whatsapp" },
      { ref: instagramRef, id: "instagram" },
      { ref: websiteRef, id: "website" },
    ];

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id.replace("-section", "") as IntegrationTab;
          ratiosRef.current[id] = entry.intersectionRatio;
        });

        const visible = (Object.entries(ratiosRef.current) as [IntegrationTab, number][])
          .filter(([, ratio]) => ratio > 0)
          .sort((a, b) => b[1] - a[1]);

        if (visible.length > 0) {
          setActiveTab(visible[0][0]);
        }
      },
      { threshold: [0, 0.25, 0.4, 0.55, 0.7, 1] }
    );

    const zoneObserver = new IntersectionObserver(
      ([entry]) => setShowTabs(entry.isIntersecting),
      { threshold: 0.01, rootMargin: "-80px 0px 0px 0px" }
    );

    sectionMap.forEach(({ ref }) => {
      if (ref.current) sectionObserver.observe(ref.current);
    });
    if (zoneRef.current) zoneObserver.observe(zoneRef.current);

    return () => {
      sectionObserver.disconnect();
      zoneObserver.disconnect();
    };
  }, [whatsappRef, instagramRef, websiteRef, zoneRef]);

  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`sticky top-6 z-50 w-fit mx-auto mb-8 transition-opacity duration-200 ${
        showTabs ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!showTabs}
    >
      <div className="bg-white border border-gray-200 rounded-full px-2 py-2 shadow-md flex items-center gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => scrollTo(tab.sectionId)}
            className={`rounded-full px-6 py-2.5 text-sm transition ${
              activeTab === tab.id
                ? "bg-emerald-500 text-white font-semibold"
                : "text-emerald-600 font-medium hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
