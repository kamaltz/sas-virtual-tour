import { MapPin, Building, GraduationCap, Stethoscope, Landmark, Store, Bus } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { siteConfig } from '@/data/site';

/**
 * Nearby-services list.
 *
 * The starter's travel-time claims ("±5 menit ke Jalan Raya Karangpawitan",
 * "±15 menit ke pusat kota Garut", "±10 menit ke stasiun terdekat") and the
 * accompanying station reference were not backed by any verifiable source, so
 * they have been removed pending validation.
 *
 * Descriptions below are qualitative. Add a measured distance/time only after it
 * has been verified (map measurement or official brochure).
 */
const nearbyPlaces = [
  {
    icon: Stethoscope,
    label: 'Fasilitas Kesehatan',
    value: 'Akses menuju Puskesmas Karangpawitan dan layanan kesehatan di sekitar kecamatan.',
  },
  {
    icon: GraduationCap,
    label: 'Fasilitas Pendidikan',
    value: 'Terdapat akses menuju sekolah di sekitar kawasan Karangpawitan.',
  },
  {
    icon: Store,
    label: 'Perdagangan & Pasar',
    value: 'Akses menuju pasar dan area perdagangan di sekitar Karangpawitan.',
  },
  {
    icon: Landmark,
    label: 'Tempat Ibadah',
    value: 'Tersedia tempat ibadah di sekitar kawasan.',
  },
  {
    icon: Bus,
    label: 'Transportasi Umum',
    value: 'Kawasan terhubung dengan jalur transportasi umum di sekitar Karangpawitan.',
  },
];

export default function Location() {
  return (
    <>
      <PageHeader
        eyebrow="Lokasi"
        title="Lokasi Kawasan"
        description={`${siteConfig.projectName} berada di ${siteConfig.location}, dengan akses menuju berbagai fasilitas umum di sekitar Karangpawitan.`}
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
                    {siteConfig.projectName}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {siteConfig.location}
                  </p>
                  <p className="mt-4 max-w-xs text-xs text-muted-foreground/70">
                    Peta Google Maps akan ditampilkan di area ini setelah URL embed
                    yang terverifikasi dikonfigurasi pada file konfigurasi situs.
                  </p>
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="heading-3">Lokasi Proyek</h2>
              <div className="mt-4 flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-medium text-foreground">{siteConfig.projectName}</p>
                  <p className="text-muted-foreground">{siteConfig.location}</p>
                </div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground/70">
                ID proyek (SiKumbang): {siteConfig.projectId}
              </p>

              <h2 className="heading-3 mt-10">Alamat Pemasaran</h2>
              <div className="mt-4 flex items-start gap-3">
                <Building className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <p className="text-muted-foreground">{siteConfig.marketingAddress}</p>
              </div>
              <p className="mt-2 text-xs text-muted-foreground/70">
                Alamat pemasaran/kontak ini belum tentu sama dengan titik lokasi fisik
                kawasan. Konfirmasikan titik lokasi proyek kepada pihak pemasaran SAS
                Residence.
              </p>

              <h2 className="heading-3 mt-10">Akses Sekitar</h2>
              <p className="mt-4 text-muted-foreground">
                Informasi berikut bersifat kualitatif. Jarak dan waktu tempuh belum
                diukur / diverifikasi — konfirmasikan kepada pihak pemasaran SAS
                Residence untuk data yang lebih pasti.
              </p>

              <ul className="mt-6 space-y-4">
                {nearbyPlaces.map((point) => (
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
