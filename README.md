# Elite Portfolio - Full Stack Developer

A comprehensive, production-ready developer portfolio featuring a modern React frontend and Node.js backend. Designed to impress recruiters with smooth animations, responsive design, and professional presentation.

## 🏗️ Architecture

This project consists of two main parts:

### Frontend (Client)
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Features**: Responsive design, dark theme, scroll animations

### Backend (Server)
- **Runtime**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Features**: RESTful API, project management endpoints

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd Elite-Portfolio
```

2. **Install frontend dependencies:**
```bash
cd client
npm install
cd ..
```

3. **Install backend dependencies:**
```bash
cd server
npm install
cd ..
```

4. **Set up environment variables:**
Create `.env` file in server directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

5. **Start MongoDB** (if running locally)

6. **Start the backend:**
```bash
cd server
npm start
```

7. **Start the frontend** (in a new terminal):
```bash
cd client
npm run dev
```

8. **Open your browser:**
Navigate to [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```
Elite-Portfolio/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images, icons
│   │   ├── components/    # Reusable UI components
│   │   ├── data/          # Static data files
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service functions
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # App entry point
│   ├── package.json
│   └── README.md
├── server/                 # Node.js backend
│   ├── config/            # Database configuration
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── server.js         # Server entry point
│   └── package.json
└── README.md              # This file
```

## 🎨 Design Features

- **Dark Theme**: Professional slate-950 background with cyan accents
- **Responsive**: Mobile-first design for all screen sizes
- **Animations**: Smooth scroll reveals, hover effects, and counters
- **Typography**: Syne for headings, DM Sans for body text
- **Glassmorphism**: Modern frosted glass effects

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite (build tool)
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- ESLint

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## 📊 Portfolio Sections

1. **Hero** - Introduction with social links and resume download
2. **About** - Personal profile with key statistics
3. **Skills** - Technical skills with proficiency indicators
4. **Projects** - Featured work with live demos and GitHub links
5. **Education** - Academic background timeline
6. **Experience** - Professional training and experience
7. **Certificates** - Professional certifications grid
8. **Achievements** - Key metrics and accomplishments
9. **Contact** - Contact form with validation
10. **Footer** - Social links and back-to-top button

## 🔧 Development

### Available Scripts

**Frontend:**
```bash
cd client
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

**Backend:**
```bash
cd server
npm start        # Start production server
npm run dev      # Start with nodemon (development)
```

### Environment Variables

Create `.env` files in both client and server directories:

**Server (.env):**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

**Client (.env):**
```
VITE_API_URL=http://localhost:5000/api
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the client: `cd client && npm run build`
2. Deploy the `dist/` folder to your hosting platform

### Backend (Heroku/Railway)
1. Set environment variables in your hosting platform
2. Deploy the server directory
3. Update client API URLs for production

### Full Stack Deployment
- Use services like Render, Railway, or Vercel for both frontend and backend
- Ensure MongoDB is accessible from your deployment environment

## 🤝 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

## 📱 Mobile Responsiveness

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance

- **Fast Loading**: Vite's optimized build system
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Lazy loading and modern formats
- **Caching**: Efficient asset caching strategies

## 🔒 Security

- CORS configuration
- Input validation
- Environment variable protection
- Secure headers

## 📈 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add admin dashboard for content management
- [ ] Integrate with headless CMS
- [ ] Add analytics tracking
- [ ] Implement contact form email notifications


## 👨‍💻 Author

**Sarthak Srivastava**
- Full Stack Developer
- Portfolio: https://sarthaksrivastava.netlify.app/
- LinkedIn: https://www.linkedin.com/in/sarthak300/
- GitHub: https://github.com/Sarthak3131/
- Email: sarthaksrivastava189@gmail.com

---

⭐ If you found this project helpful, please give it a star!
