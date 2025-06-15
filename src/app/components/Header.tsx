"use client";
import { useState,  useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
 

  // Toggle dropdown for desktop
  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };
   

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50 transparent-header">
        <nav className="hidden navbar-expand-lg md:block">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center px-4">
            <div className="navbar-header md:block">
              <Link href="#" className="uppercase text-white px-[14px] py-[20px] font-[ChivoSemiBold] text-[14px] relative w-[70px] h-[70px]">AptopsCloud</Link>
            </div>
            <div className="md:ml-auto">
              <ul className="flex flex-col md:flex-row space-x-4 navbar-nav">
                <li className="nav-item px-3 py-2 ai-bg relative">
                  <Link
                    href="#" 
                    className="text-gray-700 hover:text-blue-600 text-sm transition nav-link uppercase text-white px-[14px] py-[20px] font-[ChivoSemiBold] text-[14px] relative w-[70px] h-[70px]"
                  >
                    &nbsp;
                  </Link>
                </li>
                <li className=" nav-item px-3 py-2 relative">
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-blue-600 text-sm font-medium transition nav-link uppercase text-white px-[14px] py-[20px] font-[ChivoSemiBold] text-[14px] relative"
                  >
                    Staffing
                  </Link>
                </li>
                {navLinks.map((link) => (
                  <li key={link.label} className={`nav-item px-3 py-2 relative ${link.dropdown && 'dropdown mega-dropdown'}`}>
                    <Link
                      href={link.href}
                      className={`text-gray-700 hover:text-blue-600 text-sm font-medium transition flex items-center nav-link uppercase text-white px-[14px] py-[20px] font-[ChivoSemiBold] text-[14px] relative ${ openDropdown === link.label ? 'active text-[#016cd3] font-bold underline' : ''
                      }`
                    }
                      onClick={() =>
                        link.dropdown && handleDropdownToggle(link.label)
                      }
                    >
                      {link.label}
                      {link.dropdown && (
                        <span className="ml-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      )}
                    </Link>
                    {link.dropdown && openDropdown === link.label && (
                      <div className="absolute top-full left-0 bg-white shadow-lg rounded mt-2 w-[600px] z-50 dropdown-menu mega-dropdown-menu"
                      >
                        <div className="container custom-container">
                          <Link
                            href={link.href}
                            className="block mb-2 font-semibold text-blue-600"
                          >
                            All {link.label} <span className="ml-1">→</span>
                          </Link>
                          <div className="grid grid-cols-2 gap-4">
                            {link.dropdown.map((category) => (
                              <div key={category.category}>
                                <h3 className="font-semibold text-gray-800">
                                  {category.category}
                                </h3>
                                <p className="text-sm text-gray-600 mb-2">
                                  {category.description}
                                </p>
                                <ul>
                                  {category.items.map((item) => (
                                    <li key={item.label}>
                                      <Link
                                        href={item.href}
                                        className="text-sm text-gray-700 hover:text-blue-600 flex items-center"
                                      >
                                        <span className="mr-1">→</span>{" "}
                                        {item.label}
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
                  </li>
                ))}
                <li className="nav-item px-3 py-2 spacer">
                </li>
                <li className="nav-item quote-btn z-10">
                  <Link href="#" className="nav-link bg-white text-[#016cd3] rounded-full flex items-center gap-[10px] whitespace-nowrap px-[20px] py-[15px] uppercase transition-transform duration-200 ease-linear font-bold">Contact Us
                  <i className="arrow"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
       

      {/* Mobile Drawer */}
      {/* {mobileOpen && (
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
                      <h3 className="font-semibold text-gray-800">
                        {category.category}
                      </h3>
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
      )} */}
    </header>
  );
}
