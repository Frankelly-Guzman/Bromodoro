/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    { pattern: /from-(red|blue|purple)-default/ },
    { pattern: /from-(red|blue|purple)-dark/ },
    { pattern: /to-(red|blue|purple)-default/ },
    { pattern: /to-(red|blue|purple)-dark/ },
    { pattern: /bg-(red|blue|purple)-default/ },
    { pattern: /bg-(red|blue|purple)-dark/ },
    { pattern: /bg-(red|blue|purple)/ },
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        red: {
          default: "#FF0200",
          dark: "#7E0201",
        },
        blue: {
          default: "#3169D4",
          dark: "#224A92",
        },
        purple: {
          default: "#59368F",
          dark: "#462b71",
        },
        gray: {
          default: "#1E1E1E",
          dark: "#101010"
        },
        orange: {
          default: "#FF890B"
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

