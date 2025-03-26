"use client";

import { GridContainer } from "../GridContainer";
import Image from "next/image";
import { ItemMenu } from "./itemMenu";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const menuItems = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/products",
    title: "Produtos",
  },
  {
    url: "/resources",
    title: "Resources",
  },
  {
    url: "/pricing",
    title: "Pricing",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-16 md:h-[80px] bg-white border-b border-b-gray-100 flex items-center">
      <GridContainer>
        <div className="flex items-center justify-between w-full">
          <div className="flex-shrink-0">
            <Image
              src="/logomark.svg"
              width={40}
              height={40}
              alt="Logo Untitled UI"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </div>

          <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex gap-6 lg:gap-8">
              {menuItems.map((item, index) => (
                <ItemMenu key={index} url={item.url} title={item.title} />
              ))}
            </div>
          </nav>

          <div className="flex-shrink-0 md:invisible">
            <div className="w-8 h-8 md:w-10 md:h-10"></div>
          </div>

          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40 p-6 overflow-y-auto">
            <nav className="flex flex-col gap-6">
              {menuItems.map((item, index) => (
                <ItemMenu
                  key={index}
                  url={item.url}
                  title={item.title}
                  mobile
                  onClick={() => setMobileMenuOpen(false)}
                />
              ))}
            </nav>
          </div>
        )}
      </GridContainer>
    </header>
  );
}
