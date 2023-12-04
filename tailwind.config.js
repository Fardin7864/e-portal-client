/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      fira: ['Fira Sans', 'sans-serif'],
    },
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [require("daisyui")],
}