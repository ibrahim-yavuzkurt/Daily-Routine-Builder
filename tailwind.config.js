/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/index.html', './src/renderer/src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Outfit', 'sans-serif']
      },
      colors: {
        ink: {
          950: '#07070d',
          900: '#0c0d16',
          800: '#12131f',
          700: '#1a1c2c'
        },
        accent: {
          DEFAULT: '#6d7cff',
          glow: '#8b5cf6',
          cyan: '#22d3ee'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(109, 124, 255, 0.25)',
        card: '0 18px 50px rgba(0, 0, 0, 0.35)'
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      }
    }
  },
  plugins: []
}
