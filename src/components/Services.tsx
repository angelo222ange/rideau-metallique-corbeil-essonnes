import { siteConfig, services } from "@/config/site";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
  lightBg: "#F5F3EE",
};

const citySlug = siteConfig.city.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const serviceImages: Record<string, string> = {
  depannage: "/images/gallery/depannage-rideau-metallique-drm.webp",
  installation: "/images/gallery/installation-rideau-metallique-sur-mesure-france.webp",
  reparation: "/images/gallery/depannage-rideau-metallique-drm-services.webp",
  motorisation: "/images/gallery/motorisation-rideau-metallique-drm-depannage.webp",
  deblocage: "/images/gallery/rideau-metallique-bloque-depannage-rideau-metallique.webp",
  entretien: "/images/gallery/entretien-rideau-metallique-drm-france.webp",
  fabrication: "/images/gallery/fabrication-rideau-metallique-entreprise-drm.webp",
};

export default function Services() {
  return (
    <section
      id="services"
      data-section-lg
      style={{
        padding: "100px 20px",
        backgroundColor: COLORS.lightBg,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 56,
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: 680 }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: COLORS.accent,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              Nos services
            </span>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 500,
                color: COLORS.primary,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                margin: "12px 0 0 0",
              }}
            >
              7 services <span style={{ color: COLORS.accent }}>rideau metallique</span> a Corbeil-Essonnes
            </h2>
          </div>
          <a
            href="/contact/"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: COLORS.primary,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            Demander un devis →
          </a>
        </div>

        {/* Services grid */}
        <div
          data-services-grid
          data-grid-3
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {services.map((s) => (
            <a
              key={s.id}
              href={`/${s.slug}-${citySlug}/`}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#FFFFFF",
                borderRadius: 16,
                overflow: "hidden",
                textDecoration: "none",
                color: COLORS.primary,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                  background: COLORS.lightBg,
                }}
              >
                <img
                  src={serviceImages[s.id] || "/images/gallery/depannage-rideau-metallique-drm.webp"}
                  alt={`${s.name} rideau metallique Corbeil-Essonnes`}
                  title={`${s.name} rideau metallique a Corbeil-Essonnes`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ padding: "24px 24px 28px" }}>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    color: COLORS.primary,
                    margin: "0 0 8px 0",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.name} rideau metallique
                </h3>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6, margin: "0 0 18px 0" }}>
                  {s.shortDescription}
                </p>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: COLORS.accent,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  Decouvrir →
                </span>
              </div>
            </a>
          ))}

          {/* CTA card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: COLORS.primary,
              color: "#FFFFFF",
              borderRadius: 16,
              padding: "32px",
              textAlign: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 16,
                background: COLORS.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2a15.074 15.074 0 0 1-6.59-6.58l2.2-2.21c.27-.27.35-.66.24-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
              </svg>
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 600, margin: 0, color: "#FFFFFF" }}>
              Urgence 24h/24
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.6 }}>
              Rideau bloque ? Moteur en panne ? Appelez immediatement.
            </p>
            <a
              href={siteConfig.phoneLink}
              style={{
                background: COLORS.accent,
                color: "#FFFFFF",
                padding: "13px 24px",
                borderRadius: 30,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 15,
                marginTop: 8,
              }}
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
