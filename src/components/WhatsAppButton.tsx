import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';

interface WhatsAppButtonProps {
  label?: string;
  variant?: 'fixed' | 'inline';
}

export default function WhatsAppButton({
  label = 'Hubungi Marketing',
  variant = 'inline',
}: WhatsAppButtonProps) {
  const message = encodeURIComponent(
    `Halo, saya tertarik untuk mendapatkan informasi lebih lanjut tentang ${siteConfig.name}.`,
  );
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  if (variant === 'fixed') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
    >
      <MessageCircle className="h-4 w-4 text-accent" aria-hidden="true" />
      {label}
    </a>
  );
}
