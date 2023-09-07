/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      'warm-gray-50': '#fafaf9',
      'warm-gray-100': '#f5f5f4',
      'warm-gray-200': '#e7e5e4',
      'warm-gray-300': '#d6d3d1',
      'warm-gray-400': '#a8a29e',
      'warm-gray-500': '#78716c',
      'warm-gray-600': '#57534e',
      'warm-gray-700': '#44403c',
      'warm-gray-800': '#292524',
      'warm-gray-900': '#1c1917'
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
  darkMode: 'class',
}