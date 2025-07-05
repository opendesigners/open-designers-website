import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import discord from "@/public/discord.png";
import github from "@/public/github.png";
import Link from "next/link";

const CustomButton = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
      <Link
        href="https://discord.gg/ZWSCxZcA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          className="text-[#FFF3E6] bg-gradient-to-t from-[#F08002] to-[#F08002] relative overflow-hidden rounded-full h-15 px-12 w-[250px] shadow-[8px_38px_62px_0px_#00000080] shadow-[-3px_-4px_4px_0px_#964F004D_inset] hover:scale-105 hover:shadow-lg cursor-pointer transition-all duration-200"
          size="lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(254,238,219,0.3)] via-[rgba(254,247,238,0.12125)] to-transparent"></div>

          <span className="relative z-10 text-lg lg:text-xl font-medium">
            Join the crew now
          </span>

          <Image
            src={discord}
            alt="Discord logo icon"
            className="object-contain h-[25px] w-[25px]"
          />
        </Button>
      </Link>

      <Link
        href="https://github.com/opendesigners"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="bg-gradient-to-t from-[#2D2D2D] to-[#2D2D2D] text-[#FFFFFF] rounded-full h-15 px-12 w-[200px] relative overflow-hidden shadow-[3px_6px_12px_0px_#0000001A] shadow-[-3px_-4px_4px_0px_#8080804D_inset] hover:scale-105 hover:shadow-lg cursor-pointer transition-all duration-200">
          <div className="absolute inset-0 bg-[radial-gradient(75.98%_171.34%_at_0%_0%,rgba(254,238,219,0.3)_0%,rgba(254,247,238,0.12125)_51.5%,rgba(255,255,255,0)_100%)]"></div>
          <span className="relative z-10 text-lg lg:text-xl font-medium">
            Explore Github
          </span>
          <Image
            src={github}
            alt="GitHub logo icon"
            className="object-contain h-[25px] w-[25px]"
          />
        </Button>
      </Link>
    </div>
  );
};

export default CustomButton;
