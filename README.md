# 🎮 Quiz Application - React/Redux

## 📋 Description du Projet
Une application de quiz interactive développée avec **React** et **Redux Toolkit**.  
Cette application permet aux utilisateurs de répondre à une série de questions et d'obtenir leurs résultats à la fin du quiz. 🚀

---

## ✨ Fonctionnalités
- 🎨 Interface moderne avec **design gradient** attrayant  
- 🗂️ Gestion d'état centralisée avec **Redux Toolkit**  
- 🧭 Navigation fluide avec **React Router**  
- 🎬 Animation de transition entre les questions  
- 🧮 Calcul automatique du score  
- 💾 Persistance des réponses pendant la session  
- 📱 Design responsive (desktop, tablette, mobile)  

---

## 🛠 Technologies Utilisées
- ⚛️ **React 18** - Bibliothèque frontend  
- 🗂️ **Redux Toolkit** - Gestion d’état  
- 🧭 **React Router DOM** - Navigation entre pages  
- 🎨 **React Icons** - Icônes UI  
- 💎 **Bootstrap 5** - Composants & styles rapides  
- 🎬 **CSS3** - Animations et styles personnalisés  

---

## 📁 Structure du Projet
```bash
quiz-app/
├── public/
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── Main.js
│   │   ├── Quiz.js
│   │   └── Result.js
│   ├── database/
│   │   └── data.js
│   ├── redux/
│   │   ├── Store.js
│   │   └── quizSlice.js
│   └── styles/
│       ├── App.css
│       ├── index.css
│       └── Quiz.css
└── package.json


🚀 Installation et Démarrage
Prérequis
Node.js (version 14 ou supérieure)

npm ou yarn

Étapes d'installation
1-Cloner le repository
git clone <repository-url>
cd quiz-app

2-Installer les dépendances
npm install

3-Démarrer l'application
npm start

4-Ouvrir dans le navigateur
http://localhost:3000

🎯 Utilisation de l'Application

## 📋 Fonctionnalités

### 1. Page d'Accueil (`/`)
- Saisie du **nom d’utilisateur**
- Consultation des **instructions du quiz**
- Bouton **Démarrer le quiz**

### 2. Page du Quiz (`/quiz`)
- Répondre à **10 questions informatiques**
- Navigation **Précédent / Suivant**
- **Sélection unique** des réponses
- Animation **fade-in / fade-out** entre les questions

### 3. Page des Résultats (`/result`)
- Affichage du **score final**
- Résumé des **performances**
- Option pour **recommencer le quiz**

---

## 📊 Système de Notation
- 10 questions au total
- ✅ 10 points par bonne réponse
- 🎯 Score maximum : **100 points**
- 🏆 Résultat : **Réussi si score ≥ 50 points**

---

## 🔧 Configuration Redux

### Store Configuration
```javascript
import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
