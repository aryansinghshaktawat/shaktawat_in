// src/components/layout/Header.tsx
"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
// Theme toggle removed per request

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const [animateDrawer, setAnimateDrawer] = useState(false);

  useEffect(() => {
    // prevent body scroll when mobile menu open
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    if (isOpen) {
      previouslyFocused.current = document.activeElement as HTMLElement | null;
      // allow CSS transition to kick in on mount
      requestAnimationFrame(() => setAnimateDrawer(true));
      // focus first focusable in menu
      setTimeout(() => {
        const first = menuRef.current?.querySelector<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        first?.focus();
      }, 50);
    } else {
      setAnimateDrawer(false);
      previouslyFocused.current?.focus?.();
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Keyboard handling: ESC to close, Tab trap inside menu
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
        return;
      }
      if (e.key === 'Tab' && menuRef.current) {
        const focusables = Array.from(
          menuRef.current.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])')
        ).filter((el) => !el.hasAttribute('disabled'));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey) {
          if (active === first || !menuRef.current.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  // Simplified: pure page routes now (no in-page section tracking)

  // Desktop inline nav groups
  const leftItems = [
    { href: '/', id: 'home', label: 'Home' },
    { href: '/about', id: 'about', label: 'About' },
    { href: '/projects', id: 'projects', label: 'Projects' },
  ] as const;
  const rightItems = [
    { href: '/blog', id: 'blog', label: 'Blog' },
    { href: '/contact', id: 'contact', label: 'Contact' },
  ] as const;

  // No in-page section observers needed.

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] navbar bg-[linear-gradient(90deg,#101114_0%,#20222A_100%)]/95 backdrop-blur shadow-[0_6px_24px_-8px_#65cdf952] border-b border-transparent" role="banner">
      {/* Cinematic glowing accent separator */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[4px] bg-[linear-gradient(90deg,transparent,#65cdf9_50%,transparent)] opacity-70 shadow-[0_2px_24px_0_#65cdf952]" />
  <div className="w-full pl-0 pr-6 h-[64px] flex items-center justify-between relative">
        {/* Logo at extreme left, full height */}
  <div className="navbar-logo pl-10 flex items-center h-full">
          <Link href="/" className="pointer-events-auto inline-flex items-center h-full" onClick={(e) => { e.preventDefault(); router.push('/'); }}>
            <Image
              src="/darklogo.png"
              alt="Aryan Singh Shaktawat Logo"
              width={45}
              height={45}
              priority
              className="block h-[50px] w-auto drop-shadow-lg relative top-[1px]"
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>
        {/* Nav links at far right, tight spacing */}
        <div className="navbar-links flex items-center justify-end h-full">
          <nav className="hidden md:flex items-center gap-1 font-sans font-semibold text-[0.95rem] tracking-[0.08em] uppercase" aria-label="Primary navigation">
  {/* All links in a single row, right-aligned, including Resume */}
  {[...leftItems, ...rightItems, { href: '/resume', id: 'resume', label: 'Resume' }].map((item, i, arr) => {
              const isActive =
        (item.id === 'home' && pathname === '/') ||
        (item.id !== 'home' && pathname?.startsWith(`/${item.id}`));
              return (
                <React.Fragment key={`nav-${item.href}`}>
                  <Link
                    href={item.href}
                    target={undefined}
                    rel={undefined}
                    className={`nav-link px-[6px] py-1 relative${isActive ? ' active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={(e) => {
                      if (item.id === 'home') {
                        e.preventDefault();
                        router.push('/');
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                  {i < arr.length - 1 && (
                    <span className="navbar-separator mx-2 text-xs">•</span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
          {/* Hamburger for mobile on right */}
          <button
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            onMouseDown={(e) => e.stopPropagation()}
            className="md:hidden ml-2 group inline-flex items-center gap-2 px-3 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
          >
            <span className="relative w-6 h-6">
              <span className={`absolute left-0 right-0 top-1 block h-0.5 bg-white transition-transform ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
              <span className={`absolute left-0 right-0 top-1/2 -mt-0.5 block h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 right-0 bottom-1 block h-0.5 bg-white transition-transform ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile navigation overlay + drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[1100]"
          aria-hidden={!isOpen}
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          {/* Drawer */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            ref={menuRef}
            className={`absolute left-0 top-0 h-full w-[80%] max-w-xs sm:max-w-sm bg-[linear-gradient(120deg,#101114_80%,#20222A_100%)] border-r border-[#202025] shadow-[0_0_60px_-20px_rgba(0,0,0,0.5)] p-6 flex flex-col gap-4 focus:outline-none transform transition-transform duration-300 ease-out ${
              animateDrawer ? 'translate-x-0' : '-translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-2">
              <Link href="/" className="inline-flex items-center">
                <Image src="/darklogo.png" alt="Aryan Singh Shaktawat Logo" width={120} height={32} className="h-8 w-auto" />
              </Link>
              <button
                aria-label="Close menu"
                className="p-2 rounded-md hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                onClick={() => setIsOpen(false)}
              >
                <span aria-hidden>×</span>
              </button>
            </div>
            <nav className="mt-2" aria-label="Mobile">
              <ul className="flex flex-col gap-2">
                {[
                  { href: '/', id: 'home', label: 'Home' },
                  { href: '/about', id: 'about', label: 'About' },
                  { href: '/projects', id: 'projects', label: 'Projects' },
                  { href: '/blog', id: 'blog', label: 'Blog' },
                  { href: '/contact', id: 'contact', label: 'Contact' },
                  { href: '/resume', id: 'resume', label: 'Resume' },
                ].map((item, idx, arr) => (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      target={item.id === 'resume' ? '_blank' : undefined}
                      rel={item.id === 'resume' ? 'noopener noreferrer' : undefined}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-3 rounded-md text-white uppercase tracking-[0.13em] font-semibold transition-colors hover:bg-[#23242a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`}
                    >
                      {item.label}
                    </Link>
                    {idx < arr.length - 1 && (
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#65cdf980] text-lg">◆</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
      {/* Custom styles for compact, elegant nav with refined active highlight */}
      <style jsx>{`
        .navbar {
          background: linear-gradient(90deg, #101114 70%, #20222A 100%);
          box-shadow: 0 4px 24px -8px #65cdf952;
          padding-right: 1.5rem;
          padding-left: 0;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
  .navbar-logo img { height: 60px; display: block; }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          letter-spacing: 0.08em;
        }
        .nav-link {
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #eeeeee;
          position: relative;
          font-size: 0.95rem;
          font-family: inherit;
          font-weight: 600;
          transition: color 0.18s, transform 0.18s, box-shadow 0.18s;
        }
        .nav-link.active {
          color: #65cdf9;
        }
        .nav-link::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg,#65cdf9 60%,#4bbbe6 100%);
          position: absolute;
          left: 0;
          bottom: -4px;
          border-radius: 2px;
          opacity: 0;
          box-shadow: 0 0 0 #65cdf9cc;
          transition: width 0.22s cubic-bezier(.4,0,.2,1), opacity 0.22s cubic-bezier(.4,0,.2,1), box-shadow 0.22s cubic-bezier(.4,0,.2,1), background 0.22s cubic-bezier(.4,0,.2,1);
        }
        .nav-link:hover,
        .nav-link:focus {
          color: #7ee7ff;
          transform: scale(1.06);
          box-shadow: 0 2px 12px #65cdf970;
        }
        .nav-link:hover::after,
        .nav-link:focus::after {
          width: 100%;
          opacity: 1;
          box-shadow: 0 2px 16px #65cdf9cc;
        }
        .nav-link.active::after {
          width: 100%;
          opacity: 1;
          background: linear-gradient(90deg,#65cdf9 80%,#4bbbe6 100%);
          box-shadow: 0 2px 16px #65cdf9cc;
        }
        .navbar-separator {
          margin: 0 0.375rem; /* ~6px */
          color: #65cdf980;
          font-size: 1em;
          user-select: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
