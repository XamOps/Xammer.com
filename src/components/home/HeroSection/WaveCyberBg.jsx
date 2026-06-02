import { useEffect, useRef } from 'react';

/*
 * WaveCyberBg — canvas-based cyber matrix wave background.
 *
 * Renders columns of falling tech/binary characters where the brightness
 * of every column follows a travelling sine wave, creating the appearance
 * of a luminous wave sweeping left-to-right across the matrix rain.
 *
 * Character set: binary + hexadecimal + cyber/network symbols, keeping
 * the visual unmistakably "technology / cyber security".
 */

const CHARS =
  '01ABCDEF01010110λΩΣ∇⊕⊗><{}[]#$01101001ABCDEF01⌘⌥⌃§';

const FS = 13; // font size / column pitch in px

const WaveCyberBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let raf;
    let cols  = 0;
    let drops = [];

    /* ── Initialise / re-initialise on resize ── */
    const init = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const newCols = Math.floor(canvas.width / FS);

      /* Preserve existing drop positions when resizing */
      drops = Array.from({ length: newCols }, (_, i) =>
        drops[i] !== undefined
          ? drops[i]
          : Math.random() * -(canvas.height / FS)
      );
      cols = newCols;
    };

    init();

    /* ── Render loop ── */
    const tick = () => {
      const { width, height } = canvas;
      const t = Date.now() / 1000;

      /* Ghost-trail fade — lower alpha = longer glowing trails */
      ctx.fillStyle = 'rgba(13,17,23,0.065)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${FS}px "JetBrains Mono","Courier New",monospace`;

      for (let i = 0; i < cols; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x    = i * FS;
        const y    = drops[i] * FS;

        /*
         * Travelling sine wave: phase advances across columns (i * 0.22)
         * and forward through time (t * 0.75), producing a smooth wave
         * that sweeps diagonally left→right across the full width.
         */
        const wave  = 0.5 + 0.5 * Math.sin(t * 0.75 + i * 0.22);

        /*
         * Three-layer colour for depth:
         *   head (top of stream)  → bright cyan   : rgba(102,252,241, …)
         *   mid-stream            → soft violet    : rgba(187,134,252, …)
         *   mix decided by y pos relative to height
         */
        const relY  = Math.max(0, Math.min(1, y / height));
        const alpha = wave * 0.19;

        if (relY < 0.3) {
          /* top third: cyan/teal head */
          ctx.fillStyle = `rgba(102,252,241,${alpha * 1.1})`;
        } else if (relY < 0.65) {
          /* middle: electric blue */
          ctx.fillStyle = `rgba(88,166,255,${alpha * 0.9})`;
        } else {
          /* lower trail: violet fade */
          ctx.fillStyle = `rgba(187,134,252,${alpha * 0.65})`;
        }

        ctx.fillText(char, x, y);

        /* Advance drop; stagger reset so columns don't all sync up */
        drops[i] += 0.38;
        if (y > height && Math.random() > 0.974) {
          drops[i] = Math.random() * -(height / FS * 0.5);
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    /* ResizeObserver keeps canvas dimensions in sync */
    const ro = new ResizeObserver(init);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 1,
      }}
    />
  );
};

export default WaveCyberBg;
