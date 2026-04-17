const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
};

export default function Blog() {
  const posts = [
    {
      slug: "pannes-frequentes-rideau-metallique",
      title: "Top 5 des pannes de rideau metallique et comment les reparer",
      excerpt:
        "Rideau bloque, moteur qui coince, lames deformees : decouvrez les pannes les plus frequentes et les solutions des pros DRM.",
      image: "/images/gallery/depannage-rideau-metallique-drm-services.webp",
      date: "12 avril 2026",
      category: "Depannage",
    },
    {
      slug: "choisir-motorisation-rideau-metallique",
      title: "Comment choisir la motorisation de votre rideau metallique ?",
      excerpt:
        "Moteur tubulaire Somfy, central ACM ou lateral Sommer : nos experts DRM Corbeil-Essonnes vous guident dans votre choix.",
      image: "/images/gallery/motorisation-rideau-metallique-drm-depannage.webp",
      date: "5 avril 2026",
      category: "Motorisation",
    },
    {
      slug: "entretien-rideau-metallique",
      title: "L'entretien annuel du rideau metallique : pourquoi c'est essentiel",
      excerpt:
        "Un entretien regulier prolonge la duree de vie de votre rideau metallique de 10 ans. Voici le programme recommande par DRM.",
      image: "/images/gallery/entretien-rideau-metallique-drm-france.webp",
      date: "28 mars 2026",
      category: "Entretien",
    },
  ];

  return (
    <section
      id="blog"
      data-section-lg
      style={{
        padding: "100px 20px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 48,
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: COLORS.accent,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              Blog rideau metallique
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
              Conseils et guides pratiques
            </h2>
          </div>
          <a
            href="/blog/"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: COLORS.primary,
              textDecoration: "none",
            }}
          >
            Tous les articles →
          </a>
        </div>

        <div
          data-grid-3
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {posts.map((p) => (
            <a
              key={p.slug}
              href={`/blog/${p.slug}/`}
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
                  src={p.image}
                  alt={p.title}
                  title={p.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", gap: 12, marginBottom: 14, fontSize: 12, color: "#6B7280" }}>
                  <span style={{ color: COLORS.accent, fontWeight: 600 }}>{p.category}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: COLORS.primary,
                    margin: "0 0 12px 0",
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6, margin: 0 }}>
                  {p.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
