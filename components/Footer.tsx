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

import { brand } from "@/lib/brand-theme";

const GREEN = brand.green;
const GREEN_DARK = brand.greenDark;
const NAVY = brand.navy;
const BODY = brand.muted;
const MINT = brand.greenLight;

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
  { Icon: MessageCircle, label: "WhatsApp", href: "mailto:support@befikra.com" },
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
              className="font-sans text-sm transition-colors hover:text-brand-green"
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
          className="rounded-2xl border border-border-default p-6 md:p-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(232,243,238,0.55) 0%, rgba(249,250,251,0.95) 55%, #ffffff 100%)",
          }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4 sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border-default bg-white shadow-card">
                <Mail className="h-6 w-6" style={{ color: GREEN_DARK }} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold md:text-xl" style={{ color: NAVY }}>
                  Stay ahead of the AI curve
                </h3>
                <p
                  className="mt-1 max-w-md font-sans text-sm leading-relaxed md:text-base"
                  style={{ color: BODY }}
                >
                  Join our newsletter for the latest travel tech updates, insights,
                  and product releases.
                </p>
              </div>
            </div>

            <form
              className="flex w-full flex-col gap-2 sm:flex-row sm:items-center lg:max-w-md lg:shrink-0"
              onSubmit={(e) => {
                e.preventDefault();
                const email = new FormData(e.currentTarget).get("email");
                if (!email) return;
                window.location.href = `mailto:support@befikra.com?subject=${encodeURIComponent(
                  "Newsletter signup"
                )}&body=${encodeURIComponent(`Please add ${email} to the newsletter.`)}`;
              }}
            >
              <div className="relative flex-1">
                <Mail
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  strokeWidth={2}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="input-brand py-3 pl-11 pr-4"
                />
              </div>
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-cta-glow transition-all duration-200 ease-brand hover:opacity-95 active:scale-95"
                style={{ backgroundColor: GREEN_DARK }}
              >
                Subscribe
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </button>
            </form>
          </div>
        </div>

        {/* Main navigation */}
        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border-default pt-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_0.85fr_1.35fr] lg:gap-8 xl:gap-10">
          {/* Brand */}
          <div className="lg:border-r lg:border-border-default lg:pr-8">
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
              className="mt-4 max-w-xs font-sans text-sm leading-relaxed"
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
            <div className="card-brand w-full shrink-0 p-5 sm:max-w-[220px]">
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
                className="mt-1 font-sans text-xs leading-relaxed"
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
      <div className="mt-12 border-t border-border-default bg-footer-dark">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 md:flex-row md:px-8">
          <p className="flex items-center gap-2 font-sans text-sm text-footer-link">
            <Lock className="h-4 w-4 shrink-0 text-brand-green" strokeWidth={2} />
            © 2026 Befikra Partners. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-footer-link">
            <Link
              href="/privacy-policy"
              className="font-sans transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <span className="hidden h-3.5 w-px bg-white/15 sm:inline" aria-hidden />
            <Link
              href="/terms-and-conditions"
              className="font-sans transition-colors hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
            <span className="hidden h-3.5 w-px bg-white/15 sm:inline" aria-hidden />
            <a
              href="mailto:support@befikra.com"
              className="font-sans transition-colors hover:text-white"
            >
              support@befikra.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
