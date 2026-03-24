import { useEffect, useRef, memo } from "react";

/* ─────────────────────────────────────────────────────────────────────
   GlobalBackground
   Render this ONCE inside Home.jsx (above all sections).
   It provides:
     • ParticleCanvas  — 120 red dots floating up across the full page
     • CursorGlow      — soft red radial follows the mouse
   Both are position:fixed so they show through every section.
───────────────────────────────────────────────────────────────────── */

function ParticleCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;

    function setSize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    setSize();
    window.addEventListener("resize", setSize);

    const W = () => canvas.width;
    const H = () => canvas.height;

    class Dot {
      reset() {
        this.x       = Math.random() * W();
        this.y       = H() + Math.random() * 80;
        this.r       = Math.random() * 2.2 + 0.4;
        this.speed   = Math.random() * 0.65 + 0.2;
        this.opacity = Math.random() * 0.5 + 0.3;   // 0.30 – 0.80
        this.drift   = (Math.random() - 0.5) * 0.45;
      }
      constructor() {
        this.reset();
        this.y = Math.random() * H(); // scatter on load
      }
      step() {
        this.y -= this.speed;
        this.x += this.drift;
        if (this.y < -10) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,197,253,${this.opacity})`;
        ctx.fill();
      }
    }

    const dots = Array.from({ length: 120 }, () => new Dot());

    let paused = false;
    const vis = () => { paused = document.hidden; };
    document.addEventListener("visibilitychange", vis);

    function loop() {
      if (!paused) {
        ctx.clearRect(0, 0, W(), H());
        dots.forEach((d) => { d.step(); d.draw(); });
      }
      raf = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setSize);
      document.removeEventListener("visibilitychange", vis);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position:      "fixed",
        inset:         0,
        width:         "100vw",
        height:        "100vh",
        pointerEvents: "none",
        zIndex:        0,
        display:       "block",
      }}
    />
  );
}

function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const fn = (e) => {
      el.style.left = e.clientX + "px";
      el.style.top  = e.clientY + "px";
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  return (
    <div
      ref={ref}
      style={{
        position:      "fixed",
        width:         480,
        height:        480,
        borderRadius:  "50%",
        pointerEvents: "none",
        background:    "radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)",
        transform:     "translate(-50%,-50%)",
        transition:    "left 0.1s ease, top 0.1s ease",
        zIndex:        9999,
      }}
    />
  );
}

export default memo(function GlobalBackground() {
  return (
    <>
      <ParticleCanvas />
      <CursorGlow />
    </>
  );
});
