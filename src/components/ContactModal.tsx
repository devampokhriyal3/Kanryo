"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useContact } from "@/components/ContactProvider";
import { Button, Arrow } from "@/components/Button";
import { brand } from "@/lib/data";

export function ContactModal() {
  const { open, close } = useContact();
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSending(true);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mppwjero", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSent(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-end p-3 sm:place-items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#101828]/35 backdrop-blur-[2px]"
            aria-label="Close dialog"
            onClick={() => {
              close();
              setSent(false);
              setError(false);
            }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="talk-title"
            className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-6 shadow-[0_30px_80px_-40px_rgba(11,59,120,0.45)] sm:p-8"
            initial={reduce ? false : { y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: 16, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="eyebrow">Start a conversation</p>

            <h2
              id="talk-title"
              className="mt-3 text-3xl font-semibold tracking-[-0.04em]"
            >
              Tell us what you&apos;re building.
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
              We usually reply within one business day.
            </p>

            {sent ? (
              <p className="mt-8 rounded-2xl bg-ice px-4 py-5 text-sm leading-6 text-blue-deep">
                Received. Thanks for reaching out. We&apos;ll get back to you
                soon.
                <br />
                <a
                  className="mt-2 inline-block font-semibold underline"
                  href={`mailto:${brand.email}`}
                >
                  {brand.email}
                </a>
              </p>
            ) : (
              <form
                className="mt-7 grid gap-3"
                onSubmit={onSubmit}
              >
                <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Name

                  <input
                    required
                    name="name"
                    className="rounded-2xl border border-[var(--line)] bg-bg px-4 py-3 text-sm font-medium text-ink outline-none transition focus:border-blue"
                  />
                </label>

                <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Email

                  <input
                    required
                    type="email"
                    name="email"
                    className="rounded-2xl border border-[var(--line)] bg-bg px-4 py-3 text-sm font-medium text-ink outline-none transition focus:border-blue"
                  />
                </label>

                <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  What are you building?

                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="resize-none rounded-2xl border border-[var(--line)] bg-bg px-4 py-3 text-sm font-medium text-ink outline-none transition focus:border-blue"
                  />
                </label>

                {error && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}

                <Button
                  type="submit"
                  className="mt-2 w-full"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send"} <Arrow />
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}