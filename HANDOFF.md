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

Fichiers de styles dédiés ajoutés :

- `app/expertise.css` pour les prestations ponctuelles ;
- `app/about.css` pour la section À propos.

Ils sont importés depuis `app/layout.tsx`.

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

La section **« Offres forfaitaires récurrentes »** est intégrée dans `app/page.tsx` et `app/globals.css`.

Contenu V1 affiché :

1. **Pack TPE Sérénité** — 5 à 10 salariés — **690 € HT / mois** — Paie & DSN, Administration RH, Conseil dirigeant.
2. **Pack PME Performance** — 11 à 25 salariés — **1 190 € HT / mois** — Gestion globale RH & Paie, Suivi des talents, Présence terrain.
3. **Pack Sur-Mesure** — +25 salariés / multi-sites — **Sur devis** — Volume adapté, Accompagnement évolutif, Présence selon les besoins.

Principes de design respectés : 3 cartes en desktop, Pack PME mis en avant, prix hiérarchisés, listes courtes avec coches, bordures fines, rayon modéré, ombre légère et empilement vertical sur tablette / mobile.

**Important :** les boutons « Voir le détail », accordions, formulaire, préremplissage et mini-diagnostic n’ont pas encore été ajoutés.

### Prestations ponctuelles & missions d’expertise

La section **« Prestations ponctuelles & missions d’expertise »** est intégrée.

Contenu V1 affiché :

1. **Diagnostic RH & Organisation du Travail** — **350 à 400 € HT / jour** — diagnostic terrain, structuration des process RH et accompagnement à la mise en place de nouvelles pratiques.
2. **Audit Qualiopi & Conformité CFA / OF** — **400 € HT / jour** — préparation et suivi des audits sur le volet RH / administratif et structuration du suivi des apprenants et formateurs.
3. **Sous-traitance Paie** — **22 à 28 € HT / bulletin** — portefeuilles clients sous Silae et renfort opérationnel lors des pics d’activité des cabinets comptables.

Principes de design : 3 cartes sobres sur desktop, fond de section très clair, tarifs visibles, descriptions courtes, empilement vertical sous 900 px. Aucun CTA ni formulaire n’a été ajouté à cette étape.

### À propos

La section **« À propos — Une expertise terrain au service de vos ambitions » est maintenant intégrée**.

Contenu V1 affiché :

- environ **15 ans d’expérience RH** ;
- **11 ans dans l’Armée de Terre** ;
- gestion du cycle RH d’unités d’environ **210 à 350 personnes** ;
- administration du personnel, paie, carrières, entretiens annuels, contrats / avenants, situations disciplinaires ou conflictuelles, organisation du travail et accompagnement de dirigeants / structures de formation ;
- repères visibles : 15 ans d’expérience RH, 11 ans Armée de Terre, spécialiste paie Silae, 210 à 350 personnes.

La mise en page suit la référence : titre à gauche, base biographique au centre, repères de preuve à droite sur desktop. Elle passe en 2 colonnes puis 1 colonne sur les écrans plus étroits.

Le texte biographique reste à relire et valider par Stéphanie avant production, conformément à `content/SITE_CONTENT.md`.

## 4. Positionnement et contenu de référence

Stéphanie Recorda est présentée comme consultante / prestataire **RH & Paie externalisée pour TPE et PME**, avec un positionnement professionnel, humain, accessible et orienté dirigeant.

Message central : **« Expertise RH & Paie externalisée pour TPE et PME »**.

Zone affichée : **Strasbourg & Bas-Rhin, sur site / à distance**.

Source de vérité métier et tarifaire : `content/SITE_CONTENT.md`.

## 5. Décisions UX à conserver

- Les 4 bénéfices sous le hero sont de la réassurance et restent non cliquables.
- Les 3 cartes d’offres doivent à terme être actionnables : bouton « Voir le détail », ancre ou bloc dépliable, détail utile, puis CTA « Échanger sur cette formule ».
- Le mini-diagnostic « Quelle offre me convient ? » / « Trouver mon offre en 1 min » reste une idée prioritaire mais sera traité après la landing page principale.
- Ne pas repartir de zéro sur la direction artistique : marine / blanc / bleu pâle, titres serif, texte sans-serif, beaucoup d’espace blanc, impression cabinet premium accessible.

## 6. Ce qui reste à faire

- intégrer le CTA final / contact ;
- ajouter ensuite les détails actionnables des packs ;
- implémenter éventuellement le mini-diagnostic ;
- brancher le formulaire / prise de rendez-vous ;
- tester le responsive sur appareils réels ;
- finaliser SEO / analytics / mentions légales ;
- effectuer un build / déploiement de validation ;
- relire coordonnées, textes, biographie et tarifs avant production ;
- faire valider la citation du hero par Stéphanie.

## 7. Prochaine étape recommandée

Intégrer **uniquement le CTA final / bloc contact** conformément à la référence visuelle : titre « Parlons de vos besoins RH & Paie », texte court, téléphone, e-mail, zone d’intervention et bouton « Prendre rendez-vous », sans encore brancher de formulaire ou d’outil externe.

Après cette étape, rendre compte avant de poursuivre.

## 8. Discipline de reprise

Toute personne / IA reprenant ce projet doit :

1. lire `AGENTS.md` ;
2. lire ce handoff en entier ;
3. vérifier `IDEAS_INBOX.md` ;
4. vérifier l’état réel du dépôt avant d’agir ;
5. ne pas contredire une décision documentée sans validation explicite ;
6. mettre à jour ce fichier avant de terminer son intervention, sauf simple ajout d’idée dans l’inbox sans changement de décision.
