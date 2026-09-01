import {
  Home, Route, ShieldCheck, Moon, Trees, Building2,
  type LucideIcon,
} from 'lucide-react';
import type { Facility } from '@/data/facilities';

const iconMap: Record<string, LucideIcon> = {
  Home,
  Route,
  ShieldCheck,
  Moon,
  Trees,
  Building2,
};

interface FacilityCardProps {
  facility: Facility;
  variant?: 'compact' | 'large';
}

export default function FacilityCard({ facility, variant = 'compact' }: FacilityCardProps) {
  const Icon = iconMap[facility.icon] ?? Home;

  if (variant === 'large') {
    return (
      <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={facility.image}
            alt={facility.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-7">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-accent">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
              {facility.name}
            </h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {facility.description}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md">
      <span className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-accent">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground">
        {facility.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {facility.description}
      </p>
    </article>
  );
}
