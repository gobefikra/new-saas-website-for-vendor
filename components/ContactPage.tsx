"use client";

import { useRef, type ReactNode } from "react";
import {
  Briefcase,
  ChevronDown,
  Mail,
  Monitor,
  Rocket,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import ScriptAccent from "@/components/ui/ScriptAccent";
import { fadeInUp, staggerContainer } from "@/components/motion";

const featureCards = [
  {
    icon: <Zap className="h-6 w-6 text-brand-green" />,
    title: "Setup in days, not weeks",
    desc: "Fast implementation with zero downtime.",
    highlight: true,
  },
  {
    icon: <Briefcase className="h-6 w-6 text-gray-700" />,
    title: "Built for modern travel businesses",
    desc: "Tailored workflows for agencies and operators.",
    highlight: false,
  },
  {
    icon: <Rocket className="h-6 w-6 text-brand-green" />,
    title: "Start capturing leads instantly",
    desc: "Never miss a customer inquiry again.",
    highlight: false,
  },
];

const connectCards = [
  {
    icon: <Monitor className="h-10 w-10 text-brand-green-dark" />,
    title: "Book Demo",
    desc: "Schedule a 1-on-1 walkthrough of the Befikra platform.",
    link: "Schedule Demo →",
    href: "/contact",
  },
  {
    icon: (
      <Image
        src="/icons/whatsapp.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
      />
    ),
    title: "WhatsApp",
    desc: "Chat with our support and sales team instantly.",
    link: "Start a Chat →",
    href: "mailto:support@befikra.com",
  },
  {
    icon: (
      <Image
        src="/icons/instagram.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
      />
    ),
    title: "Instagram",
    desc: "Follow our updates or slide into our DMs.",
    link: "Send Message →",
    href: "https://instagram.com/befikrapartner",
  },
  {
    icon: <Mail className="h-10 w-10 text-brand-green-dark" />,
    title: "Email",
    desc: "For detailed inquiries, partnerships, or support.",
    link: "Get in Touch →",
    href: "mailto:support@befikra.com",
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

function FeatureIcon({ icon }: { icon: ReactNode }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-off-white">
      {icon}
    </div>
  );
}

function ConnectIcon({ icon }: { icon: ReactNode }) {
  return <div className="mb-4 flex justify-center">{icon}</div>;
}

const inputClass = "input-brand";
const labelClass = "mb-1 block text-[13px] font-medium text-navy";

export default function ContactPage() {
  const connectRef = useRef(null);
  const helpRef = useRef(null);
  const connectInView = useInView(connectRef, { once: true, margin: "-60px" });
  const helpInView = useInView(helpRef, { once: true, margin: "-60px" });

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      {/* Section 1 - Hero / Form */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Eyebrow icon={<Zap className="h-3 w-3" strokeWidth={2.5} />}>
                Response within 24 hours
              </Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-navy md:text-5xl"
            >
              Talk to Our Team and
              <br />
              Grow Your Travel Business
            </motion.h1>
            <motion.div variants={fadeInUp} className="mt-3">
              <ScriptAccent size="lg">faster together</ScriptAccent>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-sm font-sans text-base leading-relaxed text-subtext"
            >
              Tell us about your business, and we&apos;ll show you how Befikra
              helps you capture leads, automate conversations, and convert
              inquiries into confirmed bookings - all from one unified platform.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="mt-10 space-y-4"
            >
              {featureCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeInUp}
                  className={`card-brand flex items-start gap-4 px-5 py-4 ${
                    card.highlight ? "border-brand-green" : ""
                  }`}
                >
                  <FeatureIcon icon={card.icon} />
                  <div>
                    <p className="font-semibold text-navy">{card.title}</p>
                    <p className="text-subtext text-sm mt-0.5">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="card-brand-static p-8"
          >
            <h2 className="font-display text-2xl font-semibold text-navy">Get in touch</h2>
            <p className="mb-6 mt-1 font-sans text-sm text-subtext">
              Fill out the form and we&apos;ll be in touch shortly.
            </p>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Company Name</label>
                  <input
                    type="text"
                    placeholder="Your company"
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
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-subtext pointer-events-none" />
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

              <Button type="button" variant="primary" size="lg" className="mt-2 w-full">
                Send Message
              </Button>

              <div className="flex items-center gap-2 mt-3">
                <ShieldCheck className="text-brand-green w-4 h-4 shrink-0" />
                <p className="text-subtext text-xs">
                  Your information is secure and will never be shared.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Other ways to connect */}
      <section ref={connectRef} className="bg-white py-20 px-6">
        <h2 className="text-4xl font-display font-semibold tracking-[-0.02em] text-navy text-center">
          Other ways to connect
        </h2>
        <p className="text-subtext text-center mt-3 max-w-xl mx-auto">
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
              className="card-brand-soft flex flex-col items-center p-8 text-center"
            >
              <ConnectIcon icon={card.icon} />
              <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-navy">
                {card.title}
              </h3>
              <p className="text-subtext text-sm mt-2">{card.desc}</p>
              <Link
                href={card.href}
                className="text-brand-green-dark font-semibold text-sm mt-4 hover:text-brand-green-dark"
                {...(card.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {card.link}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section 3 - Help and Support */}
      <section ref={helpRef} className="bg-white py-20 px-6">
        <h2 className="text-4xl font-display font-semibold tracking-[-0.02em] text-navy text-center">
          Help and Support
        </h2>
        <p className="text-subtext text-center mt-3 max-w-lg mx-auto">
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
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              className="card-brand bg-off-white p-7"
            >
              <p className="font-semibold text-navy text-base leading-snug">
                {card.q}
              </p>
              <p className="text-subtext text-sm mt-3 leading-relaxed">
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
