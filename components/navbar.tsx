"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "WORK", href: "#" },
  { label: "ABOUT", href: "#" },  { label: "BLOG", href: "#" },
];

const socialLinks = ["TWITTER", "INSTAGRAM", "DRIBBLE", "BEHANCE"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  return (
    <>
      {/* ── Fixed top navbar — always above overlay ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
        {/* Logo left */}
        <div className="flex items-center gap-3">
            <Image src="/image/logo.png" alt="Logo" width={32} height={32} className="relative z-10" />
            <span className="text-[11px] font-[Neue Montreal] tracking-[0.28em] uppercase text-white font-bold select-none">
              GarbinAI
            </span>
        </div>

        {/* Menu / Close toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="relative z-50 cursor-pointer w-8 h-8 flex items-center justify-center"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              /* Thin elegant close × */
              <motion.svg
                key="close"
                initial={{ opacity: 0, rotate: -30 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 30 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className="text-white"
              >
                <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
                <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
              </motion.svg>
            ) : (
              /* Two-line hamburger */
              <motion.div
                key="hamburger"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-1.5"
              >
                <span className="block w-6 h-px bg-white" />
                <span className="block w-6 h-px bg-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* ── Full-screen overlay menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: "var(--background)" }}
          >
            {/* Nav links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-1 -mt-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.12 + i * 0.13,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.label)}
                    className="relative block text-white leading-[0.88] uppercase select-none"
                    style={{
                      fontFamily: "Canopee",
                      fontSize: "clamp(4.5rem, 8vw, 6rem)",
                      fontWeight: 400,
                      letterSpacing: "0.04em",
                      transition: "letter-spacing 0.45s ease-out",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.letterSpacing = "0.22em";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.letterSpacing = "0.04em";
                    }}
                  >
                    <span className="relative z-10">{link.label}</span>

                    {/* Active red stripe through the middle */}
                    {activeLink === link.label && (
                      <span
                        className="absolute left-0 right-0 z-20 pointer-events-none"
                        style={{
                          top: "52%",
                          height: "0.13em",
                          background: "#c94a1a",
                          transform: "translateY(-50%)",
                        }}
                      />
                    )}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center justify-center gap-3 pb-10 text-[9px] tracking-[0.42em] text-white/35 uppercase"
            >
              {socialLinks.map((social) => (
                <span key={social} className="flex items-center gap-3">
                  <a
                    href="#"
                    className="hover:text-white/70 transition-colors duration-200"
                  >
                    {social}
                  </a>
                  <span className="text-white/20">.</span>
                </span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
