# HANDOFF — Site Stéphanie Recorda

**Dernière mise à jour : 17 septembre 2026**

Ce document est le point de reprise obligatoire du projet. Il doit rester lisible par quelqu’un qui n’a accès ni aux conversations précédentes ni aux décisions orales.

## 1. État actuel

Le projet est en **intégration technique V1** sur la branche :

`v1-landing-2026-09-17`

La branche `main` conserve la base de référence et de documentation validée. La branche V1 sert au chantier d’intégration.

Référence visuelle figée : `docs/reference/homepage-reference-2026-09-17.svg`.

Portrait V1 validé :

- `assets/images/stephanie-recorda-portrait-professionnel.webp` ;
- `public/images/stephanie-recorda-portrait-professionnel.webp` pour Next.js.

## 2. Socle technique

La V1 utilise Next.js 16.3.5, React 19.3.0, TypeScript, App Router et Node.js >= 20.9.0.

Fichiers / composants principaux :

- `app/page.tsx` — landing ;
- `app/globals.css`, `app/expertise.css`, `app/about.css`, `app/contact.css`, `app/conversion.css` — styles ;
- `app/callback-form.tsx` — formulaire modal + écran de succès ;
- `app/callback-form.css` — styles du formulaire et de la confirmation ;
- `app/api/callback/route.ts` — réception / transmission des demandes, liens agenda, Brevo optionnel et création Google Calendar si OAuth configuré ;
- `app/api/callback/calendar/route.ts` — export iCalendar `.ics` ;
- `app/api/callback/google-calendar.ts` — création / mise à jour / suppression dans Google Calendar ;
- `app/api/callback/status/route.ts` — action signée « marquer traitée » ;
- `.env.example` — variables d’intégration, sans secrets.

## 3. Landing intégrée

Le hero, les trois offres, les prestations ponctuelles, le bandeau de bénéfices, la section À propos et le CTA final sont intégrés.

Sur mobile : hero compact, portrait recadré correctement, citation masquée, offres placées tôt dans le parcours et bandeau de bénéfices après les offres.

Les offres restent actionnables via `details/summary` puis CTA contextuel vers le formulaire de rappel.

Les trois forfaits actuellement documentés sont :

- Pack TPE Sérénité — 5 à 10 salariés — 690 € HT / mois ;
- Pack PME Performance — 11 à 25 salariés — 1 190 € HT / mois ;
- Pack Sur-Mesure — +25 salariés / multi-sites — sur devis.

## 4. Demande de rappel

Les CTA « Prendre rendez-vous » et les CTA contextuels ouvrent une fenêtre intégrée « Demander à être rappelé ».

Champs : nom, entreprise facultative, téléphone, e-mail, besoin principal, jour souhaité, créneau de préférence et message facultatif.

Créneaux : matin, pause déjeuner, après-midi, fin de journée, flexible.

Le site précise qu’il s’agit d’une **préférence de rappel et non d’une réservation automatique**.

Consentements :

- consentement de contact obligatoire ;
- opt-in conseils RH & Paie facultatif, séparé et non précoché.

La transmission principale passe par FormSubmit vers `stephanie.recorda1@gmail.com`. Une première demande a été envoyée depuis une preview ; ne pas considérer l’activation FormSubmit comme terminée tant que Stéphanie n’a pas confirmé l’e-mail d’activation reçu.

## 5. Confirmation forte + agenda prospect

Après envoi réussi, le formulaire et son titre disparaissent entièrement. Ils sont remplacés par un écran dédié comprenant :

- grand ✓ ;
- surtitre « Demande envoyée » ;
- titre « Votre demande est bien partie. » ;
- explication claire du prochain événement ;
- récapitulatif du sujet, du jour, du créneau et du besoin ;
- indication de l’e-mail utilisé pour la confirmation ;
- bouton « Ajouter à Google Agenda » ;
- bouton « Autre agenda (.ics) » ;
- bouton « Fermer ».

L’événement côté prospect reste volontairement une demande **à confirmer**, en journée entière, tentative et non bloquante. Aucun horaire précis n’est inventé à partir d’un créneau générique comme « après-midi ».

Le backend contient également un raccord transactionnel Brevo optionnel. Sans `BREVO_API_KEY` et `BREVO_SENDER_EMAIL`, le site ne prétend pas qu’un e-mail automatique a été envoyé.

## 6. Google Agenda de Stéphanie — orange → vert

Décision validée : les nouvelles demandes intégrées dans l’agenda de Stéphanie doivent être visuellement **orange tant qu’elles ne sont pas traitées**, puis **vertes une fois prises en charge**.

Le pipeline est codé :

1. création d’un événement non bloquant `[À TRAITER]` au jour demandé ;
2. couleur pending / orange ;
3. description avec prospect, entreprise, téléphone, e-mail, besoin, sujet, créneau et message ;
4. lien signé « Ouvrir / marquer traitée » dans la notification et dans la description de l’événement ;
5. le GET n’effectue aucune mutation et affiche une confirmation ;
6. le POST explicite passe l’événement en `[TRAITÉE]`, applique la couleur handled / verte, enregistre `handledAt`, puis rouvre Google Agenda.

Cette action explicite est volontaire : Google Calendar ne fournit pas un état fiable « lu / ouvert » et un lien GET pourrait être suivi automatiquement par un scanner de messagerie.

Robustesse : si Google Calendar n’est pas configuré ou échoue, le lead continue d’être transmis par FormSubmit. Si FormSubmit échoue après création d’un événement Google, le backend tente de supprimer cet événement.

Variables d’activation documentées dans `.env.example` :

- `GOOGLE_CALENDAR_CLIENT_ID` ;
- `GOOGLE_CALENDAR_CLIENT_SECRET` ;
- `GOOGLE_CALENDAR_REFRESH_TOKEN` ;
- `GOOGLE_CALENDAR_ID` ;
- `GOOGLE_CALENDAR_PENDING_COLOR_ID` ;
- `GOOGLE_CALENDAR_HANDLED_COLOR_ID` ;
- `CALLBACK_STATUS_SECRET` ;
- `SITE_URL`.

**Le pipeline est prêt mais n’est pas encore connecté au compte Google de Stéphanie. Aucun secret réel n’est stocké dans le dépôt.**

## 7. Validation technique

Après ajout du workflow orange → vert, validation GitHub Actions sous Node.js 22 :

- installation des dépendances : succès ;
- `npm run typecheck` : succès ;
- `npm run build` : succès.

Run final : `35264509674`.

Le workflow temporaire a été supprimé après succès.

## 8. Preview V4 — fin de parcours mobile

Preview V4 créée le 17 septembre 2026 :

`https://stephanie-recorda-rh-preview-v4.vercel.app`

Projet Vercel : `prj_3N3Bv9UjKeXj15FmqPjSDnpJbHYq`  
Déploiement validé : `dpl_7SoScoomA82JrBbu833nTS2Byy4G`

Le domaine stable a été contrôlé et répond **HTTP 200 OK**.

Cette V4 est une **preview statique d’interaction et de validation visuelle**, comme les previews précédentes. Elle ne remplace pas l’application Next.js réelle du dépôt.

Elle permet de contrôler sur téléphone :

- le formulaire de rappel ;
- le remplacement total du formulaire par l’écran de succès ;
- le gros état de confirmation ;
- le récapitulatif du sujet, du jour, du créneau et du besoin ;
- le bouton Google Agenda ;
- le téléchargement `.ics` généré côté navigateur ;
- le comportement responsive de la fin de parcours.

Important : dans cette preview statique, la soumission continue directement vers FormSubmit et les boutons agenda prospect sont générés côté navigateur. **Elle ne teste pas le backend Next.js réel, Brevo ni le workflow Google Calendar orange → vert de Stéphanie**, qui nécessitent le vrai déploiement applicatif et le raccord OAuth.

## 9. Points restant ouverts

- contrôler la V4 sur téléphone réel ;
- vérifier l’activation FormSubmit chez Stéphanie ;
- raccorder réellement le Google Agenda de Stéphanie par OAuth ;
- vérifier sur son vrai agenda que les `colorId` choisis donnent bien l’orange / vert attendu ;
- configurer Brevo si l’e-mail transactionnel et la newsletter doivent être activés ;
- mini-diagnostic « Quelle offre me convient ? » toujours en backlog prioritaire ;
- politique de confidentialité, mentions légales, analytics / cookies ;
- validation finale des coordonnées, textes, biographie, tarifs, périmètres et citation du hero.

## 10. Prochaine étape recommandée

Ouvrir la **preview V4 sur téléphone** et vérifier la fin de parcours. Ensuite, dans une étape séparée, raccorder le compte Google Calendar de Stéphanie par OAuth et effectuer un vrai test de demande **orange → vert** dans son propre agenda.

## 11. Discipline de reprise

Toute personne / IA reprenant ce projet doit :

1. lire `AGENTS.md` ;
2. lire ce handoff en entier ;
3. vérifier `IDEAS_INBOX.md` ;
4. vérifier l’état réel du dépôt avant d’agir ;
5. ne pas contredire une décision documentée sans validation explicite ;
6. mettre à jour ce fichier avant de terminer son intervention, sauf simple ajout d’idée dans l’inbox sans changement de décision.
