import { Link } from 'react-router-dom';
import { Home, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { navLinks, siteConfig } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-background text-foreground">
              <Home className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold">{siteConfig.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex gap-3">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-background/10 text-background/80 transition-colors hover:bg-background/20 hover:text-background"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-background/10 text-background/80 transition-colors hover:bg-background/20 hover:text-background"
              >
                <Facebook className="h-4 w-4" />
              </a>
            )}
            {siteConfig.social.youtube && (
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-background/10 text-background/80 transition-colors hover:bg-background/20 hover:text-background"
              >
                <Youtube className="h-4 w-4" />
              </a>
            )}
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
            Kontak
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-background/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-background/50" aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-background/50" aria-hidden="true" />
              <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-background">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-background/50" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-background">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Research info */}
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-background">
            Informasi Proyek
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-background/70">
            {siteConfig.research.title}
          </p>
          <p className="mt-3 text-xs text-background/50">
            {siteConfig.research.institution} — {siteConfig.research.year}
          </p>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-background/50 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. Seluruh hak cipta dilindungi.
          </p>
          <p>Virtual Tour 360° &middot; Text-to-Speech Integration</p>
        </div>
      </div>
    </footer>
  );
}
