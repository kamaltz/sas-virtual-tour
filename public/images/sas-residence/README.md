# SAS Residence Sindangpalay — official photography

Place **real** SAS Residence Sindangpalay photos here. The starter previously used
Pexels stock photos presented as if they were actual SAS Residence properties —
that was misleading and has been removed.

Expected files (referenced from `src/data/houses.ts`, `src/data/facilities.ts`,
and `src/components/Hero.tsx`):

| File               | Shown on                        |
| ------------------ | ------------------------------- |
| `hero.jpg`         | Home hero background            |
| `rumah-34-60.jpg`  | Tipe 34/60 card                 |
| `rumah-contoh.jpg` | "Rumah Contoh" kawasan card     |
| `gerbang.jpg`      | "Gerbang dan Akses Masuk" card  |
| `jalan-utama.jpg`  | "Jalan Lingkungan" card         |
| `fasilitas.jpg`    | Other kawasan cards             |
| `siteplan.jpg`     | (optional) site plan            |

## How to switch a placeholder to a real photo

1. Add the image file here.
2. In the matching data record set `imagePlaceholder: false` (houses) /
   `imagePlaceholder: false` (facilities).
3. `src/components/BrandImage.tsx` then renders the real photo, and still falls
   back to the neutral placeholder block if the file fails to load.

Do **not** commit random downloaded images and label them as SAS Residence.
Alt text must never claim a stock photo is an actual SAS Residence property.
