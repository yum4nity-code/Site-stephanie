# Design reference — verrou visuel V1

**Statut : APPROUVÉ / À CONSERVER**  
**Référence : `docs/reference/homepage-reference-2026-09-17.svg`**  
**Date de validation : 17 septembre 2026**

La preview validée fait foi sur l’intention. Le SVG du dépôt en fige la composition, la palette, la hiérarchie typographique et l’allure générale afin que le projet reste reprenable sans contexte externe.

## 1. Intention

Le site doit évoquer un **cabinet de conseil RH / paie premium mais accessible**, pas une startup flashy ni un site administratif froid.

Mots-clés :

- confiance ;
- clarté ;
- rigueur ;
- proximité ;
- expertise terrain ;
- sobriété ;
- chaleur humaine.

## 2. Palette de référence

Valeurs d’intégration à utiliser comme point de départ, dérivées de la preview validée :

```css
:root {
  --navy-950: #03163A;
  --navy-900: #0D274A;
  --navy-800: #122C4C;
  --navy-700: #133255;
  --slate-700: #394352;

  --blue-soft-100: #EFF5FA;
  --blue-soft-050: #F1F8FE;
  --surface: #F6F9FC;
  --surface-alt: #EAEDF0;
  --white: #FFFFFF;
  --text-dark: #252224;
  --text-muted: #564F4D;
}
```

Ces couleurs peuvent être légèrement ajustées pour contraste / accessibilité, mais l’aspect général doit rester celui de la preview : **marine profond + blanc + bleus très pâles**.

À éviter :

- couleurs saturées agressives ;
- gros aplats turquoise / violet / vert ;
- dégradés flashy ;
- noir pur partout ;
- effets néon.

## 3. Typographie

La preview repose sur un contraste clair entre **titres éditoriaux en serif** et **interface / texte courant en sans-serif**.

Mapping web recommandé pour reproduire l’allure :

- **Titres / logo : `Playfair Display`**, graisse 600–700 ;
- **Texte courant / navigation / cartes / boutons : `Inter`**, 400–700 ;
- **Citation manuscrite seulement : `Caveat`** ou équivalent discret, à utiliser très peu.

Fallbacks :

```css
--font-display: "Playfair Display", Georgia, "Times New Roman", serif;
--font-ui: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-hand: Caveat, "Segoe Script", cursive;
```

Règles :

- les gros H1/H2 restent en serif ;
- les titres de cartes restent plutôt sans-serif et gras ;
- éviter de multiplier les polices ;
- ne jamais utiliser le manuscrit pour des informations essentielles.

## 4. Hero

Structure de référence :

- texte principal à gauche ;
- grand portrait de Stéphanie à droite ;
- navigation sobre au-dessus ;
- petit surtitre en capitales / tracking ;
- H1 très visible ;
- ligne de preuves / spécialités ;
- coordonnées en petite ligne avec icônes ;
- 2 CTA maximum ;
- citation courte manuscrite sur la droite du portrait si l’espace le permet.

Le portrait doit rester **réaliste, chaleureux, professionnel**, avec regard direct / expression sereine. Pas de banque d’image générique.

## 5. Grille et rythme

- largeur de contenu généreuse ;
- grandes marges latérales ;
- sections nettement séparées sans lourds cadres ;
- beaucoup d’espace blanc ;
- cartes en 3 colonnes sur desktop ;
- bordures fines et ombres très légères ;
- rayons modérés, pas de « gros arrondis SaaS » partout.

## 6. Composants visuels

### Boutons

Primaire :

- fond marine ;
- texte blanc ;
- icône simple éventuelle ;
- rayon discret ;
- état hover légèrement plus clair ou avec faible élévation.

Secondaire :

- fond blanc / transparent ;
- bordure marine ou bleu-gris ;
- texte marine.

### Cartes d’offres

- fond blanc ou bleu très pâle ;
- 1 offre éventuellement mise en avant avec un bleu léger ;
- prix très visible ;
- listes courtes avec coches ;
- pas d’illustrations décoratives volumineuses.

### Icônes

- trait simple ;
- monochrome bleu marine ;
- pastille bleu très clair ;
- cohérence de famille d’icônes indispensable.

## 7. Bandeau de bénéfices

Le bandeau placé sous le hero contient 4 bénéfices. C’est un **élément de réassurance non cliquable**.

Structure : icône + titre court + une phrase.

Axes :

1. Fiabiliser / sécuriser la paie.
2. Structurer les démarches RH.
3. Anticiper les risques RH.
4. Accompagnement flexible et humain.

## 8. Responsive

Sur mobile :

- portrait et texte ne doivent pas se réduire jusqu’à devenir minuscules ;
- empiler le hero proprement ;
- cartes en colonne ;
- CTA suffisamment grands pour le tactile ;
- ne jamais convertir la page en succession de blocs bleus massifs ;
- garder l’impression aérée de la version desktop.

## 9. Ce qui est figé vs adaptable

### Figé sans validation explicite

- direction générale ;
- palette marine / blanc / bleu pâle ;
- contraste serif / sans-serif ;
- hero portrait + message ;
- style sobre des cartes ;
- architecture visuelle de la preview ;
- impression professionnelle et humaine.

### Adaptable pendant l’intégration

- valeurs exactes d’espacement ;
- taille responsive ;
- micro-interactions ;
- contraste pour accessibilité ;
- ordre vertical mobile ;
- détails techniques des composants.

Toute évolution importante doit être documentée dans `HANDOFF.md`.
