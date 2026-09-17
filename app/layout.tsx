import type { Metadata } from "next";
import { getSiteUrl, isIndexableSite } from "../lib/site-url";
import CallbackDialog from "./callback-form";
import ContactCta from "./contact-cta";
import PrivacyControls from "./privacy-controls";
import SiteFooter from "./site-footer";
import "./globals.css";
import "./expertise.css";
import "./about.css";
import "./contact.css";
import "./conversion.css";
import "./callback-form.css";
import "./compliance.css";

const siteUrl = getSiteUrl();
const title = "Stéphanie Recorda | Conseil RH & Paie à Strasbourg";
const description =
  "Expertise RH & Paie externalisée pour TPE et PME à Strasbourg et dans le Bas-Rhin : paie, administration RH, accompagnement dirigeant et missions d’expertise.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Stéphanie Recorda — Conseil RH & Paie",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Stéphanie Recorda — Conseil RH & Paie",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: isIndexableSite(),
    follow: isIndexableSite(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <ContactCta />
        <SiteFooter />
        <CallbackDialog />
        <PrivacyControls />
      </body>
    </html>
  );
}
