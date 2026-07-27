"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { fadeInDown } from "@/components/motion";
import { PREFETCH_ROUTES } from "@/lib/nav-routes";

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
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
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

function BrandLogo({
  isDark,
  className,
}: {
  isDark: boolean;
  className?: string;
}) {
  // Instant swap. Dark logo renders slightly smaller so it matches light logo optical weight.
  const sizeClass = className ?? (isDark ? "h-9" : "h-10");

  return (
    <span
      className={`relative inline-flex shrink-0 items-center ${sizeClass}`}
      aria-hidden
    >
      <img
        src="/icons/Nav-logo.png"
        alt=""
        width={138}
        height={40}
        decoding="async"
        draggable={false}
        className="h-full w-auto"
        style={{ display: isDark ? "none" : "block" }}
      />
      <img
        src="/icons/Nav-logo-dark.png"
        alt=""
        width={138}
        height={40}
        decoding="async"
        draggable={false}
        className="h-full w-auto"
        style={{ display: isDark ? "block" : "none" }}
      />
    </span>
  );
}

type NavbarProps = {
  theme?: "light" | "dark";
};

export default function Navbar({ theme = "light" }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isDark =
    theme === "dark" || pathname === "/our-story" || pathname.startsWith("/our-story/");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const prefetchRoute = useCallback(
    (href: string) => {
      const path = href.split("#")[0] || "/";
      if (!path || path === pathname) return;
      try {
        router.prefetch(path);
      } catch {
        // ignore
      }
    },
    [pathname, router]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep navbar mounted across navigations, but reset transient UI state
  useEffect(() => {
    setMobileOpen(false);
    setScrolled(window.scrollY > 8);
    // Warm sibling routes after each navigation settles
    const id = window.setTimeout(() => {
      for (const href of PREFETCH_ROUTES) {
        if (href !== pathname) {
          try {
            router.prefetch(href);
          } catch {
            // ignore
          }
        }
      }
    }, 120);
    return () => window.clearTimeout(id);
  }, [pathname, router]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerClass = isDark
    ? scrolled
      ? "bg-footer-dark/90 backdrop-blur-md border-b border-brand-green/25"
      : "bg-transparent border-b border-transparent"
    : scrolled
      ? "bg-white/90 backdrop-blur-md border-b border-border-default shadow-card"
      : "bg-white border-b border-border-default";

  const desktopLinkClass = (href: string) => {
    const active = isActive(pathname, href);
    if (isDark) {
      return active
        ? "font-semibold text-brand-green"
        : "font-medium text-gray-300 hover:text-white";
    }
    return active
      ? "font-semibold text-brand-green-dark"
      : "font-medium text-subtext hover:text-brand-green";
  };

  const mobileLinkClass = (href: string) => {
    const active = isActive(pathname, href);
    if (isDark) {
      return active
        ? "font-semibold text-brand-green bg-brand-green/10 border-l-2 border-brand-green"
        : "font-medium text-gray-300 hover:text-white border-l-2 border-transparent";
    }
    return active
      ? "font-semibold text-brand-green-dark bg-brand-green-light border-l-2 border-brand-green"
      : "font-medium text-subtext hover:text-brand-green border-l-2 border-transparent";
  };

  const desktopHighlightClass = isDark
    ? "font-semibold text-brand-green"
    : "font-semibold text-brand-green-dark";

  const mobileHighlightClass = isDark
    ? "font-semibold text-brand-green border-l-2 border-transparent"
    : "font-semibold text-brand-green-dark border-l-2 border-transparent";

  const ctaClass = isDark
    ? "inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-navy transition-all duration-200 ease-brand hover:bg-off-white active:scale-95"
    : "inline-flex rounded-full bg-brand-green px-6 py-2.5 text-sm font-semibold text-white shadow-cta-glow transition-all duration-200 ease-brand hover:bg-brand-green-dark active:scale-95";
  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeInDown}
        className={`fixed top-0 left-0 right-0 z-50 ${headerClass}`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-[4.5rem] flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0" aria-label="Befikra Partner home" prefetch onMouseEnter={() => prefetchRoute("/")}>
            <BrandLogo isDark={isDark} />
          </Link>

          <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);

              if (link.highlight) {
                return (
                  <li key={link.label} className="relative">
                    <Link
                      href={link.href}
                      prefetch
                      onMouseEnter={() => prefetchRoute(link.href)}
                      onFocus={() => prefetchRoute(link.href)}
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
                    prefetch
                    onMouseEnter={() => prefetchRoute(link.href)}
                    onFocus={() => prefetchRoute(link.href)}
                    className={`relative inline-block py-1 text-sm transition-colors ${desktopLinkClass(link.href)}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active-underline"
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                          isDark ? "bg-brand-green" : "bg-brand-green"
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
            <Link
              href="/contact"
              prefetch
              onMouseEnter={() => prefetchRoute("/contact")}
              className={ctaClass}
            >
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
              className={`fixed top-0 right-0 bottom-0 z-[70] flex w-full max-w-sm flex-col shadow-modal lg:hidden ${
                isDark ? "border-l border-brand-green/25 bg-footer-dark" : "bg-white"
              }`}
            >
              <div
                className={`flex items-center justify-between border-b p-4 ${
                  isDark ? "border-brand-green/25" : "border-border-default"
                }`}
              >
                <Link href="/" onClick={() => setMobileOpen(false)} aria-label="Befikra Partner home">
                  <BrandLogo isDark={isDark} className={isDark ? "h-8" : "h-9"} />
                </Link>
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
                          prefetch
                          onClick={() => setMobileOpen(false)}
                          onMouseEnter={() => prefetchRoute(link.href)}
                          onTouchStart={() => prefetchRoute(link.href)}
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
                        prefetch
                        onClick={() => setMobileOpen(false)}
                        onMouseEnter={() => prefetchRoute(link.href)}
                        onTouchStart={() => prefetchRoute(link.href)}
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
                className={`border-t p-6 ${
                  isDark ? "border-brand-green/25" : "border-border-default"
                }`}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={`flex w-full justify-center rounded-full px-6 py-3 font-semibold transition-all duration-200 ease-brand active:scale-95 ${
                    isDark
                      ? "bg-white text-navy hover:bg-off-white"
                      : "bg-brand-green text-white shadow-cta-glow hover:bg-brand-green-dark"
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
