# HANDOFF — Site Stéphanie Recorda

**Dernière mise à jour : 17 septembre 2026**

Ce document est le point de reprise obligatoire du projet. Il doit rester lisible par quelqu’un qui n’a accès ni aux conversations précédentes ni aux décisions orales.

## 1. État actuel

Le projet est en **intégration technique V1** sur la branche :

`v1-landing-2026-09-17`

La branche `main` conserve la base de référence et de documentation validée. La branche V1 sert désormais au chantier d’intégration.

Une preview complète de page d’accueil a été validée comme base visuelle. La référence durable du dépôt est figée dans :

`docs/reference/homepage-reference-2026-09-17.svg`

Cette référence verrouille couleurs, hiérarchie, style des cartes, densité, proportions, placement du portrait et allure générale. Le détail des règles est dans `docs/DESIGN_REFERENCE.md`.

Le **portrait professionnel de Stéphanie destiné à la V1 web est validé** et disponible dans :

- `assets/images/stephanie-recorda-portrait-professionnel.webp` ;
- `public/images/stephanie-recorda-portrait-professionnel.webp` pour l’intégration Next.js.

Cette version web est optimisée en **600 × 750 px** et doit rester la référence portrait de la V1 sauf nouvelle validation explicite.

### Hero V1

Le **hero est intégré** dans `app/page.tsx` et `app/globals.css` :

- header / identité Stéphanie Recorda ;
- navigation desktop ;
- CTA « Prendre rendez-vous » ;
- surtitre « Externaliser • Sécuriser • Avancer ensemble » ;
- H1 de la référence validée ;
- repères d’expérience / Silae ;
- coordonnées cliquables téléphone et e-mail ;
- double CTA ;
- portrait professionnel validé ;
- citation de direction artistique ;
- responsive de base desktop / tablette / mobile.

La citation du hero reste **à valider textuellement avec Stéphanie avant production**, conformément à `content/SITE_CONTENT.md`.

### Bandeau de bénéfices

Le **bandeau de réassurance à 4 bénéfices est maintenant intégré immédiatement sous le hero**.

Principes respectés :

- bandeau **non cliquable** ;
- fond bleu très pâle conforme à la référence ;
- icônes simples en trait dans des pastilles bleu clair ;
- séparateurs fins entre les bénéfices ;
- 4 colonnes sur grand écran ;
- grille 2 × 2 sur tablette ;
- empilement vertical sur mobile.

Contenus intégrés :

1. **Fiabilisez votre paie** — Des processus fiables et conformes.
2. **Structurez vos démarches RH** — Des outils et méthodes adaptés à votre réalité.
3. **Anticipez vos risques RH** — Une vision globale et préventive.
4. **Flexible & humain** — Sur site ou à distance, selon vos besoins.

Aucune interaction ni destination n’a été ajoutée à ces blocs, conformément à la décision UX validée.

## 2. Socle technique retenu

La V1 utilise :

- **Next.js 16.3.5** ;
- **React 19.3.0** ;
- **TypeScript** ;
- **App Router** (`app/`) ;
- Node.js **>= 20.9.0** ;
- déploiement cible compatible Vercel.

Fichiers techniques principaux :

- `package.json` ;
- `next.config.mjs` ;
- `tsconfig.json` ;
- `next-env.d.ts` ;
- `.gitignore` ;
- `app/layout.tsx` ;
- `app/page.tsx` ;
- `app/globals.css`.

## 3. Positionnement retenu

Stéphanie Recorda est présentée comme consultante / prestataire **RH & Paie externalisée pour TPE et PME**, avec un positionnement professionnel, humain, accessible et orienté dirigeant.

Message central :

**« Expertise RH & Paie externalisée pour TPE et PME »**

Zone affichée : **Strasbourg & Bas-Rhin, sur site / à distance**.

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

Les 3 cartes de forfaits doivent être **actionnables**. Approche V1 : bouton « Voir le détail », ancre ou bloc dépliable, détail du périmètre puis CTA « Échanger sur cette formule ».

### Bandeau de bénéfices sous le hero

Décision implémentée : les 4 blocs constituent un **bandeau de réassurance non cliquable**.

Le wording V1 utilise **« Fiabilisez votre paie »**.

### Mini-diagnostic d’orientation

Idée prioritaire conservée : CTA de type **« Quelle offre me convient ? »** / **« Trouver mon offre en 1 min »**. Il sera traité après la landing page principale.

## 6. Direction artistique verrouillée

Ne pas repartir de zéro. La preview impose :

- fond blanc / gris très clair ;
- bleu marine profond dominant ;
- accents bleu clair désaturé ;
- grands titres serif élégants ;
- texte courant sans-serif très lisible ;
- cartes fines, sobres ;
- portrait réaliste et chaleureux ;
- beaucoup d’espace blanc ;
- CTA marine contrasté ;
- impression cabinet / conseil premium mais accessible.

## 7. Ce qui a été fait le 17/09/2026

- documentation projet et protocole de continuité créés ;
- direction visuelle figée ;
- contenu métier centralisé ;
- portrait professionnel validé et ajouté au dépôt ;
- branche `v1-landing-2026-09-17` remise au niveau de `main` ;
- socle Next.js / React / TypeScript créé ;
- copie du portrait ajoutée sous `public/images/` ;
- hero complet intégré avec navigation, contenu, CTA, coordonnées, portrait et responsive de base ;
- **bandeau de 4 bénéfices intégré, non cliquable et responsive**.

## 8. Ce qui n’est PAS encore fait

- Les cartes des offres récurrentes ne sont pas encore codées.
- Les sections missions ponctuelles, à propos et CTA final ne sont pas encore codées.
- Pas de mini-diagnostic implémenté.
- Pas de formulaire de contact branché.
- Pas de responsive complet testé sur appareils réels.
- Pas de SEO final / analytics / mentions légales finalisés.
- Pas encore de build Vercel de validation pour cette branche.
- La citation du hero reste à valider textuellement avec Stéphanie.
- Les coordonnées et textes devront être relus avant mise en production.

## 9. Prochaine étape recommandée

Intégrer **uniquement la section des 3 offres forfaitaires récurrentes** conformément à la référence visuelle : titre de section, 3 cartes, prix, éléments clés et hiérarchie visuelle.

Ne pas encore coder le détail dépliable, le formulaire ou le mini-diagnostic dans cette étape. Après intégration des cartes, rendre compte avant de poursuivre.

## 10. Discipline de reprise

Toute personne / IA reprenant ce projet doit :

1. lire `AGENTS.md` ;
2. lire ce handoff en entier ;
3. vérifier `IDEAS_INBOX.md` ;
4. vérifier l’état réel du dépôt avant d’agir ;
5. ne pas contredire une décision documentée sans validation explicite ;
6. mettre à jour ce fichier avant de terminer son intervention, sauf simple ajout d’idée dans l’inbox sans changement de décision.
