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
- déploiement cible compatible Vercel.

Fichiers principaux : `package.json`, `next.config.mjs`, `tsconfig.json`, `next-env.d.ts`, `.gitignore`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`.

Fichiers / composants dédiés :

- `app/expertise.css` — prestations ponctuelles ;
- `app/about.css` — section À propos ;
- `app/contact.css` — CTA final ;
- `app/conversion.css` — interactions des offres et hiérarchie mobile ;
- `app/callback-form.tsx` — formulaire modal de demande de rappel ;
- `app/callback-form.css` — styles du formulaire ;
- `app/api/callback/route.ts` — endpoint serveur de réception / transmission des demandes ;
- `app/contact-cta.tsx` — bloc final de contact.

## 3. Éléments intégrés

### Hero

Le hero est intégré avec identité Stéphanie Recorda, navigation, surtitre, H1, repères d’expertise, coordonnées cliquables, CTA, portrait validé et responsive.

Sur mobile : hero compact, citation masquée, e-mail masqué dans le hero et priorité donnée au CTA vers les offres. Le portrait est recadré pour garder le visage entièrement visible.

La citation reste à valider textuellement avec Stéphanie avant production.

### Bandeau de bénéfices

Le bandeau reste **non cliquable** :

1. Fiabilisez votre paie ;
2. Structurez vos démarches RH ;
3. Anticipez vos risques RH ;
4. Flexible & humain.

Sur mobile, il arrive après les offres afin de réduire le temps de scroll avant les produits.

### Offres forfaitaires

Les trois offres sont intégrées :

1. **Pack TPE Sérénité** — 5 à 10 salariés — **690 € HT / mois** ;
2. **Pack PME Performance** — 11 à 25 salariés — **1 190 € HT / mois** ;
3. **Pack Sur-Mesure** — +25 salariés / multi-sites — **Sur devis**.

Chaque carte dispose d’un **« Voir le détail »** natif via `<details>` / `<summary>`.

Les CTA **« Échanger sur cette formule »** et **« Demander une estimation »** n’ouvrent plus un e-mail : ils ouvrent désormais le formulaire de rappel avec le nom de l’offre prérempli comme contexte.

### Prestations ponctuelles

Les trois missions sont intégrées et actionnables :

1. Diagnostic RH & Organisation du Travail — **350 à 400 € HT / jour** ;
2. Audit Qualiopi & Conformité CFA / OF — **400 € HT / jour** ;
3. Sous-traitance Paie — **22 à 28 € HT / bulletin**.

Chaque CTA de mission ouvre le même formulaire de rappel avec la mission concernée comme contexte.

### À propos

La section est intégrée avec les repères documentés : environ 15 ans d’expérience RH, 11 ans dans l’Armée de Terre, spécialiste paie Silae, gestion RH d’unités d’environ 210 à 350 personnes.

Le texte biographique reste à valider avant production.

### CTA final / contact

Le bloc final de contact affiche téléphone, e-mail, zone d’intervention et bouton **« Prendre rendez-vous »**.

Le bouton ouvre maintenant le formulaire de rappel intégré au lieu d’un `mailto:`.

## 4. Demande de rappel — étape 13

Décision utilisateur : remplacer l’ouverture directe d’un e-mail par un parcours plus professionnel de demande de rappel avec créneau de préférence et opt-in facultatif aux contenus RH & Paie.

### Parcours implémenté

Les CTA « Prendre rendez-vous » ouvrent une fenêtre intégrée **« Demander à être rappelé »**.

Champs :

- nom et prénom — obligatoire ;
- entreprise — facultatif ;
- téléphone — obligatoire ;
- e-mail — obligatoire ;
- besoin principal — obligatoire ;
- jour souhaité — obligatoire ;
- créneau de préférence — obligatoire ;
- message libre — facultatif.

Créneaux proposés sans promettre une disponibilité horaire précise :

- matin ;
- pause déjeuner ;
- après-midi ;
- fin de journée ;
- flexible.

Le formulaire précise explicitement qu’il s’agit d’une **préférence de rappel et non d’une réservation automatique d’agenda**.

### Consentements

Le formulaire contient :

- consentement obligatoire pour être recontacté au sujet de la demande ;
- opt-in **facultatif, séparé et non précoché** : « Je souhaite recevoir ponctuellement les conseils RH & Paie de Stéphanie ».

L’opt-in newsletter est actuellement **collecté et transmis avec la demande**, mais aucun outil newsletter n’est encore connecté pour ajouter automatiquement le contact à une liste.

### Réception technique des demandes

`app/api/callback/route.ts` valide les champs côté serveur, inclut un honeypot anti-bot puis transmet la demande à **FormSubmit** vers `stephanie.recorda1@gmail.com`.

Important avant usage réel : **FormSubmit demande une confirmation de l’adresse de destination lors de la première soumission.** La première demande de test doit donc être envoyée volontairement, puis Stéphanie doit valider l’e-mail d’activation reçu. Cette activation n’a pas été déclenchée automatiquement pendant cette intervention afin de ne pas envoyer d’e-mail externe sans action explicite de l’utilisateur.

La politique de confidentialité / les mentions RGPD devront signaler le traitement des données du formulaire et le prestataire utilisé, ou ce prestataire devra être remplacé avant production si un autre choix est fait.

## 5. Validation technique

Les validations précédentes de la landing étaient réussies.

Après l’ajout du formulaire de rappel, une nouvelle validation complète a été lancée sous Node.js 22 :

- installation des dépendances : **succès** ;
- `npm run typecheck` : **succès** ;
- `npm run build` : **succès**.

Le workflow GitHub Actions utilisé pour ce contrôle était temporaire et a été supprimé après validation.

Aucune erreur TypeScript ni erreur de build Next.js n’a été détectée.

## 6. Validation visuelle précédente

Preview V2 post-corrections mobile :

`https://stephanie-recorda-rh-preview-v2-izgwpzqvm-guardian13.vercel.app`

Le lien de partage temporaire associé expirait le 18/09/2026.

La preview V2 a validé : visage visible, citation absente sur mobile, hero plus court, offres immédiatement après le portrait, accordions tactiles et CTA lisibles.

Cette preview **ne contient pas encore le nouveau formulaire de rappel de l’étape 13**.

## 7. État du chantier après étape 13

La landing dispose maintenant de :

1. header / navigation ;
2. hero responsive ;
3. offres placées tôt sur mobile ;
4. détails dépliables des offres ;
5. missions ponctuelles détaillées ;
6. bandeau de bénéfices ;
7. À propos ;
8. CTA final ;
9. formulaire intégré de demande de rappel ;
10. créneau de préférence ;
11. contexte d’offre / mission prérempli ;
12. opt-in facultatif aux conseils RH & Paie ;
13. endpoint serveur de transmission ;
14. typecheck et build réussis après cette évolution.

## 8. Points restant ouverts

- faire un premier test volontaire du formulaire et confirmer l’adresse FormSubmit dans la boîte de Stéphanie ;
- créer une nouvelle preview visuelle incluant réellement le formulaire modal et contrôler son ergonomie mobile ;
- décider si l’opt-in newsletter doit rester un simple consentement transmis à Stéphanie ou être connecté à Brevo / Mailchimp / autre ;
- éventuellement connecter plus tard un véritable agenda synchronisé ;
- implémenter éventuellement le mini-diagnostic « Quelle offre me convient ? » ;
- finaliser politique de confidentialité, mentions légales, analytics / cookies si nécessaire ;
- relire coordonnées, textes, biographie, tarifs et périmètres ;
- faire valider la citation du hero par Stéphanie.

## 9. Prochaine étape recommandée

Créer une **preview V3 du vrai état post-formulaire** et contrôler sur mobile : ouverture / fermeture de la fenêtre, confort des champs, choix de date / créneau, opt-in non précoché et CTA contextuels.

Ensuite, avec accord explicite, effectuer **une soumission de test** afin que Stéphanie reçoive et confirme l’activation FormSubmit.

## 10. Discipline de reprise

Toute personne / IA reprenant ce projet doit :

1. lire `AGENTS.md` ;
2. lire ce handoff en entier ;
3. vérifier `IDEAS_INBOX.md` ;
4. vérifier l’état réel du dépôt avant d’agir ;
5. ne pas contredire une décision documentée sans validation explicite ;
6. mettre à jour ce fichier avant de terminer son intervention, sauf simple ajout d’idée dans l’inbox sans changement de décision.
