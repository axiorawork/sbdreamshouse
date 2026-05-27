"use client";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { CONTACT } from "@/app/lib/constants";

const landmarks = [
  { name: "Aster Medicity", distance: "1 min walk" },
  { name: "Munnar Town Center", distance: "5 min drive" },
  { name: "Mattupetty Dam", distance: "20 min drive" },
  { name: "Eravikulam National Park", distance: "25 min drive" },
];

export default function LocationSection() {
  return (
    <section
      id="location"
      aria-label="Location and directions"
      style={{ padding: "6rem 2rem", backgroundColor: "#F5F0E8" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeading
          label="Find Us"
          title="How to Reach Us"
          subtitle="Located in the heart of Munnar, Kerala — close to everything yet perfectly secluded."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Left: Contact Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", backgroundColor: "#C89B4A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={18} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: "#1A1A1A", marginBottom: "2px" }}>Address</div>
                  <div style={{ color: "#6B7280", fontSize: "14px", lineHeight: 1.6 }}>{CONTACT.address}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", backgroundColor: "#C89B4A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={18} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: "#1A1A1A", marginBottom: "2px" }}>Phone</div>
                  <a href={CONTACT.phoneHref} style={{ color: "#6B7280", fontSize: "14px", textDecoration: "none" }}>{CONTACT.phone}</a>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", backgroundColor: "#C89B4A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail size={18} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: "#1A1A1A", marginBottom: "2px" }}>Email</div>
                  <a href={CONTACT.emailHref} style={{ color: "#6B7280", fontSize: "14px", textDecoration: "none" }}>{CONTACT.email}</a>
                </div>
              </div>
            </div>

            {/* Nearby landmarks */}
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 600, color: "#1A1A1A", marginBottom: "1rem" }}>
                Nearby Landmarks
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {landmarks.map((l) => (
                  <div key={l.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.625rem 1rem", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.07)" }}>
                    <span style={{ fontSize: "14px", color: "#374151" }}>{l.name}</span>
                    <span style={{ fontSize: "13px", color: "#C89B4A", fontWeight: 600 }}>{l.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={CONTACT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "#0F1912",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                padding: "13px 28px",
                borderRadius: "9999px",
                textDecoration: "none",
                alignSelf: "flex-start",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C89B4A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0F1912")}
            >
              <Navigation size={16} /> Get Directions
            </a>
          </div>

          {/* Right: Embedded Map */}
          <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", height: "400px" }}>
            <iframe
              title="S&B Dreams House Location in Munnar, Kerala"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.9891399483765!2d77.05736731465026!3d10.089447992774584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0799ad6c5dc8c3%3A0x8d6f3d9b3c0d3e7f!2sMunnar%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
