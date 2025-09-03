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
          <Link href="/" className="pointer-events-auto inline-flex items-center h-full group" onClick={(e) => { e.preventDefault(); router.push('/'); }}>
            <Image
              src="/darklogo.png"
              alt="Aryan Singh Shaktawat Logo"
              width={45}
              height={45}
              priority
              className="block h-[50px] w-auto drop-shadow-lg relative top-[1px] transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_#65cdf980]"
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>
        {/* Nav links at far right, tight spacing */}
        <div className="navbar-links flex items-center justify-end h-full">
          <nav className="hidden md:flex items-center gap-1 font-space-grotesk font-semibold text-[0.95rem] tracking-[0.08em] uppercase" aria-label="Primary navigation">
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
                    className={`nav-tab px-3 py-1.5 relative ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={(e) => {
                      if (item.id === 'home') {
                        e.preventDefault();
                        router.push('/');
                      }
                    }}
                  >
                    <span aria-hidden className="tab-dot mr-2" />
                    {item.label}
                  </Link>
                  {i < arr.length - 1 && (
                    <span className="navbar-separator mx-2 text-xs transition-all duration-200 hover:text-[#65cdf9] hover:scale-125 hover:drop-shadow-[0_0_8px_#65cdf980]">•</span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
          {/* Hamburger for mobile on right */}
          <div className="md:hidden ml-2 relative">
            {/* Close button - positioned above hamburger when menu is open */}
            {isOpen && (
              <button
                aria-label="Close menu"
                className="fixed top-4 right-4 p-3 rounded-full bg-[#101114] border border-[#202025] hover:bg-[#65cdf915] hover:border-[#65cdf9] hover:shadow-[0_0_15px_#65cdf930] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-200 text-white hover:text-[#65cdf9] text-xl z-[1200]"
                onClick={() => setIsOpen(false)}
              >
                <span aria-hidden>×</span>
              </button>
            )}
            
            {/* Hamburger button */}
            <button
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              onMouseDown={(e) => e.stopPropagation()}
              className="group inline-flex items-center gap-2 px-3 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 transition-all duration-200 hover:bg-[#65cdf915] hover:shadow-[0_0_20px_#65cdf940]"
            >
              <span className="relative w-6 h-6">
                <span className={`absolute left-0 right-0 top-1 block h-0.5 bg-white transition-all duration-200 group-hover:bg-[#65cdf9] ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
                <span className={`absolute left-0 right-0 top-1/2 -mt-0.5 block h-0.5 bg-white transition-all duration-200 group-hover:bg-[#65cdf9] ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute left-0 right-0 bottom-1 block h-0.5 bg-white transition-all duration-200 group-hover:bg-[#65cdf9] ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
              </span>
            </button>
          </div>
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
          {/* Drawer - slides in from right */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            ref={menuRef}
            className={`absolute right-0 top-0 h-full w-[80%] max-w-xs sm:max-w-sm bg-[linear-gradient(120deg,#101114_80%,#20222A_100%)] border-l border-[#202025] shadow-[0_0_60px_-20px_rgba(0,0,0,0.5)] p-6 flex flex-col gap-4 focus:outline-none transform transition-transform duration-300 ease-out ${
              animateDrawer ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="mt-4" aria-label="Mobile">
              <ul className="flex flex-col gap-2">
                {[
                  { href: '/', id: 'home', label: 'Home' },
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
                      className={`nav-tab-mobile block px-4 py-3 rounded-full text-white uppercase tracking-[0.09em] font-semibold transition-all duration-200 hover:bg-[#65cdf915] hover:text-[#65cdf9] hover:shadow-[0_0_15px_#65cdf930] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`}
                    >
                      <span className="tab-dot mr-3 inline-block" aria-hidden />
                      {item.label}
                    </Link>
                    {idx < arr.length - 1 && (
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#65cdf980] text-lg transition-all duration-200 hover:text-[#65cdf9] hover:scale-125 hover:drop-shadow-[0_0_8px_#65cdf980]">◆</span>
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
        /* Pill-style navigation tabs */
        .nav-tab, .nav-tab-mobile {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.75rem;
          border-radius: 9999px;
          background: transparent;
          color: #eaeef2;
          transition: transform 180ms, box-shadow 180ms, background 200ms, color 200ms;
          font-weight: 600;
        }
        .nav-tab .tab-dot, .nav-tab-mobile .tab-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(180deg,#65cdf9,#3b82f6);
          box-shadow: 0 0 6px #65cdf980;
          transform: scale(0.9);
          transition: transform 200ms, opacity 200ms;
        }
        .nav-tab:hover, .nav-tab:focus, .nav-tab-mobile:hover, .nav-tab-mobile:focus {
          transform: translateY(-3px) scale(1.02);
          color: #ffffff;
          box-shadow: 0 6px 20px rgba(101,205,249,0.12);
        }
        .nav-tab.active, .nav-tab-mobile.active {
          background: linear-gradient(90deg, rgba(101,205,249,0.06), rgba(75,187,230,0.03));
          color: #65cdf9;
        }
        .nav-tab.active .tab-dot, .nav-tab-mobile.active .tab-dot {
          transform: scale(1.15);
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
