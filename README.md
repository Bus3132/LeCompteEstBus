# Le compte est bus

Appli de comptage quotidien des TSO (traitements de substitution aux opiacés) pour le Bus 31/32, à Marseille.

**Lien de l'appli : https://bus3132.github.io/LeCompteEstBus/**

![Le compte est bus](img/logo.jpg)

## Ce qu'elle fait

- **Méthadone** (5, 10, 20, 40, 60 mg) : flacons du carton ouvert + cartons fermés (70 flacons) + nombre camion. Chaque dosage a la couleur de son étiquette.
- **Buprénorphine** (0,4, 1, 2, 4, 6, 8 mg) et **Orobupré** (2, 8 mg) : comprimés hors boîte + boîtes fermées (7 cp) + nombre camion. Chaque ligne porte l'étiquette du produit (MÉTHA, BUPRÉ, ORO).
- Tableau de ce qui reste (à relire avant d'envoyer), envoi sur WhatsApp en dessous, copie du texte. Le message donne la date du comptage et l'heure de la dernière saisie.
- **Annuler / Rétablir** sans limite (désactivés une fois le comptage envoyé).
- **Remise à zéro** toujours visible en haut, avec une demande de confirmation. On peut encore faire « Annuler » après.
- **Nouveau jour** : à l'ouverture un autre jour, l'appli propose un nouveau comptage (ou de reprendre l'ancien).
- **Vérification avant l'envoi** : si des dosages manquent, sont à moitié saisis ou sont à vérifier (carton ouvert ≥ 70…), l'appli les liste avant d'ouvrir WhatsApp ; chaque point mène au champ concerné. Une dose à moitié saisie n'a pas de ✓ et s'affiche « — ? » dans le tableau.
- **« ⚠ à vérifier »** : si on envoie quand même, les lignes signalées partent marquées « ⚠ à vérifier » dans le message.
- **Verrouillage après envoi** : après l'ouverture de WhatsApp (ou une copie du texte), l'appli demande « Le message est bien parti ? » ; « Oui, verrouiller » passe le comptage en lecture seule. « Modifier » le déverrouille pour corriger une case.
- **Recompter** : si une erreur est découverte, « Recompter » (sur le Résultat ou dans la bannière « Comptage envoyé ») démarre un nouveau comptage vide le même jour, après confirmation. L'en-tête et le message disent « 2e comptage du 24/11/2026 (remplace celui de 07:43) » ; le premier reste « Comptage du … ». Les comptages précédents du jour restent consultables en lecture seule sous le tableau, pour comparer (les chiffres ne sont jamais fusionnés).
- Bouton **Suivant** collé en bas de l'écran, juste au-dessus du clavier, pendant la saisie (le pavé numérique iPhone n'a pas de touche Entrée). Il passe aussi par les cartons fermés de méthadone : on choisit au doigt, ou au clavier par un chiffre ou les flèches.
- Sauvegarde automatique et reprise après une coupure.
- Fonctionne aussi sans réseau une fois installée.

## Installer l'appli sur son téléphone

Le bouton **Installer** dans l'appli affiche aussi ces explications.

### iPhone / iPad

1. Ouvrir le lien de l'appli dans **Safari**.
2. Toucher le bouton **Partager** (le carré avec une flèche vers le haut), en bas de l'écran.
3. Faire défiler et choisir **Sur l'écran d'accueil**.
4. Toucher **Ajouter** en haut à droite.

### Android

1. Ouvrir le lien de l'appli dans **Chrome**.
2. Toucher le menu **⋮** en haut à droite.
3. Choisir **Installer l'application** (ou **Ajouter à l'écran d'accueil**).
4. Confirmer avec **Installer**.

L'icône du bus apparaît sur l'écran d'accueil et l'appli s'ouvre en plein écran.

## Chiffres « camion »

Les valeurs par défaut sont en haut du script dans `index.html` (`DEFAULT_CAMION`).

Ces valeurs ne servent qu'à un téléphone neuf sans réseau. Les vrais chiffres camion (et le nombre de flacons par carton, de comprimés par boîte) sont **communs à toute l'équipe** : ils sont gardés en ligne (Supabase, table `comptebus_reglages`) et chaque téléphone les récupère dès qu'il a du réseau.

Pour en changer un : lien **Réglages camion (communs à toute l'équipe)** en bas de l'appli. L'appli montre l'ancien et le nouveau chiffre et l'effet sur le total du jour, puis demande une confirmation et le **mot de passe de l'équipe** (masqué, bouton « Afficher »). Le changement vaut ensuite pour tous les téléphones.

## Données

Les comptages restent dans le téléphone (stockage du navigateur) : ils ne sont envoyés nulle part, sauf le message WhatsApp qu'on envoie soi-même. Une saisie commencée sur un téléphone se termine sur le même téléphone.

Seuls les réglages camion sont partagés en ligne (Supabase), protégés par le code de l'équipe.

## Fichiers

- `index.html` : l'appli
- `manifest.webmanifest`, `sw.js` : installation sur l'écran d'accueil et fonctionnement hors connexion
- `img/` : logo et icônes
- `fonts/` : polices (Permanent Marker, Atkinson Hyperlegible, licence SIL Open Font License)
