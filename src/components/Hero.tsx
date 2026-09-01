import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';
import { siteConfig } from '@/data/site';

/**
 * Hero background.
 *
 * Official photo location: /public/images/sas-residence/hero.jpg
 * While no official photo exists, `HERO_IMAGE_AVAILABLE` stays false and the hero
 * uses a clean branded dark gradient panel — we do NOT surface an "image missing"
 * placeholder behind the headline. When the real photo is added, flip the flag.
 */
const HERO_IMAGE = '/images/sas-residence/hero.jpg';
const HERO_IMAGE_AVAILABLE = false;

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-foreground">
      {/* Background */}
      <div className="absolute inset-0">
        {HERO_IMAGE_AVAILABLE ? (
          <>
            <img
              src={HERO_IMAGE}
              alt="Lingkungan hunian SAS Residence Sindangpalay"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-[hsl(20_14%_20%)]" />
            <div className="absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="container-page relative z-10 py-28">
        <div className="max-w-2xl">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            {siteConfig.status} &middot; {siteConfig.tagline}
          </p>
          <h1
            className="animate-fade-up mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.1s' }}
          >
            Jelajahi Hunian
            <br />
            Secara Virtual
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/80"
            style={{ animationDelay: '0.2s' }}
          >
            Media informasi interaktif SAS Residence Sindangpalay — kenali lingkungan,
            akses, fasilitas, dan tipe hunian subsidi melalui Virtual Tour 360° dengan
            narasi Text-to-Speech.
          </p>
          <div
            className="animate-fade-up mt-9 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '0.3s' }}
          >
            <Link
              to="/virtual-tour"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Eye className="h-4 w-4" aria-hidden="true" />
              Mulai Virtual Tour
            </Link>
            <Link
              to="/tipe-rumah"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Lihat Tipe Rumah
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Scroll</span>
          <div className="h-10 w-px animate-pulse bg-white/40" />
        </div>
      </div>
    </section>
  );
}
