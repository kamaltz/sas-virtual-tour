/**
 * Environment / facility information for SAS Residence Sindangpalay.
 *
 * These are the categories of KAWASAN information presented inside the Virtual Tour
 * (with Text-to-Speech narration), NOT a list of guaranteed on-site amenities.
 *
 * Removed from the starter because they were unverified marketing claims:
 *   - "Sistem keamanan 24 jam dengan pos satpam"
 *   - masjid / mushola di dalam kompleks
 *   - playground anak, area komunitas / community center
 *   - jalan beraspal
 *   - CCTV
 *
 * Wording here is deliberately conservative. Upgrade a description only after the
 * claim has been validated on site or against official documents.
 *
 * Images: no official SAS Residence photos are bundled. `image` is the intended
 * asset path; while `imagePlaceholder` is true the UI shows a neutral styled block.
 */

export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  imagePlaceholder: boolean;
  imageAlt: string;
  icon: string;
  /** True when the underlying claim still needs field validation. */
  needsValidation?: boolean;
}

export const facilities: Facility[] = [
  {
    id: 'gerbang-akses',
    name: 'Gerbang dan Akses Masuk',
    description:
      'Gerbang dan jalur akses masuk kawasan menjadi salah satu titik informasi yang disajikan dalam Virtual Tour.',
    image: '/images/sas-residence/gerbang.jpg',
    imagePlaceholder: true,
    imageAlt: 'Placeholder visual gerbang dan akses masuk SAS Residence Sindangpalay',
    icon: 'DoorOpen',
  },
  {
    id: 'jalan-lingkungan',
    name: 'Jalan Lingkungan',
    description:
      'Berdasarkan data penelitian, jalan lingkungan di kawasan ini telah dibeton. Informasi jalan lingkungan disajikan sebagai bagian dari pengenalan kawasan.',
    image: '/images/sas-residence/jalan-utama.jpg',
    imagePlaceholder: true,
    imageAlt: 'Placeholder visual jalan lingkungan SAS Residence Sindangpalay',
    icon: 'Route',
  },
  {
    id: 'drainase',
    name: 'Drainase',
    description:
      'Saluran drainase kawasan termasuk informasi infrastruktur lingkungan yang ditampilkan dalam media Virtual Tour.',
    image: '/images/sas-residence/fasilitas.jpg',
    imagePlaceholder: true,
    imageAlt: 'Placeholder visual saluran drainase kawasan',
    icon: 'Waves',
  },
  {
    id: 'jaringan-listrik',
    name: 'Jaringan Listrik',
    description:
      'Jaringan listrik kawasan menjadi salah satu informasi utilitas yang disampaikan kepada calon konsumen.',
    image: '/images/sas-residence/fasilitas.jpg',
    imagePlaceholder: true,
    imageAlt: 'Placeholder visual jaringan listrik kawasan',
    icon: 'Zap',
  },
  {
    id: 'jaringan-air-bersih',
    name: 'Jaringan / Sumber Air Bersih',
    description:
      'Ketersediaan jaringan atau sumber air bersih disajikan sebagai bagian dari informasi utilitas kawasan.',
    image: '/images/sas-residence/fasilitas.jpg',
    imagePlaceholder: true,
    imageAlt: 'Placeholder visual jaringan air bersih kawasan',
    icon: 'Droplets',
  },
  {
    id: 'ruang-terbuka',
    name: 'Ruang Terbuka',
    description:
      'Area ruang terbuka di dalam kawasan ditampilkan dalam Virtual Tour untuk memberi gambaran lingkungan hunian.',
    image: '/images/sas-residence/fasilitas.jpg',
    imagePlaceholder: true,
    imageAlt: 'Placeholder visual area ruang terbuka kawasan',
    icon: 'Trees',
  },
  {
    id: 'keamanan-lingkungan',
    name: 'Keamanan Lingkungan',
    description:
      'Keamanan lingkungan menjadi salah satu informasi kawasan yang disajikan dalam media Virtual Tour. Rincian sistem dan jam operasional keamanan perlu dikonfirmasi kepada pihak pemasaran.',
    image: '/images/sas-residence/fasilitas.jpg',
    imagePlaceholder: true,
    imageAlt: 'Placeholder visual pos dan akses keamanan lingkungan',
    icon: 'ShieldCheck',
    needsValidation: true,
  },
  {
    id: 'rumah-contoh',
    name: 'Rumah Contoh',
    description:
      'Rumah contoh digunakan sebagai acuan tata ruang dan tampilan hunian, dan menjadi salah satu objek utama dalam Virtual Tour.',
    image: '/images/sas-residence/rumah-contoh.jpg',
    imagePlaceholder: true,
    imageAlt: 'Placeholder visual rumah contoh SAS Residence Sindangpalay',
    icon: 'Home',
  },
  {
    id: 'fasilitas-umum-sekitar',
    name: 'Fasilitas Umum di Sekitar Kawasan',
    description:
      'Terdapat akses menuju fasilitas pendidikan, fasilitas kesehatan, dan tempat ibadah di sekitar kawasan. Jarak dan waktu tempuh perlu diukur / dikonfirmasi.',
    image: '/images/sas-residence/fasilitas.jpg',
    imagePlaceholder: true,
    imageAlt: 'Placeholder visual fasilitas umum di sekitar kawasan',
    icon: 'Building2',
    needsValidation: true,
  },
];
