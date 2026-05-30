"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { useScrollState } from "@/components/hooks";

export default function Header() {
  const scrolled = useScrollState(24);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border-primary/10 bg-bg/85 shadow-[0_8px_30px_rgba(58,61,69,0.08)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="font-display text-lg uppercase tracking-[0.18em] text-primary"
        >
          {siteConfig.company.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-primary/70 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.cta.href}
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85 md:inline-flex"
        >
          {siteConfig.cta.primary}
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-primary md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-4 top-20 rounded-3xl border border-primary/10 bg-bg/95 p-6 shadow-xl backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-primary/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.cta.href}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-bg"
            >
              {siteConfig.cta.primary}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
