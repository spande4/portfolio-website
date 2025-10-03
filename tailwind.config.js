/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'], // 👈 new font
      },
      colors: {
        brand: "#9a4358",
      },
    },
  },
  plugins: [],
}
