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
- `app/contact.css` pour le CTA final / contact ;
- `app/conversion.css` pour les interactions des offres et la hiérarchie mobile orientée conversion.

Le bloc final de contact est isolé dans :

`app/contact-cta.tsx`

Il est rendu depuis `app/layout.tsx`, après le contenu principal de la landing page.

## 3. Éléments déjà intégrés

### Hero

Le hero est intégré avec : identité Stéphanie Recorda, navigation desktop, CTA « Prendre rendez-vous », surtitre, H1, repères d’expertise, coordonnées cliquables, double CTA sur desktop, portrait validé et responsive.

La citation du hero reste **à valider textuellement avec Stéphanie avant production** conformément à `content/SITE_CONTENT.md`.

Sur mobile, la citation est désormais masquée afin de ne plus recouvrir le visage de Stéphanie et de raccourcir le hero.

### Bandeau de bénéfices

Le bandeau reste **non cliquable**. Il comprend :

1. **Fiabilisez votre paie** — Des processus fiables et conformes.
2. **Structurez vos démarches RH** — Des outils et méthodes adaptés à votre réalité.
3. **Anticipez vos risques RH** — Une vision globale et préventive.
4. **Flexible & humain** — Sur site ou à distance, selon vos besoins.

Sur desktop il reste sous le hero. Sur mobile il est volontairement déplacé **après les offres forfaitaires** afin que les produits apparaissent beaucoup plus tôt dans le parcours.

### Offres forfaitaires récurrentes

La section **« Offres forfaitaires récurrentes »** est intégrée et désormais **actionnable**.

1. **Pack TPE Sérénité** — 5 à 10 salariés — **690 € HT / mois**.
2. **Pack PME Performance** — 11 à 25 salariés — **1 190 € HT / mois**.
3. **Pack Sur-Mesure** — +25 salariés / multi-sites — **Sur devis**.

Chaque carte contient maintenant un contrôle **« Voir le détail »** natif et accessible qui déplie :

- le périmètre documenté dans `content/SITE_CONTENT.md` ;
- les principaux éléments inclus ;
- un CTA contextuel vers Stéphanie avec objet d’e-mail prérempli.

CTA : **« Échanger sur cette formule »** pour TPE / PME et **« Demander une estimation »** pour le Sur-Mesure.

Le Pack PME reste visuellement mis en avant.

### Prestations ponctuelles & missions d’expertise

La section est intégrée et désormais **actionnable** elle aussi :

1. **Diagnostic RH & Organisation du Travail** — **350 à 400 € HT / jour**.
2. **Audit Qualiopi & Conformité CFA / OF** — **400 € HT / jour**.
3. **Sous-traitance Paie** — **22 à 28 € HT / bulletin**.

Chaque carte dispose d’un **« Voir le détail »** dépliable avec le périmètre documenté et un CTA contextuel : **« Demander un diagnostic »** ou **« Me parler de cette mission »**.

### À propos

La section **« À propos — Une expertise terrain au service de vos ambitions »** est intégrée.

Repères affichés :

- environ **15 ans d’expérience RH** ;
- **11 ans dans l’Armée de Terre** ;
- **Spécialiste paie Silae** ;
- gestion RH d’unités d’environ **210 à 350 personnes**.

Le texte biographique reste à relire et valider par Stéphanie avant production.

### CTA final / Contact

Le bloc final de contact est intégré conformément à la référence visuelle avec téléphone, e-mail, zone d’intervention et bouton « Prendre rendez-vous ».

Le bouton ouvre actuellement un e-mail pré-adressé. Aucun outil externe de calendrier ou formulaire n’est branché à ce stade.

## 4. Validation technique

Une première validation complète a été effectuée à l’étape 9 sur GitHub Actions avec Node.js 22 : installation, `npm run typecheck` et `npm run build` réussis.

Après les modifications de l’étape 11, une **nouvelle validation complète** a été exécutée avec la même chaîne :

- installation des dépendances : succès ;
- `npm run typecheck` : succès ;
- `npm run build` : succès.

Aucune erreur TypeScript ni erreur de build Next.js n’a été détectée après la refonte mobile et l’ajout des détails interactifs.

Le workflow GitHub Actions était temporaire et a été supprimé après validation.

## 5. Validation visuelle — étape 10

Une preview Vercel dédiée avait été créée pour l’étape 10 :

`https://stephanie-recorda-rh-preview-9koymj3h0-guardian13.vercel.app`

Cette preview a servi à identifier deux défauts mobiles : citation recouvrant le visage et accès trop tardif aux offres.

**Important : cette preview représente désormais l’état AVANT les corrections de l’étape 11. Elle ne doit plus être utilisée pour juger le rendu mobile actuel.**

## 6. Décisions UX prises à l’étape 11

Retour utilisateur : sur mobile, le parcours imposait trop de défilement avant d’arriver aux produits et la citation masquait la tête de Stéphanie.

Décisions appliquées :

- mobile : **hero compact → offres → bénéfices → expertise → à propos → contact** ;
- portrait mobile recadré en format plus court avec priorité donnée au haut du portrait ;
- citation du hero masquée sur mobile ;
- e-mail du hero masqué sur mobile pour alléger le premier écran, tout en restant disponible dans le CTA final ;
- CTA mobile du hero centré sur **« Découvrir mes offres »** ; le bouton « Prendre rendez-vous » reste disponible dans le header et le bloc contact ;
- offres et missions ponctuelles désormais dépliables sans JavaScript via `<details>` / `<summary>` ;
- CTA contextuels par offre / mission avec e-mail prérempli ;
- petits textes mobiles légèrement renforcés.

Ces adaptations restent compatibles avec la direction visuelle validée ; l’ordre mobile fait partie des éléments explicitement adaptables dans `docs/DESIGN_REFERENCE.md`.

## 7. État du chantier après étape 11

La landing dispose maintenant de :

1. header / navigation ;
2. hero responsive ;
3. offres forfaitaires avec détails et CTA ;
4. bandeau de bénéfices ;
5. missions ponctuelles avec détails et CTA ;
6. À propos ;
7. CTA final / contact ;
8. responsive mobile réordonné pour afficher les offres plus tôt ;
9. typecheck réussi après modifications ;
10. build Next.js réussi après modifications.

## 8. Ce qui reste à faire

- créer une **nouvelle preview visuelle** de l’état post-étape 11 et la contrôler sur mobile réel ;
- ajuster le recadrage du portrait si nécessaire après ce contrôle ;
- implémenter éventuellement le mini-diagnostic ;
- choisir / brancher un vrai outil de formulaire ou de prise de rendez-vous ;
- finaliser SEO / analytics / mentions légales ;
- relire coordonnées, textes, biographie, tarifs et périmètres avant production ;
- faire valider la citation du hero par Stéphanie.

## 9. Prochaine étape recommandée

Créer une **nouvelle preview Vercel de validation visuelle post-étape 11**, puis vérifier surtout :

- que le visage de Stéphanie est entièrement visible sur mobile ;
- que les offres arrivent assez tôt dans le scroll ;
- que les accordions « Voir le détail » sont agréables à utiliser au tactile ;
- que les CTA d’offres / missions ouvrent bien le bon e-mail prérempli.

Après ce contrôle visuel, rendre compte avant de poursuivre vers le mini-diagnostic ou le branchement d’un vrai formulaire / agenda.

## 10. Discipline de reprise

Toute personne / IA reprenant ce projet doit :

1. lire `AGENTS.md` ;
2. lire ce handoff en entier ;
3. vérifier `IDEAS_INBOX.md` ;
4. vérifier l’état réel du dépôt avant d’agir ;
5. ne pas contredire une décision documentée sans validation explicite ;
6. mettre à jour ce fichier avant de terminer son intervention, sauf simple ajout d’idée dans l’inbox sans changement de décision.
