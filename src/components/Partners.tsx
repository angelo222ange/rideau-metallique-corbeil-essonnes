"use client";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
};

export default function Partners() {
  const marques = [
    { name: "Simu", logo: "/images/marques/moteur-simu-rideau-metallique.webp" },
    { name: "ACM", logo: "/images/marques/moteur-acm-italian-rolling-power.webp" },
    { name: "Sommer", logo: "/images/marques/logo-sommer-moteur-rideau-metallique.webp" },
    { name: "AFCA", logo: "/images/marques/logo-afca-moteur-rideau-metallique.webp" },
    { name: "Masinara", logo: "/images/marques/logo-masinara-moteur-rideau-metallique.webp" },
    { name: "G-Doorgate", logo: "/images/marques/logo-moteur-g-doorgate-rideau-metallique-drm.webp" },
  ];

  return (
    <section
      data-section
      style={{
        padding: "60px 20px",
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #F0F0F0",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: 13,
            fontWeight: 600,
            color: "#6B7280",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 32,
          }}
        >
          Nos marques certifiees
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 40,
            alignItems: "center",
            justifyItems: "center",
          }}
          data-grid-3
        >
          {marques.map((m) => (
            <img
              key={m.name}
              src={m.logo}
              alt={m.name}
              title={`${m.name} partenaire DRM`}
              style={{
                maxWidth: 100,
                maxHeight: 50,
                width: "auto",
                height: "auto",
                objectFit: "contain",
                opacity: 0.75,
                filter: "grayscale(100%)",
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  const span = document.createElement("span");
                  span.textContent = m.name;
                  span.style.cssText = "font-size: 16px; font-weight: 600; color: #6B7280; letter-spacing: 0.05em;";
                  parent.appendChild(span);
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
