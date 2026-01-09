# Mradul Sharma - Modern Portfolio Project

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/React-19.2.3-blue.svg)](https://reactjs.org/)
[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://mradulsharma.vercel.app/)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

A high-performance, fully responsive professional portfolio built with **React 19**, **Bootstrap 5**, and modern web technologies. This project features a robust JSON-driven CMS for easy content management, dynamic SEO, and a polished UI/UX with dark/light mode support.

---

## 🚀 Key Features

### 🏗️ Modern Architecture

- **React 19 & React Router v7**: Built on the latest React ecosystem standards.
- **Component-Based Design**: Modular and reusable component architecture featuring `UniversalCard`, `Lightbox`, and `Skeleton` loaders.
- **Performance Optimized**: Implements code splitting, `ErrorBoundary`, and lazy loading for faster page loads.
- **Custom Hooks**: Dedicated `useSEO` hook for advanced meta tag management.

### 🎨 UI & User Experience

- **Responsive Design**: Mobile-first approach using **Bootstrap 5**.
- **Dark/Light Mode**: Integrated theme toggler (`ThemeToggle`) for personalized viewing preference.
- **Interactive Elements**: Includes dynamic charts (`Chart.js`), interactive maps (`@react-google-maps/api`), `ReadingProgress` bars, and calendars (`FullCalendar`).

### 📝 Headless Content Management

- **JSON-Driven System**: Manage Blogs, Projects, Services, and FAQs directly via JSON files in `src/components/database`.
- **Dynamic Routing**: Automated route generation for blog posts and project details based on content slugs.

### 🔍 SEO & Analytics

- **Dynamic Meta Tags**: Automated via `useSEO` hook and `react-helmet-async` for optimal search engine visibility.
- **Analytics Ready**: Integrated `react-ga4` for Google Analytics tracking.

### 📧 Connectivity

- **Functional Contact Form**: Powered by **EmailJS** for serverless email handling.

---

## 💻 Technical Stack

### Core Technologies

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink?style=for-the-badge&logo=SASS&logoColor=white)

### Utilities & Libraries

- **Forms & Validation**: `ajv`
- **Visualization**: `chart.js`, `react-chartjs-2`, `@fullcalendar/react`
- **Icons**: `react-icons`, `bootstrap-icons`
- **Utilities**: `date-fns`, `typewriter-effect`
- **Maps**: `@react-google-maps/api`

---

## 📂 Project Structure

```text
resume/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── common/         # Shared UI components (Header, Footer, etc.)
│   │   ├── database/       # JSON Data (Blogs, Projects, etc.)
│   │   ├── dashboard/      # Dashboard widgets
│   │   └── frontend/       # Feature-specific components
│   ├── pages/
│   │   └── frontend/       # Main Page Views (Home, About, etc.)
│   ├── routes/             # Routing configuration
│   ├── layouts/            # Page layouts
│   ├── context/            # Global state context
│   └── hooks/              # Custom React hooks
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ermradulsharma/resume.git
   cd resume
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
npm run build
```

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

---

## 🤝 Contributing & License

This project is open-source and available under the **MIT License**.
Feel free to fork, improved, and submit pull requests.

---

## 👨‍💻 Developed By

### Mradul Sharma

_Software Architect • Full-Stack Engineer_

<p align="left">
<a href="https://linkedin.com/in/mradulsharma"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
<a href="https://github.com/ermradulsharma"><img src="https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
<a href="https://www.upwork.com/freelancers/~01e91f0a0ab6d99a4d"><img src="https://img.shields.io/badge/Upwork-6FDA44?style=for-the-badge&logo=Upwork&logoColor=white" alt="Upwork" /></a>
<a href="https://x.com/er_mradulsharma"><img src="https://img.shields.io/badge/X-%23000.svg?style=for-the-badge&logo=X&logoColor=white" alt="X" /></a>
<a href="mailto:mradulsharma786@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white" alt="Email" /></a>
</p>

[Portfolio Live](https://mradulsharma.vercel.app/)
