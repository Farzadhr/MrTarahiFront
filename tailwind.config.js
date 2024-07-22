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
        'light': '#F5F5F5',
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
      'tv': '1900px',
      // => @media (min-width: 1280px) { ... }
    },
    fontSize: {
      'xs':['9px','14px'],
      'sm': ['11px', '18px'],
      'base': ['13px', '22px'],
      'lg': ['17px', '26px'],
      'xl': ['21px', '30px'],
      '2xl': ['23px', '32px'],
      '3xl': ['27px', '36px'],
      '4xl': ['33px', '38px'],
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
    addDynamicIconSelectors(),
  ],
}

//npx tailwindcss -i ./css/input.css -o ./css/style.css --minify --watch