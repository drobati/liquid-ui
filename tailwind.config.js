const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
// remove colors to stop tailwind warnings
delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']

function withOpacityValue(variable) {
  return ({opacityValue}) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      primary: withOpacityValue('--color-primary'),
      secondary: withOpacityValue('--color-secondary')
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
