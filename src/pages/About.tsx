import { Eye, Volume2, Info, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import { siteConfig } from '@/data/site';

const sections = [
  {
    icon: Home,
    title: `Tentang ${siteConfig.name}`,
    description: `${siteConfig.name} adalah perumahan yang berlokasi di Karangpawitan, Garut, yang menawarkan hunian modern dengan lingkungan yang nyaman dan strategis.`,
  },
  {
    icon: Info,
    title: 'Tujuan Website',
    description:
      'Website ini dikembangkan sebagai portal informasi interaktif yang mempermudah calon penghuni untuk mengenal perumahan sebelum mengunjungi lokasi secara langsung.',
  },
  {
    icon: Eye,
    title: 'Teknologi Virtual Tour',
    description:
      'Virtual Tour 360° memungkinkan pengunjung menjelajahi lingkungan, fasilitas, dan hunian secara digital dengan tampilan panorama yang interaktif menggunakan platform 3DVista.',
  },
  {
    icon: Volume2,
    title: 'Text-to-Speech',
    description:
      'Integrasi Text-to-Speech di dalam Virtual Tour memberikan narasi audio otomatis yang menjelaskan informasi setiap titik, sehingga pengalaman eksplorasi menjadi lebih informatif dan inklusif.',
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang"
        title={`Tentang ${siteConfig.name}`}
        description="Portal informasi interaktif yang menghadirkan pengalaman menjelajahi hunian secara digital."
      />

      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-border bg-card p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-accent">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* Research info */}
          <div className="mt-12 rounded-lg bg-secondary/40 p-8 md:p-12">
            <p className="eyebrow">Informasi Proyek Penelitian</p>
            <h2 className="heading-3 mt-4">Penelitian &amp; Pengembangan</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              {siteConfig.research.title}
            </p>
            <p className="mt-3 text-sm text-muted-foreground/70">
              {siteConfig.research.institution} &middot; {siteConfig.research.year}
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/virtual-tour"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Eye className="h-4 w-4" aria-hidden="true" />
              Mulai Virtual Tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
