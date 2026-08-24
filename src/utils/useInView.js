import { useRef, useEffect, useState } from 'react';

/* Reveals an element once it scrolls into the viewport. Used to drive the
   `.reveal` / `.reveal--visible` fade-up utility across case-study sections. */
export const useInView = (options = { threshold: 0.12 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, options);

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, visible];
};
