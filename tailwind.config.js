/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}', './assets/js/main.js'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins'],
      }
    },
  },
  plugins: [],
}

