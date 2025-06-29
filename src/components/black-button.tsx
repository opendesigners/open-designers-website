import React from "react";
import { Button } from "./ui/button";

const BlackButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div>
      <Button
        className={`rounded-full h-14 border border-[#474D50] flex items-center gap-2 ${className}`}
      >
        {children}
      </Button>
    </div>
  );
};

export default BlackButton;

/* border: 1px solid #474D50 */

// box-shadow: 0px 10px 18px -1.5px #FFFFFF24 inset;

// box-shadow: 0px 2.29px 4.12px -1px #FFFFFF14 inset;

// box-shadow: 0px 0.6px 1.08px -0.5px #FFFFFF11 inset;
