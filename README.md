# Comptage Bus 31/32

Petite appli web pour le comptage quotidien des traitements de substitution au Bus 31/32 (Marseille).

## Ce qu'elle fait

- **Méthadone** (5, 10, 20, 40, 60 mg) : flacons du carton ouvert + cartons fermés (70 flacons) + nombre camion.
- **Buprénorphine** (0,4, 1, 2, 4, 6, 8 mg) et **Orobupré** (2, 8 mg) : nombre de comprimés + boîtes fermées (7 cp) + nombre camion.
- Tableau du reste pour chaque dosage, envoi en un clic sur WhatsApp, copie du texte.
- Annuler / Rétablir sans limite, sauvegarde automatique et reprise après une coupure.
- Les nombres « camion » et les contenances se règlent dans « Réglages » en bas de chaque onglet.

## Utilisation

Un seul fichier : `index.html`. Il suffit de l'ouvrir dans un navigateur.

Pour l'avoir en lien sur les téléphones, activer **GitHub Pages** :
Settings → Pages → Source « Deploy from a branch » → branche `main`, dossier `/ (root)`.
L'appli sera alors à l'adresse `https://<compte>.github.io/<nom-du-depot>/`.

Sur le téléphone, « Ajouter à l'écran d'accueil » donne une icône comme une vraie appli.

## Données

Les saisies restent dans le navigateur de chaque appareil (stockage local). Rien n'est envoyé sur un serveur.
