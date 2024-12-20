"use client";

import React from "react";
import Link from "next/link";
import LimeLight from "@/public/limelight-logo.png";
import Image from "next/image";
import { navItems } from "@/lib/fake-data";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <ul className="flex flex-row justify-between items-center border border-light-gray m-5 px-5 py-3 space-x-5 rounded-2xl text-medium-white">
        {navItems.map((item, index) => (
          <li>
            <Link key={item.id} href={item.href} className="flex items-center">
              {index === 0 && (
                <Image src={LimeLight} alt="LimeLight" width={30} height={30} />
              )}
              <span className="px-[12px] text-lg font-medium text-shadow hover:text-white transition duration-300">
                {item.name}
              </span>
            </Link>
          </li>
        ))}

        <button
          className="hover:dark:bg-light-gray hover:bg-primary-white rounded-sm py-2 px-1 transition duration-300"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <Sun size={18} color="white" />
          ) : (
            <Moon size={18} color="black" />
          )}
        </button>

        <li>
          <Link href={"/components"}>
            <span className="px-[12px] text-lg font-medium text-shadow bg-light-gray py-[0.55rem] rounded-xl hover:text-white transition duration-300">
              Docs
            </span>
          </Link>
        </li>

        <li>
          <Link href={"/"}>
            <span className="px-[32px] text-lg font-medium text-shadow bg-primary-white py-[0.55rem]  rounded-xl text-black hover:bg-white transition duration-300">
              Log in
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
