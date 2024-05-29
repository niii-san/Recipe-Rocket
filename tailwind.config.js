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
      fontFamily:{
        f1:["Overlock", "sans-serif"]

      },

      // 9EB23B
      colors: {
        bodyBg: "#FFB000",
        Second: "#1A5D1A ",
        Third: "#AED2FF",
        Text: "#F6F5F5",
      },
    },
  },
  plugins: [],
};
