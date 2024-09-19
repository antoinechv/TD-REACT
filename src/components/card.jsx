import React from "react";
import Button from "./Button";

const Card = ({ adviceId, content, children }) => {
  return (
    <div className="bg-neutral-darkBlue h-screen w-screen flex items-center justify-center">
      <div className="relative max-w-xl sm:w-full w-64 rounded p-8 bg-neutral-darkGrayishBlue flex flex-col items-center justify-center gap-5 font-manrope pb-16">
        <h2 className="text-large font-base text-primary-neonGreen">
          ADVICE #{adviceId}
        </h2>
        <p className="text-quote text-primary-lightCyan mb-4 text-center font-extraBold">
          "{content}"
        </p>

        <picture>
          <source
            srcSet="/pattern-divider-desktop.svg"
            media="(min-width: 640px)"
          />
          <img
            src="/pattern-divider-mobile.svg"
            alt="contextual image"
            className="w-full h-auto"
          />
        </picture>
        {children}
      </div>
    </div>
  );
};

export default Card;
