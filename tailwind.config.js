/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
      },
      colors: {
        softCream: "#FFF4E1",
        cream: "#f5f5dc",
        button1: "#d4af37",
        button2: "#708090",
      },
    },
  },
  plugins: [],
};
