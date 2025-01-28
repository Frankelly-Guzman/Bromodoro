/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
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
          medium: "#B50302",
          dark: "#7E0201",
        },
        gray: {
          default: "#1E1E1E"
        },
        orange: {
          default: "#FF890B"
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

