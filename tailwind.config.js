/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    // Add any other paths where your components might be
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
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

