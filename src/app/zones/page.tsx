import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { siteConfig, zones, services } from "@/config/site";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
  lightBg: "#F5F3EE",
};

export const metadata: Metadata = {
  title: "Zones d'intervention - Essonne 91",
  description: `Depannage rideau metallique dans tout le departement Essonne 91. 22 communes desservies 24h/24 autour de ${siteConfig.city}. Intervention en 30 min.`,
  alternates: { canonical: `${siteConfig.url}/zones/` },
};

export default function ZonesPage() {
  return (
    <>
      <Header />
      <section
        style={{
          paddingTop: 80,
          background: COLORS.primary,
          color: "#FFFFFF",
          padding: "120px 20px 60px",
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
            Zones d&apos;intervention <span style={{ color: COLORS.accent }}>DRM</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.75)", margin: 0 }}>
            22 communes desservies 24h/24 dans l&apos;Essonne (91)
          </p>
        </div>
      </section>

      <section data-section-lg style={{ padding: "80px 20px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontSize: 17, color: "#4B5563", lineHeight: 1.75, margin: "0 0 48px 0", maxWidth: 800 }}>
            Nos techniciens DRM interviennent dans un rayon de <strong>35 km autour de Corbeil-Essonnes</strong>.
            Delai d&apos;intervention : moins de 30 minutes, 24h/24 et 7j/7. Cliquez sur une zone pour
            acceder aux services rideau metallique specifiques.
          </p>

          <div
            data-grid-3
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {zones.map((z) => (
              <div
                key={z.slug}
                style={{
                  background: COLORS.lightBg,
                  borderRadius: 16,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div>
                  <h2 style={{ fontSize: 22, fontWeight: 600, color: COLORS.primary, margin: "0 0 4px 0" }}>
                    {z.name}
                  </h2>
                  <div style={{ fontSize: 13, color: "#6B7280" }}>
                    {z.postalCode} · {z.distance} de Corbeil-Essonnes
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {services.slice(0, 4).map((s) => (
                    <a
                      key={s.id}
                      href={`/${s.slug}-${z.slug}/`}
                      style={{
                        fontSize: 14,
                        color: COLORS.primary,
                        textDecoration: "none",
                        padding: "4px 0",
                      }}
                    >
                      → {s.name} {z.name}
                    </a>
                  ))}
                </div>
                <a
                  href={`/depannage-rideau-metallique-${z.slug}/`}
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: COLORS.accent,
                    textDecoration: "none",
                    marginTop: "auto",
                  }}
                >
                  Voir tous les services →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
