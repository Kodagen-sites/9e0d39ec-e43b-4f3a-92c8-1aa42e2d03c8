// ============================================================
// site-config.ts — single source of truth for all copy + brand
// ============================================================

import manifest from "./asset-manifest.json";
import frames from "./frames-manifest.json";

const img = (slot: string): string => (manifest.images as Record<string, string>)[slot] ?? "";

export const siteConfig = {
  company: {
    name: "Polis",
    tagline: "The operating system for cities",
    description:
      "Polis is the unified platform cities run on — mobility, utilities, and civic services on one connected layer, so public infrastructure works as one system.",
    email: "sales@polis.city",
    phone: "+1 (415) 555-0142",
    location: "Cities everywhere",
  },

  brand: {
    primary: "#3A3D45",
    accent: "#9CA0A8",
    bg: "#FBFBFA",
  },

  seo: {
    siteUrl: "https://polis.city",
    locale: "en_US",
    htmlLang: "en",
    defaultTitle: "Polis — The operating system for cities",
    defaultDescription:
      "One connected platform for mobility, utilities, and civic services. Polis gives cities a single operating layer for the infrastructure millions depend on.",
    ogImage: img("og-image"),
    noindexPaths: ["/admin", "/api"],
  },

  socials: {
    linkedin: "https://www.linkedin.com/company/polis-city",
    x: "https://x.com/polis_city",
    youtube: "https://www.youtube.com/@polis-city",
  },

  nav: [
    { href: "#services", label: "Platform" },
    { href: "#cases", label: "Outcomes" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ],

  cta: {
    primary: "Contact sales",
    href: "#contact",
  },

  // -- Hero scroll chapters (over the scrubbing aerial) ----------
  heroChapters: [
    {
      at: 0,
      eyebrow: "Smart city platform",
      headlineLines: ["The operating", "system", "for cities"],
      subline:
        "Mobility, utilities, and civic services on one connected layer — so the infrastructure millions depend on runs as a single system.",
    },
    {
      at: 0.4,
      eyebrow: "One platform",
      headlineLines: ["Every service,", "one", "live picture"],
      subline:
        "Replace disconnected systems with a shared operational layer your departments actually share.",
    },
    {
      at: 0.75,
      eyebrow: "Built for scale",
      headlineLines: ["From corridor", "to", "the whole city"],
      subline:
        "Deploy one service, then connect the rest — without ripping out what already works.",
    },
  ],

  // -- Platform services -----------------------------------------
  servicesHeading: "One platform, three connected services",
  services: [
    {
      slug: "mobility",
      name: "Polis Mobility",
      image: img("service-mobility"),
      description:
        "Adaptive traffic, transit, and curb management on a single signal layer — see and shape how the whole city moves in real time.",
      highlights: ["Adaptive signal control", "Transit & curb coordination", "Incident detection"],
    },
    {
      slug: "grid",
      name: "Polis Grid",
      image: img("service-grid"),
      description:
        "Water and power utilities, instrumented end to end — detect loss, predict demand, and dispatch crews from one operations console.",
      highlights: ["Leak & loss detection", "Demand forecasting", "Outage coordination"],
    },
    {
      slug: "civic",
      name: "Polis Civic",
      image: img("service-civic"),
      description:
        "Permits, requests, and resident services in one front door — fewer queues, faster resolution, and a clear record for every interaction.",
      highlights: ["Unified service requests", "Permit workflows", "Resident self-service"],
    },
  ],

  // -- Before / after outcomes -----------------------------------
  casesHeading: "Proof in the field",
  cases: [
    {
      slug: "mobility",
      tag: "Mobility",
      image: img("case-mobility"),
      title: "A congested arterial, re-timed",
      before: { label: "Before Polis", stat: "31 min", note: "avg. peak-hour corridor time" },
      after: { label: "With Polis", stat: "22 min", note: "after adaptive signal rollout" },
      summary:
        "A mid-sized city connected its busiest arterial to Polis Mobility. Adaptive timing cut peak transit by nearly a third without new road.",
    },
    {
      slug: "grid",
      tag: "Utilities",
      image: img("case-grid"),
      title: "Treated water that stops leaking away",
      before: { label: "Before Polis", stat: "24%", note: "non-revenue water lost" },
      after: { label: "With Polis", stat: "11%", note: "after one year on Polis Grid" },
      summary:
        "Instrumenting the distribution network surfaced silent losses. Crews fixed what the data found — recovering millions of gallons a month.",
    },
  ],

  // -- About -----------------------------------------------------
  aboutHeading: "Cities deserve one system, not forty",
  aboutImage: img("section-about"),
  aboutStory:
    "Most cities run on decades of disconnected software — one vendor for traffic, another for water, a third for permits, none of them talking. Polis replaces that patchwork with a single operating layer. Departments share one live picture of the city, decisions are made on the same data, and residents feel the difference in services that simply work.",
  values: [
    { title: "One connected layer", description: "Mobility, utilities, and civic services share a single source of truth — no more reconciling four dashboards." },
    { title: "Deploy without rip-and-replace", description: "Start with one service and connect the rest on your timeline. Polis works alongside what you already run." },
    { title: "Built for public accountability", description: "Every action is logged and auditable, so cities can show residents exactly how decisions get made." },
  ],

  mockupImage: img("section-mockup"),

  // -- CTA -------------------------------------------------------
  ctaImage: img("section-cta"),
  ctaBlock: {
    heading: "Bring your city onto one platform",
    description:
      "Tell us where your city feels the friction — mobility, utilities, or civic services — and we'll map what Polis would connect first.",
  },

  // -- Cinematic config ------------------------------------------
  scrollHero: {
    archetype: "G" as const,
    assetMode: "live-generate" as const,
    frameCount: frames.frameCount,
    frameUrlTemplate: frames.frameUrlTemplate,
    scrollDistance: 6,
  },
} as const;

export type SiteConfig = typeof siteConfig;
