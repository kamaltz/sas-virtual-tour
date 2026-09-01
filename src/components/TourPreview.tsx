import { Link } from 'react-router-dom';
import { Eye, ArrowRight } from 'lucide-react';

export default function TourPreview() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-foreground">
      {/* Subtle decorative gradient (no stock photography). */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground to-foreground/70" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 container-page py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-accent">Virtual Tour 360°</p>
          <h2 className="heading-2 mt-4 text-background">
            Jelajahi SAS Residence
            <br />
            Sindangpalay Secara 360°
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-background/75">
            Kenali lingkungan, akses, fasilitas kawasan, rumah contoh, dan tipe hunian
            melalui panorama 360° interaktif dengan narasi Text-to-Speech.
          </p>
          <div className="mt-8">
            <Link
              to="/virtual-tour"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Eye className="h-4 w-4" aria-hidden="true" />
              Buka Virtual Tour
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
