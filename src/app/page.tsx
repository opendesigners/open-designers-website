import React from "react";
import Header from "@/components/header";

import figma from "@/public/figma.png";
import code from "@/public/code.png";
import pixel from "@/public/pixel-logo-icon.png";
import Image from "next/image";
import BlackButton from "@/components/black-button";

import Link from "next/link";
import CustomButton from "@/components/custom-button";
import Details from "@/components/details";
import { does, team, trive } from "@/constants/data";

export default function Home() {
  return (
    <>
      <Header>
        <section className="p-4 container mx-auto lg:w-[700px] w-full space-y-10 py-20 lg:py-30">
          <h1 className="text-[2.5rem] lg:text-[5rem] text-center text-[#0E0E0E] font-[400] leading-[98%]">
            Design, build, and share together. We are open.
          </h1>

          <p className="text-center text-black text-lg">
            Open Designers is an open-source design and dev community shaping
            the future of digital products. We are an open-source design
            movement driven by the belief that good design should be accessible.
            We&apos;ve curated and created tools, Figma files, templates, and
            kits to help designers especially across Africa accelerate their
            work without hitting paywalls or bottlenecks. From free design kits
            and reusable code components to local meetups and UI inspiration we
            make it easier for designers and dev to launch and grow.
          </p>

          <div className="flex items-center flex-wrap justify-center gap-4">
            <BlackButton>
              <Image src={figma} alt="figma" className="w-6 h-6" />
              <span className="text-lg font-light">Figma Contributions</span>
            </BlackButton>

            <BlackButton>
              <Image src={code} alt="code" className="w-6 h-6" />
              <span className="text-lg font-light">Open Devs</span>
            </BlackButton>

            <BlackButton>
              <Image src={pixel} alt="pixel" className="w-6 h-6" />
              <span className="text-lg font-light">Pixel Scout</span>
            </BlackButton>
          </div>
        </section>
      </Header>

      <section className="bg-[#FBF9F5] px-4 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto">
            {does.map(({ title, description, img, link }, index) => (
              <aside
                className="bg-[#FFFFFF] p-4 rounded-2xl space-y-4"
                key={index}
              >
                <div className="bg-[#FBF9F5] overflow-hidden rounded-2xl border border-[#F3EDE1] backdrop-filter backdrop-blur-[30.719297409057617px] min-h-[400px] flex items-center justify-center">
                  <Image src={img} alt={title} className="rounded-2xl" />
                </div>

                <div className="flex flex-col gap-4 bg-[#FBF9F5] p-4 rounded-2xl">
                  <h2 className="text-[2rem] lg:text-[2.2rem] font-[400] text-center text-[#0E0E0E]">
                    {title}
                  </h2>
                  <p className="text-[#000000] mt-2 text-base text-center font-[400] min-h-[200px]">
                    {description}
                  </p>
                  <div className="flex justify-center">
                    <Link
                      href={link}
                      className="text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BlackButton className="min-w-[130px]">
                        Read More
                      </BlackButton>
                    </Link>
                  </div>
                </div>
              </aside>
            ))}
          </div>

          <div className="mt-10">
            <CustomButton />
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto">
          <Details />

          <div className="mt-10">
            <CustomButton />
          </div>
        </div>
      </section>

      <section className="bg-[#FBF9F5] px-4 py-20">
        <div className="container mx-auto">
          <h1 className="text-[2.5rem] lg:text-[4rem] font-[400] text-center text-[#0E0E0E]">
            How we thrive
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto mt-10">
            {trive.map(({ title, description, img }, index) => (
              <aside
                className="bg-[#FFFFFF] p-4 rounded-2xl space-y-4"
                key={index}
              >
                <div className="flex flex-col gap-4 bg-[#FBF9F5] p-4 rounded-2xl border border-[#F3EDE1]">
                  <div className="flex items-center justify-center">
                    <Image
                      src={img}
                      alt={title}
                      className="w-[80px] h-[80px] object-contain"
                    />
                  </div>

                  <h2 className="text-[2rem] lg:text-[2.2rem]] font-medium text-center text-[#0E0E0E]">
                    {title}
                  </h2>
                  <p className="text-[#000000] text-base text-center font-[400]">
                    {description}
                  </p>
                </div>
              </aside>
            ))}
          </div>

          <div className="mt-10">
            <CustomButton />
          </div>
        </div>
      </section>

      <section className="bg-[#FBF9F5] px-4 py-20">
        <div className="container mx-auto">
          <h1 className="text-[2.5rem] lg:text-[4rem] font-[400] text-center text-[#0E0E0E]">
            Team & Contributors
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-10">
            {team.map(({ name, title, img }, index) => (
              <aside
                className="bg-[#FFFFFF] p-4 rounded-2xl space-y-4"
                key={index}
              >
                <div className="bg-[#FBF9F5] rounded-2xl border border-[#F3EDE1]">
                  <Image
                    src={img}
                    alt={name}
                    className="object-contain rounded-2xl"
                  />
                </div>

                <div className="flex flex-col bg-[#FBF9F5] p-4 rounded-2xl">
                  <h2 className="text-[2rem] lg:text-[2.2rem] font-[400] text-[#0E0E0E]">
                    {name}
                  </h2>
                  <p className="text-[#000000] text-base font-[400]">{title}</p>
                </div>
              </aside>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
