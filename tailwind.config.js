/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
        primary: '#2563EB',
        secondary: '#FBBF24',
      },

      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        playfair: ['Playfair', 'serif'],
      },



      
    },
  },
  plugins: [],
}

