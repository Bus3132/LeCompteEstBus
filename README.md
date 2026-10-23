# Le compte est bus

Appli de comptage quotidien des TSO (traitements de substitution aux opiacés) pour le Bus 31/32, à Marseille.

**Lien de l'appli : https://julienaron.github.io/bus3132-comptage/**

![Le compte est bus](img/logo.jpg)

## Ce qu'elle fait

- **Méthadone** (5, 10, 20, 40, 60 mg) : flacons du carton ouvert + cartons fermés (70 flacons) + nombre camion. Chaque dosage a la couleur de son étiquette.
- **Buprénorphine** (0,4, 1, 2, 4, 6, 8 mg) et **Orobupré** (2, 8 mg) : nombre de comprimés + boîtes fermées (7 cp) + nombre camion.
- Tableau de ce qui reste, envoi en un clic sur WhatsApp, copie du texte.
- **Annuler / Rétablir** sans limite.
- **Remise à zéro** toujours visible en haut, avec une demande de confirmation. On peut encore faire « Annuler » après.
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

Sur chaque téléphone, on peut les changer à la main dans **Réglages : camion et contenance**, en bas de chaque onglet. Le changement est enregistré tout de suite et gardé d'un jour à l'autre. Une case modifiée est entourée en orange, et le bouton **Revenir aux chiffres par défaut** remet les valeurs du fichier.

## Données

Les saisies restent dans le téléphone (stockage du navigateur). Rien n'est envoyé sur un serveur. Une saisie commencée sur un téléphone se termine sur le même téléphone.

## Fichiers

- `index.html` : l'appli
- `manifest.webmanifest`, `sw.js` : installation sur l'écran d'accueil et fonctionnement hors connexion
- `img/` : logo et icônes
- `fonts/` : polices (Permanent Marker, Atkinson Hyperlegible, licence SIL Open Font License)
