/** @type {import('tailwindcss').Config} */


const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: ["./*.html","./js/*.js","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    addDynamicIconSelectors(),
  ],
}

//npx tailwindcss -i ./css/input.css -o ./css/style.css --watch