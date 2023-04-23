/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'ebg': '#FFF4E0',
      'etext': '#4D4D4D',
      'eele1': '#B46060',
      'eele2': '#FFBF9B',
      'bbg': '#F6F1F1',
      'btext': '#000000',
      'bele1': '#19A7CE',
      'bele2': '#146C94',
      'white': '#FFFFFF',
      'green':'#50C878'
    },
    extend: {

    },
  },
  plugins: [],
}