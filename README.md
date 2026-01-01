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
<img width="1366" height="685" alt="interface-upload" src="https://github.com/user-attachments/assets/b82d4136-f6bb-4777-9e5f-97b595820022" />

<img width="1366" height="717" alt="upload" src="https://github.com/user-attachments/assets/01933444-60e5-4f9e-b454-66508b3d51d2" />


2.listes cvs
<img width="1366" height="685" alt="list-cvs" src="https://github.com/user-attachments/assets/307a507b-2a16-4721-b933-d0b2242c58d6" />


3. Cv par id
<img width="1366" height="669" alt="cv-by-id" src="https://github.com/user-attachments/assets/26605b61-4db0-4b18-ae9b-51f812420338" />
