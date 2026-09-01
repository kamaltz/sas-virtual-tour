import { useState } from 'react';
import { siteConfig } from '@/data/site';

/**
 * Brand logo for SAS Residence.
 *
 * IMPORTANT: The previous starter used a generic Lucide `Home` icon as if it were
 * the SAS Residence logo. That is NOT an official brand asset and must not be used.
 *
 * To use the real logo, drop the OFFICIAL file (supplied by the developer,
 * PT SAS Amanah Sentosa) at one of these paths — no other action needed:
 *   public/brand/sas-residence-logo.svg   (preferred, crisp at any size)
 *   public/brand/sas-residence-logo.png   (fallback raster)
 *
 * This component tries the SVG first, then the PNG, then a clean text fallback
 * ("SAS RESIDENCE"). The app never breaks if the file is missing.
 *
 * Do not invent, redraw, or AI-generate the logo.
 *
 * NOTE: the official horizontal lockup already includes the word "SINDANGPALAY".
 * Once the real logo is in place, consider hiding the separate tagline line in
 * Navbar.tsx to avoid showing "SINDANGPALAY" twice.
 */

// Candidate sources, tried in order before falling back to the text wordmark.
const LOGO_SOURCES = [
  '/brand/sas-residence-logo.svg',
  '/brand/sas-residence-logo.png',
] as const;

interface LogoProps {
  /** Height (and any extra) classes for the image / text, e.g. 'h-8'. */
  className?: string;
  /** Force the text-only fallback (used where an image mark is not wanted). */
  textOnly?: boolean;
  /** Tailwind text color / size classes for the fallback wordmark. */
  textClassName?: string;
}

export default function Logo({
  className = 'h-8',
  textOnly = false,
  textClassName = 'text-foreground',
}: LogoProps) {
  const [srcIndex, setSrcIndex] = useState(0);

  const exhausted = srcIndex >= LOGO_SOURCES.length;
  const showText = textOnly || exhausted;

  if (showText) {
    return (
      <span
        className={`font-display font-bold uppercase tracking-tight ${textClassName}`}
      >
        SAS RESIDENCE
      </span>
    );
  }

  return (
    <img
      src={LOGO_SOURCES[srcIndex]}
      alt={`Logo ${siteConfig.brandName}`}
      className={`w-auto max-w-[200px] object-contain ${className}`}
      // Advance to the next candidate source; when the list is exhausted the
      // component re-renders into the text fallback above.
      onError={() => setSrcIndex((i) => i + 1)}
    />
  );
}
