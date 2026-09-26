"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Arrow } from "@/components/Button";
import { useContact } from "@/components/ContactProvider";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Navbar() {
  const { talk } = useContact();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background,border,backdrop-filter] duration-300",
          scrolled || menu ? "nav-scrolled" : "bg-transparent",
        )}
      >
        <div className="container-page flex h-[72px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-[13.5px] font-medium text-ink/80 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={talk}
              className="group hidden items-center gap-2 rounded-full bg-blue px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-[#0f6aee] sm:inline-flex"
            >
              Let&apos;s Talk <Arrow />
            </button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-white/70 lg:hidden"
              aria-label={menu ? "Close menu" : "Open menu"}
              aria-expanded={menu}
              onClick={() => setMenu((v) => !v)}
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={cn(
                    "absolute left-0 h-px w-4 bg-ink transition-all duration-300",
                    menu ? "top-1.5 rotate-45" : "top-0.5",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1.5 h-px w-4 bg-ink transition-opacity duration-300",
                    menu && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-px w-4 bg-ink transition-all duration-300",
                    menu ? "top-1.5 -rotate-45" : "top-2.5",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menu ? (
          <motion.div
            className="fixed inset-0 z-40 bg-[#F7FAFC] lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-24">
              <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Mobile">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenu(false)}
                    className="display text-[42px] text-ink"
                    initial={reduce ? false : { y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i, duration: 0.45 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <button
                type="button"
                onClick={() => {
                  setMenu(false);
                  talk();
                }}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-blue py-4 text-base font-semibold text-white"
              >
                Let&apos;s Talk <Arrow />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
