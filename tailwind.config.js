/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // Deine HTML-Dateien
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        mint: { 500: '#00d28a', 600: '#00b377' },
        flat: { white: '#ffffff', light: '#f4f4f4', gray: '#e0e0e0', darkgray: '#393939', darker: '#161616', black: '#000000' }
      },
      animation: {
        'slow-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  plugins: [],
}