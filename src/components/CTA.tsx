"use client";

import { Arrow, Button } from "@/components/Button";
import { useContact } from "@/components/ContactProvider";

export function CTA() {
  const { talk } = useContact();

  return (
    <section id="contact" className="section pt-8">
      <div className="container-page">
        <div className="cta-wash relative overflow-hidden rounded-[36px] px-6 py-16 sm:px-12 sm:py-20">
          <div className="grain" />
          <div className="orb absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/70 blur-2xl" />
          <div className="float-c absolute -bottom-8 right-10 h-32 w-32 rounded-full bg-[#1677FF]/15 blur-xl" />
          <div className="relative max-w-2xl">
            <p className="eyebrow">Next</p>
            <h2 className="display mt-4 text-[42px] sm:text-[64px]">
              Ready to build
              <br />
              what&apos;s next?
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-7 text-muted">
              Tell us what you&apos;re building. We&apos;ll help turn it into a digital experience that
              performs.
            </p>
            <Button onClick={talk} className="mt-8">
              Start a Conversation <Arrow />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
