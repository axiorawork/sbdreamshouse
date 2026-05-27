"use client";

import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import DynamicNav from "./DynamicNav";
import MobileMenu from "./MobileMenu";
import { Menu, X } from "lucide-react";

export default function NavController() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const logoSize = useTransform(scrollY, [0, 300], [280, 120]);
  const logoTop = useTransform(scrollY, [0, 300], [-48, -24]);

  return (
    <>
      {/* Skip to main content (accessibility) */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Floating Dynamic Logo - Desktop Only */}
      <motion.div
        className="hidden lg:block"
        style={{
          position: "fixed",
          left: "50%",
          x: "-50%",
          top: logoTop,
          width: logoSize,
          height: logoSize,
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        <Link href="/" className="pointer-events-auto block w-full h-full" aria-label="S&B Dreams House - Home">
          <img 
            src="/logo.webp" 
            alt="S&B Dreams House Logo" 
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]" 
          />
        </Link>
      </motion.div>

      {/* Mobile Top Bar with Logo */}
      <div
        className="lg:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 105,
          background: "linear-gradient(to bottom, rgba(15,25,18,0.7) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      >
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="pointer-events-auto"
          aria-label="Scroll to top"
        >
          <img 
            src="/logo.webp" 
            alt="S&B Dreams House" 
            style={{ height: "48px", width: "auto", objectFit: "contain", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }} 
          />
        </button>
      </div>

      {/* Smooth Scroll-Driven Navbar */}
      <DynamicNav />

      {/* Mobile hamburger — always visible on small screens */}
      <div
        className="lg:hidden"
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: 110,
        }}
      >
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          style={{
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(15,25,18,0.75)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "9999px",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu onClose={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
