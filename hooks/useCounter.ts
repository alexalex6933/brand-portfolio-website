"use client";

import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);
  const raf = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || target === 0) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            setCount(Math.round(easeOutCubic(p) * target));
            if (p < 1) raf.current = requestAnimationFrame(tick);
          };
          raf.current = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => { obs.disconnect(); cancelAnimationFrame(raf.current); };
  }, [target, duration]);

  return { count, ref };
}
