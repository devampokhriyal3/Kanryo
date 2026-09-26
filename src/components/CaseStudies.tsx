import { caseStudies } from "@/lib/data";
import { CaseVisual } from "@/components/CaseVisuals";
import { Reveal } from "@/components/Reveal";

export function CaseStudies() {
  return (
    <section id="work" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Selected work</p>
          <h2 className="display mt-4 max-w-3xl text-[36px] sm:text-[52px]">
            Work that moves the needle.
          </h2>
          <p className="mt-4 text-sm text-muted">
            Sample case studies and demo metrics — replace with live client results.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study, i) => (
            <Reveal key={study.project} delay={i * 0.06}>
              <article className="group overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-[#1677FF]/30 hover:shadow-[0_24px_60px_-36px_rgba(22,119,255,0.4)] sm:p-5">
                <div className="overflow-hidden rounded-[22px]">
                  <div className="transition duration-700 group-hover:scale-[1.04]">
                    <CaseVisual type={study.visual} />
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 px-1 pt-5">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">
                      {study.industry}
                    </p>
                    <h3 className="mt-1 text-[26px] font-semibold tracking-[-0.04em]">{study.project}</h3>
                    <p className="mt-1 text-xs font-medium text-muted">{study.services}</p>
                    <p className="mt-3 max-w-md text-sm leading-6 text-muted">{study.description}</p>
                  </div>
                  <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--line)] transition duration-300 group-hover:translate-x-1 group-hover:border-blue group-hover:bg-blue group-hover:text-white">
                    →
                  </span>
                </div>
                <div className="mt-5 flex items-end justify-between border-t border-[var(--line)] px-1 pt-4">
                  <div>
                    <p className="display text-[34px] text-blue-deep">{study.metric}</p>
                    <p className="text-xs font-medium text-muted">{study.metricLabel}</p>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-muted">{study.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
