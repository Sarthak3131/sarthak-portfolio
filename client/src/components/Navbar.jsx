import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id:"home",         label:"Home",         icon:"🏠" },
  { id:"about",        label:"About",        icon:"👤" },
  { id:"skills",       label:"Skills",       icon:"⚡" },
  { id:"projects",     label:"Projects",     icon:"🚀" },
  { id:"github-stats", label:"GitHub",       icon:"🐙" },
  { id:"leetcode",     label:"LeetCode",     icon:"💻" },
  { id:"experience",   label:"Experience",   icon:"💼" },
  { id:"education",    label:"Education",    icon:"🎓" },
  { id:"certificates", label:"Certificates", icon:"🏆" },
  { id:"achievements", label:"Achievements", icon:"🌟" },
  { id:"contact",      label:"Contact",      icon:"✉️" },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile]         = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    let ticking = false;
    const fn = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    let ticking = false;
    let sectionCache = [];

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Rebuild cache less frequently! We calculate only once!
          if (sectionCache.length === 0) {
            sectionCache = navLinks.map(l => {
              const el = document.getElementById(l.id);
              return el ? { id: l.id, offsetTop: el.offsetTop } : null;
            }).filter(Boolean);
          }

          const scrollY = window.scrollY + window.innerHeight * 0.35;
          let current = "home";
          for (const section of sectionCache) {
            if (section.offsetTop <= scrollY) {
              current = section.id;
            }
          }
          if (activeSection !== current) setActiveSection(current);
          
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    const invalidateCache = () => { sectionCache = []; };
    window.addEventListener("resize", invalidateCache);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", invalidateCache);
    };
  }, [activeSection]);

  const goto = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop side rail — hidden on mobile */}
      {!isMobile && (
        <motion.div
          initial={{ x:60, y:"-50%", opacity:0 }} animate={{ x:0, y:"-50%", opacity:1 }}
          transition={{ duration:0.7, ease:"easeOut" }}
          style={{ position:"fixed", right:16, top:"50%", zIndex:50, display:"flex", flexDirection:"column", alignItems:"center", gap:10 }}
        >
          {navLinks.map((link) => {
            const act = activeSection === link.id;
            return (
              <button key={link.id} onClick={(e) => goto(e, link.id)} title={link.label} aria-label={link.label}
                style={{
                  width:44, height:44, borderRadius:12,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  background:  act ? "linear-gradient(135deg,rgba(59,130,246,0.28),rgba(37,99,235,0.2))" : "rgba(15,23,42,0.82)",
                  border:      act ? "1px solid #3B82F6" : "1px solid rgba(59,130,246,0.18)",
                  color:       act ? "#93C5FD" : "#94A3B8",
                  cursor:"pointer", backdropFilter:"blur(14px)",
                  boxShadow:   act ? "0 0 18px rgba(59,130,246,0.45)" : "none",
                  transition:"all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
                }}
                onMouseEnter={e => { if (!act) Object.assign(e.currentTarget.style, { background:"rgba(59,130,246,0.16)", borderColor:"#3B82F6", color:"#93C5FD", transform:"scale(1.12)", boxShadow:"0 0 16px rgba(59,130,246,0.35)" }); }}
                onMouseLeave={e => { if (!act) Object.assign(e.currentTarget.style, { background:"rgba(15,23,42,0.82)", borderColor:"rgba(59,130,246,0.18)", color:"#94A3B8", transform:"none", boxShadow:"none" }); }}
              >
                <span style={{ fontSize:"1.05rem" }}>{link.icon}</span>
              </button>
            );
          })}
        </motion.div>
      )}

      {/* Top bar */}
      <motion.nav
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }}
        style={{
          position:"absolute", top:0, left:0, right:0, zIndex:700,
          background:    "transparent",
          backdropFilter:"none",
          borderBottom:  "none",
          transition:"all 0.3s",
        }}
      >
        <div style={{ position:"relative", maxWidth:1160, margin:"0 auto", padding:"0 1.5rem", height:62, display:"flex", alignItems:"center", justifyContent:"space-between" }}>

          {/* Logo */}
          <a href="#home" onClick={(e) => goto(e,"home")}
            style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.2rem", fontWeight:800, textDecoration:"none", background:"linear-gradient(135deg,#93C5FD,#3B82F6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            Sarthak
          </a>

          {/* Desktop: subtitle centered */}
          {!isMobile && (
            <div style={{ position:"absolute", left:"50%", transform:"translateX(-50%)", textAlign:"center", width:"auto" }}>
              <span style={{ fontSize:"0.78rem", color:"#94A3B8", letterSpacing:"1px" }}>
                Full Stack Developer
              </span>
            </div>
          )}

          {/* Mobile: hamburger */}
          <div style={{ display:"flex", alignItems:"center" }}>
            {isMobile && (
              <button
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
              style={{ background:"none", border:"none", cursor:"pointer", padding:4, display:"flex", flexDirection:"column", gap:5 }}
            >
              {[0,1,2].map((i) => (
                <span key={i} style={{
                  display:"block", width:22, height:2,
                  background:"#3B82F6", borderRadius:2, transition:"0.3s",
                  transform: menuOpen ? (i===0?"rotate(45deg) translate(5px,5px)":i===2?"rotate(-45deg) translate(5px,-5px)":"none") : "none",
                  opacity:   menuOpen && i===1 ? 0 : 1,
                }} />
              ))}
            </button>
            )}
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && isMobile && (
            <motion.div
              initial={{ opacity:0, y:-12 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-12 }}
              transition={{ duration:0.22 }}
              style={{ background:"rgba(2,6,23,0.97)", backdropFilter:"blur(24px)", borderBottom:"1px solid rgba(59,130,246,0.12)", padding:"1rem 1.5rem 1.5rem" }}
            >
              {navLinks.map((link) => (
                <button key={link.id} onClick={(e) => goto(e, link.id)}
                  style={{ display:"flex", alignItems:"center", gap:12, width:"100%", padding:"0.65rem 1rem", borderRadius:12, marginBottom:4, background: activeSection===link.id ? "rgba(59,130,246,0.12)":"transparent", color: activeSection===link.id ? "#93C5FD":"#94A3B8", border:"none", cursor:"pointer", fontSize:"0.95rem", fontWeight:500, textAlign:"left", transition:"all 0.2s" }}>
                  <span>{link.icon}</span><span>{link.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}