/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "var(--orange)",
        "custom-gray": "var(--custom-gray)",
      },
      backgroundImage: {
        "morning-gradient": "var(--morning-gradient)",
        "precipitation-gradient": "var(--precipitation-gradient)",
        "afternoon-gradient": "var(--afternoon-gradient)",
        "evening-gradient": "var(--evening-gradient)",
      },
    },
  },
  plugins: [],
};
