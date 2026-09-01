import { Eye, Volume2, Building2, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import { siteConfig } from '@/data/site';

/**
 * The About page deliberately separates THREE concepts:
 *   1. SAS Residence Sindangpalay  - the housing project (research object)
 *   2. PT SAS Amanah Sentosa       - the developer
 *   3. This Virtual Tour website   - a university research prototype / supporting
 *                                    interactive information medium (NOT the
 *                                    official SAS Residence corporate website)
 */
const sections = [
  {
    icon: Building2,
    title: `Tentang ${siteConfig.projectName}`,
    description: `${siteConfig.projectName} merupakan kawasan perumahan subsidi yang berlokasi di ${siteConfig.location} dan dikembangkan oleh ${siteConfig.developer}. Pengembang tergabung dalam ${siteConfig.association}.`,
  },
  {
    icon: GraduationCap,
    title: 'Tentang Website Ini',
    description:
      'Website ini adalah media informasi interaktif pendukung yang dikembangkan sebagai bagian dari penelitian di Institut Teknologi Garut. Website melengkapi kanal promosi resmi pengembang dan bukan situs korporat resmi SAS Residence.',
  },
  {
    icon: Eye,
    title: 'Virtual Tour 360°',
    description:
      'Produk utama penelitian adalah Virtual Tour berbasis web dengan panorama 360° sebagai media informasi dan promosi digital yang interaktif untuk mengenal lingkungan, akses, fasilitas kawasan, rumah contoh, dan tipe hunian. Tur diintegrasikan melalui platform 3DVista.',
  },
  {
    icon: Volume2,
    title: 'Integrasi Text-to-Speech',
    description:
      'Virtual Tour mengintegrasikan Text-to-Speech (speech synthesis / Web Speech API) untuk menyampaikan informasi hunian melalui audio, sehingga penyampaian informasi menjadi lebih komunikatif dan mudah dipahami.',
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang"
        title={`Tentang ${siteConfig.projectName}`}
        description="Mengenal kawasan perumahan subsidi SAS Residence Sindangpalay, pengembangnya, dan Virtual Tour sebagai media informasi interaktif dalam penelitian."
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
            <dl className="mt-5 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              <div className="flex gap-2">
                <dt className="font-semibold text-foreground">Peneliti:</dt>
                <dd className="text-muted-foreground">{siteConfig.research.researcher}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-foreground">Institusi:</dt>
                <dd className="text-muted-foreground">{siteConfig.research.institution}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-foreground">Tahun:</dt>
                <dd className="text-muted-foreground">{siteConfig.research.year}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-foreground">Objek penelitian:</dt>
                <dd className="text-muted-foreground">{siteConfig.projectName}</dd>
              </div>
            </dl>
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
