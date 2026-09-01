/**
 * Housing type data for SAS Residence Sindangpalay.
 *
 * The research only supports ONE primary housing type: Tipe 34/60 (rumah subsidi).
 * The previous starter types (36 / 45 / 60, two-storey, 3-4 bedroom premium) were
 * fictional and have been removed.
 *
 * Data status:
 *   VERIFIED             - from thesis research / promotional sources
 *   NEEDS FIELD VALIDATION - detail that should be confirmed against the official
 *                            brochure / show unit before being treated as final
 *   VERIFIED BUT DYNAMIC - price / financing figures that change over time
 *
 * Images: no official SAS Residence photos are bundled yet. `image` points at the
 * intended asset location under /public/images/sas-residence/. Until a real photo is
 * supplied, `imagePlaceholder` is true and the UI renders a neutral styled block
 * instead of a misleading stock photo.
 */

export interface LayoutItem {
  label: string;
  /** True when this element still needs to be confirmed against official documents. */
  needsValidation?: boolean;
}

export interface HouseSpec {
  label: string;
  value: string;
  /** True when this detail still needs to be validated against official documents. */
  needsValidation?: boolean;
}

export interface HouseType {
  id: string;
  name: string;
  type: string;
  category: string;
  buildingArea: string;
  landArea: string;
  bedrooms: number;
  bathrooms: number;
  electricity: string;
  certificate: string;
  /** Intended asset path (see /public/images/sas-residence/README). */
  image: string;
  imagePlaceholder: boolean;
  imageAlt: string;
  description: string;
  /** Layout elements. Core rooms VERIFIED; carport & taman NEED FIELD VALIDATION. */
  layout: LayoutItem[];
  /** Detailed construction specs. All NEED FIELD VALIDATION (see needsValidation). */
  specs: HouseSpec[];
  price: {
    /** Lowest figure seen across sources (BTN listing). VERIFIED BUT DYNAMIC */
    from: number;
    display: string;
    note: string;
  };
  /** FLPP program information — subject to applicable program rules and bank approval. */
  financing: {
    label: string;
    value: string;
    /** True for example/listing figures that are not program constants. */
    indicative?: boolean;
  }[];
  financingNote: string;
}

export const houses: HouseType[] = [
  {
    id: 'tipe-34-60',
    name: 'Tipe 34/60',
    type: 'Tipe 34/60',
    category: 'Rumah Subsidi',
    buildingArea: '34 m²',
    landArea: '60 m²',
    bedrooms: 2,
    bathrooms: 1,
    electricity: '900 watt',
    certificate: 'SHGB',
    image: '/images/sas-residence/rumah-34-60.jpg',
    imagePlaceholder: true,
    imageAlt:
      'Placeholder visual tipe hunian 34/60 SAS Residence Sindangpalay — foto unit resmi belum tersedia',
    description:
      'Hunian subsidi satu lantai dengan luas bangunan 34 m² di atas tanah 60 m². Tipe ini memiliki 2 kamar tidur dan 1 kamar mandi dengan daya listrik 900 watt dan sertifikat SHGB.',
    layout: [
      { label: '2 kamar tidur' },
      { label: '1 kamar mandi' },
      { label: 'Ruang keluarga' },
      { label: 'Dapur' },
      { label: 'Carport / area parkir', needsValidation: true },
      { label: 'Taman', needsValidation: true },
    ],
    specs: [
      { label: 'Rangka atap', value: 'Baja ringan', needsValidation: true },
      { label: 'Penutup atap', value: 'Metal roof', needsValidation: true },
      { label: 'Plafon', value: 'GRC (disebut pada sebagian sumber)', needsValidation: true },
      { label: 'Dinding', value: 'Bata merah, plester, aci, dan cat', needsValidation: true },
      { label: 'Lantai', value: 'Keramik 40×40 cm', needsValidation: true },
      { label: 'Lantai kamar mandi', value: 'Keramik 15×15 cm', needsValidation: true },
      { label: 'Pondasi', value: 'Pondasi batu kali dan sloof beton bertulang (disebut pada satu sumber)', needsValidation: true },
    ],
    price: {
      from: 162000000,
      display: 'Harga mulai Rp162.000.000*',
      note:
        '*Harga, ketersediaan unit, promo, dan ketentuan pembiayaan dapat berubah. Konfirmasikan informasi terbaru kepada pihak pemasaran SAS Residence.',
    },
    financing: [
      { label: 'Skema', value: 'KPR bersubsidi FLPP' },
      { label: 'Suku bunga FLPP', value: '5% fixed selama masa kredit' },
      { label: 'Tenor', value: 'Hingga 20 tahun' },
      { label: 'Uang muka', value: 'Mulai dari 1%' },
      { label: 'Angsuran indikatif', value: '± Rp869.412 / bulan (contoh listing BTN)', indicative: true },
    ],
    financingNote:
      'Informasi FLPP di atas merupakan ketentuan program yang berlaku dan tunduk pada aturan program serta persetujuan bank. Angsuran indikatif, uang muka aktual, dan promo pengembang bersifat dinamis — konfirmasikan ke pihak pemasaran / bank penyalur.',
  },
];
