import { Link } from 'react-router-dom';
import { Eye, ArrowRight } from 'lucide-react';

const previewImage =
  'https://images.pexels.com/photos/8146330/pexels-photo-8146330.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1000&fit=crop';

export default function TourPreview() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-foreground">
      <div className="absolute inset-0">
        <img
          src={previewImage}
          alt="Interior ruang modern yang terang dengan lantai kayu dan jendela besar"
          loading="lazy"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/30" />
      </div>

      <div className="relative z-10 container-page py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-accent">Virtual Tour 360°</p>
          <h2 className="heading-2 mt-4 text-background">
            Jelajahi Perumahan
            <br />
            Secara 360°
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-background/75">
            Jelajahi lingkungan, fasilitas, dan hunian melalui pengalaman panorama
            360° interaktif.
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
