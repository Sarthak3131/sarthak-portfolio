import { motion } from "framer-motion";

const EMAIL = "sarthaksrivastava189@gmail.com";
const MAILTO_LINK = `mailto:${EMAIL}?subject=Portfolio%20Contact&body=Hello%20Sarthak%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.`;

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
        background: "radial-gradient(120% 120% at 50% -20%, rgba(59,130,246,0.18), transparent 55%), radial-gradient(circle at top,#0B1220,#020617)",
        backdropFilter: "blur(20px)",
        overflow: "hidden",
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
          opacity: 0.4,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "0 auto auto 50%",
          transform: "translateX(-50%)",
          width: "min(540px, 90vw)",
          height: 90,
          background: "radial-gradient(ellipse at center, rgba(59,130,246,0.16), transparent 70%)",
          pointerEvents: "none",
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
              Building reliable full-stack experiences
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            {[
              { label: "GitHub", href: "https://github.com/Sarthak3131" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/sarthak300/",
              },
              { label: "Email", href: MAILTO_LINK },
            ].map((l) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ y: -1 }}
                style={{
                  color: "#93C5FD",
                  textDecoration: "none",
                  fontSize: "0.84rem",
                  fontWeight: 600,
                  border: "1px solid rgba(59,130,246,0.22)",
                  background: "rgba(59,130,246,0.08)",
                  borderRadius: 999,
                  padding: "0.38rem 0.8rem",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F1F5F9";
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.42)";
                  e.currentTarget.style.background = "rgba(59,130,246,0.16)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#93C5FD";
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.22)";
                  e.currentTarget.style.background = "rgba(59,130,246,0.08)";
                }}
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
              background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.04))",
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