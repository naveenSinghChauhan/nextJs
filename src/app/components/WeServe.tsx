"use client";
import React, { useState } from "react";
import {
  DollarSign,
  Heart,
  BookOpen,
  Factory,
  Truck,
  Smartphone,
  Plane,
  Building,
  ShoppingCart,
  Film,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const industriesData = [
  {
    id: "finance",
    name: "Finance",
    icon: DollarSign,
    description:
      "Our software for the banking and finance sector focuses on security, compliance, and user experience. We develop robust software that manages transactions, investments, and customer relationships.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    services: [
      { name: "Online Banking App Development", url: "#" },
      { name: "Investment Platform Solutions", url: "#" },
      { name: "Digital Wallet Integration", url: "#" },
      { name: "Loan Management Software", url: "#" },
      { name: "Blockchain Finance Solutions", url: "#" },
    ],
  },
  {
    id: "helathcare",
    name: "Healthcare",
    icon: Heart,
    description:
      "From telemedicine and health monitoring software to EHR/EMR systems, we have a dedicated team of healthcare software developers to assist you in every aspect of product building.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    services: [
      { name: "EHR Software", url: "#" },
      { name: "Medical Database Software", url: "#" },
      { name: "Healthcare App Development Company", url: "#" },
      { name: "Scheduling App Development", url: "#" },
      { name: "Doctor Appointment App Development", url: "#" },
      { name: "Healthcare Software Development Company", url: "#" },
      { name: "Fitness App Development Company", url: "#" },
    ],
  },
  {
    id: "education",
    name: "Education",
    icon: BookOpen,
    description:
      "Transforming traditional learning experiences with eLearning software development. We craft technological solutions equipped with features like virtual classrooms, student progress tracking, interactive learning, efficient administrations, and much more.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    services: [
      { name: "Educational App Development", url: "#" },
      { name: "Prototype Designing", url: "#" },
      { name: "Learning Management Systems", url: "#" },
      { name: "Assessment Software", url: "#" },
      { name: "Multimedia Tutorial Software", url: "#" },
      { name: "Student Progress App", url: "#" },
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    description:
      "We develop software for the manufacturing industry for better production efficiency, supply chain management, and quality control. Our digital solutions enable seamless operations, reduced costs, and better resource utilization.",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&h=300&fit=crop",
    services: [
      { name: "Supply Chain Management Software Development", url: "#" },
      { name: "Supply Chain Planning Software", url: "#" },
      { name: "ERP Software", url: "#" },
      { name: "PLM Software", url: "#" },
      { name: "Accounting Software", url: "#" },
    ],
  },
  {
    id: "logistics",
    name: "Logistics Transportation",
    icon: Truck,
    description:
      "Whether it is fleet management systems or shipment tracking apps, we have broad logistics software development services for businesses in the logistics industry. The software is designed to reduce costs and improve delivery times.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    services: [
      { name: "Logistics Software Development", url: "#" },
      { name: "Inventory Management Software Development", url: "#" },
      { name: "Warehouse Management System Development", url: "#" },
      { name: "Logistics App Development", url: "#" },
      { name: "Fleet Management Software Development", url: "#" },
    ],
  },
  {
    id: "on-demand",
    name: "On-demand",
    icon: Smartphone,
    description:
      "We empower the on-demand industry by creating custom applications and software for taxi booking, food delivery, and home services, making service seamless and customers happy.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    services: [
      { name: "On-Demand app development", url: "#" },
      { name: "Appointment app development", url: "#" },
      { name: "Booking system development", url: "#" },
      { name: "Class Scheduling Software Development", url: "#" },
      { name: "On-Demand Delivery App Development", url: "#" },
    ],
  },
  {
    id: "travel",
    name: "Travel & Hospitality",
    icon: Plane,
    description:
      "For tourism and hospitality businesses, we build software where hotel bookings, restaurant reservations, and bus/train tickets efficiently. Offer discounts and coupons to customers through software and skyrocket the number of customers seamlessly.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    services: [
      { name: "Travel App Development", url: "#" },
      { name: "Taxi Booking App Development", url: "#" },
      { name: "Food Delivery App Development", url: "#" },
      { name: "Hotel Booking App Development", url: "#" },
      { name: "Restaurant App Development", url: "#" },
      { name: "Ticket Booking App Development", url: "#" },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Building,
    description:
      "Simplifying the property presentation process for the realtors, our real estate apps assist in property management, client interactions, and streamline transaction processes. By equipping VR with software, we facilitate virtual tours for clients, deriving better decision-making.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    services: [
      { name: "Real Estate App Development", url: "#" },
      { name: "Property Management Software", url: "#" },
      { name: "Investment Analysis Tool", url: "#" },
      { name: "CRM Software", url: "#" },
      { name: "MLS Software", url: "#" },
      { name: "Compliance and Legal Software", url: "#" },
    ],
  },
  {
    id: "ecommerce",
    name: "eCommerce & Retail",
    icon: ShoppingCart,
    description:
      "From building a store on a popular marketplace to crafting a dedicated retail app for your business, we cover everything. Our experts understand your requirements, research your target audience, and tailor a digital solution to deliver a personalized shopping experience.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    services: [
      { name: "Payment Gateways", url: "#" },
      { name: "CRM Systems", url: "#" },
      { name: "POS Systems", url: "#" },
      { name: "Inventory Management Systems", url: "#" },
      { name: "Order Management Systems", url: "#" },
    ],
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: Film,
    description:
      "We dive into the entertainment industry to bring some great app ideas to life. We are experts at building streaming platforms, gaming applications, and multimedia management systems that cater to the needs of different types of target audiences.",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop",
    services: [
      { name: "Social Media App Development Company", url: "#" },
      { name: "Video Streaming App Development", url: "#" },
      { name: "Roku TV App Development", url: "#" },
      { name: "Smart TV App Development", url: "#" },
      { name: "Music Streaming App Development", url: "#" },
      { name: "OTT App Development", url: "#" },
      { name: "Event Management App Development", url: "#" },
    ],
  },
];


const WeServe = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("finance");
  const selected = industriesData.find((ind) => ind.id === selectedIndustry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Custom Software Development - Industries We Serve
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our tailored digital solutions drive innovation and digital
            transformation across diverse industries including healthcare, real
            estate, and education. We help industries grow digitally.
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {industriesData.map((industry) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.id}
                  layout
                  className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:bg-slate-700 cursor-pointer ${
                    selectedIndustry === industry.id
                      ? "bg-slate-800 text-white border-2 border-white translate-y-8"
                      : "text-slate-300 hover:text-white"
                  }`}
                  onClick={() => setSelectedIndustry(industry.id)}
                >
                  <Icon size={32} className="mb-2" />
                  <span className="text-sm font-medium text-center">
                    {industry.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected?.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="py-6 px-3  border-rounded-b-2">
              <div className="py-12 px-8 grid lg:grid-cols-2 gap-2 bg-slate-700 border-rounded">
                <div className="p-8 lg:p-12 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    {selected?.name}
                  </h2>
                  <p className="text-lg mb-8 leading-relaxed">
                    {selected?.description}
                  </p>

                  {selected?.services && (
                    <div className="space-y-4">
                      {selected.services.map((service, idx) => (
                        <div key={idx} className="flex items-center group">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-4">
                            <svg
                              className="w-4 h-4 text-white border-2 rounded-full group-hover:bg-white group-hover:text-slate-800 transition-colors duration-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="flex items-center flex-1">
                            <span className=" text-blue-500 text-lg font-medium group-hover:underline">
                              <a
                                href={service.url}
                                className="ml-2 text-blue-400 underline hover:text-blue-600 text-base"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {service.name}
                              </a>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative h-64 lg:h-full min-h-[400px] border-rounded p-8">
                  <img
                    src={selected?.image}
                    alt={`${selected?.name} industry`}
                    className="absolute inset-0 w-full h-full object-cover border-rounded"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-transparent lg:hidden"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WeServe;
