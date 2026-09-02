import { siteConfig } from './site';
import { houses } from './houses';

/**
 * Text-to-Speech narration content for the Virtual Tour.
 *
 * TTS OWNERSHIP: layer B — the React wrapper via the browser Web Speech API
 * (window.speechSynthesis). The bundled 3DVista export contains NO audio and no
 * speech-synthesis code, so narration is provided here, outside the iframe, and
 * spoken on explicit user action (never autoplay).
 *
 * Wording is intentionally conservative and consistent with src/data/site.ts and
 * src/data/houses.ts. No promotional exaggeration. Each item is ~15–30 seconds
 * when read aloud in Indonesian.
 *
 * If a licensed 3DVista export later adds its own in-tour narration on
 * information hotspots, disable this panel to avoid two competing TTS systems.
 */

export interface NarrationItem {
  id: string;
  label: string;
  text: string;
}

const t34 = houses[0];

export const narrationLang = 'id-ID';

export const narrationItems: NarrationItem[] = [
  {
    id: 'pengantar',
    label: 'Pengantar',
    text:
      `Selamat datang di Virtual Tour ${siteConfig.projectName}, kawasan perumahan ` +
      `subsidi di ${siteConfig.location}, yang dikembangkan oleh ${siteConfig.developer}. ` +
      `Tur ini merupakan media informasi interaktif untuk mengenal lingkungan, akses, ` +
      `fasilitas kawasan, dan tipe hunian secara virtual.`,
  },
  {
    id: 'petunjuk',
    label: 'Petunjuk navigasi',
    text:
      'Untuk menjelajah, klik lalu geser panorama ke segala arah. Klik ikon hotspot ' +
      'untuk berpindah antar titik. Klik hotspot informasi untuk membaca detail. ' +
      'Gunakan panel narasi ini untuk mendengarkan informasi, dan tombol layar penuh ' +
      'untuk tampilan maksimal.',
  },
  {
    id: 'gerbang',
    label: 'Gerbang / akses masuk',
    text:
      `Anda berada di area akses masuk ${siteConfig.projectName}. Dari titik ini, ` +
      'pengunjung dapat melanjutkan eksplorasi menuju jalan lingkungan dan area hunian.',
  },
  {
    id: 'tipe-34-60',
    label: 'Tipe 34/60',
    text:
      `Anda sedang melihat rumah ${t34.name} ${siteConfig.projectName}. Rumah ini ` +
      `memiliki luas bangunan ${t34.buildingArea.replace('m²', 'meter persegi')} di atas ` +
      `tanah seluas ${t34.landArea.replace('m²', 'meter persegi')}, dengan ` +
      `${t34.bedrooms} kamar tidur, ${t34.bathrooms} kamar mandi, daya listrik ` +
      `${t34.electricity}, dan sertifikat ${t34.certificate}.`,
  },
  {
    id: 'kawasan',
    label: 'Fasilitas / kawasan',
    text:
      'Informasi kawasan yang disajikan meliputi gerbang dan akses masuk, jalan ' +
      'lingkungan yang telah dibeton, drainase, jaringan listrik, jaringan air bersih, ' +
      'area ruang terbuka, dan rumah contoh. Rincian seperti sistem keamanan dan jarak ' +
      'ke fasilitas umum perlu dikonfirmasi kepada pihak pemasaran.',
  },
  {
    id: 'lokasi',
    label: 'Lokasi',
    text:
      `${siteConfig.projectName} berada di ${siteConfig.location}. Di sekitar kawasan ` +
      'terdapat akses menuju fasilitas pendidikan, fasilitas kesehatan, dan tempat ibadah.',
  },
  {
    id: 'kontak',
    label: 'Informasi & kontak',
    text:
      `Untuk informasi lebih lanjut, hubungi pemasaran ${siteConfig.brandName} di nomor ` +
      `${siteConfig.phoneDisplay}, email ${siteConfig.email}, situs resmi ` +
      `${siteConfig.officialWebsite.replace('https://', '')}, atau akun Instagram sasresidence. ` +
      `Harga, ketersediaan unit, dan ketentuan pembiayaan dapat berubah.`,
  },
];
