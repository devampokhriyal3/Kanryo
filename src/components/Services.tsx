import { services } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <article className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[28px] border border-[var(--line)] bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-[#1677FF]/35 hover:shadow-[0_24px_60px_-36px_rgba(22,119,255,0.45)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1677FF] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ice opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
      <div className="flex items-start justify-between">
        <span className="text-xs font-semibold tracking-[0.16em] text-muted">{service.id}</span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">
          {service.category}
        </span>
      </div>
      <h3 className="mt-10 text-[28px] font-semibold leading-tight tracking-[-0.04em]">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
      <p className="mt-3 max-h-0 overflow-hidden text-sm leading-6 text-blue-deep opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
        {service.extra}
      </p>
      <ul className="mt-6 flex flex-wrap gap-1.5">
        {service.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-[var(--line)] bg-bg px-2.5 py-1 text-[11px] font-medium text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between pt-8">
        <span className="text-xs font-semibold text-ink/50">0{index + 1} / 03</span>
        <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-lg transition duration-300 group-hover:translate-x-1 group-hover:border-blue group-hover:bg-blue group-hover:text-white">
          →
        </span>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h2 className="display mt-4 max-w-3xl text-[36px] sm:text-[52px]">
            Everything you need to build, launch and grow.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
