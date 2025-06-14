import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Banner: React.FC = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
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

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 bg-black/40 text-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2">
          Your Digital Partner for
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Digital Transformation
        </h1>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Schedule a Call Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-md flex items-center gap-2">
            Schedule a Call <ArrowUpRight size={18} />
          </button>

          {/* Case Studies Button */}
          <button className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 text-lg font-semibold rounded-md flex items-center gap-2">
            Case Studies <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
