"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/components/motion";
import DashboardMockup from "@/components/blog/BlogDetail/DashboardMockup";
import {
  BLOG_ARTICLE_MOUNTAINS,
  BLOG_ARTICLE_TREK_TEAM,
} from "@/lib/blog-images";

function AnimatedH2({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="text-2xl font-bold text-gray-900 mt-10 mb-4"
    >
      {children}
    </motion.h2>
  );
}

function AnimatedImage({
  src,
  alt,
  caption,
  fallback,
}: {
  src?: string;
  alt: string;
  caption?: string;
  fallback?: React.ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [imgError, setImgError] = useState(false);
  const showImage = src && !imgError;

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="my-8"
    >
      {showImage ? (
        <div className="relative h-64 w-full overflow-hidden rounded-2xl">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="800px"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        fallback ?? (
          <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300" />
        )
      )}
      {caption && (
        <figcaption className="text-gray-400 text-sm text-center mt-2 mb-6">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

function CalloutBox() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 my-8 border-l-4 border-l-emerald-500"
    >
      <p className="font-semibold text-emerald-700 text-sm mb-2">
        Automated Insight
      </p>
      <p className="text-gray-600 text-sm leading-relaxed">
        Agencies that switch from manual WhatsApp booking to automated CRM
        payment gateways report a{" "}
        <span className="text-emerald-600 font-semibold underline">
          42% increase
        </span>{" "}
        in conversion rates. Why? Because modern customers expect instant,
        frictionless checkout experiences, even for adventure travel.
      </p>
    </motion.div>
  );
}

export default function ArticleBody() {
  return (
    <article className="text-gray-600 text-base leading-relaxed">
      <p className="mb-5">
        Managing Himalayan logistics often feels like navigating a whiteout
        without a compass. Between coordinating transport, confirming lodge
        bookings, assigning guides, and managing anxious customer inquiries,
        trekking operators are stretched painfully thin.
      </p>
      <p className="mb-5">
        Most agencies respond to this growing complexity by doing the only thing
        they know how: hiring more administrative staff. But throwing more human
        hours at a structural problem rarely solves it. It just increases
        overhead and introduces more room for manual errors. What you actually
        need is a system that works tirelessly in the background.
      </p>

      <AnimatedImage
        src={BLOG_ARTICLE_MOUNTAINS}
        alt="Snow-capped mountain peaks"
        caption="Operators can monitor live bookings from anywhere, even basecamp."
      />

      <AnimatedH2>The Bottleneck of Manual Bookings</AnimatedH2>
      <p className="mb-5">
        Think about the lifecycle of a single trekker booking. It starts with an
        inquiry email or WhatsApp message. Your team responds manually, often
        copying and pasting pricing and itinerary PDFs. When the customer agrees,
        you send payment details, wait for a screenshot confirmation, manually log
        it into a Google Sheet, and finally email a receipt and a packing list.
      </p>
      <p className="mb-5">
        Now multiply that by 50 or 100 trekkers during the peak season. The
        administrative burden becomes monumental. Leads fall through the cracks
        because responses aren&apos;t fast enough. Payments are mistracked.
        Essential medical forms are forgotten. This isn&apos;t a failure of your
        team; it&apos;s a failure of your tooling.
      </p>

      <CalloutBox />

      <AnimatedH2>Streamlining the Trekking Experience</AnimatedH2>
      <p className="mb-5">
        This is where a dedicated platform like Befikra changes the game. By
        centralizing your operations, automation takes over the repetitive tasks.
        When an inquiry comes in via your website, the CRM instantly creates a
        lead profile and sends an automated, personalized response based on the
        trek they are interested in.
      </p>
      <p className="mb-5">
        Once they decide to book, they click a secure link, sign digital waivers,
        and pay online. The CRM automatically updates your master availability
        calendar, generates a receipt, and schedules an automated email drip
        sequence: a packing list 30 days out, fitness tips 14 days out, and final
        rendezvous details 3 days before the trek.
      </p>

      <AnimatedImage
        src={BLOG_ARTICLE_TREK_TEAM}
        alt="Trekkers hiking together on a mountain trail"
        fallback={
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl w-full h-64 p-6 flex items-center justify-center">
            <div className="w-full max-w-md">
              <DashboardMockup />
            </div>
          </div>
        }
      />

      <AnimatedH2>Empowering Your Ground Team</AnimatedH2>
      <p className="mb-5">
        Automation isn&apos;t just about the back office; it empowers your guides
        and ground staff. With the Befikra mobile view, guides have instant access
        to real-time rosters, dietary restrictions, and emergency contact
        information for every trekker in their group. No more printing out
        spreadsheets the night before a departure.
      </p>
      <p className="mb-5">
        In conclusion, automating your trekking business doesn&apos;t mean losing
        the personal touch. In fact, it&apos;s the exact opposite. By offloading
        the robotic tasks to software, you free up your team to do what they do
        best: building relationships, ensuring safety, and delivering
        unforgettable mountain experiences.
      </p>
    </article>
  );
}
