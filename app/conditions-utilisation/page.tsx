import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d’utilisation | Stéphanie Recorda",
  description: "Conditions d’utilisation du site de Stéphanie Recorda — Conseil RH & Paie.",
};

export default function TermsPage() {
  return (
    <main className="legal-shell">
      <article className="legal-card">
        <h1>Conditions d’utilisation</h1>
        <p>
          Le présent site a pour objet de présenter l’activité de Stéphanie Recorda, ses offres de
          conseil RH &amp; Paie et de permettre une prise de contact.
        </p>

        <h2>Informations présentées</h2>
        <p>
          Les contenus du site sont fournis à titre informatif. Ils ne constituent pas, à eux seuls,
          une consultation juridique, sociale ou comptable personnalisée. Le périmètre exact d’une
          mission est défini lors de l’échange avec le client et, le cas échéant, dans une proposition
          ou un contrat distinct.
        </p>

        <h2>Demandes de rappel</h2>
        <p>
          Le choix d’un jour et d’un créneau correspond à une préférence de rappel. Il ne vaut pas
          réservation automatique d’un rendez-vous. Stéphanie confirme séparément l’échange.
        </p>

        <h2>Disponibilité du site</h2>
        <p>
          Le site peut être temporairement indisponible pour maintenance, mise à jour ou en raison
          d’un incident technique. Les coordonnées directes restent accessibles dans les pages de contact
          et les mentions légales.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Sauf mention contraire, les textes, éléments graphiques, photographies et contenus propres à
          Stéphanie Recorda ne peuvent pas être reproduits ou réutilisés à des fins commerciales sans
          autorisation préalable.
        </p>

        <h2>Liens externes</h2>
        <p>
          Certains boutons peuvent ouvrir un service tiers, notamment Google Agenda. L’utilisation de ces
          services est soumise à leurs propres conditions et politiques de confidentialité.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Les informations relatives aux données personnelles, formulaires et préférences de mesure
          d’audience figurent dans la page{" "}
          <a href="/confidentialite">Confidentialité &amp; RGPD</a>.
        </p>

        <h2>Droit applicable</h2>
        <p>
          Le site est édité depuis la France. Les règles applicables à la relation commerciale sont
          précisées, lorsque nécessaire, dans les documents contractuels remis au client.
        </p>
      </article>
    </main>
  );
}
