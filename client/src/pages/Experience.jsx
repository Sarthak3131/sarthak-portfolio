import { motion } from "framer-motion";
import experience from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="p-section" style={{ background:"transparent" }}>
      <div className="g-blob" style={{ top:"0%",   right:"25%", width:260, height:260, background:"radial-gradient(circle,rgba(59,130,246,0.06),transparent 70%)" }} />
      <div className="g-blob" style={{ bottom:"10%", left:"33%", width:280, height:280, background:"radial-gradient(circle,rgba(59,130,246,0.05),transparent 70%)" }} />

      <div style={{ position:"relative", zIndex:2, maxWidth:900, margin:"0 auto" }}>

        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <motion.div
            initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, margin:"-100px" }}
          >
            <span className="sec-tag">Training & Experience</span>
          </motion.div>
          <motion.h2
            initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, margin:"-100px" }}
            style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:800, color:"#F1F5F9", marginTop:"0.5rem" }}
          >
            Professional <span className="sec-hl">Development</span>
          </motion.h2>
        </div>

        <div style={{ position:"relative" }}>
          {/* Timeline line */}
          <div className="g-tl-line" />

          <div style={{ display:"flex", flexDirection:"column", gap:"3rem" }}>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true, margin:"-100px" }}
                transition={{ delay:index * 0.2 }}
                style={{ display:"flex", alignItems:"flex-start", gap:"2rem" }}
              >
                {/* Timeline dot */}
                <div className="g-tl-dot" style={{
                  background:"radial-gradient(circle, #60A5FA, #3B82F6)",
                  boxShadow:"0 0 0 3px rgba(59,130,246,0.3), 0 0 20px rgba(59,130,246,0.5)",
                }}>
                  {exp.icon}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x:6 }}
                  className="g-card"
                  style={{ flex:1, padding:"1.6rem" }}
                >
                  <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:"0.5rem", marginBottom:"0.5rem" }}>
                    <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.1rem", fontWeight:700, color:"#F1F5F9" }}>{exp.title}</h3>
                    <span className="g-pill">{exp.period}</span>
                  </div>

                  <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:"0.75rem", marginBottom:"1rem" }}>
                    <p style={{ color:"#60A5FA", fontSize:"0.95rem", fontWeight:500, margin:0 }}>{exp.organization}</p>
                    <span style={{ fontSize:"0.72rem", fontWeight:700, padding:"0.18rem 0.65rem", borderRadius:100, background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)", color:"#93C5FD" }}>{exp.grade}</span>
                    <a href={exp.certUrl} target="_blank" rel="noreferrer"
                      style={{ display:"inline-flex", alignItems:"center", gap:4, fontSize:"0.72rem", fontWeight:600, padding:"0.18rem 0.65rem", borderRadius:100, background:"rgba(59,130,246,0.08)", border:"1px solid rgba(59,130,246,0.2)", color:"#60A5FA", textDecoration:"none", transition:"all 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.background="rgba(59,130,246,0.18)"; e.currentTarget.style.color="#93C5FD"; }}
                      onMouseLeave={e => { e.currentTarget.style.background="rgba(59,130,246,0.08)"; e.currentTarget.style.color="#60A5FA"; }}
                    >
                      <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      View Certificate
                    </a>
                  </div>

                  <ul style={{ display:"flex", flexDirection:"column", gap:"0.5rem" }}>
                    {exp.description.map((item, i) => (
                      <li key={i} style={{ display:"flex", alignItems:"flex-start", gap:"0.75rem", color:"#94A3B8", fontSize:"0.88rem", lineHeight:1.65 }}>
                        <span style={{ color:"#3B82F6", marginTop:"0.2rem", flexShrink:0 }}>▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}