"use client";

import CookieConsent from "@/components/cookie-consent";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ReactLenis } from "lenis/react";
export * from "lenis/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CookieConsent />
      <ReactLenis
        root
        options={{
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 0.8,
          touchMultiplier: 1.5,
          infinite: false,
          lerp: 0.1,
          syncTouch: true,
          syncTouchLerp: 0.1,
        }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ReactLenis>
    </>
  );
}
