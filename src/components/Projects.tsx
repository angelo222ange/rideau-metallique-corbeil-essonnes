const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
};

export default function Projects() {
  const realisations = [
    {
      title: "Installation rideau metallique",
      location: "Commerce - Corbeil-Essonnes",
      image: "/images/gallery/realisation-rideau-metallique-lame-pleine-boulangerie-france.webp",
    },
    {
      title: "Motorisation axe central ACM",
      location: "Entrepot - Evry-Courcouronnes",
      image: "/images/gallery/motorisation-rideau-metallique-rideau-metallique-drm.webp",
    },
    {
      title: "Reparation moteur tubulaire Somfy",
      location: "Boulangerie - Villabe",
      image: "/images/gallery/realisation-rideau-metallique-lame-pleine-commerce.webp",
    },
    {
      title: "Grille extensible bijouterie",
      location: "Bijouterie - Ris-Orangis",
      image: "/images/gallery/rideau-metallique-bijoutier-bijouterie.webp",
    },
    {
      title: "Depannage urgence rideau bloque",
      location: "Restaurant - Draveil",
      image: "/images/gallery/realisation-rideau-metallique-garage.webp",
    },
    {
      title: "Fabrication axe sur-mesure 4H",
      location: "Industriel - Lisses",
      image: "/images/gallery/fabrication-axe-rideau-metallique-express.webp",
    },
  ];

  return (
    <section
      id="projects"
      data-section-lg
      style={{
        padding: "100px 20px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: COLORS.accent,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Nos realisations
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
            Chantiers <span style={{ color: COLORS.accent }}>rideau metallique</span> dans l&apos;Essonne
          </h2>
        </div>

        <div
          data-grid-3
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {realisations.map((r, i) => (
            <div
              key={i}
              style={{
                borderRadius: 14,
                overflow: "hidden",
                position: "relative",
                aspectRatio: "4 / 5",
                background: "#F5F3EE",
              }}
            >
              <img
                src={r.image}
                alt={`${r.title} a ${r.location} par DRM Corbeil-Essonnes`}
                title={r.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(26,31,46,0.85) 0%, transparent 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  right: 20,
                  color: "#FFFFFF",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#FFB627",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 6,
                  }}
                >
                  {r.location}
                </div>
                <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3 }}>
                  {r.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
