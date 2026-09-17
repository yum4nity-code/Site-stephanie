# AGENTS.md — protocole obligatoire du projet

Ce fichier s’applique à **toute personne, assistant IA ou agent de code** qui ouvre ou modifie ce dépôt.

## Avant toute intervention

1. Lire `README.md`.
2. Lire **intégralement `HANDOFF.md`**.
3. Lire `docs/DESIGN_REFERENCE.md` avant toute modification visuelle.
4. Lire `docs/IDEAS.md` avant de proposer ou d’implémenter une fonctionnalité déjà envisagée.
5. Lire `content/SITE_CONTENT.md` avant de modifier les textes, prix ou promesses commerciales.

## Règle de continuité — non optionnelle

`HANDOFF.md` est le journal de continuité du projet. **Toute intervention qui modifie le projet doit y laisser une trace avant de se terminer.**

À minima, mettre à jour :

- la date de dernière intervention ;
- ce qui a été fait ;
- les décisions prises ;
- les fichiers concernés ;
- les points restant ouverts ;
- la prochaine action recommandée ;
- tout risque, doute ou hypothèse à revalider.

Si aucune décision n’a changé, l’indiquer explicitement plutôt que de laisser le handoff ambigu.

## Référence visuelle figée

Le fichier `docs/reference/homepage-reference-2026-09-17.png` est la **référence visuelle approuvée**.

À conserver sauf instruction explicite du propriétaire du projet :

- palette générale bleu marine / blanc / bleus très clairs ;
- hiérarchie typographique ;
- proportions et respiration ;
- style des cartes ;
- équilibre portrait / texte du hero ;
- impression générale : premium, sobre, humaine et professionnelle.

Une implémentation peut améliorer l’accessibilité, le responsive, la netteté ou la cohérence technique **sans dériver de l’allure générale validée**.

Ne jamais remplacer la preview de référence par une nouvelle interprétation sans validation explicite. Si une nouvelle direction est approuvée, conserver l’ancienne référence dans l’historique et documenter le changement dans `HANDOFF.md`.

## Contenu commercial

Ne pas inventer :

- de tarifs ;
- de certifications ;
- de garanties ;
- de chiffres d’expérience ;
- de références clients ;
- de témoignages ;
- de périmètres de service non documentés.

Toute évolution des offres doit être reportée dans `content/SITE_CONTENT.md` et dans le handoff.

## UX déjà décidée

- Le site peut démarrer en **one-page**.
- Les cartes des trois packs récurrents doivent mener vers un détail utile et un CTA ; elles ne sont pas purement décoratives.
- Les quatre bénéfices sous le hero sont un **bandeau de réassurance non cliquable**.
- Le mini-diagnostic « Quelle offre me convient ? » / « Trouver mon offre en 1 min » est une idée prioritaire à conserver dans le backlog tant qu’elle n’est pas implémentée.

## Avant de terminer une session

Vérifier que :

- le dépôt reste compréhensible pour quelqu’un qui arrive sans contexte ;
- aucune décision importante n’existe uniquement dans une conversation externe ;
- `HANDOFF.md` reflète fidèlement l’état réel du dépôt ;
- les travaux non terminés sont clairement signalés.
