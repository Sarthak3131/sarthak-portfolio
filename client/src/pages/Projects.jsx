import { useState, useEffect, memo } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";

const container = {
  hidden: {},
  show: { transition: { staggerChildren:0.14, delayChildren:0.1 } },
};
const item = {
  hidden: { opacity:0, y:24 },
  show:   { opacity:1, y:0, transition:{ duration:0.5, ease:"easeOut" } },
};

/* ── THUMBNAIL ILLUSTRATIONS ───────────────────────────────── */
function MedQueueThumb() {
  return (
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%", position:"absolute", inset:0 }}>
      <defs>
        <linearGradient id="medBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(56,189,248,0.16)" />
          <stop offset="100%" stopColor="rgba(2,6,23,0.05)" />
        </linearGradient>
        <radialGradient id="medGlow" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="rgba(56,189,248,0.24)" />
          <stop offset="100%" stopColor="rgba(56,189,248,0)" />
        </radialGradient>
        <pattern id="medGrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(56,189,248,0.08)" strokeWidth="0.45"/>
        </pattern>
        <filter id="medSoft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>
      <rect width="320" height="160" fill="url(#medBg)"/>
      <rect width="320" height="160" fill="url(#medGrid)"/>
      <rect width="320" height="160" fill="url(#medGlow)"/>

      {/* Header strip */}
      <rect x="14" y="12" width="292" height="20" rx="8" fill="rgba(2,6,23,0.42)" stroke="rgba(56,189,248,0.22)" strokeWidth="0.7"/>
      <circle cx="26" cy="22" r="2" fill="rgba(56,189,248,0.75)"/>
      <circle cx="34" cy="22" r="2" fill="rgba(56,189,248,0.45)"/>
      <circle cx="42" cy="22" r="2" fill="rgba(56,189,248,0.25)"/>
      <text x="160" y="25" textAnchor="middle" fontSize="7" fill="rgba(125,211,252,0.8)" fontFamily="monospace">MEDQUEUE DASHBOARD</text>

      {/* Hospital cross */}
      <rect x="140" y="36" width="40" height="11" rx="3" fill="rgba(56,189,248,0.9)"/>
      <rect x="149" y="27" width="22" height="29" rx="3" fill="rgba(56,189,248,0.9)"/>
      <circle cx="160" cy="41" r="18" fill="none" stroke="rgba(56,189,248,0.24)" strokeWidth="1"/>

      {/* Queue token cards */}
      {[
        { x:20,  y:68, num:"#01", active:true, eta:"Now" },
        { x:80,  y:68, num:"#02", active:false, eta:"2m" },
        { x:140, y:68, num:"#03", active:false, eta:"5m" },
        { x:200, y:68, num:"#04", active:false, eta:"8m" },
        { x:260, y:68, num:"#05", active:false, eta:"12m" },
      ].map((t) => (
        <g key={t.num}>
          <rect x={t.x} y={t.y} width="50" height="64" rx="10"
            fill={t.active ? "rgba(56,189,248,0.28)" : "rgba(15,23,42,0.45)"}
            stroke={t.active ? "rgba(56,189,248,0.8)" : "rgba(255,255,255,0.1)"}
            strokeWidth={t.active ? "1.5" : "0.5"}
          />
          {t.active && <rect x={t.x} y={t.y} width="50" height="5" rx="2" fill="rgba(56,189,248,0.95)"/>}
          <text x={t.x + 25} y={t.y + 24} textAnchor="middle" fontSize="9.5" fontWeight="700"
            fill={t.active ? "#38bdf8" : "rgba(255,255,255,0.3)"} fontFamily="monospace">{t.num}</text>
          <rect x={t.x + 9} y={t.y + 32} width="32" height="3" rx="2"
            fill={t.active ? "rgba(56,189,248,0.55)" : "rgba(255,255,255,0.08)"}/>
          <rect x={t.x + 12} y={t.y + 40} width="26" height="3" rx="2"
            fill={t.active ? "rgba(56,189,248,0.35)" : "rgba(255,255,255,0.05)"}/>
          <text x={t.x + 25} y={t.y + 56} textAnchor="middle" fontSize="6.6" fill="rgba(148,163,184,0.9)" fontFamily="monospace">ETA {t.eta}</text>
        </g>
      ))}

      {/* Glow under active card */}
      <ellipse cx="45" cy="146" rx="30" ry="9" fill="rgba(56,189,248,0.22)" filter="url(#medSoft)"/>

      {/* Arrow flow */}
      <path d="M70 100 L78 100" stroke="rgba(56,189,248,0.45)" strokeWidth="1.5" strokeDasharray="3 2" markerEnd="url(#arr1)"/>
      <defs>
        <marker id="arr1" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5" fill="none" stroke="rgba(56,189,248,0.6)" strokeWidth="1"/>
        </marker>
      </defs>

      {/* Status bar */}
      <rect x="20" y="144" width="280" height="9" rx="5" fill="rgba(255,255,255,0.04)"/>
      <rect x="20" y="144" width="78" height="9" rx="5" fill="rgba(56,189,248,0.75)"/>
      <text x="160" y="151" textAnchor="middle" fontSize="6.8" fill="rgba(56,189,248,0.7)" fontFamily="monospace">LIVE QUEUE 01 / 05 | AVG WAIT 05m</text>
    </svg>
  );
}

function FarmersThumb() {
  return (
    <svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%", position:"absolute", inset:0 }}>
      <defs>
        <linearGradient id="farmBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(52,211,153,0.16)" />
          <stop offset="100%" stopColor="rgba(13,51,32,0.08)" />
        </linearGradient>
        <pattern id="farmGrid" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M 18 0 L 0 0 0 18" fill="none" stroke="rgba(52,211,153,0.08)" strokeWidth="0.45"/>
        </pattern>
        <linearGradient id="farmStripe" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(52,211,153,0.75)"/>
          <stop offset="100%" stopColor="rgba(16,185,129,0.25)"/>
        </linearGradient>
      </defs>
      <rect width="320" height="160" fill="url(#farmBg)"/>
      <rect width="320" height="160" fill="url(#farmGrid)"/>

      {/* Header */}
      <rect x="14" y="12" width="292" height="20" rx="8" fill="rgba(10,46,26,0.45)" stroke="rgba(52,211,153,0.22)" strokeWidth="0.7"/>
      <text x="160" y="25" textAnchor="middle" fontSize="7" fill="rgba(110,231,183,0.85)" fontFamily="monospace">DIGITAL FARMERS MARKET</text>

      {/* Product cards grid */}
      {[
        { x:16,  y:40, label:"🥦 Broccoli",  price:"₹40/kg",  color:"rgba(52,211,153,0.26)" },
        { x:90,  y:40, label:"🌽 Corn",       price:"₹25/kg",  color:"rgba(250,204,21,0.17)"  },
        { x:164, y:40, label:"🍅 Tomatoes",   price:"₹35/kg",  color:"rgba(248,113,113,0.17)" },
        { x:238, y:40, label:"🥕 Carrots",    price:"₹30/kg",  color:"rgba(251,146,60,0.17)"  },
      ].map((c) => (
        <g key={c.label}>
          <rect x={c.x} y={c.y} width="66" height="70" rx="11" fill={c.color} stroke="rgba(255,255,255,0.1)" strokeWidth="0.55"/>
          <text x={c.x + 33} y={c.y + 26} textAnchor="middle" fontSize="16">{c.label.split(" ")[0]}</text>
          <text x={c.x + 33} y={c.y + 44} textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">{c.label.split(" ").slice(1).join(" ")}</text>
          <rect x={c.x + 8} y={c.y + 50} width="50" height="1" fill="rgba(255,255,255,0.08)"/>
          <text x={c.x + 33} y={c.y + 64} textAnchor="middle" fontSize="8.5" fontWeight="700" fill="rgba(52,211,153,0.9)" fontFamily="monospace">{c.price}</text>
        </g>
      ))}

      {/* Cart bar */}
      <rect x="16" y="114" width="288" height="30" rx="10" fill="rgba(52,211,153,0.12)" stroke="rgba(52,211,153,0.25)" strokeWidth="1"/>
      <text x="30" y="132" fontSize="9" fill="rgba(52,211,153,0.85)" fontFamily="monospace" fontWeight="600">🛒 Cart (3 items)</text>
      <rect x="226" y="119" width="68" height="18" rx="7" fill="url(#farmStripe)"/>
      <text x="260" y="131" textAnchor="middle" fontSize="8" fontWeight="700" fill="#062a18" fontFamily="sans-serif">Checkout</text>

      {/* JWT badge */}
      <rect x="16" y="150" width="46" height="8" rx="4" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.5"/>
      <text x="39" y="156.5" textAnchor="middle" fontSize="5.5" fill="rgba(52,211,153,0.7)" fontFamily="monospace">JWT Auth</text>
      <rect x="68" y="150" width="46" height="8" rx="4" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.5"/>
      <text x="91" y="156.5" textAnchor="middle" fontSize="5.5" fill="rgba(52,211,153,0.7)" fontFamily="monospace">MERN Stack</text>
      <rect x="120" y="150" width="46" height="8" rx="4" fill="rgba(52,211,153,0.15)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.5"/>
      <text x="143" y="156.5" textAnchor="middle" fontSize="5.5" fill="rgba(52,211,153,0.7)" fontFamily="monospace">REST APIs</text>
    </svg>
  );
}

const THUMBS = { 1: MedQueueThumb, 2: FarmersThumb };

/* ── PROJECT MODAL ─────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const Thumb = THUMBS[project.id];
  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
        onClick={onClose}
        style={{ position:"fixed", inset:0, zIndex:9999, background:"rgba(0,0,0,0.75)", backdropFilter:"blur(12px)", display:"flex", alignItems:"center", justifyContent:"center", padding:"2rem" }}
      >
        <motion.div
          initial={{ scale:0.85, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0.85, opacity:0 }}
          transition={{ type:"spring", damping:25, stiffness:300 }}
          onClick={e => e.stopPropagation()}
          style={{ background:"rgba(15,23,42,0.97)", backdropFilter:"blur(30px)", border:"1px solid rgba(59,130,246,0.2)", borderRadius:28, maxWidth:660, width:"100%", maxHeight:"90vh", overflowY:"auto", padding:"1.5rem 2.25rem 2.25rem", boxShadow:"0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(59,130,246,0.08)", position:"relative", WebkitOverflowScrolling:"touch", scrollBehavior:"smooth" }}
        >
          <button onClick={onClose}
            style={{ position:"absolute", top:"1rem", right:"1rem", background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.2)", width:32, height:32, borderRadius:8, cursor:"pointer", color:"#94A3B8", fontWeight:700, fontSize:"1rem", lineHeight:1, padding:0, display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background="rgba(59,130,246,0.2)"; e.currentTarget.style.color="#F1F5F9"; }}
            onMouseLeave={e => { e.currentTarget.style.background="rgba(59,130,246,0.1)"; e.currentTarget.style.color="#94A3B8"; }}
          >✕</button>

          {/* Illustrated thumb */}
          <div style={{ width:"100%", height:190, borderRadius:18, background:project.gradient, marginBottom:"1.75rem", border:"1px solid rgba(59,130,246,0.12)", position:"relative", overflow:"hidden" }}>
            {Thumb && <Thumb />}
          </div>

          <span style={{ fontSize:"0.72rem", fontWeight:600, color:"#60A5FA", background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.2)", borderRadius:100, padding:"0.2rem 0.75rem", marginBottom:"0.75rem", display:"inline-block" }}>{project.period}</span>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.5rem", fontWeight:700, color:"#F1F5F9", margin:"0.5rem 0" }}>{project.title}</h2>
          <p style={{ fontSize:"0.92rem", color:"#94A3B8", lineHeight:1.85, marginBottom:"1.5rem" }}>{project.description}</p>

          <div style={{ marginBottom:"1.5rem" }}>
            <h4 style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"2.5px", color:"#60A5FA", textTransform:"uppercase", marginBottom:"0.85rem" }}>Key Highlights</h4>
            {project.highlights.map((hl, i) => (
              <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:8, fontSize:"0.86rem", color:"#94A3B8", marginBottom:"0.55rem", lineHeight:1.65 }}>
                <div style={{ width:6, height:6, background:"#60A5FA", borderRadius:"50%", marginTop:"0.45rem", flexShrink:0 }} />
                {hl}
              </div>
            ))}
          </div>

          <div style={{ display:"flex", gap:"0.4rem", flexWrap:"wrap", marginBottom:"1.5rem" }}>
            {project.tech.map((t) => (
              <span key={t} style={{ fontSize:"0.72rem", fontWeight:600, padding:"0.2rem 0.65rem", borderRadius:7, background:"rgba(59,130,246,0.08)", color:"#93C5FD", border:"1px solid rgba(59,130,246,0.18)" }}>{t}</span>
            ))}
          </div>

          <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
            <a href={project.github} target="_blank" rel="noreferrer"
              style={{ fontSize:"0.85rem", fontWeight:600, padding:"0.6rem 1.4rem", borderRadius:100, background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)", color:"#93C5FD", textDecoration:"none", transition:"all 0.2s" }}
              onMouseEnter={e => Object.assign(e.currentTarget.style,{ background:"rgba(59,130,246,0.22)", color:"#fff", boxShadow:"0 0 14px rgba(59,130,246,0.35)" })}
              onMouseLeave={e => Object.assign(e.currentTarget.style,{ background:"rgba(59,130,246,0.1)", color:"#93C5FD", boxShadow:"none" })}
            >GitHub ↗</a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}

/* ── PROJECT CARD ──────────────────────────────────────────── */
const ProjectCard = memo(function ProjectCard({ project, onClick }) {
  const Thumb = THUMBS[project.id];
  return (
    <motion.article
      variants={item}
      whileHover={{ y:-8 }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      className="g-card"
      style={{ overflow:"hidden", cursor:"pointer", willChange:"transform", transform:"translateZ(0)" }}
    >
      {/* Illustrated Thumb */}
      <div style={{ minHeight:160, background:project.gradient, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, borderBottom:"1px solid rgba(59,130,246,0.12)" }} />
        {Thumb && <Thumb />}
      </div>

      {/* Body */}
      <div style={{ padding:"1.6rem" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"0.5rem", marginBottom:"0.75rem" }}>
          <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.15rem", fontWeight:700, color:"#F1F5F9" }}>{project.title}</h3>
          <span className="g-pill">{project.badge}</span>
        </div>
        <p style={{ fontSize:"0.86rem", color:"#94A3B8", lineHeight:1.75, marginBottom:"1rem" }}>{project.description}</p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem", marginBottom:"1.25rem" }}>
          {project.tech.map((t) => (
            <span key={t} style={{ fontSize:"0.68rem", fontWeight:600, padding:"0.2rem 0.65rem", borderRadius:7, background:"rgba(59,130,246,0.08)", color:"#93C5FD", border:"1px solid rgba(59,130,246,0.18)" }}>{t}</span>
          ))}
        </div>
        <div style={{ display:"flex", gap:"0.75rem", flexWrap:"wrap", alignItems:"center" }}>
          <a href={project.github} target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ fontSize:"0.78rem", fontWeight:600, padding:"0.5rem 1.1rem", borderRadius:100, background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)", color:"#93C5FD", textDecoration:"none", transition:"all 0.2s" }}
            onMouseEnter={e => Object.assign(e.currentTarget.style,{ background:"rgba(59,130,246,0.22)", color:"#fff", boxShadow:"0 0 14px rgba(59,130,246,0.35)" })}
            onMouseLeave={e => Object.assign(e.currentTarget.style,{ background:"rgba(59,130,246,0.1)", color:"#93C5FD", boxShadow:"none" })}
          >GitHub ↗</a>
          <span style={{ fontSize:"0.75rem", color:"#64748B" }}>Click card for details</span>
        </div>
      </div>
    </motion.article>
  );
});

/* ── PROJECTS PAGE ─────────────────────────────────────────── */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="p-section">
      <div className="g-blob" style={{ top:"0",     left:"50%",  transform:"translateX(-50%)", width:460, height:460, background:"radial-gradient(circle,rgba(59,130,246,0.09),transparent 70%)" }} />
      <div className="g-blob" style={{ bottom:"5%", right:"5%",  width:420, height:420, background:"radial-gradient(circle,rgba(59,130,246,0.07),transparent 70%)" }} />

      <div style={{ position:"relative", zIndex:2, maxWidth:1160, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"2rem" }}>
          <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}>
            <span className="sec-tag">Selected Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:800, color:"#F1F5F9", marginTop:"0.5rem", marginBottom:"0.75rem" }}
          >
            My <span className="sec-hl">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true, margin:"-80px" }}
            style={{ color:"#94A3B8", maxWidth:480, margin:"0 auto", fontSize:"0.96rem" }}
          >
            Full-stack applications solving real-world problems with clean architecture.
          </motion.p>
        </div>

        <motion.div
          variants={container} initial="hidden" whileInView="show"
          viewport={{ once:true, amount:0.1 }}
          style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:"2rem" }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}