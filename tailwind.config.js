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
              "primary": "#151EB3",
              "app-bg": "#F0F2F5",
              "secondary-bg": "#F6F7FB",
              "text-primary": "#111827",
              "border-light": "#E5E7EB",
              "background-dark": "#111121",
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