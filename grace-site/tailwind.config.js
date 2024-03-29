/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'sage': '#809E88',
      'lightsage': '#CDD9A3',
      'navy': '#012E40',
      'redbrown': '#592B02',
      'forestgreen': '#1D5902',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      pfSpekk: [],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

