module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1in12': '8.333333%',
        '2in12': '16.666667%',
        '3in12': '25%',
        '4in12': '33.333333%',
        '5in12': '41.666667%',
        '6in12': '50%',
        '7in12': '58.333333%',
        '8in12': '66.666667%',
        '9in12': '75%',
        '10in12': '83.333333%',
        '11in12': '91.666667%',
        '12in12': '100%',
      },
      colors: {
        'main': '#009ccb',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'notosansjp': ['Noto Sans JP', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  separator: '_',
}
