import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig, services, zones } from "@/config/site";
import { articles } from "@/content/blog";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
};

const citySlug = siteConfig.city.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export const metadata: Metadata = {
  title: "Plan du site",
  description: `Plan du site ${siteConfig.fullName}. Toutes les pages services, zones et articles de blog.`,
  alternates: { canonical: `${siteConfig.url}/plan-du-site/` },
};

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <h1 style={{ fontSize: 44, fontWeight: 500, color: COLORS.primary, margin: "0 0 32px 0", letterSpacing: "-0.02em" }}>
            Plan du site
          </h1>
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 600, color: COLORS.primary, margin: "0 0 14px 0" }}>
                Pages principales
              </h2>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "#4B5563", lineHeight: 2 }}>
                <li><a href="/" style={{ color: COLORS.primary }}>Accueil</a></li>
                <li><a href="/contact/" style={{ color: COLORS.primary }}>Contact</a></li>
                <li><a href="/zones/" style={{ color: COLORS.primary }}>Zones d&apos;intervention</a></li>
                <li><a href="/blog/" style={{ color: COLORS.primary }}>Blog</a></li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: 24, fontWeight: 600, color: COLORS.primary, margin: "0 0 14px 0" }}>
                Services rideau metallique
              </h2>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "#4B5563", lineHeight: 2 }}>
                {services.map((s) => (
                  <li key={s.id}>
                    <a href={`/${s.slug}-${citySlug}/`} style={{ color: COLORS.primary }}>
                      {s.name} rideau metallique Corbeil-Essonnes
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: 24, fontWeight: 600, color: COLORS.primary, margin: "0 0 14px 0" }}>
                Zones d&apos;intervention
              </h2>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "#4B5563", lineHeight: 2, columns: 2 }}>
                {zones.map((z) => (
                  <li key={z.slug}>
                    <a href={`/depannage-rideau-metallique-${z.slug}/`} style={{ color: COLORS.primary }}>
                      {z.name} ({z.postalCode})
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: 24, fontWeight: 600, color: COLORS.primary, margin: "0 0 14px 0" }}>
                Articles du blog
              </h2>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "#4B5563", lineHeight: 2 }}>
                {articles.map((a) => (
                  <li key={a.slug}>
                    <a href={`/blog/${a.slug}/`} style={{ color: COLORS.primary }}>
                      {a.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: 24, fontWeight: 600, color: COLORS.primary, margin: "0 0 14px 0" }}>
                Informations legales
              </h2>
              <ul style={{ listStyle: "disc", paddingLeft: 20, color: "#4B5563", lineHeight: 2 }}>
                <li><a href="/mentions-legales/" style={{ color: COLORS.primary }}>Mentions legales</a></li>
                <li><a href="/confidentialite/" style={{ color: COLORS.primary }}>Politique de confidentialite</a></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
