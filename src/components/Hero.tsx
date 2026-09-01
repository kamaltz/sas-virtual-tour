import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Rumah modern dengan jendela panorama dan halaman hijau di Perumahan SAS"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-page relative z-10 py-28">
        <div className="max-w-2xl">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            Perumahan SAS &middot; Karangpawitan, Garut
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
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/85"
            style={{ animationDelay: '0.2s' }}
          >
            Temukan lingkungan dan hunian Perumahan SAS melalui pengalaman Virtual
            Tour 360° yang interaktif dan informatif.
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
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Lihat Tipe Rumah
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Scroll</span>
          <div className="h-10 w-px animate-pulse bg-white/40" />
        </div>
      </div>
    </section>
  );
}
