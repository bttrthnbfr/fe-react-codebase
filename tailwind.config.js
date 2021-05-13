module.exports = {
  purge: [],
  darkMode: false, // or "media" or "class"
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        128: '32rem',
        144: '36rem',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
  ],
};
