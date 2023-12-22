/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Syne': ['Syne', 'sans-serif']
    },
    colors: {
      "after_hover": '#3b57e3',
      "text_color": '#0a1343',
      "placeholder": '#5a5e72',
      "body-color": '	#f5f7ff',
      "input_bg": '#f0f2ff',
      "border-color": '#bfc4d9'
    }
  },
  plugins: [require("daisyui")],
}

