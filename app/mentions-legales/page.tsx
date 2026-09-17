import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Stéphanie Recorda",
  description: "Mentions légales du site de Stéphanie Recorda — Conseil RH & Paie.",
};

export default function LegalNoticePage() {
  return (
    <main className="legal-shell">
      <article className="legal-card">
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          Stéphanie Recorda — Conseil RH &amp; Paie — TPE / PME<br />
          Zone d’intervention affichée : Strasbourg &amp; Bas-Rhin — sur site / à distance<br />
          Téléphone : <a href="tel:+33650738892">06.50.73.88.92</a><br />
          E-mail : <a href="mailto:stephanie.recorda1@gmail.com">stephanie.recorda1@gmail.com</a>
        </p>

        <p className="legal-alert">
          À compléter avant publication définitive : adresse professionnelle, forme / statut juridique,
          numéro SIREN ou SIRET et, le cas échéant, les autres mentions réglementaires liées au statut
          exact de l’activité.
        </p>

        <h2>Responsable de la publication</h2>
        <p>Stéphanie Recorda.</p>

        <h2>Hébergement</h2>
        <p>
          Le site est hébergé techniquement sur l’infrastructure Vercel. Les coordonnées légales exactes
          de l’entité d’hébergement utilisée devront être reprises depuis le contrat / compte Vercel au
          moment de la mise en production définitive.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Pour connaître les traitements de données liés au site et exercer vos droits, consultez la page{" "}
          <a href="/confidentialite">Confidentialité &amp; RGPD</a>.
        </p>

        <h2>Conditions d’utilisation</h2>
        <p>
          Les règles générales d’utilisation du site sont disponibles dans les{" "}
          <a href="/conditions-utilisation">conditions d’utilisation</a>.
        </p>
      </article>
    </main>
  );
}
