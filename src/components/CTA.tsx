import { siteConfig } from "@/config/site";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
};

export default function CTA() {
  return (
    <section
      data-section
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #1A1F2E 0%, #0F1419 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 85% 50%, rgba(232,93,4,0.25) 0%, transparent 45%)",
          pointerEvents: "none",
        }}
      />
      <div
        data-two-col
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ flex: 1 }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "#FFB627",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Urgence rideau metallique
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 500,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "12px 0 16px 0",
            }}
          >
            Intervention en 30 minutes a Corbeil-Essonnes
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: 0, maxWidth: 520 }}>
            Techniciens DRM disponibles <strong style={{ color: "#FFFFFF" }}>24h/24 et 7j/7</strong>.
            Devis gratuit, garantie pieces et main-d&apos;oeuvre.
          </p>
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a
            href={siteConfig.phoneLink}
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: "#FFFFFF",
              backgroundColor: COLORS.accent,
              padding: "18px 30px",
              borderRadius: 30,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              boxShadow: "0 12px 30px rgba(232,93,4,0.4)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2a15.074 15.074 0 0 1-6.59-6.58l2.2-2.21c.27-.27.35-.66.24-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
            </svg>
            {siteConfig.phone}
          </a>
          <a
            href="/contact/"
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1.5px solid rgba(255,255,255,0.25)",
              padding: "16px 26px",
              borderRadius: 30,
              textDecoration: "none",
            }}
          >
            Devis gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
