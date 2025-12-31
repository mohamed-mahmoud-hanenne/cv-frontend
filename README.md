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

## Démo

1.interface upload CV
<img width="1366" height="768" alt="interface-upload" src="https://github.com/user-attachments/assets/d3f3a359-f6fe-45c2-8868-997fda7c5454" />

2.listes cvs
<img width="1366" height="768" alt="list-cvs" src="https://github.com/user-attachments/assets/34f776c1-466c-4f33-8825-d7b5ec8faeae" />

3. Cv par id
<img width="1366" height="768" alt="cv-by-id" src="https://github.com/user-attachments/assets/b1a1fb61-3451-4df2-971b-3687c615c46f" />
