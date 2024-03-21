/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xm: "375px",
      sm: "480px",
      md: "786px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1480px",
    },
    extend: {
      colors: {
        'primary': '#171717',
        'secondary': '#2719C5',
        'white': '#FFFFFF',
        'nav-color': 'rgba(255, 255, 255, 0.75',
        'footer-bacg': '#0d0d0d',
        'footer-color': '#d0daf5',
        'third-bg': 'background: rgba(37, 68, 155, 0.38)',
        'parag-color': 'rgba(255, 255, 255, 0.45)',
      },
      backgroundColor: {
        // 'footer-bacg': 'rgba(37, 68, 155, 0.38)',
      },
    },
  },
  plugins: [],
}
