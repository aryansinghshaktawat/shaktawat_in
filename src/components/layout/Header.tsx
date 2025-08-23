// src/components/layout/Header.tsx
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from '@/app/theme-provider';
import ThemeSwitcher from '../ThemeSwitcher';

const Header = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full p-2 flex justify-between items-center z-10 bg-light-background-100/80 dark:bg-dark-background-900/80 backdrop-blur-sm">
      <Link href="/">
          {/* The logo is switched based on the current theme. */}
          {mounted && (
            <Image
              src={theme === 'dark' ? '/darklogo.png' : '/lightlogo.png'}
              alt="Aryan Singh Shaktawat Logo"
              width={120}
              height={40}
              priority
            />
          )}
      </Link>
      <nav className="hidden md:flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#resume">Resume</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        {mounted && <ThemeSwitcher />}
      </nav>
      <div className="flex items-center md:hidden">
        {mounted && <ThemeSwitcher />}
        <button onClick={() => setIsOpen(!isOpen)} className="ml-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-light-background-100 dark:bg-dark-background-900 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><Link href="#about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="#experience" onClick={() => setIsOpen(false)}>Experience</Link></li>
            <li><Link href="#resume" onClick={() => setIsOpen(false)}>Resume</Link></li>
            <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
