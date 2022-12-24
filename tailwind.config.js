module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          inverted: 'var(--color-text-inverted)',
          muted: 'var(--color-text-muted)',
          inverted_light: 'var(--color-text-inverted-light)',
          base_dark: 'var(--color-text-base-dark)'
        }
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-bg-base)',
          inverted: 'var(--color-bg-inverted)',
          base_light: 'var(--color-bg-base-light)'
        }
      },
      'animation': {
        'text':'text 5s ease infinite',
      },
      'keyframes': {
          'text': {
              '0%, 100%': {
                'background-size':'200% 200%',
                  'background-position': 'left center'
              },
              '50%': {
                'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}