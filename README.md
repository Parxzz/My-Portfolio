<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# 🌐 Paras Soni – Software Engineer Portfolio

A modern, responsive, and interactive portfolio website to showcase my skills, projects, and achievements.

🔗 **Live Demo:** [https://paras-soni-portfolio.netlify.app/]

---

## 🚀 Features

* Fully responsive design (mobile, tablet, desktop)
* Smooth animations & transitions (Framer Motion / GSAP)
* Interactive 3D elements (Spline / Three.js)
* Project showcase with GitHub & live links
* Contact form for easy communication

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Animations:** Framer Motion, GSAP, Locomotive Scroll
* **3D/Visuals:** Spline / Three.js
* **Deployment:** Netlify / Vercel / GitHub Pages

---

## ⚡ Getting Started

Clone the repo and run locally:

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
npm run dev
```

---

## 📂 Project Structure

```
portfolio/
│── public/           # Static assets
│── src/
│   ├── assets/       # Images & icons
│   ├── components/   # Reusable components
│   ├── sections/     # Hero, About, Projects, Contact
│   ├── App.jsx       # Main App
│   └── index.js      # Entry point
│── package.json
│── tailwind.config.js
│── README.md
```

---

⭐ If you find this project useful, don’t forget to give it a **star**!
>>>>>>> 3afb6f45b0defddfa32c705d2b69775371a65ae1
