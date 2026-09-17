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

Fichiers de styles dédiés :

- `app/expertise.css` pour les prestations ponctuelles ;
- `app/about.css` pour la section À propos ;
- `app/contact.css` pour le CTA final / contact.

Le bloc final de contact est isolé dans :

`app/contact-cta.tsx`

Il est rendu depuis `app/layout.tsx`, après le contenu principal de la landing page.

## 3. Éléments déjà intégrés

### Hero

Le hero est intégré avec : identité Stéphanie Recorda, navigation desktop, CTA « Prendre rendez-vous », surtitre, H1, repères d’expertise, coordonnées cliquables, double CTA, portrait validé, citation de direction artistique et responsive de base.

La citation du hero reste **à valider textuellement avec Stéphanie avant production** conformément à `content/SITE_CONTENT.md`.

### Bandeau de bénéfices

Le bandeau sous le hero est intégré et reste **non cliquable**. Il comprend :

1. **Fiabilisez votre paie** — Des processus fiables et conformes.
2. **Structurez vos démarches RH** — Des outils et méthodes adaptés à votre réalité.
3. **Anticipez vos risques RH** — Une vision globale et préventive.
4. **Flexible & humain** — Sur site ou à distance, selon vos besoins.

Responsive : 4 colonnes desktop, 2 × 2 tablette, 1 colonne mobile.

### Offres forfaitaires récurrentes

La section **« Offres forfaitaires récurrentes »** est intégrée.

1. **Pack TPE Sérénité** — 5 à 10 salariés — **690 € HT / mois**.
2. **Pack PME Performance** — 11 à 25 salariés — **1 190 € HT / mois**.
3. **Pack Sur-Mesure** — +25 salariés / multi-sites — **Sur devis**.

Le Pack PME est visuellement mis en avant. Les boutons « Voir le détail », accordions, formulaire, préremplissage et mini-diagnostic ne sont pas encore ajoutés.

### Prestations ponctuelles & missions d’expertise

La section **« Prestations ponctuelles & missions d’expertise »** est intégrée avec :

1. **Diagnostic RH & Organisation du Travail** — **350 à 400 € HT / jour**.
2. **Audit Qualiopi & Conformité CFA / OF** — **400 € HT / jour**.
3. **Sous-traitance Paie** — **22 à 28 € HT / bulletin**.

Présentation sobre, tarifs visibles et responsive en une colonne sous 900 px.

### À propos

La section **« À propos — Une expertise terrain au service de vos ambitions »** est intégrée.

Repères affichés :

- environ **15 ans d’expérience RH** ;
- **11 ans dans l’Armée de Terre** ;
- **Spécialiste paie Silae** ;
- gestion RH d’unités d’environ **210 à 350 personnes**.

Le texte biographique reste à relire et valider par Stéphanie avant production.

### CTA final / Contact

Le bloc final de contact est intégré conformément à la référence visuelle.

Il affiche :

- surtitre **« Échangeons sur vos besoins »** ;
- titre **« Parlons de vos besoins RH & Paie »** ;
- texte court expliquant le premier échange ;
- téléphone cliquable **06.50.73.88.92** ;
- e-mail cliquable **stephanie.recorda1@gmail.com** ;
- zone **Strasbourg & Bas-Rhin — sur site / à distance** ;
- bouton **« Prendre rendez-vous »**.

Le bouton ouvre actuellement un e-mail pré-adressé avec un objet de prise de rendez-vous. Aucun outil externe de calendrier ou formulaire n’est branché à ce stade.

## 4. Validation technique — étape 9

Une **validation technique complète de la landing V1 a été effectuée le 17/09/2026** sur GitHub Actions avec Node.js 22.

Contrôles exécutés :

- installation des dépendances avec `npm install --package-lock=false --no-audit --no-fund` ;
- `npm run typecheck` ;
- `npm run build`.

Résultat : **SUCCÈS sur toutes les étapes**.

Aucune erreur TypeScript ni erreur de build Next.js n’a été détectée. **Aucune correction de code n’a donc été nécessaire pendant cette étape.**

Le workflow utilisé pour ce contrôle était temporaire (`.github/workflows/v1-build-check.yml`) et a été supprimé immédiatement après validation afin de ne pas modifier durablement l’architecture CI du projet.

Aucune décision UX, visuelle ou métier n’a changé pendant cette validation.

## 5. Positionnement et contenu de référence

Stéphanie Recorda est présentée comme consultante / prestataire **RH & Paie externalisée pour TPE et PME**, avec un positionnement professionnel, humain, accessible et orienté dirigeant.

Message central : **« Expertise RH & Paie externalisée pour TPE et PME »**.

Zone affichée : **Strasbourg & Bas-Rhin, sur site / à distance**.

Source de vérité métier et tarifaire : `content/SITE_CONTENT.md`.

## 6. Décisions UX à conserver

- Les 4 bénéfices sous le hero restent non cliquables.
- Les 3 cartes d’offres doivent devenir actionnables : bouton « Voir le détail », ancre ou bloc dépliable, détail utile, puis CTA « Échanger sur cette formule ».
- Le mini-diagnostic « Quelle offre me convient ? » / « Trouver mon offre en 1 min » reste une idée prioritaire mais vient après la landing page principale.
- Le CTA final peut rester basé sur e-mail en V1 tant qu’aucun outil de prise de rendez-vous n’est choisi.
- Ne pas repartir de zéro sur la direction artistique : marine / blanc / bleu pâle, titres serif, texte sans-serif, beaucoup d’espace blanc, impression cabinet premium accessible.

## 7. État du chantier après étape 9

La **structure principale de la landing page est complète et son build est validé** :

1. header / navigation ;
2. hero ;
3. bandeau de bénéfices ;
4. offres forfaitaires ;
5. missions ponctuelles ;
6. À propos ;
7. CTA final / contact ;
8. typecheck réussi ;
9. build Next.js réussi.

## 8. Ce qui reste à faire

- effectuer une validation visuelle globale sur une preview réellement rendue ;
- rendre les cartes d’offres actionnables avec leurs détails ;
- implémenter éventuellement le mini-diagnostic ;
- choisir / brancher un vrai outil de formulaire ou de prise de rendez-vous ;
- tester le responsive sur appareils réels ;
- finaliser SEO / analytics / mentions légales ;
- relire coordonnées, textes, biographie et tarifs avant production ;
- faire valider la citation du hero par Stéphanie.

## 9. Prochaine étape recommandée

Créer une **preview de validation visuelle** de la branche V1, idéalement sur Vercel, puis vérifier la page réellement rendue sur desktop et mobile avant d’ajouter les interactions des offres.

Après cette validation visuelle, rendre compte avant de poursuivre les fonctionnalités supplémentaires.

## 10. Discipline de reprise

Toute personne / IA reprenant ce projet doit :

1. lire `AGENTS.md` ;
2. lire ce handoff en entier ;
3. vérifier `IDEAS_INBOX.md` ;
4. vérifier l’état réel du dépôt avant d’agir ;
5. ne pas contredire une décision documentée sans validation explicite ;
6. mettre à jour ce fichier avant de terminer son intervention, sauf simple ajout d’idée dans l’inbox sans changement de décision.
