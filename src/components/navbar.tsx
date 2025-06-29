"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/public/logo.png";
import pixel from "@/public/pixel-logo-icon.png";
import { MenuIcon } from "lucide-react";
import BlackButton from "./black-button";

const links = [
  { label: "Home", route: "/" },
  { label: "Open Designers", route: "#" },
  { label: "Open Devs", route: "#" },
  { label: "Open Hangouts", route: "#" },
  { label: "Contributions", route: "#" },
  { label: "Teams", route: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="container mx-auto pt-6 px-4">
      <div className="p-3 relative bg-[#1C1C1CE0] rounded-t-lg lg:rounded-t-full rounded-b-lg lg:rounded-b-full flex justify-between items-center">
        <Link href="/" onClick={() => setOpen(false)}>
          <div
            className="flex items-baseline cursor-pointer object-fit w-[120px] lg:w-[130px]"
            id="logo-cover"
          >
            <Image src={logo} alt="logo" />
          </div>
        </Link>

        <ul
          className={`${
            open ? "flex -mt-2" : "hidden"
          }  lg:items-center gap-8 flex-col lg:flex-row lg:mt-0 lg:flex absolute top-full left-0 right-0 bg-[#1C1C1CE0] lg:relative lg:bg-transparent p-4 lg:p-0 rounded-b-xl lg:rounded-none`}
          id="links"
        >
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.route}
                className={`relative text-[#FFFFFF99] ${
                  pathname === `${link.route}` ? "text-[#FFFFFF]" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center gap-2">
          <BlackButton className="h-10 lg:h-12">
            <Image src={pixel} alt="pixel" className="w-6 h-6" />
            <span className="font-light">Pixel Scout</span>
          </BlackButton>

          <div className="lg:hidden cursor-pointer">
            <button onClick={() => setOpen((open) => !open)}>
              <MenuIcon color="#fff" size={30} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
