import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confidentialité & RGPD | Stéphanie Recorda",
  description: "Informations sur le traitement des données personnelles sur le site de Stéphanie Recorda.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-shell">
      <article className="legal-card">
        <h1>Confidentialité &amp; RGPD</h1>
        <p>
          Cette page explique quelles données peuvent être recueillies sur ce site, pourquoi elles
          sont utilisées et comment exercer vos droits.
        </p>

        <h2>Responsable du traitement</h2>
        <p>
          Stéphanie Recorda — Conseil RH &amp; Paie, Strasbourg &amp; Bas-Rhin. Contact :{" "}
          <a href="mailto:stephanie.recorda1@gmail.com">stephanie.recorda1@gmail.com</a>.
        </p>

        <h2>Données collectées</h2>
        <p>
          Lors d’une demande de rappel, le site peut recueillir votre nom, entreprise, téléphone,
          e-mail, besoin principal, jour et créneau souhaités ainsi que le message que vous choisissez
          d’ajouter. L’inscription aux conseils RH &amp; Paie est facultative et séparée de la demande de
          contact.
        </p>

        <h2>Finalités</h2>
        <ul>
          <li>répondre à votre demande et organiser un échange avec Stéphanie ;</li>
          <li>assurer le suivi du contact et, si nécessaire, préparer une proposition ;</li>
          <li>vous envoyer des conseils RH &amp; Paie uniquement si vous avez coché l’option correspondante ;</li>
          <li>mesurer l’audience du site uniquement si un outil soumis au consentement est configuré et accepté.</li>
        </ul>

        <h2>Destinataires et prestataires techniques</h2>
        <p>
          Les demandes sont destinées à Stéphanie Recorda. Le site est hébergé sur Vercel et utilise
          actuellement FormSubmit pour la transmission technique des formulaires. Selon la configuration
          finale, Brevo peut être utilisé pour l’e-mail transactionnel et la newsletter, et Google Calendar
          pour le suivi des demandes dans l’agenda de Stéphanie.
        </p>

        <h2>Durée de conservation</h2>
        <p>
          Les données de prospects ne doivent pas être conservées indéfiniment. La règle opérationnelle
          cible est une conservation maximale de trois ans à compter de la collecte ou du dernier contact
          émanant du prospect, sauf obligation légale ou nécessité de conservation distincte. Cette règle
          doit également être appliquée aux outils de messagerie, d’agenda et de newsletter utilisés.
        </p>

        <h2>Mesure d’audience et cookies</h2>
        <p>
          Le site est conçu pour ne charger un outil de mesure d’audience soumis au consentement qu’après
          votre accord. Vous pouvez refuser sans perdre l’accès au site et revenir sur votre choix via
          « Gérer les cookies » dans le pied de page. Les préférences strictement nécessaires au respect de
          votre choix peuvent être stockées sur votre appareil.
        </p>

        <h2>Vos droits</h2>
        <p>
          Vous pouvez demander l’accès, la rectification ou l’effacement de vos données et, selon le
          traitement concerné, exercer vos droits d’opposition, de limitation ou de retrait du consentement.
          Pour toute demande :{" "}
          <a href="mailto:stephanie.recorda1@gmail.com">stephanie.recorda1@gmail.com</a>. Vous pouvez
          également saisir la CNIL si vous estimez, après contact, que vos droits ne sont pas respectés.
        </p>

        <h2>Sécurité</h2>
        <p>
          Le site utilise HTTPS et sépare les traitements côté serveur des interfaces publiques. Aucun
          secret d’accès aux services tiers ne doit être exposé dans le code envoyé au navigateur.
        </p>

        <p className="legal-alert">
          Avant publication définitive, Stéphanie devra valider les durées réellement appliquées, les
          prestataires activés et les informations professionnelles figurant dans les mentions légales.
        </p>
      </article>
    </main>
  );
}
