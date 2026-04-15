'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Install lucide-react or use SVGs

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Styles', href: '#styles' },
    { name: 'Combinations', href: '#combinations' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="font-black tracking-tighter text-xl uppercase italic">
          Journey<span className="text-zinc-500 italic font-light">18</span>Miles
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold uppercase tracking-tighter text-zinc-100"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#pricing" 
            onClick={() => setIsOpen(false)}
            className="bg-white text-black text-center py-3 font-bold uppercase text-xs"
          >
            Start Project
          </a>
        </div>
      )}
    </nav>
  );
}