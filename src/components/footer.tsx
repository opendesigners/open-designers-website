import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "./icon";

const Footer = () => {
  return (
    <footer className="bg-black px-4 py-20">
      <div className="container mx-auto">
        <div className="w-fit mx-auto">
          <div className="space-y-4">
            <Image
              src={logo}
              alt="Open Designers logo"
              className="w-[200px] mx-auto"
              unoptimized
            />

            <div className="flex items-center justify-around gap-2">
              <div className="flex items-center gap-2 text-[#FFFFFF80] underline underline-offset-4 [text-decoration-color:#FFFFFF80]">
                <div className="bg-[#FFFFFF80] rounded-full w-[8px] h-[8px]" />
                <Link
                  href="https://github.com/opendesigners"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-base hover:text-white transition-colors"
                >
                  Github
                </Link>
              </div>

              <div className="flex items-center gap-2 text-[#FFFFFF80] underline underline-offset-4 [text-decoration-color:#FFFFFF80]">
                <div className="bg-[#FFFFFF80] rounded-full w-[8px] h-[8px]" />
                <Link
                  href="https://www.figma.com/@opendesigners"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-base hover:text-white transition-colors"
                >
                  Figma Community
                </Link>
              </div>
            </div>

            <Link
              href="/privacy"
              className="text-base text-[#FFFFFF80] flex items-center justify-center hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <div className="flex items-center gap-4 justify-center">
              <Link
                href="https://x.com/open_designers"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <TwitterIcon />
              </Link>

              <Link
                href="#"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <InstagramIcon />
              </Link>

              <Link
                href="https://www.linkedin.com/company/opendesigners"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                <LinkedinIcon />
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-[#FFFFFF80] mt-10">
          2022-present | Made with LOVE and Open Source
        </p>
      </div>
    </footer>
  );
};

export default Footer;
