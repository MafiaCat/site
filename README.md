# 🏛️ Générateur de Civilisation

Jeu de simulation d'évolution de civilisation, de la tribu primitive à la conquête spatiale. Combinez des éléments pour découvrir de nouvelles technologies et progresser à travers 5 grandes ères de l'humanité.

## 🎮 Concept du jeu

Partez avec 4 éléments de base (Peuple, Feu, Chasse, Pierre) et combinez-les pour découvrir de nouveaux éléments. Chaque découverte est accompagnée d'une narration immersive qui raconte l'évolution de votre civilisation.

## 🌟 Fonctionnalités

- **5 Ères d'évolution** : Tribale → Agricole → Féodale → Industrielle → Spatiale
- **50+ combinaisons** : Un arbre de découvertes riche et varié
- **Narrations immersives** : Chaque découverte raconte une histoire
- **Progression automatique** : Débloquez de nouvelles ères en découvrant plus d'éléments
- **Système d'indices** : Bouton d'aide pour suggérer des combinaisons possibles
- **Historique** : Suivez vos dernières découvertes
- **Interface moderne** : Glassmorphisme, animations fluides, design responsive

## 🚀 Démarrage rapide

Aucune installation requise ! Il suffit d'ouvrir le fichier `index.html` dans votre navigateur web.

```bash
# Option 1 : Double-cliquer sur index.html

# Option 2 : Serveur local
npx serve .
```

## 🎯 Comment jouer

1. **Sélectionnez 2 éléments** en cliquant dessus dans la grille
2. **Cliquez sur "Créer !"** pour les combiner
3. **Découvrez de nouveaux éléments** et leurs narrations
4. **Progressez à travers les ères** en découvrant plus d'éléments
5. **Utilisez le bouton "💡 Indice"** si vous êtes bloqué

## 📊 Système de progression

- **Ère Tribale** : 0-9 éléments découverts
- **Ère Agricole** : 10-19 éléments
- **Ère Féodale** : 20-34 éléments
- **Ère Industrielle** : 35-54 éléments
- **Ère Spatiale** : 55+ éléments

## 🔨 Technologies

- **HTML5** : Structure sémantique
- **CSS3** : Glassmorphisme, animations, dégradés
- **JavaScript Vanilla** : Logique du jeu (aucune dépendance)
- **Tailwind CSS** : Framework CSS via CDN
- **Google Fonts** : Cinzel (titres) + Inter (texte)

## 💡 Exemples de combinaisons

- Peuple + Feu = Campement 🏕️
- Campement + Pierre = Village 🏘️
- Village + Clan = Tribu ⛺
- Pierre + Eau = Irrigation 🌊
- Métal + Feu = Forge 🔥
- Charbon + Eau = Vapeur 💨
- Science + Métal = Fusée 🚀

## 🎨 Design

- **Palette de couleurs** : Bleu foncé, violet, or
- **Typographie** : Cinzel (serif élégant) + Inter (sans-serif moderne)
- **Effets** : Glassmorphisme, backdrop-filter, box-shadow
- **Animations** : Transitions fluides, keyframes personnalisées

## 📱 Responsive

Le jeu s'adapte à tous les écrans :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 📄 Structure du fichier

```
/
├── index.html    # Fichier unique contenant tout le jeu
├── README.md     # Ce fichier
└── .gitignore
```

## 🎲 Système de jeu

Le jeu utilise un système de combinaisons basé sur un dictionnaire :
- Chaque combinaison est définie dans `COMBINATIONS`
- La progression entre ères est automatique selon les seuils
- Les indices suggèrent aléatoirement parmi les combinaisons disponibles

## 🤝 Contribution

Pour contribuer au projet :
1. Créer une branche depuis `main`
2. Faire vos modifications
3. Créer une Pull Request

## 📝 License

© 2024 - Tous droits réservés
