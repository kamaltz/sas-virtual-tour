# Brand assets — SAS Residence

Official assets supplied by the developer (PT SAS Amanah Sentosa).
Do not redraw, restyle, or AI-generate the logo.

| File                          | Status  | Used by                                   |
| ----------------------------- | ------- | ----------------------------------------- |
| `sas-residence-logo.png`      | PRESENT | `src/components/Logo.tsx` (web — authoritative) |
| `sas-residence-logo.svg`      | PRESENT | vector master only — **not used on the web** (see below) |
| `og-image.png` (1200×630)     | missing | `index.html` OG/Twitter tags (still commented out) |
| official `favicon.svg`/`.ico` | missing | replaces the placeholder at `/public/favicon.svg` |

## Why the PNG and not the SVG

`sas-residence-logo.svg` is a CorelDRAW X7 export whose text ("SAS RESIDENCE",
"SINDANGPALAY") is drawn with deprecated SVG `<font>`/`<glyph>` elements that no
current browser renders — the text would fall back to a system font and look
wrong. The PNG (1407×427, transparent, dark ink) is high-resolution and stays
crisp at every size the site uses, so it is the web asset.

To switch to SVG later: re-export from the vector source with **text converted to
curves/outlines**, then point `LOGO_SRC` in `src/components/Logo.tsx` at the new
file.

## Logo behaviour

- The logo already contains the wordmark **and** "SINDANGPALAY", so the UI does
  not print a redundant tagline next to it (Navbar shows the logo only).
- On the dark footer the dark-ink PNG is recoloured to white with a CSS filter
  (`tone="light"`).
- If the file ever fails to load, `Logo.tsx` renders a typographic lockup
  ("SAS Residence" + "Sindangpalay · Karangpawitan · Garut").
