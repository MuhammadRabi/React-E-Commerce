/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        275: "repeat(auto-fit, minmax(275px, 1fr))",
        200: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
