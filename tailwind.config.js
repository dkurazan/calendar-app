/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "source-sans": ["SourceSansPro", "sans-serif"]
      },
      colors: {
        'dark-purple': '#3C3B53',
        'purple': '#43425D',
        'light-purple': '#A3A0FB',
        'grey': '#4D4F5C',
        'light-grey': '#EBEBF2',
        'base-grey': '#F0F0F7',
        'soft-grey': '#D6D6D6',
        'red': '#FF5F5F',
        'blue': '#6A6996'


      },
      boxShadow: {
        'bottom': '0px 2px 6px #0000000A',
        'modal': '0px 3px 18px #00000029'
      }
    },
  },
  plugins: [],
}

