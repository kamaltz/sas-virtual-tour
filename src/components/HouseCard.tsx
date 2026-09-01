import { BedDouble, Bath, Maximize, Ruler, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { HouseType } from '@/data/houses';

interface HouseCardProps {
  house: HouseType;
}

export default function HouseCard({ house }: HouseCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={house.image}
          alt={house.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center rounded-md bg-background/95 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur-sm">
            {house.type}
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
        </dl>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {house.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {house.features.map((feat) => (
            <span
              key={feat}
              className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {feat}
            </span>
          ))}
        </div>

        <div className="mt-6 pt-2">
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
