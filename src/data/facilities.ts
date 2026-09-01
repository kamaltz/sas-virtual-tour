export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
}

export const facilities: Facility[] = [
  {
    id: 'area-perumahan',
    name: 'Area Perumahan',
    description:
      'Lingkungan perumahan yang tertata rapi dengan konsep hunian modern dan ruang hijau yang nyaman.',
    image:
      'https://images.pexels.com/photos/8148350/pexels-photo-8148350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Tampak udara area perumahan yang tertata rapi dengan pepohonan hijau',
    icon: 'Home',
  },
  {
    id: 'akses-jalan',
    name: 'Akses Jalan',
    description:
      'Jalan perumahan beraspal dengan lebar yang memadai untuk dua arah kendaraan dan akses mudah ke jalan utama.',
    image:
      'https://images.pexels.com/photos/121666/pexels-photo-121666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Jalan beraspal di area perumahan dengan akses yang lebar',
    icon: 'Route',
  },
  {
    id: 'keamanan',
    name: 'Keamanan',
    description:
      'Sistem keamanan 24 jam dengan pos satpam di gerbang utama dan pengawasan lingkungan yang teratur.',
    image:
      'https://images.pexels.com/photos/32574417/pexels-photo-32574417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Gerbang keamanan perumahan dengan sistem akses terkontrol',
    icon: 'ShieldCheck',
  },
  {
    id: 'tempat-ibadah',
    name: 'Tempat Ibadah',
    description:
      'Masjid atau mushola berada dalam area perumahan untuk memudahkan warga dalam beribadah.',
    image:
      'https://images.pexels.com/photos/35382432/pexels-photo-35382432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Interior masjid yang tenang dengan jendela kayu dan mihrab berornamen',
    icon: 'Moon',
  },
  {
    id: 'ruang-terbuka',
    name: 'Ruang Terbuka',
    description:
      'Area taman dan ruang terbuka hijau untuk rekreasi, berolahraga, dan aktivitas keluarga di luar ruangan.',
    image:
      'https://images.pexels.com/photos/6168453/pexels-photo-6168453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Taman ruang terbuka hijau dengan pepohonan dan jalur pejalan kaki',
    icon: 'Trees',
  },
  {
    id: 'fasilitas-umum',
    name: 'Fasilitas Umum',
    description:
      'Fasilitas umum seperti playground anak, area komunitas, dan tempat penunjang kebutuhan warga sehari-hari.',
    image:
      'https://images.pexels.com/photos/4915249/pexels-photo-4915249.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Gazebo di taman komunitas dengan pepohonan hijau dan jalur setapak',
    icon: 'Building2',
  },
];
