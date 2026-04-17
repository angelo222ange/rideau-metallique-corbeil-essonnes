import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const COLORS = { primary: "#1A1F2E" };

export const metadata: Metadata = {
  title: "Politique de confidentialite",
  description: `Politique de confidentialite ${siteConfig.fullName}.`,
  alternates: { canonical: `${siteConfig.url}/confidentialite/` },
  robots: { index: false, follow: true },
};

export default function Confidentialite() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 120, paddingBottom: 80, background: "#FFFFFF" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px", color: "#4B5563", lineHeight: 1.8 }}>
          <h1 style={{ fontSize: 44, fontWeight: 500, color: COLORS.primary, margin: "0 0 32px 0", letterSpacing: "-0.02em" }}>
            Politique de confidentialite
          </h1>

          <p>
            {siteConfig.fullName} accorde une importance particuliere a la protection de vos donnees
            personnelles. Cette politique decrit comment nous collectons, utilisons et protegeons vos informations.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 600, color: COLORS.primary, margin: "32px 0 12px" }}>Donnees collectees</h2>
          <p>
            Les donnees que nous collectons via nos formulaires sont : nom, telephone, email, adresse
            d&apos;intervention et message. Ces donnees sont fournies volontairement par l&apos;utilisateur.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 600, color: COLORS.primary, margin: "32px 0 12px" }}>Utilisation des donnees</h2>
          <p>
            Vos donnees sont utilisees exclusivement pour :
          </p>
          <ul>
            <li>Repondre a votre demande de devis ou d&apos;intervention</li>
            <li>Vous recontacter par telephone ou email</li>
            <li>Assurer le suivi de votre dossier</li>
          </ul>

          <h2 style={{ fontSize: 22, fontWeight: 600, color: COLORS.primary, margin: "32px 0 12px" }}>Conservation des donnees</h2>
          <p>
            Vos donnees sont conservees pendant 3 ans apres votre derniere interaction. Au-dela, elles
            sont supprimees automatiquement.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 600, color: COLORS.primary, margin: "32px 0 12px" }}>Vos droits (RGPD)</h2>
          <p>
            Vous disposez d&apos;un droit d&apos;acces, de rectification, de suppression et d&apos;opposition
            sur vos donnees. Pour exercer ces droits, contactez-nous : {siteConfig.email}.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 600, color: COLORS.primary, margin: "32px 0 12px" }}>Cookies</h2>
          <p>
            Notre site utilise uniquement des cookies techniques necessaires au fonctionnement. Aucun
            cookie de tracking ou de ciblage publicitaire n&apos;est utilise.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
