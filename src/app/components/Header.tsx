'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/constants/navLinks';



export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Toggle dropdown for desktop
  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#">
          {/* <Image
            src="https://theninehertz.com/wp-content/themes/ninehertz/assets2024/images/logo.svg"
            alt="The NineHertz India"
            width={200}
            height={57}
            className="dark:hidden"
          />
          <Image
            src="https://theninehertz.com/wp-content/themes/ninehertz/assets2024/images/logo-dark.svg"
            alt="The NineHertz India"
            width={200}
            height={57}
            className="hidden dark:block"
          />
          <Image
            src="https://theninehertz.com/wp-content/themes/ninehertz/assets2024/images/logo-mobile.svg"
            alt="The NineHertz India"
            width={80}
            height={57}
            className="md:hidden"
          /> */}
          AptopsCloud
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white text-sm font-medium transition bg-cover bg-no-repeat bg-center px-4 py-2 rounded"
            style={{ backgroundImage: "url('/ai-animation.gif')" }}
          >
            <Link href="#">AI Devs</Link>
          </motion.div>
          <Link
            href="#"
            className="text-gray-700 hover:text-blue-600 text-sm font-medium transition"
          >
            Staffing
          </Link>
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              <Link
                href={link.href}
                className="text-gray-700 hover:text-blue-600 text-sm font-medium transition flex items-center"
                onClick={() => link.dropdown && handleDropdownToggle(link.label)}
              >
                {link.label}
                {link.dropdown && (
                  <span className="ml-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                )}
              </Link>
              {link.dropdown && openDropdown === link.label && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded mt-2 w-[600px] z-50">
                  <div className="p-4">
                    <Link href={link.href} className="block mb-2 font-semibold text-blue-600">
                      All {link.label} <span className="ml-1">→</span>
                    </Link>
                    <div className="grid grid-cols-2 gap-4">
                      {link.dropdown.map((category) => (
                        <div key={category.category}>
                          <h3 className="font-semibold text-gray-800">{category.category}</h3>
                          <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                          <ul>
                            {category.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  className="text-sm text-gray-700 hover:text-blue-600 flex items-center"
                                >
                                  <span className="mr-1">→</span> {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
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
          <Link
            href="/services/artificial-intelligence-development-company"
            className="block text-gray-700 hover:text-blue-600 text-base font-medium transition"
            onClick={() => setMobileOpen(false)}
          >
            AI Devs
          </Link>
          <Link
            href="/services/it-staff-augmentation"
            className="block text-gray-700 hover:text-blue-600 text-base font-medium transition"
            onClick={() => setMobileOpen(false)}
          >
            Staffing
          </Link>
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block text-gray-700 hover:text-blue-600 text-base font-medium transition"
                onClick={() => !link.dropdown && setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="pl-4 space-y-2">
                  {link.dropdown.map((category) => (
                    <div key={category.category}>
                      <h3 className="font-semibold text-gray-800">{category.category}</h3>
                      {category.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block text-sm text-gray-700 hover:text-blue-600"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}