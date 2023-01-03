/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
        wa: '#25d366',
        red: '#ff0000',
        ins: '#E4405F',
        twt: '1DA1F2',
        lin: '#0A66C2',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
