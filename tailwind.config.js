/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
    },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'cusBlue': '#05386B',
        'cusWhite': '#EDF5E1',
        'cusGreen': '#5CDB95'
      },
      
  },
  plugins: [],
}
