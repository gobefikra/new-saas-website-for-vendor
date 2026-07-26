/** Lightweight brand illustrations for Our Story sections */

type IllustProps = {
  className?: string;
};

export function SparkIllustration({ className = "" }: IllustProps) {
  return (
    <svg
      viewBox="0 0 420 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="spark-g" x1="60" y1="40" x2="360" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" stopOpacity="0.9" />
          <stop offset="1" stopColor="#10B981" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="spark-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(210 160) rotate(90) scale(140 120)">
          <stop stopColor="#10B981" stopOpacity="0.25" />
          <stop offset="1" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="210" cy="160" rx="150" ry="120" fill="url(#spark-glow)" />
      <rect x="90" y="70" width="240" height="170" rx="28" stroke="#1A3A25" strokeWidth="1.5" fill="#0A1510" />
      <rect x="112" y="98" width="120" height="10" rx="5" fill="#1A3A25" />
      <rect x="112" y="122" width="180" height="8" rx="4" fill="#122818" />
      <rect x="112" y="142" width="160" height="8" rx="4" fill="#122818" />
      <rect x="112" y="162" width="140" height="8" rx="4" fill="#122818" />
      <circle cx="290" cy="200" r="36" fill="url(#spark-g)" opacity="0.9" />
      <path d="M290 182v36M272 200h36" stroke="#052e16" strokeWidth="3" strokeLinecap="round" />
      <path d="M70 240c40-50 90-70 140-40s100 20 140-20" stroke="#10B981" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="6 8" />
      <circle cx="78" cy="108" r="4" fill="#10B981" opacity="0.7" />
      <circle cx="348" cy="88" r="3" fill="#10B981" opacity="0.6" />
      <circle cx="360" cy="210" r="5" fill="#10B981" opacity="0.45" />
    </svg>
  );
}

export function FoundersIllustration({ className = "" }: IllustProps) {
  return (
    <svg
      viewBox="0 0 420 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="found-g" x1="120" y1="80" x2="320" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
        <radialGradient id="found-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(210 180) rotate(90) scale(100)">
          <stop stopColor="#10B981" stopOpacity="0.35" />
          <stop offset="1" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="210" cy="180" r="100" fill="url(#found-glow)" />
      <circle cx="210" cy="180" r="72" stroke="#1A3A25" strokeWidth="1" strokeDasharray="4 6" opacity="0.7" />
      <circle cx="210" cy="180" r="40" fill="#0D2B1A" stroke="#10B981" strokeWidth="1.5" />
      <path d="M198 180l8 8 16-18" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {[
        [90, 90],
        [330, 90],
        [90, 270],
        [330, 270],
      ].map(([x, y], i) => (
        <g key={i}>
          <line
            x1="210"
            y1="180"
            x2={x}
            y2={y}
            stroke="#1A4030"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <circle cx={x} cy={y} r="22" fill="#0A1510" stroke="#10B981" strokeWidth="1.25" strokeOpacity="0.5" />
          <circle cx={x} cy={y} r="7" fill={i % 2 ? "#34D399" : "#10B981"} opacity="0.85" />
        </g>
      ))}
    </svg>
  );
}

export function PipelineIllustration({ className = "" }: IllustProps) {
  return (
    <svg
      viewBox="0 0 480 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="pipe-g" x1="40" y1="100" x2="440" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#10B981" stopOpacity="0.7" />
          <stop offset="1" stopColor="#10B981" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        d="M40 100 H440"
        stroke="url(#pipe-g)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[80, 240, 400].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="100" r="28" fill="#0A1510" stroke="#10B981" strokeWidth="1.5" />
          <circle cx={x} cy="100" r="10" fill={i === 1 ? "#34D399" : "#10B981"} opacity={i === 1 ? 1 : 0.55} />
          <rect x={x - 26} y="142" width="52" height="8" rx="4" fill="#1A3A25" />
        </g>
      ))}
      <path d="M120 100h88M272 100h88" stroke="#10B981" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="3 7" />
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

export function MountainMark({ className = "" }: IllustProps) {
  return (
    <svg
      viewBox="0 0 120 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M8 64 L40 18 L58 40 L78 12 L112 64 Z" fill="#0D2B1A" stroke="#1A3A25" strokeWidth="1.25" />
      <path d="M40 18 L48 30 L36 30 Z" fill="#10B981" opacity="0.7" />
      <path d="M78 12 L86 26 L72 26 Z" fill="#10B981" opacity="0.55" />
    </svg>
  );
}
