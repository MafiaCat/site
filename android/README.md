# 🏛️ Générateur de Civilisation - Android App

Application Android native pour le jeu Générateur de Civilisation.

## 📱 Prérequis

- Android Studio (Arctic Fox ou plus récent)
- SDK Android 21+ (Android 5.0 Lollipop minimum)
- JDK 8 ou plus récent

## 🔨 Compilation

1. Ouvrez le projet dans Android Studio
2. Attendez que Gradle synchronise les dépendances
3. Branchez votre appareil Android ou lancez un émulateur
4. Cliquez sur "Run" ou appuyez sur Shift+F10

## 📦 Structure du projet

```
android/
├── app/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/civilization/generator/
│   │       │   └── MainActivity.java       # Activité principale avec WebView
│   │       ├── res/
│   │       │   └── values/
│   │       │       └── strings.xml         # Ressources texte
│   │       ├── assets/
│   │       │   └── index-mobile.html       # Fichier HTML du jeu
│   │       └── AndroidManifest.xml         # Manifeste de l'application
│   └── build.gradle                        # Configuration Gradle de l'app
├── build.gradle                            # Configuration Gradle du projet
├── settings.gradle                         # Paramètres Gradle
└── gradle.properties                       # Propriétés Gradle
```

## 🎮 Fonctionnalités

- WebView natif pour une expérience fluide
- Mode immersif (plein écran)
- Support du stockage local (DOM Storage)
- Navigation arrière avec le bouton retour
- Optimisé pour les écrans mobiles
- Orientation portrait par défaut

## 🔧 Technologies

- **Android SDK 34** : Dernière version stable
- **AndroidX** : Bibliothèques de compatibilité modernes
- **WebView** : Affichage HTML/CSS/JavaScript natif
- **Java 8** : Langage de développement

## 📝 Notes de développement

- Le jeu est chargé depuis `assets/index-mobile.html`
- JavaScript est activé dans le WebView
- Le DOM Storage est activé pour sauvegarder la progression
- L'application fonctionne hors ligne une fois installée

## 🚀 Génération d'un APK

Pour créer un APK de production :

1. Dans Android Studio : **Build > Generate Signed Bundle / APK**
2. Suivez l'assistant pour créer ou sélectionner une clé de signature
3. Sélectionnez "APK" et "release" comme build variant
4. L'APK sera généré dans `app/build/outputs/apk/release/`

## 📱 Installation sur appareil

Via ADB :
```bash
adb install app/build/outputs/apk/release/app-release.apk
```

Ou transférez simplement l'APK sur votre appareil et ouvrez-le.

## 🔐 Permissions

- `INTERNET` : Pour les futures fonctionnalités en ligne (facultatif)
- `ACCESS_NETWORK_STATE` : Vérifier la connectivité réseau

## 💡 Améliorations futures

- [ ] Mode sombre natif
- [ ] Notifications pour les succès
- [ ] Sauvegarde cloud
- [ ] Classements en ligne
- [ ] Mode multijoueur

## 📄 Licence

© 2024 - Tous droits réservés
