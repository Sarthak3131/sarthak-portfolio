import { motion } from "framer-motion";

const LOGOS = {
  "React.js":       '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.5" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.2" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.2" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.2" fill="none" transform="rotate(120 12 12)"/></svg>',
  "JavaScript":     '<svg viewBox="0 0 24 24" fill="#F7DF1E"><rect width="24" height="24" rx="3" fill="#F7DF1E"/><path d="M7 17.5c.4.7 1 1.2 2 1.2 1.1 0 1.7-.5 1.7-1.3 0-.9-.7-1.2-1.8-1.7l-.6-.3C6.8 14.9 6 14 6 12.4c0-1.5 1.1-2.6 2.9-2.6 1.2 0 2.1.4 2.8 1.5l-1.5 1c-.3-.6-.7-.8-1.3-.8-.6 0-1 .4-1 .8 0 .6.4.8 1.3 1.2l.6.3C11.4 14.4 12.2 15.3 12.2 17c0 1.8-1.4 2.8-3.3 2.8-1.8 0-3-.9-3.6-2.2l1.7-1zm7.2.2c.4.8 1 1.3 2 1.3.8 0 1.4-.4 1.4-1 0-.7-.5-.9-1.4-1.3l-.5-.2c-1.5-.6-2.4-1.5-2.4-3.1 0-1.5 1.1-2.6 2.9-2.6 1.3 0 2.2.4 2.8 1.6l-1.5.9c-.3-.6-.7-.9-1.3-.9-.6 0-1 .3-1 .9 0 .5.4.8 1.2 1.1l.5.2c1.7.7 2.6 1.6 2.6 3.3 0 1.8-1.4 2.8-3.3 2.8-1.9 0-3.1-1-3.7-2.3l1.7-1z" fill="#000"/></svg>',
  "HTML5 / CSS3":   '<svg viewBox="0 0 24 24" fill="none"><path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#E44D26"/><path d="M12 4.5v15.5l5.3-1.5L18.5 4.5H12z" fill="#F16529"/><path d="M8.5 8h7l-.2 2.5H9.5l.2 2h5.4l-.4 4-2.7.8-2.7-.8-.2-2H11l.1 1 .9.3.9-.3.1-1.5H8.3L7.8 8.5l.7-.5z" fill="#fff"/></svg>',
  "Tailwind CSS":   '<svg viewBox="0 0 24 24" fill="none"><path d="M12 6C9.6 6 8.1 7.2 7.5 9.6c.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.716 1.219C13.313 10.48 14.306 11.5 16.5 11.5c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.716-1.219C15.187 7.02 14.194 6 12 6zm-4.5 6c-2.4 0-3.9 1.2-4.5 3.6.9-1.2 1.95-1.65 3.15-1.35.685.171 1.174.668 1.716 1.219C8.813 16.48 9.806 17.5 12 17.5c2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.685-.171-1.174-.668-1.716-1.219C10.687 13.02 9.694 12 7.5 12z" fill="#38BDF8"/></svg>',
  "Node.js":        '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#339933"/><path d="M12 4.5l6.5 3.75v7.5L12 19.5l-6.5-3.75v-7.5L12 4.5z" fill="#76BC2D"/><path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#fff"/></svg>',
  "Express.js":     '<svg viewBox="0 0 24 24" fill="none"><text x="2" y="17" font-size="9" font-weight="700" font-family="monospace" fill="#94A3B8">Express</text></svg>',
  "Flask":          '<svg viewBox="0 0 24 24" fill="none"><path d="M10 3h4v8l4 8H6l4-8V3z" stroke="#94A3B8" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 3h8" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round"/><circle cx="9" cy="17" r="1" fill="#60A5FA"/><circle cx="13" cy="15" r="0.8" fill="#60A5FA"/></svg>',
  "PHP":            '<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB3" opacity="0.2" stroke="#777BB3" stroke-width="1"/><text x="6.5" y="15.5" font-size="7" font-weight="700" font-family="monospace" fill="#777BB3">php</text></svg>',
  "REST APIs":      '<svg viewBox="0 0 24 24" fill="none" stroke="#60A5FA" stroke-width="1.5" stroke-linecap="round"><path d="M8 9l-5 3 5 3M16 9l5 3-5 3M13 6l-2 12"/></svg>',
  "MySQL":          '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3C7 3 3 4.5 3 6.5v11C3 19.5 7 21 12 21s9-1.5 9-3.5v-11C21 4.5 17 3 12 3z" fill="#4479A1" opacity="0.15" stroke="#4479A1" stroke-width="1"/><ellipse cx="12" cy="6.5" rx="9" ry="3" fill="#4479A1" opacity="0.3"/><path d="M3 6.5v4c0 2 4 3.5 9 3.5s9-1.5 9-3.5v-4" stroke="#4479A1" stroke-width="1"/><path d="M3 10.5v4c0 2 4 3.5 9 3.5s9-1.5 9-3.5v-4" stroke="#4479A1" stroke-width="1"/></svg>',
  "MongoDB":        '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2c-1 4-4 6-4 10a4 4 0 008 0c0-4-3-6-4-10z" fill="#47A248" opacity="0.8"/><path d="M12 2v20" stroke="#47A248" stroke-width="1.5" stroke-linecap="round"/></svg>',
  "SQLAlchemy":     '<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="7" rx="8" ry="3" stroke="#94A3B8" stroke-width="1.2"/><path d="M4 7v5c0 1.66 3.58 3 8 3s8-1.34 8-3V7" stroke="#94A3B8" stroke-width="1.2"/><path d="M4 12v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#94A3B8" stroke-width="1.2"/><path d="M16 15l2 2-2 2M8 15l-2 2 2 2" stroke="#60A5FA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "PostgreSQL":     '<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="7" rx="8" ry="3.5" fill="#336791" opacity="0.2" stroke="#336791" stroke-width="1.2"/><path d="M4 7v10c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5V7" stroke="#336791" stroke-width="1.2"/><path d="M4 12c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5" stroke="#336791" stroke-width="1.2"/><circle cx="16" cy="6" r="2" fill="#336791" opacity="0.5"/></svg>',
  "Redis":          '<svg viewBox="0 0 24 24" fill="none"><path d="M3 14l9-4 9 4-9 4-9-4z" fill="#DC382D" opacity="0.8"/><path d="M3 10l9-4 9 4-9 4-9-4z" fill="#DC382D" opacity="0.5"/><path d="M3 6l9-4 9 4-9 4-9-4z" fill="#DC382D" opacity="0.3"/></svg>',
  "Git / GitHub":   '<svg viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2" stroke="#F05032" stroke-width="1.5"/><circle cx="6" cy="18" r="2" stroke="#F05032" stroke-width="1.5"/><circle cx="18" cy="6" r="2" stroke="#F05032" stroke-width="1.5"/><path d="M8 6h6a2 2 0 012 2v2M6 8v8" stroke="#F05032" stroke-width="1.5" stroke-linecap="round"/></svg>',
  "GitHub Actions": '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#2088FF" stroke-width="1.2"/><path d="M12 8v4l3 3" stroke="#2088FF" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="12" r="2" fill="#2088FF" opacity="0.3"/></svg>',
  "VS Code":        '<svg viewBox="0 0 24 24" fill="none"><path d="M17 3L8 12l-5-4-1 1 6 9 11-14-2-1z" fill="#007ACC" opacity="0.9"/></svg>',
  "C / C++":        '<svg viewBox="0 0 24 24" fill="none"><text x="1" y="16" font-size="8.5" font-weight="800" font-family="monospace" fill="#659AD2">C++</text></svg>',
  "Python":         '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8 2 6 4 6 7v2h6v1H5C3 10 2 11.5 2 14c0 2.5 1.5 4 3 4h2v-2.5C7 13 8.5 12 11 12h4c2 0 3-1 3-3V7c0-3-2-5-6-5zm-1 3a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB" opacity="0.8"/><path d="M12 22c4 0 6-2 6-5v-2h-6v-1h7c2 0 3-1.5 3-4 0-2.5-1.5-4-3-4h-2v2.5C17 11 15.5 12 13 12H9c-2 0-3 1-3 3v3c0 3 2 5 6 5zm1-3a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B" opacity="0.9"/></svg>',
  "SQL":            '<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="6" rx="8" ry="3" stroke="#60A5FA" stroke-width="1.3"/><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#60A5FA" stroke-width="1.3"/><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#60A5FA" stroke-width="1.3"/></svg>',
  "DSA":            '<svg viewBox="0 0 24 24" fill="none" stroke="#93C5FD" stroke-width="1.4" stroke-linecap="round"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4M12 11l-5 6M12 11l5 6"/></svg>',
  "OOP":            '<svg viewBox="0 0 24 24" fill="none" stroke="#93C5FD" stroke-width="1.4" stroke-linecap="round"><rect x="3" y="8" width="8" height="10" rx="2"/><rect x="13" y="6" width="8" height="6" rx="2"/><path d="M7 8V5M17 12v4"/></svg>',
  "DBMS":           '<svg viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="5" rx="8" ry="3" stroke="#93C5FD" stroke-width="1.3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="#93C5FD" stroke-width="1.3"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#93C5FD" stroke-width="1.3"/></svg>',
  "Logic Building": '<svg viewBox="0 0 24 24" fill="none" stroke="#93C5FD" stroke-width="1.4" stroke-linecap="round"><path d="M9 3H5L3 9l9 12 9-12-2-6h-4"/><path d="M3 9h18"/><path d="M12 3l3 6-3 8-3-8 3-6z"/></svg>',
};

const CATS = [
  {
    name: "Frontend",
    hint: "Hover to view",
    svgPath: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    skills: [
      { n: "React.js",        p: 88 },
      { n: "JavaScript",      p: 86 },
      { n: "HTML5 / CSS3",    p: 90 },
      { n: "Tailwind CSS",    p: 85 },
    ],
  },
  {
    name: "Backend & APIs",
    hint: "Hover to view",
    svgPath: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
    skills: [
      { n: "Node.js",    p: 83 },
      { n: "Express.js", p: 85 },
      { n: "Flask",      p: 75 },
      { n: "PHP",        p: 72 },
      { n: "REST APIs",  p: 88 },
    ],
  },
  {
    name: "Database",
    hint: "Hover to view",
    svgPath: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    skills: [
      { n: "MySQL",        p: 82 },
      { n: "MongoDB",      p: 80 },
      { n: "PostgreSQL",   p: 68 },
      { n: "SQLAlchemy",   p: 70 },
      { n: "Redis",        p: 60 },
    ],
  },
  {
    name: "Tools & Platforms",
    hint: "Hover to view",
    svgPath: '<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>',
    skills: [
      { n: "Git / GitHub",    p: 90 },
      { n: "GitHub Actions",  p: 72 },
      { n: "VS Code",         p: 95 },
    ],
  },
  {
    name: "Languages",
    hint: "Hover to view",
    svgPath: '<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><line x1="14" y1="4" x2="10" y2="20"/>',
    skills: [
      { n: "C / C++",      p: 85 },
      { n: "Python",       p: 80 },
      { n: "JavaScript",   p: 86 },
      { n: "SQL",          p: 82 },
    ],
  },
  {
    name: "CS Fundamentals",
    hint: "Hover to view",
    svgPath: '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>',
    skills: [
      { n: "DSA",           p: 80 },
      { n: "OOP",           p: 85 },
      { n: "DBMS",          p: 75 },
      { n: "Logic Building", p: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="p-section">
      <style>{`
        .skc-card { position:relative; border-radius:20px; overflow:hidden; cursor:default; min-height:260px; background:rgba(15,23,42,0.65); border:1px solid rgba(59,130,246,0.2); backdrop-filter:blur(12px); transition:border-color 0.25s, box-shadow 0.25s, transform 0.25s; }
        .skc-card:hover { border-color:rgba(59,130,246,0.5); box-shadow:0 16px 40px rgba(0,0,0,0.35), 0 0 24px rgba(59,130,246,0.12); transform:translateY(-5px); }
        .skc-front { position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:2rem 1.5rem; text-align:center; background:rgba(15,23,42,0.55); backdrop-filter:blur(10px); transition:opacity 0.35s ease, transform 0.35s ease; z-index:1; }
        .skc-card:hover .skc-front { opacity:0; transform:translateY(-8px); pointer-events:none; }
        .skc-ico { margin-bottom:1rem; display:flex; align-items:center; justify-content:center; width:60px; height:60px; border-radius:16px; background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.2); }
        .skc-ico svg { width:28px; height:28px; fill:none; stroke:#60A5FA; stroke-width:1.6; stroke-linecap:round; stroke-linejoin:round; }
        .skc-name { font-family:'Syne',sans-serif; font-size:1.05rem; font-weight:700; color:#F1F5F9; margin-bottom:0.35rem; }
        .skc-hint { font-size:0.75rem; color:#94A3B8; }
        .skc-back { position:absolute; inset:0; display:flex; flex-direction:column; justify-content:center; padding:1.25rem 1.5rem; background:rgba(15,23,42,0.95); backdrop-filter:blur(16px); opacity:0; transform:translateY(8px); transition:opacity 0.35s ease, transform 0.35s ease; z-index:2; }
        .skc-card:hover .skc-back { opacity:1; transform:translateY(0); }
        .skc-back-title { font-family:'Syne',sans-serif; font-size:0.7rem; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; color:#60A5FA; margin-bottom:0.85rem; display:flex; align-items:center; gap:6px; }
        .skc-back-title::after { content:''; flex:1; height:1px; background:linear-gradient(90deg,rgba(59,130,246,0.4),transparent); }
        .skc-skill-row { display:flex; align-items:center; gap:8px; padding:0.32rem 0; border-bottom:1px solid rgba(59,130,246,0.07); }
        .skc-skill-row:last-child { border-bottom:none; }
        .skc-skill-logo { width:18px; height:18px; flex-shrink:0; display:flex; align-items:center; justify-content:center; }
        .skc-skill-logo svg { width:16px; height:16px; }
        .skc-skill-name { font-size:0.8rem; font-weight:600; color:#F1F5F9; flex:1; }
        .skc-skill-bar { width:60px; height:3.5px; background:rgba(255,255,255,0.07); border-radius:100px; overflow:hidden; flex-shrink:0; }
        .skc-skill-fill { height:100%; border-radius:100px; background:linear-gradient(90deg,#3B82F6,#93C5FD); }
      `}</style>

      <div className="g-blob" style={{ top:"5%",   left:"33%",  width:320, height:320, background:"radial-gradient(circle,rgba(59,130,246,0.08),transparent 70%)" }} />
      <div className="g-blob" style={{ bottom:"0", right:"20%", width:380, height:380, background:"radial-gradient(circle,rgba(59,130,246,0.06),transparent 70%)" }} />

      <div style={{ position:"relative", zIndex:2, maxWidth:1160, margin:"0 auto" }}>

        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}>
            <span className="sec-tag">Skills & Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:800, color:"#F1F5F9", marginTop:"0.5rem" }}
          >
            Technologies I <span className="sec-hl">work with</span>
          </motion.h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }}>
          {CATS.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="skc-card"
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:"-60px" }} transition={{ delay:i*0.1 }}
            >
              {/* Front face */}
              <div className="skc-front">
                <div className="skc-ico">
                  <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: cat.svgPath }} />
                </div>
                <div className="skc-name">{cat.name}</div>
                <div className="skc-hint">{cat.hint}</div>
              </div>

              {/* Back face */}
              <div className="skc-back">
                <div className="skc-back-title">{cat.name}</div>
                {cat.skills.map((s) => (
                  <div key={s.n} className="skc-skill-row">
                    <div className="skc-skill-logo" dangerouslySetInnerHTML={{ __html: LOGOS[s.n] || '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="#60A5FA" opacity="0.5"/></svg>' }} />
                    <span className="skc-skill-name">{s.n}</span>
                    <div className="skc-skill-bar">
                      <div className="skc-skill-fill" style={{ width:`${s.p}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}