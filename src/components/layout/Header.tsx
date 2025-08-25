// src/components/layout/Header.tsx
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
// Theme toggle removed per request

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // prevent body scroll when mobile menu open
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
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

  const [contactInView, setContactInView] = useState(false);
  const isContactRoute = pathname?.startsWith('/contact');
  const [activeId, setActiveId] = useState<string | null>(null);

  // Observe contact section on pages that include it
  useEffect(() => {
    const el = document.querySelector('#contact');
    if (!el) {
      setContactInView(false);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setContactInView(true);
          else setContactInView(false);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.2, 0.5] }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pathname]);

  // Active section observer
  useEffect(() => {
    const ids = ['about', 'projects', 'blogs', 'contact'];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId((visible[0].target as HTMLElement).id);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: '-20% 0px -55% 0px' }
    );
    els.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-[#16171B]/95 backdrop-blur border-b border-[#202025]" role="banner">
      {/* Screen overlay when mobile menu is open */}
      {isOpen && <div aria-hidden className="fixed inset-0 z-[900] bg-black/40 backdrop-blur-sm" />}
  <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between relative">
        {/* Left: MENU button */}
        <div className="flex items-center">
          <button
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            onMouseDown={(e) => e.stopPropagation()}
            className="group inline-flex items-center gap-3 px-3 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
          >
            <span className="font-mono font-bold text-sm tracking-wider text-white hidden sm:inline">MENU</span>
            <span className="relative w-6 h-6">
              {/* Animated hamburger to X */}
              <span className={`absolute left-0 right-0 top-1 block h-0.5 bg-white transition-transform ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
              <span className={`absolute left-0 right-0 top-1/2 -mt-0.5 block h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 right-0 bottom-1 block h-0.5 bg-white transition-transform ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
            </span>
          </button>
        </div>

        {/* Center: brand logo (enlarged and perfectly centered) */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-16 sm:px-24 md:px-28">
          <Link href="/" className="pointer-events-auto inline-flex items-center">
            <Image
              src="/darklogo.png"
              alt="Personal Brand Logo"
              width={224}
              height={56}
              priority
      className="h-12 sm:h-14 w-auto mx-2"
            />
          </Link>
        </div>

  {/* Right: Resume/Contact CTA (theme toggle removed) */}
  <div className="flex items-center">
          <Link
            href={contactInView || isContactRoute ? '/contact' : '/resume'}
            className="inline-block px-4 py-2 rounded-md text-sm font-medium transition-colors border border-transparent bg-transparent text-[#e6e6e8] hover:bg-white/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            aria-label={contactInView || isContactRoute ? 'Call me back' : 'Resume'}
          >
            {contactInView || isContactRoute ? 'CALL ME BACK' : 'RESUME'}
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div ref={menuRef} className="md:hidden absolute top-full left-0 w-full bg-[#16171B]/95 backdrop-blur border-t border-[#202025]">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-2 text-base">
              {[
                { href: '/#about', id: 'about', label: 'About' },
                { href: '/#projects', id: 'projects', label: 'Projects' },
                { href: '/resume', id: 'resume', label: 'Resume' },
                { href: '/#blogs', id: 'blogs', label: 'Blogs' },
                { href: '/#contact', id: 'contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-white hover:bg-white/6 ${activeId === item.id ? 'bg-white/5' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
