"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollCanvas from "@/components/ScrollCanvas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeUp, HeroScrollText, FilmGrain } from "@/components/motion";
import type { HeroChapter } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const { scrollHero } = siteConfig;

  return (
    <main className="relative bg-bg text-primary">
      <Header />

      {/* ── Scrub-cinematic hero ─────────────────────────────── */}
      <ScrollCanvas
        frameCount={scrollHero.frameCount}
        pattern={scrollHero.frameUrlTemplate}
        scrollDistance={scrollHero.scrollDistance}
        loadingLabel={siteConfig.company.name}
        loadingVariant="L3"
        onProgress={setProgress}
      >
        <FilmGrain opacity={0.04} />
        <HeroScrollText
          progress={progress}
          position="bottom-left"
          textColor="#FBFBFA"
          accentColor="#FBFBFA"
          chapters={siteConfig.heroChapters as unknown as HeroChapter[]}
        />
      </ScrollCanvas>

      {/* ── Services ─────────────────────────────────────────── */}
      <section id="services" className="scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              The platform
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              {siteConfig.servicesHeading}
            </h2>
          </FadeUp>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {siteConfig.services.map((svc, i) => (
              <FadeUp key={svc.slug} delay={i * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-primary/10 bg-bg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-xl tracking-tight">{svc.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-primary/70">{svc.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-primary/10 pt-5">
                      {svc.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-primary/70">
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mockup / control-room band ───────────────────────── */}
      <section className="px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl">
              <Image
                src={siteConfig.mockupImage}
                alt="City operations seen through one connected platform"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-xl p-8 md:p-12">
                <p className="font-display text-2xl leading-tight text-bg md:text-4xl">
                  One live picture of the city — shared across every department.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Outcomes / before-after ──────────────────────────── */}
      <section id="cases" className="scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              Outcomes
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              {siteConfig.casesHeading}
            </h2>
          </FadeUp>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {siteConfig.cases.map((c, i) => (
              <FadeUp key={c.slug} delay={i * 0.1}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-primary/10 bg-bg-contrast/40">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-bg/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      {c.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7 md:p-9">
                    <h3 className="font-display text-2xl leading-tight tracking-tight">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-primary/70">{c.summary}</p>

                    <div className="mt-7 grid grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-primary/10 bg-bg p-5">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/45">
                          {c.before.label}
                        </p>
                        <p className="mt-2 font-display text-3xl tracking-tight text-primary/55">{c.before.stat}</p>
                        <p className="mt-1 text-xs text-primary/55">{c.before.note}</p>
                      </div>
                      <div className="rounded-2xl border border-primary/20 bg-primary p-5 text-bg">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bg/60">
                          {c.after.label}
                        </p>
                        <p className="mt-2 font-display text-3xl tracking-tight">{c.after.stat}</p>
                        <p className="mt-1 text-xs text-bg/70">{c.after.note}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section id="about" className="scroll-mt-24 bg-bg-contrast/40 px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <FadeUp>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={siteConfig.aboutImage}
                alt="Modern civic architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">About Polis</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
                {siteConfig.aboutHeading}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-primary/70">{siteConfig.aboutStory}</p>

              <dl className="mt-10 space-y-6">
                {siteConfig.values.map((v) => (
                  <div key={v.title} className="border-l-2 border-accent pl-5">
                    <dt className="font-display text-lg tracking-tight">{v.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-primary/70">{v.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Contact / CTA ────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src={siteConfig.ctaImage}
              alt="City skyline at blue hour"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/75" />
            <div className="relative px-8 py-20 text-center md:px-12 md:py-28">
              <FadeUp>
                <h2 className="mx-auto max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-bg md:text-6xl">
                  {siteConfig.ctaBlock.heading}
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-bg/75 md:text-lg">
                  {siteConfig.ctaBlock.description}
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-bg px-7 py-3.5 text-sm font-medium text-primary transition-opacity hover:opacity-90"
                  >
                    {siteConfig.cta.primary}
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-bg/80 transition-colors hover:text-bg"
                  >
                    {siteConfig.company.email}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
