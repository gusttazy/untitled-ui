import React from "react";
import { twMerge } from "tailwind-merge";

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function GridContainer({ children, className }: GridContainerProps) {
  return (
    <div className={twMerge(
      "w-full max-w-[90vw] sm:max-w-[95vw] md:max-w-[85vw] lg:max-w-[77.5rem]",
      "mx-auto px-4 sm:px-6 lg:px-8",
      className
    )}>
      {children}
    </div>
  );
};