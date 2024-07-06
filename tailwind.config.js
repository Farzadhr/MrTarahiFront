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
    screens: {
      'tablet': '768px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
    addDynamicIconSelectors(),
  ],
}

//npx tailwindcss -i ./css/input.css -o ./css/style.css --minify --watch