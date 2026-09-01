import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import HouseCard from '@/components/HouseCard';
import { houses } from '@/data/houses';

export default function HouseTypes() {
  return (
    <>
      <PageHeader
        eyebrow="Katalog Hunian"
        title="Pilihan Tipe Hunian"
        description="Temukan beragam pilihan rumah dengan desain modern dan tata ruang yang dirancang untuk kenyamanan keluarga di Perumahan SAS."
      />

      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {houses.map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>

          <div className="mt-16 rounded-lg border border-border bg-secondary/40 p-8 text-center md:p-12">
            <h2 className="heading-3">Ingin Melihat Langsung?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Jelajahi setiap tipe rumah melalui Virtual Tour 360° untuk merasakan
              tata ruang dan detail arsitektur secara nyata.
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
