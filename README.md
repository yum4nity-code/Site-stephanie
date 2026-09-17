# Site Stéphanie Recorda

Site vitrine de **Stéphanie Recorda — Conseil RH & Paie pour TPE / PME**.

## État du projet

**Phase actuelle : intégration V1 / durcissement avant mise en ligne.**

La direction visuelle a été validée le **17 septembre 2026** et reste figée dans `docs/reference/homepage-reference-2026-09-17.svg`. La branche `v1-landing-2026-09-17` contient désormais la landing Next.js, le formulaire de rappel, la confirmation agenda, le pipeline Google Calendar orange → vert et les briques de conformité / SEO / sécurité avant lancement.

> Toute personne ou tout agent qui intervient sur ce dépôt doit lire **`AGENTS.md`**, puis **`HANDOFF.md`**, avant de modifier quoi que ce soit.

## Références du projet

- `HANDOFF.md` — état vivant du projet, décisions prises, travaux en cours et prochain point de reprise.
- `AGENTS.md` — protocole obligatoire pour toute personne / IA qui travaille dans le dépôt.
- `IDEAS_INBOX.md` — boîte à idées partagée.
- `docs/DESIGN_REFERENCE.md` — règles visuelles issues de la preview validée.
- `docs/IDEAS.md` — backlog produit / UX.
- `docs/LAUNCH_CHECKLIST.md` — contrôle pré-lancement technique, conformité, SEO et accessibilité.
- `content/SITE_CONTENT.md` — contenu et structure actuellement validés.
- `docs/reference/homepage-reference-2026-09-17.svg` — référence visuelle figée.

## Positionnement

Stéphanie accompagne les TPE et PME sur les sujets RH et paie : gestion de la paie et des DSN, administration RH, structuration des pratiques, accompagnement du dirigeant, missions ponctuelles d’expertise et renfort paie.

Le site doit rester :

- professionnel mais humain ;
- très lisible et rassurant ;
- orienté vers la prise de contact ;
- compréhensible en quelques secondes par un dirigeant de TPE / PME ;
- sobre, sans jargon inutile ni promesses excessives.

## Offres actuellement prévues

### Forfaits récurrents

- **Pack TPE Sérénité** — 5 à 10 salariés — **690 € HT / mois**.
- **Pack PME Performance** — 11 à 25 salariés — **1 190 € HT / mois**.
- **Pack Sur-Mesure** — +25 salariés / multi-sites — **sur devis**.

### Prestations ponctuelles

- Diagnostic RH & Organisation du Travail — **350 à 400 € HT / jour**.
- Audit Qualiopi & Conformité CFA / OF — **400 € HT / jour**.
- Sous-traitance Paie (cabinets comptables) — **22 à 28 € HT / bulletin**.

Les textes détaillés et les règles d’orientation vers chaque offre sont centralisés dans `content/SITE_CONTENT.md` et `docs/IDEAS.md`.

## UX et conversion

Le site reste une **landing page / one-page**. Les packs ouvrent leur détail puis un formulaire contextuel. Le bandeau de bénéfices est un élément de réassurance non cliquable.

Le parcours de conversion principal reste unique : **demander un échange avec Stéphanie**. Les formulations peuvent être contextuelles (« Échanger sur cette formule », « Demander un diagnostic »), mais elles convergent toutes vers le même formulaire de rappel.

Le mini-diagnostic **« Quelle offre me convient ? »** reste dans le backlog prioritaire.

## Pré-lancement

Avant publication définitive, vérifier `docs/LAUNCH_CHECKLIST.md` et compléter notamment :

- les informations juridiques manquantes des mentions légales ;
- le domaine public final (`SITE_URL` / `NEXT_PUBLIC_SITE_URL`) ;
- l’activation définitive du prestataire de formulaire ;
- les intégrations Google Calendar / Brevo si retenues ;
- l’outil d’analytics si activé ;
- la validation finale des textes, tarifs et de la biographie.

## Règle de continuité

Le projet doit pouvoir être repris par quelqu’un qui n’a jamais vu les conversations précédentes. **`HANDOFF.md` doit être mis à jour à chaque session où une décision, une modification ou un nouveau point de blocage apparaît.**
