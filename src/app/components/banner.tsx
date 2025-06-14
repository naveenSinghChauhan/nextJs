"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const words = [
  "Business Automation",
  "Data & AI",
  "Cloud Implementation",
  "Application Development",
  "Digital Transformation",
  "Microsoft Power Platform",
];

const Banner: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);

        if (nextText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500); 
        }
      } else {
        const nextText = currentWord.slice(0, displayedText.length - 1);
        setDisplayedText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/video-1.mp4"
        autoPlay
        muted
        loop
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 bg-black/40 text-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2">
          Your Digital Partner for
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-[60px]">
          <span className="inline-block transition-all duration-200 ease-in-out">
            {displayedText}
          </span>
        </h1>

        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 text-[20px] font-semibold flex items-center gap-2"
            style={{ boxShadow: '5px 5px 0px rgba(255, 255, 255, 0.3)' }}
            >
            Schedule a Call <ArrowUpRight size={20} />
          </a>
          <a
            href="#"
            className="border border-white hover:bg-white hover:text-black text-white px-6 py-4 text-[20px] font-semibold flex items-center gap-2"
            style={{ boxShadow: '5px 5px 0px rgba(255, 255, 255, 0.3)' }}
            >
            Case Studies <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
