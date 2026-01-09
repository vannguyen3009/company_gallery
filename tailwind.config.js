/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          colors: {
              "primary": "#1313ae",
              "background-light": "#f6f6f8",
              "background-dark": "#111121",
              "surface-grey": "#F6F7FB",
          },
          fontFamily: {
              "sans": ["Manrope", "sans-serif"]
          },
          borderRadius: {
              "15": "15px",
          }
      },
  },
  plugins: [],
}