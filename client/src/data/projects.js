const projects = [
  {
    id: 1,
    emoji: "🏥",
    gradient: "linear-gradient(135deg, #0f2027, #1a1a2e, #16213e)",
    accentColor: "rgba(56,189,248,0.15)",
    glowColor: "rgba(56,189,248,0.5)",
    badge: "PHP · MySQL",
    title: "MedQueue",
    period: "Jun 2025 – Sep 2025",
    description:
      "A web-based hospital queue management system to optimize patient flow and reduce waiting time. Engineered backend logic in PHP using Circular Queue concepts for efficient token generation, queue rotation, and handling both online appointments and walk-in registrations.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    highlights: [
      "Circular Queue concept for efficient token generation and queue rotation",
      "Handles both online appointments and walk-in registrations",
      "Responsive interface for staff queue management and real-time patient token display",
      "Controlled queue size with dynamic patient token updates",
    ],
    github: "https://github.com/Sarthak3131/MedQueue",
    live: "#",
  },
  {
    id: 2,
    emoji: "🌾",
    gradient: "linear-gradient(135deg, #0a2e1a, #0d3320, #0f2d1a)",
    accentColor: "rgba(52,211,153,0.15)",
    glowColor: "rgba(52,211,153,0.5)",
    badge: "MERN Stack",
    title: "Digital Farmers Market",
    period: "Oct 2025 – Dec 2025",
    description:
      "A full-stack MERN marketplace enabling direct farmer-to-consumer transactions with product listing, shopping cart functionality, and order processing. Integrated JWT authentication with role-based authorization for farmers, consumers, and administrators.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    highlights: [
      "Full-stack MERN marketplace with product listing and order processing",
      "JWT authentication with role-based authorization for farmers, consumers, and admins",
      "Responsive UI using React components and Tailwind CSS",
      "RESTful backend with MongoDB for scalable data management",
    ],
    github: "https://github.com/Sarthak3131/Digital-Farmers-Market",
    live: "#",
  },
];

export default projects;