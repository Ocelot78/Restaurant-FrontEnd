/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {      
      fontFamily: {
      Funnel: ['Funnel', 'sans-serif'],
    },},
  },
  plugins: [require('tailwindcss-motion')], 
}

