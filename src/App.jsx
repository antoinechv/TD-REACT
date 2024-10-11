import PrecipitationCard from "./components/PrecipitationCard";
import WeatherCodes from "./components/WeatherCodes";
import NavBar from "./components/NavBar";
import WindCard from "./components/WindCard";

import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/weather.json");
        // https://api.open-meteo.com/v1/forecast?latitude=28.5383&longitude=-81.3792&hourly=temperature_2m,precipitation_probability,weather_code,wind_speed_10m,wind_direction_10m&forecast_days=1
        const data = await response.json();
        setWeatherData(data);
        setDataLoaded(true);
      } catch (error) {
        console.error("Erreur lors de la récupération du fichier JSON:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      setTemperature(calculateMorningTemperature());
      setPrecipitation(calculateMorningPrecipitation());
      setWeathercode(returnMorningWeatherCodes());
      setDirection(returnMorningdirection());
      setSpeed(returnMorningspeed());
      setBackgroundColor("bg-morning-gradient");
    }
  }, [dataLoaded]);

  const calculateAverage = (data, start, end) => {
    if (data) {
      const slicedData = data.slice(start, end);
      const sum = slicedData.reduce((acc, value) => acc + value, 0);
      return (sum / slicedData.length).toFixed(0);
    }
    return "N/A";
  };

  const calculateMostFrequentValue = (data, start, end) => {
    if (data) {
      const slicedData = data.slice(start, end);
      const countMap = {};
      slicedData.forEach((value) => {
        countMap[value] = (countMap[value] || 0) + 1;
      });

      let maxCount = 0;
      let mostFrequentValue = null;
      for (const value in countMap) {
        if (countMap[value] > maxCount) {
          maxCount = countMap[value];
          mostFrequentValue = value;
        }
      }

      return mostFrequentValue;
    }
    return "N/A";
  };

  const calculateMorningTemperature = () => {
    return calculateAverage(weatherData?.hourly?.temperature_2m, 0, 12);
  };

  const calculateAfternoonTemperature = () => {
    return calculateAverage(weatherData?.hourly?.temperature_2m, 13, 17);
  };

  const calculateEveningTemperature = () => {
    return calculateAverage(weatherData?.hourly?.temperature_2m, 17, 23);
  };

  const calculateMorningPrecipitation = () => {
    return calculateAverage(
      weatherData?.hourly?.precipitation_probability,
      0,
      12
    );
  };

  const calculateAfternoonPrecipitation = () => {
    return calculateAverage(
      weatherData?.hourly?.precipitation_probability,
      13,
      17
    );
  };

  const calculateEveningPrecipitation = () => {
    return calculateAverage(
      weatherData?.hourly?.precipitation_probability,
      17,
      23
    );
  };

  const returnMorningWeatherCodes = () => {
    return calculateMostFrequentValue(weatherData?.hourly?.weather_code, 0, 12);
  };

  const returnAfternoonWeatherCodes = () => {
    return calculateMostFrequentValue(
      weatherData?.hourly?.weather_code,
      13,
      17
    );
  };

  const returnEveningWeatherCodes = () => {
    return calculateMostFrequentValue(
      weatherData?.hourly?.weather_code,
      17,
      23
    );
  };

  const returnMorningspeed = () => {
    return calculateAverage(weatherData?.hourly?.wind_speed_10m, 0, 12);
  };
  const returnEveningspeed = () => {
    return calculateAverage(weatherData?.hourly?.wind_speed_10m, 13, 17);
  };
  const returnAfternoonspeed = () => {
    return calculateAverage(weatherData?.hourly?.wind_speed_10m, 17, 23);
  };
  const returnMorningdirection = () => {
    return calculateAverage(weatherData?.hourly?.wind_direction_10m, 0, 12);
  };
  const returnEveningdirection = () => {
    return calculateAverage(weatherData?.hourly?.wind_direction_10m, 13, 17);
  };
  const returnAfternoondirection = () => {
    return calculateAverage(weatherData?.hourly?.wind_direction_10m, 17, 23);
  };

  const initialTemperature = calculateMorningTemperature();
  const initialPrecipitation = calculateMorningPrecipitation();
  const initialWeatherCodes = returnMorningWeatherCodes();
  const initialspeed = returnMorningspeed();
  const initialdirection = returnMorningdirection();
  const [temperature, setTemperature] = useState(initialTemperature);
  const [precipitation, setPrecipitation] = useState(initialPrecipitation);
  const [direction, setDirection] = useState(initialdirection);
  const [speed, setSpeed] = useState(initialspeed);
  const [weathercode, setWeathercode] = useState(initialWeatherCodes);
  const [backgroundColor, setBackgroundColor] = useState("bg-morning-gradient");

  const handleMorningClick = () => {
    setTemperature(calculateMorningTemperature());
    setPrecipitation(calculateMorningPrecipitation());
    setWeathercode(returnMorningWeatherCodes());
    setDirection(returnMorningdirection());
    setSpeed(returnMorningspeed());
    setBackgroundColor("bg-morning-gradient");
  };

  const handleAfternoonClick = () => {
    setTemperature(calculateAfternoonTemperature());
    setPrecipitation(calculateAfternoonPrecipitation());
    setWeathercode(returnAfternoonWeatherCodes());
    setDirection(returnAfternoondirection());
    setSpeed(returnAfternoonspeed());
    setBackgroundColor("bg-afternoon-gradient");
  };

  const handleEveningClick = () => {
    setTemperature(calculateEveningTemperature());
    setPrecipitation(calculateEveningPrecipitation());
    setWeathercode(returnEveningWeatherCodes());
    setDirection(returnEveningdirection());
    setSpeed(returnEveningspeed());
    setBackgroundColor("bg-evening-gradient");
  };

  if (!dataLoaded) {
    return <div>Chargement des données météorologiques...</div>;
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-500">
      <div
        id="phone"
        className={`w-[375px] ${backgroundColor} flex items-center flex-col p-4 gap-8 rounded-xl`}
      >
        <NavBar
          onMorningClick={handleMorningClick}
          onAfternoonClick={handleAfternoonClick}
          onEveningClick={handleEveningClick}
        />

        <WeatherCodes temperature={temperature} weather_code={weathercode} />
        <div className="flex gap-5 w-full">
          <WindCard speed={speed} direction={direction}></WindCard>
          <PrecipitationCard percentage={precipitation} />
        </div>
      </div>
    </div>
  );
}

export default App;
