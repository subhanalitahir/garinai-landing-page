"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Roadmap", href: "#" },
  { label: "Docs", href: "#" },
];

const socialLinks = ["TWITTER", "DISCORD", "GITHUB", "TELEGRAM"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* ── Fixed top navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Image src="/image/logo.png" alt="GarinAI Logo" width={28} height={28} />
          <span className="text-[11px] tracking-[0.28em] uppercase text-white font-light select-none"
            style={{ fontFamily: "Neue Montreal" }}>
            GarinAI
          </span>
        </a>

        {/* Desktop nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`relative px-4 py-1.5 text-[11px] font-light tracking-[0.18em] uppercase transition-colors duration-200 rounded-full ${
                activeLink === link.label
                  ? "text-white"
                  : "text-white/45 hover:text-white/80"
              }`}
              style={{ fontFamily: "Neue Montreal" }}
            >
              {activeLink === link.label && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full border border-white/14 bg-white/7"
                  transition={{ type: "spring", stiffness: 380, damping: 36 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Desktop CTA — hidden on mobile */}
        <a
          href="#"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-white/14 bg-white/7 px-4 py-1.5 text-[11px] font-light tracking-[0.18em] uppercase text-white/80 transition-all duration-200 hover:border-white/30 hover:bg-white/12 hover:text-white"
          style={{ fontFamily: "Neue Montreal" }}
        >
          Get Started
        </a>

        {/* Mobile hamburger — visible only on mobile */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden relative z-50 flex h-8 w-8 items-center justify-center cursor-pointer"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.svg
                key="close"
                initial={{ opacity: 0, rotate: -30 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 30 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                width="20" height="20" viewBox="0 0 20 20" fill="none"
                className="text-white"
              >
                <line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="17" y1="3" x2="3" y2="17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </motion.svg>
            ) : (
              <motion.div
                key="hamburger"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-1.25"
              >
                <span className="block h-px w-5 bg-white" />
                <span className="block h-px w-5 bg-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ backgroundColor: "var(--background)" }}
          >
            {/* Dot grid background */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            />

            {/* Ambient orb */}
            <div
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full pointer-events-none -z-10"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04), transparent 70%)" }}
            />

            {/* Nav links */}
            <div className="flex flex-1 flex-col items-center justify-center gap-2 -mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.08 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => { setActiveLink(link.label); setIsOpen(false); }}
                    className="relative block leading-[0.88] uppercase select-none text-white"
                    style={{
                      fontFamily: "Canopee",
                      fontSize: "clamp(1.8rem, 5.5vw, 3.2rem)",
                      fontWeight: 400,
                      letterSpacing: "0.02em",
                      transition: "letter-spacing 0.4s ease-out",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.letterSpacing = "0.12em";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.letterSpacing = "0.02em";
                    }}
                  >
                    <span className="relative z-10">{link.label}</span>

                    {/* Active underline */}
                    {activeLink === link.label && (
                      <motion.span
                        layoutId="overlay-active"
                        className="absolute bottom-1 left-0 right-0 h-px pointer-events-none"
                        style={{ background: "rgba(255,255,255,0.35)" }}
                      />
                    )}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social links at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, delay: 0.5 }}
              className="flex items-center justify-center gap-6 pb-10 text-[9px] tracking-[0.38em] text-white/30 uppercase"
              style={{ fontFamily: "Neue Montreal" }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="hover:text-white/70 transition-colors duration-200"
                >
                  {social}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
