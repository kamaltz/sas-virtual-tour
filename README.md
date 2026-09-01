# SAS Residence Sindangpalay — Virtual Tour 360°

Media informasi interaktif **pendukung** untuk **SAS Residence Sindangpalay**
(Desa Sindangpalay, Kecamatan Karangpawitan, Kabupaten Garut), perumahan subsidi
yang dikembangkan oleh **PT SAS Amanah Sentosa**.

Website ini **bukan** situs korporat resmi SAS Residence
(situs resmi: <https://www.sasresidence.com>). Website ini dikembangkan sebagai
bagian dari penelitian dan melengkapi kanal promosi resmi pengembang.

Produk utama penelitian adalah **Virtual Tour berbasis web dengan panorama 360°**
yang diintegrasikan dengan **Text-to-Speech** (speech synthesis / Web Speech API)
untuk penyampaian informasi hunian melalui audio.

## Penelitian

- **Judul:** _Pengembangan Virtual Tour sebagai Media Informasi Interaktif dengan Integrasi Text-to-Speech pada Perumahan SAS Karangpawitan Garut_
- **Peneliti:** Julia Herlina
- **Institusi:** Institut Teknologi Garut
- **Tahun:** 2026

## Teknologi

- React + Vite + TypeScript
- Tailwind CSS
- React Router
- Lucide React (ikon)
- shadcn/ui (komponen UI)
- Integrasi Virtual Tour: 3DVista (via iframe)

## Memulai

### 1. Instal dependensi

```bash
npm install
```

### 2. Jalankan dev server

```bash
npm run dev
```

Buka `http://localhost:5173` di browser.

### 3. Konfigurasi URL 3DVista

Salin `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Isi `VITE_3DVISTA_TOUR_URL` dengan URL publikasi tur 3DVista Anda. Jika kosong,
halaman Virtual Tour menampilkan placeholder yang rapi (tidak error).

### 4. Build untuk produksi

```bash
npm run build
```

Hasil build berada di folder `dist/`.

## Deploy ke Vercel

Repo ini sudah menyertakan `vercel.json` (framework `vite`, SPA rewrite semua
route ke `/index.html`). Pengaturan di dashboard Vercel:

| Setting          | Nilai         |
| ---------------- | ------------- |
| Framework Preset | Vite          |
| Install Command  | `npm install` |
| Build Command    | `npm run build` |
| Output Directory | `dist`        |
| Root Directory   | `./`          |
| Node.js Version  | 20.x (default yang didukung Vercel) |

Environment variable (Project → Settings → Environment Variables):

| Key                     | Value                              | Environment            |
| ----------------------- | ---------------------------------- | ---------------------- |
| `VITE_3DVISTA_TOUR_URL` | URL publik tur 3DVista yang resmi  | Production (+ Preview)  |

Jika URL 3DVista belum tersedia, **jangan diisi** — biarkan kosong, halaman
Virtual Tour tetap menampilkan placeholder yang rapi. Jangan pernah memakai
`example.com` atau URL palsu. Jangan commit `.env` / `.env.local`.

Route berikut harus bisa dibuka langsung / di-refresh tanpa 404 (dijamin oleh
`vercel.json`): `/`, `/virtual-tour`, `/tipe-rumah`, `/fasilitas`, `/lokasi`,
`/tentang`.

## Aset merek & foto

- **Logo resmi:** letakkan file resmi di `public/brand/sas-residence-logo.svg`
  (disarankan) atau `public/brand/sas-residence-logo.png`. `src/components/Logo.tsx`
  otomatis mencoba SVG → PNG → teks fallback **"SAS RESIDENCE"**. Tidak perlu
  mengubah kode. Jangan membuat ulang logo dengan AI.
- **Favicon:** `public/favicon.svg` saat ini hanya placeholder "SAS". Ganti dengan
  favicon resmi.
- **Foto SAS Residence:** letakkan di `public/images/sas-residence/`
  (`hero.jpg`, `rumah-34-60.jpg`, `rumah-contoh.jpg`, `gerbang.jpg`,
  `jalan-utama.jpg`, `fasilitas.jpg`, `siteplan.jpg` — lihat README di folder
  tersebut). Untuk mengaktifkan sebuah foto, set `imagePlaceholder: false` pada
  data terkait. Sebelum foto resmi tersedia, UI menampilkan blok placeholder
  netral — jangan menggunakan foto stok atau AI seolah-olah rumah asli.
- **Google Maps:** isi `mapEmbedUrl` di `src/data/site.ts` **hanya** dengan URL
  embed yang menunjuk ke lokasi fisik proyek yang terverifikasi (bukan kantor
  pemasaran). Jika belum terverifikasi, biarkan kosong.

## Data & konten

- **Konfigurasi situs (brand, kontak, alamat, penelitian):** `src/data/site.ts`
- **Tipe rumah:** `src/data/houses.ts` (hanya Tipe 34/60 — rumah subsidi)
- **Informasi kawasan / fasilitas:** `src/data/facilities.ts`
- **Warna aksen:** variabel `--accent` di `src/index.css` (placeholder, ganti dengan
  warna merek resmi bila ada)
- **Google Maps:** lihat catatan pada bagian "Aset merek & foto" di atas.

### Data dinamis (perlu revalidasi berkala)

Harga, angsuran, uang muka, promo, dan ketersediaan unit **berubah dari waktu ke
waktu**. Angka harga/pembiayaan di repo ini berasal dari snapshot data penelitian
(`researchSnapshotDate` di `src/data/site.ts`); tanggal tersebut **bukan** berarti
seluruh data di situs sudah divalidasi. Informasi FLPP (bunga 5% fixed, tenor
hingga 20 tahun, uang muka mulai 1%) adalah ketentuan program yang tunduk pada
aturan program dan persetujuan bank. Jumlah unit (tersedia/terjual) **tidak
ditampilkan publik**. Konfirmasikan semua angka ke pihak pemasaran SAS Residence /
bank penyalur sebelum dipublikasikan sebagai fakta tetap.

## Struktur Proyek

```
src/
  components/
    layout/    Navbar.tsx  Footer.tsx  ScrollToTop.tsx
    Logo.tsx           # logo merek + fallback teks
    BrandImage.tsx     # gambar dengan placeholder netral
    Hero.tsx  HouseCard.tsx  FacilityCard.tsx
    TourPreview.tsx  TourEmbed.tsx  WhatsAppButton.tsx  PageHeader.tsx
  pages/
    Home.tsx  VirtualTour.tsx  HouseTypes.tsx  Facilities.tsx  Location.tsx  About.tsx
  data/
    site.ts  houses.ts  facilities.ts
  lib/
    utils.ts
public/
  brand/                # aset merek resmi (lihat README)
  images/sas-residence/ # foto resmi (lihat README)
  favicon.svg           # placeholder
```
