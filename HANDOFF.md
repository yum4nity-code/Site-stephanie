# HANDOFF — Site Stéphanie Recorda

**Dernière mise à jour : 17 septembre 2026**

Ce document est le point de reprise obligatoire du projet. Il doit rester lisible par quelqu’un qui n’a accès ni aux conversations précédentes ni aux décisions orales.

## 1. État actuel

Le projet est en **intégration technique V1 / durcissement pré-lancement** sur la branche :

`v1-landing-2026-09-17`

La branche `main` conserve la base de référence. La direction visuelle approuvée reste figée dans :

`docs/reference/homepage-reference-2026-09-17.svg`

Portrait V1 :

- `assets/images/stephanie-recorda-portrait-professionnel.webp` ;
- `public/images/stephanie-recorda-portrait-professionnel.webp`.

## 2. Socle technique

- Next.js 16.3.5 ;
- React 19.3.0 ;
- TypeScript ;
- App Router ;
- Node.js >= 20.9.0 ;
- cible Vercel.

Fichiers clés :

- `app/page.tsx` — landing ;
- `app/layout.tsx` — métadonnées, composants globaux, footer, consentement ;
- `app/callback-form.tsx` / `app/callback-form.css` — demande de rappel + confirmation ;
- `app/api/callback/route.ts` — validation serveur, transmission du lead, agendas, Brevo optionnel ;
- `app/api/callback/calendar/route.ts` — export `.ics` ;
- `app/api/callback/google-calendar.ts` — Google Calendar Stéphanie ;
- `app/api/callback/status/route.ts` — passage orange → vert ;
- `app/privacy-controls.tsx` — consentement analytics ;
- `app/site-footer.tsx` — footer légal ;
- `app/compliance.css` — styles conformité / pages légales / consentement / focus ;
- `lib/site-url.ts` — URL canonique et règle d’indexation ;
- `docs/LAUNCH_CHECKLIST.md` — état détaillé des contrôles avant mise en ligne.

## 3. Landing et conversion

Le hero, les trois offres, les prestations ponctuelles, les bénéfices, la section À propos et le CTA final sont intégrés et responsives.

Forfaits documentés :

- Pack TPE Sérénité — 5 à 10 salariés — 690 € HT / mois ;
- Pack PME Performance — 11 à 25 salariés — 1 190 € HT / mois ;
- Pack Sur-Mesure — +25 salariés / multi-sites — sur devis.

Les CTA contextuels convergent tous vers le même parcours principal : **demander un échange / rappel avec Stéphanie**. Le lien « Découvrir mes offres » reste un lien de navigation et non un second tunnel de conversion.

Le mini-diagnostic « Quelle offre me convient ? » reste en backlog prioritaire.

## 4. Demande de rappel

Champs : nom, entreprise facultative, téléphone, e-mail, besoin principal, jour souhaité, créneau, message facultatif.

Créneaux : matin, pause déjeuner, après-midi, fin de journée, flexible.

Le site précise que le créneau est une **préférence de rappel**, pas une réservation automatique.

Consentements :

- consentement au rappel obligatoire ;
- opt-in conseils RH & Paie facultatif, séparé et non précoché.

Le client envoie maintenant explicitement `contactConsent`, et le serveur refuse les demandes qui ne portent pas ce consentement.

Validation serveur renforcée :

- `Content-Type` JSON obligatoire ;
- origine same-origin lorsqu’elle est fournie ;
- honeypot ;
- longueurs limitées ;
- e-mail validé ;
- besoins et créneaux limités aux valeurs autorisées ;
- date réelle et dans une fenêtre raisonnable ;
- consentement contact obligatoire.

La transmission principale reste FormSubmit vers `stephanie.recorda1@gmail.com`.

## 5. Confirmation + agenda prospect

Après succès, le formulaire disparaît au profit d’un écran fort : ✓, titre « Votre demande est bien partie », récapitulatif, prochain événement, e-mail utilisé et boutons agenda.

Côté prospect :

- Google Agenda ;
- `.ics` universel ;
- événement « à confirmer », journée entière et non bloquant ;
- aucun faux horaire n’est inventé pour un créneau générique.

Brevo reste optionnel pour envoyer l’e-mail transactionnel et inscrire à la newsletter uniquement avec opt-in.

## 6. Google Agenda de Stéphanie — orange → vert

Pipeline codé mais non encore relié à son compte Google :

1. nouvelle demande → événement `[À TRAITER]` orange ;
2. événement non bloquant avec coordonnées et contexte ;
3. lien signé de traitement dans la notification et l’événement ;
4. GET sans mutation ;
5. action POST explicite « Marquer traitée et ouvrir l’agenda » ;
6. événement → `[TRAITÉE]` vert + `handledAt` ;
7. ouverture de Google Agenda.

L’action explicite évite les faux changements de statut causés par les scanners de liens des messageries.

## 7. Durcissement pré-lancement — checklist du 17/09/2026

À la demande du propriétaire, la checklist vue sur une capture « 20 choses à vérifier avant de lancer un site » a été appliquée au projet.

### Ajouts réalisés

- page `/confidentialite` — RGPD / données personnelles ;
- page `/conditions-utilisation` — CGU du site ;
- page `/mentions-legales` ;
- footer global vers les pages légales ;
- bannière de consentement analytics avec **Refuser / Accepter** et possibilité de rouvrir les préférences ;
- Google Analytics éventuel chargé **uniquement après consentement** via `NEXT_PUBLIC_GA_MEASUREMENT_ID` ;
- meta title / description enrichis ;
- canonical ;
- Open Graph + carte Twitter dynamique ;
- favicon `SR` ;
- `sitemap.xml` ;
- `robots.txt` ;
- previews volontairement `noindex` tant que `SITE_URL` / `NEXT_PUBLIC_SITE_URL` ne désignent pas explicitement un vrai domaine HTTPS ;
- page 404 personnalisée ;
- headers de sécurité : HSTS, nosniff, deny frame, referrer policy, permissions policy ;
- focus clavier visible ;
- pages légales / footer / consentement responsives ;
- validation formulaire serveur renforcée ;
- documentation `.env.example` mise à jour.

Images : le portrait principal utilise déjà `next/image`, un WebP léger, des dimensions explicites, `sizes` et un `alt` descriptif. Le hero reste prioritaire ; les images non prioritaires bénéficient du comportement lazy de Next.

Le point n°12 de la capture était masqué par l’overlay du téléphone. Il est signalé comme tel dans `docs/LAUNCH_CHECKLIST.md`; les optimisations de chargement image sont néanmoins couvertes.

### Contrôle technique

GitHub Actions Node.js 22 après ces changements :

- installation : **succès** ;
- `npm run typecheck` : **succès** ;
- `npm run build` : **succès**.

Run : `35269072658`.

Le workflow temporaire de validation a été supprimé après succès.

## 8. Preview V4

Preview visuelle actuelle :

`https://stephanie-recorda-rh-preview-v4.vercel.app`

Projet Vercel : `prj_3N3Bv9UjKeXj15FmqPjSDnpJbHYq`.

La V4 est une **preview statique**, utile pour le parcours de rappel et l’écran de succès. Elle ne contient pas encore le nouveau durcissement Next.js de la section 7 et ne valide pas le backend réel.

## 9. Points réellement bloquants avant production

Ne pas considérer le site comme juridiquement / opérationnellement terminé tant que les éléments suivants ne sont pas fournis ou validés :

- adresse professionnelle de Stéphanie ;
- forme / statut juridique ;
- SIREN / SIRET et mentions liées au statut ;
- domaine public final ;
- coordonnées légales exactes de l’hébergeur à reprendre dans les mentions ;
- validation des durées de conservation réellement appliquées ;
- confirmation de l’activation FormSubmit ou remplacement du prestataire ;
- choix / activation analytics si souhaité — aucun identifiant GA réel n’est présent ;
- raccord Google Calendar réel si souhaité ;
- raccord Brevo réel si souhaité ;
- validation finale des textes, tarifs, biographie et citation du hero.

La structure des pages légales est en place mais les identifiants professionnels manquants ne doivent pas être inventés.

## 10. Sources conformité utilisées lors du durcissement

Pour guider la rédaction et les choix techniques, vérification faite le 17/09/2026 auprès de sources officielles françaises : CNIL pour les données prospects / cookies / audience et Service-Public Entreprendre pour les mentions légales. La rédaction reste à valider avec la situation juridique réelle de Stéphanie avant publication.

## 11. Prochaine étape recommandée

Créer une **vraie preview applicative Next.js V5**, et non une copie statique, afin de contrôler en conditions réelles :

- `/confidentialite` ;
- `/conditions-utilisation` ;
- `/mentions-legales` ;
- `/robots.txt` ;
- `/sitemap.xml` ;
- `/opengraph-image` générée par Next ;
- 404 ;
- headers de sécurité ;
- formulaire et validation backend ;
- responsive / contraste ;
- aucun chargement analytics avant consentement.

Ensuite seulement : renseigner les informations légales manquantes et raccorder les services externes retenus.

## 12. Discipline de reprise

Toute personne / IA reprenant ce projet doit :

1. lire `AGENTS.md` ;
2. lire ce handoff en entier ;
3. lire `docs/LAUNCH_CHECKLIST.md` ;
4. vérifier `IDEAS_INBOX.md` ;
5. vérifier l’état réel du dépôt avant d’agir ;
6. ne pas contredire une décision documentée sans validation explicite ;
7. mettre à jour ce fichier avant de terminer toute intervention qui modifie le projet.
