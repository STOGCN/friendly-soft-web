/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#0B0B0F',
        },
        text: {
          light: '#1f2937',
          dark: '#ffffff',
        }
      }
    },
  },
  plugins: [],
}
