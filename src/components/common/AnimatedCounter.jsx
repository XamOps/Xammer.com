import { useState, useEffect, useRef } from 'react';

const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

const AnimatedCounter = ({
  to = 100,
  duration = 1800,
  prefix = '',
  suffix = '',
  decimals = 0,
}) => {
  const [val, setVal] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setVal(easeOutCubic(p) * to);
      if (p < 1) requestAnimationFrame(tick);
      else setVal(to);
    };
    requestAnimationFrame(tick);
  }, [triggered, to, duration]);

  return (
    <span ref={ref}>
      {prefix}{val.toFixed(decimals)}{suffix}
    </span>
  );
};

export default AnimatedCounter;
