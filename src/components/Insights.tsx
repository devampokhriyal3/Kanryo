import { insights } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Insights() {
  return (
    <section id="insights" className="section pt-0">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Insights</p>
          <h2 className="display mt-4 text-[36px] sm:text-[48px]">Notes from the work.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {insights.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col rounded-[24px] border border-[var(--line)] bg-white p-6 transition hover:-translate-y-1 hover:border-[#1677FF]/30">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">
                  {post.tag}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em]">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{post.excerpt}</p>
                <span className="mt-6 text-sm font-semibold text-ink transition group-hover:text-blue">
                  Read <span className="inline-block transition group-hover:translate-x-1">→</span>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
