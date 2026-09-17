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
- `app/api/callback/route.ts` — réception / transmission des demandes + liens agenda + raccord e-mail optionnel ;
- `app/api/callback/calendar/route.ts` — export iCalendar `.ics` provisoire ;
- `app/contact-cta.tsx` — bloc final de contact.

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

## 5. Étape 15 — confirmation forte + agendas provisoires

Après retour utilisateur sur la preview V3, décision prise : la validation visuelle précédente était trop discrète et donnait l’impression que rien ne s’était réellement passé.

### Nouvel écran de succès

Après envoi réussi, l’ancien titre **« Demander à être rappelé »** et le formulaire disparaissent entièrement. Ils sont remplacés par un écran dédié comprenant :

- grand ✓ de confirmation ;
- surtitre **« Demande envoyée »** ;
- titre **« Votre demande est bien partie. »** ;
- explication claire du prochain événement ;
- récapitulatif du sujet, du jour, du créneau et du besoin ;
- indication de l’adresse e-mail qui servira à la confirmation ;
- accès aux agendas ;
- bouton de fermeture.

### Agenda côté prospect

Deux sorties sont maintenant préparées :

- **« Ajouter à Google Agenda »** ;
- **« Autre agenda (.ics) »** pour Apple Calendar, Outlook et autres outils compatibles iCalendar.

L’événement est volontairement :

- intitulé **« Demande de rappel avec Stéphanie Recorda — à confirmer »** ;
- en journée entière ;
- `STATUS:TENTATIVE` ;
- non bloquant (`TRANSP:TRANSPARENT`) ;
- accompagné du créneau de préférence dans la description.

Cela conserve la demande dans l’agenda sans inventer un horaire précis ni faire croire à un rendez-vous confirmé.

### Agenda côté Stéphanie

La demande envoyée à Stéphanie via FormSubmit contient également :

- un lien Google Agenda ;
- un lien `.ics` universel.

Elle peut donc elle aussi conserver la demande dans son agenda comme élément **à confirmer**.

### Confirmation e-mail au prospect

Le backend contient désormais un raccord transactionnel **optionnel Brevo**. Lorsqu’il est configuré, il envoie automatiquement au prospect un e-mail de confirmation avec :

- récapitulatif de la demande ;
- rappel que le créneau reste à confirmer ;
- liens Google Agenda et `.ics` ;
- coordonnées de Stéphanie.

Variables nécessaires :

- `BREVO_API_KEY` ;
- `BREVO_SENDER_EMAIL` ;
- `BREVO_SENDER_NAME` facultatif.

Tant que ces variables ne sont pas présentes, la transmission principale à Stéphanie continue de fonctionner mais le site **ne prétend pas** qu’un e-mail automatique a été envoyé.

Le même backend peut inscrire l’adresse à une liste Brevo uniquement si l’opt-in newsletter a été coché et si `BREVO_NEWSLETTER_LIST_ID` est configuré.

Aucun abonnement n’est effectué sans opt-in.

## 6. Validation technique après étape 15

Validation GitHub Actions sous Node.js 22 :

- installation des dépendances : **succès** ;
- `npm run typecheck` : **succès** ;
- `npm run build` : **succès**.

Run : `35262988906`.

Le workflow temporaire de validation a été supprimé après succès.

Aucune erreur TypeScript ni erreur de build Next.js n’a été détectée avec :

- nouvel écran de confirmation ;
- génération des liens Google Agenda ;
- route `.ics` ;
- raccord Brevo optionnel ;
- inscription newsletter conditionnelle.

## 7. Previews

### Preview V3

`https://stephanie-recorda-rh-preview-v3.vercel.app`

La V3 a permis de tester le formulaire sur téléphone réel et a révélé le problème de confirmation trop discrète.

**Important : cette V3 ne contient pas encore l’écran de succès renforcé de l’étape 15.** La branche Next.js est désormais en avance sur cette preview.

## 8. Points restant ouverts

- créer une nouvelle preview de l’état post-étape 15 et contrôler le nouvel écran de succès sur mobile ;
- vérifier que Stéphanie a bien activé FormSubmit à la suite de la première demande réelle ;
- décider / configurer le prestataire transactionnel : Brevo est préparé, mais pas encore activé faute de clé / expéditeur vérifié ;
- si Brevo est retenu, créer / choisir la liste newsletter puis renseigner `BREVO_NEWSLETTER_LIST_ID` ;
- un véritable agenda synchronisé reste une évolution ultérieure : lecture des disponibilités, horaire confirmé, invitations et annulations ;
- mini-diagnostic « Quelle offre me convient ? » toujours en backlog prioritaire ;
- politique de confidentialité, mentions légales, analytics / cookies à finaliser ;
- relire coordonnées, textes, biographie, tarifs et périmètres ;
- faire valider la citation du hero par Stéphanie.

## 9. Prochaine étape recommandée

Créer une **preview V4** de l’état post-étape 15 et vérifier sur téléphone :

1. que la fin de parcours est immédiatement comprise ;
2. que le récapitulatif est lisible ;
3. que Google Agenda s’ouvre correctement ;
4. que l’export `.ics` est récupérable ;
5. que l’écran reste compact sur mobile.

Ensuite seulement, décider si Brevo est activé maintenant pour l’e-mail de confirmation et la newsletter ou si ce raccord attend la mise en production.

## 10. Discipline de reprise

Toute personne / IA reprenant ce projet doit :

1. lire `AGENTS.md` ;
2. lire ce handoff en entier ;
3. vérifier `IDEAS_INBOX.md` ;
4. vérifier l’état réel du dépôt avant d’agir ;
5. ne pas contredire une décision documentée sans validation explicite ;
6. mettre à jour ce fichier avant de terminer son intervention, sauf simple ajout d’idée dans l’inbox sans changement de décision.
