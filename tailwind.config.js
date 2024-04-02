/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'vermelho-fundo': '#7D2727',
        'gradiente': '#540606',
        'input-add' : '#D3B3B3'
      }
    },
  },
  plugins: [],
}

