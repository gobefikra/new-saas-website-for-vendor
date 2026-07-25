"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/motion";

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
  inView,
}: {
  end: number;
  suffix?: string;
  inView: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

const codeLines = [
  { text: "if (lead.source === 'whatsapp') {", className: "text-lime-400" },
  { text: "  await system.routeToAvailableAgent(lead);", className: "text-emerald-300" },
  { text: "}", className: "text-lime-400" },
];

export default function TrainedByFounders() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-black py-24 px-6">
      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase text-center mb-4"
      >
        CONTINUOUS EVOLUTION
      </motion.p>
      <motion.h2
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-center text-4xl md:text-5xl font-extrabold text-white"
      >
        Trained by <span className="text-lime-400">Founders.</span>
      </motion.h2>
      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-gray-400 text-base text-center mt-4 max-w-2xl mx-auto"
      >
        We didn&apos;t build in a vacuum. Every algorithm, every workflow, and
        every UI decision was shaped by active travel agencies handling real
        volume.
      </motion.p>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 max-w-6xl mx-auto"
      >
        {processCards.map((card) => (
          <motion.div
            key={card.stage}
            variants={fadeInUp}
            className="bg-[#0D1F14] border border-[#1A3A25] rounded-3xl p-6"
          >
            <div className="flex items-start justify-between">
              <div className="bg-[#0A2A18] rounded-xl p-2 w-10 h-10 flex items-center justify-center">
                <TrendingUp className="text-emerald-400 w-5 h-5" />
              </div>
              <span className="text-xs text-gray-500 font-semibold">
                {card.stage}
              </span>
            </div>
            <h3 className="font-bold text-white text-xl mt-4">{card.title}</h3>
            <p className="text-gray-400 text-sm mt-3">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-6xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-[#0D1F14] border border-[#1A3A25] rounded-3xl p-6"
        >
          <span className="bg-emerald-900/40 text-emerald-400 text-xs px-3 py-1 rounded-full">
            Scalable Infrastructure
          </span>
          <h3 className="font-bold text-white text-xl mt-4">
            Conversations into Features
          </h3>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            Every bottleneck described became a logic rule. We turned manual
            spreadsheet chaos into clean, automated background pipelines.
          </p>
          <div className="mt-6 bg-[#0A1A0F] rounded-2xl p-5 font-mono text-sm border border-[#1A3A25]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-500 text-xs ml-1">
                pipeline_logic_v2.ts
              </span>
            </div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {codeLines.map((line) => (
                <motion.p
                  key={line.text}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  className={`${line.className} leading-relaxed`}
                >
                  {line.text}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-[#0D1F14] border border-[#1A3A25] rounded-3xl p-6"
        >
          <span className="bg-emerald-900/40 text-emerald-400 text-xs px-3 py-1 rounded-full">
            Scalable Infrastructure
          </span>
          <h3 className="font-bold text-white text-xl mt-4">
            Workflows Built for Reality
          </h3>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            We shadowed teams during peak season to build an architecture
            flexible enough to handle the unpredictable chaos of travel
            planning.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-[#0A1A0F] border border-[#1A3A25] rounded-2xl p-5">
              <p className="text-3xl font-bold text-white">
                <CountUp end={340} suffix=" +" inView={inView} />
              </p>
              <p className="text-xs text-gray-500 mt-1 uppercase">
                Updates Shipped
              </p>
            </div>
            <div className="bg-[#0A1A0F] border border-[#1A3A25] rounded-2xl p-5">
              <p className="text-3xl font-bold text-white">
                <CountUp end={100} suffix=" %" inView={inView} />
              </p>
              <p className="text-xs text-gray-500 mt-1 uppercase">
                Founder Led
              </p>
            </div>
          </div>
          <div className="mt-4 bg-[#0A1A0F] border border-[#1A3A25] rounded-2xl p-5">
            <p className="text-emerald-400 text-lg mb-3">★★★★★</p>
            <p className="text-gray-300 text-sm">
              &ldquo;It adapts to how we operate, not the other way around. Pure
              automation magic.&rdquo;
            </p>
            <div className="flex items-center gap-2 mt-3">
              <span className="w-8 h-8 rounded-full bg-gray-600 shrink-0" />
              <span className="text-gray-500 text-xs">
                Sarah Jenkins, Boutique Travel Co.
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
