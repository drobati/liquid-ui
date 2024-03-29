const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
delete colors['lightBlue'] // stops warning to change to sky

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      primary: 'rgb(var(--color-primary))'
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
