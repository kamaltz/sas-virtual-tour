import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '@/components/Logo';
import TourEmbed from '@/components/TourEmbed';
import { siteConfig } from '@/data/site';

export default function VirtualTour() {
  return (
    <div className="flex min-h-[100svh] flex-col">
      {/* Compact header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="flex h-14 items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            to="/"
            className="flex items-center"
            aria-label={`${siteConfig.name} — Kembali ke Beranda`}
          >
            <Logo className="h-7" tone="dark" withTagline={false} />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Kembali ke Beranda</span>
          </Link>
        </div>
      </header>

      {/* Tour area — maximized */}
      <main className="flex flex-1 flex-col">
        <div className="flex-1">
          <TourEmbed />
        </div>
      </main>
    </div>
  );
}
