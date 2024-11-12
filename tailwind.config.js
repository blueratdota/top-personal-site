/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        cWhite: "#FAF7F0",
        cBeige: "#D8D2C2",
        cBrown: "#B17457",
        cBlack: "#4A4947",
        cSage: "#AAB396",
        cPeach: "#FAEDCE"
      }
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      mdLg: "940px",
      // => @media (min-width: 840px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px"
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: []
};
