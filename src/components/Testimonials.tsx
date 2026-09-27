"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const item = testimonials[index];

  return (
    <section className="section bg-white">
      <div className="container-page">
        <p className="eyebrow">Voices</p>
        <h2 className="display mt-4 text-[36px] sm:text-[48px]">People we&apos;ve built with.</h2>
        {/* <p className="mt-3 text-sm text-muted">Sample testimonials — swap in real quotes anytime.</p> */}

        <div className="mt-10 overflow-hidden rounded-[32px] border border-[var(--line)] bg-bg p-8 sm:p-12">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={item.name}
              initial={reduce ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: -16 }}
              transition={{ duration: 0.4 }}
            >
              <p className="max-w-3xl text-[22px] font-medium leading-snug tracking-[-0.03em] sm:text-[32px]">
                “{item.quote}”
              </p>
              <footer className="mt-8">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted">
                  {item.role}, {item.company}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show testimonial from ${t.name}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-10 bg-blue" : "w-4 bg-[#D9EEFF]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
