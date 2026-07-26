/** Topic-relevant Unsplash images for blog cards and article bodies */

const u = (id: string, w = 1200, h = 720) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&h=${h}&auto=format&fit=crop`;

export const BLOG_TOPIC_IMAGES = {
  mountains: u("photo-1464822759023-fed622ff2c3b"),
  alpineRidge: u("photo-1506905925346-21bda4d32df4"),
  hikingTrail: u("photo-1551632811-561732d1e306"),
  trekGroup: u("photo-1522163186149-050e0f6e1d40"),
  basecamp: u("photo-1504280390367-361c6d9f38f4"),
  laptopOps: u("photo-1460925895917-afdab827c52f"),
  teamMeeting: u("photo-1522202176988-66273c2fd55f"),
  phoneChat: u("photo-1512941937669-90a1b58e7e9c"),
  whatsappDesk: u("photo-1611746872915-64382b5c76da"),
  analytics: u("photo-1551281049-b1e1e655ac43"),
  growthChart: u("photo-1553729459-efe14ef6055d"),
  packing: u("photo-1488646953014-85cb44e25828"),
  sunriseTrek: u("photo-1500530855697-b586d89ba3ee"),
  guideBrief: u("photo-1475483768296-6163e08872a1"),
  campfire: u("photo-1478131143081-80f7f84ca84d"),
  deskWork: u("photo-1497215728101-536d6bdf7b94"),
  checklist: u("photo-1484480974693-6ca0a78fb36b"),
  payments: u("photo-1556742049-0cfed4f6a45d"),
  calendar: u("photo-1506784983877-45594efa4cbe"),
  socialPhone: u("photo-1611162616475-46b635cb6868"),
  snowPeak: u("photo-1486870591958-9b9d0d1e0b01"),
  forestPath: u("photo-1441974231531-c6227db76b6e"),
  notebook: u("photo-1454165804606-c3d57bc86b40"),
  handshake: u("photo-1521791136064-7986c2920216"),
  droneView: u("photo-1469474968028-56623f02e42e"),
  nightCamp: u("photo-1496545672447-f699b503d270"),
  riverTrek: u("photo-1454496522488-7a8e488e8606"),
  officeWindow: u("photo-1497366216548-37526070297c"),
  stickyNotes: u("photo-1586281380349-632531db7ed4"),
  mountainPass: u("photo-1519904981063-b0cf448d479e"),
} as const;

export type BlogTopicKey = keyof typeof BLOG_TOPIC_IMAGES;

export const BLOG_HERO_IMAGE = BLOG_TOPIC_IMAGES.mountains;

export function getTopicImage(key: BlogTopicKey): string {
  return BLOG_TOPIC_IMAGES[key];
}

/** Pick cover + in-article images from title/category keywords */
export function resolvePostImages(title: string, category: string): {
  cover: string;
  mid: string;
  end: string;
} {
  const t = `${title} ${category}`.toLowerCase();

  if (t.includes("whatsapp") || t.includes("instagram") || t.includes("dm") || t.includes("reply")) {
    return {
      cover: BLOG_TOPIC_IMAGES.socialPhone,
      mid: BLOG_TOPIC_IMAGES.phoneChat,
      end: BLOG_TOPIC_IMAGES.whatsappDesk,
    };
  }
  if (t.includes("payment") || t.includes("no-show") || t.includes("cancel")) {
    return {
      cover: BLOG_TOPIC_IMAGES.payments,
      mid: BLOG_TOPIC_IMAGES.checklist,
      end: BLOG_TOPIC_IMAGES.calendar,
    };
  }
  if (t.includes("ai") || t.includes("predict") || t.includes("data") || t.includes("insight")) {
    return {
      cover: BLOG_TOPIC_IMAGES.analytics,
      mid: BLOG_TOPIC_IMAGES.growthChart,
      end: BLOG_TOPIC_IMAGES.laptopOps,
    };
  }
  if (t.includes("spreadsheet") || t.includes("dashboard") || t.includes("crm") || t.includes("automat")) {
    return {
      cover: BLOG_TOPIC_IMAGES.laptopOps,
      mid: BLOG_TOPIC_IMAGES.deskWork,
      end: BLOG_TOPIC_IMAGES.teamMeeting,
    };
  }
  if (t.includes("batch") || t.includes("vendor") || t.includes("ops") || t.includes("peak") || t.includes("workflow")) {
    return {
      cover: BLOG_TOPIC_IMAGES.guideBrief,
      mid: BLOG_TOPIC_IMAGES.calendar,
      end: BLOG_TOPIC_IMAGES.basecamp,
    };
  }
  if (t.includes("booking") || t.includes("lead") || t.includes("follow-up") || t.includes("convert")) {
    return {
      cover: BLOG_TOPIC_IMAGES.checklist,
      mid: BLOG_TOPIC_IMAGES.phoneChat,
      end: BLOG_TOPIC_IMAGES.payments,
    };
  }
  if (t.includes("referral") || t.includes("growth") || t.includes("scale") || t.includes("brand")) {
    return {
      cover: BLOG_TOPIC_IMAGES.growthChart,
      mid: BLOG_TOPIC_IMAGES.teamMeeting,
      end: BLOG_TOPIC_IMAGES.sunriseTrek,
    };
  }
  if (t.includes("experience") || t.includes("feedback") || t.includes("recommend") || t.includes("customer")) {
    return {
      cover: BLOG_TOPIC_IMAGES.trekGroup,
      mid: BLOG_TOPIC_IMAGES.campfire,
      end: BLOG_TOPIC_IMAGES.hikingTrail,
    };
  }
  if (t.includes("waiver") || t.includes("confirm")) {
    return {
      cover: BLOG_TOPIC_IMAGES.checklist,
      mid: BLOG_TOPIC_IMAGES.packing,
      end: BLOG_TOPIC_IMAGES.guideBrief,
    };
  }

  // Default adventure ops set
  return {
    cover: BLOG_TOPIC_IMAGES.mountains,
    mid: BLOG_TOPIC_IMAGES.hikingTrail,
    end: BLOG_TOPIC_IMAGES.alpineRidge,
  };
}
