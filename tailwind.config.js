/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-coffee': '#b89d89',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
      },
    },
  },
  plugins: [
    
  ],
  corePlugins: {
    preflight: true,
  },
}