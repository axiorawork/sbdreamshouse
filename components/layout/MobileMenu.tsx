"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { LEFT_NAV_LINKS, RIGHT_NAV_LINKS } from "@/app/lib/constants";

const ALL_LINKS = [...LEFT_NAV_LINKS, ...RIGHT_NAV_LINKS, { label: "Contact", href: "/contact" }];

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.35, ease: "easeInOut" as const }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 55,
        backgroundColor: "rgba(10,18,12,0.97)",
        backdropFilter: "blur(20px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close menu"
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "9999px",
          color: "#ffffff",
          cursor: "pointer",
        }}
      >
        <X size={20} />
      </button>

      {/* Logo */}
      <Link href="/" onClick={onClose} aria-label="S&B Dreams House - Home" style={{ marginBottom: "3rem" }}>
        <Image
          src="/logo.webp"
          alt="S&B Dreams House Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </Link>

      {/* Nav links */}
      <nav aria-label="Mobile navigation">
        <ul style={{ listStyle: "none", textAlign: "center", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {ALL_LINKS.map((link, i) => {
            const isActive = pathname === link.href;
            const isContact = link.href === "/contact";
            return (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  style={{
                    color: isContact ? "#C89B4A" : isActive ? "#C89B4A" : "#ffffff",
                    fontSize: "20px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    textDecoration: "none",
                    display: "inline-block",
                    padding: isContact ? "10px 32px" : "4px 0",
                    borderBottom: isContact ? "none" : isActive ? "2px solid #C89B4A" : "2px solid transparent",
                    backgroundColor: isContact ? "#C89B4A" : "transparent",
                    borderRadius: isContact ? "9999px" : "0",
                  }}
                >
                  {link.label}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
}
