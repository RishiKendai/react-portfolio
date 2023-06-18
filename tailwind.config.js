/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        norican: ["Norican", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        rancho: ["Rancho", "cursive"],
        default: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Fira Sans",
          "sans-serif",
        ],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        color: "var(--color)",
      },
    },
  },
  plugins: [],
};
