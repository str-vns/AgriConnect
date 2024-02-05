/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    './pages/**/*.{html,js,jsx}',
    './Components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
