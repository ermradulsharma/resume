# Mradul Sharma - Portfolio Website

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://mradulsharma.vercel.app/)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

A modern, fully responsive portfolio website showcasing my work as a Full-Stack Developer. Built with React 19, Bootstrap 5, and modern web technologies, featuring a comprehensive blog system, project showcase, and SEO optimization.

---

## 🚀 Live Demo

👉 **[mradulsharma.vercel.app](https://mradulsharma.vercel.app/)**

---

## ✨ Features

### 🎯 Core Features
- **Fully Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Dark/Light Mode** - Theme switching with persistent preferences
- **SEO Optimized** - Dynamic meta tags, Open Graph, Twitter Cards
- **Fast Performance** - Optimized bundle size and lazy loading

### 📝 Blog System
- **28 Technical Articles** - In-depth tutorials on web development
- **Category Filtering** - Frontend, Backend, DevOps, Database, Security
- **Pagination** - Easy navigation through blog posts
- **AI-Generated Images** - Custom images for each blog post
- **Reading Time** - Estimated reading time for each article
- **Related Posts** - Smart content recommendations

### 💼 Portfolio Sections
- **Home** - Hero section with typewriter effect and introduction
- **About** - Professional background and skills
- **Resume** - Detailed work experience and education
- **Projects** - Showcase of development projects with live demos
- **Blogs** - Technical writing and tutorials
- **Contact** - Contact form with EmailJS integration

### 🛠️ Technical Features
- **React Router v7** - Client-side routing with nested routes
- **React Bootstrap** - Responsive UI components
- **EmailJS Integration** - Contact form without backend
- **Custom SEO Hook** - Dynamic meta tags for each page
- **Google Maps Integration** - Interactive location display
- **GitHub Calendar** - Contribution activity visualization
- **Chart.js** - Data visualization for skills and analytics

---

## 🛠 Tech Stack

### Frontend
- **React 19.2.0** - Latest React with concurrent features
- **React Router DOM 7.9.6** - Advanced routing
- **Bootstrap 5.3.8** - Responsive framework
- **React Bootstrap 2.10.10** - Bootstrap components for React
- **React Icons 5.5.0** - Icon library

### UI/UX
- **Typewriter Effect** - Animated text effects
- **React Select** - Enhanced select components
- **Bootstrap Icons** - Icon set
- **Custom CSS** - Tailored styling

### Integrations
- **EmailJS** - Email service for contact form
- **Google Maps API** - Location integration
- **Chart.js** - Data visualization
- **React GitHub Calendar** - GitHub contribution graph

### Development
- **React Scripts 5.0.1** - Build tooling
- **ESLint** - Code quality
- **Date-fns** - Date manipulation

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   └── blogs/          # Blog post images
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── database/       # Data files (blogs.json, projects.json)
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   └── shared/         # Reusable components
│   ├── pages/
│   │   └── frontend/       # Page components
│   │       ├── Home/
│   │       ├── About/
│   │       ├── Resume/
│   │       ├── Projects/
│   │       ├── Blogs/
│   │       └── Contact/
│   ├── routes/
│   │   └── WebRoutes.jsx   # Route configuration
│   ├── hooks/
│   │   └── useSEO.js       # Custom SEO hook
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ v18.x
- **npm** ≥ v9.x (or yarn/pnpm)
- Modern web browser

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/ermradulsharma/resume.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables** (optional)

Create a `.env` file for EmailJS configuration:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Start development server**

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

---

## 💻 Available Scripts

### Development

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App (one-way operation)
```

---

## ⚙️ Configuration

### Customizing Content

1. **Personal Information**
   - Edit `src/components/database/profile.json` (if exists)
   - Update contact details in `src/pages/frontend/Contact/`

2. **Blog Posts**
   - Modify `src/components/database/blogs.json`
   - Add images to `public/images/blogs/`

3. **Projects**
   - Update `src/components/database/projects.json`
   - Add project images to `public/images/projects/`

4. **SEO Settings**
   - Edit meta tags in `src/hooks/useSEO.js`
   - Update default values for each page

### Theme Customization

- **Colors**: Edit CSS variables in `src/App.css`
- **Fonts**: Update font imports in `public/index.html`
- **Layout**: Modify Bootstrap breakpoints in component styles

---

## 🎨 Blog System

The portfolio includes a comprehensive blog system with:

- **28 Technical Articles** covering:
  - Frontend Development (React, Next.js, Vue.js, TypeScript)
  - Backend Development (Laravel, Node.js, APIs)
  - DevOps (Docker, Kubernetes, CI/CD)
  - Database (PostgreSQL, MongoDB, Redis)
  - Cloud Computing (AWS Lambda, Serverless)
  - Security (JWT, OAuth2, API Security)

- **Features**:
  - Category-based filtering
  - Pagination (6 posts per page)
  - Reading time estimation
  - Related posts suggestions
  - SEO-optimized individual blog pages
  - AI-generated custom images

---

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Deploy!

### Deploy on Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. New site from Git
4. Configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `build`
5. Deploy!

### Deploy on GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Deploy:

```bash
npm run deploy
```

---

## 📊 SEO Features

- **Dynamic Meta Tags** - Unique titles and descriptions for each page
- **Open Graph Tags** - Optimized social media sharing
- **Twitter Cards** - Enhanced Twitter previews
- **Canonical URLs** - Prevent duplicate content issues
- **Structured Data** - Rich snippets for search engines
- **Sitemap** - XML sitemap for search engines
- **Robots.txt** - Search engine crawling instructions

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Mradul Sharma**

- Portfolio: [mradulsharma.vercel.app](https://mradulsharma.vercel.app/)
- GitHub: [@ermradulsharma](https://github.com/ermradulsharma)
- LinkedIn: [Mradul Sharma](https://linkedin.com/in/mradulsharma)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Bootstrap team for the responsive framework
- Vercel for hosting
- All open-source contributors

---

## 📧 Contact

For any queries or suggestions, feel free to reach out:

- **Email**: mradulsharma786@gmail.com
- **Website**: [Mradul Sharma](https://mradulsharma.vercel.app/)
- **LinkedIn**: [Mradul Sharma](https://linkedin.com/in/mradulsharma)
- **GitHub**: [Mradul Sharma](https://github.com/ermradulsharma)
- **GitHub Issues**: [Create an issue](https://github.com/ermradulsharma/resume/issues)

---

<div align="center">
  <p>Made with ❤️ by Mradul Sharma</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
