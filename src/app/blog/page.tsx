import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { siteConfig } from "@/config/site";
import { articles } from "@/content/blog";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
  lightBg: "#F5F3EE",
};

export const metadata: Metadata = {
  title: "Blog - Conseils rideau metallique",
  description:
    "Guides, conseils et astuces pour choisir, entretenir et reparer votre rideau metallique. Les experts DRM partagent leur savoir-faire.",
  alternates: { canonical: `${siteConfig.url}/blog/` },
};

export default function BlogIndex() {
  return (
    <>
      <Header />
      <section
        style={{
          paddingTop: 80,
          background: COLORS.primary,
          color: "#FFFFFF",
          padding: "120px 20px 80px",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 500,
              margin: "0 0 16px 0",
              letterSpacing: "-0.02em",
            }}
          >
            Blog <span style={{ color: COLORS.accent }}>rideau metallique</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.75)", margin: 0 }}>
            Conseils, guides et actualites DRM pour les professionnels et particuliers
          </p>
        </div>
      </section>

      <section data-section-lg style={{ padding: "80px 20px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            data-grid-3
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {articles.map((a) => (
              <a
                key={a.slug}
                href={`/blog/${a.slug}/`}
                style={{
                  background: "#FFFFFF",
                  borderRadius: 14,
                  overflow: "hidden",
                  border: "1px solid #E5E7EB",
                  textDecoration: "none",
                  color: COLORS.primary,
                }}
              >
                <div style={{ aspectRatio: "16 / 10", overflow: "hidden" }}>
                  <img
                    src={a.image}
                    alt={a.title}
                    title={a.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", gap: 12, marginBottom: 12, fontSize: 12, color: "#6B7280" }}>
                    <span style={{ color: COLORS.accent, fontWeight: 600 }}>{a.category}</span>
                    <span>·</span>
                    <span>{a.date}</span>
                  </div>
                  <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 10px 0", lineHeight: 1.3 }}>
                    {a.title}
                  </h2>
                  <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6, margin: 0 }}>
                    {a.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
