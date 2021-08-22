module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', ...require('tailwindcss/defaultConfig').theme.fontFamily.sans],
    },
    extend: {
      colors: {
        komentory: {
          DEFAULT: 'hsla(43, 26%, 95%, 1)',
          dark: 'hsla(43, 26%, 85%, 1)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
