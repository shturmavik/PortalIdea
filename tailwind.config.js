const colors = require('tailwindcss/colors')
const config = require('tailwindcss/stubs/defaultConfig.stub')

module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '1134px',
      md: '1134px',
      lg: '1134px',
      xl: '1134px',
      '2xl': '1134px',
    },
    extend: {},
    colors: {
      ...colors,
      'idea-gray': '#c4c4c4',
      'idea-indigo': '#B1BFE1',
      'idea-light-indigo': '#BCC1CD',
      'idea-dark-blue': '#223157',
      'idea-dark-purple': '#3136AE',
      'idea-light-purple': '#D4DFFC',
    },
    borderRadius: {
      ...config.theme.borderRadius,
      'idea-30': '30px',
    },
    boxShadow: {
      ...config.theme.boxShadow,
      'idea-dark-blue': '0px 12px 25px rgba(0, 0, 0, 0.21)',
      'idea-dark-grey': '0px 20px 45px rgba(8, 15, 34, 0.14)',
      'idea-like-dislike': '2px 2px 4px rgba(31, 176, 52, 0.35)',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'idea-gray': theme('colors.idea-gray'),
      'idea-dark-blue': theme('colors.idea-dark-blue'),
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      'idea-indigo': theme('colors.idea-indigo'),
      'idea-light-purple': theme('colors.idea-light-purple'),
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      'idea-indigo': theme('colors.idea-indigo'),
    }),
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
