import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ imgSrc, altText, onClick, className }) => {
  return (
    <button
      className={twMerge(
        "rounded-full p-4 bg-primary-neonGreen hover:shadow-neon",
        className
      )}
      onClick={onClick}
    >
      <img src={imgSrc} alt={altText} className="w-8 h-8" />
    </button>
  );
};

export default Button;
