"use client";

import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";

const NewsletterWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute bottom-5 right-12 flex flex-col items-end">
      {isOpen && (
        <div className="bg-blue-800 text-white p-5 rounded-xl shadow-xl w-[300px] mb-3 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1 hover:rotate-[360deg] transition-transform border-white border-3 "
          >
            <MdClose size={20} />
          </button>

          <h3 className="text-lg font-semibold mb-3 text-black">
            Subscribe to Our Newsletter
          </h3>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-white flex-1 p-2 rounded-md text-black placeholder-gray-500 focus:outline-none"
            />
            <button className="bg-blue-300 text-white px-3 border-2 border-white rounded-md">
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-800 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all"
      >
        <HiOutlineMail size={24} />
      </button>
    </div>
  );
};

export default NewsletterWidget;
