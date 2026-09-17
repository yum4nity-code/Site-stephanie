import type { Metadata } from "next";
import "./globals.css";
import "./expertise.css";

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
      <body>{children}</body>
    </html>
  );
}
