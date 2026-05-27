"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

const leftLinks = [
  { label: "Home", href: "/" },
  { label: "Experiences", href: "/experiences" },
  { label: "Our Story", href: "/our-story" },
  { label: "Rooms", href: "/rooms" },
];

const rightLinks = [
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
];

export default function DynamicNav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Scroll animations for the unified navbar
  const navWidth = useTransform(scrollY, [0, 300], ["85%", "100%"]);
  const navTop = useTransform(scrollY, [0, 300], ["40px", "0px"]);
  const navRadius = useTransform(scrollY, [0, 300], ["9999px", "0px"]);
  const navBg = useTransform(scrollY, [0, 300], ["rgba(15, 25, 18, 0.45)", "rgba(12, 20, 14, 0.95)"]);
  const navBorder = useTransform(scrollY, [0, 300], ["1px solid rgba(255,255,255,0.18)", "1px solid rgba(255,255,255,0.08)"]);
  const navPadding = useTransform(scrollY, [0, 300], ["0 40px", "0 32px"]);
  const navHeight = useTransform(scrollY, [0, 300], ["64px", "72px"]);

  // Animate the gap in the middle so the links move closer as the logo shrinks
  const middleGap = useTransform(scrollY, [0, 300], ["300px", "140px"]);

  const linkStyle = (isActive: boolean) => ({
    color: isActive ? "#C89B4A" : "#ffffff",
    fontSize: "13px",
    fontWeight: 600 as const,
    textTransform: "uppercase" as const,
    letterSpacing: "0.13em",
    whiteSpace: "nowrap" as const,
    padding: "10px 16px",
    textDecoration: "none",
    position: "relative" as const,
    transition: "color 0.2s",
  });

  const dotStyle = {
    color: "rgba(255,255,255,0.35)",
    fontSize: "14px",
    userSelect: "none" as const,
    padding: "0 2px",
  };

  return (
    <motion.header
      style={{
        position: "fixed",
        left: "50%",
        x: "-50%",
        top: navTop,
        width: navWidth,
        height: navHeight,
        borderRadius: navRadius,
        backgroundColor: navBg,
        border: navBorder,
        padding: navPadding,
        zIndex: 40,
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
      }}
      className="hidden lg:flex"
    >
      <div style={{ display: "flex", flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
        {/* Left Links */}
        {leftLinks.map((link, idx) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.label} style={{ display: "flex", alignItems: "center" }}>
              <Link
                href={link.href}
                style={linkStyle(isActive)}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C89B4A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#C89B4A" : "#ffffff")}
              >
                {link.label}
              </Link>
              {idx < leftLinks.length - 1 && <span style={dotStyle}>·</span>}
            </div>
          );
        })}
      </div>

      {/* Dynamic Gap for the Logo */}
      <motion.div style={{ width: middleGap, flexShrink: 0 }} />

      <div style={{ display: "flex", flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
        {/* Right Links */}
        {rightLinks.map((link, idx) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.label} style={{ display: "flex", alignItems: "center" }}>
              {idx === 0 && <span style={dotStyle}>·</span>}
              <Link
                href={link.href}
                style={linkStyle(isActive)}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C89B4A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#C89B4A" : "#ffffff")}
              >
                {link.label}
              </Link>
              {idx < rightLinks.length - 1 && <span style={dotStyle}>·</span>}
            </div>
          );
        })}

        {/* Contact Button */}
        <Link
          href="/contact"
          style={{
            marginLeft: "24px",
            backgroundColor: "#C89B4A",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            padding: "10px 26px",
            borderRadius: "9999px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 14px rgba(200,155,74,0.35)",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d6aa57")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C89B4A")}
        >
          Contact
        </Link>
      </div>
    </motion.header>
  );
}
