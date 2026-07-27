"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Clock,
  Shield,
  Users,
} from "lucide-react";
import {
  GmailLogo,
  InstagramLogo,
  MetaLogo,
  MyLinkrLogo,
  WebhooksLogo,
  WebsiteLogo,
  WhatsAppLogo,
} from "@/components/integrations/BrandLogos";

const GREEN = "#10B981";
const NAVY = "#0F172A";
const BODY_GRAY = "#6B7280";
const DIVIDER = "#E5E7EB";
const SECTION_WRAP_BG = "#F9FAFB";
const FEATURE_STRIP_BG = "#F9FAFB";

type Platform = {
  id: string;
  label: string;
  Logo: ComponentType<{ className?: string; id?: string }>;
};

const platforms: Platform[] = [
  { id: "mylinkr", label: "MyLinkr", Logo: MyLinkrLogo },
  { id: "website", label: "Website", Logo: WebsiteLogo },
  { id: "gmail", label: "Gmail", Logo: GmailLogo },
  { id: "webhooks", label: "Webhooks", Logo: WebhooksLogo },
  { id: "instagram", label: "Instagram", Logo: InstagramLogo },
  { id: "whatsapp", label: "WhatsApp Business", Logo: WhatsAppLogo },
  { id: "meta", label: "Meta Ads", Logo: MetaLogo },
];

function useInViewOnce(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

type MarqueeItem = { platform: Platform; index: number };

function buildMarqueeItems(): MarqueeItem[] {
  const row = platforms.map((platform, index) => ({ platform, index }));
  return [...row, ...row];
}

function IntegrationsStrip() {
  const { ref, inView } = useInViewOnce(0.2);
  const marqueeItems = buildMarqueeItems();

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border bg-white shadow-[0_4px_24px_rgba(13,27,42,0.06)]"
      style={{ borderColor: DIVIDER }}
    >
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div
          className="flex shrink-0 flex-col justify-center border-b px-8 py-8 lg:w-[240px] xl:w-[260px] lg:border-b-0 lg:border-r lg:py-10"
          style={{ borderColor: DIVIDER }}
        >
          <p
            className="text-[22px] font-extrabold leading-tight"
            style={{ color: NAVY }}
          >
            Connect Your
          </p>
          <p
            className="text-[22px] font-extrabold leading-tight"
            style={{ color: GREEN }}
          >
            Business
          </p>
        </div>

        <div className="relative min-w-0 flex-1 overflow-hidden py-6 lg:py-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

          <div className="integrations-marquee group/marquee flex">
            <div
              className={`integrations-marquee-track flex min-w-max items-start gap-10 px-6 sm:gap-12 sm:px-8 ${
                inView ? "integrations-marquee-active" : ""
              }`}
            >
              {marqueeItems.map((item, i) => (
                <PlatformIcon
                  key={`${item.platform.id}-${i}`}
                  platform={item.platform}
                  index={item.index}
                  animateIn={inView}
                  staggerIndex={item.index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformIcon({
  platform,
  index,
  animateIn,
  staggerIndex,
}: {
  platform: Platform;
  index: number;
  animateIn: boolean;
  staggerIndex: number;
}) {
  const { Logo, label } = platform;

  return (
    <div
      className={`integrations-icon-enter group relative flex w-[84px] flex-col items-center gap-2 sm:w-[92px] ${
        animateIn ? "integrations-icon-visible" : ""
      }`}
      style={{ transitionDelay: `${staggerIndex * 80}ms` }}
    >
      <div
        className="flex h-11 w-11 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.15] sm:h-12 sm:w-12"
        title={label}
      >
        <Logo className="h-10 w-10 sm:h-11 sm:w-11" id={`${platform.id}-${index}`} />
      </div>
      <span
        className="font-dm-sans text-center text-[11px] font-medium leading-tight sm:text-xs"
        style={{ color: BODY_GRAY }}
      >
        {label}
      </span>
      <span
        className="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0F172A] px-2.5 py-1 text-[11px] font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
        role="tooltip"
      >
        {label}
      </span>
    </div>
  );
}

type BenefitCard = {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  iconBg: string;
  iconColor: string;
};

const benefitCards: BenefitCard[] = [
  {
    id: "time",
    title: "Save Time",
    description: "Automate repetitive tasks and focus on what matters.",
    Icon: Clock,
    iconBg: "#ECFDF5",
    iconColor: GREEN,
  },
  {
    id: "customers",
    title: "Delight Customers",
    description: "Personalize every interaction and build loyalty.",
    Icon: Users,
    iconBg: "#F7FEE7",
    iconColor: "#10B981",
  },
  {
    id: "performance",
    title: "Improve Performance",
    description: "Real-time analytics to track, measure and improve.",
    Icon: BarChart3,
    iconBg: "#ECFDF5",
    iconColor: "#10B981",
  },
  {
    id: "security",
    title: "Enterprise Security",
    description: "Your data is protected with industry-grade security.",
    Icon: Shield,
    iconBg: "#F7FEE7",
    iconColor: "#059669",
  },
];

function FeatureCardsStrip() {
  const { ref, inView } = useInViewOnce(0.15);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl"
      style={{ backgroundColor: FEATURE_STRIP_BG }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {benefitCards.map((card, index) => (
          <BenefitCardItem
            key={card.id}
            card={card}
            index={index}
            inView={inView}
            isLast={index === benefitCards.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

function BenefitCardItem({
  card,
  index,
  inView,
  isLast,
}: {
  card: BenefitCard;
  index: number;
  inView: boolean;
  isLast: boolean;
}) {
  const { Icon, title, description, iconBg, iconColor } = card;

  return (
    <article
      className={`feature-card group flex gap-4 px-6 py-8 transition-all duration-300 ease-out sm:px-7 sm:py-9 ${
        !isLast ? "border-b sm:border-b-0 sm:border-r" : ""
      } ${inView ? "feature-card-visible" : ""}`}
      style={{
        borderColor: DIVIDER,
        transitionDelay: inView ? `${index * 100}ms` : "0ms",
      }}
    >
      <div
        className="icon-pulse-soft flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: iconBg }}
      >
        <Icon className="h-6 w-6" style={{ color: iconColor }} strokeWidth={2} />
      </div>
      <div className="min-w-0 pt-0.5">
        <h3
          className="feature-card-title relative inline-block text-base font-bold"
          style={{ color: NAVY }}
        >
          {title}
        </h3>
        <p
          className="font-dm-sans mt-1.5 text-sm leading-relaxed"
          style={{ color: BODY_GRAY }}
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default function IntegrationsFeatures() {
  return (
    <section
      className="w-full px-4 pb-4 sm:px-8 lg:px-16 lg:pb-8"
      style={{ backgroundColor: SECTION_WRAP_BG }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5">
        <IntegrationsStrip />
        <FeatureCardsStrip />
      </div>
    </section>
  );
}
