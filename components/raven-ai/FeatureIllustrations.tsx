"use client";

import type { ReactElement, ReactNode } from "react";
import { motion } from "framer-motion";

type IllusProps = {
  accent: string;
  className?: string;
};

/** Soft floating motion shared by all mini illustrations */
function Float({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3.6, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/** 01 — Inbox with stacked emails + ping */
export function IllusInbox({ accent, className }: IllusProps) {
  return (
    <Float className={className}>
      <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="ig01" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {/* Back cards */}
        <rect x="28" y="18" width="104" height="68" rx="10" fill="rgba(255,255,255,0.03)" stroke={accent} strokeOpacity="0.2" />
        <rect x="22" y="28" width="104" height="68" rx="10" fill="rgba(255,255,255,0.04)" stroke={accent} strokeOpacity="0.28" />
        {/* Front inbox */}
        <rect x="16" y="38" width="104" height="68" rx="10" fill="url(#ig01)" stroke={accent} strokeOpacity="0.55" />
        <path d="M16 52 L68 78 L120 52" fill="none" stroke={accent} strokeWidth="1.6" strokeOpacity="0.7" />
        {/* Lines */}
        <rect x="28" y="84" width="48" height="4" rx="2" fill={accent} fillOpacity="0.35" />
        <rect x="28" y="92" width="32" height="3" rx="1.5" fill={accent} fillOpacity="0.2" />
        {/* Notification ping */}
        <circle cx="112" cy="34" r="10" fill={accent} />
        <circle cx="112" cy="34" r="14" fill={accent} fillOpacity="0.2">
          <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.35;0.1;0.35" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="112" y="38" textAnchor="middle" fontSize="10" fontWeight="700" fill="#052e1a">
          3
        </text>
      </svg>
    </Float>
  );
}

/** 02 — Chat bubbles + gear pulse */
export function IllusChatAuto({ accent, className }: IllusProps) {
  return (
    <Float className={className} delay={0.2}>
      <svg viewBox="0 0 140 88" className="h-full w-full" aria-hidden>
        <rect x="8" y="14" width="72" height="28" rx="10" fill={`${accent}22`} stroke={accent} strokeOpacity="0.5" />
        <rect x="18" y="22" width="36" height="4" rx="2" fill={accent} fillOpacity="0.55" />
        <rect x="18" y="30" width="24" height="3" rx="1.5" fill={accent} fillOpacity="0.3" />
        <rect x="48" y="48" width="78" height="28" rx="10" fill="rgba(255,255,255,0.05)" stroke={accent} strokeOpacity="0.35" />
        <rect x="60" y="56" width="42" height="4" rx="2" fill={accent} fillOpacity="0.4" />
        <rect x="60" y="64" width="28" height="3" rx="1.5" fill={accent} fillOpacity="0.25" />
        <circle cx="118" cy="20" r="14" fill={`${accent}25`} stroke={accent} strokeOpacity="0.6" />
        <path
          d="M118 13.5a6.5 6.5 0 0 1 0 13M112.5 20a5.5 5.5 0 0 1 11 0"
          fill="none"
          stroke={accent}
          strokeWidth="1.5"
        />
        <circle cx="118" cy="20" r="2.2" fill={accent} />
      </svg>
    </Float>
  );
}

/** 03 — QR + scan beam */
export function IllusQrCapture({ accent, className }: IllusProps) {
  return (
    <Float className={className} delay={0.15}>
      <svg viewBox="0 0 140 88" className="h-full w-full" aria-hidden>
        <rect x="28" y="10" width="68" height="68" rx="10" fill={`${accent}12`} stroke={accent} strokeOpacity="0.45" />
        {/* QR blocks */}
        <rect x="38" y="20" width="16" height="16" rx="2" fill={accent} fillOpacity="0.7" />
        <rect x="70" y="20" width="16" height="16" rx="2" fill={accent} fillOpacity="0.7" />
        <rect x="38" y="52" width="16" height="16" rx="2" fill={accent} fillOpacity="0.7" />
        <rect x="58" y="40" width="8" height="8" rx="1" fill={accent} fillOpacity="0.55" />
        <rect x="70" y="40" width="8" height="8" rx="1" fill={accent} fillOpacity="0.4" />
        <rect x="82" y="52" width="8" height="8" rx="1" fill={accent} fillOpacity="0.5" />
        <rect x="70" y="64" width="8" height="8" rx="1" fill={accent} fillOpacity="0.35" />
        {/* Scan line */}
        <rect x="28" y="42" width="68" height="2" rx="1" fill={accent}>
          <animate attributeName="y" values="18;66;18" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.8s" repeatCount="indefinite" />
        </rect>
        <circle cx="116" cy="28" r="8" fill={accent} fillOpacity="0.2" stroke={accent} strokeOpacity="0.7" />
        <path d="M112 28h8M116 24v8" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </Float>
  );
}

/** 04 — Share / embed nodes */
export function IllusEmbed({ accent, className }: IllusProps) {
  return (
    <Float className={className} delay={0.1}>
      <svg viewBox="0 0 120 72" className="h-full w-full" aria-hidden>
        <line x1="36" y1="36" x2="60" y2="20" stroke={accent} strokeOpacity="0.35" strokeWidth="1.2" />
        <line x1="36" y1="36" x2="60" y2="52" stroke={accent} strokeOpacity="0.35" strokeWidth="1.2" />
        <line x1="60" y1="20" x2="90" y2="36" stroke={accent} strokeOpacity="0.35" strokeWidth="1.2" />
        <line x1="60" y1="52" x2="90" y2="36" stroke={accent} strokeOpacity="0.35" strokeWidth="1.2" />
        <circle cx="36" cy="36" r="10" fill={`${accent}30`} stroke={accent} strokeOpacity="0.7" />
        <circle cx="60" cy="20" r="8" fill={`${accent}22`} stroke={accent} strokeOpacity="0.55" />
        <circle cx="60" cy="52" r="8" fill={`${accent}22`} stroke={accent} strokeOpacity="0.55" />
        <circle cx="90" cy="36" r="11" fill={`${accent}35`} stroke={accent} strokeOpacity="0.8" />
        <path d="M86 36h8M90 32v8" stroke={accent} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </Float>
  );
}

/** 05 — Audience list rows */
export function IllusAudience({ accent, className }: IllusProps) {
  return (
    <Float className={className} delay={0.25}>
      <svg viewBox="0 0 120 72" className="h-full w-full" aria-hidden>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(12 ${10 + i * 20})`}>
            <rect width="96" height="16" rx="8" fill={`${accent}${i === 0 ? "28" : "14"}`} stroke={accent} strokeOpacity={i === 0 ? 0.55 : 0.28} />
            <circle cx="12" cy="8" r="5" fill={accent} fillOpacity={0.7 - i * 0.15} />
            <rect x="24" y="5" width={40 - i * 6} height="3" rx="1.5" fill={accent} fillOpacity={0.5 - i * 0.1} />
            <rect x="24" y="10" width={24 - i * 4} height="2" rx="1" fill={accent} fillOpacity="0.25" />
          </g>
        ))}
      </svg>
    </Float>
  );
}

/** 06 — Instant reply timer */
export function IllusInstantReply({ accent, className }: IllusProps) {
  return (
    <Float className={className} delay={0.05}>
      <svg viewBox="0 0 120 72" className="h-full w-full" aria-hidden>
        <circle cx="60" cy="36" r="26" fill={`${accent}15`} stroke={accent} strokeOpacity="0.35" strokeWidth="2" />
        <circle cx="60" cy="36" r="20" fill="none" stroke={accent} strokeOpacity="0.55" strokeWidth="3" strokeDasharray="80 45" strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" from="0 60 36" to="360 60 36" dur="6s" repeatCount="indefinite" />
        </circle>
        <text x="60" y="34" textAnchor="middle" fontSize="14" fontWeight="800" fill={accent}>
          10
        </text>
        <text x="60" y="46" textAnchor="middle" fontSize="7" fontWeight="600" fill={accent} fillOpacity="0.7">
          SEC
        </text>
        <path d="M92 18l6 2-2 6" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Float>
  );
}

/** 07 — Journey steps (wide) */
export function IllusJourney({ accent, className }: IllusProps) {
  return (
    <Float className={className} delay={0.2}>
      <svg viewBox="0 0 220 80" className="h-full w-full" aria-hidden>
        <path
          d="M24 40 H196"
          fill="none"
          stroke={accent}
          strokeOpacity="0.25"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        {[
          { x: 24, label: "Lead" },
          { x: 80, label: "AI" },
          { x: 136, label: "Nurture" },
          { x: 192, label: "Book" },
        ].map((step, i) => (
          <g key={step.label}>
            <circle cx={step.x} cy="40" r="14" fill={`${accent}${i === 3 ? "40" : "22"}`} stroke={accent} strokeOpacity={0.5 + i * 0.12} strokeWidth="1.5" />
            <text x={step.x} y="44" textAnchor="middle" fontSize="8" fontWeight="700" fill={accent}>
              {i + 1}
            </text>
            <text x={step.x} y="68" textAnchor="middle" fontSize="8" fontWeight="600" fill={accent} fillOpacity="0.65">
              {step.label}
            </text>
          </g>
        ))}
        <path d="M48 40h18" stroke={accent} strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#arrow07)" />
      </svg>
    </Float>
  );
}

/** 08 — Chat → booked (tall) */
export function IllusBooked({ accent, className }: IllusProps) {
  return (
    <Float className={className} delay={0.3}>
      <svg viewBox="0 0 140 160" className="h-full w-full" aria-hidden>
        {/* Chat stack */}
        <rect x="18" y="12" width="70" height="26" rx="10" fill={`${accent}25`} stroke={accent} strokeOpacity="0.5" />
        <rect x="28" y="20" width="38" height="4" rx="2" fill={accent} fillOpacity="0.55" />
        <rect x="28" y="28" width="24" height="3" rx="1.5" fill={accent} fillOpacity="0.3" />
        <rect x="48" y="46" width="74" height="26" rx="10" fill="rgba(255,255,255,0.04)" stroke={accent} strokeOpacity="0.3" />
        <rect x="60" y="54" width="40" height="4" rx="2" fill={accent} fillOpacity="0.35" />
        <rect x="60" y="62" width="28" height="3" rx="1.5" fill={accent} fillOpacity="0.2" />
        {/* Arrow */}
        <path d="M70 82v16" stroke={accent} strokeWidth="1.6" strokeOpacity="0.5" strokeDasharray="3 3" />
        <path d="M64 94l6 8 6-8" fill="none" stroke={accent} strokeWidth="1.6" strokeOpacity="0.7" strokeLinecap="round" />
        {/* Calendar booked card */}
        <rect x="30" y="108" width="80" height="42" rx="10" fill={`${accent}20`} stroke={accent} strokeOpacity="0.65" />
        <rect x="30" y="108" width="80" height="12" rx="10" fill={accent} fillOpacity="0.55" />
        <rect x="30" y="114" width="80" height="6" fill={accent} fillOpacity="0.55" />
        <circle cx="46" cy="134" r="5" fill={accent} />
        <path d="M43.5 134l1.8 1.8 3.5-3.8" fill="none" stroke="#052e1a" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="58" y="130" width="36" height="3.5" rx="1.5" fill={accent} fillOpacity="0.5" />
        <rect x="58" y="137" width="24" height="2.5" rx="1" fill={accent} fillOpacity="0.28" />
      </svg>
    </Float>
  );
}

/** 09 — Phone silhouette */
export function IllusMobile({ accent, className }: IllusProps) {
  return (
    <Float className={className} delay={0.12}>
      <svg viewBox="0 0 100 72" className="h-full w-full" aria-hidden>
        <rect x="32" y="4" width="36" height="64" rx="8" fill={`${accent}18`} stroke={accent} strokeOpacity="0.6" strokeWidth="1.5" />
        <rect x="38" y="12" width="24" height="40" rx="3" fill={`${accent}28`} />
        <rect x="44" y="8" width="12" height="2.5" rx="1" fill={accent} fillOpacity="0.45" />
        <circle cx="50" cy="60" r="3" fill={accent} fillOpacity="0.55" />
        {/* Signal dots */}
        <circle cx="78" cy="22" r="3" fill={accent} fillOpacity="0.7" />
        <circle cx="78" cy="34" r="3" fill={accent} fillOpacity="0.45" />
        <circle cx="78" cy="46" r="3" fill={accent} fillOpacity="0.25" />
        <path d="M68 22h6M68 34h6M68 46h6" stroke={accent} strokeOpacity="0.35" strokeWidth="1.2" />
      </svg>
    </Float>
  );
}

/** 10 — Conversion bars */
export function IllusConversion({ accent, className }: IllusProps) {
  return (
    <Float className={className} delay={0.18}>
      <svg viewBox="0 0 120 72" className="h-full w-full" aria-hidden>
        {[
          { x: 22, h: 22 },
          { x: 42, h: 34 },
          { x: 62, h: 28 },
          { x: 82, h: 48 },
        ].map((bar, i) => (
          <g key={bar.x}>
            <rect
              x={bar.x}
              y={58 - bar.h}
              width="12"
              height={bar.h}
              rx="3"
              fill={accent}
              fillOpacity={0.3 + i * 0.15}
            >
              <animate
                attributeName="height"
                values={`${bar.h * 0.7};${bar.h};${bar.h * 0.7}`}
                dur={`${2.4 + i * 0.3}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values={`${58 - bar.h * 0.7};${58 - bar.h};${58 - bar.h * 0.7}`}
                dur={`${2.4 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            </rect>
          </g>
        ))}
        <path d="M18 58h88" stroke={accent} strokeOpacity="0.25" strokeWidth="1.2" />
        <path d="M88 14l12 0 0 12" fill="none" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M88 26 L100 14" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </Float>
  );
}

const ILLUSTRATIONS: Record<string, (props: IllusProps) => ReactElement> = {
  "01": IllusInbox,
  "02": IllusChatAuto,
  "03": IllusQrCapture,
  "04": IllusEmbed,
  "05": IllusAudience,
  "06": IllusInstantReply,
  "07": IllusJourney,
  "08": IllusBooked,
  "09": IllusMobile,
  "10": IllusConversion,
};

export function FeatureIllustration({
  id,
  accent,
  tall,
  wide,
}: {
  id: string;
  accent: string;
  tall?: boolean;
  wide?: boolean;
}) {
  const Comp = ILLUSTRATIONS[id];
  if (!Comp) return null;

  if (tall && id === "01") {
    return (
      <Comp
        accent={accent}
        className="pointer-events-none absolute bottom-3 right-2 z-[1] h-[110px] w-[148px] opacity-90 sm:h-[128px] sm:w-[168px]"
      />
    );
  }

  if (tall && id === "08") {
    return (
      <Comp
        accent={accent}
        className="pointer-events-none absolute bottom-2 left-1/2 z-[1] h-[150px] w-[130px] -translate-x-1/2 opacity-90 sm:h-[168px] sm:w-[140px]"
      />
    );
  }

  if (wide) {
    return (
      <Comp
        accent={accent}
        className="pointer-events-none relative z-[1] mt-3 h-[64px] w-full max-w-[240px] opacity-90 sm:mt-0 sm:ml-auto sm:h-[72px] sm:w-[220px] sm:shrink-0"
      />
    );
  }

  return (
    <Comp
      accent={accent}
      className="pointer-events-none absolute bottom-2 right-2 z-[1] h-[64px] w-[100px] opacity-80 sm:h-[72px] sm:w-[112px]"
    />
  );
}
