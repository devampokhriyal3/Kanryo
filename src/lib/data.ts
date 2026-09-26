export const brand = {
  name: "Kanryo",
  tagline: "Digital growth & software solutions",
  email: "hello@kanryo.studio",
  phone: "+1 (415) 555-0188",
  location: "San Francisco · Remote",
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#insights", label: "Insights" },
] as const;

export const clients = [
  "Aperture",
  "Northline",
  "Halcyon",
  "Fieldwork",
  "Lumen Pay",
  "Orbit Labs",
  "Kinetic",
  "Vivid Co.",
];

export const services = [
  {
    id: "01",
    category: "Marketing",
    title: "Demand that compounds",
    description:
      "Search, paid media, and content engineered as one growth system — not a pile of disconnected campaigns.",
    extra:
      "We measure what actually moves pipeline: qualified traffic, cost to acquire, and the quality of conversations that follow.",
    items: [
      "SEO",
      "Performance Marketing",
      "Google Ads",
      "Meta Ads",
      "Social Media",
      "Content Marketing",
      "Lead Generation",
      "Analytics",
    ],
  },
  {
    id: "02",
    category: "Technology",
    title: "Software that ships",
    description:
      "Web, SaaS, mobile, and automation built to launch quickly and evolve without rewriting the foundation.",
    extra:
      "Clean architecture, sensible APIs, and cloud that stays quiet until you need it to scale.",
    items: [
      "Web Development",
      "SaaS Development",
      "Mobile Apps",
      "Custom Software",
      "APIs",
      "Cloud Solutions",
      "Automation",
      "AI Solutions",
    ],
  },
  {
    id: "03",
    category: "Design",
    title: "Interfaces that convert",
    description:
      "Product and brand design with a job: make the next action obvious, and the experience feel inevitable.",
    extra:
      "From first impression to checkout, every screen is treated as a conversion surface — not decoration.",
    items: [
      "UI/UX",
      "Web Design",
      "Product Design",
      "Brand Identity",
      "Conversion Design",
    ],
  },
];

export const flowSteps = [
  "Strategy",
  "Design",
  "Technology",
  "Marketing",
  "Data",
  "Growth",
];

export const processSteps = [
  {
    id: "01",
    title: "Discover",
    summary: "We map the business, the market, and the constraints.",
    body: "Interviews, analytics, competitive pressure, and the product as it actually exists. No theatre. A shared picture of what’s true before anything is designed.",
  },
  {
    id: "02",
    title: "Strategize",
    summary: "We choose the few moves that will actually change the numbers.",
    body: "Positioning, funnel, architecture, and a sequenced plan. Marketing and product decisions are made together so the build and the demand engine point at the same outcome.",
  },
  {
    id: "03",
    title: "Design",
    summary: "We shape the experience people will trust and use.",
    body: "Systems, not screenshots. Information architecture, interface, and brand language that can survive a real backlog — and convert on day one.",
  },
  {
    id: "04",
    title: "Build",
    summary: "We engineer the product and the growth stack in parallel.",
    body: "Modern web, APIs, automation, and analytics instrumentation. The launch is not a surprise. Tracking, ads, and content start while the product is still in motion.",
  },
  {
    id: "05",
    title: "Launch",
    summary: "We put it in market with a plan, not a hope.",
    body: "Staging, QA, messaging, paid and organic ignition. A controlled release so the first customers meet a product that is ready to be found.",
  },
  {
    id: "06",
    title: "Optimize",
    summary: "We keep turning attention into durable growth.",
    body: "Weekly loops: creative, conversion, performance, and product. The work does not end at launch. That is when it starts earning.",
  },
];

export const caseStudies = [
  {
    project: "Northline",
    industry: "Retail commerce",
    services: "SEO · Web · Conversion",
    description:
      "Rebuilt a fragmented storefront into a search-led commerce system with faster paths to purchase.",
    metric: "+185%",
    metricLabel: "Organic traffic",
    note: "Sample / demo metric",
    visual: "shop" as const,
  },
  {
    project: "Halcyon Health",
    industry: "Health SaaS",
    services: "Product · Ads · Analytics",
    description:
      "Designed a clinical ops dashboard and a demand engine that attracted the right operators — not just more signups.",
    metric: "+72%",
    metricLabel: "Qualified leads",
    note: "Sample / demo metric",
    visual: "dashboard" as const,
  },
  {
    project: "Atlas Freight",
    industry: "Logistics",
    services: "Mobile · UX · Automation",
    description:
      "A driver-facing app and dispatch automation that made quoting, tracking, and booking feel like one product.",
    metric: "2.4×",
    metricLabel: "Conversion rate",
    note: "Sample / demo metric",
    visual: "mobile" as const,
  },
  {
    project: "Lumen Pay",
    industry: "Fintech",
    services: "SaaS · Paid · Brand",
    description:
      "Positioned a payments platform, rebuilt the onboarding flow, and lowered the cost of every new merchant.",
    metric: "−38%",
    metricLabel: "Acquisition cost",
    note: "Sample / demo metric",
    visual: "web" as const,
  },
];

export const stats = [
  { value: 50, suffix: "+", label: "Projects" },
  { value: 12, suffix: "+", label: "Industries" },
  { value: 3.2, suffix: "×", label: "Growth potential", decimals: 1 },
  { value: 95, suffix: "%", label: "Client satisfaction" },
];

export const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "AWS",
  "Shopify",
  "WordPress",
  "Figma",
  "Google Ads",
  "Meta Ads",
  "GA4",
  "HubSpot",
  "OpenAI",
];

export const pillars = [
  {
    title: "Strategy",
    body: "Choose the market, the offer, and the sequence. Everything else is decoration until this is sharp.",
  },
  {
    title: "Creative",
    body: "Make it felt. Brand, narrative, and interface that people remember long enough to act.",
  },
  {
    title: "Technology",
    body: "Ship software that stays out of the way — reliable, instrumented, and ready to grow.",
  },
  {
    title: "Growth",
    body: "Turn attention into pipeline. Then keep the loop running after the launch applause fades.",
  },
];

export const testimonials = [
  {
    quote:
      "They didn’t hand us a deck and disappear. Product, site, and acquisition actually talked to each other — and the numbers moved.",
    name: "Maya Chen",
    role: "Founder",
    company: "Halcyon Health",
  },
  {
    quote:
      "Most teams can build. Fewer can tell you what should be built, then make the market notice. Kanryo did both without the usual agency fog.",
    name: "Jonas Berg",
    role: "CPO",
    company: "Northline",
  },
  {
    quote:
      "We stopped juggling a design shop, a dev shop, and a media buyer. One team. One plan. The work got quieter and the results got louder.",
    name: "Priya Nair",
    role: "Head of Growth",
    company: "Lumen Pay",
  },
];

export const faqs = [
  {
    q: "What services do you provide?",
    a: "Strategy, product and brand design, custom software, and performance marketing — as one engagement. You do not have to assemble three agencies and hope they coordinate.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes. Early teams who need a product in market and a way to acquire the first real customers. We also work with later-stage companies replacing a patchwork of vendors.",
  },
  {
    q: "Can you build custom software?",
    a: "Yes. Web platforms, SaaS products, mobile apps, APIs, automation, and AI-assisted workflows. We build for the next two years, not a demo week.",
  },
  {
    q: "Do you provide ongoing marketing?",
    a: "Yes. Launch is a starting line. SEO, paid media, content, and conversion work continue as a growth retainer once the product is live.",
  },
  {
    q: "How long does a project take?",
    a: "Focused launches often land in 6–12 weeks. Larger platforms take a sequenced roadmap. We share a clear timeline after discovery — not a guess on the first call.",
  },
  {
    q: "How do you work with existing teams?",
    a: "As an embedded partner. We plug into your product, brand, and growth leads, keep the stack you already trust, and fill the gaps instead of replacing everyone.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "A short discovery, a joint plan, then a build-and-grow sprint. Weekly reviews. Shared dashboards. One owner on our side so you are never chasing five people for an answer.",
  },
];

export const insights = [
  {
    tag: "Growth systems",
    title: "Campaigns expire. Systems compound.",
    excerpt:
      "Why we treat acquisition, product, and analytics as one loop instead of three calendars.",
  },
  {
    tag: "Product",
    title: "Conversion is a design problem first.",
    excerpt:
      "The cheapest media buy is a clearer interface. Where we look before we spend.",
  },
  {
    tag: "Build",
    title: "Ship the instrumented version.",
    excerpt:
      "If you cannot see the funnel in week one, you are guessing in week twelve.",
  },
];
