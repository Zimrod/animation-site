// components/Navbar.tsx
'use client';

import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { useAuth } from './AuthContext';
import { AuthModal } from './AuthModal';

const STUDIO_URL = process.env.NEXT_PUBLIC_STUDIO_URL || "https://procedural-max-studio.onrender.com/";

export default function Navbar() {
  const { user, logout } = useAuth();
  console.log('Who is it: ', user);
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navLinks = [
    { name: 'Differentiation', href: '#why-journey' },
    { name: 'Audience', href: '#audience' },
    { name: 'Widgets', href: '#widgets' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="font-black text-white tracking-tighter text-xl uppercase">
            Journey<span className="text-zinc-500">18</span>Miles
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="h-5 w-px bg-zinc-800" />

            {/* Studio CTA */}
            <a
              href="https://procedural-max-studio.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all"
            >
              Launch Studio
            </a>

            {/* User Area */}
            <div className="relative">
              {user ? (
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 text-white hover:text-zinc-300"
                >
                  <User size={20} />
                  <span className="text-sm font-medium hidden sm:inline">
                    {user.name || user.email?.split('@')[0]}
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center gap-2 text-white hover:text-zinc-300"
                >
                  <User size={20} />
                  <span className="text-sm font-medium">Log in</span>
                </button>
              )}

              {/* User Dropdown */}
              {user && showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-zinc-200 py-2">
                  <div className="px-4 py-2 border-b border-zinc-100">
                    <p className="text-sm font-medium">{user.name || user.email}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <div className="px-4 py-2 border-b border-zinc-100 bg-zinc-50">
                    <p className="text-sm font-medium">Credits available:</p>
                    <p className="text-xs text-gray-500 font-bold">{user?.credits ?? 0}</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      logout();
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-zinc-50"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-zinc-800 bg-zinc-950">
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-200 font-semibold uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}

              <div className="border-t border-zinc-800 pt-6 space-y-4">
                <a
                  href={STUDIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="
                    block w-full text-center py-4 rounded-lg bg-white text-black font-black uppercase tracking-widest text-xs
                  "
                >
                  Launch Studio
                </a>

                {/* Mobile User Area */}
                {user ? (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      logout();
                    }}
                    className="block w-full text-center py-3 rounded-lg bg-zinc-800 text-white font-medium"
                  >
                    Log out ({user.email})
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsAuthModalOpen(true);
                    }}
                    className="block w-full text-center py-3 rounded-lg bg-zinc-800 text-white font-medium"
                  >
                    Log in / Register
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}