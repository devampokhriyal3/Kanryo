"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";
import { useReducedMotion } from "framer-motion";

function useCount(target: number, decimals = 0, start: boolean) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!start) return;
    if (reduce) {
      setValue(target);
      return;
    }
    const duration = 1400;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Number((target * eased).toFixed(decimals)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, decimals, reduce]);

  return value;
}

function Stat({
  value,
  suffix,
  label,
  decimals = 0,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  start: boolean;
}) {
  const n = useCount(value, decimals, start);
  return (
    <div className="border-[var(--line)] py-6 first:pt-0 last:pb-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0 sm:py-0">
      <p className="display text-[48px] text-blue-deep sm:text-[56px]">
        {decimals ? n.toFixed(decimals) : n}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

export function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStart(true);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section pt-0">
      <div className="container-page">
        <div
          ref={ref}
          className="rounded-[32px] border border-[var(--line)] bg-white px-8 py-10 sm:px-4"
        >
          <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            BUILT TO CREATE MEASURABLE IMPACT
          </p>
          <div className="grid divide-y sm:grid-cols-4 sm:divide-y-0">
            {stats.map((s) => (
              <Stat key={s.label} {...s} start={start} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
