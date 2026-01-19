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
              "primary": "#080997",
              "app-bg": "#F0F2F5",
              "secondary-bg": "#F6F7FB",
              "text-primary": "#111827",
              "border-light": "#E5E7EB",
              "background-dark": "#111827",
              "card-light": "#FFFFFF",
              "card-dark": "#1F2937",
              "secondary-orange": "#FFA000",
          },
          fontFamily: {
              "sans": ["Manrope", "sans-serif"],
              "display": ["Manrope", "sans-serif"],
          },
          borderRadius: {
              "DEFAULT": "12px",
              "15": "15px",
              "xl": "16px",
              "2xl": "20px",
          },
          spacing: {
              "page": "16px",
              "card-gap": "20px",
              "inner": "16px",
          }
      },
  },
  plugins: [],
}