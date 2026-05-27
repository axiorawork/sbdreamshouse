"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT } from "@/app/lib/constants";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Experiences", href: "/experiences" },
  { label: "Our Story", href: "/our-story" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const roomLinks = [
  { label: "Cave Suite", href: "/rooms#cave-suite" },
  { label: "Garden View Room", href: "/rooms#garden-view" },
  { label: "Family Suite", href: "/rooms#family-suite" },
  { label: "Deluxe Double", href: "/rooms#deluxe-double" },
];

const experienceLinks = [
  { label: "Nature Walks", href: "/experiences#nature-walks" },
  { label: "Tea Estate Tours", href: "/experiences#tea-estate" },
  { label: "Kayaking & Boating", href: "/experiences#kayaking" },
  { label: "Sunrise Viewing", href: "/experiences#sunrise" },
];

const footerLinkStyle = {
  color: "rgba(255,255,255,0.6)",
  textDecoration: "none",
  fontSize: "14px",
  lineHeight: "2",
  transition: "color 0.2s",
};

const socialLinks = [
  { href: CONTACT.instagram, icon: InstagramIcon as React.ElementType, label: "Instagram", isSvg: true },
  { href: CONTACT.facebook, icon: FacebookIcon as React.ElementType, label: "Facebook", isSvg: true },
  { href: CONTACT.whatsapp, icon: WhatsAppIcon as React.ElementType, label: "WhatsApp", isSvg: true },
  { href: CONTACT.youtube, icon: YoutubeIcon as React.ElementType, label: "YouTube", isSvg: true },
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#0A1210", color: "#fff" }}
      role="contentinfo"
    >
      {/* Gold accent line */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, transparent, #C89B4A, transparent)" }} />

      <div
        id="footer-grid"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
        }}
      >
        {/* Column 1: Brand */}
        <div>
          <Link href="/" aria-label="S&B Dreams House - Home">
            <Image
              src="/logo.webp"
              alt="S&B Dreams House Logo"
              width={90}
              height={90}
              className="object-contain"
              style={{ marginBottom: "1rem" }}
            />
          </Link>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: "1.8", marginBottom: "1.5rem" }}>
            A one-of-a-kind cave-inspired homestay in the heart of Munnar, Kerala. Warm hospitality, nature experiences, and memories that last a lifetime.
          </p>
          <div id="footer-social" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: "38px",
                  height: "38px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderRadius: "9999px",
                  color: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#C89B4A";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.border = "1px solid #C89B4A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.12)";
                }}
              >
                {s.isSvg ? <s.icon /> : <s.icon size={16} />}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C89B4A", marginBottom: "1.25rem", fontFamily: "inherit" }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: "none" }}>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  style={footerLinkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C89B4A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Rooms & Experiences */}
        <div>
          <h3 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C89B4A", marginBottom: "1.25rem", fontFamily: "inherit" }}>
            Rooms & Experiences
          </h3>
          <ul style={{ listStyle: "none" }}>
            {roomLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} style={footerLinkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C89B4A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li style={{ marginTop: "0.5rem" }}>
              <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Experiences</span>
            </li>
            {experienceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} style={footerLinkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C89B4A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C89B4A", marginBottom: "1.25rem", fontFamily: "inherit" }}>
            Contact
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            <a href={CONTACT.phoneHref} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", ...footerLinkStyle, textDecoration: "none" }}>
              <Phone size={15} style={{ marginTop: "2px", flexShrink: 0, color: "#C89B4A" }} />
              <span>{CONTACT.phone}</span>
            </a>
            <a href={CONTACT.emailHref} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", ...footerLinkStyle, textDecoration: "none" }}>
              <Mail size={15} style={{ marginTop: "2px", flexShrink: 0, color: "#C89B4A" }} />
              <span>{CONTACT.email}</span>
            </a>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <MapPin size={15} style={{ marginTop: "2px", flexShrink: 0, color: "#C89B4A" }} />
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: "1.6" }}>
                S&B Dreams House<br />Munnar, Kerala — 685612<br />India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "1.25rem 2rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px" }}>
          © {new Date().getFullYear()} S&B Dreams House. All rights reserved.
        </p>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px" }}>
          Made with ❤️ in Kerala
        </p>
      </div>
    </footer>
  );
}

// Needed for the React.ElementType usage above
import type React from "react";
