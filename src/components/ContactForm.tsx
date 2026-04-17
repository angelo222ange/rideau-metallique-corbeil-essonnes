"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

const COLORS = {
  accent: "#E85D04",
  primary: "#1A1F2E",
  lightBg: "#F5F3EE",
};

const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_WEBHOOK_URL ||
  "https://lioai.app.n8n.cloud/webhook/drm-contact";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    const payload = {
      nom: fd.get("nom") as string,
      telephone: fd.get("telephone") as string,
      email: fd.get("email") as string,
      prestation: (fd.get("prestation") as string) || "devis",
      message: fd.get("message") as string,
      source: `${siteConfig.domain}-contact-form`,
      brand: `DRM ${siteConfig.city}`,
      city: siteConfig.city,
      sitePhone: siteConfig.phone,
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    background: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: 10,
    fontSize: 15,
    fontFamily: "inherit",
    color: COLORS.primary,
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: COLORS.primary,
    marginBottom: 6,
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      <div data-grid-2 style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div>
          <label style={labelStyle}>Nom complet *</label>
          <input required name="nom" type="text" placeholder="Jean Dupont" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Telephone *</label>
          <input required name="telephone" type="tel" placeholder="06 12 34 56 78" style={inputStyle} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Email</label>
        <input name="email" type="email" placeholder="email@exemple.fr" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Prestation souhaitee</label>
        <select name="prestation" style={inputStyle} defaultValue="devis">
          <option value="devis">Demande de devis</option>
          <option value="urgence">Urgence — rideau bloque</option>
          <option value="installation">Installation neuve</option>
          <option value="motorisation">Motorisation</option>
          <option value="reparation">Reparation</option>
          <option value="entretien">Entretien / contrat annuel</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Decrivez votre besoin..."
          style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          padding: "15px 28px",
          background: COLORS.accent,
          color: "#FFFFFF",
          border: "none",
          borderRadius: 30,
          fontSize: 16,
          fontWeight: 700,
          cursor: status === "loading" ? "not-allowed" : "pointer",
          fontFamily: "inherit",
          marginTop: 8,
          opacity: status === "loading" ? 0.7 : 1,
        }}
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer la demande"}
      </button>
      {status === "success" && (
        <p style={{ color: "#10B981", fontSize: 14, fontWeight: 500, margin: 0 }}>
          Merci ! Nous vous rappelons dans les plus brefs delais.
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "#EF4444", fontSize: 14, fontWeight: 500, margin: 0 }}>
          Erreur lors de l&apos;envoi. Appelez directement le {siteConfig.phone}.
        </p>
      )}
    </form>
  );
}
