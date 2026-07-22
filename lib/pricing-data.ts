export type PlanId = "starter" | "creator" | "business" | "enterprise";
export type BillingCycle = "annual" | "monthly";
export type CellType = "check" | "dash" | "infinity" | "badge";
export type BadgeVariant = "default" | "green" | "amber" | "rust";

export type CellValue =
  | { type: "check" }
  | { type: "dash" }
  | { type: "infinity" }
  | { type: "badge"; label: string; variant?: BadgeVariant };

export type PlanPricing =
  | {
      kind: "free";
      amount: 0;
      strike: string;
    }
  | {
      kind: "paid";
      monthly: number;
      annual: number;
      annualYearTotal: string;
      monthlyStrike: number;
    }
  | {
      kind: "custom";
      headline: string;
      strike: string;
    };

export type FeeTagVariant = "default" | "green" | "amber" | "rust";

export type Plan = {
  id: PlanId;
  tag: string;
  name: string;
  nameEmphasis?: string;
  description: string;
  highlights: string[];
  featured: boolean;
  featuredBadge?: string;
  pricing: PlanPricing;
  feeTag: { text: string; variant: FeeTagVariant };
  cta: string;
};

export type PricingFeature = {
  name: string;
  description: string;
  values: Record<PlanId, CellValue>;
};

export type PricingCategory = {
  id: string;
  name: string;
  features: PricingFeature[];
};

const check = (): CellValue => ({ type: "check" });
const dash = (): CellValue => ({ type: "dash" });
const inf = (): CellValue => ({ type: "infinity" });
const badge = (label: string, variant: BadgeVariant = "default"): CellValue => ({
  type: "badge",
  label,
  variant,
});

export const PLANS: Plan[] = [
  {
    id: "starter",
    tag: "01 · STARTER",
    name: "Starter",
    description: "Perfect for solo operators testing the waters.",
    highlights: [
      "Free forever — no credit card",
      "Up to 50 bookings per month",
      "WhatsApp & website lead capture",
      "Basic CRM & payment links",
      "Community support",
    ],
    featured: false,
    pricing: { kind: "free", amount: 0, strike: "Free forever" },
    feeTag: { text: "5% platform fee", variant: "rust" },
    cta: "Get started",
  },
  {
    id: "creator",
    tag: "02 · CREATOR PRO",
    name: "Creator",
    nameEmphasis: "Pro",
    description: "Great for growing brands who want more AI and automation.",
    highlights: [
      "Unlimited bookings & events",
      "Raven AI assistant included",
      "Instagram + WhatsApp automation",
      "Verified organizer badge",
      "Priority email support",
    ],
    featured: true,
    featuredBadge: "Most popular",
    pricing: {
      kind: "paid",
      monthly: 4999,
      annual: 3999,
      annualYearTotal: "₹47,999/yr · save 20%",
      monthlyStrike: 4999,
    },
    feeTag: { text: "3% platform fee", variant: "amber" },
    cta: "Start Pro",
  },
  {
    id: "business",
    tag: "03 · BUSINESS AI",
    name: "Business",
    nameEmphasis: "AI",
    description: "Built for teams that need performance and scale.",
    highlights: [
      "Everything in Creator Pro",
      "Advanced Raven AI workflows",
      "Multi-user CRM & roles",
      "Revenue analytics dashboard",
      "Priority support (chat & email)",
    ],
    featured: false,
    pricing: {
      kind: "paid",
      monthly: 11999,
      annual: 9583,
      annualYearTotal: "₹1,15,000/yr · save 20%",
      monthlyStrike: 11999,
    },
    feeTag: { text: "1.5% platform fee", variant: "green" },
    cta: "Scale up",
  },
  {
    id: "enterprise",
    tag: "04 · ENTERPRISE",
    name: "Enterprise",
    description: "Custom setup for large operators and travel companies.",
    highlights: [
      "White-label platform",
      "Dedicated account manager",
      "Custom AI model training",
      "ERP & Salesforce integrations",
      "Negotiated fees (0.5–1%)",
    ],
    featured: false,
    pricing: {
      kind: "custom",
      headline: "Let's talk",
      strike: "Custom pricing",
    },
    feeTag: { text: "0.5–1% platform fee", variant: "green" },
    cta: "Talk to sales",
  },
];

export const PLAN_IDS: PlanId[] = ["starter", "creator", "business", "enterprise"];

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "capacity",
    name: "Capacity & Limits",
    features: [
      {
        name: "Active events",
        description: "How many events you can run at once",
        values: {
          starter: badge("3"),
          creator: badge("15", "green"),
          business: inf(),
          enterprise: inf(),
        },
      },
      {
        name: "Batches per event",
        description: "Multiple departure dates / time slots",
        values: {
          starter: badge("3"),
          creator: inf(),
          business: inf(),
          enterprise: inf(),
        },
      },
      {
        name: "Coupons per event",
        description: "Discount codes & promotional offers",
        values: {
          starter: badge("2"),
          creator: inf(),
          business: inf(),
          enterprise: inf(),
        },
      },
      {
        name: "Team members",
        description: "People who can log into your dashboard",
        values: {
          starter: badge("1"),
          creator: badge("10", "green"),
          business: inf(),
          enterprise: inf(),
        },
      },
      {
        name: "Lead storage",
        description: "How many leads stored in CRM",
        values: {
          starter: badge("100"),
          creator: badge("5,000", "green"),
          business: inf(),
          enterprise: inf(),
        },
      },
      {
        name: "International events",
        description: "Host events outside India",
        values: {
          starter: dash(),
          creator: check(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Platform fee per booking",
        description: "Deducted from each transaction",
        values: {
          starter: badge("5%", "rust"),
          creator: badge("3%", "amber"),
          business: badge("1.5%", "green"),
          enterprise: badge("0.5–1%", "green"),
        },
      },
    ],
  },
  {
    id: "raven-ai",
    name: "Raven AI Suite",
    features: [
      {
        name: "Raven AI Command Center",
        description: "Type a prompt, Raven executes the task",
        values: {
          starter: dash(),
          creator: badge("500 credits/mo", "green"),
          business: badge("5,000 credits/mo", "green"),
          enterprise: badge("Custom pool", "green"),
        },
      },
      {
        name: "AI content generation",
        description: "Event descriptions, social posts, captions",
        values: {
          starter: dash(),
          creator: check(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "AI daily insights summary",
        description: "Auto-generated performance updates",
        values: {
          starter: dash(),
          creator: badge("Basic"),
          business: badge("Advanced", "green"),
          enterprise: badge("Custom", "green"),
        },
      },
      {
        name: "AI lead qualification",
        description: "Auto-tag Hot / Warm / Cold leads",
        values: {
          starter: dash(),
          creator: badge("Basic tagging"),
          business: badge("Quality + Emotional + Engagement scores", "green"),
          enterprise: badge("Custom-trained", "green"),
        },
      },
      {
        name: "AI Itinerary Generator",
        description: "Customize Your Event — AI builds trip plans",
        values: {
          starter: dash(),
          creator: dash(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Revenue AI & forecasting",
        description: "Predict revenue, optimize pricing, detect anomalies",
        values: {
          starter: dash(),
          creator: dash(),
          business: check(),
          enterprise: badge("Custom", "green"),
        },
      },
      {
        name: "AI auto-replies (WA + IG)",
        description: "Replies instantly, qualifies leads automatically",
        values: {
          starter: dash(),
          creator: dash(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "AI analytics query",
        description: "Ask Raven questions about your data in plain English",
        values: {
          starter: dash(),
          creator: dash(),
          business: check(),
          enterprise: check(),
        },
      },
    ],
  },
  {
    id: "communication",
    name: "Communication & Integrations",
    features: [
      {
        name: "UniBox unified inbox",
        description: "All messages in one place",
        values: {
          starter: dash(),
          creator: badge("24-hr window"),
          business: badge("Full access", "green"),
          enterprise: badge("Full access", "green"),
        },
      },
      {
        name: "WhatsApp Business integration",
        description: "Capture & reply to WA inquiries",
        values: {
          starter: dash(),
          creator: check(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Instagram Business integration",
        description: "Capture DMs & comments as leads",
        values: {
          starter: dash(),
          creator: check(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Email integration (SMTP)",
        description: "Send from your own email domain",
        values: {
          starter: dash(),
          creator: check(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Heads-Up mail templates",
        description: "Pre-event briefing emails",
        values: {
          starter: dash(),
          creator: badge("Predefined"),
          business: badge("Custom", "green"),
          enterprise: badge("Custom", "green"),
        },
      },
      {
        name: "Broadcast messaging",
        description: "Send batch updates to all guests",
        values: {
          starter: dash(),
          creator: badge("Limited"),
          business: inf(),
          enterprise: inf(),
        },
      },
    ],
  },
  {
    id: "crm",
    name: "CRM & Lead Management",
    features: [
      {
        name: "Lead pipeline with custom stages",
        description: "Track leads through your sales funnel",
        values: {
          starter: badge("Basic"),
          creator: check(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Lead segmentation",
        description: "Filter & organize by stage, source, value",
        values: {
          starter: dash(),
          creator: badge("Hot/Warm/Cold"),
          business: badge("Advanced + custom", "green"),
          enterprise: badge("Advanced + custom", "green"),
        },
      },
      {
        name: "Source tracking",
        description: "Know which channel each lead came from",
        values: {
          starter: dash(),
          creator: check(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Auto-assign rules",
        description: "Distribute leads to team automatically",
        values: {
          starter: dash(),
          creator: dash(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Missed-checkout recovery",
        description: "Re-engage users who abandoned booking",
        values: {
          starter: dash(),
          creator: badge("Manual"),
          business: badge("Automated", "green"),
          enterprise: badge("Automated", "green"),
        },
      },
    ],
  },
  {
    id: "operations",
    name: "Operations & Logistics",
    features: [
      {
        name: "Manual booking entry",
        description: "Record offline bookings",
        values: {
          starter: check(),
          creator: check(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Bulk batch creation",
        description: "Generate recurring batches automatically",
        values: {
          starter: dash(),
          creator: check(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Pickup point management",
        description: "Manage multi-location pickups",
        values: {
          starter: dash(),
          creator: badge("10 points"),
          business: inf(),
          enterprise: inf(),
        },
      },
      {
        name: "Live monitoring (Admin/Finance)",
        description: "Real-time batch tracking",
        values: {
          starter: dash(),
          creator: dash(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Vendor expense tracking",
        description: "Log vendor costs with GST",
        values: {
          starter: dash(),
          creator: dash(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Full Operations module",
        description: "Settlements, refunds, financial breakdowns",
        values: {
          starter: dash(),
          creator: dash(),
          business: check(),
          enterprise: check(),
        },
      },
    ],
  },
  {
    id: "automation",
    name: "Automation",
    features: [
      {
        name: "Birthday email automation",
        description: "Auto-send birthday wishes to customers",
        values: {
          starter: dash(),
          creator: check(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Post-event feedback emails",
        description: "Auto-collect reviews after each trip",
        values: {
          starter: dash(),
          creator: check(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Custom automation workflows",
        description: "Build your own multi-step automations",
        values: {
          starter: dash(),
          creator: dash(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "WhatsApp marketing broadcast",
        description: "Send promotional campaigns at scale",
        values: {
          starter: dash(),
          creator: dash(),
          business: check(),
          enterprise: check(),
        },
      },
    ],
  },
  {
    id: "branding",
    name: "Branding & MyLinkr",
    features: [
      {
        name: "Verified Organizer Badge",
        description: "Trust badge on marketplace listings",
        values: {
          starter: dash(),
          creator: badge("After KYC", "green"),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Hide MyLinkr footer branding",
        description: 'Remove "Powered by MyLinkr"',
        values: {
          starter: dash(),
          creator: check(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Premium MyLinkr themes",
        description: "Adventure / Modern / Professional themes",
        values: {
          starter: dash(),
          creator: dash(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Custom subdomain",
        description: "yourbrand.befikra.link",
        values: {
          starter: dash(),
          creator: dash(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Your own custom domain",
        description: "yourown.com / yourbrand.in",
        values: {
          starter: dash(),
          creator: dash(),
          business: badge("Add-on"),
          enterprise: check(),
        },
      },
      {
        name: "White-label platform",
        description: "Full removal of Befikra branding",
        values: {
          starter: dash(),
          creator: dash(),
          business: dash(),
          enterprise: check(),
        },
      },
    ],
  },
  {
    id: "analytics",
    name: "Analytics & Reporting",
    features: [
      {
        name: "Basic dashboard",
        description: "Bookings, revenue, today's activity",
        values: {
          starter: check(),
          creator: check(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "MyLinkr insights",
        description: "Views, clicks, CTR, bookings, revenue",
        values: {
          starter: badge("Basic"),
          creator: badge("Full", "green"),
          business: badge("Full + advanced", "green"),
          enterprise: badge("Full + custom", "green"),
        },
      },
      {
        name: "AI analytics summary",
        description: "Ask questions, get insights",
        values: {
          starter: dash(),
          creator: dash(),
          business: check(),
          enterprise: check(),
        },
      },
      {
        name: "Custom dashboards",
        description: "Built specifically for your business",
        values: {
          starter: dash(),
          creator: dash(),
          business: dash(),
          enterprise: check(),
        },
      },
      {
        name: "Export reports",
        description: "Download data for offline analysis",
        values: {
          starter: dash(),
          creator: badge("CSV"),
          business: badge("CSV + scheduled", "green"),
          enterprise: badge("Custom + warehouse", "green"),
        },
      },
    ],
  },
  {
    id: "developer",
    name: "Developer & Integrations",
    features: [
      {
        name: "API access",
        description: "Programmatic access to your data",
        values: {
          starter: dash(),
          creator: dash(),
          business: badge("Full", "green"),
          enterprise: badge("Full + custom", "green"),
        },
      },
      {
        name: "Webhooks",
        description: "Real-time event notifications",
        values: {
          starter: dash(),
          creator: badge("3"),
          business: inf(),
          enterprise: inf(),
        },
      },
      {
        name: "Custom integrations",
        description: "ERP, Salesforce, accounting software",
        values: {
          starter: dash(),
          creator: dash(),
          business: dash(),
          enterprise: check(),
        },
      },
      {
        name: "SSO & enterprise IAM",
        description: "Single sign-on with your identity provider",
        values: {
          starter: dash(),
          creator: dash(),
          business: dash(),
          enterprise: check(),
        },
      },
    ],
  },
  {
    id: "support",
    name: "Support & Onboarding",
    features: [
      {
        name: "Support channel",
        description: "How you reach the team",
        values: {
          starter: badge("Community"),
          creator: badge("Email + chat", "green"),
          business: badge("Priority", "green"),
          enterprise: badge("Dedicated AM", "green"),
        },
      },
      {
        name: "Response SLA",
        description: "Guaranteed response time",
        values: {
          starter: badge("3–5 days"),
          creator: badge("24 hours", "green"),
          business: badge("4 hours", "green"),
          enterprise: badge("24/7 priority", "green"),
        },
      },
      {
        name: "Onboarding",
        description: "Getting started with the platform",
        values: {
          starter: badge("Self-serve"),
          creator: badge("Self-serve + docs"),
          business: badge("Dedicated session", "green"),
          enterprise: badge("Custom + team training", "green"),
        },
      },
      {
        name: "Uptime SLA",
        description: "Guaranteed platform availability",
        values: {
          starter: dash(),
          creator: dash(),
          business: dash(),
          enterprise: badge("99.9% + credits", "green"),
        },
      },
    ],
  },
];

export const PRICING_FAQS = [
  {
    question: "What does the platform fee mean?",
    answer:
      "The platform fee is a small percentage deducted from each booking that comes through Befikra. It covers the infrastructure, payment processing, marketplace exposure, and continuous platform improvements. Lower plans pay a higher fee; upgrading reduces it significantly — often saving more than the subscription itself.",
  },
  {
    question: "How do AI credits work?",
    answer:
      "Every AI action — generating an event description, running an itinerary, lead scoring, AI replies — consumes credits. Creator Pro includes 500 credits/month, Business AI includes 5,000. Unused credits roll over for 30 days. You can buy extra credit packs anytime starting at ₹499 for 1,000 credits.",
  },
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes. Upgrades take effect immediately and you're only billed the prorated difference. Downgrades take effect at the end of your current billing cycle. There's no lock-in on monthly plans.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "Instead of a trial, we offer a 14-day money-back guarantee on Creator Pro and Business AI. You get full access from day one — if it's not working for you, get a full refund within 14 days, no questions asked.",
  },
  {
    question: "How does the Verified Organizer Badge work?",
    answer:
      "Verified Badge requires KYC verification (basic business documents). It's available on Creator Pro and above. Verified events appear higher in marketplace search and show a green Verified mark to customers, building trust and improving conversion.",
  },
  {
    question: "What's included in Enterprise?",
    answer:
      "Everything in Business AI plus white-label platform, multi-brand management, custom AI model training, dedicated account manager, 99.9% SLA, custom integrations (ERP, Salesforce, etc.), and negotiated platform fees (typically 0.5–1%). Book a call with our sales team to design the right setup.",
  },
];

export const PRICING_SUMMARY = {
  text: "Doing ₹5L/month in bookings? You save ₹17,500 on platform fees alone by upgrading from Starter to Business AI.",
  highlightParts: ["₹5L/month", "₹17,500"] as const,
  cta: "Run my numbers",
};

export const PRICING_HERO = {
  title: "Choose the tier that fits your journey.",
  subtitle: "Simple pricing with clear value and no surprises.",
};

export const PRICING_CTA = {
  title: "Find your",
  titleEmphasis: "altitude.",
  subtitle: "Start free, upgrade when you're ready. The math will sell itself.",
  primary: "Start free forever",
  secondary: "Book a 30-min demo",
};

export function formatPrice(amount: number): string {
  return amount.toLocaleString("en-IN");
}

export function getPlanPrice(plan: Plan, billing: BillingCycle): string | null {
  if (plan.pricing.kind === "free") return "0";
  if (plan.pricing.kind === "custom") return null;
  const amount =
    billing === "annual" ? plan.pricing.annual : plan.pricing.monthly;
  return formatPrice(amount);
}

export type PlanStrike = {
  text: string;
  showStrike?: boolean;
  strikeAmount?: number;
};

export function getPlanStrike(plan: Plan, billing: BillingCycle): PlanStrike {
  if (plan.pricing.kind === "free") {
    return { text: plan.pricing.strike };
  }
  if (plan.pricing.kind === "custom") {
    return { text: plan.pricing.strike };
  }
  if (billing === "monthly") {
    return { text: "Billed monthly" };
  }
  return {
    text: plan.pricing.annualYearTotal,
    showStrike: true,
    strikeAmount: plan.pricing.monthlyStrike,
  };
}
