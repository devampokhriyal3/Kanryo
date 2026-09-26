"use client";

import { Logo } from "@/components/Logo";
import { useContact } from "@/components/ContactProvider";
import { brand, navLinks } from "@/lib/data";

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "X", href: "https://x.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export function Footer() {
  const { talk } = useContact();

  return (
    <footer className="border-t border-[var(--line)] bg-white pb-8 pt-16">
      <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            A technology partner that doesn&apos;t just build digital products — it helps businesses
            grow them.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Navigate</p>
          <ul className="mt-4 grid gap-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-underline text-sm text-ink">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button type="button" onClick={talk} className="link-underline text-sm text-ink">
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Social</p>
          <ul className="mt-4 grid gap-2">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="link-underline text-sm text-ink"
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Contact</p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>
              <a className="link-underline" href={`mailto:${brand.email}`}>
                {brand.email}
              </a>
            </li>
            <li>
              <a className="link-underline" href="tel:+14155550188">
                {brand.phone}
              </a>
            </li>
            <li className="text-muted">{brand.location}</li>
          </ul>
        </div>
      </div>
      <div className="container-page mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-6 text-xs text-muted">
        <p>© 2026 {brand.name}. All rights reserved.</p>
        <p>Demo website — sample metrics and testimonials.</p>
      </div>
    </footer>
  );
}
