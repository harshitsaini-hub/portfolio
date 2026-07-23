"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, FileText } from 'lucide-react';

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Credentials', href: '/credentials' },
    { name: 'Certificates', href: '/certificates' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#F6F4EF]/85 border-b border-slate-900/10 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center font-black text-white text-xs shadow-md">
            HS
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors font-heading">
            HARSHIT <span className="text-slate-500 font-light">SAINI</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-600">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all relative py-1 hover:text-slate-900 ${
                  isActive ? 'text-slate-900 font-black' : 'text-slate-600'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-900 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs uppercase tracking-widest font-bold hover:bg-slate-800 hover:scale-105 transition-all shadow-md flex items-center gap-2"
          >
            <FileText size={14} className="text-amber-300" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-900 p-2"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-6 border-t border-slate-900/10 mt-4 space-y-3 bg-[#F6F4EF]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 text-sm uppercase tracking-widest font-bold ${
                  isActive ? 'text-slate-900 bg-slate-900/5 rounded-xl' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center mx-4 py-3 rounded-full bg-slate-900 text-white font-bold uppercase tracking-widest text-xs"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};
