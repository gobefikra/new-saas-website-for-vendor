export default function DashboardMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden bg-[#0D2B1F] shadow-xl ${className}`}
    >
      <p className="text-xs text-gray-400 px-4 pt-3">
        USERS: LAST 7 DAYS USING MEDIAN ▾
      </p>
      <div className="grid grid-cols-2 gap-2 px-3 pt-2 pb-2">
        <div className="bg-[#0A1220] rounded-lg p-2 h-28">
          <svg viewBox="0 0 120 80" className="w-full h-full">
            {[40, 55, 45, 70, 50, 65, 48, 72].map((h, i) => (
              <rect
                key={i}
                x={8 + i * 14}
                y={80 - h}
                width="10"
                height={h}
                fill={i === 7 ? "#34D399" : "#10B981"}
                rx="1"
              />
            ))}
            <polyline
              points="8,35 22,28 36,40 50,22 64,32 78,18 92,30 106,12"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="bg-[#0A1220] rounded-lg p-2 h-28">
          <svg viewBox="0 0 120 80" className="w-full h-full">
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 L20,45 L40,55 L60,30 L80,40 L100,25 L120,35 L120,80 L0,80 Z"
              fill="url(#areaGrad)"
            />
            <path
              d="M0,60 L20,45 L40,55 L60,30 L80,40 L100,25 L120,35"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between px-4 pb-3 text-xs text-gray-300">
        <span>0.7s</span>
        <span>2.7Mpvs</span>
        <span>40.6%</span>
        <span>479K</span>
        <span>17min</span>
        <span>2pvs</span>
      </div>
    </div>
  );
}
