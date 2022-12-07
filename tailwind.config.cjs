/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      helvetica: ["Georgia", "Cambria", "Arial", "sans-serif"],
      josefin: "Josefin Sans, sans-serif",
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
