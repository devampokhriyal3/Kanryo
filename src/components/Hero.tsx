"use client";

import { Arrow, Button } from "@/components/Button";
import { HeroVisual } from "@/components/HeroVisual";
import { useContact } from "@/components/ContactProvider";
import { GlobeVisual } from "./GlobeVisual";

export function Hero() {
  const { talk } = useContact();

  return (
    <section className="hero-wash relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-8">
      <div className="grain" />
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow hero-in">Digital × Technology × Growth</p>
          <h1 className="display mt-5 text-[42px] text-ink hero-in hero-in-d1 sm:text-[64px] lg:text-[76px]">
            Software that ships.
            <br />
            <span className="text-blue-deep">Growth that sticks.</span>
          </h1>
          <p className="mt-6 max-w-md text-[16px] leading-7 text-muted hero-in hero-in-d2 sm:text-[17px]">
            We combine strategy, design, technology and marketing to help ambitious businesses
            launch, scale and grow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 hero-in hero-in-d3">
            <Button onClick={talk}>
              Start a Project <Arrow />
            </Button>
            <Button href="#work" variant="ghost">
              Explore Our Work
            </Button>
          </div>
        </div>
        <div className="relative hero-in hero-in-d2">
          <GlobeVisual/>
        </div>
      </div>
    </section>
  );
}
