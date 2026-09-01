import { MousePointer, Navigation, Volume2 } from 'lucide-react';

const tourUrl = import.meta.env.VITE_3DVISTA_TOUR_URL as string | undefined;

const infoItems = [
  {
    icon: MousePointer,
    title: 'Geser untuk Menjelajah',
    description: 'Klik dan geser untuk melihat ke segala arah dalam panorama 360°.',
  },
  {
    icon: Navigation,
    title: 'Gunakan Hotspot',
    description: 'Klik tanda panah atau ikon hotspot untuk berpindah antar titik.',
  },
  {
    icon: Volume2,
    title: 'Kontrol Audio / TTS',
    description: 'Gunakan kontrol audio di dalam tour untuk mendengarkan informasi.',
  },
];

export default function TourEmbed() {
  const hasUrl = tourUrl && tourUrl.trim().length > 0;

  return (
    <div className="flex h-full flex-col">
      {hasUrl ? (
        <div className="relative w-full flex-1 overflow-hidden">
          <iframe
            src={tourUrl}
            title="Virtual Tour 360° SAS Residence Sindangpalay"
            className="h-full w-full border-0"
            allow="fullscreen; accelerometer; gyroscope; magnetometer; vr; xr; xr-spatial-tracking; autoplay"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="flex w-full flex-1 items-center justify-center bg-secondary p-8">
          <div className="max-w-md text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background text-accent shadow-sm">
              <Volume2 className="h-7 w-7" aria-hidden="true" />
            </div>
            <p className="mt-6 font-display text-lg font-semibold text-foreground">
              Virtual Tour 360° akan ditampilkan di area ini setelah URL 3DVista
              dikonfigurasi.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Tambahkan <code className="rounded bg-muted px-1.5 py-0.5 text-xs">VITE_3DVISTA_TOUR_URL</code> di
              file <code className="rounded bg-muted px-1.5 py-0.5 text-xs">.env</code> untuk menampilkan tour.
            </p>
          </div>
        </div>
      )}

      {/* Info panel */}
      <div className="border-t border-border bg-background">
        <div className="container-page py-6">
          <ul className="grid gap-4 sm:grid-cols-3">
            {infoItems.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary text-accent">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
