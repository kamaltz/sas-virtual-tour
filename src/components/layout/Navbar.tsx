import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { navLinks, siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 shadow-sm backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav
        className="container-page flex h-16 items-center justify-between md:h-20"
        aria-label="Navigasi utama"
      >
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label={`${siteConfig.name} — Beranda`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Home className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight text-foreground">
              {siteConfig.name}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3.5 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-accent'
                      : 'text-foreground/80 hover:text-foreground',
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/virtual-tour"
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Jelajahi Virtual Tour
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-md px-4 py-3 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-secondary text-accent'
                        : 'text-foreground/80 hover:bg-secondary',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-2">
              <Link
                to="/virtual-tour"
                className="block rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
              >
                Jelajahi Virtual Tour
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
