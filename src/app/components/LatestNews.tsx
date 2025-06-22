"use client";

import Image from "next/image";

interface Article {
  title: string;
  date: string;
  imageUrl: string;
  link: string;
}

const articles: Article[] = [
  {
    title: "30 Top Mobile App Development Companies in USA (2025)",
    date: "December 7, 2023",
    imageUrl: "/Mobile-App.jpg",
    link: "#",
  },
  {
    title: "30 Top Mobile App Development Companies in India (2025)",
    date: "February 26, 2024",
    imageUrl: "/make-an-app-like-airbnb.webp", 
    link: "#",
  },
  {
    title:
      "How To Make an App Like Airbnb in 2025? [Development Cost & Features]",
    date: "July 25, 2024",
    imageUrl: "/mobile-app-development.jpg", 
    link: "#",
  },
];

const NewsSection = () => {
  return (
    <section className="bg-[#F7F8FA] py-10 px-4 md:px-10 lg:px-30">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
        Latest News & Insights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            className="group block hover:translate-y-[-15px] transition-transform duration-300"
          >
            <div className="hover: rounded-lg overflow-hidden">
              <Image
                src={article.imageUrl}
                alt={article.title}
                width={400}
                height={220}
                className="w-full h-[220px] object-cover"
              />
            </div>

            <p className="text-sm text-gray-500 mt-4 uppercase font-medium">
              {article.date}
            </p>

            <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors mt-1">
              {article.title}
            </h3>
          </a>
        ))}
      </div>

      <div className="mt-16 bg-[#F7F8FA]">
        <div className="max-w-6xl grid md:grid-cols-3 items-center py-10">

          <div>
            <p className="text-blue-600 text-sm font-bold uppercase mb-2">
              Get in Touch
            </p>
            <h3 className="text-[36px] font-bold text-black">
              For Work <br />Inquiry
            </h3>
            <p className=" text-[22px] text-base text-black mt-1">
              Mail to our sales <br /> department
            </p>
          </div>


          <div className="space-y-2 pt-8 text-blue-600 font-medium text-base md:text-lg">
            <p>
              <a href="mailto:sales@theninehertz.com" className=" text-[18px] hover:underline">
                sales@theninehertz.com
              </a>
            </p>
            <p>
              <a href="tel:+13153814100" className=" text-[18px] hover:underline">
                USA: +1-315-381-4100
              </a>
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default NewsSection;
