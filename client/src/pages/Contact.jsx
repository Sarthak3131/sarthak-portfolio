import { useState } from "react";
import { motion } from "framer-motion";

const EMAIL = "sarthaksrivastava189@gmail.com";
const MAILTO_BASE = `mailto:${EMAIL}`;

const contactItems = [
  {
    label: "GitHub",
    text: "Sarthak3131",
    href: "https://github.com/Sarthak3131",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    text: "sarthak300",
    href: "https://www.linkedin.com/in/sarthak300/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Email",
    text: EMAIL,
    href: `${MAILTO_BASE}?subject=Portfolio%20Contact&body=Hello%20Sarthak%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    text: "sarthaksrivastava189",
    href: "https://leetcode.com/u/sarthaksrivastava189/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606" />
        <line x1="8" y1="12" x2="20" y2="12" />
      </svg>
    ),
  },
];

const inputBase = {
  marginTop:8, width:"100%", borderRadius:14,
  border:"1px solid rgba(59,130,246,0.2)",
  background:"rgba(59,130,246,0.04)",
  padding:"0.8rem 1rem", color:"#F1F5F9",
  outline:"none", fontSize:"0.9rem",
  transition:"border-color 0.2s, box-shadow 0.2s",
  boxSizing:"border-box", fontFamily:"'DM Sans',sans-serif",
};
const onFocus = (e) => { e.target.style.borderColor="#3B82F6"; e.target.style.boxShadow="0 0 0 3px rgba(59,130,246,0.15)"; };
const onBlur  = (e) => { e.target.style.borderColor="rgba(59,130,246,0.2)"; e.target.style.boxShadow="none"; };

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: value.trim() ? "" : p[name] }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {
      name: form.name.trim() ? "" : "Name is required.",
      email: form.email.trim() ? "" : "Email is required.",
      message: form.message.trim() ? "" : "Message is required.",
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email || nextErrors.message) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Hello Sarthak,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n`
    );

    window.location.href = `${MAILTO_BASE}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2200);
    setForm({ name:"", email:"", message:"" });
    setErrors({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="p-section">
      <div className="g-blob" style={{ top:"10%", left:"20%", width:260, height:260, background:"radial-gradient(circle,rgba(59,130,246,0.09),transparent 70%)" }} />
      <div className="g-blob" style={{ bottom:"5%", right:"10%", width:300, height:300, background:"radial-gradient(circle,rgba(59,130,246,0.07),transparent 70%)" }} />

      <div style={{ position:"relative", zIndex:2, maxWidth:1160, margin:"0 auto" }}>

        <div style={{ textAlign:"center", marginBottom:"3rem" }}>
          <motion.div initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}>
            <span className="sec-tag">Contact</span>
          </motion.div>
          <motion.h2
            initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,5vw,3.3rem)", fontWeight:800, color:"#F1F5F9", marginTop:"0.5rem", marginBottom:"0.75rem" }}
          >
            Let's <span className="sec-hl">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
            style={{ color:"#94A3B8", fontSize:"0.98rem", maxWidth:560, margin:"0 auto" }}
          >
            Open to full-time roles, freelance projects, and exciting collaborations.
          </motion.p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(340px,1fr))", gap:"2rem" }}>

          <motion.div
            initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:"-80px" }}
            style={{ display:"flex", flexDirection:"column", gap:"1rem", padding:"0.2rem 0" }}
          >
            <span className="sec-tag" style={{ width:"fit-content", marginBottom:"0.1rem" }}>Available For Work</span>
            <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,4vw,3.4rem)", fontWeight:800, color:"#F1F5F9", lineHeight:1.05, margin:"0.35rem 0 0" }}>
              Get In <span className="sec-hl">Touch</span>
            </h3>
            <p style={{ color:"#94A3B8", fontSize:"1rem", lineHeight:1.75, margin:"0.35rem 0 0.5rem" }}>
              Feel free to reach out for collaborations, opportunities, or just a friendly chat about tech.
            </p>

            {contactItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity:0, y:14 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, margin:"-80px" }}
                transition={{ duration:0.35, delay:index * 0.05 }}
                whileHover={{ x:4 }}
                style={{
                  textDecoration:"none",
                  color:"inherit",
                  border:"1px solid rgba(59,130,246,0.18)",
                  background:"linear-gradient(90deg, rgba(15,23,42,0.72), rgba(15,23,42,0.56))",
                  borderRadius:16,
                  padding:"0.9rem 1.1rem",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"space-between",
                  transition:"all 0.2s",
                  boxShadow:"0 8px 20px rgba(2,6,23,0.35)",
                }}
              >
                <div style={{ display:"flex", alignItems:"center", gap:"0.9rem" }}>
                  <span
                    style={{
                      width:40,
                      height:40,
                      borderRadius:12,
                      display:"inline-flex",
                      alignItems:"center",
                      justifyContent:"center",
                      color:"#93C5FD",
                      background:"rgba(59,130,246,0.1)",
                      border:"1px solid rgba(59,130,246,0.24)",
                    }}
                  >
                    {item.icon}
                  </span>
                  <span>
                    <span style={{ display:"block", fontSize:"0.68rem", fontWeight:700, letterSpacing:"2px", color:"#60A5FA", textTransform:"uppercase", marginBottom:2 }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize:"1.02rem", fontWeight:700, color:"#E2E8F0" }}>{item.text}</span>
                  </span>
                </div>
                <span style={{ color:"#64748B", fontSize:"1.2rem", lineHeight:1 }}>→</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.form onSubmit={onSubmit}
            initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:"-80px" }}
            className="g-card"
            style={{ display:"flex", flexDirection:"column", gap:"1.15rem", padding:"2rem", borderRadius:22, border:"1px solid rgba(59,130,246,0.2)", background:"linear-gradient(180deg, rgba(15,23,42,0.7), rgba(15,23,42,0.5))" }}
          >
            <div style={{ marginBottom:"0.2rem" }}>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.65rem", fontWeight:800, color:"#F1F5F9", margin:"0 0 0.35rem" }}>Send a Message</h3>
              <p style={{ color:"#94A3B8", fontSize:"0.92rem", margin:0 }}>I typically reply within 24 hours.</p>
            </div>

            <div>
              <input id="name" name="name" type="text" value={form.name} onChange={onChange} required placeholder="Your Name" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
              {errors.name ? <p style={{ margin:"0.4rem 0 0", color:"#F87171", fontSize:"0.82rem", fontWeight:600 }}>⚠ {errors.name}</p> : null}
            </div>

            <div>
              <input id="email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="Email Address" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
              {errors.email ? <p style={{ margin:"0.4rem 0 0", color:"#F87171", fontSize:"0.82rem", fontWeight:600 }}>⚠ {errors.email}</p> : null}
            </div>

            <div>
              <textarea id="message" name="message" rows={6} value={form.message} onChange={onChange} required placeholder="Your Message" style={{ ...inputBase, resize:"none" }} onFocus={onFocus} onBlur={onBlur} />
              {errors.message ? <p style={{ margin:"0.4rem 0 0", color:"#F87171", fontSize:"0.82rem", fontWeight:600 }}>⚠ {errors.message}</p> : null}
            </div>

            <button type="submit"
              style={{ marginTop:"0.35rem", padding:"0.95rem", borderRadius:14, background:"linear-gradient(135deg,#3B82F6,#1d4ed8)", color:"#fff", fontWeight:800, fontSize:"1rem", border:"none", cursor:"pointer", boxShadow:"0 8px 28px rgba(59,130,246,0.35)", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow="0 8px 32px rgba(59,130,246,0.65)"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow="0 4px 20px rgba(59,130,246,0.38)"; e.currentTarget.style.transform="none"; }}
            >
              {submitted ? "✓ Draft opened!" : "Send Message ✈"}
            </button>
            <p style={{ margin:"0.2rem 0 0", color:"#64748B", fontSize:"0.78rem" }}>
              No third-party service used. This opens your default email app with a prefilled draft.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}