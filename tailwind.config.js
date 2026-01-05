/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0" : {transform: "translate(0,0)"},
          "100%": {transform: "translate(-100%,0)"},
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      }
    },
  },
  plugins: [],
};
