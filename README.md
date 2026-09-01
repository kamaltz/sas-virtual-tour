# Virtual Tour Perumahan SAS | Karangpawitan Garut

Portal informasi interaktif dan Virtual Tour 360° untuk Perumahan SAS Karangpawitan Garut.

Proyek penelitian: _Pengembangan Virtual Tour sebagai Media Informasi Interaktif dengan Integrasi Text-to-Speech pada Perumahan SAS Karangpawitan Garut._

## Teknologi

- React + Vite + TypeScript
- Tailwind CSS
- React Router
- Lucide React (ikon)
- shadcn/ui (komponen UI)

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

Salin file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Edit `.env` dan isi dengan URL Virtual Tour 3DVista Anda:

```
VITE_3DVISTA_TOUR_URL=https://url-3dvista-anda.com/virtual-tour/index.htm
```

Jika variabel ini kosong, halaman Virtual Tour akan menampilkan placeholder yang elegan.

### 4. Build untuk produksi

```bash
npm run build
```

Hasil build berada di folder `dist/`.

### 5. Deploy ke Vercel

1. Push repository ini ke GitHub/GitLab.
2. Buka [vercel.com](https://vercel.com) dan import repository.
3. Vercel akan otomatis mendeteksi konfigurasi Vite.
4. Tambahkan environment variable `VITE_3DVISTA_TOUR_URL` di Vercel dashboard.
5. Deploy.

## Struktur Proyek

```
src/
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      ScrollToTop.tsx
    Hero.tsx
    HouseCard.tsx
    FacilityCard.tsx
    TourPreview.tsx
    TourEmbed.tsx
    WhatsAppButton.tsx
    PageHeader.tsx
  pages/
    Home.tsx
    VirtualTour.tsx
    HouseTypes.tsx
    Facilities.tsx
    Location.tsx
    About.tsx
  data/
    site.ts
    houses.ts
    facilities.ts
  lib/
    utils.ts
```

## Kustomisasi

- **Data situs** (nama, kontak, alamat): `src/data/site.ts`
- **Data tipe rumah**: `src/data/houses.ts`
- **Data fasilitas**: `src/data/facilities.ts`
- **Warna aksen**: ubah variabel `--accent` di `src/index.css`
- **Google Maps**: isi `mapEmbedUrl` di `src/data/site.ts`
