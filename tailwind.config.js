/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "image":"url('/src/Weather/media/weather.jpg')",
        "left":"url('/src/Weather/media/leftbg.jpg')"
      }
    },
  },
  plugins: [],
}

