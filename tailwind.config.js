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
      colors: {
        'main': '#009ccb',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  separator: '_',
}
