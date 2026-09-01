import { useState } from 'react';
import { ImageOff } from 'lucide-react';

/**
 * Image renderer for SAS Residence content.
 *
 * The starter shipped Pexels stock photos presented as if they were real SAS
 * Residence properties. That is misleading, so until official photography is
 * supplied this component renders a neutral, clearly-labelled placeholder block
 * instead of a stock photo.
 *
 * When real assets are added under /public/images/sas-residence/, set
 * `placeholder={false}` on the data record (or remove the flag) and this
 * component will show the actual image, falling back to the placeholder only if
 * the file fails to load.
 */

interface BrandImageProps {
  src: string;
  alt: string;
  /** When true, always show the styled placeholder (no real asset yet). */
  placeholder?: boolean;
  /** Short caption shown inside the placeholder block. */
  label?: string;
  className?: string;
}

export default function BrandImage({
  src,
  alt,
  placeholder = false,
  label,
  className = '',
}: BrandImageProps) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = placeholder || failed;

  if (showPlaceholder) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-secondary p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="h-8 w-8 text-muted-foreground/60" aria-hidden="true" />
        <p className="text-xs font-medium text-muted-foreground">
          {label ?? 'Foto resmi SAS Residence belum tersedia'}
        </p>
        <p className="max-w-[16rem] text-[11px] leading-relaxed text-muted-foreground/70">
          Area ini akan menampilkan foto asli setelah dokumentasi resmi tersedia.
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
