/** @type {import('tailwindcss').Config} */

export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      'serif': ['ui-serif', 'Georgia']
    },
    extend: {},
  },
  plugins: [ 
    import('@tailwindcss/typography'),
    import('@tailwindcss/forms'),
    import('@tailwindcss/aspect-ratio'),
    import('@tailwindcss/container-queries'),
],
}

