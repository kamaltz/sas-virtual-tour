# Brand assets — SAS Residence

Place the **official** SAS Residence brand assets here. Do not invent or generate
a logo; use the real file supplied by the developer (PT SAS Amanah Sentosa).

| File                              | Used by                          | Notes |
| --------------------------------- | -------------------------------- | ----- |
| `sas-residence-logo.svg`          | `src/components/Logo.tsx`        | Preferred. Update `LOGO_SRC` if you use `.png` instead. |
| `sas-residence-logo.png`          | `src/components/Logo.tsx`        | Fallback raster version. |
| `og-image.png` (1200×630)         | `index.html` OG/Twitter tags     | Uncomment the `og:image` / `twitter:image` tags once added. |
| official `favicon.svg` / `.ico`   | `index.html`                     | Replaces the placeholder at `/public/favicon.svg`. |

Until `sas-residence-logo.*` exists, `Logo.tsx` automatically renders the text
fallback **"SAS RESIDENCE"** and the app keeps working.
