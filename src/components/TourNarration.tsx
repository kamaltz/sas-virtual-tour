import { useEffect, useMemo, useRef, useState } from 'react';
import {
  MousePointer, Navigation, Volume2, Play, Pause, Square, ChevronDown, ChevronUp,
} from 'lucide-react';
import { narrationItems, narrationLang } from '@/data/tourNarration';

/**
 * Text-to-Speech panel for the Virtual Tour (TTS ownership: React / Web Speech API).
 *
 * - Sits just below the tour iframe as a slim, collapsible bar so the tour stays
 *   the visual focus.
 * - Speech only starts on an explicit click — never autoplay.
 * - Controls: Mulai (play) / Jeda (pause) / Lanjut (resume) / Berhenti (stop).
 * - Degrades gracefully when window.speechSynthesis is unavailable.
 */

type SpeechState = 'idle' | 'speaking' | 'paused';

const usageHints = [
  { icon: MousePointer, text: 'Geser untuk menjelajah' },
  { icon: Navigation, text: 'Ketuk hotspot untuk berpindah' },
  { icon: Volume2, text: 'Gunakan panel narasi untuk audio' },
];

export default function TourNarration() {
  const supported =
    typeof window !== 'undefined' && 'speechSynthesis' in window;

  const [expanded, setExpanded] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= 640,
  );
  const [selectedId, setSelectedId] = useState(narrationItems[0].id);
  const [state, setState] = useState<SpeechState>('idle');

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  const selected = useMemo(
    () => narrationItems.find((n) => n.id === selectedId) ?? narrationItems[0],
    [selectedId],
  );

  // Pick an Indonesian voice when the list becomes available.
  useEffect(() => {
    if (!supported) return;
    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      voiceRef.current =
        voices.find((v) => v.lang === narrationLang) ??
        voices.find((v) => v.lang.toLowerCase().startsWith('id')) ??
        null;
    };
    pickVoice();
    window.speechSynthesis.addEventListener('voiceschanged', pickVoice);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', pickVoice);
      window.speechSynthesis.cancel();
    };
  }, [supported]);

  // Stop any narration if the user switches topic.
  useEffect(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setState('idle');
  }, [selectedId, supported]);

  const play = () => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(selected.text);
    u.lang = narrationLang;
    if (voiceRef.current) u.voice = voiceRef.current;
    u.rate = 1;
    u.pitch = 1;
    u.onend = () => setState('idle');
    u.onerror = () => setState('idle');
    utteranceRef.current = u;
    window.speechSynthesis.speak(u);
    setState('speaking');
  };

  const pause = () => {
    if (!supported) return;
    window.speechSynthesis.pause();
    setState('paused');
  };

  const resume = () => {
    if (!supported) return;
    window.speechSynthesis.resume();
    setState('speaking');
  };

  const stop = () => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setState('idle');
  };

  return (
    <div className="shrink-0 border-t border-border bg-background">
      {/* Always-visible slim row */}
      <div className="flex items-center gap-3 px-4 py-1.5 sm:px-6">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex shrink-0 items-center gap-1.5 rounded px-1.5 py-1 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
          aria-expanded={expanded}
        >
          {expanded ? (
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          ) : (
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
          )}
          Narasi &amp; Petunjuk
        </button>

        <div className="flex flex-1 items-center gap-4 overflow-x-auto whitespace-nowrap text-[11px] text-muted-foreground [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {usageHints.map((h) => (
            <span key={h.text} className="inline-flex items-center gap-1.5">
              <h.icon className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
              {h.text}
            </span>
          ))}
        </div>
      </div>

      {/* Expanded: Text-to-Speech controls */}
      {expanded && (
        <div className="border-t border-border/60 px-4 py-2 sm:px-6">
          {supported ? (
            <div className="flex flex-wrap items-center gap-2">
              <label htmlFor="tts-topic" className="sr-only">
                Pilih topik narasi
              </label>
              <select
                id="tts-topic"
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="min-w-0 flex-1 rounded-md border border-border bg-card px-2.5 py-1.5 text-xs text-foreground sm:flex-none sm:text-sm"
              >
                {narrationItems.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.label}
                  </option>
                ))}
              </select>

              {state !== 'speaking' && (
                <button
                  type="button"
                  onClick={state === 'paused' ? resume : play}
                  className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  {state === 'paused' ? 'Lanjut' : 'Mulai'}
                </button>
              )}
              {state === 'speaking' && (
                <button
                  type="button"
                  onClick={pause}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                  Jeda
                </button>
              )}
              <button
                type="button"
                onClick={stop}
                disabled={state === 'idle'}
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary disabled:opacity-40"
              >
                <Square className="h-3.5 w-3.5" aria-hidden="true" />
                Berhenti
              </button>

              <span className="text-[11px] text-muted-foreground" aria-live="polite">
                {state === 'speaking' && 'Sedang membacakan…'}
                {state === 'paused' && 'Dijeda'}
                {state === 'idle' && 'Narasi Text-to-Speech (Web Speech API)'}
              </span>
            </div>
          ) : (
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              Narasi suara (Text-to-Speech) tidak didukung di browser ini. Informasi
              tetap tersedia dalam bentuk teks pada halaman Tipe Rumah, Fasilitas, dan
              Lokasi.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
