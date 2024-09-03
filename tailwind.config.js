/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Define tus estilos personalizados aquí
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
    },
  },
  plugins: [],
};

