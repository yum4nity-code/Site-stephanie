# HANDOFF — Site Stéphanie Recorda

**Dernière mise à jour : 17 septembre 2026**

Ce document est le point de reprise obligatoire du projet. Il doit rester lisible par quelqu’un qui n’a accès ni aux conversations précédentes ni aux décisions orales.

## 1. État actuel

Le projet est en **intégration technique V1** sur la branche :

`v1-landing-2026-09-17`

La branche `main` conserve la base de référence et de documentation validée. La branche V1 sert au chantier d’intégration.

Référence visuelle figée :

`docs/reference/homepage-reference-2026-09-17.svg`

Règles visuelles détaillées :

`docs/DESIGN_REFERENCE.md`

Portrait V1 validé :

- `assets/images/stephanie-recorda-portrait-professionnel.webp` ;
- `public/images/stephanie-recorda-portrait-professionnel.webp` pour Next.js.

## 2. Socle technique

La V1 utilise :

- Next.js 16.3.5 ;
- React 19.3.0 ;
- TypeScript ;
- App Router (`app/`) ;
- Node.js >= 20.9.0 ;
- cible de déploiement compatible Vercel.

Fichiers / composants principaux :

- `app/page.tsx` — landing ;
- `app/globals.css` — style principal ;
- `app/expertise.css` — prestations ponctuelles ;
- `app/about.css` — À propos ;
- `app/contact.css` — CTA final ;
- `app/conversion.css` — détails des offres et hiérarchie mobile ;
- `app/callback-form.tsx` — formulaire modal + écran de succès ;
- `app/callback-form.css` — styles du formulaire et de la confirmation ;
- `app/api/callback/route.ts` — réception / transmission des demandes + liens agenda + raccord e-mail optionnel + création de l’événement dans l’agenda de Stéphanie si Google OAuth est configuré ;
- `app/api/callback/calendar/route.ts` — export iCalendar `.ics` provisoire ;
- `app/api/callback/google-calendar.ts` — OAuth Google Calendar, création / mise à jour / suppression des demandes agenda ;
- `app/api/callback/status/route.ts` — action signée « marquer traitée » ;
- `app/contact-cta.tsx` — bloc final de contact ;
- `.env.example` — variables d’intégration documentées sans secrets.

## 3. Landing intégrée

### Hero

Le hero est intégré avec identité Stéphanie Recorda, navigation, surtitre, H1, repères d’expertise, coordonnées cliquables, CTA, portrait validé et responsive.

Sur mobile : hero compact, citation masquée, e-mail masqué dans le hero et priorité donnée à l’accès rapide aux offres. Le portrait est recadré pour garder le visage entièrement visible.

La citation du hero reste à valider textuellement avec Stéphanie avant production.

### Offres

Les trois forfaits sont intégrés et détaillables :

1. **Pack TPE Sérénité** — 5 à 10 salariés — **690 € HT / mois** ;
2. **Pack PME Performance** — 11 à 25 salariés — **1 190 € HT / mois** ;
3. **Pack Sur-Mesure** — +25 salariés / multi-sites — **Sur devis**.

Chaque carte possède un `details/summary` **« Voir le détail »** puis un CTA contextuel qui ouvre le formulaire de rappel avec le nom de l’offre prérempli.

### Prestations ponctuelles

Trois missions sont intégrées et actionnables :

1. Diagnostic RH & Organisation du Travail — **350 à 400 € HT / jour** ;
2. Audit Qualiopi & Conformité CFA / OF — **400 € HT / jour** ;
3. Sous-traitance Paie — **22 à 28 € HT / bulletin**.

### Bandeau bénéfices

Le bandeau reste **non cliquable** et arrive après les offres sur mobile :

1. Fiabilisez votre paie ;
2. Structurez vos démarches RH ;
3. Anticipez vos risques RH ;
4. Flexible & humain.

### À propos

La section reprend les éléments documentés : environ 15 ans d’expérience RH, 11 ans dans l’Armée de Terre, spécialiste paie Silae, expérience de gestion RH d’unités d’environ 210 à 350 personnes.

La biographie reste à relire avec Stéphanie avant production.

## 4. Demande de rappel

Les CTA **« Prendre rendez-vous »** et les CTA contextuels des offres / missions ouvrent une fenêtre intégrée **« Demander à être rappelé »**.

Champs :

- nom et prénom — obligatoire ;
- entreprise — facultatif ;
- téléphone — obligatoire ;
- e-mail — obligatoire ;
- besoin principal — obligatoire ;
- jour souhaité — obligatoire ;
- créneau de préférence — obligatoire ;
- message libre — facultatif.

Créneaux : matin, pause déjeuner, après-midi, fin de journée, flexible.

Le site indique explicitement qu’il s’agit d’une **préférence de rappel et non d’une réservation automatique**.

Consentements :

- consentement de contact obligatoire ;
- opt-in conseils RH & Paie facultatif, séparé et **non précoché**.

`app/api/callback/route.ts` valide les champs, utilise un honeypot et transmet la demande principale à **FormSubmit** vers `stephanie.recorda1@gmail.com`.

FormSubmit exige une activation de l’adresse de destination. Une première demande a été envoyée manuellement par l’utilisateur depuis la preview ; ne pas considérer l’activation comme terminée tant que Stéphanie n’a pas confirmé l’e-mail reçu.

## 5. Confirmation forte + agendas côté prospect

Après envoi réussi, l’ancien titre **« Demander à être rappelé »** et le formulaire disparaissent entièrement. Ils sont remplacés par un écran dédié comprenant :

- grand ✓ de confirmation ;
- surtitre **« Demande envoyée »** ;
- titre **« Votre demande est bien partie. »** ;
- explication claire du prochain événement ;
- récapitulatif du sujet, du jour, du créneau et du besoin ;
- indication de l’adresse e-mail qui servira à la confirmation ;
- accès aux agendas ;
- bouton de fermeture.

Deux sorties côté prospect :

- **« Ajouter à Google Agenda »** ;
- **« Autre agenda (.ics) »** pour Apple Calendar, Outlook et calendriers compatibles iCalendar.

L’événement prospect est volontairement une demande **à confirmer**, en journée entière, `STATUS:TENTATIVE` et non bloquante. Le créneau de préférence figure dans la description.

Le backend contient également un raccord transactionnel **optionnel Brevo**. S’il est configuré, le prospect reçoit un e-mail de confirmation avec le même récapitulatif et les mêmes liens agenda.

Variables Brevo :

- `BREVO_API_KEY` ;
- `BREVO_SENDER_EMAIL` ;
- `BREVO_SENDER_NAME` facultatif ;
- `BREVO_NEWSLETTER_LIST_ID` pour l’opt-in newsletter.

Sans ces variables, la transmission principale à Stéphanie reste opérationnelle et le site ne prétend pas qu’un e-mail automatique a été envoyé.

## 6. Étape 16 — suivi Google Agenda de Stéphanie : orange → vert

Décision utilisateur : les nouvelles demandes enregistrées dans l’agenda de Stéphanie doivent être visuellement **orange tant qu’elles ne sont pas traitées**, puis **vertes une fois prises en charge**.

### Comportement préparé

Lorsque l’intégration Google Calendar est activée :

1. le site crée automatiquement un événement dans l’agenda de Stéphanie au jour demandé ;
2. l’événement est non bloquant et préfixé **`[À TRAITER]`** ;
3. il reçoit la couleur de statut **pending / orange** ;
4. il contient le nom, entreprise, téléphone, e-mail, besoin, sujet, créneau souhaité et message ;
5. la notification FormSubmit contient un lien **« Ouvrir / marquer traitée (orange → vert) »** ;
6. le même lien est ajouté dans la description de l’événement ;
7. le lien affiche d’abord une page de confirmation avec **« Marquer traitée et ouvrir l’agenda »** ;
8. après cette action explicite, le backend remplace le préfixe par **`[TRAITÉE]`**, applique la couleur **handled / verte**, enregistre `handledAt`, puis ouvre l’événement dans Google Agenda.

### Pourquoi il y a une confirmation explicite

Google Agenda ne fournit pas un état fiable **« lu / ouvert »** permettant de changer la couleur simplement parce que Stéphanie a consulté l’événement.

De plus, un changement d’état déclenché directement par un lien GET serait fragile : certains services de messagerie et scanners de sécurité ouvrent automatiquement les liens. La route `GET` ne modifie donc rien ; le passage orange → vert ne se fait qu’après un **POST explicite** depuis le bouton de confirmation.

### Robustesse

- si Google Calendar n’est pas configuré ou est temporairement indisponible, **la demande client continue d’être transmise à Stéphanie** via FormSubmit ;
- si FormSubmit échoue après création d’un événement Google, le backend tente de supprimer l’événement afin d’éviter un faux lead orphelin ;
- aucun prospect n’est ajouté comme participant Google Calendar : le site ne génère donc pas une invitation qui ferait croire à un rendez-vous confirmé.

### Variables Google nécessaires pour activation réelle

Documentées dans `.env.example` :

- `GOOGLE_CALENDAR_CLIENT_ID` ;
- `GOOGLE_CALENDAR_CLIENT_SECRET` ;
- `GOOGLE_CALENDAR_REFRESH_TOKEN` ;
- `GOOGLE_CALENDAR_ID` — `primary` par défaut ;
- `GOOGLE_CALENDAR_PENDING_COLOR_ID` — `6` par défaut ;
- `GOOGLE_CALENDAR_HANDLED_COLOR_ID` — `10` par défaut ;
- `CALLBACK_STATUS_SECRET` — secret long et aléatoire pour signer les liens de traitement ;
- `SITE_URL` pour générer les liens publics.

Les `colorId` sont configurables. L’intégration n’opte pas actuellement pour le nouveau système de labels Google Calendar ; les couleurs réelles devront être vérifiées visuellement dans l’agenda de Stéphanie au moment du raccord OAuth.

**Important : le pipeline est codé mais pas encore relié au compte Google de Stéphanie.** Aucun identifiant OAuth ni secret réel n’a été ajouté au dépôt.

## 7. Validation technique

Validation finale GitHub Actions sous Node.js 22 après ajout de l’intégration orange → vert :

- installation des dépendances : **succès** ;
- `npm run typecheck` : **succès** ;
- `npm run build` : **succès**.

Run final : `35264509674`.

Le workflow temporaire de validation a été supprimé après succès.

Aucune erreur TypeScript ni erreur de build Next.js n’a été détectée avec :

- création optionnelle de l’événement Google Calendar ;
- couleur pending ;
- lien signé de traitement ;
- page de confirmation GET sans effet de bord ;
- action POST explicite ;
- passage handled / vert ;
- rollback best-effort si la transmission principale échoue.

## 8. Previews

### Preview V3

`https://stephanie-recorda-rh-preview-v3.vercel.app`

La V3 a permis de tester le formulaire sur téléphone réel et a révélé le problème de confirmation trop discrète.

**Important : cette V3 ne contient ni l’écran de succès renforcé de l’étape 15, ni le workflow Google Calendar de l’étape 16.** La branche Next.js est désormais nettement en avance sur cette preview.

## 9. Points restant ouverts

- créer une **preview V4** de l’état actuel et contrôler le nouvel écran de succès sur mobile ;
- vérifier que Stéphanie a bien activé FormSubmit à la suite de la première demande ;
- raccorder réellement le Google Agenda de Stéphanie par OAuth et renseigner les variables Vercel correspondantes ;
- vérifier sur le vrai agenda que les couleurs configurées donnent bien l’intention orange / vert attendue ;
- configurer Brevo si l’e-mail transactionnel et l’inscription newsletter doivent être activés ;
- une vraie réservation synchronisée reste ultérieure : lecture des disponibilités, horaire confirmé, invitations, modifications et annulations ;
- mini-diagnostic « Quelle offre me convient ? » toujours en backlog prioritaire ;
- politique de confidentialité, mentions légales, analytics / cookies à finaliser ;
- relire coordonnées, textes, biographie, tarifs et périmètres ;
- faire valider la citation du hero par Stéphanie.

## 10. Prochaine étape recommandée

Créer la **preview V4** de l’état actuel pour contrôler la fin de parcours sur téléphone, puis effectuer séparément le raccord OAuth Google Calendar de Stéphanie afin de tester un vrai lead orange → vert dans son propre agenda.

## 11. Discipline de reprise

Toute personne / IA reprenant ce projet doit :

1. lire `AGENTS.md` ;
2. lire ce handoff en entier ;
3. vérifier `IDEAS_INBOX.md` ;
4. vérifier l’état réel du dépôt avant d’agir ;
5. ne pas contredire une décision documentée sans validation explicite ;
6. mettre à jour ce fichier avant de terminer son intervention, sauf simple ajout d’idée dans l’inbox sans changement de décision.
