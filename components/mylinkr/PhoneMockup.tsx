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
        alt="iPhone frame"
        width={frameWidth}
        height={frameHeight}
        className="w-full h-auto relative z-10 pointer-events-none"
        priority={priority}
      />
      <div className="absolute inset-[8%_7%_9%_7%] overflow-hidden rounded-[2rem]">
        <Image
          src={screenSrc}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 256px, 288px"
          priority={priority}
        />
      </div>
    </div>
  );
}
