"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { CONTACT } from "@/app/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Experiences", href: "/experiences" },
  { label: "Our Story", href: "/our-story" },
  { label: "Rooms", href: "/rooms" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const drawerVariants = {
  closed: { x: "100%", opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" as const },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const linkVariants: any = {
  closed: { opacity: 0, x: 40 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07, duration: 0.35, ease: "easeOut" },
  }),
};

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Dark backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 54,
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
        aria-hidden="true"
      />

      {/* Drawer */}
      <motion.div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        variants={drawerVariants}
        initial="closed"
        animate="open"
        exit="exit"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          maxWidth: "380px",
          height: "100vh",
          zIndex: 55,
          backgroundColor: "rgba(10, 18, 12, 0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
          padding: "100px 40px 48px 40px",
          overflowY: "auto",
        }}
      >
        {/* Nav links */}
        <nav aria-label="Mobile navigation">
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.li
                  key={link.label}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    style={{
                      color: isActive ? "#C89B4A" : "#ffffff",
                      fontSize: "22px",
                      fontWeight: 600,
                      fontFamily: "'Playfair Display', serif",
                      textDecoration: "none",
                      padding: "14px 0",
                      borderBottom: `1px solid ${isActive ? "#C89B4A" : "rgba(255,255,255,0.08)"}`,
                      display: "block",
                      letterSpacing: "0.02em",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C89B4A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#C89B4A" : "#ffffff")}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Contact CTA */}
        <motion.div
          custom={navLinks.length}
          variants={linkVariants}
          initial="closed"
          animate="open"
          style={{ marginTop: "32px" }}
        >
          <Link
            href="/contact"
            onClick={onClose}
            style={{
              backgroundColor: "#C89B4A",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              padding: "16px 40px",
              borderRadius: "9999px",
              textAlign: "center",
              display: "block",
              boxShadow: "0 4px 20px rgba(200,155,74,0.4)",
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
        </motion.div>

        {/* Social icons — pushed to bottom */}
        <motion.div
          custom={navLinks.length + 1}
          variants={linkVariants}
          initial="closed"
          animate="open"
          style={{
            marginTop: "auto",
            paddingTop: "32px",
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          {[
            { href: CONTACT.instagram, Icon: InstagramIcon, label: "Instagram" },
            { href: CONTACT.facebook, Icon: FacebookIcon, label: "Facebook" },
            { href: CONTACT.whatsapp, Icon: WhatsAppIcon, label: "WhatsApp" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                color: "rgba(255,255,255,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "44px",
                minHeight: "44px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C89B4A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
