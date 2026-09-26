"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { faqs } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function FAQ() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="section bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="display mt-4 text-[36px] sm:text-[48px]">Straight answers.</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            If it is not here, ask. We would rather be precise than impressive.
          </p>
        </Reveal>
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="text-[16px] font-semibold tracking-[-0.02em]">{item.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--line)] text-lg">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-12 text-sm leading-6 text-muted">{item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
