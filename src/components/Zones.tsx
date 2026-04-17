import { zones, siteConfig } from "@/config/site";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
  lightBg: "#F5F3EE",
};

export default function Zones() {
  return (
    <section
      id="zones"
      data-section-lg
      style={{
        padding: "100px 20px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: COLORS.accent,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Zones d&apos;intervention
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 500,
              color: COLORS.primary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "12px 0 12px 0",
            }}
          >
            Rideau metallique dans toute l&apos;<span style={{ color: COLORS.accent }}>Essonne</span>
          </h2>
          <p style={{ fontSize: 16, color: "#6B7280", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
            Nos techniciens DRM interviennent dans un rayon de 35 km autour de {siteConfig.city}.
            22 communes desservies 24h/24, en moins de 30 minutes.
          </p>
        </div>

        <div
          data-grid-4
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 14,
          }}
        >
          {zones.map((z) => (
            <a
              key={z.slug}
              href={`/depannage-rideau-metallique-${z.slug}/`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 18px",
                background: COLORS.lightBg,
                borderRadius: 12,
                textDecoration: "none",
                color: COLORS.primary,
                transition: "all 0.2s",
                border: "1px solid transparent",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={COLORS.accent}>
                  <path d="M12 2C7.58 2 4 5.58 4 10c0 6 8 12 8 12s8-6 8-12c0-4.42-3.58-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.primary, lineHeight: 1.2 }}>
                  {z.name}
                </div>
                <div style={{ fontSize: 12, color: "#6B7280", marginTop: 2 }}>
                  {z.postalCode} · {z.distance}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a
            href="/zones/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 28px",
              background: COLORS.primary,
              color: "#FFFFFF",
              borderRadius: 30,
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            Voir toutes les zones →
          </a>
        </div>
      </div>
    </section>
  );
}
