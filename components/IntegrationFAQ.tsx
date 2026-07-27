"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CircleHelp } from "lucide-react";
import { fadeInUp } from "@/components/motion";
import Eyebrow from "@/components/ui/Eyebrow";
import FaqAccordion, { type Faq } from "@/components/ui/FaqAccordion";
import { brand } from "@/lib/brand-theme";

const faqs: Faq[] = [
  {
    question: "Which platforms can I connect with Befikra CRM?",
    answer:
      "You can connect WhatsApp, Instagram, and Befikra event and MyLinkr pages. All inquiries, bookings, and customer conversations from these platforms are automatically captured and managed inside one unified dashboard.",
  },
  {
    question: "Will all my WhatsApp and Instagram messages appear inside the CRM?",
    answer:
      "Yes. Once connected, every message from WhatsApp and Instagram is synced into your CRM in real time, so you never miss a conversation.",
  },
  {
    question: "Can customers book directly from Befikra event pages or MyLinkr?",
    answer:
      "Absolutely. Your MyLinkr page and Befikra event listings allow customers to view event details and complete bookings instantly.",
  },
  {
    question: "Do I need technical knowledge to connect integrations?",
    answer:
      "No technical knowledge required. Integrations are connected in a few clicks from your Befikra dashboard.",
  },
  {
    question: "Will the CRM track which platform my leads come from?",
    answer:
      "Yes. Every lead is tagged with its source - WhatsApp, Instagram, or website - so you always know what's working.",
  },
];

export default function IntegrationFAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full bg-white px-4 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center"
        >
          <Eyebrow icon={<CircleHelp className="h-3 w-3" strokeWidth={2.5} />}>
            FAQ
          </Eyebrow>
          <h2
            className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl lg:text-[2.75rem]"
            style={{ color: brand.navy }}
          >
            Common{" "}
            <span style={{ color: brand.primary }}>Questions</span>
            <br />
            About Integrations
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="mt-10"
        >
          <FaqAccordion faqs={faqs} />
        </motion.div>
      </div>
    </section>
  );
}
