"use client";

interface FilterTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NAVY = "#0D1B2A";

export default function FilterTabs({
  tabs,
  activeTab,
  onTabChange,
}: FilterTabsProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
            className="cursor-pointer rounded-full px-4 py-2 text-sm transition md:px-5"
            style={
              isActive
                ? { backgroundColor: "#E8F5E9", color: NAVY, fontWeight: 600 }
                : { color: "#6B7280", fontWeight: 500 }
            }
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
