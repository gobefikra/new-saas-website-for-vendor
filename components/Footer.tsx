"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Linkedin,
  MessageCircle,
  Twitter,
  Youtube,
} from "lucide-react";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const platformLinks = [
  { label: "Integrations", href: "/integrations" },
  { label: "MyLinkr", href: "/mylinkr" },
  { label: "AI Features", href: "/#raven-ai-section" },
  { label: "Partner Login", href: "/contact" },
];

const resourceLinks = [
  { label: "Blogs", href: "/blogs" },
  { label: "Help Center", href: "/contact" },
  { label: "Why Befikra", href: "/our-story" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-footer-dark text-gray-400">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-16 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border-b border-gray-800 pb-10 mb-10">
          <div>
            <h3 className="text-white font-bold text-2xl">
              Stay ahead of the AI curve
            </h3>
            <p className="text-gray-400 mt-1">
              Join our newsletter for the latest travel tech updates.
            </p>
          </div>
          <form
            className="flex flex-col sm:flex-row gap-2 sm:items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border border-gray-600 text-white rounded-full px-6 py-3 w-full sm:w-72 placeholder:text-gray-500 focus:outline-none focus:border-emerald-500"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-white text-gray-900 font-semibold rounded-full px-6 py-3 hover:bg-gray-100 transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <Image
              src="/icons/footer-logo.png"
              alt="Befikra Partner"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-sm mt-4 max-w-xs">
              India&apos;s intelligent CRM for travel brands, combining
              automation, analytics, and AI to power faster growth.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                {
                  Icon: Instagram,
                  label: "Instagram",
                  href: "https://instagram.com/befikrapartner",
                },
                {
                  Icon: Twitter,
                  label: "X",
                  href: "https://x.com/befikrapartner",
                },
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://linkedin.com/company/befikra",
                },
                {
                  Icon: MessageCircle,
                  label: "WhatsApp",
                  href: "https://wa.me/919999999999",
                },
                {
                  Icon: Youtube,
                  label: "YouTube",
                  href: "https://youtube.com/@befikra",
                },
              ].map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-3 text-sm">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 Befikra Partner. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="hidden md:inline">·</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="hidden md:inline">·</span>
            <a
              href="mailto:support@befikra.com"
              className="hover:text-white transition-colors"
            >
              support@befikra.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
