/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Lilac: '#b5a8cf',
      animation: {
          "breathe": "breathe 8s ease-in-out infinite"
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "40%": { transform: "scale(1.4)", opacity: "1" },
          "70%": { transform: "scale(1)", opacity: "0.9" },
        },
      },
     },
    },
  },
  plugins: [],
}