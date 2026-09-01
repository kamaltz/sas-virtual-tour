import { Link } from 'react-router-dom';
import { Instagram, Globe, MapPin, Phone, Mail } from 'lucide-react';
import Logo from '@/components/Logo';
import { navLinks, siteConfig } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Logo className="h-10" tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-background/70">
            {siteConfig.description}
          </p>
          <ul className="mt-5 space-y-1.5 text-xs text-background/60">
            <li>Pengembang: {siteConfig.developer}</li>
            <li>Anggota {siteConfig.association} · {siteConfig.status}</li>
          </ul>
          <div className="mt-5 flex gap-3">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @sasresidence"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-background/10 text-background/80 transition-colors hover:bg-background/20 hover:text-background"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
            <a
              href={siteConfig.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Situs resmi SAS Residence"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-background/10 text-background/80 transition-colors hover:bg-background/20 hover:text-background"
            >
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Navigasi footer">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-background">
            Navigasi
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-background">
            Kontak Pemasaran
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-background/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-background/50" aria-hidden="true" />
              <div>
                <p>{siteConfig.marketingAddress}</p>
                <p className="mt-1 text-xs text-background/40">
                  Alamat pemasaran — lokasi proyek: {siteConfig.location}
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-background/50" aria-hidden="true" />
              <a href={`tel:${siteConfig.whatsapp}`} className="transition-colors hover:text-background">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-background/50" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="break-all transition-colors hover:text-background">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-background/50" aria-hidden="true" />
              <a
                href={siteConfig.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-background"
              >
                www.sasresidence.com
              </a>
            </li>
          </ul>
        </div>

        {/* Research info */}
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-background">
            Penelitian
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-background/70">
            {siteConfig.research.title}
          </p>
          <p className="mt-3 text-xs text-background/50">
            {siteConfig.research.researcher} · {siteConfig.research.institution} · {siteConfig.research.year}
          </p>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-background/50 sm:flex-row">
          <p>
            Virtual Tour {siteConfig.projectName} — media informasi interaktif dalam
            penelitian {siteConfig.research.institution}.
          </p>
          <p>&copy; {year} · Virtual Tour 360° &middot; Integrasi Text-to-Speech</p>
        </div>
      </div>
    </footer>
  );
}
