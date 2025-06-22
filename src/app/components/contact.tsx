"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const offices = [
  {
    country: "UNITED STATES",
    flag: "https://flagcdn.com/w80/us.png",
    cities: [
      {
        name: "Atlanta",
        address: "925 Battery Ave SE, Atlanta, GA, United States 30339",
      },
      {
        name: "Cincinnati",
        address:
          "727 Forum Apartments, Apt #705W, Martin Luther King Dr W, Cincinnati, OH 45220",
      },
    ],
    phone: "+1-315-381-4100",
  },
  {
    country: "UAE",
    flag: "https://flagcdn.com/w80/ae.png",
    address: "Sharjah Media City Building, Al Dhaid Street, Sharjah, UAE-51500",
    phone: "+971-564176705",
  },
  {
    country: "AUSTRALIA",
    flag: "https://flagcdn.com/w80/au.png",
    address:
      "Unit 2, 32 Homebush Road, Strathfield, New South Wales Australia -2135",
    phone: "+61-2-8003-4196",
  },
  {
    country: "CANADA",
    flag: "https://flagcdn.com/w80/ca.png",
    address: "Apt #407, 6060 cote st luc rd. H3X2G8, Montreal, canada",
    phone: "+1-5147051317",
  },
  {
    country: "INDIA",
    flag: "https://flagcdn.com/w80/in.png",
    address:
      "3/1, Chitrakoot Scheme, Sector -3, Vaishali Nagar, Jaipur, Rajasthan 302021",
    phone: "+91-72970-00999",
  },
  {
    country: "UNITED KINGDOM",
    flag: "https://flagcdn.com/w80/gb.png",
    address: "15 King St, London EC2V 8EA, United Kingdom",
  },
  {
    country: "ISRAEL",
    flag: "https://flagcdn.com/w80/il.png",
    address: "Flamingo 5, Atlit, Israel",
    phone: " +972-58-494-9995",
  },
];

export default function ContactSection() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left - Offices */}
        <div className="grid sm:grid-cols-2 gap-8">
          {offices.map((office, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2 mb-1 text-lg font-bold">
                <span className="mr-3 w-8 h-8 flex items-center justify-center shadow">
                  <img
                    src={office.flag}
                    alt={office.flag + " icon"}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </span>
                {office.country}
              </div>
              {office.cities ? (
                office.cities.map((city, i) => (
                  <div key={i} className="mb-2">
                    <p className="font-semibold">{city.name}</p>
                    <p className="text-sm text-gray-300">{city.address}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-300 mb-2">{office.address}</p>
              )}
              {office.phone && (
                <p className="flex items-center gap-2 text-blue-400 mt-1 font-medium">
                  <FaPhoneAlt />
                  {office.phone}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white text-black p-6 rounded-md -mt-45">
          <h2 className=" text-[28px] text-2xl md:text-3xl font-bold mb-8">
            For Project Inquiries
          </h2>
          <p className="text-black mb-6 text-sm my-8">
            We appreciate your interest in The NineHertz. Fill out the form and
            we will reach you in less than 24 Hours.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                className="w-full border-b-2 border-gray-300 focus:outline-none py-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Mobile Number</label>
              <input
                type="text"
                placeholder="+91"
                className="w-full border-b-2 border-gray-300 focus:outline-none py-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                className="w-full border-b-2 border-gray-300 focus:outline-none py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Budget (In USD)
              </label>
              <select className="w-full border-b-2 border-gray-300 bg-white focus:outline-none py-1">
                <option>Select Budget</option>
                <option value="1000">$1000 - $5000</option>
                <option value="5000">$5000 - $10,000</option>
                <option value="10000">$10,000+</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium mb-1">Attach Any File!</p>
            <label
              htmlFor="file-upload"
              className="border border-gray-300 border-2 w-full p-4 py-8 flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <span className="text-blue-500 text-2xl">⬆</span>
              <p className="text-sm text-gray-500">
                Browse or Drag and Drop File Here
              </p>
              <input id="file-upload" type="file" className="hidden" />
            </label>
          </div>

          <div className="mt-6 flex flex-col md:flex-row gap-4 items-stretch ">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full border-b-2 border-gray-300 focus:outline-none py-1"
                placeholder="Write your message"
              />
            </div>
            <div className="flex items-end justify-end">
              <button className="bg-blue-600 text-white font-semibold rounded-full w-32 h-32 text-sm hover:bg-blue-700 transition-all">
                SEND INQUIRY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
