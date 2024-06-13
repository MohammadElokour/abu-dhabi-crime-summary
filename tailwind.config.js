/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateAreas: {
        mapControls: [
          "left top right",
          "left center left",
          "bottom bottom bottom",
        ],
      },
      gridTemplateColumns: {
        mapControls: "260px 1fr auto",
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
