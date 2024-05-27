/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        pc: "1100px",
        // => @media (min-width: 1280px) { ... }
        tablet: "600px",
        // => @media (min-width: 640px) { ... }
      },

      colors: {
        bodyBg: "#141619",
        Blue: "#0A21C0",
        Text: "#F6F5F5",
      },
    },
  },
  plugins: [],
};
