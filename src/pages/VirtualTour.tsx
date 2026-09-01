import { Link } from 'react-router-dom';
import { Home, Eye } from 'lucide-react';
import TourEmbed from '@/components/TourEmbed';
import { siteConfig } from '@/data/site';

export default function VirtualTour() {
  return (
    <div className="flex min-h-[100svh] flex-col">
      {/* Compact header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="flex h-14 items-center justify-between px-4 sm:px-6">
          <Link
            to="/"
            className="flex items-center gap-2"
            aria-label={`${siteConfig.name} — Kembali ke Beranda`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Home className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-bold tracking-tight text-foreground">
              {siteConfig.name}
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Eye className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Virtual Tour</span>
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
