/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", 'index.html', "index.php"],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {
      colors: {
        'primary': '#b30200',
        'primary-hover': '#e40d11',
      }
    },
  },
  plugins: [],
}