"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { MapPin, Phone, Mail, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { CONTACT } from "@/app/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  checkin: z.string().min(1, "Please select a check-in date."),
  checkout: z.string().min(1, "Please select a check-out date."),
  guests: z.string().min(1, "Please select number of guests."),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "10px",
  border: "1.5px solid rgba(0,0,0,0.12)",
  fontSize: "15px",
  color: "#1A1A1A",
  backgroundColor: "#fff",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box" as const,
};

const labelStyle = {
  fontSize: "13px",
  fontWeight: 600,
  color: "#374151",
  marginBottom: "6px",
  display: "block",
};

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Contact form submission:", data);
    setStatus("success");
    reset();
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: "50vh", minHeight: "340px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/hero_slides/Slide5.webp" alt="Contact S&B Dreams House" fill className="object-cover" priority />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "2rem" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C89B4A", display: "block", marginBottom: "1rem" }}>We'd Love to Hear From You</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>Get in Touch</h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#fff" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left: Form */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 700, color: "#1A1A1A", marginBottom: "0.5rem" }}>Book Your Stay</h2>
            <p style={{ color: "#6B7280", marginBottom: "2rem", lineHeight: 1.6 }}>Fill in the form and we'll get back to you within 24 hours with availability and rates.</p>

            {/* Success state */}
            {status === "success" && (
              <div style={{ backgroundColor: "#f0fdf4", border: "1px solid #86efac", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <CheckCircle size={20} color="#16a34a" />
                <span style={{ color: "#15803d", fontSize: "15px", fontWeight: 500 }}>Thank you! We'll be in touch within 24 hours.</span>
              </div>
            )}
            {status === "error" && (
              <div style={{ backgroundColor: "#fef2f2", border: "1px solid #fca5a5", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <AlertCircle size={20} color="#dc2626" />
                <span style={{ color: "#dc2626", fontSize: "15px", fontWeight: 500 }}>Something went wrong. Please try again or call us directly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label htmlFor="contact-name" style={labelStyle}>Full Name *</label>
                <input id="contact-name" type="text" {...register("name")} placeholder="Your full name" style={{ ...inputStyle, borderColor: errors.name ? "#ef4444" : "rgba(0,0,0,0.12)" }} />
                {errors.name && <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px", display: "block" }}>{errors.name.message}</span>}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label htmlFor="contact-email" style={labelStyle}>Email *</label>
                  <input id="contact-email" type="email" {...register("email")} placeholder="you@email.com" style={{ ...inputStyle, borderColor: errors.email ? "#ef4444" : "rgba(0,0,0,0.12)" }} />
                  {errors.email && <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px", display: "block" }}>{errors.email.message}</span>}
                </div>
                <div>
                  <label htmlFor="contact-phone" style={labelStyle}>Phone *</label>
                  <input id="contact-phone" type="tel" {...register("phone")} placeholder="+91 98765 43210" style={{ ...inputStyle, borderColor: errors.phone ? "#ef4444" : "rgba(0,0,0,0.12)" }} />
                  {errors.phone && <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px", display: "block" }}>{errors.phone.message}</span>}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label htmlFor="contact-checkin" style={labelStyle}>Check-In *</label>
                  <input id="contact-checkin" type="date" {...register("checkin")} style={{ ...inputStyle, borderColor: errors.checkin ? "#ef4444" : "rgba(0,0,0,0.12)" }} />
                  {errors.checkin && <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px", display: "block" }}>{errors.checkin.message}</span>}
                </div>
                <div>
                  <label htmlFor="contact-checkout" style={labelStyle}>Check-Out *</label>
                  <input id="contact-checkout" type="date" {...register("checkout")} style={{ ...inputStyle, borderColor: errors.checkout ? "#ef4444" : "rgba(0,0,0,0.12)" }} />
                  {errors.checkout && <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px", display: "block" }}>{errors.checkout.message}</span>}
                </div>
              </div>

              <div>
                <label htmlFor="contact-guests" style={labelStyle}>Number of Guests *</label>
                <select id="contact-guests" {...register("guests")} style={{ ...inputStyle, borderColor: errors.guests ? "#ef4444" : "rgba(0,0,0,0.12)" }}>
                  <option value="">Select guests</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n} value={n}>{n} guest{n > 1 ? "s" : ""}</option>)}
                </select>
                {errors.guests && <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px", display: "block" }}>{errors.guests.message}</span>}
              </div>

              <div>
                <label htmlFor="contact-message" style={labelStyle}>Message (optional)</label>
                <textarea id="contact-message" {...register("message")} rows={4} placeholder="Tell us about your visit, special requests, or any questions..." style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }} />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  backgroundColor: "#C89B4A",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  padding: "15px 36px",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  opacity: status === "loading" ? 0.8 : 1,
                  transition: "background-color 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                {status === "loading" ? (
                  <><Loader size={16} style={{ animation: "spin 1s linear infinite" }} /> Sending...</>
                ) : "Send Enquiry"}
              </button>
            </form>
          </div>

          {/* Right: Contact Info + Map */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ backgroundColor: "#F5F0E8", borderRadius: "16px", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#1A1A1A" }}>Contact Information</h3>
              {[
                { Icon: MapPin, text: CONTACT.address },
                { Icon: Phone, text: CONTACT.phone, href: CONTACT.phoneHref },
                { Icon: Mail, text: CONTACT.email, href: CONTACT.emailHref },
              ].map(({ Icon, text, href }) => (
                <div key={text} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", backgroundColor: "#C89B4A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={18} color="#fff" />
                  </div>
                  {href ? (
                    <a href={href} style={{ color: "#374151", fontSize: "14px", textDecoration: "none", paddingTop: "9px" }}>{text}</a>
                  ) : (
                    <span style={{ color: "#374151", fontSize: "14px", paddingTop: "9px", lineHeight: 1.5 }}>{text}</span>
                  )}
                </div>
              ))}
            </div>

            <div style={{ borderRadius: "16px", overflow: "hidden", height: "300px", boxShadow: "0 4px 24px rgba(0,0,0,0.1)" }}>
              <iframe
                title="S&B Dreams House Map"
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
    </main>
  );
}
