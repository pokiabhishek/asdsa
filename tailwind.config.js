/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#eb6f44',
        secondary:'#314ea2',
      },
      container:{
        padding:'30px',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin-slow 4s linear infinite', // Spin animation for circular movement
        'spin-slow-2s': 'spin-slow 4s linear infinite 2s', // For delayed spinning
        'spin-slow-4s': 'spin-slow 4s linear infinite 7s', // For even more delayed spinning
      },
      keyframes: {
        'spin-slow': {
          '0%': {
            transform: 'rotate(0deg)', // Start rotation
          },
          '100%': {
            transform: 'rotate(360deg)', // End rotation
          },
        },
      }
    },
  },
  plugins: [],
}

