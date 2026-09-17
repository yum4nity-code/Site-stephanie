# Checklist pré-lancement — Site Stéphanie Recorda

Dernière mise à jour : 17 septembre 2026.

Cette checklist reprend les contrôles demandés avant mise en ligne et distingue ce qui est **implémenté dans le code** de ce qui nécessite encore une donnée, un compte ou une validation humaine.

## Statut des contrôles

1. **Page RGPD / confidentialité** — ✅ route `/confidentialite` ajoutée ; traitements du formulaire, prestataires, droits et mesure d’audience documentés.
2. **Page de CGU / conditions d’utilisation** — ✅ route `/conditions-utilisation` ajoutée.
3. **API hors front-end** — ✅ la transmission du formulaire, Brevo optionnel et Google Calendar restent dans les routes serveur Next.js ; aucun secret serveur n’est exposé au navigateur.
4. **HTTPS forcé / sécurité transport** — ✅ déploiement Vercel en HTTPS + en-tête HSTS ajouté côté Next.js.
5. **Bannière cookies / consentement** — ✅ gestion de consentement ajoutée pour tout Google Analytics éventuel ; aucun script GA n’est chargé avant accord.
6. **Meta title / description** — ✅ métadonnées enrichies, canonical et robots ajoutés.
7. **Image réseaux sociaux** — ✅ `opengraph-image.tsx` + `twitter-image.tsx` ajoutés.
8. **Favicon** — ✅ monogramme `SR` ajouté via `app/icon.svg`.
9. **Sitemap + robots.txt** — ✅ routes Next.js générées. Les previews restent `noindex` tant qu’un domaine public explicite n’est pas configuré.
10. **Textes alternatifs des images** — ✅ le portrait principal possède un `alt` descriptif ; les SVG décoratifs sont masqués aux lecteurs d’écran.
11. **Compression des images** — ✅ portrait en WebP déjà léger et servi via `next/image`.
12. **Point masqué sur la capture** — ⚠️ le texte original est caché par l’overlay du téléphone. Les optimisations image / chargement sont néanmoins couvertes par `next/image`; les images non prioritaires restent lazy-loadées par défaut.
13. **Contraste** — ✅ palette maintenue, ajout d’un focus clavier visible et boutons à contraste fort. Contrôle visuel final à refaire sur la vraie preview applicative.
14. **Site responsive** — ✅ landing, formulaire, footer, pages légales et bannière de consentement ont des règles mobile dédiées.
15. **Page 404 custom** — ✅ `app/not-found.tsx` ajouté.
16. **Liens cassés** — ✅ les liens internes nouvellement ajoutés pointent vers des routes existantes ; audit final de crawl à refaire après déploiement applicatif réel.
17. **Validation des formulaires** — ✅ validation HTML + validation serveur renforcée : type de contenu, origine, consentement de contact, e-mail, listes autorisées, date et longueurs.
18. **Anti-spam** — ✅ honeypot + contrôle d’origine + validation stricte. Un CAPTCHA / Turnstile pourra être ajouté plus tard si le volume de spam l’exige.
19. **Outil d’analytics** — ✅ pipeline Google Analytics consent-gated prêt via `NEXT_PUBLIC_GA_MEASUREMENT_ID`. ⚠️ aucun identifiant réel n’est configuré à ce stade ; aucune mesure n’est donc active.
20. **Un seul CTA principal** — ✅ le parcours de conversion principal reste la demande d’échange avec Stéphanie ; les variantes contextuelles convergent toutes vers le même formulaire.

## Éléments ajoutés en plus

- route `/mentions-legales` ;
- footer légal global ;
- en-têtes `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` ;
- gestion centralisée de l’URL canonique ;
- blocage volontaire de l’indexation des previews tant que le domaine définitif n’est pas renseigné.

## Bloqueurs avant vraie mise en production

Les points suivants ne doivent pas être présentés comme terminés tant qu’ils ne sont pas fournis / validés :

- adresse professionnelle de Stéphanie ;
- statut / forme juridique ;
- SIREN / SIRET et autres mentions liées à son statut ;
- domaine public final ;
- confirmation de l’activation FormSubmit ou remplacement par un autre prestataire ;
- choix et activation éventuelle de l’analytics ;
- validation des prestataires et durées de conservation réellement appliquées ;
- raccord Google Calendar réel si souhaité ;
- raccord Brevo réel si souhaité.

## Test final recommandé

Après déploiement de la vraie application Next.js :

1. lancer `npm run typecheck` et `npm run build` ;
2. ouvrir les pages `/`, `/confidentialite`, `/conditions-utilisation`, `/mentions-legales` et une URL inexistante ;
3. tester le formulaire sur mobile et desktop ;
4. vérifier les headers HTTPS / sécurité ;
5. vérifier `/robots.txt` et `/sitemap.xml` ;
6. tester la carte Open Graph avec un outil de prévisualisation de partage ;
7. faire un crawl des liens internes ;
8. refaire un contrôle accessibilité / contraste et responsive ;
9. vérifier qu’aucun analytics soumis au consentement ne part avant acceptation.
