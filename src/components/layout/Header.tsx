// src/components/layout/Header.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/app/theme-provider';
import ThemeSwitcher from '../ThemeSwitcher';

const Header = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Set component mounted flag
  useEffect(() => {
    setMounted(true);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close mobile menu on outside clicks
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <header className="sticky top-0 left-0 w-full z-[1000] bg-[rgba(20,20,26,0.97)] shadow-[0_2px_16px_rgba(0,0,0,0.2)] border-b border-[#222222] py-4">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
            {/* The logo is switched based on the current theme. */}
            {mounted && (
              <Image
                src={theme === 'dark' ? '/darklogo.png' : '/lightlogo.png'}
                alt="Aryan Singh Shaktawat Logo"
                width={100}
                height={32}
                priority
              />
            )}
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/experience">Experience</Link></li>
            <li><Link href="/resume">Resume</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          {mounted && <ThemeSwitcher />}
        </nav>
        <div className="flex items-center md:hidden">
          {mounted && <ThemeSwitcher />}
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 z-50 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown mobile menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-full right-4 mt-2 z-[2000] bg-[#14141a] rounded-lg shadow-lg max-w-[220px] min-w-[160px] py-4 md:hidden"
        >
          <ul className="flex flex-col font-mono text-base">
            {['about', 'projects', 'experience', 'resume', 'contact'].map((path) => (
              <li key={path}>
                <Link
                  href={`/${path}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 text-white hover:bg-gray-700 transition-colors"
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
