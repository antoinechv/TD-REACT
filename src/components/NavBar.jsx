import React, { useState } from "react";

const NavBar = ({ onMorningClick, onAfternoonClick, onEveningClick }) => {
  const [activeButton, setActiveButton] = useState("morning");

  const handleClick = (button) => {
    setActiveButton(button);
    switch (button) {
      case "morning":
        onMorningClick();
        break;
      case "afternoon":
        onAfternoonClick();
        break;
      case "evening":
        onEveningClick();
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <nav className="flex gap-5 p-5 font-semibold">
        <button
          className={`px-4 py-2 rounded-full text-base ${
            activeButton === "morning"
              ? "bg-white text-black"
              : "bg-custom-gray text-white"
          }`}
          onClick={() => handleClick("morning")}
        >
          Matin
        </button>
        <button
          className={`px-4 py-2 rounded-full text-base ${
            activeButton === "afternoon"
              ? "bg-white text-black"
              : "bg-custom-gray text-white"
          }`}
          onClick={() => handleClick("afternoon")}
        >
          Après-midi
        </button>
        <button
          className={`px-4 py-2 rounded-full text-base ${
            activeButton === "evening"
              ? "bg-white text-black"
              : "bg-custom-gray text-white"
          }`}
          onClick={() => handleClick("evening")}
        >
          Soir
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
