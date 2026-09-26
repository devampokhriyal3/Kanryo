import { clients } from "@/lib/data";

export function TrustedBy() {
  const row = [...clients, ...clients];

  return (
    <section className="border-y border-[var(--line)] bg-white py-10" aria-label="Trusted by">
      <div className="container-page">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          Trusted by teams building what&apos;s next
        </p>
      </div>
      <div className="marquee mt-7 overflow-hidden">
        <div className="marquee-track px-8">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 text-[22px] font-semibold tracking-[-0.05em] text-ink/25"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
