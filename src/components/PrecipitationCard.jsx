// src/PrecipitationCard.js
import React from "react";

const PrecipitationCard = ({ percentage }) => {
  return (
    <div className="relative w-1/2   bg-zinc-700 text-white rounded-lg overflow-hidden">
      <div
        className=" absolute bottom-0 w-full bg-precipitation-gradient transition-all duration-300 ease-in-out"
        style={{ height: `${percentage}%` }}
      ></div>
      <div className=" flex flex-col items-center gap-2 precipitation-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <span className="text-xl font-bold ">Precipitation</span>
        <span className="text-xl font-bold  "> {percentage}%</span>
      </div>
    </div>
  );
};

export default PrecipitationCard;
