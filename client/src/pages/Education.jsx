import { motion } from "framer-motion";
import education from "../data/education";

export default function Education() {
  return (
    <section id="education" className="p-section">
      <div className="g-blob" style={{ top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:400, background:"radial-gradient(circle,rgba(59,130,246,0.07),transparent 70%)" }} />

      <div style={{ position:"relative", zIndex:2, maxWidth:900, margin:"0 auto" }}>

        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}>
            <span className="sec-tag">Education</span>
          </motion.div>
          <motion.h2
            initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:800, color:"#F1F5F9", marginTop:"0.5rem" }}
          >
            Academic <span className="sec-hl">Journey</span>
          </motion.h2>
        </div>

        <div style={{ position:"relative" }}>
          <div className="g-tl-line" />

          <div style={{ display:"flex", flexDirection:"column", gap:"3rem" }}>
            {education.map((edu, i) => (
              <motion.div key={i}
                initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true, margin:"-80px" }} transition={{ delay:i*0.2 }}
                style={{ display:"flex", alignItems:"flex-start", gap:"2rem" }}
              >
                {/* Timeline dot */}
                <div className="g-tl-dot" style={{
                  background: edu.current
                    ? "radial-gradient(circle, #60A5FA, #3B82F6)"
                    : "rgba(15,23,42,0.9)",
                  boxShadow: edu.current
                    ? "0 0 0 3px rgba(59,130,246,0.3), 0 0 20px rgba(59,130,246,0.5)"
                    : "0 0 0 3px rgba(59,130,246,0.12)",
                }}>
                  🎓
                </div>

                {/* Card */}
                <motion.div whileHover={{ x:6 }} className="g-card" style={{ flex:1, padding:"1.6rem" }}>
                  <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:"0.5rem", marginBottom:"0.5rem" }}>
                    <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.1rem", fontWeight:700, color:"#F1F5F9" }}>{edu.degree}</h3>
                    <span className="g-pill">{edu.period}</span>
                  </div>
                  <p style={{ color:"#60A5FA", fontSize:"0.95rem", marginBottom:"0.25rem" }}>{edu.school}</p>
                  <p style={{ color:"#64748B", fontSize:"0.82rem", marginBottom:"0.75rem" }}>{edu.location}</p>
                  <div style={{ display:"inline-flex", alignItems:"center", padding:"0.28rem 0.9rem", background:"rgba(59,130,246,0.08)", border:"1px solid rgba(59,130,246,0.18)", borderRadius:100 }}>
                    <span style={{ fontSize:"0.75rem", fontWeight:700, color:"#93C5FD" }}>{edu.score}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}