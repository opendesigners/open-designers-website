"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import logo from "@/public/logo-icon-black.png";

gsap.registerPlugin(ScrollTrigger);

const Details = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (textRef.current) {
      // Split the text into words using SplitType
      const splitText = new SplitType(textRef.current, { types: "words" });
      wordsRef.current = splitText.words as HTMLSpanElement[];

      // Pin the section for the full viewport height (100vh)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top", // When the top of the section hits the top of the viewport
        end: `bottom+=${window.innerHeight * 1.5} top`, // Adjust this to unpin the section after scrolling finishes
        pin: true, // Enable pinning
        pinSpacing: true, // Keep space after the pinned element
        scrub: true, // Sync the pinning with scroll
      });

      // GSAP timeline for highlighting words
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `bottom+=${window.innerHeight * 1.5} top`, // Adjust the end value based on your content length
          scrub: true,
        },
      });

      // Animate each word to highlight on scroll
      tl.to(wordsRef.current, {
        color: "#0E0E0E", // Highlight color
        stagger: 7, // Time between each word animation (in seconds) - increased for slower effect
        ease: "none",
        duration: 7, // Duration of each word animation (in seconds) - increased for slower effect
      });

      // Cleanup function to kill ScrollTrigger and animations
      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <section className="overflow-hidden h-screen" ref={sectionRef}>
      <div className="h-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-8">
          <Image src={logo} alt="Logo" className="w-[65px] object-contain" />
        </div>

        <div className="text-[#0E0E0E80]">
          <h1
            ref={textRef}
            className="text-[2.5rem] lg:text-[4.5rem] font-light text-center"
          >
            Every contribution on Open Designers does more than share a file it
            strengthens a global culture of collaboration. Whether you&apos;re
            uploading a UI kit, remixing a design system, joining a hangout, or
            exploring PixelScout, you&apos;re fueling a movement where design
            and code grow together.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Details;
