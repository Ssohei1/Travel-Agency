/** @type {import('tailwindcss').Config} */
// const path = require('../assets/images/bg.png');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rokhN: "RokhN",
        rokhB: "RokhB",
        rokhM: "RokhM",
        iransansB: "iransansB",
        iransansL: "iransansL",
        iransansM: "iransansM",
      },
      colors: {
        backgroundlight: "#FFFBFB",
        primary: "#5264FF",
        bgLight: "#FFFBFB",
        txt: "#404040",
        secondary: "#FF782C",
        cardstroke: "#404040",
      },
      screens: {
        "360px": "360px",
        "880px": "880px",
        "450px": "450px",
      },
      backgroundImage: {
        // "pattern": `url(${path})`,
      },
    },
  },
  plugins: [],
};
