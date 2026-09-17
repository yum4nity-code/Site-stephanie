import type { Metadata } from "next";
import ContactCta from "./contact-cta";
import "./globals.css";
import "./expertise.css";
import "./about.css";
import "./contact.css";

export const metadata: Metadata = {
  title: "Stéphanie Recorda | Conseil RH & Paie",
  description:
    "Conseil RH & Paie externalisée pour TPE et PME à Strasbourg et dans le Bas-Rhin.",
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
      </body>
    </html>
  );
}
