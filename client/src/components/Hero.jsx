import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const T = {
  bg:        "transparent",
  bg2:       "#0B1220",
  red:       "#3B82F6",
  red2:      "#60A5FA",
  r300:      "#93C5FD",
  r400:      "#60A5FA",
  textMain:  "#F1F5F9",
  textMid:   "#94A3B8",
  textDim:   "#64748B",
  glass:     "rgba(15,23,42,0.65)",
  borderRed: "rgba(59,130,246,0.25)",
};

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Problem Solver",
  "Backend Architect",
];

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const targetTop = target.getBoundingClientRect().top + window.scrollY;
  const paddingTop = parseFloat(window.getComputedStyle(target).paddingTop) || 0;
  const sectionContentTop = target.classList.contains("p-section")
    ? targetTop + paddingTop
    : targetTop;
  const viewportOffset = window.innerWidth < 768 ? 14 : 18;
  const top = sectionContentTop - viewportOffset;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function useTyping() {
  const [display, setDisplay] = useState("");
  const state = useRef({ ri: 0, ci: 0, deleting: false });

  useEffect(() => {
    let t;
    function tick() {
      const { ri, ci, deleting } = state.current;
      const word = ROLES[ri];
      if (!deleting) {
        setDisplay(word.slice(0, ci + 1));
        state.current.ci++;
        if (state.current.ci === word.length) {
          state.current.deleting = true;
          t = setTimeout(tick, 1800);
          return;
        }
      } else {
        setDisplay(word.slice(0, ci - 1));
        state.current.ci--;
        if (state.current.ci === 0) {
          state.current.deleting = false;
          state.current.ri = (ri + 1) % ROLES.length;
        }
      }
      t = setTimeout(tick, state.current.deleting ? 55 : 90);
    }
    t = setTimeout(tick, 300);
    return () => clearTimeout(t);
  }, []);

  return display;
}

function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    let frameId = null;
    let x = 0;
    let y = 0;

    const fn = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (frameId) return;

      frameId = requestAnimationFrame(() => {
        el.style.left = x + "px";
        el.style.top  = y + "px";
        frameId = null;
      });
    };
    window.addEventListener("mousemove", fn, { passive: true });
    return () => {
      window.removeEventListener("mousemove", fn);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);
  return (
    <div
      ref={ref}
      style={{
        position:      "fixed",
        width:         420,
        height:        420,
        borderRadius:  "50%",
        pointerEvents: "none",
        background:    "radial-gradient(circle, rgba(59,130,246,0.07), transparent 70%)",
        transform:     "translate(-50%,-50%)",
        transition:    "left 0.1s ease, top 0.1s ease",
        willChange:    "transform,left,top",
        zIndex:        9999,
      }}
    />
  );
}


const CODE_LINES = [
  { ln:"1",  parts:[{t:"kw",v:"const "},{t:"fn",v:"developer"},{t:"pl",v:" = {"}] },
  { ln:"2",  parts:[{t:"pl",v:"  name: "},{t:"str",v:'"Sarthak Srivastava"'},{t:"pl",v:","}] },
  { ln:"3",  parts:[{t:"pl",v:"  role: "},{t:"str",v:'"Full Stack Dev"'},{t:"pl",v:","}] },
  { ln:"4",  parts:[{t:"pl",v:"  stack: ["},{t:"str",v:'"React"'},{t:"pl",v:", "},{t:"str",v:'"Node"'},{t:"pl",v:", "},{t:"str",v:'"MongoDB"'},{t:"pl",v:"],"}] },
  { ln:"5",  parts:[{t:"pl",v:"  focus: "},{t:"str",v:'"Scalable Web Apps"'},{t:"pl",v:","}] },
  { ln:"6",  parts:[{t:"pl",v:"  problems: "},{t:"val",v:"250"},{t:"str",v:"+"},{t:"pl",v:","}] },
  { ln:"7",  parts:[{t:"pl",v:"  available: "},{t:"kw",v:"true"},{t:"pl",v:" "},{t:"cm",v:"// hire me!"}] },
  { ln:"8",  parts:[{t:"pl",v:"};"}] },
];

const CLR = {
  kw:  "#ff7b72",
  fn:  "#d2a8ff",
  str: "#a5d6ff",
  val: "#ffa657",
  cm:  T.textDim,
  pl:  T.textMain,
};

function SocIcon({ href, children, hoverStyle, delay, newTab = true }) {
  delay = delay || 0;
  const [hov, setHov] = useState(false);
  const base = {
    width:42, height:42, borderRadius:12,
    background: T.glass,
    backdropFilter:"blur(14px)",
    border:"1px solid rgba(255,255,255,0.07)",
    display:"flex", alignItems:"center", justifyContent:"center",
    textDecoration:"none", color: T.textMid, flexShrink:0,
    transition:"all 0.22s",
  };
  return (
    <motion.a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay }}
      style={hov ? Object.assign({}, base, hoverStyle) : base}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </motion.a>
  );
}

function HeroBtn({ href, children, primary, download }) {
  const [hov, setHov] = useState(false);
  const base = {
    fontFamily: "'DM Sans',sans-serif",
    fontSize: "0.88rem",
    fontWeight: 700,
    borderRadius: 100,
    padding: "0.8rem 2rem",
    textDecoration: "none",
    display: "inline-block",
    transition: "all 0.22s",
    cursor: "pointer",
  };
  const p = {
    background: "linear-gradient(135deg, #3B82F6, #1d4ed8)",
    color: "#fff",
    border: "none",
    boxShadow: hov ? "0 10px 36px rgba(59,130,246,0.65)" : "0 4px 20px rgba(59,130,246,0.4)",
    transform: hov ? "translateY(-3px) scale(1.03)" : "none",
  };
  const g = {
    background: hov ? "rgba(59,130,246,0.1)" : "transparent",
    color: T.r300,
    border: hov ? "1.5px solid #3B82F6" : "1.5px solid rgba(59,130,246,0.4)",
    boxShadow: hov ? "0 0 24px rgba(59,130,246,0.45)" : "none",
    transform: hov ? "translateY(-3px)" : "none",
  };
  return (
    <a
      href={href}
      download={download}
      onClick={(e) => {
        if (download) return;
        if (!href || !href.startsWith("#")) return;
        e.preventDefault();
        scrollToSection(href.slice(1));
      }}
      style={Object.assign({}, base, primary ? p : g)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </a>
  );
}

export default function Hero() {
  const typed = useTyping();

  return (
    <>
      <CursorGlow />

      <style>{`
        @keyframes heroShimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes heroBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes heroGlow {
          0%, 100% { box-shadow: 0 0 6px 2px rgba(59,130,246,0.5); }
          50%       { box-shadow: 0 0 14px 4px rgba(59,130,246,0.9); }
        }
        @keyframes heroBorderGlow {
          0%, 100% { border-color: rgba(59,130,246,0.25); }
          50%       { border-color: rgba(59,130,246,0.70); }
        }
        @keyframes openToWorkPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
          50%       { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
        }
        @media (max-width: 900px) {
          .h-grid { grid-template-columns: 1fr !important; text-align: center; }
          .h-btns { justify-content: center !important; }
          .h-soc  { justify-content: center !important; }
          .h-card { max-width: 340px; margin: 0 auto; }
        }
      `}</style>

      <section
        id="home"
        style={{
          position:   "relative",
          minHeight:  "100vh",
          display:    "flex",
          alignItems: "center",
          overflow:   "visible",
          background: "transparent",
          padding:    "6rem 2rem 7rem",
        }}
      >

        <div style={{ position:"absolute", top:"20%", left:"10%", width:380, height:380, borderRadius:"50%", background:"radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)", filter:"blur(80px)", pointerEvents:"none", zIndex:1 }} />
        <div style={{ position:"absolute", bottom:"15%", right:"8%", width:420, height:420, borderRadius:"50%", background:"radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)", filter:"blur(100px)", pointerEvents:"none", zIndex:1 }} />
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:300, borderRadius:"50%", background:"radial-gradient(circle, rgba(59,130,246,0.04), transparent 70%)", filter:"blur(60px)", pointerEvents:"none", zIndex:1 }} />

        {/* Floating "Open to Work" badge */}
        <motion.button
          initial={{ opacity:0, y:-20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.7, delay:1.2 }}
          onClick={() => scrollToSection("contact")}
          aria-label="Open contact section"
          style={{ position:"absolute", top:"5.6rem", right:"6rem", zIndex:120, display:"flex", alignItems:"center", gap:8, fontSize:"0.72rem", fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"#93C5FD", background:"linear-gradient(135deg, rgba(15,23,42,0.92), rgba(15,23,42,0.76))", border:"1px solid rgba(59,130,246,0.45)", borderRadius:100, padding:"0.42rem 1.05rem", backdropFilter:"blur(12px)", animation:"openToWorkPulse 2.5s ease-in-out infinite", boxShadow:"0 0 0 1px rgba(59,130,246,0.15), 0 0 18px rgba(59,130,246,0.28)", cursor:"pointer", willChange:"transform", transform:"translateZ(0)" }}
        >
          <span style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", display:"inline-block", animation:"heroGlow 2s ease-in-out infinite" }} />
          Open to Work
        </motion.button>

        <div style={{ position:"relative", zIndex:2, width:"100%", maxWidth:1160, margin:"0 auto" }}>
          <div className="h-grid" style={{ display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:"4rem", alignItems:"center" }}>

            <motion.div
              initial={{ opacity:0, x:-50 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:0.9, delay:0.2, ease:[0.16,1,0.3,1] }}
              style={{ display:"flex", flexDirection:"column", gap:"1.3rem" }}
            >

              

              <div style={{ display:"inline-flex", alignItems:"center", gap:8, fontSize:"1rem", fontWeight:500, color:T.textMid }}>
                <motion.span
                  animate={{ rotate:[0, 20, -10, 20, 0] }}
                  transition={{ duration:1.5, delay:1, repeat:Infinity, repeatDelay:3 }}
                  style={{ display:"inline-block" }}
                >
                  👋
                </motion.span>
                Hello, I'm
              </div>

              <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(3rem,7vw,5.5rem)", fontWeight:800, lineHeight:1.0, margin:0 }}>
                <span style={{ color:T.textMain }}>Sarthak </span>
                <br />
                <span style={{ background:"linear-gradient(135deg, #93C5FD, #3B82F6, #60A5FA, #93C5FD)", backgroundSize:"200% auto", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", animation:"heroShimmer 4s linear infinite" }}>
                  Srivastava
                </span>
              </h1>

              <div style={{ fontSize:"clamp(1rem,2.5vw,1.2rem)", color:T.textMid, minHeight:"2rem" }}>
                I'm a&nbsp;
                <span style={{ color:T.r300, fontWeight:600 }}>{typed}</span>
                <span style={{ color:T.red, animation:"heroBlink 1s step-end infinite" }}>|</span>
              </div>

              <p style={{ fontSize:"1rem", color:T.textMid, lineHeight:1.85, maxWidth:480, margin:0 }}>
                A passionate Computer Science undergraduate crafting
                high-performance full-stack web applications. From architecting
                RESTful APIs to building pixel-perfect UIs — I turn complex
                ideas into elegant digital solutions.
              </p>

              <div className="h-btns" style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
                <HeroBtn href="#projects" primary={true}>View Projects →</HeroBtn>
                <motion.a
                  href="/CV/Sarthak_Srivastava_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity:0, y:10 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ duration:0.6, delay:0.7 }}
                  whileHover={{ scale:1.04, boxShadow:"0 0 28px rgba(59,130,246,0.5)" }}
                  whileTap={{ scale:0.97 }}
                  style={{
                    fontFamily:"'DM Sans',sans-serif",
                    fontSize:"0.88rem",
                    fontWeight:700,
                    borderRadius:100,
                    padding:"0.8rem 2rem",
                    textDecoration:"none",
                    display:"inline-block",
                    cursor:"pointer",
                    background:"transparent",
                    color:T.r300,
                    border:"1.5px solid rgba(59,130,246,0.4)",
                    transition:"border-color 0.22s, color 0.22s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor="#3B82F6"; e.currentTarget.style.background="rgba(59,130,246,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(59,130,246,0.4)"; e.currentTarget.style.background="transparent"; }}
                >
                  View Resume ↗
                </motion.a>
                <HeroBtn href="/CV/Sarthak_Srivastava_Resume.pdf" download>Download Resume</HeroBtn>
              </div>

              <div className="h-soc" style={{ display:"flex", gap:"0.75rem", alignItems:"center" }}>
                <SocIcon href="https://github.com/Sarthak3131" delay={0} hoverStyle={{ background:"rgba(36,41,47,0.9)", borderColor:"#fff", boxShadow:"0 0 20px rgba(255,255,255,0.15)", color:"#fff" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </SocIcon>

                <SocIcon href="https://leetcode.com/u/sarthaksrivastava189/" delay={0.2} hoverStyle={{ background:"rgba(255,161,22,0.18)", borderColor:"#FFA116", boxShadow:"0 0 20px rgba(255,161,22,0.35)", color:"#FFA116" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.519c-.569-.569-1.227-.956-1.932-1.141V3.25c0-.742-.601-1.343-1.343-1.343s-1.343.601-1.343 1.343V4.51c-.756.2-1.464.608-2.053 1.198L5.587 10.06C4.565 11.082 4 12.457 4 13.913s.565 2.83 1.587 3.853l4.332 4.361C11.001 23.109 12.376 23.75 13.832 23.75s2.831-.641 3.913-1.623l2.609-2.519c.514-.514.496-1.365-.039-1.9-.534-.535-1.385-.553-1.899-.038l-.314.32z"/>
                  </svg>
                </SocIcon>

                <SocIcon href="https://www.linkedin.com/in/sarthak300/" delay={0.4} hoverStyle={{ background:"rgba(10,102,194,0.25)", borderColor:"#0a66c2", boxShadow:"0 0 20px rgba(10,102,194,0.3)", color:"#fff" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </SocIcon>

                <a href="mailto:sarthaksrivastava189@gmail.com?subject=Portfolio%20Contact&body=Hello%20Sarthak%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                  target="_blank" rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:sarthaksrivastava189@gmail.com?subject=Portfolio%20Contact&body=Hello%20Sarthak%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.";
                  }}
                  style={{ width:42, height:42, borderRadius:12, background:"rgba(15,23,42,0.65)", backdropFilter:"blur(14px)", border:"1px solid rgba(255,255,255,0.07)", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", color:"#94A3B8", flexShrink:0, transition:"all 0.22s" }}
                  onMouseEnter={e => Object.assign(e.currentTarget.style, { background:"rgba(59,130,246,0.22)", borderColor:"#3B82F6", boxShadow:"0 0 20px rgba(59,130,246,0.4)", color:"#93C5FD" })}
                  onMouseLeave={e => Object.assign(e.currentTarget.style, { background:"rgba(15,23,42,0.65)", borderColor:"rgba(255,255,255,0.07)", boxShadow:"none", color:"#94A3B8" })}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </a>
              </div>

            </motion.div>

            <motion.div
              className="h-card"
              initial={{ opacity:0, x:50 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:0.9, delay:0.45, ease:[0.16,1,0.3,1] }}
            >
              <div style={{ borderRadius:28, padding:2, background:"linear-gradient(135deg, rgba(59,130,246,0.5), rgba(59,130,246,0.05), rgba(59,130,246,0.4))", animation:"heroBorderGlow 3s ease-in-out infinite" }}>
                <motion.div
                  animate={{ y:[0,-14,0] }}
                  transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}
                  style={{ position:"relative", borderRadius:26, overflow:"hidden", background:"rgba(15,23,42,0.92)", backdropFilter:"blur(24px)", padding:"1.6rem", boxShadow:"0 28px 64px rgba(0,0,0,0.7), 0 0 80px rgba(59,130,246,0.12)" }}
                >
                  <div style={{ position:"absolute", top:-70, right:-70, width:220, height:220, borderRadius:"50%", background:"radial-gradient(circle,rgba(59,130,246,0.2),transparent 70%)", pointerEvents:"none" }} />

                  <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:"1.25rem" }}>
                    <div style={{ width:11, height:11, borderRadius:"50%", background:"#ff5f57", boxShadow:"0 0 6px rgba(255,95,87,0.6)" }} />
                    <div style={{ width:11, height:11, borderRadius:"50%", background:"#febc2e", boxShadow:"0 0 6px rgba(254,188,46,0.6)" }} />
                    <div style={{ width:11, height:11, borderRadius:"50%", background:"#28c840", boxShadow:"0 0 6px rgba(40,200,64,0.6)" }} />
                    <span style={{ marginLeft:"auto", fontFamily:"monospace", fontSize:"0.68rem", color:T.textMid }}>sarthak.js</span>
                  </div>

                  <div style={{ fontFamily:"'Courier New',monospace", fontSize:"0.8rem", lineHeight:2 }}>
                    {CODE_LINES.map((line) => (
                      <div key={line.ln} style={{ padding:"1px 0" }}>
                        <span style={{ color:T.textDim, marginRight:"1.2rem", userSelect:"none", display:"inline-block", minWidth:18 }}>{line.ln}</span>
                        {line.parts.map((p, i) => (
                          <span key={i} style={{ color:CLR[p.t], fontStyle:p.t === "cm" ? "italic" : "normal" }}>{p.v}</span>
                        ))}
                      </div>
                    ))}
                  </div>

                  <div style={{ display:"flex", gap:"1.5rem", marginTop:"1.25rem", paddingTop:"1.25rem", borderTop:"1px solid rgba(59,130,246,0.12)" }}>
                    {[
                      { num:"3+",   lbl:"Projects"  },
                      { num:"250+", lbl:"Problems"   },
                      { num:"5★",   lbl:"HackerRank" },
                    ].map((s) => (
                      <div key={s.lbl} style={{ textAlign:"center", flex:1 }}>
                        <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.3rem", fontWeight:800, color:T.red2, textShadow:"0 0 12px rgba(59,130,246,0.6)" }}>{s.num}</div>
                        <div style={{ fontSize:"0.62rem", fontWeight:600, color:T.textMid, textTransform:"uppercase", letterSpacing:1 }}>{s.lbl}</div>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>


        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ delay:1.5, duration:0.8 }}
          onClick={() => scrollToSection("about")}
          style={{ position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6, cursor:"pointer", zIndex:5 }}
        >
          <span style={{ fontSize:"0.68rem", fontWeight:600, letterSpacing:"3px", textTransform:"uppercase", color:"#64748B" }}>Scroll</span>
          <div style={{ width:24, height:38, borderRadius:12, border:"1.5px solid rgba(59,130,246,0.35)", display:"flex", alignItems:"flex-start", justifyContent:"center", padding:"5px 0" }}>
            <motion.div
              animate={{ y:[0, 10, 0] }}
              transition={{ duration:1.4, repeat:Infinity, ease:"easeInOut" }}
              style={{ width:4, height:4, borderRadius:"50%", background:"#3B82F6" }}
            />
          </div>
          <motion.div
            animate={{ y:[0, 5, 0], opacity:[0.5, 1, 0.5] }}
            transition={{ duration:1.4, repeat:Infinity, ease:"easeInOut" }}
          >
            <svg width="16" height="16" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </motion.div>
        </motion.div>

      </section>
    </>
  );
}