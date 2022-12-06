/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      helvetica: ["Georgia", "Cambria", "Arial", "sans-serif"],
      comic: ["Comic Sans Ms", "Arial"],
    },
  },
  plugins: [require("daisyui")],
};
