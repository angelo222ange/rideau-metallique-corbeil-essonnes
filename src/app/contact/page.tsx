import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
  lightBg: "#F5F3EE",
};

export const metadata: Metadata = {
  title: "Contact - Demande de devis rideau metallique",
  description: `Contactez DRM Corbeil-Essonnes pour un devis gratuit rideau metallique. Intervention 24h/24. Tel : ${siteConfig.phone}. Adresse : ${siteConfig.address}.`,
  alternates: { canonical: `${siteConfig.url}/contact/` },
};

export default function ContactPage() {
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
              lineHeight: 1.1,
              margin: "0 0 16px 0",
              letterSpacing: "-0.02em",
            }}
          >
            Contactez <span style={{ color: COLORS.accent }}>DRM Corbeil-Essonnes</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.75)", margin: 0 }}>
            Devis gratuit, intervention en 30 minutes, 24h/24 et 7j/7
          </p>
        </div>
      </section>

      <section data-section-lg style={{ padding: "80px 20px", background: "#FFFFFF" }}>
        <div
          data-two-col
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
          }}
        >
          {/* Left — Info */}
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 500, color: COLORS.primary, margin: "0 0 24px 0" }}>
              Nos coordonnees
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                  Telephone (24h/24)
                </div>
                <a href={siteConfig.phoneLink} style={{ fontSize: 28, fontWeight: 700, color: COLORS.accent, textDecoration: "none" }}>
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                  Email
                </div>
                <a href={`mailto:${siteConfig.email}`} style={{ fontSize: 16, color: COLORS.primary, textDecoration: "none", wordBreak: "break-all" }}>
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                  Adresse
                </div>
                <div style={{ fontSize: 16, color: COLORS.primary, lineHeight: 1.5 }}>
                  {siteConfig.address}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                  Horaires
                </div>
                <div style={{ fontSize: 16, color: COLORS.primary, lineHeight: 1.6 }}>
                  Ouvert 24h/24, 7j/7<br />
                  Week-ends et jours feries inclus<br />
                  Intervention en 30 minutes
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div
              style={{
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid #E5E7EB",
                aspectRatio: "4 / 3",
              }}
            >
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(siteConfig.address)}&zoom=14`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Localisation ${siteConfig.fullName}`}
              />
            </div>
          </div>

          {/* Right — Form */}
          <div
            style={{
              background: COLORS.lightBg,
              padding: 40,
              borderRadius: 18,
            }}
          >
            <h2 style={{ fontSize: 28, fontWeight: 500, color: COLORS.primary, margin: "0 0 8px 0" }}>
              Demandez votre devis
            </h2>
            <p style={{ fontSize: 15, color: "#6B7280", margin: "0 0 28px 0", lineHeight: 1.5 }}>
              Reponse dans l&apos;heure. Devis gratuit et sans engagement.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
