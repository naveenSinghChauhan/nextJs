"use client";
import NewsletterWidget from "./newsletter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/#" },
    { icon: <FaXTwitter />, href: "https://www.twitter.com/#" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/#" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/#" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/#" },
    { icon: <FaBehance />, href: "https://www.behance.net/#" },
    { icon: <FaDribbble />, href: "https://www.dribbble.com/#" },
  ];

  const services = [
    { label: "AI Development Services", href: "#" },
    { label: "Generative AI Development Services", href: "#" },
    { label: "Product Engineering", href: "#" },
    { label: "Enterprise Software Development", href: "#" },
    { label: "Mobile App Development", href: "#" },
    { label: "Ecommerce Development", href: "#" },
    { label: "Web Development", href: "#" },
    { label: "Hire Resources", href: "#" },
    { label: "Digital Marketing", href: "#" },
    { label: "Game Development", href: "#" },
  ];

  const technologies = [
    { label: "Augmented Reality", href: "#" },
    { label: "Virtual Reality", href: "#" },
    { label: "Progressive Web App", href: "#" },
    { label: "Artificial Intelligence", href: "#" },
    { label: "Machine Learning Development", href: "#" },
    { label: "Internet Of Things", href: "#" },
    { label: "Cloud Computing", href: "#" },
    { label: "Blockchain Development", href: "#" },
    { label: "Ui / Ux Design", href: "#" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Career", href: "#" },
    { label: "Infrastructure", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Referral Partner Program", href: "#" },
    { label: "Insights", href: "#" },
    { label: "News", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const footerLinks = [
    { label: "Privacy Policy", href: "#pr" },
    { label: "Disclaimer", href: "#dis" },
    { label: "Terms and Conditions", href: "#t&c" },
    { label: "Standard Policies", href: "#s&p" },
  ];

  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 } // adjust based on when you want to trigger
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <footer className="bg-gray-50 text-black px-6 pt-12 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-[23px] text-lg font-bold mb-4">SERVICES</h3>
          <ul className="space-y-2">
            {services.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[16px] text-gray-800 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className=" text-[23px] text-lg font-bold mb-4">TECHNOLOGIES</h3>
          <ul className="space-y-2">
            {technologies.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[16px] text-gray-800 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[23px] font-bold mb-4">COMPANY</h3>
          <ul className="space-y-2">
            {companyLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[16px] text-gray-800 hover:text-blue-500 transition-colors duration-200 no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[23px] text-lg font-bold mb-4">CONTACTS</h3>
          <div className="space-y-4">
            <p className="text-[18px] flex items-center gap-2 text-sm">
              <HiOutlinePhone />
              <a
                href="tel:+13153814100"
                className="hover:text-blue-500 no-underline"
              >
                +1-315-381-4100
              </a>
            </p>

            <p className="text-[18px] flex items-center gap-2 text-sm">
              <HiOutlineMail />
              <a
                href="mailto:sales@theninehertz.com"
                className="hover:text-blue-500 no-underline"
              >
                sales@theninehertz.com
              </a>
            </p>

            <div className="mt-4">
              <h4 className=" text-[16px] text-sm font-semibold mb-1">
                Rated on Clutch Review
              </h4>
              <div className="flex items-center gap-2">
                <Image src="/ai-animation.gif" alt="logo" className="w-6 h-6" />
                <span className="text-red-500 font-bold">4.8</span>
                <span className="text-yellow-500 text-xs">★★★★★</span>
                <span className="text-xs text-gray-600">(117)</span>
              </div>
            </div>

            <div
              className={`flex items-center gap-6 mt-4 transition-all duration-700 transform ${
                inView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
              ref={ref}
            >
              <Image src="/ai-animation.gif" alt="first-img" className="h-6" />
              <Image src="/ai-animation.gif" alt="second-img" className="h-6" />
              <Image src="/ai-animation.gif" alt="third-img" className="h-6" />
            </div>

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 sm:gap-3 mt-6 text-white">
              {socialLinks.map(({ icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0A1D56] p-1.5 sm:p-2 rounded-full text-xs sm:text-sm flex items-center justify-center"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <NewsletterWidget />

      <div className="mt-8">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-6 gap-4 text-gray-700 border-t border-gray-300">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2 font-medium">
            {footerLinks.map((link, index) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="text-[16px] hover:text-blue-500 transition-colors no-underline"
                >
                  {link.label}
                </a>
                {index < footerLinks.length - 1 && (
                  <span className="hidden md:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="text-[16px] text-center md:text-right font-semibold">
            Copyright © 2025 xyz_abcd.com, All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
