/**
 * SINGLE SOURCE OF TRUTH for brand, project, developer, contact, and research data.
 *
 * Data status legend (see also the content audit report):
 *   VERIFIED               - supported by the supplied thesis research data / official sources
 *   VERIFIED BUT DYNAMIC   - correct now, but may change (price, promo, financing, inventory)
 *   NEEDS FIELD VALIDATION - plausible but must be measured / confirmed on site
 *
 * This website is a university research prototype (interactive information medium),
 * NOT the official SAS Residence corporate website (that is officialWebsite below).
 */

export interface SiteConfig {
  /** Primary brand, e.g. shown as short label. VERIFIED */
  brandName: string;
  /** Official project name. VERIFIED */
  projectName: string;
  /** Full display name for titles/headings. VERIFIED */
  name: string;
  /** Short brand name. VERIFIED */
  shortName: string;
  /** Location descriptor used as a tagline. VERIFIED */
  tagline: string;
  /** Neutral description of THIS research medium (not corporate marketing copy). */
  description: string;
  /** Developer legal entity. VERIFIED */
  developer: string;
  /** Developer association. VERIFIED */
  association: string;
  /** Project status. VERIFIED */
  status: string;
  /**
   * Project location descriptor (administrative area only).
   * The precise physical project site boundary NEEDS FIELD VALIDATION.
   */
  location: string;
  /**
   * Address as commonly published for marketing / contact purposes.
   * A marketing-office address is NOT automatically the physical project site
   * address. NEEDS FIELD VALIDATION before being presented as the project site.
   */
  marketingAddress: string;
  /** Normalized telephone for display. VERIFIED */
  phone: string;
  /** Raw phone as commonly published. VERIFIED */
  phoneDisplay: string;
  /** WhatsApp number in wa.me format (country code, no symbols). VERIFIED */
  whatsapp: string;
  /** Marketing email. VERIFIED */
  email: string;
  /** Official SAS Residence corporate website (separate from this prototype). VERIFIED */
  officialWebsite: string;
  social: {
    instagram?: string;
  };
  /** SiKumbang project identifier. VERIFIED */
  projectId: string;
  research: {
    title: string;
    researcher: string;
    institution: string;
    year: string;
  };
  /**
   * Date of the research data snapshot that price / financing figures in this
   * repo were taken from. This does NOT mean every value on the website was
   * independently validated on this date.
   */
  researchSnapshotDate: string;
  /** Google Maps embed URL. Empty until a verified embed URL is supplied. NEEDS FIELD VALIDATION */
  mapEmbedUrl?: string;
}

export const siteConfig: SiteConfig = {
  brandName: 'SAS Residence',
  projectName: 'SAS Residence Sindangpalay',
  name: 'SAS Residence Sindangpalay',
  shortName: 'SAS Residence',
  tagline: 'Sindangpalay · Karangpawitan · Garut',
  description:
    'Media informasi interaktif SAS Residence Sindangpalay yang menyediakan akses Virtual Tour 360° untuk membantu calon konsumen mengenal lingkungan, fasilitas, dan hunian secara virtual.',
  developer: 'PT SAS Amanah Sentosa',
  association: 'APERSI',
  status: 'Perumahan subsidi',
  location: 'Sindangpalay, Karangpawitan, Kabupaten Garut, Jawa Barat',
  marketingAddress:
    'Jl. Raya Karangpawitan / Kp. Nyalindung, Desa Sindangpalay, Kecamatan Karangpawitan, Kabupaten Garut, Jawa Barat',
  phone: '+62 812-2228-2545',
  phoneDisplay: '0812-2228-2545',
  whatsapp: '6281222282545',
  email: 'sasgroup.ptsasamanahsentosa@gmail.com',
  officialWebsite: 'https://www.sasresidence.com',
  social: {
    instagram: 'https://instagram.com/sasresidence',
  },
  projectId: 'GRT0220122023T002',
  research: {
    title:
      'Pengembangan Virtual Tour sebagai Media Informasi Interaktif dengan Integrasi Text-to-Speech pada Perumahan SAS Karangpawitan Garut',
    researcher: 'Julia Herlina',
    institution: 'Institut Teknologi Garut',
    year: '2026',
  },
  researchSnapshotDate: '30 Juli 2026',
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
