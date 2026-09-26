"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Process() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const reduce = useReducedMotion();

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { threshold: 0.55 },
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const current = processSteps[active];

  return (
    <section id="process" className="section bg-white">
      <div className="container-page">
        <p className="eyebrow">Process</p>
        <h2 className="display mt-4 text-[36px] sm:text-[52px]">From idea to impact.</h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-blue">
              {current.id} — {current.title}
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="mt-4 text-[34px] font-semibold tracking-[-0.04em]">{current.title}</h3>
                <p className="mt-4 max-w-md text-[16px] leading-7 text-muted">{current.body}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 h-1 overflow-hidden rounded-full bg-ice">
              <div
                className="h-full rounded-full bg-blue transition-all duration-500"
                style={{ width: `${((active + 1) / processSteps.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-[19px] top-8 w-px bg-[var(--line)]" aria-hidden />
            <div
              className="absolute left-[19px] top-8 w-px origin-top bg-blue transition-all duration-500"
              style={{ height: `calc(${(active / (processSteps.length - 1)) * 100}% - 0px)` }}
              aria-hidden
            />
            <div className="grid gap-6">
              {processSteps.map((step, i) => (
                <div
                  key={step.id}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  className={cn(
                    "relative rounded-[24px] border p-6 pl-14 transition duration-300",
                    i === active
                      ? "border-[#1677FF]/30 bg-ice/70 shadow-[0_20px_50px_-32px_rgba(22,119,255,0.5)]"
                      : "border-[var(--line)] bg-bg/40",
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-3 top-7 grid h-7 w-7 place-items-center rounded-full border text-[11px] font-semibold",
                      i === active
                        ? "border-blue bg-blue text-white"
                        : "border-[var(--line)] bg-white text-muted",
                    )}
                  >
                    {step.id}
                  </span>
                  <h4 className="text-lg font-semibold tracking-[-0.03em]">{step.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-muted">{step.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
