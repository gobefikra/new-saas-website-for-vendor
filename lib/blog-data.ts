import { getTopicImage, resolvePostImages } from "@/lib/blog-images";

export type BlogBodyBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "callout"; title: string; text: string };

export type BlogAuthor = {
  name: string;
  role: string;
  bio: string;
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageSrc: string;
  listGroup: "featured" | "quick" | "indepth";
  author: BlogAuthor;
  body: BlogBodyBlock[];
};

export type BlogCardData = {
  slug: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  category: string;
  imageSrc: string;
};

/** Unique writers — assigned one-to-one across posts */
const AUTHORS: BlogAuthor[] = [
  {
    name: "Sparsh Jain",
    role: "Trek Operations Expert",
    bio: "Sparsh has spent 10 years optimizing logistics for adventure travel companies across the Himalayas.",
  },
  {
    name: "Ananya Mehta",
    role: "CRM Strategy Lead",
    bio: "Ananya helps trek brands redesign lead-to-booking flows without losing the personal touch.",
  },
  {
    name: "Rohan Desai",
    role: "Product & Automation",
    bio: "Rohan builds operator-first automation for multi-batch trek companies across India.",
  },
  {
    name: "Meera Kapoor",
    role: "Booking Systems Advisor",
    bio: "Meera specializes in converting inquiry chaos into reliable booking pipelines.",
  },
  {
    name: "Kabir Singh",
    role: "Field Ops Consultant",
    bio: "Kabir has led peak-season operations for multi-day Himalayan expeditions for over a decade.",
  },
  {
    name: "Ishita Rao",
    role: "Growth Marketing Lead",
    bio: "Ishita turns Instagram and WhatsApp interest into confirmed seats for adventure brands.",
  },
  {
    name: "Arjun Nair",
    role: "AI & Insights Writer",
    bio: "Arjun writes about practical AI for travel teams — less hype, more usable workflows.",
  },
  {
    name: "Priya Malhotra",
    role: "Customer Experience Lead",
    bio: "Priya designs trekker journeys from first DM to post-trek feedback and repeat bookings.",
  },
  {
    name: "Dev Patel",
    role: "Payments & Ops Analyst",
    bio: "Dev focuses on reducing no-shows and payment friction for group trek operators.",
  },
  {
    name: "Sara Qureshi",
    role: "WhatsApp Ops Specialist",
    bio: "Sara helps teams keep WhatsApp human while still responding in minutes, not hours.",
  },
  {
    name: "Nikhil Bose",
    role: "Batch Planning Coach",
    bio: "Nikhil has planned hundreds of trek batches and hates spreadsheet seat chaos as much as you do.",
  },
  {
    name: "Tara Iyer",
    role: "Vendor Coordination Lead",
    bio: "Tara aligns transporters, lodges, and kitchen teams around one shared departure truth.",
  },
  {
    name: "Vikram Shah",
    role: "Founder Coach",
    bio: "Vikram advises adventure founders on scaling ops without burning out their core team.",
  },
  {
    name: "Neha Kulkarni",
    role: "Referral Growth Writer",
    bio: "Neha builds referral loops that trekkers actually share — and ops teams can fulfill.",
  },
  {
    name: "Aditya Menon",
    role: "Demand Forecasting Lead",
    bio: "Aditya uses booking data to open batches earlier and staff guides where demand spikes.",
  },
  {
    name: "Riya Sen",
    role: "Lead Routing Specialist",
    bio: "Riya designs multi-channel lead ownership so WhatsApp, web, and social stop colliding.",
  },
  {
    name: "Harsh Verma",
    role: "Follow-Up Systems Writer",
    bio: "Harsh creates follow-up sequences that warm cold inquiries without sounding pushy.",
  },
  {
    name: "Sana Siddiqui",
    role: "Digital Waivers Advisor",
    bio: "Sana helps operators replace paper chase with clean digital waiver and confirmation flows.",
  },
  {
    name: "Karan Joshi",
    role: "Instant Booking Strategist",
    bio: "Karan studies why fast booking pages convert trekkers when seats are scarce.",
  },
  {
    name: "Lavanya Reddy",
    role: "Peak Season Ops Writer",
    bio: "Lavanya documents playbooks that keep trek leaders calm when every batch is full.",
  },
  {
    name: "Mohit Agarwal",
    role: "Dashboard Migration Lead",
    bio: "Mohit guides teams from fragile sheets to live dashboards in under a month.",
  },
  {
    name: "Pooja Banerjee",
    role: "ROI & Automation Analyst",
    bio: "Pooja measures where automation actually returns hours and bookings for small trek teams.",
  },
  {
    name: "Yash Thakur",
    role: "Group Booking Designer",
    bio: "Yash designs end-to-end group booking flows that keep seats, payments, and docs synced.",
  },
  {
    name: "Aisha Khan",
    role: "Personalization Lead",
    bio: "Aisha builds trek recommendations that feel personal even when volume is high.",
  },
  {
    name: "Siddharth Rao",
    role: "Feedback Systems Writer",
    bio: "Siddharth turns post-trek emotion into structured feedback and repeat bookings.",
  },
  {
    name: "Diya Chawla",
    role: "Pre-Departure Comms Lead",
    bio: "Diya writes update cadences trekkers actually want — packing, weather, rendezvous.",
  },
  {
    name: "Manav Gupta",
    role: "Ops Efficiency Coach",
    bio: "Manav helps lean teams cut booking cycle time from hours to minutes.",
  },
  {
    name: "Kritika Das",
    role: "Pipeline Hygiene Lead",
    bio: "Kritika replaces spreadsheet lead tracking with one pipeline every channel can trust.",
  },
  {
    name: "Omar Farooq",
    role: "Automation Adoption Lead",
    bio: "Omar helps operators move from manual habits to AI-assisted systems without drama.",
  },
  {
    name: "Shreya Pillai",
    role: "Source Attribution Writer",
    bio: "Shreya shows teams which channels fill seats — and which ones waste follow-up time.",
  },
];

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildBody(
  title: string,
  category: string,
  excerpt: string,
  images: { mid: string; end: string }
): BlogBodyBlock[] {
  const t = title.toLowerCase();
  const cleanExcerpt = excerpt.replace(/\.*$/, ".");

  const headings = (() => {
    if (t.includes("whatsapp") || t.includes("instagram") || t.includes("dm") || t.includes("reply")) {
      return {
        h1: "Why chat-first booking breaks at volume",
        h2: "Build replies that still feel human",
        h3: "Put every conversation on one pipeline",
        midCap: "Trekkers expect fast answers — without copy-paste chaos.",
        endCap: "Keep WhatsApp personal while the system tracks ownership.",
        callout:
          "Operators who route chat leads into a CRM typically cut first-response time in half during peak weeks.",
      };
    }
    if (t.includes("payment") || t.includes("no-show") || t.includes("cancel")) {
      return {
        h1: "Where payments and seats fall out of sync",
        h2: "Reminders that recover revenue quietly",
        h3: "Confirm seats before departure panic starts",
        midCap: "Clear payment status prevents last-minute empty seats.",
        endCap: "Automated reminders keep batches full without awkward chase messages.",
        callout:
          "Timed confirmations and payment nudges routinely reduce no-shows without adding evening admin work.",
      };
    }
    if (t.includes("ai") || t.includes("predict") || t.includes("data") || t.includes("insight")) {
      return {
        h1: "What the numbers are already telling you",
        h2: "Use AI where it saves real hours",
        h3: "Turn insight into next-season decisions",
        midCap: "Demand signals help you open batches and staff guides earlier.",
        endCap: "Practical AI supports your team — it does not replace field judgment.",
        callout:
          "Teams that review route demand monthly open popular batches earlier and avoid last-minute guide shortages.",
      };
    }
    if (t.includes("spreadsheet") || t.includes("dashboard")) {
      return {
        h1: "Why sheets crack under peak season",
        h2: "Move to a live source of truth",
        h3: "Make the first 30 days count",
        midCap: "Live dashboards replace version-conflict and midnight reconciliations.",
        endCap: "When the office and trail share one view, mistakes drop fast.",
        callout:
          "Most trek teams recover their migration effort within one busy month once availability stops living in tabs.",
      };
    }
    if (t.includes("batch") || t.includes("vendor") || t.includes("peak") || t.includes("ops")) {
      return {
        h1: "Peak pressure exposes weak handoffs",
        h2: "One schedule for office, guides, and vendors",
        h3: "Run the next peak with calmer ownership",
        midCap: "Shared batch plans keep transporters and lodges aligned.",
        endCap: "Clear ownership beats heroic last-minute fixes.",
        callout:
          "Operators with a single batch calendar report fewer vendor misses and cleaner departure mornings.",
      };
    }
    if (t.includes("booking") || t.includes("lead") || t.includes("follow-up") || t.includes("convert")) {
      return {
        h1: "Leads die in the gaps between tools",
        h2: "Close the loop from inquiry to paid seat",
        h3: "Measure what actually fills batches",
        midCap: "Every inquiry deserves an owner, a next step, and a timestamp.",
        endCap: "Conversion improves when follow-ups are consistent — not louder.",
        callout:
          "Structured lead ownership usually lifts confirmation rates before you spend more on ads.",
      };
    }
    if (t.includes("referral") || t.includes("growth") || t.includes("scale") || t.includes("brand")) {
      return {
        h1: "Growth that depends on heroics will stall",
        h2: "Build loops your ops team can fulfill",
        h3: "Scale the brand without burning the core team",
        midCap: "Referrals only work when seating and follow-up keep up.",
        endCap: "Sustainable growth starts with systems, not more late nights.",
        callout:
          "Founders who automate fulfillment before scaling acquisition protect both margins and team morale.",
      };
    }
    if (t.includes("experience") || t.includes("feedback") || t.includes("recommend") || t.includes("customer")) {
      return {
        h1: "Experience gaps show up before the trek starts",
        h2: "Personalize without drowning the team",
        h3: "Capture emotion while it still converts",
        midCap: "Trekkers remember how prepared — and how cared for — they felt.",
        endCap: "Post-trek feedback is easiest to collect right after the summit high.",
        callout:
          "Brands that request feedback within 48 hours of return see stronger repeat and referral intent.",
      };
    }
    if (t.includes("waiver") || t.includes("confirm")) {
      return {
        h1: "Paper chase creates departure-day risk",
        h2: "Make waivers and confirmations automatic",
        h3: "Arrive at basecamp already complete",
        midCap: "Digital docs remove the last-minute clipboard scramble.",
        endCap: "Confirmed, signed trekkers mean calmer guides on day one.",
        callout:
          "Automating waivers and confirmations routinely saves hours in the final 72 hours before departure.",
      };
    }
    if (t.includes("automat") || t.includes("crm") || t.includes("hiring") || t.includes("staff")) {
      return {
        h1: "Hiring more admins rarely fixes the system",
        h2: "Automate the repetitive mountain of work",
        h3: "Keep humans on the work only humans do",
        midCap: "Background automation protects response time when inquiry volume spikes.",
        endCap: "Your team should coach trekkers — not rebuild the same email fifty times.",
        callout:
          "Agencies that automate first-response and payment confirmation often grow bookings without growing headcount at the same rate.",
      };
    }
    return {
      h1: "Where trek operations quietly leak time",
      h2: `A clearer approach to ${category.toLowerCase()}`,
      h3: "What to change before the next peak",
      midCap: "Relevant ops context for this topic — built for adventure teams.",
      endCap: "Practical next steps your trail and office teams can share.",
      callout: `Teams that tighten ${category.toLowerCase()} workflows usually feel the difference within one busy booking cycle.`,
    };
  })();

  return [
    {
      type: "p",
      text: `${title} matters because the old way is already costing you seats. ${cleanExcerpt} When inquiries pile up across chats and sheets, even strong trek brands start missing easy bookings.`,
    },
    {
      type: "p",
      text: `This guide focuses on ${category} — not as theory, but as the daily rhythm of answering trekkers, locking seats, and keeping guides ready. The goal is simple: less admin drag, more time on the experience you are known for.`,
    },
    {
      type: "image",
      src: images.mid,
      alt: `${title} — visual context`,
      caption: headings.midCap,
    },
    { type: "h2", text: headings.h1 },
    {
      type: "p",
      text: `Most operators do not fail from lack of effort. They fail from fragmented tools. A WhatsApp thread here, a sheet there, a forwarded PDF somewhere else. Under peak load, those gaps become missed leads, mistracked payments, and last-minute surprises for the ground team.`,
    },
    {
      type: "p",
      text: `For ${title.toLowerCase()}, the first step is naming the exact bottleneck — first response, seat locking, vendor handoff, or post-booking care — then replacing that step with a reliable system instead of another late-night spreadsheet edit.`,
    },
    {
      type: "callout",
      title: "Field note",
      text: headings.callout,
    },
    { type: "h2", text: headings.h2 },
    {
      type: "p",
      text: `Befikra helps adventure teams centralize the work around ${category.toLowerCase()}. Leads get owners. Availability stays accurate. Confirmations, reminders, and documents can run in the background while your people stay present with trekkers.`,
    },
    {
      type: "p",
      text: `That does not remove judgment from the trail. It removes the robotic repetition that burns teams out before departure day. Guides still brief groups. Founders still set the standard. Software just stops the silent leaks.`,
    },
    {
      type: "image",
      src: images.end,
      alt: `Outcome related to ${title}`,
      caption: headings.endCap,
    },
    { type: "h2", text: headings.h3 },
    {
      type: "p",
      text: `Pick one high-friction step this week. Automate or centralize that first. Measure response time, confirmation rate, or hours saved. Then expand. ${title} is a practice — not a one-time install.`,
    },
    {
      type: "p",
      text: `When ops feel lighter, your brand shows up stronger online and on the mountain. That is how trek companies grow without asking the same people to carry every peak season alone.`,
    },
  ];
}

type PostSeed = {
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  listGroup: BlogPost["listGroup"];
  /** Unique cover image key — no two posts share the same cover */
  coverKey: import("@/lib/blog-images").BlogTopicKey;
  /** Preserve the original first-card slug used across the site */
  slug?: string;
};

const seeds: PostSeed[] = [
  {
    category: "Automation & CRM",
    date: "Nov 5, 2025",
    readTime: "5 Mins Read",
    title: "How to Automate Your Trekking Business Without Hiring More Staff",
    excerpt:
      "Scaling a mountain is hard; scaling your operations shouldn't be. Discover how the Befikra CRM handles bookings, lead management, and logistics while you're at basecamp.",
    listGroup: "featured",
    coverKey: "laptopOps",
    slug: "how-to-automate-trekking-business",
  },
  {
    category: "Automation & CRM",
    date: "Nov 3, 2025",
    readTime: "6 Mins Read",
    title: "CRM Workflows Every Trek Operator Should Automate First",
    excerpt:
      "Prioritize the workflows that reclaim the most hours — lead routing, payment follow-ups, and batch confirmations — before you automate everything else.",
    listGroup: "featured",
    coverKey: "deskWork",
  },
  {
    category: "Automation & CRM",
    date: "Oct 28, 2025",
    readTime: "4 Mins Read",
    title: "From Spreadsheets to Smart Dashboards in 30 Days",
    excerpt:
      "A practical 30-day path from fragile sheets to live dashboards your ops team can trust during peak season.",
    listGroup: "featured",
    coverKey: "notebook",
  },
  {
    category: "Booking Systems",
    date: "Nov 8, 2025",
    readTime: "5 Mins Read",
    title: "The Bottlenecks in Manual Trek Booking Systems",
    excerpt:
      "Manual booking chains hide delays in confirmations, payments, and seat locks. Here is how to spot — and remove — the worst bottlenecks.",
    listGroup: "featured",
    coverKey: "checklist",
  },
  {
    category: "Booking Systems",
    date: "Nov 1, 2025",
    readTime: "7 Mins Read",
    title: "Why Instant Booking Pages Convert More Trekkers",
    excerpt:
      "Trekkers decide fast. Instant booking pages reduce hesitation, cut chat back-and-forth, and lift conversion when seats are limited.",
    listGroup: "featured",
    coverKey: "phoneChat",
  },
  {
    category: "Booking Systems",
    date: "Oct 22, 2025",
    readTime: "5 Mins Read",
    title: "Reducing No-Shows with Automated Confirmations",
    excerpt:
      "Timed reminders and clear confirmation flows dramatically reduce no-shows without adding more staff hours.",
    listGroup: "featured",
    coverKey: "calendar",
  },
  {
    category: "Operations Management",
    date: "Nov 6, 2025",
    readTime: "6 Mins Read",
    title: "Managing Trek Batches Without the Spreadsheet Chaos",
    excerpt:
      "Batch planning breaks when seats, guides, and vendors live in different files. Centralize batches before peak season hits.",
    listGroup: "featured",
    coverKey: "guideBrief",
  },
  {
    category: "Operations Management",
    date: "Oct 30, 2025",
    readTime: "5 Mins Read",
    title: "Peak Season Ops: A Playbook for Trek Leaders",
    excerpt:
      "A field-tested playbook for peak weeks — clear ownership, automated updates, and calmer ground teams.",
    listGroup: "featured",
    coverKey: "basecamp",
  },
  {
    category: "Operations Management",
    date: "Oct 18, 2025",
    readTime: "4 Mins Read",
    title: "Vendor Coordination Made Simple for Multi-Day Treks",
    excerpt:
      "Keep transporters, lodges, and kitchen teams aligned with one shared schedule instead of endless forward chains.",
    listGroup: "featured",
    coverKey: "handshake",
  },
  {
    category: "AI & Insights",
    date: "Nov 7, 2025",
    readTime: "5 Mins Read",
    title: "Using AI to Improve Trekker Experience & Conversions",
    excerpt:
      "AI helps with faster replies and smarter recommendations — without sounding robotic on WhatsApp.",
    listGroup: "featured",
    coverKey: "analytics",
  },
  {
    category: "AI & Insights",
    date: "Nov 2, 2025",
    readTime: "6 Mins Read",
    title: "Predicting Demand for Popular Trek Routes with Data",
    excerpt:
      "Use booking patterns to anticipate demand, open batches earlier, and staff guides where the pressure will land.",
    listGroup: "featured",
    coverKey: "growthChart",
  },
  {
    category: "AI & Insights",
    date: "Oct 25, 2025",
    readTime: "5 Mins Read",
    title: "Smart Reply Templates That Sound Human on WhatsApp",
    excerpt:
      "Templates should feel personal. Build reply systems that stay on-brand and still move leads forward quickly.",
    listGroup: "featured",
    coverKey: "whatsappDesk",
  },
  {
    category: "Growth Strategies",
    date: "Nov 4, 2025",
    readTime: "5 Mins Read",
    title: "Scaling Your Trek Brand Without Burning Out Your Team",
    excerpt:
      "Growth that depends on heroics is fragile. Scale systems first so your team can keep delivering great treks.",
    listGroup: "featured",
    coverKey: "teamMeeting",
  },
  {
    category: "Growth Strategies",
    date: "Oct 27, 2025",
    readTime: "6 Mins Read",
    title: "Referral Programs That Work for Adventure Businesses",
    excerpt:
      "Design referral loops trekkers actually share — and ops teams can fulfill without chaos.",
    listGroup: "featured",
    coverKey: "campfire",
  },
  {
    category: "Growth Strategies",
    date: "Oct 15, 2025",
    readTime: "4 Mins Read",
    title: "Turning Instagram DMs Into Confirmed Bookings",
    excerpt:
      "Move Instagram interest into tracked leads and paid bookings without losing the conversation thread.",
    listGroup: "featured",
    coverKey: "socialPhone",
  },
  {
    category: "Quick Insights",
    date: "Nov 5, 2025",
    readTime: "5 Mins Read",
    title: "Reduce booking time from hours to minutes",
    excerpt:
      "Cut booking cycle time with instant forms, payments, and confirmations in one flow.",
    listGroup: "quick",
    coverKey: "payments",
  },
  {
    category: "Quick Insights",
    date: "Nov 5, 2025",
    readTime: "5 Mins Read",
    title: "Automate waivers and confirmations",
    excerpt:
      "Digital waivers and auto-confirmations remove last-minute chase work before departure day.",
    listGroup: "quick",
    coverKey: "packing",
  },
  {
    category: "Quick Insights",
    date: "Nov 5, 2025",
    readTime: "5 Mins Read",
    title: "Track leads without spreadsheets",
    excerpt:
      "Every inquiry belongs in one pipeline — not lost between chats, notes, and tabs.",
    listGroup: "quick",
    coverKey: "officeWindow",
  },
  {
    category: "CRM Automation",
    date: "Nov 5, 2025",
    readTime: "5 Mins Read",
    title: "Why Trek Operators Are Moving to Automation",
    excerpt: "Understanding the shift from manual to AI-driven systems.",
    listGroup: "indepth",
    coverKey: "mountains",
  },
  {
    category: "CRM Automation",
    date: "Nov 1, 2025",
    readTime: "6 Mins Read",
    title: "Building Automated Lead Routing for Multi-Channel Inquiries",
    excerpt: "Route WhatsApp, web, and social leads to the right owner automatically.",
    listGroup: "indepth",
    coverKey: "alpineRidge",
  },
  {
    category: "CRM Automation",
    date: "Oct 20, 2025",
    readTime: "5 Mins Read",
    title: "The ROI of CRM Automation for Small Trek Teams",
    excerpt: "How lean teams recover hours and bookings with the right CRM setup.",
    listGroup: "indepth",
    coverKey: "forestPath",
  },
  {
    category: "Lead Management",
    date: "Nov 6, 2025",
    readTime: "5 Mins Read",
    title: "How CRM Systems Improve Trek Operations",
    excerpt: "From lead capture to trek completion — one connected flow.",
    listGroup: "indepth",
    coverKey: "hikingTrail",
  },
  {
    category: "Lead Management",
    date: "Oct 29, 2025",
    readTime: "6 Mins Read",
    title: "Tagging Leads by Source: WhatsApp, Instagram, and Web",
    excerpt: "Source tags reveal which channels fill seats — and which waste effort.",
    listGroup: "indepth",
    coverKey: "droneView",
  },
  {
    category: "Lead Management",
    date: "Oct 17, 2025",
    readTime: "4 Mins Read",
    title: "Follow-Up Sequences That Convert Cold Inquiries",
    excerpt: "Build follow-ups that warm cold leads without sounding pushy.",
    listGroup: "indepth",
    coverKey: "riverTrek",
  },
  {
    category: "Booking Workflow",
    date: "Nov 4, 2025",
    readTime: "5 Mins Read",
    title: "Scaling Operations Without Increasing Costs",
    excerpt: "Using automation to grow sustainably.",
    listGroup: "indepth",
    coverKey: "snowPeak",
  },
  {
    category: "Booking Workflow",
    date: "Oct 26, 2025",
    readTime: "7 Mins Read",
    title: "End-to-End Booking Flows for Group Treks",
    excerpt: "Design group booking flows that keep seats, payments, and docs in sync.",
    listGroup: "indepth",
    coverKey: "trekGroup",
  },
  {
    category: "Booking Workflow",
    date: "Oct 14, 2025",
    readTime: "5 Mins Read",
    title: "Payment Reminders That Reduce Last-Minute Cancellations",
    excerpt: "Smart reminders recover payments before cancellations cascade into empty seats.",
    listGroup: "indepth",
    coverKey: "nightCamp",
  },
  {
    category: "Customer Experience",
    date: "Nov 3, 2025",
    readTime: "5 Mins Read",
    title: "Personalized Trek Recommendations at Scale",
    excerpt: "Delighting trekkers before they even arrive.",
    listGroup: "indepth",
    coverKey: "sunriseTrek",
  },
  {
    category: "Customer Experience",
    date: "Oct 24, 2025",
    readTime: "6 Mins Read",
    title: "Post-Trek Feedback Loops That Drive Repeat Bookings",
    excerpt: "Capture feedback when emotion is high — and turn it into repeat trips.",
    listGroup: "indepth",
    coverKey: "mountainPass",
  },
  {
    category: "Customer Experience",
    date: "Oct 12, 2025",
    readTime: "4 Mins Read",
    title: "WhatsApp Updates Trekkers Actually Want to Receive",
    excerpt: "Send the updates trekkers need — packing, weather, rendezvous — at the right time.",
    listGroup: "indepth",
    coverKey: "stickyNotes",
  },
];

export const blogPosts: BlogPost[] = seeds.map((seed, index) => {
  const slug = seed.slug ?? slugify(seed.title);
  const topicImages = resolvePostImages(seed.title, seed.category);
  const cover = getTopicImage(seed.coverKey);
  return {
    slug,
    category: seed.category,
    title: seed.title,
    excerpt: seed.excerpt,
    date: seed.date,
    readTime: seed.readTime,
    imageSrc: cover,
    listGroup: seed.listGroup,
    author: AUTHORS[index % AUTHORS.length],
    body: buildBody(seed.title, seed.category, seed.excerpt, {
      mid: topicImages.mid === cover ? topicImages.end : topicImages.mid,
      end: topicImages.end === cover ? topicImages.mid : topicImages.end,
    }),
  };
});

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}

export const blogSlugs = blogPosts.map((p) => p.slug);

export function toCardData(post: BlogPost): BlogCardData {
  return {
    slug: post.slug,
    date: post.date,
    readTime: post.readTime,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    imageSrc: post.imageSrc,
  };
}

export function getRelatedPosts(slug: string, limit = 3): BlogCardData[] {
  const current = getBlogPostBySlug(slug);
  const pool = blogPosts.filter((p) => p.slug !== slug);
  const sameCategory = current
    ? pool.filter((p) => p.category === current.category)
    : [];
  const rest = pool.filter((p) => p.category !== current?.category);
  return [...sameCategory, ...rest].slice(0, limit).map(toCardData);
}

function formatPopularMeta(post: BlogPost) {
  const mins = post.readTime.replace(/ Mins Read/i, " min read");
  return `${post.category} | ${mins}`;
}

export const popularArticles = [
  blogPosts.find((p) => /waivers/i.test(p.title)),
  blogPosts.find((p) => /instagram dms/i.test(p.title)),
  blogPosts.find((p) => /personalized trek recommendations/i.test(p.title)),
]
  .filter((p): p is BlogPost => Boolean(p))
  .map((p) => ({
    title: p.title,
    meta: formatPopularMeta(p),
    slug: p.slug,
  }));
