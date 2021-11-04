module.exports = {
  mode: 'jit',
  purge: ['./index.html'],
  darkMode: 'media', // or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter var', ...require('tailwindcss/defaultConfig').theme.fontFamily.sans],
    },
    extend: {
      colors: {
        main: {
          lighter: '#BFEAD4',
          light: '#80D5AA',
          DEFAULT: '#00AB55',
          dark: '#008743',
          darker: '#006231',
        },
        secondary: {
          lighter: '#FDFCFB',
          light: '#F6F4EF',
          DEFAULT: '#E3DDCF',
          dark: '#626268',
          darker: '#3E3E41',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
