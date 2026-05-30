import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { SocialLinks } from "@/components/social-icons";

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-primary/10 bg-bg-contrast/40">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="font-display text-lg uppercase tracking-[0.18em] text-primary">
              {siteConfig.company.name}
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-primary/60">
              {siteConfig.company.description}
            </p>
            <SocialLinks socials={siteConfig.socials} className="pt-2 text-primary/70" />
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/50">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-primary/70">
              {siteConfig.services.map((svc) => (
                <li key={svc.slug}>
                  <a href="#services" className="transition-colors hover:text-primary">
                    {svc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/50">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-primary/70">
              <li><a href="#about" className="transition-colors hover:text-primary">About</a></li>
              <li><a href="#cases" className="transition-colors hover:text-primary">Outcomes</a></li>
              <li><a href="#contact" className="transition-colors hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/50">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-primary/70">
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                <a href={`mailto:${siteConfig.company.email}`} className="transition-colors hover:text-primary">
                  {siteConfig.company.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                <a href={`tel:${siteConfig.company.phone.replace(/[^\d+]/g, "")}`} className="transition-colors hover:text-primary">
                  {siteConfig.company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-accent" />
                <span>{siteConfig.company.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-primary/10 pt-8 font-mono text-xs text-primary/40 md:flex-row">
          <div>© {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-primary/70">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-primary/70">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
