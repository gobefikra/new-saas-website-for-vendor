"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { fadeInDown } from "@/components/motion";

type NavLink = {
  label: string;
  href: string;
  /** Always shown in accent style, regardless of active route */
  highlight?: boolean;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Integrations", href: "/integrations" },
  { label: "MyLinkr", href: "/mylinkr" },
  { label: "AI Features", href: "/#raven-ai-section", highlight: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Our Story", href: "/our-story" },
  { label: "Contact", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

function AiFeaturesLabel({ className }: { className?: string }) {
  return (
    <span className={className}>
      AI{" "}
      <span className="relative inline-block pr-2.5">
        Features
        <Sparkles
          className="absolute -right-0.5 -top-1.5 h-3 w-3"
          strokeWidth={2.25}
          aria-hidden
        />
      </span>
    </span>
  );
}

function isActive(pathname: string, href: string) {
  // In-page anchors (e.g. AI Features) are not page-level active states
  if (href.startsWith("/#") || href.startsWith("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type NavbarProps = {
  theme?: "light" | "dark";
};

export default function Navbar({ theme = "light" }: NavbarProps) {
  const pathname = usePathname();
  const isDark =
    theme === "dark" || pathname === "/our-story" || pathname.startsWith("/our-story/");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerClass = isDark
    ? scrolled
      ? "bg-black/80 backdrop-blur-md border-b border-[#1A3A25]"
      : "bg-transparent border-b border-transparent"
    : scrolled
      ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
      : "bg-white border-b border-gray-100";

  const desktopLinkClass = (href: string) => {
    const active = isActive(pathname, href);
    if (isDark) {
      return active
        ? "font-semibold text-lime-400"
        : "font-medium text-gray-300 hover:text-white";
    }
    return active
      ? "font-semibold text-emerald-600"
      : "font-medium text-gray-600 hover:text-emerald-600";
  };

  const mobileLinkClass = (href: string) => {
    const active = isActive(pathname, href);
    if (isDark) {
      return active
        ? "font-semibold text-lime-400 bg-emerald-500/10 border-l-2 border-lime-400"
        : "font-medium text-gray-300 hover:text-white border-l-2 border-transparent";
    }
    return active
      ? "font-semibold text-emerald-700 bg-emerald-50 border-l-2 border-emerald-500"
      : "font-medium text-gray-600 hover:text-emerald-600 border-l-2 border-transparent";
  };

  const desktopHighlightClass = isDark
    ? "font-semibold text-lime-400"
    : "font-semibold text-emerald-600";

  const mobileHighlightClass = isDark
    ? "font-semibold text-lime-400 border-l-2 border-transparent"
    : "font-semibold text-emerald-600 border-l-2 border-transparent";

  const ctaClass = isDark
    ? "inline-flex bg-white text-gray-900 rounded-full px-6 py-2.5 font-semibold text-sm hover:bg-gray-100 transition-colors"
    : "inline-flex bg-emerald-500 text-white rounded-full px-6 py-2.5 font-semibold text-sm hover:bg-emerald-600 transition-colors";

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeInDown}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-[4.5rem] flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/icons/Nav-logo.png"
              alt="Befikra Partner"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);

              if (link.highlight) {
                return (
                  <li key={link.label} className="relative">
                    <Link
                      href={link.href}
                      className={`relative inline-block py-1 text-sm transition-colors ${desktopHighlightClass}`}
                    >
                      <AiFeaturesLabel />
                    </Link>
                  </li>
                );
              }

              return (
                <li key={link.label} className="relative">
                  <Link
                    href={link.href}
                    className={`relative inline-block py-1 text-sm transition-colors ${desktopLinkClass(link.href)}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active-underline"
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                          isDark ? "bg-lime-400" : "bg-emerald-500"
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block shrink-0">
            <Link href="/contact" className={ctaClass}>
              Get a demo
            </Link>
          </div>

          <button
            type="button"
            className={`lg:hidden p-2 ${isDark ? "text-white" : "text-gray-700"}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[60] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className={`fixed top-0 right-0 bottom-0 w-full max-w-sm z-[70] shadow-2xl lg:hidden flex flex-col ${
                isDark ? "bg-[#0A0F0A] border-l border-[#1A3A25]" : "bg-white"
              }`}
            >
              <div
                className={`flex items-center justify-between p-4 border-b ${
                  isDark ? "border-[#1A3A25]" : "border-gray-100"
                }`}
              >
                <Image
                  src="/icons/Nav-logo.png"
                  alt="Befikra Partner"
                  width={140}
                  height={36}
                  className="h-9 w-auto"
                />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className={`p-2 ${isDark ? "text-white" : "text-gray-700"}`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <ul className="flex flex-col p-4 gap-1 flex-1 overflow-y-auto">
                {navLinks.map((link) => {
                  const active = isActive(pathname, link.href);

                  if (link.highlight) {
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block rounded-r-lg px-4 py-3 text-base transition-colors ${mobileHighlightClass}`}
                        >
                          <AiFeaturesLabel />
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={`block rounded-r-lg px-4 py-3 text-base transition-colors ${mobileLinkClass(link.href)}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div
                className={`p-6 border-t ${
                  isDark ? "border-[#1A3A25]" : "border-gray-100"
                }`}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={`flex w-full justify-center rounded-full px-6 py-3 font-semibold transition-colors ${
                    isDark
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "bg-emerald-500 text-white hover:bg-emerald-600"
                  }`}
                >
                  Get a demo
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {!isDark && <div className="h-16 md:h-[4.5rem]" aria-hidden />}
    </>
  );
}
