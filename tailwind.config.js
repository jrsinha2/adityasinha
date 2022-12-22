module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          inverted: 'var(--color-text-inverted)',
          muted: 'var(--color-text-muted)'
        }
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-bg-base)',
          inverted: 'var(--color-bg-inverted)',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}