# Backlog d’idées — Site Stéphanie Recorda

Ce fichier conserve les idées évoquées, qu’elles soient validées, à tester ou simplement à garder sous la main.

## Implémenté

### Demande de rappel avec créneau de préférence

Le CTA **« Prendre rendez-vous »** ouvre désormais un formulaire intégré au site plutôt qu’un e-mail brut.

Le prospect peut renseigner :

- nom / prénom ;
- entreprise ;
- téléphone ;
- e-mail ;
- besoin principal ;
- jour souhaité ;
- créneau de préférence : matin / pause déjeuner / après-midi / fin de journée / flexible ;
- message libre facultatif.

Le créneau est explicitement présenté comme une **préférence de rappel**, pas comme une réservation automatique d’agenda.

Un consentement facultatif séparé permet d’indiquer : **« Je souhaite recevoir ponctuellement les conseils RH & Paie de Stéphanie »**. Il n’est jamais précoché.

Les CTA contextuels des packs et des missions ponctuelles utilisent le même formulaire avec le sujet concerné prérempli.

Pour la V1, le consentement newsletter est enregistré dans la demande. Le raccord automatique à une liste Brevo est préparé dans le backend mais ne devient actif que lorsque les variables d’environnement nécessaires sont configurées.

### Confirmation forte après envoi + agendas provisoires

Après une soumission réussie, le formulaire est remplacé par un véritable écran de confirmation :

- gros état de succès ;
- récapitulatif du sujet, du jour, du créneau et du besoin ;
- rappel explicite que le créneau reste **à confirmer** ;
- bouton **« Ajouter à Google Agenda »** ;
- bouton **« Autre agenda (.ics) »** pour Apple Calendar, Outlook et calendriers compatibles iCalendar.

L’événement ajouté est volontairement une **demande de rappel à confirmer**, en journée entière et non bloquante, afin de ne pas présenter une préférence comme un rendez-vous déjà réservé.

Le mail reçu par Stéphanie contient également les deux liens agenda afin qu’elle puisse conserver la demande dans son propre agenda sans créer artificiellement une réservation définitive.

Le backend contient en plus un raccord optionnel Brevo pour envoyer automatiquement au prospect un e-mail de confirmation avec le même récapitulatif et les mêmes liens agenda. Ce mail n’est envoyé que si `BREVO_API_KEY` et `BREVO_SENDER_EMAIL` sont configurés. Sans ces variables, la demande principale continue d’être transmise à Stéphanie via FormSubmit et l’interface ne prétend pas qu’un e-mail automatique a été envoyé.

### Suivi des demandes dans Google Agenda de Stéphanie — orange → vert

Le pipeline est maintenant **préparé dans le code** pour créer automatiquement chaque nouvelle demande dans le Google Agenda de Stéphanie lorsque son OAuth Google sera configuré.

Comportement retenu :

- nouvelle demande : événement **orange**, titre préfixé **« [À TRAITER] »** ;
- l’événement reste non bloquant et conserve le jour + le créneau de préférence ;
- le mail reçu par Stéphanie contient un lien **« Ouvrir / marquer traitée »** ;
- le même lien est ajouté dans la description de l’événement Google Agenda ;
- ce lien ouvre d’abord un petit écran de confirmation avec le bouton **« Marquer traitée et ouvrir l’agenda »** ;
- après cette action explicite, l’événement passe en **vert**, son titre devient **« [TRAITÉE] »**, puis Google Agenda s’ouvre sur l’événement.

Le changement de couleur n’est volontairement **pas basé sur une simple ouverture de l’événement**, car Google Agenda n’expose pas un état fiable « lu / ouvert ». L’action explicite évite aussi qu’un scanner de sécurité d’e-mail déclenche le changement de statut en suivant automatiquement un lien.

Le code utilise par défaut des `colorId` configurables pour l’intention orange / vert. Le raccord n’est réellement actif qu’après configuration des identifiants Google Calendar et du secret de signature côté serveur.

## Priorité haute

### 1. Mini-diagnostic « Quelle offre me convient ? »

Objectif : aider un dirigeant à s’orienter vers une formule en moins d’une minute.

CTA possibles :

- **Quelle offre me convient ?**
- **Trouver mon offre en 1 min**
- **Trouver ma formule**

Questions utiles :

1. Taille de l’entreprise : 1–10 / 11–25 / 26–50 / +50 salariés.
2. Fonction RH interne : autonome / besoin de renfort / aucune fonction RH.
3. Besoin principal : paie & DSN / administration RH / paie + RH / organisation & accompagnement du dirigeant.
4. Présence sur site : non / occasionnelle / régulière.
5. Complexité : multi-sites / plusieurs conventions / saisonnalité / effectif très variable / aucune.
6. Facultatif : problème principal actuel — manque de temps / fiabiliser la paie / structurer les RH / situation complexe.

Résultat recommandé :

- ne pas afficher un score ;
- proposer le pack qui semble le plus adapté ;
- expliquer en 1 à 2 phrases pourquoi ;
- afficher prix / périmètre ;
- CTA **« Échanger avec Stéphanie »** ;
- en cas d’ambiguïté, proposer 2 formules et un échange court plutôt que forcer un choix.

### 2. Donner une destination aux 3 packs

Les cartes :

- **Pack TPE Sérénité** ;
- **Pack PME Performance** ;
- **Pack Sur-Mesure**

doivent avoir une action claire.

V1 légère :

- bouton **« Voir le détail »** ;
- ancre ou accordion sur la même page ;
- expliquer ce qui est inclus ;
- expliquer à qui le pack convient ;
- préciser les éventuelles limites ou cas nécessitant un devis ;
- CTA final **« Échanger sur cette formule »** ;
- préremplir l’offre dans le formulaire.

### 3. Garder les 4 bénéfices non cliquables

Bandeau sous le hero :

- Fiabilisez / Sécurisez votre paie ;
- Structurez vos démarches RH ;
- Anticipez vos risques RH ;
- Un accompagnement flexible et humain.

Ces blocs sont de la **réassurance**, pas des pages ni des services indépendants.

Piste de wording préférée à tester : **« Fiabilisez votre paie »** à la place de « Sécurisez votre paie ».

## Priorité moyenne

### 4. CTA contextuels sur les missions ponctuelles

Pas besoin de créer une page dédiée à chaque mission en V1.

Possibilités :

- **Me parler de cette mission** ;
- **En savoir plus** ;
- **Demander un diagnostic**.

### 5. Formulaire de contact intelligent

Préremplir automatiquement :

- offre consultée ;
- résultat du mini-diagnostic ;
- taille d’entreprise ;
- besoin principal.

Limiter le formulaire à quelques champs pour ne pas casser la conversion.

### 6. Réassurance sans surcharger

Pistes :

- années d’expérience ;
- expérience terrain ;
- spécialisation Silae ;
- gestion d’effectifs importants dans le parcours ;
- sur site / à distance ;
- zone Strasbourg / Bas-Rhin.

Ne pas inventer de logos clients ni de témoignages.

### 7. Exemple de cas d’usage

Éventuellement ajouter un exemple très court :

> « TPE de 8 salariés : paie, DSN, administration RH courante et appui dirigeant au même endroit. »

À n’utiliser que si Stéphanie valide le wording et si cela ne ressemble pas à un faux témoignage client.

## Priorité basse / plus tard

### 8. Véritable agenda synchronisé

Le site sait désormais préparer :

- les liens **Google Agenda** / **.ics** côté prospect ;
- la création automatique d’une demande dans l’agenda de Stéphanie dès que son OAuth Google est configuré ;
- un statut opérationnel orange **à traiter** puis vert **traitée**.

Une vraie réservation synchronisée reste une évolution ultérieure : elle devra lire les disponibilités réelles de Stéphanie, créer un horaire définitif dans les deux calendriers, gérer les invitations, modifications et annulations. Tant que cet outil n’est pas choisi, le site ne doit pas faire croire qu’un créneau est réservé automatiquement.

### 9. FAQ

Questions candidates :

- Travaillez-vous uniquement à Strasbourg ?
- Peut-on vous confier uniquement la paie ?
- Intervenez-vous sur site ?
- Que comprend le forfait mensuel ?
- Comment se passe la reprise d’un dossier paie ?
- Le forfait est-il avec engagement ?

### 10. SEO local

À préparer après validation du contenu :

- RH externalisée Strasbourg ;
- gestion de paie Strasbourg ;
- consultant RH TPE PME Alsace ;
- externalisation paie Bas-Rhin ;
- Silae Strasbourg.

Éviter le bourrage de mots-clés.

## Questions encore ouvertes

- Wording final : « Sécurisez » ou « Fiabilisez » votre paie ?
- Le mini-diagnostic est-il visible dès le hero, après les bénéfices ou au niveau des offres ?
- Quel outil d’agenda synchronisé si Stéphanie veut passer du rappel à la réservation directe ?
- Activer la connexion OAuth Google Calendar préparée dans le code et vérifier les couleurs réelles dans l’agenda de Stéphanie.
- Activer Brevo pour l’e-mail transactionnel et l’opt-in newsletter, ou choisir un autre prestataire avant production ?
- Photo définitive haute résolution de Stéphanie à fournir.
- Mentions légales / statut / données RGPD à finaliser avant production.
