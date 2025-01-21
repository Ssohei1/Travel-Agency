/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rokhN: "RokhN",
        rokhB: "RokhB",
        rokhM: "RokhM",
        iransansB: 'iransansB',
        iransansL: 'iransansL',
        iransansM :'iransansM'
      },
      colors: {
        backgroundlight: '#FFFBFB',
        primary: "#5264FF",
        bgLight: "#FFFBFB",
        txt: "#404040",
        secondary: "#FF782C",
        cardstroke: '#404040'
      },
    },
  },
  plugins: [],
};
