import React from "react";
import Link from "next/link";
import LimeLight from "@/public/limelight-logo.png";
import Image from "next/image";
import { navItems } from "@/lib/fake-data";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-between items-stretch border border-light-gray m-5 px-5 py-3 space-x-5 rounded-2xl text-medium-white ">
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
