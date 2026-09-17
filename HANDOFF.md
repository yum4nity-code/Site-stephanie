# HANDOFF — Site Stéphanie Recorda

**Dernière mise à jour : 17 septembre 2026**

Ce document est le point de reprise obligatoire du projet. Il doit rester lisible par quelqu’un qui n’a accès ni aux conversations précédentes ni aux décisions orales.

## 1. État actuel

Le projet est en **phase de cadrage / direction artistique**. Aucun site de production n’est encore implémenté dans ce dépôt.

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

Le **portrait professionnel de Stéphanie destiné à la V1 web est désormais validé** et déposé dans :

`assets/images/stephanie-recorda-portrait-professionnel.webp`

Cette version web est optimisée en **600 × 750 px**. Elle doit être utilisée comme portrait de référence pour l’intégration du hero, sauf nouvelle validation explicite. Une source de définition supérieure pourra être archivée ultérieurement si un usage print ou très haute densité le nécessite.

## 2. Positionnement retenu

Stéphanie Recorda est présentée comme consultante / prestataire **RH & Paie externalisée pour TPE et PME**, avec un positionnement professionnel, humain, accessible et orienté dirigeant.

Le message central de la preview est :

**« Expertise RH & Paie externalisée pour TPE et PME »**

La zone d’intervention affichée est **Strasbourg & Bas-Rhin, sur site / à distance**.

## 3. Offres retenues à ce stade

### Forfaits récurrents

1. **Pack TPE Sérénité** — 5 à 10 salariés — **690 € HT / mois**.
2. **Pack PME Performance** — 11 à 25 salariés — **1 190 € HT / mois**.
3. **Pack Sur-Mesure** — +25 salariés / multi-sites — **sur devis**.

### Missions ponctuelles

1. **Diagnostic RH & Organisation du Travail** — **350 à 400 € HT / jour**.
2. **Audit Qualiopi & Conformité CFA / OF** — **400 € HT / jour**.
3. **Sous-traitance Paie (cabinets comptables)** — **22 à 28 € HT / bulletin**.

Source de vérité détaillée : `content/SITE_CONTENT.md`.

## 4. Décisions UX prises

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

Questions essentielles envisagées :

1. Effectif de l’entreprise : 1–10 / 11–25 / 26–50 / +50.
2. Présence RH interne : autonome / besoin de renfort / aucune fonction RH.
3. Besoin principal : paie & DSN / administration RH / paie + RH / organisation & accompagnement dirigeant.
4. Besoin de présence sur site : non / occasionnel / régulier.
5. Complexité : multi-sites / plusieurs conventions / saisonnalité forte / variations d’effectif / aucune.
6. Question facultative de personnalisation : principal problème actuel — manque de temps / fiabiliser la paie / structurer les RH / situation complexe.

Logique indicative :

- petite structure + besoins paie/admin standards + faible présence terrain → **TPE Sérénité** ;
- besoins RH + paie plus larges, présence terrain ou structure 11–25 → **PME Performance** ;
- +25 salariés, multi-sites, forte complexité ou besoin atypique → **Sur-Mesure** ;
- cas ambigus → présenter 2 options et proposer un échange de 15 minutes plutôt que forcer une recommandation.

## 5. Direction artistique verrouillée

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

Les valeurs de palette et le mapping typographique de départ sont maintenant consignés dans `docs/DESIGN_REFERENCE.md`.

## 6. Boîte à idées partagée

Un fichier **`IDEAS_INBOX.md`** a été ajouté à la racine du dépôt pour permettre à Stéphanie, Gwen ou leurs assistants IA de déposer facilement de nouvelles idées.

Fonctionnement :

- l’inbox est un sas de dépôt, pas une source de décisions validées ;
- une IA peut y ajouter une idée sans toucher au reste du projet ;
- les idées sont datées, attribuées si possible et conservées avec un statut ;
- une idée validée est ensuite transférée dans `docs/IDEAS.md` ;
- si elle devient une décision ou modifie le site, `HANDOFF.md` et les autres sources de vérité doivent être mis à jour ;
- une idée rejetée reste tracée avec une raison courte.

`README.md` et `AGENTS.md` renvoient désormais explicitement vers cette inbox.

## 7. Ce qui a été déposé le 17/09/2026

- `README.md` enrichi avec l’état, les offres, l’UX et les sources de vérité.
- `AGENTS.md` créé avec protocole obligatoire de reprise et de mise à jour du handoff.
- `HANDOFF.md` créé et rendu obligatoire à chaque intervention.
- `IDEAS_INBOX.md` créé comme boîte à idées simple et partagée.
- `docs/DESIGN_REFERENCE.md` créé avec palette, typographies, composants et règles de fidélité.
- `docs/IDEAS.md` créé avec la liste d’idées discutées, dont le mini-diagnostic et les règles de clic des packs.
- `content/SITE_CONTENT.md` créé avec les textes, tarifs et structure de contenu actuellement retenus.
- `docs/reference/homepage-reference-2026-09-17.svg` créé comme référence visuelle figée du dépôt.
- `assets/images/stephanie-recorda-portrait-professionnel.webp` ajouté : portrait professionnel validé pour la V1 web, optimisé en 600 × 750 px.

## 8. Ce qui n’est PAS encore fait

- Pas de stack technique choisie définitivement.
- Pas d’intégration HTML / React / Next / autre dans le dépôt.
- Pas de responsive réel testé.
- Pas de formulaire de contact branché.
- Pas de moteur de mini-diagnostic implémenté.
- Pas de SEO / analytics / mentions légales finalisés.
- Pas de source portrait très haute définition archivée pour des usages hors web ; le portrait V1 web est en revanche validé et disponible dans `assets/images/`.
- Les coordonnées et textes devront être relus avant mise en production.

## 9. Prochaine étape recommandée

Construire la **V1 de la landing page** en reproduisant fidèlement la référence visuelle, sans inventer de nouvelles sections. Implémenter d’abord : hero avec le portrait validé, bandeau de bénéfices, offres récurrentes, missions ponctuelles, à propos, CTA final, puis seulement ensuite le mini-diagnostic.

Avant mise en ligne : relecture complète des textes, validation des tarifs, coordonnées et mentions légales. Le portrait web V1 est déjà validé.

## 10. Discipline de reprise

Toute personne / IA reprenant ce projet doit :

1. lire `AGENTS.md` ;
2. lire ce handoff en entier ;
3. vérifier `IDEAS_INBOX.md` pour les nouvelles propositions non encore triées ;
4. vérifier l’état réel du dépôt avant d’agir ;
5. ne pas contredire une décision documentée sans validation explicite ;
6. mettre à jour ce fichier avant de terminer son intervention, sauf simple ajout d’idée dans l’inbox sans changement de décision.
