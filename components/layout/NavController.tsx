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

      {/* Floating Dynamic Logo tied to scroll */}
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
