import PageHeader from '@/components/PageHeader';
import FacilityCard from '@/components/FacilityCard';
import { facilities } from '@/data/facilities';

export default function Facilities() {
  return (
    <>
      <PageHeader
        eyebrow="Kawasan"
        title="Informasi Kawasan & Fasilitas"
        description="Kategori informasi lingkungan, infrastruktur, dan fasilitas di sekitar kawasan SAS Residence Sindangpalay yang disajikan dalam Virtual Tour dengan narasi Text-to-Speech."
      />

      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2">
            {facilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} variant="large" />
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground/80">
            Keterangan di atas disusun secara konservatif berdasarkan data penelitian.
            Rincian seperti sistem dan jam operasional keamanan, serta jarak ke fasilitas
            umum di sekitar kawasan, masih perlu dikonfirmasi kepada pihak pemasaran SAS
            Residence.
          </p>
        </div>
      </section>
    </>
  );
}
