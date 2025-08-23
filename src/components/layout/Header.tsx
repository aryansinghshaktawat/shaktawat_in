// src/components/layout/Header.tsx
"use client";
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-10 bg-dark-background-900/80 backdrop-blur-sm">
      <Link href="/" className="text-lg font-bold">
        Aryan Singh Shaktawat
      </Link>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-dark-background-900 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><Link href="#about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="#experience" onClick={() => setIsOpen(false)}>Experience</Link></li>
            <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
