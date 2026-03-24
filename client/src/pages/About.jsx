import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="p-section">

      <div className="g-blob" style={{ top:"0%",    left:"20%",  width:300, height:300, background:"radial-gradient(circle,rgba(59,130,246,0.1),transparent 70%)"  }} />
      <div className="g-blob" style={{ bottom:"5%", right:"10%", width:340, height:340, background:"radial-gradient(circle,rgba(59,130,246,0.07),transparent 70%)" }} />

      <div style={{ position:"relative", zIndex:2, maxWidth:1160, margin:"0 auto" }}>

        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}>
            <span className="sec-tag">About Me</span>
          </motion.div>
          <motion.h2
            initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:800, color:"#F1F5F9", lineHeight:1.1, marginTop:"0.5rem" }}
          >
            Passionate about creating <span className="sec-hl">digital experiences</span>
          </motion.h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"3rem", alignItems:"center" }}>

          {/* Avatar */}
          <motion.div
            initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ display:"flex", justifyContent:"center" }}
          >
            <div style={{ position:"relative", width:300, height:300 }}>
              <div style={{ position:"absolute", inset:0, background:"radial-gradient(circle,rgba(59,130,246,0.22),transparent 70%)", borderRadius:24, filter:"blur(24px)" }} />
              <div className="g-card" style={{ position:"relative", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", animation:"gFloat 6s ease-in-out infinite", overflow:"hidden" }}>
                <img
                  src="/profile-photo.jpg"
                  alt="Sarthak Srivastava"
                  loading="lazy"
                  style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 18%" }}
                />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(2,6,23,0.08), rgba(2,6,23,0.28))", pointerEvents:"none" }} />

              </div>
            </div>
          </motion.div>

          {/* Text + stats */}
          <motion.div
            initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}
          >
            <div>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.5rem", fontWeight:700, color:"#F1F5F9", marginBottom:"1rem" }}>
                Hi, I'm <span className="sec-hl">Sarthak Srivastava</span>
              </h3>
              <p style={{ color:"#94A3B8", lineHeight:1.9, marginBottom:"1rem", fontSize:"0.96rem" }}>
                I'm a passionate Full Stack Developer and Computer Science student at Lovely Professional University (CGPA: 6.96) with a keen interest in building scalable web applications. I work across the MERN stack and have hands-on experience with React, Node.js, Flask, MongoDB, and MySQL.
              </p>
              <p style={{ color:"#94A3B8", lineHeight:1.9, fontSize:"0.96rem" }}>
                I've solved 250+ coding problems on HackerRank, LeetCode, and CodeChef, and hold 5-star ratings in Python, C++ and SQL on HackerRank. I believe in continuous learning and the power of technology to transform ideas into reality.
              </p>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1rem" }}>
              {[
                { val:"250+", lbl:"Problems Solved" },
                { val:"5★",   lbl:"HackerRank"       },
                { val:"3+",   lbl:"Projects"          },
              ].map((s) => (
                <motion.div key={s.lbl} whileHover={{ scale:1.05 }} className="g-card"
                  style={{ padding:"1rem", textAlign:"center" }}>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.4rem", fontWeight:800, color:"#60A5FA", textShadow:"0 0 10px rgba(59,130,246,0.55)" }}>
                    {s.val}
                  </div>
                  <div style={{ fontSize:"0.65rem", fontWeight:600, color:"#94A3B8", textTransform:"uppercase", letterSpacing:1, marginTop:4 }}>
                    {s.lbl}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}