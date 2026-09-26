import { technologies } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Technology() {
  return (
    <section id="technology" className="section bg-white">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Stack</p>
          <h2 className="display mt-4 text-[36px] sm:text-[52px]">Built for what&apos;s next.</h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-muted">
            We pick tools that last in production — not the ones that look clever in a pitch.
          </p>
        </Reveal>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {technologies.map((tech, i) => (
            <span
              key={tech}
              className="float-b rounded-full border border-[var(--line)] bg-bg px-5 py-2.5 text-sm font-semibold tracking-[-0.02em] text-ink/80"
              style={{ animationDelay: `${i * 0.18}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
