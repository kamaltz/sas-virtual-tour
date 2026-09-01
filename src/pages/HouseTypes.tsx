import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import HouseCard from '@/components/HouseCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { houses } from '@/data/houses';
import { siteConfig } from '@/data/site';

export default function HouseTypes() {
  return (
    <>
      <PageHeader
        eyebrow="Tipe Hunian"
        title="Tipe Hunian Subsidi"
        description={`Kenali tipe hunian subsidi ${siteConfig.projectName} beserta informasi luas bangunan, luas tanah, spesifikasi dasar, dan pembiayaan yang tersedia.`}
      />

      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {houses.map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>

          {/* Detailed specs & financing per type */}
          {houses.map((house) => (
            <div key={house.id} className="mt-14 grid gap-8 lg:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-7">
                <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  Spesifikasi {house.name}
                </h2>
                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b border-border pb-2">
                    <dt className="text-muted-foreground">Kategori</dt>
                    <dd className="font-medium text-foreground">{house.category}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border pb-2">
                    <dt className="text-muted-foreground">Luas bangunan / tanah</dt>
                    <dd className="font-medium text-foreground">
                      {house.buildingArea} / {house.landArea}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border pb-2">
                    <dt className="text-muted-foreground">Kamar tidur / mandi</dt>
                    <dd className="font-medium text-foreground">
                      {house.bedrooms} / {house.bathrooms}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border pb-2">
                    <dt className="text-muted-foreground">Daya listrik</dt>
                    <dd className="font-medium text-foreground">{house.electricity}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-border pb-2">
                    <dt className="text-muted-foreground">Sertifikat</dt>
                    <dd className="font-medium text-foreground">{house.certificate}</dd>
                  </div>
                  {house.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between gap-4 border-b border-border pb-2">
                      <dt className="text-muted-foreground">
                        {spec.label}
                        {spec.needsValidation && <span className="text-accent"> *</span>}
                      </dt>
                      <dd className="max-w-[55%] text-right font-medium text-foreground">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground/80">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  Butir bertanda <span className="text-accent">*</span> masih perlu
                  divalidasi terhadap brosur resmi / unit contoh sebelum dijadikan
                  spesifikasi final.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-7">
                <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  Harga &amp; Pembiayaan
                </h2>
                <p className="mt-4 text-lg font-semibold text-foreground">
                  {house.price.display}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground/80">
                  {house.price.note}
                </p>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Informasi Program FLPP
                </p>
                <dl className="mt-3 space-y-3 text-sm">
                  {house.financing.map((f) => (
                    <div key={f.label} className="flex justify-between gap-4 border-b border-border pb-2">
                      <dt className="text-muted-foreground">
                        {f.label}
                        {f.indicative && <span className="text-accent"> *</span>}
                      </dt>
                      <dd className="max-w-[55%] text-right font-medium text-foreground">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground/80">
                  {house.financingNote}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground/70">
                  <span className="text-accent">*</span> Angka indikatif / contoh listing,
                  bukan konstanta program. Snapshot data penelitian: {siteConfig.researchSnapshotDate}
                  {' '}(tidak berarti seluruh data di situs ini divalidasi pada tanggal tersebut).
                </p>
                <div className="mt-5">
                  <WhatsAppButton label="Tanya Ketersediaan Unit" />
                </div>
              </div>
            </div>
          ))}

          <div className="mt-16 rounded-lg border border-border bg-secondary/40 p-8 text-center md:p-12">
            <h2 className="heading-3">Ingin Melihat Langsung?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Jelajahi rumah contoh dan tipe hunian melalui Virtual Tour 360° untuk
              merasakan tata ruang secara virtual, lengkap dengan narasi Text-to-Speech.
            </p>
            <div className="mt-6">
              <Link
                to="/virtual-tour"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Buka Virtual Tour
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
