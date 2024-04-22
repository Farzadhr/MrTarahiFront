/** @type {import('tailwindcss').Config} */


const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: ["./*.html","./js/*.js","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'balck': '#000000',
        'primary': '#0dd5ac',
        'secondary': '#10223a',
        'yellow': '#fff603',
        'textDark': '#231f20',
        'textLight': '#575757',
        'light': '#f2f2f2',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('flowbite/plugin'),
    addDynamicIconSelectors(),
  ],
}

//npx tailwindcss -i ./css/input.css -o ./css/style.css --watch