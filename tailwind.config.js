/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'md': '768px'
      },
      colors: {
        'coffee': {
          50:'E8D6D0',
          200: '#C89F94',
          400:'#A25F4B',
          600: '#744838'
        },
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        
        fadeIn:{
          from: {opacity: 0},
          to: {opacity: 1}
        }
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
        fadeIn : 'fadeIn 1s ease-in-out'
      },
    },
  },
  plugins: [
    
  ],
  corePlugins: {
    preflight: true,
  },
}