import { motion } from "framer-motion";

const PROFILE_PILLS = [
  "Full Stack Developer",
  "MERN Stack",
  "UI-Focused Builder",
  "Open to Opportunities",
];

const ABOUT_CARDS = [
  {
    title: "Tech Stack",
    value: "MERN",
    note: "MongoDB, Express.js, React, Node.js",
  },
  {
    title: "Interests",
    value: "Product Building",
    note: "Scalable web apps, clean UI, performance-first delivery",
  },
  {
    title: "Learning Goals",
    value: "System Design",
    note: "Cloud foundations, testing strategies, and architecture patterns",
  },
];

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
          <motion.p
            initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ color:"#94A3B8", maxWidth:760, margin:"1rem auto 0", lineHeight:1.8, fontSize:"0.98rem" }}
          >
            I blend thoughtful design with practical engineering to build products that are fast, scalable, and genuinely useful.
          </motion.p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:"2.2rem", alignItems:"start" }}>
          <motion.div
            initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ display:"flex", flexDirection:"column", gap:"1rem" }}
          >
            <div style={{ position:"relative", width:"min(100%, 350px)", aspectRatio:"1 / 1", margin:"0 auto" }}>
              <div style={{ position:"absolute", inset:0, background:"radial-gradient(circle,rgba(59,130,246,0.22),transparent 70%)", borderRadius:24, filter:"blur(24px)" }} />
              <div className="g-card" style={{ position:"relative", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", animation:"gFloat 6s ease-in-out infinite", overflow:"hidden" }}>
                <img
                  src="/profile-photo.jpg"
                  alt="Sarthak Srivastava"
                  loading="lazy"
                  style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 18%" }}
                />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg, rgba(2,6,23,0.08), rgba(2,6,23,0.28))", pointerEvents:"none" }} />
                <div style={{ position:"absolute", left:14, bottom:14, right:14, padding:"0.65rem 0.8rem", borderRadius:12, background:"rgba(2,6,23,0.58)", border:"1px solid rgba(96,165,250,0.22)", backdropFilter:"blur(6px)" }}>
                  <div style={{ fontSize:"0.74rem", color:"#94A3B8", letterSpacing:0.5 }}>Focused on</div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, color:"#E2E8F0" }}>Scalable Full Stack Products</div>
                </div>
              </div>
            </div>

            <div className="g-card" style={{ padding:"1rem", display:"flex", flexWrap:"wrap", gap:"0.55rem", justifyContent:"center" }}>
              {PROFILE_PILLS.map((pill) => (
                <motion.span
                  key={pill}
                  whileHover={{ y:-2, scale:1.03 }}
                  transition={{ duration:0.2 }}
                  style={{ border:"1px solid rgba(96,165,250,0.28)", background:"rgba(8,47,73,0.24)", color:"#BFDBFE", fontSize:"0.72rem", padding:"0.4rem 0.62rem", borderRadius:999, letterSpacing:0.2, cursor:"default", boxShadow:"0 0 0 rgba(59,130,246,0)", willChange:"transform" }}
                >
                  {pill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ display:"flex", flexDirection:"column", gap:"0.9rem" }}
          >
            <div className="g-card" style={{ padding:"1.25rem" }}>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.5rem", fontWeight:700, color:"#F1F5F9", marginBottom:"1rem" }}>
                Hi, I'm <span className="sec-hl">Sarthak Srivastava</span>
              </h3>
              <p style={{ color:"#94A3B8", lineHeight:1.9, marginBottom:"1rem", fontSize:"0.96rem" }}>
                I'm a passionate Full Stack Developer and Computer Science student at Lovely Professional University, focused on building scalable web applications with the MERN stack.
              </p>
              <p style={{ color:"#94A3B8", lineHeight:1.9, fontSize:"0.96rem" }}>
                I enjoy turning ideas into polished, user-focused products through clean architecture, performance-minded development, and continuous learning.
              </p>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))", gap:"0.9rem", marginTop:"-0.65rem" }}>
              {ABOUT_CARDS.map((s) => (
                <motion.div
                  key={s.title}
                  whileHover={{ y:-5, scale:1.02 }}
                  className="g-card"
                  style={{ padding:"1rem", textAlign:"center", minHeight:146, display:"flex", flexDirection:"column", justifyContent:"center" }}
                >
                  <div style={{ fontSize:"0.65rem", fontWeight:600, color:"#94A3B8", textTransform:"uppercase", letterSpacing:1.2, marginBottom:8 }}>
                    {s.title}
                  </div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.15rem", fontWeight:800, color:"#60A5FA", textShadow:"0 0 10px rgba(59,130,246,0.45)", marginBottom:8 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize:"0.73rem", color:"#94A3B8", lineHeight:1.5 }}>
                    {s.note}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
              className="g-card"
              style={{ padding:"1rem 1.1rem", display:"flex", justifyContent:"space-between", alignItems:"center", gap:"1rem", flexWrap:"wrap" }}
            >
              <div>
                <div style={{ color:"#94A3B8", fontSize:"0.7rem", letterSpacing:1.1, textTransform:"uppercase" }}>Current Focus</div>
                <div style={{ color:"#E2E8F0", fontWeight:700, marginTop:4 }}>Building clean, production-ready full stack applications</div>
              </div>
              <span style={{ border:"1px solid rgba(96,165,250,0.28)", color:"#BFDBFE", background:"rgba(59,130,246,0.14)", borderRadius:999, padding:"0.42rem 0.8rem", fontSize:"0.74rem", whiteSpace:"nowrap" }}>
                Always Learning
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}