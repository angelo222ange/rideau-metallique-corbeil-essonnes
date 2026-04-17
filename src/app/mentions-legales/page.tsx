import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const COLORS = { primary: "#1A1F2E" };

export const metadata: Metadata = {
  title: "Mentions legales",
  description: `Mentions legales ${siteConfig.fullName}.`,
  alternates: { canonical: `${siteConfig.url}/mentions-legales/` },
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 120, paddingBottom: 80, background: "#FFFFFF" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px", color: "#4B5563", lineHeight: 1.8 }}>
          <h1 style={{ fontSize: 44, fontWeight: 500, color: COLORS.primary, margin: "0 0 32px 0", letterSpacing: "-0.02em" }}>
            Mentions legales
          </h1>

          <h2 style={{ fontSize: 22, fontWeight: 600, color: COLORS.primary, margin: "32px 0 12px" }}>Editeur du site</h2>
          <p>
            {siteConfig.fullName}<br />
            Adresse : {siteConfig.address}<br />
            Telephone : {siteConfig.phone}<br />
            Email : {siteConfig.email}<br />
            Site : {siteConfig.url}
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 600, color: COLORS.primary, margin: "32px 0 12px" }}>Hebergeur</h2>
          <p>
            OVH SAS<br />
            2 rue Kellermann, 59100 Roubaix, France<br />
            Telephone : 09 72 10 10 07
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 600, color: COLORS.primary, margin: "32px 0 12px" }}>Propriete intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, logos) est la propriete exclusive de
            {" "}{siteConfig.fullName}. Toute reproduction, representation, modification ou adaptation,
            totale ou partielle, est interdite sans autorisation ecrite prealable.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 600, color: COLORS.primary, margin: "32px 0 12px" }}>Donnees personnelles</h2>
          <p>
            Les donnees collectees via nos formulaires sont traitees uniquement dans le but de repondre
            a votre demande. Elles ne sont pas transmises a des tiers. Vous disposez d&apos;un droit
            d&apos;acces, de modification et de suppression de vos donnees personnelles en ecrivant a{" "}
            {siteConfig.email}.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 600, color: COLORS.primary, margin: "32px 0 12px" }}>Cookies</h2>
          <p>
            Ce site utilise des cookies techniques necessaires a son fonctionnement. Aucun cookie de
            tracking publicitaire n&apos;est utilise.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
