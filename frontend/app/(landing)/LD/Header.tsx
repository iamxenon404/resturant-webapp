'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tight text-amber-600 dark:text-amber-500">
              CHOWCO<span className="text-slate-900 dark:text-white">WN</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#about" className="text-sm font-medium hover:text-amber-600 transition-colors">About Us</Link>
            <Link href="#menu" className="text-sm font-medium hover:text-amber-600 transition-colors">Our Menu</Link>
            <Link href="#contact" className="text-sm font-medium hover:text-amber-600 transition-colors">Contact</Link>
            <Link href="/auth/login" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900">Sign In</Link>
            <Link href="#menu" className="px-4 py-2 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors">
              Order Now
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none">
              <span className="sr-only">Open Menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900">
          <Link href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-900">About Us</Link>
          <Link href="#menu" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-900">Our Menu</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-900">Contact</Link>
          <Link href="/auth/login" className="block px-3 py-2 rounded-md text-base font-medium text-amber-600">Sign In</Link>
        </div>
      )}
    </nav>
  );
}