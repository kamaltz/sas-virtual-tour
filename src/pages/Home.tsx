import { Link } from 'react-router-dom';
import { Eye, Info, Volume2, ArrowRight, MapPin } from 'lucide-react';
import Hero from '@/components/Hero';
import HouseCard from '@/components/HouseCard';
import FacilityCard from '@/components/FacilityCard';
import TourPreview from '@/components/TourPreview';
import WhatsAppButton from '@/components/WhatsAppButton';
import { houses } from '@/data/houses';
import { facilities } from '@/data/facilities';
import { siteConfig } from '@/data/site';

const benefits = [
  {
    icon: Eye,
    title: 'Eksplorasi 360°',
    description: 'Jelajahi setiap sudut hunian dan lingkungan secara bebas dengan tampilan panorama 360°.',
  },
  {
    icon: Info,
    title: 'Informasi Interaktif',
    description: 'Akses informasi detail tentang tipe rumah, fasilitas, dan lokasi dalam satu portal.',
  },
  {
    icon: Volume2,
    title: 'Narasi Text-to-Speech',
    description: 'Dengarkan penjelasan otomatis melalui integrasi Text-to-Speech di dalam Virtual Tour.',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">Pengenalan</p>
            <h2 className="heading-2 mt-4">Pengalaman Baru Menjelajahi Hunian</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Website ini merupakan media informasi interaktif pendukung untuk{' '}
              {siteConfig.projectName}, perumahan subsidi yang dikembangkan oleh{' '}
              {siteConfig.developer}. Melalui Virtual Tour 360° dengan narasi
              Text-to-Speech, pengunjung dapat mengenal lingkungan, akses, fasilitas
              kawasan, dan tipe hunian sebelum mengunjungi lokasi secara langsung.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="border-l-2 border-accent/30 pl-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-accent">
                  <b.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House Types */}
      <section className="section-padding bg-secondary/40">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Tipe Hunian</p>
              <h2 className="heading-2 mt-4">Tipe Hunian Subsidi</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Kenali tipe hunian subsidi SAS Residence Sindangpalay beserta informasi
                luas bangunan, luas tanah, spesifikasi dasar, dan pembiayaan yang
                tersedia.
              </p>
            </div>
            <Link
              to="/tipe-rumah"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
            >
              Lihat Detail Tipe
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div
            className={
              houses.length === 1
                ? 'mt-12 max-w-md'
                : 'mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3'
            }
          >
            {houses.map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Feature */}
      <section className="section-padding">
        <div className="container-page">
          <TourPreview />
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-secondary/40">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Kawasan</p>
              <h2 className="heading-2 mt-4">Informasi Kawasan</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Kategori informasi lingkungan dan infrastruktur kawasan yang disajikan
                dalam Virtual Tour, seperti akses masuk, jalan lingkungan, drainase,
                utilitas, ruang terbuka, dan rumah contoh.
              </p>
            </div>
            <Link
              to="/fasilitas"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
            >
              Lihat Semua
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Lokasi</p>
              <h2 className="heading-2 mt-4">Lokasi Kawasan</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {siteConfig.projectName} berada di {siteConfig.location}. Di sekitar
                kawasan terdapat akses menuju fasilitas pendidikan, kesehatan, tempat
                ibadah, serta layanan umum lainnya.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-foreground">{siteConfig.name}</p>
                    <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/lokasi"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                >
                  Lihat Detail Lokasi
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-secondary">
              {siteConfig.mapEmbedUrl ? (
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  title={`Peta lokasi ${siteConfig.name}`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <MapPin className="h-10 w-10 text-accent" aria-hidden="true" />
                  <p className="mt-4 text-sm font-medium text-foreground">
                    {siteConfig.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {siteConfig.location}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground/70">
                    Google Maps akan ditampilkan di area ini setelah URL embed dikonfigurasi.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-page text-center">
          <h2 className="heading-2 text-background">Temukan Hunian yang Tepat</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-background/75">
            Jelajahi secara virtual atau hubungi pihak pemasaran untuk mendapatkan
            informasi lebih lanjut.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/virtual-tour"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Eye className="h-4 w-4" aria-hidden="true" />
              Jelajahi Virtual Tour
            </Link>
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </>
  );
}
