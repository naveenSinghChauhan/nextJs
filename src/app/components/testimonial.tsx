"use client";

import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

const testimonials = [
  {
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    quote:
      "The commitment shown by the app development team was outstanding. The suggestions provided helped me make better decisions. I highly recommend them.",
    name: "Jade Punski",
    role: "Co-founder / CEO",
    company: "DogPack",
    companyUrl: "https://dogpack.com",
    avatar: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    quote:
      "mgirg r igi g knvnw oniwenkr g v d The commitment shown by the app development team was outstanding. The suggestions provided helped me make better decisions. I highly recommend them.",
    name: "Jade Punski",
    role: "Co-founder / CEO",
    company: "DogPack",
    companyUrl: "https://dogpack.com",
    avatar: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    quote:
      "fkengonwgnw  feowgniewing w wieonienge The commitment shown by the app development team was outstanding. The suggestions provided helped me make better decisions. I highly recommend them.",
    name: "Jade Punski",
    role: "Co-founder / CEO",
    company: "DogPack",
    companyUrl: "https://dogpack.com",
    avatar: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  },
  // Add more testimonials if needed
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-[#071739] text-white px-4 py-12 md:px-20 relative">
      {/* Top arrows */}
      <div className="absolute top-6 right-6 flex gap-4 z-10">
        <button
          onClick={prev}
          className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-blue-600 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-blue-600 transition"
        >
          <FaChevronRight />
        </button>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Our Client Testimonials
      </h2>
      <p className="text-center mb-10 max-w-2xl mx-auto text-gray-300">
        We follow quality standards to deliver top mobile and web development services ensuring client satisfaction and retention.
      </p>

      <div className="flex flex-col md:flex-row items-start justify-evenly gap-8 md:gap-12">
        {/* Video thumbnail */}
        <div className="relative flex-1 rounded-xl overflow-hidden max-w-md">
          <img
            src={testimonial.thumbnail}
            alt="video thumbnail"
            className="w-full h-auto object-cover rounded-xl"
          />
          <a
            href={testimonial.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
              <FaPlay />
            </div>
          </a>
        </div>

        {/* Quote + Info */}
        <div className="flex-1 max-w-xl">
          <FaQuoteLeft className="text-blue-400 text-2xl mb-3" />
          <p className="text-lg mb-6 text-gray-100">{testimonial.quote}</p>
          <div className="flex items-center gap-3">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-bold text-white">{testimonial.name}</p>
              <p className="text-sm text-gray-400">
                {testimonial.role} -{" "}
                <a
                  href={testimonial.companyUrl}
                  className="text-blue-400 underline"
                  target="_blank"
                >
                  {testimonial.company}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
