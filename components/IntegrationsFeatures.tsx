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

const GREEN = "#2D6A4F";
const NAVY = "#0A1E3B";
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
      className="card-brand-static overflow-hidden"
      style={{ borderColor: DIVIDER }}
    >
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div
          className="flex shrink-0 flex-col justify-center border-b px-4 py-3 sm:px-6 sm:py-4 lg:w-[240px] lg:border-b-0 lg:border-r lg:px-8 lg:py-10 xl:w-[260px]"
          style={{ borderColor: DIVIDER }}
        >
          <p
            className="text-[16px] font-display font-semibold leading-snug sm:text-[18px] lg:text-[22px] lg:leading-tight"
            style={{ color: NAVY }}
          >
            Connect Your
          </p>
          <p
            className="text-[16px] font-display font-semibold leading-snug sm:text-[18px] lg:text-[22px] lg:leading-tight"
            style={{ color: GREEN }}
          >
            Business
          </p>
        </div>

        <div className="relative min-w-0 flex-1 overflow-hidden py-3 sm:py-4 lg:py-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-12" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-12" />

          <div className="integrations-marquee group/marquee flex">
            <div
              className={`integrations-marquee-track flex min-w-max items-start gap-6 px-4 sm:gap-10 sm:px-6 lg:gap-12 lg:px-8 ${
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
      className={`integrations-icon-enter group relative flex w-[68px] flex-col items-center gap-1 sm:w-[84px] sm:gap-2 lg:w-[92px] ${
        animateIn ? "integrations-icon-visible" : ""
      }`}
      style={{ transitionDelay: `${staggerIndex * 80}ms` }}
    >
      <div
        className="flex h-8 w-8 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.15] sm:h-11 sm:w-11 lg:h-12 lg:w-12"
        title={label}
      >
        <Logo className="h-7 w-7 sm:h-10 sm:w-10 lg:h-11 lg:w-11" id={`${platform.id}-${index}`} />
      </div>
      <span
        className="font-sans text-center text-[9px] font-medium leading-tight sm:text-[11px] lg:text-xs"
        style={{ color: BODY_GRAY }}
      >
        {label}
      </span>
      <span
        className="pointer-events-none absolute -top-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0A1E3B] px-2 py-0.5 text-[10px] font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:-top-9 sm:px-2.5 sm:py-1 sm:text-[11px]"
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
    iconBg: "#E8F3EE",
    iconColor: GREEN,
  },
  {
    id: "customers",
    title: "Delight Customers",
    description: "Personalize every interaction and build loyalty.",
    Icon: Users,
    iconBg: "#E8F3EE",
    iconColor: "#2D6A4F",
  },
  {
    id: "performance",
    title: "Improve Performance",
    description: "Real-time analytics to track, measure and improve.",
    Icon: BarChart3,
    iconBg: "#E8F3EE",
    iconColor: "#2D6A4F",
  },
  {
    id: "security",
    title: "Enterprise Security",
    description: "Your data is protected with industry-grade security.",
    Icon: Shield,
    iconBg: "#E8F3EE",
    iconColor: "#1F4D38",
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
          className="font-sans mt-1.5 text-sm leading-relaxed"
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
      className="w-full px-4 py-6 sm:px-8 sm:py-8 lg:px-16"
      style={{ backgroundColor: SECTION_WRAP_BG }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5">
        <IntegrationsStrip />
        <FeatureCardsStrip />
      </div>
    </section>
  );
}
