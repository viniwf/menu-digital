/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "marrom":"#341C1C",
        "dourado": "#E1A141",
        "fundo": "#241E1E",
        "preto":"#000000",
        "card":"#624E4E",
        "card-linha":"#8F7070",
        "corpreco": "#e1a141",
        "cor-img":"#111217"
      },
      fontFamily:{
        'anton': ['Anton', 'sans-serif'],
      },
      width:{
        'card': "1024px"
      }
    },
  },
  plugins: [],
}

