import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubStats() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren:0.14, delayChildren:0.1 } },
  };
  const item = {
    hidden: { opacity:0, y:24 },
    show:   { opacity:1, y:0, transition:{ duration:0.5, ease:"easeOut" } },
  };

  return (
    <section id="github-stats" className="p-section">
      <div className="g-blob" style={{ top:"0", left:"10%", width:350, height:350, background:"radial-gradient(circle,rgba(59,130,246,0.1),transparent 70%)" }} />
      <div className="g-blob" style={{ bottom:"0", right:"10%", width:350, height:350, background:"radial-gradient(circle,rgba(59,130,246,0.06),transparent 70%)" }} />

      <div style={{ position:"relative", zIndex:2, maxWidth:1160, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
           <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}>
            <span className="sec-tag">Open Source</span>
          </motion.div>
          <motion.h2
            initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:800, color:"#F1F5F9", marginTop:"0.5rem" }}
          >
            GitHub <span className="sec-hl">Contributions</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
          className="g-card" 
          style={{ padding:"2rem", marginBottom:"2rem", overflowX:"auto" }}
        >
          <GitHubCalendar 
            username="Sarthak3131" 
            colorScheme="dark"
            theme={{
              light: ['#1e293b', '#3b82f6', '#2563eb', '#1d4ed8', '#1e3a8a'],
              dark: ['rgba(255,255,255,0.05)', 'rgba(59,130,246,0.4)', 'rgba(59,130,246,0.6)', 'rgba(59,130,246,0.8)', '#3b82f6'],
            }}
            blockSize={14}
            blockMargin={5}
            fontSize={14}
          />
        </motion.div>

        <motion.div 
          variants={container} initial="hidden" whileInView="show"
          viewport={{ once:true, amount:0.1 }}
          style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:"2rem" }}
        >
          {/* GitHub Stats */}
          <motion.article variants={item} whileHover={{ y:-8 }} className="g-card" style={{ padding:"1.5rem", display:"flex", justifyContent:"center", alignItems:"center", overflow:"hidden" }}>
            <img src="https://github-readme-stats.vercel.app/api?username=Sarthak3131&show_icons=true&theme=transparent&title_color=60A5FA&text_color=94A3B8&icon_color=3B82F6&hide_border=true" alt="GitHub Stats" style={{ width: "100%", maxWidth: "400px" }} />
          </motion.article>

          {/* Top Languages */}
          <motion.article variants={item} whileHover={{ y:-8 }} className="g-card" style={{ padding:"1.5rem", display:"flex", justifyContent:"center", alignItems:"center", overflow:"hidden" }}>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sarthak3131&layout=compact&theme=transparent&title_color=60A5FA&text_color=94A3B8&hide_border=true" alt="Top Languages" style={{ width: "100%", maxWidth: "400px" }} />
          </motion.article>

          {/* GitHub Streak */}
          <motion.article variants={item} whileHover={{ y:-8 }} className="g-card" style={{ padding:"1.5rem", display:"flex", justifyContent:"center", alignItems:"center", overflow:"hidden" }}>
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=Sarthak3131&theme=transparent&hide_border=true&title_color=60A5FA&text_color=94A3B8&icon_color=3B82F6&date_format=j%20M%5B%20Y%5D" alt="GitHub Streak" style={{ width: "100%", maxWidth: "400px" }} />
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
