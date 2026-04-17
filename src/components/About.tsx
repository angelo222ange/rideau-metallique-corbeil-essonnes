import { siteConfig } from "@/config/site";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
  lightBg: "#F5F3EE",
};

export default function About() {
  return (
    <section
      id="about"
      data-section-lg
      style={{
        padding: "100px 20px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        data-two-col
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* LEFT — Image */}
        <div style={{ flex: 1, position: "relative" }}>
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              aspectRatio: "4 / 5",
              boxShadow: "0 24px 60px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="/images/gallery/installation-rideau-metallique-drm.webp"
              alt="Entreprise DRM Corbeil-Essonnes - installation rideau metallique"
              title="DRM Corbeil-Essonnes - 25 ans d'experience"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {/* Badge experience */}
          <div
            style={{
              position: "absolute",
              bottom: -30,
              right: -10,
              background: COLORS.accent,
              color: "#FFFFFF",
              padding: "24px 28px",
              borderRadius: 16,
              boxShadow: "0 12px 30px rgba(232,93,4,0.35)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 40, fontWeight: 700, lineHeight: 1 }}>25+</div>
            <div style={{ fontSize: 13, fontWeight: 500, opacity: 0.95, marginTop: 4 }}>
              annees d&apos;experience
            </div>
          </div>
        </div>

        {/* RIGHT — Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "28px" }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: COLORS.accent,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            À propos de DRM
          </span>

          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 500,
              color: COLORS.primary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Specialiste <span style={{ color: COLORS.accent }}>rideau metallique</span> a Corbeil-Essonnes
          </h2>

          <p style={{ fontSize: 17, color: "#4B5563", lineHeight: 1.75, margin: 0 }}>
            Depuis plus de <strong>25 ans</strong>, DRM Corbeil-Essonnes intervient sur
            tous les <strong>rideaux metalliques</strong> des commerces, entrepots et
            batiments industriels du 91. Notre equipe de techniciens certifies assure
            un <strong>depannage en moins de 30 minutes</strong> partout sur
            Corbeil-Essonnes, Evry-Courcouronnes, Villabe, Ris-Orangis et les communes
            voisines.
          </p>

          <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.75, margin: 0 }}>
            Moteurs <strong>Somfy, Simu, ACM</strong>, lames P57/P90, grilles cobra,
            axes d&apos;enroulement : notre vehicule atelier dispose de toutes les
            pieces detachees. Resultat : une intervention reussie des la premiere
            visite, avec garantie sur les pieces et la main-d&apos;oeuvre.
          </p>

          {/* Checklist */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginTop: 8,
            }}
            data-grid-2
          >
            {[
              "Devis gratuit et sans engagement",
              "Intervention 24h/24 7j/7",
              "Vehicule atelier equipe",
              "Garantie pieces & main-d'oeuvre",
              "Techniciens certifies",
              "Rayon 35 km autour de Corbeil",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="12" fill={COLORS.accent} />
                  <path d="M7 12l3 3 7-7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: 14, color: COLORS.primary, fontWeight: 500 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <a
            href={siteConfig.phoneLink}
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#FFFFFF",
              backgroundColor: COLORS.primary,
              padding: "15px 26px",
              borderRadius: "30px",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              width: "fit-content",
              marginTop: 8,
            }}
          >
            Appeler {siteConfig.phone}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
