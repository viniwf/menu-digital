/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'fundo': '#ffffff',
        'corTexto':'#000000',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        barlow:['Barlow', 'sans-serif'],
        brittany:['Brittany', 'sans-serif']
      },
      width:{
        '13/20': '65%',
        '15/20': '75%',
        '14/20': '73%',
        '15/20': '77%'
      },
      height:{
        '113':'453px'
      },
      inset: {
        '10': '10%',
        '15': '15%',
        '20': '20%',
        '25': '25%',
        '27': '27%',
        '28': '28%',
        '30': '30%',
        '35': '35%',
        '40': '40%',
        '42': '42%',
        '45': '45%',
        '47': '47%',
        '50': '50%',
        '55': '55%',
        '60': '60%',
        '65': '65%',
        '70': '70%',
        '75': '75%',
        '80': '80%',
        '85': '85%',
        '90': '90%',
        '95': '95%',
      },
      keyframes: {
        fadeInBackground: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInPointer: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInBackground: 'fadeInBackground 1s forwards',
        fadeInPointer: 'fadeInPointer 3s  forwards',
      },
    },
  },
  plugins: [],
}

