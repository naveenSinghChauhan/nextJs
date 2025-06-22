"use client";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavItem, DropdownItem } from "@/app/types/navlinkType";
type MobileMenuProps = {
    showMobile: boolean;
};

export default function MobileMenu({ showMobile }: MobileMenuProps) {
    const [open, setOpen] = useState(false);
    const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());
    const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());
    const toggleMenu = (label: string) => {
        const updatedMenus = new Set(openMenus);
        if (updatedMenus.has(label)) {
            updatedMenus.delete(label);
        } else {
            updatedMenus.add(label);
        }
        setOpenMenus(updatedMenus);
    };
    const toggleCategory = (categoryId: string) => {
        const updatedCategories = new Set(openCategories);
        if (updatedCategories.has(categoryId)) {
            updatedCategories.delete(categoryId);
        } else {
            updatedCategories.add(categoryId);
        }
        setOpenCategories(updatedCategories);
    };
    return (
        <div className={`mobile-nav2 mobile-main-menu ${showMobile ? 'show-menu block' : 'hidden'}`}>
            <div className="container-fluid form-controler w-full px-3 mx-auto">
                <div className="mobile-menu fixed-mobile-menu"><i className="fa fa-bars"></i></div>
                <div className="mobile_version fixed top-0 bottom-0 left-0 right-full overflow-y-auto overflow-x-hidden bg-white z-[999999] animate-fadein">
                    <div className="menu-mobile-menu-container  z-[999999] w-[80vw] bg-[#016cd3] min-h-screen box-border">
                        <ul className="nav navbar-nav flex flex-col pl-0 mb-0 list-none bg-transparent m-0 flex flex-wrap">
                            <li className="relative m-0">
                                <Link href={'#'} className="block text-[16px] text-white bg-transparent p-[15px] border-0 border-b border-b-[rgba(36,195,255,0.3)] rounded-none leading-normal">
                                    AI
                                </Link>
                            </li>
                            <li className="relative m-0">
                                <Link href={'#'} className="block text-[16px] text-white bg-transparent p-[15px] border-0 border-b border-b-[rgba(36,195,255,0.3)] rounded-none leading-normal">
                                    Staffing
                                </Link>
                            </li>
                            {navLinks.map((link) => (
                                <li
                                    key={link.label}
                                    className="relative m-0">
                                    {link.hasCategoryItem || link.dropdown ? (
                                        <>
                                            <Link href={'#'} className="block text-[16px] text-white bg-transparent p-[15px] border-0 border-b border-b-[rgba(36,195,255,0.3)] rounded-none leading-normal">
                                                {link.label}
                                            </Link>
                                            <FontAwesomeIcon
                                                icon={openMenus.has(link.label) ? faMinus : faPlus}
                                                className="  absolute right-0 top-[24px] h-[46px] w-[40px] text-center cursor-pointer text-[15px] z-[1] text-white font-black bg-transparent block"
                                                onClick={() => toggleMenu(link.label)}
                                            />
                                        </>
                                    ) : (
                                        (
                                            <Link
                                                href={link.href}
                                                className="flex-1 block text-[16px] text-white bg-transparent p-[15px] border-0 border-b border-b-[rgba(36,195,255,0.3)] rounded-none leading-normal"
                                            >
                                                {link.label}
                                            </Link>
                                        )
                                    )}

                                    {link.dropdown && openMenus.has(link.label) && (
                                        <ul className=" sub-menu pl-4 list-none">
                                            {link.dropdown.map((dropdownItem:DropdownItem) => (
                                                <li key={dropdownItem.categoryId} className="relative m-0">
                                                    <Link
                                                        href={dropdownItem.categoryHref}
                                                        className="flex-1 block text-[14px] text-white bg-transparent p-[15px] border-0 border-b border-b-[rgba(36,195,255,0.3)] rounded-none leading-normal"
                                                    >
                                                        {dropdownItem.category}
                                                    </Link>
                                                    {link.hasCategoryItem && dropdownItem?.items && (
                                                        <FontAwesomeIcon
                                                            icon={openCategories.has(dropdownItem.categoryId) ? faMinus : faPlus}
                                                            className="absolute right-0 top-[24px] h-[46px] w-[40px] text-center cursor-pointer text-[15px] z-[1] text-white font-black bg-transparent"
                                                            onClick={() => toggleCategory(dropdownItem.categoryId)}
                                                        />
                                                    )}
                                                {link.hasCategoryItem && dropdownItem.items && openCategories.has(dropdownItem.categoryId) && (
                                            <ul className="pl-4 list-none">
                                            {dropdownItem.items.map((item) => (
                                                <li key={item.label} className="relative m-0">
                                                <Link
                                                    href={item.href}
                                                    className="block text-[14px] text-white bg-transparent p-[15px] border-0 border-b border-b-[rgba(36,195,255,0.3)] rounded-none leading-normal"
                                                >
                                                    {item.label}
                                                </Link>
                                                </li>
                                            ))}
                                            </ul>
                                        )}
                                                </li>

                                            ))}

                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
