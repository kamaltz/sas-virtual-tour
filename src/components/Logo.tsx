import { useState } from 'react';
import { siteConfig } from '@/data/site';

/**
 * Brand logo for SAS Residence.
 *
 * IMPORTANT: The previous starter used a generic Lucide `Home` icon as if it were
 * the SAS Residence logo. That is NOT an official brand asset.
 *
 * To use the real logo, drop the official file at ONE of:
 *   public/brand/sas-residence-logo.svg   (preferred)
 *   public/brand/sas-residence-logo.png
 * and set `LOGO_SRC` below to its path. Do not invent or generate a logo.
 *
 * If the file is missing, this component renders a clean text fallback
 * ("SAS RESIDENCE") and the app keeps working.
 */

// Set to '/brand/sas-residence-logo.svg' (or .png) once the official asset exists.
const LOGO_SRC = '/brand/sas-residence-logo.svg';

interface LogoProps {
  /** Height class for the image / text, e.g. 'h-8'. */
  className?: string;
  /** Force the text-only fallback (used where an image mark is not wanted). */
  textOnly?: boolean;
  /** Tailwind text color class for the fallback wordmark. */
  textClassName?: string;
}

export default function Logo({
  className = 'h-8',
  textOnly = false,
  textClassName = 'text-foreground',
}: LogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const showText = textOnly || imgFailed;

  if (showText) {
    return (
      <span
        className={`font-display font-bold tracking-tight ${textClassName}`}
        aria-label={siteConfig.brandName}
      >
        SAS RESIDENCE
      </span>
    );
  }

  return (
    <img
      src={LOGO_SRC}
      alt={`${siteConfig.brandName} logo`}
      className={`w-auto ${className}`}
      onError={() => setImgFailed(true)}
    />
  );
}
