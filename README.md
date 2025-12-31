---
# CV Analyzer Frontend 🎨📄

Interface web du projet **CV Analyzer**, développée avec **Angular 17 Standalone**.  
Elle permet aux utilisateurs d’uploader des CV, de consulter les résultats d’analyse et de parcourir les CV enregistrés.

---

## 🚀 Fonctionnalités

- Upload de CV (PDF / DOCX)
- Affichage des informations extraites :
  - Nom
  - Email
  - Téléphone
  - Localisation
  - Compétences
- Liste des CV analysés
- Page de détail par CV
- Interface moderne en **SCSS**

---

## 🛠️ Stack technique

- **Angular 17+ (Standalone)**
- **TypeScript**
- **SCSS**
- **Angular Router**
- **HttpClient**
- API REST FastAPI (backend)

---

## 📂 Structure du projet

src/
├── app/
│ ├── pages/
│ │ ├── upload/
│ │ ├── list/
│ │ └── detail/
│ ├── services/
│ │ └── cv.service.ts
│ ├── app.routes.ts
│ ├── app.config.ts
│ └── app.component.*
└── styles.scss

---

## ⚙️ Installation

### 1️⃣ Cloner le projet

git clone https://github.com/TON_USERNAME/cv-analyzer-frontend.git
cd cv-analyzer-frontend

### 2️⃣ Installer les dépendances
npm install

### 3️⃣ Lancer l’application
ng serve

👉 Application disponible sur :
http://localhost:4200
