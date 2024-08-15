/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef8ff',
          100: '#dcf2ff',
          200: '#b2e6ff',
          300: '#6dd4ff',
          400: '#20beff',
          500: '#00a6ff',
          600: '#0084df',
          700: '#0069b4',
          800: '#005995',
          900: '#00497a',
          950: '#003965',
        },
      },
    },
  },
  plugins: [],
}
