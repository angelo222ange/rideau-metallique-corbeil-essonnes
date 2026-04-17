"use client";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
};

export default function Partners() {
  const marques = [
    { name: "Somfy", logo: "/images/marques/logo-somfy-rideau-metallique.webp" },
    { name: "Simu", logo: "/images/marques/logo-simu-rideau-metallique.webp" },
    { name: "ACM", logo: "/images/marques/logo-ACM-rideau-metallique-drm-france.webp" },
    { name: "Came", logo: "/images/marques/logo-Came-rideau-metallique.webp" },
    { name: "Nice", logo: "/images/marques/logo-nice-rideau-metallique.webp" },
    { name: "FAAC", logo: "/images/marques/logo-faac-rideau-metallique.webp" },
    { name: "BFT", logo: "/images/marques/logo-bft-rideau-metallique.webp" },
    { name: "Sommer", logo: "/images/marques/logo-sommer-rideau-metallique.webp" },
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
            gridTemplateColumns: "repeat(8, 1fr)",
            gap: 32,
            alignItems: "center",
            justifyItems: "center",
          }}
          data-grid-4
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
