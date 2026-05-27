import { BLOG_POSTS } from "@/app/lib/constants";
import { generatePageMetadata } from "@/app/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return generatePageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${slug}` });
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: "60vh", minHeight: "380px", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: "4rem" }}>
        <Image src={post.image} alt={post.alt} fill className="object-cover" priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "0 2rem", maxWidth: "860px" }}>
          <span style={{ display: "inline-block", backgroundColor: "#C89B4A", color: "#fff", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 14px", borderRadius: "9999px", marginBottom: "1rem" }}>{post.category}</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 52px)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>{post.title}</h1>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", marginTop: "1rem", color: "rgba(255,255,255,0.65)", fontSize: "13px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><Calendar size={13} /> {post.date}</span>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}><Clock size={13} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "5rem 2rem", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#C89B4A", fontSize: "14px", fontWeight: 600, textDecoration: "none", marginBottom: "2.5rem" }}>
            <ChevronLeft size={16} /> Back to Blog
          </Link>
          <div
            style={{ color: "#374151", lineHeight: 1.9, fontSize: "16.5px" }}
            dangerouslySetInnerHTML={{
              __html: post.content
                .split("\n\n")
                .map((block) => {
                  if (block.startsWith("## ")) return `<h2 style="font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:#1A1A1A;margin:2.5rem 0 1rem">${block.replace("## ", "")}</h2>`;
                  if (block.startsWith("### ")) return `<h3 style="font-family:'Playfair Display',serif;font-size:20px;font-weight:600;color:#1A1A1A;margin:2rem 0 0.75rem">${block.replace("### ", "")}</h3>`;
                  if (block.startsWith("**")) return `<p style="margin-bottom:1rem;font-weight:600">${block}</p>`;
                  return `<p style="margin-bottom:1rem">${block}</p>`;
                })
                .join(""),
            }}
          />
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section style={{ padding: "4rem 2rem", backgroundColor: "#F5F0E8" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "30px", fontWeight: 700, color: "#1A1A1A", marginBottom: "2rem", textAlign: "center" }}>Related Posts</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {related.map((p) => <BlogCard key={p.slug} {...p} />)}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
