import React from "react";

const WeatherCodes = ({ temperature, weather_code }) => {
  const weatherCodes = {
    0: { temps: "Ciel clair", src: "/assets/soleil.svg" },
    1: { temps: "Partiellement nuageux", src: "/assets/nuageux.svg" },
    2: { temps: "Nuageux", src: "/assets/nuageux.svg" },
    3: { temps: "Pluie légère", src: "/assets/pluie.svg" },
    45: { temps: "Brouillard", src: "/assets/brouillard.svg" },
    48: { temps: "Givre", src: "/assets/givre.svg" },
    51: { temps: "Bruine légère", src: "/assets/bruine.svg" },
    53: { temps: "Bruine modérée", src: "/assets/bruine.svg" },
    55: { temps: "Bruine dense", src: "/assets/bruine.svg" },
    56: {
      temps: "Bruine légère verglaçante",
      src: "/assets/bruine_verglacante.svg",
    },
    57: {
      temps: "Bruine dense verglaçante",
      src: "/assets/bruine_verglacante.svg",
    },
    61: { temps: "Pluie modérée", src: "/assets/pluie.svg" },
    63: { temps: "Pluie forte", src: "/assets/pluie.svg" },
    65: {
      temps: "Pluie légère verglaçante",
      src: "/assets/pluie_verglacante.svg",
    },
    66: {
      temps: "Pluie modérée verglaçante",
      src: "/assets/pluie_verglacante.svg",
    },
    67: {
      temps: "Pluie forte verglaçante",
      src: "/assets/pluie_verglacante.svg",
    },
    71: { temps: "Neige légère", src: "/assets/neige.svg" },
    73: { temps: "Neige modérée", src: "/assets/neige.svg" },
    75: { temps: "Neige forte", src: "/assets/neige.svg" },
    77: { temps: "Grains de neige", src: "/assets/grains_neige.svg" },
    80: { temps: "Pluie forte", src: "/assets/orage.svg" },
    81: { temps: "Pluie modérée", src: "/assets/pluie.svg" },
    82: { temps: "Pluie violente", src: "/assets/pluie_violente.svg" },
    85: { temps: "Neige légère", src: "/assets/neige.svg" },
    86: { temps: "Neige forte", src: "/assets/neige.svg" },
    95: { temps: "Orage", src: "/assets/orage.svg" },
    96: { temps: "Orage avec grêle légère", src: "/assets/orage_grele.svg" },
    99: { temps: "Orage avec grêle forte", src: "/assets/orage_grele.svg" },
  };

  const weatherDescription = weatherCodes[weather_code]?.temps || "N/A";
  const weatherIcon =
    weatherCodes[weather_code]?.src || "/assets/mauvaisTemps.svg";

  return (
    <>
      <div className="flex flex-col p-5 w-full gap-2 items-center bg-custom-gray rounded-xl">
        <div>
          <img className="h-36" src={weatherIcon} alt={weatherDescription} />
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
          <h2
            id="precipitation"
            className="font-poppins text-8xl font-light text-white"
          >
            {temperature}°
          </h2>
          <h3 id="weather_code" className="text-white font-light text-xl">
            {weatherDescription}
          </h3>
        </div>
      </div>
    </>
  );
};

export default WeatherCodes;
