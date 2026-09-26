"use client";

import { flowSteps } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Differentiator() {
  return (
    <section id="solutions" className="section pt-0">
      <div className="container-page">
        <div className="overflow-hidden rounded-[32px] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff_0%,#EAF5FF_100%)] px-6 py-14 sm:px-12 lg:px-16">
          <Reveal>
            <p className="eyebrow">The Kanryo model</p>
            <h2 className="display mt-4 max-w-4xl text-[32px] sm:text-[48px] lg:text-[56px]">
              Marketing creates attention.
              <br />
              Technology turns it into growth.
            </h2>
            <p className="mt-5 max-w-xl text-[16px] leading-7 text-muted">
              Clients should not have to coordinate a design studio, a development shop, and a media
              buyer. One brief. One team. Every layer pointed at the same outcome.
            </p>
          </Reveal>

          <div className="mt-12 overflow-x-auto pb-2">
            <ol className="flex min-w-[720px] items-center justify-between gap-2">
              {flowSteps.map((step, i) => (
                <li key={step} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-[#1677FF]/25 bg-white text-xs font-semibold text-blue shadow-[0_0_0_6px_rgba(22,119,255,0.06)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-blue-deep">
                      {step}
                    </span>
                  </div>
                  {i < flowSteps.length - 1 ? (
                    <div className="mx-2 h-px flex-1 overflow-hidden bg-[#1677FF]/15">
                      <div className="h-full w-full origin-left animate-[pulse-line_2.8s_ease_infinite] bg-blue" />
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
