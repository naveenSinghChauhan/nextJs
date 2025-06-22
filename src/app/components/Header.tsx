"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavItem, DropdownItem } from "@/app/types/navlinkType";
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };
  // useEffect(() => {
  //   if (openDropdown) {
  //     const dropdown = navLinks.find(
  //       (link) => link.label === openDropdown
  //     )?.dropdown;
  //     if (dropdown && dropdown.length > 0 && !selectedCategory) {
  //       setSelectedCategory(dropdown[0].category);
  //     }
  //   }
  // }, [openDropdown, selectedCategory]);
  useEffect(() => {
    if (openDropdown) {
      const dropdown = navLinks.find(
        (link: NavItem) => link.label === openDropdown && link.hasCategoryItem
      )?.dropdown;
      console.log("checking category", dropdown);
      if (dropdown && dropdown.length > 0) {
        setSelectedCategory(dropdown[0].category);
      }
    }
  }, [openDropdown]);
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50 transparent-header">
      <nav className="navbar-expand-lg">
        <div className="flex flex-col flex-row w-[100%] gap-[20px] justify-between items-center">
          <div className="navbar-header w-[10%]">
            <Link
              href="#"
              className="uppercase text-white px-[14px] py-[20px] font-[ChivoSemiBold] text-[14px] relative w-[70px] h-[70px]"
            >
              AptopsCloud
            </Link>
          </div>
          <div className="collapse navbar-collapse flex w-[90%] justify-between gap-[15px]">
            <ul className="flex flex-col w-[75%] justify-between flex-row navbar-nav">
              <li className="nav-item py-2 ai-bg relative">
                <Link
                  href="#"
                  className="text-gray-700 hover:text-blue-600 text-sm transition nav-link uppercase text-white px-[14px] py-[20px] font-[ChivoSemiBold] text-[14px] relative w-[70px] h-[70px]"
                >
                  &nbsp;
                </Link>
              </li>
              <li className=" nav-item  py-2 relative">
                <Link
                  href="#"
                  className={`text-gray-700 hover:text-blue-600 text-sm font-medium transition nav-link uppercase text-white px-[14px] py-[20px] font-[ChivoSemiBold] text-[14px] relative`}
                >
                  Staffing
                </Link>
              </li>
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className={`nav-item py-2 relative ${
                    link.dropdown && "dropdown mega-dropdown"
                  }`}
                >
                  <Link
                    href={link.href}
                    className={`dropdown-toggle text-gray-700 hover:text-blue-600 text-sm font-medium transition flex items-center nav-link uppercase text-white px-[14px] py-[20px] font-[ChivoSemiBold] text-[14px] relative ${
                      openDropdown === link.label
                        ? "active text-[#016cd3] font-bold underline"
                        : ""
                    }`}
                    onClick={() =>
                      link.dropdown && handleDropdownToggle(link.label)
                    }
                  >
                    {link.label}
                    {link.dropdown && (
                      <>
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
                        <abbr className="arrow-up w-[15px] h-[10px] absolute bottom-[-8px] left-0 right-0 mx-auto border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white hidden"></abbr>
                      </>
                    )}
                  </Link>
                  {link.dropdown && (
                    <div
                      className={`absolute top-full left-0 bg-white shadow-lg rounded mt-2 z-50 dropdown-menu mega-dropdown-menu transition-all duration-300 ease-in-out transform ${
                        openDropdown === link.label
                          ? "opacity-100 scale-y-100 visible"
                          : "opacity-0 scale-y-95 invisible"
                      } origin-top`}
                      // style={{
                      //   display: openDropdown === link.label ? "block" : "none",
                      // }}
                    >
                      <div className="container custom-container">
                        <div className="all-single-menu absolute right-[26px] top-[8px]">
                          <Link
                            href={link.href}
                            className="block mb-2 font-semibold text-blue-600"
                          >
                            All {link.label}
                            <FontAwesomeIcon icon={faAngleRight} />
                          </Link>
                        </div>
                        <div className="row flex flex-wrap -mx-3">
                          <div
                            className={`menu-scroll px-2 ${
                              link.hasCategoryItem
                                ? "w-full sm:w-8/12"
                                : "w-full sm:w-full"
                            }`}
                          >
                            <ul
                              className="nav nav-tabs flex flex-wrap pl-0 mb-0 list-none"
                              id="menuoneTab"
                              role="tablist"
                            >
                              {link.dropdown.map((category) =>
                                link.hasCategoryItem ? (
                                  <li
                                    key={category.category}
                                    className={`nav-item ${
                                      link.hasCategoryItem
                                        ? "basis-1/2"
                                        : "basis-1/3"
                                    } flex gap-3 items-start p-3 rounded-lg hover:bg-gray-100 cursor-pointer ${
                                      selectedCategory === category.category
                                        ? "bg-gray-100"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      setSelectedCategory(category.category)
                                    }
                                  >
                                    <Link
                                      href={category.categoryHref}
                                      className="nav-link clr1"
                                    >
                                      {category.category}
                                      <p>{category.description}</p>
                                    </Link>
                                  </li>
                                ) : (
                                  <li
                                    key={category.category}
                                    className={`nav-item ${
                                      link.hasCategoryItem
                                        ? "basis-1/2"
                                        : "basis-1/3"
                                    } flex gap-3 items-start p-3 rounded-lg hover:bg-gray-100 cursor-pointer ${
                                      selectedCategory === category.category
                                        ? "bg-gray-100"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={category.categoryHref}
                                      className="nav-link clr1"
                                    >
                                      {category.category}
                                      <p>{category.description}</p>
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                          <div className="sm:w-1/3 w-1/3 bdr">
                            <div
                              className="tab-content max-h-[550px] overflow-y-auto overflow-x-hidden"
                              id="menuOneTabContent"
                            >
                              <div
                                className="tab-pane fade"
                                id={`${selectedCategory}-id`}
                                role="tabpanel"
                              >
                                {selectedCategory &&
                                  link?.dropdown &&
                                  (() => {
                                    const selectedCat:
                                      | DropdownItem
                                      | undefined = link.dropdown.find(
                                      (cat) => cat.category === selectedCategory
                                    );

                                    if (!selectedCat || !selectedCat?.items)
                                      return null;

                                    return (
                                      <ul className="sub-menu p-4">
                                        <li className="mb-0 py-[5px]">
                                          <h3 className="f-22 sub-heading inline-block font-[ChivoBold]">
                                            <Link
                                              href={selectedCat.categoryHref}
                                              className=" text-black hover:text-[#016cd3] items-start leading-[22px] font-bold pl-0 no-underline"
                                            >
                                              {selectedCat.category}
                                              {/* <abbr className="arrow">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                              </abbr> */}
                                            </Link>
                                          </h3>
                                        </li>

                                        {selectedCat.items.map((item, idx) => (
                                          <li key={idx} className="py-[5px] ">
                                            <Link
                                              href={item.href}
                                              className="items-start text-black leading-[22px hover:text-[#016cd3] text-[0.9rem] font-bold pl-0 no-underline"
                                            >
                                              <FontAwesomeIcon
                                                icon={faAngleRight}
                                                className="text-gray-600 mr-[10px] mt-[3px] text-[#bdbdbd "
                                              />
                                              {item.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    );
                                  })()}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
              {/* <li className="nav-item px-2 lg:px-3 py-2 spacer"></li> */}
            </ul>
            <ul className="action-item flex justify-evenly w-[25%] navbar-nav">
              <li className="nav-item quote-btn z-10 self-center">
                <Link
                  href="#"
                  className="nav-link bg-white text-[#016cd3] rounded-full flex items-center gap-[8px] whitespace-nowrap px-[15px] py-[10px] uppercase transition-transform duration-200 ease-linear font-bold"
                >
                  Sign-up
                  <i className="arrow"></i>
                </Link>
              </li>
              <li className="nav-item quote-btn z-10 self-center">
                <Link
                  href="#"
                  className="nav-link bg-white text-[#016cd3] rounded-full flex items-center gap-[8px] whitespace-nowrap px-[12px] py-[10px] uppercase transition-transform duration-200 ease-linear font-bold"
                >
                  Login
                  <i className="arrow"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="mob-menu">
      <button onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
    </header>
  );
}
