/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:  {
          red: "#FC4747",
          darkBlue: "#10141E",
          greyBlue: "#5a698f",
          fadedBlue: "#161D2F",
          white: "#ffffff",
        },
      screens: {
        sm: "768px",
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
