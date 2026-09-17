# HANDOFF — Site Stéphanie Recorda

**Dernière mise à jour : 17 septembre 2026**

Ce document est le point de reprise obligatoire du projet. Il doit rester lisible par quelqu’un qui n’a accès ni aux conversations précédentes ni aux décisions orales.

## 1. État actuel

Le projet est passé de la phase de cadrage / direction artistique au **démarrage de l’intégration technique V1** sur la branche :

`v1-landing-2026-09-17`

La branche `main` conserve la base de référence et de documentation validée. La branche V1 sert désormais au chantier d’intégration.

Une preview complète de page d’accueil a été validée comme base visuelle. La référence durable du dépôt est figée dans :

`docs/reference/homepage-reference-2026-09-17.svg`

Cette référence verrouille :

- couleurs ;
- typographie / hiérarchie ;
- style de cartes ;
- densité ;
- proportions ;
- placement du portrait ;
- allure générale du site.

Le détail des règles est dans `docs/DESIGN_REFERENCE.md`.

Le **portrait professionnel de Stéphanie destiné à la V1 web est validé** et déposé dans :

`assets/images/stephanie-recorda-portrait-professionnel.webp`

Une copie directement exploitable par Next.js est également disponible dans :

`public/images/stephanie-recorda-portrait-professionnel.webp`

Cette version web est optimisée en **600 × 750 px**. Elle doit être utilisée comme portrait de référence pour l’intégration du hero, sauf nouvelle validation explicite.

## 2. Socle technique retenu

La V1 démarre sur :

- **Next.js 16.3.5** ;
- **React 19.3.0** ;
- **TypeScript** ;
- **App Router** (`app/`) ;
- Node.js **>= 20.9.0** ;
- déploiement cible compatible Vercel.

Fichiers techniques créés :

- `package.json` ;
- `next.config.mjs` ;
- `tsconfig.json` ;
- `next-env.d.ts` ;
- `.gitignore` ;
- `app/layout.tsx` ;
- `app/page.tsx` ;
- `app/globals.css`.

Le socle reprend déjà les principales variables de couleur de la direction artistique afin d’éviter une dérive visuelle dès le départ.

## 3. Positionnement retenu

Stéphanie Recorda est présentée comme consultante / prestataire **RH & Paie externalisée pour TPE et PME**, avec un positionnement professionnel, humain, accessible et orienté dirigeant.

Le message central de la preview est :

**« Expertise RH & Paie externalisée pour TPE et PME »**

La zone d’intervention affichée est **Strasbourg & Bas-Rhin, sur site / à distance**.

## 4. Offres retenues à ce stade

### Forfaits récurrents

1. **Pack TPE Sérénité** — 5 à 10 salariés — **690 € HT / mois**.
2. **Pack PME Performance** — 11 à 25 salariés — **1 190 € HT / mois**.
3. **Pack Sur-Mesure** — +25 salariés / multi-sites — **sur devis**.

### Missions ponctuelles

1. **Diagnostic RH & Organisation du Travail** — **350 à 400 € HT / jour**.
2. **Audit Qualiopi & Conformité CFA / OF** — **400 € HT / jour**.
3. **Sous-traitance Paie (cabinets comptables)** — **22 à 28 € HT / bulletin**.

Source de vérité détaillée : `content/SITE_CONTENT.md`.

## 5. Décisions UX prises

### Cartes des packs

Les 3 cartes de forfaits doivent être **actionnables**. Elles ne doivent pas être de simples blocs décoratifs.

Approche retenue pour une V1 légère :

- bouton discret de type **« Voir le détail »** ;
- le clic descend vers une section détaillée sur la même page ou ouvre un bloc dépliable ;
- chaque détail explique inclusions, fonctionnement, cible et limites utiles ;
- chaque détail termine par **« Échanger sur cette formule »** ;
- le formulaire / contact doit idéalement récupérer l’offre choisie automatiquement.

Le site peut donc rester **one-page** au lancement.

### Bandeau de bénéfices sous le hero

Les 4 blocs sont des **promesses / bénéfices**, pas des offres ni une navigation.

Ils doivent rester **non cliquables**.

Les axes sont :

- sécuriser / fiabiliser la paie ;
- structurer les démarches RH ;
- anticiper les risques RH ;
- proposer un accompagnement flexible et humain.

Piste de wording à tester : remplacer **« Sécurisez votre paie »** par **« Fiabilisez votre paie »**, jugé plus précis et moins proche d’une promesse de garantie.

### Mini-diagnostic d’orientation

Idée prioritaire : ajouter un CTA court du type :

- **« Quelle offre me convient ? »**
- ou **« Trouver mon offre en 1 min »**.

Le mini-questionnaire doit orienter vers un pack sans donner l’impression d’un diagnostic juridique ou RH automatisé.

## 6. Direction artistique verrouillée

Ne pas repartir de zéro.

La preview validée impose une base :

- fond blanc / gris très clair ;
- bleu marine profond dominant ;
- accents bleu clair désaturé ;
- grands titres élégants ;
- texte courant sans-serif très lisible ;
- cartes fines, arrondies, sobres ;
- portrait réaliste et chaleureux ;
- beaucoup d’espace blanc ;
- CTA marine contrasté ;
- impression : cabinet / conseil premium mais accessible, pas « startup flashy ».

Les valeurs de palette et le mapping typographique de départ sont consignés dans `docs/DESIGN_REFERENCE.md`.

## 7. Ce qui a été fait le 17/09/2026

- documentation projet et protocole de continuité créés ;
- direction visuelle figée ;
- contenu métier centralisé ;
- portrait professionnel validé et ajouté au dépôt ;
- branche `v1-landing-2026-09-17` remise au niveau de `main` ;
- **socle Next.js / React / TypeScript créé sur la branche V1** ;
- copie du portrait ajoutée sous `public/images/` pour l’intégration web.

## 8. Ce qui n’est PAS encore fait

- Le hero fidèle à la maquette n’est pas encore intégré.
- Les sections bénéfices, offres, missions ponctuelles, à propos et CTA final ne sont pas encore codées.
- Pas de mini-diagnostic implémenté.
- Pas de formulaire de contact branché.
- Pas de responsive complet testé sur appareils réels.
- Pas de SEO final / analytics / mentions légales finalisés.
- Pas encore de build Vercel de validation pour cette branche.
- Les coordonnées et textes devront être relus avant mise en production.

## 9. Prochaine étape recommandée

Intégrer **uniquement le hero** sur la branche V1 en reproduisant fidèlement la référence visuelle : navigation sobre, bloc texte, CTA, coordonnées, portrait validé et responsive de base.

Après validation visuelle du hero, poursuivre section par section afin de limiter les régressions et de garder des étapes courtes et vérifiables.

## 10. Discipline de reprise

Toute personne / IA reprenant ce projet doit :

1. lire `AGENTS.md` ;
2. lire ce handoff en entier ;
3. vérifier `IDEAS_INBOX.md` pour les nouvelles propositions non encore triées ;
4. vérifier l’état réel du dépôt avant d’agir ;
5. ne pas contredire une décision documentée sans validation explicite ;
6. mettre à jour ce fichier avant de terminer son intervention, sauf simple ajout d’idée dans l’inbox sans changement de décision.
