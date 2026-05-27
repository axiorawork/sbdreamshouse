"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import DynamicNav from "./DynamicNav";
import MobileMenu from "./MobileMenu";
import { Menu, X } from "lucide-react";

export default function NavController() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const { scrollY } = useScroll();
  const logoSize = useTransform(scrollY, [0, 300], [280, 120]);
  const logoTop = useTransform(scrollY, [0, 300], [-48, -24]);

  // Body scroll lock
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  // Escape key closes menu
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  const closeMenu = () => {
    setMobileOpen(false);
    hamburgerRef.current?.focus();
  };

  return (
    <>
      {/* Skip to main content (accessibility) */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Mobile Navbar Background (Appears on scroll) */}
      <motion.div
        className="lg:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "72px",
          backgroundColor: useTransform(scrollY, [0, 300], ["rgba(12, 20, 14, 0)", "rgba(12, 20, 14, 0.95)"]),
          borderBottom: useTransform(scrollY, [0, 300], ["1px solid rgba(255,255,255,0)", "1px solid rgba(255,255,255,0.08)"]),
          backdropFilter: useTransform(scrollY, [0, 300], ["blur(0px)", "blur(20px)"]),
          WebkitBackdropFilter: useTransform(scrollY, [0, 300], ["blur(0px)", "blur(20px)"]),
          boxShadow: useTransform(scrollY, [0, 300], ["0 4px 24px rgba(0,0,0,0)", "0 4px 24px rgba(0,0,0,0.25)"]),
          zIndex: 40,
          pointerEvents: "none",
          opacity: mobileOpen ? 0 : 1,
          transition: "opacity 0.2s",
        }}
      />

      {/* Floating Dynamic Logo — shared desktop & mobile */}
      <motion.div
        style={{
          position: "fixed",
          left: "50%",
          x: "-50%",
          top: logoTop,
          width: logoSize,
          height: logoSize,
          zIndex: 100,
          pointerEvents: "none",
          opacity: mobileOpen ? 0 : 1,
          transition: "opacity 0.2s",
        }}
      >
        <Link href="/" className="pointer-events-auto block w-full h-full" aria-label="S&B Dreams House - Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.webp"
            alt="S&B Dreams House Logo"
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]"
          />
        </Link>
      </motion.div>

      {/* Desktop navbar — hidden on mobile/tablet */}
      <DynamicNav />

      {/* Hamburger button — mobile/tablet only */}
      <button
        id="hamburger-btn"
        ref={hamburgerRef}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
        className="lg:hidden flex items-center justify-center"
        style={{
          position: "fixed",
          top: "24px",
          right: "20px",
          zIndex: 200,
          background: "rgba(15,25,18,0.55)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: undefined,
          cursor: "pointer",
          color: "#ffffff",
        }}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu onClose={closeMenu} />
        )}
      </AnimatePresence>
    </>
  );
}
