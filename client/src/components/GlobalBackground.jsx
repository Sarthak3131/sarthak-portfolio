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
    let resizeFrame = null;
    let dpr = 1;

    function setSize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width  = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onResize() {
      if (resizeFrame) return;
      resizeFrame = requestAnimationFrame(() => {
        setSize();
        resizeFrame = null;
      });
    }

    setSize();
    window.addEventListener("resize", onResize, { passive: true });

    const W = () => canvas.width / dpr;
    const H = () => canvas.height / dpr;

    const createDot = () => {
      const dot = {
        x: 0,
        y: 0,
        r: 0,
        speed: 0,
        opacity: 0,
        drift: 0,
        reset() {
          this.x       = Math.random() * W();
          this.y       = H() + Math.random() * 80;
          this.r       = Math.random() * 2.2 + 0.4;
          this.speed   = Math.random() * 0.65 + 0.2;
          this.opacity = Math.random() * 0.5 + 0.3; // 0.30 – 0.80
          this.drift   = (Math.random() - 0.5) * 0.45;
        },
        step() {
          this.y -= this.speed;
          this.x += this.drift;
          if (this.y < -10) this.reset();
        },
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(147,197,253,${this.opacity})`;
          ctx.fill();
        },
      };

      dot.reset();
      dot.y = Math.random() * H(); // scatter on load
      return dot;
    };

    const dots = Array.from({ length: 120 }, createDot);

    let paused = false;
    const vis = () => { paused = document.hidden; };
    document.addEventListener("visibilitychange", vis);

    function loop() {
      if (!paused) {
        ctx.clearRect(0, 0, W(), H());
        for (let i = 0; i < dots.length; i++) {
          dots[i].step();
          dots[i].draw();
        }
      }
      raf = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(raf);
      if (resizeFrame) cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", onResize);
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
    let frameId = null;
    let x = 0;
    let y = 0;

    const fn = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (frameId) return;

      frameId = requestAnimationFrame(() => {
        el.style.left = x + "px";
        el.style.top  = y + "px";
        frameId = null;
      });
    };
    window.addEventListener("mousemove", fn, { passive: true });
    return () => {
      window.removeEventListener("mousemove", fn);
      if (frameId) cancelAnimationFrame(frameId);
    };
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
        willChange:    "transform,left,top",
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
