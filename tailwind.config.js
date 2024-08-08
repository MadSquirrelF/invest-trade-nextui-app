import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
         "moveline": "moveline 6s linear forwards"
      },
      keyframes: {
       "moveline": {
        "0%": {
          height: 0,
        },
        "100%": {
          height: "100%",
        },
       }
      },
      backgroundImage: {
        "shadow-gradient-light": "linear-gradient(90deg, #fff 3.31%, rgba(255, 255, 255, 0.99) 7.71%, rgba(255, 255, 255, 0.96) 12.11%, rgba(255, 255, 255, 0.93) 20.11%, rgba(255, 255, 255, 0.91) 29.51%, rgba(255, 255, 255, 0.85) 34.11%, rgba(255, 255, 255, 0.76) 38.52%, rgba(255, 255, 255, 0.67) 42.92%, rgba(255, 255, 255, 0.55) 47.32%, rgba(255, 255, 255, 0.44) 51.72%, rgba(255, 255, 255, 0.33) 56.12%, rgba(255, 255, 255, 0.23) 60.52%, rgba(255, 255, 255, 0.15) 64.92%, rgba(255, 255, 255, 0.08) 69.32%, rgba(255, 255, 255, 0.03) 73.52%, rgba(255, 255, 255, 0.01) 77.92%, rgba(0, 0, 0, 0) 81.32%)",
        "shadow-gradient-dark": "linear-gradient(90deg, #22212A 3.31%, rgba(34, 33, 42, 0.99) 7.71%, rgba(34, 33, 42, 0.96) 12.11%, rgba(34, 33, 42, 0.93) 20.11%, rgba(34, 33, 42, 0.91) 29.51%, rgba(34, 33, 42, 0.85) 34.11%, rgba(34, 33, 42, 0.76) 38.52%, rgba(34, 33, 42, 0.67) 42.92%, rgba(34, 33, 42, 0.55) 47.32%, rgba(34, 33, 42, 0.44) 51.72%, rgba(34, 33, 42, 0.33) 56.12%, rgba(34, 33, 42, 0.23) 60.52%, rgba(34, 33, 42, 0.15) 64.92%, rgba(34, 33, 42, 0.08) 69.32%, rgba(34, 33, 42, 0.03) 73.52%, rgba(34, 33, 42, 0.01) 77.92%, rgba(0, 0, 0, 0) 81.32%)"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
    themes: {
      light: {
        colors: {
          primary: {
            foreground: "#FFFFFF",
            DEFAULT: "#0000FF"
          },
        }
      },
      dark: {
        colors: {
          background: "#222128",
        }
      }
    }
  })],
}
