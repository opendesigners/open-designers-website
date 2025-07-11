"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./navbar";

const Header = ({ children }: { children: React.ReactNode }) => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setHeroLoaded(true);
    img.src = "/hero-bg.png";
  }, []);

  return (
    <header
      className={heroLoaded ? "hero-background" : ""}
      style={
        !heroLoaded
          ? {
              background:
                "linear-gradient(135deg, #a8e6fe, #f5c1b5, #fde090, #d5dcfc)",
              marginLeft: "2rem",
              marginRight: "2rem",
              borderRadius: "2rem",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }
          : undefined
      }
    >
      <Navbar />
      {children}
    </header>
  );
};

export default Header;
