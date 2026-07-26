"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type StoryCard = {
  title: string;
  subtitle: string;
  tag: string;
  image: string;
};

const UNSPLASH_PARAMS = "?q=80&w=800&h=1000&auto=format&fit=crop";

const STORY_CARDS: StoryCard[] = [
  {
    title: "The Spark",
    subtitle: "Where it all began",
    tag: "Origin",
    // Whiteboard ideation session
    image: `https://images.unsplash.com/photo-1504384308090-c894fdcc538d${UNSPLASH_PARAMS}`,
  },
  {
    title: "Founder Calls",
    subtitle: "100+ conversations",
    tag: "Research",
    // Founders in discussion over a laptop
    image: `https://images.unsplash.com/photo-1556761175-5973dc0f32e7${UNSPLASH_PARAMS}`,
  },
  {
    title: "One Platform",
    subtitle: "Chaos into clarity",
    tag: "Product",
    // Analytics dashboard on screen
    image: `https://images.unsplash.com/photo-1551288049-bebda4e38f71${UNSPLASH_PARAMS}`,
  },
  {
    title: "Raven AI",
    subtitle: "Intelligence built in",
    tag: "AI",
    // Abstract AI visual
    image: `https://images.unsplash.com/photo-1620712943543-bcc4688e7485${UNSPLASH_PARAMS}`,
  },
  {
    title: "First Partners",
    subtitle: "Early believers onboard",
    tag: "Community",
    // Team working together
    image: `https://images.unsplash.com/photo-1522071820081-009f0129c71c${UNSPLASH_PARAMS}`,
  },
  {
    title: "Going Live",
    subtitle: "Trusted by travel brands",
    tag: "Launch",
    // Trekkers in the mountains
    image: `https://images.unsplash.com/photo-1454496522488-7a8e488e8606${UNSPLASH_PARAMS}`,
  },
  {
    title: "What's Next",
    subtitle: "Building the road ahead",
    tag: "Vision",
    // Open road toward the horizon
    image: `https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b${UNSPLASH_PARAMS}`,
  },
];

type Layout = {
  width: number;
  height: number;
  stepX: number;
  stepY: number;
  rotate: number;
  radius: number;
};

const LAYOUTS: Record<"sm" | "md" | "lg", Layout> = {
  sm: { width: 208, height: 264, stepX: 66, stepY: 24, rotate: 7, radius: 24 },
  md: { width: 296, height: 372, stepX: 118, stepY: 42, rotate: 8, radius: 32 },
  lg: { width: 380, height: 476, stepX: 176, stepY: 58, rotate: 8, radius: 40 },
};

/** Depth scale by distance from the centred card, mirroring the reference arc. */
const DEPTH_SCALE = [1.06, 0.8, 0.75, 0.7];

/** Shortest signed distance around the loop so the arc always stays filled. */
function circularOffset(index: number, active: number, length: number) {
  let offset = index - active;
  const half = Math.floor(length / 2);
  if (offset > half) offset -= length;
  if (offset < -half) offset += length;
  return offset;
}

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function scaleFor(distance: number) {
  return DEPTH_SCALE[Math.min(distance, DEPTH_SCALE.length - 1)];
}

function useLayout(): Layout {
  const [layout, setLayout] = useState<Layout>(LAYOUTS.lg);

  useEffect(() => {
    const resolve = () => {
      const w = window.innerWidth;
      setLayout(w >= 1200 ? LAYOUTS.lg : w >= 810 ? LAYOUTS.md : LAYOUTS.sm);
    };
    resolve();
    window.addEventListener("resize", resolve);
    return () => window.removeEventListener("resize", resolve);
  }, []);

  return layout;
}

export default function StoryHeroSection() {
  const [active, setActive] = useState(3);
  const [paused, setPaused] = useState(false);
  const layout = useLayout();
  const dragStartX = useRef<number | null>(null);
  const hovering = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevActive = useRef(active);

  useEffect(() => {
    prevActive.current = active;
  }, [active]);

  const wrap = useCallback(
    (index: number) => wrapIndex(index, STORY_CARDS.length),
    []
  );

  const pauseBriefly = useCallback(() => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      resumeTimer.current = null;
      if (!hovering.current) setPaused(false);
    }, 5000);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => wrap(i + 1));
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused, wrap]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        pauseBriefly();
        setActive((i) => wrap(i - 1));
      }
      if (e.key === "ArrowRight") {
        pauseBriefly();
        setActive((i) => wrap(i + 1));
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [wrap, pauseBriefly]);

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const start = dragStartX.current;
    dragStartX.current = null;
    if (start === null) return;
    const delta = e.clientX - start;
    if (Math.abs(delta) < 50) return;
    pauseBriefly();
    setActive((i) => wrap(i + (delta < 0 ? 1 : -1)));
  };

  const goTo = (index: number) => {
    pauseBriefly();
    setActive(index);
  };

  const onCarouselEnter = () => {
    hovering.current = true;
    setPaused(true);
  };

  const onCarouselLeave = () => {
    hovering.current = false;
    if (!resumeTimer.current) setPaused(false);
  };

  const arcHeight = layout.height + layout.stepY * 3 + 80;

  return (
    <section className="relative overflow-hidden bg-black px-4 pb-16 pt-28 md:pb-24 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh]"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(13,43,31,0.85) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 md:text-sm"
        >
          Our Story
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-5xl lg:text-[3.5rem]"
        >
          Built for the ones who build journeys
        </motion.h1>
      </div>

      <div
        className="relative mx-auto -mt-2 flex w-full max-w-6xl touch-pan-y select-none items-center justify-center md:-mt-6"
        style={{ height: arcHeight, transform: "translateY(-48px)" }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => (dragStartX.current = null)}
        onMouseEnter={onCarouselEnter}
        onMouseLeave={onCarouselLeave}
      >
        {STORY_CARDS.map((card, index) => {
          const offset = circularOffset(index, active, STORY_CARDS.length);
          const prevOffset = circularOffset(
            index,
            prevActive.current,
            STORY_CARDS.length
          );
          const distance = Math.abs(offset);
          const isActive = offset === 0;
          const jumped =
            Math.abs(offset - prevOffset) > Math.floor(STORY_CARDS.length / 2);

          return (
            <motion.button
              key={card.title}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`${card.title} - ${card.subtitle}`}
              aria-current={isActive}
              className="absolute left-1/2 top-1/2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              style={{
                width: layout.width,
                height: layout.height,
                marginLeft: -layout.width / 2,
                marginTop: -layout.height / 2,
                borderRadius: layout.radius,
                zIndex: STORY_CARDS.length - distance,
              }}
              animate={{
                x: offset * layout.stepX,
                y: distance * layout.stepY,
                rotate: offset * layout.rotate,
                scale: scaleFor(distance),
                opacity: 1,
              }}
              transition={
                jumped
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 220, damping: 30 }
              }
            >
              <div
                className="group relative h-full w-full overflow-hidden bg-[#111] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                style={{ borderRadius: layout.radius }}
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 809px) 208px, (max-width: 1199px) 296px, 380px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  draggable={false}
                  priority={index < 3}
                />

                <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 bg-gradient-to-b from-black/55 to-transparent p-4 text-left md:p-6">
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-bold tracking-[-0.02em] text-white md:text-2xl">
                      {card.title}
                    </h3>
                    <p className="mt-1 truncate text-xs font-medium text-white/70 md:text-sm">
                      {card.subtitle}
                    </p>
                  </div>
                  <span className="shrink-0 whitespace-nowrap rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[10px] font-semibold tracking-[0.05em] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] backdrop-blur-md md:text-[11px]">
                    {card.tag}
                  </span>
                </div>

                {!isActive && (
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-black/35 transition-opacity"
                    style={{ borderRadius: layout.radius }}
                  />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="relative z-10 -mt-10 flex justify-center gap-2 md:-mt-14">
        {STORY_CARDS.map((card, index) => (
          <button
            key={card.title}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to ${card.title}`}
            aria-current={index === active}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === active ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
