# `public/tour/` — 3DVista Web export integration notes

This folder is a **self-contained 3DVista "Publish for Web" export**. The React /
Vite application only *embeds* it in an `<iframe>` (see
`src/components/TourEmbed.tsx`); it never imports or bundles anything from here.

Entry file: **`index.htm`** → referenced via `VITE_3DVISTA_TOUR_URL=/tour/index.htm`.

---

## 1. 3DVista Trial licence — DO NOT TOUCH

This export was produced with the **trial** of 3DVista VT Pro. The loading screen
in `index.htm` and the watermark rendered by the player therefore say
*"created with the trial of 3DVista VT Pro"*.

**Trial watermark preserved. No licensing or watermark suppression code was
modified.** Do not remove it, hide it with CSS, cover it with an overlay, edit
`script*.js` / `lib/tdvplayer.js`, or patch any licence check. When a **licensed**
export is available, replace this whole folder (see §4) and the watermark is gone
normally.

The SAS Residence logo (in the React header) and the 3DVista trial watermark are
separate things — only the former is ours to place.

## 2. This export is currently the 3DVista "Real Estate" DEMO template

Real SAS Residence 360° panoramas (10 of them) were dropped into the sample
project, but the **skin, menus, hotspots and text panels are still the demo
content**. Present in `locale/en.txt` / `script*.js`:

- ~80 `Lorem Ipsum` / `LOREM IPSUM` buttons and text blocks
- demo scene menu: `RECEPTION`, `ROOMS`, `RESTAURANTS`, `AMENITIES`,
  `SPORTS AREA`, `SWIMMING POOL`, `Bar`, `Chill Out`, `Lobby`, `Terrace`,
  `Meeting Area 1/2`, `Main Entrance`
- a **New York** Google Maps embed (`400 5th Ave, New York` — two `WebFrame` URLs)
- fake agent card: `JOHN DOE`, `Licensed Real Estate Salesperson`,
  `jhondoe@realestate.com`, `www.loremipsum.com`, `Tlf.: +11 111 111 111`,
  `$150,000`
- panorama labels are raw camera filenames (`pano360_165208_00_6080x3040`, …)
- Tour Title and Description are empty

**None of this can be fixed safely by editing the exported web folder** — menu
structure, hotspot graph, WebFrame widgets and scene wiring live inside the
obfuscated `script.js` / `script_general.js` / `script_mobile.js` (the project
data) and `lib/tdvplayer.js` (the runtime). Those must not be hand-edited.

➡️ **Required: open the original `.3dvista` project in the 3DVista editor / Skin
Editor, replace the demo content with the thesis information architecture, and
re-export.** The concrete change list is in the repository `README.md`
("Virtual Tour — pending 3DVista editor work").

## 3. Text-to-Speech ownership

TTS is **layer B: the React wrapper via the browser Web Speech API**
(`window.speechSynthesis`), implemented in `src/components/TourNarration.tsx`
with content in `src/data/tourNarration.ts`. The 3DVista export contains **no
audio and no speech-synthesis code**. Narration plays only on an explicit click
(no autoplay) with Mulai / Jeda / Lanjut / Berhenti controls.

If a future licensed export adds its own narration on information hotspots,
disable the React panel to avoid two competing TTS systems.

## 4. Replacing this export with a licensed one

```
licensed 3DVista project
  → Publish for Web
  → delete everything in public/tour/  (keep this README if you like)
  → copy the new export in, so public/tour/index.htm exists
  → keep VITE_3DVISTA_TOUR_URL=/tour/index.htm
  → npm run build
  → deploy
```

No React/TypeScript code change is needed as long as the entry stays
`/tour/index.htm`.

## 5. Housekeeping

267 Windows/Google-Drive `desktop.ini` files were accidentally included in the
first commit of this folder and have been removed from version control
(`.gitignore` now ignores `desktop.ini`). They are not part of the 3DVista export
and are never referenced by the tour.

Do not reformat, rename, minify, or delete generated 3DVista files.
