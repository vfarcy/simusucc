# Simulateur de Droits de Succession

Ce projet est une application web permettant de simuler les droits de succession en France selon différents scénarios familiaux et fiscaux.

## Fonctionnalités
- Calcul des droits de succession pour un couple avec 2 enfants.
- Prise en compte du patrimoine, des donations, de l'âge des survivants et des abattements fiscaux.
- Plusieurs options de partage au premier décès (usufruit, pleine propriété, etc.).
- Affichage dynamique et comparatif des résultats selon le scénario (qui décède en premier).
- Interface moderne et responsive grâce à Tailwind CSS.

## Utilisation
1. Ouvrez le fichier `index.html` dans votre navigateur.
2. Renseignez les valeurs du patrimoine, des donations et des âges.
3. Choisissez l'option du survivant.
4. Cliquez sur "Calculer les scénarios" pour afficher les résultats.

## Hypothèses de calcul
- Le simulateur considère toujours 2 enfants.
- Les donations sont supposées dater de moins de 15 ans.
- Le conjoint survivant est exonéré de droits.
- Les dettes ne sont pas prises en compte (calcul sur actif brut).
- Pas de gestion de testament ou de cas particuliers.

## Technologies
- HTML5
- Tailwind CSS (via CDN)
- JavaScript natif

## Pour aller plus loin
- Ajouter la gestion de plusieurs enfants ou d'autres cas familiaux.
- Ajouter des tests unitaires pour la logique de calcul.
- Permettre l'export ou la sauvegarde des simulations.

## Auteur
Projet développé par vfarcy.
