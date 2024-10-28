/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Ajuste de acordo com a estrutura do seu projeto
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./componentes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abel: ['"Abel"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
