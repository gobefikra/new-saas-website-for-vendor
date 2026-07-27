"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CircleHelp } from "lucide-react";
import { fadeInUp } from "@/components/motion";
import Eyebrow from "@/components/ui/Eyebrow";
import FaqAccordion, { type Faq } from "@/components/ui/FaqAccordion";
import { PRICING_FAQS } from "@/lib/pricing-data";
import { brand } from "@/lib/brand-theme";

export default function PricingFAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-border-default bg-white px-4 py-16 md:px-8 md:py-20">
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
          <h2 className="section-title mt-5">
            Everything you want to know
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="mt-10"
        >
          <FaqAccordion faqs={PRICING_FAQS as Faq[]} />
        </motion.div>

        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
          className="font-sans mt-8 text-center text-sm"
          style={{ color: brand.subtext }}
        >
          Still have questions?{" "}
          <Link
            href="/contact"
            className="font-semibold hover:underline"
            style={{ color: brand.primary }}
          >
            Talk to our team
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
