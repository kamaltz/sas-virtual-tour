import PageHeader from '@/components/PageHeader';
import FacilityCard from '@/components/FacilityCard';
import { facilities } from '@/data/facilities';

export default function Facilities() {
  return (
    <>
      <PageHeader
        eyebrow="Fasilitas"
        title="Fasilitas Perumahan"
        description="Fasilitas lengkap yang mendukung kenyamanan, keamanan, dan kualitas hidup penghuni Perumahan SAS."
      />

      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2">
            {facilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} variant="large" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
