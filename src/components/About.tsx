import { pillars } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="eyebrow">Studio</p>
          <h2 className="display mt-4 text-[34px] sm:text-[50px]">
            A creative studio.
            <br />
            A technology team.
            <br />
            A growth partner.
          </h2>
          <p className="mt-6 max-w-lg text-[16px] leading-7 text-muted">
            Kanryo exists for companies that are tired of splitting product and acquisition into
            separate rooms. We build the thing. Then we help the market find it — and keep finding
            it.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="border-t border-[var(--line)] pt-4">
                <h3 className="text-lg font-semibold tracking-[-0.03em]">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-8 rounded-full border border-[#1677FF]/15" />
            <div className="absolute inset-16 rounded-full border border-[#1677FF]/20" />
            <div className="absolute inset-[38%] rounded-full bg-blue shadow-[0_0_80px_rgba(22,119,255,0.35)]" />
            <div className="orb absolute left-[12%] top-[18%] h-24 w-24 rounded-full bg-gradient-to-br from-white to-mist" />
            <div className="float-c absolute bottom-[16%] right-[10%] h-16 w-16 rounded-[22px] border border-white/80 bg-white/80" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" aria-hidden>
              <circle cx="200" cy="70" r="5" fill="#1677FF" />
              <circle cx="330" cy="200" r="4" fill="#0B3B78" />
              <circle cx="80" cy="250" r="4" fill="#1677FF" />
              <path d="M200 70 C 260 110, 300 160, 330 200" stroke="#1677FF" strokeOpacity="0.25" fill="none" />
              <path d="M80 250 C 120 210, 160 200, 200 200" stroke="#1677FF" strokeOpacity="0.25" fill="none" />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
