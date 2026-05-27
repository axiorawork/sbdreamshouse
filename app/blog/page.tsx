import { generatePageMetadata } from "@/app/lib/metadata";
import { BLOG_POSTS } from "@/app/lib/constants";
import BlogCard from "@/components/ui/BlogCard";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = generatePageMetadata(
  "Blog | S&B Dreams House",
  "Travel guides, tips, and stories about Munnar and Kerala. Discover the best of the region through the eyes of S&B Dreams House.",
  "/blog"
);

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: "50vh", minHeight: "340px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/hero_slides/Slide5.webp" alt="Blog — S&B Dreams House" fill className="object-cover" priority />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "2rem" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C89B4A", display: "block", marginBottom: "1rem" }}>Stories & Guides</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>Our Blog</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", marginTop: "1rem", maxWidth: "600px", margin: "1rem auto 0" }}>Insights, travel guides, and stories from the heart of Munnar.</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading title="Latest Posts" subtitle="Discover Munnar through our guides and stories." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
