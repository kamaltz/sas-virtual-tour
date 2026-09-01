import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { navLinks, siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  // Transparent, light-on-hero treatment only at the top of the home page.
  const onHero = isHome && !scrolled && !open;

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
        onHero ? 'bg-transparent' : 'bg-background/95 shadow-sm backdrop-blur-md',
      )}
    >
      <nav
        className="container-page flex h-16 items-center justify-between gap-4 md:h-20"
        aria-label="Navigasi utama"
      >
        <Link
          to="/"
          className="flex shrink-0 items-center"
          aria-label={`${siteConfig.name} — Beranda`}
        >
          <Logo className="h-9 md:h-10" tone={onHero ? 'light' : 'dark'} />
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
                    onHero
                      ? isActive
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                      : isActive
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
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden',
            onHero ? 'text-white' : 'text-foreground',
          )}
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
