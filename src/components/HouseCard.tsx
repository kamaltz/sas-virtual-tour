import { BedDouble, Bath, Maximize, Ruler, Zap, ScrollText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandImage from '@/components/BrandImage';
import type { HouseType } from '@/data/houses';

interface HouseCardProps {
  house: HouseType;
}

export default function HouseCard({ house }: HouseCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <BrandImage
          src={house.image}
          alt={house.imageAlt}
          placeholder={house.imagePlaceholder}
          label="Foto tipe hunian belum tersedia"
        />
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center rounded-md bg-background/95 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur-sm">
            {house.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
          {house.name}
        </h3>

        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Maximize className="h-4 w-4 text-accent" aria-hidden="true" />
            <dt className="sr-only">Luas Bangunan</dt>
            <dd>{house.buildingArea}</dd>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Ruler className="h-4 w-4 text-accent" aria-hidden="true" />
            <dt className="sr-only">Luas Tanah</dt>
            <dd>{house.landArea}</dd>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <BedDouble className="h-4 w-4 text-accent" aria-hidden="true" />
            <dt className="sr-only">Kamar Tidur</dt>
            <dd>{house.bedrooms} Kamar Tidur</dd>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Bath className="h-4 w-4 text-accent" aria-hidden="true" />
            <dt className="sr-only">Kamar Mandi</dt>
            <dd>{house.bathrooms} Kamar Mandi</dd>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="h-4 w-4 text-accent" aria-hidden="true" />
            <dt className="sr-only">Daya Listrik</dt>
            <dd>{house.electricity}</dd>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <ScrollText className="h-4 w-4 text-accent" aria-hidden="true" />
            <dt className="sr-only">Sertifikat</dt>
            <dd>{house.certificate}</dd>
          </div>
        </dl>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {house.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {house.layout.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {item.label}
              {item.needsValidation && <span className="ml-1 text-accent" aria-hidden="true">*</span>}
            </span>
          ))}
        </div>
        {house.layout.some((item) => item.needsValidation) && (
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground/70">
            <span className="text-accent">*</span> Elemen ini masih perlu dikonfirmasi
            terhadap dokumen resmi.
          </p>
        )}

        <div className="mt-5 border-t border-border pt-4">
          <p className="text-sm font-semibold text-foreground">{house.price.display}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground/80">
            {house.price.note}
          </p>
        </div>

        <div className="mt-5 pt-1">
          <Link
            to="/virtual-tour"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
          >
            Lihat di Virtual Tour
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
