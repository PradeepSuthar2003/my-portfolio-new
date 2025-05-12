"use client";

import React, { useState } from "react";
import MenuOpenBtn from "@/public/techImg/menu-svgrepo-com.svg";
import CloseBtn from "@/public/techImg/close-svgrepo-com.svg";
import Image from "next/image";

const HEADER_MENUS = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Experience",
    href: "#experience",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-around md:justify-around">
      <div className="text-blue-200 p-5 text-2xl">PRADEEP SUTHAR</div>
      <div className="hidden pl-2 pr-2 gap-5 md:flex">
        {HEADER_MENUS.map((menu) => (
          <a
            href={menu.href}
            key={menu.title}
            className="text-lg cursor-pointer"
          >
            {menu.title}
          </a>
        ))}
      </div>
      <div
        className="flex md:hidden cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Image src={MenuOpenBtn} alt="Open menu" width={24} height={24} />
      </div>
      <div
        className={`${
          open ? "translate-x-0" : "translate-x-52"
        } transition-all top-0 right-0 fixed bg-slate-500 h-[100vh] min-w-52 w-50 p-5`}
      >
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Image src={CloseBtn} alt="Close btn" width={24} height={24} />
        </div>
        {HEADER_MENUS.map((menu) => (
          <a
            href={menu.href}
            key={menu.title}
            className="text-lg cursor-pointer block pt-2 pb-2"
          >
            {menu.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
