"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  ChevronDown,
  Mail,
  Monitor,
  Rocket,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeInUp, staggerContainer } from "@/components/motion";

const featureCards = [
  {
    iconSrc: "/icons/Picture__5_.png",
    fallback: <Zap className="w-6 h-6 text-lime-accent" />,
    title: "Setup in days, not weeks",
    desc: "Fast implementation with zero downtime.",
    highlight: true,
  },
  {
    iconSrc: "/icons/Picture__4_.png",
    fallback: <Briefcase className="w-6 h-6 text-gray-700" />,
    title: "Built for modern travel businesses",
    desc: "Tailored workflows for agencies and operators.",
    highlight: false,
  },
  {
    iconSrc: "/icons/Picture__3_.png",
    fallback: <Rocket className="w-6 h-6 text-emerald-500" />,
    title: "Start capturing leads instantly",
    desc: "Never miss a customer inquiry again.",
    highlight: false,
  },
];

const connectCards = [
  {
    iconSrc: "/icons/Picture.png",
    fallback: <Monitor className="w-10 h-10 text-emerald-600" />,
    title: "Book Demo",
    desc: "Schedule a 1-on-1 walkthrough of the Befikra platform.",
    link: "Schedule Demo →",
    href: "/contact",
  },
  {
    iconSrc: "/icons/Picture__1_.png",
    fallback: (
      <Image
        src="/icons/whatsapp.png"
        alt=""
        width={40}
        height={40}
        className="w-10 h-10 object-contain"
      />
    ),
    title: "WhatsApp",
    desc: "Chat with our support and sales team instantly.",
    link: "Start a Chat →",
    href: "/contact",
  },
  {
    iconSrc: "/icons/Picture__2_.png",
    fallback: (
      <Image
        src="/icons/instagram.png"
        alt=""
        width={40}
        height={40}
        className="w-10 h-10 object-contain"
      />
    ),
    title: "Instagram",
    desc: "Follow our updates or slide into our DMs.",
    link: "Send Message →",
    href: "/contact",
  },
  {
    iconSrc: null,
    fallback: <Mail className="w-10 h-10 text-emerald-600" />,
    title: "Email",
    desc: "For detailed inquiries, partnerships, or support.",
    link: "Get in Touch →",
    href: "/contact",
  },
];

const helpCards = [
  {
    q: "1. How quickly can we get started with Befikra?",
    a: "Most businesses can get started within a few days. Our team helps you set up integrations, events, and workflows so you can begin capturing leads and bookings immediately.",
  },
  {
    q: "2. Does Befikra integrate with WhatsApp, Instagram, and websites?",
    a: "Yes. Befikra connects directly with WhatsApp, Instagram, and Befikra event pages. All inquiries, chats, and bookings are automatically captured and managed inside your CRM.",
  },
  {
    q: "3. Can Befikra help us increase bookings and conversions?",
    a: "Yes. With automation, AI-powered responses, and structured lead tracking, Befikra helps you respond faster, follow up automatically, and convert more inquiries into confirmed bookings.",
  },
  {
    q: "4. Do I need technical knowledge to use Befikra?",
    a: "No technical expertise is required. Befikra is designed to be simple and easy to use. Our team also provides onboarding support to help you get started smoothly.",
  },
  {
    q: "5. Is my business and customer data secure?",
    a: "Yes. Befikra uses secure infrastructure and follows best practices to protect your business and customer data at all times.",
  },
  {
    q: "6. Can I see a demo before getting started?",
    a: "Yes. You can book a free demo where our team will show how Befikra works and how it can help automate your leads, bookings, and customer communication.",
  },
];

const interestOptions = [
  "Select an option...",
  "Lead Management",
  "WhatsApp Integration",
  "Instagram Integration",
  "AI Features",
  "Booking Management",
  "Full Platform Demo",
];

function FeatureIcon({
  src,
  fallback,
}: {
  src: string;
  fallback: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
        {fallback}
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt=""
      width={40}
      height={40}
      className="w-10 h-10 rounded-xl object-contain shrink-0"
      onError={() => setFailed(true)}
    />
  );
}

function ConnectIcon({
  src,
  fallback,
}: {
  src: string | null;
  fallback: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return <div className="mb-4 flex justify-center">{fallback}</div>;
  }
  return (
    <div className="mb-4 flex justify-center">
      <Image
        src={src}
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

const inputClass =
  "bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 w-full text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition";
const labelClass = "text-sm font-medium text-gray-700 mb-1 block";

export default function ContactPage() {
  const connectRef = useRef(null);
  const helpRef = useRef(null);
  const connectInView = useInView(connectRef, { once: true, margin: "-60px" });
  const helpInView = useInView(helpRef, { once: true, margin: "-60px" });

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* Section 1 - Hero / Form */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="bg-emerald-50 border border-emerald-200 text-emerald-600 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-6"
            >
              Response within 24 hours
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-4"
            >
              Talk to Our Team and
              <br />
              Grow Your Travel
              <br />
              Business Faster
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gray-500 text-base mt-6 max-w-sm leading-relaxed"
            >
              Tell us about your business, and we&apos;ll show you how Befikra
              helps you capture leads, automate conversations, and convert
              inquiries into confirmed bookings - all from one unified platform.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="space-y-4 mt-10"
            >
              {featureCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeInUp}
                  className={`border rounded-2xl px-5 py-4 flex items-start gap-4 bg-white ${
                    card.highlight
                      ? "border-emerald-400"
                      : "border-gray-200"
                  }`}
                >
                  <FeatureIcon src={card.iconSrc} fallback={card.fallback} />
                  <div>
                    <p className="font-semibold text-gray-900">{card.title}</p>
                    <p className="text-gray-400 text-sm mt-0.5">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm"
          >
            <h2 className="font-bold text-2xl text-gray-900">Get in touch</h2>
            <p className="text-gray-400 text-sm mt-1 mb-6">
              Fill out the form and we&apos;ll be in touch shortly.
            </p>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Company Name</label>
                  <input
                    type="text"
                    placeholder="Email"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Job Title</label>
                <input
                  type="text"
                  placeholder="Marketing head, Sales Lead..."
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>I&apos;m interested in</label>
                <div className="relative">
                  <select className={`${inputClass} appearance-none pr-10`}>
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className={labelClass}>How can we help?</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about you, use case, requirements, or questions."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="button"
                className="w-full mt-2 bg-emerald-500 text-white rounded-full py-4 font-semibold text-base hover:bg-emerald-600 transition"
              >
                Send Message
              </button>

              <div className="flex items-center gap-2 mt-3">
                <ShieldCheck className="text-emerald-500 w-4 h-4 shrink-0" />
                <p className="text-gray-400 text-xs">
                  Your information is secure and will never be shared.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Other ways to connect */}
      <section ref={connectRef} className="bg-white py-20 px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          Other ways to connect
        </h2>
        <p className="text-gray-400 text-center mt-3 max-w-xl mx-auto">
          Choose the best way to reach us based on your needs and workflow.
        </p>

        <motion.div
          initial="hidden"
          animate={connectInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 max-w-5xl mx-auto"
        >
          {connectCards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <ConnectIcon src={card.iconSrc} fallback={card.fallback} />
              <h3 className="font-bold text-gray-900 text-xl">{card.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{card.desc}</p>
              <Link
                href={card.href}
                className="text-emerald-600 font-semibold text-sm mt-4 hover:text-emerald-700"
              >
                {card.link}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section 3 - Help and Support */}
      <section ref={helpRef} className="bg-white py-20 px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          Help and Support
        </h2>
        <p className="text-gray-400 text-center mt-3 max-w-lg mx-auto">
          Everything you need to know about getting started with Befikra.
        </p>

        <motion.div
          initial="hidden"
          animate={helpInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 max-w-5xl mx-auto"
        >
          {helpCards.map((card, i) => (
            <motion.div
              key={card.q}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.05,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-7"
            >
              <p className="font-semibold text-gray-900 text-base leading-snug">
                {card.q}
              </p>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {card.a}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
