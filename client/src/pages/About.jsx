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

                <style>{`
                  @keyframes spinRing1 { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
                  @keyframes spinRing2 { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
                  @keyframes spinRing3 { from{transform:rotate(45deg)} to{transform:rotate(405deg)} }
                  @keyframes pulseDot  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.7)} }
                  @keyframes scanLine  { 0%{transform:translateY(-100%);opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{transform:translateY(400%);opacity:0} }
                  @keyframes typeCode  { 0%,100%{width:0} 40%,60%{width:72px} }
                  @keyframes blinkCursor { 0%,100%{opacity:1} 50%{opacity:0} }
                  @keyframes floatBadge { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
                  @keyframes glowPulse  { 0%,100%{box-shadow:0 0 16px rgba(59,130,246,0.4)} 50%{box-shadow:0 0 32px rgba(59,130,246,0.8)} }
                  @keyframes rotateSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
                  @keyframes orbitDot1  { from{transform:rotate(0deg) translateX(88px) rotate(0deg)} to{transform:rotate(360deg) translateX(88px) rotate(-360deg)} }
                  @keyframes orbitDot2  { from{transform:rotate(120deg) translateX(70px) rotate(-120deg)} to{transform:rotate(480deg) translateX(70px) rotate(-480deg)} }
                  @keyframes orbitDot3  { from{transform:rotate(240deg) translateX(55px) rotate(-240deg)} to{transform:rotate(600deg) translateX(55px) rotate(-600deg)} }
                `}</style>

                {/* Deep bg */}
                <div style={{ position:"absolute", inset:0, background:"#030b18" }} />
                <div style={{ position:"absolute", inset:0, background:"radial-gradient(circle at 50% 50%, rgba(59,130,246,0.12), transparent 65%)" }} />

                {/* Subtle grid */}
                <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.07 }} viewBox="0 0 300 300">
                  {[50,100,150,200,250].map(v => (
                    <g key={v}>
                      <line x1="0" y1={v} x2="300" y2={v} stroke="#60A5FA" strokeWidth="0.5"/>
                      <line x1={v} y1="0" x2={v} y2="300" stroke="#60A5FA" strokeWidth="0.5"/>
                    </g>
                  ))}
                </svg>

                {/* Scan line */}
                <div style={{ position:"absolute", left:0, right:0, height:40, background:"linear-gradient(to bottom, transparent, rgba(147,197,253,0.06), transparent)", animation:"scanLine 4s ease-in-out infinite", pointerEvents:"none", zIndex:2 }} />

                {/* Corner brackets */}
                {[
                  { top:12, left:12, borderTop:"2px solid rgba(59,130,246,0.6)", borderLeft:"2px solid rgba(59,130,246,0.6)", width:18, height:18 },
                  { top:12, right:12, borderTop:"2px solid rgba(59,130,246,0.6)", borderRight:"2px solid rgba(59,130,246,0.6)", width:18, height:18 },
                  { bottom:12, left:12, borderBottom:"2px solid rgba(59,130,246,0.6)", borderLeft:"2px solid rgba(59,130,246,0.6)", width:18, height:18 },
                  { bottom:12, right:12, borderBottom:"2px solid rgba(59,130,246,0.6)", borderRight:"2px solid rgba(59,130,246,0.6)", width:18, height:18 },
                ].map((s, i) => (
                  <div key={i} style={{ position:"absolute", ...s, pointerEvents:"none", zIndex:3 }} />
                ))}

                {/* Central rings */}
                <div style={{ position:"absolute", width:200, height:200, top:"50%", left:"50%", transform:"translate(-50%,-50%)" }}>

                  {/* Ring 1 - outer dashed spinning */}
                  <div style={{ position:"absolute", inset:0, borderRadius:"50%", border:"1px dashed rgba(59,130,246,0.25)", animation:"spinRing1 20s linear infinite" }} />

                  {/* Ring 2 - middle solid reverse */}
                  <div style={{ position:"absolute", inset:16, borderRadius:"50%", border:"1px solid rgba(59,130,246,0.15)", animation:"spinRing2 15s linear infinite" }} />

                  {/* Ring 3 - inner accent */}
                  <div style={{ position:"absolute", inset:32, borderRadius:"50%", border:"1.5px solid rgba(59,130,246,0.3)", borderTopColor:"#3B82F6", borderRightColor:"rgba(59,130,246,0.1)", animation:"spinRing3 8s linear infinite" }} />

                  {/* Orbiting dots */}
                  <div style={{ position:"absolute", inset:0, borderRadius:"50%", animation:"orbitDot1 6s linear infinite", transformOrigin:"50% 50%" }}>
                    <div style={{ position:"absolute", top:"50%", left:"50%", width:7, height:7, borderRadius:"50%", background:"#3B82F6", boxShadow:"0 0 10px #3B82F6", transform:"translate(-50%,-50%)" }} />
                  </div>
                  <div style={{ position:"absolute", inset:0, borderRadius:"50%", animation:"orbitDot2 9s linear infinite", transformOrigin:"50% 50%" }}>
                    <div style={{ position:"absolute", top:"50%", left:"50%", width:5, height:5, borderRadius:"50%", background:"#60A5FA", boxShadow:"0 0 8px #60A5FA", transform:"translate(-50%,-50%)" }} />
                  </div>
                  <div style={{ position:"absolute", inset:0, borderRadius:"50%", animation:"orbitDot3 13s linear infinite", transformOrigin:"50% 50%" }}>
                    <div style={{ position:"absolute", top:"50%", left:"50%", width:4, height:4, borderRadius:"50%", background:"#93C5FD", boxShadow:"0 0 6px #93C5FD", transform:"translate(-50%,-50%)" }} />
                  </div>

                  {/* Central core */}
                  <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <div style={{ width:72, height:72, borderRadius:"50%", background:"linear-gradient(135deg, #1e3a5f, #0f1f35)", border:"2px solid rgba(59,130,246,0.5)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 24px rgba(59,130,246,0.4), inset 0 0 20px rgba(59,130,246,0.1)", animation:"glowPulse 3s ease-in-out infinite" }}>
                      {/* Code brackets icon */}
                      <svg viewBox="0 0 48 48" width="38" height="38" fill="none">
                        <path d="M18 10 L6 24 L18 38" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M30 10 L42 24 L30 38" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M28 8 L20 40" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Code snippet - top left */}
                <div style={{ position:"absolute", top:16, left:16, background:"rgba(15,23,42,0.9)", border:"1px solid rgba(59,130,246,0.25)", borderRadius:8, padding:"8px 10px", zIndex:4, animation:"floatBadge 4s ease-in-out infinite" }}>
                  {[
                    { color:"#ff7b72", w:28 },
                    { color:"#a5d6ff", w:44 },
                    { color:"#ffa657", w:36 },
                  ].map((l, i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center", gap:4, marginBottom:i < 2 ? 4 : 0 }}>
                      <div style={{ width:6, height:6, borderRadius:1, background:l.color, opacity:0.8, flexShrink:0 }} />
                      <div style={{ height:2.5, borderRadius:2, background:l.color, width:l.w, opacity:0.5 }} />
                    </div>
                  ))}
                  {/* Typing line */}
                  <div style={{ display:"flex", alignItems:"center", gap:4, marginTop:4 }}>
                    <div style={{ width:6, height:6, borderRadius:1, background:"#3B82F6", opacity:0.8, flexShrink:0 }} />
                    <div style={{ height:2.5, borderRadius:2, background:"#3B82F6", overflow:"hidden", width:72 }}>
                      <div style={{ height:"100%", background:"#3B82F6", animation:"typeCode 3s ease-in-out infinite" }} />
                    </div>
                    <div style={{ width:1.5, height:8, background:"#60A5FA", animation:"blinkCursor 1s step-end infinite" }} />
                  </div>
                </div>

                {/* Badge top right */}
                <div style={{ position:"absolute", top:16, right:16, background:"rgba(59,130,246,0.12)", border:"1px solid rgba(59,130,246,0.4)", borderRadius:8, padding:"5px 10px", zIndex:4, animation:"floatBadge 5s ease-in-out infinite 1s" }}>
                  <span style={{ fontFamily:"monospace", fontSize:"10px", fontWeight:700, color:"#93C5FD" }}>&lt;/dev&gt;</span>
                </div>

                {/* Status dot */}
                <div style={{ position:"absolute", bottom:20, left:"50%", transform:"translateX(-50%)", display:"flex", alignItems:"center", gap:6, zIndex:4 }}>
                  <div style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px #22c55e", animation:"pulseDot 2s ease-in-out infinite" }} />
                  <span style={{ fontFamily:"monospace", fontSize:"10px", color:"rgba(147,197,253,0.7)" }}>available for hire</span>
                </div>

                {/* Tech pills bottom */}
                <div style={{ position:"absolute", bottom:44, left:"50%", transform:"translateX(-50%)", display:"flex", gap:5, zIndex:4 }}>
                  {["MERN","Flask","SQL"].map(t => (
                    <div key={t} style={{ background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.3)", borderRadius:100, padding:"2px 8px" }}>
                      <span style={{ fontFamily:"monospace", fontSize:"8.5px", color:"#60A5FA", fontWeight:600 }}>{t}</span>
                    </div>
                  ))}
                </div>

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