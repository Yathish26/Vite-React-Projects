/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height:{
        '90vh':'90vh',
        'cvh':'200vh',
        '86vh':'86vh',
      },
      fontFamily: {
        'bona': ["Bona Nova SC", "serif"],
        'cursive': ["Dancing Script", "cursive"],
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      
    },
  },
  plugins: [],
  darkMode:'class',
}
