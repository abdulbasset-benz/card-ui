/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        vdblue: "hsl(212, 21%, 14%)",
        dgblue: "hsl(228, 12%, 48%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      fontWeight: {
        500: 500,
        700: 700,
      },
    },
  },
  plugins: [],
};
