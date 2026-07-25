"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  Instagram,
  Linkedin,
  Lock,
  Mail,
  MessageCircle,
  Twitter,
  Youtube,
} from "lucide-react";

const GREEN = "#10B981";
const GREEN_DARK = "#059669";
const NAVY = "#0F172A";
const BODY = "#6B7280";
const MINT = "#ECFDF5";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/contact" },
];

const platformLinks = [
  { label: "Integrations", href: "/integrations" },
  { label: "MyLinkr", href: "/mylinkr" },
  { label: "AI Features", href: "/#raven-ai-section" },
  { label: "Partner Login", href: "/contact" },
  { label: "API Documentation", href: "/contact" },
];

const resourceLinks = [
  { label: "Blogs", href: "/blogs" },
  { label: "Help Center", href: "/contact" },
  { label: "Guides", href: "/blogs" },
  { label: "What's New", href: "/blogs" },
  { label: "Why Befikra", href: "/our-story" },
];

const socialLinks = [
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com/befikrapartner" },
  { Icon: Twitter, label: "X", href: "https://x.com/befikrapartner" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/befikra" },
  { Icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919999999999" },
  { Icon: Youtube, label: "YouTube", href: "https://youtube.com/@befikra" },
];

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4
        className="text-xs font-bold uppercase tracking-wider"
        style={{ color: GREEN_DARK }}
      >
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-dm-sans text-sm transition-colors hover:opacity-80"
              style={{ color: BODY }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-12 md:px-8 md:pt-16">
        {/* Newsletter */}
        <div
          className="rounded-2xl border border-gray-200 p-6 md:p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(232,245,233,0.55) 0%, rgba(249,250,251,0.95) 55%, #ffffff 100%)",
          }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4 sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white shadow-[0_4px_20px_rgba(13,27,42,0.06)]">
                <Mail className="h-6 w-6" style={{ color: GREEN_DARK }} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-lg font-bold md:text-xl" style={{ color: NAVY }}>
                  Stay ahead of the AI curve
                </h3>
                <p
                  className="font-dm-sans mt-1 max-w-md text-sm leading-relaxed md:text-base"
                  style={{ color: BODY }}
                >
                  Join our newsletter for the latest travel tech updates, insights,
                  and product releases.
                </p>
              </div>
            </div>

            <form
              className="flex w-full flex-col gap-2 sm:flex-row sm:items-center lg:max-w-md lg:shrink-0"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex-1">
                <Mail
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  strokeWidth={2}
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="font-dm-sans w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-green-400 focus:ring-2 focus:ring-green-100"
                  style={{ color: NAVY }}
                />
              </div>
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: GREEN_DARK }}
              >
                Subscribe
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </button>
            </form>
          </div>
        </div>

        {/* Main navigation */}
        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-gray-100 pt-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_0.85fr_1.35fr] lg:gap-8 xl:gap-10">
          {/* Brand */}
          <div className="lg:border-r lg:border-gray-100 lg:pr-8">
            <Link href="/" className="inline-block">
              <Image
                src="/icons/Nav-logo.png"
                alt="Befikra Partner"
                width={180}
                height={48}
                className="h-10 w-auto md:h-11"
              />
            </Link>
            <p
              className="font-dm-sans mt-4 max-w-xs text-sm leading-relaxed"
              style={{ color: BODY }}
            >
              India&apos;s intelligent CRM for travel brands, combining automation,
              analytics, and AI to power faster growth.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socialLinks.map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
                >
                  <Icon className="h-4 w-4" style={{ color: NAVY }} strokeWidth={2} />
                </Link>
              ))}
            </div>
          </div>

          <FooterLinkColumn title="Company" links={companyLinks} />
          <FooterLinkColumn title="Platform" links={platformLinks} />

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start lg:col-span-1 xl:gap-8">
            <FooterLinkColumn title="Resources" links={resourceLinks} />

            {/* Help card */}
            <div className="w-full shrink-0 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_24px_rgba(13,27,42,0.06)] sm:max-w-[220px]">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: MINT }}
              >
                <Headphones
                  className="h-5 w-5"
                  style={{ color: GREEN_DARK }}
                  strokeWidth={2}
                />
              </div>
              <p className="mt-3 text-sm font-bold" style={{ color: NAVY }}>
                Need Help?
              </p>
              <p
                className="font-dm-sans mt-1 text-xs leading-relaxed"
                style={{ color: BODY }}
              >
                Our support team is here to help you succeed.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: MINT, color: GREEN_DARK }}
              >
                Visit Help Center
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-gray-100 bg-[#F9FAFB]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 md:flex-row md:px-8">
          <p
            className="font-dm-sans flex items-center gap-2 text-sm"
            style={{ color: BODY }}
          >
            <Lock className="h-4 w-4 shrink-0" style={{ color: GREEN }} strokeWidth={2} />
            © 2026 Befikra Partners. All rights reserved.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm"
            style={{ color: BODY }}
          >
            <Link
              href="/privacy-policy"
              className="font-dm-sans transition-colors hover:opacity-80"
            >
              Privacy Policy
            </Link>
            <span className="hidden h-3.5 w-px bg-gray-300 sm:inline" aria-hidden />
            <Link
              href="/terms-and-conditions"
              className="font-dm-sans transition-colors hover:opacity-80"
            >
              Terms &amp; Conditions
            </Link>
            <span className="hidden h-3.5 w-px bg-gray-300 sm:inline" aria-hidden />
            <a
              href="mailto:support@befikra.com"
              className="font-dm-sans transition-colors hover:opacity-80"
            >
              support@befikra.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
