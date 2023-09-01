/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'sharp-gradient': 'linear-gradient(90deg, #dc3e26 49.9%, #81cad6 50.1%)',
      }
    }
  },
  plugins: [],
}