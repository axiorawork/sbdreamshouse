"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LEFT_NAV_LINKS, RIGHT_NAV_LINKS } from "@/app/lib/constants";

const linkStyle = (isActive: boolean) => ({
  color: isActive ? "#C89B4A" : "#ffffff",
  fontSize: "13px",
  fontWeight: 600 as const,
  textTransform: "uppercase" as const,
  letterSpacing: "0.12em",
  whiteSpace: "nowrap" as const,
  padding: "4px 12px",
  textDecoration: "none",
  position: "relative" as const,
  transition: "color 0.2s",
  borderBottom: isActive ? "2px solid #C89B4A" : "none",
});

const dotStyle = {
  color: "rgba(255,255,255,0.35)",
  fontSize: "14px",
  userSelect: "none" as const,
  padding: "0 2px",
};

export default function ScrollNav() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "72px",
        backgroundColor: "rgba(12,20,14,0.95)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
      }}
    >
      {/* Left links */}
      <nav aria-label="Primary navigation left" style={{ display: "flex", alignItems: "center", flex: 1 }}>
        {LEFT_NAV_LINKS.map((link, idx) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.label} style={{ display: "flex", alignItems: "center" }}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                style={linkStyle(isActive)}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C89B4A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#C89B4A" : "#ffffff")}
              >
                {link.label}
              </Link>
              {idx < LEFT_NAV_LINKS.length - 1 && <span style={dotStyle}>·</span>}
            </div>
          );
        })}
      </nav>

      {/* Center logo */}
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
        <Link href="/" aria-label="S&B Dreams House - Home">
          <motion.img
            layoutId="brand-logo"
            src="/logo.webp"
            alt="S&B Dreams House Logo"
            width={52}
            height={52}
            className="object-contain"
            style={{ display: "block" }}
          />
        </Link>
      </div>

      {/* Right links */}
      <nav aria-label="Primary navigation right" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", flex: 1, gap: "0" }}>
        {RIGHT_NAV_LINKS.map((link, idx) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.label} style={{ display: "flex", alignItems: "center" }}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                style={linkStyle(isActive)}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C89B4A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#C89B4A" : "#ffffff")}
              >
                {link.label}
              </Link>
              {idx < RIGHT_NAV_LINKS.length - 1 && <span style={dotStyle}>·</span>}
            </div>
          );
        })}
        <Link
          href="/contact"
          style={{
            marginLeft: "16px",
            backgroundColor: "#C89B4A",
            color: "#ffffff",
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            padding: "8px 20px",
            borderRadius: "9999px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d6aa57")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C89B4A")}
        >
          Contact
        </Link>
      </nav>
    </motion.header>
  );
}
