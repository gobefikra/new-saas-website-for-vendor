"use client";

import Image from "next/image";

export const MYLINKR_SCREENS = {
  hero: "/icons/mylinkr/screen-1.png",
  carousel: [
    "/icons/mylinkr/screen-1.png",
    "/icons/mylinkr/screen-2.png",
    "/icons/mylinkr/screen-3.png",
    "/icons/mylinkr/screen-4.png",
    "/icons/mylinkr/screen-5.png",
    "/icons/mylinkr/screen-1.png",
    "/icons/mylinkr/screen-2.png",
    "/icons/mylinkr/screen-3.png",
  ],
  previewApp: "/icons/mylinkr/screen-4.png",
  previewWebsite: "/icons/mylinkr/screen-2.png",
} as const;

type PhoneMockupProps = {
  screenSrc: string;
  className?: string;
  frameWidth?: number;
  frameHeight?: number;
  priority?: boolean;
  alt?: string;
};

/**
 * Real MyLinkr screen clipped inside the iPhone_17 frame bezels.
 */
export default function PhoneMockup({
  screenSrc,
  className = "w-64 md:w-72",
  frameWidth = 288,
  frameHeight = 580,
  priority = false,
  alt = "MyLinkr page preview",
}: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/icons/iPhone_17.png"
        alt=""
        width={frameWidth}
        height={frameHeight}
        className="relative z-0 h-auto w-full pointer-events-none select-none"
        priority={priority}
        aria-hidden
      />

      {/* Screen overlaid on the frame's glass area */}
      <div
        className="absolute z-10 overflow-hidden"
        style={{
          top: "2.1%",
          right: "5.1%",
          bottom: "2.1%",
          left: "5.1%",
          borderRadius: "12.5% / 6.2%",
        }}
      >
        <Image
          src={screenSrc}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 220px, 260px"
          priority={priority}
        />
      </div>
    </div>
  );
}
