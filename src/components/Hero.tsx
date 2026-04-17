import { siteConfig } from "@/config/site";

const COLORS = {
  primary: "#1A1F2E",
  accent: "#E85D04",
  accentLight: "#FFB627",
};

export default function Hero() {
  const features = [
    "Intervention en 30 min",
    "24h/24 et 7j/7",
    "Devis gratuit",
    "25+ ans d'experience",
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "816px",
        backgroundColor: COLORS.primary,
        paddingTop: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 80% 20%, rgba(232,93,4,0.15) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div
        data-hero-inner
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "60px",
          minHeight: "700px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(232,93,4,0.15)",
              border: "1px solid rgba(232,93,4,0.3)",
              color: COLORS.accentLight,
              padding: "8px 14px",
              borderRadius: 24,
              fontSize: 13,
              fontWeight: 600,
              width: "fit-content",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#10B981",
                boxShadow: "0 0 8px #10B981",
              }}
            />
            Disponible 24h/24 a Corbeil-Essonnes
          </div>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 500,
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Depannage{" "}
            <span style={{ color: COLORS.accent }}>rideau metallique</span>
            <br />a Corbeil-Essonnes
          </h1>

          <p
            style={{
              fontSize: "18px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.65,
              maxWidth: "520px",
              margin: 0,
            }}
          >
            <strong style={{ color: "#FFFFFF" }}>Rideau bloque, moteur en panne, serrure grippee ?</strong>{" "}
            Nos techniciens DRM interviennent en moins de 30 minutes a Corbeil-Essonnes
            et dans tout le 91. Devis gratuit, garantie sur toutes les interventions.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <a
              href={siteConfig.phoneLink}
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#FFFFFF",
                backgroundColor: COLORS.accent,
                padding: "16px 28px",
                borderRadius: "30px",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(232,93,4,0.35)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2a15.074 15.074 0 0 1-6.59-6.58l2.2-2.21c.27-.27.35-.66.24-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
              </svg>
              {siteConfig.phone}
            </a>
            <a
              href="/contact/"
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#FFFFFF",
                backgroundColor: "transparent",
                padding: "16px 24px",
                borderRadius: "30px",
                border: "1.5px solid rgba(255,255,255,0.25)",
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              Devis gratuit
            </a>
          </div>

          {/* Features row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "18px 28px",
              marginTop: "8px",
            }}
          >
            {features.map((f) => (
              <div
                key={f}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="12" fill={COLORS.accent} />
                  <path d="M7 12l3 3 7-7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {f}
              </div>
            ))}
          </div>

          {/* Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "8px" }}>
            <div style={{ display: "flex", gap: "3px" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} style={{ color: "#FBBF24", fontSize: "18px" }}>
                  &#9733;
                </span>
              ))}
            </div>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
              <strong style={{ color: "#FFFFFF" }}>{siteConfig.rating}/5</strong> sur {siteConfig.ratingCount} avis clients Google
            </span>
          </div>
        </div>

        {/* RIGHT Image */}
        <div
          data-hero-right
          style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "560px",
              height: "560px",
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src="/images/gallery/depannage-rideau-metallique-drm-reparation.webp"
              alt="Technicien DRM Corbeil-Essonnes en intervention sur rideau metallique"
              title="Depannage rideau metallique Corbeil-Essonnes"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* Overlay card */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                right: 20,
                background: "rgba(26,31,46,0.92)",
                backdropFilter: "blur(10px)",
                padding: "18px 20px",
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: COLORS.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M12 2 L2 7 L2 17 L12 22 L22 17 L22 7 Z M12 4.2 L19.5 7.8 L12 11.4 L4.5 7.8 Z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 15, marginBottom: 2 }}>
                  Intervention garantie en 30 min
                </div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>
                  Rayon 35 km autour de Corbeil-Essonnes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Ticker (marques) */}
      <div
        data-hero-ticker
        style={{
          position: "absolute",
          bottom: "30px",
          left: 0,
          right: 0,
          overflow: "hidden",
          opacity: 0.8,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "48px",
            animation: "marqueeScroll 40s linear infinite",
            width: "max-content",
            alignItems: "center",
          }}
        >
          {[...Array(3)].flatMap((_, i) =>
            ["somfy", "simu", "ACM", "CAME", "NICE", "FAAC", "BFT", "SOMMER"].map((m, j) => (
              <div
                key={`${i}-${j}`}
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {m}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
