'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Services', href: '#' },
  { label: 'Portfolio', href: '#' },
  { label: 'Company', href: '#' },
  { label: 'Hire Developers', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
    
        <div className="text-2xl font-bold text-blue-700">AptopsCloud</div>

        {/* Desktop Nav */}

        <nav className="hidden md:flex space-x-6">
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-gray-700 hover:text-blue-600 text-sm font-medium transition"
            style={{
              backgroundImage: "url('/ai-animation.gif')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              color: '#fff' // optional: make text readable
            }}
            >

            AI Devs
        </motion.div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-gray-700 hover:text-blue-600 text-base font-medium transition"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
