import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Services } from "@/components/Services";
import { Differentiator } from "@/components/Differentiator";
import { Process } from "@/components/Process";
import { CaseStudies } from "@/components/CaseStudies";
import { Results } from "@/components/Results";
import { Technology } from "@/components/Technology";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Insights } from "@/components/Insights";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <Navbar />
      <main id="main">
        <Hero />
        <TrustedBy />
        <Services />
        <Differentiator />
        <Process />
        <CaseStudies />
        <Results />
        <Technology />
        <About />
        <Testimonials />
        <Insights />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
