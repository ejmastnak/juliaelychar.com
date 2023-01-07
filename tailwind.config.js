/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.md",
    "./layouts/**/*.html",
  ],
  theme: {
    screens: {
        'xs': '420px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
