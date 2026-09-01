import { useState } from 'react';
import { siteConfig } from '@/data/site';

/**
 * Official SAS Residence brand logo.
 *
 * Asset: public/brand/sas-residence-logo.png  (1407x427, transparent, dark ink)
 *   - The official horizontal lockup: house mark + "SAS RESIDENCE" + "SINDANGPALAY".
 *   - Because the wordmark AND "Sindangpalay" are already in the image, callers
 *     must NOT place a redundant tagline next to it (see Navbar / Footer).
 *
 * A vector master also exists at public/brand/sas-residence-logo.svg, but it is a
 * CorelDRAW export that relies on deprecated SVG `<font>` glyphs which no browser
 * renders — its text would fall back to a system font and look wrong. So the PNG
 * is authoritative on the web. To move to SVG later, re-export with text
 * converted to outlines/curves and point LOGO_SRC at it.
 *
 * The dark-ink PNG is recoloured to white via a CSS filter when `tone="light"`
 * (used on the dark footer). If the file ever fails to load, a clean typographic
 * lockup ("SAS RESIDENCE" + location line) is shown instead. Do not AI-generate
 * or redraw the logo.
 */

const LOGO_SRC = '/brand/sas-residence-logo.png';

interface LogoProps {
  /** Height (+ any extra) utility classes for the mark, e.g. 'h-9 md:h-10'. */
  className?: string;
  /**
   * 'dark'  -> logo as-is, dark fallback text (for light backgrounds)
   * 'light' -> logo recoloured white, light fallback text (for dark backgrounds)
   */
  tone?: 'dark' | 'light';
  /** Text-fallback only: show the location line under the wordmark. Default true. */
  withTagline?: boolean;
}

export default function Logo({
  className = 'h-9',
  tone = 'dark',
  withTagline = true,
}: LogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-base font-bold uppercase tracking-[0.14em] sm:text-lg ${
            tone === 'light' ? 'text-background' : 'text-foreground'
          }`}
        >
          SAS Residence
        </span>
        {withTagline && (
          <span
            className={`mt-1 text-[10px] font-medium uppercase tracking-[0.16em] ${
              tone === 'light' ? 'text-background/60' : 'text-muted-foreground'
            }`}
          >
            {siteConfig.tagline}
          </span>
        )}
      </span>
    );
  }

  return (
    <img
      src={LOGO_SRC}
      alt={`Logo ${siteConfig.projectName}`}
      className={`w-auto max-w-[220px] object-contain ${className} ${
        tone === 'light' ? 'brightness-0 invert' : ''
      }`}
      onError={() => setFailed(true)}
    />
  );
}
