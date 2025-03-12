/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#db5f40",
        dark:{
          hard:"#ef4444",
          soft:"#363636"
        }
      },
      fontFamily: {
        opensans: [
          "Open Sans",
          "sans-serif"
        ],
        roboto: [
          "Roboto",
          "sans-serif"
        ],
      },
    },
  },
  plugins: [],
}