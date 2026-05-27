import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  stars: number;
}

export default function TestimonialCard({ quote, name, location, stars }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "2rem",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        border: "1px solid rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        height: "100%",
      }}
    >
      {/* Stars */}
      <div style={{ display: "flex", gap: "4px" }}>
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={16} fill="#C89B4A" color="#C89B4A" />
        ))}
      </div>

      {/* Quote */}
      <p
        style={{
          fontSize: "15px",
          color: "#374151",
          lineHeight: 1.7,
          fontStyle: "italic",
          flex: 1,
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Guest */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "9999px",
            backgroundColor: "#C89B4A",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div>
          <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>{name}</div>
          <div style={{ fontSize: "12px", color: "#9CA3AF" }}>{location}</div>
        </div>
      </div>
    </div>
  );
}
