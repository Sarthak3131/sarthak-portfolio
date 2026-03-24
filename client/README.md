# Elite Portfolio - Sarthak Srivastava

A modern, responsive developer portfolio built with React, Vite, and Tailwind CSS. Features smooth animations, dark theme with cyan accents, and comprehensive sections showcasing skills, projects, and experience.

## 🚀 Features

- **Modern Design**: Dark theme with cyan/sky gradients and glassmorphism effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered scroll reveals and hover effects
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Professional Sections**:
  - Hero with social links and resume download
  - About with profile and stats
  - Skills with animated progress bars
  - Projects showcase
  - Education timeline
  - Experience/Training history
  - Certificates grid
  - Achievements with counters
  - GitHub Stats with contribution calendar
  - LeetCode Stats with platform metrics
  - Contact form with validation
  - Footer with back-to-top functionality

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: Framer Motion
- **Data Visualization**: Recharts
- **GitHub Integration**: React GitHub Calendar
- **Build Tool**: Vite
- **Linting**: ESLint

## 📁 Project Structure

```
client/
├── public/
├── src/
│   ├── assets/               # Images and certificates
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── GlobalBackground.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── certificates.js
│   │   ├── education.js
│   │   └── experience.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Certificates.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── GithubStats.jsx
│   │   └── LeetcodeStats.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── portfolio.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Elite-Portfolio/client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📝 Customization

### Adding New Projects

Edit `src/data/projects.js` to add new projects:

```javascript
{
  id: 3,
  title: "New Project",
  description: "Project description",
  image: "/path/to/image.jpg",
  technologies: ["Tech1", "Tech2"],
  githubUrl: "https://github.com/username/repo",
  liveUrl: "https://project-demo.com"
}
```

### Updating Skills

Modify the skills content in `src/pages/Skills.jsx`.

### Personal Information

Update personal details in the respective data files and components.

## 🎨 Design System

- **Primary Colors**: Cyan (#06b6d4), Sky (#0ea5e9)
- **Background**: Slate-950 (#0f172a)
- **Text**: Slate hierarchy (slate-100 to slate-500)
- **Fonts**: Syne (headings), DM Sans (body), DM Mono (code)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sarthak Srivastava**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]
- Email: [Your Email]

---

Built with ❤️ using React and Vite
