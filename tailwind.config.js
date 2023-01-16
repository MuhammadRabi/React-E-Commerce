/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        275: "repeat(auto-fill, minmax(275px, 1fr))",
      },
    },
  },
  plugins: [],
}
