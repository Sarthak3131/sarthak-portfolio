import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
  initial={{ y: 30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  style={{
    position: "relative",
    zIndex: 1,
    borderTop: "1px solid rgba(59,130,246,0.15)",
    background: "radial-gradient(circle at top,#0B1220,#020617)",
    backdropFilter: "blur(20px)",
  }}
>
  <div
  style={{
    position: "absolute",
    top: -1,
    left: 0,
    right: 0,
    height: 1,
    background: "linear-gradient(90deg, transparent, #3B82F6, transparent)",
    opacity: 0.4
  }}
/>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "1.1rem",
                fontWeight: 800,
                background:
                  "linear-gradient(135deg,#93C5FD,#3B82F6,#60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sarthak Srivastava
            </p>

            <p
              style={{
                fontSize: "0.78rem",
                color: "#94A3B8",
                marginTop: 4,
              }}
            >
              Full Stack Developer — Portfolio
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {[
              { label: "GitHub", href: "https://github.com/Sarthak3131" },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/sarthaksrivastava",
              },
              { label: "Email", href: "mailto:your@realemail.com" },
            ].map((l) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                style={{
                  color: "#94A3B8",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#60A5FA")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#94A3B8")
                }
              >
                {l.label}
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#60A5FA",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "rgba(59,130,246,0.22)";
              e.currentTarget.style.boxShadow =
                "0 0 18px rgba(59,130,246,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "rgba(59,130,246,0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
            aria-label="Back to top"
          >
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(59,130,246,0.08)",
            marginTop: "1.5rem",
            paddingTop: "1rem",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "0.72rem", color: "#64748B" }}>
            © {new Date().getFullYear()} Sarthak Srivastava. All rights
            reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}