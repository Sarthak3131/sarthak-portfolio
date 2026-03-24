import { useState, useEffect, memo } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import certificates from "../data/certificates";

/* ── CERTIFICATE MODAL ─────────────────────────────────────── */
function CertModal({ cert, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
        onClick={onClose}
        style={{ position:"fixed", inset:0, zIndex:9999, background:"rgba(0,0,0,0.80)", backdropFilter:"blur(14px)", display:"flex", alignItems:"center", justifyContent:"center", padding:"2rem" }}
      >
        <motion.div
          initial={{ scale:0.85, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0.85, opacity:0 }}
          transition={{ type:"spring", damping:25, stiffness:300 }}
          onClick={e => e.stopPropagation()}
          style={{ background:"rgba(15,23,42,0.98)", backdropFilter:"blur(30px)", border:`1px solid ${cert.accentBorder}`, borderRadius:28, maxWidth:700, width:"100%", maxHeight:"90vh", overflowY:"auto", padding:"1.25rem 2rem 2rem", boxShadow:`0 40px 80px rgba(0,0,0,0.6), 0 0 40px ${cert.accentBg}`, position:"relative", WebkitOverflowScrolling:"touch", scrollBehavior:"smooth" }}
        >
          {/* Close */}
          <button onClick={onClose}
            style={{ position:"absolute", top:"1rem", right:"1rem", background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.2)", width:32, height:32, borderRadius:8, cursor:"pointer", color:"#94A3B8", fontWeight:700, fontSize:"1rem", lineHeight:1, padding:0, display:"flex", alignItems:"center", justifyContent:"center" }}
            onMouseEnter={e => { e.currentTarget.style.background="rgba(59,130,246,0.2)"; e.currentTarget.style.color="#F1F5F9"; }}
            onMouseLeave={e => { e.currentTarget.style.background="rgba(59,130,246,0.1)"; e.currentTarget.style.color="#94A3B8"; }}
          >✕</button>

          {/* Certificate image */}
          <div style={{ width:"100%", borderRadius:16, overflow:"hidden", marginBottom:"1.5rem", border:`1px solid ${cert.accentBorder}`, boxShadow:`0 0 30px ${cert.accentBg}`, maxHeight:"52vh" }}>
            <img
              src={cert.image}
              alt={cert.title}
              loading="lazy"
              style={{ width:"100%", maxHeight:"52vh", display:"block", objectFit:"contain" }}
            />
          </div>

          {/* Category badge */}
          <span style={{ fontSize:"0.68rem", fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:cert.accent, background:cert.accentBg, border:`1px solid ${cert.accentBorder}`, borderRadius:100, padding:"0.2rem 0.75rem", display:"inline-block", marginBottom:"0.75rem" }}>
            {cert.category}
          </span>

          <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.3rem", fontWeight:800, color:"#F1F5F9", margin:"0.4rem 0 0.3rem" }}>{cert.title}</h2>
          <p style={{ color:"#94A3B8", fontSize:"0.9rem", marginBottom:"0.25rem" }}>{cert.issuer}</p>
          <p style={{ color:"#64748B", fontSize:"0.8rem", marginBottom:"1.5rem" }}>Issued: {cert.date}</p>

          {/* Verify button */}
          <a href={cert.verify} target="_blank" rel="noreferrer"
            style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", fontSize:"0.85rem", fontWeight:600, padding:"0.6rem 1.4rem", borderRadius:100, background:cert.accentBg, border:`1px solid ${cert.accentBorder}`, color:cert.accent, textDecoration:"none", transition:"all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.opacity="0.8"; e.currentTarget.style.transform="translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="none"; }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            View Certificate
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}

/* ── CERTIFICATE CARD ──────────────────────────────────────── */
const CertCard = memo(function CertCard({ cert, onClick }) {
  return (
    <motion.div
      className="g-card"
      initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, margin:"-60px" }}
      whileHover={{ y:-8 }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      style={{ overflow:"hidden", cursor:"pointer", position:"relative", willChange:"transform", transform:"translateZ(0)" }}
    >
      {/* Accent top bar */}
      <div style={{ height:3, background:`linear-gradient(90deg,${cert.accent},transparent)`, borderRadius:"22px 22px 0 0" }} />

      {/* Certificate image preview */}
      <div style={{ width:"100%", height:130, overflow:"hidden", position:"relative", background:cert.accentBg }}>
        <img
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          decoding="async"
          style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top", opacity:0.9, transition:"transform 0.4s ease" }}
          onMouseEnter={e => e.currentTarget.style.transform="scale(1.04)"}
          onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}
        />
        {/* Gradient overlay */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, transparent 40%, rgba(15,23,42,0.8) 100%)" }} />
        {/* Category badge overlay */}
        <span style={{ position:"absolute", top:"0.6rem", right:"0.6rem", fontSize:"0.6rem", fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:cert.accent, background:"rgba(15,23,42,0.85)", border:`1px solid ${cert.accentBorder}`, borderRadius:100, padding:"0.18rem 0.55rem", backdropFilter:"blur(8px)" }}>
          {cert.category}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding:"1rem 1.25rem 1.25rem", position:"relative", zIndex:1 }}>
        <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"0.95rem", fontWeight:700, color:"#F1F5F9", marginBottom:"0.3rem", lineHeight:1.35 }}>{cert.title}</h3>
        <p style={{ color:cert.accent, fontSize:"0.82rem", fontWeight:500, marginBottom:"0.2rem" }}>{cert.issuer}</p>
        <p style={{ color:"#64748B", fontSize:"0.75rem", marginBottom:"0.85rem" }}>{cert.date}</p>

        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <span style={{ fontSize:"0.72rem", color:"#64748B" }}>Click to view</span>
          <svg width="14" height="14" fill="none" stroke={cert.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
});

/* ── CERTIFICATES PAGE ─────────────────────────────────────── */
export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="p-section">
      <div className="g-blob" style={{ top:"20%",    left:"50%",  transform:"translateX(-50%)", width:320, height:320, background:"radial-gradient(circle,rgba(59,130,246,0.08),transparent 70%)" }} />
      <div className="g-blob" style={{ bottom:"20%", right:"20%", width:380, height:380, background:"radial-gradient(circle,rgba(59,130,246,0.06),transparent 70%)" }} />

      <div style={{ position:"relative", zIndex:2, maxWidth:1160, margin:"0 auto" }}>

        <div style={{ textAlign:"center", marginBottom:"2rem" }}>
          <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}>
            <span className="sec-tag">Certifications</span>
          </motion.div>
          <motion.h2
            initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:800, color:"#F1F5F9", marginTop:"0.5rem" }}
          >
            Professional <span className="sec-hl">Credentials</span>
          </motion.h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1.5rem" }}>
          {certificates.map((cert) => (
            <CertCard key={cert.id} cert={cert} onClick={() => setSelected(cert)} />
          ))}
        </div>
      </div>

      {selected && (
        <CertModal cert={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}