# 🚀 Site Label Confiance - Version Standalone

Site web prêt à l'emploi **SANS INSTALLATION REQUISE** !

## ✨ Comment utiliser ce site ?

### Option 1 : Ouvrir directement dans votre navigateur (Recommandé)

1. **Double-cliquez** sur le fichier `index.html`
2. Le site s'ouvre directement dans votre navigateur par défaut
3. C'est tout ! 🎉

### Option 2 : Depuis votre éditeur de code

1. Clic droit sur `index.html`
2. Sélectionnez "Open with Live Server" ou "Preview in Browser"
3. Le site s'ouvre avec rechargement automatique

## 📁 Structure du site

```
static/
├── index.html          → Page d'accueil
├── le-label.html       → Page Le Label (référentiel)
├── adherer.html        → Page Adhérer (tarifs + formulaire)
├── cabinets.html       → Page Cabinets Labellisés (annuaire)
├── contact.html        → Page Contact (formulaire)
└── README.md           → Ce fichier
```

## 🎨 Fonctionnalités

- ✅ **Page d'accueil** : Hero, valeurs, 7 piliers, témoignages
- ✅ **Le Label** : Référentiel détaillé, 7 piliers dépliables, FAQ
- ✅ **Adhérer** : Tarifs, processus, formulaire de candidature
- ✅ **Cabinets** : Annuaire avec filtres, profils des cabinets
- ✅ **Contact** : Formulaire, coordonnées, FAQ rapide

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **Tailwind CSS** (via CDN) : Design moderne et responsive
- **JavaScript Vanilla** : Interactivité (accordéons, formulaires)
- **Google Fonts** : Typographie Inter + Playfair Display

## 📱 Responsive Design

Le site est **100% responsive** et fonctionne sur :
- 📱 Mobile (< 768px)
- 📱 Tablette (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🎯 Caractéristiques

- ✅ **Aucune installation** de Node.js, npm ou autre
- ✅ **Pas de build** ou de compilation nécessaire
- ✅ **Fonctionne offline** (sauf les CDN de polices et Tailwind)
- ✅ **Navigation fluide** entre les pages
- ✅ **Animations élégantes** et transitions
- ✅ **Formulaires interactifs** avec validation
- ✅ **Design moderne** et professionnel

## 🚀 Déploiement

Pour mettre le site en ligne :

1. **Option 1 - GitHub Pages** (gratuit)
   - Créer un repo GitHub
   - Push le dossier `static/`
   - Activer GitHub Pages dans Settings

2. **Option 2 - Netlify** (gratuit)
   - Glisser-déposer le dossier `static/` sur netlify.com
   - Le site est en ligne instantanément

3. **Option 3 - Serveur web classique**
   - Uploader le contenu de `static/` via FTP
   - Pointer votre domaine vers le dossier

## 📝 Personnalisation

Pour personnaliser le site :

1. **Couleurs** : Modifier la section `<style>` dans chaque fichier HTML
2. **Textes** : Éditer directement le contenu HTML
3. **Images** : Remplacer les placeholders par vos images
4. **Liens** : Mettre à jour les URLs dans les `<a href="">`

## 💡 Notes importantes

- Les **formulaires** affichent actuellement des alertes JavaScript
- Pour les rendre fonctionnels, connectez-les à un service backend (ex: Formspree, Netlify Forms)
- Les **CDN** nécessitent une connexion internet :
  - Tailwind CSS : https://cdn.tailwindcss.com
  - Google Fonts : https://fonts.googleapis.com

## 📧 Support

Pour toute question : contact@labelconfiance.fr

---

**© 2024 Label Confiance - Site créé avec ❤️**
