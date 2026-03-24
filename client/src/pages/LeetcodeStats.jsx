import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function LeetcodeStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://leetcode-api-faisalshohag.vercel.app/sarthaksrivastava189", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`LeetCode API request failed: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data?.errors || typeof data !== "object" || data === null) {
          setError(true);
        } else {
          let acc = 0;
          const totalSubmissions = Number(data.totalSubmissions) || 0;
          const totalAccepted = Number(data.totalAccepted) || 0;

          if (totalSubmissions > 0 && totalAccepted >= 0) {
            acc = (totalAccepted / totalSubmissions) * 100;
          }
          if (isNaN(acc) || !isFinite(acc)) acc = 0;

          setStats({
            totalSolved: Number(data.totalSolved) || 0,
            easySolved: Number(data.easySolved) || 0,
            mediumSolved: Number(data.mediumSolved) || 0,
            hardSolved: Number(data.hardSolved) || 0,
            acceptanceRate: acc.toFixed(1),
            ranking: data.ranking || "N/A"
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.error("Failed to fetch LeetCode stats:", err);
        setError(true);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const statCards = useMemo(() => {
    if (!stats) return [];

    const cards = [
      { lbl: "Total Solved", val: stats.totalSolved, hidden: !Number.isFinite(stats.totalSolved) },
      { lbl: "Easy", val: stats.easySolved, hidden: !Number.isFinite(stats.easySolved) },
      { lbl: "Medium", val: stats.mediumSolved, hidden: !Number.isFinite(stats.mediumSolved) },
      { lbl: "Hard", val: stats.hardSolved, hidden: !Number.isFinite(stats.hardSolved) },
    ];

    const acceptanceRate = Number(stats.acceptanceRate);
    if (Number.isFinite(acceptanceRate) && acceptanceRate > 0) {
      cards.push({ lbl: "Acceptance Rate", val: `${acceptanceRate.toFixed(1)}%`, hidden: false });
    }

    return cards.filter((c) => !c.hidden);
  }, [stats]);

  const pieData = useMemo(() => stats ? [
    { name: "Easy", value: parseInt(stats.easySolved), color: "#00b8a3" },
    { name: "Medium", value: parseInt(stats.mediumSolved), color: "#ffc01e" },
    { name: "Hard", value: parseInt(stats.hardSolved), color: "#ef4743" },
  ] : [], [stats]);

  const statsGridMinCardWidth = statCards.length === 4 ? 220 : 180;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren:0.1, delayChildren:0.1 } },
  };
  const item = {
    hidden: { opacity:0, y:24 },
    show:   { opacity:1, y:0, transition:{ duration:0.5, ease:"easeOut" } },
  };

  return (
    <section id="leetcode" className="p-section">
      <div className="g-blob" style={{ top:"10%", right:"20%", width:300, height:300, background:"radial-gradient(circle,rgba(59,130,246,0.08),transparent 70%)" }} />
      <div className="g-blob" style={{ bottom:"10%", left:"10%", width:340, height:340, background:"radial-gradient(circle,rgba(59,130,246,0.05),transparent 70%)" }} />

      <div style={{ position:"relative", zIndex:2, maxWidth:1160, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"4rem" }}>
          <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}>
            <span className="sec-tag">Problem Solving</span>
          </motion.div>
          <motion.h2
            initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:800, color:"#F1F5F9", marginTop:"0.5rem" }}
          >
            LeetCode <span className="sec-hl">Stats</span>
          </motion.h2>
        </div>

        {loading ? (
          <div style={{ textAlign:"center", color:"#94A3B8" }}>Loading live data...</div>
        ) : error ? (
          <div style={{ textAlign:"center", color:"#ef4444" }}>Failed to load LeetCode data.</div>
        ) : (
          <motion.div 
            variants={container} initial="hidden" whileInView="show" viewport={{ once:true, amount:0.1 }}
            style={{ display:"grid", gridTemplateColumns:`repeat(auto-fit,minmax(${statsGridMinCardWidth}px,1fr))`, gap:"1.5rem" }}
          >
            {statCards.map((s) => (
              <motion.div key={s.lbl} variants={item} whileHover={{ scale:1.05 }} className="g-card"
                style={{ padding:"1.5rem", textAlign:"center", display:"flex", flexDirection:"column", justifyContent:"center" }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"2.5rem", fontWeight:800, color:"#60A5FA", textShadow:"0 0 10px rgba(59,130,246,0.55)" }}>
                  {s.val}
                </div>
                <div style={{ fontSize:"0.8rem", fontWeight:600, color:"#94A3B8", textTransform:"uppercase", letterSpacing:1, marginTop:8 }}>
                  {s.lbl}
                </div>
              </motion.div>
            ))}

            <motion.div variants={item} className="g-card" style={{ padding:"1.5rem", gridColumn:"1 / -1", height:300, display:"flex", flexDirection:"column", alignItems:"center" }}>
              <div style={{ fontSize:"0.85rem", fontWeight:700, color:"#F1F5F9", textTransform:"uppercase", letterSpacing:1.5, marginBottom:"1rem" }}>Problem Distribution</div>
              <div style={{ width:"100%", flex:1, position:"relative" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ background:"rgba(15,23,42,0.9)", border:"1px solid rgba(59,130,246,0.2)", borderRadius:8, color:"#F1F5F9" }}
                      itemStyle={{ color:"#93C5FD", fontWeight:600 }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div style={{ display:"flex", gap:"1.5rem", marginTop:"1rem", flexWrap:"wrap", justifyContent:"center" }}>
                {pieData.map(d => (
                  <div key={d.name} style={{ display:"flex", alignItems:"center", gap:6 }}>
                    <div style={{ width:12, height:12, borderRadius:"50%", background:d.color, boxShadow:`0 0 8px ${d.color}` }} />
                    <span style={{ fontSize:"0.8rem", color:"#94A3B8", fontWeight:600 }}>{d.name}: <span style={{ color:"#F1F5F9" }}>{d.value}</span></span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
