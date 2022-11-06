/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        DM: ["DM Serif Display", "serif"],
      },
      colors: {
        mor: "#7b1e7a",
        zard: "#ffc300",
      },
      backgroundImage: {
        curve: "url('./Images/Artboard.svg')",
      },
    },
    plugins: [],
  },
};
