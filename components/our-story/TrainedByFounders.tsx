"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/motion";
import { PipelineIllustration } from "@/components/our-story/illustrations";

const processCards = [
  {
    stage: "INPUT",
    title: "Ingest Feedback",
    desc: '"We keep losing track of WhatsApp inquiries and manual email threads."',
  },
  {
    stage: "PROCESS",
    title: "Architect Solutions",
    desc: "Designing a unified, automated inbox that brings all fragmented channels into one clear view.",
  },
  {
    stage: "DEPLOY",
    title: "Ship & Validate",
    desc: '"This is exactly what we needed. Our lead response time dropped by 80%."',
  },
];

function CountUp({
  end,
  suffix = "",
  duration = 1800,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const start = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(easeOut(progress) * end));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

const cardShell =
  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A1510] p-6 transition-colors duration-300 hover:border-emerald-400/30 hover:bg-[#0D1F14] md:p-7";

const badge =
  "inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.2em] text-emerald-400/80";

const nestedPanel =
  "rounded-xl border border-white/10 bg-black/40 p-4 md:p-5";

export default function TrainedByFounders() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-[11px] font-medium uppercase tracking-[0.35em] text-emerald-400"
        >
          CONTINUOUS EVOLUTION
        </motion.p>
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl"
        >
          Trained by <span className="text-emerald-400">Founders.</span>
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="font-dm-sans mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-gray-400"
        >
          We didn&apos;t build in a vacuum. Every algorithm, every workflow, and
          every UI decision was shaped by active travel agencies handling real
          volume.
        </motion.p>
      </div>

      <div className="mx-auto mt-14 max-w-5xl space-y-5">
        {/* Process row — 3 equal cards */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {processCards.map((card, i) => (
            <motion.div key={card.stage} variants={fadeInUp} className={cardShell}>
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="flex items-center justify-between gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10 font-mono text-sm font-semibold text-emerald-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={badge}>{card.stage}</span>
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">
                {card.title}
              </h3>
              <p className="font-dm-sans mt-3 flex-1 text-[13px] leading-relaxed text-gray-500">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Detail row — 2 equal cards, same shell */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          <motion.div variants={fadeInUp} className={cardShell}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <span className={badge}>Scalable Infrastructure</span>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-white md:text-xl">
              Conversations into Features
            </h3>
            <p className="font-dm-sans mt-3 text-[13px] leading-relaxed text-gray-500 md:text-sm">
              Every bottleneck described became a logic rule. We turned manual
              spreadsheet chaos into clean, automated background pipelines.
            </p>

            <div className="mt-auto flex items-center justify-center pt-5">
              <PipelineIllustration className="w-full max-w-md" />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className={cardShell}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <span className={badge}>Scalable Infrastructure</span>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-white md:text-xl">
              Workflows Built for Reality
            </h3>
            <p className="font-dm-sans mt-3 text-[13px] leading-relaxed text-gray-500 md:text-sm">
              We shadowed teams during peak season to build an architecture
              flexible enough to handle the unpredictable chaos of travel
              planning.
            </p>

            <div className="mt-auto space-y-3 pt-5">
              <div className="grid grid-cols-2 gap-3">
                <div className={nestedPanel}>
                  <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    <CountUp end={340} suffix="+" />
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gray-600">
                    Updates Shipped
                  </p>
                </div>
                <div className={nestedPanel}>
                  <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    <CountUp end={100} suffix="%" />
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gray-600">
                    Founder Led
                  </p>
                </div>
              </div>

              <div className={nestedPanel}>
                <p className="font-dm-sans text-[13px] leading-relaxed text-gray-300">
                  &ldquo;It adapts to how we operate, not the other way around.
                  Pure automation magic.&rdquo;
                </p>
                <p className="mt-3 text-[12px] text-gray-600">
                  — Sarah Jenkins, Boutique Travel Co.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
