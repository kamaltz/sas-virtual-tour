import { MapPin, Navigation, Car, Clock } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { siteConfig } from '@/data/site';

const accessPoints = [
  { icon: Car, label: 'Akses Jalan Utama', value: '±5 menit ke Jalan Raya Karangpawitan' },
  { icon: Navigation, label: 'Pusat Kota Garut', value: '±15 menit ke pusat kota Garut' },
  { icon: Clock, label: 'Stasiun Karangpawitan', value: '±10 menit ke stasiun terdekat' },
];

export default function Location() {
  return (
    <>
      <PageHeader
        eyebrow="Lokasi"
        title="Lokasi Strategis"
        description="Perumahan SAS berlokasi di Karangpawitan, Garut — area yang berkembang dengan akses mudah ke berbagai fasilitas umum."
      />

      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Map */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-secondary lg:sticky lg:top-24">
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
                  <MapPin className="h-12 w-12 text-accent" aria-hidden="true" />
                  <p className="mt-4 font-display text-lg font-semibold text-foreground">
                    {siteConfig.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {siteConfig.location}
                  </p>
                  <p className="mt-4 max-w-xs text-xs text-muted-foreground/70">
                    Google Maps akan ditampilkan di area ini setelah URL embed
                    dikonfigurasi di file konfigurasi situs.
                  </p>
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="heading-3">Alamat</h2>
              <div className="mt-4 flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <p className="text-muted-foreground">{siteConfig.address}</p>
              </div>

              <h2 className="heading-3 mt-10">Akses Sekitar</h2>
              <p className="mt-4 text-muted-foreground">
                Lokasi {siteConfig.name} memberikan kemudahan akses ke berbagai
                fasilitas umum dan transportasi di sekitar Karangpawitan, Garut.
              </p>

              <ul className="mt-6 space-y-4">
                {accessPoints.map((point) => (
                  <li
                    key={point.label}
                    className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary text-accent">
                      <point.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{point.label}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{point.value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Tertarik untuk Mengunjungi?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Hubungi pihak pemasaran untuk mendapatkan informasi lebih lanjut
                  atau menjadwalkan kunjungan langsung ke lokasi.
                </p>
                <div className="mt-5">
                  <WhatsAppButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
