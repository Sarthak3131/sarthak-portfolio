import { useState } from "react";
import { motion } from "framer-motion";

const inputBase = {
  marginTop:8, width:"100%", borderRadius:14,
  border:"1px solid rgba(59,130,246,0.2)",
  background:"rgba(59,130,246,0.04)",
  padding:"0.8rem 1rem", color:"#F1F5F9",
  outline:"none", fontSize:"0.9rem",
  transition:"border-color 0.2s, box-shadow 0.2s",
  boxSizing:"border-box", fontFamily:"'DM Sans',sans-serif",
};
const labelStyle = {
  fontSize:"0.72rem", fontWeight:700, color:"#94A3B8",
  textTransform:"uppercase", letterSpacing:"1.5px",
};
const onFocus = (e) => { e.target.style.borderColor="#3B82F6"; e.target.style.boxShadow="0 0 0 3px rgba(59,130,246,0.15)"; };
const onBlur  = (e) => { e.target.style.borderColor="rgba(59,130,246,0.2)"; e.target.style.boxShadow="none"; };

export default function Contact() {
  const [form, setForm]           = useState({ name:"", email:"", message:"" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2200);
    window.open("mailto:sarthaksrivastava189@gmail.com?subject=Portfolio%20Contact&body=Hello%20Sarthak%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.", "_top");
    setForm({ name:"", email:"", message:"" });
  };

  return (
    <section id="contact" className="p-section">
      <div className="g-blob" style={{ top:"10%",   left:"20%",  width:260, height:260, background:"radial-gradient(circle,rgba(59,130,246,0.09),transparent 70%)" }} />
      <div className="g-blob" style={{ bottom:"5%", right:"10%", width:300, height:300, background:"radial-gradient(circle,rgba(59,130,246,0.07),transparent 70%)" }} />

      <div style={{ position:"relative", zIndex:2, maxWidth:1000, margin:"0 auto" }}>

        <div style={{ textAlign:"center", marginBottom:"3rem" }}>
          <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}>
            <span className="sec-tag">Contact</span>
          </motion.div>
          <motion.h2
            initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:800, color:"#F1F5F9", marginTop:"0.5rem", marginBottom:"0.75rem" }}
          >
            Let's build something <span className="sec-hl">great together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ color:"#94A3B8", fontSize:"0.96rem" }}
          >
            Send a message or connect via GitHub and LinkedIn.
          </motion.p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"2rem" }}>

          {/* Form */}
          <motion.form onSubmit={onSubmit}
            initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:"-80px" }}
            className="g-card"
            style={{ display:"flex", flexDirection:"column", gap:"1.25rem", padding:"2rem" }}
          >
            <div>
              <label style={labelStyle} htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={form.name} onChange={onChange} required placeholder="Your name" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="you@example.com" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} value={form.message} onChange={onChange} required placeholder="Interested in collaborating?" style={{ ...inputBase, resize:"none" }} onFocus={onFocus} onBlur={onBlur} />
            </div>
            <button type="submit"
              style={{ padding:"0.85rem", borderRadius:14, background:"linear-gradient(135deg,#3B82F6,#1d4ed8)", color:"#fff", fontWeight:700, fontSize:"0.88rem", letterSpacing:"1px", textTransform:"uppercase", border:"none", cursor:"pointer", boxShadow:"0 4px 20px rgba(59,130,246,0.38)", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow="0 8px 32px rgba(59,130,246,0.65)"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow="0 4px 20px rgba(59,130,246,0.38)"; e.currentTarget.style.transform="none"; }}
            >
              {submitted ? "✓ Message sent!" : "Send Message"}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:"-80px" }}
            className="g-card"
            style={{ display:"flex", flexDirection:"column", justifyContent:"center", gap:"1.5rem", padding:"2rem" }}
          >
            <div>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.3rem", fontWeight:700, color:"#F1F5F9", marginBottom:"0.5rem" }}>Get in touch</h3>
              <p style={{ color:"#94A3B8", fontSize:"0.9rem", lineHeight:1.7 }}>I'm available for full-time & contract roles. Let's connect!</p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"1.2rem" }}>
              {[
                { label:"Email",    href:"mailto:sarthaksrivastava189@gmail.com?subject=Portfolio%20Contact&body=Hello%20Sarthak%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",      text:"sarthaksrivastava189@gmail.com" },
                { label:"Phone",    href:"tel:+919696404948",                          text:"+91-9696404948" },
                { label:"GitHub",   href:"https://github.com/Sarthak3131",             text:"github.com/Sarthak3131" },
                { label:"LinkedIn", href:"https://linkedin.com/in/sarthak300",         text:"linkedin.com/in/sarthak300" },
              ].map((l) => (
                <div key={l.label}>
                  <div style={{ fontSize:"0.65rem", fontWeight:700, color:"#3B82F6", textTransform:"uppercase", letterSpacing:"2px", marginBottom:"0.2rem" }}>{l.label}</div>
                  <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                    style={{ color:"#93C5FD", textDecoration:"none", fontSize:"0.9rem", transition:"color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color="#60A5FA"}
                    onMouseLeave={e => e.currentTarget.style.color="#93C5FD"}
                  >{l.text}</a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}