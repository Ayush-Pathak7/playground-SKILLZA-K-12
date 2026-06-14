/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#6C3CE9',
          'purple-light': '#8B5CF6',
          'purple-dark': '#5528C8',
          'purple-bg': '#EDE9FE',
          'purple-glow': '#DDD6FE',
          red: '#C82127',
          'red-dark': '#A81B20',
          yellow: '#F5A623',
          green: '#22C55E',
          blue: '#3B82F6',
          navy: '#1E1B4B',
          grey: '#6B7280',
          'grey-light': '#F3F4F6',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'nav': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'feature': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card': '0 8px 32px rgba(108, 60, 233, 0.15)',
      },
    },
  },
  plugins: [],
}
