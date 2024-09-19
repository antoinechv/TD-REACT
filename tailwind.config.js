/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lightCyan: "hsl(193, 38%, 86%)",
          neonGreen: "hsl(150, 100%, 66%)", // Neon green color
        },
        neutral: {
          grayishBlue: "hsl(217, 19%, 38%)",
          darkGrayishBlue: "hsl(217, 19%, 24%)",
          darkBlue: "hsl(218, 23%, 16%)",
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        quote: "28px",
      },
      fontWeight: {
        extraBold: 800,
      },
      boxShadow: {
        neon: "0 0 10px hsl(150, 100%, 66%), 0 0 20px hsl(150, 100%, 66%), 0 0 30px hsl(150, 100%, 66%), 0 0 40px hsl(150, 100%, 66%)",
      },
    },
  },
  plugins: [],
};
