import React from "react";
import Navbar from "./navbar";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="hero-background">
      <Navbar />
      {children}
    </header>
  );
};

export default Header;
