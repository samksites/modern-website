/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'blurbGlow': '0 0 5px 2px rgb(131, 216, 255)',
        'linux-text-glow': '0 0 3px #C8C8C8',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '100' },
          '90%': { opacity: '100' },
          '100%': { opacity: '0' },
        },
        longFadeOut: {
          '0%': { opacity: '100' },
          '90%': { opacity: '100' },
          '100%': { opacity: '0' },
        },
        flip: {
          '100%': {transform: 'rotate(-180deg)'},
        },

      },
      colors: {
        'cream-background': '#FFFFFA',
        'linux-green': 'rgb(0, 211, 18)',
        'greyColor' : 'rgb(23, 23, 22)'
      },
      animation: {
        fadeOut: 'fadeOut 14s linear forwards',
        longFadeOut: 'longFadeOut 28s linear forwards',
        flip: 'flip 1s linear alternate',
      }
    },
  },
  plugins: [],
}