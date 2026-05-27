"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const pillStyle = {
  pointerEvents: "auto" as const,
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgba(15, 25, 18, 0.45)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  borderRadius: "9999px",
  padding: "14px 32px",
  border: "1px solid rgba(255,255,255,0.18)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
  gap: "0px",
  minWidth: "420px",
  justifyContent: "center" as const,
};

const dotStyle = {
  color: "rgba(255,255,255,0.4)",
  fontSize: "16px",
  userSelect: "none" as const,
  padding: "0 4px",
  lineHeight: 1,
};

export default function SplitNav() {
  const pathname = usePathname();

  const renderLink = (
    link: { label: string; href: string },
    isLast: boolean,
    showDotAfter: boolean
  ) => {
    const isActive = pathname === link.href;
    return (
      <div
        key={link.label}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Link
          href={link.href}
          aria-current={isActive ? "page" : undefined}
          style={{
            color: isActive ? "#C89B4A" : "#ffffff",
            fontSize: "13px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.13em",
            whiteSpace: "nowrap",
            padding: "10px 16px",
            textDecoration: "none",
            position: "relative",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "#C89B4A")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = isActive ? "#C89B4A" : "#ffffff")
          }
        >
          {link.label}
          {isActive && (
            <span
              style={{
                position: "absolute",
                bottom: "-2px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60%",
                height: "2px",
                backgroundColor: "#C89B4A",
                borderRadius: "9999px",
                display: "block",
              }}
            />
          )}
        </Link>
        {showDotAfter && <span style={dotStyle}>·</span>}
      </div>
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        width: "100%",
        pointerEvents: "none",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "300px",
        padding: "68px 0 0 0",
      }}
    >
      {/* Left Pill */}
      <nav aria-label="Primary navigation left" style={pillStyle}>
        {leftLinks.map((link, idx) =>
          renderLink(link, idx === leftLinks.length - 1, idx < leftLinks.length - 1)
        )}
      </nav>

      {/* Right Pill */}
      <nav aria-label="Primary navigation right" style={pillStyle}>
        {rightLinks.map((link, idx) =>
          renderLink(link, idx === rightLinks.length - 1, true)
        )}

        {/* CONTACT Button */}
        <Link
          href="/contact"
          style={{
            marginLeft: "6px",
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
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#d6aa57")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#C89B4A")
          }
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}