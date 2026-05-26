"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Pin,
  ShoppingBag,
  Twitter,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/motion";

const leftTags = [
  "Instant Replies",
  "AI Command Center",
  "Smart Insights",
  "Lead Qualification",
];

const rightTags = [
  "Revenue Insights",
  "Instagram Automation",
  "AI Itineraries",
  "WhatsApp Automation",
];

const bentoCard =
  "rounded-[20px] md:rounded-3xl border border-[#1a2e25] bg-[#0a1410]/90 p-4 md:p-5 flex flex-col gap-3 text-white";

export default function RavenAISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const topRef = useRef(null);
  const topInView = useInView(topRef, { once: true, margin: "-60px" });

  return (
    <section id="raven-ai-section" ref={ref} className="w-full overflow-hidden">
      {/* White intro — Meet Raven AI */}
      <div
        ref={topRef}
        className="bg-white py-16 md:py-20 px-4 text-center"
      >
        <motion.h2
          initial="hidden"
          animate={topInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 max-w-4xl mx-auto leading-tight"
        >
          Meet <span className="text-[#B6F059]">Raven AI</span> — Your
          CRM&apos;s Smartest Teammate
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={topInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-gray-900 text-base md:text-lg mt-6 max-w-3xl mx-auto leading-relaxed"
        >
          Automate conversations, qualify leads instantly, get intelligent
          business insights, and create quick itineraries with Raven AI
        </motion.p>
      </div>

      {/* Dark — Raven bird + floating tags */}
      <div className="bg-[#0D1A10] py-12 md:py-16 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(16, 185, 129, 0.12), transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative min-h-[300px] md:min-h-[380px] flex items-center justify-center">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <Image
              src="/icons/Raven-ai.png"
              alt="Raven AI"
              width={320}
              height={320}
              className="w-56 md:w-72 lg:w-80 h-auto mx-auto"
              priority
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="absolute inset-0 pointer-events-none hidden md:block"
          >
            {leftTags.map((tag, i) => (
              <motion.span
                key={tag}
                variants={fadeInUp}
                className="absolute border border-emerald-700/80 text-emerald-300 text-sm px-4 py-2 rounded-full whitespace-nowrap bg-[#0a1410]/40"
                style={{
                  left: `${4 + i * 2}%`,
                  top: `${18 + i * 14}%`,
                }}
              >
                {tag}
              </motion.span>
            ))}
            {rightTags.map((tag, i) => (
              <motion.span
                key={tag}
                variants={fadeInUp}
                className="absolute border border-emerald-700/80 text-emerald-300 text-sm px-4 py-2 rounded-full whitespace-nowrap bg-[#0a1410]/40"
                style={{
                  right: `${4 + i * 2}%`,
                  top: `${18 + i * 14}%`,
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mt-8 md:hidden relative z-20">
            {[...leftTags, ...rightTags].map((tag) => (
              <span
                key={tag}
                className="border border-emerald-700 text-emerald-300 text-xs px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Full bento grid section */}
      <div
        id="ai-features-section"
        className="bg-[#050d0a] py-12 md:py-16 px-4 md:px-6"
      >
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-min"
        >
          {/* Daily updates — wide */}
          <motion.div
            variants={fadeInUp}
            className={`${bentoCard} md:col-span-2 lg:col-span-2 min-h-[110px]`}
          >
            <Mail className="w-8 h-8 text-cyan-400 stroke-[1.5]" />
            <p className="text-sm md:text-base font-semibold leading-snug">
              Daily updates, straight to your inbox
            </p>
          </motion.div>

          {/* Automate conversations */}
          <motion.div
            variants={fadeInUp}
            className={`${bentoCard} md:col-span-1 lg:col-span-1`}
          >
            <Image
              src="/icons/settings.png"
              alt=""
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <p className="text-sm font-semibold leading-snug">
              Automate your lead conversations
            </p>
          </motion.div>

          {/* QR Code */}
          <motion.div
            variants={fadeInUp}
            className={`${bentoCard} md:col-span-1 lg:col-span-1 items-center`}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-[10px] text-white/80 font-medium">
              QR
            </div>
            <span className="text-xs text-pink-400/90">QR Code</span>
          </motion.div>

          {/* 24/7 — tall */}
          <motion.div
            variants={fadeInUp}
            className={`${bentoCard} md:col-span-1 lg:col-span-1 md:row-span-2 justify-center`}
          >
            <p className="text-lime-400 font-bold text-base md:text-lg leading-snug">
              24/7 lead capture automation
            </p>
          </motion.div>

          {/* Mobile app */}
          <motion.div
            variants={fadeInUp}
            className={`${bentoCard} md:col-span-1 lg:col-span-1 md:row-span-2`}
          >
            <div className="flex items-center gap-2 text-2xl">
              <span aria-hidden>🍎</span>
              <span aria-hidden>🤖</span>
            </div>
            <p className="text-sm font-semibold leading-snug">
              Mobile app for iOS and Android
            </p>
          </motion.div>

          {/* Beautifully simple AI sales */}
          <motion.div
            variants={fadeInUp}
            className={`${bentoCard} md:col-span-1 lg:col-span-1 justify-center`}
          >
            <p className="text-pink-500 font-bold italic text-sm leading-snug">
              Beautifully simple AI sales
            </p>
          </motion.div>

          {/* Custom AI — tall */}
          <motion.div
            variants={fadeInUp}
            className={`${bentoCard} md:col-span-1 lg:col-span-1 md:row-span-2`}
          >
            <Image
              src="/icons/custom-ai.png"
              alt=""
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <p className="text-sm font-semibold leading-snug">
              <span className="text-gradient-custom-ai font-bold">Custom AI</span>{" "}
              follow-up journeys
            </p>
          </motion.div>

          {/* Replies in under 10 seconds */}
          <motion.div
            variants={fadeInUp}
            className={`${bentoCard} md:col-span-1 lg:col-span-1`}
          >
            <Image
              src="/icons/msgs.png"
              alt=""
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <p className="text-sm font-semibold leading-snug">
              Replies in under 10 seconds
            </p>
          </motion.div>

          {/* Subscribers */}
          <motion.div
            variants={fadeInUp}
            className={`${bentoCard} md:col-span-1 lg:col-span-1 justify-center`}
          >
            <p className="text-sm font-semibold leading-snug">
              Subscribers and prospect list
            </p>
          </motion.div>

          {/* Embed content — wide */}
          <motion.div
            variants={fadeInUp}
            className={`${bentoCard} md:col-span-2 lg:col-span-2 md:row-span-1`}
          >
            <p className="text-sm md:text-base font-semibold">
              Embed your fav content
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Pin, label: "Pinterest" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: MessageCircle, label: "WhatsApp" },
                { Icon: ShoppingBag, label: "Shopify" },
              ].map(({ Icon, label }) => (
                <span
                  key={label}
                  className="w-8 h-8 rounded-full bg-[#1a2e25] border border-[#243d32] flex items-center justify-center text-gray-300"
                  title={label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </span>
              ))}
            </div>
          </motion.div>

          {/* Turn chats */}
          <motion.div
            variants={fadeInUp}
            className={`${bentoCard} md:col-span-1 lg:col-span-1 justify-center`}
          >
            <p className="text-sm font-semibold leading-snug">
              Turn chats into booked customers
            </p>
          </motion.div>

          {/* Conversion ready */}
          <motion.div
            variants={fadeInUp}
            className={`${bentoCard} md:col-span-1 lg:col-span-1 justify-center`}
          >
            <p className="text-sm md:text-base font-bold leading-snug">
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px #84CC16" }}
              >
                Conversion
              </span>{" "}
              <span className="text-white">ready</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
