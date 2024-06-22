/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 35s linear infinite",
        marquee2: "marquee2 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      gridTemplateAreas: {
        mapControls: [
          "left top right",
          "left center right",
          "bottom bottom bottom",
        ],
      },
      gridTemplateColumns: {
        mapControls: "auto 1fr auto",
      },
      gridTemplateRows: {
        mapControls: "auto 1fr auto",
      },
      colors: {
        lightBg: "#EAEBED",
      },
    },
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
