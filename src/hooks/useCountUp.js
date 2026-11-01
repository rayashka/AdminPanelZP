import { useEffect, useRef, useState } from 'react';

// Анимирует число от 0 до target один раз, когда элемент попадает в видимую область.
export default function useCountUp(target, duration = 900) {
  const ref = useRef(null);
  const [value, setValue] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (
      !el ||
      matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) return;

    let raf;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            run();
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return [ref, value];
}
