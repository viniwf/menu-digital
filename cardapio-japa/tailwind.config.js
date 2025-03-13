/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        aloja:['Aloja-Light', 'sans-serif'],
        oswald:['Oswald', 'sans-serif'],
        patrick:['Itim', 'cursive']

      },
      colors:{
        'laranja':'#e94b35'
      }
    },
  },
  plugins: [],
}

