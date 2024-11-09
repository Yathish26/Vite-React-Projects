import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mo': { 'max': '1000px' },
        'mo2': { 'max': '450px' },
        'bl': { 'min': '1260px' },
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
        japan: ['Noto Serif JP', 'serif'],
        macondo: ['Macondo', 'cursive'],
        bree: ["Bree Serif", 'serif'],
        anton:["Anton", "sans-serif"],
        bebas:["Bebas Neue", "sans-serif"],
      }
    },
  },
  plugins: [scrollbarHide],
  darkMode: 'class',
}
