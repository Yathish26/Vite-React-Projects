export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mo': { 'max': '1000px' },
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
        japan: ['Noto Serif JP', 'serif'],
        macondo: ['Macondo', 'cursive'],
        bree: ["Bree Serif", 'serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
