/** Lightweight brand illustrations for Our Story sections */

type IllustProps = {
  className?: string;
};

export function PipelineIllustration({ className = "" }: IllustProps) {
  return (
    <svg
      viewBox="0 0 440 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="cif-flow" x1="130" y1="110" x2="310" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="0.5" stopColor="#34D399" stopOpacity="0.85" />
          <stop offset="1" stopColor="#10B981" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="cif-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(220 108) rotate(90) scale(70 90)">
          <stop stopColor="#10B981" stopOpacity="0.35" />
          <stop offset="1" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cif-sheet" x1="36" y1="48" x2="120" y2="170" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A3A25" />
          <stop offset="1" stopColor="#0D1F14" />
        </linearGradient>
      </defs>

      {/* Soft stage glow */}
      <ellipse cx="220" cy="110" rx="90" ry="70" fill="url(#cif-glow)" />

      {/* —— LEFT: spreadsheet chaos —— */}
      <g transform="translate(18 42) rotate(-6 60 70)">
        <rect width="118" height="136" rx="14" fill="url(#cif-sheet)" stroke="#1F4A32" strokeWidth="1.25" />
        <rect x="14" y="16" width="54" height="8" rx="3" fill="#10B981" fillOpacity="0.35" />
        <rect x="14" y="36" width="90" height="6" rx="3" fill="#243F30" />
        <rect x="14" y="50" width="72" height="6" rx="3" fill="#243F30" />
        <rect x="14" y="64" width="84" height="6" rx="3" fill="#243F30" />
        <rect x="14" y="78" width="60" height="6" rx="3" fill="#243F30" />
        {/* Broken / crossed cells */}
        <rect x="14" y="98" width="40" height="22" rx="5" fill="#122018" stroke="#3F2A2A" strokeWidth="1" />
        <path d="M22 104l24 12M46 104L22 116" stroke="#EF4444" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="62" y="98" width="40" height="22" rx="5" fill="#122018" stroke="#1A3A25" strokeWidth="1" />
        <rect x="14" y="128" width="90" height="6" rx="3" fill="#243F30" opacity="0.55" />
      </g>

      {/* Chat bubbles floating off the sheet */}
      <g transform="translate(88 28)">
        <rect width="52" height="28" rx="10" fill="#0D2B1A" stroke="#10B981" strokeOpacity="0.45" strokeWidth="1.2" />
        <circle cx="16" cy="14" r="3" fill="#34D399" opacity="0.8" />
        <rect x="24" y="11" width="18" height="3" rx="1.5" fill="#1A4030" />
        <rect x="24" y="17" width="12" height="3" rx="1.5" fill="#1A4030" />
      </g>
      <g transform="translate(102 168)">
        <rect width="44" height="24" rx="9" fill="#0D2B1A" stroke="#10B981" strokeOpacity="0.3" strokeWidth="1" />
        <rect x="10" y="10" width="24" height="3" rx="1.5" fill="#1A4030" />
      </g>

      {/* —— CENTER: transform / logic node —— */}
      <path
        d="M148 110 H186"
        stroke="url(#cif-flow)"
        strokeWidth="2"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />
      <g transform="translate(198 78)">
        <rect width="44" height="64" rx="14" fill="#07140f" stroke="#34D399" strokeWidth="1.6" />
        <circle cx="22" cy="22" r="7" fill="#10B981" opacity="0.9" />
        <path d="M22 17v10M17 22h10" stroke="#052e16" strokeWidth="2" strokeLinecap="round" />
        <rect x="10" y="38" width="24" height="4" rx="2" fill="#1A3A25" />
        <rect x="12" y="46" width="20" height="4" rx="2" fill="#1A3A25" opacity="0.7" />
        <rect x="14" y="54" width="16" height="4" rx="2" fill="#1A3A25" opacity="0.45" />
      </g>
      <path
        d="M254 110 H292"
        stroke="url(#cif-flow)"
        strokeWidth="2"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />

      {/* —— RIGHT: clean automated pipeline —— */}
      <g transform="translate(300 48)">
        <rect width="120" height="124" rx="16" fill="#0A1510" stroke="#1A3A25" strokeWidth="1.25" />
        {/* Pipeline stages stacked cleanly */}
        {[
          { y: 18, labelW: 58 },
          { y: 52, labelW: 72 },
          { y: 86, labelW: 50 },
        ].map((row, i) => (
          <g key={row.y}>
            <circle cx="28" cy={row.y + 10} r="10" fill="#07140f" stroke="#34D399" strokeWidth="1.4" />
            <circle cx="28" cy={row.y + 10} r="4" fill={i === 1 ? "#34D399" : "#10B981"} />
            <rect x="46" y={row.y + 5} width={row.labelW} height="10" rx="5" fill="#122818" />
            {i < 2 && (
              <path
                d={`M28 ${row.y + 22} V${row.y + 40}`}
                stroke="#10B981"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                strokeDasharray="2 4"
              />
            )}
          </g>
        ))}
      </g>

      {/* Floating particles — motion cues */}
      <circle cx="168" cy="72" r="2.5" fill="#34D399" opacity="0.55" />
      <circle cx="276" cy="148" r="2" fill="#10B981" opacity="0.45" />
      <circle cx="190" cy="150" r="1.8" fill="#6EE7B7" opacity="0.4" />
    </svg>
  );
}

export function CompassIllustration({ className = "" }: IllustProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="120" cy="120" r="108" stroke="#10B981" strokeWidth="1.25" opacity="0.14" />
      <circle
        cx="120"
        cy="120"
        r="84"
        stroke="#10B981"
        strokeWidth="1.1"
        strokeDasharray="4 7"
        opacity="0.22"
      />
      <circle
        cx="120"
        cy="120"
        r="48"
        fill="rgba(16,185,129,0.04)"
        stroke="#10B981"
        strokeWidth="1.5"
        strokeOpacity="0.35"
      />
      <path d="M120 42 L138 120 L120 198 L102 120 Z" fill="#10B981" opacity="0.45" />
      <path d="M42 120 L120 102 L198 120 L120 138 Z" fill="#10B981" opacity="0.16" />
      <circle cx="120" cy="120" r="6" fill="#ECFDF5" opacity="0.4" />
      <text
        x="120"
        y="26"
        textAnchor="middle"
        fill="#10B981"
        fontSize="16"
        fontFamily="monospace"
        opacity="0.4"
      >
        N
      </text>
    </svg>
  );
}

/** Waypoints sit exactly on the trail path below, so nodes never float off the line. */
const TRAIL_STOPS = [
  { x: 48, y: 148 },
  { x: 132, y: 84 },
  { x: 216, y: 122 },
  { x: 300, y: 58 },
] as const;

const TRAIL_PATH =
  "M48 148 C82 148, 98 84, 132 84 C166 84, 182 122, 216 122 C250 122, 266 58, 300 58";

export function ValuesIllustration({ className = "" }: IllustProps) {
  return (
    <svg
      viewBox="0 0 348 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient
          id="values-trail"
          x1="48"
          y1="148"
          x2="300"
          y2="58"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#10B981" stopOpacity="0.5" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
      </defs>

      {/* soft echo of the trail for depth */}
      <path
        d={TRAIL_PATH}
        transform="translate(0 20)"
        stroke="#10B981"
        strokeOpacity="0.18"
        strokeWidth="2"
        strokeDasharray="4 9"
        strokeLinecap="round"
      />

      <path
        d={TRAIL_PATH}
        stroke="url(#values-trail)"
        strokeWidth="2.25"
        strokeLinecap="round"
      />

      {TRAIL_STOPS.map((stop, i) => {
        const isLast = i === TRAIL_STOPS.length - 1;
        const color = isLast ? "#34D399" : "#10B981";
        return (
          <g key={`${stop.x}-${stop.y}`}>
            <circle
              cx={stop.x}
              cy={stop.y}
              r={isLast ? 14 : 11}
              fill="#050a07"
              stroke={color}
              strokeWidth="1.5"
              strokeOpacity={isLast ? 1 : 0.6}
            />
            <circle
              cx={stop.x}
              cy={stop.y}
              r={isLast ? 5 : 3.5}
              fill={color}
              opacity={isLast ? 1 : 0.75}
            />
          </g>
        );
      })}
    </svg>
  );
}
