import React from "react";

const WindCard = ({ speed, direction }) => {
  // Convertir la direction en degrés en une rotation CSS
  const getArrowStyle = (direction) => {
    return { transform: `rotate(${direction}deg)` };
  };

  return (
    <div className=" w-1/2 p-4 rounded-lg bg-zinc-700 text-center text-white">
      <h2 className="text-xl font-bold mb-2">vent</h2>
      <div className="flex flex-col items-center">
        <div className=" relative text-2xl mb-2 ">
          <img src="/assets/boussole-fond.svg" className="" />
          <img
            src="/assets/boussole.svg"
            style={getArrowStyle(direction)}
            alt=""
            className="absolute top-0  transition-all duration-300 ease-in-out"
          />
        </div>

        <p className="text-lg">{speed} km/h</p>
      </div>
    </div>
  );
};

export default WindCard;
