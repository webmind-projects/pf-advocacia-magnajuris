const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './assets/js/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        navy: {
          50: '#edf2ff',
          100: '#d7e2fb',
          200: '#afc4f4',
          300: '#86a3e8',
          400: '#5c82d7',
          500: '#3b64c5',
          600: '#2a4dab',
          700: '#1f3a86',
          800: '#14255c',
          900: '#0b162f',
        },
        gold: {
          50: '#fff9eb',
          100: '#ffecc2',
          200: '#ffd27f',
          300: '#ffb744',
          400: '#f7a118',
          500: '#d0830e',
          600: '#a8610c',
          700: '#80470c',
          800: '#57300a',
          900: '#2e1905',
        },
      },
      boxShadow: {
        'gold-glow': '0 10px 30px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
};
