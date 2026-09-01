export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  location: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  social: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  research: {
    title: string;
    institution: string;
    year: string;
  };
  mapEmbedUrl?: string;
}

export const siteConfig: SiteConfig = {
  name: 'Perumahan SAS',
  shortName: 'SAS',
  tagline: 'Karangpawitan, Garut',
  description:
    'Portal informasi interaktif dan Virtual Tour 360° untuk Perumahan SAS Karangpawitan Garut.',
  location: 'Karangpawitan, Garut, Jawa Barat',
  address: 'Perumahan SAS, Karangpawitan, Kabupaten Garut, Jawa Barat, Indonesia',
  phone: '+62 800 0000 0000',
  whatsapp: '6280000000000',
  email: 'info@perumahansasgarut.com',
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    youtube: 'https://youtube.com/',
  },
  research: {
    title:
      'Pengembangan Virtual Tour sebagai Media Informasi Interaktif dengan Integrasi Text-to-Speech pada Perumahan SAS Karangpawitan Garut',
    institution: 'Universitas Garut',
    year: '2026',
  },
  mapEmbedUrl: '',
};

export const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Virtual Tour', href: '/virtual-tour' },
  { label: 'Tipe Rumah', href: '/tipe-rumah' },
  { label: 'Fasilitas', href: '/fasilitas' },
  { label: 'Lokasi', href: '/lokasi' },
  { label: 'Tentang', href: '/tentang' },
] as const;
