/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.php',
    './assets/src/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2CC197', // твій кастомний зелений
      },
    },
  },
  plugins: [],
};
