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


## Règles de calcul expliquées avec exemples

Le simulateur applique les règles fiscales françaises pour le calcul des droits de succession. Voici comment chaque option du survivant fonctionne, avec un exemple simplifié pour chaque cas (patrimoine commun = 200 000 €, propre Monsieur = 100 000 €, propre Madame = 50 000 €, donation enfant = 20 000 €, âge survivant = 75 ans).

### 1. 100% Usufruit (Défaut)
Au premier décès, le conjoint survivant reçoit 100% de l'usufruit sur la part du défunt. Les enfants reçoivent la nue-propriété.

**Exemple** :
- Patrimoine de Monsieur : 200 000 / 2 + 100 000 = 200 000 €
- Valeur de l'usufruit à 75 ans : 30%, nue-propriété : 70%
- Part taxable par enfant : (200 000 € × 70%) / 2 = 70 000 €
- Abattement : 100 000 € - 20 000 € = 80 000 €
- Base taxable : max(0, 70 000 € - 80 000 €) = 0 €
- Droits de succession : 0 €

### 2. 1/4 Pleine Propriété (Légal)
Le survivant reçoit 1/4 en pleine propriété, les enfants se partagent les 3/4 restants.

**Exemple** :
- Patrimoine de Monsieur : 200 000 €
- Part survivant : 1/4 × 200 000 € = 50 000 € (exonéré)
- Part enfants : 3/4 × 200 000 € = 150 000 €
- Part taxable par enfant : 150 000 € / 2 = 75 000 €
- Abattement : 80 000 €
- Base taxable : max(0, 75 000 € - 80 000 €) = 0 €
- Droits de succession : 0 €

### 3. 1/3 Pleine Propriété (Donation)
Le survivant reçoit 1/3 en pleine propriété, les enfants se partagent les 2/3 restants.

**Exemple** :
- Patrimoine de Monsieur : 200 000 €
- Part survivant : 1/3 × 200 000 € ≈ 66 667 € (exonéré)
- Part enfants : 2/3 × 200 000 € ≈ 133 333 €
- Part taxable par enfant : 133 333 € / 2 ≈ 66 667 €
- Abattement : 80 000 €
- Base taxable : max(0, 66 667 € - 80 000 €) = 0 €
- Droits de succession : 0 €

### 4. 1/4 Pleine Propriété + 3/4 Usufruit (Donation)
Le survivant reçoit 1/4 en pleine propriété et 3/4 en usufruit. Les enfants reçoivent la nue-propriété sur les 3/4.

**Exemple** :
- Patrimoine de Monsieur : 200 000 €
- Part survivant : 1/4 PP = 50 000 € (exonéré), 3/4 USU = 150 000 €
- Valeur nue-propriété sur 3/4 : 150 000 € × 70% = 105 000 €
- Part taxable par enfant : 105 000 € / 2 = 52 500 €
- Abattement : 80 000 €
- Base taxable : max(0, 52 500 € - 80 000 €) = 0 €
- Droits de succession : 0 €

**Remarque** : Si la base taxable est supérieure à l'abattement, le simulateur applique le barème progressif (voir barème dans le code).

## Technologies
- HTML5
- Tailwind CSS (via CDN)
- JavaScript natif


## Tests unitaires
Des tests unitaires ont été ajoutés pour valider la logique des calculs fiscaux.

### Structure
- Les fonctions de calcul (`calculerImpot`, `getValeurUsufruit`) sont extraites dans le fichier `calculs.js`.
- Les tests sont écrits dans `calculs.test.js` avec le framework Jest.

### Exécution des tests
1. Installer les dépendances : `npm install`
2. Lancer les tests : `npm test`

Les tests vérifient la validité des calculs d'impôt et de la valeur de l'usufruit selon les barèmes officiels.

## Pour aller plus loin
- Ajouter la gestion de plusieurs enfants ou d'autres cas familiaux.
- Permettre l'export ou la sauvegarde des simulations.

## Auteur
Projet développé par vfarcy.
