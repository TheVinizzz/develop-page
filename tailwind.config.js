module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cat-home': "url('/src/assets/cat-home.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/typography')
  ],
}
