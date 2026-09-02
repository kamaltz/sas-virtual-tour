import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '@/components/Logo';
import TourEmbed from '@/components/TourEmbed';
import { siteConfig } from '@/data/site';

export default function VirtualTour() {
  return (
    // Fixed-height, non-scrolling shell so the tour fills the whole viewport
    // below the compact header. h-screen is the fallback; h-[100dvh] wins where
    // supported (accounts for mobile browser chrome).
    <div className="flex h-screen h-[100dvh] flex-col overflow-hidden bg-foreground">
      {/* Compact header */}
      <header className="z-10 flex h-14 shrink-0 items-center justify-between gap-4 border-b border-border bg-background px-4 sm:px-6">
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
      </header>

      {/* Tour area — fills all remaining height */}
      <main className="flex min-h-0 flex-1 flex-col">
        <TourEmbed />
      </main>
    </div>
  );
}
