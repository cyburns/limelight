import React from "react";
import Link from "next/link";

const navItems = [
  {
    id: 1,
    name: "Limelight",
    href: "/",
  },
  {
    name: "Features",
    href: "/",
  },
  {
    name: "Docs",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  },
  {
    name: "Company",
    href: "/",
  },
];

const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-center items-center border border-light-gray m-5 p-5 space-x-5 rounded-2xl">
        {navItems.map((item) => (
          <li>
            <Link key={item.id} href={item.href}>
              <span className="px-[12px] text-lg font-medium text-shadow">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
