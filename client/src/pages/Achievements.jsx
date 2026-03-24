import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ITEMS = [
  { label:"Problems Solved",    value:250, suffix:"+" },
  { label:"HackerRank Stars",   value:5,   suffix:"★" },
  { label:"Projects Completed", value:5,   suffix:"+" },
  { label:"Certifications",     value:10,   suffix:"+" },
];

function Counter({ value, suffix, label, delay = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const inView = useInView(ref, { once:true });

  useEffect(() => {
    if (!inView) return;
    let intervalId;
    const timeoutId = setTimeout(() => {
      const steps = 60;
      let current = 0;
      intervalId = setInterval(() => {
        current += value / steps;
        if (current >= value) { setCount(value); clearInterval(intervalId); }
        else setCount(Math.floor(current));
      }, 2000 / steps);
    }, delay);
    return () => { clearTimeout(timeoutId); clearInterval(intervalId); };
  }, [inView, value, delay]);

  return (
    <div ref={ref} style={{ textAlign:"center" }}>
      <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,5vw,3rem)", fontWeight:900, color:"#60A5FA", textShadow:"0 0 16px rgba(59,130,246,0.65)", marginBottom:"0.4rem" }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize:"0.68rem", fontWeight:600, color:"#94A3B8", textTransform:"uppercase", letterSpacing:"1.5px" }}>
        {label}
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="p-section">
      <div className="g-blob" style={{ top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:500, height:300, background:"radial-gradient(circle,rgba(59,130,246,0.07),transparent 70%)" }} />

      <div style={{ position:"relative", zIndex:2, maxWidth:900, margin:"0 auto" }}>

        <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
          <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}>
            <span className="sec-tag">Achievements</span>
          </motion.div>
          <motion.h2
            initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:800, color:"#F1F5F9", marginTop:"0.5rem" }}
          >
            Milestones & <span className="sec-hl">Accomplishments</span>
          </motion.h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"1.5rem" }}>
          {ITEMS.map((a, i) => (
            <motion.div key={a.label}
              className="g-card"
              initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }}
              viewport={{ once:true, margin:"-60px" }} transition={{ delay:i*0.1 }}
              whileHover={{ scale:1.05, y:-4 }}
              style={{ padding:"2rem 1.5rem" }}
            >
              <Counter value={a.value} suffix={a.suffix} label={a.label} delay={i*200} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}