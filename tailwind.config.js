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
        cardstroke: "#40404040",
      },
      screens: {
        "360px": "360px",
        "880px": "880px",
        "450px": "450px",
        "500px": "500px",
        "550px": "550px",
        "1300px": "1300px",
      },
    },
  },
  plugins: [],
};
