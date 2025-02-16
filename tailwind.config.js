/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        primary: "#00E0EE",
        secondary: "#AD00FE"
        /* background: linear-gradient(220.55deg, #00E0EE 0%, #AD00FE 100%); */
      }
    },
  },
  plugins: [],
}

