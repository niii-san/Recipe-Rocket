/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        pc: "1000px",
        // => @media (min-width: 1280px) { ... }
        tablet: "600px",
        // => @media (min-width: 640px) { ... }
      },
      fontFamily: {
        f1: ["Overlock", "sans-serif"],
      },

      // 9EB23B
      colors: {
        bodyBg: "#",
        Second: "#B7B1F2",
        Third: "#FBF3B9",
        Text: "#F6F5F5",
      },
    },
  },
  plugins: [],
};
